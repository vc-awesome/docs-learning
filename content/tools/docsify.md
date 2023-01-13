?> 🃏 A magical documentation site generator.<br><i class="fa fa-language dark-yellow"></i> *🃏 一个神奇的文档网站生成器。*

![GitHub last commit](https://img.shields.io/github/last-commit/docsifyjs/docsify?logo=github) ![GitHub Release Date](https://img.shields.io/github/release-date/docsifyjs/docsify?logo=github) ![GitHub Repo stars](https://img.shields.io/github/stars/docsifyjs/docsify?style=social) ![GitHub package.json version](https://img.shields.io/github/package-json/v/docsifyjs/docsify?logo=github&style=social) ![npm](https://img.shields.io/npm/v/docsify?logo=npm&style=social)

<i class="fa fa-laptop"></i> https://docsify.js.org/

<i class="fa fa-github fa-lg"></i> https://github.com/docsifyjs/docsify/



<details>
<summary>A magical documentation site generator. <span style="color:red">(click to expand)</span></summary>


> 文档进阶之路：`记事本` > `word` > `markdown` > `docsify`

```markdown
?> A scalable set of icons handcrafted with <3 by GitHub.<br>  
<i class="bi bi-translate dark-yellow"></i><br>  
GitHub 使用 <3 手工制作的一组可扩展图标。
```

?> A scalable set of icons handcrafted with <3 by GitHub.<br><i class="bi bi-translate dark-yellow"></i><br>GitHub 使用 <3 手工制作的一组可扩展图标。

---

```markdown
!> Official open source SVG icon library for Bootstrap.<br>  
<i class="bi bi-translate dark-yellow"></i><br>  
Bootstrap 的官方开源 SVG 图标库。
```

!> Official open source SVG icon library for Bootstrap.<br><i class="bi bi-translate dark-yellow"></i><br>Bootstrap 的官方开源 SVG 图标库。



</details>


## Link

https://cloud.tencent.com/developer/article/1005968 - _Docsify 深入源码_


## Directory Structure

```bash
+-- _images // 功能截图...
|   +-- zh-cn
|   +-- ...
+-- _media // 存放图片、视频、音频等资源
|   +-- ... // 网站图标、公共文件...
+-- index.html
```



## Plugins

### CSS

#### 固定顶部导航栏

```css
/* 固定导航栏 */
nav.app-nav {
    margin: 0;
    padding: 10px 0 10px 0;
    width: calc(100% - 325px);
    background-color: var(--background, #fff);
    border-bottom: 1px solid rgba(0,0,0,0.07); /* rgba(0,0,0,0.07) == #eee */
}
body.sticky nav.app-nav {
    position: fixed;
}
```



#### 自定义滚动条

```css
/* 滚动条样式 start */
::-webkit-scrollbar { /* 滚动条宽度 */
    width: 4px;
    height: 4px;
}
::-webkit-scrollbar-thumb { /* 滚动条颜色 */
    background: #33a9dc;
    background-image: linear-gradient(#6ecd56, #33a9dc, #cb6196, #c16290);
    border-radius: 2em;
}
/* 滚动条样式 end */
```



#### 自定义侧边栏

```css
/* 自定义侧边栏 */
aside.sidebar ul.app-sub-sidebar li.active {
    position: relative;
}
aside.sidebar ul.app-sub-sidebar li.active > a:before {
    content: '';
    position: absolute;
    width: 10px;
    height: 10px;
    top: 10px;
    left: -5px;
    border-radius: 50%;
    background-color: #fed24a;
    box-shadow: 0 0 0 3px rgba(254, 210, 74, .4);
}
```



### 回到顶部

- Plugin
  - https://gitee.com/zhengxiangqi/docsify-scroll-to-top - *docsify-scroll-to-top: 基于Docsify的页面滚动回顶部的插件*
- Showcase
  - https://www.itfanr.cc/ - *IT范儿*
    - https://theme-next.org/ - *Home Page | Theme-Next*

### 添加页脚

- Plugin
  - <https://docsify.js.org/#/zh-cn/write-a-plugin?id=例子>

### 全文搜索

- Plugin
  - <https://docsify.js.org/#/zh-cn/plugins?id=全文搜索-search>

### 字数统计

- Plugin
  - <https://docsify.js.org/#/zh-cn/plugins?id=字数统计>

### 复制到剪贴板/复制代码

- Plugin
  - <https://docsify.js.org/#/zh-cn/plugins?id=复制到剪贴板>

### 评论系统

- Plugin

  - disqus https://docsify.js.org/#/zh-cn/plugins?id=disqus

  - gitalk https://docsify.js.org/#/zh-cn/plugins?id=gitalk


### 当前文档最近修改/更新时间

- Showcase

  - https://tainacan.github.io/

  - https://github.com/tainacan/tainacan-wiki/blob/master/index.html

  - https://xflihaibo.github.io/

### 评分

- Showcase
  - https://lhammer.cn/You-need-to-know-css/#/

### 切换主题（白天/夜间模式切换）

- Showcase
  - https://bytesfly.github.io/island/#/ - *侠客岛*

- Plugin
  - 👍 https://jhildenbiddle.github.io/docsify-themeable/#/themes?id=defaults - *docsify-themeable - A delightfully simple theme system for docsify.js*
  - https://github.com/Plugin-contrib/docsify-plugin/tree/master/packages/docsify-dark-mode - *docsify-plugin/packages/docsify-dark-mode at master · Plugin-contrib/docsify-plugin · GitHub* `使用中`

### 鼠标点击特效

- Showcase
  - https://notebook.js.org/#/ - *ETS' NoteBook - By Mr.Wu - 微信公众号：码客趣分享 🌹*

### 目录 TOC

-  Plugin

  - 👍 https://github.com/justintien/docsify-plugin-toc - *page's ToC (Table of Content) for docsify.*

  - https://github.com/mrpotatoes/docsify-toc - *GitHub - mrpotatoes/docsify-toc: docsify-toc*

- Showcase
  - 👍 https://tainacan.github.io/tainacan-wiki/
    - 👍 https://github.com/tainacan/tainacan-wiki/blob/master/index.html

### 目录结构

- Showcase
  - https://xflihaibo.github.io/docs/#/standard/standard - *书写规范 - 幸福拾荒者*

### Flexible Alerts 🎁

- Plugin

  - https://github.com/fzankl/docsify-plugin-flexible-alerts - *docsify plugin to convert blockquotes into beautiful and configurable alerts using preconfigured or own styles and alert types.*

    

    > [!NOTE]
    > An alert of type 'note' using global style 'callout'.
    
    ```markdown
    > [!NOTE]
    > An alert of type 'note' using global style 'callout'.
    ```
    
    
    
    > [!TIP]
    > An alert of type 'tip' using global style 'callout'.
    
    ```markdown
    > [!TIP]
    > An alert of type 'tip' using global style 
    'callout'.
    ```
    
    
    
    > [!WARNING]
    > An alert of type 'warning' using global style 'callout'.
    
    ```markdown
    > [!WARNING]
    > An alert of type 'warning' using global style 'callout'.
    ```
    
    
    
    > [!ATTENTION]
    > An alert of type 'attention' using global style 'callout'.
    
    ```markdown
    > [!ATTENTION]
    > An alert of type 'attention' using global style 'callout'.
    ```
    
    

### Page title 🎁

- Plugin
  - https://github.com/Sujaykumarh/docsify-plugin-title - *🔌 Docsify plugin customize page title*

### 分享

- Showcase
  - https://github.com/tainacan/tainacan-wiki/blob/master/index.html

### Emoji

- Plugin
  - https://github.com/TaQini/docsify-twemoji - *parse all emoji in style of twitter emoji for docsify*

### Tabs（标签页）

- Plugin

  - https://github.com/jhildenbiddle/docsify-tabs - *GitHub - jhildenbiddle/docsify-tabs: A docsify.js plugin for rendering tabbed content from markdown*

  - https://jhildenbiddle.github.io/docsify-themeable/#/markdown

    

    ```markdown
    <!-- tabs:start -->
    
    #### **English**
    
    Hello!
    
    #### **French**
    
    Bonjour!
    
    #### **Italian**
    
    Ciao!
    
    <!-- tabs:end -->
    ```

### Accordion（手风琴） 🎁

- Plugin
  - https://github.com/isaozler/docsify-accordion - *Accordion plugin for docsify*


## Awesome

https://github.com/docsifyjs/awesome-docsify - *💖 A curated list of awesome things related to docsify*

![GitHub last commit](https://flat.badgen.net/github/last-commit/docsifyjs/awesome-docsify?icon=github&color=blue)

### Showcase

👍 https://notebook.js.org/#/ - *ETS' NoteBook - By Mr.Wu - 微信公众号：码客趣分享 🌹*

~~http://note.taqini.space/~~

https://xflihaibo.github.io/docs/#/ - *幸福拾荒者*

https://bytesfly.github.io/island/#/ - *侠客岛*

~~https://docs.saasify.sh/#/~~

https://tainacan.github.io/tainacan-wiki/#/ - *Tainacan Wiki*

https://lhammer.cn/You-need-to-know-css/#/ - *CSS Tricks*

https://vueblocks.github.io/ve-charts/#/ - *Ve-Charts - ECharts 4.x for Vue.js 2.x.*



看至：`gitmoji-changelog`
