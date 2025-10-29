# Mac

![illustration](https://www.apple.com.cn/app-store/images/overview/hero__fpyktigxzia2_small_2x.jpg)

<small>*插图来源于：[App Store - Apple (中国大陆)](https://www.apple.com.cn/app-store/)*</small>

## 简介

> 探索 Apple 的创新世界，选购各式 iPhone、iPad、Apple Watch 和 Mac，浏览各类配件、娱乐产品，并获得相关产品的专家服务支持。

## 官方

主页：https://www.apple.com.cn/ - *Apple (中国大陆) - 官方网站*

手册：https://support.apple.com/zh-cn/guide/mac-help/welcome/mac - *macOS 使用手册 - 官方 Apple 支持 (中国)*

### 支持社区

https://discussionschinese.apple.com/welcome - *官方 Apple 支持社区*

### 使用技巧

\> 打开 *访达 > 菜单栏 > 帮助 > macOS 帮助或者 Mac 使用技巧*（根据当前使用的电脑设备来打开指定版本的使用手册）。

https://support.apple.com/zh-cn/guide/mac-help/welcome/13.0/mac/13.3.1 - *macOS 使用手册 - 官方 Apple 支持 (中国)*

## 教程

### 第三方社区

1. https://www.applex.net/ - *极限苹果-Mac论坛-提供Mac软件和macOS苹果系统镜像下载*

2. https://www.macrumors.com/ - *MacRumors: Apple News and Rumors*

3. https://mrmacintosh.com/ - *Mr. Macintosh - Apple Mac Enterprise IT Blog - Mac & macOS News*

### GitHub

https://github.com/topics/macos - *macos · GitHub Topics · GitHub*

## 设置

### 控制中心

https://support.apple.com/zh-cn/guide/mac-help/mchlad96d366/14.0/mac/14.3.1 - *在 Mac 上更改“控制中心”设置 - 官方 Apple 支持 (中国)*

### 网络设置

https://support.apple.com/zh-cn/guide/mac-help/mchlee7b367f/14.0/mac/14.3.1 - *Mac 上的“网络”设置 - 官方 Apple 支持 (中国)*

### 默认应用

设置"默认网页浏览器"的操作步骤（macOS Sequoia 15.2）：

1. 打开 *系统设置 > 桌面与程序坞 - 默认网页浏览器* ；

如何设置文件的默认打开方式？

- https://jingyan.baidu.com/article/d5c4b52bd1496e9b560dc5b0.html - *苹果MAC电脑如何更改默认打开方式-百度经验*

## 用法

> Mac 使用教程

### 基础操作

暂无

### 用户界面

https://support.apple.com/zh-cn/guide/mac-help/mchlp1446/mac - *Mac 上的菜单栏包含哪些项？ - 官方 Apple 支持 (中国)*

### 目录结构

```tree
root_folder/
├── bin/
├── User/
│   └── <username>...
├── usr/
│   ├── bin/
│   ├── local/
│   │   ├── bin/
│   │   └── sbin/
│   └── sbin/
├── sbin/
```

- 用户目录：`/Users/<username>`

  如何打开此目录：

  - 终端：`cd ~` 或者 `cd $HOME` 或者 `cd`；

  - 访达：*菜单栏 > 前往 > 个人*。

- 根目录：`/`

  如何打开此目录：

  - 终端：`cd /`；

  - 访达：*菜单栏 > 前往 > 电脑*。

- `/bin`： 存放所有用户皆可用的系统程序，即普通的基本命令，如：touch、ls 等

- `/sbin`： 存放超级用户才能使用的系统程序，即基本的系统命令，如：sreboot 等

- `/usr/bin`： 存放所有用户都可用的应用程序，一般是已安装软件的运行脚本，如：free、make、wget 等

- `/usr/sbin`： 存放超级用户才能使用的应用程序，一般是与服务器软件程序命令相关的，如：dhcpd、 httpd、samba 等

- `/usr/local/bin`： 存放所有用户都可用的第三方软件程序，如：mysql

- `/usr/local/sbin`： 存放超级用户才能使用的第三方软件，如：nginx

### 键盘

https://support.apple.com/zh-cn/HT3164 - *Mac 笔记本电脑：按键位置和功能 - 官方 Apple 支持 (中国)*

https://zhidao.baidu.com/question/1515268495610377860/answer/3761641845.html - *macbook page up是哪个键*

https://blog.csdn.net/sdu_hao/article/details/86713554 - *Mac系统随笔 | (1)Mac系统中的PageUp、PageDown、Home和End_mac pageup-CSDN博客*

### 快捷键

键盘快捷键：

https://support.apple.com/zh-cn/102650 - *Mac 键盘快捷键 - 官方 Apple 支持 (中国)*

鼠标快捷键：

https://support.apple.com/zh-cn/guide/mac-help/mh35853/mac - *在 Mac 上右键点按 - 官方 Apple 支持 (中国)*

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

### 文件/目录操作

- 移动文件/目录

  操作步骤：

  1. 选中目标文件，然后使用 <kbd>command</kbd> + <kbd>C</kbd> 复制；
  2. 用 <kbd>command</kbd> + <kbd>option</kbd> + <kbd>V</kbd> 将其移动到目标目录。

  参考：

  1. https://sspai.com/post/28389 - *Mac 教程：OS X「剪切」移动文件的三种方法 - 少数派*
  2. https://support.apple.com/zh-cn/guide/mac-help/mh35852/mac - *在 Mac 上拖放项目 - 官方 Apple 支持 (中国)*
  3. https://jingyan.baidu.com/article/0f5fb099540ff56d8234ea43.html - *苹果电脑文件的移动/复制怎么操作-百度经验*
  4. https://www.yundongfang.com/Yun64905.html - *在 Mac 上移动文件和文件夹的 3 种方法-云东方*

- 删除文件/目录

  - <kbd>command</kbd> + <kbd>backspace</kbd> - *删除当前文件*

- 新建文件/目录

  - https://sspai.com/post/41867 - *4 种方法，让你在 macOS 上快速新建 txt 文本文件 - 少数派*
  - https://blog.csdn.net/liaowenxiong/article/details/119148200 - *MacOS 下如何创建文本文件_macos新建文件_liaowenxiong的博客-CSDN博客*
  - https://www.jianshu.com/p/fadb08f64771 - *mac系统如何新建文件 - 简书*
  - https://support.apple.com/zh-cn/guide/mac-help/mh26885/mac - *在 Mac 上以文件夹形式整理文件 - 官方 Apple 支持 (中国)*

- 复制文件/目录的绝对路径

  - <kbd>command</kbd> + <kbd>option</kbd> + <kbd>C</kbd>

### 隐藏文件/目录

- 查看隐藏的文件/目录

  - <kbd>command</kbd> + <kbd>shift</kbd> + <kbd>.</kbd> 可以显示隐藏文件、文件夹，再按一次，恢复隐藏。

  - `Finder` 下使用 <kbd>command</kbd> + <kbd>shift</kbd> + <kbd>G</kbd> 可以前往任何文件夹，包括隐藏文件夹。

- 隐藏文件/目录

  - 打开终端执行下面命

    显示文件（-R ：文件夹递归操作）：
    
    ```shell
    chflags [-R] nohidden [文件路径]
    ```
    
    隐藏文件：
    
    ```shell
    chflags [-R] hidden [文件路径]
    ```
    
    参考：
    
    1. https://baijiahao.baidu.com/s?id=1737497237739550300 - *两招教你如何在Mac上隐藏文件！*
    2. https://www.cnblogs.com/zhoushun98/p/17933239.html - *MacOS 中的 chflags 命令 - Jason9812 - 博客园*
    3. https://www.maketecheasier.com/add-relationship-to-contact-on-mac/ - *How to Use File Flags to Modify File Behavior in macOS - Make Tech Easier*
    4. https://developer.apple.com/library/archive/documentation/System/Conceptual/ManPages_iPhoneOS/man2/chflags.2.html - *Mac OS X Manual Page For chflags(2)*

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

  - <kbd>control</kbd> + <kbd>下箭头</kbd> - *如果当前 app 有多个窗口，按 「command + 下方向键」可以显示此 app 的所有窗口，这也叫作“应用程序暴露”*

### 应用双开

- QQ 双开：

  - 打开 QQ 客户端，然后使用键盘快捷键 <kbd>command</kbd> + <kbd>n</kbd>

- 微信双开：[参考](https://zhuanlan.zhihu.com/p/397900267)

  1. 先打开并登录第一个微信；
  2. 然后打开 *访达 > 应用程序 > 微信（双指同时摁或鼠标右键） > 显示包内容*；
  3. 依次打开以下⽂件夹 *Contents > MacOS > 双击 WeChat* 即可登录第 2 个微信。

### 卸载软件

- Mac 如何彻底移除应用程序？

  *打开访达 > 应用程序 > 选择应用程序 > 移除至废纸篓 > 清倒废纸篓（彻底卸载）*

- Mac 系统如何卸载/删除软件？

  https://jingyan.baidu.com/article/59703552b380b08fc00740b9.html - *Mac系统如何卸载/删除软件？-百度经验*

### 开机启动项

操作步骤：

1. 打开 *系统偏好设置 > 用户与群组 > 登录项* ；
2. 添加完成后重启电脑。

参考：

1. Https://blog.csdn.net/lxf_no1/article/details/109616763 - *Mac OS开机启动自动执行命令行*

操作步骤：

> 系统版本：*macOS Ventura 13.3.1* 中设置

1. 打开 *系统设置 > 通用 > 登录项* ；
2. 添加完成后重启电脑。

### 守护进程

1. https://ss64.com/mac/launchctl.html - *launchctl Man Page - macOS - SS64.com*
2. https://support.apple.com/zh-cn/guide/terminal/apdc6c1077b-5d5d-4d35-9c19-60f2397b2369/mac - *在 Mac 上的“终端”中使用 launchd 管理脚本 - 官方 Apple 支持 (中国)*
3. https://medium.com/ - *MacOS Shortcut scheduling using launchctl | by richard moult | Medium*
4. https://www.alansiu.net/2023/11/15/launchctl-new-subcommand-basics-for-macos/ - *launchctl “new” subcommand basics for macOS – Alan Siu's Blog*

### 查看网络活动

使用系统工具「[活动监视器](#活动监视器)」。

### 远程连接

使用系统工具「[终端](https://support.apple.com/zh-cn/guide/terminal/trml1018/mac)」。

## 系统工具

> Mac 预先安装了各种 App，便于你娱乐、工作、联系朋友、安排日程、购物等。若要查看 Mac 上可用的 App，请点按程序坞中的启动台图标 。若要打开 App，请在程序坞中点按其图标或使用启动台。

https://support.apple.com/zh-cn/guide/mac-help/mchl110b00b7/14.0/mac/14.0 - *Mac 附带的 App - 官方 Apple 支持 (中国)*

### App Store

https://support.apple.com/zh-cn/guide/app-store/welcome/mac - *适用于 Mac 的 App Store 使用手册 - 官方 Apple 支持 (中国)*

### 访达

https://support.apple.com/zh-cn/guide/mac-help/mchlp2605/mac - *在 Mac 上的“访达”中整理文件 - 官方 Apple 支持 (中国)*

### 词典

https://support.apple.com/zh-cn/guide/dictionary/welcome/mac - *适用于 Mac 的词典使用手册 - 官方 Apple 支持 (中国)*

参考：

1. https://discussionschinese.apple.com/thread/140129373 - *如何使用Mac自带的词典 - Apple 社区*
2. https://zhuanlan.zhihu.com/p/119031715 - *mac下使用翻译软件的正确姿势 - 知乎*

### 活动监视器

https://support.apple.com/zh-cn/guide/activity-monitor/welcome/mac - *适用于 Mac 的活动监视器使用手册 - 官方 Apple 支持 (中国)*

### 磁盘工具

https://support.apple.com/zh-cn/guide/disk-utility/welcome/mac - *适用于 Mac 的磁盘工具使用手册 - 官方 Apple 支持 (中国)*

### iCloud

https://support.apple.com/zh-cn/guide/mac-help/mh36834/mac - *在 Mac 上设置 iCloud 功能 - 官方 Apple 支持 (中国)*

### Safari 浏览器

官方：

https://www.apple.com.cn/safari/ - *Safari 浏览器 - Apple (中国大陆)*

手册：

https://support.apple.com/zh-cn/safari - *Safari 浏览器 - 官方 Apple 支持*

https://support.apple.com/zh-cn/guide/safari/welcome/mac - *适用于 Mac 的 Safari 浏览器使用手册 - 官方 Apple 支持 (中国)*

安装：

- 支持 macOS（系统内置）, iOS（[App Store](https://apps.apple.com/cn/app/safari/id1146562112)）

### 文本编辑

https://support.apple.com/zh-cn/guide/textedit/welcome/mac - *适用于 Mac 的文本编辑使用手册 - 官方 Apple 支持 (中国)*

### 备忘录

https://support.apple.com/zh-cn/guide/notes/welcome/mac - *适用于 Mac 的备忘录使用手册 - 官方 Apple 支持 (中国)*

### 便签

https://support.apple.com/zh-cn/guide/stickies/welcome/mac - *适用于 Mac 的便笺使用手册 - 官方 Apple 支持 (中国)*

### 预览

https://support.apple.com/zh-cn/guide/preview/welcome/mac - *适用于 Mac 的预览使用手册 - 官方 Apple 支持 (中国)*

### 截屏和录屏

1. https://support.apple.com/zh-cn/guide/mac-help/mh26782/14.0/mac/14.0 - *在 Mac 上截屏或录屏 - 官方 Apple 支持 (中国)*
2. https://support.apple.com/zh-cn/102618 - *如何录屏 - 官方 Apple 支持 (中国)*

快捷键：

- <kbd>command</kbd> + <kbd>shift</kbd> + <kbd>3</kbd> - *截取全屏*
- <kbd>command</kbd> + <kbd>shift</kbd> + <kbd>4</kbd> - *选择性截取，可自定义截屏、可截取全屏、可截取活动窗口、可识别文字、可选取坐标点*（常用）
- <kbd>command</kbd> + <kbd>shift</kbd> + <kbd>5</kbd> - *截屏和录制选项*

查看快捷键使用说明：

- 打开 *系统设置 >（左边列表最底下）键盘 > 键盘快捷键...* ，单击左侧列表的“截屏”选项，可查看具体的快捷键使用说明。

参考：

1. https://baijiahao.baidu.com/s?id=1745189312105411581 - *Mac截图保存在哪里？*

---

长截图：

- 借助第三方工具「[iShot Pro 破解版](https://appstorrent.ru/1619-ishot-pro-screenshot-recording.html)」；如遇安装、开启问题，可查看网友评论的[解决办法](https://appstorrent.ru/1619-ishot-pro-screenshot-recording.html#comment-id-91592)。

### 快捷指令

> 快捷指令是一种可让你使用 App 完成一个或多个任务的快捷方式。“快捷指令” App 可让你创建包含多个步骤的快捷指令。例如，你可以构建一个“冲浪时间”快捷指令来获取冲浪报道、提供预计到达海滩的时间以及播放冲浪音乐播放列表。

https://support.apple.com/zh-cn/guide/shortcuts-mac/welcome/7.0/mac - *适用于 Mac 的《快捷指令使用手册》 - 官方 Apple 支持 (中国)*

## 常见问题

1. Mac 中的 Git

    macOS 系统自带 Git，无需额外安装。

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

### 如何批量修改文件名

http://www.taodudu.cc/news/show-1162355.html?action=onClick - *一分钟学会在Mac中如何将文件批量重命名*

### 解压 rar 文件

https://zhuanlan.zhihu.com/p/103473716 - *教你如何在Mac系统下解压rar,zip等各种格式文件*

1. 在 App Store 中搜索并安装工具 `The Unarchiver`。

### 程序安装问题

1. Mac 提示无法验证开发者

   https://jingyan.baidu.com/article/b87fe19e6dc68a1319356823.html - *mac提示无法验证开发者怎么办-百度经验*

   操作步骤：
   1. 打开"系统偏好设置"；
   2. 点击"安全性与隐私"进入；
   3. 点击"通用"进入；
   4. 点击"左下角锁"并输入用户密码进行解锁；
   5. 找到并勾选"App Store 和被认可的开发者"。

   > 系统版本：*macOS Ventura 13.1.1* 中设置
   1. 在“程序坞”中找到并打开应用“系统设置”；
   2. 点击左边列表“隐私与安全性”；
   3. 点击右边列表“安全性”-“App Store 和被认可的开发者”，开启授权。

2. 如何安装 Rosetta

   https://support.apple.com/zh-cn/HT211861 - *如果您需要在 Mac 上安装 Rosetta - 官方 Apple 支持 (中国)*

3. MacBook M1 芯片关闭 SIP 教程

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
2. 参考上面的链接进行设置。

其它教程：

1. https://mp.weixin.qq.com/s/u31ajN_EP8LibFSIsNw3mQ - *将任意应用窗口置顶显示，这个工具太强了。*

### 如何限制网络速度

1. https://blog.csdn.net/u013511989/article/details/80420528 - *network link conditioner : mac 网络限速插件_网络限速软件mac版_Hey_Sarah的博客-CSDN博客*

2. https://www.zhihu.com/question/30815443 - *如何在macbook上限制网络速度呢？ - 知乎*

3. https://discussionschinese.apple.com/thread/252275262 - *‍Mac 怎么把某一个软件限速，我下载东西的时… - Apple 社区*

### 如何关闭 _nsurlsessiond 进程

操作步骤：

> 系统版本：macOS Ventura 13.3.1 中设置

1. 打开 *系统设置 > 网络 > 防火墙 > 选项...* ；
2. 添加 > 选择 `/usr/libexec/nsurlsessiond`。

为什么要关闭：

1. https://www.zhihu.com/question/30260795 - *mac系统里的nsurlsessiond怎么关呀，因为他在不停的走流量！ ？ - 知乎*
2. https://discussionschinese.apple.com/thread/250823627 - *nsurlsessiond进程占据流量和带宽 - Apple 社区*

如何关闭 iCloud

1. https://support.apple.com/zh-cn/guide/mac-help/mh36834/mac - *在 Mac 上设置 iCloud 功能 - 官方 Apple 支持 (中国)*

参考：

1. https://chadou.me/p/193 - *解决Mac nsurlsessiond 吃光带宽速度的办法*
2. https://discussions.apple.com/thread/253593902 - *Nsurlsessiond - Apple Community*
3. https://discussions.apple.com/thread/6605949 - *nsurlsessiond - taking up all bandwidth!!… - Apple Community*
4. https://zhuanlan.zhihu.com/p/35614652 - *nsurlsessiond 与 iCloud - 知乎*
5. https://digitalixy.com/apple/1073433.html - *如何删除 NSURLSessionD Mac – Digitalixy.com*
