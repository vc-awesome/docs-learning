# 应用列表模板

![illustration](https://developer.android.google.cn/static/images/design/ui/mobile/passkeys_header.png?hl=zh-cn)

<small>*插图来源于：[Android Developers](https://developer.android.google.cn/design/ui/mobile/guides/patterns/passkeys?hl=zh-cn)*</small>

- [x] Desktop Applications
    - [x] Windows
        - [x] Download exe (direct downloads)
        - [x] Portable App for Flash Drives (Portable version)
        - [x] Microsoft Store
        - [x] Chocolatey Package Manager
    - [x] macOS
        - [x] Download dmg (direct downloads)
        - [x] Mac App Store
        - [x] Homebrew Package Manager
    - [x] Linux
        - [x] Snap Package Manager
- [x] Mobile Applications
    - [x] Android
        - [x] Download apk (direct downloads)
        - [x] Google Play
        - [x] F-Droid
        - [x] GitHub Releases
    - [x] iOS
        - [x] App Store
- [x] Web Application
- [x] Web Browser Extensions
    - [x] Google Chrome
    - [x] Mozilla Firefox
    - [x] Microsoft Edge
    - [x] Safari
- [x] Command Line Interface
    - [x] Windows
    - [x] macOS
    - [x] Linux
    - [x] Node.js（npm）
- [x] Source Code
    - [x] Build/Run
- [x] Server
    - [x] Docker

参考：

1. https://1password.com/zh-cn/downloads/ - *下载 | 1Password*
2. https://bitwarden.com/download/ - *Install and Sync All of Your Devices | Bitwarden*
3. https://www.manyver.se/download/ - *Download | Manyverse*
4. https://www.sublimemerge.com/download - *Download - Sublime Merge*
5. https://telegram.org/apps - *Telegram Applications*

## 桌面客户端

- 支持 Windows, macOS, Linux
- 支持 Android, iOS
- 支持 Web, Web Browser Extensions
- 支持 IDEs plugin
- 支持 CLI

模板样式：

<output data-lang="output">

[VSCode](https://code.visualstudio.com/) - *Visual Studio Code is a code editor redefined and optimized for building and debugging modern web and cloud applications.  Visual Studio Code is free and available on your favorite platform - Linux, macOS, and Windows.* [破解版]()  
\> *via https://baijiahao.baidu.com/s?id=1757678693539809181 - 三款传输工具，LocalSend、极连快传、互传软件体验*

- 支持 Windows（[破解版]()）, macOS（[破解版]()）, Linux, [Web](https://vscode.dev/)

- 开源软件（[GitHub](https://github.com/Microsoft/vscode/)）

</output>

复制模板：

### Lite

基础版

```md
1. ✅ []() - **

    - 支持 Windows, macOS, Linux, Android（[Google Play]()）, iOS, Web Browser Extensions

    - 开源软件（[GitHub]()）
```

### Pro

补充版

```md
1. ✅ []() - ** [Cracked]()\
    \> _via URL-placeholder_

    - 支持 Windows, macOS（[Homebrew](), [App Store](), [Intel Chip](), [Apple Chip]）, Linux, [Web](), Android（[Google Play](), [F-Droid](), [Termux]()）, iOS（[App Store]()）, Web, Terminal, Editor Plugins（[VS Code plugin]()）, 微信小程序, 浏览器扩展, 代码部署 或 [Source code](), and [more]()

    - 开源软件（[GitHub]()）
```

附加：

```md
包含广告，包含内购商品
```

```md
开源软件（[GitHub]()）
```

```md
付费应用
```

```md
免费试用 ? 天
```

```md
免费功能（Lite 版本）
```

```md
收费功能（Pro 版本，应用内购买升级）
```

```md
注册登录（开通会员解锁更多功能）
```

```md
有关详细信息，请参阅“”。
```

```html
<details markdown='1'><summary><i style="color:red">SEE MORE >></i></summary>

</details>
```

> 💡 内容前后必须各无缩进的空出一行，否则内容的样式无法呈现。

✅ 前后无缩进空出一行的效果：

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

❎ 前后没有空出一行的效果：

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

模板样式 1：

<output data-lang="output">

[Omni-Notes](https://omninotes.app/) - *Open source note-taking application for Android* [APK]() [Google Play](https://play.google.com/store/apps/details?id=it.feio.android.omninotes) [F-Droid](https://f-droid.org/repository/browse/?fdid=it.feio.android.omninotes.foss) [GitHub](https://github.com/federicoiosue/Omni-Notes)

![f-droid](https://badgen.net/f-droid/v/it.feio.android.omninotes.foss)
![GitHub last commit](https://img.shields.io/github/last-commit/federicoiosue/Omni-Notes?color=blue&logo=github)

</output>

复制模板：

```md
1. []() - ** [APK]() [Google Play]() [F-Droid]() [GitHub]() [破解版]()
```

```md
![f-droid](https://badgen.net/f-droid/v/)
![GitHub last commit](https://img.shields.io/github/last-commit/?color=blue&logo=github)
```

### Pro

模板样式 2：

<output data-lang="output">

> 在打开网址之前，允许您分析（或共享）它们。

![f-droid](https://badgen.net/f-droid/v/com.trianguloy.urlchecker)
![GitHub last commit](https://badgen.net/github/last-commit/TrianguloY/UrlChecker?icon=github&color=blue)

---

https://f-droid.org/packages/com.trianguloy.urlchecker/ - *URLCheck | F-Droid - Free and Open Source Android App Repository*

https://github.com/TrianguloY/UrlChecker - *GitHub - TrianguloY/UrlChecker: Android app by TrianguloY: URLCheck*

</output>

复制模板：

```markdown
> 

![f-droid](https://badgen.net/f-droid/v/)
![GitHub last commit](https://badgen.net/github/last-commit/?icon=github&color=blue)

---

<替换/删除> https://f-droid.org/packages/com.trianguloy.urlchecker/ - *URLCheck | F-Droid - Free and Open Source Android App Repository*

<替换/删除> https://github.com/TrianguloY/UrlChecker - *GitHub - TrianguloY/UrlChecker: Android app by TrianguloY: URLCheck*
```

---

```md
> <img src="" alt="package icon" loading="lazy" decoding="async" align="left" width="58" hspace="10" vspace="0" />
```
*👆 > \<img src="" alt="package icon" loading="lazy" decoding="async" align="left" width="58" hspace="10" vspace="0" />*

## 手机浏览器

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
- [ ] 设置 - 应用布局
- [ ] 设置 - 语言
- [ ] 全屏浏览
- [ ] 屏幕旋转
- [ ] 导入/导出书签（仅支持 html 格式）

</output>

_注：屏幕截图教程用 https://github.com/docsifyjs/docsify 页面操作、录制。_

----

_📋复制模板_

``` markdown
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
- [ ] 设置 - 应用布局
- [ ] 设置 - 语言
- [ ] 全屏浏览
- [ ] 屏幕旋转
- [ ] 导入/导出书签（仅支持 html 格式）
```

## 浏览器扩展

模板样式：

<output data-lang="output">

✔️[Extensity](https://chrome.google.com/webstore/detail/extensity/jjmflmamggggndanpgfnpelongoepncg) - *Quickly enable/disable Google Chrome extensions*
[Chrome]() [Firefox]() [Opera]() [Web]() [GitHub](https://github.com/sergiokas/Extensity)

![Chrome Web Store](https://img.shields.io/chrome-web-store/v/jjmflmamggggndanpgfnpelongoepncg)
![Chrome Web Store](https://img.shields.io/chrome-web-store/rating/jjmflmamggggndanpgfnpelongoepncg?style=social)
![GitHub last commit](https://img.shields.io/github/last-commit/sergiokas/Extensity?color=blue&logo=github)
![Static Badge](https://img.shields.io/badge/Tampermonkey-blue?logo=tampermonkey&labelColor=grey)

- 手机浏览器可用

</output>

复制模板：

```md
✔️[]() - ** [Chrome]() [Firefox]() [Edge]() [Opera]() [Web]() [GitHub]()
```

```md
![Chrome Web Store](https://img.shields.io/chrome-web-store/v/)
![Chrome Web Store](https://img.shields.io/chrome-web-store/rating/?style=social)
![GitHub last commit](https://img.shields.io/github/last-commit/?color=blue&logo=github)
![Static Badge](https://img.shields.io/badge/Tampermonkey-blue?logo=tampermonkey&labelColor=grey)
```

```md
- 手机浏览器可用
```
