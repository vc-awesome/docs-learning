## Introduction


> <img src="https://f-droid.org/repo/com.termux/en-US/icon_7jMZ7XD80oeucmGEaTwktIRZexLtGWvJfKdVD6Wu2SI=.png" alt="f-droid Icon" loading="lazy" decoding="async" align="left" width="78" hspace="10" vspace="0"> Termux is an Android terminal emulator and Linux environment app that works directly with no rooting or setup required. A minimal base system is installed automatically - additional packages are available using the APT package manager.


## Official

Website：https://termux.dev/ - *Termux | The main termux site and help pages.*

Wiki：https://wiki.termux.com/wiki/ - *Termux Wiki*

GitHub：https://github.com/termux - *Android terminal emulator and Linux environment.*

## Install

GitHub：https://github.com/termux/termux-app - *Termux - a terminal emulator application for Android OS extendible by variety of packages.*

F-Droid：https://f-droid.org/en/packages/com.termux/ - *Termux | F-Droid - Free and Open Source Android App Repository*


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

https://www.xdbcb8.com/archives/958.html - *碎片化学习Python的又一神作：termux*

## Getting started

https://www.ruanyifeng.com/blog/2019/07/termux-tutorial.html - *Termux 入门教程：架设手机 Server 下载文件 - 阮一峰的网络日志*

### 镜像源

开源镜像源：

1. https://mirrors.tuna.tsinghua.edu.cn/help/termux/ - *termux | 镜像站使用帮助 | 清华大学开源软件镜像站 | Tsinghua Open Source Mirror*
2. https://mirrors.ustc.edu.cn/help/termux.html - *Termux 源使用帮助 — USTC Mirror Help 文档*

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

官方镜像源：

_via https://wiki.termux.com/wiki/Package_Management#Official_repositories - *Package Management - Termux Wiki*_

```  sh
termux-change-repo
```


### 常用目录

由于 Termux 只作为一个安卓 APP 存在，并不是一个完整的 Linux 系统，所以不能直接使用 /, /usr 等路径。Termux 提供了环境变量 `$PREFIX` 来指向用户可以使用的“根目录”（实际为 `/data/data/com.termux/files/usr` ），而用户通常意义上的家目录（ home，即 ~ ）为 `/data/data/com.termux/files/home` 。一般只在这两个目录进行操作。

如何访问手机文件：使用 `termux-setup-storage` 命令，Termux 会请求文件访问权限，允许后在 ~ 目录下会生成 storage 的文件链接，其中可以访问 downloads、dcim、music 等常用文件夹，而 shared 文件夹则对应安卓系统的 `/storage/emulated/0` 路径，是主文件目录。

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

https://wiki.termux.com/wiki/Package_Management - *Package Management - Termux Wiki*

#### pkg

```sh
pkg help
```

```
pkg
```

注：*显示命令帮助*

```sh
pkg search <query>
```

注：*Search package by query, for example by name or description part.*

```sh
pkg upgrade
```
注：*Upgrade all installed packages to the latest version. - 将所有已安装的软件包升级到最新版本。*

```sh
pkg install package-name
```

注：*Installing a new package. - 安装新的软件包。*（如果软件包已安装，再次执行此命令，升级当前包到最新版本。）

```sh
pkg reinstall <package>
```

注：*Re-install specified package. - 重新安装指定的软件包。*

```sh
pkg uninstall
```

```sh
pkg uninstall [package name]
```
注：*Uninstall specified packages. Configuration files will be left intact. - 卸载指定的软件包。配置文件将保持不变。*

```sh
pkg list-installed
```
注：*List installed packages. - 列出已安装的软件包。*

```sh
pkg list-all
```

注：*List all available packages. - 列出所有可用的软件包。*

```sh
pkg show <package>
```

注：*Show information about specific package. - 显示有关特定包的信息。*

#### apt

```sh
apt help
```

```sh
apt
```

注：*显示命令帮助*

```sh
apt list
```

\# 列出可升级的软件包

```sh
apt list --upgradable
```

注：*list packages based on package names*

```sh
apt search
```

注：*search in package descriptions*

```sh
apt install
```

注：*install packages*

```sh
apt reinstall
```

注：*reinstall packages*

```sh
apt remove
```

注：*remove packages*

```sh
apt update
```

注：*update list of available packages*

```sh
apt edit-sources
```

注：*edit the source information file*

