# DNS

## 简介

> DNS（Domain Name System）域名系统，简单点来说，就是当我们在浏览器输入一个网址，需要有一台 DNS 服务器帮我们解析成 IP 地址，我们才能打开这个网站。那么，DNS 服务器解析的速度快慢，直接影响到我们访问网站的快慢。


## 教程

1. https://ephen.me/2017/PublicDns_1/ - *使用公共 DNS 上网的弊端（一） | Ephen‘s Blog*
2. https://ephen.me/2017/PublicDns_2/ - *使用公共 DNS 上网的弊端（二） | Ephen‘s Blog*
3. https://selfboot.cn/2015/11/05/dns_theory/ - *从理论到实践，全方位认识DNS（理论篇） | Just For Fun*
4. https://selfboot.cn/2015/11/14/dns_practice/ - *从理论到实践，全方位认识DNS（实践篇） | Just For Fun*
5. https://blog.skk.moe/post/i-have-my-unique-dns-setup/ - *我有特别的 DNS 配置和使用技巧 | Sukka's Blog*


## DNS 域名商

1. https://www.namesilo.com/ - *Cheap Domain Names & Web Hosting Starting at $0.99! | NameSilo*

2. https://www.cloudflare-cn.com/ - *Cloudflare 中国官网 | 智能化云服务平台 | 免费CDN安全防护 | Cloudflare*

3. Godaddy 如何安装 SSL 证书

   1. http://godaddy.idcspy.com/install-ssl - *GoDaddy安装SSL证书详细图解（2018版）*
   2. http://www.laozuo.org/10693.html - *GoDaddy虚拟主机cPanel面板安装SSL证书实现HTTPS加密*


### 配置

#### CNAME

https://developer.qiniu.com/fusion/kb/1322/how-to-configure-cname-domain-name - *如何配置域名的 CNAME - 七牛开发者中心*


#### TTL

DNS TTL（Time To Live）是指域名解析记录在 DNS 服务器上的生存时间，也就是告诉 Resolving Name Server 对 DNS 记录的一个缓存时间。

https://yun123.io/dns-ttl-best-practices/ - *DNS TTL值设置最佳实践 – 如何优化域名解析速度(DNS TTL值设置最佳实践) | 云原生百科*


### DNS 记录类型

常见 DNS 记录类型：

A 记录：
A 记录是用来创建到 IP 地址的记录。

CNAME 记录：
CNAME 记录也成别名记录，它允许你将多个记录映射到同一台计算机上。

MX 记录：
用于邮件服务。

NS 记录：
NS 记录是域名服务器记录，用来指定域名由哪台服务器来进行解析。

TXT 记录：
XT 记录一般是为某条记录设置说明。


## 公共 DNS

