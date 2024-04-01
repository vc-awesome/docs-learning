# 函数

## 变量处理函数

https://www.php.net/manual/zh/book.var.php - *PHP: Variable handling - Manual*

https://www.runoob.com/php/php-variable-handling-functions.html - *PHP 可用的函数 | 菜鸟教程*

- `empty`
- `gettype`
- `isset`
- `var_dump`
- `var_export`

## 打印函数

- `echo`
- `print_r`
- `var_dump`

## 数组函数

- 循环遍历

    `array_map`
    
    > 两个一维数组组合成二维数组
    
    ```php
    <?php
    	$a1 = array("Dog","Cat");
    	$a2 = array("Puppy","Kitten");
    	print_r(array_map(null,$a1,$a2));
    ?>
    ```
    
    `array_walk`
    
    `array_walk_recursive`

- 排序

    `array_multisort` - 对多个数组或多维数组进行排序。
    
    `array_column` - 返回数组中指定的一列

    `array_intersect` - 计算数组的交集

## 类型运算符 instanceof

`instanceof` - *用于确定一个 PHP 变量是否属于某一类 class*

https://www.php.net/manual/zh/language.operators.type.php - *PHP: 类型 - Manual*
## 时间和时间函数

https://www.php.net/manual/zh/book.datetime.php - *PHP: 日期/时间 - Manual* 

https://www.runoob.com/php/php-ref-date.html - *PHP 5 Date/Time 函数 | 菜鸟教程*

```php
$yesterday_begin = date("Y-m-d H:i:s", strtotime($today_begin.'-1day')); //昨天开始时间
$yesterday_end = date('Y-m-d H:i:s', strtotime($yesterday_begin.'+1day')); //昨天结束时间

$today_begin = date('Y-m-d H:i:s', strtotime(date("Y-m-d"))); //开始时间
$today_end = date('Y-m-d H:i:s', strtotime(date("Y-m-d")) + 24*60*60); //结束时间
```

## 常用函数

- `strtotime()` - 日期转换成时间戳
- `realpath`
- `parse_str`  - 把查询字符串解析到变量中
- `sha1`  - 计算字符串的
- `SHA-1` - 散列
- `function_exists` - 函数是否存在
- `filter_var` - 变量过滤
- `putenv`
- `getenv`
- `ob_start`
- `ob_get_clean`
- `extension_loaded`
- `get_included_files`
- `memory_get_peak_usage`
- `memory_get_usage`
- `round`
- `microtime`
- `htmlspecialchars`
- `uniqid` - 生成一个唯一 ID
- `ip2long`
- `compact`

## 类

- `stdClass` 实例化为对象
- `get_object_vars()`

## 关键字

- `final`
- `traits`
- `insteadof`
