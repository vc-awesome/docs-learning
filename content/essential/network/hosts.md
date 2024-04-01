# Hosts

## Introduction

> Hosts 是一个没有扩展名的系统文件，可以用记事本等工具打开，其作用就是将一些常用的网址域名与其对应的 IP 地址建立一个关联"数据库"，当用户在浏览器中输入一个需要登录的网址时，系统会首先自动从 Hosts 文件中寻找对应的 IP 地址，一旦找到，系统会立即打开对应网页，如果没有找到，则系统会再将网址提交 DNS 域名解析服务器进行 IP 地址的解析。
>
> —— <cite>[hosts文件修改方法集合(附各种问题解决方法) - DDR爱好者之家 更新日期：2023/7/10](http://m.ddrfans.com/3g/1/301864.html)</cite>

## Search

https://github.com/topics/hosts - *hosts · GitHub Topics · GitHub*

## Tutorials

https://github.com/VeleSila/yhosts/wiki - *Home · VeleSila/yhosts Wiki · GitHub*

![GitHub last commit](https://badgen.net/github/last-commit/VeleSila/yhosts?icon=github&color=blue)

## Configuration

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
#    127.0.0.1       localhost
#    ::1             localhost
```

## Tool

### 电脑端

#### SwitchHosts

> Switch hosts quickly!

![GitHub last commit](https://img.shields.io/github/last-commit/oldj/SwitchHosts?logo=github)
![GitHub Release Date](https://img.shields.io/github/release-date/oldj/SwitchHosts?logo=github)
![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/oldj/SwitchHosts?logo=github)
![GitHub Repo stars](https://img.shields.io/github/stars/oldj/SwitchHosts?style=social)

---

<i class="fa fa-laptop fa-fw"></i> https://switchhosts.vercel.app/

<i class="fa-brands fa-github fa-fw"></i> https://github.com/oldj/SwitchHosts

<i class="fa-regular fa-download fa-fw"></i> https://github.com/oldj/SwitchHosts/releases

- 支持 Windows, macOS, Linux

### 手机端

应用列表：

1. [AdAway](os/mobile/app-list.md#adaway)
2. [personalDNSfilter](os/mobile/app-list.md#personaldnsfilter)
3. [Daedalus](os/mobile/app-list.md#daedalus)
4. ✅ [Virtual Hosts]() - *hosts for android,implement by vpn mode,supports wildcard DNS records - x-falcon/Virtual-Hosts*

    - 支持 Android（[Google Play](https://play.google.com/store/apps/details?id=com.github.xfalcon.vhosts), [F-Droid](https://f-droid.org/packages/com.github.xfalcon.vhosts)）

    - 开源软件（[GitHub](https://github.com/x-falcon/Virtual-Hosts)）

用法：

- AdAway：配置本地 hosts 规则和远端 github hosts 规则
- Daedalus：配置本地 hosts 规则和远端 github hosts 规则（软件版本：？，启动 DNS 功能后使用一两分钟，应用出现奔溃问题）
- Virtual Hosts：置本地 hosts 规则和远端 github hosts 规则（软件版本：？，开启 DNS 每次只能使用一条规则）
- personalDNSfilter：无法配置本地 hosts，但可以在 *高级设置 > 配置其他主机* 添加规则；配置远端 github hosts 规则时，只能拦截不能重定向规则
- AdGuard：无法配置格式为 `127.0.0.1 www.baidu.com` 的本地 hosts 规则和远端 hosts 规则

以上应用配置完远端 hosts 规则，需清除设备 DNS 缓存（手机端使用“开启/关闭飞行模式”的方式清除 DNS 缓存）。

### Browser addons

## Rules（订阅源）

### ~~Google~~

搜索引擎、GitHub 搜索：*google host*

1. https://github.com/googlehosts/hosts - *googlehosts/hosts: 镜像：https://scaffrey.coding.net/p/hosts/git / https://git.qvq.network/googlehosts/hosts*

    ![GitHub last commit](https://badgen.net/github/last-commit/googlehosts/hosts?icon=github&color=blue)

2. https://github.com/lennylxx/ipv6-hosts - *lennylxx/ipv6-hosts: Fork of https://code.google.com/archive/p/ipv6-hosts/, focusing on automation*

    ![GitHub last commit](https://img.shields.io/github/last-commit/lennylxx/ipv6-hosts?color=blue&logo=github)

3. https://cloud.tencent.com/developer/article/1932239 - *Google hosts - 简单介绍与使用方法*

4. ~~https://github.com/y1yang0/hosts~~

    ![GitHub last commit](https://badgen.net/github/last-commit/y1yang0/hosts?icon=github&color=blue)

### GitHub

#### 521xueweihan/GitHub520

> :kissing_heart: 让你“爱”上 GitHub，解决访问时图裂、加载慢的问题。（无需安装）

![GitHub last commit](https://badgen.net/github/last-commit/521xueweihan/GitHub520?icon=github&color=blue)
![GitHub Repo stars](https://img.shields.io/github/stars/521xueweihan/GitHub520?style=social)

https://github.com/521xueweihan/GitHub520 - *GitHub - 521xueweihan/GitHub520: :kissing_heart: 让你“爱”上 GitHub，解决访问时图裂、加载慢的问题。（无需安装）*

远程 URL：

1. `https://raw.hellogithub.com/hosts`

#### ineo6/hosts

> 解决 GitHub 图片无法显示，加速 GitHub 网页浏览。

![GitHub last commit](https://badgen.net/github/last-commit/ineo6/hosts?icon=github&color=blue)
![GitHub Repo stars](https://img.shields.io/github/stars/ineo6/hosts?style=social)

https://github.com/ineo6/hosts - *GitHub - ineo6/hosts: GitHub 最新 hosts。解决 GitHub 图片无法显示，加速 GitHub 网页浏览。*

远程 URL：

1. `https://gitlab.com/ineo6/hosts/-/raw/master/hosts`

2. `https://gitlab.com/ineo6/hosts/-/raw/master/next-hosts`

### 广告拦截

> 广告过滤（拦截）

1. https://github.com/privacy-protection-tools/anti-AD - *privacy-protection-tools/anti-AD: 致力于成为中文区命中率最高的广告过滤列表，实现精确的广告屏蔽和隐私保护。anti-AD现已支持AdGuardHome，dnsmasq， Surge，Pi-Hole，smartdns等网络组件。完全兼容常见的广告过滤工具所支持的各种广告过滤列表格式*

    ![GitHub last commit](https://badgen.net/github/last-commit/privacy-protection-tools/anti-AD?icon=github&color=blue)
    ![GitHub Repo stars](https://img.shields.io/github/stars/privacy-protection-tools/anti-AD?style=social)

2. https://github.com/gorhill/uBlock - *gorhill/uBlock: uBlock Origin - An efficient blocker for Chromium and Firefox. Fast and lean.*

    ![GitHub last commit](https://badgen.net/github/last-commit/gorhill/uBlock?icon=github&color=blue)
    ![GitHub Repo stars](https://img.shields.io/github/stars/gorhill/uBlock?style=social)

3. https://github.com/StevenBlack/hosts - *StevenBlack/hosts: 🔒 Consolidating and extending hosts files from several well-curated sources. Optionally pick extensions for porn, social media, and other categories.*

    ![GitHub last commit](https://img.shields.io/github/last-commit/StevenBlack/hosts?color=blue&logo=github)
    ![GitHub Repo stars](https://img.shields.io/github/stars/StevenBlack/hosts?style=social)

## 刷新本地 DNS

修改了 hosts 文件后不需要重启电脑，直接在本地刷新 dns 的缓存即可生效：

### Windows

操作步骤：

1. <kbd>win</kbd> + <kbd>R</kbd> 组合键启动运行，输入 `cmd` 打开命令行工具；

2. 在 `cmd` 工具界面输入

    ```bash
    ipconfig /flushdns
    ```

    ，然后回车；

3. 接下来你会看到 `已成功刷新 DNS 解析缓存` 。

### macOS

操作步骤：

1. 打开终端工具

2. 输入

    ```bash
    sudo killall -HUP mDNSResponder
    ```

### Android

[Essential > network > dns.md#手机配置私人 DNS](essential/network/dns.md#手机配置私人-DNS)

## 修改 hosts 文件

http://ddrfans.com/Html/1/301864.html - *hosts文件修改方法集合(附各种问题解决方法) | 更新日期：2023/11/11,DDR爱好者之家*

### macOS

「访达」查找文件所在位置：

- `/etc/hosts`

「终端」设置 hosts 写入权限：

- `sudo chmod -R 777 /etc/hosts`

## Reference

1. http://ddrfans.com/Html/1/301864.html - *hosts文件修改方法集合(附各种问题解决方法) | 更新日期：2023/1/14,DDR爱好者之家 - 无损音乐,高清电影,福利资源,技术教程,磁力下载,网盘云盘资源*

2. https://sspai.com/post/43248 - *在 Windows 上如何管理 Hosts？这里有 3 款小工具推荐给你*

3. ~~https://cloud.tencent.com/developer/article/1932239 - *Google hosts - 简单介绍与使用方法*~~
