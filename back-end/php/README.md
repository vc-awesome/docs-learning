todo...



PHP中获取当前页面的URL信息  
https://www.cnblogs.com/phpper/p/7191089.html



利用PHP获取访客IP、地区位置、浏览器及来源页面等信息  
https://www.jb51.net/article/117265.htm



PHP取整数函数常用的四种方法：

1. 直接取整，舍弃小数，保留整数：`intval() `；

2. 四舍五入取整：`round()`； 

3. 向上取整，有小数就加1：`ceil()` ；

4. 向下取整：`floor()`。



https://www.cnblogs.com/lixihuan/p/8125894.html



## 常量

预定义常量`PHP_EOL`

用函数`get_defined_constants()`来获取所有PHP常量



## 变量

php判断变量的类型

`gettype()`

`is_numeric()` \ `is_bool()` \ `is_float()` \ ...

https://www.php.cn/php-weizijiaocheng-369503.html

 

## 字符串处理

中文字符串处理函数 - mb_strlen  
https://www.php.net/manual/zh/book.mbstring.php



## 文件处理

`is_dir()`	是否目录

`opendir()`	打开目录



## 雪花算法

**参考链接**

[雪花算法 - snowflake](https://www.ucloud.cn/yun/29788.html)

~~http://www.swoole.org.cn/index.php/archives/302/~~

:thumbsup: [基于雪花算法的 PHP ID 生成器](https://learnku.com/articles/32575)

> 需要64位PHP7.0以上版本（32位PHP版本microtime会出现负数），phpstudy不可用，phpstudy_pro可用

[雪花算法及运用PHP,雪花算法生成全局唯一ID,参考了下网上雪花算法生成规则，机器ID和序列号自动获取 理论上毫秒可生成 1024*4096个唯一ID](https://blog.csdn.net/z_wen_quan/article/details/90230282)

[php实现雪花算法（ID递增）](http://www.manongjc.com/detail/9-lrqizvaqnabbigk.html)

[php使用雪花算法SnowFlake生成全球唯一数字id](http://www.zhuyanjun.cn/blog/backend/1074.html)

