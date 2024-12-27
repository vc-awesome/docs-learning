# Chrome

## 简介

> Chrome is the official web browser from Google, built to be fast, secure, and customizable. Download now and make it yours.
> 
> Chrome 是 Google 的官方网络浏览器，速度飞快，安全可靠，并且支持自定义。欢迎立即下载，随心定制。

## 官方

1. https://www.google.com/chrome/ - *Google Chrome 网络浏览器*
2. https://www.google.cn/chrome/ - *Google Chrome 网络浏览器*
3. https://support.google.com/chrome/ - *Google Chrome帮助*

## 安装

### 桌面端

1. 正式版：https://www.google.cn/intl/zh-CN/chrome/ - *Google Chrome 网络浏览器*
2. Beta：https://www.google.cn/intl/zh-CN/chrome/beta/ - *试用 Google Chrome Beta 版的新功能 - Google Chrome*
3. Canary：https://www.google.cn/intl/zh-CN/chrome/canary/ - *开发者专用的 Chrome Canary 版功能 - Google Chrome* [macOS Download dmg (direct downloads)](https://dl.google.com/chrome/mac/universal/canary/googlechromecanary.dmg)
4. Dev：https://www.google.cn/intl/zh-CN/chrome/dev/ - *Google Chrome 开发者工具 - Google Chrome*

### 移动端

1. 正式版：https://play.google.com/store/apps/details?id=com.android.chrome - *Chrome*
2. Beta：https://play.google.com/store/apps/details?id=com.chrome.beta - *Chrome Beta*
3. Canary：https://play.google.com/store/apps/details?id=com.chrome.canary - *Chrome Canary（不稳定）*
4. Dev：https://play.google.com/store/apps/details?id=com.chrome.dev - *Chrome Dev*

## 设置

暂无

## 用法

### 快捷命令 URL

```bash
chrome://chrome-urls/
```

```bash
chrome://version/
```

```bash
chrome://about/
```

```bash
chrome://extensions/
```

```bash
chrome://apps/
```

```bash
chrome://flags/
```

```bash
chrome://inspect/
```

```bash
chrome://net-internals/#dns
```

```bash
chrome://credits/
```

```bash
chrome-native://newtab/
```

参考：

1. https://blog.csdn.net/m0_37948734/article/details/81502734 - *chrome://命令*
2. https://www.cnblogs.com/hanggegege/p/6241367.html - *chrome:// 的秘密！！一些有用的命令！*
3. https://www.cnblogs.com/ChandlerVer5/p/chrome_URLs.html - *那些你不知道的chrome URLs - 爱好和平的阿道夫 - 博客园*
4. https://sspai.com/post/43853 - *这 15 条实用命令，帮你打开 Chrome 浏览器的隐藏功能 - 少数派*
5. https://www.webnots.com/useful-chrome-url-commands - *Top 10 Chrome URL Command Line Shortcuts (Full List Included) – WebNots*
6. https://www.dignited.com/46301/top-google-chrome-url-command-shortcuts-you-should-know/ - *Top Google Chrome URL Command Shortcuts you should know - Dignited*

## 常见问题解答

### 浏览器禁止 http 自动转成 https

操作步骤：

1. 打开 Chrome 浏览器，在地址栏中输入 `chrome://net-internals/#hsts`
2. 在页面中查找 `Delete domain security policies`，在 `Domain` 的输入框中输入域名，并点击 `Delete` 删除
3. 可以在 `Query Expect-CT domain` 中测试是否删除成功

## 参考

1. https://jingyan.baidu.com/album/b2c186c822546ac46ef6ff04.html - *google浏览器怎么删除指定cookie数据*
2. https://blog.csdn.net/u012086167/article/details/38331543 - *google浏览器网页背景颜色修改*
3. https://blog.csdn.net/zhaojunjie_dream/article/details/80021064 - *如何通过Chrome打断点的方法调试代码*
