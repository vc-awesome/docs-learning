## windows 官方

Website：https://www.microsoft.com/zh-cn/

Support：https://support.microsoft.com/zh-cn

Docs：

Download：https://www.microsoft.com/zh-cn/download

微软官方商城：https://www.microsoftstore.com.cn/

## windows 系统

https://www.microsoft.com/zh-cn/software-download - *软件下载*

https://support.microsoft.com/zh-cn/windows - *Windows 帮助和学习*

- 家庭版 Home
- 专业版 Professional
- 企业版 Enterprise



### 更新

<https://support.microsoft.com/zh-cn/topic/windows-10-更新助手-3550dfb2-a015-7765-12ea-fba2ac36fb3f> - *Windows 10 更新助手*

微软 Windows 10 易升 *Windows10UpgraderApp.exe*

https://docs.microsoft.com/zh-cn/windows/deployment/ - *部署和更新 Windows 客户端*



### 升级

> 注册表原信息：`HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion`
>
> EditionID ：EnterpriseS
>
> ProductName ：Windows 10 Enterprise 2016 LTSB

Windows10 Enterprise LTSB(LTSC)

https://www.xitongtang.com/class/win10/17128.html - *您可以将Windows 7升级到Windows10 LTSB吗?_系统堂官网*

https://www.xitongbuluo.com/jiaocheng/58592.html - *Win10易升需要联系管理员要？Win10易升需要联系管理员解决方法-系统部落*

https://www.bilibili.com/video/av549495977 - *【更5】若要升级Windows Server 或企业版，请联系系统管理员ltsb ltsc2018 2019 win10系统更新升级失败哔哩哔哩bilibili*

## windows 下载加速

https://www.maxiaobang.com/12017.html - *教你在微软官网不限速下载Windows原版系统镜像文件！ | 马小帮*

- 复制下载链接，打开迅雷下载即可加速

## windows microsoft store

https://apps.microsoft.com/store/apps - *Microsoft 应用程序*

https://www.microsoft.com/store/apps/windows



### 下载加速

https://www.xitongcheng.com/jiaocheng/win10_article_71916.html - *win10微软商店下载速度很慢_win10微软商店下载提速教程－系统城*

<https://www.dogfight360.com/blog/knowledge-base/如何加快微软商店游戏-windows系统更新下载速度/> - *如何加快微软商店游戏/Windows系统更新下载速度 – Dogfight360*

### 卸载应用

https://jingyan.baidu.com/article/a24b33cd682ebf58fe002be5.html - *如何卸载在Microsoft store安装的软件-百度经验*

## windows help

https://www.winhelponline.com/ :us: - *Winhelponline » Windows Help, How-Tos, and Tech Reviews*

https://www.thewindowsclub.com/ :us: - *Windows 11/10 Tips, Tricks, Help, Support, Downloads, Features*

## windows 运行

https://baike.baidu.com/item/%E8%BF%90%E8%A1%8C/13132909 - *运行（Windows组成部分）_百度百科*

### 命令符

`msinfo32` 查看 Microsoft 系统信息

`msconfig` 查看系统配置

`winver` 查看系统版本

`regedit` 打开注册表编辑器

`shell:startup` 打开系统启动文件夹；打开指定文件夹 （`shell:`指定文件夹名称），ps：无法打开系统 Windows 下的任何文件夹

### 系统文件夹

- 命令：`%windir%`

  命令：`%SystemRoot%`

  说明：系统所在目录

  对应路径：C:\WINDOWS

- 命令：`%systemroot%\system32`

  说明：打开 system32 系统文件夹

  对应路径：C:\WINDOWS\system32

## windows bat 脚本

https://baike.baidu.com/item/bat/365230 - *bat （批处理文件类型）*

<https://www.jianshu.com/p/024de46ef9c4/> - *BAT命令大全*

https://blog.csdn.net/qq_26226375/article/details/122882619/ - *windows bat脚本学习一（基础指令）*

- 参考文档

  https://blog.csdn.net/qq_40127119/article/details/109744085/ - *bat脚本，判断一个进程是否存在，持续检测某进程是否存在。*

  https://blog.csdn.net/weixin_30805181/article/details/113560534/ - *cmd执行bat结果不回显_批处理中屏蔽错误信息 nul 2>nul 的用法 (cmd>nul空格2>nul)*

### 常见问题

