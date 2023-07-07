## 使用教程

https://wangdoc.com/bash/ - *Bash 脚本教程 - 网道*

1. https://wangdoc.com/bash/grammar - *Bash 的基本语法 - Bash 脚本教程 - 网道*
1. https://wangdoc.com/bash/readline - *Bash 行操作 - Bash 脚本教程 - 网道*

### 行操作

- <kbd>Ctrl</kbd> + <kbd>a</kbd>：移到行首。
- <kbd>Ctrl</kbd> + <kbd>e</kbd>：移到行尾。
- <kbd>Ctrl</kbd> + <kbd>d</kbd>：删除光标位置的字符（delete）。
- <kbd>Ctrl</kbd> + <kbd>w</kbd>：删除光标前面的单词。
- <kbd>Ctrl</kbd> + <kbd>k</kbd>：剪切光标位置到行尾的文本。
- <kbd>Ctrl</kbd> + <kbd>u</kbd>：剪切光标位置到行首的文本。

更多操作方式请参见：https://wangdoc.com/bash/readline - *Bash 行操作 - Bash 脚本教程 - 网道*

## 问题搜索

1. [linux两条命令一起执行 - 百度](https://www.baidu.com/s?wd=linux%E4%B8%A4%E6%9D%A1%E5%91%BD%E4%BB%A4%E4%B8%80%E8%B5%B7%E6%89%A7%E8%A1%8C)

   选项一：分号(;)运算符（推荐使用选项二、三）

   例：`ls ; pwd ; whoami`

   选项二：逻辑与运算符(&&)

   例：`mkdir MyFolder && cd MyFolder`

   选项三：逻辑or运算符(||)

   例：`[ -d ~/MyFolder ] || mkdir ~/MyFolder`

## 命令大全

1. https://www.runoob.com/linux/linux-command-manual.html - *Linux 命令大全 | 菜鸟教程*

2. https://wangchujiang.com/linux-command/ - *Linux命令搜索引擎 命令，Linux Linux命令搜索引擎 命令详解：最专业的Linux命令大全，内容包含Linux命令手册、详解、学习，值得收藏的Linux命令速查手册。 - Linux 命令搜索引擎*

   - https://github.com/jaywcjlove/linux-command - *GitHub - jaywcjlove/linux-command: Linux命令大全搜索工具，内容包含Linux命令手册、详解、学习、搜集。https://git.io/linux*


## 常用命令

> 以下的命令可以点击对应的链接，进入网页查看使用实例。

### 查看命令帮助文档

`man` - *查看Linux中的指令帮助*

https://wangchujiang.com/linux-command/c/man.html - *man 命令，Linux man 命令详解：查看Linux中的指令帮助 - Linux 命令搜索引擎*

`help` - *该命令是bash内建命令，用于显示bash内建命令的帮助信息。*

https://wangchujiang.com/linux-command/c/help.html - *help 命令，Linux help 命令详解：该命令是bash内建命令，用于显示bash内建命令的帮助信息。 - Linux 命令搜索引擎*该命令是bash内建命令，用于显示bash内建命令的帮助信息。

`info` - *Linux下 info 格式的帮助指令*

参考：

https://blog.csdn.net/Zhi_osX/article/details/80146259 - *linux命令-查看命令帮助文档_Zhi_osX的博客-CSDN博客*

### 文件权限管理

https://www.runoob.com/linux/linux-comm-chmod.html - *Linux chmod 命令 | 菜鸟教程*

`ls -l` - *查看文件权限*

`chmod` - *控制用户对文件的权限的命令*

`chmod +x `<文件名> - *给指点文件增加可执行权限*

### 文件基本属性

https://www.runoob.com/linux/linux-file-attr-permission.html - *Linux 文件基本属性 | 菜鸟教程*


### 查看当前目录

查看目录下面有多少文件以及文件的名字

`ls`

`ls -l` - _查看所有文件的属性_

`ls -a` - *显示所有文件（包含隐藏文件）*

`ls -R` - *递归显示目录中的所有文件和子目录*

https://www.runoob.com/linux/linux-comm-ls.html - *Linux ls命令 | 菜鸟教程*

```sh
tree
```
https://www.runoob.com/linux/linux-comm-tree.html - *Linux tree命令 | 菜鸟教程*


### 切换目录

[cd](https://www.runoob.com/linux/linux-comm-cd.html) - _切换用户当前工作目录_

文件及目录以 `.` 开头的为隐藏文件或目录

`cd ~` - _**~** 表示根目录，目录位于 **/root**_


### 查看路径

[pwd](https://www.runoob.com/linux/linux-comm-pwd.html) - *显示当前工作目录的绝对路径*

[whereis](https://www.runoob.com/linux/linux-comm-whereis.html) - _查找二进制程序、代码等相关文件路径_

实例：

```sh
whereis node
```

输出：`node: /Users/caiyongwen/.nvm/versions/node/v15.14.0/bin/node /Users/caiyongwen/.nvm/versions/node/v15.14.0/share/man/man1/node.1`

[which](https://www.runoob.com/linux/linux-comm-which.html) - _查找并显示给定命令的绝对路径_


### 创建目录

`mkdir [目录名]`


### 删除目录

`rm -r [目录名]`


### 创建文件

`touch [文件名]`


### 删除文件

`rm [文件名]`


### 修改文件名

https://www.runoob.com/linux/linux-comm-mv.html - *Linux mv 命令 | 菜鸟教程*

`mv [源文件名] [目标文件名]`

### 文本搜索

https://wangchujiang.com/linux-command/c/grep.html - *grep 命令，Linux grep 命令详解：强大的文本搜索工具 - Linux 命令搜索引擎*

`grep`

实例：`history | grep git` - *搜索命令行历史记录中 输入过 `git` 命令的记录*


### 编辑文件

`vim [文件名]`


### 文件写入

`echo 'runoob.com' > test.txt`


### 查看文件内容

https://www.runoob.com/linux/linux-comm-cat.html - *Linux cat 命令 | 菜鸟教程*

`cat [文件名] `


### 查看文件指定行

`head -3 [文件名]`


### 查看文件属性

```sh
ls -l
```
https://www.runoob.com/linux/linux-comm-ls.html - *Linux ls命令 | 菜鸟教程*

```sh
stat [文件或目录]
```
https://www.runoob.com/linux/linux-comm-stat.html - *Linux stat 命令 | 菜鸟教程*

参考：

1. https://www.linuxprobe.com/linux-properties-permissions.html - *Linux文件之属性与权限详解 | 《Linux就该这么学》*
2.  https://blog.csdn.net/p309654858/article/details/127765811 - *Linux如何查看文件的属性_linux查看文件属性_music score的博客-CSDN博客*


### 复制文件或文件夹

`cp [选项] [源文件或目录] [目标文件或目录]`

### 系统管理

#### 查看系统信息

`uname -a` - *查看版本和内核信息*



#### 环境变量

> 环境变量（environment variables）一般是指在[操作系统](https://baike.baidu.com/item/操作系统/192?fromModule=lemma_inlink)中用来指定操作系统运行环境的一些参数，如：[临时文件夹](https://baike.baidu.com/item/临时文件夹/1061467?fromModule=lemma_inlink)位置和[系统文件夹](https://baike.baidu.com/item/系统文件夹/5328647?fromModule=lemma_inlink)位置等。
>
> 环境[变量](https://baike.baidu.com/item/变量?fromModule=lemma_inlink)是在操作系统中一个具有特定名字的对象，它包含了一个或者多个应用[程序](https://baike.baidu.com/item/程序?fromModule=lemma_inlink)所将使用到的信息。例如[Windows](https://baike.baidu.com/item/Windows/165458?fromModule=lemma_inlink)和[DOS](https://baike.baidu.com/item/DOS/32025?fromModule=lemma_inlink)操作系统中的path环境变量，当要求系统运行一个[程序](https://baike.baidu.com/item/程序/71525?fromModule=lemma_inlink)而没有告诉它程序所在的完整路径时，系统除了在[当前目录](https://baike.baidu.com/item/当前目录/7205107?fromModule=lemma_inlink)下面寻找此程序外，还应到path中指定的路径去找。用户通过设置环境[变量](https://baike.baidu.com/item/变量?fromModule=lemma_inlink)，来更好的运行进程。
>
> —— <https://baike.baidu.com/item/环境变量/1730949> - *环境变量_百度百科*

https://wangdoc.com/bash/variable#环境变量 - *Bash 变量 - Bash 脚本教程 - 网道*

- 查看环境变量

  `env` 或者 `printenv`

- 设置环境变量

  `export NVM_NODEJS_ORG_MIRROR=https://mirrors.ustc.edu.cn/node/` - *暂时性修改环境变量，终端窗口关闭后会重置*

  `gedit /etc/profile` - *永久修改 linux 环境变量*

  参考：

  1. https://blog.csdn.net/qq_36393978/article/details/130683444 - *Linux 系统修改环境变量的方法_linux 修改环境变量_Imagine Miracle的博客-CSDN博客*

  2. https://m.php.cn/faq/486664.html - *怎样修改linux的环境变量-linux运维-PHP中文网*

- 移除环境变量

  `unset NVM_NODEJS_ORG_MIRROR`

#### 查看 Shell 版本

方式 1：`echo $0`

方式 2：`ps -p $$`

方式 3：`cat /etc/shells`

参考：https://www.dbs724.com/63477.html - *Linux 查看 Shell 版本的方法（linux查看shell版本）-数据库远程运维*

#### 查看当前用户

https://www.runoob.com/linux/linux-comm-whoami.html - *Linux whoami命令 | 菜鸟教程*

`whoami` - *显示自身用户名称。*

#### 修改用户密码

`id` - _查看登录用户信息_

`passwd` - _修改root密码_

`passwd [用户名]` - _修改其他用户密码_

#### 退出登录

`exit`

### 清屏

`clear`

## 常见问题

### 源码编译安装与一键安装

1. https://www.php.net/manual/zh/install.pecl.phpize.php - *PHP: 用 phpize 编译共享 PECL 扩展库 - Manual*

2. https://www.bt.cn/bbs/forum.php?mod=viewthread&tid=10153 - *安装第三方PHP扩展示例 - Linux面板 - 宝塔面板论坛*

3. https://www.runoob.com/nodejs/nodejs-install-setup.html - *Node.js 安装配置 | 菜鸟教程* （🫱 查看文档标题「CentOS 下源码安装 Node.js」下的内容）
