<?php


namespace app\index\controller;


use service\Encrypt;
use service\Tron;
use think\Db;
use think\facade\Log;
use tron\Address;

class Tasktron
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
        cache("Tasktron:moneyIn", null);
        $moneyIn = cache("Tasktron:moneyIn");
        if ($moneyIn == 'run') {
            return 1;
        }
        cache("Tasktron:moneyIn", 'run');
        //区块开始高度
        $startblock = Db::name('config')->where('code', 'block_timestamp')->value('value');
        $token = 'TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t';
        $list = Tron::instance()->getLists($token, $startblock);
        if (empty($list)) {
            cache("Tasktron:moneyIn", null);
            return '2';
        }
        dump($list);
        $where = [];
        $place = 1000000;
        //处理数据
        foreach ($list as $k => $val) {
            $address = '41' . substr($val['result']['to'], 2);
            $where[$k] = Address::encode($address);
            $data[$k] = [
                'transaction_id' => $val['transaction_id'],
                'money' => bcdiv($val['result']['value'], $place, 8),
                'fromaddress' => Address::encode('41' . substr($val['result']['from'], 2)),
                'block_number' => $val['block_number']
            ];
        }

        if (!empty($val['block_timestamp'])) {

            Db::name('config')->where('code', 'block_timestamp')->update(['value' => $val['block_timestamp']]);
        }

        $member_list = Db::name('member')->whereIn('address', $where)->field('address,id')->select();

        if (!empty($member_list)) {
            foreach ($member_list as $v) {
                //获取需要入账key
                $key_list = array_keys($where, $v['address']);
                //给会员入账
                foreach ($key_list as $val_key) {
                    $indata = $data[$val_key];
                    $indata['create_time'] = time();
                    $indata['token_address'] = $v['address'];
                    $indata['address'] = config('tron.boss_address');
                    $indata['user_id'] = $v['id'];
                    $money = $indata['money'];
                
                    //已经入账的不能再次
                    $money_in_info = Db::name('money_in_tron')->where('hash', $data[$val_key]['transaction_id'])->find();

                    if ($money_in_info) {
                        continue;
                    }

                    try {

                        Db::startTrans();

                        $res = Db::name('money_in_tron')->insert($indata);

                        if (!$res) {
                            exception("插入错误4");
                        }
                        //在此处给用户加入金额
                        // 增加账户金额
                        $member_id = $v['id'];
                        $usdt_balance = Db::name('member_wallet')->where('member_id', $member_id)->value('price_i_info');
                        $price_data = [
                            'type' => 1,
                            'member_id' => $member_id,
                            'title' => 'USDT充值', // USDT充值
                            'title_en' => 'USDT Recharge', // USDT充值
                            'remark' => 60,
                            's_price' => $usdt_balance + $money,
                            'price' => $money,
                            'admin_id' => $member_id,
                        ];
                        // 更新账户余额
                        Db::name('member_wallet')->where('member_id', $member_id)->setInc('price_i_info', $money);
                        // 添加日志记录
                        $result_bool = Db::name('price_i_info')->insert($price_data);
                        if (!$result_bool) {
                            Db::rollback();
                            return '系统入账错误';
                        }
                        
                        
                    } catch (\Exception $e) {
                        Db::rollback();
                        return $e->getMessage();
                    }
                    Db::commit();

                }
            }
        }
        cache("Tasktron:moneyIn", null);
    }

    /**
     * 提交手续费
     */
    public function toFee()
    {
        $lists = Db::name("money_in_tron")->where("status", 0)->where("status_fee", 0)->limit(30)->select();
        if (empty($lists)) {
            return;
        }
        $fee = (count($lists) * 5) + 50;
        //查看总账户的TRX金额
        $balance = Tron::instance()->getTrx(config('tron.address'));

        if ($balance < $fee) {
            //这里最好发送短信或者邮箱通知
            Log::error("手续费不足");
            return '手续费不足';
        }
        foreach ($lists as $key => $value) {
            //转手续费的用户信息
            $user = Db::name("member")->where('id', $value['user_id'])->field('address')->find();
            //给用户转手续费、
            Db::startTrans();

            try {
                $txid = Tron::instance()->transfer($user['address'], 5);
                $data = [
                    'fee_money' => 5,//转账的手续费
                    'status_fee' => 2,
                    'hash_fee' => $txid,
                    'fee_gas' => 0,
                    'fee_time' => time()
                ];
                Db::name("money_in_tron")->where('id', $value['id'])->update($data);
            } catch (\Exception $e) {
                Db::rollback();
                return $e->getMessage();
            }
            Db::commit();
        }
    }

    /**
     * 转账
     */
    public function transfer()
    {
        $lists = Db::name("money_in_tron")->where("status", 0)->where("status_fee", 1)->limit(30)->select();
        if (empty($lists)) {
            return;
        }
        foreach ($lists as $key => $value) {

            if ($value['is_withdrawal'] == 1) {
               $balance = Tron::instance()->getTrc20('TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t', config('tron.address'));
                if ($balance < $value['money']) {
                    continue;
                }
                $key = config('tron.private_key');
            } else {
                $private_key = Db::name("member")->where('id', $value['user_id'])->value('tron_private_key');
                if (empty($private_key)) {
                    continue;
                }
                $Encryptkey = config('tron.key');
                $key = Encrypt::authcode($private_key, $Encryptkey);
            }
            try {
                $txid = Tron::instance()->transferTrc20($value['money'], $key, $value['address']);
            } catch (\Exception $e) {
                echo $e->getMessage() . $e->getLine() . $e->getFile();
                Db::name("money_in_tron")->where("id", $value['id'])->update(['num' => $value['num'] + 1]);
                continue;
            }
            if ($txid) {
                if ($value['is_withdrawal'] == 1) {
                    //区块链提现中
                   
                   
                   
                }
                Db::name("money_in_tron")->where("id", $value['id'])->update(['status' => 2, 'hash' => $txid, 'pay_time' => time()]);
                unset($txid);
            } else {
                Log::error($value['id'] . "更新数据失败：" . $txid);
                continue;
            }
        }
    }

    /**
     * 检测是否转账到账
     */
    public function checkReceipt()
    {

        //检测手续费是否到账
        $lists = Db::name("money_in_tron")->where("status", 0)->where("status_fee", 2)->limit(30)->select();
        if ($lists) {
            foreach ($lists as $key => $value) {

                $is_true = Tron::instance()->getReceipt($value['hash_fee']);
                if ($is_true) {
                    Db::name("money_in_tron")->where("id", $value['id'])->update(['status_fee' => 1, 'status' => 0, 'fee_time' => time()]);
                }
            }
        }
        //检测转账到总账户是否到账，到账入金
        $boss = Db::name("money_in_tron")->where("status", 2)->where("status_fee", 1)->limit(30)->select();
        if ($boss) {
            foreach ($boss as $k => $vo) {
                $is_true = Tron::instance()->getReceipt($vo['hash']);
                if ($is_true) {
                    Db::startTrans();
                    try {
                        if ($vo['is_withdrawal'] == 1) {
                            //提现成功
                            
                            // 获取提币信息
                            $withdraw_coin_info = Db::name('withdraw_coin')
                                ->where('member_id', $vo['member_id'])
                                ->where('order_num', $vo['order_num'])
                                ->field('id,status')
                                ->find();
                            if ($withdraw_coin_info['status'] != 3) {
                                // 在此处更新提币表状态信息
                                $withdraw_coin_update_data = [
                                    'txid' => $vo['hash'],
                                    'status' => 3,
                                    'finish_time' => time()
                                ];
                                // 获取提币`id`
                                $withdraw_coin_id = $withdraw_coin_info['id'];
                                // 更新提币信息
                                Db::name('withdraw_coin')
                                    ->where('id', $withdraw_coin_id)
                                    ->data($withdraw_coin_update_data)
                                    ->update();
                                // 新增数据
                                $data = [
                                    'type' => 0,
                                    'member_id' => $vo['member_id'],
                                    'title' => '提币成功',
                                    'title_en' => 'Successful withdrawal',
                                    'remark' => 51,
                                    's_price' => $vo['money'],
                                    'price' => $vo['money'],
                                    'admin_id' => 0,
                                    'en_title' => $withdraw_coin_id,
                                ];
                                // 添加日志记录
                                Db::name('price_i_info')->insert($data);
                            }
                            
                        }
                        if (Db::name("money_in_tron")->where("id", $vo['id'])->update(['status' => 1]) === false) {
                            exception("更新状态错误");
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