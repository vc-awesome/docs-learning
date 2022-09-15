## 数据表

### 新建数据表

#### prefix_money_in

```sql
CREATE TABLE `ev_money_in` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `member_id` int(11) DEFAULT NULL,
  `order_num` char(20) DEFAULT NULL COMMENT '系统交易单号',
  `address` varchar(100) DEFAULT NULL COMMENT '用户地址',
  `currency_id` int(11) DEFAULT '1' COMMENT '交易币种',
  `money` decimal(20,8) DEFAULT NULL COMMENT '金额',
  `status` tinyint(1) DEFAULT '0' COMMENT '状态 1为完成 2转账中',
  `hash_fee` varchar(100) DEFAULT NULL COMMENT '手续费交易ID',
  `status_fee` tinyint(1) DEFAULT '0' COMMENT '手续费状态 0未处理 2转手续费 1 手续费到账',
  `fee_money` decimal(20,8) DEFAULT NULL COMMENT '手续费金额',
  `in_hash` varchar(100) DEFAULT NULL COMMENT '转入的交易ID',
  `fromaddress` varchar(100) DEFAULT NULL COMMENT '金额来源地址',
  `all_address` varchar(100) DEFAULT NULL COMMENT '总账户地址',
  `create_time` int(11) DEFAULT NULL COMMENT '创建时间',
  `fee_time` int(11) DEFAULT NULL COMMENT '手续费ID',
  `hash` varchar(100) DEFAULT NULL COMMENT '划款的交易ID',
  `pay_time` int(11) DEFAULT NULL COMMENT '划款时间',
  `num` int(11) DEFAULT NULL,
  `fee_gas` int(10) DEFAULT NULL COMMENT '燃料',
  `input` varchar(255) DEFAULT NULL COMMENT '原始数据',
  `nonce` int(10) DEFAULT '0',
  `is_withdrawal` int(1) DEFAULT '0' COMMENT '是否为提现 0充值 1提现',
  `eth_hash` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  KEY `mid` (`member_id`) USING BTREE,
  KEY `status_free` (`status_fee`) USING BTREE,
  KEY `status` (`status`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=68 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC
```



#### prefix_nonce

```sql
CREATE TABLE `ev_nonce` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `nonce` int(10) unsigned NOT NULL DEFAULT '0',
  `hash` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=138 DEFAULT CHARSET=utf8mb4
```



### 用户表 *prefix_member* 添加字段

```sql
`address` varchar(100) DEFAULT NULL,
`keystore` varchar(255) DEFAULT NULL,
`private_key` varchar(255) DEFAULT NULL,
`eth_pwd` char(6) DEFAULT NULL,
```



### 配置表 *prefix_config* 添加数据

> `code`值：`block_number`  
> `value`值：11809523（为什么这样还要研究）

相应代码在`application\index\controller\Task.php`的59行

```php
if (!empty($val['blockNumber'])) {
    Db::name('config')->where('code', 'block_number')->update(['value' => $val['blockNumber']]);
}
```



## 配置项

> 文件名：`config\eth.php`

通过客户提供并填写配置参数`boss_account`

配置用户表`ev_member` `id`为1的用户并填写配置参数`system_account`

```php
<?php

return [
    // +----------------------------------------------------------------------
    // | 区块设置
    // +----------------------------------------------------------------------

    // 归集地址
    'boss_account'   => '0x9b1a4936fe9b281ff7a8c516ad6365cde98d34fa',
    // 系统账户
    'system_account' => 1,
];
```



## composer package

> `composer require simplito/elliptic-php` 1.0.6  
> `composer require stephenhill/base58` 1.1.5  
> `composer require sc0vu/web3.php` 0.1.4  
> `composer require kornrunner/secp256k1` 0.1.2  
> `composer require guzzlehttp/guzzle` 6.5.5  
> `composer require kornrunner/keccak` 1.0.3  
> `composer require phpseclib/phpseclib` 2.0.3

