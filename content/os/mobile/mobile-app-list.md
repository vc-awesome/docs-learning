
## 编辑模板

[Markdown#布局样式](tools/markdown.md#布局样式)

## 应用下载

### Droid-ify

> <img src="https://f-droid.org/repo/com.looker.droidify/en-US/icon_lApsnfhrMqGkCaW-IdnYwx86CUjdTutncPvXPJythaM=.png" alt="package icon" align="left" width="58" hspace="0" vspace="0" style="border-radius: 5px;margin: 7px 7px 0 0;"> Material-ify with Droid-ify. A quick material F-Droid client.

https://f-droid.org/packages/com.looker.droidify/ - *Droid-ify | F-Droid - Free and Open Source Android App Repository*

https://github.com/Iamlooker/Droid-ify - *GitHub - Iamlooker/Droid-ify: F-Droid client with Material UI.*

## 应用管理

### App Manager

https://github.com/MuntashirAkon/AppManager - *GitHub - MuntashirAkon/AppManager: A full-featured package manager and viewer for Android*

## 文件管理

### 质感文件（Material Files）

> 开源的 Material Design 文件管理器

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

## DNS

### personalDNSfilter

> 使用 Blocklist 在本地的 VPN 上基于 DNS 请求的主机阻止程序

![GitHub last commit](https://badgen.net/github/last-commit/IngoZenz/personaldnsfilter?icon=github&color=blue)
![f-droid](https://badgen.net/f-droid/v/dnsfilter.android)
![PlayShields](https://img.shields.io/endpoint?color=green&url=https%3A%2F%2Fplay.cuzi.workers.dev%2Fplay%3Fi%3Ddnsfilter.android%26l%3DPlay%2520Store%2520version%26m%3Dv%24version)

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

> No root required Android DNS modifier and Hosts/DNSMasq resolver.

![GitHub last commit](https://img.shields.io/github/last-commit/iTXTech/Daedalus?logo=github)
![GitHub Release Date](https://img.shields.io/github/release-date/iTXTech/Daedalus?logo=github)
![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/iTXTech/Daedalus?logo=github)
![GitHub Repo stars](https://img.shields.io/github/stars/iTXTech/Daedalus?style=social)
![F-Droid](https://badgen.net/f-droid/v/org.itxtech.daedalus?icon=f-droid)
![PlayShields](https://img.shields.io/endpoint?color=green&url=https%3A%2F%2Fplay.cuzi.workers.dev%2Fplay%3Fi%3Dorg.itxtech.daedalus%26l%3DPlay%2520Store%2520version%26m%3Dv%24version)


<i class="fa fa-laptop"></i> https://itxtech.org/

<i class="fa fa-github fa-lg"></i> https://github.com/iTXTech/Daedalus

<i class="fa fa-android"></i> https://github.com/iTXTech/Daedalus/releases


## Markor

> <img src="https://f-droid.org/repo/net.gsantner.markor/en-US/icon_jm7Yt2QTE4iuxQp_T98o-PSJ4m6GPzmawSrx99KYiE8=.png" alt="package icon" align="left" width="78" hspace="0" vspace="0">Text editor - Notes & ToDo (for Android) - Markdown, todo.txt, plaintext, math, ..

![f-droid](https://badgen.net/f-droid/v/net.gsantner.markor)
![GitHub package.json version](https://img.shields.io/github/package-json/v/docsifyjs/docsify?logo=github&style=social)
![GitHub last commit](https://badgen.net/github/last-commit/gsantner/markor?icon=github&color=blue)


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
----
https://github.com/gsantner/markor/discussions/1381 - *Filemanager & sync client support (cannot open file from other app) · gsantner/markor · Discussion #1381 · GitHub*

## RSS

### Feeder

> <img src="https://f-droid.org/repo/com.nononsenseapps.feeder/en-US/icon_Ab31f6rFiG70NRqjyOH87znJd2y38yiEg2Tz_lY791w=.png" alt="package icon" align="left" width="58" hspace="7" vspace="7" style="border-radius: 5px;margin: 7px;"> 优秀、自由并开源的 RSS 订阅阅读器

![f-droid](https://badgen.net/f-droid/v/com.nononsenseapps.feeder)
![PlayShields](https://img.shields.io/endpoint?color=green&url=https%3A%2F%2Fplay.cuzi.workers.dev%2Fplay%3Fi%3Dcom.nononsenseapps.feeder%26l%3DPlay%2520Store%2520version%26m%3Dv%24version)
![GitLab Release (by release name)](https://img.shields.io/gitlab/v/release/spacecowboy/Feeder?include_prereleases&logo=gitlab)

支持的平台：
<i class="fa fa-android"></i>

https://f-droid.org/zh_Hans/packages/com.nononsenseapps.feeder/

https://gitlab.com/spacecowboy/Feeder

### Read You

https://github.com/Ashinch/ReadYou - *GitHub - Ashinch/ReadYou: An Android RSS reader presented in Material You style.*

## Acode

> Acode - powerful text/code editor for android

![f-droid](https://badgen.net/f-droid/v/com.foxdebug.acode)
![GitHub last commit](https://img.shields.io/github/last-commit/deadlyjack/Acode?color=blue&logo=github&style=flat-square)

https://github.com/deadlyjack/Acode - *GitHub - deadlyjack/Acode: Acode - powerful text/code editor for android*

https://f-droid.org/zh_Hans/packages/com.foxdebug.acode/ - *Acode | F-Droid - Free and Open Source Android App Repository*

----

底部 ActionButton

- Toggle block comment - *切换块注释*
- Remove line - *删除行*
- Find - *查找*

## Image Resizer

> <img src="https://f-droid.org/repo/ru.tech.imageresizershrinker/en-US/icon_-9n8vowl_QLljJDENvZaSlNplpt8PF-LrCkGnGshnUg=.png" alt="package icon" align="left" width="58" hspace="0" vspace="0" style="border-radius: 5px;margin: 7px 7px 0 0;"> ImageResizer is a simple image resizer with width/height selection, EXIF redacting, quality and output image type picking, telegram sticker pattern and output image size prediction.

![f-droid](https://badgen.net/f-droid/v/ru.tech.imageresizershrinker)
![GitHub last commit](https://img.shields.io/github/last-commit/T8RIN/ImageResizer?color=blue&logo=github&style=flat-square)

https://github.com/T8RIN/ImageResizer - *GitHub - T8RIN/ImageResizer: Powerful image resizer with width/height selection, cropping, EXIF editing, quality and output image type picking and batch processing feature.*

https://f-droid.org/packages/ru.tech.imageresizershrinker/ - *Image Resizer | F-Droid - Free and Open Source Android App Repository*

📆 Time of First use: 2023/03/15

----

功能：
- 从图片中选取颜色
- 对比两张指定的图片

## 硬件检测

### CPU Info

https://github.com/kamgurgul/cpu-info - *GitHub - kamgurgul/cpu-info: CPU Info provides information about device hardware and software*

https://f-droid.org/packages/com.kgurgul.cpuinfo/ - *CPU Info | F-Droid - Free and Open Source Android App Repository*

## 下载工具

### Download Navi

https://github.com/TachibanaGeneralLaboratories/download-navi - _GitHub - TachibanaGeneralLaboratories/download-navi: Free and Open Source software download manager_


### 1DM+: Browser & Downloader

[1DM+: Browser & Downloader](https://play.google.com/store/apps/details?id=idm.internet.download.manager.plus)
