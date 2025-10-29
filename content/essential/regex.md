# 正则表达式

## 简介

> 正则表达式，又称规则表达式,（Regular Expression，在代码中常简写为 regex、regexp 或 RE），是一种文本模式，包括普通字符（例如，a 到 z 之间的字母）和特殊字符（称为"元字符"），是计算机科学的一个概念。正则表达式使用单个字符串来描述、匹配一系列匹配某个句法规则的字符串，通常被用来检索、替换那些符合某个模式（规则）的文本。
>
> —— <cite>[正则表达式_百度百科](https://baike.baidu.com/item/%E6%AD%A3%E5%88%99%E8%A1%A8%E8%BE%BE%E5%BC%8F/1700215)</cite>

## 官方

1. https://www.regular-expressions.info/ - *Regular-Expressions.info - Regex Tutorial, Examples and Reference - Regexp Patterns*

## 教程

1. https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Regular_expressions - *正则表达式 - JavaScript | MDN*
2. https://www.runoob.com/regexp/regexp-tutorial.html - *正则表达式 – 教程 | 菜鸟教程*（包含在线工具）
3. https://wangdoc.com/javascript/stdlib/regexp - *RegExp 对象 - JavaScript 教程 - 网道*
4. https://wangdoc.com/es6/regex - *正则的扩展 - ES6 教程 - 网道*
5. https://www.jb51.net/article/126943.htm - *史上最全的PHP正则表达式*

### 速查表

https://wangchujiang.com/reference/docs/regex.html - *RegEX 备忘清单 & regex cheatsheet & Quick Reference*

## 入门指南

普通字符（例如，a 到 z 之间的字母）

| 字符 | 描述 |
| :--- | :--- |
| `?` | 通配符匹配 0 个或 1 个字符 |
| `*` | 通配符匹配 0 个或多个字符 |
| `+` | 通配符匹配 1 个或多个字符 |
| `^` | 匹配输入字符串的开始位置 |
| `$` | 匹配输入字符串的结束位置 |
| `[ABC]`  | 匹配 [...] 中的所有字符，例如 [aeiou] 匹配字符串 "google runoob taobao" 中所有的 e o u a 字母 |
| `[^ABC]` | 匹配除了 [...] 中字符的所有字符，例如 [^aeiou] 匹配字符串 "google runoob taobao" 中除了 e o u a 字母的所有字母 |
| `[A-Z]`  | [A-Z] 表示一个区间，匹配所有大写字母，[a-z] 表示所有小写字母 |
| `.` | 匹配除换行符（\n、\r）之外的任何单个字符，相等于 [^\n\r] |
| `[\s\S]` | 匹配所有。\s 是匹配所有空白符，包括换行，\S 非空白符，不包括换行 |
| `[\s]` | 匹配任何空白字符，包括空格、制表符、换页符等等。等价于 [ \f\n\r\t\v] |
| `[\S]` | 匹配任何非空白字符。等价于 [^ \f\n\r\t\v] |
| `\w` | 匹配字母、数字、下划线。等价于 [A-Za-z0-9_] |
| `\W` | 匹配非字母、数字、下划线。等价于 [^A-Za-z0-9_] |
| `\d` | 匹配任意一个阿拉伯数字（0 到 9）。等价于 [0-9] |
| `\D` | 匹配一个非数字字符。等价于 [^0-9]。 |
| `{n}` | n 是一个非负整数。匹配确定的 n 次。例如，o{2} 不能匹配 "Bob" 中的 o，但是能匹配 "food" 中的两个 o。 |
| `{n,}` | n 是一个非负整数。至少匹配n 次。例如，o{2,} 不能匹配 "Bob" 中的 o，但能匹配 "foooood" 中的所有 o。o{1,} 等价于 o+。o{0,} 则等价于 o*。 |
| `{n,m}`  | n 和 m 均为非负整数，其中 n <= m。最少匹配 n 次且最多匹配 m 次。例如，o{1,3} 将匹配 "fooooood" 中的前三个 o。o{0,1} 等价于 o?。请注意在逗号和两个数之间不能有空格。 |

详见：https://www.runoob.com/regexp/regexp-syntax.html - *正则表达式 – 语法 | 菜鸟教程*

### 语法风格

- JavaScript 风格
- Perl 风格

参考：

1. <https://publish.obsidian.md/help-zh/核心插件/搜索> - *搜索 - Obsidian 中文帮助 - Obsidian Publish*

#### JavaScript 风格

暂无

#### Perl 风格

暂无

### 修饰符(g,i,m,s)

| 修饰符 | 含义 | 描述 |
| --- | --- | --- |
| `i` | ignore - 不区分大小写 | 将匹配设置为不区分大小写，搜索时不区分大小写: A 和 a 没有区别。 |
| `g` | global - 全局匹配 | 查找所有的匹配项。 |
| `m` | multi line - 多行匹配 | 使边界字符 `^` 和 `$` 匹配每一行的开头和结尾，记住是多行，而不是整个字符串的开头和结尾。 |
| `s` | 特殊字符圆点 `.` 中包含换行符 `\n` | 默认情况下的圆点 `.` 是匹配除换行符 `\n` 之外的任何字符，加上 `s` 修饰符之后, `.` 中包含换行符 `\n`。 |

<https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Regular_expressions#正则表达式标志> - *正则表达式 - JavaScript | MDN*

详见：https://www.runoob.com/regexp/regexp-flags.html - *正则表达式 – 修饰符（标记） | 菜鸟教程*

### 断言

详见：https://www.runoob.com/regexp/regexp-syntax.html - *正则表达式 - 语法*

<https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Regular_expressions#断言> - *正则表达式 - JavaScript | MDN*

参考：

1. https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_expressions/Assertions - *Assertions - JavaScript | MDN*
2. https://zh.javascript.info/regexp-lookahead-lookbehind - *前瞻断言与后瞻断言*
3. https://blog.csdn.net/weixin_44189802/article/details/139632682 - *正则表达式，你不知道的先行断言与后行断言_负向前瞻断言-CSDN博客*
4. https://blog.csdn.net/keheinash/article/details/103063843 - *正则表达式中断言的使用以及简单例子_正则断言-CSDN博客*
5. https://www.php.net/manual/zh/regexp.reference.assertions.php - *PHP: 断言 - Manual*
6. https://www.jianshu.com/p/31d5854bde6f - *正则表达式中的断言(assertions) - SpaceCat - 简书*

#### 输入边界断言(^,$)

| 字符 | 描述 |
| --- | :--- |
| `^` | 匹配输入字符串开始的位置。如果设置了 RegExp 对象的 Multiline 属性，^ 还会与 \\n 或 \\r 之后的位置匹配。 |
| `$` | 匹配输入字符串结尾的位置。如果设置了 RegExp 对象的 Multiline 属性，$ 还会与 \\n 或 \\r 之前的位置匹配。 |

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Input_boundary_assertion - *Input boundary assertion: ^, $ - JavaScript | MDN*

#### 单词边界断言(\b,\B)

| 字符 | 描述 |
| --- | :--- |
| `\b` | 匹配一个单词边界，即字与空格间的位置。 |
| `\B` | 非单词边界匹配。 |

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion - *Word boundary assertion: \b, \B - JavaScript | MDN*

#### 先行断言(?=,?!)

- `exp1(?=exp2)`：查找 exp2 前面的 exp1。
- `exp1(?!exp2)`：查找后面不是 exp2 的 exp1。

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion - *Lookahead assertion: (?=...), (?!...) - JavaScript | MDN*

<https://wangdoc.com/javascript/stdlib/regexp#组匹配> - *RegExp 对象 - JavaScript 教程 - 网道*

#### 后行断言(?<=,?<!)

- `(?<=exp2)exp1`：查找 exp2 后面的 exp1。
- `(?<!exp2)exp1`：查找前面不是 exp2 的 exp1。

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion - *Lookbehind assertion: (?<=...), (?<!...) - JavaScript | MDN*

<https://wangdoc.com/es6/regex#后行断言> - *正则的扩展 - ES6 教程 - 网道*

### 原子

<https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Regular_expressions#原子> - *正则表达式 - JavaScript | MDN*

#### 捕获组(...)

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group - *Capturing group: (...) - JavaScript | MDN*

#### 非捕获分组(?:)

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Non-capturing_group - *Non-capturing group: (?:...) - JavaScript | MDN*

#### 具名捕获组(?\<name>)

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group - *Named capturing group: (?<name>...) - JavaScript | MDN*

#### 反向引用(\num)

正则表达式反向引用 `\1` `\2` 类型的用途

匹配连续的字符内容，匹配连续 4 个 0 `/(\d)\1{3}/`

修改密码的功能中，我们常常用到正则表达式，来判断密码不能为连续的数字，如 `111111`，那么正则表达式要如何写呢？

连续相同的六位数字：`([0-9]\1{5})` 或 `([\d]\1{5})`

参考：

1. https://www.cnblogs.com/gddcz/p/9131597.html - *关于正则表达式 \1 \2之类的问题 - 爱诚 - 博客园*
2. https://blog.csdn.net/weixin_43639512/article/details/84785585 - *正则表达式中\1 \2是什么意思_正则表达式\1_空城雀的博客-CSDN博客*

详见：https://www.runoob.com/regexp/regexp-syntax.html - *正则表达式 - 语法*

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Backreference - *Backreference: \1, \2 - JavaScript | MDN*

#### 具名反向引用(\k\<name>)

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Named_backreference - *Named backreference: \k\<name> - JavaScript | MDN*

#### 字符类([...],[^...])

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Character_class - *Character class: [...], [^...] - JavaScript | MDN*

#### 字符类转义(\d,\D,\w,\W,\s,\S)

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape - *Character class escape: \d, \D, \w, \W, \s, \S - JavaScript | MDN*

#### 字符转义(\n,\u{...})

字符 | 描述
--- | :---
`\` | 将下一个字符标记为一个特殊字符、或一个原义字符、或一个 向后引用、或一个八进制转义符。例如，'n' 匹配字符 "n"。'\n' 匹配一个换行符。序列 '\\\\' 匹配 "\\" 而 "\\(" 则匹配 "("。 |

详见：

1. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape - *Character escape: \n, \u{...} - JavaScript | MDN*
2. <https://wangdoc.com/javascript/stdlib/regexp#特殊字符> - *RegExp 对象 - JavaScript 教程 - 网道*

#### 字面字符(a,b)

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Literal_character - *Literal character: a, b - JavaScript | MDN*

#### Unicode 字符类转义(p{...},\P{...})

https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape - *Unicode 字符类转义：\p{...}、\P{...} - JavaScript | MDN*

#### 通配符(.)

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Wildcard - *Wildcard: . - JavaScript | MDN*

### 其他特性

<https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Regular_expressions#其他特性> - *正则表达式 - JavaScript | MDN*

#### 析取（逻辑或）(|)

字符 | 描述
--- | :---
`x\|y` | 匹配 x 或 y。例如，'z\|food' 能匹配 "z" 或 "food"。'(z\|f)ood' 则匹配 "zood" 或 "food"。

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction - *Disjunction: | - JavaScript | MDN*

#### 量词(*, +, ?, {n}, {n,}, {n,m})

| 字符 | 描述 |
| --- | :--- |
| `*` | 匹配前面的子表达式零次或多次。例如，zo\* 能匹配 **"z"** 以及 **"zoo"** 。\* 等价于 {0,}。 |
| `+` | 匹配前面的子表达式一次或多次。例如，zo+ 能匹配 **"zo"** 以及 **"zoo"** ，但不能匹配 **"z"** 。+ 等价于 {1,}。 |
| `?` | 匹配前面的子表达式零次或一次。例如，do(es)? 可以匹配 **"do"** 、 **"does"**、 **"doxy"** 中的 **"do"** 和 **"does"** 。? 等价于 {0,1}。|
| `{n}` | n 是一个非负整数。匹配确定的 **n** 次。例如，o{2} 不能匹配 **"Bob"** 中的 **o**，但是能匹配 **"food"** 中的两个 **o**。 |
| `{n,}` | n 是一个非负整数。至少匹配n 次。例如，o{2,} 不能匹配 **"Bob"** 中的 **o**，但能匹配 **"foooood"** 中的所有 **o**。o{1,} 等价于 o+。o{0,} 则等价于 o\*。 |
| `{n,m}` | m 和 n 均为非负整数，其中 n <= m。最少匹配 n 次且最多匹配 m 次。例如，o{1,3} 将匹配 **"fooooood"** 中的前三个 **o**。o{0,1} 等价于 o?。请注意在逗号和两个数之间不能有空格。 |

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier - _Quantifier: *, +, ?, {n}, {n,}, {n,m} - JavaScript | MDN_

##### 贪婪模式(.*)

`*` 和 `+` 限定符都是贪婪的，因为它们会尽可能多的匹配文字，只有在它们的后面加上一个 `?` 就可以实现非贪婪或最小匹配。

例如，您可能搜索 HTML 文档，以查找在 h1 标签内的内容。HTML 代码如下：

```html
<h1>RUNOOB-菜鸟教程</h1>
```

贪婪：下面的表达式匹配从开始小于符号 (<) 到关闭 h1 标记的大于符号 (>) 之间的所有内容。

```regex
/<.*>/
```

非贪婪：如果您只需要匹配开始和结束 h1 标签，下面的非贪婪表达式只匹配 `<h1>`。

```regex
/<.*?>/
```

通过在 *、+ 或 ? 限定符之后放置 ?，该表达式从"贪婪"表达式转换为"非贪婪"表达式或者最小匹配。

详见：https://www.runoob.com/regexp/regexp-syntax.html - *正则表达式 - 语法*

贪婪模式：`.*`

非（取消）贪婪模式：`.*?`（使用 ? 来取消贪婪，? 表示匹配前面的内容 0 次或者 1 次）

### 转义序列

<https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Regular_expressions#转义序列> - *正则表达式 - JavaScript | MDN*

#### \B
#### \D
#### \P
#### \S
#### \W
#### \b
#### \c
#### \d
#### \f
#### \k
#### \n
#### \p
#### \r
#### \s
#### \t
#### \u
#### \v
#### \w
#### \0

## 用法

### 在编程语言中使用

#### Java

教程：

1. https://www.runoob.com/java/java-regular-expressions.html - *Java 正则表达式 | 菜鸟教程*

#### JavaScript

教程：

1. https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions - *正则表达式 - JavaScript | MDN*
2. https://wangdoc.com/javascript/stdlib/regexp - *RegExp 对象 - JavaScript 教程 - 网道*
3. https://wangdoc.com/es6/regex - *正则的扩展 - ES6 教程 - 网道*

用法：

方式一：

```javascript
var str = "abc123def";
var pattern = /[0-9]+/;
document.write(str.match(pattern)); // 输出：123
```

方式二：

```javascript
var pattern = /^[a-zA-Z0-9_-]{4,16}$/; // 用户名正则，4 到 16 位（字母，数字，下划线，减号）
document.write(pattern.test("runoob123")); // 输出：true
```

方式三：

[代码片段 - javascript 字符串替换](snippets/javascript.md#字符串替换)

#### PHP

> `#` 号可以替代 `/`

教程：

1. https://www.php.net/manual/zh/book.pcre.php - *PHP: PCRE - Manual*
2. https://www.runoob.com/php/php-pcre.html - *PHP 正则表达式(PCRE) | 菜鸟教程*

函数：

- preg_match() — *执行匹配正则表达式*

  https://www.php.net/manual/zh/function.preg-match.php - *PHP: preg_match - Manual*

  https://www.runoob.com/php/php-preg_match.html - *PHP preg_match() 函数 | 菜鸟教程*

  `preg_match(pattern , string);`

- preg_match_all() — *执行一个全局正则表达式匹配*

  https://www.php.net/manual/zh/function.preg-match-all.php - *PHP: preg_match_all - Manual*

  https://www.runoob.com/php/php-preg_match_all.html - *PHP preg_match_all() 函数 | 菜鸟教程*

参考：

1. https://blog.csdn.net/fujiafeihudui/article/details/39402007 - *php 正则表达式中的#号*
2. https://blog.csdn.net/qq_46456049/article/details/108589822 - *php(正则匹配)*
3. https://www.cnblogs.com/liliuguang/p/10411396.html - *php中正则表达式详解*
4. http://c.biancheng.net/view/7569.html - *PHP正则表达式，看这一篇就够了*

### 在应用程序中使用

正则替换，有关详细信息，请参阅“[regex](snippets/regex.md)”。

#### Grep

暂无

#### Vim

<https://wangchujiang.com/reference/docs/vim#vim-搜索和替换> - *Vim 备忘清单 & vim cheatsheet & Quick Reference*

## 工具

### Web

1. https://regex101.com/ - *regex101: build, test, and debug regex* [GitHub Repo](https://github.com/firasdib/Regex101)
    ![GitHub last commit](https://img.shields.io/github/last-commit/firasdib/Regex101?logo=github&color=blue)
    ![GitHub Release Date - Published_At](https://img.shields.io/github/release-date/firasdib/Regex101?display_date=published_at&logo=github)
    ![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/firasdib/Regex101?logo=github)
    ![GitHub Repo stars](https://img.shields.io/github/stars/firasdib/Regex101?style=social)
2. https://ihateregex.io/ - *i Hate Regex - The Regex Cheat Sheet* [GitHub Repo](https://github.com/geongeorge/i-hate-regex)
    ![GitHub last commit](https://img.shields.io/github/last-commit/geongeorge/i-hate-regex?logo=github&color=blue)
    ![GitHub Release Date - Published_At](https://img.shields.io/github/release-date/geongeorge/i-hate-regex?display_date=published_at&logo=github)
    ![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/geongeorge/i-hate-regex?logo=github)
    ![GitHub Repo stars](https://img.shields.io/github/stars/geongeorge/i-hate-regex?style=social)
3. https://toolwa.com/regex/ - *正则表达式在线测试 - 工具哇 - 在线工具大全*
4. https://www.lddgo.net/string/text-replace - *在线文本替换工具*
5. https://c.runoob.com/front-end/854/ - *正则表达式在线测试*

## 实例

https://wangchujiang.com/regexp-example/ - *RegExp Example 正则实例大全*

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

### 中文字符

方式 1：

```regex
/[\u4e00-\u9fa5]+/
```

方式 2：

```regex
/[\x{4e00}-\x{9fa5}]+/
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

### URI

```regex
/^http://([\w-]+\.)+[\w-]+(/[\w-./?%&=]*)?$/
```

```regex
/[a-zA-z]+://[^\s]*/
```

参考：

1. https://www.freecodecamp.org/news/how-to-write-a-regular-expression-for-a-url/ - *URL RegEx Pattern – How to Write a Regular Expression for a URL*
2. https://blog.walterlv.com/post/match-web-url-using-regex.html - *使用正则表达式尽可能准确匹配域名/网址 - walterlv*
3. https://blog.csdn.net/weixin_44311458/article/details/106586501 - *正则匹表达式 — 匹配URL地址+常用正则整理（建议收藏，比较全）_正则表达式匹配url-CSDN博客*

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

### 匹配 HTML 标签及内容

https://www.runoob.com/regexp/regexp-example.html - *正则表达式 – 示例 | 菜鸟教程*

### 匹配重复行

https://www.regular-expressions.info/duplicatelines.html - *Regexp Example: Deleting Duplicate Lines or Items with Regular Expressions*

### 查看更多

https://c.runoob.com/front-end/854/#about - *正则表达式在线测试 | 菜鸟工具*

## 参考

1. https://zhidao.baidu.com/question/1827099541890203308/answer/3661468034.html - *正则表达式中的.*和.*?的区别是什么?_百度知道*
2. https://www.jianshu.com/p/ff05d467e145 - *正则表达式如何匹配多行的所有任意字符 - 简书*
