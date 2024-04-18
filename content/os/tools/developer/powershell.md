# PowerShell

## 简介

> PowerShell for every system!

![GitHub last commit](https://img.shields.io/github/last-commit/PowerShell/PowerShell?logo=github&color=blue)
![GitHub Release Date - Published_At](https://img.shields.io/github/release-date/PowerShell/PowerShell?display_date=published_at&logo=github)
![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/PowerShell/PowerShell?logo=github)
![GitHub Repo stars](https://img.shields.io/github/stars/PowerShell/PowerShell?style=social)

## 官方

https://github.com/PowerShell/PowerShell - *PowerShell for every system!*

https://docs.microsoft.com/zh-cn/powershell/ - *PowerShell 文档 - PowerShell | Microsoft Docs*

https://baike.baidu.com/item/Windows%20Power%20Shell/693789/ - *Windows Power Shell_百度百科*

## 安装

https://learn.microsoft.com/zh-cn/powershell/scripting/install/installing-powershell - *在 Windows、Linux 和 macOS 上安装 PowerShell - PowerShell | Microsoft Learn*

## 入门指南

一些实例：

- 定时任务，支持秒级

    1. 新建 `cron.ps1` 脚本文件，复制以下内容

       ```powershell
       #此例子为每5分钟一次的定时任务，通过设置$step和$add可以实现延时执行任务。
       function waitsec {
           $step = 300 #设置间隔
           $add = 0 #设置延时
           $t = (get-date)
           $step-(($t.Hour*3600 + $t.Minute * 60 + $t.Second) % $step) + $add
       }
       
       write-host "running...... please wait" (waitsec)"S" 
       Start-Sleep -s (waitsec)
       while(1) {
           #执行代码
           get-date
           curl -uri 'http://192.168.31.105:8081/api/news/lists' -body 'type=2' -method 'POST'
           #……
           Start-Sleep -s (waitsec)
       }
       
       ```

    2. 打开 `powershell`，执行下列链接中的命令
         http://www.xitongcheng.com/jiaocheng/win10_article_60003.html - *win10用powershell执行ps1文件的方法图文教程*

参考：

1. https://www.aspirantzhang.com/learning/powershell-script-code.html - *PowerShell脚本(.ps1) 实用代码*

2. https://blog.csdn.net/qq_43711892/article/details/124503002/ - *PowerShell让系统可以执行.ps1文件*

3. https://blog.csdn.net/WPwalter/article/details/107034692/ - *在 PowerShell 里根据进程名杀掉进程*

4. https://www.5axxw.com/questions/content/7v4hz8/ - *当进程不存在时，如何使用powershell杀死进程而不出错*

5. https://blog.csdn.net/cumai3211/article/details/109042866/ - *powershell进程_应用程序无响应？ 这是使用PowerShell杀死进程的方法*

6. https://www.it1352.com/2340975.html - *使用 bat 启动 Powershell 脚本*

## 快速入门

暂无


## 设置

暂无


## 常见问题

暂无


## 参考

暂无

