## 🔥 基础数据表/ basic

**DDL**

```sql
CREATE TABLE `表名` (
	`id` INT ( 11 ) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '自增id',
	`type` TINYINT ( 1 ) NOT NULL DEFAULT '0' COMMENT '类型',
	`user_id` INT ( 10 ) UNSIGNED NOT NULL DEFAULT '0' COMMENT '用户id',
	`money` DECIMAL ( 28, 8 ) NOT NULL DEFAULT '0.0000' COMMENT '金额',
	`rate` DECIMAL ( 15, 8 ) NOT NULL DEFAULT '0.0000' COMMENT '比率',
	`admin_id` INT ( 11 ) NOT NULL DEFAULT '0' COMMENT '管理员id',
	`status` TINYINT ( 11 ) NOT NULL DEFAULT '1' COMMENT '状态',
	`create_time` INT ( 11 ) UNSIGNED NOT NULL DEFAULT '0' COMMENT '创建时间',
	`update_time` INT ( 11 ) UNSIGNED NOT NULL DEFAULT '0' COMMENT '更新时间',
PRIMARY KEY ( `id` ) 
) ENGINE = INNODB DEFAULT CHARSET = utf8 COMMENT = '表注释';
```



**status 使用场景**

1. user 表，是否启用 0-否，1-是
2. 审核类型的状态，0-待审核，1-审核通过，2-审核驳回



| 字段名        | 数据类型              | 注释                       |
| ------------- | --------------------- | -------------------------- |
| serial_number | varchar(255) NOT NULL | 序列号（设置唯一索引）     |
| data          | varchar(255)          |                            |
| create_at     | int                   | 创建时间（在什么时候创建） |
| update_at     | int                   | 更新时间（在什么时候更新） |
| create_by     | varchar               | 创建人                     |
| update_by     | varchar               | 更新人                     |
| delete_time   | int                   | 删除时间                   |
| stats_time    | int                   | 统计时间                   |
| send_time     | int                   | 发放时间                   |
| reward_time   | int                   | 奖励时间                   |
| execute_time  | int                   | 执行时间                   |



------

`income_log` 收益记录表

`income_invite_log` 推荐收益记录表

`income_grade_log` 等级收益记录表

`income_group_log` 拼团收益记录表



## 🔥 会员表/ user|member

| 序号 | 注释                                                         | 字段名                                               | 类型（长度） | NULL                          |
| ---- | ------------------------------------------------------------ | ---------------------------------------------------- | ------------ | ----------------------------- |
| 1    | 用户名                                                       | member_name<br />member_account<br />member_username | varchar(50)  | NOT NULL                      |
| 2    | 真实姓名                                                     | member_truename                                      | varchar(20)  |                               |
| 3    | 昵称                                                         | member_nickname                                      | varchar(20)  |                               |
| 4    | 会员头像                                                     | member_avatar                                        | varchar(255) |                               |
| 5    | 实名认证状态<br /> 0默认<br />1审核中<br />2未通过<br />3已认证 | member_auth_state                                    | tinyint(1)   | unsigned NOT NULL DEFAULT '0' |
| 6    | 会员身份                                                     | member_identity                                      | varchar(255) |                               |
| 7    | 实名认证身份证号                                             | member_idcard<br />member_identity                   | varchar(255) |                               |
| 8    | 手持身份证照                                                 | member_idcard_image1                                 | varchar(255) |                               |
| 9    | 身份证正面照                                                 | member_idcard_image2                                 | varchar(255) |                               |
| 10   | 身份证反面照                                                 | member_idcard_image3                                 | varchar(255) |                               |
| 11   | 图片 url 地址                                                | member_image_src                                     | varchar(255) |                               |
| 12   | 登录密码                                                     | member_login_password                                | varchar(32)  |                               |
| 13   | 支付密码                                                     | member_payment_password<br />member_paypwd           | varchar(32)  |                               |
| 14   | 安全密码                                                     | member_security_password                             | varchar(32)  |                               |
| 15   | 会员邮箱                                                     | member_email                                         | varchar(50)  |                               |
| 16   | 手机号码                                                     | member_mobile                                        | varchar(11)  |                               |



member_addtime [int(11)] 会员注册时间

telephone|phone_number 电话|电话号码

member_sex|member_gender [tinyint 1 || enum] 会员性别（0保密1男2女）

member_birthday [int(11) NULL] 会员生日

member_area_info [varchar(255) NULL] 会员所在地区内容

is_merchant 是否商户

collection_qrcode 收款二维码

personal_number 个人编号

team_number 团队编号

company_id 公司id

company_name 公司名称

**create_channel varchar(10) NOT NULL DEFAULT 'user' COMMENT '注册渠道，user-用户，admin-后台，import-导入'**

**status COMMENT '状态 0禁用 1正常'**

**create_time 创建时间（默认为0）**

**update_time 更新时间（默认为0）**

**delete_time 删除时间（默认为0）**



### 区块

`member_wallet_name` [varchar(50) NOT NULL] 钱包名称

`member_mnemonic` [varchar(255) NOT NULL] 助记词

`member_eth_private_key` [varchar(64) NOT NULL] ETH私钥

`member_unique_address` [varchar(32) NOT NULL] 系统唯一地址



### 登录

**member_loginnum [int(11) NOT NULL] 会员登录次数**

**member_logintime [int(11) NULL] 会员当前登录时间**

**member_old_logintime [int(11) NULL] 会员上次登录时间**

**member_login_ip [varchar(20) NULL] 会员当前登录IP**

**member_old_login_ip [int(11) NULL] 会员上次登录IP**



### 统计

`member_grade_valid_count` [int(10) unsigned NOT NULL DEFAULT '0'] 会员直推有效人数

`member_first_valid_num` int(10) unsigned NOT NULL DEFAULT '0' COMMENT 会员直推有效人数

`member_performance` decimal(20,2) unsigned NOT NULL DEFAULT '0.00' COMMENT '会员业绩'

