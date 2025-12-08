# URL

## 简介

> URL 是“统一资源定位符”（Uniform Resource Locator）的首字母缩写，中文译为“网址”，表示各种资源的互联网地址。
>
> <cite>—— [URL 简介 - HTML 教程 - 网道](https://wangdoc.com/html/url )</cite>

## 教程

1. https://developer.mozilla.org/zh-CN/docs/Learn/Common_questions/Web_mechanics/What_is_a_URL - *什么是 URL？ - 学习 Web 开发 | MDN*

## 入门指南

### URIs

https://developer.mozilla.org/en-US/docs/Web/URI - *URIs | MDN*

#### URI Schemes

https://developer.mozilla.org/en-US/docs/Web/URI/Schemes - *URI schemes - URIs | MDN*

##### Data URL

> 以 `data:` 方案为前缀的 URL，允许内容创建者在文档中嵌入小文件。

语法：

```url
data:[<mediatype>][;base64],<data>
```

https://developer.mozilla.org/zh-CN/docs/Web/URI/Schemes/data - *Data URL - URIs | MDN*

##### javascript:URLs

语法：

```url
javascript:<script>
```

https://developer.mozilla.org/en-US/docs/Web/URI/Schemes/javascript - *javascript: URLs - URIs | MDN*

### Deeplink

https://developer.huawei.com/consumer/en/doc/AppGallery-connect-Guides/agdlink-getlink-manual-0000001117762114 - *Manually Creating a Link - HUAWEI Developers*

## 快速入门

### 格式

`<scheme>://<host>[:port][path][?parameter][#anchor]`

## 用法

### 在编程语言中使用

#### HTML

1. https://wangdoc.com/html/url - *URL 简介 - HTML 教程 - 网道*

#### PHP

1. http://www.jb51.net/article/57550.htm - *php 中获取主机名、协议及 IP 地址的方法_php 技巧_脚本之家*

#### JavaScript

1. https://developer.mozilla.org/zh-CN/docs/Web/API/URL - *URL - Web API 接口参考 | MDN*
2. https://kilianvalkhof.com/2024/javascript/the-problem-with-new-url-and-how-url-parse-fixes-that/ - *The problem with new URL(), and how URL.parse() fixes that | Kilian Valkhof*

#### URL 编码和解码

1. <https://wangdoc.com/javascript/bom/location#url-的编码和解码> - *Location 对象，URL 对象，URLSearchParams 对象 - JavaScript 教程 - 网道*

2. https://www.runoob.com/tags/html-urlencode.html - *HTML URL 编码参考手册 | 菜鸟教程*

### 在应用程序中使用

#### URL Scheme

##### macOS

https://stackoverflow.com/questions/471581/how-to-map-a-custom-protocol-to-an-application-on-the-mac - *macos - How to map a custom protocol to an application on the Mac? - Stack Overflow*

https://www.jianshu.com/p/7fceeee80366 - *Mac os URL Schemes 浏览器启动本地app - 尤樊容 - 简书*

VSCode 编辑 Info.plist 文件

- https://worktile.com/kb/ask/551282.html - *如何用vscode改plist • Worktile社区*

AI 搜索：`macos 如何使用 Platypus 创建 url scheme`

##### Android

如何使用安卓手机获取 URL Scheme，按下面步骤获取：

1. 下载并安装手机应用「[Activity Manager](https://www.f-droid.org/packages/com.activitymanager/)」；
2. 打开安装好的应用；
3. 点击应用列表第一个应用右边的三个点 “⋮”；
4. 在底部弹出的操作列表中选择 “打开清单查看器”；
5. 点击清单右上角的 “搜索” 按钮，然后输入 “`scheme`”；
6. 获取到的 “scheme” 的值即 “URL Scheme”。

语法：

1. 打开文件

    格式：`file:///<文件路径>`

    示例：
    
    1. [打开文件，绝对路径：*file:////storage/emulated/0/Documents/markor/note/📱%20apps-for-daily-use.md*](file:////storage/emulated/0/Documents/markor/note/📱%20apps-for-daily-use.md)
    2. [打开文件，相对路径：*./regex.md*](file:///regex.md)（无法使用）

    代码片段：

    ```uri
    file:///
    ```

    ```uri
    file:////storage/emulated/0/Documents/markor/note/📱%20apps-for-daily-use.md
    ```

2. 打开外部应用（自建 App）

    格式：`launchapp://<应用包名>`

    示例：
    
    1. [打开外部应用 - 淘宝（Markdown 格式）](launchapp://com.taobao.taobao)
    2. <a href="launchapp://com.taobao.taobao">打开外部应用 - 淘宝（HTML 格式）</a>

    代码片段：

    ```uri
    launchapp://
    ```

3. 打开外部应用（[HTTP Shortcuts](https://http-shortcuts.rmy.ch/)）

    格式：`http-shortcuts://0cc6f723-1058-47e7-b887-27226d206897?apk_name=<应用包名>`

    示例：[打开外部应用 - 微信](http-shortcuts://0cc6f723-1058-47e7-b887-27226d206897?apk_name=com.tencent.mm)
    
    代码片段：
    
    ```uri
    http-shortcuts://0cc6f723-1058-47e7-b887-27226d206897?apk_name=
    ```

在 Web 中使用：

1. https://developer.chrome.com/docs/android/intents?hl=zh-cn - *Chrome 中的 Android intent  |  Web on Android  |  Chrome for Developers*
2. https://paul.kinlan.me/every-browser-should-support-intent-urls/ - *Every browser should support a style of 'intent:' URL syntax*

应用商店：

1. [F-Droid](amzn://apps/android) 🚀 - `amzn://apps/android`

2. [小米应用商店 - 首页](mimarket://home) 🚀 - `mimarket://home`

3. [小米应用商店 - 搜索](market://search) 🚀 - `market://search`

4. [Google Play](market://webstoreredirect) 🚧 - `market://webstoreredirect`

5. ~~[豌豆荚](wdj://outside/links/) 🚀 - `wdj://outside/links/`~~
6. https://70apps.com/blog/web/2021/10/21/Chinese_Android_Market_Schema.html#: - *国内厂商应用商店跳转链接*
7. https://ask.dcloud.net.cn/m/article/39960 - *常见的应用商店 scheme 地址 - DCloud问答*

参考：

1. https://zhuanlan.zhihu.com/p/562234058 - *H5页面如何实现唤起APP并到达指定页面 - 知乎*
2. https://www.yii666.com/blog/385723.html - *Android App links 链接打开app功能*
3. https://sspai.com/post/44591 - *入门 iOS 自动化：读懂 URL Schemes - 少数派*
4. https://blog.csdn.net/weixin_48141487/article/details/120743456 - *常用URLscheme整理+不同场景下打开URLscheme的方法_url scheme_我叫莫非里的博客-CSDN博客*
5. https://blog.csdn.net/xiaohui_brook/article/details/112177197 - *用 UrlSchemes 实现调用应用并传参_url scheme 如何传参_苛学加的博客-CSDN博客*
6. https://sspai.com/post/66334 - *URL Scheme 查询指南 - 少数派*
7. http://yoursite.com/2018/08/23/h5_call_app/ - *H5唤起APP指南 / 拾壹小筑* 🚀
8. https://developer.aliyun.com/article/73310 - *Android应用安全开发之浅谈网页打开APP-阿里云开发者社区*
9. https://blog.csdn.net/zzhongcy/article/details/123507967 - *Android浅谈网页打开APP（转载）_zzhongcy的博客-CSDN博客*
10. https://codeleading.com/article/98274143126/ - *Android 通过URL scheme 启动App - 代码先锋网*
11. https://blog.csdn.net/sinat_26535323/article/details/126992510 - *Android各个应用商店Uri_查找安卓app url_st21a1的博客-CSDN博客*
12. https://blog.csdn.net/j236027367/article/details/107317446 - *android使用App Link或者URL Scheme直接跳转第三方app信息收集_rmrbapp://rmrb.app/openwith_洛莫I的博客-CSDN博客*
13. https://www.telerik.com/blogs/how-to-use-custom-url-schemes - *How to Use Custom URL Schemes*
14. https://developer.android.com/training/app-links/deep-linking?hl=zh-cn - *创建指向应用内容的深层链接  |  Android 开发者  |  Android Developers*

###### 支付宝

格式：

```uri
alipays://platformapi/startapp?appId=[appId]&page=[page]&query=[query]
```

https://opendocs.alipay.com/support/01rb18 - *小程序scheme链接介绍 - 支付宝文档中心*

1. https://sspai.com/post/68497 - *支付宝、云闪付小程序一键直达：URL Scheme 跳转扩展用法 - 少数派*
2. https://sspai.com/post/66334 - *URL Scheme 查询指南 - 少数派*
3. https://blog.csdn.net/weixin_48141487/article/details/134224372 - *支付宝 URL Scheme全网最全，startActivity地址更新中-CSDN博客*
4. https://cloud.tencent.com/developer/article/2317297 - *微信、支付宝等软件常用功能的的URL schemes整理总汇-腾讯云开发者社区-腾讯云*

###### 淘宝

格式：

```uri
taobao://
```

示例：

1. [淘宝首页](taobao://m.taobao.com)
2. [淘宝芭芭农场](taobao://market.m.taobao.com/app/starlink/wakeup-transit/pages/download?star_id=4354&slk_force_set_request=true&bc_fl_src=zfb_myxc2bbnc&sceneCodeAlipay=antruralism_taobao_taobaobabafarm0530&userToken=yxg3xgDreLtnLoDWZT4VrQ9p0AWjUKqdxgDxxoGAEXKyb7ggOmOQ4NK4EwnxxoazTusQgAP3NoxcUUgzxgZxcuuVxgM1nnxgc9YGP4Ob73klkg38xgppfoxkx)

###### Google Play Store

格式：`market://details?id=<应用包名>`

示例：[在「Google Play Store」中打开应用「Chrome」](market://details?id=com.android.chrome)

代码片段：

```uri
market://details?id=
```

参考：

1. https://developer.android.com/distribute/marketing-tools/linking-to-google-play?hl=zh-cn - *链接到 Google Play  |  Android Developers*
2. https://stackoverflow.com/questions/11753000/how-to-open-the-google-play-store-directly-from-my-android-application - *How to open the Google Play Store directly from my Android application? - Stack Overflow*

###### 小米应用商店

格式：`mimarket://details?id=<应用包名>`

示例：[在「小米应用商店」中打开应用「微信」](mimarket://details?id=com.tencent.mm)

代码片段：

```uri
mimarket://details?id=
```

参考：

https://stackoverflow.com/questions/63208565/whats-xiaomi-mi-store-apps-page-intent - *android - What's Xiaomi Mi Store app's page intent? - Stack Overflow*

#### Firefox 浏览器打开本地文件

假设 macOS 电脑桌面上有张图片，图片所在路径为：`/Users/caiyongwen/Desktop/v2-db92f653a2ec17ea3ff309d6d56e8507.gif`，操作步骤如下：

1. 打开 Firefox 浏览器；
2. 地址栏中输入：`file:///Users/caiyongwen/Desktop/v2-db92f653a2ec17ea3ff309d6d56e8507.gif`；
3. 按下键盘回车键。

## 工具

### 解析工具

https://github.com/ada-url/ada - *GitHub - ada-url/ada: WHATWG-compliant and fast URL parser written in modern C++*

![GitHub last commit](https://img.shields.io/github/last-commit/ada-url/ada?logo=github&color=blue)
![GitHub Release Date - Published_At](https://img.shields.io/github/release-date/ada-url/ada?display_date=published_at&logo=github)
![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/ada-url/ada?logo=github)
![GitHub Repo stars](https://img.shields.io/github/stars/ada-url/ada?style=social)

### Google Analytics

https://ga-dev-tools.google/campaign-url-builder/ - *Campaign URL Builder*

### Web Apps

#### URL Shortener

1. https://tinyurl.com/ - *URL Shortener, Branded Short Links & Analytics | TinyURL*
2. https://bitly.com/ - *Bitly Connections Platform | Short URLs, QR Codes, and More*
3. https://git.io/ - *git.io* (停止运营)
4. https://goo.gl - *Google URL Shortener links will no longer be available* (2018 年停止运营)

#### Unshorten.me

1. https://unshorten.me/ - *Free URL Un-Shortener - Unshorten URLS like goo.gl, bit.ly and many more*

### Android Apps

#### URLCheck

https://github.com/TrianguloY/UrlChecker - _GitHub - TrianguloY/UrlChecker: Android app by TrianguloY: URLCheck_

## 常见问题

### 如何在 JavaScript 中验证 URL

https://www.freecodecamp.org/chinese/news/how-to-validate-urls-in-javascript/ - *如何在 JavaScript 中验证 URL*
