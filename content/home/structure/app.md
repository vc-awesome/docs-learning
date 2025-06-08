# 应用结构

![illustration](https://developer.android.google.cn/static/images/design/ui/mobile/passkeys_header.png?hl=zh-cn)

<small>*插图来源于：[Android Developers](https://developer.android.google.cn/design/ui/mobile/guides/patterns/passkeys?hl=zh-cn)*</small>

支持：

- [Desktop Applications](#desktop-apps)
    - [Windows](#windows)
        - Download exe (direct downloads)
        - Portable App for Flash Drives (Portable version)
        - Microsoft Store
        - WinGet Package Manager
        - Chocolatey Package Manager
        - Scoop Package Manager
    - [macOS](#macos)
        - Download dmg (direct downloads)
        - Download for Mac (Intel)
        - Download for Mac (Apple Silicon)
        - Mac App Store
        - Homebrew Package Manager
        - MacPorts Package Manager
    - [Linux](#linux)
        - Snap Package Manager
        - Download for Linux (x86)
        - Download for Linux (ARM64)
- [Mobile Applications](#mobile-apps)
    - [Android](#android)
        - Download apk (direct downloads)
        - Google Play
        - F-Droid
        - GitHub Releases
        - Amazon App Store
    - [iOS](#ios)
        - App Store
- [Web Application](#web-apps)
- [Web Browser Extensions](#web-browser-extensions)
    - [Google Chrome](#chrome)
    - [Mozilla Firefox](#firefox)
    - [Microsoft Edge](#edge)
    - Apple Safari
    - Opera
- [Command Line Interface](#command-line-interface)
    - Windows
    - macOS
    - Linux
    - Node.js（NPM）
- [Source Code](#source-code)
    - Build
    - Deploy
    - Run
- [Server](#server)
    - Docker
    - Linux Distribution Packages

参考：

1. https://1password.com/zh-cn/downloads/ - *下载 | 1Password*
2. https://bitwarden.com/download/ - *Install and Sync All of Your Devices | Bitwarden*
3. https://www.manyver.se/download/ - *Download | Manyverse*
4. https://www.sublimemerge.com/download - *Download - Sublime Merge*
5. https://telegram.org/apps - *Telegram Applications* 🚫
6. https://replit.com/desktop - *Replit Desktop App - Replit*
7. https://replit.com/mobile - *Replit Mobile App: Available on iOS and Android - Replit*
8. https://k9mail.app/download - *Download*
9. https://owncloud.com/desktop-app/ - *The Desktop App for efficient syncing - ownCloud - The Desktop App for efficient syncing - ownCloud*
10. https://owncloud.com/mobile-apps/ - *Mobile Apps - ownCloud - Mobile Apps - ownCloud*
11. https://owncloud.com/download-server/ - *Download Server Packages - ownCloud* 🚫
12. https://www.qemu.org/download/ - *Download QEMU - QEMU* 🚫
13. https://www.todoist.com/downloads - *Todoist for Android | Mobile App Download*
14. https://kiwix.org/en/applications/ - *Kiwix Applications - Access Knowledge Offline on Various Platforms- Kiwix* [GitHub Org](https://github.com/kiwix)
15. https://sing-box.sagernet.org/ - *Home - sing-box*

格式：

```markdown
[${title}](${url}) - *${description}*
```

- `${title}` 内容是从网页 \<title>\</title> 中提取
- `${url}` 内容是网址链接
- `${description}` 内容是从网页 \<meta name="description" content="" / > 中提取

## 桌面客户端

- 操作系统
    - 支持 Windows, macOS, Linux
- 移动应用程序
    - 支持 Android, iOS
- 浏览器
    - 支持 Web, Web Browser Extensions
- 开发人员
    - 支持 CLI
    - 支持 Server
- 其它
    - 支持 IDEs Plugin, Editors Plugin
    - 支持 Email Add-ons
    - 支持 MiniProgram
- 代码托管平台
    - GitHub
    - GitLab
    - Codeberg
    - Self-hosting

### Lite 基础版

模板样式：

<output data-lang="output">

[VSCode](https://code.visualstudio.com/) - *Visual Studio Code is a code editor redefined and optimized for building and debugging modern web and cloud applications.  Visual Studio Code is free and available on your favorite platform - Linux, macOS, and Windows.* [破解版](), [使用手册]()\
\> *via https://baijiahao.baidu.com/s?id=1757678693539809181 - 三款传输工具，LocalSend、极连快传、互传软件体验*

- 支持 Windows（[破解版]()）, macOS（[破解版]()）, Linux, [Web](https://vscode.dev/)

- 开源软件（[GitHub Repo](https://github.com/Microsoft/vscode/)）

</output>

复制模板：

```markdown
1. ✅ [${title}](${url}) - *${description}* [使用手册]()

    - 支持 Windows, macOS, Linux, Android, iOS, Web, Web Browser Extensions

    - 开源软件（[GitHub Repo]()）
```

### Pro 完整版

复制模板：

```markdown
1. ✅ [${title}](${url}) - *${description}* [Cracked](), [使用手册]()\
    \> _via ${URL-placeholder}_

    - 支持 Windows, macOS（[Homebrew](), [MacPorts](), [App Store](), [Intel Chip](), [Apple Silicon Chip]()）, Linux, Android（[Google Play](), [F-Droid](), [Termux]()）, iOS（[App Store]()）, [Web](), Server（Docker）, Terminal, Editors Plugin（[VS Code]()）, Email Add-ons（Outlook）, 小程序 或 MiniProgram（WeChat, Alipay）, 网页浏览器扩展 或 Web Browser Extensions（[Chrome](), [Firefox](), [Edge](), [Safari]()）, 源码（部署, 构建） 或 [Source Code (Deploy, Build, Run)](), and [More]()

    - 开源软件（[GitHub Repo](), [GitLab Repo](), [Codeberg Repo](), [Self-hosting]()）
```

#### 附加

App Store

- 免费（Free）\
    \> _via https://apps.apple.com/cn/app/apple-store/id375380948 - *App Store 上的“Apple Store”*_

- 免费 · 提供 App 内购买项目（Free Offers · In-App Purchases）\
    \> _via https://apps.apple.com/cn/app/messenger/id454638411 - *App Store 上的“Messenger”*_

- 付费（Paid）\
    \> _via https://apps.apple.com/cn/app/things-3/id904237743 - *App Store 上的“Things 3”*_

Google Play

- 包含内购商品（In-app purchases）\
    \> _via https://play.google.com/store/apps/details?id=com.todoist - *查阅一下“Todoist：待办列表&计划”*_

- 包含广告（Contains ads）\
    \> _via https://play.google.com/store/apps/details?id=com.ted.android - *查阅一下“TED”*_

- 付费（Paid）\
    \> _via https://play.google.com/store/apps/details?id=com.teslacoilsw.launcher.prime - *查阅一下“Nova Launcher Prime”*_

复制模板：

```markdown
包含广告，包含内购商品
```

```markdown
包含广告
```

```markdown
包含内购商品
```

```markdown
开源软件（[GitHub Repo]()）
```

```markdown
付费应用
```

```markdown
免费试用 ? 天
```

```markdown
免费功能（Lite 版本）
```

```markdown
收费功能（Pro 版本，应用内购买升级）
```

```markdown
注册登录（开通会员解锁更多功能）
```

```markdown
有关详细信息，请参阅“”。
```

```html
<details markdown='1'><summary><i style="color:red">SEE MORE >></i></summary>

    ${content}

</details>
```

##### \<details>\</details>

> 💡 内容前后必须无缩进的空出一行，否则内容的样式无法呈现。

**✅ 前后无缩进空出一行的效果：**

\> 代码

```markdown
- <details markdown='1'><summary><i style="color:red">SEE MORE >></i></summary>

    - 无序列表内容
    - 无序列表内容
    - 无序列表内容

    </details>
```

\> 效果

- <details markdown='1'><summary><i style="color:red">点击查看</i></summary>

    - 无序列表内容
    - 无序列表内容
    - 无序列表内容

    </details>

**❌ 前后没有空出一行的效果：**

\> 代码

```markdown
- <details markdown='1'><summary><i style="color:red">SEE MORE >></i></summary>
    - 无序列表内容
    - 无序列表内容
    - 无序列表内容
    </details>
```

\> 效果

- <details markdown='1'><summary><i style="color:red">点击查看</i></summary>
    - 无序列表内容
    - 无序列表内容
    - 无序列表内容
    </details>

## 移动客户端

### Lite

模板样式：

<output data-lang="output">

[Omni-Notes](https://omninotes.app/) - *Open source note-taking application for Android* [APK](), [Google Play](https://play.google.com/store/apps/details?id=it.feio.android.omninotes), [F-Droid](https://f-droid.org/repository/browse/?fdid=it.feio.android.omninotes.foss), [GitHub Repo](https://github.com/federicoiosue/Omni-Notes)

![F-Droid Version](https://img.shields.io/f-droid/v/it.feio.android.omninotes.foss)
![GitHub last commit](https://img.shields.io/github/last-commit/federicoiosue/Omni-Notes?logo=github&color=blue)
![GitHub Release Date - Published_At](https://img.shields.io/github/release-date/federicoiosue/Omni-Notes?display_date=published_at&logo=github)
![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/federicoiosue/Omni-Notes?logo=github)
![GitHub Repo stars](https://img.shields.io/github/stars/federicoiosue/Omni-Notes?style=social)

</output>

复制模板：

```markdown
1. [${title}](${url}) - *${description}* [APK](), [Google Play](), [F-Droid](), [GitHub Repo](), [破解版]()
```

```markdown
![F-Droid Version](https://img.shields.io/f-droid/v/)
![GitHub last commit](https://img.shields.io/github/last-commit/?logo=github&color=blue)
![GitHub Release Date - Published_At](https://img.shields.io/github/release-date/?display_date=published_at&logo=github)
![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/?logo=github)
![GitHub Repo stars](https://img.shields.io/github/stars/?style=social)
```

### Pro

模板样式：

<output data-lang="output">

> 在打开网址之前，允许您分析（或共享）它们。

![F-Droid Version](https://img.shields.io/f-droid/v/com.trianguloy.urlchecker)
![GitHub last commit](https://img.shields.io/github/last-commit/TrianguloY/URLCheck?logo=github&color=blue)
![GitHub Release Date - Published_At](https://img.shields.io/github/release-date/TrianguloY/URLCheck?display_date=published_at&logo=github)
![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/TrianguloY/URLCheck?logo=github)
![GitHub Repo stars](https://img.shields.io/github/stars/TrianguloY/URLCheck?style=social)

---

https://f-droid.org/packages/com.trianguloy.urlchecker/ - *URLCheck | F-Droid - Free and Open Source Android App Repository*

https://github.com/TrianguloY/UrlChecker - *GitHub - TrianguloY/UrlChecker: Android app by TrianguloY: URLCheck*

</output>

复制模板：

```markdown
> ${description}

![F-Droid Version](https://img.shields.io/f-droid/v/)
![GitHub last commit](https://img.shields.io/github/last-commit/?logo=github&color=blue)
![GitHub Release Date - Published_At](https://img.shields.io/github/release-date/?display_date=published_at&logo=github)
![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/?logo=github)
![GitHub Repo stars](https://img.shields.io/github/stars/?style=social)

---

<替换/删除> https://f-droid.org/packages/com.trianguloy.urlchecker/ - *URLCheck | F-Droid - Free and Open Source Android App Repository*

<替换/删除> https://github.com/TrianguloY/UrlChecker - *GitHub - TrianguloY/UrlChecker: Android app by TrianguloY: URLCheck*
```

---

```markdown
> <img src="" alt="package icon" loading="lazy" decoding="async" align="left" width="58" hspace="10" vspace="0" />
```
*👆 > \<img src="" alt="package icon" loading="lazy" decoding="async" align="left" width="58" hspace="10" vspace="0" />*

## 手机浏览器

模板样式：

<output data-lang="output">

Website：

GitHub：

功能：

- [ ] 开源
- [ ] 屏蔽广告
- [ ] 扩展程序
- [ ] 翻译
- [ ] 🪜 - _科学上网_
- [ ] 同步 - _登录账户后使用此功能_
- [ ] 隐私保护
- [ ] 资源嗅探
- [ ] 夜间模式
- [ ] 页内查找
- [ ] 添加到主屏幕
- [ ] 设置
    - [ ] 应用布局
    - [ ] 语言
    - [ ] 安全 DNS
- [ ] 全屏浏览
- [ ] 屏幕旋转
- [ ] 导入/导出书签（仅支持 html 格式）

</output>

_注：屏幕截图教程用 https://github.com/docsifyjs/docsify 页面操作、录制。_

复制模板：

```markdown
Website：

GitHub：

功能：

- [ ] 开源
- [ ] 屏蔽广告
- [ ] 扩展程序
- [ ] 翻译
- [ ] 🪜 - _科学上网_
- [ ] 同步 - _登录账户后使用此功能_
- [ ] 隐私保护
- [ ] 资源嗅探
- [ ] 夜间模式
- [ ] 页内查找
- [ ] 添加到主屏幕
- [ ] 设置
    - [ ] 应用布局
    - [ ] 语言
    - [ ] 安全 DNS
- [ ] 全屏浏览
- [ ] 屏幕旋转
- [ ] 导入/导出书签（仅支持 html 格式）
```

## 浏览器扩展

模板样式：

<output data-lang="output">

✅[Extensity](https://chrome.google.com/webstore/detail/extensity/jjmflmamggggndanpgfnpelongoepncg) - *Quickly enable/disable Google Chrome extensions*
[Chrome](), [Firefox](), [Edge](), [Opera](), Mobile Browser (~~Firefox~~, Edge, Kiwi), [Web](), [GitHub Repo](https://github.com/sergiokas/Extensity)

![Chrome Web Store Version](https://img.shields.io/chrome-web-store/v/jjmflmamggggndanpgfnpelongoepncg)
![Chrome Web Store Rating](https://img.shields.io/chrome-web-store/rating/jjmflmamggggndanpgfnpelongoepncg?style=social)
![GitHub last commit](https://img.shields.io/github/last-commit/sergiokas/Extensity?color=blue&logo=github)
![Static Badge](https://img.shields.io/badge/Tampermonkey-blue?logo=tampermonkey&labelColor=grey)

- 手机浏览器可用

- 收费功能（Pro 版本，应用内购买升级）

</output>

复制模板：

```markdown
✅[${title}](${url}) - *${description}* [Chrome](), [Firefox](), [Edge](), [Opera](), Mobile Browser (Firefox, Edge, Kiwi), [Web](), [GitHub Repo]()
```

```markdown
![Chrome Web Store Version](https://img.shields.io/chrome-web-store/v/)
![Chrome Web Store Rating](https://img.shields.io/chrome-web-store/rating/?style=social)
![GitHub last commit](https://img.shields.io/github/last-commit/?color=blue&logo=github)
![Static Badge](https://img.shields.io/badge/Tampermonkey-blue?logo=tampermonkey&labelColor=grey)
```

```markdown
- 手机浏览器可用
```

```markdown
- 收费功能（Pro 版本，应用内购买升级）
```

## 库/插件/框架

- Node.js
    - npm
- CDN
- 模块
    - ES Module
    - CommonJS

格式：

```markdown
[${title}](${url}) - *${description}*
```

```markdown
- 支持 CDN
```

示例：

1. [Vue.js - The Progressive JavaScript Framework | Vue.js](https://vuejs.org/) - *Vue.js - The Progressive JavaScript Framework*

    - 支持 CDN

    - 免费开源（[GitHub Repo](https://github.com/vuejs/vue)）

## 常用结构

### Desktop Apps

#### Windows

- Download exe (direct downloads)
- Portable App for Flash Drives (Portable version)
- [Microsoft Store](https://www.microsoft.com/zh-cn/store)
- [WinGet Package Manager](https://learn.microsoft.com/zh-cn/windows/package-manager/)
- [Chocolatey Package Manager](https://chocolatey.org/)
- [Scoop Package Manager](https://scoop.sh/)

#### macOS

- Download dmg (direct downloads)
- Download for Mac (Intel)
- Download for Mac (Apple Silicon)
- [Mac App Store](https://www.apple.com/apps/)
- [Homebrew Package Manager](https://brew.sh/)
- [MacPorts Package Manager](https://www.macports.org/)

#### Linux

- [Snap Package Manager](https://flathub.org/)
- Download for Linux (x86)
- Download for Linux (ARM64)

### Mobile Apps

参考：

1. https://k9mail.app/download - *Download*
2. https://replit.com/mobile - *Replit Mobile App: Available on iOS and Android - Replit - Replit Mobile App: Available on iOS and Android - Replit*
3. https://owncloud.com/mobile-apps/ - *Mobile Apps - ownCloud - Mobile Apps - ownCloud*

#### Android

- Download apk (direct downloads)
- [Google Play](https://play.google.com/store/apps)
- [F-Droid](https://f-droid.org/)
- GitHub Releases
- [Amazon App Store](https://www.amazon.com/gp/mas/get/android)

#### iOS

- [App Store](https://www.apple.com/apps/)

### Web Apps

### Web Browser Extensions

#### Chrome

1. https://chrome.google.com/webstore/ - *Chrome 应用商店*

#### Edge

1. https://microsoftedge.microsoft.com/addons/Microsoft-Edge-Extensions-Home?hl=zh-CN - _Microsoft Edge 加载项_

#### Firefox

1. https://addons.mozilla.org/zh-CN/firefox/extensions/ - _扩展 – Firefox 附加组件（zh-CN）_

### Command Line Interface

#### Node.js (npm)

### Source Code

### Server

#### docker
