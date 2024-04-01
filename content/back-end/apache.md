# Apache

## 简介

> <img src="https://www.apache.org/img/asf-estd-1999-logo.jpg" alt="package icon" loading="lazy" decoding="async" align="left" width="88" hspace="10" vspace="0" /> The Apache HTTP Server is a powerful and flexible HTTP/1.1 compliant web server.  Originally designed as a replacement for the NCSA HTTP Server, it has grown to be the most popular web server on the Internet.  As a project of the Apache Software Foundation, the developers aim to collaboratively develop and maintain a robust, commercial-grade, standards-based server with freely available source code.

![GitHub last commit](https://badgen.net/github/last-commit/apache/httpd?icon=github&color=blue)
![GitHub tag (with filter)](https://img.shields.io/github/v/tag/apache/httpd?logo=github&color=blue)
![GitHub Repo stars](https://img.shields.io/github/stars/apache/httpd?style=social)

## 官方

GitHub: https://github.com/apache/httpd - *Mirror of Apache HTTP Server.*

Website: https://httpd.apache.org/ - *Welcome! - The Apache HTTP Server Project*

## 安装

### Windows

### macOS

系统自带

### Linux

### Termux

```sh
pkg install apache2
```

## 配置

配置文件路径：`/etc/apache2/http.conf`

## 用法

https://wangchujiang.com/linux-command/c/apachectl.html - *apachectl 命令，Linux apachectl 命令详解：Apache服务器前端控制工具 - Linux 命令搜索引擎*

list available command line options (this page)

```sh
apachectl -h
```

show version number

```sh
apachectl -v
```

show compile settings

```sh
apachectl -V
```

----

```sh
apachectl start
```

```sh
apachectl restart
```

```sh
apachectl stop
```

### 局域网配置

操作步骤：

1. 打开 Apache 配置文件 `httpd-vhosts.conf`；
2. 使用 Windows 系统中的 cmd 命令 `ipconfig` 查看本机的 IP 地址为：`192.168.0.134`；
3. 添加或修改虚拟主机内容：
    ```apache
    <VirtualHost 192.168.0.134:80>
        ServerAdmin webmaster@dummy-host2.example.com
        DocumentRoot "E:/webs.com/blog.com" //网站文件的存放位置
        ServerName www.blog.com //虚拟主机服务器的名称
        ServerAlias www.blog.com //虚拟主机服务器的别名
        <Directory "E:/webs.com/blog.com"> //该虚拟主机目录结构的配置
            Options indexes FollowSymLinks
            AllowOverride all
            Order allow,deny
            Allow from all //允许所有的访问
            Require all granted //允许所有的请求权限
        </Directory>
        ErrorLog "logs/blog.com-error.log"
        CustomLog "logs/blog.com-access.log" common
    </VirtualHost>
    ```
4. 修改配置后重启 Apache 服务器；
5. 在 Windows 系统的 hosts 文件中添加 `192.168.0.134  www.blog.com`，配置此 IP 的域名；
6. 在浏览器的地址栏输入 `192.168.0.134/指定文件` 或者 `www.blog.com/指定文件` 即可访问；
7. 设置局域网 IP 访问：`设置防火墙：控制面板 -> windows防火墙 -> 高级设置 -> 右键入站规则-> 新建规则 -> 端口 -> 下一步 -> tcp 80 -> 点下一步` 执行即可；
8. 在其他电脑上使用ip地址/指定文件，即可访问。

示例：

1. 远东学校服务器 IP 地址：`192.168.0.252`；

2. 在系统配置 hosts 文件中添加 `192.168.0.252 blog.yd.com` 即可访问此域名的信息。

### 禁止显示目录列表

禁止显示 *Apache* 目录列表 *-Indexes FollowSymLinks*

1. 缺省 `Indexes FollowSymLinks` 情况下在浏览器输入地址： `http://localhost:8080/`，如果文件根目录里有 `index.html`，浏览器就会显示 `index.html` 的内容，如果没有 `index.html`，浏览器就会显示文件根目录的目录列表，目录列表包括文件根目录下的文件和子目录。

2. 输入一个虚拟目录的地址：`http://localhost:8080/b/`，如果该虚拟目录下没有 `index.html`，浏览器也会显示该虚拟目录的目录结构，列出该虚拟目录下的文件和子目录。

4 种方法：

1. 将 Option 中的 Indexes 去掉，用户就不会看到该目录下的文件和子目录列表。

    编辑 `D:\wamp\bin\apache\apache2.4.9\conf\extra\httpd-vhosts.conf` 文件

    ```apache
    <Directory "D:/Apa/blabla">
    Options Indexes FollowSymLinks #---------->Options FollowSymLinks
    AllowOverride None
    Order allow,deny
    Allow from all
    </Directory>
    ```

    > Indexes 的作用就是当该目录下没有 `index.html` 文件时，就显示目录结构，去掉 Indexes，Apache 就不会显示该目录的列表了。

2. 编辑 `D:\wamp\bin\apache\apache2.4.9\conf\httpd.conf` 文件

    找到如下内容：

    ```apache
    <Directory “C:/Program Files/Apache2.2/htdocs”>
    #
    # Possible values for the Options directive are “None”, “All”,
    # or any combination of:
    Indexes Includes FollowSymLinks SymLinksifOwnerMatch ExecCGI MultiViews
    #
    # Note that “MultiViews” must be named *explicitly* — “Options All”
    # doesn’t give it to you.
    #
    # The Options directive is both complicated and important. Please see
    # http://httpd.apache.org/docs/2.2/mod/core.html#options
    # for more information.
    #
    Options Indexes FollowSymLinks

    #
    # AllowOverride controls what directives may be placed in .htaccess files.
    # It can be “All”, “None”, or any combination of the keywords:
    #   Options FileInfo AuthConfig Limit
    #
    AllowOverride None

    #
    # Controls who can get stuff from this server.
    #
    Order allow,deny
    Allow from all
    </Directory>
    ```

    在 `Options Indexes FollowSymLinks` 在 Indexes 前面加上 `–` 符号，这样的话就属于整个 Apache 禁止目录浏览了。

    > 在 Indexes 前加  `+` 代表允许目录浏览；加 `–` 代表禁止目录浏览。

3. 如果是在虚拟主机中，在 Indexes 前加 `+` 代表允许目录浏览；加 `–` 代表禁止目录浏览，如下「禁止在 test 工程下进行目录浏览」：

    ```apache
    <Directory “D:test”>
    Options -Indexes FollowSymLinks
    AllowOverride None
    Order deny,allow
    Allow from all
    </Directory>
    ```

    > 切记不要把 "`Allow from all`" 改成 "`Deny from all`" ，否则整个网站都不能被打开。

4. 可以在根目录的 `.htaccess` 文件中输入，就可以阻止 Apache 将目录结构列表出来。

    ```apache
    <Files *>
    Options -Indexes
    </Files>
    ```

参考文献：

1. http://blog.sina.com.cn/s/blog_a03d702f0101133h.html - *Apache Options Indexes FollowSymLinks 详解_callie_新浪博客*
