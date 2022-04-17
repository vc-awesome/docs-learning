todo...

程序切换语言含国旗可参考 <https://igoutu.cn/>



## 🚀开发规范

[JAVA开发中的一些规范讲解(阿里巴巴Java开发规范手册)](https://www.jb51.net/article/137783.htm)



## <i class="fa fa-terminal dark-yellow"></i> cli

**命令行界面**（英语：**command-line interface**，缩写：**CLI**）是在得到普及之前使用最为广泛的用户界面，它通常不支持鼠标，用户通过键盘输入指令，计算机接收到指令后，予以执行。也有人称之为**字符用户界面**（CUI）。

https://baike.baidu.com/item/%E5%91%BD%E4%BB%A4%E8%A1%8C%E7%95%8C%E9%9D%A2/9910197



## http

HTTP 下午茶 https://www.kancloud.cn/kancloud/tealeaf-http/43837

一篇文章带你了解http/https https://segmentfault.com/a/1190000017874063

### MIME

> 媒体类型（通常称为 Multipurpose Internet Mail Extensions 或 MIME 类型 ）是一种标准，用来表示文档、文件或字节流的性质和格式。它在IETF RFC 6838中进行了定义和标准化。<https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Basics_of_HTTP/MIME_types>

请参阅 [IANA MIME 类型](http://www.iana.org/assignments/media-types/)，获得标准 MIME 类型的完整列表。



## 安全

> 百度搜索：Web安全与认证授权

1. 服务器 404 错误页面

2. thinkphp 框架开发阶段报错信息屏蔽
      - 上线部署关闭 `index.php` 中的 `define('APP_DEBUG',true);`
      - 在公共 `Common` 文件夹中添加一行配置参数 `'TMPL_EXCEPTION_FILE' => './Public/404.html',` （异常跳转到指定的404页面）

3. thinkphp 框架 public 文件夹禁止访问
   - 在文件夹中添加 `index.html` 空白文件

4. mysql 的密码不能太简单

5. 隐藏服务器的信息，框架的信息，编程语言的信息



## 知识体系

> 学会如何全面使用编程工具各项功能

 

javascript基础

 

css基础

 

html基础

 

php基础

 

mysql基础

 

apache基础



nginx基础



http基础

- payload(有效载荷)



composer基础



git



windows cmd / dos

教程1 https://docs.microsoft.com/zh-cn/windows-server/administration/windows-commands/windows-commands

教程2 https://www.w3cschool.cn/dosmlxxsc1/



队列 think-queue

https://www.jianshu.com/p/f5e33215c13c

 

Redis

 

RabbitMQ



Windows



单点登录 JWT

https://www.jianshu.com/p/60bbc1c3990e

 

curl

 

Restful api

 

workerman

 

vue.js

 

定时任务

Windows bat

Linux

 

正则表达式

 

浏览器 F12 调试模式功能

 

微信开发

- 微信公众平台

- 微信扫码登录

- 微信小程序

- 微信支付



支付宝开发

- 支付宝支付



OAuth



jsx



vite

> 下一代前端开发与构建工具  
> https://vitejs.cn/



## 编程语言

### web前端

 - React.js
 - Node.js https://www.nodeapp.cn/ 中文文档
    - gulp.js https://www.gulpjs.com.cn/ 含中文文档
    - webpack.js https://www.webpackjs.com/
    - npm.js https://www.npmjs.com.cn/ 含中文文档
    - rollup.js https://www.rollupjs.com/guide/zh 中文文档
 - Vue.js https://cn.vuejs.org/ 中文文档
 - JQuery https://www.jquery123.com/ 中文文档
 - less http://www.bootcss.com/p/lesscss/ 中文文档
 - scss



### web前端框架

 - Ruby on Rails
 - AmazeUI
 - Bootstrap



### 服务器(后)端

 - PHP
 - Java
 - Python
 - Lua
 - Ruby
 - Go



### 数据库管理系统

 - SQL
 - MongoDB
 - Redis
 - Memcached



### 应用容器引擎

 - Docker



### 服务器

 - Apache
 - Nginx
 - Tengine
 - OpenResty （结合编程语言Lua使用）
 - IIS7.5



### 框架

 - workman



### 性能引擎

 - swoole



### 版本控制工具

 - SubVersion
 - Git



### 全文搜索引擎

 - Sphinx		http://www.sphinxsearch.org/



## 源码解读

`js`源码解读

