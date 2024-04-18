# PHP

## 简介

> PHP is a popular general-purpose scripting language that powers everything from your blog to the most popular websites in the world.

![GitHub last commit](https://badgen.net/github/last-commit/php/php-src?icon=github&color=blue)
![GitHub tag (with filter)](https://img.shields.io/github/v/tag/php/php-src?logo=github&color=blue)
![GitHub Repo stars](https://img.shields.io/github/stars/php/php-src?style=social)

## 官方

主页：

1. https://www.php.net/ - *PHP: Hypertext Preprocessor*

手册：

1. https://www.php.net/manual/zh/index.php - *PHP: PHP 手册 - Manual*

GitHub：

1. https://github.com/php/ - *php.net · GitHub*
2. https://github.com/php/php-src - *GitHub - php/php-src: The PHP Interpreter*

### 版本

PHP 版本支持时间表：https://www.php.net/supported-versions.php - *PHP: Supported Versions*

### 解析器

- CGI
- CLI（不需要 Web 服务器 和 Web 浏览器）
- 服务器模块（Apache 服务器器模块）

## 教程

菜鸟教程：https://www.runoob.com/php/php-tutorial.html - *PHP 教程 | 菜鸟教程*

## 安装

https://www.php.net/releases/ - *PHP: Releases*

### macOS

https://www.php.net/manual/zh/install.macosx.php - *PHP: macOS 系统下的安装 - Manual*

#### 使用 homebrew 安装

```bash
brew install php
```

1. https://segmentfault.com/a/1190000043339784 - *mac 系统使用 homebrew 安装php环境 - 个人文章 - SegmentFault 思否*
2. https://learnku.com/articles/59553 - *MacOS12安装PHP7.4、composer、Nginx | PHP 技术论坛*
3. https://www.cnblogs.com/rxbook/p/17977610 - *Mac m1 安装PHP 7.3 任何版本 切换版本 - 码农骆驼 - 博客园*
4. https://learnku.com/articles/72559 - *在mac上超容易实现多版本php自由切换 | Laravel China 社区*

#### 源代码编译

1. https://learnku.com/articles/67223 - *如何从源代码编译PHP | PHP 技术论坛*
2. https://blog.csdn.net/kikajack/article/details/84727142 - *PHP 的源码编译安装_编译php-CSDN博客*

### Windows

https://www.php.net/manual/zh/install.windows.php - *PHP: Windows 系统下的安装 - Manual*

#### 从源程序编译

https://www.php.net/manual/zh/install.windows.manual.php - *PHP: 在 Windows 上手动安装 PHP - Manual*

https://wiki.php.net/internals/windows/stepbystepbuild - *PHP: internals:windows:stepbystepbuild*

## 扩展

### macOS && Linux

#### 源码编译安装

https://www.php.net/manual/zh/install.pecl.phpize.php - *PHP: 用 phpize 编译共享 PECL 扩展库 - Manual*

```bash
cd extname
/Applications/MxSrvs/bin/php/bin/phpize
./configure （此命令可能需要提供额外参数）
make && meke install
```

#### PECL 命令安装

- PECL

  > PHP Extension Community Library（PECL，PHP 扩展社区库）

  https://pecl.php.net/ - *PECL :: The PHP Extension Community Library*

  如何安装 pecl 命令？

  - macOS 系统自带，无需安装。

  https://www.php.net/manual/zh/install.pecl.php - *PHP: PECL 扩展库安装 - Manual*

  - Display help.

    ```bash
    pecl
    ```

    ```bash
    pecl -h
    ```

  - List version information.

    ```bash
    pecl version
    ```

    ```bash
    pecl help version
    ```

    ```bash
    pecl -V
    ```

  - List Installed Packages In The Default Channel.

    ```bash
    pecl list
    ```

  - Install Package

    ```bash
    # 安装扩展
    pecl install extname
    # 安装一个 beta 包
    pecl install extname-beta
    # 安装一个指定的版本
    pecl install extname-0.1
    ```

- PEAR

  https://pear.php.net/ - *PEAR - PHP Extension and Application Repository*

  如何安装 pear 命令？

  - macOS 系统自带，无需安装。

### Windows

https://www.php.net/manual/zh/install.pecl.windows.php - *PHP: 在 Windows 上安装 PHP 扩展 - Manual*

https://windows.php.net/downloads/pecl/releases/ - *windows.php.net - /downloads/pecl/releases/*

在 Windows 上有两种加载 PHP 扩展的方式：

1. 扩展编译进 PHP，
2. 或者加载 DLL。

加载预编译的扩展是更简单更被推荐的方式。

## 配置

1. https://www.php.net/manual/zh/configuration.php - *运行时配置*

2. https://www.php.net/manual/zh/configure.php - *配置选项*

3. https://www.php.net/manual/zh/ini.php - *php.ini 配置*

## 用法

### 命令行模式

https://www.php.net/manual/zh/features.commandline.php - *PHP: PHP 的命令行模式 - Manual*

### 数学函数

https://www.cnblogs.com/lixihuan/p/8125894.html - *PHP取整，四舍五入取整、向上取整、向下取整、小数截取*

- PHP 取整数函数常用的四种方法：
  1. 直接取整，舍弃小数，保留整数：`intval()`；

  2. 四舍五入取整：`round()`；

  3. 向上取整，有小数就加1：`ceil()` ；

  4. 向下取整：`floor()`。

### 常量

https://www.php.net/manual/zh/language.constants.php - *PHP: 常量 - Manual*

预定义常量 `PHP_EOL`

用函数 `get_defined_constants()` 来获取所有 PHP 常量

### 变量

判断变量的类型

- `gettype()`

- `is_numeric()` \ `is_bool()` \ `is_float()` \ ...

https://www.php.cn/php-weizijiaocheng-369503.html - *php如何判断某变量的类型？*

### 预订义变量

https://www.php.net/manual/zh/reserved.variables.php - *PHP: 预定义变量 - Manual*

### 字符串处理

https://www.php.net/manual/zh/book.mbstring.php - *中文字符串处理函数 - mb_strlen*

### 文件处理

https://www.php.net/manual/zh/refs.fileprocess.file.php - *PHP: 文件系统相关扩展 - Manual*

`is_dir()` [是否目录](https://www.php.net/manual/zh/function.is-dir)

`opendir()` [打开目录](https://www.php.net/manual/zh/function.opendir.php)

`file_put_contents()` [把一个字符串写入文件中](https://www.runoob.com/php/func-filesystem-file-put-contents.html)

https://www.php.cn/php-ask-479670.html - *详解PHP文件系统完全指南-PHP问题-PHP中文网*

### 雪花算法

参考：

1. https://www.ucloud.cn/yun/29788.html - *雪花算法 - snowflake*

2. 👍 https://learnku.com/articles/32575/ - *基于雪花算法的 PHP ID 生成器*

    💡需要 64位 PHP7.0 以上版本（32位 PHP 版本 microtime 会出现负数），phpstudy 不可用，phpstudy_pro 可用。

3. https://blog.csdn.net/z_wen_quan/article/details/90230282/ - *雪花算法及运用PHP,雪花算法生成全局唯一ID,参考了下网上雪花算法生成规则，机器ID和序列号自动获取 理论上毫秒可生成 1024**4096个唯一ID*

4. http://www.manongjc.com/detail/9-lrqizvaqnabbigk.html - *php实现雪花算法（ID递增）*

5. http://www.zhuyanjun.cn/blog/backend/1074.html - *php使用雪花算法SnowFlake生成全球唯一数字id*

### 编码转换

https://www.php.net/manual/zh/refs.international.php - *PHP: 国际化与字符编码支持 - Manual*

参考：

1. https://blog.csdn.net/u013372487/article/details/52528535 - *php 编码转换 乱码解决_php chr 出现乱码 - CSDN 博客*

## 调试

```php
<?php
   function print_r_br($array)
   {
      echo '<pre>';
      print_r($array);
      echo '</pre>';
   }
?>
```

参考：

1 http://www.360doc.com/content/12/1106/15/7851074_246197828.shtml - *简单封装的 print_r 函数 支持数组换行*

## 术语表

### CGI

CGI（Common Gateway Interface）是一种标准，用于定义 Web 服务器如何与外部程序（通常是脚本）进行交互和通信。它是 Web 应用程序和 Web 服务器之间的桥梁，允许动态生成的内容（如网页）根据用户请求进行处理和响应。

关键点包括：

1. **工作原理**：当 Web 服务器接收到来自客户端（通常是浏览器）的请求时，如果请求的 URL 对应的资源是动态生成的（如 PHP 脚本、Python 脚本等），服务器会将请求的数据（如 GET 或 POST 请求的参数）传递给一个外部的 CGI 程序。

2. **外部程序**：这个外部程序可以是任何能够接收输入并生成输出的程序，通常是脚本语言（如 Perl、Python、PHP 等）编写的脚本文件。这些程序通过环境变量和标准输入（stdin）来接收请求参数，并通过标准输出（stdout）来生成响应内容。

3. **CGI 变量**：Web 服务器会将请求的信息（如请求方法、URL 参数、HTTP 头部信息等）封装成环境变量传递给 CGI 程序，使得程序可以根据这些变量来动态生成页面或者执行其他任务。

4. **发展历程**：虽然 CGI 是 Web 服务器和外部程序之间的最早的接口标准之一，但它也因为每次请求都会启动新的进程，且每个进程都需要加载运行环境而效率较低，逐渐被更现代、效率更高的技术（如 FastCGI、PHP-FPM 等）所取代。

总结来说，CGI 是 Web 技术发展历程中的一个重要阶段，定义了服务器如何与动态生成内容的程序进行通信，虽然已经不再是主流技术，但它对现代 Web 技术的发展仍然具有重要的历史意义和基础性影响。

### FastCGI

FastCGI（Fast Common Gateway Interface）是对传统 CGI 的改进和优化，旨在提高动态内容生成的性能和效率。它解决了传统 CGI 中每次请求都需要启动新进程的效率低下的问题。

关键点包括：

1. **工作原理**：与传统 CGI 不同，FastCGI 允许 Web 服务器和外部程序（如 PHP、Python 等脚本）之间保持持久连接，而不是每次请求都启动新的进程。这些外部程序作为 FastCGI 进程管理器的一部分持续运行，并在收到请求时处理。

2. **性能优势**：由于保持了持久连接和复用进程的能力，FastCGI 可以大大减少每次请求的启动和关闭进程所带来的开销。这使得服务器可以处理更多的并发请求，同时降低了系统资源的消耗。

3. **跨平台支持**：FastCGI 是跨平台的标准，支持多种 Web 服务器和编程语言。它允许开发者将动态内容生成的任务分配给专门的处理器，以提高处理效率和系统的整体性能。

4. **应用场景**：FastCGI 最常用于处理动态 Web 内容，例如 PHP、Python、Ruby 等脚本语言生成的网页。它也被用于提供 Web 应用程序服务器（如 Nginx、Apache 等）与后端应用程序之间的连接。

5. **配置和优化**：FastCGI 的配置通常涉及调整 Web 服务器和 FastCGI 进程池的参数，以达到最佳的性能和稳定性。例如，可以调整进程池的大小、连接超时时间和其他相关的参数。

总结来说，FastCGI 是一种改进的 CGI 实现，通过保持持久连接和复用进程显著提高了动态内容生成的效率和性能，成为现代 Web 应用开发中常用的技术之一。

### PHP-FPM

PHP-FPM（PHP FastCGI Process Manager）是 PHP 的一种管理器，用于处理 FastCGI 协议的 PHP 进程池管理工具。它是 PHP 的一部分，旨在提供更高效、更稳定的 PHP 处理方式，特别适用于 Web 服务器处理动态内容的场景。

关键点包括：

1. **工作原理**：PHP-FPM 允许 PHP 脚本通过 FastCGI 协议与 Web 服务器（如 Nginx、Apache 等）通信。相比于传统的 CGI，PHP-FPM 可以更高效地管理 PHP 进程，减少了每次请求启动 PHP 解释器的开销。

2. **进程管理**：PHP-FPM 使用进程池的方式管理 PHP 进程。它通过预先启动一定数量的 PHP 进程来处理请求，根据请求量的增减动态调整进程数量（通过 `pm.max_children`, `pm.min_spare_servers`, `pm.max_spare_servers` 等参数）。

3. **性能优化**：通过保持 PHP 进程的持久性和复用性，PHP-FPM 提高了 PHP 脚本的执行效率和系统资源的利用率。它还支持进程池的分布式管理，可以根据服务器负载情况动态调整进程数量，从而优化性能。

4. **配置选项**：PHP-FPM 提供了丰富的配置选项，可以调整进程池的大小、请求超时时间、日志记录方式等，以满足不同的应用场景和服务器环境的需求。

5. **安全性和稳定性**：PHP-FPM 支持安全机制，如限制 PHP 进程的权限和资源使用，避免因为 PHP 脚本执行错误或恶意攻击导致的系统安全问题。

6. **常用在哪些情况**：PHP-FPM 主要用于处理 PHP 脚本的动态内容生成，尤其是在高流量和高并发的 Web 环境中表现出色。它与现代 Web 服务器（如 Nginx、Apache）结合使用，为 Web 应用程序提供快速响应和稳定性。

总结来说，PHP-FPM 是 PHP 处理 FastCGI 请求的高效管理工具，通过优化进程管理和资源利用，提升了 PHP 脚本的执行性能和服务器的整体稳定性，是构建现代 Web 应用架构的重要组成部分之一。

## 常见问题

https://www.cnblogs.com/phpper/p/7191089.html - *PHP中获取当前页面的URL信息*

https://www.jb51.net/article/117265.htm - *利用PHP获取访客IP、地区位置、浏览器及来源页面等信息*
