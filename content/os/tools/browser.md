## 简介

> 浏览器是用来检索、展示以及传递Web信息资源的应用程序。Web信息资源由统一资源标识符( Uniform Resource Identifier，URI)所标记，它是一张网页、一张图片、一段视频或者任何在Web上所呈现的内容。使用者可以借助超级链接( Hyperlinks)，通过浏览器浏览互相关联的信息[1]。
> 
> —— https://baike.baidu.com/item/浏览器/213911 - *浏览器_百度百科*


## 链接

https://juejin.cn/post/6844904079903195150#heading-19 - *提升 Chrome 使用效率的 30个快捷键、16个扩展插件与 11个前端调试方法*

https://www.baiduyun.wiki/ - _油小猴_


## 图标

https://github.com/alrra/browser-logos - *GitHub - alrra/browser-logos: 🗂 High resolution web browser logos*

https://github.com/refined-github/refined-github - *GitHub - refined-github/refined-github: Browser extension that simplifies the GitHub interface and adds useful features*

https://clipboardjs.com/ - *clipboard.js — Copy to clipboard without Flash*

https://www.octotree.io/download - *Download*

https://www.youxiaohou.com/tool/crxsoso.html - *Crx搜搜-一个牛X的扩展商店 | 油小猴*

<img src="https://raw.githubusercontent.com/alrra/browser-logos/90fdf03c/src/chrome/chrome.svg" width="48" alt="Chrome" valign="middle">

<img src="https://raw.githubusercontent.com/alrra/browser-logos/90fdf03c/src/firefox/firefox.svg" width="48" alt="Firefox" valign="middle">

<img src="https://raw.githubusercontent.com/alrra/browser-logos/90fdf03c/src/safari/safari_128x128.png" width="48" alt="Safari" valign="middle">


## 分类

序号  | 图标  | 名称  | 国家
---|---|---|---
1  | <i class="fa fa-qq"></i>  | QQBrowser  | 🇨🇳
2  | <i class="fa fa-firefox"></i>  | Firefox  | 🇺🇸
3  | <i class="fa fa-edge"></i>  | Microsoft Edge  | 🇺🇸
4  | <i class="fa fa-opera"></i>  | Opera  | 🇳🇴
5  | <i class="fa-brands fa-yandex-international"></i>  | Yandex  | 🇷🇺
6  | <i class="fa fa-chrome"></i>  | Chrome  | 🇺🇸

https://www.baiduyun.wiki/zh-cn/crx.html - *如何安装浏览器扩展？ | 油小猴*

- QQBrowser

  https://browser.qq.com/

  - *支持网页版微信*

- Firefox
  
  http://www.firefox.com.cn/

- Microsoft Edge

  https://www.microsoft.com/zh-cn/edge

  - *重复书签会自动剔除*

- Opera

  https://www.opera.com/zh-cn

  - *Opera浏览器退出程序后会保存标签页，下次打开程序仍是最近一次关闭的标签页*
  
  !> 有关详细信息，请参阅“[Opera](os/tools/opera.md)”。

- Yandex

  https://browser.yandex.com/


### Chrome

https://www.google.com/chrome/ - *Google Chrome 网络浏览器*

命令：

```sh
chrome://chrome-urls/
```

```sh
chrome://extensions/
```

```sh
chrome://apps/
```

```sh
chrome://flags/
```

参考：

1. https://blog.csdn.net/m0_37948734/article/details/81502734 - *chrome://命令*

2. https://www.cnblogs.com/hanggegege/p/6241367.html - *chrome:// 的秘密！！一些有用的命令！*

---

参考：

1. https://jingyan.baidu.com/album/b2c186c822546ac46ef6ff04.html - *google浏览器怎么删除指定cookie数据*

2. https://blog.csdn.net/u012086167/article/details/38331543 - *google浏览器网页背景颜色修改*

3. https://blog.csdn.net/zhaojunjie_dream/article/details/80021064 - *如何通过Chrome打断点的方法调试代码*

---
created: 2023-07-08T10:41:56  
source: https://www.coder.work/article/7755331  
author:

---

Chrome 浏览器禁止 http 自动转成 https

1.  打开 Chrome 浏览器，在地址栏中输入 `chrome://net-internals/#hsts`

2.  在页面中查找 `Delete domain security policies`，在 `Domain` 的输入框中输入域名，并点击 `Delete` 删除

3.  可以在 `Query Expect-CT domain` 中测试是否删除成功


## 书签

https://www.zhihu.com/question/19921595/answer/715490524 - *如何管理浏览器的书签（收藏）？*

https://juejin.cn/post/6909814992120315911 - *困扰我多年的“跨浏览器书签同步”问题终于解决了*

https://www.zhihu.com/question/20434889/answer/1035109307 - *chrome浏览器书签为什么不能同步？*

https://www.howtogeek.com/423917/how-to-get-the-most-out-of-the-chrome-bookmarks-bar/ - *How to Get the Most Out of the Chrome Bookmarks Bar*


### Bookmarklet

> JavaScript 脚本书签

https://www.ruanyifeng.com/blog/2011/06/a_guide_for_writing_bookmarklet.html - _Bookmarklet编写指南 - 阮一峰的网络日志_

https://blog.csdn.net/u010182162/article/details/124423308 - *在chrome浏览器编写一个复制链接的js脚本书签 (Bookmarklet)_匿名者_Anonym的博客-CSDN博客_chrome js 书签*

