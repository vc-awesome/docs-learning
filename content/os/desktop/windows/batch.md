# 批处理

## 简介

> 批处理（Batch Processing）是一种计算机技术，允许用户通过批处理文件（通常以 `.bat` 或 `.cmd` 为扩展名）批量执行一系列命令。这些文件在 Windows 命令行环境（如 Command Prompt 或 PowerShell）中运行，用于自动化重复性任务、系统维护、软件安装和配置等。

主要特点：

1. **自动化**：批处理文件可以自动执行一系列命令，无需人工干预，适用于自动化日常任务。
2. **简单易用**：编写批处理文件不需要高级编程技能，熟悉基本的命令行操作即可上手。
3. **灵活性**：批处理文件可以通过参数传递、条件判断和循环等控制结构实现复杂的逻辑。

使用场景：

1. **系统维护**：如备份文件、清理临时文件等。
2. **软件安装**：自动化安装和配置软件。
3. **日志管理**：定期收集和归档日志文件。
4. **数据处理**：批量处理文本文件或执行数据转换。

批处理文件在日常计算机操作和系统管理中非常实用，是系统管理员和开发者常用的工具之一。

## 官方

暂无

## 教程

1. https://www.w3cschool.cn/pclrmsc/ - *批处理入门手册_w3cschool*
2. https://www.w3cschool.cn/dosmlxxsc1/ - *DOS 命令学习手册_w3cschool*
3. https://www.bookstack.cn/books/zhaoqingqing-bat - *《Windows 批处理(bat)语法大全》 - 书栈网 · BookStack*
4. https://wsgzao.github.io/post/windows-batch/ - *Windows批处理(cmd/bat)常用命令小结 | HelloDog*
5. https://blog.csdn.net/csfchh/article/details/106795352 - *bat脚本：快速入门_bat代码教学-CSDN博客*
6. https://www.zhihu.com/question/34941855 - *“批处理从入门到精通”，我都应该看些什么书籍？ - 知乎*

参考：

1. https://baike.baidu.com/item/bat/365230 - *bat （批处理文件类型）*
2. <https://www.jianshu.com/p/024de46ef9c4/> - *BAT命令大全*
3. https://blog.csdn.net/qq_26226375/article/details/122882619/ - *windows bat脚本学习一（基础指令）*
4. https://zhuanlan.zhihu.com/p/446337414 - *.bat批处理命令常用操作大全 - 知乎*
5. https://blog.csdn.net/qq_40127119/article/details/109744085/ - *bat脚本，判断一个进程是否存在，持续检测某进程是否存在。*
6. https://blog.csdn.net/weixin_30805181/article/details/113560534/ - *cmd执行bat结果不回显_批处理中屏蔽错误信息 nul 2>nul 的用法 (cmd>nul空格2>nul)*
7. https://blog.csdn.net/qq_43331089/article/details/124223804 - *【精选】bat 脚本中 For /f 中的 Delims 和 Tokens 总结_bat for tokens_伐尘的博客 - CSDN 博客*

## 安装

暂无

## 快速入门

### 常见命令

- `echo`：显示消息或打开/关闭命令回显。
- `@echo off`：关闭批处理文件的命令回显，只显示输出结果。
- `pause`：暂停执行并等待用户按任意键继续。
- `rem`：添加注释，不会被执行。
- `if`：条件判断语句。
- `goto`：跳转到指定标签。
- `for`：循环语句。
- `set`：设置或显示环境变量。

### 示例

#### 简单的批处理文件

```batch
@echo off
echo Hello, World!
pause
```

这个文件执行后会显示 "Hello, World!" 并暂停，等待用户按任意键继续。

#### 带条件判断的批处理文件

```batch
@echo off
set /p name=Enter your name:
if "%name%"=="admin" (
    echo Welcome, admin!
) else (
    echo Hello, %name%!
)
pause
```

这个文件会提示用户输入名字，如果输入的是 "admin"，则显示 "Welcome, admin!"，否则显示 "Hello, [name]!"。

## 设置

暂无

## 用法

1. https://www.52pojie.cn/thread-1637168-1-1.html - *bat运行从注册表里数值数据来获取安装路径的软件 - 『悬赏问答区』 - 吾爱破解 - LCG - LSG |安卓破解|病毒分析|www.52pojie.cn*
2. https://zhidao.baidu.com/question/750041984862011732/answer/3464204113.html - *批处理for循环中的含空格的路径怎样赋值*
3. https://www.cnblogs.com/Onlyou/p/4357522.html - *关于cmd中执行命令路径包含空格的解决办法 - SZ_HorsePower - 博客园*
4. https://blog.csdn.net/weixin_42253874/article/details/124146971 - *bat命令 获取当前盘符 路径 写环境变量_bat 获取当前盘符-CSDN博客*

## 常见问题

- `.bat` 批处理文件，运行时一直重复执行第一条命令

  1. 自己的脚本文件名称不能与 `cmd` 系统命令重复

     https://blog.csdn.net/fanticool/article/details/120759782 - *为什么.bat脚本不断重复执行同一命令*

     http://t.zoukankan.com/glory-yl-p-14665886.html - *shutdown.bat 批处理文件，运行时一直重复执行第一条命令*

  2. 编写 `.bat` 脚本时，文件的内容，不能调用自身

     举例：假如我们写了个脚本，并命名为 `self.bat`，然后脚本内容又包含了 `self *` 指令，那么双击执行该脚本时，将会不断显示该命令，而没有执行一次该脚本即等待退出。因此，我们需要保证自己的脚本文件名称不能与自身名称一样。

     https://jingyan.baidu.com/article/3a2f7c2ec7bbfb26afd61112.html - *bat程序连续执行不能退出关闭及其妙用*

