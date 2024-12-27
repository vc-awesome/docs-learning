# 基本知识

## 标准规格

> 规格文件是计算机语言的官方标准，详细描述语法规则和实现方法。
> 
> 一般来说，没有必要阅读规格，除非你要写编译器。因为规格写得非常抽象和精炼，又缺乏实例，不容易理解，而且对于解决实际的应用问题，帮助不大。但是，如果你遇到疑难的语法问题，实在找不到答案，这时可以去查看规格文件，了解语言标准是怎么说的。规格是解决问题的“最后一招”。

https://github.com/wangdoc/es6-tutorial/blob/master/docs/spec.md - *es6-tutorial/docs/spec.md at master · wangdoc/es6-tutorial · GitHub*

[规范化 - 维基百科，自由的百科全书](https://zh.m.wikipedia.org/wiki/%E6%A0%87%E5%87%86%E5%8C%96)

https://www.ietf.org/ - *IETF | Internet Engineering Task Force*\
\> 互联网工程任务组（英语：Internet Engineering Task Force，缩写：IETF）是一个开放的标准组织，负责开发和推广自愿互联网标准（Internet Standard，英文缩写为STD），特别是构成TCP/IP协议族（TCP/IP）的标准。 — *[互联网工程任务组 - 维基百科，自由的百科全书](https://zh.m.wikipedia.org/wiki/%E4%BA%92%E8%81%94%E7%BD%91%E5%B7%A5%E7%A8%8B%E4%BB%BB%E5%8A%A1%E7%BB%84)*

https://www.rfc-editor.org/ - *» RFC Editor*\
\> 请求意见稿（英语：Request for Comments，缩写：RFC），又翻译作意见征求，意见请求，请求评论、请求评议等，是由互联网工程任务组（IETF）发布的一系列备忘录。文件收集了有关互联网相关信息，以及UNIX和互联网社群的软件文件，以编号排定。目前RFC文件是由互联网协会（ISOC）赞助发行。 — *[RFC - 维基百科，自由的百科全书](https://zh.m.wikipedia.org/wiki/RFC)*

- https://juejin.cn/post/6844903716051484679 - *[译] 如何阅读 RFC 文档 - 掘金*

https://www.w3.org/ - *W3C*\
\> 万维网联盟（英语：World Wide Web Consortium，縮寫W3C），又称W3C理事会，是万维网的主要国际标准组织，为半自治非政府组织（quasi-autonomous nongovernmental organization）。 — *[万维网联盟 - 维基百科，自由的百科全书](https://zh.m.wikipedia.org/wiki/%E4%B8%87%E7%BB%B4%E7%BD%91%E8%81%94%E7%9B%9F)*

https://www.iso.org/home.html - *ISO - International Organization for Standardization*

## 进制

1. http://c.biancheng.net/view/141.html - *进制是什么？*

    1. 二进制
    2. 八进制
    3. 十进制
    4. 十六进制

## 转义字符

https://baike.baidu.com/item/转义字符/86397 - *转义字符_百度百科*

转义字符  | 意义
---|---
\n  | 换行(LF) ，将当前位置移到下一行开头
\r  | 回车(CR) ，将当前位置移到本行开头
\t  | 水平制表(HT) （跳到下一个TAB位置）

## 回车和换行

- CR（Carriage Return）代表回车，对应字符 `\r`
- LF（Line Feed）代表换行，对应字符 `\n`

Unix 系统：

`\n`

Windows 系统：

`\r\n`

Mac 系统：

`\r`

参考：

1. https://www.ruanyifeng.com/blog/2006/04/post_213.html - *回车和换行 - 阮一峰的网络日志*
2. https://zhuanlan.zhihu.com/p/380574688 - *CRLF和LF的差异 - 知乎*
3. https://www.cnblogs.com/jiayouba/p/15309132.html - *CRLF和LF的差异 - 飞叶飞花 - 博客园*
4. https://blog.csdn.net/weixin_43899065/article/details/124864157 - *换行符CRLF LF及在GIT设置_git 换行符_幸运的lucia的博客-CSDN博客*
5. https://www.jianshu.com/p/6c6ae0c8daa5 - *换行符(CRLF/LF) - 简书*
6. https://qa.1r1g.com/sf/ask/1946753091/ - *如何在单个文件中用lf替换crlf | 那些遇到过的问题*

## P2P

### IPFS

https://github.com/ipfs/ipfs - *GitHub - ipfs/ipfs: Peer-to-peer hypermedia protocol* [Website](https://ipfs.tech/)

![GitHub last commit](https://badgen.net/github/last-commit/ipfs/ipfs?icon=github&color=blue)

## 日期与时间

https://www.iso.org/iso-8601-date-and-time-format.html - *ISO - ISO 8601 — Date and time format*

### 前端

1. https://mp.weixin.qq.com/s/WoLGw1reEFpJs7QqSTclyA - *取而代之！以后不用再 new Date() 了*

## 绝对路径与相对路径

绝对路径：

绝对路径是指目录下的绝对位置，直接到达目标位置，通常是从盘符开始的路径。

> C:\windows\system32\cmd.exe

附注：绝对路径不利于搜索引擎表现，相对路径在搜索引擎中表现良好。

相对路径：

相对路径就是指由这个文件所在的路径引起的跟其它文件（或文件夹）的路径关系。

1. 同目录文件引用

    `./` 表示当前目录（可以省略直接引用）

2. 表示上级目录

    `../` 表示源文件所在目录上级目录

    `../../` 表示源文件所在目录上上级目录

    `/../` 表示所在文件上一级目录（第一个杠就表示是在根目录下）

3. 表示下级目录

    直接写下级目录文件的路径即可。

参考：

1. https://wangdoc.com/html/url#绝对-url-和相对-url - *URL 简介 - HTML 教程 - 网道*

## 科学计数法

暂无

## User Agent

教程：

1. https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/User-Agent - *User-Agent - HTTP | MDN*

2. https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/User-Agent/Firefox - *Firefox 用户代理字符串 (user agent string) 参考 - HTTP | MDN*

用户代理列表：

1. https://user-agents.net/ - *User Agents*

2. https://www.useragents.me/ - *The Latest and Most Common User Agents List (Updated Weekly)*

  `Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36`

GitHub Search:

1. `"user agent" sort:stars language:javascript`

2. `"user agent" sort:stars language:php`

GitHub：

1. https://github.com/DamonOehlman/detect-browser - *GitHub - DamonOehlman/detect-browser: Unpack a browser type and version from the useragent string*

    ![GitHub last commit](https://badgen.net/github/last-commit/DamonOehlman/detect-browser?icon=github&color=blue)

2. https://github.com/Ikimea/Browser - *GitHub - Ikimea/Browser: Detecting the user’s browser type and version*

    ![GitHub last commit](https://badgen.net/github/last-commit/Ikimea/Browser?icon=github&color=blue)

3. https://github.com/mumuy/browser - *GitHub - mumuy/browser: 浏览器检测工具 - Useragent分析/浏览器识别/浏览器判断/UA解析/用户代理信息_Useragent analysis tool*

    ![GitHub last commit](https://badgen.net/github/last-commit/mumuy/browser?icon=github&color=blue)

4. https://github.com/fex-team/ua-device - *GitHub - fex-team/ua-device: userAgent解析库*

    ![GitHub last commit](https://badgen.net/github/last-commit/fex-team/ua-device?icon=github&color=blue)

参考：

1. https://www.codeweavers.com/support/wiki/mac/mactutorial/changeua - *如何在 Mac 上修改您的用户代理 | Knowledge Base | CodeWeavers*

2. https://www.howtogeek.com/211961/how-to-change-safaris-user-agent-in-os-x/ - *How to Change Safari's User Agent on OS X --- 如何在OS X上更改Safari的用户代理*

## Session

https://baike.baidu.com/item/session/479100 - *session（计算机术语）_百度百科*

## JSON

https://www.runoob.com/json/json-tutorial.html - *JSON 教程 | 菜鸟教程*

https://json.org/ - *JSON*

参考：

1. https://www.freecodecamp.org/chinese/news/json-comment/ - *如何给 JSON 文件添加注释*

## XML

暂无

## YAML

https://www.ruanyifeng.com/blog/2016/07/yaml.html - *YAML 语言教程 - 阮一峰的网络日志*

https://yaml.org/ - *The Official YAML Web Site*

## 通配符

https://www.ruanyifeng.com/blog/2018/09/bash-wildcards.html - *命令行通配符教程 - 阮一峰的网络日志*

https://wangdoc.com/bash/expansion - *Bash 的模式扩展 - Bash 脚本教程 - 网道*

https://editorconfig.org/ - *EditorConfig*

https://code.visualstudio.com/docs/editor/glob-patterns - *Visual Studio Code glob patterns reference*

## 构建工具

http://www.ruanyifeng.com/blog/2015/02/make.html - *Make 命令教程 - 阮一峰的网络日志*

https://www.liaoxuefeng.com/wiki/1599771213037600 - *Makefile教程 - 廖雪峰的官方网站*

## 数据结构

### 字典结构

1. https://blog.csdn.net/m0_60697583/article/details/137749108 - *数据结构——字典_dictionary字典,本课程的最重要的一种数据类型之一。它的结构,是一种映射结构。在-CSDN博客*
2. https://www.jianshu.com/p/c53460c9c8e4 - *数据结构(八)之字典结构 - coderwhy - 简书*

## 进程和线程

https://www.ruanyifeng.com/blog/2013/04/processes_and_threads.html - *进程与线程的一个简单解释 - 阮一峰的网络日志*
