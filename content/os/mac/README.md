## 简介

> <img src="https://cdn.worldvectorlogo.com/logos/apple-11.svg" alt="package icon" loading="lazy" decoding="async" align="left" width="78" hspace="10" vspace="0" />探索 Apple 的创新世界，选购各式 iPhone、iPad、Apple Watch 和 Mac，浏览各类配件、娱乐产品，并获得相关产品的专家服务支持。

## 官方

https://www.apple.com.cn/ - *Apple (中国大陆) - 官方网站*


### 使用技巧

\> 打开 *访达 > 菜单栏 > 帮助 > macOS 帮助或者 Mac 使用技巧*（根据当前使用的电脑设备来打开指定版本的使用手册）。

https://support.apple.com/zh-cn/guide/mac-help/welcome/13.0/mac/13.3.1 - *macOS 使用手册 - 官方 Apple 支持 (中国)*


## 教程

> Mac 的使用教程

### 基础操作


### 目录结构

- 用户目录：`/Users/caiyongwen`

  如何打开此目录：

  - 终端：`cd ~`；

  - 访达：*菜单栏 > 前往 > 个人*。


- 根目录：`/`

	如何打开此目录：

	- 终端：`cd /`；
  - 访达：*菜单栏 > 前往 > 电脑*。

- `/bin`: 存放所有用户皆可用的系统程序，即普通的基本命令，如：touch ls 等
- `/sbin`： 存放超级用户才能使用的系统程序，即基本的系统命令，如：sreboot 等

- `/usr/bin`： 存放所有用户都可用的应用程序，一般是已安装软件的运行脚本，如：free、make、wget 等

- `/usr/sbin`： 存放超级用户才能使用的应用程序 ，一般是与服务器软件程序命令相关的，如：dhcpd、 httpd、samba 等

- `/usr/local/bin`： 存放所有用户都可用的第三方软件程序,如 mysql

- `/usr/local/sbin`： 存放超级用户才能使用的第三方软件,如 nginx



### 触控板

- 触控板单指点击为单击功能

- 触控板双指点击为鼠标右键功能

- 更多功能可打开 *系统设置 > （左边列表最底下）触控板* 查看教程。

### 应用程序

- <kbd>command</kbd> + <kbd>Q</kbd> - *退出当前程序，后台不运行该程序*

- <kbd>command</kbd> + <kbd>option</kbd> + <kbd>ESC</kbd> - *强制退出当前程序*

- <kbd>command</kbd> + <kbd>tab</kbd> - *切换应用程序*


### 输入法

- <kbd>control</kbd> + <kbd>空格</kbd> - *切换输入法*


### 文本操作

- <kbd>fn</kbd> + <kbd>上箭头</kbd>：向上滚动一页（Page Up）
- <kbd>fn</kbd> + <kbd>下箭头</kbd>：向下滚动一页（Page Down）
- <kbd>fn</kbd> + <kbd>左箭头</kbd>：滚动至文档开头（Home）
- <kbd>fn</kbd> + <kbd>右箭头</kbd>：滚动至文档末尾（End）
- <kbd>command</kbd> + <kbd>右箭头</kbd>：将光标移至当前行的末尾
- <kbd>command</kbd> + <kbd>左箭头</kbd>：将光标移至当前行的行首
- <kbd>command</kbd> + <kbd>下箭头</kbd>：将光标移至文稿末尾
- <kbd>command</kbd> + <kbd>上箭头</kbd>：将光标移至文稿开头
- <kbd>option</kbd> + <kbd>右箭头</kbd>：将光标移至下一个单词的末尾
- <kbd>option</kbd> + <kbd>左箭头</kbd>：将光标移至下一个单词的开头
- <kbd>ctrl</kbd> + <kbd>A</kbd>：移至行或段落的开头
- <kbd>fn</kbd> + <kbd>backspace</kbd>：删除光标之后的一个字符
- <kbd>option</kbd> + <kbd>backspace</kbd>：删除光标之前的一个单词（英文有效）
- <kbd>fn</kbd> + <kbd>option</kbd> + <kbd>backspace</kbd>：删除光标之后的一个单词


### 文件操作

- <kbd>command</kbd> + <kbd>backspace</kbd> - *删除当前文件*


### 窗口操作

