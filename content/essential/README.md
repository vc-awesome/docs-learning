# 基本知识

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

## 换行符

参考：

1. https://zhuanlan.zhihu.com/p/380574688 - *CRLF和LF的差异 - 知乎*

2. https://www.cnblogs.com/jiayouba/p/15309132.html - *CRLF和LF的差异 - 飞叶飞花 - 博客园*

3. https://blog.csdn.net/weixin_43899065/article/details/124864157 - *换行符CRLF LF及在GIT设置_git 换行符_幸运的lucia的博客-CSDN博客*

4. https://www.jianshu.com/p/6c6ae0c8daa5 - *换行符(CRLF/LF) - 简书*

5. https://qa.1r1g.com/sf/ask/1946753091/ - *如何在单个文件中用lf替换crlf | 那些遇到过的问题*

## P2P

### IPFS

https://github.com/ipfs/ipfs - *GitHub - ipfs/ipfs: Peer-to-peer hypermedia protocol* [Website](https://ipfs.tech/)

![GitHub last commit](https://badgen.net/github/last-commit/ipfs/ipfs?icon=github&color=blue)

## 日期与时间

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
