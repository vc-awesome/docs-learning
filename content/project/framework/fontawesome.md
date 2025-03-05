# Font Awesome

## 简介

> The internet&#39;s icon library + toolkit. Used by millions of designers, devs, &amp; content creators. Open-source. Always free. Always awesome.

![GitHub last commit](https://img.shields.io/github/last-commit/FortAwesome/Font-Awesome?color=blue&logo=github)
![GitHub Release Date](https://img.shields.io/github/release-date/FortAwesome/Font-Awesome?logo=github)
![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/FortAwesome/Font-Awesome?logo=github)
![NPM Version](https://img.shields.io/npm/v/font-awesome?logo=npm)
![GitHub Repo stars](https://img.shields.io/github/stars/FortAwesome/Font-Awesome?style=social)

## 官方

https://github.com/FortAwesome/Font-Awesome - _GitHub - FortAwesome/Font-Awesome: The iconic SVG, font, and CSS toolkit_

https://fontawesome.com/ - _Font Awesome_

https://fontawesome.com/versions - _Font Awesome_

### v6.x

> 最新版

英文手册：https://fontawesome.com/v6/icons/ - _Search Icons & Find the Perfect Design | Font Awesome_

中文手册：https://fa6.dashgame.com/ - _Font Awesome 6，一套始终绝佳的图标字体库和CSS框架_

### v5.x

> LTS

英文手册：https://fontawesome.com/v5/icons/ - _Find the Perfect Icon for Your Project in Font Awesome 5 | Font Awesome_

中文手册：https://fa5.dashgame.com/ - _Font Awesome 5，一套依旧绝佳的图标字体库和CSS框架_

### v4.x

> 官方已停止维护

英文手册：https://fontawesome.com/v4/icons/ - _Font Awesome Icons_

中文手册：https://fontawesome.dashgame.com/ - _Font Awesome，一套绝佳的图标字体库和CSS框架_

## 教程

http://docs.fontawesome.com/ - _Font Awesome Docs | Font Awesome Docs_

https://fontawesome.com.cn/ - _首页 - FontAwesome 字体图标中文Icon_

## 入门指南

暂无

## 快速入门

暂无

## 安装

https://fontawesome.com/download - _Font Awesome_

### CDN

1. https://site-assets.fontawesome.com/releases/v6.5.2/css/all.css

2. https://site-assets.fontawesome.com/releases/v6.4.0/css/all.css

3. https://lug.ustc.edu.cn/_extra/fontawesome/css/all.min.css

4. https://www.bootcdn.cn/font-awesome/ - _font-awesome (v6.7.2) - Font Awesome 字体为您提供可缩放矢量图标,它可以被定制大小、颜色、阴影以及任何可以用 CSS 的样式。 | BootCDN - Bootstrap 中文网开源项目免费 CDN 加速服务 铂特优选_

   1. https://cdn.bootcdn.net/ajax/libs/font-awesome/6.4.2/css/all.min.css

5. https://cdnjs.com/libraries/font-awesome - _font-awesome - Libraries - cdnjs - The #1 free and open source CDN built to make life easier for developers_

## 设置

暂无

## 用法

用法 1：

```css
@font-face {
  font-family: 'FontAwesome';
  src: url('https://unpkg.com/font-awesome@4.7.0/fonts/fontawesome-webfont.eot?v=4.7.0');
  src:
    url('https://unpkg.com/font-awesome@4.7.0/fonts/fontawesome-webfont.eot?#iefix&v=4.7.0') format('embedded-opentype'),
    url('https://unpkg.com/font-awesome@4.7.0/fonts/fontawesome-webfont.woff2?v=4.7.0') format('woff2'),
    url('https://unpkg.com/font-awesome@4.7.0/fonts/fontawesome-webfont.woff?v=4.7.0') format('woff'),
    url('https://unpkg.com/font-awesome@4.7.0/fonts/fontawesome-webfont.ttf?v=4.7.0') format('truetype'),
    url('https://unpkg.com/font-awesome@4.7.0/fonts/fontawesome-webfont.svg?v=4.7.0#fontawesomeregular') format('svg');
  font-weight: normal;
  font-style: normal;
}
a[target='_blank']:after {
  display: inline-block;
  padding-left: 3px;
  font: normal normal normal 14px/1 FontAwesome;
  font-size: inherit;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  content: '\f08e';
  vertical-align: text-bottom;
}
```

用法 2：

v6.4.0

```html
<link
  rel="stylesheet"
  href="//site-assets.fontawesome.com/releases/v6.4.0/css/all.css"
/>
```

```html
<i class="fab fa-font-awesome"></i>
```

v4.7.0

```html
<link
  rel="stylesheet"
  href="//unpkg.com/font-awesome@4.7.0/css/font-awesome.min.css"
/>
```

```html
<i class="fab fa-font-awesome"></i>
```

## 更新日志

https://fontawesome.com/changelog - _Font Awesome_

## 常见问题解答

暂无

## 参考

暂无
