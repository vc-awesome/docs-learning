# 浏览器

## 浏览器工作原理

1. https://github.com/vasanthk/how-web-works - *GitHub - vasanthk/how-web-works: What happens behind the scenes when we type www.google.com in a browser?* \
    ![GitHub last commit](https://img.shields.io/github/last-commit/vasanthk/how-web-works?color=blue&logo=github)
    ![GitHub Repo stars](https://img.shields.io/github/stars/vasanthk/how-web-works?style=social)
2. https://github.com/alex/what-happens-when - *GitHub - alex/what-happens-when: An attempt to answer the age old interview question "What happens when you type google.com into your browser and press enter?"* \
    ![GitHub last commit](https://img.shields.io/github/last-commit/alex/what-happens-when?color=blue&logo=github)
    ![GitHub Repo stars](https://img.shields.io/github/stars/alex/what-happens-when?style=social)
3. https://web.dev/howbrowserswork/ - *How browsers work*
4. https://developer.mozilla.org/zh-CN/docs/Web/Performance/How_browsers_work - *渲染页面：浏览器的工作原理 - Web 性能 | MDN*
5. https://blog.csdn.net/gaofan_long/article/details/113861096 - *浏览器加载过程_gaofan_long的博客-CSDN博客*
6. https://juejin.cn/post/6844903815758479374 - *你不知道的浏览器页面渲染机制 - 掘金*
7. https://blog.csdn.net/Littlegirlha/article/details/128383854 - *浏览器加载网页的过程_小许还在编程的博客-CSDN博客*

---

1. https://suanmei.github.io/2017/02/11/url2render-part1/ - *从输入url到浏览器显示页面，发生了什么？（网络通信篇） | 拾壹小筑*
2. https://suanmei.github.io/2017/02/12/url2render-part2/ - *从输入url到浏览器显示页面，发生了什么？（浏览器渲染篇） | 拾壹小筑*

## 浏览器环境

参考：

1. https://wangdoc.com/javascript/bom/engine - *浏览器环境概述 - JavaScript 教程 -网道*
2. https://zh.javascript.info/loading - *加载文档和其他资源*

### 页面生命周期

#### DOMContentLoaded

> 浏览器已完全加载 HTML，并构建了 DOM 树，但像 `<img>` 和样式表之类的外部资源可能尚未加载完成。

```javascript
document.addEventListener("DOMContentLoaded", function () {
  
});
```

DOMContentLoaded 和脚本：

- 会阻塞 `DOMContentLoaded` 的脚本
    - 当浏览器处理一个 HTML 文档，并在文档中遇到 `<script>` 标签时，就会在继续构建 DOM 之前运行它。这是一种防范措施，因为脚本可能想要修改 DOM，甚至对其执行 `document.write` 操作，所以 `DOMContentLoaded` 必须等待脚本执行结束。
- 不会阻塞 `DOMContentLoaded` 的脚本
    1. 具有 `async` 特性（attribute）的脚本不会阻塞 `DOMContentLoaded`。
    2. 使用 `document.createElement('script')` 动态生成并添加到网页的脚本也不会阻塞 `DOMContentLoaded`。

DOMContentLoaded 和样式：

- 外部样式表不会影响 DOM，因此 `DOMContentLoaded` 不会等待它们。但这里有一个陷阱。如果在样式后面有一个脚本，那么该脚本必须等待样式表加载完成。

#### window.onload

> 当整个页面，包括样式、图片和其他资源被加载完成时，会触发 `window` 对象上的 `load` 事件。

```javascript
window.onload = function () {
  
}
```

或者

```javascript
document.addEventListener("load", function () {
  
});
```

#### window.onunload

> 当访问者离开页面时，`window` 对象上的 `unload` 事件就会被触发。

```javascript
document.addEventListener("unload", function () {
  
});
```

#### window.onbeforeunload

> 如果访问者触发了离开页面的导航（navigation）或试图关闭窗口，`beforeunload` 处理程序将要求进行更多确认。

```javascript
window.onbeforeunload = function() {
  return "有未保存的值。确认要离开吗？";
};
```

#### readyState

在文档加载完成之后设置 `DOMContentLoaded` 事件处理程序，`DOMContentLoaded` 事件永远不会执行。

在某些情况下，我们不确定文档是否已经准备就绪。我们希望我们的函数在 DOM 加载完成时执行，无论现在还是以后。

`document.readyState` 属性可以为我们提供当前加载状态的信息。

它有 3 个可能值：

1. `loading` - 文档正在被加载。
2. `interactive` - 文档被全部读取，与 `DOMContentLoaded` 几乎同时发生，但是在 `DOMContentLoaded` 之前发生。
3. `complete` - 文档被全部读取，并且所有资源（例如图片等）都已加载完成，与 `window.onload` 几乎同时发生，但是在 `window.onload` 之前发生。

所以，我们可以检查 `document.readyState` 并设置一个处理程序，或在代码准备就绪时立即执行它。

```javascript
function work() { /*...*/ }

if (document.readyState == 'loading') {
  // 仍在加载，等待事件
  document.addEventListener('DOMContentLoaded', work);
} else {
  // DOM 已就绪！
  work();
}
```

或者

```javascript
function work() { /*...*/ }
// 当前状态
console.log(document.readyState);

// 状态改变时打印它
document.addEventListener('readystatechange', () => {
  console.log(document.readyState));
  if (document.readyState == 'loading') {
    // 仍在加载，等待事件
    document.addEventListener('DOMContentLoaded', work);
  } else {
    // DOM 已就绪！
    work();
  }
}
```

#### 执行顺序

```html
<script>
  log('initial readyState:' + document.readyState);

  document.addEventListener('readystatechange', () => log('readyState:' + document.readyState));
  document.addEventListener('DOMContentLoaded', () => log('DOMContentLoaded'));

  window.onload = () => log('window onload');
</script>

<iframe src="iframe.html" onload="log('iframe onload')"></iframe>

<img src="http://en.js.cx/clipart/train.gif" id="img">
<script>
  img.onload = () => log('img onload');
</script>
```

典型输出：

1. [1] initial readyState:loading
2. [2] readyState:interactive
3. [2] DOMContentLoaded
4. [3] iframe onload
5. [4] img onload
6. [4] readyState:complete
7. [4] window onload

方括号中的数字表示发生这种情况的大致时间。标有相同数字的事件几乎是同时发生的（± 几毫秒）。

- 在 `DOMContentLoaded` 之前，`document.readyState` 会立即变成 `interactive`。它们俩的意义实际上是相同的。
- 当所有资源（`iframe` 和 `img`）都加载完成后，`document.readyState` 变成 `complete`。这里我们可以发现，它与 `img.onload`（`img` 是最后一个资源）和 `window.onload` 几乎同时发生。转换到 `complete` 状态的意义与 `window.onload` 相同。区别在于 `window.onload` 始终在所有其他 `load` 处理程序之后运行。

参考：

1. https://developer.mozilla.org/zh-CN/docs/Web/API/Document/DOMContentLoaded_event - *Document：DOMContentLoaded 事件 - Web API | MDN*

### 脚本

#### defer

暂无

#### async

暂无

#### 动态脚本

暂无

### 资源加载

#### onload

暂无

#### onerror

暂无

## 浏览器组成

<https://wangdoc.com/javascript/bom/engine#浏览器的组成> - *浏览器环境概述 - JavaScript 教程 - 网道*

### 渲染引擎

<https://zh.m.wikipedia.org/wiki/浏览器引擎比较_> - *浏览器引擎比较 (HTML) - 维基百科，自由的百科全书*

<https://zh.m.wikipedia.org/wiki/浏览器引擎> - *浏览器引擎 - 维基百科，自由的百科全书*

<https://zh.m.wikipedia.org/wiki/网页浏览器列表> - *网页浏览器列表 - 维基百科，自由的百科全书*

<https://zh.m.wikipedia.org/wiki/网页浏览器> - *网页浏览器 - 维基百科，自由的百科全书*

https://en.m.wikipedia.org/wiki/Comparison_of_web_browsers - *Comparison of web browsers - Wikipedia*

https://juejin.cn/post/7344258231231103015 - *浏览器内核小知识 - 掘金*

https://zhuanlan.zhihu.com/p/374672785 - *浏览器内核发展编年史 - 知乎*

https://www.huhst.edu.cn/__local/7/AB/3B/AE1EB3695CF9E69020881F367E2_A17A69F4_1D78D.htm - *浏览器_百度百科*

工具：

1. https://www.ghxi.com/llq-test.html - *浏览器内核检测与更新2.0 - 果核剥壳*
2. https://ie.icoa.cn/ - *查看手机浏览器内核版本 Brower Kernel Version2.7*
3. http://www.ip33.com/browser.html - *在线浏览器检测_ip33.com*
4. https://github.com/ShirasawaSama/CefDetector - *GitHub - ShirasawaSama/CefDetector: Check how many CEFs are on your computer. 检测你电脑上有几个CEF.*

#### Webkit

Safari

#### Blink

Chromium

- Google Chrome
- Microsoft Edge
- Opera
- Vivaldi
- Brave

#### Gecko

Mozilla Firefox

### JavaScript 引擎

暂无

## 开发者工具

1. https://developer.mozilla.org/zh-CN/docs/Web#开发者工具文档 - *Web 开发技术 | MDN*
2. https://mp.weixin.qq.com/s/hZnN9ZWWWkzG8Do7T2KaOA - *Chrome开发者工具详解*
3. https://baijiahao.baidu.com/s?id=1699345724372278183 - *JavaScript 开发者需要了解的15个 DevTools 技巧*
4. https://github.com/ChromeDevTools - *ChromeDevTools · GitHub*
5. https://developer.chrome.google.cn/docs/devtools?hl=zh-cn - *Chrome DevTools &nbsp;|&nbsp; Chrome for Developers*

### Element

#### 样式

假设某类的样式如下👇：

```css
.khTxkj {
    top: 0px;
    right: 0px;
    padding: 8px;
    position: absolute;
}
```

在类名 `.khTxkj`上鼠标右键操作：

1. 选择操作「复制selector」，复制的内容为：

    ```css
    .khTxkj
    ```

2. 选择操作「复制规则」，复制的内容为：

    ```css
    .khTxkj {
        top: 0px;
        right: 0px;
        padding: 8px;
        position: absolute;
    }
    ```

3. 选择操作「复制所有声明」，复制的内容为：

    ```css
        top: 0px;
        right: 0px;
        padding: 8px;
        position: absolute;
    ```

### Console

https://segmentfault.com/a/1190000008074942 - *chrome-devtools - Chrome DevTools — Console - 小前端 - SegmentFault 思否*

https://segmentfault.com/q/1010000018895611 - *javascript - 谷歌浏览器控制台如何使用Console.log()输出展开对象详细信息 - SegmentFault 思否*

https://blog.csdn.net/DarinZanya/article/details/139801423 - *如何优雅地使用 console.log 打印数组或对象_console.log打印对象-CSDN博客*

https://segmentfault.com/q/1010000023482235 - *微信小程序 - 微信开发者工具 调试器 console的显示的内容如何复制出来 - SegmentFault 思否*

### Sources

暂无

### Network

暂无

### Application

暂无

## 浏览器兼容性

> &quot;Can I use&quot; provides up-to-date browser support tables for support of front-end web technologies on desktop and mobile web browsers.

https://caniuse.com/ - *Can I use... Support tables for HTML5, CSS3, etc* [GitHub Repo](https://github.com/fyrd/caniuse)

![GitHub last commit](https://img.shields.io/github/last-commit/fyrd/caniuse?logo=github&color=blue)
![GitHub Release Date - Published_At](https://img.shields.io/github/release-date/fyrd/caniuse?display_date=published_at&logo=github)
![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/fyrd/caniuse?logo=github)
![GitHub Repo stars](https://img.shields.io/github/stars/fyrd/caniuse?style=social)

