<?php


namespace service;

use tron\Credential;
use tron\TronApi;
use tron\TronKit;

class Tron
{

    private $error = null;
    protected static $instance = null;


    /** 单例
     * @return null|Block
     */
    public static function instance()
    {
        if (empty(self::$instance)) {
            self::$instance = new self();
        }
        return self::$instance;
    }

    public function getError()
    {
        return $this->error;
    }

    public function createAddress($Encrypt = true)
    {
        $credential = Credential::create();
        $key = config('tron.key');
        if ($Encrypt) {
            $private_key = Encrypt::authcode($credential->privateKey(), $key, '');
            $public_key = Encrypt::authcode($credential->publicKey(), $key, '');
        } else {
            $private_key = $credential->privateKey();
            $public_key = $credential->publicKey();
        }

        return [
            'tron_private_key' => $private_key,
            'tron_public_key' => $public_key,
            'address' => $credential->address()->base58(),
        ];
    }

    public function getLists($address, $min_block_timestamp)
    {
        $lists = TronApi::mainNet()->getContractEvents($address, 'Transfer', $min_block_timestamp);
        $lists = json_decode(json_encode($lists), true);
        if ($lists['success'] != 'true') {
            return false;
        }
        $data = $lists['data'];
        if ($lists['meta']['page_size'] == '200') {
            $this->getContract($data, $lists['meta']['links']['next']);
        }
        return $data;
    }

    protected function getContract(&$data, $next)
    {
        $content = (new Curl())->get($next);
        $lists = json_decode($content, true);
        if (isset($lists['data']) && is_array($lists['data'])) {
            $data = array_merge($data, $lists['data']);
            if ($lists['meta']['page_size'] == '200') {
                $this->getContract($data, $lists['meta']['links']['next']);
            }
        }
    }

    /**
     * 获取TRX
     */
    public function getTrx($address)
    {
        $kit = new TronKit(
            TronApi::mainNet()
        );
        $Balance = $kit->getTrxBalance($address);
        return bcdiv($Balance, 1000000, 6);
    }


    public function getTrc20($contract, $address)
    {
        $kit = new TronKit(
            TronApi::mainNet(),
            Credential::fromPrivateKey(config('tron.private_key'))
        );
        $usdt = $kit->Trc20($contract);
        $Balance = $usdt->balanceOf($address);
        return bcdiv($Balance, 1000000, 6);
    }

    /**
     * 转TRX
     */
    public function transfer($address, $money)
    {
        $kit = new TronKit(
            TronApi::mainNet(),
            Credential::fromPrivateKey(config('tron.private_key'))
        );
        $amount = bcmul($money, 1000000, 0);
        try {
            $ret = $kit->sendTrx($address, (int)$amount);
            if ($ret->result == 1) {
                return $ret->txid;
            } else {
                exception('转账失败');
            }
        } catch (\Exception $e) {
            exception("转账失败");
        }
    }

    public function transferTrc20($money, $key, $toaddress, $contract = 'TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t')
    {
        $kit = new TronKit(
            TronApi::mainNet(),
            Credential::fromPrivateKey($key)
        );
        $amount = (int)bcmul($money, 1000000, 0);
        try {
            $usdt = $kit->Trc20($contract);
            $ret = $usdt->transfer($toaddress, $amount);
            $ret = json_decode(json_encode($ret), true);
            if ($ret['result']['result'] == true) {
                return $ret['result']['txid'];
            } else {
                exception('转账失败');
            }
        } catch (\Exception $e) {
            exception("转账失败");
        }

    }

    public function getReceipt($txid)
    {
        $res = json_decode(json_encode(TronApi::mainNet()->getTransactionById($txid)), true);
        if ($res['ret'][0]['contractRet'] == 'SUCCESS') {
            return true;
        } else {
            return false;
        }

    }
}