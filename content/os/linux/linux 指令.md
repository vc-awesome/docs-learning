## ???

源码安装与一键安装

## 使用教程

https://wangdoc.com/bash/ - *Bash 脚本教程 - 网道*

- [x] https://wangdoc.com/bash/grammar - *Bash 的基本语法 - Bash 脚本教程 - 网道*

## 问题搜索

[linux两条命令一起执行 - 百度](https://m.baidu.com/s?ie=UTF-8&wd=linux%E4%B8%A4%E6%9D%A1%E5%91%BD%E4%BB%A4%E4%B8%80%E8%B5%B7%E6%89%A7%E8%A1%8C&from=1029078n)

## 命令大全

https://www.runoob.com/linux/linux-command-manual.html - *Linux 命令大全 | 菜鸟教程*

https://wangchujiang.com/linux-command/ - *Linux命令搜索引擎 命令，Linux Linux命令搜索引擎 命令详解：最专业的Linux命令大全，内容包含Linux命令手册、详解、学习，值得收藏的Linux命令速查手册。 - Linux 命令搜索引擎*

- https://github.com/jaywcjlove/linux-command - *GitHub - jaywcjlove/linux-command: Linux命令大全搜索工具，内容包含Linux命令手册、详解、学习、搜集。https://git.io/linux*

## 常用命令

### 切换目录

[cd](https://www.runoob.com/linux/linux-comm-cd.html) - _切换用户当前工作目录_

文件及目录以 `.` 开头的为隐藏文件或目录  
`cd ~` - _`~`表示根目录，目录位于 `/root`_

### 查看路径

[pwd](https://www.runoob.com/linux/linux-comm-pwd.html) - *显示当前工作目录的绝对路径*

[whereis](https://www.runoob.com/linux/linux-comm-whereis.html) - _查找二进制程序、代码等相关文件路径_

[which](https://www.runoob.com/linux/linux-comm-which.html) - _查找并显示给定命令的绝对路径_

### 创建目录

`mkdir [目录名]`



### 删除目录

`rm -r [目录名]`



### 创建文件

`touch [文件名]`



### 删除文件

`rm [文件名]`



### 查看当前目录

查看目录下面有多少文件以及文件的名字

`ls`

`ls -l` - _查看所有文件的属性_



### 编辑文件

`vim [文件名]`



### 文件写入

`echo 'runoob.com' > test.txt`



### 查看文件内容

`cat [文件名] `



### 清屏

`clear`



### 查看文件指定行

`head -3 [文件名]`



### 修改用户密码

`id` - _查看登录用户信息_

`passwd` - _修改root密码_

`passwd [用户名]` - _修改其他用户密码_



### 复制文件或文件夹

`cp [选项] [源文件或目录] [目标文件或目录]`



### 退出登录

`exit`

