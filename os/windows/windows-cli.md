> CLI（Command-Line Interface，命令行界面）  
> <https://baike.baidu.com/item/命令行界面/9910197>

## 语法格式

https://docs.microsoft.com/zh-CN/windows-server/administration/windows-commands/command-line-syntax-key 命令行语法项 | Microsoft Docs

- bash下. : () {} [] [[]] (())的解释 https://blog.csdn.net/chenweiaiyanyan/article/details/44835407

- Linux命令行帮助文档命令语法公式格式详解和Git命令语法格式解读（最详细解释，关键词:Ubuntu,Terminal,终端,Gtibash,Git,Github,系统,实战,操作,理解） https://lijunde.blog.csdn.net/article/details/88919530

- 命令行帮助文档语法格式详解 https://blog.csdn.net/weixin_42683556/article/details/115725069

- 命令行格式 https://blog.csdn.net/u013867301/article/details/103513379

- 命令行参数语法格式 https://wk.baidu.com/view/cf9a0c79834d2b160b4e767f5acfa1c7aa008288

- linux命令语法格式 https://blog.csdn.net/Pipcie/article/details/106063407

- windows中dos命令汇总及获取管理员权限 https://dandelioncloud.cn/article/details/1469136116061413378

- 如何在电脑中查看命令行语法表示法？ https://jingyan.baidu.com/article/48206aeaabc850606ad6b3d6.html 

`cls` 清屏

`ipconfig` 查看 ip 信息

---

`netstat -ano` 列出所有端口的情况

`netstat -aon|findstr "xxx"` 查看被占用端口对应的 PID，xxx 表示输入的 PID

`tasklist|findstr "xxx"` 查看哪个进程或程序占用 PID，xxx 表示输入的 PID

`taskkill /f /t /im xxx` 结束停止指定进程或程序，xxx 表示程序名

---

`rd xxx：\wo` 删除文件夹，xxx 表示盘符 （只能删除为空文件夹）

`rd /s /q xxx：\wo` 删除文件夹及内容，xxx 表示盘符

`del xxx：\123.txt` 删除文件，xxx 表示盘符

`path` 查看环境变量

