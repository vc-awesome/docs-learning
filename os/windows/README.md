## windows help

https://www.winhelponline.com/ :us: - *Winhelponline » Windows Help, How-Tos, and Tech Reviews*

## windows bat 命令

https://baike.baidu.com/item/bat/365230 - *bat （批处理文件类型）*

<https://www.jianshu.com/p/024de46ef9c4> - *BAT命令大全*

https://blog.csdn.net/qq_26226375/article/details/122882619 - *windows bat脚本学习一（基础指令）*

- 参考文档

  https://blog.csdn.net/qq_40127119/article/details/109744085 - *bat脚本，判断一个进程是否存在，持续检测某进程是否存在。*

  https://blog.csdn.net/weixin_30805181/article/details/113560534 - *cmd执行bat结果不回显_批处理中屏蔽错误信息 nul 2>nul 的用法 (cmd>nul空格2>nul)*

## windows powershell

> PowerShell for every system!

https://github.com/PowerShell/PowerShell :us: - *PowerShell for every system!*

https://docs.microsoft.com/zh-cn/powershell/ :cn: - *PowerShell 文档 - PowerShell | Microsoft Docs*

https://baike.baidu.com/item/Windows%20Power%20Shell/693789 - *Windows Power Shell_百度百科*

- 一些实例

  - 定时任务，支持秒级

    新建 `cron.ps1` 文件，复制以下内容

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

    打开 `powershell`，执行参考文档中的命令

    http://www.xitongcheng.com/jiaocheng/win10_article_60003.html - *win10用powershell执行ps1文件的方法图文教程*

- 参考文档

  https://www.aspirantzhang.com/learning/powershell-script-code.html - *PowerShell脚本(.ps1) 实用代码*

  https://blog.csdn.net/qq_43711892/article/details/124503002 - *PowerShell让系统可以执行.ps1文件*

  https://blog.csdn.net/WPwalter/article/details/107034692 - *在 PowerShell 里根据进程名杀掉进程*

  https://www.5axxw.com/questions/content/7v4hz8 - *当进程不存在时，如何使用powershell杀死进程而不出错*

  https://blog.csdn.net/cumai3211/article/details/109042866 - *powershell进程_应用程序无响应？ 这是使用PowerShell杀死进程的方法*

## windows 快捷键

- 快速显示桌面

  <kbd>windows</kbd> + <kbd>D</kbd>

- 锁屏

  <kbd>windows</kbd> + <kbd>L</kbd>

- 浏览器撤回关闭的标签

  <kbd>ctrl</kbd> + <kbd>shift</kbd> + <kbd>T</kbd>

- 浏览器切换窗口

  <kbd>ctrl</kbd>  + <kbd>tab</kbd>  `从左向右切换`

  <kbd>ctrl</kbd>  + <kbd>shift</kbd>  + <kbd>tab</kbd> `从右向左切换`

- 在指定目录下打开并使用`cmd`

  <kbd>shift</kbd> + <kbd>鼠标右键</kbd> + <kbd>选择“在此处打开命令窗口”</kbd>

- 鼠标拖动任意一个窗口快速`左右左` / `右左右`移动，即可将本窗口以外的窗口最小化，再次按原步骤操作即可还原被最小化的窗口




## windows 字体

打开本机（电脑） `控制面板\所有控制面板项\字体` 查看字体

**参考链接**

<https://support.microsoft.com/zh-cn/windows/如何在-windows-中安装或删除字体-f12d0657-2fc8-7613-c76f-88d043b334b8> - *如何在Windows中安装或删除字体*

https://jingyan.baidu.com/article/22fe7ced0085677103617f01.html - *Win10中怎么添加泰语补充字体*



## windows hyper-v

https://baijiahao.baidu.com/s?id=1682327494844437724 - *Windows虚拟机Hyper-v的安装及使用教程*
