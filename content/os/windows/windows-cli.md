# Windows 命令

## 简介

> CLI（Command-Line Interface，命令行界面）
>
> <cite>—— [命令行界面_百度百科](https://baike.baidu.com/item/%E5%91%BD%E4%BB%A4%E8%A1%8C%E7%95%8C%E9%9D%A2/9910197)</cite>


## 教程

https://learn.microsoft.com/zh-cn/windows-server/administration/windows-commands/windows-commands - *Windows 命令 | Microsoft Learn*

## 语法格式

| 表示法                          | 说明                              |
| :------------------------------ | :-------------------------------- |
| 不含方括号或大括号的文本        | 必须按所显示键入的项。            |
| `<Text inside angle brackets>`  | 必须为其提供值的占位符。          |
| `[Text inside square brackets]` | 可选项。                          |
| `{Text inside braces}`          | 一组必需的项。 你必须选择一个。   |
| 竖线 (`\|`)                     | 互斥项的分隔符。 你必须选择一个。 |
| 省略号 (`…`)                    | 可重复使用多次的项。              |

参考：

1. https://docs.microsoft.com/zh-CN/windows-server/administration/windows-commands/command-line-syntax-key - *命令行语法项 | Microsoft Docs*

2. https://blog.csdn.net/chenweiaiyanyan/article/details/44835407 - *bash下. : () {} [] [[]] (())的解释*

3. https://lijunde.blog.csdn.net/article/details/88919530 - *Linux命令行帮助文档命令语法公式格式详解和Git命令语法格式解读（最详细解释，关键词:Ubuntu,Terminal,终端,Gtibash,Git,Github,系统,实战,操作,理解）*

4. https://blog.csdn.net/weixin_42683556/article/details/115725069 - *命令行帮助文档语法格式详解*

5. https://blog.csdn.net/u013867301/article/details/103513379 - *命令行格式*

6. https://wk.baidu.com/view/cf9a0c79834d2b160b4e767f5acfa1c7aa008288 - *命令行参数语法格式*

7. https://blog.csdn.net/Pipcie/article/details/106063407 - *linux命令语法格式*

8. https://dandelioncloud.cn/article/details/1469136116061413378 - *windows中dos命令汇总及获取管理员权限*

9. https://jingyan.baidu.com/article/48206aeaabc850606ad6b3d6.html - *如何在电脑中查看命令行语法表示法？*

## 命令行

- DOS 级别的特殊键盘命令

  除了这些 DOS 命令之外，还有一些类似于 Windows 快捷方式的特殊键盘命令，可以在 DOS 级别工作：

  | 快捷键           | 说明                                                         |
  | ---------------- | ------------------------------------------------------------ |
  | Ctrl + Alt + Del | 重新启动计算机                                               |
  | ESC              | 删除选择                                                     |
  | F1               | 逐个字符重复最后一个命令                                     |
  | F3               | 重复上一个命令                                               |
  | F5               | 返回一行                                                     |
  | F6               | 进入传统的CTRL + Z（^ Z）档案结尾                            |
  | F7               | 显示命令行历史                                               |
  | Pause            | 停止屏幕输出； 几乎可以使用任何键恢复输出                    |
  | Ctrl + C         | 中止您正在键入的行或正在执行的命令。 如果您选择了文本，它不会中止，而是会复制文本。 |
  | Ctrl + P         | 打开和关闭打印机输出                                         |
  | Ctrl + PrintScr  | 打印当前显示的屏幕                                           |
  | Ctrl + S         | 停止屏幕显示                                                 |
  | Ctrl + Break     | 中止命令                                                     |

  参考：

  1. http://www.dayanzai.me/dos-commands-overview.html - *DOS 命令：概述以及常用命令解释*

## 常用命令

- `cls`

  清除"命令提示符"窗口

  https://docs.microsoft.com/zh-cn/windows-server/administration/windows-commands/cls

- `ver`

  显示操作系统版本号

  https://docs.microsoft.com/zh-cn/windows-server/administration/windows-commands/ver

- `path`

  查看环境变量

  https://docs.microsoft.com/zh-cn/windows-server/administration/windows-commands/path

### 网络通讯

- `ping`

  通过发送 Internet 控制消息协议 (ICMP) 回显请求消息，验证与另一台 TCP/IP 计算机的 IP 级别连接情况。
  
  https://learn.microsoft.com/zh-cn/windows-server/administration/windows-commands/ping - *ping | Microsoft Learn*

- `ipconfig`

  显示所有当前的 TCP/IP 网络配置值，并刷新动态主机配置协议 (DHCP) 和域名系统 (DNS) 设置

  https://docs.microsoft.com/zh-cn/windows-server/administration/windows-commands/ipconfig

- `arp`

  显示和修改地址解析协议 (ARP) 缓存中的条目。
  
  https://learn.microsoft.com/zh-cn/windows-server/administration/windows-commands/arp - *arp | Microsoft Learn*

- `netstat`

  显示活动的 TCP 连接数、计算机侦听的端口、以太网统计信息、IP 路由表、IPv4 统计信息（针对 IP、ICMP、TCP 和 UDP 协议），以及 IPv6 统计信息（针对 IPv6、ICMPv6、TCP over IPv6 和基于 IPv6 协议的 UDP）。 在不使用参数的情况下，此命令会显示活动的 TCP 连接数。
 
   https://docs.microsoft.com/zh-cn/windows-server/administration/windows-commands/netstat

  用法：

  - `netstat -ano` 列出所有端口的情况

  - `netstat -aon|findstr "xxx"` 查看被占用端口对应的 PID，xxx 表示输入的 PID

- `tasklist`

  显示本地计算机或远程计算机上当前正在运行的进程列表。

  https://docs.microsoft.com/zh-cn/windows-server/administration/windows-commands/tasklist

  用法：

  - `tasklist|findstr "xxx"` 查看哪个进程或程序占用 PID，xxx 表示输入的 PID
  - `taskkill /f /t /im xxx` 结束停止指定进程或程序，xxx 表示程序名

- `start`

  启动单独的命令提示符窗口以运行指定的程序或命令。
  
  https://learn.microsoft.com/zh-cn/windows-server/administration/windows-commands/start - *start | Microsoft Learn*

- `shutdown`

 让你一次关闭或重启一台本地或远程计算机。
 
 https://learn.microsoft.com/zh-cn/windows-server/administration/windows-commands/shutdown - *shutdown | Microsoft Learn*

### 文件管理

- `echo`

  显示消息或者打开或关闭命令回显功能。 如果不结合任何参数使用，echo 会显示当前回显设置。
  
  https://learn.microsoft.com/zh-cn/windows-server/administration/windows-commands/echo - *echo | Microsoft Learn*

- `rem`

  在脚本、批处理或 config.sys 文件中记录注释。 如果未指定注释，rem 将添加垂直间距。
  
  https://learn.microsoft.com/zh-cn/windows-server/administration/windows-commands/rem - *rem | Microsoft Learn*

- `attrib`

  显示、设置或删除分配给文件或目录的属性。
  
  https://learn.microsoft.com/zh-cn/windows-server/administration/windows-commands/attrib - *attrib | Microsoft Learn*

- `cd`

  显示当前目录的名称或更改当前目录。
  
  https://learn.microsoft.com/zh-cn/windows-server/administration/windows-commands/cd - *cd | Microsoft Learn*

- `copy`

  将一个或多个文件从一个位置复制到另一个位置。
  
  https://learn.microsoft.com/zh-cn/windows-server/administration/windows-commands/copy - *copy | Microsoft Learn*

- `xcopy`

  复制文件和目录，包括子目录。
  
  https://learn.microsoft.com/zh-cn/windows-server/administration/windows-commands/xcopy - *xcopy | Microsoft Learn*

- `ren`

  重命名文件或目录。
  
  https://learn.microsoft.com/zh-cn/windows-server/administration/windows-commands/ren - *ren | Microsoft Learn*

- `move`

  将一个或多个文件从一个目录移动到另一个目录。
  
  https://learn.microsoft.com/zh-cn/windows-server/administration/windows-commands/move - *move | Microsoft Learn*

- `md`

  创建目录或子目录。
  
  https://learn.microsoft.com/zh-cn/windows-server/administration/windows-commands/md - *md | Microsoft Learn*

- `dir`

  显示目录的文件和子目录的列表。
  
  https://learn.microsoft.com/zh-cn/windows-server/administration/windows-commands/dir - *dir | Microsoft Learn*

- `rd`

  删除目录

  https://docs.microsoft.com/zh-cn/windows-server/administration/windows-commands/rd

  用法：

  - `rd xxx：\wo` 删除文件夹，xxx 表示盘符 （只能删除为空文件夹）
  - `rd /s /q xxx：\wo` 删除文件夹及内容，xxx 表示盘符

- `del`

  删除一个或多个文件

  https://docs.microsoft.com/zh-cn/windows-server/administration/windows-commands/del

  用法：

  - `del xxx：\123.txt` 删除文件，xxx 表示盘符

- `find`

  在一个或多个文件中搜索文本字符串，并显示包含指定字符串的文本行。
  
  https://learn.microsoft.com/zh-cn/windows-server/administration/windows-commands/find - *find | Microsoft Learn*

- `findstr`

  搜索文件中的文本模式。
  
  https://learn.microsoft.com/zh-cn/windows-server/administration/windows-commands/findstr - *findstr | Microsoft Learn*

## 常见问题

1. http://www.dayanzai.me/dos-commands-overview.html - *DOS 命令：概述以及常用命令解释*
