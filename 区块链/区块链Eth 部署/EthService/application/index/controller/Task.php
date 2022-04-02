<?php


namespace app\index\controller;


use service\Encrypt;
use service\Eth;
use think\Db;
use think\facade\Log;

class Task
{
    public function __construct()
    {
        set_time_limit(0);
    }

    /**
     * 检测入账
     *  1分钟一次
     */
    public function moneyIn()
    {
        cache('Task:moneyIn', null);
        $moneyIn = cache('Task:moneyIn');
        if ($moneyIn == 'run') {
            // return;
        }
        cache('Task:moneyIn', 'run');
        $list = Db::name('money_in_eth_check')
            ->limit(50)
            ->select();
        // 处理数据
        foreach ($list as $k => $vo) {
            $txlist = Eth::instance()->txlist($vo['address']);

            if (empty($txlist['result'])) {
                Db::name('money_in_eth_check')->where('id', $vo['id'])->delete();
                continue;
            }
            foreach ($txlist['result'] as $v) {
                if ($v['to'] != $vo['address']) {
                    continue;
                }
                if ($v['input'] != '0x') {
                    continue;
                }
                // 已经入账的不能再次
                $money_in_info = Db::name('money_in_eth')->where('transaction_id', $v['hash'])->find();
                if ($money_in_info) {
                    break;
                }
                $money = bcdiv($v['value'], 1000000000000000000, 8);
                $in_data = [
                    'user_id'        => $vo['user_id'],
                    'address'        => config('eth.boss_address'),
                    'currency_id'    => 2,
                    'money'          => $money,
                    'status_fee'     => 1,
                    'transaction_id' => $v['hash'],
                    'create_time'    => time(),
                ];
                try {
                    Db::startTrans();

                    $res = Db::name('money_in_eth')->insert($in_data);
                    if ($res === false) {
                        exception('插入数据错误');
                    }
                    /**
                     * 在此处给用户加入金额 -- start
                     * $vo['user_id'] 用户id
                     * $money 金额
                     */

                    # 获取用户余额
                    $coin = Db::name('MemberCoin')->where(['m_id' => $in_data['user_id']])->find();
                    # 增加充值金额
                    $aa = Db::name('MemberCoin')->where(['m_id' => $in_data['user_id']])->setInc('eth', $money);
                    if (!$aa) { // 失败时抛出
                        Db::rollback();
                        exception('系统入账错误');
                    }
                    # 增加记录
                    $info = [
                        'm_id'     => $in_data['user_id'],
                        'title'    => '充值',
                        'type'     => 1,
                        's_price'  => $money + $coin['eth'],
                        'price'    => abs($money),
                        'admin_id' => $in_data['user_id'],
                        'remark'   => 13,
                        'adddate'  => date('Y-m-d', time()),
                        'addtime'  => date('Y-m-d H:i:s', time()),
                    ];
                    $bb = Db::name('PriceEInfo')->insert($info);
                    if (!$bb) { // 失败时抛出
                        Db::rollback();
                        exception('系统入账错误');
                    }

                    /**
                     * 在此处给用户加入金额 -- end
                     */
                } catch (\Exception $e) {
                    Db::rollback();
                    return $e->getMessage();
                }
                Db::commit();
            }
            Db::name('money_in_eth_check')->where('id', $vo['id'])->delete();
        }

        cache('Task:moneyIn', null);
    }

    /**
     * 转账
     */
    public function transfer()
    {
        $lists = Db::name('money_in_eth')
            ->where('status', 0)
            ->where('status_fee', 1)
            ->limit(5)
            ->select();
        if (empty($lists)) {
            return;
        }

        foreach ($lists as $key => $value) {
            sleep(2);
            $address = $value['address'];
            $gas = Eth::instance()->gasPrice();
            $gasvalue = (21.1 * $gas);
            $gasvalue = bcdiv($gasvalue, 1000000, 8);
            if ($value['is_withdrawal'] == 1) {

                // 获取用户信息
                $system_account = config()['eth'];
                $password = Encrypt::authcode($system_account['eth_pwd'], config('eth.eth_key'));
                $user['keystore'] = $system_account['keystore'];
                $balance = Eth::instance()->getBalance($system_account['address']);
                if ($balance < ($value['money'] + $gasvalue)) {
                    break;
                }
                $truemoney = $value['money'];
            } else {

                // 获取用户信息---这里要改
                $user = Db::name('member')
                    ->where('id', $value['user_id'])
                    ->field('eth_address,eth_pwd,eth_keystore')
                    ->find();
                $user['keystore'] = $user['eth_keystore'];
                $password = Encrypt::authcode($user['eth_pwd'], config('eth.eth_key'));

                $truemoney = bcsub($value['money'], $gasvalue, 8);
            }

            try {
                $txid = Eth::instance()->seedEth($address, $truemoney, $password, $user['keystore'], $gas);
            } catch (\Exception $e) {
                echo $e->getMessage();
                Db::name('money_in_eth')
                    ->where('id', $value['id'])
                    ->update(['num' => $value['num'] + 1]);
                continue;
            }
            if ($txid) {
                if ($value['is_withdrawal'] == 1) {
                    // 区块链提现中

                }
                Db::name('money_in_eth')
                    ->where('id', $value['id'])
                    ->update(
                        [
                            'status'   => 2,
                            'hash'     => $txid,
                            'pay_time' => time()
                        ]);
                unset($txid);
            } else {
                Log::error($value['id'] . '更新数据失败：' . $txid);
                continue;
            }
        }
    }


    /**
     * 检测是否转账到账
     */
    public function checkReceipt()
    {
        // 检测转账到总账户是否到账，到账入金
        $boss = Db::name('money_in_eth')
            ->where('status', 2)
            ->where('status_fee', 1)
            ->limit(20)
            ->select();
        if ($boss) {
            foreach ($boss as $k => $vo) {
                $end = (time() - $vo['pay_time']);
                if (($end > 3600) && $vo['is_withdrawal'] == 1) {
                    sleep(1);
                    if (false === Eth::instance()->gettxreceiptstatus($vo['hash'])) {
                        Db::name('money_in')
                            ->where('id', $vo['id'])
                            ->where('status', 2)
                            ->update(['status' => 0, 'pay_time' => time()]);

                        continue;
                    }
                }
                $is_true = Eth::instance()->receipt($vo['hash']);

                if ($is_true) {
                    Db::startTrans();
                    try {
                        if ($vo['is_withdrawal'] == 1) {
                            /**
                             * 提现成功要更新的状态 -- start
                             * $vo['user_id'] 用户id
                             * $money 金额
                             * $order_num 提现唯一单号
                             */

                            Db::name('MemberWithdraw')->where(['sn'=>$vo['order_num']])->update(['status'=>1]);

                            /**
                             * 提现成功要更新的状态 -- end
                             */
                        }
                        if (false === Db::name('money_in_eth')->where('id', $vo['id'])->update(['status' => 1])) {
                            exception('更新状态错误');
                        }
                    } catch (\Exception $e) {
                        Db::rollback();
                        return false;
                    }
                    Db::commit();
                }
            }
        }

    }

}