- 窗口最小化
  - <kbd>command</kbd> + <kbd>m</kbd>
  - <kbd>command</kbd> + <kbd>option</kbd> + <kbd>m</kbd>
  - <kbd>command</kbd> + <kbd>h</kbd>
  - <kbd>command</kbd> + <kbd>option</kbd> + <kbd>h</kbd>

- 显示窗口
  - <kbd>command</kbd> + <kbd>tab</kbd> + <kbd>option</kbd> + 松开 <kbd>command</kbd>

- 切换窗口

  - <kbd>command</kbd> + <kbd>tab</kbd> - *切换到下一个窗口*
  - <kbd>command</kbd> + <kbd>shift</kbd> + <kbd>tab</kbd> - *切换到上一个窗口*

- 同一应用程序之间窗口切换

  - <kbd>command</kbd> + <kbd>~</kbd>

- 快速显示桌面
  - <kbd>fn</kbd> + <kbd>F11</kbd>
  - <kbd>command</kbd> + <kbd>F3</kbd>

- 打开调度中心
  - <kbd>control</kbd> + <kbd>上箭头</kbd> - *调度中心平铺显示所有打开的窗口，可以快速找到需要的窗口*

- 显示当前应用程序的所有窗口
  - <kbd>control</kbd> + <kbd>下箭头</kbd> - *如果当前app有多个窗口，按command+下方向键可以显示此app的所有窗口，这也叫作“应用程序暴露”*


### 应用双开

- QQ 双开：打开 QQ 客户端，然后 <kbd>command</kbd> + <kbd>n</kbd>


### 隐藏文件

- 查看隐藏的文件
  - <kbd>Command</kbd> + <kbd>Shift</kbd> + <kbd>.</kbd> - *可以显示隐藏文件、文件夹，再按一次，恢复隐藏。*

- 隐藏文件、文件夹
    - 打开终端执行

        ```shell
        #显示文件（-R 文件夹递归操作）
        chflags [-R] nohidden [ 文件路径 ]
        
        #隐藏文件
        chflags [-R] hidden [文件路径]
        ```
        
        https://baijiahao.baidu.com/s?id=1737497237739550300 - *两招教你如何在Mac上隐藏文件！*

- Mac 查看被隐藏的文件

   `finder`下使用 <kbd>Command</kbd> + <kbd>Shift</kbd> + <kbd>G</kbd> 可以前往任何文件夹，包括隐藏文件夹。


### 默认应用

- 如何设置文件默认打开方式？
    - https://jingyan.baidu.com/article/d5c4b52bd1496e9b560dc5b0.html - *苹果MAC电脑如何更改默认打开方式-百度经验*


### Chrome 浏览器

<kbd>command</kbd> + <kbd>R</kbd> - *普通刷新*

<kbd>command</kbd> + <kbd>Shift</kbd> + <kbd>R</kbd> - *强制刷新*

