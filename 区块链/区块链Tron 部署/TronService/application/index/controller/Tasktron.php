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
        cache('Tasktron:moneyIn', null);
        $moneyIn = cache('Tasktron:moneyIn');
        if ($moneyIn == 'run') {
            return 1;
        }
        cache('Tasktron:moneyIn', 'run');
        //区块开始高度
        $startblock = Db::name('config')->where('code', 'block_timestamp')->value('value');
        $token = 'TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t';
        $list = Tron::instance()->getLists($token, $startblock);
        if (empty($list)) {
            cache('Tasktron:moneyIn', null);
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
                'money'          => bcdiv($val['result']['value'], $place, 8),
                'fromaddress'    => Address::encode('41' . substr($val['result']['from'], 2)),
                'block_number'   => $val['block_number']
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
                            exception('插入错误4');
                        }

                        /**
                         * 需要添加的逻辑代码
                         * 在此处给用户加入充值USDT金额
                         * -- begin
                         */
                        # 获取用户余额
                        $coin = Db::name('MemberCoin')->where(['m_id' => $indata['user_id']])->find();
                        # 增加充值金额
                        $aa = Db::name('MemberCoin')->where(['m_id' => $indata['user_id']])->setInc('usdt', $money);
                        if (!$aa) { // 失败时抛出
                            Db::rollback();
                            return '系统入账错误';
                        }
                        # 增加记录
                        $info = array(
                            "m_id"     => $indata['user_id'],
                            "title"    => '充值',
                            "type"     => 1,
                            "s_price"  => $money + $coin['usdt'],
                            "price"    => abs($money),
                            "admin_id" => $indata['user_id'],
                            "remark"   => 13,
                            "adddate"  => date("Y-m-d", time()),
                            "addtime"  => date("Y-m-d H:i:s", time()),
                        );
                        $bb = Db::name('PriceUInfo')->insert($info);
                        if (!$bb) { // 失败时抛出
                            Db::rollback();
                            return '系统入账错误';
                        }

                        $result_bool = true;
                        if (!$result_bool) { // 失败时抛出
                            Db::rollback();
                            return '系统入账错误';
                        }
                        /**
                         * 在此处给用户加入充值USDT金额
                         * -- end
                         */

                    } catch (\Exception $e) {
                        Db::rollback();
                        return $e->getMessage();
                    }
                    Db::commit();

                }
            }
        }
        cache('Tasktron:moneyIn', null);
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
        $fee = (count($lists) * 1) + 10;
        //查看总账户的TRX金额
        $balance = Tron::instance()->getTrx(config('tron.address'));
        // halt($balance);

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
                    'fee_money'  => 5,
                    //转账的手续费
                    'status_fee' => 2,
                    'hash_fee'   => $txid,
                    'fee_gas'    => 0,
                    'fee_time'   => time()
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
                    dump($balance);
                    return '归集地址余额不足';
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
                    /**
                     * 需要添加的逻辑代码
                     * 区块链提现中（提现状态为同步区块中）
                     * -- begin
                     */

                    # 这个就是改变 money_in_tron 状态就可以了  我就直接用这个表了


                    /**
                     * 区块链提现中
                     * -- end
                     */


                }
                Db::name("money_in_tron")->where("id", $value['id'])->update([
                    'status'   => 2,
                    'hash'     => $txid,
                    'pay_time' => time()
                ]);
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
                    Db::name("money_in_tron")->where("id", $value['id'])->update([
                        'status_fee' => 1,
                        'status'     => 0,
                        'fee_time'   => time()
                    ]);
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

                            /**
                             * 需要添加的逻辑代码
                             * 提现成功（提现状态为提现成功）
                             * -- begin
                             */


                            Db::name('MemberWithdraw')->where(['sn' => $vo['order_num']])->update(['status' => 1]);


                            /**
                             * 提现成功
                             * -- end
                             */
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