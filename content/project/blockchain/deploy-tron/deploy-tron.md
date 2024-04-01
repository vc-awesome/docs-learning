Linux 系统下稳定，Windows 系统下异常

## 最近使用的项目

> 序号越大表示最新

1. 猎鹰
2. swarm



## 数据表

### ev_money_in_tron

```sql
CREATE TABLE `ev_money_in_tron` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL COMMENT '用户id',
  `order_num` varchar(50) DEFAULT NULL COMMENT '系统交易单号',
  `address` varchar(100) DEFAULT NULL COMMENT '用户地址',
  `currency_id` int(11) DEFAULT '1' COMMENT '交易币种',
  `money` decimal(20,8) DEFAULT NULL COMMENT '金额',
  `status` tinyint(1) DEFAULT '0' COMMENT '状态 0未处理 1为完成 2转账中',
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
  `nonce` int(10) DEFAULT '0',
  `is_withdrawal` int(1) DEFAULT '0' COMMENT '是否为提现',
  `transaction_id` varchar(255) DEFAULT NULL,
  `block_number` varchar(100) DEFAULT NULL,
  `token_address` varchar(255) DEFAULT NULL,
  `relation_id` int(10) unsigned DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  KEY `mid` (`user_id`) USING BTREE,
  KEY `status_free` (`status_fee`) USING BTREE,
  KEY `status` (`status`) USING BTREE,
  KEY `fee_time` (`fee_time`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC
```



## 用户表 *ev_member* 添加字段

```sql
`address` varchar(50) DEFAULT NULL, // 添加为索引
`tron_public_key` varchar(300) DEFAULT NULL,
`tron_private_key` varchar(300) DEFAULT NULL,
```



```php
// 创建`TRC20`地址
file_get_contents('http://45.195.146.155:866/index/index/tronAddress/userid/'. $user['id']);
```



## 配置表 *ev_config* 添加数据

> `code` 值：`block_timestamp`  
> `value` 值：当前时间戳后多加 3 个 0（表示毫秒时间戳）  
> `remark` 值：区块高度

> `code` 值：`block_number`  
> `value` 值：当前区块高度  
> `remark` 值：区块高度

相应代码在 `application\index\controller\Tasktron.php` 的 55 行

```php
if (!empty($val['block_timestamp'])) {
    Db::name('config')->where('code','block_timestamp')->update(['value' => $val['block_timestamp']]);
}
if (!empty($val['block_number'])) {
    Db::name('config')->where('code','tron_block_number')->update(['value' => $val['tron_block_number']]);
}
```

如果没有 `ev_config` 表，创建一个

```sql
CREATE TABLE `ev_config` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '收益配置自增ID',
  `code` varchar(30) NOT NULL,
  `value` text,
  `remark` varchar(100) DEFAULT '解释,备注',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=26 DEFAULT CHARSET=utf8 COMMENT='收益配置表'
```



## 配置项

> 文件名：`config\tron.php`

1. 通过 `application\tron\controller\Index.php` 的 `boss()` 方法获取配置参数
2. 获取到的配置参数对应填写到 `config\tron.php` 的 `address`,`private_key`,`public_key`
3. 通过客户提供并填写配置参数 `boss_address`
4. `key` 保持不变

```php
<?php

return [
    'address'      => '', // 手续费地址（热钱包地址）
    'private_key'  => '',
    'public_key'   => '',
    'key'          => 'Dsad895711',
    'boss_address' => '', // 归集地址
];
```



## 计划任务

> 任务类型：访问 URL  
> 任务名称：`项目名-tron-moneyIn`  
> 执行周期：每 `01` 分钟  
> URL 地址：`http://5gapi.tikwaipro.com/tron/tasktron/moneyIn`

> 任务类型：访问 URL  
> 任务名称：`项目名-tron-toFee`  
> 执行周期：每 `01` 分钟  
> URL 地址：`http://5gapi.tikwaipro.com/tron/tasktron/toFee`

> 任务类型：访问 URL  
> 任务名称：`项目名-tron-checkReceipt`  
> 执行周期：每 `01` 分钟  
> URL 地址：`http://5gapi.tikwaipro.com/tron/tasktron/checkReceipt`

> 任务类型：访问 URL  
> 任务名称：`项目名-tron-transfer`  
> 执行周期：每 `01` 分钟  
> URL 地址：`http://5gapi.tikwaipro.com/tron/tasktron/transfer`



## 执行流程

> 充值流程

1. 检测入金 `moneyIn` 
2. 转手续费 `toFee`
3. 检测手续费是否到账 `checkReceipt`
4. 转账 `transfer`
5. 检测是否转账到账 `checkReceipt`

> 提现流程

1. 后台审核走链
2. 转账 `transfer`
3. 检测是否转账到账 `checkReceipt`



## 测试

> 5G 探索

```php
<?php

return [
    'address'      => 'TVbCSVuMqF3gGxC67wk2bG5hmxJNDU7K5R', // 手续费地址（热钱包地址）
    'private_key'  => '7cd63db8476a195cbc8a9c560f2ce6f3f7781ba1593e51ee84132c6757dbbac2',
    'public_key'   => '0487517ad39dbf55bc7cac18cc2787c241a9a0eb9b9060363811376e238241e80f2c1ac7a6407849c9f922aff05323a2af5ce6201fb7252ad910ea4f6ec3264e5b',
    'key'          => 'Dsad895711',
    'boss_address' => 'TKk1vmxtW5hQo6xc2oL4z7vmwj2aLyFBnW', // 归集地址
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



## 手续费问题

```php
// 每笔订单需要55个波场
$fee = (count($lists) * 5) + 50;
```

