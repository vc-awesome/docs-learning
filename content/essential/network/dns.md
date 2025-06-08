# DNS

![bg2022080102.webp (WEBP Image, 800 × 400 pixels) — Scaled (49%)](https://cdn.beekka.com/blogimg/asset/202208/bg2022080102.webp)

<div style="text-align: right;">

<small>*Picture source: [DNS 查询原理详解 - 阮一峰的网络日志](https://www.ruanyifeng.com/blog/2022/08/dns-query.html)*</small>

</div>

## 简介

> DNS（Domain Name System）域名系统，简单点来说，就是当我们在浏览器输入一个网址，需要有一台 DNS 服务器帮我们解析成 IP 地址，我们才能打开这个网站。那么，DNS 服务器解析的速度快慢，直接影响到我们访问网站的快慢。

DNS 是域名系统的缩写。 它是一个分散的命名系统，用于计算机、服务或任何连接到互联网或专用网络的资源。 DNS 将域名（如 www.example.com ）转换为计算机可以理解的 IP 地址（如 192.0.2.1）。 以下是 DNS 的主要方面：

1. **域名**： 域名是分配给 IP 地址的人类可读标签。 它通常由两个或多个部分组成，以点分隔，如 "example.com"。

2. **IP 地址**： IP 地址是分配给连接到使用互联网协议进行通信的计算机网络的每个设备的数字标签。

3. **DNS 解析器**： DNS 解析器是一个服务器，代表客户端（如网络浏览器）查询 DNS 信息，将域名解析为 IP 地址。

4. **DNS 记录类型**： DNS 维护各种类型的记录（如 A、AAAA、CNAME、MX、TXT），这些记录存储与域名及其相关资源有关的不同类型信息。

5. **层次结构**： DNS 以分层结构运行，根 DNS 服务器位于顶层，其次是顶级域 (TLD) 服务器、域名服务器和管理特定域的权威域名服务器。

DNS 是互联网运行的基础，允许用户使用人类可读的域名访问网站、发送电子邮件和执行各种在线活动，而不是记住复杂的 IP 地址。

## 教程

1. https://www.ruanyifeng.com/blog/2016/06/dns.html - *DNS 原理入门 - 阮一峰的网络日志*
2. https://www.ruanyifeng.com/blog/2022/08/dns-query.html - *DNS 查询原理详解 - 阮一峰的网络日志*
3. https://www.cloudflare.com/zh-cn/learning/dns/what-is-dns/ - *什么是 DNS_DNS如何工作_权威性DNS服务器 | Cloudflare 中国官网 | Cloudflare*
4. https://www.digitalocean.com/community/tutorials/an-introduction-to-dns-terminology-components-and-concepts - *An Introduction to DNS Terminology, Components, and Concepts | DigitalOcean*
5. https://ephen.me/2017/PublicDns_1/ - *使用公共 DNS 上网的弊端（一） | Ephen‘s Blog*
6. https://ephen.me/2017/PublicDns_2/ - *使用公共 DNS 上网的弊端（二） | Ephen‘s Blog*
7. https://selfboot.cn/2015/11/05/dns_theory/ - *从理论到实践，全方位认识DNS（理论篇） | Just For Fun*
8. https://selfboot.cn/2015/11/14/dns_practice/ - *从理论到实践，全方位认识DNS（实践篇） | Just For Fun*
9. https://blog.skk.moe/post/i-have-my-unique-dns-setup/ - *我有特别的 DNS 配置和使用技巧 | Sukka's Blog*

### DNS 泄露

https://einverne.github.io/post/2024/06/dns-leak.html - *DNS 泄漏以及如何防止 | Verne in GitHub*

### DNS 污染

暂无

## DNS 域名商

1. https://www.namesilo.com/ - *Cheap Domain Names & Web Hosting Starting at $0.99! | NameSilo*

2. https://www.cloudflare-cn.com/ - *Cloudflare 中国官网 | 智能化云服务平台 | 免费CDN安全防护 | Cloudflare*

3. Godaddy 如何安装 SSL 证书

   1. http://godaddy.idcspy.com/install-ssl - *GoDaddy安装SSL证书详细图解（2018版）*
   2. http://www.laozuo.org/10693.html - *GoDaddy虚拟主机cPanel面板安装SSL证书实现HTTPS加密*

### DNS 记录类型

常见 DNS 记录类型：

**A 记录**：\
A 记录是用来创建到 IP 地址的记录。

**AAAA 记录**：\
AAAA 记录是 DNS 中用来指定 IPv6 地址的记录类型，它们帮助互联网上的计算机和设备通过域名找到正确的 IPv6 地址。

**CNAME 记录**：\
CNAME 记录也称别名记录，它允许你将多个记录映射到同一台计算机上。

**MX 记录**：\
用于邮件服务。

**NS 记录**：\
NS 记录是域名服务器记录，用来指定域名由哪台服务器来进行解析。

**TXT 记录**：\
TXT 记录一般是为某条记录设置说明。

#### A 记录

暂无

#### AAAA 记录

暂无

#### CNAME 记录

暂无

#### NS 记录

暂无

### 配置

#### TTL

DNS TTL（Time To Live）是指域名解析记录在 DNS 服务器上的生存时间，也就是告诉 Resolving Name Server 对 DNS 记录的一个缓存时间。

https://yun123.io/dns-ttl-best-practices/ - *DNS TTL值设置最佳实践 – 如何优化域名解析速度(DNS TTL值设置最佳实践) | 云原生百科*

#### CNAME

https://developer.qiniu.com/fusion/kb/1322/how-to-configure-cname-domain-name - *如何配置域名的 CNAME - 七牛开发者中心*

## DNS 服务器类型

https://www.ruanyifeng.com/blog/2018/05/root-domain.html - *根域名的知识 - 阮一峰的网络日志*

### 递归解析器

暂无

### 根域名服务器

暂无

### TLD 域名服务器

暂无

### 权威性域名服务器

暂无

## 公共 DNS

序号 | 服务商 | DNS（IPv4 首选） | DNS（IPv4 备用） | DoH | DoT | 地址 | 文档
--- | --- | --- | --- | --- | --- | --- | ---
1 | 谷歌 | `8.8.8.8` | `8.8.4.4` | `https://dns.google/dns-query` | `tls://dns.google` | [官方链接](https://developers.google.com/speed/public-dns) | -
2  | 百度 | `180.76.76.76` | `2400:da00::6666` | - | - | [官方链接](http://dudns.baidu.com/) | -
3 | 114 | `114.114.114.114` | `114.114.115.115` | - | - | [官方链接](https://www.114dns.com/) | -
4 | 腾讯 | `119.29.29.29` | `119.28.28.28` | - | `dot.pub` | [官方链接](https://www.dnspod.com/) | [配置文档](https://www.dnspod.cn/Products/publicdns)
5 | 阿里 👏 | `223.5.5.5` | `223.6.6.6` | `https://dns.alidns.com/dns-query`, `dns.alidns.com` | - | [官方链接](https://www.alidns.com/) | [配置文档](https://www.alidns.com/knowledge?type=SETTING_DOCS)
6 | 360 👏 | `101.226.4.6` | `218.30.118.6` | `doh.360.cn` | - | [官方链接](https://sdns.360.net/) | [配置文档](https://sdns.360.net/dnsPublic.html)
7 | 微软 | `4.2.2.1` | `4.2.2.2` | - | - | - | -
8 | Cloudflare | `1.1.1.1` | `1.0.0.1` | `https://dns.cloudflare.com/dns-query` | - | [官方链接](https://1.1.1.1/) | -
9 | 电信 DNS  | `202.103.44.150` | `202.103.0.68` | - | - | - | -
10 | 移动 DNS  | `211.137.58.20` | `211.137.64.163` | - | - | - | -
11 | 联通 DNS  | `211.95.1.97` | - | - | - | - | -
12 | Quad101 | `101.101.101.101` | `101.102.103.104` | - | - | [官方链接](https://101.101.101.101/) | -
13 | AdGuard 👏 | `94.140.14.140` | `94.140.14.141` | `https://94.140.14.140/dns-query` | - | [官方链接](https://adguard-dns.io/zh_cn/welcome.html) | [配置文档](https://adguard-dns.io/zh_cn/public-dns.html)
14 | TUNA DNS666 | `101.6.6.6` | `2001:da8::666` | - | - | [官方链接](https://tuna.moe/help/dns/) | -
15 | RethinkDNS 👏 | - | - | `https://basic.rethinkdns.com/` | `tls://max.rethinkdns.com` | [官方链接](https://www.rethinkdns.com/) | -

参考：

1. https://adguard-dns.io/kb/zh-CN/general/dns-providers/ - *已知的 DNS 提供商 | AdGuard DNS Knowledge Base*
2. https://guide.v2fly.org/basics/dns.html - *DNS 服务 | 新 V2Ray 白话文指南* 🪜
3. http://tools.jb51.net/table/public_dns - *公共DNS说明表*
4. https://jingyan.baidu.com/article/49711c61a30127fa451b7c51.html - *2018 年公共 DNS 推荐 - 百度经验*
5. https://jingyan.baidu.com/album/6dad50753e6031a123e36e1f.html - *2018 公共 DNS 服务器地址评估 —DNS 推荐_电脑软件 - 百度经验*
6. https://dnsdaquan.com/ - *全国DNS服务器IP地址大全 公共DNS大全 dns地址大全 dns大全*

### UDP

暂无

### DNS 安全协议

https://adguard-dns.io/kb/zh-CN/public-dns/overview/ - *概览 | AdGuard DNS Knowledge Base*

- DNSCrypt（开源的加密协议）
- DNS-over-HTTPS (DoH)
- DNS-over-TLS (DoT)
- DNS-over-QUIC（DoQ）

#### DNSCrypt

[DNSCrypt version 2 - Official Project Home Page](https://dnscrypt.info/) - *New home of the DNSCrypt project, now implementing multiple protocols to improve DNS security. Download official DNSCrypt & DoH servers and clients here.* [GitHub Org](https://github.com/dnscrypt)

#### DoH

DoH stands for **DNS over HTTPS**. It is a protocol for performing DNS resolution via the HTTPS protocol, which provides encryption and authentication. Traditional DNS queries and responses are sent over plaintext, making them vulnerable to interception and manipulation. 

With DNS over HTTPS, DNS queries are encapsulated within HTTPS requests, using the same port (443) as HTTPS traffic. This provides several benefits:

1. **Privacy:** DNS over HTTPS encrypts DNS queries and responses, preventing eavesdropping and tampering by third parties, including ISPs.

2. **Security:** HTTPS provides authentication and integrity verification, ensuring that DNS responses are from legitimate sources and have not been modified in transit.

3. **Bypassing DNS-based censorship:** Since DNS over HTTPS traffic appears like regular HTTPS traffic, it can bypass DNS-based censorship or filtering.

4. **Improved performance:** DNS over HTTPS can potentially improve performance by leveraging the caching and optimizations built into HTTPS and HTTP/2.

DNS over HTTPS has gained popularity as a privacy-preserving alternative to traditional DNS resolution methods, such as DNS over UDP/TCP. It is supported by major web browsers and operating systems, contributing to its adoption across various platforms and services.

DoH 是 **DNS over HTTPS** 的缩写。 它是一种通过 HTTPS 协议执行 DNS 解析的协议，该协议提供加密和身份验证功能。 传统的 DNS 查询和响应是通过明文发送的，容易被截获和篡改。 

通过 HTTPS DNS，DNS 查询被封装在 HTTPS 请求中，使用与 HTTPS 流量相同的端口（443）。 这样做有几个好处：

1. **隐私性：** 通过 HTTPS 的 DNS 会对 DNS 查询和响应进行加密，防止第三方（包括 ISP）窃听和篡改。

2. **安全性：** HTTPS 提供身份验证和完整性验证，确保 DNS 响应来自合法来源，且在传输过程中未被修改。

3. **绕过基于 DNS 的审查：** 由于 HTTPS 上的 DNS 流量看起来与普通 HTTPS 流量无异，因此可以绕过基于 DNS 的审查或过滤。

4. **提高性能：** HTTPS 上的 DNS 可利用 HTTPS 和 HTTP/2 内置的缓存和优化功能提高性能。

作为 UDP/TCP DNS 等传统 DNS 解析方法的隐私保护替代方案，HTTPS 上的 DNS 已广为流行。 它得到了主要网络浏览器和操作系统的支持，从而被各种平台和服务所采用。

#### DoT

DoT stands for **DNS over TLS**. It is another protocol for performing DNS resolution, similar to DNS over HTTPS (DoH), but instead of using HTTPS for encryption and authentication, it utilizes TLS (Transport Layer Security).

Here are the key aspects of DNS over TLS:

1. **Encryption:** DNS over TLS encrypts DNS queries and responses using TLS, which provides privacy and prevents eavesdropping on DNS traffic.

2. **Authentication:** TLS provides server authentication, ensuring that DNS responses come from legitimate DNS servers and have not been tampered with during transmission.

3. **Port:** DNS over TLS typically uses port 853 for communication, distinct from traditional DNS (port 53).

4. **Compatibility:** DoT is supported by some operating systems, DNS servers, and client software. Its adoption is growing alongside DoH as a privacy-enhancing technology for DNS resolution.

DNS over TLS is particularly beneficial for applications and devices that require secure DNS resolution without relying on HTTPS. It offers similar privacy and security benefits to DoH but operates within the TLS protocol instead of HTTPS.

DoT 是 **DNS over TLS** 的缩写。 它是另一种执行 DNS 解析的协议，与 HTTPS 上的 DNS（DoH）类似，但它不使用 HTTPS 进行加密和验证，而是使用 TLS（传输层安全）。

以下是 TLS DNS 的主要方面：

1. **加密：** DNS over TLS 使用 TLS 对 DNS 查询和响应进行加密，从而保护隐私并防止窃听 DNS 流量。

2. **验证：** TLS 提供服务器验证，确保 DNS 响应来自合法的 DNS 服务器，且在传输过程中未被篡改。

3. **端口：** 通过 TLS 的 DNS 通常使用 853 端口进行通信，有别于传统的 DNS（53 端口）。

4. **兼容性：** 一些操作系统、DNS 服务器和客户端软件支持 DoT。 作为 DNS 解析的一种隐私增强技术，DoT 与 DoH 的应用正在不断增长。

对于需要安全 DNS 解析而又不依赖 HTTPS 的应用和设备来说，TLS DNS 尤为有利。 它具有与 DoH 类似的隐私和安全优势，但在 TLS 协议而不是 HTTPS 中运行。

#### DoQ

暂无

## 配置 DNS

1. https://www.alidns.com/knowledge?type=SETTING_DOCS - *阿里公共DNS*
2. https://sdns.360.net/dnsPublic.html - *360安全DNS*
3. https://simpledns.plus/kb/201-how-to-enable-dns-over-tls-dot-dns-over-https-doh-in-macos-v11 - *How to enable DNS over TLS (DoT) / DNS over HTTPS (DoH) in MacOS v. 11+ | Simple DNS Plus Knowledge Base*
4. https://blog.utermux.dev/ut/angednsch.html - *Termux修改DNS - Utermux博客*

### macOS

1. https://www.alidns.com/knowledge?type=SETTING_DOCS#user_ios - *阿里公共DNS*
2. https://cleanbrowsing.org/help/docs/manually-change-dns-on-a-mac-terminal/ - *Change DNS on a Mac using Terminal - CleanBrowsing Help*

#### Cloudflare DoH

https://ajfleming.info/2020/07/05/setting-up-cloudflare-doh-dns-over-https-on-macos/ - *Setting up Cloudflare DoH (DNS over HTTPS) on macOS - A.J. Fleming*

### 浏览器配置 DNS

https://www.alidns.com/knowledge?type=SETTING_DOCS#user_chrome - *阿里公共DNS*

> *电脑浏览器、手机浏览器均可配置独立 DNS。*
>
> 浏览器配置 DNS 或私人 DNS 后，GitHub 访问速度变快，可无需配置 hosts 规则。

### 手机配置私人 DNS

配置步骤：

1. https://www.alidns.com/knowledge?type=SETTING_DOCS#user_android - *阿里公共DNS*

    ```uri
    dot.360.cn
    ```

2. 查看是否配置成功

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

### macOS

```bash
nslookup baidu.com
```

### 手机移动网络和 WLAN 网络如何查看 DNS 服务器地址

> 手机品牌：`XIAOMI`  
> 手机型号：`Redmi Note 11T Pro`  
> 手机系统：`MIUI 14.0.3`

操作步骤：打开 *应用 > 设置 > 双卡与移动网络 > （滑动至页面底部）高级设置 > （滑动至页面底部）*，就可以查看到 IP 地址和 DNS 服务器地址。

https://www.cnblogs.com/dewan/p/nslookup.html - *nslookup 域名或IP地址 [DNS服务器] - 武平宁 - 博客园*

## 清除 DNS 缓存

1. https://adguard-dns.io/kb/zh-CN/public-dns/solving-problems/how-to-flush-dns-cache/ - *如何刷新DNS缓存 | AdGuard DNS Knowledge Base*
2. http://www.dayanzai.me/flush-dns.html - *刷新 DNS：如何清除 DNS 缓存*
3. https://www.sysgeek.cn/flush-dns-cache/ - *如何清除与刷新 DNS 缓存，完全指南 - 系统极客*

### macOS

适用于 macOS 10.7 Lion 及更高版本。

1. 在「访达」>「应用程序」>「实用工具」中打开「终端」应用。

2. 在「终端」中执行以下命令：

```bash
# 清除 macOS 的 DNS 缓存
sudo dscacheutil -flushcache

# 重新注册所有本地服务和 Bonjour 名称
sudo killall -HUP mDNSResponder
```

```bash
sudo dscacheutil -flushcache;sudo killall -HUP mDNSResponder
```

![刷新 macOS 系统 DNS 缓存](https://img.sysgeek.cn/img/2024/04/flush-dns-cache-p3.png)

刷新 macOS 系统 DNS 缓存

### 浏览器

用法：

1. Firefox：`about:networking#dns`

2. Chrome：`chrome://net-internals/#dns`

参考：

1. https://sysin.org/blog/clear-browser-dns-cache/ - *如何清除浏览器的 DNS 缓存 (Chrome, Firefox, Safari) - sysin | SYStem INside | 软件与技术分享* [如何清除浏览器的 DNS 缓存：Chrome、Edge、Firefox、Safari - 知乎](https://zhuanlan.zhihu.com/p/386294623)
2. https://geekflare.com/clear-dns-cache-on-windows-chrome-firefox-and-safari/ - *Easy Steps to Clear DNS Cache on Windows, Chrome, Firefox and Safari*
3. https://www.sysgeek.cn/flush-dns-cache/ - *如何清除与刷新 DNS 缓存，完全指南 - 系统极客*

## 查询

https://site.ip138.com/ - *ip子域名大全 ip二级域名 ip域名解析查询*

### Ping

暂无

### 子域名

1. https://www.dnsgrep.cn/ - *子域名查询|ip反查域名 - DNSGrep*
2. https://chaziyu.com/ - *子域名查询 查子域名 查子站 子域名大全 二级域名查询 查子域*

### IP

https://ipchaxun.com/ - *ip查询 查ip 网站ip查询 同ip网站查询 iP反查域名 iP查域名 同ip域名*

### IP 反查域名

https://www.dnsgrep.cn/ip - *ip反查域名 - dnsgrep*

### 备案

https://icplishi.com/ - *icp备案查询 网站备案查询 域名备案号查询 icp备案查询icp历史网*

### Whois

https://whois.cloud.tencent.com/ - *域名信息查询 - 腾讯云*

## 工具

https://mp.weixin.qq.com/s/Ch4JISwgS7rgDQXQT9De8g - *网页打开慢／图片刷不出来？多半是DNS出了问题*

- https://flowus.cn/share/f3496c9b-54de-4242-9f07-c18913b71a68 - *网络修复／DNS修改*

https://www.isc.org/dns-tools/ - *DNS Tools - ISC*

### 命令行工具

#### dig

暂无

#### host

暂无

#### nslookup

暂无

#### ping

暂无

#### whois

暂无

### Web 工具

1. 👏 https://whatismyip.li/dns-leak/ - *What is my IP | What is a DNS leak?*
2. https://nstool.netease.com/ - *网易DNS检测工具*
3. https://uutool.cn/nslookup/ - *在线nslookup域名解析查询工具 - UU在线工具*
4. https://tool.chinaz.com/nslookup/ - *nslookup查询*
5. https://cloud.baidu.com/product/bcd/mobile/#/ - *bcd-applet*
6. https://tool.chinaz.com/dns/ - *DNS查询*
7. https://tool.chinaz.com/dnsce/ - *DNS污染检测*
8. https://mping.chinaz.com/ - *多个地点Ping服务器,网站测速 - 站长工具*

### 客户端工具

#### 测速工具

DNS Benchmark

> A unique, comprehensive, accurate & free Windows (and Linux/Wine) utility to determine the exact performance of local and remote DNS nameservers . . .

官方：

https://www.grc.com/dns/benchmark.htm - *GRC's | DNS Nameserver Performance Benchmark*

支持的平台：

1. Windows

参考：

1. https://www.zhihu.com/question/393321165 - *启用哪一个DNS网速最快？ - 知乎*

#### ~~Simple DNSCrypt~~

> Simple DNSCrypt is a simple management tool to configure dnscrypt-proxy on windows based systems.

![GitHub last commit](https://img.shields.io/github/last-commit/bitbeans/SimpleDnsCrypt?color=blue&logo=github)
![GitHub Release Date - Published_At](https://img.shields.io/github/release-date/bitbeans/SimpleDnsCrypt?display_date=published_at&logo=github)
![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/bitbeans/SimpleDnsCrypt?logo=github)
![GitHub Repo stars](https://img.shields.io/github/stars/bitbeans/SimpleDnsCrypt?style=social)

官方：

1. Website: https://simplednscrypt.org/ - *Simple DNSCrypt* 🪜

2. GitHub: https://github.com/bitbeans/SimpleDnsCrypt - *bitbeans/SimpleDnsCrypt: A simple management tool for dnscrypt-proxy*

支持的平台：

1. Windows

参考：

1. https://zhuanlan.zhihu.com/p/89837660 - *使用Simple DNSCrypt/DNSoverHTTPS？ - 知乎*

#### dnscrypt-proxy

> DNSCrypt is a protocol that encrypts, authenticates and optionally anonymizes communications between a DNS client and a DNS resolver. It prevents DNS spoofing. It uses cryptographic signatures to verify that responses originate from the chosen DNS resolver and haven’t been tampered with.

![GitHub last commit](https://img.shields.io/github/last-commit/DNSCrypt/dnscrypt-proxy?color=blue&logo=github)
![GitHub Release Date - Published_At](https://img.shields.io/github/release-date/DNSCrypt/dnscrypt-proxy?display_date=published_at&logo=github)
![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/DNSCrypt/dnscrypt-proxy?logo=github)
![GitHub Repo stars](https://img.shields.io/github/stars/DNSCrypt/dnscrypt-proxy?style=social)

官方：

1. Website: https://dnscrypt.info/ - *DNSCrypt version 2 - Official Project Home Page*

2. GitHub: https://github.com/DNSCrypt/dnscrypt-proxy - *DNSCrypt/dnscrypt-proxy: dnscrypt-proxy 2 - A flexible DNS proxy, with support for encrypted DNS protocols.*

支持的平台：

1. Windows
2. Linux
3. macOS
4. Android

#### AdGuard DNS

> 自建能够保护您的个人信息、允许您在互联网上管理对特殊内容的访问以及屏蔽跟踪器的拦截广告 DNS 服务器。

官方：

1. https://adguard-dns.io/zh_cn/welcome.html - *AdGuard DNS — 拦截广告的 DNS 服务器*

    1. https://adguard-dns.io/zh_cn/public-dns.html - *连接到公共 AdGuard DNS 服务器*

    2. https://adguard-dns.io/kb/zh-CN/ - *概览 | AdGuard DNS Knowledge Base* [GitHub Repo](https://github.com/AdguardTeam/KnowledgeBaseDNS)

        ![GitHub last commit](https://img.shields.io/github/last-commit/AdguardTeam/KnowledgeBaseDNS?color=blue&logo=github)
        ![GitHub Repo stars](https://img.shields.io/github/stars/AdguardTeam/KnowledgeBaseDNS?style=social)

#### SmartDNS

> SmartDNS 是一个运行在本地的 DNS 服务器，它接受来自本地客户端的 DNS 查询请求，然后从多个上游 DNS 服务器获取 DNS 查询结果，并将访问速度最快的结果返回给客户端，以此提高网络访问速度。 SmartDNS 同时支持指定特定域名 IP 地址，并高性匹配，可达到过滤广告的效果; 支持DOT(DNS over TLS)和DOH(DNS over HTTPS)，更好的保护隐私。

![GitHub last commit](https://img.shields.io/github/last-commit/pymumu/smartdns?color=blue&logo=github)
![GitHub Release Date - Published_At](https://img.shields.io/github/release-date/pymumu/smartdns?display_date=published_at&logo=github)
![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/pymumu/smartdns?logo=github)
![GitHub Repo stars](https://img.shields.io/github/stars/pymumu/smartdns?style=social)

官方：

1. Website: https://pymumu.github.io/smartdns/ - *SmartDNS*

2. GitHub: https://github.com/pymumu/smartdns - *GitHub - pymumu/smartdns: A local DNS server to obtain the fastest website IP for the best Internet experience, support DoT, DoH. 一个本地DNS服务器，获取最快的网站IP，获得最佳上网体验，支持DoH，DoT。*

支持的平台：

1. Windows
2. Linux
3. macOS
4. Android（Termux）

快速入门：

1. macOS 安装

    ```bash
    brew install smartdns
    ```

2. 配置

    配置文件：`/opt/homebrew/etc/smartdns/smartdns.conf`

3. 运行

    ```bash
    /opt/homebrew/opt/smartdns/sbin/smartdns run -c /opt/homebrew/etc/smartdns/smartdns.conf
    ```

在 macOS 上使用 SmartDNS，可以通过以下步骤配置：

1. **下载 SmartDNS**: 首先，你需要从 SmartDNS 官方网站或其他可信的源下载 SmartDNS 的 macOS 版本。

2. **安装 SmartDNS**: 根据提供的说明进行安装，通常是通过拖动应用程序到“应用程序”文件夹来完成。

3. **配置 SmartDNS**:
   - 打开“系统偏好设置”。
   - 选择“网络”。
   - 选择你正在使用的网络接口（如 Wi-Fi 或以太网）。
   - 点击“高级”按钮。
   - 选择“DNS”标签。
   - 点击左下角的“+”按钮，添加 SmartDNS 提供的 DNS 服务器地址。

4. **启动 SmartDNS**: 打开你安装的 SmartDNS 应用，按照应用内的指导完成初步设置。这通常包括配置你的 SmartDNS 服务器地址和其他相关设置。

5. **验证配置**: 使用网络工具（如 `nslookup` 或 `dig` 命令）来确认你的 DNS 请求通过 SmartDNS 进行。

这些步骤可能会因 SmartDNS 的不同版本或提供者而有所不同，请参考具体版本的官方文档。如果你遇到问题，可以查看相关的帮助文档或社区论坛。

#### encrypted-dns-configs

> DNS over HTTPS config profiles for iOS &amp; macOS. Contribute to paulmillr/encrypted-dns development by creating an account on GitHub.

![GitHub last commit](https://img.shields.io/github/last-commit/paulmillr/encrypted-dns?logo=github&color=blue)
![GitHub Release Date - Published_At](https://img.shields.io/github/release-date/paulmillr/encrypted-dns?display_date=published_at&logo=github)
![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/paulmillr/encrypted-dns?logo=github)
![GitHub Repo stars](https://img.shields.io/github/stars/paulmillr/encrypted-dns?style=social)

官方：

1. https://paulmillr.com/posts/encrypted-dns/ - *Paul Miller&nbsp;&mdash; iOS 14, Big Sur and DNS over HTTPS*

2. https://github.com/paulmillr/encrypted-dns - *paulmillr/encrypted-dns: DNS over HTTPS config profiles for iOS & macOS*

支持的平台：

1. macOS
2. iOS

#### 手机应用

1. [DnsChanger](https://git.frostnerd.com/PublicAndroidApps/DnsChanger) - *PublicAndroidApps / DnsChanger · GitLab*
2. [personalDNSfilter](https://www.zenz-solutions.de/personaldnsfilter-wp/) - *personalDNSfilter | Zenz Solutions | adblocker & privacy protection*

    有关详细信息，请参阅“[personalDNSfilter](os/mobile/android/app/README.md#personaldnsfilter)”。

### 服务器端

#### DNSMasq

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

## 常见问题

1. https://sspai.com/post/42125 - *网速变慢？你可能需要先设置好 DNS | 科普*

### 如何测试 DNS 服务器的性能

- ping

- nslookup

- dig https://www.sysgeek.cn/linux-dig/ - *掌握 DNS 查询技巧，dig 命令基本用法 - 系统极客*

https://yun123.io/dns-server-performance-testing/ - *如何测试 DNS 服务器的性能和响应时间(DNS 服务器性能监控) | 云原生百科*
