<?php
/**
 * 需要安装扩展scrypt
 */

namespace service;
include EXTEND_PATH . 'eth/autoload.php';

use think\Db;
use Web3\Web3;
use Web3\Utils;
use EthTool\Callback;
use EthTool\Credential;
use EthTool\KeyStore;
use Elliptic\EC;
use kornrunner\Keccak;

class Eth
{
    private $error = null;
    protected static $instance = null;
    const API_KEY = 'Q45HQX5JZDXZPRRW7XKZDF4E1HZVUQGE7D';

    const ETH_URL = 'http://api-cn.etherscan.com/';

    const WEB3_URL = 'https://mainnet.infura.io/v3/55028389de5940059f070e1cc395323e';

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


    /**
     * 创建用户地址
     * @return array
     *'address' => $address, //用户地址
     *'keystore' => $wfn, // 保存地址
     *'private_key' => $privateKey, //密钥
     *'eth_pwd' => $password //密码
     * @throws \Exception
     */
    public function createAddress()
    {
        //随机密码
        $password = rand(100000, 999999);
        $ec = new Ec('secp256k1');
        $keyPair = $ec->genKeyPair();
        $privateKey = $keyPair->getPrivate()->toString(16, 2);
        $publicKey = $keyPair->getPublic()->encode('hex');
        $address = '0x' . substr(Keccak::hash(substr(hex2bin($publicKey), 1), 256), 24);
        $wfn = KeyStore::save($privateKey, $password, '../keystore');
        $key = config('eth.eth_key');
        $password = Encrypt::authcode($password, $key, '');
        $privateKey = Encrypt::authcode($privateKey, $key, '');
        return [
            'eth_address'     => $address, //用户地址
            'eth_keystore'    => $wfn, // 保存地址
            'eth_private_key' => $privateKey, //密钥
            'eth_pwd'         => $password, //密码
        ];

    }

    /**
     * 返回gas
     * @return int|mixed
     */
    public function gasPrice()
    {
        $gasPrice = cache("Eth:gasPrice");
        if ($gasPrice) {
            return $gasPrice;
        }
        $info = json_decode((new Curl())->get(self::ETH_URL . "/api?module=gastracker&action=gasoracle&apikey=" . self::API_KEY), true);
        $gasPrice = 0;
        if ($info['status'] == 1) {
            $gasPrice = $info["result"]['FastGasPrice'];
        }
        if (empty($gasPrice)) {
            $web3 = new Web3(self::WEB3_URL, 10);
            $cb = new Callback;
            $web3->eth->gasPrice($cb);
            $gasPrice = bcdiv($cb->result->value, 1000000000, 0);
            $gasPrice = json_decode($gasPrice, true);
        }

        cache("Eth:gasPrice", $gasPrice, 30);
        return $gasPrice;
    }


    /**获取用户余额
     * @param $address
     * @return string
     */
    public function getBalance($address)
    {
        $web3 = new Web3(self::WEB3_URL, 10);
        $cb = new Callback;
        $web3->eth->getBalance($address, $cb);
        $value = json_decode($cb->result, true);
        return number_format($value / 1000000000000000000, 8, '.', '');
    }

    /**获取用户余额
     * @param $address
     * @return string
     */
    public function getBlockByHash($add)
    {
        $web3 = new Web3(self::WEB3_URL, 10);
        $cb = new Callback;
        $address = '["' . $add . '",true]';
        $web3->eth->getBlockByHash($address, $cb);
        return $cb->result;
    }


    /**
     * 转ETH
     * @param $address 地址
     * @param $password 密码
     * @param $keystore 密钥地址
     * @param $nonce nonce值的最好为递增的值，这个nonce值从0开始计数，发送一笔nonce对应加1
     * @param $money 金额
     * @param int $gasPrice 燃料
     * @return mixed
     * @throws \Exception
     */
    public function transfer($address, $password, $keystore, $money, $nonce, $gasPrice = 2)
    {
        //要转账的金额
        $eth = bcmul($money, 1000000000000000000, 0);
        $web3 = new Web3(self::WEB3_URL, 60);
        $cb = new Callback;

        $credential = Credential::fromWallet($password, $keystore);
        $walletAddress = $credential->getAddress();
        if (empty($nonce)) {
            $web3->eth->getTransactionCount($walletAddress, 'pending', $cb);
            $nonce = $cb->result;
        }

        $toAddress = $address;

        $raw = [
            'nonce' => Utils::toHex($nonce, true),
            'gasPrice' => '0x' . Utils::toWei($gasPrice, 'gwei')->toHex(),
            'gasLimit' => Utils::toHex(21000, true),
            'to' => $toAddress,
            'value' => Utils::toHex($eth, true),
            'data' => '',
            'chainId' => 0x1
        ];
        try {
            $signed = $credential->signTransaction($raw);
            $web3->eth->sendRawTransaction($signed, $cb);
        } catch (\Exception $e) {
            exception($e->getMessage());
        }
        return $cb->result;
    }


    /**
     * 检测转账是否成功
     * @param $txhash 交易hash
     * @return bool
     */
    public function receipt($txhash)
    {
        $cb = new Callback;
        $web3 = new Web3(self::WEB3_URL, 60);
        try {
            $web3->eth->getTransactionReceipt($txhash, $cb);
        } catch (\Exception $e) {
            return false;
        }
        if ($cb->result) {
            if ($cb->result->status == '0x1') {
                return true;
            } else {
                return false;
            }
        }

    }

    public function seedEth($address, $money, $password, $keystore,$gas)
    {

        return $this->transfer($address, $password, $keystore, $money, 0, $gas);
    }


    public
    function gettxreceiptstatus($txhash)
    {
        $url = self::ETH_URL . 'api?module=transaction&action=gettxreceiptstatus&txhash=' . $txhash . '&apikey=' . self::API_KEY;
        $res = (new Curl(20))->get($url);
        $txreceiptinfo = json_decode($res, true);
        if ($txreceiptinfo['status'] == 1 && $txreceiptinfo['result']['status'] == 1) {
            return true;
        } else {
            return false;
        }
    }


    /**
     * 查看区块交易记录
     * @param $token 代币token
     * @param $startblock 开始区块
     */
    public
    function txlist($token)
    {

        $url = self::ETH_URL . 'api?module=account&action=txlist&address=' . $token . '&sort=desc&apikey=' . self::API_KEY;
        $data = (new Curl(20))->get($url);
        return json_decode($data, true);
    }

    public
    function getBlockNumber()
    {
        $cb = new Callback;
        $web3 = new Web3(self::WEB3_URL, 60);
        try {
            $web3->eth->blockNumber($cb);
        } catch (\Exception $e) {
            return false;
        }
        return $cb->result->value;

    }

    public
    function addPreZero($str, $size = 64)
    {
        $length = strlen($str);
        if ($length > $size) {
            return false;
        }
        $add = '';
        for ($i = $length; $i < $size; $i++) {
            $add .= 0;
        }
        return $add . $str;
    }
}