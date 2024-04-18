# 正则表达式

## 简介

> 正则表达式，又称规则表达式,（Regular Expression，在代码中常简写为 regex、regexp 或 RE），是一种文本模式，包括普通字符（例如，a 到 z 之间的字母）和特殊字符（称为"元字符"），是计算机科学的一个概念。正则表达式使用单个字符串来描述、匹配一系列匹配某个句法规则的字符串，通常被用来检索、替换那些符合某个模式（规则）的文本。
>
> —— <cite>[正则表达式_百度百科](https://baike.baidu.com/item/%E6%AD%A3%E5%88%99%E8%A1%A8%E8%BE%BE%E5%BC%8F/1700215)</cite>

## 教程

1. https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Regular_expressions - *正则表达式 - JavaScript | MDN*
2. https://www.runoob.com/regexp/regexp-tutorial.html - *正则表达式 – 教程 | 菜鸟教程*（包含在线工具）
3. https://www.jb51.net/article/126943.htm - *史上最全的PHP正则表达式*
4. https://www.regular-expressions.info/ - *Regular-Expressions.info - Regex Tutorial, Examples and Reference - Regexp Patterns*

## 快速入门

普通字符（例如，a 到 z 之间的字母）

特殊字符（称为“[元字符](https://www.runoob.com/regexp/regexp-metachar.html)”）

### 语法

| 序号  | 字符 | 描述 |
| --- | --- | --- |
| 1 | `?` | 通配符匹配 0 个或 1 个字符 |
| 2 | `*` | 通配符匹配 0 个或多个字符 |
| 3 | `+` | 通配符匹配 1 个或多个字符 |
| 4 | `^` | 匹配输入字符串的开始位置 |
| 5 | `$` | 匹配输入字符串的结束位置 |
| 6 | `[ABC]`  | 匹配 [...] 中的所有字符，例如 [aeiou] 匹配字符串 "google runoob taobao" 中所有的 e o u a 字母 |
| 7 | `[^ABC]` | 匹配除了 [...] 中字符的所有字符，例如 [^aeiou] 匹配字符串 "google runoob taobao" 中除了 e o u a 字母的所有字母 |
| 8 | `[A-Z]`  | [A-Z] 表示一个区间，匹配所有大写字母，[a-z] 表示所有小写字母 |
| 9 | `.` | 匹配除换行符（\n、\r）之外的任何单个字符，相等于 [^\n\r] |
| 10 | `[\s\S]` | 匹配所有。\s 是匹配所有空白符，包括换行，\S 非空白符，不包括换行 |
| 11 | `[\s]` | 匹配任何空白字符，包括空格、制表符、换页符等等。等价于 [ \f\n\r\t\v] |
| 12 | `[\S]` | 匹配任何非空白字符。等价于 [^ \f\n\r\t\v] |
| 13 | `\w` | 匹配字母、数字、下划线。等价于 [A-Za-z0-9_] |
| 14 | `\W` | 匹配非字母、数字、下划线。等价于 '[^A-Za-z0-9_]' |
| 15 | `\d` | 匹配任意一个阿拉伯数字（0 到 9）。等价于 [0-9] |
| 16 | `\D` | 匹配一个非数字字符。等价于 [^0-9]。 |
| 17 | `{n}` | n 是一个非负整数。匹配确定的 n 次。例如，o{2} 不能匹配 "Bob" 中的 o，但是能匹配 "food" 中的两个 o。 |
| 18 | `{n,}` | n 是一个非负整数。至少匹配n 次。例如，o{2,} 不能匹配 "Bob" 中的 o，但能匹配 "foooood" 中的所有 o。o{1,} 等价于 o+。o{0,} 则等价于 o*。 |
| 19 | `{n,m}`  | m 和 n 均为非负整数，其中 n <= m。最少匹配 n 次且最多匹配 m 次。例如，o{1,3} 将匹配 "fooooood" 中的前三个 o。o{0,1} 等价于 o?。请注意在逗号和两个数之间不能有空格。 |

详见：https://www.runoob.com/regexp/regexp-syntax.html - *正则表达式 – 语法 | 菜鸟教程*

### 量词

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier - *Quantifier: *, +, ?, {n}, {n,}, {n,m} - JavaScript | MDN*

### 修饰符

| 序号 | 修饰符 | 含义 | 描述 |
| --- | --- | --- | --- |
| 1 | i | ignore - 不区分大小写 | 将匹配设置为不区分大小写，搜索时不区分大小写: A 和 a 没有区别。 |
| 2 | g | global - 全局匹配 | 查找所有的匹配项。 |
| 3 | m | multi line - 多行匹配 | 使边界字符 `^` 和 `$` 匹配每一行的开头和结尾，记住是多行，而不是整个字符串的开头和结尾。 |
| 4 | s | 特殊字符圆点 `.` 中包含换行符 `\n` | 默认情况下的圆点 `.` 是匹配除换行符 `\n` 之外的任何字符，加上 `s` 修饰符之后, `.` 中包含换行符 `\n`。 |

详见：https://www.runoob.com/regexp/regexp-flags.html - *正则表达式 – 修饰符（标记） | 菜鸟教程*

### 捕获组

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group - *Capturing group: (...) - JavaScript | MDN*


### 断言

#### ?=、?<=、?!、?<! 的使用区别

详见：https://www.runoob.com/regexp/regexp-syntax.html - *正则表达式 - 语法*

### 反向引用 \num

正则表达式反向引用 `\1` `\2` 类型的用途

匹配连续的字符内容，匹配连续 4 个 0 `/(\d)\1{3}/`

修改密码的功能中，我们常常用到正则表达式，来判断密码不能为连续的数字，如 `111111`，那么正则表达式要如何写呢？

连续相同的六位数字：`([0-9]\1{5})` 或 `([\d]\1{5})`

参考：

1. https://www.cnblogs.com/gddcz/p/9131597.html - *关于正则表达式 \1 \2之类的问题 - 爱诚 - 博客园*
2. https://blog.csdn.net/weixin_43639512/article/details/84785585 - *正则表达式中\1 \2是什么意思_正则表达式\1_空城雀的博客-CSDN博客*

详见：https://www.runoob.com/regexp/regexp-syntax.html - *正则表达式 - 语法*

### 贪婪模式

详见：https://www.runoob.com/regexp/regexp-syntax.html - *正则表达式 - 语法*

贪婪模式：`.*`

非（取消）贪婪模式：`.*?`（使用 .*? 来取消贪婪，? 代表匹配前面的内容 0 次或者 1 次）

## 实例

https://wangchujiang.com/regexp-example/ - *RegExp Example 正则实例大全*

### 非贪婪模式

```regex
/(.*?)/
```

### 电子邮箱

```regex
/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
```

https://c.runoob.com/codedemo/7623/ - *JS 正则表达式判断邮箱地址 | 菜鸟工具*


### 用户名

用户名正则，4 到 16 位（字母，数字，下划线，减号）

```regex
/^[a-zA-Z0-9_-]{4,16}$/
```

https://c.runoob.com/codedemo/7099/ - *用户名正则表达式 | 菜鸟工具*


### 密码强度

密码强度正则，最少 6 位，包括至少 1 个大写字母，1 个小写字母，1 个数字，1 个特殊字符

```regex
/^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/
```

https://c.runoob.com/codedemo/7100/ - *密码强度正则表达式 | 菜鸟工具*


### 图片

```regex
/<img[^s]+src=\"(http:\/\/[^\"]+).(jpg|png|gif|jpeg)\"[^\/]*\/>/i
```

### 手机号码

```regex
/^1\d{10}$/
```

https://www.cnblogs.com/blogforly/p/5644049.html - *PHP手机号码正则表达式 - Undefined丶 - 博客园*

### 2 位至 6 位中文

```regex
/^[\x{4e00}-\x{9fa5}]{2,6}$/u
```

参考：

1. https://www.cnblogs.com/diguaer/p/5609938.html - *PHP判断是否都是中文 - diguaer - 博客园*
2. https://blog.csdn.net/weixin_41120504/article/details/79710221 - *PHP用户名中文汉字正则验证_php 正则禁止中文_weixin影子的博客-CSDN博客*


### 中文标点符号

| 中文符号 | 规则 | 中文符号 | 规则 |
| --- | --- | --- | --- |
| （ | `\\uff08` | ） | `\\uff09` |
| 〈 | `\\u3008` | 〉 | `\\u3009` |
| 《 | `\\u300a` | 》 | `\\u300b` |
| 「 | `\\u300c` | 」 | `\\u300d` |
| 『 | `\\u300e` | 』 | `\\u300f` |
| ﹃ | `\\ufe43` | ﹄ | `\\ufe44` |
| 〔 | `\\u3014` | 〕 | `\\u3015` |
| … | `\\u2026` | — | `\\u2014` |
| ～ | `\\uff5e` | ﹏ | `\\ufe4f` |
| ￥ | `\\uffe5` | 、 | `\\u3001` |
| 【 | `\\u3010` | 】 | `\\u3011` |
| ， | `\\uff0c` | 。 | `\\u3002` |
| ？ | `\\uff1f` | ！ | `\\uff01` |
| ： | `\\uff1a` | ； | `\\uff1b` |
| “ | `\\u201c` | ” | `\\u201d` |
| ‘ | `\\u2018` | ’ | `\\u2019` |

参考：

1. https://juejin.cn/post/7051083891431440391 - *中文字符正则匹配及 Unicode 编码 - 掘金*
2. https://blog.csdn.net/cysear/article/details/80435756 - *正则 匹配 中文标点符号 小记_正则验证中文标点符号-CSDN博客*
3. https://www.cnblogs.com/hycms/p/11097924.html - *中文字符和中文标点符号的正则表达式 - 夯 - 博客园*


### 居民身份证件

```regex
/(^\d{15}$)|(^\d{17}([0-9]|X)$)/
```

https://blog.csdn.net/wake_me_up123/article/details/78471948 - *PHP-身份证号码验证_php 校验身份证号 带x_Wake_me_Up123的博客-CSDN博客*

### 银行卡

```regex
/^(\d{16}|\d{19}|\d{17})$/
```

https://www.cnblogs.com/chenjiacheng/p/6522598.html - *php正则表达式验证手机/固定电话/邮箱/身份证/银行卡自定义函数*


### URL

```regex
/^http://([\w-]+\.)+[\w-]+(/[\w-./?%&=]*)?$/
```

```regex
/[a-zA-z]+://[^\s]*/
```


### 只匹配空格，不匹配换行

```regex
/\x20/
```

```regex
/(?:[^\S\n])+/
```

参考：

1. https://blog.csdn.net/jsjcmq/article/details/111935641 - *正则表达式：只匹配空格，不匹配换行等其余空白字符_正则匹配空格但是不匹配换行-CSDN博客*
2. https://deepinout.com/python/python-qa/t_how-to-match-whitespace-but-not-newlines-using-python-regular-expressions.html - *如何使用Python正则表达式匹配空格但不匹配换行符？|极客笔记*


### 查看更多

https://c.runoob.com/front-end/854/#about - *正则表达式在线测试 | 菜鸟工具*


## 用法

### 在 PHP 中使用

> `#` 号可以替代 `/`

教程：

1. PHP 手册：https://www.php.net/manual/zh/book.pcre.php
2. 菜鸟教程：https://www.runoob.com/php/php-pcre.html

函数：

- preg_match() — *执行匹配正则表达式*

  https://www.php.net/manual/zh/function.preg-match.php

  https://www.runoob.com/php/php-preg_match.html

  `preg_match(pattern , string);`

- preg_match_all() — *执行一个全局正则表达式匹配*

  https://www.php.net/manual/zh/function.preg-match-all.php

  https://www.runoob.com/php/php-preg_match_all.html

参考：

1. https://blog.csdn.net/fujiafeihudui/article/details/39402007 - *php 正则表达式中的#号* 
2. https://blog.csdn.net/qq_46456049/article/details/108589822 - *php(正则匹配)*
3. https://www.cnblogs.com/liliuguang/p/10411396.html - *php中正则表达式详解*
4. http://c.biancheng.net/view/7569.html - *PHP正则表达式，看这一篇就够了*


### 在 JavaScript 中使用

方式一：

```js
var str = "abc123def";
var patt1 = /[0-9]+/;
document.write(str.match(patt1)); // 输出：123
```

方式二：

```js
// 用户名正则，4 到 16 位（字母，数字，下划线，减号）
var uPattern = /^[a-zA-Z0-9_-]{4,16}$/;
// 输出 true
document.write(uPattern.test("runoob123")); // 输出：true
```

教程：

1. https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions - *正则表达式 - JavaScript | MDN*


## 工具

1. https://toolwa.com/regex/ - *正则表达式在线测试 - 工具哇 - 在线工具大全*
2. https://regex101.com/ - *regex101: build, test, and debug regex*
3. https://www.lddgo.net/string/text-replace - *在线文本替换工具*


## 参考

1. https://zhidao.baidu.com/question/1827099541890203308.html - *正则表达式中的.*和.*?的区别是什么?_百度知道*
2. https://www.jianshu.com/p/ff05d467e145 - *正则表达式如何匹配多行的所有任意字符 - 简书*
