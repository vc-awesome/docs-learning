## PHP

### 官方

PHP 手册：https://www.php.net/manual/zh/book.pcre.php

菜鸟教程：https://www.runoob.com/php/php-pcre.html



### 函数

- preg_match() — *执行匹配正则表达式*

  https://www.php.net/manual/zh/function.preg-match.php

  https://www.runoob.com/php/php-preg_match.html

  `preg_match(pattern , string);`

- preg_match_all() — *执行一个全局正则表达式匹配*

  https://www.php.net/manual/zh/function.preg-match-all.php

  https://www.runoob.com/php/php-preg_match_all.html

### 验证规则

图片

```php
/<img[^s]+src=\"(http:\/\/[^\"]+).(jpg|png|gif|jpeg)\"[^\/]*\/>/i
```



手机号码

```php
/^1\d{10}$/
```

<https://www.cnblogs.com/blogforly/p/5644049.html>



2 位至 6 位中文

```php
/^[\x{4e00}-\x{9fa5}]{2,6}$/u
```

https://www.cnblogs.com/diguaer/p/5609938.html  
https://blog.csdn.net/weixin_41120504/article/details/79710221



居民身份证件

```php
/(^\d{15}$)|(^\d{17}([0-9]|X)$)/
```

https://blog.csdn.net/wake_me_up123/article/details/78471948



银行卡

```php
/^(\d{16}|\d{19}|\d{17})$/
```

https://www.cnblogs.com/chenjiacheng/p/6522598.html - *php正则表达式验证手机/固定电话/邮箱/身份证/银行卡自定义函数*

## 参考

https://zhidao.baidu.com/question/1827099541890203308.html - *正则表达式中的.*和.*?的区别是什么?_百度知道*

https://www.jianshu.com/p/ff05d467e145 - *正则表达式如何匹配多行的所有任意字符 - 简书*
