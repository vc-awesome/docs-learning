_注：_

*1. 使用 [Github Pages](https://pages.github.com/) + [Docsify](https://github.com/docsifyjs/docsify/) 部署网站，在编辑文件时（**本地部署的测试环境可能不受影响**），链接的文件名必须和实际文件名的大小写一致。*

*例如：  
文件名：README.md  
✅ `[Apps](/tools/README.md)`  
❌ `[Apps](/tools/readme.md)`*

_测试：  
✅ https://docsify.js.org/#/README.md  
❌ https://docsify.js.org/#/readme.md_

*2. Markdown `展开/收起` 功能*

_可参考：[Markdown in html tag](https://docsify.js.org/#/helpers?id=markdown-in-html-tag)_

_> 第 1 种_

<details><summary><i style="color:red">展开/收起</i></summary>

- 主页：https://atom.io/

- GitHub：https://github.com/atom/atom
</details>

_> 第二种_

- :P

- <details><summary><i style="color:red">SEE MORE >></i></summary>

    https://blog.csdn.net/gufenchen/article/details/90895856 - _常用的几款抓包工具_
</details>

_> 第三种_

1. :)
    <details><summary><i style="color:red">展开/收起</i></summary>

    1. 主页：https://atom.io/

    2. GitHub：https://github.com/atom/atom
</details>


_> 第四种（复杂）_

> _先编辑成第一种方式，再一步一步进行缩进操作_

1. ✅ [miniserve](https://github.com/svenstaro/miniserve/releases) - *🌟 For when you really just want to serve some files over HTTP right now!* *（via [文件下载和上传功能服务器搭建配置](https://blog.csdn.net/weixin_42039699/article/details/118356050)）*

    <details><summary><i style="color:red">SEE MORE >></i></summary>

    **在 windows 中使用**

    方式一：windows 系统工具 cmd 中执行下列命令（常规用法）

    ```powershell
    # 进入程序存放目录，打开 cmd，然后执行
    miniserve-v0.19.5-x86_64-pc-windows-msvc.exe -u -q
    ```
    方式二：让程序后台运行
    1. 在同级目录新建 `miniserve.bat` 文件，复制一下内容
        ```powershell
        @echo off

        REM powershell Start-Process -WindowStyle hidden -FilePath "miniserve-v0.19.5-x86_64-pc-windows-msvc.exe" -ArgumentList "-u -q"
        REM powershell Get-Process | where {$_.processname -eq 'miniserve-v0.19.5-x86_64-pc-windows-msvc'} | Stop-Process -Force

        REM 查看进程是否存在，并不显示错误（2>nul）
        powershell get-process -name miniserve-v0.19.5-x86_64-pc-windows-msvc 2>nul
        if %errorlevel% == 0 (
          REM 存在
          REM powershell kill -processname miniserve-v0.19.5-x86_64-pc-windows-msvc
        ) else (
          REM 不存在
          powershell Start-Process -WindowStyle hidden "miniserve-v0.19.5-x86_64-pc-windows-msvc.exe" -ArgumentList """-u -q"""
        )

        REM 批处理中的变量一般需要用%来扩展,详见特殊符号一节
        REM pause>nul
        pause
        REM exit
        ```
    2. 双击执行新建的文件，程序进入后台执行

</details>