`member_team_performance` decimal(20,2) unsigned NOT NULL DEFAULT '0.00' COMMENT '会员团队业绩'

`member_static_profit` decimal(20,4) unsigned DEFAULT '0.0000' COMMENT '会员静态收益'

`member_dynamic_profit` decimal(20,4) unsigned DEFAULT '0.0000' COMMENT '会员动态收益'

###  层级

**floor int(10) unsigned NOT NULL DEFAULT '1' COMMENT '会员楼层(级)'**

**level int(11) unsigned NOT NULL DEFAULT '0' COMMENT '层数'**

**pid int(11) unsigned NOT NULL DEFAULT '0' COMMENT '父级id（默认为0）'**

**pid_set [text] 会员所有上级id集合 格式：,1,2,3,4,逗号开始，逗号结尾**

**path [text] 上下级关系**

all_floor/floor_all 所有层

first_floor/floor1 第一层

second_floor/floor2 第二层

third_floor/floor3 第三层

three_tier_team/floor_team3 第一层至第三层

team_floor/floor_team 团队层

first_floor_level_one_number/floor1_level1_people 直推认证会员人数

first_floor_level_two_number/floor1_level2_people 直推vip会员人数

first_floor_level_three_number/floor1_level3_people 直推尊享会员人数

first_floor_agent_one_number/floor1_agent1_people 直推初级代理商人数

first_floor_agent_two_number/floor1_agent2_people 直推高级代理商人数

first_floor_agent_three_number/floor1_agent3_people 直推尊享代理商人数

member_initial_inviter_id [int(11) unsigned NULL] 初始的邀请人id

member_initial_parents_inviter_id [text NULL] 初始的所有上级的id

member_inviter_id [int(11)] 邀请人id

referrer_id 推荐人id

member_parents_inviter_id [text] 会员所有上级邀请人的id集合（parents命名参考jQuery）

member_childrens_id [text] 会员所有下级的id集合

inviter 邀请者;招待者

invitee 受邀者;被邀请人

inviter_code /invitation_code 邀请码

inviter_mobile /invitation_mobile 邀请人手机号



### 等级

**`member_level|member_grade|member_vip` [tinyint(1) unsigned NOT NULL DEFAULT '0'] 用户等级（0注册会员）**

`member_bonus_grade_set` [varchar(200) DEFAULT NULL] COMMENT '会员奖金等级集合 格式：0,1,2,3,4 表示1级0个，2级1个，3级2个...以此类推'

`agent_level|agent_grade|member_agent_grade` [tinyint(1) unsigned NOT NULL DEFAULT '0'] 代理等级

`team_level|member_team_grade` [tinyint(1) unsigned NOT NULL DEFAULT '0'] 会员团队等级（0默认）



------



1. 注册用户/普通

2. gold 黄金

3. diamond 钻石

4. crow 皇冠

 

------



1. 注册用户/普通

2. 会员

3. 团长

4. 掌柜

5. 合伙人

6. 总经理

7. BOSS




------



1. 注册用户/普通

2. VIP

3. 超级VIP




------



1. 普通节点 Normal node
2. 超级节点 Super node
3. 全网节点 Network node



------



1. 原子节点
2. 分子节点
3. 元素节点



------



1. 普通工会
2. 青铜工会
3. 白银工会
4. 黄金工会
5. 钻石工会
6. 王者工会




## 用户相关数据统计/ user_stats

```sql
CREATE TABLE `un_user_statistics` (
 `id` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '统计自增id',
 `user_id` int(11) unsigned NOT NULL COMMENT '用户id',
 `children_count` int(11) unsigned NOT NULL DEFAULT '0' COMMENT '直推人数',
 `gbzz_balance` decimal(20,4) NOT NULL DEFAULT '0.0000' COMMENT 'gbzz余额',
 `qbzz_balance` decimal(20,4) NOT NULL DEFAULT '0.0000' COMMENT 'qbzz余额',
 `usdt_balance` decimal(20,4) NOT NULL DEFAULT '0.0000' COMMENT 'usdt余额',
 `create_time` int(11) unsigned NOT NULL DEFAULT '0' COMMENT '创建时间',
 `update_time` int(11) unsigned NOT NULL DEFAULT '0' COMMENT '更新时间',
 PRIMARY KEY (`id`),
 UNIQUE KEY `user_id` (`user_id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='用户相关数据统计';
