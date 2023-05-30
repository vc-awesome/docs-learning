?> DNS（Domain Name System）域名系统，简单点来说，就是当我们在浏览器输入一个网址，需要有一台DNS服务器帮我们解析成IP地址，我们才能打开这个网站。那么，DNS服务器解析的速度快慢，直接影响到我们访问网站的快慢。

## DNS 域名商

- https://www.namesilo.com/ - *Cheap Domain Names & Web Hosting Starting at $0.99! | NameSilo*
- https://www.cloudflare-cn.com/ - *Cloudflare 中国官网 | 智能化云服务平台 | 免费CDN安全防护 | Cloudflare*

### 配置域名 CNAME

https://developer.qiniu.com/fusion/kb/1322/how-to-configure-cname-domain-name - *如何配置域名的 CNAME - 七牛开发者中心*

## DNS 服务商

🪜 https://adguard-dns.io/kb/zh-CN/general/dns-providers/ - *已知的 DNS 提供商 | AdGuard DNS Knowledge Base*

🪜 https://guide.v2fly.org/basics/dns.html - *DNS 服务 | 新 V2Ray 白话文指南*

### 阿里公共DNS

https://www.alidns.com/knowledge - *阿里公共DNS*

```
dns.alidns.com
```

```
223.5.5.5
```

### AdGuard公共DNS

```
dns.adguard-dns.com
```

### 360安全DNS

https://sdns.360.net/ - *360安全DNS*

```
101.226.4.6
```

### DNSPod Public DNS（腾讯云）

https://www.dnspod.cn/Products/publicdns - *DNSPod Public DNS（腾讯云）*

## 公共DNS

| 服务商     | dns1            | dns2           | 地址                                                       |
| ---------- | --------------- | -------------- | ---------------------------------------------------------- |
| 谷歌       | 8.8.8.8         | 8.8.4.4        | [官方链接](https://developers.google.com/speed/public-dns) |
| 百度       | 180.76.76.76    |                |                                                            |
| 114        | 114.114.114.114 |                |                                                            |
| 腾讯       | 119.29.29.29    |                |                                                            |
| 阿里     | 223.5.5.5       | 223.6.6.6      | [官方链接](https://www.alidns.com/)                        |
| 微软       | 4.2.2.1         | 4.2.2.2        |                                                            |
| Cloudflare | 1.1.1.1         | 1.0.0.1        |                                                            |
| 电信的DNS  | 202.103.44.150  | 202.103.0.68   |                                                            |
| 移动的DNS  | 211.137.58.20   | 211.137.64.163 |                                                            |
| 联通的DNS  | 211.95.1.97     |                |                                                            |

Via http://tools.jb51.net/table/public_dns - *公共DNS说明表*

### DNS 加密协议

https://adguard-dns.io/kb/zh-CN/public-dns/overview/ - *概览 | AdGuard DNS Knowledge Base*
- DNSCrypt（开源的加密协议）
- DNS-over-HTTPS (DoH)
- DNS-over-TLS (DoT)
- DNS-over-QUIC

## 配置 DNS

### 浏览器配置 DNS

https://www.alidns.com/knowledge?type=SETTING_DOCS#user_chrome - *阿里公共DNS*

> `电脑浏览器、手机浏览器均可配置独立 DNS`
>
> 浏览器配置 DNS 或私人 DNS 后，GitHub 访问速度变快，可无需配置 hosts 规则
>
> ⚠️ Opera 手机浏览器配置安全 DNS（ AdGuard 公共 DNS：<https://94.140.14.140/dns-query>），直接翻墙！



### 手机配置私人 DNS

配置步骤：

1. https://www.alidns.com/knowledge?type=SETTING_DOCS#user_android - *阿里公共DNS*
    ```
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

https://tool.chinaz.com/dns/ - *DNS查询*

https://ntool.chinaz.com/dnsce/ - *DNS污染检测*

https://tool.chinaz.com/nslookup/ - *nslookup查询*

### 测试工具

DNS Benchmark（电脑管家）

https://www.grc.com/dns/benchmark.htm - *GRC's | DNS Nameserver Performance Benchmark*

### 加密工具

🪜 https://simplednscrypt.org/ - *Simple DNSCrypt*  
🏷️ *官方、GitHub*

https://zhuanlan.zhihu.com/p/89837660 - *使用Simple DNSCrypt/DNSoverHTTPS？ - 知乎*

### 查询工具

- Windows nslookup 命令

- https://nstool.netease.com/ - *网易DNS检测工具*

- https://uutool.cn/nslookup/ - *在线nslookup域名解析查询工具 - UU在线工具*

- https://cloud.baidu.com/product/bcd/mobile/#/ - *bcd-applet*

### DNSMasq

🏷️ _Linux 工具_

**官方**：https://dnsmasq.org/ - _Dnsmasq - network services for small networks._

https://wiki.archlinux.org/title/Dnsmasq_(简体中文) - _dnsmasq - Arch Linux 中文维基_

https://wiki.debian.org/dnsmasq - _dnsmasq - Debian Wiki_

~~https://cloud.tencent.com/developer/article/1174~~

https://www.cnblogs.com/sunsky303/p/9238669.html - *dnsmasq详解&手册 - sunsky303 - 博客园*

https://blog.51cto.com/longlei/2065967 - _dnsmasq详解及配置_51CTO博客_dnsmasq配置_

### AdGuard 🔥

https://adguard.com/zh_cn/welcome.html - *AdGuard - 世界上最高级的广告拦截程序！*

🪜 https://adguard-dns.io/zh_cn/welcome.html - *AdGuard DNS — 拦截广告的 DNS 服务器*

1. ✅ https://adguard-dns.io/zh_cn/public-dns.html - *连接到公共 AdGuard DNS 服务器*

2. ✅ https://adguard-dns.io/kb/zh-CN/ - *概览 | AdGuard DNS Knowledge Base*

🪜 https://adguard-vpn.com/zh_cn/welcome.html - *AdGuard VPN 保护你的隐私与安全*

### 待试用

https://github.com/pymumu/smartdns - *GitHub - pymumu/smartdns: A local DNS server to obtain the fastest website IP for the best Internet experience, support DoT, DoH. 一个本地DNS服务器，获取最快的网站IP，获得最佳上网体验，支持DoH，DoT。*
- 支持 Linux


## FAQ

1. https://sspai.com/post/42125 - *网速变慢？你可能需要先设置好 DNS | 科普*

### 手机移动网络/WLAN网络如何查看 DNS 服务器地址
