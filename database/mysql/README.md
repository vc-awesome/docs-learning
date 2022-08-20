![MySQL](https://labs.mysql.com/common/logos/mysql-logo.svg?v2 ':size=20%')  

?> RDBMS（Relational Database Management System，关系数据库管理系统）
MySQL是一种关系数据库管理系统，关系数据库将数据保存在不同的表中，而不是将所有数据放在一个大仓库内，这样就增加了速度并提高了灵活性。



## 官方

主页：https://www.mysql.com/cn/

文档：https://dev.mysql.com/doc/

Github：https://github.com/mysql



## 教程

菜鸟教程（*mysql*） https://www.runoob.com/mysql/mysql-tutorial.html

菜鸟教程（*sql*） https://www.runoob.com/sql/sql-tutorial.html

阿里教程 http://mysql.taobao.org/monthly/ - *数据库内核月报*



## 规约

https://www.jb51.net/article/137783.htm#_label2 - *JAVA开发中的一些规范讲解(阿里巴巴Java开发规范手册)*



### 建表规约

【强制】表名不使用复数名词

【强制】禁用保留字，如desc、range、match、delayed等，参考官方保留字。

【强制】唯一索引名为uk_字段名；普通索引名则为idx_字段名。

说明：uk_即 unique key；idx_ 即index的简称。

【推荐】库名与应用名称尽量一致。



### 索引规约

【推荐】建组合索引的时候，区分度最高的在最左边。

正例：如果where a=? and b=? ，a列的几乎接近于唯一值，那么只需要单建idx_a索引即可。说明：存在非等号和等号混合判断条件时，在建索引时，请把等号条件的列前置。如：where a>? and b=? 那么即使a的区分度更高，也必须把b放在索引的最前列。

【推荐】in操作能避免则避免，若实在避免不了，需要仔细评估in后边的集合元素数量，控制在1000个之内。



## 版本

5.7.26（本地开发使用版本）

5.7.38-log（生产环境使用版本）

5.7.34-log（生产环境使用版本）



## 执行流程

https://www.php.cn/mysql-tutorials-493398.html - *MySQL学习之一条SQL是如何执行的？聊聊执行流程*

https://www.php.cn/mysql-tutorials-493598.html - *聊聊MySQL的基础架构和日志系统*



## CLI 命令行

- 显示索引信息

  ```sql
  SHOW INDEX FROM `table_name` \G;
  ```

- 显示数据表列表

  ```sql
  SHOW TABLES;
  ```

- 显示数据库

  ```sql
  SHOW DATABASES;
  ```

  

- 显示数据表的完整结构

  ```sql
  SHOW CREATE TABLE `table_name` \G;
  ```

  

- 显示服务器状态

  ```sql
  SHOW STATUS;
  ```

  

- 显示服务器配置变量

  ```sql
  SHOW VARIABLES;
  
  SHOW VARIABLES LIKE '%innodb_autoinc_%';
  ```

  

- 查看每个表的索引大小，数据大小和行数

  ```sql
  SHOW TABLE STATUS \G;
  ```

  

- 查看表结构

  ```sql
  mysql> DESCRIBE `表名`;
  
  mysql> EXPLAIN `表名`;
  ```

  

- 查询服务器版本信息

  ```sql
  SELECT VERSION();
  ```

  

- 当前数据库名 (或者返回空)

  ```sql
  SELECT DATABASE();
  ```

  

- 当前用户名

  ```sql
  SELECT USER();
  ```

  

- 查看数据库、表容量大小

  https://www.jb51.net/article/169351.htm - *MySQL查看数据库表容量大小的方法示例*

  - 查看指定数据库各表容量大小

    例：查看 mysql 库各表容量大小

    ```sql
    SELECT
    	table_schema AS '数据库',
    	table_name AS '表名',
    	table_rows AS '记录数',
    	TRUNCATE ( data_length / 1024 / 1024, 2 ) AS '数据容量(MB)',
    	TRUNCATE ( index_length / 1024 / 1024, 2 ) AS '索引容量(MB)' 
    FROM
    	information_schema.TABLES 
    WHERE
    	table_schema = 'mysql' 
    ORDER BY
    	data_length DESC,
    	index_length DESC;
    ```

    



## 连接

连接到本机上的MYSQL

```bash
> mysql -uroot -p // 提示输入密码
> mysql -uroot -proot // 直接登录
> exit // 退出
```



连接到远程主机上的MYSQL

```bash
> mysql -h110.110.110.110 -uroot -proot
```



在远程主机中以管理员身份进入

**agui** 为我们使用的用户名，密码为 **123**

```bash
> GRANT ALL PRIVILEGES ON *.* TO 'agui'@%'IDENTIFIEDBY '123' WITH GRANT OPTION；
> FlUSH PRIVILEGES；
```



## 创建数据库

### 字符集

推荐使用字符集：utf8mb4（支持emoji）

参考链接：

https://mp.weixin.qq.com/s/a1hsrsRC3enxunJPvf5PDw/ - *为什么不建议在 MySQL 中使用 UTF-8？*

### 排序规则

utf8mb4_general_ci

https://www.cnblogs.com/gaogao67/p/14721829.html - *MySQL--utf8mb4排序规则*

## 创建数据表

### 自增主键

http://www.mb5u.com/mysql/mysql101484.html - *两种mysql对自增id重新从1排序的方法*

https://www.jb51.net/article/199633.htm - *浅谈MySQL中的自增主键用完了怎么办*

- 跳号原因
  - https://www.jb51.net/article/221895.htm - *详解MySQL自增主键的实现*
  
- 跳号原因及解决方法
  - https://wenku.baidu.com/view/99ecaf2b00d8ce2f0066f5335a8102d276a261df.html - *MySQL自增主键跳号问题*
  
- 实例

  https://www.cnblogs.com/gaogao67/p/10415665.html - *MySQL--批量插入导致自增跳号问题*

### 存储引擎

- InnoDB

### 行格式

| 格式       | 描述                                                         |
| ---------- | ------------------------------------------------------------ |
| Compact    | 紧凑的;紧密的;小型的;袖珍的;体积小的;坚实的                  |
| Redundant  | 被裁减的；多余的；冗余的                                     |
| Dynamic    | 动态的;动力的;充满活力的;精力充沛的;个性强的;发展变化的;力的 |
| Compressed | (被)压紧;精简;浓缩;压缩;压缩(文件等)                         |



## 删除数据表

```sql
DROP TABLE IF EXISTS `table_name`;
```



## 数据类型

菜鸟教程：https://www.runoob.com/mysql/mysql-data-types.html

- Number 类型

  - **decimal**
  - **tinyint**
  - **int**

  https://www.cnblogs.com/totian/p/7065123.html - *MySQL中int(M)和tinyint(M)数值类型中M值的意义*

  https://www.cnblogs.com/blankqdb/archive/2012/11/03/blank_qdb.html - *MySQL数据类型：UNSIGNED注意事项*

- Text 类型

  - **char** - *定长字段（知道固定长度）*

    char(n)，n 取值范围：0 - 255，n 表示占用字符数

    例如：

    n = 100，可入存储100个数字、字符、汉字

  - **varchar** - *变长字段（经常变化的字段）*

    https://blog.51cto.com/ustb80/1072001 - *mysql中的varchar到底能存多长的字符*

  - **text**

  - **blob**

  utf8 编码一个字符占 3字节，gbk 编码一个字符占 2字节，latin1 编码一个字符占 1字节

   

  varchar(n)，n 表示占用字符数

  例如：

  n = 100，可入存储100个数字、字符、汉字

  

  变长字段长度列表

  mysql支持一些变长字段类型比如：VARCHAR、TEXT、BLOB等。变长字段中存储多少字节的数据是不固定的，所以我们在存储真实数据的时候需要顺便把这些数据占用的字节数也存起来。

  

  null值列表

  表中的某些列可能存储NULL值，如果把这些NULL值都放到记录的真实数据中存储会很占地方，所以Compact行格式把这些值为NULL的列统一管理起来，存储到NULL值列表

- 参考链接

  https://www.cnblogs.com/bukudekong/archive/2011/06/27/2091590.html - *MySQL 数据类型*

## 🔥 索引

菜鸟教程：https://www.runoob.com/mysql/mysql-index.html

- 索引命名

  唯一索引名为`uk_字段名`；普通索引名则为`idx_字段名`。（说明：`uk_`即 unique key；`idx_` 即index的简称）



- 索引分类
  - 单列索引
  - 组合索引



- 索引类型
  - 普通索引（命名：`idx_字段名`）
  - 唯一索引（命名：`uk_字段名`）
  - 主键索引
  - 外键索引
  - 复合索引
  - 前缀索引
  - 全文索引（Myisam数据表支持、InnoDB数据表不支持）（极少使用）
  - 覆盖索引（是一种查询的效果）



- 索引使用
  - 索引文件（使用索引）
  - 数据表文件（不使用索引）
  - **单个表的索引不宜过多，四五个即可**
  - 横向扩展（添加多个表字段）
  - 纵向扩展（添加多个表数据）



- 参考链接
  - https://www.php.cn/mysql-tutorials-493444.html - *深入解析mysql中的索引（原理详解）*
  - https://blog.csdn.net/weixin_36586564/article/details/79641748 - *Mysql专题三：B+树索引实战*
  - https://bbs.huaweicloud.com/blogs/302782 - *Mysql从入门到入魔——9. 游标、高级SQL特性*

## 🔥 锁

https://www.cnblogs.com/jpfss/p/8890250.html - *MySQL学习之——锁(行锁、表锁、页锁、乐观锁、悲观锁等)*

### 分类

- 全局锁
- 乐观锁 optimistic
- 悲观锁 pessimistic
  - 范围锁
    - 表锁
    - 行锁
      - 记录锁
      - 间隙锁
      - 临间锁
    - 属性锁
      - 共享（读）锁
      - 排他（写）锁
    - 状态锁
      - 意向共享锁
      - 意向排他锁



### 表级锁（table lock）

使用表级锁的主要是 MyISAM，MEMORY，CSV 等一些非事务性存储引擎。

Via https://www.cnblogs.com/itdragon/archive/2018/01/09/8194622.html - *MySQL 表锁和行锁机制*

- 表锁的优势：

  开销小；加锁快；无死锁

- 表锁的劣势：

  锁粒度大，发生锁冲突的概率高，并发处理能力低

- 加锁的方式：

  - 自动加锁。查询操作（SELECT），会自动给涉及的所有表加读锁，更新操作（UPDATE、DELETE、INSERT），会自动给涉及的表加写锁。也可以显示加锁：
    - 共享读锁：`lock table tableName read;`
    - 独占写锁：`lock table tableName write;`
    - 批量解锁：`unlock tables;`



### 页级锁（page lock）

Via https://www.cnblogs.com/itdragon/archive/2018/01/09/8194622.html - *MySQL 表锁和行锁机制*

页级锁主要应用于 BDB 存储引擎。

开销和加锁时间介于表锁和行锁之间；会出现死锁；锁定粒度介于表锁和行锁之间，并发处理能力一般。只需了解一下。

### 行级锁（row lock）

行级锁主要应用于 InnoDB 存储引擎。



Via https://www.cnblogs.com/itdragon/archive/2018/01/09/8194622.html - *MySQL 表锁和行锁机制*

- 行锁的劣势：

  开销大；加锁慢；会出现死锁

- 行锁的优势：

  锁的粒度小，发生锁冲突的概率低；处理并发的能力强

- 加锁的方式：

  自动加锁。对于UPDATE、DELETE和INSERT语句，InnoDB会自动给涉及数据集加排他锁；对于普通SELECT语句，InnoDB不会加任何锁；当然我们也可以显示的加锁：

  - 共享锁：`select * from tableName where ... + lock in share more;`
  - 排他锁：`select * from tableName where ... + for update;`

- 存储引擎

  InnoDB和MyISAM的最大不同点有两个：一，InnoDB支持事务(transaction)；二，默认采用行级锁。加锁可以保证事务的一致性，可谓是有人(锁)的地方，就有江湖(事务)；

  InnoDB这种行锁实现特点意味者：只有通过索引条件检索数据，InnoDB才会使用行级锁，否则，InnoDB将使用表锁！

- 事务属性

  事务是由一组SQL语句组成的逻辑处理单元，事务具有ACID属性。

  - 原子性（Atomicity）：事务是一个原子操作单元。在当时原子是不可分割的最小元素，其对数据的修改，要么全部成功，要么全部都不成功。
  - 一致性（Consistent）：事务开始到结束的时间段内，数据都必须保持一致状态。
  - 隔离性（Isolation）：数据库系统提供一定的隔离机制，保证事务在不受外部并发操作影响的"独立"环境执行。
  - 持久性（Durable）：事务完成后，它对于数据的修改是永久性的，即使出现系统故障也能够保持。
  
  
  
- 事务常见问题

  - 更新丢失（Lost Update）

    **原因**：当多个事务选择同一行操作，并且都是基于最初选定的值，由于每个事务都不知道其他事务的存在，就会发生更新覆盖的问题。类比github提交冲突。

  

  - 脏读（Dirty Reads）

    **原因**：事务A读取了事务B已经修改但尚未提交的数据。若事务B回滚数据，事务A的数据存在不一致性的问题。

    

    **举例**：比如银行取钱，事务A开启事务，此时切换到事务B，事务B开启事务-->取走100元，此时切换回事务A，事务A读取的肯定是数据库里面的原始数据，因为事务B取走了100块钱，并没有提交，数据库里面的账务余额肯定还是原始余额。

  

  - 不可重复读（Non-Repeatable Reads）

    **原因**：事务A第一次读取最初数据，第二次读取事务B已经提交的修改或删除数据。导致两次读取数据不一致。不符合事务的隔离性。

    

    **举例**：比方说在同一个事务中先后执行两条一模一样的select语句，期间在此次事务中没有执行过任何DDL语句，但先后得到的结果不一致。

  

  - 幻读（Phantom Reads）

    **原因**：事务A根据相同条件第二次查询到事务B提交的新增数据，两次数据结果集不一致。不符合事务的隔离性。

    

    **举例**：例如第一个事务对一个表中的数据进行了修改，这种修改涉及到表中的全部数据行。同时，第二个事务也修改这个表中的数据，这种修改是向表中插入一行新数据。那么，以后就会发生操作第一个事务的用户发现表中还有没有修改的数据行，就好象 发生了幻觉一样。

  

  幻读和脏读有点类似

  脏读是事务B里面修改了数据，

  幻读是事务B里面新增了数据。

  

- 事务的隔离级别

  - 数据库的事务隔离越严格，并发副作用越小，但付出的代价也就越大。这是因为事务隔离实质上是将事务在一定程度上"串行"进行，这显然与"并发"是矛盾的。根据自己的业务逻辑，权衡能接受的最大副作用。从而平衡了"隔离" 和 "并发"的问题。MySQL默认隔离级别是可重复读。
    脏读，不可重复读，幻读，其实都是数据库读一致性问题，必须由数据库提供一定的事务隔离机制来解决。

    | 隔离级别                   | 读数据一致性     | 脏读 | 不可重复读 | 幻读 |
    | -------------------------- | ---------------- | ---- | ---------- | ---- |
    | 未提交读(Read uncommitted) | 最低级别         | 是   | 是         | 是   |
    | 已提交读(Read committed)   | 语句级           | 否   | 是         | 是   |
    | 可重复读(Repeatable read)  | 事务级           | 否   | 否         | 是   |
    | 可序列化(Serializable)     | 最高级别，事务级 | 否   | 否         | 否   |

    

  - 查看当前数据库的事务隔离级别：`show variables like 'tx_isolation';`



- 表锁

  MyISAM在执行查询语句（SELECT）前，会自动给涉及的所有表加读锁，在执行更新操作（UPDATE、DELETE、INSERT等）前，会自动给涉及的表加写锁，这个过程并不需要用户干预，因此，用户一般不需要直接用LOCK TABLE命令给MyISAM表显式加锁。

  

- 乐观锁

  可以使用CAS原理，取出值后得到新值，然后插入的时候比较原值，如`set count = 12 where count = 8`，8是旧值，但这样容易出现ABA问题，所以需要配合你的版本version使用才能避免这个问题，即取值时拿到老的值和version，塞值时配合使用，如`set count = 12，version=4 where count = 8 and version=3`。

  

- 意向共享锁

  InnoDB自动加的，不需用户干预

  

- 意向排他锁

  InnoDB自动加的，不需用户干预




参考链接：

https://blog.csdn.net/zhizhengguan/article/details/122112773 - *MySQL：多个事务更新同一行数据时，是如何加锁避免脏写的*



### 实例

https://www.cnblogs.com/gaogao67/p/10412249.html - *MySQL Lock--并发插入导致的死锁*

https://www.cnblogs.com/gaogao67/p/10411360.html - *MySQL Transaction--RR事务隔离级别下加锁测试*

https://www.cnblogs.com/gaogao67/p/10411948.html - *MySQL Lock--MySQL加锁规则*

https://www.cnblogs.com/gaogao67/p/14659764.html - *MySQL Lock--LOCK IN SHARE MODE和FOR UPDATE加锁对比*

https://www.cnblogs.com/gaogao67/p/14659093.html - *MySQL Lock--SELECT LOCK IN SHARE MODE加锁*

https://www.cnblogs.com/gaogao67/p/14659081.html - *MySQL Lock--SELECT FOR UPDATE加锁*

https://www.cnblogs.com/gaogao67/p/14656022.html - *MySQL LOCK--按照非聚集索引更新时如何加锁*

## MVCC

> MVCC（Multi-Version Concurrency Control）即多版本并发控制。MVCC 是一种并发控制的方法，一般在数据库管理系统中，实现对数据库的并发访问。MVCC使得大部分支持行锁的事务引擎，不再单纯的使用行锁来进行数据库的并发控制，取而代之的是把数据库的行锁与行的多个版本结合起来，只需要很小的开销，就可以实现非锁定读，从而大大提高数据库系统的并发性能。

https://baike.baidu.com/item/MVCC/6298019 - *MVCC*

https://blog.csdn.net/m0_58181788/article/details/124228554 - *MVCC详解*

https://blog.csdn.net/yudiandemingzi/article/details/122246902 - *看一遍就懂：MVCC原理详解*

https://blog.csdn.net/seekn/article/details/118552170 - *MVCC详解*

https://baijiahao.baidu.com/s?id=1719749867568105953 - *MySQL数据库的核心MVCC详解*

https://www.jianshu.com/p/ad43961f20c6 - *MVCC简介*



## 慢查询

Via https://www.cnblogs.com/xiaofeiyang/p/12515458.html - *mysql压力测试和sql优化*

慢查询日志会把耗时超过规定的sql记录下来，利用慢查询日志，定位分析性能的瓶颈。

```sql
show variables like 'slow_query%';
```

`slow_query_log` 开启或者关闭

`long_query_time` 超过该时长的会记录下来

采用explain进行分析，type表示扫描表类型，值为all表示全表扫描，where有值就是const，利用了索引后面会有key值



## 分库分表



## 主从复制



## 读写分离（分库）

https://blog.csdn.net/u013421629/article/details/78793966 - *【mysql 读写分离】10分钟了解读写分离的作用*



## 分区





## MySQL 中间件

- 360 Atlas
- TDDL



## MySQL 语句



### 查询

#### 时间查询

- 查询指定范围之间的数据

  2021-08-22 00:00:00 转为时间戳 1629561600

  2021-08-22 23:59:59 转为时间戳 1629647999

  ```sql
  SELECT
  	SUM( `token` ) AS think_sum 
  FROM
  	`klay_pool` 
  WHERE
  	`blockTime` BETWEEN 1629561600 AND 1629647999 
  	AND `type` IN ( 1, 2 );
  ```

  

  ```sql
  SELECT
  	FROM_UNIXTIME( create_time, '%Y-%m-%d %H:%i:%s' ) as create_time_format 
  FROM
  	TABLE;
  ```

- 格式化时间戳（时间戳转换成日期）

  ```sql
  SELECT
  	FROM_UNIXTIME( `create_time`, '%Y-%m-%d %H:%i:%s' ) AS addtime,
  	id,
  	user_id,
  	address,
  	from_address,
  	to_address,
  HASH 
  FROM
  	`gow_user_eth_log` 
  WHERE
  	`tx_type` = 2 
  ORDER BY
  	`to_address` ASC,
  	`create_time` ASC;
  ```

- 日期转换成时间戳

  ```sql
  SELECT UNIX_TIMESTAMP('2015-04-29');
  ```



#### 聚合查询

```sql
SELECT SUM(`pool`) AS think_sum FROM `klay_user` WHERE  `path` LIKE '%-285-%'";
```

https://www.liaoxuefeng.com/wiki/1177760294764384/1179611448454560 - *聚合查询 - 廖雪峰的官方网站*

### 更新

#### 联表更新

```sql
UPDATE `bitex_mine_award` AS ma JOIN `bitex_mine` AS m ON ma.`from_mine_id`=m.`id` SET ma.`amount`=m.`buy_number`*m.`buy_amount`;
```

[Mysql批量更新的三种方式](https://www.cnblogs.com/AaronCui/p/10968893.html)



#### json自增

```sql
UPDATE `ev_member` SET `member_bonus_grade_set` = JSON_SET(`member_bonus_grade_set`, '$.second', `member_bonus_grade_set`->'$.second'+1)  WHERE  `member_parents_inviter_id` LIKE '%,5,%';
```



### 删除

https://www.php.cn/mysql-tutorials-493459.html - *MySQL怎么解决delete大量数据后空间不释放的问题*



## MySQL 函数

 

MySQL去重查询

1. `select distinct name,id from user;`

distinct name,id 这样的mysql 会认为要过滤掉name和id两个字段都重复的记录，如果sql这样写：select id,distinct name from user，这样mysql会报错，因为distinct必须放在要查询字段的开头。所以一般distinct用来查询不重复记录的条数。



2. `select id,name from user group by name;`

如果要查询不重复的记录，有时候可以用`group by`



https://www.cnblogs.com/lihaoyang/p/6733002.html - *MYSQL中可以实现类似 IF 判断的方法*

1. 方式一：`case` 函数：流程控制函数
2. 方式二： `IF()` 函数
3. 方式三：字符串的集合操作 `ELT()`



### MySQL SLEEP

https://www.cnblogs.com/gaogao67/p/14655347.html - *MySQL--SELECT语句中SLEEP函数执行时机*



### MySQL 聚合函数



### MySQL 日期函数

https://blog.csdn.net/chtjava/article/details/100148356 - *MySQL 获得当前日期时间 函数*

SELECT NOW(); // 返回当前日期和时间

SELECT unix_timestamp([date]); // 将时间转换为时间戳

SELECT from_unixtime(unix_timestamp, '%Y-%m-%d %H:%i:%s'); // 将时间戳转换为日期



### MySQL 拼接

`concact()`

`group_concact()`

https://www.cnblogs.com/haw2106/p/10735500.html



### MySQL 字段为空时，赋值为0

- `SELECT COALESCE(字段, 0)`

- `SELECT IFNULL(字段, 0)`

- `SELECT IF(字段 IS NULL,0,字段值) `

- ```sql
   CASE expression
   
     WHEN condition1 THEN result1
   
     WHEN condition2 THEN result2
   
     ...
   
     WHEN conditionN THEN resultN
   
     ELSE result
   
   END
   ```



https://blog.csdn.net/sunwenhao_2017/article/details/83376726



## MySQL 连接（join）

mysql驱动表、被驱动表、大表小表及join优化  
https://blog.csdn.net/asd051377305/article/details/115320564

### MySQL 自连接

自联结顾名思义就是把一张表假设为两张一样的表，然后在做“多表查询”

```sql
SELECT P1.name AS name_1,
		 P2.name AS name_2
FROM Products P1, Products P2
WHERE P1.name <> P2.name;
```



mysql分组取最新一条记录（在搜索中需统计满足条件数量）

```sql
SELECT *
FROM 
    (SELECT *
    FROM B
    ORDER BY  create_time DESC LIMIT 0,1000000000000000 ) sl
GROUP BY  create_time;
```

先对 B 表数据进行排序，则取出的分组数据即为 B 表中 create_time 最新的那一行数据，其中经过实践，需要加上 limit，否则没效果，估计和 mysql 版本有关。



> via [MySQL分组查询每组最新的一条数据(通俗易懂)](https://www.cnblogs.com/java-spring/p/11498457.html)

```sql
SELECT t.*
FROM 
    (SELECT address,
		max(create_time) AS create_time
    FROM test
    GROUP BY  address) a
LEFT JOIN test t
	ON t.address=a.address
		AND t.create_time=a.create_time;
```



## MySQL 执行顺序



## MySQL 删除重复数据

https://www.cnblogs.com/whyly/p/9772884.html



## MySQL 优化

http://www.yishimei.cn/network/1035.html - *熟练掌握19条MySQL数据库优化方法让你的工作效率提升三倍*



## MySQL 工具

### workbench

> 官方工具

下载链接：https://dev.mysql.com/downloads/workbench/

文档链接：https://dev.mysql.com/doc/workbench/en/



### mysqldump

> MySQL 自带的逻辑备份工具。

官方文档：https://dev.mysql.com/doc/refman/5.7/en/mysqldump.html



参考链接：

https://www.cnblogs.com/markLogZhu/p/11398028.html - *MySQL之mysqldump的使用*

https://www.cnblogs.com/chenmh/p/5300370.html - *MySQL mysqldump数据导出详解*

https://zhuanlan.zhihu.com/p/143899576 - *MySQL基于mysqldump的备份和恢复*



### mysqlslap

> mysql自带的mysqlslap工具可以模拟进行并发测试

https://blog.51cto.com/u_15300891/3057857 - *MySQL并发测试*

https://www.cnblogs.com/xiaofeiyang/p/12515458.html - *mysql压力测试和sql优化*
