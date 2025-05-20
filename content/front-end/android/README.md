# Android

## 简介

> Android 是一个开源的，基于 Linux 的移动设备操作系统，如智能手机和平板电脑。Android 是由谷歌及其他公司带领的开放手机联盟开发的。
>
> <cite>—— [Android 概述 | 菜鸟教程](https://www.runoob.com/android/android-overview.html)</cite>

## 官方

https://github.com/android - *Android · GitHub*

## 教程

### 官方教程

https://developer.android.com/?hl=zh-cn - *Android 移动应用开发者工具 – Android 开发者  |  Android Developers*

https://developer.android.google.cn/ - *Android 开发者  |  Android Developers*

1. [基本知识](https://developer.android.google.cn/get-started?hl=zh-cn)
2. [设计和规划](https://developer.android.google.cn/design?hl=zh-cn)
3. [开发](https://developer.android.google.cn/develop?hl=zh-cn)
4. [Google Play](https://developer.android.google.cn/distribute?hl=zh-cn)
5. [社区](https://developer.android.google.cn/community?hl=zh-cn)
6. [Android Studio](https://developer.android.google.cn/studio?hl=zh-cn)

### 第三方教程

1. https://www.runoob.com/android/android-tutorial.html - *Android 教程 | 菜鸟教程*

2. https://www.runoob.com/w3cnote/android-tutorial-intro.html - *1.0 Android基础入门教程 | 菜鸟教程*

## 快速入门

Android 开发是一个广泛的主题，涉及多个方面，包括环境设置、基础知识、UI 设计、数据存储等。以下是一个简单的 Android 开发教程的概述，帮助你入门：

1. 环境设置
    - **安装 Android Studio**：这是官方的 Android 开发 IDE，包含了所有必要的工具。
    - **安装 JDK**：确保你安装了 Java Development Kit（JDK），通常 Android Studio 会自动安装。

2. 创建第一个项目
    - 打开 Android Studio，选择 "Start a new Android Studio project"。
    - 选择一个模板（如 Empty Activity），然后点击 "Next"。
    - 配置项目名称、包名、保存位置等，点击 "Finish"。

3. 理解项目结构
    - **Manifest 文件**：`AndroidManifest.xml`，定义应用的基本信息。
    - **Java/Kotlin 文件**：存放你的应用逻辑。
    - **资源文件**：如布局文件（`res/layout`）、图片（`res/drawable`）等。

4. UI 设计
    - 使用 XML 文件设计用户界面。可以在 `res/layout` 文件夹中找到 `activity_main.xml`。
    - 使用 Android Studio 的布局编辑器，可以拖放组件。

5. 编写代码
    - 在 `MainActivity.java` 或 `MainActivity.kt` 中编写逻辑代码。
    - 使用 `setContentView(R.layout.activity_main)` 来设置布局。

6. 运行应用
    - 连接 Android 设备或使用 Android 模拟器。
    - 点击运行按钮，选择设备，应用将被安装并启动。

7. 学习基础组件
    - **Activity**：应用的单一界面。
    - **Fragment**：可重用的 UI 组件。
    - **Service**：在后台运行的组件。
    - **Broadcast Receiver**：用于接收广播消息。
    - **Content Provider**：用于管理应用间的数据共享。

8. 数据存储
    - 使用 SQLite 数据库、SharedPreferences 或文件存储来保存数据。

9. 网络请求
    - 使用 Retrofit 或 Volley 库进行网络请求。

10. 学习资源
    - **官方文档**：Android Developers（https://developer.android.com/）
    - **在线课程**：如 Coursera、Udacity 等提供的 Android 开发课程。
    - **书籍**：如《Head First Android Development》、《Android Programming: The Big Nerd Ranch Guide》等。

11. 实践项目
    - 尝试构建简单的应用，如待办事项列表、天气应用等，以巩固所学知识。

希望这个概述能帮助你开始 Android 开发之旅！如果你有具体问题或需要更详细的指导，请随时问我。

## 入门指南

### 设计和规划

https://developer.android.google.cn/design?hl=zh-cn - *设计和规划  |  Android Developers*

#### 界面设计

https://developer.android.google.cn/design/ui?hl=zh-cn - *界面设计  |  UI Design  |  Android Developers*

https://developer.android.google.cn/design/ui/mobile?hl=zh-cn - *移动设备 | 界面设计  |  Mobile  |  Android Developers*

#### 架构

https://developer.android.google.cn/topic/architecture/intro?hl=zh-cn - *应用架构  |  App architecture  |  Android Developers*

### 开发

https://developer.android.google.cn/develop?hl=zh-cn - *针对 Android 进行开发  |  Android Developers*

#### 界面

https://developer.android.google.cn/develop/ui?hl=zh-cn - *开发 Android 界面  |  Jetpack Compose  |  Android Developers*

https://developer.android.google.cn/develop/ui/compose/documentation - *Get started with Jetpack Compose  |  Android Developers*

https://developer.android.google.cn/develop/ui/views/layout/declaring-layout - *Layouts in views  |  Views  |  Android Developers*

#### Context Menu - *上下文菜单*

1. https://www.runoob.com/w3cnote/android-tutorial-menu.html - *2.6.2 菜单(Menu) | 菜鸟教程*
2. https://developer.android.google.cn/develop/ui/views/components/menus - *Add menus  |  Views  |  Android Developers*
3. https://f-droid.org/packages/com.concept1tech.instalate/ - *InstaLate | F-Droid - Free and Open Source Android App Repository* （截图与 readme 中有关于 Context menu 的说明）
4. https://github.com/zhanghai/TextSelectionWebSearch - *GitHub - zhanghai/TextSelectionWebSearch: Add web search to text selection toolbar on Android*

#### Activity - *活动*

暂无

#### Intent - *意图*

教程：

1. https://www.runoob.com/w3cnote/android-tutorial-intent-base.html - *4.5.1 Intent的基本使用 | 菜鸟教程*
2. https://developer.android.google.cn/guide/components/intents-common?hl=zh-cn - *常见 intent  |  Android 开发者  |  Android Developers*
3. https://developer.android.google.cn/codelabs/basic-android-kotlin-training-activities-intents?hl=zh_cn - *activity 和 intent*
4. https://developer.android.com/guide/components/intents-filters?hl=zh-cn - *intent 和 intent 过滤器  |  Android Developers*

参考：

1. https://zhuanlan.zhihu.com/p/27184147 - *关于Intent你知多少？ - 知乎*
2. https://blog.csdn.net/weixin_43613360/article/details/87070243 - *intent的四种启动模式和七大属性_intent.setaction-CSDN博客*
3. https://zhuanlan.zhihu.com/p/165542980 - *Intent详解以及Activity的跳转与数据传递 - 知乎*
4. https://blog.csdn.net/JMW1407/article/details/114932159 - *Android：Intent的理解和使用_android intent-CSDN博客*
5. https://www.cnblogs.com/dame/p/8085907.html - *Intent 启动方法和启动Action大全 - 勤能补拙Android - 博客园*

#### URL Scheme - *URL 方案*

1. https://www.zhihu.com/question/270839820/answer/2297535714 - *H5网页在浏览器中唤起手机app，怎么实现？ - openinstall 的回答 - 知乎*
2. https://www.jianshu.com/p/500f4be528e3 - *H5唤起APP进行分享的尝试 - 二歪求知iSk2y - 简书*

#### WebView

https://zhuanlan.zhihu.com/p/93187239 - *WebView的使用详解 - 知乎*

## 工具

### Android Studio

https://developer.android.google.cn/studio?hl=zh-cn - *下载 Android Studio 和应用工具 - Android 开发者  |  Android Developers*

### SDK工具

https://developer.android.google.cn/tools?hl=zh-cn - *命令行工具  |  Android Studio  |  Android Developers*

#### 安装

macOS：

https://formulae.brew.sh/cask/android-platform-tools - *android-platform-tools — Homebrew Formulae*

```bash
brew install --cask android-platform-tools
```

#### adb

https://developer.android.google.cn/tools/adb?hl=zh-cn - *Android 调试桥 (adb)  |  Android Studio  |  Android Developers*

### Gradle Build Tool

[Gradle Build Tool](https://gradle.org/) - *Accelerate developer productivity. Gradle helps teams build, automate and deliver better software, faster.*

https://github.com/gradle/gradle - *GitHub - gradle/gradle: Adaptable, fast automation for all*

![GitHub last commit](https://img.shields.io/github/last-commit/gradle/gradle?color=blue&logo=github)
![GitHub Release Date - Published_At](https://img.shields.io/github/release-date/gradle/gradle?display_date=published_at&logo=github)
![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/gradle/gradle?logo=github)
![GitHub Repo stars](https://img.shields.io/github/stars/gradle/gradle?style=social)

## 示例

### 源码

1. https://apt.izzysoft.de/fdroid/index/apk/juniojsv.minimum - *Minimum - IzzyOnDroid F-Droid Repository*
2. https://github.com/SimonMarquis/Android-UrlSchemeInterceptor - *GitHub - SimonMarquis/Android-UrlSchemeInterceptor: Intercept and debug url scheme on Android*
3. https://github.com/k3b/intent-intercept - *k3b/intent-intercept: Android dev tool to view inter-app communication*
4. https://github.com/zhanghai/TextSelectionWebSearch - *zhanghai/TextSelectionWebSearch: Add web search to text selection toolbar on Android*

---

https://github.com/search?q=share+clipboard&type=repositories - *Repository search results*

1. https://github.com/TrianguloY/SimpleClipboardEditor - *TrianguloY/SimpleClipboardEditor: Android app by TrianguloY: Simple Clipboard Editor*
2. https://github.com/cketti/ShareUrlToClipboard - *cketti/ShareUrlToClipboard: Android sample app that shows how to add a 'Copy link to clipboard' option to the Share dialog*
3. https://github.com/tengusw/share_to_clipboard - *tengusw/share_to_clipboard: Android share to clipboard*