```

 

## 用户登录记录表/ user_login

`id` 自增id

`user_id` 用户id

`ip` ip地址（定位不精准）

`mobile_device` 手机设备（通过uni-app获取并传参）

`user_agent` 用户代理（浏览器）（不精准）

地点（经纬度）（通过uni-app获取并传参）

 

```sql
CREATE TABLE `un_user_login` (
 `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
 `user_id` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '用户id',
 `ip` varchar(255) COLLATE utf8_unicode_ci NOT NULL COMMENT 'ip地址',
 `user_agent` varchar(255) COLLATE utf8_unicode_ci NOT NULL COMMENT '用户代理',
 `create_time` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '创建时间',
 PRIMARY KEY (`id`),
 KEY `user_id` (`user_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='用户登录记录表';
```

 

## 用户注册记录表/ user_register

```sql
CREATE TABLE `rocket_user_reg_info` (
 `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
 `userid` int(11) DEFAULT NULL,
 `brand` varchar(20) DEFAULT NULL,
 `model` varchar(20) DEFAULT NULL,
 `system` varchar(20) DEFAULT NULL,
 `platform` varchar(20) DEFAULT NULL,
 `latitude` varchar(50) DEFAULT NULL,
 `longitude` varchar(50) DEFAULT NULL,
 `uuid` varchar(50) DEFAULT NULL,
 `imei` varchar(50) DEFAULT NULL,
 `imsi` varchar(50) DEFAULT NULL,
 `vendor` varchar(50) DEFAULT NULL,
 `ip` varchar(50) DEFAULT NULL,
 `dev_info` varchar(500) DEFAULT NULL,
 `create_time` int(11) DEFAULT NULL,
 PRIMARY KEY (`id`) USING BTREE,
 KEY `userid` (`userid`) USING BTREE,
 KEY `uuid` (`uuid`) USING BTREE,
 KEY `ip` (`ip`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;
```

 

## 用户收款账户表/ user_bank

```sql
CREATE TABLE `un_user_bank` (
	`id` INT ( 11 ) NOT NULL AUTO_INCREMENT COMMENT '主键ID',
	`type` VARCHAR ( 10 ) NOT NULL DEFAULT 'bank' COMMENT 'bank银行 alipay 支付宝收款',
	`truename` VARCHAR ( 20 ) NOT NULL COMMENT '收款方真实姓名',
	`name` VARCHAR ( 20 ) NOT NULL DEFAULT '' COMMENT '收款银行',
	`card_no` VARCHAR ( 30 ) NOT NULL COMMENT '收款银行卡号/支付宝账户',
	`user_id` INT ( 11 ) NOT NULL COMMENT '所属用户id',
PRIMARY KEY ( `id` ) 
) ENGINE = INNODB DEFAULT CHARSET = utf8 COMMENT = '用户收款账户表';
```

 

## 银行账户/ bank

* `bank_account_name` 开户名

* `bank_card_number` varchar(50) NULL DEFAULT NULL 开户卡号/ 银行卡号

* `bank_name` varchar(100) NULL DEFAULT NULL 开户行
* `image_url` varchar(255) NULL DEFAULT NULL 收款码

`bank_branch` 开户支行

 

## 资产账户/ account

account

id

user_id

account_bean 云豆账户

account_treasure 云宝账户

create_time

 

## 账户日志/ account_log

云豆账户日志

account_bean_log

id

user_id

amount

balance

account_type

flag

description

from_id

create_time

------

云宝账户日志

account_treasure_log

capital 资本，启动资金

balance 余额

income 收益

summary 汇总

close 结清

transfer 转移

handing_fee 手续费

integral 积分

------

online 上线

offline 下线

withdrawal 取款

reject 拒绝

refuse 拒绝

 

------

expire 到期

overdue 逾期

 

------

wallet 钱包

currency 货币

wallet_address 钱包地址（USDT）

\- 格式：42位0x开头0x258F9769Edd6957d1c1Cd25F265e9FDEDD0C00FC

exchange 交易；兑换

 

------

transfer 转出

exchange 划转

convert 兑换

 

------

article 文章

 

------

商城类

activity 活动

brand 品牌

category 分类

goods 商品

\- goods_storage 商品库存

 

quantity 数量

amount 金额

 

payee 收款人

 

launch 投放

duration 期间

platform 平台

link 链接

date 日期

time 时间

 

site 网站

captcha 验证码

 

initial 最初的；初始的

 

## 配置参数表/ config

config [配置参数表] -from ds_shop

id [ smallint(5) NOT NULL AUTO_INCREMENT ]

code [ varchar(30) NOT NULL ]

value [ text ]

remark [ varchar(100) DEFAULT '解释,备注' ]

 

## 商品分类/ category

id [ int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '商品分类自增ID' ]

parent_id [ int(10) unsigned NOT NULL DEFAULT '0' COMMENT '商品分类上级ID' ]

icon [ varchar(100) NOT NULL COMMENT '商品分类图标' ]

name [ varchar(100) NOT NULL COMMENT '商品分类名称' ]

sort [ TINYINT(3) UNSIGNED NOT NULL DEFAULT '255' COMMENT '商品分类排序' ]

show [ tinyint(1) NOT NULL DEFAULT '1' COMMENT '商品分类前台显示 0:否 1:是' ]

status [ tinyint(1) NOT NULL DEFAULT '1' COMMENT '商品分类状态 0:关闭 1:开启' ]

create_time 

update_time 

 

## 商品表/ goods

`id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '商品自增ID(SKU)',

`name` VARCHAR(200) NOT NULL COMMENT '商品名称+规格名称',

`advword` VARCHAR(150) DEFAULT NULL COMMENT '商品广告词',

`body` TEXT COMMENT '商品内容',

`c_id` INT(10) UNSIGNED NOT NULL COMMENT '商品分类ID',

`price` DECIMAL(10,2) NOT NULL COMMENT '商品价格',

`promotion_price` DECIMAL(10,2) NOT NULL DEFAULT '0.00' COMMENT '商品促销价格',

`promotion_type` TINYINT(3) UNSIGNED NOT NULL DEFAULT '0' COMMENT '促销类型 0:无促销 1:抢购 2:限时折扣',

`marketprice` DECIMAL(10,2) DEFAULT NULL COMMENT '商品市场价',

`storage_alarm` TINYINT(3) UNSIGNED NOT NULL DEFAULT '0' COMMENT '商品库存报警值',

`click` INT(10) UNSIGNED NOT NULL DEFAULT '0' COMMENT '商品点击数量',

`salenum` INT(10) UNSIGNED NOT NULL DEFAULT '0' COMMENT '商品销售数量',

`collect` INT(10) UNSIGNED NOT NULL DEFAULT '0' COMMENT '商品收藏数量',

`storage` INT(10) UNSIGNED NOT NULL DEFAULT '0' COMMENT '商品库存',

`image` VARCHAR(100) DEFAULT '' COMMENT '商品主图',

`lock` TINYINT(3) UNSIGNED DEFAULT '0' COMMENT '商品锁定 0未锁，1已锁',

`state` TINYINT(3) UNSIGNED DEFAULT '0' COMMENT '商品状态 10:存入仓库 1:正常',

`create_time` INT(10) UNSIGNED NOT NULL COMMENT '商品添加时间',

`update_time` INT(10) UNSIGNED NOT NULL COMMENT '商品编辑时间',

`delete_time` INT(10) UNSIGNED NOT NULL COMMENT '商品删除时间',

`freight` DECIMAL(10,2) UNSIGNED NOT NULL DEFAULT '0.00' COMMENT '运费 0:免运费',

`is_commend` TINYINT(3) UNSIGNED NOT NULL DEFAULT '0' COMMENT '商品推荐 1:是 0:否',

`is_promotion` TINYINT(3) unsigned NOT NULL DEFAULT '0' COMMENT '商品精选 1:是 0:否',

`platform_price` 平台销售价格

`market_price` 市场销售价格

`virtual_price` 虚拟销售价格

 

## 商品表的补充信息表/ goods_ext

`id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '商品自增ID(SKU)',

`goods_id` INT(10) UNSIGNED NOT NULL COMMENT '商品ID',

 

## 订单表/ order

id

order_num 订单号

goods_id 商品id

quantity 订单数量

status 待发货，待收货，已完成

create_time

update_time

delivery_time 发货时间

 

## 收货地址表/ address

```sql
CREATE TABLE `bitex_address` (
	`id` MEDIUMINT ( 10 ) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '地址ID',
	`userid` MEDIUMINT ( 10 ) UNSIGNED NOT NULL DEFAULT '0' COMMENT '会员ID',
	`realname` VARCHAR ( 50 ) NOT NULL COMMENT '会员姓名',
	`province_id` MEDIUMINT ( 9 ) DEFAULT NULL COMMENT '市级ID',
	`city_id` MEDIUMINT ( 9 ) DEFAULT NULL COMMENT '市级ID',
	`area_id` MEDIUMINT ( 10 ) UNSIGNED NOT NULL DEFAULT '0' COMMENT '地区ID',
	`area_info` VARCHAR ( 255 ) NOT NULL DEFAULT '' COMMENT '地区内容',
	`detail` VARCHAR ( 255 ) NOT NULL COMMENT '详细地址',
	`tel_phone` VARCHAR ( 20 ) DEFAULT NULL COMMENT '座机',
	`mob_phone` VARCHAR ( 15 ) DEFAULT NULL COMMENT '手机',
	`is_default` enum ( '0', '1' ) NOT NULL DEFAULT '0' COMMENT '1默认收货地址',
	`longitude` VARCHAR ( 20 ) DEFAULT '' COMMENT '经度',
	`latitude` VARCHAR ( 20 ) DEFAULT '' COMMENT '纬度',
	`create_time` INT ( 10 ) UNSIGNED DEFAULT '0' COMMENT '添加时间',
	`update_time` INT ( 10 ) UNSIGNED DEFAULT '0' COMMENT '更新时间',
	PRIMARY KEY ( `id` ),
KEY `userid` ( `userid` ) 
) ENGINE = INNODB AUTO_INCREMENT = 2 DEFAULT CHARSET = utf8 COMMENT = '买家地址信息表'
```

 

## 购物车表/ cart

```sql
CREATE TABLE `bitex_cart` (
	`id` INT ( 11 ) NOT NULL AUTO_INCREMENT COMMENT '购物车自增ID',
	`userid` INT ( 11 ) UNSIGNED NOT NULL DEFAULT '0' COMMENT '买家ID',
	`g_id` INT ( 11 ) UNSIGNED NOT NULL DEFAULT '0' COMMENT '商品ID',
	`g_name` VARCHAR ( 200 ) NOT NULL COMMENT '商品名称',
	`g_price` DECIMAL ( 10, 2 ) NOT NULL DEFAULT '0.00' COMMENT '商品价格',
	`g_num` SMALLINT ( 5 ) UNSIGNED NOT NULL DEFAULT '1' COMMENT '商品数量',
	`g_image` VARCHAR ( 100 ) DEFAULT NULL COMMENT '商品图片',
	PRIMARY KEY ( `id` ),
KEY `userid` ( `userid` ) 
) ENGINE = INNODB DEFAULT CHARSET = utf8 COMMENT = '购物车数据表';
```

 

## 货币表/ currency

```sql
CREATE TABLE `ev_currency` (
	`id` INT ( 10 ) UNSIGNED NOT NULL AUTO_INCREMENT,
	`name` VARCHAR ( 32 ) NOT NULL,
	`price` DECIMAL ( 20, 4 ) UNSIGNED NOT NULL DEFAULT '0.0000',
	`status` TINYINT ( 1 ) UNSIGNED NOT NULL DEFAULT '1',
	`create_time` INT ( 10 ) UNSIGNED DEFAULT NULL,
	`update_time` INT ( 10 ) UNSIGNED DEFAULT NULL,
PRIMARY KEY ( `id` ) 
) ENGINE = MyISAM AUTO_INCREMENT = 1 DEFAULT CHARSET = utf8 COMMENT = '币种表';
```

 

## 钱包表/ wallet

```sql
CREATE TABLE `ev_wallet` (
	`id` INT ( 10 ) UNSIGNED NOT NULL AUTO_INCREMENT,
	`member_id` INT ( 10 ) UNSIGNED NOT NULL,
	`currency_id` INT ( 10 ) UNSIGNED NOT NULL,
	`money` DECIMAL ( 20, 4 ) NOT NULL DEFAULT '0.0000',
	`create_time` INT ( 10 ) UNSIGNED DEFAULT NULL,
	`update_time` INT ( 10 ) UNSIGNED DEFAULT NULL,
PRIMARY KEY ( `id` ) 
) ENGINE = INNODB AUTO_INCREMENT = 1 DEFAULT CHARSET = utf8 COMMENT = '钱包表';
```

 

## 🔥 配套投资表/ package

> 字段内容也可用于矿机表

| 字段名      | 注释                 |
| ----------- | -------------------- |
| id          |                      |
| image       | 图片                 |
| name        | 名称                 |
| price       | 价格                 |
| storage     | 库存                 |
| profit      | 收益                 |
| limit       | 限购数量             |
| period      | 周期（持续时间）/天  |
| duration    | 持续时间（周期）/天  |
| day_yield   | 日产量/枚            |
| start_time  | 开始时间             |
| end_time    | 结束时间             |
| channel     | 渠道，1-赠送，2-购买 |
| status      | 状态                 |
| create_time | 创建时间             |
| update_time | 更新时间             |
| delete_time | 删除时间             |

 

DDL

```sql
CREATE TABLE `ev_package` (
	`id` INT ( 11 ) NOT NULL AUTO_INCREMENT,
	`package_image` VARCHAR ( 255 ) DEFAULT NULL COMMENT '配套图片',
	`package_name` VARCHAR ( 255 ) NOT NULL COMMENT '配套名称',
	`package_price` DECIMAL ( 10, 2 ) NOT NULL COMMENT '配套价格',
	`package_storage` INT ( 10 ) UNSIGNED NOT NULL DEFAULT '0' COMMENT '配套库存',
	`package_period` TINYINT ( 3 ) UNSIGNED NOT NULL COMMENT '配套周期/天',
	`package_profit_rate` DECIMAL ( 10, 2 ) NOT NULL COMMENT '配套总收益',
	`package_channel` TINYINT ( 4 ) NOT NULL DEFAULT '1' COMMENT '配套购买渠道 0为赠送 1为购买',
	`package_limit` INT ( 10 ) UNSIGNED NOT NULL COMMENT '配套限购数量',
	`package_addtime` INT ( 11 ) DEFAULT NULL COMMENT '配套添加时间',
	`package_updatetime` INT ( 11 ) DEFAULT NULL COMMENT '配套更新时间',
	`package_status` TINYINT ( 1 ) DEFAULT '1' COMMENT '配套开启状态 1为开启 0为关闭',
	`package_delete` INT ( 11 ) NOT NULL DEFAULT '0' COMMENT '配套删除状态 1为删除 0为正常',
PRIMARY KEY ( `id` ) 
) ENGINE = INNODB AUTO_INCREMENT = 1 DEFAULT CHARSET = utf8 COMMENT = '配套投资表';
```



## 手机短信记录表/ sms_log

```sql
CREATE TABLE `ev_sms_log` (
	`id` INT ( 10 ) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '短信记录自增ID',
	`phone` CHAR ( 11 ) NOT NULL COMMENT '短信手机号',
	`captcha` CHAR ( 6 ) NOT NULL COMMENT '短信动态码',
	`ip` VARCHAR ( 15 ) NOT NULL COMMENT '短信请求IP',
	`msg` VARCHAR ( 300 ) NOT NULL COMMENT '短信内容',
	`type` TINYINT ( 1 ) UNSIGNED NOT NULL DEFAULT '1' COMMENT '短信类型:1为注册,2为登录,3为找回密码,4绑定手机,5安全验证,默认为1',
	`create_time` INT ( 10 ) UNSIGNED NOT NULL COMMENT '短信添加时间',
	`member_id` INT ( 10 ) UNSIGNED DEFAULT '0' COMMENT '短信会员ID,注册为0',
	PRIMARY KEY ( `id` ),
KEY `phone` ( `phone` ) 
) ENGINE = INNODB AUTO_INCREMENT = 1 DEFAULT CHARSET = utf8 COMMENT = '手机短信记录表';
```

 

// 改进

```sql
CREATE TABLE `skyb_sms_log` (
	`id` INT ( 11 ) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '自增id',
	`mobile` VARCHAR ( 11 ) COLLATE utf8_unicode_ci NOT NULL COMMENT '手机号',
	`captcha` VARCHAR ( 6 ) COLLATE utf8_unicode_ci NOT NULL COMMENT '动态码',
	`msg` VARCHAR ( 255 ) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '短信内容',
	`scene` VARCHAR ( 50 ) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '短信场景',
	`create_time` INT ( 11 ) NOT NULL COMMENT '创建时间',
	`type` TINYINT ( 3 ) UNSIGNED NOT NULL DEFAULT '1' COMMENT '短信类型:1为注册,2为登录,3为找回密码,4绑定手机,5安全验证,默认为1',
	PRIMARY KEY ( `id` ),
KEY `mobile` ( `mobile` ) 
) ENGINE = MyISAM DEFAULT CHARSET = utf8 COLLATE = utf8_unicode_ci COMMENT = '手机短信记录表';
```

 

## 邮件记录表/ email_log

```sql
CREATE TABLE `un_email_log` (
	`id` INT ( 11 ) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '自增id',
	`email` VARCHAR ( 100 ) COLLATE utf8_unicode_ci NOT NULL COMMENT '手机号',
	`captcha` VARCHAR ( 6 ) COLLATE utf8_unicode_ci NOT NULL COMMENT '动态码',
	`msg` VARCHAR ( 255 ) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '短信内容',
	`create_time` INT ( 11 ) NOT NULL COMMENT '创建时间',
	`type` TINYINT ( 3 ) UNSIGNED NOT NULL DEFAULT '1' COMMENT '短信类型:1为注册,2为登录,3为找回密码,4绑定手机,5安全验证,默认为1',
	PRIMARY KEY ( `id` ) USING BTREE,
KEY `email` ( `email` ) USING BTREE 
) ENGINE = MyISAM AUTO_INCREMENT = 1 DEFAULT CHARSET = utf8 COLLATE = utf8_unicode_ci COMMENT = '邮件记录表';
```

 

## 🔥 矿机表/ mining_machine

以下为可选数据表字段

| 字段名            | 数据类型                                         | 注释                           |
| ----------------- | ------------------------------------------------ | ------------------------------ |
| image             | varchar(255) DEFAULT NULL                        | 图片                           |
| name              | varchar(255) DEFAULT NULL                        | 名称                           |
| price             | decimal(10,2) DEFAULT NULL                       | 价格                           |
| storage           | int(10) unsigned NOT NULL DEFAULT '0'            | 库存                           |
| duration          | int(10) unsigned NOT NULL DEFAULT '0'            | 有效期/天                      |
| min_profit_amount | int(10) unsigned NOT NULL DEFAULT '0'            | 最小收益数量                   |
| max_profit_amount | int(10) unsigned NOT NULL DEFAULT '0'            | 最大收益数量                   |
| min_profit_rate   | decimal(5,2) unsigned NOT NULL DEFAULT '0.00'    | 最小收益率                     |
| max_profit_rate   | decimal(5,2) unsigned NOT NULL DEFAULT '0.00'    | 最大收益率                     |
| min_amount        | decimal(14,4) unsigned NOT NULL DEFAULT '0.0000' | 最小数量                       |
| max_amount        | decimal(14,4) unsigned NOT NULL DEFAULT '0.0000' | 最大数量                       |
| limit             | int(10) unsigned NOT NULL DEFAULT '0'            | 限购数量                       |
| is_display        | tinyint(3) unsigned NOT NULL DEFAULT '1'         | 是否前端显示，0-不显示，1-显示 |
| profit_rate       | decimal(10,2) DEFAULT NULL                       | 配套月收益/%                   |
| profit_text       | varchar(255) DEFAULT NULL                        | 前端显示收益率                 |
| status            | tinyint(1) DEFAULT '1'                           | 状态，1-为开启，0-为关闭       |
| create_time       | int(11) DEFAULT '0'                              | 创建时间                       |
| update_time       | int(11) DEFAULT '0'                              | 更新时间                       |
| delete_time       | int(11) DEFAULT '0'                              | 删除时间                       |



## 🔥 会员矿机表/ user_machine

以下为可选数据表字段

| 字段名            | 数据类型                              | 注释                     |
| ----------------- | ------------------------------------- | ------------------------ |
| **serial_number** | varchar(255) NOT NULL                 | 序列号 设置唯一索引      |
| **orderno**       | varchar(255) NOT NULL                 | 订单编号 设置唯一索引    |
| times             | int(10) unsigned NOT NULL DEFAULT '0' | 产出次数                 |
| from_user_id      | int(11) DEFAULT '0'                   | 管理员id，0-会员端购买   |
| status            | tinyint(1) DEFAULT '1'                | 状态，1-为开启，0-为关闭 |
| create_time       | int(11) DEFAULT '0'                   | 创建时间                 |
| release_time      | int(11) DEFAULT '0'                   | 释放时间                 |
| output_time       | int(11) DEFAULT '0'                   | 产出时间                 |



```sql
CREATE TABLE `ev_user_machine` (
	`id` INT ( 11 ) NOT NULL AUTO_INCREMENT,
	`user_id` INT ( 11 ) NOT NULL DEFAULT '0' COMMENT '用户id',
	`machine_id` INT ( 11 ) NOT NULL DEFAULT '0' COMMENT '矿机id',
	`channel` TINYINT ( 4 ) NOT NULL DEFAULT '1' COMMENT '购买渠道 0为赠送 1为购买',
	`status` TINYINT ( 1 ) DEFAULT '1' COMMENT '开启状态 1为开启 0为关闭',
	`create_time` INT ( 11 ) DEFAULT NULL DEFAULT '0' COMMENT '添加时间',
	`update_time` INT ( 11 ) DEFAULT NULL DEFAULT '0' COMMENT '更新时间',
	`delete_time` INT ( 11 ) NOT NULL DEFAULT '0' COMMENT '删除时间',
PRIMARY KEY ( `id` ) 
) ENGINE = INNODB AUTO_INCREMENT = 1 DEFAULT CHARSET = utf8 COMMENT = '用户矿机表';
```

 

## OTC交易表/ trade

```sql
CREATE TABLE `un_trade` (
	`id` INT ( 11 ) NOT NULL AUTO_INCREMENT COMMENT '自增id',
	`type` TINYINT ( 1 ) NOT NULL DEFAULT '0' COMMENT '类型 0挂卖 1挂买',
	`receipt_account` CHAR ( 10 ) NOT NULL DEFAULT '0' COMMENT '收款帐户 1支付宝 2微信 3银行卡',
	`user_id` INT ( 11 ) UNSIGNED NOT NULL COMMENT '用户id',
	`unit_price` DECIMAL ( 20, 4 ) UNSIGNED NOT NULL DEFAULT '0.0000' COMMENT '单价',
	`amount` DECIMAL ( 20, 4 ) UNSIGNED NOT NULL DEFAULT '0.0000' COMMENT '数量',
	`total_price` DECIMAL ( 20, 2 ) UNSIGNED NOT NULL DEFAULT '0.00' COMMENT '总金额',
	`total_amount` DECIMAL ( 20, 4 ) UNSIGNED NOT NULL DEFAULT '0.0000' COMMENT '总数量',
	`handling_fee` DECIMAL ( 20, 4 ) UNSIGNED NOT NULL DEFAULT '0.0000' COMMENT '平台服务费/%',
	`status` INT ( 1 ) NOT NULL DEFAULT '1' COMMENT '0售完 1出售中 2挂卖取消',
	`canceller_id` INT ( 11 ) DEFAULT '0' COMMENT '取消用户id',
	`create_time` INT ( 10 ) UNSIGNED NOT NULL DEFAULT '0' COMMENT '添加时间',
	`update_time` INT ( 10 ) UNSIGNED NOT NULL DEFAULT '0' COMMENT '更新时间',
	`cancel_time` INT ( 10 ) UNSIGNED DEFAULT '0' COMMENT '取消时间',
	`end_time` INT ( 10 ) UNSIGNED DEFAULT '0' COMMENT '售完时间',
	PRIMARY KEY ( `id` ),
UNIQUE KEY `uk_userid_create_ime` ( `userid`, `create_time` ) USING BTREE COMMENT '防并发新增' 
) ENGINE = INNODB DEFAULT CHARSET = utf8 COMMENT = 'otc交易表';
```

 

## OTC交易订单表/ trade_order

```sql
CREATE TABLE `un_trade_order` (
	`id` INT ( 11 ) NOT NULL AUTO_INCREMENT,
	`type` TINYINT ( 1 ) UNSIGNED NOT NULL DEFAULT '0' COMMENT '类型 0购买挂卖 1出售挂买',
	`receipt_account` CHAR ( 10 ) NOT NULL COMMENT '收款帐户 1支付宝 2微信 3银行卡',
	`order_number` VARCHAR ( 50 ) NOT NULL COMMENT '交易订单号',
	`market_id` INT ( 11 ) NOT NULL COMMENT '挂卖单id',
	`member_id` INT ( 11 ) NOT NULL COMMENT '购买者id',
	`seller_id` INT ( 11 ) NOT NULL COMMENT '挂卖者id',
	`operate_id` INT ( 11 ) DEFAULT NULL,
	`admin_id` INT ( 11 ) DEFAULT NULL,
	`unit_price` DECIMAL ( 20, 4 ) NOT NULL DEFAULT '0.0000' COMMENT '单价',
	`amount` DECIMAL ( 20, 4 ) NOT NULL COMMENT '数量',
	`total_price` DECIMAL ( 20, 2 ) NOT NULL COMMENT '总金额/CNY',
	`pay_type` TINYINT ( 1 ) DEFAULT NULL COMMENT '支付方式',
	`pay_account_number` VARCHAR ( 100 ) DEFAULT NULL COMMENT '支付帐号',
	`certificate_pic` VARCHAR ( 255 ) DEFAULT NULL COMMENT '交易凭证路径',
	`status` INT ( 11 ) NOT NULL,
	`add_date` date NOT NULL COMMENT '添加日期',
	`add_time` datetime NOT NULL COMMENT '添加时间',
	`pay_date` date DEFAULT NULL COMMENT '支付日期',
	`pay_time` datetime DEFAULT NULL COMMENT '支付时间',
	`end_date` date DEFAULT NULL COMMENT '结束日期',
	`end_time` datetime DEFAULT NULL COMMENT '结束时间',
	`cancel_date` date DEFAULT NULL COMMENT '取消日期',
	`cancel_time` datetime DEFAULT NULL COMMENT '取消时间',
	`arbitrate_date` date DEFAULT NULL COMMENT '仲裁日期',
	`arbitrate_time` datetime DEFAULT NULL COMMENT '仲裁时间',
PRIMARY KEY ( `id` ) 
) ENGINE = INNODB DEFAULT CHARSET = utf8;
```

 

## 后台操作日志表/ admin_log

```sql
CREATE TABLE `un_admin_log` (
	`id` INT ( 10 ) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '管理员记录自增ID',
	`admin_id` MEDIUMINT ( 8 ) UNSIGNED NOT NULL DEFAULT '0' COMMENT '管理员ID',
	`url` VARCHAR ( 50 ) NOT NULL DEFAULT '' COMMENT 'controller/action',
	`method` VARCHAR ( 10 ) NOT NULL COMMENT '请求方式',
	`data` text NOT NULL COMMENT '管理员操作IP',
	`create_time` INT ( 10 ) UNSIGNED DEFAULT NULL COMMENT '发生时间',
	`ip` CHAR ( 15 ) NOT NULL COMMENT '管理员操作IP',
	`dev_info` VARCHAR ( 255 ) NOT NULL COMMENT '设备信息',
	`content` VARCHAR ( 255 ) DEFAULT NULL COMMENT '操作内容',
PRIMARY KEY ( `id` ) USING BTREE 
) ENGINE = INNODB AUTO_INCREMENT = 1 DEFAULT CHARSET = utf8 ROW_FORMAT = DYNAMIC COMMENT = '管理员操作日志';
```

 

## 后台用户组表/ auth_group

```sql
CREATE TABLE `un_auth_group` (
	`id` MEDIUMINT ( 8 ) UNSIGNED NOT NULL AUTO_INCREMENT,
	`title` CHAR ( 100 ) NOT NULL DEFAULT '',
	`status` TINYINT ( 1 ) NOT NULL DEFAULT '1',
	`rules` text NOT NULL,
PRIMARY KEY ( `id` ) USING BTREE 
) ENGINE = INNODB AUTO_INCREMENT = 3 DEFAULT CHARSET = utf8mb4 ROW_FORMAT = DYNAMIC COMMENT = '用户组表';
```

 

## 后台用户组明细表/ auth_group_access

```sql
CREATE TABLE `un_auth_group_access` (
	`uid` MEDIUMINT ( 8 ) UNSIGNED NOT NULL,
	`group_id` MEDIUMINT ( 8 ) UNSIGNED NOT NULL,
	UNIQUE KEY `uid_group_id` ( `uid`, `group_id` ) USING BTREE,
	KEY `uid` ( `uid` ) USING BTREE,
KEY `group_id` ( `group_id` ) USING BTREE 
) ENGINE = INNODB DEFAULT CHARSET = utf8mb4 ROW_FORMAT = DYNAMIC COMMENT = '权限分配表';
```

 

## 后台规则表/ auth_rule

```sql
CREATE TABLE `un_auth_rule` (
	`id` MEDIUMINT ( 8 ) UNSIGNED NOT NULL AUTO_INCREMENT,
	`name` CHAR ( 80 ) NOT NULL DEFAULT '',
	`title` VARCHAR ( 80 ) NOT NULL DEFAULT '',
	`type` TINYINT ( 1 ) NOT NULL DEFAULT '1',
	`status` TINYINT ( 1 ) NOT NULL DEFAULT '1',
	`condition` CHAR ( 100 ) NOT NULL DEFAULT '',
	`pid` TINYINT ( 4 ) NOT NULL DEFAULT '0',
	`sort` TINYINT ( 3 ) UNSIGNED NOT NULL DEFAULT '99' COMMENT '排序，数值越小越靠前',
	`is_menu` TINYINT ( 1 ) UNSIGNED NOT NULL DEFAULT '0',
	`icon` VARCHAR ( 20 ) NOT NULL DEFAULT '',
PRIMARY KEY ( `id` ) USING BTREE 
) ENGINE = INNODB AUTO_INCREMENT = 136 DEFAULT CHARSET = utf8mb4 ROW_FORMAT = DYNAMIC COMMENT = '权限规则表';
```

 

## 提币表/ withdraw_coin

```sql
CREATE TABLE `ev_withdraw_coin` (
	`id` INT ( 10 ) UNSIGNED NOT NULL AUTO_INCREMENT,
	`member_id` INT ( 10 ) UNSIGNED NOT NULL COMMENT '会员id',
	`symbol` CHAR ( 10 ) NOT NULL COMMENT '币种名称',
	`order_num` CHAR ( 20 ) DEFAULT NULL COMMENT '系统交易单号',
	`amount` DECIMAL ( 18, 4 ) NOT NULL DEFAULT '0.0000' COMMENT '数量',
	`fee` DECIMAL ( 18, 4 ) NOT NULL DEFAULT '0.0000' COMMENT '手续费',
	`from_address` CHAR ( 42 ) DEFAULT NULL COMMENT '提币地址',
	`to_address` CHAR ( 42 ) NOT NULL COMMENT '收币地址',
	`txid` CHAR ( 66 ) DEFAULT '' COMMENT '哈希值',
	`status` TINYINT ( 1 ) DEFAULT '0' COMMENT '提取状态（0待审核 1审核通过 2拒绝通过 3到账 4失败）',
	`create_time` INT ( 10 ) NOT NULL DEFAULT '0' COMMENT '创建时间',
	`refuse_time` INT ( 10 ) DEFAULT '0' COMMENT '拒绝时间',
	`pass_time` INT ( 10 ) DEFAULT '0' COMMENT '通过时间',
	`finish_time` INT ( 10 ) DEFAULT '0' COMMENT '完成时间',
	`fail_time` INT ( 10 ) DEFAULT '0' COMMENT '失败时间',
PRIMARY KEY ( `id` ) 
) ENGINE = INNODB AUTO_INCREMENT = 1 DEFAULT CHARSET = utf8;
```

 

## 🔥 定时任务表/ task

任务队列表/ cron（crontab）



| 名                                     | 数据类型     | 注释                         |
| :------------------------------------- | ------------ | :--------------------------- |
| id                                     |              |                              |
| type                                   | tinyint(1)   | 类型，0-升级                 |
| data                                   | varchar(500) |                              |
| execute_id<br />member_id<br />user_id | int(11)      |                              |
| status                                 | tinyint(1)   | 状态，0-已执行完毕，1-未执行 |
| log_id                                 | int(11)      | 日志id                       |
| create_time                            | int(11)      | 创建时间                     |
| execute_time                           | int(11)      | 执行时间                     |



**DDL**

```sql
CREATE TABLE `vc_task` (
	`id` INT ( 10 ) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '自增id',
	`type` TINYINT ( 1 ) DEFAULT '0' COMMENT '类型 0升级',
	`data` VARCHAR ( 500 ) DEFAULT NULL COMMENT '数据',
	`userid` INT ( 11 ) UNSIGNED DEFAULT '0' COMMENT '用户id',
	`status` TINYINT ( 1 ) DEFAULT '1' COMMENT '状态 0已执行完毕 1未执行',
	`create_time` INT ( 11 ) UNSIGNED DEFAULT '0' COMMENT '创建时间',
	`update_time` INT ( 10 ) UNSIGNED DEFAULT '0' COMMENT '更新时间',
	PRIMARY KEY ( `id` ) USING BTREE,
KEY `status` ( `status` ) USING BTREE 
) ENGINE = INNODB DEFAULT CHARSET = utf8 ROW_FORMAT = DYNAMIC;
```

 

## 存储过程

```sql

DELIMITER $$
USE `ssyg` $$ DROP PROCEDURE
IF
	EXISTS `Pro_GetUserChildrenList_ByUserID` $$ CREATE DEFINER = `root` @`localhost` PROCEDURE `Pro_GetUserChildrenList_ByUserID` ( IN duid VARCHAR ( 11 ), IN deep INT ) SQL SECURITY INVOKER BEGIN
	DECLARE
		lev INT;
	DECLARE
		wstr VARCHAR ( 1000 );
	DECLARE
		cnt INT;
	DECLARE
		flag INT;
	DECLARE
		uid2 VARCHAR ( 50 );
	
	SET uid2 = UUID();
	
	SET flag = 0;
	
	SET lev = 1;
	
	SET cnt = 0;
	IF
		NOT EXISTS ( SELECT 1 FROM information_schema.TABLES WHERE table_name = 'memory_child_info' ) THEN
			CREATE TABLE memory_child_info (
				t_node_id VARCHAR ( 50 ),
				t_parent_id VARCHAR ( 50 ),
				deep INT,
			uid1 VARCHAR ( 50 )) ENGINE = MEMORY;
		
	END IF;
	INSERT memory_child_info SELECT
	id,
	r_id,
	1,
	uid2 
	FROM
		ssyg_member t1 
	WHERE
		id = duid 
		LIMIT 1;
	
	SET cnt = ROW_COUNT();
	WHILE
			( lev <= deep AND cnt > 0 ) DO
			
			SET lev = lev + 1;
		INSERT memory_child_info SELECT
		id,
		r_id,
		lev,
		uid2 
		FROM
			ssyg_member t
			INNER JOIN memory_child_info a ON t.r_id = a.t_node_id 
			AND a.deep = lev - 1 
		WHERE
			a.uid1 = uid2;
		
		SET cnt = ROW_COUNT();
		
	END WHILE;
	SELECT
		t.*,
		memory_child_info.deep 
	FROM
		memory_child_info
		INNER JOIN ssyg_member t ON t.id = memory_child_info.t_node_id 
	WHERE
		memory_child_info.uid1 = uid2 
	ORDER BY
		memory_child_info.deep ASC;
	DELETE 
	FROM
		memory_child_info 
	WHERE
		uid1 = uid2;

END $$DELIMITER;
```

 

创建内存表

```sql
CREATE TABLE memory_child_info (
	t_node_id VARCHAR ( 50 ),
	t_parent_id VARCHAR ( 50 ),
deep INT,
uid1 VARCHAR ( 50 )) ENGINE = MEMORY;
```

