##  新增

- 数据库

  

- 模型

  

## 更新



## 查询

善用 `fetchsql`

### 查询表达式

#### 表达式

> 表达式查询是官方推荐使用的查询方式

#### 快捷查询方法

`whereLike/whereNotLike`  
`whereBetween/whereNotBetween`  
`whereIn/whereNotIn`  
`whereNull/whereNotNull`  
`whereExists/whereNotExists`  
`whereBetweenTime`  
`whereTime`  
`whereExp`  

#### where

普通查询、表达式查询、快捷查询、区间查询、组合查询

方法参数支持的变量类型：字符串、数组、闭包

##### 查询表达式

> 表达式查询是官方推荐使用的查询方式

##### 数组条件

###### 关联数组

```php
where([
	'name' => '',
    'status' => 1
])
```

###### 索引数组

```php
where([
	['name', '=', ''],
    ['status', '=', 1]
])

$map[] = ['name', '=', ''];
$map[] = ['status', '=', 1];
where($map)
```

##### 字符串条件

> 注意使用字符串查询条件和表达式查询的一个区别在于，不会对查询字段进行避免关键词冲突处理。

```php
// 字符串条件
\think\Db::name('member')->where('type=1 AND status=1')->fetchSql()->select();
// SQL语句
SELECT * FROM `ev_member` WHERE  ( type=1 AND status=1 )
```

------

```php
// 数组条件
\think\Db::name('member')->where(['type'=>1, 'status'=>1])->fetchSql()->select();
// SQL语句
SELECT * FROM `ev_member` WHERE  `type` = 1  AND `status` = 1
```

> 使用字符串条件的时候，如果需要传入变量，建议配合预处理机制，确保更加安全

### 高级查询

#### 快捷查询

#### 区间查询

#### 批量（字段）查询

#### 数组对象查询

#### 闭包查询

#### 混合查询

#### 字符串条件查询

#### 使用Query对象查询

#### 快捷方法

#### 动态查询

#### 条件查询

## 删除



## 模型

### 查询范围

#### 全局查询范围（好用、推荐）