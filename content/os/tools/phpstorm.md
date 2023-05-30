## 官方

官网：

https://www.jetbrains.com/ - *JetBrains: Essential tools for software developers and teams*

手册：

https://www.jetbrains.com/help/phpstorm/2020.3/getting-started.html - *Getting started | PhpStorm*

GitHub：

https://github.com/JetBrains/ - *JetBrains · GitHub*

历史版本下载：

https://www.jetbrains.com/phpstorm/download/other.html - *Other Versions - PhpStorm*
-  https://blog.csdn.net/qq_29752857/article/details/107050967 - *JetBrains下载历史版本(IDEA、PyCharm、WebStorm、PhpStorm等)*


## 注册/激活码

**2022/01/13**

破解方式：

1. 插件：`IDE Eval Reset`

   JetBrains全家桶无限试用

   https://mrhelloworld.com/jetbrains/ - *一个插件搞定 Jetbrains 系列产品永久试用 - 哈喽沃德先生*

2. 工具：`jetbrains-agent`

   相信破解过IDEA的小伙伴，都知道`jetbrains-agent`这个工具，没错，就是那个直接拖入到开发工具界面，一键搞定，so easy的破解工具！这个工具目前已经停止更新了，尽管还有很多小伙伴在使用，但是对新版本IDE的支持已经不是很稳定了。下面我会分享一个无线重置IDE过期时间的插件，让你不太再为IDE频繁时效而烦恼。

3. 激活码`不定期更新`

   https://jetbra.in/s （链接来源：https://zhile.io/2020/11/18/jetbrains-eval-reset-deprecated.html -> 位置：新试用机制）
   
   http://soft-hub.cn/ - *IDEA激活码-WebStorm激活码-PhpStorm激活码-IDEA主题样式-SoftHub*

------

👍 https://zhile.io/ - *知了 – 朝闻道，夕可眠矣。* `可查看下列两篇文章`

