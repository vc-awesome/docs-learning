# 字符编码

## 简介

> **字符集**是一种让计算机知道如何识别 [Character](https://developer.mozilla.org/zh-CN/docs/Glossary/Character) 的编码系统，这些字符包括字母、数字、标点符号和空白字符。
>
> 早期，由于各国使用的语言不同而发展出各自的字符集，例如日语的 Kanji JIS(例如 Shift-JIS, EUC-JP 等)，繁体中文的 Big5 和俄罗斯的 KOI8-R。然而，[Unicode](https://developer.mozilla.org/zh-CN/docs/Glossary/Unicode) 因其对通用语言的支持，逐渐成为最被接受的字符集。
>
> 如果一个字符集使用不正确 (例如，对于以 Big5 编码的文章使用 Unicode)，你可能会看到全是乱码，这被称为 [Mojibake](https://zh.wikipedia.org/wiki/Mojibake).
>
> ——  <cite>[Character set - MDN Web 文档术语表：Web 相关术语的定义 | MDN](https://developer.mozilla.org/zh-CN/docs/Glossary/Character_set)</cite>

## 教程

1. https://www.runoob.com/charsets/html-charsets.html - *HTML 字符集 | 菜鸟教程*
2. https://www.runoob.com/tags/ref-charactersets.html - *HTML 字符集 | 菜鸟教程*

### 速查表

https://symbl.cc/ - *SYMBL (◕‿◕) Symbols, Emojis, Characters, Scripts, Alphabets, Hieroglyphs and the entire Unicode*

- Symbol - 字符
- BIN - 二进制
- OCT - 八进制
- DEC - 十进制
- HEX - 十六进制
- Unicode Name - Unicode 名称
- Unicode Number - Unicode 编号
- HTML Code - HTML 代码
- CSS Code - CSS 代码
- Entity - 实体
- URI Encode - URI 编码
- Escape sequences - 转义序列

Symbol | Unicode Name | Unicode Number | BIN | OCT | DEC | HEX | HEX Code | HTML Code | HTML Entity | CSS Code | URI Encode | Reference
--- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | ---
  | Space | U+0020 | 10 0000 | 40 | 32 | 20 | `&#x20;` | `&#32;` | - | \0020 | %20 | https://symbl.cc/en/0020/
, | Comma | U+002C | 10 1100 | 54 | 44 | 2C | `&#x2c;` | `&#44;` | `&comma;` | \002C | %2C | https://symbl.cc/en/002C/
\- | Hyphen-Minus | U+002D | 10 1101 | 55 | 45 | 2D | `&#x2d;` | `&#45;` | `&minus;` | \002D | %2D | https://symbl.cc/en/002D/
. | Full Stop | U+002E | ‪10 1110 | 56 | 46 | 2E | `&#x2e;` | `&#46;` | `&period;` | \002E | %2E | https://symbl.cc/en/002E/
/ | Solidus | U+002F | ‪10 1111 | 57 | 47 | 2F | `&#x2f;` | `&#47;` | `&sol;` | \002F | %2F | https://symbl.cc/en/002F/
: | Colon | U+003A | 11 1010 | 72 | 58 | 3A | `&#x3a;` | `&#58;` | `&colon;` | \003A | %3A | https://symbl.cc/en/003A/
< | Less-Than Sign | U+003C | 11 1100 | 74 | 60 | 3C | `&#x3c;` | `&#60;` | `&lt;` | \003C | %3C | https://symbl.cc/en/003C/
\> | Greater-Than Sign | U+003E | 11 1110 | 76 | 62 | 3E | `&#x3e;` | `&#62;` | `&gt;` | \003E | %3E | https://symbl.cc/en/003E/
\ | Reverse Solidus | U+005C | ‪101 1100 | 134 | 92 | 5C | `&#x5c` | `&#92;` | `&bsol;` | \005C | %5C | https://symbl.cc/en/005C/
a | Latin Small Letter A | U+0061 | ‪110 0001 | 142 | 97 | 61 | `&#x61` | `&#142;` | - | \0061 | %61 | https://symbl.cc/en/0061/
  | No-Break Space | U+00A0 | ‪1010 0000 | 240 | 160 | A0 | `&#xa0` | `&#160;` | `&nbsp;` | \00A0 | %A0 | https://symbl.cc/en/00A0/

参考：

1. https://www.toptal.com/designers/htmlarrows/ - *HTML Symbols, Entities, Characters and Codes — HTML Arrows*
2. https://www.cnblogs.com/grootbaby/p/13827867.html - *HTML特殊字符编码对照表 - 格鲁特baby - 博客园*
    1. https://www.cnblogs.com/grootbaby/p/13827869.html - *HTML特殊字符编码对照表 —— （一） - 格鲁特baby - 博客园*
    2. https://www.cnblogs.com/grootbaby/p/13827868.html - *HTML特殊字符编码对照表 —— （二） - 格鲁特baby - 博客园*

#### ASCII

1. https://wangchujiang.com/reference/docs/ascii-code.html - *ASCII Code 备忘清单 & ascii-code cheatsheet & Quick Reference*
2. https://www.runoob.com/charsets/ref-html-ascii.html - *HTML ASCII 参考手册 | 菜鸟教程*
3. https://www.runoob.com/tags/html-ascii.html - *HTML ASCII 参考手册 | 菜鸟教程*
4. https://c.runoob.com/front-end/6318/ - *ASCII 表 | 菜鸟工具*

#### Emoji

1. https://www.runoob.com/charsets/ref-emoji.html  - *Emoji 参考手册 | 菜鸟教程*

#### HTML Entity

1. https://wangchujiang.com/reference/docs/html-char.html - *HTML 字符实体备忘清单 & html-char cheatsheet & Quick Reference*
2. https://www.runoob.com/charsets/ref-html-symbols.html - *HTML 符号实体参考手册 | 菜鸟教程*
3. https://www.runoob.com/html/html-entities.html - *HTML 字符实体 | 菜鸟教程*
4. https://www.runoob.com/tags/html-symbols.html - *HTML 符号实体参考手册 | 菜鸟教程*

分类：
- C0 控制与基本的 Latin（拉丁字母）
    - 范围：十进制 0-127，十六进制 0020-007F。
    - http://www.runoob.com/charsets/ref-utf-basic-latin.html - *UTF-8 C0 控制与基本的 Latin（拉丁字母） | 菜鸟教程*
- C1 控制与 Latin1 补充
    - 范围：十进制 128-255，十六进制 0080-00FF。
    - http://www.runoob.com/charsets/ref-utf-latin1-supplement.html - *UTF-8 C1 控制与 Latin1 补充 | 菜鸟教程*
- Latin（拉丁字母）扩展 A
    - 范围：十进制 256-383，十六进制 0100-017F。
    - http://www.runoob.com/charsets/ref-utf-latin-extended-a.html - *UTF-8 Latin（拉丁字母）扩展 A | 菜鸟教程*
- Latin（拉丁字母）
    - 扩展 B范围：十进制 384-591，十六进制 0180-024F。
    - http://www.runoob.com/charsets/ref-utf-latin-extended-b.html - *UTF-8 Latin（拉丁字母）扩展 B | 菜鸟教程*
- 变音符号
    - 范围：十进制 768-879，十六进制 0300-036F。
    - http://www.runoob.com/charsets/ref-utf-diacritical.html - *UTF-8 变音符号 | 菜鸟教程*
- Greek（希腊字母）与 Coptic（科普特字母）
    - 范围：十进制 880-1023，十六进制 0370-03FF。
    - http://www.runoob.com/charsets/ref-utf-greek.html - *UTF-8 Greek（希腊字母）与 Coptic（科普特字母） | 菜鸟教程*
- Cyrillic（西里尔字母）
    - 范围：十进制 1024-1279，十六进制 0400-04FF。
    - http://www.runoob.com/charsets/ref-utf-cyrillic.html - *UTF-8 Cyrillic（西里尔字母） | 菜鸟教程*
- Cyrillic（西里尔字母） 补充
    - 范围：十进制 1280-1327，十六进制 0500-052F。
    - http://www.runoob.com/charsets/ref-utf-cyrillic-supplement.html - *UTF-8 Cyrillic（西里尔字母） 补充 | 菜鸟教程*
- 常用标点符号（General Punctuation）
    - 范围：十进制 8192-8303，十六进制 2000-206F。
    - http://www.runoob.com/charsets/ref-utf-punctuation.html - *UTF-8 常用标点符号 | 菜鸟教程*

## 入门指南

### ASCII

> **ASCII** ( *American Standard Code for Information Interchange，美国信息交换标准码* ）是计算机中最常用的编码方式，用于将字母，数字，标点符号和控制字符转换为计算机可以理解的数字形式。从 2007 年开始逐渐被[UTF-8](https://developer.mozilla.org/zh-CN/docs/Glossary/UTF-8)代替。
>
> —— https://developer.mozilla.org/zh-CN/docs/Glossary/ASCII - *ASCII - MDN Web 文档术语表：Web 相关术语的定义 | MDN*

设备控制字符（编号：00-31 加上 127，共 33 个）：

### Unicode

> Unicode 是一种[字符集](https://developer.mozilla.org/zh-CN/docs/Glossary/Character_set)标准，用于对来自世界上不同语言、文字系统和符号进行编号和[字符](https://developer.mozilla.org/zh-CN/docs/Glossary/Character)定义。通过给每个字符分配一个编号，程序员可以创建[字符编码](https://developer.mozilla.org/zh-CN/docs/Glossary/Character_encoding)，让计算机在同一个文件或程序中存储、处理和传输任何语言组合。
>
> 在 Unicode 定义之前，在同一数据中混合使用不同的语言是很困难的，而且容易出错。例如，一个字符集存储的是日文字符，而另一个字符集存储的是阿拉伯字母。如果没有明确标明数据的哪些部分属于哪个字符集，其他程序和计算机就会错误地显示文本，或者在处理过程中损坏文本。如果你曾经见过像 (`“”`) 被替换为胡言乱语 `Ã‚Â£`，那么你就已经看到过这个被称为 [Mojibake](https://zh.wikipedia.org/wiki/Mojibake) 的问题。
>
> 网络上最常见的 Unicode 字符编码是[UTF-8](https://developer.mozilla.org/zh-CN/docs/Glossary/UTF-8)。还存在一些其他编码，如 UTF-16 或过时的 UCS-2，但推荐使用 UTF-8。
>
> —— https://developer.mozilla.org/zh-CN/docs/Glossary/Unicode - *Unicode - MDN Web 文档术语表：Web 相关术语的定义 | MDN*

官方：

1. https://home.unicode.org/ - *Unicode – The World Standard for Text and Emoji*

参考：

1. https://www.ruanyifeng.com/blog/2014/12/unicode.html - *Unicode与JavaScript详解 - 阮一峰的网络日志*

#### UTF-8

> UTF-8 (UCS Transformation Format 8) 是万维网上最常用的[字符编码](https://developer.mozilla.org/zh-CN/docs/Glossary/Character_encoding)。每个字符由 1 到 4 个字节表示。UTF-8 与 [ASCII](https://developer.mozilla.org/zh-CN/docs/Glossary/ASCII) 向后兼容，可以表示任何标准的 Unicode 字符。
>
> 前 128 个 UTF-8 字符与前 128 个 ASCII 字符 (编号为 0-127) 精确匹配，这意味着现有的 ASCII 文本已经是有效的 UTF-8。所有其他字符都使用 2 到 4 个字节。每个字节都有一些用于编码目的的保留位。由于非 ASCII 字符需要一个以上的字节来存储，如果字节被分隔而不重组，那么它们就会有损坏的风险。
>
> —— https://developer.mozilla.org/zh-CN/docs/Glossary/UTF-8 - *UTF-8 - MDN Web 文档术语表：Web 相关术语的定义 | MDN*

https://www.runoob.com/charsets/ref-html-utf8.html - *HTML UTF-8 参考手册 | 菜鸟教程*

##### Emoji

Symbol | Unicode Name | Unicode Number | DEC | HEX | HTML Code | CSS Code | Emoji Name | Reference
--- | --- | --- | --- | --- | --- | --- | --- | ---
☝ | White Up Pointing Index | U+261D | 9757 | 261D | `&#9757;` | \261D | Index Pointing Up | https://symbl.cc/en/261D-index-finger-pointing-up-emoji/
🦁 | Lion Face | U+1F981 | 129409 | 1F981 | `&#129409;` | \1F981 | Lion| https://symbl.cc/en/1F981-lion-emoji/

1. https://www.runoob.com/tags/html-emoji.html  - *HTML Emoji | 菜鸟教程*

###### 肤色

https://www.runoob.com/charsets/emoji-skin-tones.html  - *Emoji 肤色 | 菜鸟教程*

用法：

```html
&#129409; 不设置肤色

&#129409;&#127999; 深色肤色

&#129409;&#127998; 中等深肤色
```

效果（下列表情不支持肤色）：

&#129409; 不设置肤色

&#129409;&#127999; 深色肤色

&#129409;&#127998; 中等深肤色

用法：

```html
&#9757; 不设置肤色

&#9757;&#127999; 深色

&#9757;&#127998; 中等深色

&#9757;&#127997; 中等色

&#9757;&#127996; 中等浅色

&#9757;&#127995; 浅肤色
```

效果：

&#9757; 不设置肤色

&#9757;&#127999; 深色

&#9757;&#127998; 中等深色

&#9757;&#127997; 中等色

&#9757;&#127996; 中等浅色

&#9757;&#127995; 浅肤色

### 标准和规范

https://www.unicode.org/references/ - *Unicode Reference Lists*

#### ANSI

> ANSI 是 Windows 95 及其之前的 Windows 系统中默认的字符集，也称为 Windows-1252。
> 
> ANSI 和 ISO-8859-1 非常相似，唯一的不同是在 32 个字符上。
> 
> 在 ANSI 中，从 128 到 159 的字符用于一些有用的字符，比如欧元符号。
> 
> 在 ISO-8859-1 中，这些字符映射为在 HTML 中不起作用的控制字符。
> 
> 许多 Web 开发者声明 ISO-8859-1，并使用这 32 个值，就像它们使用的是 Windows-1252。
> 
> 由于这种常见的误解，当 ISO-8859-1 被声明时，浏览器将更改为 Windows-1252。这对以下文档类型都适用：HTML4、HTML5 和 XHTML。

1. https://www.runoob.com/charsets/ref-html-ansi.html - *HTML ANSI 参考手册 | 菜鸟教程*

#### ISO-8859-1

> 在 HTML 4.01 中，ISO-8859-1 是默认的字符。
> 
> ISO（全称 International Standards Organization）为不同的字母/语言定义了标准的字符集。

1. https://www.runoob.com/charsets/ref-html-8859.html - *HTML ISO-8859-1 参考手册 | 菜鸟教程*
2. https://www.runoob.com/tags/ref-entities.html - *HTML ISO-8859-1 参考手册 | 菜鸟教程*

## 用法

### 在编程语言中使用

#### HTML

教程：

1. https://wangdoc.com/html/encode - *HTML 字符编码 - HTML 教程 - 网道*

用法：

方式一（直接复制） | 方式二（十进制） | 方式三（十六进制）
--- | --- | ---
`❤` | `&#10084;` | `&#x2764;`

工具：

1. https://www.jyshare.com/front-end/691/ - *HTML 编码 / 解码 | 菜鸟工具*

参考：

1. https://tool.oschina.net/commons?type=2 - *HTML 转义字符对照表*

#### CSS

在 [CSS content 属性 | 菜鸟教程](https://www.runoob.com/cssref/pr-gen-content.html) 中使用

```css
// 使用上面表格十六进制的方式
a:after {
  // ❤
  content: "\2764"; //特殊字符或形状
  // 🦁
  content: "\1F981"; //特殊字符或形状
}
```

参考：

1. https://www.cnblogs.com/wujindong/p/5630656.html - *html特殊字符 编码css3 content:"我是特殊符号" - Window2016 - 博客园*

#### JavaScript

教程：

1. <https://wangdoc.com/javascript/types/string#字符集> - *字符串 - JavaScript 教程 - 网道*

用法：

将单引号 `&#x27;` 替换成 `'`

```js
"Node.js® is a JavaScript runtime built on Chrome&#x27;s V8 JavaScript engine.".replace(/&#x27;/gim, "'")
```

### 转义字符

转义字符  | 意义 | Unicode Name | Unicode Number | BIN | DEC | HEX | HTML Code | CSS Code | Reference
--- | --- | --- | --- | --- | --- | --- | --- | --- | ---
\0 | 空字符(NUL) | Null | U+0000 | 0 | 0 | 00 | `&#0;` | \0000 | https://symbl.cc/en/0000/
\a | 响铃(BEL) | Bell | U+0007 | 111 |  7 | 07 | `&#7;` | \0007 | https://symbl.cc/en/0007/
\b | 退格(BS) ，将当前位置移到前一列 | Backspace | U+0008 | 1000 | 8 | 08 | `&#8;` | \0008 | https://symbl.cc/en/0008/
\t | 水平制表(HT) （跳到下一个TAB位置） | Horizontal Tabulation | U+0009 | 1001 | 9 | 09 | `&#9;` | \0009 | https://symbl.cc/en/0009/
\n | 换行(LF) ，将当前位置移到下一行开头 | New Line | U+000A | 1010 | 10 | 0A | `&#10;` | \000A | https://symbl.cc/en/000A/
\v | 垂直制表(VT) | Vertical Tabulation | U+000B | 1011 |  11 | 0B | `&#11;` | \000B | https://symbl.cc/en/000B/
\f | 换页(FF)，将当前位置移到下页开头 | Form Feed | U+000C | 1100 | 12 | 0C | `&#12` | \000C | https://symbl.cc/en/000C/
\r | 回车(CR) ，将当前位置移到本行开头 | Carriage Return | U+000D | 1101 | 13 | 0D | `&#13;` | \000D | https://symbl.cc/en/000D/

参考：

1. https://baike.baidu.com/item/转义字符/86397 - *转义字符_百度百科*
2. <https://wangdoc.com/javascript/types/string#转义> - *字符串 - JavaScript 教程 - 网道*

#### 回车和换行

转义字符  | 意义 | Unicode Name
--- | --- | ---
\n | 换行(LF) ，将当前位置移到下一行开头 | Line Feed
\r | 回车(CR) ，将当前位置移到本行开头 | Carriage Return

系统 | 换行符
--- | ---
Windows | `\r\n`
Mac | `\r`
Unix | `\n`

参考：

1. https://www.ruanyifeng.com/blog/2006/04/post_213.html - *回车和换行 - 阮一峰的网络日志*
2. https://zhuanlan.zhihu.com/p/380574688 - *CRLF和LF的差异 - 知乎*
3. https://www.cnblogs.com/jiayouba/p/15309132.html - *CRLF和LF的差异 - 飞叶飞花 - 博客园*
4. https://blog.csdn.net/weixin_43899065/article/details/124864157 - *换行符CRLF LF及在GIT设置_git 换行符_幸运的lucia的博客-CSDN博客*
5. https://www.jianshu.com/p/6c6ae0c8daa5 - *换行符(CRLF/LF) - 简书*
6. https://qa.1r1g.com/sf/ask/1946753091/ - *如何在单个文件中用lf替换crlf | 那些遇到过的问题*

### 文件编码

教程：

1. https://support.microsoft.com/zh-cn/office/在打开和保存文件时选择文本编码-60d59c21-88b5-4006-831c-d536d42fd861 - *在打开和保存文件时选择文本编码 - Microsoft 支持*

参考：

1. https://segmentfault.com/a/1190000007073776 - *linux（Mac）下查看文件编码及修改编码 - hello, world - SegmentFault 思否*
2. https://blog.csdn.net/SimonSucks/article/details/106112069 - *Linux查看文件编码格式_linux 查看文件编码格式-CSDN博客*
3. https://jingyan.baidu.com/article/375c8e198ce21564f3a22934.html - *win10怎么查看文本文件编码格式-百度经验*

### URL 编码

Character | Encoding
--- | ---
':' | %3A
'/' | %2F
'?' | %3F
'#' | %23
'[' | %5B
']' | %5D
'@' | %40
'!' | %21
'$' | %24
'&' | %26
"'" | %27
'(' | %28
')' | %29
'*' | %2A
'+' | %2B
',' | %2C
';' | %3B
'=' | %3D
'%' | %25
' ' | %20 or +

教程：

1. https://developer.mozilla.org/zh-CN/docs/Glossary/Percent-encoding - *百分号编码 - MDN Web 文档术语表：Web 相关术语的定义 | MDN*
2. <https://wangdoc.com/javascript/bom/location#url-的编码和解码> - *Location 对象，URL 对象，URLSearchParams 对象 - JavaScript 教程 - 网道*
3. http://www.runoob.com/tags/html-urlencode.html - *HTML URL 编码参考手册 | 菜鸟教程*

### Base64 编码

教程：

1. https://developer.mozilla.org/zh-CN/docs/Glossary/Base64 - *Base64 - MDN Web 文档术语表：Web 相关术语的定义 | MDN*
2. <https://wangdoc.com/javascript/types/string#base64-转码> - *字符串 - JavaScript 教程 - 网道*

## 工具

https://www.amp-what.com/ - *Discover Unicode Character Entities & Symbols | AmpWhat* \
\> _via https://ndpsoftware.com/git-cheatsheet.html - *NDP Software :: Git Cheatsheet*_

### Base64 转码

1. https://www.jyshare.com/front-end/693/ - *Base64 编码 / 解码 | 菜鸟工具*

### Unicode 转码

1. https://www.jyshare.com/front-end/3602/ - *在线 Unicode 编码转换 | 菜鸟工具*

### URL 转码

1. https://www.jyshare.com/front-end/695/ - *URL 编码 / 解码 | 菜鸟工具*
