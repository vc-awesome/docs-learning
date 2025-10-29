# 网络

## 教程

1. https://cloud.tencent.com/developer/article/1678884 - *99%的人都不知道内网、外网、宽带、带宽、流量、网速之间的区别与联系-腾讯云开发者社区-腾讯云*

### DNS

https://blog.skk.moe/tags/DNS/ - *标签: DNS | Sukka's Blog*

### CDN

https://blog.skk.moe/tags/CDN/ - *标签: CDN | Sukka's Blog*

## 工具

### 客户端工具

1. [Shadowsocks](https://shadowsocks.org/) - *Shadowsocks | A fast tunnel proxy that helps you bypass firewalls.*

    - 支持 [Windows](https://github.com/shadowsocks/shadowsocks-windows), [macOS](https://github.com/shadowsocks/ShadowsocksX-NG), Linux, [Android](https://github.com/shadowsocks/shadowsocks-android), iOS

    - 开源软件（[GitHub Org](https://github.com/shadowsocks)）

2. [v2ray]() - *A platform for building proxies to bypass network restrictions.*

    - 支持 [Windows](https://github.com/2dust/v2rayN), [macOS](https://github.com/yanue/V2rayU), Linux, [Android](https://github.com/2dust/v2rayNG), iOS

    - 开源软件（[GitHub Org](https://github.com/v2ray)）

3. [ClashMetaForAndroid]() - *A rule-based tunnel for Android. Contribute to MetaCubeX/ClashMetaForAndroid development by creating an account on GitHub.*

    - 支持 Android（[GitHub Releases](https://github.com/MetaCubeX/ClashMetaForAndroid/releases/), [F-Droid](https://f-droid.org/packages/com.github.metacubex.clash.meta/)）

    - 开源软件（[GitHub Repo](https://github.com/MetaCubeX/ClashMetaForAndroid)）

### 网页代理工具

1. https://proxysite.page/en/ *（无法正确复制链接地址）*
2. https://proxyium.com/ - *Free web proxy - browse fast & anonymously*
3. https://proxy-123.com/ - *Proxy 123 - Free Encrypted Web Proxy Site*

## 账号

### 导入

1. <https://github.com/Alvin9999/new-pac/wiki/ss免费账号> - *ss免费账号 · Alvin9999/new-pac Wiki · GitHub*
2. <https://github.com/Alvin9999/new-pac/wiki/v2ray免费账号> - *v2ray免费账号 · Alvin9999/new-pac Wiki · GitHub*
3. https://free-ss.site/ - *免费上网账号*

### 订阅

1. https://github.com/anaer/Sub - *自用clash订阅链接*

## DNS Providers

### AdGuard DNS

https://adguard-dns.io/kb/zh-CN/general/dns-providers/#adguard-dns - *已知的 DNS 提供商 | AdGuard DNS Knowledge Base*

https://adguard-dns.io/zh_cn/public-dns.html - *连接到公共 AdGuard DNS 服务器*

### RethinkDNS

https://adguard-dns.io/kb/zh-CN/general/dns-providers/#rethinkdns - *已知的 DNS 提供商 | AdGuard DNS Knowledge Base*

https://www.rethinkdns.com/ - *Rethink | Fast, secure, configurable, private DNS + Firewall for Android.*

### Ali DNS

https://adguard-dns.io/kb/zh-CN/general/dns-providers/#ali-dns - *已知的 DNS 提供商 | AdGuard DNS Knowledge Base*

https://www.alidns.com/ - *阿里公共DNS*

### 360 Secure DNS

https://adguard-dns.io/kb/zh-CN/general/dns-providers/#360-secure-dns - *已知的 DNS 提供商 | AdGuard DNS Knowledge Base*

https://sdns.360.net/ - *360安全DNS*

## 清除 DNS 缓存

### Windows

```bash
ipconfig /flushdns
```

### macOS

```bash
sudo dscacheutil -flushcache;sudo killall -HUP mDNSResponder
```

### Android

打开和关闭一次飞行模式。

### 浏览器

#### Mozilla Firefox

```bash
about:networking#dns
```

#### Google Chrome

```bash
chrome://net-internals/#dns
```

## 网络检测

https://ipaddress.is/ - *Free IP Address Lookup Tools - What Is My IP Address |IPaddress.is*

### IP

#### My IP

1. https://my.ipaddress.is/ - *Your IP Address is 47.76.44.200 | What Is My IP Location*
4. https://ip.skk.moe/ - *查看我的 IP 地址 | 查询本机 IP 地址及归属地 | 查看 DNS 出口 IP | 测试 CDN 命中节点 | Sukka | https://ip.skk.moe*
3. https://ifconfig.co/ - *What is my IP address? — ifconfig.co*
2. https://db-ip.com/ - *IP Geolocation API & Free Address Database | DB-IP*

#### IP Location

https://ipaddress.is/ip-location - *IP Location Lookup tool - Lookup public IPv4 or IPv6 address and where are you located*

#### Online Ping Test

https://ipaddress.is/online-ping-test - *Online Ping Test - Check Your Ping, Simultaneously Ping Test From Global Locations*

#### IP Blacklist Check

https://ipaddress.is/ip-blacklist-checker - *IP Blacklist Check - see if your IP address is blacklisted on anti-spam database*

### DNS

1. https://www.dnsleaktest.com/ - *DNS leak test*
2. https://ipleak.net/ - *IP/DNS Detect - What is your IP, what is your DNS, what informations you send to websites.*

#### dig

暂无

### 网速

1Mbit/s = 0.125MB/s

#### 国内

1. https://librespeed.org/ - *LibreSpeed - Speed Test* [GitHub Repo](https://github.com/librespeed/speedtest)
2. https://test.nju.edu.cn/ - *南大测速 NJU Test*

#### 海外

1. https://speed.cloudflare.com/ - *Internet Speed Test - Measure Network Performance | Cloudflare* [GitHub Repo](https://github.com/cloudflare/speedtest)

## 词汇表

### ISP

ISP 是 Internet Service Provider（互联网服务提供商）的缩写，它指的是提供互联网连接服务的公司或组织。

### ECS

云服务器（Elastic Compute Service, ECS）是一种简单高效、安全可靠、处理能力可弹性伸缩的计算服务。
