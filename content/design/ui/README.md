# User Interface

- Activity Bar - 活动栏
- Address Bar - 地址栏
- Breadcrumbs (Navigation Bar) - 面包屑（导航栏）
- Context Menu - 上下文菜单
- Editor - 编辑器
- Explorer View - 资源管理器视图
    - Outline View - 大纲视图
    - Timeline View - 时间线视图
- Menu Bar - 菜单栏
- Minimap - 迷你地图
- Panel - 面板
- Search Bar - 搜索栏
- Side Bar - 侧边栏
- Status Bar - 状态栏
- Tabs - 标签
- Tool Bars - 工具栏
- Views - 视图
- Webpage - 网页
- Window - 窗口
- ${filename}
- ${extname}
- ${dirname}

## Layout

### Desktop App

- Menu Bar - 菜单栏
- Tab Bar - 标签栏
- Tool Bar - 工具栏
- Window - 窗口

### Mobile App

- System Bars - 系统栏
    - Status Bar - 状态栏
    - Navigation Bar - 导航栏
- Layout & Content - 布局和内容
    - Navigation region - 导航区域

![system-bars-gradient-protection.png (1999×389)](https://developer.android.google.cn/static/images/design/ui/mobile/system-bars-gradient-protection.png?hl=zh-cn)

![system-bars-gesture-handle.png (2048×468)](https://developer.android.google.cn/static/images/design/ui/mobile/system-bars-gesture-handle.png?hl=zh-cn)

![system-bars-display-cutouts.png (2048×468)](https://developer.android.google.cn/static/images/design/ui/mobile/system-bars-display-cutouts.png?hl=zh-cn)

参考：

1. https://developer.android.google.cn/design/ui?hl=zh-cn - *界面设计 | UI Design | Android Developers*
2. https://developer.android.google.cn/design/ui - *UI Design | Android Developers*

### Web Browser

- Address Bar - 地址栏
- Menu Bar - 菜单栏
- Tabbar - 标签栏
- Toolbar - 工具栏
- Webpage - 网页

### Web App

![how-to-use.gif (1191×933)](https://learn.microsoft.com/zh-cn/powershell/docs-conceptual/media/how-to-use-docs/how-to-use.gif)

- Menu bar - 菜单栏
- Navigation bar - 导航栏
    - Site level navigation - 网站级别导航（页面顶部）
    - Related content navigation - 相关内容导航（站点级别导航正下方）
    - In this article - 本文内容
- Table of Contents - 目录
- Action buttons - 操作按钮

浏览器布局说明图，参考：
1. https://learn.microsoft.com/zh-cn/powershell/scripting/how-to-use-docs - *如何使用 PowerShell 文档 - PowerShell | Microsoft Learn*
2. https://learn.microsoft.com/en-us/powershell/scripting/how-to-use-docs - *How to use the PowerShell documentation - PowerShell | Microsoft Learn*
3. https://docs.github.com/zh - *GitHub Docs*

## Developer

1. [Design](design/README.md)
2. [HTML](front-end/html/README.md)
3. [CSS](front-end/css/README.md)
    - [naming-rule](front-end/css/naming-rule.md)

语义化：

- `<p></p>` 段落
- `<h1> ~ <h6>` 标题
- `<blockquote></blockquote>` 引用
- `<code></code>` 代码
- `<kbd></kbd>` 键盘
- `<header></header>`
- `<main></main>`
- `<article></article>`
- `<aside></aside>`
- `<section></section>`
- `<nav></nav>`
- `<footer></footer>`
- `<button></button>`

```html
<div class="container">
  <div class="header">顶栏容器</div>
  <div class="aside">侧边栏容器</div>
  <div class="main">主要区域容器</div>
  <div class="footer">底栏容器</div>
</div>
```

命名风格：

`{命名空间}-{模块名}-{状态描述}`

`{命名空间}-{模块名}-{子模块名}`

命名空间：

- am
- mu

模块名：

- box
- modal
- tab
- nav
- list
- form
- table
- menu
- card
- tag
- search
- icon
- btn
- badge
- panel
- container
- text
- link

子模块名：

- header
- body
- content
- footer
- text
- img
- title
- value
- item
- cell
- icon
- group
- top
- bottom
- left
- right
- center

状态描述：

- active
- disabled
- hover
- current
- selected
- checked
- success
- error
- show
- hide

语法：

- block
- block__element
- block--modifier
- block__element--modifier
- block--modifier-value

Block：

- header
- container
- menu
- checkbox
- input

Element：

- menu item
- list item
- checkbox caption
- header title

Modifier：

- disabled
- highlighted
- checked
- fixed
- size big
- color yellow

### Material Design

> Material design file manager for Android. Contribute to TeamAmaze/AmazeFileManager development by creating an account on GitHub.

https://m3.material.io/ - *Material Design*

Main menu
- Home
- Get started
- Develop
  - Develop overview
  - Android
    - MDC-Android
    - Jetpack-Compose
  - Flutter
  - Web
- Foundations
  - Foundations overview
  - Accessibility
    - Overview
    - Designing
    - Writing and text
  - Adaptive design
  - Content design
    - Overview
    - Alt text
    - Global writing
    - Notifications
    - Style guide
  - Customizing Material
  - Design tokens
  - Interaction
    - Gestures
    - Inputs
    - Selection
    - States
  - Layout
    - Layout basics
    - Applying layout
    - Canonical layouts
  - Marerial A-Z
  - Building for all
- Styles
  - Styles overview
  - Color
    - Color system
    - Color roles
    - Color schemes
      - Choosing a scheme
      - Static
      - Dynamic
    - Advanced
    - Color resources
  - Elevation
  - Icons
  - Motion
    - Overview
    - Easing and duration
    - Transitions
  - Shape
  - Typography
- Components
  - [Components overview](#components)
  - [App bars](#app-bars)
    - Bottom app bar
    - Top app bar
  - Badges
  - Buttons
    - All buttons
    - Common butto
    - FAB
    - Extended FAB
    - Icon buttons
    - Segmented buttons
  - Cards
  - Carousel
  - Checkbox
  - Chips
  - Date & time pickers
    - Date pickers
    - Time pickers
  - Dialogs
  - Divider
  - Lists
  - [Menus](#menus)
  - [Navigation](#navigation)
    - Navigation bar
    - Navigation drawer
    - Navigation rail
  - Progress indicators
  - Radio button
  - [Search](#search)
  - Sheets
    - Bottom sheets
    - Side sheets
  - Sliders
  - Snackbar
  - Switch
  - [Tabs](#tabs)
  - Text fields
  - Tooltips
- Blog

https://github.com/material-components - *Material Components · GitHub*

#### Android

https://github.com/material-components/material-components-android - *GitHub - material-components/material-components-android: Modular and customizable Material Design UI components for Android*

  ![GitHub last commit](https://img.shields.io/github/last-commit/material-components/material-components-android?logo=github&color=blue)
  ![GitHub Release Date - Published_At](https://img.shields.io/github/release-date/material-components/material-components-android?display_date=published_at&logo=github)
  ![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/material-components/material-components-android?logo=github)
  ![GitHub Repo stars](https://img.shields.io/github/stars/material-components/material-components-android?style=social)

#### iOS

https://github.com/material-components/material-components-ios - *GitHub - material-components/material-components-ios: [In maintenance mode] Modular and customizable Material Design UI components for iOS*

  ![GitHub last commit](https://img.shields.io/github/last-commit/material-components/material-components-ios?logo=github&color=blue)
  ![GitHub Release Date - Published_At](https://img.shields.io/github/release-date/material-components/material-components-ios?display_date=published_at&logo=github)
  ![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/material-components/material-components-ios?logo=github)
  ![GitHub Repo stars](https://img.shields.io/github/stars/material-components/material-components-ios?style=social)

#### Web

https://github.com/material-components/material-web - *GitHub - material-components/material-web: Material Design Web Components* [Website](https://material-web.dev)

  ![GitHub last commit](https://img.shields.io/github/last-commit/material-components/material-web?logo=github&color=blue)
  ![GitHub Release Date - Published_At](https://img.shields.io/github/release-date/material-components/material-web?display_date=published_at&logo=github)
  ![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/material-components/material-web?logo=github)
  ![GitHub Repo stars](https://img.shields.io/github/stars/material-components/material-web?style=social)

### Primer

> The Design System for github

https://primer.style/ - *Primer*

https://github.com/primer - *Primer · GitHub*

#### Octicons

https://primer.style/octicons/ - *Octicons | Primer*

https://github.com/primer/octicons - *GitHub - primer/octicons: A scalable set of icons handcrafted with \<3 by GitHub*

![GitHub last commit](https://img.shields.io/github/last-commit/primer/octicons?logo=github&color=blue)
![GitHub Release Date - Published_At](https://img.shields.io/github/release-date/primer/octicons?display_date=published_at&logo=github)
![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/primer/octicons?logo=github)
![GitHub Repo
stars](https://img.shields.io/github/stars/primer/octicons?style=social)

#### CSS

https://primer.style/css - *Introduction - Docs ⋅ Storybook*

https://github.com/primer/css - *GitHub - primer/css: Primer is GitHub's design system. This is the CSS implementation*

![GitHub last commit](https://img.shields.io/github/last-commit/primer/css?logo=github&color=blue)
![GitHub Release Date - Published_At](https://img.shields.io/github/release-date/primer/css?display_date=published_at&logo=github)
![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/primer/css?logo=github)
![GitHub Repo stars](https://img.shields.io/github/stars/primer/css?style=social)

#### Design

https://primer.style/ - *Primer*

https://github.com/primer/design - *GitHub - primer/design: Primer Design Guidelines*

![GitHub last commit](https://img.shields.io/github/last-commit/primer/design?logo=github&color=blue)
![GitHub Release Date - Published_At](https://img.shields.io/github/release-date/primer/design?display_date=published_at&logo=github)
![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/primer/design?logo=github)
![GitHub Repo
stars](https://img.shields.io/github/stars/primer/design?style=social)

#### Primitives

https://primer.style/primitives - *primer.style/primitives*

https://github.com/primer/primitives - *GitHub - primer/primitives: Color, typography, and spacing primitives in json.*

![GitHub last commit](https://img.shields.io/github/last-commit/primer/primitives?logo=github&color=blue)
![GitHub Release Date - Published_At](https://img.shields.io/github/release-date/primer/primitives?display_date=published_at&logo=github)
![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/primer/primitives?logo=github)
![GitHub Repo stars](https://img.shields.io/github/stars/primer/primitives?style=social)

## Designer

### Figma

暂无

## Theming

暂无

### Color

暂无

### Shape

暂无

### Typograhpy

暂无

## Components

1. [App Bars](#app-bars)
2. [Menus](#menus)
3. [Navigation](#navigation)
4. [Search](#search)
5. [Tabs](#tabs)

### App Bars

暂无

### Menus

![hero.webp (2400×1200)](https://material-web.dev/components/images/menu/hero.webp)

### Navigation

暂无

### Search

暂无

### Tabs

![hero.webp (1200×1200)](https://material-web.dev/components/images/tabs/hero.webp)

## Reference

1. https://code.visualstudio.com/docs/getstarted/userinterface - *Visual Studio Code User Interface*
    1. https://code.visualstudio.com/docs/editor/custom-layout - *Custom layout of Visual Studio Code*
    2. https://code.visualstudio.com/docs/getstarted/userinterface#_command-palette - *Visual Studio Code User Interface*
2. https://hx.dcloud.net.cn/Tutorial/userinterface - *用户界面 - HBuilderX 文档*
3. https://developers.weixin.qq.com/miniprogram/dev/devtools/page.html - *界面*
4. https://developers.weixin.qq.com/miniprogram/design/ - *设计*
5. https://www.navicat.com/manual/online_manual/en/navicat_17/mac_manual/#/main_window_0 - *Navicat Tutorials | Navicat Online Manual*
6. https://www.gnu.org/software/emacs/manual/html_node/emacs/Screen.html - *Screen (GNU Emacs Manual)*