更多命令，输入 > `apt help` 查看。

#### termux-chroot

```sh
termux-chroot
```

### 插件列表

https://wiki.termux.com/wiki/Main_Page#Addons - *Termux Wiki*

<https://zsxwz.com/2019/06/22/termux几个插件使用/> - *termux几个插件使用 – 姿势小王子*

#### Termux:API
https://wiki.termux.com/wiki/Termux:API - *Termux:API - Termux Wiki*
``` sh
pkg install termux-api
```

Download：https://f-droid.org/en/packages/com.termux.api

#### Termux:Widget

!> ~~没有玩成功。~~

Wiki：
1. https://wiki.termux.com/index.php?title=Termux:Widget&oldid=6237 - *Termux:Widget - Termux Wiki*  
2. https://wiki.termux.com/wiki/Termux:Widget - *Termux:Widget - Termux Wiki*

GitHub：https://github.com/termux/termux-widget - *GitHub - termux/termux-widget: Termux add-on app which adds shortcuts to commands on the home screen.*

Download：https://f-droid.org/en/packages/com.termux.widget

Search：[termux:Widget at DuckDuckGo](https://duckduckgo.com/?q=termux%3AWidget) 🪜

**实践操作**：

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
    nano run-browser-sync.sh
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
    https://blog.csdn.net/qq_36821517/article/details/127836409 - *Termux执行shell脚本报错：cannot execute: required file not found_cannot execute shell_我好高冷的博客-CSDN博客*
    
    https://zhuanlan.zhihu.com/p/399098337?utm_id=0 - *只需一部安卓手机，让全功能VSCode登陆iPad - 知乎*
    - 原文：https://du33169.tech/notes/installCode-serverOnTermux.html - *Termux+Code-Server实现随身全功能VSCode | 岚*
        - https://du33169.tech/linux/TermuxConfiguration.html - *Termux安装配置与使用 | 岚*


## Tool

### 终端工具

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


#### GitUI

简介：

> blazing fast terminal-ui for git written in rust（译文：用 rust 编写的 git 快速终端用户界面）

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


### 应用工具

#### Hacker's Keyboard

https://github.com/klausw/hackerskeyboard - *GitHub - klausw/hackerskeyboard: Hacker's Keyboard (official)*

设置：

键盘模式（portrait），类似于电脑键盘的模式 👇

1. 打开应用设置「SETTINGS」；
2. 进入「Keyboard view settings」 > 「Keyboard mode, portrait」；
3. 选择「Full 5-row layout」。


## FAQ

### 如何将 Apache 的网站默认路径，修改为手机本地存储？

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
    DocumentRoot "/home/storage/shared/documents/markor/github/docs-learning"
    <Directory "/home/storage/shared/documents/markor/github/docs-learning">
    ```
    
    > 快捷修改：
    >
    > 在 vim 中字符串替换（一般操作此步一次即可）
    >
    >
    > ```sh
    > :%s/"\/data\/data\/com.termux\/files\/usr\/share\/apache2\/default-site\/htdocs"/"\/home\/storage\/shared\/documents\/markor\/github\/docs-learning"/
    > ```
    >
    > 在 vim 中字符串搜索
    >
    >
    > ```sh
    > /"\/home\/storage\/shared\/documents\/markor\/github\/docs-learning"
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
    
    1. 打开 “网页浏览器”，输入网址：http://127.0.0.1:8080 ，能访问网页说明配置成功。

### 如何安装 Node.js 和 Browsersync ？

> 一行命令快捷访问 👏
> ``` sh
> cd ~/storage/shared/Documents/markor/GitHub/docs-learning/ &&  browser-sync start --server --files "**/**.*"
> ```


1. ```sh
    pkg install node-lts
    ```
2. ```sh
    pkg upgrade
    ```
    （如果第 1 步命令执行报错🐞，执行此步进行更新）
3. ```sh
    node V
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
- 参考：
    1. https://blog.csdn.net/xiao_yi_xiao/article/details/120470295#t77 - *Termux详细教程！_欧晨eli的博客-CSDN博客*
    2. https://blog.csdn.net/Ximerr/article/details/123503443 - *安卓手机安装 nodejs 时提示cannot link executable “node“ library libcrypto.so.3 问题解决_身价五毛的博客-CSDN博客*


### 如何在 vim 中搜索字符并上下查找？

> 以上述为例

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
