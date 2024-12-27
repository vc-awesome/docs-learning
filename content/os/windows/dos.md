# DOS

## 简介

> [磁盘操作系统](https://baike.baidu.com/item/磁盘操作系统/3793138?fromModule=lemma_inlink)（Disk Operating System），是早期[个人计算机](https://baike.baidu.com/item/个人计算机/3731770?fromModule=lemma_inlink)上的一类[操作系统](https://baike.baidu.com/item/操作系统/192?fromModule=lemma_inlink)。
>
> <cite>—— [DOS_百度百科](https://baike.baidu.com/item/DOS/32025)</cite>

## 教程

1. https://www.w3cschool.cn/dosmlxxsc1/ - *DOS 命令学习手册_w3cschool*
2. http://www.ruanyifeng.com/blog/2011/07/history_of_dos.html - *DOS的历史 - 阮一峰的网络日志*

## 快速入门

> DOS（Disk Operating System，磁盘操作系统）是指一系列由 Microsoft 开发的操作系统，是早期的操作系统家族，广泛应用于个人计算机的管理和文件系统操作。
> 
> 最著名的DOS 系统是由微软开发和维护的 MS-DOS（Microsoft Disk Operating System）。
> 
> DOS 提供了一个命令行界面，用于文件管理、程序执行和系统配置。
> 
> DOS 是一种命令行操作系统，主要用于 IBM PC 及其兼容机。在 DOS 中，用户通过命令行界面（CLI）与计算机进行交互。
> 
> DOS 操作系统的主要特点是基于命令行界面，用户通过键入命令来执行操作。

### DOS 基础教程

#### 基本概念

- **命令行界面**：用户通过键入命令与操作系统交互，而不是通过图形用户界面（GUI）。
- **文件系统**：DOS 使用 FAT 文件系统（FAT12、FAT16、FAT32）来管理磁盘上的文件和目录。
- **批处理文件**：DOS 支持批处理文件（.bat），允许用户自动执行一系列命令。

#### 启动 DOS

可以从启动软盘、硬盘或启动光盘启动 DOS。在现代 Windows 版本中，可以通过命令提示符或 PowerShell 模拟 DOS 环境。


#### 常用 DOS 命令

##### `DIR` 命令

列出当前目录中的文件和子目录。
```dos
DIR
```
使用 `/P` 参数逐页显示，使用 `/W` 参数宽格式显示。
```dos
DIR /P
DIR /W
```

##### `CD` 命令

更改当前目录。
```dos
CD [目录名]
```
返回上一级目录：
```dos
CD ..
```

##### `COPY` 命令

复制文件。
```dos
COPY [源文件] [目标文件]
```
例如，将文件 `file.txt` 复制到目录 `C:\Backup`：
```dos
COPY file.txt C:\Backup
```

##### `DEL` 命令

删除文件。
```dos
DEL [文件名]
```
例如，删除 `file.txt` 文件：
```dos
DEL file.txt
```

##### `REN` 命令

重命名文件或目录。
```dos
REN [旧文件名] [新文件名]
```
例如，将 `file.txt` 重命名为 `document.txt`：
```dos
REN file.txt document.txt
```

##### `MKDIR` 和 `RMDIR` 命令

创建和删除目录。
创建目录：
```dos
MKDIR [目录名]
```
例如，创建名为 `NewFolder` 的目录：
```dos
MKDIR NewFolder
```
删除目录：
```dos
RMDIR [目录名]
```
例如，删除名为 `NewFolder` 的目录：
```dos
RMDIR NewFolder
```

##### `TYPE` 命令

显示文件内容。
```dos
TYPE [文件名]
```
例如，显示 `file.txt` 的内容：
```dos
TYPE file.txt
```

#### 批处理文件

批处理文件是一种在 DOS 环境下自动化执行一系列命令的脚本文件，扩展名为 `.bat`。以下是一个简单的批处理文件示例：

```batch
@echo off
echo Hello, World!
pause
```
将上述内容保存为 `hello.bat` 文件，然后在 DOS 命令行中运行该文件：

```dos
hello
```

#### DOS 与现代系统

尽管 DOS 已经过时，但许多 DOS 命令仍在 Windows 的命令提示符（CMD）中可用。学习 DOS 命令有助于理解现代命令行工具和自动化脚本的基本概念。

#### 资源和参考

- [微软官方文档 - MS-DOS 命令](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/windows-commands)
- [DOSBox](https://www.dosbox.com/)：一个模拟 DOS 环境的开源程序，适用于现代操作系统。

## 入门指南

### 命令

1. <https://baike.baidu.com/item/DOS命令> - *DOS命令_百度百科*
2. https://dandelioncloud.cn/article/details/1469136116061413378 - *windows中dos命令汇总及获取管理员权限-蒲公英云*
