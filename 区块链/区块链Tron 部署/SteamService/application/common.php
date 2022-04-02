<?php
// +----------------------------------------------------------------------
// | ThinkPHP [ WE CAN DO IT JUST THINK ]
// +----------------------------------------------------------------------
// | Copyright (c) 2006-2016 http://thinkphp.cn All rights reserved.
// +----------------------------------------------------------------------
// | Licensed ( http://www.apache.org/licenses/LICENSE-2.0 )
// +----------------------------------------------------------------------
// | Author: 流年 <liu21st@gmail.com>
// +----------------------------------------------------------------------
use think\Db;
// 应用公共文件
//用户账户变动日志
function setUserWalletLog($userid,$from_user,$amount,$get_type,$status,$types,$comment,$log_id = 0,$release_id = 0){
    try{
        $insData = [
            'userid'        =>  $userid,
            'from_user'     =>  $from_user,
            'amount'        =>  $amount,
            'create_time'   =>  time(),
            'get_type'      =>  $get_type,
            'status'        =>  $status,
            'types'         =>  $types,
            'comment'       =>  $comment,
            'log_id'        =>  $log_id,
            'release_id'    =>  $release_id
        ];
        Db::name('wallet_log')->insert($insData);
        return true;
    }catch(\Exception $e){
        throw $e;
    }
}

//转账记录
function setWalletTransferLog($userid,$type,$toUser,$from_address,$to_address,$amount,$fee,$number,$is_exchange = 0){
    try{
        $insData = [
            'userid'        =>  $userid,
            'to_userid'     =>  $toUser,
            'type'          =>  $type,
            'from_address'  =>  $from_address,
            'to_address'    =>  $to_address,
            'create_time'   =>  time(),
            'amount'        =>  $amount,
            'fee'           =>  $fee,
            'number'        =>  $number,
            'hash'          =>  createHash(),
            'block_height'  =>  Db::name('coin')->where(['title' => 'bed'])->value("block_number"),
            'is_exchange'  =>  $is_exchange
        ];
        $logID = Db::name("transfer")->insertGetId($insData);
        return $logID;
    }catch(\Exception $e){
        throw $e;
    }
}

function createHash(){
    try{
        $str = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ" ;
        $key  =  "" ;
        for ( $i =0; $i < 64 ; $i ++)
        {
            $key  .=  $str {mt_rand(0,16)};     //生成php随机数
        }
        return  "bed".hash("sha256",$key) ;
    }catch(\Exception $e){
        throw $e;
    }
}


/**
 * 系统加密方法
 * @param string $data 要加密的字符串
 * @param string $key 加密密钥
 * @param int $expire 过期时间 (单位:秒)
 * @return string
 */
function thinkEncrypt($data, $key, $expire = 0)
{
    $key = md5($key);
    $data = base64_encode($data);
    $x = 0;
    $len = strlen($data);
    $l = strlen($key);
    $char = '';
    for ($i = 0; $i < $len; $i++) {
        if ($x == $l) $x = 0;
        $char .= substr($key, $x, 1);
        $x++;
    }
    $str = sprintf('%010d', $expire ? $expire + time() : 0);
    for ($i = 0; $i < $len; $i++) {
        $str .= chr(ord(substr($data, $i, 1)) + (ord(substr($char, $i, 1))) % 256);
    }
    return str_replace('=', '', base64_encode($str));
}

/**
 * 系统解密方法
 * @param string $data 要解密的字符串 （必须是think_encrypt方法加密的字符串）
 * @param string $key 加密密钥
 * @return string
 */
function thinkDecrypt($data, $key)
{
    $key = md5($key);
    $x = 0;
    $data = base64_decode($data);
    $expire = substr($data, 0, 10);
    $data = substr($data, 10);
    if ($expire > 0 && $expire < time()) {
        return '';
    }
    $len = strlen($data);
    $l = strlen($key);
    $char = $str = '';
    for ($i = 0; $i < $len; $i++) {
        if ($x == $l) $x = 0;
        $char .= substr($key, $x, 1);
        $x++;
    }
    for ($i = 0; $i < $len; $i++) {
        if (ord(substr($data, $i, 1)) < ord(substr($char, $i, 1))) {
            $str .= chr((ord(substr($data, $i, 1)) + 256) - ord(substr($char, $i, 1)));
        } else {
            $str .= chr(ord(substr($data, $i, 1)) - ord(substr($char, $i, 1)));
        }
    }
    return base64_decode($str);
}