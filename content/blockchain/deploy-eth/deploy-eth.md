Linux系统下稳定，Windows系统下异常

## php 安装 scrypt 扩展

[pecl][pecl]

[宝塔][bt]

[pecl]: https://pecl.php.net/package/scrypt
[bt]: https://www.bt.cn/bbs/forum.php?mod=viewthread&amp;tid=10153



## 数据表

### ev_money_in_eth

```sql
CREATE TABLE `ev_money_in_eth`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NULL DEFAULT NULL,
  `order_num` char(20) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '系统交易单号',
  `address` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '用户地址',
  `currency_id` int(11) NULL DEFAULT 1 COMMENT '交易币种',
  `money` decimal(20, 8) NULL DEFAULT NULL COMMENT '金额',
  `status` tinyint(1) NULL DEFAULT 0 COMMENT '状态 1为完成 2转账中',
  `hash_fee` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '手续费交易ID',
  `status_fee` tinyint(1) NULL DEFAULT 0 COMMENT '手续费状态 0未处理 2转手续费 1 手续费到账',
  `fee_money` decimal(20, 8) NULL DEFAULT NULL COMMENT '手续费金额',
  `in_hash` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '转入的交易ID',
  `fromaddress` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '金额来源地址',
  `all_address` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '总账户地址',
  `create_time` int(11) NULL DEFAULT NULL COMMENT '创建时间',
  `fee_time` int(11) NULL DEFAULT NULL COMMENT '手续费ID',
  `hash` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '划款的交易ID',
  `pay_time` int(11) NULL DEFAULT NULL COMMENT '划款时间',
  `num` int(11) NULL DEFAULT NULL,
  `fee_gas` int(10) NULL DEFAULT NULL COMMENT '燃料',
  `nonce` int(10) NULL DEFAULT 0,
  `is_withdrawal` int(1) NULL DEFAULT 0 COMMENT '是否为提现',
  `transaction_id` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `block_number` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `token_address` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `relation_id` int(10) UNSIGNED NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `mid`(`user_id`) USING BTREE,
  INDEX `status_free`(`status_fee`) USING BTREE,
  INDEX `status`(`status`) USING BTREE,
  INDEX `fee_time`(`fee_time`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = DYNAMIC;
```



### ev_money_in_eth_check

```sql
CREATE TABLE `ev_money_in_eth_check`  (
  `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NULL DEFAULT NULL,
  `address` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `user_id`(`user_id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;
```



## 用户表 *ev_member* 添加字段

```sql
`eth_address` varchar(100) DEFAULT NULL COMMENT '以太坊地址', // 添加为索引
`eth_keystore` varchar(255) DEFAULT NULL COMMENT '以太坊保存地址'
`eth_private_key` varchar(255) DEFAULT NULL COMMENT '以太坊密钥',
`eth_pwd` varchar(50) DEFAULT NULL COMMENT '以太坊密码',
```

```php
// 创建`ETH`地址
file_get_contents('http://45.195.146.155:866/index/index/ethAddress/userid/'. $user['id']);
```



## 配置项

> 文件名：`config\eth.php`

1. 通过`application\index\controller\Index.php`的`boss()`方法获取配置参数
2. 获取到的配置参数对应填写到`config\eth.php`的`address`,`keystore`,`eth_pwd`
3. 通过客户提供并填写配置参数`boss_address`
4. `eth_key`保持不变

```php
<?php

return [
    'address'      => '', // 手续费地址（热钱包地址）
    'keystore'     => '',
    'eth_pwd'      => '',
    'eth_key'      => 'werwqesd45',
    'boss_address' => '', // 归集地址
];

```

## 计划任务

`nait`-以太坊(moneyIn)  
http://117.18.6.79:8866/index/task/moneyIn

`nait`-以太坊(transfer)  
http://117.18.6.79:8866/index/task/transfer

`nait`-以太坊(checkReceipt)  
http://117.18.6.79:8866/index/task/checkReceipt

## 执行流程

> 充值流程

1. 检测入金`moneyIn` 
2. 转手续费`toFee`
3. 检测手续费是否到账`checkReceipt`
4. 转账`transfer`
5. 检测是否转账到账`checkReceipt`

> 提现流程

1. 后台审核走链
2. 转账`transfer`
3. 检测是否转账到账`checkReceipt`

后台审核走链

```php
$money_in_insert_data = [
    'user_id'       => $mw['m_id'], // *用户id
    'order_num'     => $mw['sn'], // *提币单号（用于判断提现表的唯一）
    'address'       => $mw['address'], // *提币地址
    'money'         => $mw['real_money'], // *提币数量
    'status_fee'    => 1, // 手续费状态 0未处理 2转手续费 1手续费到账
    'fromaddress'   => 'TWuG4q3yLURUyi763SKQzK1LuAYjRbRAmj', // 归集地址
    'create_time'   => time(),
    'is_withdrawal' => 1, // 是否为提币 1是 0否
];
$rs[] = M('MoneyInEth')->data($money_in_insert_data)->add();
```



## 测试

> 5G探索

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