- .bat 批处理文件，运行时一直重复执行第一条命令

  1. 自己的脚本文件名称不能与 `cmd` 系统命令重复

     https://blog.csdn.net/fanticool/article/details/120759782 - *为什么.bat脚本不断重复执行同一命令*

     http://t.zoukankan.com/glory-yl-p-14665886.html - *shutdown.bat 批处理文件，运行时一直重复执行第一条命令*

  2. 编写 .bat 脚本时，文件的内容，不能调用自身

     举例：假如我们写了个脚本，并命名为 `self.bat`，然后脚本内容又包含了 `self *` 指令，那么双击执行该脚本时，将会不断显示该命令，而没有执行一次该脚本即等待退出。因此，我们需要保证自己的脚本文件名称不能与自身名称一样。

     https://jingyan.baidu.com/article/3a2f7c2ec7bbfb26afd61112.html - *bat程序连续执行不能退出关闭及其妙用*

## windows powershell

> PowerShell for every system!

https://github.com/PowerShell/PowerShell/ :us: - *PowerShell for every system!*

https://docs.microsoft.com/zh-cn/powershell/ :cn: - *PowerShell 文档 - PowerShell | Microsoft Docs*

https://baike.baidu.com/item/Windows%20Power%20Shell/693789/ - *Windows Power Shell_百度百科*

- 一些实例

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

       
    
    2. 打开 `powershell`，执行参考文档中的命令
    
       http://www.xitongcheng.com/jiaocheng/win10_article_60003.html - *win10用powershell执行ps1文件的方法图文教程*

- 参考文档

  https://www.aspirantzhang.com/learning/powershell-script-code.html - *PowerShell脚本(.ps1) 实用代码*

  https://blog.csdn.net/qq_43711892/article/details/124503002/ - *PowerShell让系统可以执行.ps1文件*

  https://blog.csdn.net/WPwalter/article/details/107034692/ - *在 PowerShell 里根据进程名杀掉进程*

  https://www.5axxw.com/questions/content/7v4hz8/ - *当进程不存在时，如何使用powershell杀死进程而不出错*

  https://blog.csdn.net/cumai3211/article/details/109042866/ - *powershell进程_应用程序无响应？ 这是使用PowerShell杀死进程的方法*
  
  
  https://www.it1352.com/2340975.html - _使用 bat 启动 Powershell 脚本_
  

## windows 快捷键

- 快速显示桌面

  <kbd>windows</kbd> + <kbd>D</kbd>

- 锁屏

  <kbd>windows</kbd> + <kbd>L</kbd>

- 在指定目录下打开 `cmd` 程序

  <kbd>shift</kbd> + <kbd>鼠标右键</kbd> + <kbd>选择“在此处打开命令窗口”</kbd>

- 鼠标拖动任意一个窗口快速`左右左` / `右左右`移动，即可将本窗口以外的窗口最小化，再次按原步骤操作即可还原被最小化的窗口




## windows 字体

打开本机（电脑） `控制面板\所有控制面板项\字体` 查看字体

**参考链接**

<https://support.microsoft.com/zh-cn/windows/如何在-windows-中安装或删除字体-f12d0657-2fc8-7613-c76f-88d043b334b8/> - *如何在Windows中安装或删除字体*

https://jingyan.baidu.com/article/22fe7ced0085677103617f01.html - *Win10中怎么添加泰语补充字体*



## windows 开发环境

https://docs.microsoft.com/zh-cn/windows/dev-environment/ - *在 Windows 上设置开发环境 | Microsoft Docs*



## windows hyper-v

https://baijiahao.baidu.com/s?id=1682327494844437724/ - *Windows虚拟机Hyper-v的安装及使用教程*



## windows 模拟 linux 环境

### WSL(Windows Subsystem for Linux)

https://docs.microsoft.com/zh-cn/windows/wsl/ - *适用于 Linux 的 Windows 子系统文档 | Microsoft Docs*

### Cygwin

http://www.cygwin.com/ - *Cygwin*

https://www.jb51.net/softs/102136.html - *Cygwin(模拟Linux环境) v3.1.4 中文官方安装版(附Cygwin安装教程)*

https://www.cnblogs.com/jingchi/p/15912206.html - *Cygwin软件安装及C环境配置*

* **2019/03/15**

  * https://blog.csdn.net/kingboung/article/details/61429388 - *Cygwin，让你拥有Windows下的Linux环境*
  * https://www.oschina.net/question/96889_51688 - *Cygwin中怎么用命令安装软件？*

  - https://www.cnblogs.com/hchacha/p/7147603.html - *win10下安装Cygwin配置gcc编译环境*

  - https://blog.csdn.net/u014207604/article/details/49926207 - *Windows 下安装 swoole 具体步骤*

  - https://www.cnblogs.com/toughhou/p/4113685.html - *Cygwin下软件安装 - apt-cyg*

