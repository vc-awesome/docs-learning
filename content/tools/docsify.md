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

- plugin
  - https://gitee.com/zhengxiangqi/docsify-scroll-to-top
- showcase
  - https://www.itfanr.cc/ - *IT范儿*
    - https://theme-next.org/ - *Home Page | Theme-Next*

### 添加页脚

- plugin
  - <https://docsify.js.org/#/zh-cn/write-a-plugin?id=例子>

### 全文搜索

- plugin
  - <https://docsify.js.org/#/zh-cn/plugins?id=全文搜索-search>

### 字数统计

- plugin
  - <https://docsify.js.org/#/zh-cn/plugins?id=字数统计>

### 复制到剪贴板/复制代码

- plugin
  - <https://docsify.js.org/#/zh-cn/plugins?id=复制到剪贴板>

### 评论系统

- plugin

  - disqus https://docsify.js.org/#/zh-cn/plugins?id=disqus

  - gitalk https://docsify.js.org/#/zh-cn/plugins?id=gitalk


### 当前文档最近修改/更新时间

- showcase

  - https://tainacan.github.io/

  - https://github.com/tainacan/tainacan-wiki/blob/master/index.html

  - https://xflihaibo.github.io/

### 评分

- showcase
  - https://lhammer.cn/You-need-to-know-css/#/

### 切换主题（白天/夜间模式切换）

- showcase
  - https://bytesfly.github.io/island/#/

- plugin
  - 👍 https://jhildenbiddle.github.io/docsify-themeable/#/themes?id=defaults - *docsify-themeable - A delightfully simple theme system for docsify.js*

### 鼠标点击特效

- showcase
  - https://notebook.js.org/#/

### 目录 TOC

-  plugin

  - 👍 https://github.com/justintien/docsify-plugin-toc - *page's ToC (Table of Content) for docsify.*

  - https://github.com/mrpotatoes/docsify-toc

- showcase
  - 👍 https://tainacan.github.io/tainacan-wiki/
    - 👍 https://github.com/tainacan/tainacan-wiki/blob/master/index.html

### 目录结构

- showcase
  - https://xflihaibo.github.io/docs/#/standard/standard - *书写规范 - 幸福拾荒者*

### Flexible Alerts 🎁

- plugin

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

- plugin
  - https://github.com/Sujaykumarh/docsify-plugin-title - *🔌 Docsify plugin customize page title*

### 分享

- showcase
  - https://github.com/tainacan/tainacan-wiki/blob/master/index.html

### Emoji

- plugin
  - https://github.com/TaQini/docsify-twemoji - *parse all emoji in style of twitter emoji for docsify*

### Tabs（标签页）

- plugin

  - https://github.com/jhildenbiddle/docsify-tabs

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

- plugin
  - https://github.com/isaozler/docsify-accordion - *Accordion plugin for docsify*


## Awesome

https://github.com/docsifyjs/awesome-docsify - *💖 A curated list of awesome things related to docsify*

![GitHub last commit](https://flat.badgen.net/github/last-commit/docsifyjs/awesome-docsify?icon=github&color=blue)

### Showcase

👍 https://notebook.js.org/#/ - *ETS' NoteBook - By Mr.Wu - 微信公众号：码客趣分享 🌹*

http://note.taqini.space/

https://xflihaibo.github.io/docs/#/

https://bytesfly.github.io/island/#/

https://docs.saasify.sh/#/

https://tainacan.github.io/tainacan-wiki/#/

https://lhammer.cn/You-need-to-know-css/#/

https://vueblocks.github.io/ve-charts/#/



看至：`gitmoji-changelog`