| 序号 | 服务商 | DNS（首选） | DNS（备用） | 地址 | 文档 |
| --- | --- | --- | --- | --- | --- |
| 1 | 谷歌 | `8.8.8.8` | `8.8.4.4` | [官方链接](https://developers.google.com/speed/public-dns) | |
| 2  | 百度 | `180.76.76.76` | | [官方链接](http://dudns.baidu.com/intro/publicdns/) | |
| 3 | 114 | `114.114.114.114` | `114.114.115.115` | [官方链接](https://www.114dns.com/) | |
| 4 | 腾讯 | `119.29.29.29` | `119.28.28.28` | [官方链接](https://www.dnspod.com/) | [配置文档](https://www.dnspod.cn/Products/publicdns)
| 5 | 阿里 | `223.5.5.5` | `223.6.6.6` | [官方链接](https://www.alidns.com/) | [配置文档](https://www.alidns.com/knowledge?type=SETTING_DOCS) |
| 6 | 微软 | `4.2.2.1` | `4.2.2.2` | | |
| 7 | Cloudflare | `1.1.1.1` | `1.0.0.1` | [官方链接](https://1.1.1.1/) | |
| 8 | 电信 DNS  | `202.103.44.150` | `202.103.0.68` | | |
| 9 | 移动 DNS  | `211.137.58.20` | `211.137.64.163` | | |
| 10 | 联通 DNS  | `211.95.1.97` | | | |
| 11 | Quad101 | `101.101.101.101` | `101.102.103.104` | [官方链接](https://101.101.101.101/) | |
| 12 | 360 | `101.226.4.6` | `218.30.118.6` | [官方链接](https://sdns.360.net/) | [配置文档](https://sdns.360.net/dnsPublic.html) |
| 13 | AdGuard | `94.140.14.140` | `94.140.14.141` | [官方链接](https://adguard-dns.io/zh_cn/welcome.html) | [配置文档](https://adguard-dns.io/zh_cn/public-dns.html) |
| 14 | TUNA DNS666 | `101.6.6.6` | `2001:da8::666` | [官方链接](https://tuna.moe/help/dns/) | |

参考：

1. https://adguard-dns.io/kb/zh-CN/general/dns-providers/ - *已知的 DNS 提供商 | AdGuard DNS Knowledge Base*
2. 🪜 https://guide.v2fly.org/basics/dns.html - *DNS 服务 | 新 V2Ray 白话文指南*
3. http://tools.jb51.net/table/public_dns - *公共DNS说明表*
4. https://jingyan.baidu.com/article/49711c61a30127fa451b7c51.html - *2018 年公共 DNS 推荐 - 百度经验*
5. https://jingyan.baidu.com/album/6dad50753e6031a123e36e1f.html - *2018 公共 DNS 服务器地址评估 —DNS 推荐_电脑软件 - 百度经验*


### DNS 加密协议

https://adguard-dns.io/kb/zh-CN/public-dns/overview/ - *概览 | AdGuard DNS Knowledge Base*

- DNSCrypt（开源的加密协议）
- DNS-over-HTTPS (DoH)
- DNS-over-TLS (DoT)
- DNS-over-QUIC


## 配置 DNS

https://blog.utermux.dev/ut/angednsch.html - *Termux修改DNS - Utermux博客*

### 浏览器配置 DNS

https://www.alidns.com/knowledge?type=SETTING_DOCS#user_chrome - *阿里公共DNS*

> *电脑浏览器、手机浏览器均可配置独立 DNS。*
>
> 浏览器配置 DNS 或私人 DNS 后，GitHub 访问速度变快，可无需配置 hosts 规则。
>
> ⚠️ Opera 手机浏览器配置安全 DNS（ AdGuard 公共 DNS：`https://94.140.14.140/dns-query`），直接翻墙！


### 手机配置私人 DNS

配置步骤：

1. https://www.alidns.com/knowledge?type=SETTING_DOCS#user_android - *阿里公共DNS*

    ```uri
    dot.360.cn
    ```

2. 通过 `Termux` 查看是否配置成功

    - 方式一：通过 `Termux` 查看

        ```bash
        ping -c 10 raw.githubusercontent.com
        ```

    - 方式二：通过浏览器查看

        ```uri
        chrome://net-internals/?#dns
        ```
        
        在 Domain 中输入 `raw.githubusercontent.com` 进行查询，如果查询结果是 `["0.0.0.0","::"]` 表示配置失败。

3. [清除 Android 设备的 DNS 缓存](https://adguard-dns.io/kb/zh-CN/public-dns/solving-problems/how-to-flush-dns-cache/#android%E5%AE%89%E5%8D%93)

    1. 最简单的方法：打开和关闭飞行模式。


## 查看 DNS

### 手机移动网络和 WLAN 网络如何查看 DNS 服务器地址

> 手机品牌：`XIAOMI`  
> 手机型号：`Redmi Note 11T Pro`  
> 手机系统：`MIUI 14.0.3`

操作步骤：打开 *应用 > 设置 > 双卡与移动网络 > （滑动至页面底部）高级设置 > （滑动至页面底部）*，就可以查看到 IP 地址和 DNS 服务器地址。

https://www.cnblogs.com/dewan/p/nslookup.html - *nslookup 域名或IP地址 [DNS服务器] - 武平宁 - 博客园*


## 清除 DNS 缓存

1. https://adguard-dns.io/kb/zh-CN/public-dns/solving-problems/how-to-flush-dns-cache - *如何刷新DNS缓存 | AdGuard DNS Knowledge Base*
2. http://www.dayanzai.me/flush-dns.html - *刷新 DNS：如何清除 DNS 缓存*
3. https://www.sysgeek.cn/flush-dns-cache/ - *如何清除与刷新 DNS 缓存，完全指南 - 系统极客*


### 桌面浏览器

用法：

1. Firefox：`about:networking#dns`

2. Chrome：`chrome://net-internals/#dns`

参考：

1. https://sysin.org/blog/clear-browser-dns-cache/ - *如何清除浏览器的 DNS 缓存 (Chrome, Firefox, Safari) - sysin | SYStem INside | 软件与技术分享* [如何清除浏览器的 DNS 缓存：Chrome、Edge、Firefox、Safari - 知乎](https://zhuanlan.zhihu.com/p/386294623)

2. https://geekflare.com/clear-dns-cache-on-windows-chrome-firefox-and-safari/ - *Easy Steps to Clear DNS Cache on Windows, Chrome, Firefox and Safari*

3. https://www.sysgeek.cn/flush-dns-cache/ - *如何清除与刷新 DNS 缓存，完全指南 - 系统极客*


## 工具

https://mp.weixin.qq.com/s/Ch4JISwgS7rgDQXQT9De8g - *网页打开慢／图片刷不出来？多半是DNS出了问题*

- https://flowus.cn/share/f3496c9b-54de-4242-9f07-c18913b71a68 - *网络修复／DNS修改*

https://www.isc.org/dns-tools/ - *DNS Tools - ISC*


### 在线工具

1. 👏 https://whatismyip.li/dns-leak - *What is my IP | What is a DNS leak?*
2. https://nstool.netease.com/ - *网易DNS检测工具*
3. https://uutool.cn/nslookup/ - *在线nslookup域名解析查询工具 - UU在线工具*
4. https://tool.chinaz.com/nslookup/ - *nslookup查询*
5. https://cloud.baidu.com/product/bcd/mobile/#/ - *bcd-applet*
6. https://tool.chinaz.com/dns/ - *DNS查询*
7. https://ntool.chinaz.com/dnsce/ - *DNS污染检测*
8. https://mping.chinaz.com/ - *多个地点Ping服务器,网站测速 - 站长工具*


### 测速工具

DNS Benchmark

> A unique, comprehensive, accurate & free Windows (and Linux/Wine) utility to determine the exact performance of local and remote DNS nameservers . . .

官方：

https://www.grc.com/dns/benchmark.htm - *GRC's | DNS Nameserver Performance Benchmark*

支持的平台：

1. Windows

参考：

1. https://www.zhihu.com/question/393321165 - *启用哪一个DNS网速最快？ - 知乎*


### Simple DNSCrypt

> Simple DNSCrypt is a simple management tool to configure dnscrypt-proxy on windows based systems.

![GitHub last commit](https://img.shields.io/github/last-commit/bitbeans/SimpleDnsCrypt?color=blue&logo=github)

Website: https://simplednscrypt.org/ - *Simple DNSCrypt* 🪜

GitHub: https://github.com/bitbeans/SimpleDnsCrypt - *bitbeans/SimpleDnsCrypt: A simple management tool for dnscrypt-proxy*

参考：https://zhuanlan.zhihu.com/p/89837660 - *使用Simple DNSCrypt/DNSoverHTTPS？ - 知乎*


### dnscrypt-proxy

> DNSCrypt is a protocol that encrypts, authenticates and optionally anonymizes communications between a DNS client and a DNS resolver. It prevents DNS spoofing. It uses cryptographic signatures to verify that responses originate from the chosen DNS resolver and haven’t been tampered with.

![GitHub last commit](https://img.shields.io/github/last-commit/DNSCrypt/dnscrypt-proxy?color=blue&logo=github)

Website: https://dnscrypt.info/ - *DNSCrypt version 2 - Official Project Home Page*

GitHub: https://github.com/DNSCrypt/dnscrypt-proxy - *DNSCrypt/dnscrypt-proxy: dnscrypt-proxy 2 - A flexible DNS proxy, with support for encrypted DNS protocols.*


### AdGuard DNS

> AdGuard 是摆脱烦人广告，在线跟踪并使您的计算机原理恶意软件的最佳途径。其使您体验快速，安全，无广告的网络冲浪。

Website:

1. https://adguard.com/zh_cn/welcome.html - *AdGuard - 世界上最高级的广告拦截程序！*

GitHub:

1. https://github.com/AdguardTeam - *AdGuard · GitHub*

DNS:

1. 🪜 https://adguard-dns.io/zh_cn/welcome.html - *AdGuard DNS — 拦截广告的 DNS 服务器*

    1. ✅ https://adguard-dns.io/zh_cn/public-dns.html - *连接到公共 AdGuard DNS 服务器*

    2. ✅ https://adguard-dns.io/kb/zh-CN/ - *概览 | AdGuard DNS Knowledge Base* [GitHub](https://github.com/AdguardTeam/KnowledgeBaseDNS)

        ![GitHub last commit](https://badgen.net/github/last-commit/AdguardTeam/KnowledgeBaseDNS?icon=github&color=blue)

VPN:

1. 🪜 https://adguard-vpn.com/zh_cn/welcome.html - *AdGuard VPN 保护你的隐私与安全*


### DNSMasq

> Dnsmasq provides network infrastructure for small networks: DNS, DHCP, router advertisement and network boot. It is designed to be lightweight and have a small footprint, suitable for resource constrained routers and firewalls. It has also been widely used for tethering on smartphones and portable hotspots, and to support virtual networking in virtualisation frameworks. Supported platforms include Linux (with glibc and uclibc), Android, *BSD, and Mac OS X. Dnsmasq is included in most Linux distributions and the ports systems of FreeBSD, OpenBSD and NetBSD. Dnsmasq provides full IPv6 support.

官方：

1. https://dnsmasq.org/ - _Dnsmasq - network services for small networks._

支持的平台：

1. Linux

参考：

1. https://wiki.archlinux.org/title/Dnsmasq_(简体中文) - _dnsmasq - Arch Linux 中文维基_
2. https://wiki.debian.org/dnsmasq - _dnsmasq - Debian Wiki_
3. https://www.cnblogs.com/sunsky303/p/9238669.html - *dnsmasq详解&手册 - sunsky303 - 博客园*
4. https://blog.51cto.com/longlei/2065967 - _dnsmasq详解及配置_51CTO博客_dnsmasq配置_
5. ~~https://cloud.tencent.com/developer/article/1174~~


### SmartDNS

> SmartDNS 是一个运行在本地的 DNS 服务器，它接受来自本地客户端的 DNS 查询请求，然后从多个上游 DNS 服务器获取 DNS 查询结果，并将访问速度最快的结果返回给客户端，以此提高网络访问速度。 SmartDNS 同时支持指定特定域名 IP 地址，并高性匹配，可达到过滤广告的效果; 支持DOT(DNS over TLS)和DOH(DNS over HTTPS)，更好的保护隐私。

![GitHub last commit](https://badgen.net/github/last-commit/pymumu/smartdns?icon=github&color=blue)

Website:

1. https://pymumu.github.io/smartdns/ - *SmartDNS*

GitHub:

1. https://github.com/pymumu/smartdns - *GitHub - pymumu/smartdns: A local DNS server to obtain the fastest website IP for the best Internet experience, support DoT, DoH. 一个本地DNS服务器，获取最快的网站IP，获得最佳上网体验，支持DoH，DoT。*

支持的平台：

1. Windows
2. Linux
3. macOS
4. Android（Termux）


### 手机应用

1. [DnsChanger](https://git.frostnerd.com/PublicAndroidApps/DnsChanger) - *PublicAndroidApps / DnsChanger · GitLab*
2. [personalDNSfilter](https://www.zenz-solutions.de/personaldnsfilter-wp/) - *personalDNSfilter | Zenz Solutions | adblocker & privacy protection*

    有关详细信息，请参阅“[personalDNSfilter](/os/mobile/mobile-app-list.md#personaldnsfilter)”。


## 常见问题

1. https://sspai.com/post/42125 - *网速变慢？你可能需要先设置好 DNS | 科普*


### 如何测试 DNS 服务器的性能

- ping

- nslookup

- dig https://www.sysgeek.cn/linux-dig/ - *掌握 DNS 查询技巧，dig 命令基本用法 - 系统极客*

https://yun123.io/dns-server-performance-testing/ - *如何测试 DNS 服务器的性能和响应时间(DNS 服务器性能监控) | 云原生百科*
