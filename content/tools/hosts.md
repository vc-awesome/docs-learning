?> hosts 管理工具

https://github.com/topics/hosts - *hosts · GitHub Topics · GitHub*



?> Windows 10 hosts 文件初始内容

```shell
# Copyright (c) 1993-2009 Microsoft Corp.
#
# This is a sample HOSTS file used by Microsoft TCP/IP for Windows.
#
# This file contains the mappings of IP addresses to host names. Each
# entry should be kept on an individual line. The IP address should
# be placed in the first column followed by the corresponding host name.
# The IP address and the host name should be separated by at least one
# space.
#
# Additionally, comments (such as these) may be inserted on individual
# lines or following the machine name denoted by a '#' symbol.
#
# For example:
#
#      102.54.94.97     rhino.acme.com          # source server
#       38.25.63.10     x.acme.com              # x client host

# localhost name resolution is handled within DNS itself.
#	127.0.0.1       localhost
#	::1             localhost
```

## Link

http://ddrfans.com/Html/1/301864.html - _hosts文件修改方法集合(附各种问题解决方法) | 更新日期：2023/1/14,DDR爱好者之家 - 无损音乐,高清电影,福利资源,技术教程,磁力下载,网盘云盘资源_

https://sspai.com/post/43248 - *在 Windows 上如何管理 Hosts？这里有 3 款小工具推荐给你*

~~https://cloud.tencent.com/developer/article/1932239 - *Google hosts - 简单介绍与使用方法*~~

刷新本地 DNS

修改了 hosts 文件后不需要重启电脑，直接在本地刷新 dns 的缓存即可生效：

- Windows

    1. <kbd>win</kbd> + <kbd>R</kbd> 组合键启动运行，输入 `cmd` 打开命令行工具
    2. 在 `cmd` 工具界面输入

        ```bash
        ipconfig /flushdns
        ```

        ，然后回车
    3. 接下来你会看到`已成功刷新 DNS 解析缓存。`

- macOS

    1. 打开终端工具
    2. 输入
        ```bash
        sudo killall -HUP mDNSResponder
        ```




## Tool

### SwitchHosts

?> Switch hosts quickly!

![GitHub last commit](https://img.shields.io/github/last-commit/oldj/SwitchHosts?logo=github)
![GitHub Release Date](https://img.shields.io/github/release-date/oldj/SwitchHosts?logo=github)
![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/oldj/SwitchHosts?logo=github)
![GitHub Repo stars](https://img.shields.io/github/stars/oldj/SwitchHosts?style=social)

<i class="fa fa-laptop"></i> https://swh.app/zh/

<i class="fa fa-github fa-lg"></i> https://github.com/oldj/SwitchHosts

<i class="fa fa-windows"></i> <i class="fa fa-linux"></i> <i class="fa fa-apple"></i> https://github.com/oldj/SwitchHosts/releases

----

手机应用
1. [Daedalus](os/mobile/README.md#daedalus)
2. [personalDNSfilter](os/mobile/README.md#personaldnsfilter)

## Rules

### Google

搜索引擎、GitHub 搜索：_google host_

- https://github.com/y1yang0/hosts
    ![](https://flat.badgen.net/github/last-commit/y1yang0/hosts?icon=github&color=blue)

- https://github.com/googlehosts/hosts
    ![](https://flat.badgen.net/github/last-commit/googlehosts/hosts?icon=github&color=blue)

- https://github.com/lennylxx/ipv6-hosts
    ![](https://img.shields.io/github/last-commit/lennylxx/ipv6-hosts?color=blue&logo=github&style=flat-square)

- https://cloud.tencent.com/developer/article/1932239 - *Google hosts - 简单介绍与使用方法*

### GitHub

https://raw.hellogithub.com/hosts via https://github.com/521xueweihan/GitHub520 ![GitHub last commit](https://img.shields.io/github/last-commit/521xueweihan/GitHub520?color=blue&logo=github&style=flat-square) ![](https://flat.badgen.net/github/last-commit/521xueweihan/GitHub520?icon=github&color=blue)

### AD

> 广告过滤（拦截）

- https://github.com/privacy-protection-tools/anti-AD ![](https://flat.badgen.net/github/last-commit/privacy-protection-tools/anti-AD?icon=github&color=blue)

- https://github.com/gorhill/uBlock ![](https://flat.badgen.net/github/last-commit/gorhill/uBlock?icon=github&color=blue)


## Browser addons

