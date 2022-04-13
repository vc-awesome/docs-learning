打开`cmd`程序

> 键盘组合键：<kbd>win</kbd> + <kbd>R</kbd> 打开`cmd`后输入命令



查看Microsoft 系统信息 `msinfo32`

查看系统配置 `msconfig`

查看系统版本 `winver`

打开注册表编辑器 `regedit`

打开系统启动文件夹`shell:startup`	打开指定文件夹 （shell:指定文件夹名称）ps：无法打开系统Windows下的任何文件夹



## cli命令

> **CLI**一般指命令行界面  
> <https://baike.baidu.com/item/%E5%91%BD%E4%BB%A4%E8%A1%8C%E7%95%8C%E9%9D%A2/9910197>

清屏 `cls`

查看ip信息 `ipconfig`

列出所有端口的情况 `netstat -ano`

查看被占用端口对应的PID `netstat -aon|findstr "xxx"` xxx表示输入的pid

查看哪个进程或程序占用PID `tasklist|findstr "xxx"` xxx表示输入的pid

结束停止指定进程或程序 `taskkill /f /t /im xxx` xxx表示程序名

删除文件夹 `rd xxx：\wo` xxx表示盘符 （只能删除为空文件夹）

删除文件 `del xxx：\123.txt` xxx表示盘符

删除文件夹及内容 `rd /s /q xxx：\wo` xxx表示盘符

查看环境变量 `path`

