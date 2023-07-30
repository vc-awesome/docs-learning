## 简介

> DNS（Domain Name System）域名系统，简单点来说，就是当我们在浏览器输入一个网址，需要有一台DNS服务器帮我们解析成IP地址，我们才能打开这个网站。那么，DNS服务器解析的速度快慢，直接影响到我们访问网站的快慢。

## 教程

https://ephen.me/2017/PublicDns_1/ - *使用公共 DNS 上网的弊端（一） | Ephen‘s Blog*

https://ephen.me/2017/PublicDns_2/ - *使用公共 DNS 上网的弊端（二） | Ephen‘s Blog*

https://selfboot.cn/2015/11/05/dns_theory/ - *从理论到实践，全方位认识DNS（理论篇） | Just For Fun*

https://selfboot.cn/2015/11/14/dns_practice/ - *从理论到实践，全方位认识DNS（实践篇） | Just For Fun*

https://blog.skk.moe/post/i-have-my-unique-dns-setup/ - *我有特别的 DNS 配置和使用技巧 | Sukka's Blog*

## DNS 域名商

1. https://www.namesilo.com/ - *Cheap Domain Names & Web Hosting Starting at $0.99! | NameSilo*

2. https://www.cloudflare-cn.com/ - *Cloudflare 中国官网 | 智能化云服务平台 | 免费CDN安全防护 | Cloudflare*

### 配置域名 CNAME

https://developer.qiniu.com/fusion/kb/1322/how-to-configure-cname-domain-name - *如何配置域名的 CNAME - 七牛开发者中心*

## 公共 DNS

🪜 https://adguard-dns.io/kb/zh-CN/general/dns-providers/ - *已知的 DNS 提供商 | AdGuard DNS Knowledge Base*

🪜 https://guide.v2fly.org/basics/dns.html - *DNS 服务 | 新 V2Ray 白话文指南*

