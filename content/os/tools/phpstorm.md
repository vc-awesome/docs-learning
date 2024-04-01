# PhpStorm

## 简介

> JetBrains is a cutting-edge software vendor specializing in the creation of intelligent development tools, including IntelliJ IDEA – the leading Java IDE, and the Kotlin programming language.

## 官方

官网：

1. https://www.jetbrains.com/ - *JetBrains: Essential tools for software developers and teams*

手册：

1. https://www.jetbrains.com/help/phpstorm/2020.3/getting-started.html - *Getting started | PhpStorm*

2. https://www.jetbrains.com/help/phpstorm/2021.2/quick-start-guide-phpstorm.html

GitHub：

1. https://github.com/JetBrains/ - *JetBrains · GitHub*

## 安装

历史版本下载：

https://www.jetbrains.com/phpstorm/download/other.html - *Other Versions - PhpStorm*

- https://blog.csdn.net/qq_29752857/article/details/107050967 - *JetBrains下载历史版本(IDEA、PyCharm、WebStorm、PhpStorm等)*

### 版本

- Windows: PhpStorm 2021.1.4 x64（当前使用）

- macOS: PhpStorm 2021.1.2 x86_64（当前使用）

### 破解

**2022/01/13：**

破解方式：

1. 工具：`ja-netfilter`

   > 💡 此方式适用于 2023.2.1 以下的版本

   手册：

   1. https://zhile.io/2021/11/29/ja-netfilter-javaagent-lib.html - *介绍一个”牛逼闪闪”开源库：ja-netfilter – 知了*

   2. https://zhile.io/2023/09/04/copy-jetbra-in.html - *如何1分钟拥有热佬的网站 – 知了*

   参考：

   1. https://www.lzskyline.com/index.php/archives/157/ - *【屠龙刀】Jetbrain全家桶通杀完美破解方案（含IDEA 2022.3.2） - LzSkyline's Blog*

   2. https://juejin.cn/post/7195586451870351419 - *使用ja-netfilter激活IDEA 2022.2.1 - 掘金*

   3. https://segmentfault.com/a/1190000043383181 - *intellij-idea 插件 ja-netfilter 使用教程 - 个人文章 - SegmentFault 思否*

2. 插件：`IDE Eval Reset` （JetBrains 全家桶无限试用）

   > 💡 此方式适用于 2021.3 以下的版本

   手册：https://zhile.io/2020/11/18/jetbrains-eval-reset-deprecated.html - *Jetbrains系列产品重置试用方法[归档] – 知了*

   参考：https://mrhelloworld.com/jetbrains/ - *一个插件搞定 Jetbrains 系列产品永久试用 - 哈喽沃德先生*