https://blog.csdn.net/qq_42799236/article/details/106739690 - _【JS】把JavaScript脚本作为书签收藏起来并可单击执行_想去潘达利亚的Bush的博客-CSDN博客_js书签_


## 标签页同步

百度关键词搜索：[局域网浏览器标签页同步](https://www.baidu.com/s?word=%E5%B1%80%E5%9F%9F%E7%BD%91%E6%B5%8F%E8%A7%88%E5%99%A8%E6%A0%87%E7%AD%BE%E9%A1%B5%E5%90%8C%E6%AD%A5)

https://sspai.com/post/70017 - *实现不同浏览器间书签同步，你可试试这三种方案 - 少数派*


## 搜索引擎

国内：

1. https://www.baidu.com/ - *百度*

2. https://www.bing.com/ - *Microsoft Bing、必应*

3. https://www.qwant.com/ - *Qwant - The search engine that respects your privacy*

4. https://yandex.com/ - *Yandex*

国际：

1. https://www.google.com/ - *谷歌*

2. https://duckduckgo.com/ - *DuckDuckGo*

3. https://www.startpage.com/ - *Startpage - Private Search Engine. No Tracking. No Search History.*


### 使用技巧

1. https://www.runoob.com/w3cnote/search-engines-usage-skills.html - *盘点全球搜索引擎及其使用技巧 | 菜鸟教程*


### 如何快速切换搜索引擎

1. http://www.360doc.com/content/20/1027/14/68850920_942627324.shtml - *Chrome浏览器如何添加自定义搜索引擎以及快速切换搜索引擎*

2. https://blog.51cto.com/u_3826358/3832030 - *Chrome浏览器添加自定义搜索引擎-快速切换搜索引擎*

3. https://zhuanlan.zhihu.com/p/57247050 - *如何在浏览器中快速切换搜索引擎*


## 浏览器快捷键

- 绕过浏览器缓存刷新页面

  - 长按 <kbd>Shift</kbd> + 点击浏览器刷新按钮

  - 长按 <kbd>Shift</kbd> + 短按 <kbd>F5</kbd>

  - 长按 <kbd>Ctrl</kbd> + 短按 <kbd>F5</kbd>

  - 长按 <kbd>Ctrl</kbd> + 短按 <kbd>F5</kbd>

- 横向滚动

  - 长按 <kbd>Shift</kbd> + 上下滑动鼠标滚轮（To scroll a file horizontally, turn the mouse wheel while keeping <kbd>Shift</kbd> pressed.）


### 窗口

1. 打开新的窗口

    <kbd>Ctrl</kbd> + <kbd>N</kbd>

2. 打开新的无痕式窗口

    <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>N</kbd>


### 标签页

  1. 打开新的标签页

     <kbd>ctrl</kbd> + <kbd>T</kbd>
  
  2. 历史记录上一页
  
     <kbd>Alt</kbd> + <kbd>←</kbd>
  
  3. 历史记录下一页
  
     <kbd>Alt</kbd> + <kbd>→</kbd>
  
  4. 切换标签页
  
     <kbd>ctrl</kbd>  + <kbd>shift</kbd>  + <kbd>tab</kbd> 或 <kbd>Ctrl</kbd> + <kbd>PgUp</kbd> *从右向左切换，跳转到上一个打开的标签页*
  
     <kbd>ctrl</kbd>  + <kbd>tab</kbd> 或 <kbd>Ctrl</kbd> + <kbd>PgDn</kbd>  *从左向右切换，跳转到下一个打开的标签页*
  
  5. 跳转到特定标签页
  
     <kbd>Ctrl</kbd> + <kbd>1</kbd> ~ <kbd>Ctrl</kbd> + <kbd>8</kbd>
  
     <kbd>Ctrl</kbd> + <kbd>9</kbd> *跳转到最后一个标签*
  
  6. 恢复最近关闭的标签
  
     <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>T</kbd>
  
     谷歌浏览器使用时，如果不小心关闭了一个标签，按下 <kbd>Ctrl</kbd> 键或 <kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>T</kbd>，Chrome 将重新打开你最近关闭的标签，仿佛无事发生过。（如果想要恢复的标签不止一个，也可以重复操作。)
  
     参考： http://www.cnplugins.com/tool/undo-close-method.html - *Chrome谷歌浏览器中如何恢复已经关闭的网页?*
  
  7. 关闭标签页
  
     <kbd>Ctrl</kbd> + <kbd>W</kbd>
  
  8. 保存所有的标签页
  
     <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>D</kbd>
  
     当打开一堆选项卡并想把这些页面都保存起来以供之后使用，按 <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>D</kbd>。这样就可以将所有打开的选项卡保存到一个文件夹中，方便以后访问。要恢复它们，只需右键单击书签内的文件夹，选择“打开所有新窗口”。


### 链接

1. 在新标签页打开链接

    长按 <kbd>Ctrl</kbd> + 鼠标左击链接

2. 下载链接目标

    长按 <kbd>Alt</kbd> + 鼠标左击链接


## 开发者工具

https://developer.mozilla.org/zh-CN/docs/Web#开发者工具文档 - *Web 开发技术 | MDN*

https://mp.weixin.qq.com/s/hZnN9ZWWWkzG8Do7T2KaOA - *Chrome开发者工具详解*

https://baijiahao.baidu.com/s?id=1699345724372278183 - *JavaScript 开发者需要了解的15个 DevTools 技巧*


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


### Sources


### Network


### Application
