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

1. https://wangdoc.com/html/encode - *HTML 字符编码 - HTML 教程 - 网道*

2. https://www.runoob.com/tags/ref-charactersets.html - *HTML 字符集 | 菜鸟教程*

3. https://www.runoob.com/charsets/html-charsets.html - *HTML 字符集 | 菜鸟教程*

## 分类

### ASCII

> **ASCII** ( *American Standard Code for Information Interchange，美国信息交换标准码* ）是计算机中最常用的编码方式，用于将字母，数字，标点符号和控制字符转换为计算机可以理解的数字形式。从 2007 年开始逐渐被[UTF-8](https://developer.mozilla.org/zh-CN/docs/Glossary/UTF-8)代替。
>
> —— https://developer.mozilla.org/zh-CN/docs/Glossary/ASCII - *ASCII - MDN Web 文档术语表：Web 相关术语的定义 | MDN*

1. https://c.runoob.com/front-end/6318/ - *ASCII 表 | 菜鸟工具*

2. https://www.runoob.com/tags/html-ascii.html - *HTML ASCII 参考手册 | 菜鸟教程*

3. https://www.runoob.com/charsets/ref-html-ascii.html - *HTML ASCII 参考手册 | 菜鸟教程*

### ANSI

1. https://www.runoob.com/charsets/ref-html-ansi.html - *HTML ANSI 参考手册 | 菜鸟教程*

### ISO

#### ISO-8859-1

1. https://www.runoob.com/tags/ref-entities.html - *HTML ISO-8859-1 参考手册 | 菜鸟教程*

2. https://www.runoob.com/charsets/ref-html-8859.html - *HTML ISO-8859-1 参考手册 | 菜鸟教程*

### Unicode

> Unicode 是一种[字符集](https://developer.mozilla.org/zh-CN/docs/Glossary/Character_set)标准，用于对来自世界上不同语言、文字系统和符号进行编号和[字符](https://developer.mozilla.org/zh-CN/docs/Glossary/Character)定义。通过给每个字符分配一个编号，程序员可以创建[字符编码](https://developer.mozilla.org/zh-CN/docs/Glossary/Character_encoding)，让计算机在同一个文件或程序中存储、处理和传输任何语言组合。
>
> 在 Unicode 定义之前，在同一数据中混合使用不同的语言是很困难的，而且容易出错。例如，一个字符集存储的是日文字符，而另一个字符集存储的是阿拉伯字母。如果没有明确标明数据的哪些部分属于哪个字符集，其他程序和计算机就会错误地显示文本，或者在处理过程中损坏文本。如果你曾经见过像 (`“”`) 被替换为胡言乱语 `Ã‚Â£`，那么你就已经看到过这个被称为 [Mojibake](https://zh.wikipedia.org/wiki/Mojibake) 的问题。
>
> 网络上最常见的 Unicode 字符编码是[UTF-8](https://developer.mozilla.org/zh-CN/docs/Glossary/UTF-8)。还存在一些其他编码，如 UTF-16 或过时的 UCS-2，但推荐使用 UTF-8。
>
> —— https://developer.mozilla.org/zh-CN/docs/Glossary/Unicode - *Unicode - MDN Web 文档术语表：Web 相关术语的定义 | MDN*

参考：

1. https://www.ruanyifeng.com/blog/2014/12/unicode.html - *Unicode与JavaScript详解 - 阮一峰的网络日志*

#### UTF-8 ✅

> UTF-8 (UCS Transformation Format 8) 是万维网上最常用的[字符编码](https://developer.mozilla.org/zh-CN/docs/Glossary/Character_encoding)。每个字符由 1 到 4 个字节表示。UTF-8 与 [ASCII](https://developer.mozilla.org/zh-CN/docs/Glossary/ASCII) 向后兼容，可以表示任何标准的 Unicode 字符。
>
> 前 128 个 UTF-8 字符与前 128 个 ASCII 字符 (编号为 0-127) 精确匹配，这意味着现有的 ASCII 文本已经是有效的 UTF-8。所有其他字符都使用 2 到 4 个字节。每个字节都有一些用于编码目的的保留位。由于非 ASCII 字符需要一个以上的字节来存储，如果字节被分隔而不重组，那么它们就会有损坏的风险。
>
> —— https://developer.mozilla.org/zh-CN/docs/Glossary/UTF-8 - *UTF-8 - MDN Web 文档术语表：Web 相关术语的定义 | MDN*

https://www.runoob.com/charsets/ref-html-utf8.html - *HTML UTF-8 参考手册 | 菜鸟教程*


##### HTML Emoji

1. https://www.runoob.com/tags/html-emoji.html  - *HTML Emoji | 菜鸟教程*

2. https://www.runoob.com/charsets/ref-emoji.html  - *Emoji 参考手册 | 菜鸟教程*

###### Emoji 肤色

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

#### UTF-16

暂无

## 用法

### HTML 符号实体

1. https://www.runoob.com/html/html-entities.html - *HTML 字符实体 | 菜鸟教程*

2. https://www.runoob.com/tags/html-symbols.html - *HTML 符号实体参考手册 | 菜鸟教程*

3. https://www.runoob.com/charsets/ref-html-symbols.html - *HTML 符号实体参考手册 | 菜鸟教程*

用法：

| 序号 | 字符  | 实体编号（十进制）*HTML CODE*  | 实体编码（十六进制）*HEX CODE* | 实体名称 *HTML ENTITY*  | 字符描述 | 备注
|---|---|---|---|---|---|---|
| 1 | 空格 | `&#160;` | `&#xA0;` | `&nbsp;` | 非间断空格（non-breaking space）| [via](https://www.runoob.com/tags/html-ascii.html)
| 2 | w | `&#119;` | `&#x2F;` | N/A | 小写字母 w | [via](https://www.runoob.com/tags/html-ascii.html)
| 3 | / | `&#47;` | `&#x2F;` | `&sol;` | 斜杠 | [via](https://www.runoob.com/tags/html-ascii.html)
| 4 | . | `&#46;` | `&#x2E;` | `&period;` | 句号（英文） | [via](https://www.runoob.com/tags/html-ascii.html)

#### 在 HTML 文件中使用

| 方式一（直接复制） | 方式二（十进制）      | 方式三（十六进制）    |
| ------------------ | --------------------- | --------------------- |
| `❤`                  | &#10084; `&#10084;`   | &#x2764; `&#x2764;`   |
| `🦁`                  | &#129409; `&#129409;` | &#x1F981; `&#x1F981;` |

参考：

1. https://tool.oschina.net/commons?type=2 - *HTML 转义字符对照表*

#### 在 CSS 文件中使用

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

2. https://www.runoob.com/charsets/ref-emoji.html - *Emoji 参考手册 | 菜鸟教程*

#### 在 JS 中使用

将单引号 `&#x27;` 替换成 `'`

```js
"Node.js® is a JavaScript runtime built on Chrome&#x27;s V8 JavaScript engine.".replace(/&#x27;/gim, "'")
```

#### HTML 特殊字符编码对照表

1. https://www.toptal.com/designers/htmlarrows/ - *HTML Symbols, Entities, Characters and Codes — HTML Arrows*

2. https://www.cnblogs.com/grootbaby/p/13827867.html - *HTML特殊字符编码对照表 - 格鲁特baby - 博客园*

    1. https://www.cnblogs.com/grootbaby/p/13827869.html - *HTML特殊字符编码对照表 —— （一） - 格鲁特baby - 博客园*

    2. https://www.cnblogs.com/grootbaby/p/13827868.html - *HTML特殊字符编码对照表 —— （二） - 格鲁特baby - 博客园*

### 文本编码

https://support.microsoft.com/zh-cn/office/在打开和保存文件时选择文本编码-60d59c21-88b5-4006-831c-d536d42fd861 - *在打开和保存文件时选择文本编码 - Microsoft 支持*

参考：

1. https://segmentfault.com/a/1190000007073776 - *linux（Mac）下查看文件编码及修改编码 - hello, world - SegmentFault 思否*

2. https://blog.csdn.net/SimonSucks/article/details/106112069 - *Linux查看文件编码格式_linux 查看文件编码格式-CSDN博客*

3. https://jingyan.baidu.com/article/375c8e198ce21564f3a22934.html - *win10怎么查看文本文件编码格式-百度经验*

## 工具

https://www.amp-what.com/ - *Discover Unicode Character Entities & Symbols | AmpWhat* \
\> _via https://ndpsoftware.com/git-cheatsheet.html - *NDP Software :: Git Cheatsheet*_
