## 官方

https://www.apple.com.cn/ - *Apple (中国大陆) - 官方网站*

## Tutorial

?> Mac的使用教程

- 触控板单指点击为单击功能
- 触控板双指点击为鼠标右键功能
- command + Q 退出当前程序，后台不运行该程序
- control + 空格 切换输入法
- 文本操作
  - fn + 上箭头：向上滚动一页（Page Up）
  - fn + 下箭头：向下滚动一页（Page Down）
  - fn + 左箭头：滚动至文档开头（Home）
  - fn + 右箭头：滚动至文档末尾（End）
  - cmd + 右箭头：将光标移至当前行的末尾
  - cmd + 左箭头：将光标移至当前行的行首
  - cmd + 下箭头：将光标移至文稿末尾
  - cmd + 上箭头：将光标移至文稿开头
  - Opt + 右箭头：将光标移至下一个单词的末尾
  - Opt + 左箭头：将光标移至下一个单词的开头
  - ctr + A：移至行或段落的开头
  - fn + backspace：删除光标之后的一个字符
  - option + backspace：删除光标之前的一个单词（英文有效）
  - fn + option + backspace：删除光标之后的一个单词
  - cmd + backspace：删除当前文件

- 显示桌面
  - fn + F11

- 窗口最小化
  - cmd + m
  - cmd + opt + m
  - cmd + h
  - cmd + opt + h

- 显示窗口
  - cmd + tab + opt + 松开cmd

- 查看隐藏的文件
  - cmd + shift + .

- QQ双开：打开 QQ 客户端，然后cmd + n

- 隐藏文件、文件夹？

- 如何设置文件默认打开方式？
    - https://jingyan.baidu.com/article/d5c4b52bd1496e9b560dc5b0.html

- chrome 浏览器

  普通刷新 command + R

  强制刷新 command + Shift + R

### 卸载软件

- Mac 如何彻底移除应用程序？

  打开访达 > 应用程序 > 选择应用程序 > 移除至废纸篓 > 清倒废纸篓（彻底卸载）

- Mac 系统如何卸载/删除软件？

  https://jingyan.baidu.com/article/59703552b380b08fc00740b9.html

### 截屏

- cmd + shift + 3 - *截取全屏*
- cmd + shift + 4 - *选择性截取，可自定义截屏、可截取全屏、可截取活动窗口*

### 开机启动项

Https://blog.csdn.net/lxf_no1/article/details/109616763 - *Mac OS开机启动自动执行命令行*

`系统偏好设置 > 用户与群组 > 登录项` 添加完然后重启电脑

## FAQ

1. Mac 查看被隐藏的文件

   `finder`下使用 <kbd>Command</kbd> + <kbd>Shift</kbd> + <kbd>G</kbd> 可以前往任何文件夹，包括隐藏文件夹。

2. Mac 如何显示隐藏文件

   <kbd>Command</kbd> + <kbd>Shift</kbd> + <kbd>.</kbd> 可以显示隐藏文件、文件夹，再按一次，恢复隐藏。

3. Mac 指定文件夹打开终端

4. Mac 如何查看访达的当前路径

5. Mac 中的git

   mac 系统自带 git，无需额外安装

6. Mac 如何快速显示桌面

   1. 组合键：<kbd>command</kbd> + <kbd>F3</kbd>
   2. 组合键：<kbd>fn</kbd> + <kbd>f11</kbd>

7. Mac 解压 rar

   https://zhuanlan.zhihu.com/p/103473716 - *教你如何在Mac系统下解压rar,zip等各种格式文件*

   1. app store 安装工具 `The Unarchiver`



### 程序安装问题

1. Mac 提示无法验证开发者

   https://jingyan.baidu.com/article/b87fe19e6dc68a1319356823.html - *mac提示无法验证开发者怎么办-百度经验*

   1. 打开`系统偏好设置`
   2. 点击`安全性与隐私`进入
   3. 点击`通用`进入
   4. 点击`左下角锁`并输入用户密码进行解锁
   5. 找到并勾选 `App Store 和被认可的开发者`即可

2. 如何安装 Rosetta

   https://support.apple.com/zh-cn/HT211861

3. MacBook m1 芯片关闭sip教程

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
