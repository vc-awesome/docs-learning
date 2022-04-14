![MySQL](https://labs.mysql.com/common/logos/mysql-logo.svg?v2 ':size=20%')  

?> RDBMS（Relational Database Management System，关系数据库管理系统）
MySQL是一种关系数据库管理系统，关系数据库将数据保存在不同的表中，而不是将所有数据放在一个大仓库内，这样就增加了速度并提高了灵活性。



todo...



## 官方

主页：https://www.mysql.com/

Github：https://github.com/mysql



## 教程

菜鸟教程（*mysql*） https://www.runoob.com/mysql/mysql-tutorial.html

菜鸟教程（*sql*） https://www.runoob.com/sql/sql-tutorial.html



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



## 索引

普通索引

唯一索引

主键索引

外键索引

复合索引

前缀索引

全文索引（Myisam数据表支持、InnoDB数据表不支持）



## 慢查询



## 分库分表



## 主从复制



## 读写分离（分库）



## 分区



## 引擎



## mysql 中间件

360 Atlas



## 更新

### 联表更新

```sql
UPDATE `bitex_mine_award` AS ma JOIN `bitex_mine` AS m ON ma.`from_mine_id`=m.`id` SET ma.`amount`=m.`buy_number`*m.`buy_amount`;
```

[Mysql批量更新的三种方式](https://www.cnblogs.com/AaronCui/p/10968893.html)



### json自增

```sql
UPDATE `ev_member` SET `member_bonus_grade_set` = JSON_SET(`member_bonus_grade_set`, '$.second', `member_bonus_grade_set`->'$.second'+1)  WHERE  `member_parents_inviter_id` LIKE '%,5,%';
```



## MySQL函数

 

MySQL去重查询

1. `select distinct name,id from user;`

distinct name,id 这样的mysql 会认为要过滤掉name和id两个字段都重复的记录，如果sql这样写：select id,distinct name from user，这样mysql会报错，因为distinct必须放在要查询字段的开头。所以一般distinct用来查询不重复记录的条数。



2. `select id,name from user group by name;`

如果要查询不重复的记录，有时候可以用`group by`

 

MYSQL中可以实现类似 IF 判断的方法

1. 方式一：`case` 函数：流程控制函数

2. 方式二： `IF()` 函数

3. 方式三：字符串的集合操作 `ELT()`

 

https://www.cnblogs.com/lihaoyang/p/6733002.html

 

### MySQL聚合函数



### MySQL日期函数

https://blog.csdn.net/chtjava/article/details/100148356



### MySQL拼接

`concact()`

`group_concact()`

https://www.cnblogs.com/haw2106/p/10735500.html



### MySQL字段为空时，赋值为0

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



## MySQL连接（join）



### MySQL自连接

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



## MySQL执行顺序



## MySQL删除重复数据

https://www.cnblogs.com/whyly/p/9772884.html

 

## MySQL自增id重新排序

http://www.mb5u.com/mysql/mysql101484.html



## MySQL优化

[熟练掌握19条MySQL数据库优化方法让你的工作效率提升三倍](http://www.yishimei.cn/network/1035.html)

