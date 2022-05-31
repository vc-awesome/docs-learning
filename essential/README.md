## DNS

?> DNS（Domain Name System）域名系统，简单点来说，就是当我们在浏览器输入一个网址，需要有一台DNS服务器帮我们解析成IP地址，我们才能打开这个网站。那么，DNS服务器解析的速度快慢，直接影响到我们访问网站的快慢。

- 公共DNS

  | 服务商     | dns1            | dns2           | 地址                                                   |
  | ---------- | --------------- | -------------- | ------------------------------------------------------ |
  | 谷歌       | 8.8.8.8         | 8.8.4.4        | [链接](https://developers.google.com/speed/public-dns) |
  | 百度       | 180.76.76.76    |                |                                                        |
  | 114        | 114.114.114.114 |                |                                                        |
  | 腾讯       | 119.29.29.29    |                |                                                        |
  | 阿里       | 223.5.5.5       | 223.6.6.6      |                                                        |
  | 微软       | 4.2.2.1         | 4.2.2.2        |                                                        |
  | Cloudflare | 1.1.1.1         | 1.0.0.1        |                                                        |
  | 电信的DNS  | 202.103.44.150  | 202.103.0.68   |                                                        |
  | 移动的DNS  | 211.137.58.20   | 211.137.64.163 |                                                        |
  | 联通的DNS  | 211.95.1.97     |                |                                                        |

  Via http://tools.jb51.net/table/public_dns - *公共DNS说明表*



- 在线工具

  https://tool.chinaz.com/dns/ - *DNS查询*

  https://ntool.chinaz.com/dnsce/ - *DNS污染检测*

  https://tool.chinaz.com/nslookup/ - *nslookup查询*



- 测试工具

  DNS Benchmark（电脑管家）

  https://www.grc.com/dns/benchmark.htm



- FAQs

  https://sspai.com/post/42125 - *网速变慢？你可能需要先设置好 DNS | 科普*

  http://www.dayanzai.me/flush-dns.html - *刷新 DNS：如何清除 DNS 缓存*



## SSL

?> （Secure Sockets Layer 安全套接字协议），及其继任者传输层安全（Transport Layer Security，TLS）是为网络通信提供安全及数据完整性的一种安全协议。TLS与SSL在传输层与应用层之间对网络连接进行加密。



- 链接

  http://www.ruanyifeng.com/blog/2014/02/ssl_tls.html - *SSL/TLS协议运行机制的概述*

  https://www.chastephp.com/delicious.html - *证书申请及配置*



- 证书品牌

  - Let's Encrypt

    官网 https://letsencrypt.org （免费证书）

  - DigiCert

    - 官网 https://www.digicert.com/ - *SSL Digital Certificate Authority - Encryption & Authentication*
    - 事件 https://zhuanlan.zhihu.com/p/146104587 - *通知！Symantec品牌证书已正式更名为Digicert*



- ssl 配置

  https://ssl-config.mozilla.org - *Mozilla SSL Configuration Generator*

