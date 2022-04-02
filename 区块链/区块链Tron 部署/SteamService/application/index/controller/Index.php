<?php

namespace app\index\controller;

use service\Tron;
use think\Db;

class Index
{

    public function boss()
    {
        $tronInfo = Tron::instance()->createAddress(false);
        var_dump($tronInfo);
    }

    public function tronAddress($userid)
    {
        $userid = intval($userid);
        $user = Db::name('member')->where("id", $userid)->field('address')->find();
        if (empty($user)) {
            return 'fail';
        }
        if ($user['address']) {
            return 'fail';
        }
        try {
            Db::startTrans();
            $tronInfo = Tron::instance()->createAddress();
            if (Db::name('member')->where("id", $userid)->update($tronInfo) === false) {
                exception("更新地址失败");
            }

        } catch (\Exception $e) {
            Db::rollback();
            return $e->getMessage();
        }
        Db::commit();
        return 'ok';
    }
}
