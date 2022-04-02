<?php

namespace app\index\controller;

use service\Eth;
use think\Db;

class Index
{
    public function boss()
    {
        $tronInfo = Eth::instance()->createAddress();
        var_dump($tronInfo);
    }

    public function ethAddress($userid)
    {
        $userid = intval($userid);
        $user = Db::name('member')->where('id', $userid)->field('eth_address')->find();
        if (empty($user)) {
            return 'fail';
        }
        if ($user['eth_address']) {
            return 'fail';
        }
        try {
            Db::startTrans();
            $ethInfo = Eth::instance()->createAddress();
            if (false === Db::name('member')->where('id', $userid)->update($ethInfo)) {
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
