# Firefox

## 简介

> Firefox 是一款快速、轻量、注重隐私的浏览器，全平台可用。

## 官方

1. https://www.firefox.com.cn/ - *Firefox 火狐浏览器 - 全新、安全、快速 | 官方最新下载*
2. https://www.mozilla.org/zh-CN/firefox/new/ - *下载由 Mozilla 开发的桌面版 Firefox*
3. https://support.mozilla.org/zh-CN/ - *Mozilla 技术支持*

## 安装

https://www.mozilla.org/zh-CN/firefox/all/ - *下载 Firefox 浏览器，这里有简体中文及其他 90 多种语言版本供您选择*

### 桌面端

1. Beta：https://www.mozilla.org/zh-CN/firefox/channel/desktop/#beta - *下载和测试 Firefox 桌面版、Android 版和 iOS 版的早期版本。*
2. Nightly：https://www.mozilla.org/zh-CN/firefox/channel/desktop/#nightly - *下载和测试 Firefox 桌面版、Android 版和 iOS 版的早期版本。*
3. Dev：https://www.mozilla.org/zh-CN/firefox/developer/ - *Firefox 开发者版*
    - macOS（直接下载链接）：https://download.mozilla.org/?product=firefox-devedition-latest-ssl&os=osx

### 移动端

**应用商店：**

1. https://play.google.com/store/apps/dev?id=7083182635971239206 - *Android Apps by Mozilla on Google Play*

2. https://apps.apple.com/us/developer/mozilla/id380366936 - *Mozilla Apps on the App Store*

**mozilla.org：**

1. Firefox
    1. Android：https://www.mozilla.org/zh-CN/firefox/browsers/mobile/android/ - *Android 版 Firefox 浏览器 - Mozilla*
    2. iOS：https://www.mozilla.org/zh-CN/firefox/browsers/mobile/ios/ - *适用于 iOS（iPhone 和 iPad）的 Firefox 浏览器 - Mozilla*
2. Firefox Beta
   1. Android：https://www.mozilla.org/zh-CN/firefox/channel/android/ - *体验预览版 Android 浏览器中的新功能 | Firefox*
3. Firefox Nightly
   1. Android：https://www.mozilla.org/zh-CN/firefox/channel/android/ - *体验预览版 Android 浏览器中的新功能 | Firefox*
4. Firefox Focus
    https://www.mozilla.org/zh-CN/firefox/browsers/mobile/focus/ - *Firefox Focus：隐私浏览器*
    1. Android：https://play.google.com/store/apps/details?id=org.mozilla.focus - *Firefox Focus: No Fuss Browser - Apps on Google Play*
    2. iOS：https://apps.apple.com/us/app/firefox-focus-privacy-browser/id1055677337 - *Firefox Focus: Privacy browser on the App Store*

**firefox.com.cn：**

<https://www.firefox.com.cn/browsers/mobile/> - *Firefox 移动浏览器将您的隐私放在首位*
- Android: ~~https://www.firefox.com.cn/browsers/mobile/android/ - *Android 版 Firefox 浏览器*~~
- iOS: https://www.firefox.com.cn/browsers/mobile/ios/ - *适用于 iOS（iPhone 和 iPad）的 Firefox 浏览器*

## 设置

### 常规

```uri
about:preferences#general
```

浏览：

- [x] 总是为链接添加下划线

### 搜索

```uri
about:preferences#search
```

### 同步

```uri
about:preferences#sync
```

### 无图模式

操作步骤：

1. 打开火狐浏览器，在地址栏输入 `about:config`，然后回车；
2. 在出来的页面中搜索： `permissions.default.image`；
3. 把 `permissions.default.image` 设成 2 保存。

参考：

1. https://blog.csdn.net/weixin_44545251/article/details/122617515 - *火狐浏览器设置无图模式_permissions.default.image-CSDN博客*

## 用法

### 地址栏搜索

1. <https://support.mozilla.org/zh-CN/kb/搜索栏#firefox:mac> - *什么是搜索栏 | Firefox 帮助*
2. <https://support.mozilla.org/zh-CN/kb/自动补齐——从地址栏搜索书签、历史和标签页#firefox:mac> - *自动补齐——从地址栏搜索书签、历史和标签页 | Firefox 帮助*
3. <https://support.mozilla.org/zh-CN/kb/search-suggestions-firefox> - *Firefox 搜索建议 | Firefox 帮助*

#### 搜索书签

操作步骤：

1. 点击地址栏或按下 <kbd>command</kbd> + <kbd>L</kbd> 按键定位光标到地址栏。如果你刚刚打开 Firefox、新标签页活新窗口，光标就在地址栏。
2. 在地址栏输入：<kbd>*</kbd> + <kbd>␣</kbd> + 搜索关键字
3. 按 <kbd>return</kbd> 键，或者点击地址栏右边的箭头。（按下 <kbd>command</kbd> + <kbd>return</kbd> 按键，在新前台标签页打开选中的书签。按下 <kbd>command</kbd> + 鼠标点击选中的书签，在当前标签页右边打开新前台标签页。）

#### 搜索标签页

<https://support.mozilla.org/zh-CN/kb/搜索标签页> - *搜索标签页 | Firefox 帮助*

### 快捷键

#### 键盘快捷键

https://support.mozilla.org/zh-CN/kb/键盘快捷键#firefox:mac - *键盘快捷键 | Firefox 帮助*

开发者快捷键：https://firefox-source-docs.mozilla.org/devtools-user/keyboard_shortcuts/index.html - *All keyboard shortcuts — Firefox Source Docs documentation*

#### 鼠标快捷键

https://support.mozilla.org/zh-CN/kb/鼠标快捷键#firefox:mac - *鼠标快捷键 | Firefox 帮助*

### 快捷命令 URL

```bash
about:about
```

```bash
about:config
```

参考：


1. https://kb.mozillazine.org/About_protocol_links - *About protocol links - MozillaZine Knowledge Base*
2. https://www.webnots.com/list-of-firefox-about-pages/ - *List of Firefox about: Pages – WebNots*

### 扩展程序

https://addons.mozilla.org/zh-CN/firefox/ - *Firefox 附加组件（zh-CN）*

https://addons.mozilla.org/zh-CN/android/ - *适用于 Android 的 Firefox 附加组件（zh-CN）*

## 更新日志

1. https://www.mozilla.org/en-US/firefox/android/141.0.3/releasenotes/ - *Firefox for Android 141.0.3, See All New Features, Updates and Fixes*

## 常见问题解答

### 如何复制链接文字

- 方式 1 ：按住键盘 <kbd>option</kbd> 按键，鼠标左键长按左右选择链接文字；
- 方式 2 ：下载浏览器扩展 「Select like a Boss」 [Firefox](https://addons.mozilla.org/zh-CN/firefox/addon/select-like-a-boss/) [Chrome](https://www.crxsoso.com/webstore/detail/mbnnmpmcijodolgeejegcijdamonganh)。

参考：

1. https://www.appinn.com/select-like-a-boss/ - *如何选中链接上文字？肆意选择：Select like a Boss - 小众软件*

### 如何新建标签页打开链接

- 方式 1 ：在链接上鼠标右键单击，点击 “新建标签页打开链接”；
- 方式 2 ：在链接上鼠标左键长按，上下拖拉链接，然后松开鼠标左键。

## 参考

暂无
