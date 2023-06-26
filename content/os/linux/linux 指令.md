## 使用教程

https://wangdoc.com/bash/ - *Bash 脚本教程 - 网道*

1. https://wangdoc.com/bash/grammar - *Bash 的基本语法 - Bash 脚本教程 - 网道*

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

### 文件权限管理

https://www.runoob.com/linux/linux-comm-chmod.html - *Linux chmod 命令 | 菜鸟教程*

`chmod` - *控制用户对文件的权限的命令*

### 文件基本属性

https://www.runoob.com/linux/linux-file-attr-permission.html - *Linux 文件基本属性 | 菜鸟教程*


### 查看当前目录

查看目录下面有多少文件以及文件的名字

`ls`

`ls -l` - _查看所有文件的属性_

`ls -a` - *显示所有文件（包含隐藏文件）*

https://www.runoob.com/linux/linux-comm-ls.html - *Linux ls命令 | 菜鸟教程*

```sh
tree
```
https://www.runoob.com/linux/linux-comm-tree.html - *Linux tree命令 | 菜鸟教程*


### 切换目录

[cd](https://www.runoob.com/linux/linux-comm-cd.html) - _切换用户当前工作目录_

文件及目录以 `.` 开头的为隐藏文件或目录  
`cd ~` - _`~`表示根目录，目录位于 `/root`_


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


### 清屏

`clear`


### 复制文件或文件夹

`cp [选项] [源文件或目录] [目标文件或目录]`

### 系统管理

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

## 常见问题

### 源码编译安装与一键安装

https://www.bt.cn/bbs/forum.php?mod=viewthread&tid=10153 - *安装第三方PHP扩展示例 - Linux面板 - 宝塔面板论坛*
