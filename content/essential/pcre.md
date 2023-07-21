## 简介

> 正则表达式，又称规则表达式,（Regular Expression，在代码中常简写为regex、regexp 或 RE），是一种文本模式，包括普通字符（例如，a 到 z 之间的字母）和特殊字符（称为"元字符"），是计算机科学的一个概念。正则表达式使用单个字符串来描述、匹配一系列匹配某个句法规则的字符串，通常被用来检索、替换那些符合某个模式（规则）的文本。
> 
> —— https://baike.baidu.com/item/正则表达式/1700215 - *正则表达式_百度百科*

## 教程

https://www.runoob.com/regexp/regexp-tutorial.html - *正则表达式 – 教程 | 菜鸟教程*（含在线工具）

https://www.jb51.net/article/126943.htm - *史上最全的PHP正则表达式*

## 快速入门

普通字符（例如，a到z之间的字母）

特殊字符（称为“元字符”）

### 语法

|      |        |                                                              |
| ---- | ------ | ------------------------------------------------------------ |
| 1    | ?      | 通配符匹配0个或1个字符                                       |
| 2    | *      | 通配符匹配0个或多个字符                                      |
| 3    | +      | 通配符匹配1个或多个字符                                      |
| 4    | ^      | 匹配输入字符串的开始位置                                     |
| 5    | $      | 匹配输入字符串的结束位置                                     |
| 6    | [ABC]  | 匹配 [...] 中的所有字符，例如 [aeiou] 匹配字符串 "google runoob taobao" 中所有的 e o u a 字母 |
| 7    | [^ABC] | 匹配除了 [...] 中字符的所有字符，例如 [^aeiou] 匹配字符串 "google runoob taobao" 中除了 e o u a 字母的所有字母 |
| 8    | [A-Z]  | [A-Z] 表示一个区间，匹配所有大写字母，[a-z] 表示所有小写字母 |
| 9    | .      | 匹配除换行符（\n、\r）之外的任何单个字符，相等于 [^\n\r]     |
| 10   | [\s\S] | 匹配所有。\s 是匹配所有空白符，包括换行，\S 非空白符，不包括换行 |
| 11   | \w     | 匹配字母、数字、下划线。等价于 [A-Za-z0-9_]                  |

### 修饰符

| 修饰符 | 含义                           | 描述                                                         |
| ------ | ------------------------------ | ------------------------------------------------------------ |
| i      | ignore - 不区分大小写          | 将匹配设置为不区分大小写，搜索时不区分大小写: A 和 a 没有区别。 |
| g      | global - 全局匹配              | 查找所有的匹配项。                                           |
| m      | multi line - 多行匹配          | 使边界字符 ^ 和 $ 匹配每一行的开头和结尾，记住是多行，而不是整个字符串的开头和结尾。 |
| s      | 特殊字符圆点 . 中包含换行符 \n | 默认情况下的圆点 . 是匹配除换行符 \n 之外的任何字符，加上 s 修饰符之后, . 中包含换行符 \n。 |



### 反向引用

详见：https://www.runoob.com/regexp/regexp-syntax.html - *正则表达式 - 语法*

### 贪婪模式

详见：https://www.runoob.com/regexp/regexp-syntax.html - *正则表达式 - 语法*

贪婪模式：`.*`

非（取消）贪婪模式：`.*?`（使用 .*? 来取消贪婪，? 代表匹配前面的内容 0 次或者 1次）

## 实例

https://wangchujiang.com/regexp-example/ - *RegExp Example 正则实例大全*

```regex
/(.*?)/
```


图片

```regex
/<img[^s]+src=\"(http:\/\/[^\"]+).(jpg|png|gif|jpeg)\"[^\/]*\/>/i
```



手机号码

```regex
/^1\d{10}$/
```

https://www.cnblogs.com/blogforly/p/5644049.html - *PHP手机号码正则表达式 - Undefined丶 - 博客园*



2 位至 6 位中文

```regex
/^[\x{4e00}-\x{9fa5}]{2,6}$/u
```

https://www.cnblogs.com/diguaer/p/5609938.html - *PHP判断是否都是中文 - diguaer - 博客园*

https://blog.csdn.net/weixin_41120504/article/details/79710221 - *PHP用户名中文汉字正则验证_php 正则禁止中文_weixin影子的博客-CSDN博客*



居民身份证件

```regex
/(^\d{15}$)|(^\d{17}([0-9]|X)$)/
```

https://blog.csdn.net/wake_me_up123/article/details/78471948 - *PHP-身份证号码验证_php 校验身份证号 带x_Wake_me_Up123的博客-CSDN博客*



银行卡

```regex
/^(\d{16}|\d{19}|\d{17})$/
```

https://www.cnblogs.com/chenjiacheng/p/6522598.html - *php正则表达式验证手机/固定电话/邮箱/身份证/银行卡自定义函数*

## 用法

### 在 PHP 中使用

> \# 号可以替代 /

#### 官方

PHP 手册：https://www.php.net/manual/zh/book.pcre.php

菜鸟教程：https://www.runoob.com/php/php-pcre.html



#### 函数

- preg_match() — *执行匹配正则表达式*

  https://www.php.net/manual/zh/function.preg-match.php

  https://www.runoob.com/php/php-preg_match.html

  `preg_match(pattern , string);`

- preg_match_all() — *执行一个全局正则表达式匹配*

  https://www.php.net/manual/zh/function.preg-match-all.php

  https://www.runoob.com/php/php-preg_match_all.html

#### 参考

1. https://blog.csdn.net/fujiafeihudui/article/details/39402007 - *php 正则表达式中的#号* 
2. https://blog.csdn.net/qq_46456049/article/details/108589822 - *php(正则匹配)*
3. https://www.cnblogs.com/liliuguang/p/10411396.html - *php中正则表达式详解*
4. http://c.biancheng.net/view/7569.html - *PHP正则表达式，看这一篇就够了*

## 参考

1. https://zhidao.baidu.com/question/1827099541890203308.html - *正则表达式中的.*和.*?的区别是什么?_百度知道*

2. https://www.jianshu.com/p/ff05d467e145 - *正则表达式如何匹配多行的所有任意字符 - 简书*
