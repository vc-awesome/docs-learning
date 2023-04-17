?> **超文本传输协议（HTTP）**是一个用于传输超媒体文档（例如 HTML）的[应用层](https://en.wikipedia.org/wiki/Application_Layer)协议。它是为 Web 浏览器与 Web 服务器之间的通信而设计的，但也可以用于其他目的。HTTP 遵循经典的[客户端 - 服务端模型](https://en.wikipedia.org/wiki/Client–server_model)，客户端打开一个连接以发出请求，然后等待直到收到服务器端响应。HTTP 是[无状态协议](http://en.wikipedia.org/wiki/Stateless_protocol)，这意味着服务器不会在两个请求之间保留任何数据（状态）。尽管通常基于 TCP/IP 层，但它可以在任何可靠的[传输层](https://zh.wikipedia.org/wiki/传输层)上使用，也就是说，该协议不会像 UDP 那样静默的丢失消息。[RUDP](https://en.wikipedia.org/wiki/Reliable_User_Datagram_Protocol)——作为 UDP 的可靠化升级版本——是一种合适的替代选择。

## 教程

https://developer.mozilla.org/zh-CN/docs/Web/HTTP - *HTTP | MDN*


## HTTPS

👍 https://www.cnblogs.com/qlongbg/p/12074016.html - _关于http与https_

## SSL/TLS

?> （Secure Sockets Layer 安全套接字协议），及其继任者传输层安全（Transport Layer Security，TLS）是为网络通信提供安全及数据完整性的一种安全协议。TLS与SSL在传输层与应用层之间对网络连接进行加密。



- 链接

  http://www.ruanyifeng.com/blog/2014/02/ssl_tls.html - *SSL/TLS协议运行机制的概述*

  https://www.chastephp.com/delicious.html - *证书申请及配置*



- 证书品牌

  - Let's Encrypt

    官网 https://letsencrypt.org （免费证书）

  - DigiCert

    - 官网 https://www.digicert.com/ - *SSL Digital Certificate Authority - Encryption & Authentication*
    - 事件 https://zhuanlan.zhihu.com/p/146104587 - *通知！Symantec品牌证书已正式更名为Digicert*



- SSL 配置

  https://ssl-config.mozilla.org - *Mozilla SSL Configuration Generator*

- 证书生成
    - https://toutyrater.github.io/advanced/tls.html#证书生成 - *TLS · V2Ray 配置指南|V2Ray 白话文教程*



## Link

👍 https://developer.mozilla.org/zh-CN/docs/Web/HTTP - *HTTP | MDN*

https://www.runoob.com/http/http-tutorial.html - *菜鸟教程*

https://www.kancloud.cn/kancloud/tealeaf-http/43837 - *HTTP 下午茶*

https://segmentfault.com/a/1190000017874063 - *一篇文章带你了解http/https*



## MIME

?> 媒体类型（通常称为 Multipurpose Internet Mail Extensions 或 MIME 类型 ）是一种标准，用来表示文档、文件或字节流的性质和格式。它在IETF RFC 6838中进行了定义和标准化。<https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Basics_of_HTTP/MIME_types>

请参阅 [IANA MIME 类型](http://www.iana.org/assignments/media-types/)，获得标准 MIME 类型的完整列表。

 https://www.solvusoft.com/en/mime-multipurpose-internet-mail-extensions/ - *Multipurpose Internet Mail Extensions (MIME) Encyclopedia*

## Headers

https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers - *HTTP Headers - HTTP | MDN*

- Content-type（响应类型）

  - application/json; charset=utf-8
  - image/png; charset=utf-8

  - MIME - *Content-type 的值即为 mime 的值*
    - image/bmp
    - image/gif
    - image/jpeg
    - image/png
    - image/x-icon
    - text/html

- Content-length

- 浏览器缓存

  https://segmentfault.com/a/1190000009970329 - *最常被遗忘的Web性能优化：浏览器缓存*

- last-modified

- etag

- expires

- cache-control



- Request



- Response



- 字符集和字符编码相关的消息头是 `Accept-Charset / Content-Type`
  - `Accept-Charset`：浏览器申明自己接收的字符集，这就是本文前面介绍的各种字符集和字符编码，如gb2312，utf-8（通常我们说Charset包括了相应的字符编码方案）；
  - `Accept-Encoding`：浏览器申明自己接收的编码方法，通常指定压缩方法，是否支持压缩，支持什么压缩方法（gzip，deflate），（注意：这不是只字符编码）；
  - `Accept-Language`：浏览器申明自己接收的语言。语言跟字符集的区别：中文是语言，中文有多种字符集，比如big5，gb2312，gbk等等；
  - `Content-Type`：WEB服务器告诉浏览器自己响应的对象的类型和字符集。例如：Content-Type: text/html; charset='gb2312'
  - `Content-Encoding`：WEB服务器表明自己使用了什么压缩方法（gzip，deflate）压缩响应中的对象。例如：Content-Encoding：gzip
  - `Content-Language`：WEB服务器告诉浏览器自己响应的对象的语言。

### User-Agent

https://www.useragents.me/ - *Useragents — The Latest and Most Common (Updated Weekly)*


### HTTP 身份验证

https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Authentication -  *HTTP 身份验证 - HTTP | MDN*

https://blog.csdn.net/ai2000ai/article/details/85775484 - *HTTP basic auth*

## 跨域

https://developer.mozilla.org/zh-CN/docs/Web/HTTP/CORS - *跨源资源共享（CORS）*

[cross-domain](essential/cross-domain.md)

## FAQ

### HTTP 与 HTTPS 的区别

https://www.runoob.com/w3cnote/http-vs-https.html - *HTTP 与 HTTPS 的区别 | 菜鸟教程*

