<?php

namespace app\index\controller;

use service\Tron;
use think\Db;

class Index
{
    /**
     * 创建手续费地址
     */
    public function boss()
    {
        $tronInfo = Tron::instance()->createAddress(false);
        var_dump($tronInfo);
    }

    /**
     * 创建用户地址
     * @param $userid
     * @return string
     */
    public function tronAddress($userid)
    {
        $userid = intval($userid);
        $user = Db::name('member_tron')->where('member_id', $userid)->field('address')->find();
        if (empty($user)) {
            return 'fail';
        }
        if ($user['address']) {
            return 'fail';
        }
        try {
            Db::startTrans();
            $tronInfo = Tron::instance()->createAddress();
            if (Db::name('member_tron')->where('member_id', $userid)->update($tronInfo) === false) {
                exception('更新地址失败');
            }

        } catch (\Exception $e) {
            Db::rollback();
            return $e->getMessage();
        }
        Db::commit();
        return 'ok';
    }
}
