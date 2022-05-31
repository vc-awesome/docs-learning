?> CLI（Command-Line Interface，命令行界面）
<https://baike.baidu.com/item/命令行界面/9910197>

## 语法格式

- 👍 https://docs.microsoft.com/zh-CN/windows-server/administration/windows-commands/command-line-syntax-key - *命令行语法项 | Microsoft Docs*

  | 表示法                          | 说明                              |
  | :------------------------------ | :-------------------------------- |
  | 不含方括号或大括号的文本        | 必须按所显示键入的项。            |
  | `<Text inside angle brackets>`  | 必须为其提供值的占位符。          |
  | `[Text inside square brackets]` | 可选项。                          |
  | `{Text inside braces}`          | 一组必需的项。 你必须选择一个。   |
  | 竖线 `(\|)`                     | 互斥项的分隔符。 你必须选择一个。 |
  | 省略号 `(…)`                    | 可重复使用多次的项。              |

- https://blog.csdn.net/chenweiaiyanyan/article/details/44835407 - *bash下. : () {} [] [[]] (())的解释*

- https://lijunde.blog.csdn.net/article/details/88919530 - *Linux命令行帮助文档命令语法公式格式详解和Git命令语法格式解读（最详细解释，关键词:Ubuntu,Terminal,终端,Gtibash,Git,Github,系统,实战,操作,理解）*

- https://blog.csdn.net/weixin_42683556/article/details/115725069 - *命令行帮助文档语法格式详解*

- https://blog.csdn.net/u013867301/article/details/103513379 - *命令行格式*

- https://wk.baidu.com/view/cf9a0c79834d2b160b4e767f5acfa1c7aa008288 - *命令行参数语法格式*

- https://blog.csdn.net/Pipcie/article/details/106063407 - *linux命令语法格式*

- https://dandelioncloud.cn/article/details/1469136116061413378 - *windows中dos命令汇总及获取管理员权限*

- https://jingyan.baidu.com/article/48206aeaabc850606ad6b3d6.html - *如何在电脑中查看命令行语法表示法？*



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

  Via http://www.dayanzai.me/dos-commands-overview.html - *DOS 命令：概述以及常用命令解释*

- `cls`

  清除"命令提示符"窗口

  https://docs.microsoft.com/zh-cn/windows-server/administration/windows-commands/cls

- `ipconfig`

  显示所有当前的 TCP/IP 网络配置值，并刷新动态主机配置协议 (DHCP) 和域名系统 (DNS) 设置

  https://docs.microsoft.com/zh-cn/windows-server/administration/windows-commands/ipconfig

- `ver`

  显示操作系统版本号

  https://docs.microsoft.com/zh-cn/windows-server/administration/windows-commands/ver

---

- `netstat`

  https://docs.microsoft.com/zh-cn/windows-server/administration/windows-commands/netstat

  - `netstat -ano` 列出所有端口的情况

  - `netstat -aon|findstr "xxx"` 查看被占用端口对应的 PID，xxx 表示输入的 PID

- `tasklist`

  https://docs.microsoft.com/zh-cn/windows-server/administration/windows-commands/tasklist

  - `tasklist|findstr "xxx"` 查看哪个进程或程序占用 PID，xxx 表示输入的 PID
  - `taskkill /f /t /im xxx` 结束停止指定进程或程序，xxx 表示程序名

---

- `rd`

  删除目录

  https://docs.microsoft.com/zh-cn/windows-server/administration/windows-commands/rd

  - `rd xxx：\wo` 删除文件夹，xxx 表示盘符 （只能删除为空文件夹）
  - `rd /s /q xxx：\wo` 删除文件夹及内容，xxx 表示盘符

- `del`

  删除一个或多个文件

  https://docs.microsoft.com/zh-cn/windows-server/administration/windows-commands/del

  `del xxx：\123.txt` 删除文件，xxx 表示盘符

- `path`

  查看环境变量

  https://docs.microsoft.com/zh-cn/windows-server/administration/windows-commands/path



## FAQs

http://www.dayanzai.me/dos-commands-overview.html - *DOS 命令：概述以及常用命令解释*
