# Termux

## Introduction

> <img src="https://f-droid.org/repo/com.termux/en-US/icon_7jMZ7XD80oeucmGEaTwktIRZexLtGWvJfKdVD6Wu2SI=.png" alt="f-droid Icon" loading="lazy" decoding="async" align="left" width="78" hspace="10" vspace="0"> Termux is an Android terminal emulator and Linux environment app that works directly with no rooting or setup required. A minimal base system is installed automatically - additional packages are available using the APT package manager.

![GitHub last commit](https://badgen.net/github/last-commit/termux/termux-app?icon=github&color=blue)
![GitHub Release Date](https://img.shields.io/github/release-date/termux/termux-app?logo=github)
![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/termux/termux-app?logo=github)
![GitHub Repo stars](https://img.shields.io/github/stars/termux/termux-app?style=social)


## Official

Website：https://termux.dev/ - *Termux | The main termux site and help pages.* [GitHub](https://github.com/termux/termux.github.io)

![GitHub last commit](https://img.shields.io/github/last-commit/termux/termux.github.io?color=blue&logo=github)
![GitHub Repo stars](https://img.shields.io/github/stars/termux/termux.github.io?style=social)

Wiki：https://wiki.termux.com/wiki/ - *Termux Wiki*

GitHub：https://github.com/termux - *Android terminal emulator and Linux environment.*


## Install

GitHub：https://github.com/termux/termux-app - *Termux - a terminal emulator application for Android OS extendible by variety of packages.*

F-Droid：https://f-droid.org/en/packages/com.termux/ - *Termux | F-Droid - Free and Open Source Android App Repository*

![f-droid](https://badgen.net/f-droid/v/com.termux)


## Tutorial

https://geekdaxue.co/read/termux-doc-zh/Base-Termux.md - *$HOME 变量 - 《Termux 中文文档-帮助手册-教程》 - 极客文档*


## Configuration

https://wiki.termux.com/wiki/Terminal_Settings - *Terminal Settings - Termux Wiki*


### 触摸键盘

用法：

https://wiki.termux.com/wiki/Touch_Keyboard - *Touch Keyboard - Termux Wiki*

设置：

https://wiki.termux.com/wiki/Touch_Keyboard#Extra_Keys_Row - *Touch Keyboard - Termux Wiki*

1. 编辑配置文件

    ```sh
    vim ~/.termux/termux.properties
    ```

2. 在文末新增以下内容

    ```markup
    extra-keys = [ \
     ['ESC','/','-','HOME','UP','END','PGUP','SHIFT'], \
     
     ['TAB','CTRL','ALT','LEFT','DOWN','RIGHT','PGDN','KEYBOARD'] \
    ]
    ```

3. 修改完重新加载配置

    ```sh
    termux-reload-settings
    ```

参考：

1. https://www.xdbcb8.com/archives/958.html - *碎片化学习Python的又一神作：termux*


## Getting started

https://www.ruanyifeng.com/blog/2019/07/termux-tutorial.html - *Termux 入门教程：架设手机 Server 下载文件 - 阮一峰的网络日志*


### 包管理

> Termux uses apt and dpkg for package management, similar to Ubuntu or Debian.

![GitHub last commit](https://badgen.net/github/last-commit/termux/termux-packages?icon=github&color=blue)
![GitHub Release Date - Published_At](https://img.shields.io/github/release-date/termux/termux-packages?display_date=published_at&logo=github)
![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/termux/termux-packages?logo=github)
![GitHub Repo stars](https://img.shields.io/github/stars/termux/termux-packages?style=social)

官方：

https://wiki.termux.com/wiki/Package_Management - *Package Management - Termux Wiki*

https://github.com/termux/termux-packages - *GitHub - termux/termux-packages: A package build system for Termux.*


#### 镜像源

官方镜像源：

https://wiki.termux.com/wiki/Package_Management#Official_repositories - *Package Management - Termux Wiki*

https://packages.termux.dev/apt/termux-main/ - *Index of /apt/termux-main/*

开源镜像源：

1. https://mirrors.tuna.tsinghua.edu.cn/help/termux/ - *termux | 镜像站使用帮助 | 清华大学开源软件镜像站 | Tsinghua Open Source Mirror*

    https://mirrors.tuna.tsinghua.edu.cn/termux/ - *Index of /termux/ | 清华大学开源软件镜像站 | Tsinghua Open Source Mirror*

2. https://mirrors.ustc.edu.cn/help/termux.html - *Termux 源使用帮助 — USTC Mirror Help 文档*

    https://mirrors.ustc.edu.cn/termux/ - *Index of /termux/*

更换镜像源：

- 方式一：`termux-change-repo` （推荐）

    1. 推荐先更新 「termux-tools」 软件包：`pkg install termux-tools`
    2. 使用 `termux-change-repo`
    3. 先选择 「Single mirror」
    4. 再选择「mirrors.ustc.edu.cn」

- 方式二：手动更换

    1. `vim /data/data/com.termux/files/usr/etc/apt/sources.list`（或者 `apt edit-sources` ）
    2. 将 sources.list 文件的内容，替换成 `deb https://mirrors.ustc.edu.cn/termux/apt/termux-main stable main`

- 方式三：`sed` 命令更换

  ```sh
  sed -i 's@packages.termux.org@mirrors.ustc.edu.cn/termux@' $PREFIX/etc/apt/sources.list
  pkg up
  ```

  注：Termux 会自动将环境变量 `$PREFIX` 设定为 `/data/data/com.termux/files/usr`


#### pkg

*显示命令帮助*

```sh
pkg help
```

```sh
pkg
```

*Search package by query, for example by name or description part.*

```sh
pkg search <query>
```

*Upgrade all installed packages to the latest version. - 将所有已安装的软件包升级到最新版本。*

```sh
pkg upgrade
```

*Update apt databases from configured repositories.*

```sh
pkg update
```

*Installing a new package. - 安装新的软件包。* （如果软件包已安装，再次执行此命令，升级当前包到最新版本。）

```sh
pkg install <packages>
```

*Re-install specified package. - 重新安装指定的软件包。*

```sh
pkg reinstall <packages>
```

*Uninstall specified packages. Configuration files will be left intact. - 卸载指定的软件包。配置文件将保持不变。*

```sh
pkg uninstall <packages>
```

*List installed packages. - 列出已安装的软件包。*

```sh
pkg list-installed
```

*List all available packages. - 列出所有可用的软件包。*

```sh
pkg list-all
```

*Show information about specific package. - 显示有关特定包的信息。*

```sh
pkg show <packages>
```

*Show all files installed by packages. - 显示包安装的所有文件。*

```sh
pkg files <packages>
```

```sh
pkg f <packages>
```


#### apt

*显示命令帮助*

```sh
apt help
```

```sh
apt
```

*list packages based on package names*

```sh
apt list
```

*列出可升级的软件包*

```sh
apt list --upgradable
```

*search in package descriptions*

```sh
apt search
```

*show package details*

```sh
apt show
```

*install packages*

```sh
apt install
```

*reinstall packages*

```sh
apt reinstall
```

*remove packages*

```sh
apt remove
```

*update list of available packages*

```sh
apt update
```

*automatically remove all unused packages*

```sh
apt autoremove
```

*edit the source information file*

```sh
apt edit-sources
```

更多命令，输入 > `apt help` 查看。


### 目录结构

#### $HOME

> /data/data/com.termux/files/home

`.bashrc` - 用户的 Bash 配置文件（其中 rc 是 run commands 的意思）

文件位置：`/data/data/com.termux/files/home/.bashrc` 或 `~/.bashrc`

读取方式：每次打开新的终端时，都要被读取。

`.bash_profile`

文件位置：`/data/data/com.termux/files/home/.bash_profile` 或 `~/.bash_profile`

读取方式：只在会话开始时被读取一次。

参考：

1. https://zhuanlan.zhihu.com/p/405174594 - *Linux文件 profile、bashrc、bash_profile区别 - 知乎*
2. https://blog.csdn.net/eleanoryss/article/details/70207767 - *linux下.bashrc文件修改和生效_bashrc生效-CSDN博客*
3. https://www.sysgeek.cn/bashrc/#google_vignette - *bashrc 配置文件自定义指南，如何添加别名、使用函数等*
4. https://blog.csdn.net/u010167269/article/details/52612260 - *Linux 中 bashrc 中的 rc 是什么意思_bashrc全名-CSDN博客*

`.bash_history`

```bash
echo $HISTFILE
```

`.bash_logout`

#### $PREFIX

> /data/data/com.termux/files/usr

#### $SHELL

> /data/data/com.termux/files/usr/bin/bash

#### $PATH

> /data/data/com.termux/files/usr/bin

#### 常用目录

由于 Termux 只作为一个安卓 APP 存在，并不是一个完整的 Linux 系统，所以不能直接使用 `/`, `/usr` 等路径。Termux 提供了环境变量 `$PREFIX` 来指向用户可以使用的“根目录”（实际为 `/data/data/com.termux/files/usr` ），而用户通常意义上的家目录（ home，即 `~` ）为 `/data/data/com.termux/files/home` 。一般只在这两个目录进行操作。

如何访问手机文件：使用 `termux-setup-storage` 命令，Termux 会请求文件访问权限，允许后在 `~` 目录下会生成 storage 的文件链接，其中可以访问 downloads、dcim、music 等常用文件夹，而 shared 文件夹则对应安卓系统的 `/storage/emulated/0` 路径，是主文件目录。

更多关于 Termux 文件系统的介绍可以在[此处](https://wiki.termux.com/wiki/Internal_and_external_storage)了解。

----

从文件管理器访问 Termux 👇

https://wiki.termux.com/wiki/Internal_and_external_storage#Access_Termux_from_a_file_manager - *Internal and external storage - Termux Wiki*

操作步骤：

1. 打开手机应用 [质感文件](os/mobile/mobile-app-list.md#质感文件（Material-Files）)；
2. 点击左上角菜单按钮 *> 添加存储... > 外部存储*；
3. 应用转至另一个页面，继续操作，*点击左上角菜单按钮 > 打开文档-“Termux” > 页面底部按钮“使用此文件夹”*。

----

常用目录列表：

```sh
cd $PREFIX
```

\* *指向手机路径 /data/data/com.termux/files/usr*

```sh
cd ~
```

```sh
cd $HOME
```

\* *指向手机路径 /data/data/com.termux/files/home*

```sh
cd ~/storage/shared/Documents/markor/GitHub/
```
\* *指向手机路径 /storage/emulated/0/Documents/markor/GitHub/*

```sh
cd ~/storage/shared/
```
\* *指向手机路径 /storage/emulated/0*

```sh
cd ~/storage/shared/Download
```

或

```sh
cd ~/storage/downloads
```

\* *指向手机路径 /storage/emulated/0/Download*


### 常用命令

https://www.darkhackerworld.com/2020/07/termux-commands-list.html - *Termux Commands List - Go From Basic to Advanced in 2024*

#### am

> Activity manager (activity) commands provided by the com.termux app. These are similar to commands provided by the Android platform with the /system/bin/am command.

https://github.com/termux/TermuxAm - *GitHub - termux/TermuxAm: Android Oreo-compatible am command reimplementation.*

![GitHub last commit](https://badgen.net/github/last-commit/termux/TermuxAm?icon=github&color=blue)
![GitHub Release Date - Published_At](https://img.shields.io/github/release-date/termux/TermuxAm?display_date=published_at&logo=github)
![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/termux/TermuxAm?logo=github)
![GitHub Repo stars](https://img.shields.io/github/stars/termux/TermuxAm?style=social)

用法：

https://wiki.termux.com/wiki/Internal_and_external_storage - *内部和外部存储 - Termux Wiki --- Internal and external storage - Termux Wiki*

To send an Intent to open the application information screen on an Android device, you can use the following command in Termux:

```bash
am start -a android.settings.APPLICATION_DETAILS_SETTINGS -d package:your_package_name
```

Replace `your_package_name` with the package name of the application for which you want to view the application information. This command will open the application details screen for the specified app on your Android device.


#### termux-chroot

```sh
termux-chroot
```


#### termux-services

简介：

> Scripts to handle services in termux. Contribute to termux/termux-services development by creating an account on GitHub.

![GitHub last commit](https://badgen.net/github/last-commit/termux/termux-services?icon=github&color=blue)
![GitHub Release Date - Published_At](https://img.shields.io/github/release-date/termux/termux-services?display_date=published_at&logo=github)
![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/termux/termux-services?logo=github)
![GitHub Repo stars](https://img.shields.io/github/stars/termux/termux-services?style=social)

官方：

https://github.com/termux/termux-services - *termux/termux-services: Scripts to handle services in termux.*

https://wiki.termux.com/wiki/Termux-services - *Termux-services - Termux Wiki*

安装：

```sh
pkg install termux-services
```

用法：

*步骤 1 - 自启动脚本创建*

```sh
mkdir -p $PREFIX/var/service/run_browser_sync
```

```sh
vim $PREFIX/var/service/run_browser_sync/run
```

```sh
#!/data/data/com.termux/files/usr/bin/bash
cd ~/storage/shared/Documents/markor/gh/docs-learning/ && browser-sync start --server --files "**/**.*"
```

```sh
chmod +x $PREFIX/var/service/run_browser_sync/run
```

*步骤 2 - 配置服务的输出日志*

```sh
mkdir -p $PREFIX/var/service/run_browser_sync/log
```

```sh
vim $PREFIX/var/service/run_browser_sync/log/run
```

```sh
#!/data/data/com.termux/files/usr/bin/sh
svlogger="/data/data/com.termux/files/usr/share/termux-services/svlogger"
exec "${svlogger}" "$@"
```

```sh
chmod +x $PREFIX/var/service/run_browser_sync/log/run
```

*步骤 3 - 自启动服务测试*


```sh
termux-setup-storage
```

```sh
sv-enable run_browser_sync
```

```sh
tail -f $PREFIX/var/log/sv/run_browser_sync/current
```

参考：

1. https://blog.csdn.net/YiBYiH/article/details/127294017 - *Termux设置——服务自启动_termux-services-CSDN博客*


#### termux-tools

> Scripts and small programs that are packaged into termux's termux-tools package

![GitHub last commit](https://badgen.net/github/last-commit/termux/termux-tools?icon=github&color=blue)
![GitHub Release Date - Published_At](https://img.shields.io/github/release-date/termux/termux-tools?display_date=published_at&logo=github)
![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/termux/termux-tools?logo=github)
![GitHub Repo stars](https://img.shields.io/github/stars/termux/termux-tools?style=social)

官方：

https://github.com/termux/termux-tools - *GitHub - termux/termux-tools: Scripts and small programs that are packaged into termux's termux-tools package*

显示包安装的所有文件：

```sh
pkg f termux-tools
```


##### logcat

> 系统内置

```sh
logcat -h
```


##### termux-change-repo

```sh
termux-change-repo
```


##### termux-fix-shebang

https://wiki.termux.com/wiki/Termux-fix-shebang - *Termux-fix-shebang - Termux Wiki*

```sh
termux-fix-shebang
```


##### termux-info

```sh
termux-info
```


##### termux-setup-storage

```sh
termux-setup-storage
```


### 插件列表

1. https://wiki.termux.com/wiki/Main_Page#Addons - *Termux Wiki*

2. <https://zsxwz.com/2019/06/22/termux几个插件使用/> - *termux几个插件使用 – 姿势小王子*


#### Termux:API

简介：

> Termux add-on app which exposes device functionality as API to command line programs.

![GitHub last commit](https://badgen.net/github/last-commit/termux/termux-api?icon=github&color=blue)
![GitHub Release Date - Published_At](https://img.shields.io/github/release-date/termux/termux-api?display_date=published_at&logo=github)
![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/termux/termux-api?logo=github)
![GitHub Repo stars](https://img.shields.io/github/stars/termux/termux-api?style=social)

官方：

https://wiki.termux.com/wiki/Termux:API - *Termux:API - Termux Wiki*

https://github.com/termux/termux-api - *termux/termux-api: Termux add-on app which exposes device functionality as API to command line programs.*

安装：

https://f-droid.org/en/packages/com.termux.api

``` sh
pkg install termux-api
```

卸载：

```sh
pkg uninstall termux-api
```

API 实现：

!> 没玩起来😶。


#### Termux:Widget

简介：

> Termux add-on app which adds shortcuts to commands on the home screen.

![GitHub last commit](https://badgen.net/github/last-commit/termux/termux-widget?icon=github&color=blue)
![GitHub Release Date - Published_At](https://img.shields.io/github/release-date/termux/termux-widget?display_date=published_at&logo=github)
![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/termux/termux-widget?logo=github)
![GitHub Repo stars](https://img.shields.io/github/stars/termux/termux-widget?style=social)

Wiki：

1. https://wiki.termux.com/index.php?title=Termux:Widget&oldid=6237 - *Termux:Widget - Termux Wiki*  
2. https://wiki.termux.com/wiki/Termux:Widget - *Termux:Widget - Termux Wiki*

GitHub：

1. https://github.com/termux/termux-widget - *GitHub - termux/termux-widget: Termux add-on app which adds shortcuts to commands on the home screen.*

Download：

1. https://f-droid.org/en/packages/com.termux.widget

Search：

1. [termux:Widget at DuckDuckGo](https://duckduckgo.com/?q=termux%3AWidget) 🪜

实践操作：

1. Termux 指定该目录用于存放显示在桌面的脚本

    ``` sh
    termux-chroot
    ```
    
    ``` sh
    mkdir -p ~/.shortcuts/
    ```
    
2. */bin/browser_sync* 实际上是 js 脚本文件，需要修复 shebang（[如何查看是否为 js 脚本文件？](#how-to-see-if-it-is-a-js-script-file) 、 [解决脚本 shebang 问题](https://du33169.tech/linux/TermuxConfiguration.html#%E8%A7%A3%E5%86%B3%E8%84%9A%E6%9C%ACshebang%E9%97%AE%E9%A2%98)）
   
    ``` sh
    termux-fix-shebang $PREFIX/bin/broswer-sync
    ```
    
3. 进入目录并创建脚本文件

    ``` sh
    cd ~/.shortcuts
    ```
    
    ``` sh
    vim run-browser-sync.sh
    ```
    
    输入以下运行 browser-sync 的脚本内容
    ``` sh
    #!/data/data/com.termux/files/usr/bin/bash
    
    #running browser-sync:
    cd ~/storage/shared/Documents/markor/GitHub/docs-learning/ &&  browser-sync start --server --files "**/**.*"
    ```
    
4. 给予可执行权限

    ``` sh
    chmod +x run-browser-sync.sh
    ```

- FAQ：
 
   1. <p id="how-to-see-if-it-is-a-js-script-file">如何查看是否为 js 脚本文件？</p>
    
        ``` sh
        cat $PREFIX/bin/browser-sync
        ```
        
        注：输出的内容为 js 代码，则表示为 js 脚本。
        
        ``` sh
        ls -l browser-sync
        ```
        
        执行结果：*lrwxrwxrwx 1 u0_a410 u0_a410 44 Mar  8 17:26 <span style="color: #ff5d5d;">browser-sync -> ../lib/node_modules/browser-sync/dist/bin.js</span>* ；
        
        注：执行的结果中包含 *browser-sync -> ../lib/node_modules/browser-sync/dist/bin.js* 表示为 js 脚本。
    
- 参考：

    1. https://blog.csdn.net/qq_36821517/article/details/127836409 - *Termux执行shell脚本报错：cannot execute: required file not found_cannot execute shell_我好高冷的博客-CSDN博客*

    2. https://zhuanlan.zhihu.com/p/399098337 - *只需一部安卓手机，让全功能VSCode登陆iPad - 知乎*

        - 原文：

            1. https://du33169.tech/notes/installCode-serverOnTermux.html - *Termux+Code-Server实现随身全功能VSCode | 岚*

            2. https://du33169.tech/linux/TermuxConfiguration.html - *Termux安装配置与使用 | 岚*


#### Termux:Tasker

简介：

> Termux add-on app for integration with Tasker. Contribute to termux/termux-tasker development by creating an account on GitHub.

![GitHub last commit](https://badgen.net/github/last-commit/termux/termux-tasker?icon=github&color=blue)
![GitHub Release Date - Published_At](https://img.shields.io/github/release-date/termux/termux-tasker?display_date=published_at&logo=github)
![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/termux/termux-tasker?logo=github)
![GitHub Repo stars](https://img.shields.io/github/stars/termux/termux-tasker?style=social)

官方：

https://wiki.termux.com/wiki/Termux - *Termux:Tasker - Termux Wiki*

https://github.com/termux/termux-tasker - *termux/termux-tasker: Termux add-on app for integration with Tasker.*

安装：

https://f-droid.org/packages/com.termux.tasker/ - *Termux:Tasker | F-Droid - Free and Open Source Android App Repository*


#### Termux:Boot

简介：

> Termux add-on app allowing programs to be run at boot. - termux/termux-boot

![GitHub last commit](https://badgen.net/github/last-commit/termux/termux-boot?icon=github&color=blue)
![GitHub Release Date - Published_At](https://img.shields.io/github/release-date/termux/termux-boot?display_date=published_at&logo=github)
![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/termux/termux-boot?logo=github)
![GitHub Repo stars](https://img.shields.io/github/stars/termux/termux-boot?style=social)

官方：

https://wiki.termux.com/wiki/Termux - *Termux:Boot - Termux Wiki*

https://github.com/termux/termux-boot - *termux/termux-boot: Termux add-on app allowing programs to be run at boot.*

安装：

https://f-droid.org/packages/com.termux.boot/ - *Termux:Boot | F-Droid - Free and Open Source Android App Repository*


## Tool

### 终端工具

#### apache2

查看：

```sh
pkg show apache2
```

安装：

```sh
pkg install apache2
```

卸载：

```sh
pkg uninstall apache2
```

用法：

```sh
httpd
```

有关详细用法，请参阅本文“[如何将 Apache 的网站默认路径，修改为手机本地存储？](#%e5%a6%82%e4%bd%95%e5%b0%86-apache-%e7%9a%84%e7%bd%91%e7%ab%99%e9%bb%98%e8%ae%a4%e8%b7%af%e5%be%84%ef%bc%8c%e4%bf%ae%e6%94%b9%e4%b8%ba%e6%89%8b%e6%9c%ba%e6%9c%ac%e5%9c%b0%e5%ad%98%e5%82%a8%ef%bc%9f)”。


#### proot

https://wiki.termux.com/wiki/Differences_from_Linux - *Differences from Linux - Termux Wiki*

查看：

```sh
pkg show proot
```

安装：

```sh
pkg install proot -y
```

卸载：

```sh
pkg uninstall proot
```


#### Nano

搜索：

```sh
pkg search nano
```

安装：

```sh
pkg install nano
```

卸载：

```sh
pkg uninstall nano
```

参考：

1. https://www.51cto.com/article/745458.html - *Nano 编辑器中，怎样保存和退出-51CTO.COM*
2. https://www.freecodecamp.org/chinese/news/how-to-save-and-exit-nano-in-terminal-nano-quit-command/amp/ - *如何在终端中保存和退出 Nano*


#### Vim

安装：

```sh
pkg install vim
```

卸载：

```sh
pkg uninstall vim
```


#### Tree

官方：

http://mama.indstate.edu/users/ice/tree/ - *The Tree Command for Linux Homepage*

安装：

```sh
pkg install tree
```

卸载：

```sh
pkg uninstall tree
```

用法：

https://wangchujiang.com/linux-command/c/tree.html - *tree 命令，Linux tree 命令详解：树状图列出目录的内容 - Linux 命令搜索引擎*


#### Node.js

搜索：

```sh
pkg search ^node
```

安装：

```sh
pkg install nodejs-lts
```

卸载：

```sh
pkg uninstall nodejs-lts
```


#### Git

搜索：

```sh
pkg search ^git$
```

安装：

```sh
pkg install git
```

卸载：

```sh
pkg uninstall git
```

---

https://zhuanlan.zhihu.com/p/619764281 - *42号笔记：Android上使用Termux的git同步Obsidian - 知乎*


#### Openssh

安装：

```sh
pkg install openssh
```

卸载：

```sh
pkg uninstall openssh
```


#### Xclip

⚠️ 按下面顺序安装，否则无法安装。

先安装：

```sh
pkg install x11-repo
```

再安装：

```sh
pkg install xclip
```

!> 无法使用！执行 `xclip -sel clip < ~/.ssh/id_rsa.pub` 命令，出现 `Error: Can't open display: (null)` 错误。

卸载：

```sh
pkg uninstall xclip
```


#### GitUI

简介：

> blazing fast terminal-ui for git written in rust（译文：用 rust 编写的 git 快速终端用户界面）

![GitHub last commit](https://badgen.net/github/last-commit/extrawurst/gitui?icon=github&color=blue)
![GitHub Release Date - Published_At](https://img.shields.io/github/release-date/extrawurst/gitui?display_date=published_at&logo=github)
![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/extrawurst/gitui?logo=github)
![GitHub Repo stars](https://img.shields.io/github/stars/extrawurst/gitui?style=social)

官方：

https://extrawurst.itch.io/gitui - *GitUI by extrawurst*

https://github.com/extrawurst/gitui - *GitHub - extrawurst/gitui: Blazing 💥 fast terminal-ui for git written in rust 🦀*

安装：

```sh
pkg install gitui
```

卸载：

```sh
pkg uninstall gitui
```

用法：

方式一：安装完后，在仓库根目录执行下列命令进入应用

```sh
cd ~/storage/shared/Documents/markor/GitHub/docs-learning/
```

```sh
gitui
```

方式二：添加 [Termux:Widget](os/mobile/termux.md#termuxwidget) 脚本

1. 新建脚本文件

    ```sh
    cd ~/.shortcuts && vim run-gitui.sh
    ```

2. 输入以下脚本文件内容

    ```sh
    #!/data/data/com.termux/files/usr/bin/bash
    
    cd ~/storage/shared/Documents/markor/GitHub/docs-learning/ && gitui
    ```

#### miniserve

官方：

https://github.com/svenstaro/miniserve?tab=readme-ov-file - *GitHub - svenstaro/miniserve: 🌟 For when you really just want to serve some files over HTTP right now!*

查看：

```sh
pkg show miniserve
```

安装：

```sh
pkg install miniserve
```

卸载：

```sh
pkg uninstall miniserve
```


#### aria2

简介：

> aria2 is a lightweight multi-protocol & multi-source command-line download utility. It supports HTTP/HTTPS, FTP, SFTP, BitTorrent and Metalink. aria2 can be manipulated via built-in JSON-RPC and XML-RPC interfaces.

![GitHub last commit](https://badgen.net/github/last-commit/aria2/aria2?icon=github&color=blue)
![GitHub Release Date - Published_At](https://img.shields.io/github/release-date/aria2/aria2?display_date=published_at&logo=github)
![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/aria2/aria2?logo=github)
![GitHub Repo stars](https://img.shields.io/github/stars/aria2/aria2?style=social)

官方：

https://aria2.github.io/ - *aria2*

https://github.com/aria2/aria2 - *GitHub - aria2/aria2: aria2 is a lightweight multi-protocol & multi-source, cross platform download utility operated in command-line. It supports HTTP/HTTPS, FTP, SFTP, BitTorrent and Metalink.*

安装：

```sh
pkg install aria2
```

卸载：

```sh
pkg uninstall aria2
```

用法：

```sh
aria2c -v
```

```sh
aria2c -h
```


#### dnsutils

官方：

https://www.isc.org/bind/ - *BIND 9 - ISC*

查看：

```bash
pkg show dnsutils
```

安装：

```bash
pkg install dnsutils
```

卸载：

```bash
pkg uninstall dnsutils
```


#### fdupes

简介：

> FDUPES is a program for identifying or deleting duplicate files residing within specified directories. - adrianlopezroche/fdupes

![GitHub last commit](https://badgen.net/github/last-commit/adrianlopezroche/fdupes?icon=github&color=blue)
![GitHub Release Date - Published_At](https://img.shields.io/github/release-date/adrianlopezroche/fdupes?display_date=published_at&logo=github)
![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/adrianlopezroche/fdupes?logo=github)
![GitHub Repo stars](https://img.shields.io/github/stars/adrianlopezroche/fdupes?style=social)

官方：

https://github.com/adrianlopezroche/fdupes - *GitHub - adrianlopezroche/fdupes: FDUPES is a program for identifying or deleting duplicate files residing within specified directories.*

查看：

```bash
pkg show fdupes
```

安装：

```bash
pkg install fdupes
```

卸载：

```bash
pkg uninstall fdupes
```

用法：

```bash
fdupes --help
```

```bash
fdupes -r ./
```


### Shells

https://wiki.termux.com/wiki/Shells - *Shells - Termux Wiki*


#### Bash

https://wiki.termux.com/wiki/Shells#BASH - *Shells - Termux Wiki*

查看：

```sh
pkg show bash
```


#### Zsh

简介：

> Zsh is a shell designed for interactive use, although it is also a powerful scripting language. Many of the useful features of bash, ksh, and tcsh were incorporated into zsh.

官方：

https://wiki.termux.com/wiki/Shells#ZSH - *Shells - Termux Wiki*

安装：

```sh
pkg install zsh
```

插件：

https://wiki.termux.com/wiki/ZSH - *ZSH - Termux Wiki*

1. Oh-My-ZSH

    https://github.com/ohmyzsh/ohmyzsh - *GitHub - ohmyzsh/ohmyzsh: 🙃 A delightful community-driven (with 2,200+ contributors) framework for managing your zsh configuration. Includes 300+ optional plugins (rails, git, macOS, hub, docker, homebrew, node, php, python, etc), 140+ themes to spice up your morning, and an auto-update tool so that makes it easy to keep up with the latest updates from the community.*
    
    ![GitHub last commit](https://badgen.net/github/last-commit/ohmyzsh/ohmyzsh?icon=github&color=blue)
    ![GitHub Repo stars](https://img.shields.io/github/stars/ohmyzsh/ohmyzsh?style=social)

参考：

1. https://du33169.tech/posts/linux/zshconfiguration/ - *Zsh配置与美化 - Lando's Blog*


### 应用工具

#### Hacker's Keyboard

https://github.com/klausw/hackerskeyboard - *GitHub - klausw/hackerskeyboard: Hacker's Keyboard (official)*

![GitHub last commit](https://badgen.net/github/last-commit/klausw/hackerskeyboard?icon=github&color=blue)
![GitHub Release Date - Published_At](https://img.shields.io/github/release-date/klausw/hackerskeyboard?display_date=published_at&logo=github)
![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/klausw/hackerskeyboard?logo=github)
![GitHub Repo stars](https://img.shields.io/github/stars/klausw/hackerskeyboard?style=social)

设置：

键盘模式（portrait），类似于电脑键盘的模式 👇

1. 打开应用设置「SETTINGS」；
2. 进入「Keyboard view settings」 > 「Keyboard mode, portrait」；
3. 选择「Full 5-row layout」。


## FAQ

### 如何将 Apache 的网站默认路径，修改为手机本地存储？

操作步骤：

1. 开启“访问本机存储”，请参阅“[手机电脑互传文件](https://blog.csdn.net/xiao_qi_tong/article/details/122628099)”

    ```sh
    termux-setup-storage
    ```
    
    ```sh
    pkg install tree
    ```
    
    ```sh
    tree
    ```

2. 开启 root 权限（否则无权修改 *httpd.conf* 配置文件），请参阅“[Termux详细教程！-进阶配置-超级管理员身份-手机没有root](https://blog.csdn.net/xiao_yi_xiao/article/details/120470295#t28)”

    ```sh
    pkg install proot -y
    ```
    
    ```sh
    termux-chroot
    ```

3. 安装 Apache，请参阅“[Termux详细教程！-开发环境-Apache](https://blog.csdn.net/xiao_yi_xiao/article/details/120470295#t38)”

    ```sh
    pkg install apache2
    ```

4. 备份配置文件（可选操作）

    ```sh
    cp $PREFIX/etc/apache2/httpd.conf httpd.conf.bak
    ```

5. 修改配置文件

    ```sh
    pkg install vim
    ```
    
    ``` sh
    cd /
    ```
    
    ```sh
    vim $PREFIX/etc/apache2/httpd.conf
    ```
    
    将下列行
    
    ```sh
    DocumentRoot "/data/data/com.termux/files/usr/share/apache2/default-site/htdocs"
    <Directory "/data/data/com.termux/files/usr/share/apache2/default-site/htdocs">
    ```
    
    修改为
    
    ```sh
    DocumentRoot "/data/data/com.termux/files/home/storage/shared/documents/markor/github/docs-learning"
    <Directory "/data/data/com.termux/files/home/storage/shared/documents/markor/github/docs-learning">
    ```
    
    > 快捷修改：
    >
    > 在 vim 中字符串替换（一般操作此步一次即可）
    >
    >
    > ```sh
    > :%s/"\/data\/data\/com.termux\/files\/usr\/share\/apache2\/default-site\/htdocs"/"\/data\/data\/com.termux/files\/home\/storage\/shared\/documents\/markor\/github\/docs-learning"/
    > ```
    >
    > 在 vim 中字符串搜索
    >
    >
    > ```sh
    > /"\/data\/data\/com.termux/files\/home\/storage\/shared\/documents\/markor\/github\/docs-learning"
    > ```

6. 重启 Apache

    ```sh
    apachectl restart
    ```

7. 配置完上述操作重启应用

    1.  打开 “Termux”，按顺序执行下列 2 条命令
    
         ```sh
         termux-chroot
         ```
    
         ```sh
         apachectl restart
         ```
    
    2. 打开 “网页浏览器”，输入网址：http://127.0.0.1:8080 ，能访问网页说明配置成功。


### 如何安装 Node.js 和 Browsersync ？

一行命令快捷访问：👏

``` sh
cd ~/storage/shared/Documents/markor/GitHub/docs-learning/ && browser-sync start --server --files "**/**.*"
```

操作步骤：

1. ```sh
    pkg install node-lts
    ```
2. ```sh
    pkg upgrade
    ```
    👆（如果第 1 步命令执行报错🐞，执行此步进行更新）
3. ```sh
    node -v
    ```
4. ```sh
    npm -v
    ```
5. ```sh
    tree
    ```
6. ```sh
    cd ~/storage/shared/Documents/markor/GitHub/docs-learning/
    ```
7. ```sh
    npm install -g browser-sync
    ```
    （执行全局安装，因为局部安装 `npm install browser-sync --save-dev` 报错🐞 ）
8. ```sh
    browser-sync --version
    ```
9. ```sh
    browser-sync start --server --files "**/**.*"
    ```

参考：

1. https://blog.csdn.net/xiao_yi_xiao/article/details/120470295#t77 - *Termux详细教程！_欧晨eli的博客-CSDN博客*
2. https://blog.csdn.net/Ximerr/article/details/123503443 - *安卓手机安装 nodejs 时提示cannot link executable “node“ library libcrypto.so.3 问题解决_身价五毛的博客-CSDN博客*


### 如何在 vim 中搜索字符并上下查找？

操作步骤：

1.  打开 vim

    ```sh
    vim $PREFIX/etc/apache2/httpd.conf
    ```

2. 将下列代码复制粘贴过去

    ```sh
    /"\/home\/storage\/shared\/documents\/markor\/github\/docs-learning"
    ```

3.  键盘按下回车键

4. 如需 “查找下一个”，按 <kbd>n</kbd> 键；“查找上一个”：按 <kbd>N</kbd> 键


### Termux permission denied

这个错误通常出现在Termux环境中，是因为Android系统的安全机制限制了Termux对存储目录的访问。为了解决这个问题，可以尝试以下几种方法：

1. **使用Termux内部存储**: 将需要操作的文件移动到Termux的内部存储目录，比如`/data/data/com.termux/files/home/`目录下，而不是尝试访问外部存储空间。这样可以避免Android系统的权限限制。

2. **重新设置存储权限**: 在Termux中，您可以使用命令`termux-setup-storage`来请求对存储的访问权限，执行这个命令后会在Termux中创建一个软链接`/sdcard`指向外部存储，之后应该可以正常访问存储空间。

3. **修改应用权限**: 在Android系统的设置中，找到Termux应用，尝试修改应用的存储权限，允许其访问外部存储空间。

4. **使用root权限**: 如果您的设备已经获取root权限，可以尝试在root权限下执行操作，这样可以规避Android系统对存储访问的限制。

请注意，对于某些操作可能需要root权限或者绕过Android系统的安全机制，这些行为可能会影响设备的安全性，请谨慎操作。如果您对Termux和Android存储权限不熟悉，建议提前备份重要数据并寻求专业人士的帮助。希望这些方法能帮助您解决问题！如果您有其他问题，我将很乐意继续帮助您。

参考：

1. https://cn.bing.com/search?q=termux%20permission%20denied - *termux permission denied, symlink '../jshint/bin/jshint' -> '/storage/emulated/0/Documents/markor/gh/md-file-tree/node_modules/.bin/jshint' - 搜索*

2. https://cloud.tencent.com/developer/ask/sof/832900 - *Termux - npm错误！错误: EPERM:不允许操作-腾讯云开发者社区-腾讯云*

3. https://blog.csdn.net/wlsdx/article/details/108207308 - *Termux permission denied-CSDN博客*

4. https://unix.stackexchange.com/questions/731882/termux-bash-permission-denied - *files - Termux Bash: ./ Permission Denied - Unix & Linux Stack Exchange*


### termux ln: failed to create symbolic link '../indexs.js': Permission denied

这个错误是由于在Termux环境中缺少对存储空间的访问权限导致的。您可以尝试以下步骤来解决这个问题：

1. **使用Termux内部存储**: 将需要操作的文件移动到Termux的内部存储目录，比如`/data/data/com.termux/files/home/`目录下，而不是在外部存储空间进行操作。

2. **使用符号链接(symlink)命令**: 在Termux中使用`ln -s`命令时，尝试直接在Termux内部存储路径操作，例如：
   ```
   ln -s /data/data/com.termux/files/home/indexs.js /data/data/com.termux/files/home/destination_folder/indexs.js
   ```
   这样可以避免权限限制。

3. **使用termux-setup-storage命令**: 在Termux中执行`termux-setup-storage`命令，请求对存储的访问权限，这将创建一个软链接到外部存储，使您可以访问外部存储空间。

4. **尝试授予更多权限**: 尝试在Android系统设置中，为Termux应用授予更多的存储和文件访问权限，以便Termux可以在外部存储空间创建符号链接。

请注意，某些操作可能需要root权限或绕过Android系统的安全机制，这可能会对设备的安全性造成风险。如果您对Termux和Android权限不够了解，建议提前备份数据并寻求专业建议。希望这些方法能帮助您解决问题！如果您有其他问题，我将很乐意继续帮助您。


## Reference

### 参考博文

1. https://blog.csdn.net/xiao_yi_xiao/article/details/120470295 - *Termux详细教程！欧晨eli的博客-CSDN博客termux* [原文](https://www.sqlsec.com/2018/05/termux.html)

2. https://zhuanlan.zhihu.com/p/95865982 - *极致安卓之—Termux安装完整版Linux - 知乎*

3. ~~http://zxlwpq.com/huodong/31018.html - *Termux 高级终端安装使用配置教程(建议PC)*~~

4. https://zhuanlan.zhihu.com/p/40740388 - *要啥自行车之Termux:将我们的安卓手机打造成全能的服务器 - 知乎*

5. https://www.cnblogs.com/heiu/p/14757410.html - *安装一些服务：termux奇门遁甲*

6. https://blog.csdn.net/m0_59677938/article/details/124903218 - *废旧手机安装Syncthing作为文件服务器_m0_59677938的博客-CSDN博客*

7. https://blog.csdn.net/freeking101/article/details/122725389 - *Android 手机的高级终端 Termux 安装使用、busybox_擒贼先擒王的博客-CSDN博客*

8. https://termux-wiki.zsxwz.com/ - *termux安装 - zsxwz-termux-wiki*

9. https://p3terx.com/archives/termux-tutorial-1.html - *Termux 使用教程 #1 - Android 手机安装 Linux - P3TERX ZONE*

    1. https://p3terx.com/archives/termux-tutorial-2.html - *Termux 使用教程 #2 - 打造手机上的最强终端 - P3TERX ZONE*

10. https://www.ngui.cc/article/show-846681.html - *Termux 教程|完整的 termux 命令*