更多有关详细信息，请参阅“[浏览器快捷键](os/tools/browser.md#浏览器快捷键)”。

### 卸载软件

- Mac 如何彻底移除应用程序？

  *打开访达 > 应用程序 > 选择应用程序 > 移除至废纸篓 > 清倒废纸篓（彻底卸载）*

- Mac 系统如何卸载/删除软件？

  https://jingyan.baidu.com/article/59703552b380b08fc00740b9.html - *Mac系统如何卸载/删除软件？-百度经验*

### 截屏

- <kbd>command</kbd> + <kbd>shift</kbd> + <kbd>3</kbd> - *截取全屏*
- <kbd>command</kbd> + <kbd>shift</kbd> + <kbd>4</kbd> - *选择性截取，可自定义截屏、可截取全屏、可截取活动窗口、可识别文字、可选取坐标点*（常用）
- <kbd>command</kbd> + <kbd>shift</kbd> + <kbd>5</kbd> - *截屏和录制选项*

打开 *系统设置 >（左边列表最底下）键盘 > 键盘快捷键...* ，单击左侧列表的“截屏”选项，可查看具体的快捷键使用说明。

参考：https://baijiahao.baidu.com/s?id=1745189312105411581 - *Mac截图保存在哪里？*


### 开机启动项

Https://blog.csdn.net/lxf_no1/article/details/109616763 - *Mac OS开机启动自动执行命令行*

1. 打开 *系统偏好设置 > 用户与群组 > 登录项*；
2. 添加完然后重启电脑。

> 系统版本：*macOS Ventura 13.3.1* 中设置

1. 打开 *系统设置 > 通用 > 登录项*；
2. 添加完然后重启电脑。

## 常见问题

1. Mac 中的 git

    mac 系统自带 git，无需额外安装。


### 如何在访达中查看当前路径

在“访达”窗口右下方的底部导航栏中，选中指定的文件目录，然后鼠标右键单击，选择：*将“共享”拷贝为路径名称*。

### 如何在指定文件夹中打开终端

方式一（子文件夹打开终端）：
1. 打开 *访达 > （选择需要打开的文件夹，比如：根目录）Macintosh HD*；
2. 在访达窗口右侧文件栏，选择指定的文件夹（如：“用户”文件夹），*单击右键 > 服务 > 新建位于文件夹位置的终端窗口*。

方式二（当前文件夹打开终端）：
1. 打开 *访达 > （选择需要打开的文件夹，比如：根目录）Macintosh HD*；
2. 在访达窗口右上方工具栏上，左键单击 “>>” 选择 *操作 > 服务 > 新建位于文件夹位置的终端窗口*。

方式三（当前文件夹及上层文件夹打开终端）：
1. 打开 *访达 > （选择需要打开的文件夹，比如：“用户”文件夹）用户*；
2. 在访达窗口右下方的底部导航栏中，选中指定的文件夹，鼠标右键单击，选择：*在终端打开*，或者选择：*> 服务 > 新建位于文件夹位置的终端窗口*。


### 解压 rar 文件

https://zhuanlan.zhihu.com/p/103473716 - *教你如何在Mac系统下解压rar,zip等各种格式文件*

1. App Store 中安装工具 `The Unarchiver`


### 程序安装问题

1. Mac 提示无法验证开发者

   https://jingyan.baidu.com/article/b87fe19e6dc68a1319356823.html - *mac提示无法验证开发者怎么办-百度经验*

   操作步骤：
   1. 打开`系统偏好设置`
   2. 点击`安全性与隐私`进入
   3. 点击`通用`进入
   4. 点击`左下角锁`并输入用户密码进行解锁
   5. 找到并勾选 `App Store 和被认可的开发者`即可
   
   > 系统版本：*macOS Ventura 13.1.1* 中设置
   1. 在“程序坞”中找到并打开应用“系统设置”
   2. 点击左边列表“隐私与安全性”
   3. 点击右边列表“安全性”-“App Store 和被认可的开发者”，开启授权

2. 如何安装 Rosetta

   https://support.apple.com/zh-cn/HT211861 - *如果您需要在 Mac 上安装 Rosetta - 官方 Apple 支持 (中国)*

3. MacBook m1 芯片关闭 sip 教程

   https://blog.csdn.net/weixin_44791976/article/details/110826057 - *macbook air m1芯片关闭sip教程（超详细，防踩坑）*

   ```shell
   # 电脑系统sip默认为开启状态
   
   # 查看sip是否关闭
   csrutil status
   # 关闭sip
   csrutil disable
   # 开启sip
   csrutil enable
   ```

4. https://blog.csdn.net/weixin_44722978/article/details/123347801 - *网上下载软件，macOS无法验证此App不包含恶意软件。*

### 应用窗口置顶

百度关键词搜索：[mac应用窗口置顶工具](https://www.baidu.com/s?word=mac%E5%BA%94%E7%94%A8%E7%AA%97%E5%8F%A3%E7%BD%AE%E9%A1%B6%E5%B7%A5%E5%85%B7)

https://www.zhihu.com/question/369340415/answer/2571072461 - *Mac中怎么让一个窗口永远保持在所有窗口最上方？ - Jimmy林夕 的回答 - 知乎*

\> 此方式适用于 M1 芯片（亲测可用）。

1. 下载破解版 [BetterTouchTool](https://appstorrent.ru/394-bettertouchtool.html) ；
2. 按照上面参考的链接进行设置。

其它参考教程：

1. https://mp.weixin.qq.com/s/u31ajN_EP8LibFSIsNw3mQ - *将任意应用窗口置顶显示，这个工具太强了。*
