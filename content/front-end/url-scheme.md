如何使用安卓手机获取 URL Scheme：

1. 下载并安装手机应用「[Activity Manager](https://www.f-droid.org/packages/com.activitymanager/)」；
2. 打开安装好的应用；
3. 点击应用列表第一个应用右边的三个点“⋮”；
4. 在底部弹出的操作列表中选择“打开清单查看器”；
5. 点击清单右上角的“搜索”按钮，然后输入“`scheme`”；
6. 获取到的 “scheme” 的值即 “URL Scheme”。

语法：

1. 打开「小米应用商店」应用

    格式：`mimarket://details?id=<应用包名>`

    示例：[打开「小米应用商店」应用「微信」](mimarket://details?id=com.tencent.mm)

    ```uri
    mimarket://details?id=
    ```

2. 打开「Google Play」应用

    格式：`market://details?id=<应用包名>`

    示例：[打开「Google Play」应用「Chrome」](market://details?id=com.android.chrome)

    ```uri
    market://details?id=
    ```

3. 打开文件

    格式：`file:///<文件路径>`

    示例：[打开文件，绝对路径：**file:////storage/emulated/0/Documents/markor/Note🫐/📱 apps-for-daily-use.md**](file:////storage/emulated/0/Documents/markor/Note🫐/📱 apps-for-daily-use.md)

    ```uri
    file:///
    ```

    ```uri
    file:////storage/emulated/0/Documents/markor/Note🫐/apps-for-daily-use.md
    ```

4. 打开外部应用（自建 App）

    格式：`launchapp://<应用包名>`

    示例：[打开外部应用 - 淘宝](launchapp://com.taobao.taobao)

    ```uri
    launchapp://
    ```

测试：

1. [淘宝 - Markdown](launchapp://com.taobao.taobao)

2. <a href="launchapp://com.taobao.taobao">淘宝 - HTML</a>

应用商店：

1. [F-Droid](amzn://apps/android) 🚀

2. [小米应用商店 - 首页](mimarket://home) 🚀

3. [小米应用商店 - 搜索](market://search) 🚀

4. [Google Play](market://webstoreredirect) 🚧

5. ~~[豌豆荚](wdj://outside/links/) 🚀~~

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
