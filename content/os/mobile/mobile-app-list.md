
## 应用下载

### Droid-ify

> <img src="https://f-droid.org/repo/com.looker.droidify/en-US/icon_lApsnfhrMqGkCaW-IdnYwx86CUjdTutncPvXPJythaM=.png" alt="package icon" align="left" width="58" hspace="0" vspace="0" style="border-radius: 5px;margin: 7px 7px 0 0;"> Material-ify with Droid-ify. A quick material F-Droid client.

![f-droid](https://badgen.net/f-droid/v/com.looker.droidify)
![GitHub last commit](https://img.shields.io/github/last-commit/Iamlooker/Droid-ify?color=blue&logo=github&style=flat-square)

------

https://f-droid.org/packages/com.looker.droidify/ - *Droid-ify | F-Droid - Free and Open Source Android App Repository*

https://github.com/Iamlooker/Droid-ify - *GitHub - Iamlooker/Droid-ify: F-Droid client with Material UI.*

## 应用管理

### App Manager

> <img src="https://f-droid.org/repo/io.github.muntashirakon.AppManager/en-US/icon_Jc_KAiIUxfeHFgZFDxqLREjmodCzjXpuT8I-W_wGTew=.png" alt="package icon" align="left" width="58" hspace="0" vspace="0" style="border-radius: 5px;margin: 7px 7px 0 0;"> A full-featured open source package manager for android.

![f-droid](https://badgen.net/f-droid/v/io.github.muntashirakon.AppManager)
![GitHub last commit](https://img.shields.io/github/last-commit/MuntashirAkon/AppManager?color=blue&logo=github&style=flat-square)

------

https://f-droid.org/packages/io.github.muntashirakon.AppManager/ - *App Manager - Android package manager | F-Droid - Free and Open Source Android App Repository*

https://github.com/MuntashirAkon/AppManager - *GitHub - MuntashirAkon/AppManager: A full-featured package manager and viewer for Android*


## 文件管理

### 质感文件（Material Files）

> <img src="https://f-droid.org/repo/me.zhanghai.android.files/en-US/icon_BFY8kIAZkrB0kKwXt1uVDgghMociormUlcOIedEh2mA=.png" alt="package icon" align="left" width="58" hspace="0" vspace="0" style="border-radius: 5px;margin: 7px 7px 0 0;"> 开源的 Material Design 文件管理器

![f-droid](https://badgen.net/f-droid/v/me.zhanghai.android.files)
![GitHub last commit](https://img.shields.io/github/last-commit/zhanghai/MaterialFiles?color=blue&logo=github&style=flat-square)

------

支持的平台：Android


https://f-droid.org/en/packages/me.zhanghai.android.files/ - *Material Files | F-Droid - Free and Open Source Android App Repository*

https://github.com/zhanghai/MaterialFiles - *GitHub - zhanghai/MaterialFiles: Material Design file manager for Android*

一些功能
- 开启本机“FTP 服务器”功能
- 连接外部“FTP 服务器”功能
- 连接外部“SFTP 服务器”功能
- 连接外部“SMB 服务器”功能
- 复制路径
- 创建桌面快捷方式
- 查看“属性”-“基本”、“权限”
- 压缩文件、文件夹
- 解压（“提取”操作）

## 文本编辑

### Markor

> <img src="https://f-droid.org/repo/net.gsantner.markor/en-US/icon_jm7Yt2QTE4iuxQp_T98o-PSJ4m6GPzmawSrx99KYiE8=.png" alt="package icon" align="left" width="78" hspace="0" vspace="0">Text editor - Notes & ToDo (for Android) - Markdown, todo.txt, plaintext, math, ..

![f-droid](https://badgen.net/f-droid/v/net.gsantner.markor)
![GitHub package.json version](https://img.shields.io/github/package-json/v/docsifyjs/docsify?logo=github&style=social)
![GitHub last commit](https://badgen.net/github/last-commit/gsantner/markor?icon=github&color=blue)

------

支持的平台：
<i class="fa fa-android"></i>

https://github.com/gsantner/markor

https://f-droid.org/zh_Hans/packages/net.gsantner.markor/ - *Markor | F-Droid - Free and Open Source Android App Repository*

----

设置：
1. ActionButton 操作顺序
    - _设置 >（格式）Markdown > （ActionButton）操作顺序_
2. 备份设置
    - _设置 > 其它 > （Backup）备份设置 > 导出设置到 JSON 文件_
3. ActionButton 水平间距
    - _设置 > 其它 > （编辑器）ActionButton 间距_
4. 启用数学公式渲染（ _默认不开启_ ）
    - _设置 > （格式）Markdown > （查看模式）启用数学公式渲染_
5. 多窗口
    - _设置 > 通用 > （Features）多窗口_
6. 关闭滑动以更改模式
    - *设置 > 查看模式 > 滑动以更改模式*
7. 查看模式
    1. 在“查看模式”下，`<a></a>` 标签内的文本内容不自动换行，导致查看完整页面需要左右滑动的处理方式如下：
        - *设置 > 查看模式 > （Inject）Inject -> Head*
        
        在 `<style></style>` 标签内添加样式 ↓

        ```css
          a, em, u {
            word-break: break-word;
            word-wrap: break-word;
          }
        ```
        
    2. 在“查看模式”下，设置 `<code></code>` 标签内容的样式：
        - *设置 > 查看模式 > （Inject）Inject -> Head*
        
        
        在 `<style></style>` 标签内添加样式 ↓
        
        ```css
          code {
            padding: 0.2em 0.4em;
            margin: 0;
            font-size: 85%;
            white-space: break-spaces;
            word-wrap: break-word;
            background-color: rgba(175,184,193,.2);
            border-radius: 6px;
          }
        ```
        参考：https://docs.github.com/zh/pages/setting-up-a-github-pages-site-with-jekyll/adding-content-to-your-github-pages-site-using-jekyll#about-content-in-jekyll-sites （在网页浏览器的“手机模式”下，查看效果更佳。）
        
    3. 在“查看模式”下，设置 `<kbd></kbd>` 标签内容的样式：
        - *设置 > 查看模式 > （Inject）Inject -> Head*
        
        
        在 `<style></style>` 标签内添加样式 ↓
        
        ```css
          kbd {
            border: solid 1px #ccc;
            border-radius: 3px;
            display: inline-block;
            font-size: 12px !important;
            line-height: 12px;
            margin-bottom: 3px;
            padding: 3px 5px;
            vertical-align: middle;
            color: #1F2328;
            background-color: #f6f8fa;
            box-shadow: inset 0 -1px 0 rgba(175,184,193,0.2);
          }
        ```
----

https://github.com/gsantner/markor/discussions/1381 - *Filemanager & sync client support (cannot open file from other app) · gsantner/markor · Discussion #1381 · GitHub*


### Acode

> <img src="https://f-droid.org/assets/ic_repo_app_default_KNN008Z2K7VNPZOFLMTry3JkfFYPxVGDopS1iwWe5wo=.png" alt="package icon" align="left" width="58" hspace="0" vspace="0" style="border-radius: 5px;margin: 7px 7px 0 0;"> Acode - powerful text/code editor for android

![f-droid](https://badgen.net/f-droid/v/com.foxdebug.acode)
![GitHub last commit](https://img.shields.io/github/last-commit/deadlyjack/Acode?color=blue&logo=github&style=flat-square)

------

https://github.com/deadlyjack/Acode - *GitHub - deadlyjack/Acode: Acode - powerful text/code editor for android*

https://f-droid.org/zh_Hans/packages/com.foxdebug.acode/ - *Acode | F-Droid - Free and Open Source Android App Repository*

----

底部 ActionButton

> 点击底部操作按钮“ⵈ”，打开命令模式。

- Toggle block comment - *切换块注释*
- Toggle comment - *切换注释*
- Remove line - *删除行*
- Find - *查找*
- Select line to start - *选择一行到行首*
- Select line to end - *选择一行到行尾*
- Fold all - *全部折叠*


## 写作工具

### Markdownr

> Converts an URL to markdown and share it

![f-droid](https://badgen.net/f-droid/v/com.sanzoghenzo.markdownr)
![GitHub last commit](https://flat.badgen.net/github/last-commit/sanzoghenzo/markdownr?icon=github&color=blue)

https://f-droid.org/zh_Hans/packages/com.sanzoghenzo.markdownr/ - *Markdownr | F-Droid - Free and Open Source Android App Repository*

https://github.com/sanzoghenzo/markdownr - *GitHub - sanzoghenzo/markdownr: Android app that converts an URL to markdown, and lets you share it to your favorite notes app.*


## DNS

### personalDNSfilter

> <img src="https://f-droid.org/assets/ic_repo_app_default_KNN008Z2K7VNPZOFLMTry3JkfFYPxVGDopS1iwWe5wo=.png" alt="package icon" align="left" width="58" hspace="0" vspace="0" style="border-radius: 5px;margin: 7px 7px 0 0;"> 使用 Blocklist 在本地的 VPN 上基于 DNS 请求的主机阻止程序

![GitHub last commit](https://badgen.net/github/last-commit/IngoZenz/personaldnsfilter?icon=github&color=blue)
![f-droid](https://badgen.net/f-droid/v/dnsfilter.android)
![PlayShields](https://img.shields.io/endpoint?color=green&url=https%3A%2F%2Fplay.cuzi.workers.dev%2Fplay%3Fi%3Ddnsfilter.android%26l%3DPlay%2520Store%2520version%26m%3Dv%24version)

------

支持的平台：
<i class="fa fa-windows"></i>
<i class="fa fa-linux"></i>
<i class="ri-android-line"></i>
<i class="ri-google-play-line"></i>

https://f-droid.org/zh_Hans/packages/dnsfilter.android/

https://github.com/IngoZenz/personaldnsfilter

Website:

1. https://www.zenz-solutions.de/personaldnsfilter-wp/ - *personalDNSfilter | Zenz Solutions | adblocker & privacy protection*
2. https://www.zenz-solutions.de/help/ - *personalDNSfilter help | Zenz Solutions*

<br/>

> [!TIP]
> Android platform: XiaoMi + personalDNSfilter `V1.50.51.0` + Opera `V68.3.3557.64528` = VPN

----

域名服务器（DNS）

```markdown
[223.5.5.5]::53::UDP
[101.226.4.6]::53::UDP
[94.140.14.140]::53::UDP
[94.140.14.141]::53::UDP
[89.233.43.71]::853::DOT::unicast.censurfridns.dk
[116.202.176.26]::853::DOT::dot.libredns.gr
[116.202.176.26]::443::DOH::https://doh.libredns.gr/dns-query
```


高级设置
- 配置过滤器更新
    > 新增

    类别：
    ``` 
    GitHub
    ```
    名称：
    ```
    HelloGitHub
    ```
    URL：
    ```
    https://raw.hellogithub.com/hosts
    ```
- 配置其他主机  
    ```markdown
    # 末尾新增内容：
    >www.baidu.com 127.0.0.1
    ```
- 备份和还原
  
    > 3 个文件
    
    备份文件存放位置：_/storage/emulated/0/Android/data/dnsfilter.android/files/PersonalDNSFilter/backup/_ ⇒ 需要使用手机系统自带的文件管理工具打开，因为第三方文件管理工具没有 Root 权限，无法进入到文件所在位置。
    
    1. [dnsfilter.conf](os/mobile/_files/PersonalDNSFilter/backup/dnsfilter.md)
    2. [additionalHosts.txt](os/mobile/_files/PersonalDNSFilter/backup/additionalHosts.md)
    3. [VERSION.TXT](os/mobile/_files/PersonalDNSFilter/backup/VERSION.md)
- 编辑配置文件

----

FAQ

> 访问 GitHub 网页，超时无法打开、图片加载不出来？
- 处理方法：
    1. 打开应用，查看过滤器 _HelloGitHub_ 是否处于活跃状态，如不是活跃状态，开启它，然后开启“启动拦截”开关，点击“重新加载过滤器”按钮，更新所有活跃状态的过滤器；
    2. 更新成功后，关闭“启动拦截”开关，再次点击“重新加载过滤器”按钮（不关闭会拦截网页，使网页无法打开）；
    3. 可选择点击“重新启动”按钮；
    4. 如果执行上述方法仍无法打开，尝试更换其他浏览器访问、清除[手机缓存](essential/dns.md#手机配置私人-DNS)或浏览器缓存。
    - 测试 URL：https://github.com/topics - *Topics on GitHub · GitHub*

### Daedalus

> <img src="https://f-droid.org/repo/org.itxtech.daedalus/en-US/icon_UtsgiYdLW68Yu96y5Xjwgn-YYZ7KQ5WPxD2DQ_E6eyg=.png" alt="package icon" align="left" width="58" hspace="0" vspace="0" style="border-radius: 5px;margin: 7px 7px 0 0;"> No root required Android DNS modifier and Hosts/DNSMasq resolver.

![GitHub last commit](https://img.shields.io/github/last-commit/iTXTech/Daedalus?logo=github)
![GitHub Release Date](https://img.shields.io/github/release-date/iTXTech/Daedalus?logo=github)
![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/iTXTech/Daedalus?logo=github)
![GitHub Repo stars](https://img.shields.io/github/stars/iTXTech/Daedalus?style=social)
![F-Droid](https://badgen.net/f-droid/v/org.itxtech.daedalus?icon=f-droid)
![PlayShields](https://img.shields.io/endpoint?color=green&url=https%3A%2F%2Fplay.cuzi.workers.dev%2Fplay%3Fi%3Dorg.itxtech.daedalus%26l%3DPlay%2520Store%2520version%26m%3Dv%24version)

------

https://f-droid.org/packages/org.itxtech.daedalus/ - *Daedalus | F-Droid - Free and Open Source Android App Repository*

<i class="fa fa-laptop"></i> https://itxtech.org/ - *Homepage | iTX Technologies*

<i class="fa fa-github fa-lg"></i> https://github.com/iTXTech/Daedalus - *GitHub - iTXTech/Daedalus: No root required Android DNS modifier and Hosts/DNSMasq resolver.*

<i class="fa fa-android"></i> https://github.com/iTXTech/Daedalus/releases - *Releases · iTXTech/Daedalus*


## Hosts

### AdAway

> <img src="https://f-droid.org/repo/org.adaway/en-US/icon_tKwcVT8aMbx2qao_fv-a4V5Epua_g0FOYWilovP7yjk=.png" alt="package icon" align="left" width="58" hspace="0" vspace="0" style="border-radius: 5px;margin: 7px 7px 0 0;"> 一款面向安卓设备的自由和开源的广告拦截应用。

![f-droid](https://badgen.net/f-droid/v/org.adaway)
![GitHub last commit](https://img.shields.io/github/last-commit/AdAway/AdAway?color=blue&logo=github&style=flat-square)

------

https://f-droid.org/packages/org.adaway/ - *AdAway | F-Droid - Free and Open Source Android App Repository*

https://github.com/AdAway/AdAway - *GitHub - AdAway/AdAway: AdAway is a free and open source ad blocker for Android.*

https://github.com/AdAway/AdAway/wiki - *Home · AdAway/AdAway Wiki · GitHub*

----

添加 hosts 来源（本地文件）：

1. Label 填写：*localhosts*

2. List format 选择：*BLOCK*

3. Type 选择：*FILE*

    - 选择手机文件：*\/storage/emulated/0/Download/hosts.txt*

        ```md
        # This hosts file is generated by AdAway.
        # Please do not modify it directly, it will be overwritten when AdAway is applied again.
        # This file is generated from the following sources:
        # [...]
        
        127.0.0.1 localhost
        127.0.0.1 www.baidu.com
        
        108.177.126.90 translate.googleapis.com
        220.181.174.98 translate.google.com
        ```
4. 勾选“Apply redirected hosts”

添加 hosts 来源（远程 URL）：

1. Label 填写：*HelloGitHub*

2. List format 选择：*BLOCK*

3. Type 选择：*URL*

    - Location 填写：*https://raw.hellogithub.com/hosts*

4. 勾选“Apply redirected hosts”

## 网络工具

### PCAPdroid

> PCAPdroid is an open source network capture and monitoring tool which works without root privileges. （译文：PCAPdroid 是一款开源网络捕获和监控工具，无需 root 权限即可运行。）

![f-droid](https://badgen.net/f-droid/v/com.emanuelef.remote_capture)
![GitHub last commit](https://img.shields.io/github/last-commit/emanuele-f/PCAPdroid?color=blue&logo=github&style=flat-square)
![](https://badgen.net/badge/💰/应用内包含付费功能/grey)

https://github.com/emanuele-f/PCAPdroid - *emanuele-f/PCAPdroid: No-root network monitor, firewall and PCAP dumper for Android*

https://emanuele-f.github.io/PCAPdroid/ - *PCAPdroid | User Guide*

用法：

- TLS 解密

    官方教程：https://emanuele-f.github.io/PCAPdroid/tls_decryption - *3.1 Introduction | PCAPdroid*
    
    基本操作步骤，按文档教程操作：
    
    1. 初始设置（[参照内容](https://emanuele-f.github.io/PCAPdroid/tls_decryption#32-initial-setup)）
    2. 解密（[参照内容](https://emanuele-f.github.io/PCAPdroid/tls_decryption#33-decrypting)）

相关工具：

1. https://github.com/mitmproxy/mitmproxy - *mitmproxy/mitmproxy: An interactive TLS-capable intercepting HTTP proxy for penetration testers and software developers.*
2. https://github.com/M66B/NetGuard - *GitHub - M66B/NetGuard: A simple way to block access to the internet per app*
3. https://github.com/Genymobile/gnirehtet - *GitHub - Genymobile/gnirehtet: Gnirehtet provides reverse tethering for Android*
4. https://github.com/emanuele-f/zdtun - *GitHub - emanuele-f/zdtun: Zero Dep Tunnel: VPN library without dependencies*

相关术语：

1. SNI（Server Name Information，服务器名称信息）

## RSS

### Feeder

> <img src="https://f-droid.org/repo/com.nononsenseapps.feeder/en-US/icon_Ab31f6rFiG70NRqjyOH87znJd2y38yiEg2Tz_lY791w=.png" alt="package icon" align="left" width="58" hspace="7" vspace="7" style="border-radius: 5px;margin: 7px;"> 优秀、自由并开源的 RSS 订阅阅读器

![f-droid](https://badgen.net/f-droid/v/com.nononsenseapps.feeder)
![PlayShields](https://img.shields.io/endpoint?color=green&url=https%3A%2F%2Fplay.cuzi.workers.dev%2Fplay%3Fi%3Dcom.nononsenseapps.feeder%26l%3DPlay%2520Store%2520version%26m%3Dv%24version)
![GitLab Release (by release name)](https://img.shields.io/gitlab/v/release/spacecowboy/Feeder?include_prereleases&logo=gitlab)

------

支持的平台：
<i class="fa fa-android"></i>

https://f-droid.org/zh_Hans/packages/com.nononsenseapps.feeder/ - *Feeder | F-Droid - Free and Open Source Android App Repository*

https://gitlab.com/spacecowboy/Feeder - *Space Cowboy / Feeder · GitLab*

### Read You

> <img src="https://f-droid.org/repo/me.ash.reader/zh-CN/icon_Bq9nQb_UzmI1DBSluSA8Q-d5tFo9dQWmyIyt69onHfo=.png" alt="package icon" align="left" width="58" hspace="0" vspace="0" style="border-radius: 5px;margin: 7px 7px 0 0;"> 一个以 Material You 风格呈现的 RSS 阅读器

------

https://f-droid.org/packages/me.ash.reader/ - *Read You | F-Droid - Free and Open Source Android App Repository*

https://github.com/Ashinch/ReadYou - *GitHub - Ashinch/ReadYou: An Android RSS reader presented in Material You style.*

## 连接

### URLCheck

> 在打开网址之前，允许您分析（或共享）它们。

![f-droid](https://badgen.net/f-droid/v/com.trianguloy.urlchecker)
![GitHub last commit](https://flat.badgen.net/github/last-commit/TrianguloY/UrlChecker?icon=github&color=blue)

https://f-droid.org/packages/com.trianguloy.urlchecker/ - *URLCheck | F-Droid - Free and Open Source Android App Repository*

https://github.com/TrianguloY/UrlChecker - *GitHub - TrianguloY/UrlChecker: Android app by TrianguloY: URLCheck*

---

常见问题解答：

> 应用版本：2.11

问题：

当出现这样的情况：点击其他应用中的 URL 链接，通过“Opera”浏览器无法打开。

分析：

“浏览器”在手机中设置了“应用双开”，才会导致上述问题。

解答：

方式一：关闭“应用双开”功能。

方式二：兼容“应用双开”，可使用下列操作步骤：*复制 URL 链接 > 下拉“控制中心” > 点击磁贴“检查剪贴板中的链接” > 按正常操作重新执行一遍*。

## 图像

### Image Resizer

> <img src="https://f-droid.org/repo/ru.tech.imageresizershrinker/en-US/icon_-9n8vowl_QLljJDENvZaSlNplpt8PF-LrCkGnGshnUg=.png" alt="package icon" align="left" width="58" hspace="0" vspace="0" style="border-radius: 5px;margin: 7px 7px 0 0;"> ImageResizer is a simple image resizer with width/height selection, EXIF redacting, quality and output image type picking, telegram sticker pattern and output image size prediction.

![f-droid](https://badgen.net/f-droid/v/ru.tech.imageresizershrinker)
![GitHub last commit](https://img.shields.io/github/last-commit/T8RIN/ImageResizer?color=blue&logo=github&style=flat-square)

------

https://github.com/T8RIN/ImageResizer - *GitHub - T8RIN/ImageResizer: Powerful image resizer with width/height selection, cropping, EXIF editing, quality and output image type picking and batch processing feature.*

https://f-droid.org/packages/ru.tech.imageresizershrinker/ - *Image Resizer | F-Droid - Free and Open Source Android App Repository*

📆 Time of First use: 2023/03/15

----

功能：
- 从图片中选取颜色
- 对比两张指定的图片

## 硬件检测

### CPU Info

> <img src="https://f-droid.org/assets/ic_repo_app_default_KNN008Z2K7VNPZOFLMTry3JkfFYPxVGDopS1iwWe5wo=.png" alt="package icon" align="left" width="58" hspace="0" vspace="0" style="border-radius: 5px;margin: 7px 7px 0 0;"> 查看有关设备硬件和软件的信息

![f-droid](https://badgen.net/f-droid/v/com.kgurgul.cpuinfo)
![GitHub last commit](https://img.shields.io/github/last-commit/kamgurgul/cpu-info?color=blue&logo=github&style=flat-square)

------

https://github.com/kamgurgul/cpu-info - *GitHub - kamgurgul/cpu-info: CPU Info provides information about device hardware and software*

https://f-droid.org/packages/com.kgurgul.cpuinfo/ - *CPU Info | F-Droid - Free and Open Source Android App Repository*
