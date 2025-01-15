# CURL

## 简介

> A command line tool and library for transferring data with URL syntax, supporting DICT, FILE, FTP, FTPS, GOPHER, GOPHERS, HTTP, HTTPS, IMAP, IMAPS, LDAP, LDAPS, MQTT, POP3, POP3S, RTMP, RTMPS, RTSP, SCP, SFTP, SMB, SMBS, SMTP, SMTPS, TELNET, TFTP, WS and WSS. libcurl offers a myriad of powerful features - curl/curl

![GitHub last commit](https://badgen.net/github/last-commit/curl/curl?icon=github&color=blue)
![GitHub Release Date - Published_At](https://img.shields.io/github/release-date/curl/curl?display_date=published_at&logo=github)
![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/curl/curl?logo=github)
![GitHub Repo stars](https://img.shields.io/github/stars/curl/curl?style=social)

## 官方

https://curl.se - *command line tool and library for transferring data with URLs (since 1998)*

https://github.com/curl/curl - *GitHub - curl/curl: A command line tool and library for transferring data with URL syntax, supporting DICT, FILE, FTP, FTPS, GOPHER, GOPHERS, HTTP, HTTPS, IMAP, IMAPS, LDAP, LDAPS, MQTT, POP3, POP3S, RTMP, RTMPS, RTSP, SCP, SFTP, SMB, SMBS, SMTP, SMTPS, TELNET, TFTP, WS and WSS. libcurl offers a myriad of powerful features*

## 安装

https://curl.se/download.html - *curl - Download*

## 教程

1. https://www.ruanyifeng.com/blog/2011/09/curl.html - *curl 网站开发指南*

2. https://www.ruanyifeng.com/blog/2019/09/curl-reference.html - *curl 的用法指南*

## 用法

### PHP

extend：

[snoopy](http://www.phpfensi.com/php/20140620/3441.html?aafetu=yfc42) - *php snoopy采集类(模拟浏览器)介绍 - php类库 - PHP粉丝网*

composer：

- <https://packagist.org/packages/php-curl-class/php-curl-class> - *php-curl-class/php-curl-class - Packagist*
- <https://packagist.org/packages/curl/curl> - *curl/curl - Packagist*

常见问题：

- 如何设置请求头

  ```php
  // 初始化
  $ch = curl_init();
  // 设置header需要发送的参数
  $header = array(
      'apikey: 11a9a4a3d961da54d753f6b3c92ff275',
      'testname: fdlin',
  );
  curl_setopt($ch, CURLOPT_HTTPHEADER  , $header);               // 加入header
  curl_setopt($ch, CURLOPT_URL, "http://localhost/index.php");   // url
  curl_setopt($ch, CURLOPT_HEADER, 0);
  
  // 发送请求
  $output = curl_exec($ch);
  
  // 释放curl句柄
  curl_close($ch);
  ```

  参考：https://www.csdn.net/tags/MtTacgxsNDg4NDAtYmxvZwO0O0OO0O0O.html - *curl header怎么添加 - CSDN*
