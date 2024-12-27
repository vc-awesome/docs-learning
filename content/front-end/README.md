# 前端

## 简介

> 网页编程采用的是 HTML + CSS + JS 组合。
>
> - HTML 是用来描述当前这个页面的结构。
>
> - CSS 用来描述页面的样式。
>
> - JS 通常是用来处理这个页面和用户的交互。

## 发展路程

> 前端发展路程 Roadmap

## 学习路线

> 学习路线 Learning route

1. [HTML](front-end/html/README.md)
2. [CSS](front-end/css/README.md)
3. [JavaScript](front-end/javascript/README.md)

## 学习资源

> Learning resource

1. https://github.com/FrontEndGitHub/FrontEndGitHub - *:octocat:GitHub最全的前端资源汇总仓库（包括前端学习、开发资源、数据结构与算法、开发工具、求职面试等）*

    ![GitHub last commit](https://img.shields.io/github/last-commit/FrontEndGitHub/FrontEndGitHub?color=blue&logo=github)
    ![GitHub Repo stars](https://img.shields.io/github/stars/FrontEndGitHub/FrontEndGitHub?style=social)

2. https://github.com/o2team - *AOTU Labs · GitHub*

    1. https://github.com/o2team/guide - *GitHub - o2team/guide: O2前端规范文档*
  
        ![GitHub last commit](https://img.shields.io/github/last-commit/o2team/guide?color=blue&logo=github)
        ![GitHub Repo stars](https://img.shields.io/github/stars/o2team/guide?style=social)

    2. https://github.com/o2team/H5Skills - *GitHub - o2team/H5Skills: 移动端开发技巧集合*

        ![GitHub last commit](https://img.shields.io/github/last-commit/o2team/H5Skills?color=blue&logo=github)
        ![GitHub Repo stars](https://img.shields.io/github/stars/o2team/H5Skills?style=social)

3. https://github.com/jtyjty99999/mobileTech - *GitHub - jtyjty99999/mobileTech: A useful tools or tips list for mobile web application developing*

    ![GitHub last commit](https://img.shields.io/github/last-commit/jtyjty99999/mobileTech?logo=github&color=blue)
    ![GitHub Repo stars](https://img.shields.io/github/stars/jtyjty99999/mobileTech?style=social)

### 优质框架

[Bootstrap 中文网](https://www.bootcss.com/)

- [所有版本](https://v4.bootcss.com/docs/versions/)
- [v5 中文文档](https://v5.bootcss.com/docs/getting-started/introduction/)
- [v4 中文文档](https://v4.bootcss.com/docs/getting-started/introduction/)

---

[Bootstrap 官方网址](https://getbootstrap.com/)

- [所有版本](https://getbootstrap.com/docs/versions/)
- [v5 英文文档](https://getbootstrap.com/docs/5.1/getting-started/introduction/)
- [v4 英文文档](https://getbootstrap.com/docs/4.6/getting-started/introduction/)

## 页面布局

有关详细信息，请参阅“[HTML 布局](/front-end/html/README.md#布局)”。

有关详细信息，请参阅“[CSS 布局](/front-end/css/css-命名规则.md#layout-布局)”。

## 浏览器加载过程

1. https://wangdoc.com/javascript/bom/engine - *浏览器环境概述 - JavaScript 教程 -网道*
2. https://github.com/vasanthk/how-web-works - *GitHub - vasanthk/how-web-works: What happens behind the scenes when we type www.google.com in a browser?*  
    ![GitHub last commit](https://img.shields.io/github/last-commit/vasanthk/how-web-works?color=blue&logo=github)
    ![GitHub Repo stars](https://img.shields.io/github/stars/vasanthk/how-web-works?style=social)
3. https://github.com/alex/what-happens-when - *GitHub - alex/what-happens-when: An attempt to answer the age old interview question "What happens when you type google.com into your browser and press enter?"*  
    ![GitHub last commit](https://img.shields.io/github/last-commit/alex/what-happens-when?color=blue&logo=github)
    ![GitHub Repo stars](https://img.shields.io/github/stars/alex/what-happens-when?style=social)
4. https://web.dev/howbrowserswork/ - *How browsers work*
5. https://developer.mozilla.org/zh-CN/docs/Web/Performance/How_browsers_work - *渲染页面：浏览器的工作原理 - Web 性能 | MDN*
6. https://blog.csdn.net/gaofan_long/article/details/113861096 - *浏览器加载过程_gaofan_long的博客-CSDN博客*
7. https://juejin.cn/post/6844903815758479374 - *你不知道的浏览器页面渲染机制 - 掘金*
8. https://blog.csdn.net/Littlegirlha/article/details/128383854 - *浏览器加载网页的过程_小许还在编程的博客-CSDN博客*

---

1. https://suanmei.github.io/2017/02/11/url2render-part1/ - *从输入url到浏览器显示页面，发生了什么？（网络通信篇） | 拾壹小筑*
2. https://suanmei.github.io/2017/02/12/url2render-part2/ - *从输入url到浏览器显示页面，发生了什么？（浏览器渲染篇） | 拾壹小筑*

---

https://www.ruanyifeng.com/blog/2014/10/event-loop.html - *JavaScript 运行机制详解：再谈Event Loop*

- 异步编程
  - <https://www.ruanyifeng.com/blog/2012/12/asynchronous＿javascript.html> - *Javascript异步编程的4种方法*
  - https://www.ruanyifeng.com/blog/2013/09/finite-state_machine_for_javascript.html - *JavaScript与有限状态机*

### 执行顺序

执行顺序：*1 > 2 > 3*

1. `document.addEventListener("DOMContentLoaded", function() {});`
2. `document.addEventListener("readystatechange", function() {});`
3. `window.addEventListener("load", function() {});`

参考：

1. https://developer.mozilla.org/zh-CN/docs/Web/API/Document/DOMContentLoaded_event - *Document：DOMContentLoaded 事件 - Web API | MDN*

## 浏览器兼容性

https://caniuse.com/ - *Can I use... Support tables for HTML5, CSS3, etc* [GitHub Repo](https://github.com/fyrd/caniuse)

![GitHub last commit](https://img.shields.io/github/last-commit/fyrd/caniuse?logo=github&color=blue)
![GitHub Release Date - Published_At](https://img.shields.io/github/release-date/fyrd/caniuse?display_date=published_at&logo=github)
![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/fyrd/caniuse?logo=github)
![GitHub Repo stars](https://img.shields.io/github/stars/fyrd/caniuse?style=social)

## 常见问题

暂无

## 参考

1. https://zhuanlan.zhihu.com/p/148313476 - *19个前端开发人员的救生工具*
2. https://zhuanlan.zhihu.com/p/159659392 - *9个不错的前端开源项目*
3. https://www.cnblogs.com/weizwz/p/17952042 - *uni-app+vue3+ts项目搭建完整流程 - 唯之为之 - 博客园*