| 序号 | 服务商     | DNS-1        | DNS-2       | 地址                                                       |
| ---------- | --------------- | -------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| 1      | 谷歌       | `8.8.8.8`       | `8.8.4.4`      | [官方链接](https://developers.google.com/speed/public-dns) |
| 2      | 百度       | `180.76.76.76`  |                |                                                            |
| 3       | 114        | `114.114.114.114` | `114.114.115.115` | [官方链接](https://www.114dns.com/)                                                           |
| 4      | 腾讯       | `119.29.29.29`  |                |                                                            |
| 5    | 阿里     | `223.5.5.5`     | `223.6.6.6`    | [官方链接](https://www.alidns.com/)                        |
| 6      | 微软       | `4.2.2.1`       | `4.2.2.2`      |                                                            |
| 7 | Cloudflare | `1.1.1.1`       | `1.0.0.1`      |                                                            |
| 8 | 电信的DNS  | `202.103.44.150` | `202.103.0.68` |                                                            |
| 9 | 移动的DNS  | `211.137.58.20` | `211.137.64.163` |                                                            |
| 10 | 联通的DNS  | `211.95.1.97`   |                |                                                            |

Via http://tools.jb51.net/table/public_dns - *公共DNS说明表*

### 阿里公共 DNS

主页：

https://www.alidns.com/knowledge - *阿里公共DNS*

配置文档：

https://www.alidns.com/knowledge?type=SETTING_DOCS - *阿里公共DNS*

```uri
dns.alidns.com
```

```IPv4（首选）
223.5.5.5
```

```IPv4（备用）
223.6.6.6
```

```DoH
https://dns.alidns.com/dns-query
```

### AdGuard 公共 DNS

主页：

🪜 https://adguard-dns.io/zh_cn/welcome.html - *AdGuard DNS — 拦截广告的 DNS 服务器*

配置文档：

https://adguard-dns.io/zh_cn/public-dns.html - *连接到公共 AdGuard DNS 服务器*

```uri
dns.adguard-dns.com
```

```IPv4（首选）
94.140.14.140
```

```IPv4（备用）
94.140.14.141
```

```DoH
https://94.140.14.140/dns-query
```

### 360 安全 DNS

主页：

https://sdns.360.net/ - *360安全DNS*

配置文档：

https://sdns.360.net/dnsPublic.html - *360安全DNS*

```IPv4（首选）
101.226.4.6
```

```IPv4（备用）
218.30.118.6
```

```DoH
https://doh.360.cn
```

### DNSPod Public DNS（腾讯云）

主页：

https://www.dnspod.cn/Products/publicdns - *DNSPod Public DNS（腾讯云）*

### DNS 加密协议

https://adguard-dns.io/kb/zh-CN/public-dns/overview/ - *概览 | AdGuard DNS Knowledge Base*
- DNSCrypt（开源的加密协议）
- DNS-over-HTTPS (DoH)
- DNS-over-TLS (DoT)
- DNS-over-QUIC

## 配置 DNS

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
2. [清除 Android 设备的 DNS 缓存](https://adguard-dns.io/kb/zh-CN/public-dns/solving-problems/how-to-flush-dns-cache/#android%E5%AE%89%E5%8D%93)

    1. 最简单的方法：打开和关闭飞行模式。


## 清除 DNS 缓存

🪜 https://adguard-dns.io/kb/zh-CN/public-dns/solving-problems/how-to-flush-dns-cache - *如何刷新DNS缓存 | AdGuard DNS Knowledge Base*

🏷️ _macOS_ 、 _Windows_ 、 _Linux_ 、 _Android（安卓）_ 、 _iOS_

http://www.dayanzai.me/flush-dns.html - *刷新 DNS：如何清除 DNS 缓存*

🏷️ _Windows_


## 工具

### 在线工具

1. https://nstool.netease.com/ - *网易DNS检测工具*
2. https://uutool.cn/nslookup/ - *在线nslookup域名解析查询工具 - UU在线工具*

3. https://cloud.baidu.com/product/bcd/mobile/#/ - *bcd-applet*
4. https://tool.chinaz.com/dns/ - *DNS查询*
5. https://ntool.chinaz.com/dnsce/ - *DNS污染检测*

6. https://tool.chinaz.com/nslookup/ - *nslookup查询*


### 测试工具

DNS Benchmark（电脑管家）

Website: https://www.grc.com/dns/benchmark.htm - *GRC's | DNS Nameserver Performance Benchmark*

### 加密工具

#### Simple DNSCrypt

![GitHub last commit](https://img.shields.io/github/last-commit/bitbeans/SimpleDnsCrypt?color=blue&logo=github&style=flat-square)

Website: https://simplednscrypt.org/ - *Simple DNSCrypt* 🪜

GitHub: https://github.com/bitbeans/SimpleDnsCrypt - *bitbeans/SimpleDnsCrypt: A simple management tool for dnscrypt-proxy*

参考：https://zhuanlan.zhihu.com/p/89837660 - *使用Simple DNSCrypt/DNSoverHTTPS？ - 知乎*

#### dnscrypt-proxy

![GitHub last commit](https://img.shields.io/github/last-commit/DNSCrypt/dnscrypt-proxy?color=blue&logo=github&style=flat-square)

Website: https://dnscrypt.info/ - *DNSCrypt version 2 - Official Project Home Page*

GitHub: https://github.com/DNSCrypt/dnscrypt-proxy - *DNSCrypt/dnscrypt-proxy: dnscrypt-proxy 2 - A flexible DNS proxy, with support for encrypted DNS protocols.*

### 终端工具

[nslookup](os/linux/linux%20指令.md#nslookup) 命令

### AdGuard 🔥

> AdGuard 是摆脱烦人广告，在线跟踪并使您的计算机原理恶意软件的最佳途径。其使您体验快速，安全，无广告的网络冲浪。

Website:

1. https://adguard.com/zh_cn/welcome.html - *AdGuard - 世界上最高级的广告拦截程序！*

DNS:

1. 🪜 https://adguard-dns.io/zh_cn/welcome.html - *AdGuard DNS — 拦截广告的 DNS 服务器*

    1. ✅ https://adguard-dns.io/zh_cn/public-dns.html - *连接到公共 AdGuard DNS 服务器*

    2. ✅ https://adguard-dns.io/kb/zh-CN/ - *概览 | AdGuard DNS Knowledge Base*

VPN:

1. 🪜 https://adguard-vpn.com/zh_cn/welcome.html - *AdGuard VPN 保护你的隐私与安全*

### DNSMasq

🏷️ _Linux 工具_

官方：

1. https://dnsmasq.org/ - _Dnsmasq - network services for small networks._

参考：

1. https://wiki.archlinux.org/title/Dnsmasq_(简体中文) - _dnsmasq - Arch Linux 中文维基_
2. https://wiki.debian.org/dnsmasq - _dnsmasq - Debian Wiki_
3. ~~https://cloud.tencent.com/developer/article/1174~~
4. https://www.cnblogs.com/sunsky303/p/9238669.html - *dnsmasq详解&手册 - sunsky303 - 博客园*
5. https://blog.51cto.com/longlei/2065967 - _dnsmasq详解及配置_51CTO博客_dnsmasq配置_

### SmartDNS

![GitHub last commit](https://flat.badgen.net/github/last-commit/pymumu/smartdns?icon=github&color=blue)

Website: https://pymumu.github.io/smartdns/ - *SmartDNS*

GitHub: https://github.com/pymumu/smartdns - *GitHub - pymumu/smartdns: A local DNS server to obtain the fastest website IP for the best Internet experience, support DoT, DoH. 一个本地DNS服务器，获取最快的网站IP，获得最佳上网体验，支持DoH，DoT。*
- 支持 Windows, Linux, macOS

### 手机应用

#### DnsChanger

https://git.frostnerd.com/PublicAndroidApps/DnsChanger - *PublicAndroidApps / DnsChanger · GitLab*

## FAQ

1. https://sspai.com/post/42125 - *网速变慢？你可能需要先设置好 DNS | 科普*

### 手机移动网络/WLAN网络如何查看 DNS 服务器地址

> 手机品牌：`XIAOMI`  
> 手机型号：`Redmi Note 11T Pro`  
> 手机系统：`MIUI 14.0.3`

操作步骤：打开 *应用 > 设置 > 双卡与移动网络 > （滑动至页面底部）高级设置 > （滑动至页面底部）*，就可以查看到 IP 地址和 DNS 服务器地址。

