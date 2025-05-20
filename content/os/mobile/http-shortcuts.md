# HTTP Shortcuts

## 简介

> A simple but powerful Android app that allows you to create shortcuts and widgets that can be placed on your home screen. Each shortcut, when clicked, triggers an HTTP request, with the possibility of processing and displaying the response in various ways. Ideal for home automation projects.

![F-Droid Version](https://img.shields.io/f-droid/v/ch.rmy.android.http_shortcuts)
![GitHub last commit](https://img.shields.io/github/last-commit/Waboodoo/HTTP-Shortcuts?logo=github&color=blue)
![GitHub Release Date - Published_At](https://img.shields.io/github/release-date/Waboodoo/HTTP-Shortcuts?display_date=published_at&logo=github)
![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/Waboodoo/HTTP-Shortcuts?logo=github)
![GitHub Repo stars](https://img.shields.io/github/stars/Waboodoo/HTTP-Shortcuts?style=social)

## 官方

https://http-shortcuts.rmy.ch/ - *HTTP Shortcuts*

https://http-shortcuts.rmy.ch/documentation - *HTTP Shortcuts*

https://github.com/Waboodoo/HTTP-Shortcuts - *GitHub - Waboodoo/HTTP-Shortcuts: Android app to create home screen shortcuts that trigger arbitrary HTTP requests*

## 安装

https://github.com/Waboodoo/HTTP-Shortcuts/releases - *Releases · Waboodoo/HTTP-Shortcuts · GitHub*

https://f-droid.org/packages/ch.rmy.android.http_shortcuts/ - *HTTP Request Shortcuts | F-Droid - Free and Open Source Android App Repository*

https://play.google.com/store/apps/details?id=ch.rmy.android.http_shortcuts - *HTTP Request Shortcuts - Apps on Google Play*

## 入门指南

### Send Intent

https://http-shortcuts.rmy.ch/scripting#send-intent - *HTTP Shortcuts*

### deep-link

https://http-shortcuts.rmy.ch/advanced#deep-link - *HTTP Shortcuts*

1. <http-shortcuts://0cc6f723-1058-47e7-b887-27226d206897?apk_name=com.github.android>
2. <http-shortcuts://0cc6f723-1058-47e7-b887-27226d206897?apk_name=com.termux>

## 快速入门

暂无

## 设置

### 自定义 User-Agent

⚙️ *设置 >（全局快捷方式设置）自定义 User-Agent*

[HTTP User-Agent](essential/network/http.md#user-agent)

- https://www.useragents.me/ - *The Latest and Most Common User Agents List (Updated Weekly)*

### 全局脚本

https://http-shortcuts.rmy.ch/scripting#scripting - *HTTP Shortcuts*

⚙️ *设置 >（全局快捷方式设置）全局脚本*

```javascript
/**
 * 为保证测试输出正常，需要转义输出 html 的标签
 * @param {string} unsafe - 包含 html 标签的文本
 * @return {string} 转义 html 标签后的文本
 * @see https://www.runoob.com/try/try2.php?filename=tryjsref_regexp_htmltag - *菜鸟教程在线编辑器*
 */
function globalEscapeHtml(unsafe)
{
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
```

## 用法

### 远程编辑

*导入/导出 > (远程编辑) 在电脑上编辑*

服务器地址：https://http-shortcuts.rmy.ch/editor

### 获取站点元数据

情形一：

```regex
meta content=\"([^<]*?)\"[\s\S]+name=\"description\"\s*(\/>|>)
```

1. https://www.weibo.com/

    ```html
    <meta content="随时随地发现新鲜事！微博带你欣赏世界上每一个精彩瞬间，了解每一个幕后故事。分享你想表达的，让全世界都能听到你的心声！" name="description">
    ```

情形二：

正则 1（可匹配示例 2, 3）：

```regex
name=\"?description\"?\s+content=\"?([\s\S]*?)\"?\s*(\/>|>)
```

正则 2（可匹配示例 1, 2, 3）：

```regex
name=\"?description\"?\s+content=["']?([^"'>]+)?["']?
```

示例

1. https://getpocket.com/zh/collections

    ```html
    <meta name="description" content="精心策划的网络精华指南" data-next-head=""/>
    ```

2. https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Regular_expressions

    ```html
    <meta name="description" content="正则表达式（简称 regex）允许开发人员根据模式匹配字符串、提取子匹配信息，或简单地测试字符串是否符合该模式。正则表达式在许多编程语言中都有使用，JavaScript 的语法受 Perl 的启发。"/>
    ```

3. https://www.showdoc.com.cn/

    ```html
    <meta name=description content=一个非常适合IT团队的在线API文档、技术文档工具。你可以使用Showdoc来编写在线API文档、技术文档、数据字典、在线手册><script src="//source.showdoc.com.cn/static/source-status.js?v=2"></script><script src="https://dfyun-main.showdoc.com.cn/static/cdn-status.js?v=1"></script><script type=text/javascript>// 挂在window下的全局配置
    ```

在线调试：https://regex101.com/r/LLrFVE/1

情形三：

```regex
<meta property=\"og:title\" content=\"(.*?)\"\s*(\/>|>)
```

1. https://mp.weixin.qq.com/s/ZYuWhsYrhOmzuZwMV01B2w

    ```html
    <meta property="og:title" content="我是怎么自学 Git / GitHub 的？" />
    ```

```javascript
//const url = 'https://nodejs.org/en' // 测试网页
setVariable("url", url);
const resultObject = executeShortcut("默认UA获取站点元数据", {
  meta_type: 'description',
});
if (resultObject.status !== 'success' || !resultObject.result) {
  abort();
}
copyToClipboard(resultObject.result);
```

## 更新日志

https://github.com/Waboodoo/HTTP-Shortcuts/blob/develop/CHANGELOG.md - *HTTP-Shortcuts/CHANGELOG.md at develop · Waboodoo/HTTP-Shortcuts · GitHub*

## 常见问题解答

- 问题：

    版本 `3.13.0 (1103130003)` , `3.12.1 (1103120100)` 和 `3.12.0 (1103120008)` 编辑（删除文字）快捷方式会使应用闪退。

- 问题：

    **Q:** 提示 "发生错误：已达到最大递归深度，快捷方式无法启动"。

    **A:** 将脚本代码中的 `executeShortcut` 替换为 `enqueueShortcut`，有关详细信息，请参阅“[HTTP Shortcuts 官方文档 > executeShortcut](https://http-shortcuts.rmy.ch/scripting#execute-shortcut)”。

## 参考

暂无
