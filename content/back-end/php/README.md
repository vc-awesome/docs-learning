## 简介

> PHP is a popular general-purpose scripting language that powers everything from your blog to the most popular websites in the world.


## 官方

主页：https://www.php.net/ - *PHP: Hypertext Preprocessor*

手册：https://www.php.net/manual/zh/index.php - *PHP: PHP 手册 - Manual*

GitHub：https://github.com/php/ - *php.net · GitHub*

### 版本

PHP 版本支持时间表：https://www.php.net/supported-versions.php - *PHP: Supported Versions*

### 解析器

- CGI
- CLI（不需要 Web 服务器 和 Web 浏览器）
- 服务器模块（Apache 服务器器模块）

------

https://www.cnblogs.com/phpper/p/7191089.html - *PHP中获取当前页面的URL信息*

https://www.jb51.net/article/117265.htm - *利用PHP获取访客IP、地区位置、浏览器及来源页面等信息*


## 教程

菜鸟教程：https://www.runoob.com/php/php-tutorial.html - *PHP 教程 | 菜鸟教程*


## 安装

### macOS

https://www.php.net/manual/zh/install.macosx.php - *PHP: macOS 系统下的安装 - Manual*


#### 使用 homebrew 安装

```shell
brew install php
```


### Windows

https://www.php.net/manual/zh/install.windows.php - *PHP: Windows 系统下的安装 - Manual*


#### 从源程序编译

https://www.php.net/manual/zh/install.windows.manual.php - *PHP: 在 Windows 上手动安装 PHP - Manual*



## 扩展

### macOS && Linux

#### 源码编译安装

https://www.php.net/manual/zh/install.pecl.phpize.php - *PHP: 用 phpize 编译共享 PECL 扩展库 - Manual*

```shell
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

    ```sh
    pecl
    ```

    ```sh
    pecl -h
    ```

  - List version information.

    ```sh
    pecl version
    ```

    ```sh
    pecl help version
    ```

    ```sh
    pecl -V
    ```

  - List Installed Packages In The Default Channel.

    ```sh
    pecl list
    ```

  - Install Package

    ```sh
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

https://www.php.net/manual/zh/configuration.php - *运行时配置*

https://www.php.net/manual/zh/configure.php - *配置选项*

https://www.php.net/manual/zh/ini.php - *php.ini 配置*

## 数学函数

https://www.cnblogs.com/lixihuan/p/8125894.html - *PHP取整，四舍五入取整、向上取整、向下取整、小数截取*

- PHP 取整数函数常用的四种方法：
  1. 直接取整，舍弃小数，保留整数：`intval()`；

  2. 四舍五入取整：`round()`；

  3. 向上取整，有小数就加1：`ceil()` ；

  4. 向下取整：`floor()`。



## 常量

预定义常量 `PHP_EOL`

用函数 `get_defined_constants()` 来获取所有PHP常量



## 变量

PHP 判断变量的类型

`gettype()`

`is_numeric()` \ `is_bool()` \ `is_float()` \ ...

https://www.php.cn/php-weizijiaocheng-369503.html - *php如何判断某变量的类型？*

 

## 字符串处理


https://www.php.net/manual/zh/book.mbstring.php - *中文字符串处理函数 - mb_strlen*



## 文件处理

https://www.php.net/manual/zh/refs.fileprocess.file.php - *PHP: 文件系统相关扩展 - Manual*

`is_dir()` [是否目录](https://www.php.net/manual/zh/function.is-dir)

`opendir()` [打开目录](https://www.php.net/manual/zh/function.opendir.php)

`file_put_contents()` [把一个字符串写入文件中](https://www.runoob.com/php/func-filesystem-file-put-contents.html)

https://www.php.cn/php-ask-479670.html - *详解PHP文件系统完全指南-PHP问题-PHP中文网*

## 雪花算法

参考链接

- https://www.ucloud.cn/yun/29788.html - *雪花算法 - snowflake*

- ~~http://www.swoole.org.cn/index.php/archives/302/~~

- 👍 https://learnku.com/articles/32575/ - *基于雪花算法的 PHP ID 生成器*

  > 需要 64位 PHP7.0 以上版本（32位 PHP 版本 microtime 会出现负数），phpstudy 不可用，phpstudy_pro 可用

- https://blog.csdn.net/z_wen_quan/article/details/90230282/ - _雪花算法及运用PHP,雪花算法生成全局唯一ID,参考了下网上雪花算法生成规则，机器ID和序列号自动获取 理论上毫秒可生成 1024*4096个唯一ID_

- http://www.manongjc.com/detail/9-lrqizvaqnabbigk.html - *php实现雪花算法（ID递增）*

- http://www.zhuyanjun.cn/blog/backend/1074.html - *php使用雪花算法SnowFlake生成全球唯一数字id*