3. ~~工具：`jetbrains-agent`~~

   ~~[Jetbrains2020全系列补丁ZhilePatch jetbrains-agent.jar v3.2.0 绿色版](https://www.jb51.net/softs/672190.html#downintro2 "下载安装包进行破解（破解包：jetbrains_agent_jb51.rar）")~~

   ~~相信破解过 IDEA 的小伙伴，都知道 `jetbrains-agent` 这个工具，没错，就是那个直接拖入到开发工具界面，一键搞定，so easy 的破解工具！这个工具目前已经停止更新了，尽管还有很多小伙伴在使用，但是对新版本 IDE 的支持已经不是很稳定了。下面我会分享一个无线重置 IDE 过期时间的插件，让你不太再为 IDE 频繁时效而烦恼。~~

4. 激活码 `不定期更新`

   > 💡 此方式适用于 2018.2.1 以下的版本

   手册：https://zhile.io/2018/08/25/jetbrains-license-server-crack.html - *Jetbrains系列产品最新激活方法[归档] – 知了*

   参考：

   1. https://jetbra.in/s （链接来源：https://zhile.io/2020/11/18/jetbrains-eval-reset-deprecated.html > 位置：新试用机制）

   2. http://soft-hub.cn/ - *IDEA激活码-WebStorm激活码-PhpStorm激活码-IDEA主题样式-SoftHub*

   3. http://idea.lanyus.com/ - *IntelliJ IDEA 注册码* `暂停提供`

---

**2020/01/07：**

👍 https://www.php.cn/tool/phpstorm/408348.html - *正版phpstorm免费激活步骤（图文详解）-phpstorm-PHP中文网* 「暂停提供（评论区有最新有效注册码）」

---

**2020/05/28：**

~~http://www.shuchengxian.com/article/PWewET2nGB.html~~

~~https://www.frankblog.cn/post/18.html~~

https://www.0daydown.com/tag/phpstorm - *PhpStorm | 下载,Download*

~~http://easycolor.cc/article/4.html~~ *暂停提供（扫码关注公众号） -适用于最新版本（2020版）*

~~http://soft-hub.cn/article/ll2d7f50fa62eb45f0171c5321f9fc926f.zip~~ *查看下载文件创建日期判断是否暂停提供 -适用于最新版本（2020版）*

---

**2020/12/17：**

~~https://tangyulu.com/ - *最新注册码有效连接*~~

## 设置

操作事件：

操作描述：

1. 设置字体大小

    操作步骤：*文件 > 设置 > 编辑器 > Font > 大小 > 设置为16*

2. 设置数组格式化

    操作步骤：*文件 > 设置 > 编辑器 > Code Style > PHP > Wrapping and Braces > 数组初始化*

    https://www.php.cn/tool/phpstorm/441025.html - *phpstorm如何格式化数组-phpstorm-PHP中文网*

3. 设置方法、函数参数提示

    - 打开提示操作步骤：*文件 > 设置 > 编辑器 > 镶嵌提示 > PHP > 勾选 Show name for all arguments*

    - 关闭提示操作步骤：*在代码显示的参数名上方右键点击会出现两个选项，选择第二个 Disable 就可以关闭了*

    参考：https://www.wenjiangs.com/article/phpstorm-parameter-name-hints.html - *PhpStorm 取消函数参数提示 Parameter Name Hints - 文章教程 - 文江博客*

### PHPDoc comments

https://www.jetbrains.com/help/phpstorm/phpdoc-comments.html - *PHPDoc comments | PhpStorm Documentation*

## 用法

### 快捷键

1. 跳转至指定行数

   <kbd>Ctrl</kbd> + <kbd>G</kbd>

2. 单行注释

   <kbd>Ctrl</kbd> + <kbd>/</kbd>

3. 块/多行注释

   <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>/</kbd>

4. 跳至页首

   <kbd>Ctrl</kbd> + <kbd>Home</kbd>

5. 跳至页尾

   <kbd>Ctrl</kbd> + <kbd>End</kbd>

6. 查看最近打开的文件

   <kbd>Ctrl</kbd> + <kbd>E</kbd>

### 断点调试

1. 检查xdebug（在WAMP服务器php.ini中检查，并把[xdebug]中的off设置改为on，php.ini文件中的xdebug默认是关闭的）
2. 右上角 edit config 弹出的窗口中到左上角的绿色“+”号中添加PHP Web Application接口并进行配置
3. PHP web Application
4. 添加server  域名HOST 端口
5. 指明具体的调试脚本URL
6. 指明浏览器Browser
7. 检查xdebug是否开启 on

#### 一、软件环境

> - 运行环境：WAMP
> - PhpStorm版本：2017.2.4
> - PHP Version：5.5.12
> - xdebug版本：php_xdebug-2.2.5-5.5-vc11.dll
> - ps : php版本和xdebug版本一定要相对应

#### 二、配置php.ini文件

默认配置

```php
; XDEBUG Extension

zend_extension = "D:/wamp/bin/php/php5.5.12/zend_ext/php_xdebug-2.2.5-5.5-vc11.dll"
;
[xdebug]
xdebug.remote_enable = off
xdebug.profiler_enable = off
xdebug.profiler_enable_trigger = off
xdebug.profiler_output_name = cachegrind.out.%t.%p
xdebug.profiler_output_dir = "D:/wamp/tmp"
xdebug.show_local_vars=0
```

修改后的配置

```php
; XDEBUG Extension

zend_extension = "D:/wamp/bin/php/php5.5.12/zend_ext/php_xdebug-2.2.5-5.5-vc11.dll"
;
[xdebug]
xdebug.remote_enable = on
xdebug.remote_host="127.0.0.1"
xdebug.port=9000
xdebug.profiler_enable = on
xdebug.profiler_enable_trigger = off
xdebug.profiler_output_name = cachegrind.out.%t.%p
xdebug.remote_autostart=on
xdebug.profiler_output_dir = "D:/wamp/tmp"
xdebug.show_local_vars=0
xdebug.idekey = PHPSTORM
```

> 修改后重启WAMP的所有服务
> 在浏览器地址栏通过phpinfo查看配置后的信息，出现如下配置则代表修改成功

![image](https://i.imgur.com/zNTKvcJ.png)
![image](https://images2015.cnblogs.com/blog/1103562/201702/1103562-20170216101002847-1777096143.png)

#### 三、设置PhpStorm

1. `File->Settings` 页面
   ![image](https://i.imgur.com/doc67cW.png)

2. `PHP->Server` 页面
   新建一个
   `name为localhost` [可自定义]
   `Host为www.study.com` [WAMP中可用的域名]
   `Port:80`
   `Debugger:Xdebug`
   ![image](https://i.imgur.com/ui95DUx.png)

3. `PHP->Debug` 页面
   Debug Port设置为9000
   ![image](https://i.imgur.com/9RGoDpX.png)

4. PHP->Debug->DBGp Proxy 页面
   配置如下
   ![image](https://i.imgur.com/CyYUXps.png)

5. 配置PHP Web Application
   ![image](https://i.imgur.com/bTmshyK.png)
   ![image](https://i.imgur.com/caybPLD.png)

6. 在chome上安装扩展，下载JetBrains IDE Support扩展，安装
   ![image](https://images2015.cnblogs.com/blog/1103562/201702/1103562-20170216103541425-1992117242.png)

#### 四、开始设置断点调试

1. 设置断点
   ![image](https://images2015.cnblogs.com/blog/1103562/201702/1103562-20170216103836941-721787820.png)

2. 设置好断点后点击右上角绿色的小虫子按钮，PhpStorm中会出现
   ![image](https://images2015.cnblogs.com/blog/1103562/201702/1103562-20170216103953144-381520101.png)

3. 如果没有出现断点调试信息，看是否打开了监听选项
   ![image](https://images2015.cnblogs.com/blog/1103562/201702/1103562-20170216104106988-674553758.png)

参考文档：

1. [https://www.cnblogs.com/shiwaitaoyuan/p/6404604.html](https://www.cnblogs.com/shiwaitaoyuan/p/6404604.html) - *phpstorm设置断点调试 - shen1hua - 博客园*
2. [https://blog.csdn.net/ty_hf/article/details/50768702](https://blog.csdn.net/ty_hf/article/details/50768702) - *phpstorm+Xdebug断点调试PHP_phpstorm + xdebug断点_时而宁靜的博客-CSDN博客*

### 使用SVN

https://www.cnblogs.com/jingmin/p/6329556.html

### FTP

1. https://blog.csdn.net/qq_35616854/article/details/77877493 - *PhpStorm中如何使用FTP功能 详细操作方法*

2. https://www.php.cn/tool/phpstorm/464585.html - *详解 PHPStorm 配置 FTP*

3. https://blog.csdn.net/blog_phpxz/article/details/80103257 - *phpstorm 配置ftp， 自动更新同步代码 （亲测完美）*

## 插件

> 官方插件市场（搜索插件）：https://plugins.jetbrains.com

1. IDE Eval Reset（JetBrains全家桶无限试用）

   百度搜索关键字：`ide eval reset`、`IDEA安装插件无限试用`

   https://zhile.io/2020/11/18/jetbrains-eval-reset-deprecated.html - *Jetbrains系列产品重置试用方法[归档] – 知了*

2. Translation（翻译插件）

   1. https://yiiguxing.github.io/TranslationPlugin/index.html

   2. https://plugins.jetbrains.com/plugin/8579-translation - *Translation - IntelliJ IDEs Plugin | Marketplace*

3. Git

   1. git 项目，VSCode 显示不同颜色块的含义

      - https://www.cnblogs.com/soyxiaobi/p/9708518.html

   2. PhpStorm 中实现 git rebase -i 合并多次提交功能

      - https://www.cnblogs.com/woods1815/p/12382853.html

4. Chinese (Simplified) Language Pack / 中文语言包

    - https://plugins.jetbrains.com/plugin/13710-chinese-simplified-language-pack----/ - *Chinese (Simplified) Language Pack / 中文语言包 - IntelliJ IDEs Plugin | Marketplace*

5. http 客户端

   1. https://www.evget.com/article/2022/3/30/44406.html - *PHP集成开发环境PhpStorm使用教程（一）：HTTP 请求语法概述*

   2. https://www.evget.com/serializedetail/970 - *PHP集成开发环境PhpStorm使用教程（二）：HTTP 请求语法*

   3. https://www.evget.com/article/2022/3/3/44193.html - *PHP集成开发环境PhpStorm中的HTTP客户端概述*

   4. https://cloud.tencent.com/developer/article/1765132 - *张嘴吃安利之 PhpStorm 中的 HTTP 客户端*

   5. https://blog.jetbrains.com/zh-hans/2020/03/06/phpstorm-client/ - *PhpStorm 中的 HTTP 客户端概述*

   6. https://www.jetbrains.com/help/phpstorm/http-client-in-product-code-editor.html - *HTTP Client*

## 常见问题

1. https://jingyan.baidu.com/article/91f5db1b011eb21c7f05e394.html - *phpstorm如何清理历史记录垃圾*

2. https://blog.csdn.net/qq_33862644/article/details/81938970 - *phpstorm运行内存不够，修改时Xms Xmx PermSize MaxPermSize 区别*

3. https://www.kancloud.cn/ervinhua/phpstorm/441648 - *PhpStorm手册中文版（网友个人看云）*

**2018/11/22：**

1. https://blog.csdn.net/wuzuyu365/article/details/79956704 - *phpstorm有红波浪线，怎么找到语法错误的地方*

2. https://zhidao.baidu.com/question/1642901265565993380.html - *phpstorm 怎么快速插到错误的行*

## 参考

1. https://mp.weixin.qq.com/s/fM-9_RcSPdL3u4Ie-GYDfQ - *又来一个 IDEA 实用小技巧，工作效率提升不少*

2. https://www.php.cn/faq/388259.html - *phpStorm 如何正确操作 - php 教程 - PHP 中文网*
