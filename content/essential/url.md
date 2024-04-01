# URL

## 简介

> URL 是“统一资源定位符”（Uniform Resource Locator）的首字母缩写，中文译为“网址”，表示各种资源的互联网地址。
>
> <cite>—— [URL 简介 - HTML 教程 - 网道](https://wangdoc.com/html/url )</cite>

## 教程

1. https://wangdoc.com/html/url - *URL 简介 - HTML 教程 - 网道*

## 用法

### URL Scheme

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
    2. [打开文件，相对路径：*./curl.md*](file:///curl.md)（无法使用）

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

#### 支付宝

https://opendocs.alipay.com/support/01rb18 - *小程序scheme链接介绍 - 支付宝文档中心*

#### Google Play Store

1. 打开应用「Google Play Store」

    格式：`market://details?id=<应用包名>`

    示例：[在「Google Play Store」中打开应用「Chrome」](market://details?id=com.android.chrome)

    代码片段：

    ```uri
    market://details?id=
    ```

https://developer.android.com/distribute/marketing-tools/linking-to-google-play?hl=zh-cn - *链接到 Google Play  |  Android Developers*

### 小米应用商店

1. 打开应用「小米应用商店」

    格式：`mimarket://details?id=<应用包名>`

    示例：[在「小米应用商店」中打开应用「微信」](mimarket://details?id=com.tencent.mm)

    代码片段：

    ```uri
    mimarket://details?id=
    ```

https://stackoverflow.com/questions/63208565/whats-xiaomi-mi-store-apps-page-intent - *android - What's Xiaomi Mi Store app's page intent? - Stack Overflow*

### PHP

1. http://www.jb51.net/article/57550.htm - *php 中获取主机名、协议及 IP 地址的方法_php 技巧_脚本之家*

### JavaScript

1. https://developer.mozilla.org/zh-CN/docs/Web/API/URL - *URL - Web API 接口参考 | MDN*

### URL 编/解码

1. <https://wangdoc.com/javascript/bom/location#url-的编码和解码> - *Location 对象，URL 对象，URLSearchParams 对象 - JavaScript 教程 - 网道*

2. https://www.runoob.com/tags/html-urlencode.html - *HTML URL 编码参考手册 | 菜鸟教程*