1. [Jetbrains系列产品重置试用方法[归档]](https://zhile.io/2020/11/18/jetbrains-eval-reset-deprecated.html)
2. [Jetbrains系列产品最新激活方法[归档]](https://zhile.io/2018/08/25/jetbrains-license-server-crack.html)

http://idea.lanyus.com/ - *IntelliJ IDEA 注册码* `暂停提供`

------

**2020/01/07**

👍 https://www.php.cn/tool/phpstorm/408348.html - *正版phpstorm免费激活步骤（图文详解）-phpstorm-PHP中文网* 「暂停提供（评论区有最新有效注册码）」

------

**2020/05/28**

~~http://www.shuchengxian.com/article/PWewET2nGB.html~~

~~https://www.frankblog.cn/post/18.html~~

https://www.0daydown.com/tag/phpstorm - *PhpStorm | 下载,Download*

~~http://easycolor.cc/article/4.html~~ *暂停提供（扫码关注公众号） -适用于最新版本（2020版）*

~~http://soft-hub.cn/article/ll2d7f50fa62eb45f0171c5321f9fc926f.zip~~ *查看下载文件创建日期判断是否暂停提供 -适用于最新版本（2020版）*

------

**2020/09/25**

[Jetbrains2020全系列补丁ZhilePatch jetbrains-agent.jar v3.2.0 绿色版](https://www.jb51.net/softs/672190.html#downintro2 "下载安装包进行破解（破解包：jetbrains_agent_jb51.rar）")

------

**2020/12/17**

~~https://tangyulu.com/~~ *最新注册码有效连接*


## 常用操作

1. 设置字体大小

   `文件` > `设置` > `编辑器` > `Font` > `大小` > `设置为16`

2. 跳转至指定行数

   <kbd>Ctrl</kbd> + <kbd>G</kbd>

3. 单行注释

   <kbd>Ctrl</kbd> + <kbd>/</kbd>

4. 块/多行注释

   <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>/</kbd>

5. 跳至页首

   <kbd>Ctrl</kbd> + <kbd>Home</kbd>

6. 跳至页尾

   <kbd>Ctrl</kbd> + <kbd>End</kbd>

7. 设置数组格式化

   `文件` > `设置` > `编辑器` > `Code Style` > `PHP` > `Wrapping and Braces` > `数组初始化`

   https://www.php.cn/tool/phpstorm/441025.html - *phpstorm如何格式化数组-phpstorm-PHP中文网*

8. 设置方法、函数参数提示

   * `文件` > `设置` > `编辑器` > `镶嵌提示` > `php` > 勾选`Show name for all arguments`

   * 在代码显示的参数名上方右键点击会出现两个选项，选择第二个 Disable 就可以关闭了

    参考：https://www.wenjiangs.com/article/phpstorm-parameter-name-hints.html - *PhpStorm 取消函数参数提示 Parameter Name Hints - 文章教程 - 文江博客*


## 断点调试

1. 检查xdebug（在WAMP服务器php.ini中检查，并把[xdebug]中的off设置改为on，php.ini文件中的xdebug默认是关闭的）
2. 右上角 edit config 弹出的窗口中到左上角的绿色“+”号中添加PHP Web Application接口并进行配置
3. PHP web Application
4. 添加server  域名HOST 端口
5. 指明具体的调试脚本URL
6. 指明浏览器Browser
7. 检查xdebug是否开启 on


### 一、软件环境

> - 运行环境：WAMP
> - PhpStorm版本：2017.2.4
> - PHP Version：5.5.12
> - xdebug版本：php_xdebug-2.2.5-5.5-vc11.dll
> - ps : php版本和xdebug版本一定要相对应


### 二、配置php.ini文件

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

![](https://i.imgur.com/zNTKvcJ.png)
![](https://images2015.cnblogs.com/blog/1103562/201702/1103562-20170216101002847-1777096143.png)



### 三、设置PhpStorm

1.	`File->Settings`	页面
   ![](https://i.imgur.com/doc67cW.png)

2.	`PHP->Server` 页面 
   新建一个 
   `name为localhost` [可自定义]
   `Host为www.study.com` [WAMP中可用的域名]
   `Port:80`
   `Debugger:Xdebug`
   ![](https://i.imgur.com/ui95DUx.png)

3.	`PHP->Debug`	页面 
   Debug Port设置为9000
   ![](https://i.imgur.com/9RGoDpX.png)

4.	PHP->Debug->DBGp Proxy 页面
   配置如下
   ![](https://i.imgur.com/CyYUXps.png)

5.	配置PHP Web Application
   ![](https://i.imgur.com/bTmshyK.png)
   ![](https://i.imgur.com/caybPLD.png)

6.	在chome上安装扩展，下载JetBrains IDE Support扩展，安装
   ![](https://images2015.cnblogs.com/blog/1103562/201702/1103562-20170216103541425-1992117242.png)



### 四、开始设置断点调试

1.	设置断点
   ![](https://images2015.cnblogs.com/blog/1103562/201702/1103562-20170216103836941-721787820.png)

2.	设置好断点后点击右上角绿色的小虫子按钮，PhpStorm中会出现
   ![](https://images2015.cnblogs.com/blog/1103562/201702/1103562-20170216103953144-381520101.png)

3.	如果没有出现断点调试信息，看是否打开了监听选项
   ![](https://images2015.cnblogs.com/blog/1103562/201702/1103562-20170216104106988-674553758.png)



参考文档：
1. [https://www.cnblogs.com/shiwaitaoyuan/p/6404604.html](https://www.cnblogs.com/shiwaitaoyuan/p/6404604.html) - *phpstorm设置断点调试 - shen1hua - 博客园*
2. [https://blog.csdn.net/ty_hf/article/details/50768702](https://blog.csdn.net/ty_hf/article/details/50768702) - *phpstorm+Xdebug断点调试PHP_phpstorm + xdebug断点_时而宁靜的博客-CSDN博客*


## 使用SVN

https://www.cnblogs.com/jingmin/p/6329556.html



## FAQ

phpstorm如何清理历史记录垃圾  
https://jingyan.baidu.com/article/91f5db1b011eb21c7f05e394.html

phpstorm运行内存不够，修改时Xms Xmx PermSize MaxPermSize 区别  
https://blog.csdn.net/qq_33862644/article/details/81938970

PhpStorm手册中文版（网友个人看云）  
https://www.kancloud.cn/ervinhua/phpstorm/441648

**2018/11/22**

phpstorm有红波浪线，怎么找到语法错误的地方  
https://blog.csdn.net/wuzuyu365/article/details/79956704

phpstorm 怎么快速插到错误的行  
https://zhidao.baidu.com/question/1642901265565993380.html


## 链接

https://mp.weixin.qq.com/s/fM-9_RcSPdL3u4Ie-GYDfQ - _又来一个 IDEA 实用小技巧，工作效率提升不少_
