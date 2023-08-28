## Introduction

> Hosts 是一个没有扩展名的系统文件，可以用记事本等工具打开，其作用就是将一些常用的网址域名与其对应的 IP 地址建立一个关联"数据库"，当用户在浏览器中输入一个需要登录的网址时，系统会首先自动从 Hosts 文件中寻找对应的 IP 地址，一旦找到，系统会立即打开对应网页，如果没有找到，则系统会再将网址提交 DNS 域名解析服务器进行 IP 地址的解析。
> 
> —— http://m.ddrfans.com/3g/1/301864.html - *hosts文件修改方法集合(附各种问题解决方法) - DDR爱好者之家 更新日期：2023/7/10*


## Search

https://github.com/topics/hosts - *hosts · GitHub Topics · GitHub*

> Windows 10 hosts 文件初始内容

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


## Tutorials

https://github.com/VeleSila/yhosts/wiki - *Home · VeleSila/yhosts Wiki · GitHub*

![GitHub last commit](https://flat.badgen.net/github/last-commit/VeleSila/yhosts?icon=github&color=blue)


## Link

1. http://ddrfans.com/Html/1/301864.html - _hosts文件修改方法集合(附各种问题解决方法) | 更新日期：2023/1/14,DDR爱好者之家 - 无损音乐,高清电影,福利资源,技术教程,磁力下载,网盘云盘资源_

2. https://sspai.com/post/43248 - *在 Windows 上如何管理 Hosts？这里有 3 款小工具推荐给你*

3. ~~https://cloud.tencent.com/developer/article/1932239 - *Google hosts - 简单介绍与使用方法*~~


## Tool

### 电脑端

#### SwitchHosts

> Switch hosts quickly!

![GitHub last commit](https://img.shields.io/github/last-commit/oldj/SwitchHosts?logo=github)
![GitHub Release Date](https://img.shields.io/github/release-date/oldj/SwitchHosts?logo=github)
![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/oldj/SwitchHosts?logo=github)
![GitHub Repo stars](https://img.shields.io/github/stars/oldj/SwitchHosts?style=social)

---

<i class="fa fa-laptop"></i> https://switchhosts.vercel.app/

<i class="fa fa-github fa-lg"></i> https://github.com/oldj/SwitchHosts

下载：https://github.com/oldj/SwitchHosts/releases

- 支持 Windows, macOS, Linux


### 手机端

1. [Daedalus](os/mobile/mobile-app-list.md#daedalus)

2. [personalDNSfilter](os/mobile/mobile-app-list.md#personaldnsfilter)

3. [AdAway](os/mobile/mobile-app-list.md#adaway)


## Rules（订阅源）

### ~~Google~~

搜索引擎、GitHub 搜索：_google host_

- https://github.com/y1yang0/hosts

    ![](https://flat.badgen.net/github/last-commit/y1yang0/hosts?icon=github&color=blue)

- https://github.com/googlehosts/hosts

    ![](https://flat.badgen.net/github/last-commit/googlehosts/hosts?icon=github&color=blue)

- https://github.com/lennylxx/ipv6-hosts

    ![](https://img.shields.io/github/last-commit/lennylxx/ipv6-hosts?color=blue&logo=github&style=flat-square)

- https://cloud.tencent.com/developer/article/1932239 - *Google hosts - 简单介绍与使用方法*


### GitHub

#### 521xueweihan/GitHub520

> :kissing_heart: 让你“爱”上 GitHub，解决访问时图裂、加载慢的问题。（无需安装）

![](https://flat.badgen.net/github/last-commit/521xueweihan/GitHub520?icon=github&color=blue)

GitHub: https://github.com/521xueweihan/GitHub520

远程 URL：`https://raw.hellogithub.com/hosts`


### 广告拦截

> 广告过滤（拦截）

- https://github.com/privacy-protection-tools/anti-AD - *privacy-protection-tools/anti-AD: 致力于成为中文区命中率最高的广告过滤列表，实现精确的广告屏蔽和隐私保护。anti-AD现已支持AdGuardHome，dnsmasq， Surge，Pi-Hole，smartdns等网络组件。完全兼容常见的广告过滤工具所支持的各种广告过滤列表格式*
  
  ![](https://flat.badgen.net/github/last-commit/privacy-protection-tools/anti-AD?icon=github&color=blue)

- https://github.com/gorhill/uBlock - *gorhill/uBlock: uBlock Origin - An efficient blocker for Chromium and Firefox. Fast and lean.*
  
  ![](https://flat.badgen.net/github/last-commit/gorhill/uBlock?icon=github&color=blue)


## Browser addons


## 刷新本地 DNS

修改了 hosts 文件后不需要重启电脑，直接在本地刷新 dns 的缓存即可生效：


### Windows

1. <kbd>win</kbd> + <kbd>R</kbd> 组合键启动运行，输入 `cmd` 打开命令行工具
2. 在 `cmd` 工具界面输入

    ```bash
    ipconfig /flushdns
    ```

    ，然后回车
3. 接下来你会看到`已成功刷新 DNS 解析缓存。`

### macOS

1. 打开终端工具
2. 输入
    ```bash
    sudo killall -HUP mDNSResponder
    ```


### Android

[essential/dns.md#手机配置私人 DNS](essential/dns.md#手机配置私人-DNS)


## 修改 hosts 文件

### macOS
