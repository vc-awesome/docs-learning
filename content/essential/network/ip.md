# IP

## Introduction

> Each computer (also known as a host) on the Internet has at least one IP address that distinctively identifies it from all other computers on the Internet; the method by which data is sent from one computer to another is known as the Internet Protocol (IP).
> 
> 互联网上的每台计算机（也称为主机）至少有一个 IP 地址，该地址将其与互联网上的所有其他计算机区分开来；将数据从一台计算机发送到另一台计算机的方法称为互联网协议 (IP)。
> 
> <cite>—— [What is my IP | What is an IP?](https://whatismyip.li/what-is-internet-protocol)</cite>

## Tutorials

https://whatismyip.li/learn - *What is my IP? - Frequently Asked Questions*

## Getting Started

### IPv4

IPv4 (Internet Protocol version 4) is a protocol used for identifying and locating devices on a network. It uses a 32-bit address scheme, expressed in four decimal numbers (each ranging from 0 to 255) separated by dots. IPv4 addresses are commonly written in the form like 192.168.1.1 and are fundamental to the functioning of the Internet, though the world transition to IPv6 is gradually occurring due to the growing number of Internet-connected devices

IPv4（互联网协议版本 4）是一种用于识别和定位网络设备的协议。 它使用 32 位地址方案，以四个十进制数字（每个数字的范围从 0 到 255）表示，中间用点隔开。 IPv4 地址通常以 192.168.1.1 这样的形式书写，是互联网运行的基础。

### IPv6

IPv6, or Internet Protocol version 6, is the most recent version of the Internet Protocol (IP), designed to replace the older IPv4 protocol. Here are some key points about IPv6:

1. **Address Size**: IPv6 addresses are 128 bits long, compared to IPv4 addresses which are only 32 bits long. This vastly increases the number of possible addresses, addressing the IPv4 address exhaustion problem.

2. **Address Notation**: IPv6 addresses are written in hexadecimal notation separated by colons, for example, `2001:0db8:85a3:0000:0000:8a2e:0370:7334`.

3. **Header Format**: The IPv6 header is simpler and more efficient than IPv4, improving routing and packet processing.

4. **Address Allocation**: IPv6 provides more efficient addressing and routing, as well as improved multicast and anycast abilities.

5. **Transition from IPv4**: Due to the widespread use of IPv4, transition mechanisms like dual-stack (supporting both IPv4 and IPv6 simultaneously), tunneling (encapsulating IPv6 packets within IPv4), and translation (translating between IPv4 and IPv6 addresses) are used to facilitate the adoption of IPv6 while maintaining compatibility with existing IPv4 infrastructure.

6. **Security**: IPv6 includes built-in support for IPsec (Internet Protocol Security) which was an optional feature in IPv4.

7. **Deployment**: Although IPv6 adoption has been slower than anticipated, it is increasingly being adopted worldwide as IPv4 address space continues to exhaust.

IPv6 adoption is driven by the need for more IP addresses, improved security features, and better support for emerging technologies such as IoT (Internet of Things) and mobile networks.

IPv6 或互联网协议版本 6 是互联网协议（IP）的最新版本，旨在取代较旧的 IPv4 协议。 以下是有关 IPv6 的一些要点：

1. **地址大小**： IPv6 地址长度为 128 位，而 IPv4 地址长度仅为 32 位。 这大大增加了可能的地址数量，解决了 IPv4 地址耗尽的问题。

2. **地址符号**： IPv6 地址以十六进制表示，用冒号分隔，例如，`2001:0db8:85a3:0000:0000:8a2e:0370:7334`。

3. **标头格式**： IPv6 报头比 IPv4 更简单、更高效，可改善路由选择和数据包处理。

4. **地址分配**： IPv6 提供更高效的寻址和路由选择，并改进了组播和任播能力。

5. **从 IPv4 过渡**： 由于 IPv4 的广泛使用，双协议栈（同时支持 IPv4 和 IPv6）、隧道（在 IPv4 中封装 IPv6 数据包）和转换（在 IPv4 和 IPv6 地址之间进行转换）等过渡机制被用来促进 IPv6 的采用，同时保持与现有 IPv4 基础设施的兼容性。

6. **安全**： IPv6 内置支持 IPsec（互联网协议安全），这在 IPv4 中是可选功能。

7. **部署**： 尽管 IPv6 的采用速度比预期的要慢，但随着 IPv4 地址空间的不断耗尽，IPv6 正在全球范围内被越来越多地采用。

采用 IPv6 是因为需要更多的 IP 地址、更好的安全功能，以及更好地支持新兴技术，如物联网（IoT）和移动网络。

## Tools

### 查询本机 IP

#### 外网

##### 在线工具

1. https://u.sb/ip-sb/ - *IP.SB - 在线 IPv4 / IPv6 信息查询 - 烧饼博客* [Website](https://ip.sb/)

2. https://ip.skk.moe/ - *查看我的 IP 地址 | 查询本机 IP 地址及归属地 | 查看 DNS 出口 IP | 测试 CDN 命中节点 | Sukka | https://ip.skk.moe*
   
3. https://whatismyip.li/ - *What is my IP?*

   - https://whatismyip.li/psiphon1 - _What is my IP? - Why VPN is important?_

4. https://www.ipaddress.com/ip-lookup - _Track An IP - Our IP Address Locator & Tracer Can Lookup Any Location_

5. http://ipaddress.is/ - _Free IP Address Lookup Tools - What Is My IP Address |IPaddress.is_

6. https://www.netspotapp.com/cn/blog/ip-addresses/what-is-my-ip-address.html - *我的IP地址是什么？ — IP位置*

7. https://ip.seveas.net/ - *IP address info*

8. 👏 https://github.com/mpolden/echoip - *GitHub - mpolden/echoip: IP address lookup service* [Website](https://ifconfig.co/)

    ![GitHub last commit](https://badgen.net/github/last-commit/mpolden/echoip?icon=github&color=blue)
    ![GitHub Repo stars](https://img.shields.io/github/stars/mpolden/echoip?style=social)

   - 支持 Web

9. 👏 https://db-ip.com/ - *IP Geolocation API & Free Address Database | DB-IP*

##### 客户端工具

1. https://github.com/angryip/ipscan - *GitHub - angryip/ipscan: Angry IP Scanner - fast and friendly network scanner* [Website](https://angryip.org/)

    ![GitHub last commit](https://badgen.net/github/last-commit/angryip/ipscan?icon=github&color=blue)
    ![GitHub Repo stars](https://img.shields.io/github/stars/angryip/ipscan?style=social)

    - 支持 Windows, macOS, Linux

#### 内网

> 局域网

Windows 系统内置：

```bash
ipconfig/all
```

Linux 系统内置：

```bash
ifconfig
```

macOS 系统内置：

```bash
ifconfig
```

参考：

1. https://jingyan.baidu.com/article/046a7b3e07ad81b9c37fa96a.html - *电脑如何查看局域网
IP 地址？- 百度经验*
2. https://jingyan.baidu.com/article/3d69c551251054b1ce02d73e.html - *通过系统自带的
“CMD” 查看局域网内所有的 IP 地址 - 百度经验*
3. https://zhuanlan.zhihu.com/p/343301218 - *如何查看本机 ip（外网、内网） - 知乎*

#### MIUI

问：如何查看 IP 地址？

答：可以在“**设置⚙️ > 我的设备 > 全部参数与信息 > （下滑屏幕至底部）状态信息 > （下滑屏幕至底部）IP 地址**”下找到 IP 地址；连接“移动网络”显示的是外网 IP，“WLAN”网络显示的是内网 IP。

##### 移动网络

答：可以在 **设置⚙️ > 双卡与移动网络 > 高级设置 > IP 地址** 下找到 IP 地址。

##### WLAN

答：可以在“**设置⚙️ > WLAN > 点击进入已连接的网络详情 > IP 地址**”下找到 IP 地址。

### 带宽检测

- https://github.com/esnet/iperf - *GitHub - esnet/iperf: iperf3: A TCP, UDP, and SCTP network bandwidth measurement tool*

    ![GitHub last commit](https://badgen.net/github/last-commit/esnet/iperf?icon=github&color=blue)
    ![GitHub Repo stars](https://img.shields.io/github/stars/esnet/iperf?style=social)

## FAQ

### 为什么别人 ping 不通我的 IP 地址

https://zhidao.baidu.com/question/77017056.html - *ping 不通对方的 ip 地址是什么原因_百度知道*

## Appendix

### Glossary

- ASN
- IPv4
- IPv6
    - 检测工具：https://test-ipv6.com/ - *IPv6 测试*
        - via https://developers.google.com/speed/public-dns/docs/using?hl=zh-cn - *开始使用  |  Public DNS  |  Google for Developers*

- ISP
- 静态 IP
- 动态 IP
- DHCP
- Geolocation
- Ip2region
    - https://github.com/lionsoul2014/ip2region - *GitHub - lionsoul2014/ip2region: Ip2region (2.0 - xdb) is a offline IP address manager framework and locator, support billions of data segments, ten microsecond searching performance. xdb engine implementation for many programming languages*

        ![GitHub last commit](https://badgen.net/github/last-commit/lionsoul2014/ip2region?icon=github&color=blue)
        ![GitHub Repo stars](https://img.shields.io/github/stars/lionsoul2014/ip2region?style=social)

### Resource

#### Keyword

##### Search

GitHub 关键词搜索：[ip](https://github.com/search?q=ip)
