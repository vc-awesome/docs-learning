# 互联网

## 互联网协议

1. https://www.runoob.com/w3cnote/summary-of-network.html - *计算机网络基础知识总结 | 菜鸟教程*

2. https://www.ruanyifeng.com/blog/2012/05/internet_protocol_suite_part_i.html - *互联网协议入门（一） - 阮一峰的网络日志*

3. https://www.ruanyifeng.com/blog/2012/06/internet_protocol_suite_part_ii.html - *互联网协议入门（二） - 阮一峰的网络日志*

## OSI参考模型

> [OSI](https://baike.baidu.com/item/OSI%E5%8F%82%E8%80%83%E6%A8%A1%E5%9E%8B/708028)（Open System Interconnect，开放式系统互连）

### 实体层（Physical Layer）

### 链接层（Link Layer）

#### 以太网协议

### 网络层（Network Layer）

#### IP协议

> IP（Internet Protocol，网际协议）

#### ARP协议

### 传输层（Transport Layer）

#### UDP协议

> UDP（User Datagram Protocol，用户数据报协议）

#### TCP协议

> TCP（Transmission Control Protocol，传输控制协议）

### 应用层（Application Layer）

#### DHCP协议

> DHCP（Dynamic Host Configuration Protocol，动态主机配置协议）

#### DNS协议

#### HTTP协议

#### FTP协议

#### Telnet协议

## TCP/IP模型

1. https://www.ruanyifeng.com/blog/2009/03/tcp-ip_model.html - *TCP/IP模型的一个简单解释 - 阮一峰的网络日志*

2. https://www.runoob.com/tcpip/tcpip-tutorial.html - *TCP/IP 教程 | 菜鸟教程*


### 链接层（Link Layer）

### 网络层（Network Layer）

### 传输层（Transport Layer）

### 应用层（Application Layer）

## TCP/UDP

1. https://baijiahao.baidu.com/s?id=1739517958748188465 - *什么是TCP？什么是UDP？它们有什么区别？*

## 传输协议

应用层：

- HTTP
- [SSL/TLS](essential/http.md#ssltls)
- DNS
- FTP
- SMTP
- Bittorrent

传输层：

- TCP/UDP

其他：

- TCP/IP
- ICMP（Internet Control Message Protocol，因特网控制报文协议）
    - https://mp.weixin.qq.com/s/9zx1eRh_OiYu_gP8bgo_fw - *关于 Ping 的过程，你真的了解吗？*
- MAC地址（Media Access Control Address）

## 宽带速率

计算方式：

1Mbps 属于的是 3G 网速，1Mbps = 128kb/s，意思是 1M bit/s，而 1字节是 8bit，所以 1Mbps 换算成字节计算的理想通信速率是 `1 / 8 = 0.125 MB/s`，也就是 `0.125 * 1024 = 128 KB/s`。

Mbps 是 Million bits per second 的缩写，Mbps = Mbit/s 即兆比特每秒，它的意思是时间内传输数据的平均比特数。

换算单位关系为：

1Kbps = 1,024bps

1Mbps = 1,024 * 1,024 = 1,048,576bps

有时为了计算简单记作

1Kbps = 1,000bps

1Mbps= 1,000,000bps

> 在实际书写规范和应用中，大写 B 表示字节，小写 b 表示位，他们之间的换算关系为：1字节 = 8位，即 1Byte = 8bit，简写为 1B = 8b。
> 
> 示例：
> 
> 带宽为：1Mbps 时（运营商标称的带宽）
> 
> 实际网速为：1 * 1024 / 8 = 128KBps（手机状态栏显示的网速：128K/s，即实际上网时的下载速度）
> 
> 参考：
> 1. https://baijiahao.baidu.com/s?id=1738193399054969334 - *一文读懂宽带、带宽、网速之间的区别与关系*
> 2. https://m.sohu.com/a/518052884_121107021 - *带宽是什么？_手机搜狐网*

参考：

1. https://baijiahao.baidu.com/s?id=1726067004455310126 - *1mbps是多少网速能干什么*

2. https://zhidao.baidu.com/question/249629492048758604/answer/4171572506.html - *1Mbps是多少兆的网络*

3. https://product.pconline.com.cn/itbk/top/1901/12271445.html - *1mbps什么意思-太平洋IT百科手机版*

4. https://baike.baidu.com/item/网络带宽/6120475 - *网络带宽_百度百科*

5. https://itc.jnmc.edu.cn/2021/1020/c1949a124583/pagem.htm - *一文读懂内网、外网、宽带、带宽、流量、网速之间的区别与联系！*

6. https://baijiahao.baidu.com/s?id=1761710048834795021 - *带宽与网速究竟有啥差别？其实是两个不同概念，很多人都分不清！*


## 术语表

- VPS
- ISP（Internet Service Provider，因特网服务提供商）
- ASN
