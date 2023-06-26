## Introduction

?> 🃏 A magical documentation site generator.<br><i class="fa fa-language dark-yellow"></i> *🃏 一个神奇的文档网站生成器。*

![GitHub last commit](https://img.shields.io/github/last-commit/docsifyjs/docsify?logo=github) ![GitHub Release Date](https://img.shields.io/github/release-date/docsifyjs/docsify?logo=github) ![GitHub Repo stars](https://img.shields.io/github/stars/docsifyjs/docsify?style=social) ![GitHub package.json version](https://img.shields.io/github/package-json/v/docsifyjs/docsify?logo=github&style=social) ![npm](https://img.shields.io/npm/v/docsify?logo=npm&style=social)

----

https://docsify.js.org/ - *A magical documentation generator.*

https://github.com/docsifyjs/docsify/ - *GitHub - docsifyjs/docsify: 🃏 A magical documentation site generator.*

## Usage

### 文档助手

语法：

```markdown
?> 🃏 A magical documentation site generator.<br>  
<i class="bi bi-translate dark-yellow"></i>  
 *🃏 一个神奇的文档网站生成器。*
```

渲染效果：

?> 🃏 A magical documentation site generator.<br><i class="bi bi-translate dark-yellow"></i> *🃏 一个神奇的文档网站生成器。*

---

语法：

```markdown
!> 🃏 A magical documentation site generator.<br>  
<i class="bi bi-translate dark-yellow"></i>  
 *🃏 一个神奇的文档网站生成器。*
```

渲染效果：

!> 🃏 A magical documentation site generator.<br><i class="bi bi-translate dark-yellow"></i> *🃏 一个神奇的文档网站生成器。*

### 解析 Markdown 内容

方式一（在自定义函数中使用）：

```html
<script>
// 获取 Markdown 文件内容并解析
function getMarkdownAndParse() {
  var html;
  // 获取 Markdown 文件内容
  window.Docsify.get('content/_portal.md').then(function(content) {
    // 文件内容解析
    html = window.marked.parse(content);
  })
}
</script>
```

方式二（在自定义插件中使用）：

```html
<script>
window.$docsify.plugins.push(
  function(hook, vm) {
    hook.doneEach(function() {
      var html;
      // 获取 Markdown 文件内容
      window.Docsify.get('content/_portal.md').then(function(content) {
        // 文件内容解析
        html = vm.compiler.compile(content);
      })
    })
  }
)
</script>
```

### 开发插件

https://docsify.js.org/#/write-a-plugin - *Write a Plugin*

```js
(function () {
  var myPlugin = function (hook, vm) {
    // Invoked one time when docsify script is initialized
    hook.init(function () {
      // ...
      document.querySelector(".d-none").classList.remove("d-none");
      console.log("init");console.log(document.querySelector(".d-none"));
    });

    // Invoked one time when the docsify instance has mounted on the DOM
    hook.mounted(function () {
      // ...

      console.log("mounted");console.log(document.querySelector(".d-none"));
    });

    // Invoked on each page load before new markdown is transformed to HTML.
    // Supports asynchronous tasks (see beforeEach documentation for details).
    hook.beforeEach(function (markdown) {
      // ...
      console.log("beforeEach");console.log(document.querySelector(".d-none"));
      return markdown;
    });

    // Invoked on each page load after new markdown has been transformed to HTML.
    // Supports asynchronous tasks (see afterEach documentation for details).
    hook.afterEach(function (html) {
      // ...
      console.log("afterEach");console.log(document.querySelector(".d-none"));
      return html;
    });

    // Invoked on each page load after new HTML has been appended to the DOM
    hook.doneEach(function () {
      // ...
      console.log("doneEach");console.log(document.querySelector(".d-none"));
    });

    // Invoked one time after rendering the initial page
    hook.ready(function () {
      // ...
      console.log("ready");console.log(document.querySelector(".d-none"));
    });
  };

  // Add plugin to docsify's plugin array
  $docsify = $docsify || {};
  $docsify.plugins = [].concat(myPlugin, $docsify.plugins || []);
})();
```

执行顺序：*init > mounted > beforeEach > afterEach > doneEach > ready*

## Links

https://cloud.tencent.com/developer/article/1005968 - _Docsify 深入源码_


## Directory Structure

```wiki
+-- _images // 功能截图...
|   +-- zh-cn
|   +-- ...
+-- _media // 存放图片、视频、音频等资源
|   +-- ... // 网站图标、公共文件...
+-- index.html
```

## Technologies

- [vue-clipboard2](开发框架/javascript-plugins.md#vue-clipboard2)
    ``` html
    <script src="//unpkg.com/vue-clipboard2@latest/dist/vue-clipboard.min.js"></script>
    ```
- [Primer CSS](开发框架/README.md#primer-css)
    ``` html
    <link href="//unpkg.com/@primer/css@latest/dist/primer.css" rel="stylesheet" />
    ```
- [Vue.js](开发框架/README.md#vuejs)
- [Element UI](%E5%BC%80%E5%8F%91%E6%A1%86%E6%9E%B6/README.md#element-ui-%f0%9f%94%a5) 🔥
    ``` html
    <!-- 引入样式 -->
    <link rel="stylesheet" href="//unpkg.com/element-ui/lib/theme-chalk/index.css">
    ```
    ``` html
    <!-- 引入组件库 -->
    <script src="//cdn.jsdelivr.net/npm/vue@2/dist/vue.min.js"></script>
    <script src="//unpkg.com/element-ui/lib/index.js"></script>
    ```


## Awesome

https://github.com/docsifyjs/awesome-docsify - *💖 A curated list of awesome things related to docsify*

https://docsify.js.org/#/awesome - *Awesome docsify*

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


### Plugins

#### CSS

##### 固定顶部导航栏

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



##### 自定义滚动条

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



##### ~~自定义侧边栏~~

_via https://vueblocks.github.io/ve-charts/#/ - *Ve-Charts - ECharts 4.x for Vue.js 2.x.*_

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

##### 响应式布局

```css
/* 小屏设备（最大宽度 768px，超过最大宽度变化为中大屏设备） */
@media only screen and (max-width: 768px) {
  /* Write your css code... */
}
```


#### 回到顶部

- Plugin
  - https://gitee.com/zhengxiangqi/docsify-scroll-to-top - *docsify-scroll-to-top: 基于Docsify的页面滚动回顶部的插件*
- Showcase
    - https://www.itfanr.cc/ - *IT范儿*
        - https://theme-next.org/ - *Home Page | Theme-Next*

        <details class="details-reset"><summary class="btn">复制代码 <span class="dropdown-caret"></summary>
        <div class="border p-3 mt-2">

        _注：_ 放在 *\<div id="app">\</div>* 标签后
        
        ``` html
        <!-- 返回顶部 -->
        <script id="hexo-configurations">
          var NexT = window.NexT || {};
          var CONFIG = {"sidebar": {"position": "right"}};
        </script>
        <link rel="stylesheet" href="_assets/libs/back2top/css/main.css">
        <style>
          .back-to-top.toc {
            right: 120px;
          }
          #back2bottom.toc-b {
            right: 60px;
          }
          @media (max-width: 991px) {
            #back2bottom.toc-b {
              right: 50px;
            }
            .back-to-top.toc {
              right: 110px;
            }
          }
        </style>
        <div class="back-to-top">
          <i class="fa fa-arrow-up"></i>
          <span>0%</span>
        </div>
        <div class="back-to-top" id="back2bottom">
          <i class="fa fa-arrow-down"></i>
          <span>0%</span>
        </div>
        ```
        
        _注：_ 放在 *\</body>* 标签前
        
        ``` html
        <!-- 返回顶部 -->
        <script>
          window.$docsify.plugins.push( // 回到底部按钮显示状态
              function(hook, vm) {
                hook.doneEach(function() {
                  var docHeight = document.querySelector('.markdown-section').offsetHeight;
                  var winHeight = window.innerHeight;
                  if (docHeight > winHeight) {
                    document.querySelector('#back2bottom').classList.add('back-to-top-on');
                  } else {
                    document.querySelector('#back2bottom').classList.remove('back-to-top-on');
                  }
                  // 获取未来元素的属性值
                  setTimeout(function() {
                    console.log(Docsify.dom.find('.toc-toggle-on'))
                    if (document.querySelector('.toc-toggle').getAttribute("class").indexOf("toc-toggle-on") != -1) {
                      console.log("存在");
                      document.querySelector('.back-to-top').classList.toggle('toc', true);
                      document.querySelector('#back2bottom').classList.toggle('toc-b', true);
                    } else {
                      console.log("不存在");
                      document.querySelector('.back-to-top').classList.toggle('toc', false);
                      document.querySelector('#back2bottom').classList.toggle('toc-b', false);
                    }
                  }, 10);
                });
              },)
        </script>
        <script src="_assets/libs/back2top/js/anime.min.js"></script>
        <script src="_assets/libs/back2top/js/utils.js"></script>
        <script src="_assets/libs/back2top/js/next-boot.js"></script>
        <script src="_assets/libs/back2top/js/muse.js"></script>
        ```
        </div>
        </details>


#### 添加页脚

- Plugin
  - <https://docsify.js.org/#/zh-cn/write-a-plugin?id=例子>

#### 全文搜索

- Plugin
  - <https://docsify.js.org/#/zh-cn/plugins?id=全文搜索-search>

#### 字数统计

- Plugin
  - <https://docsify.js.org/#/zh-cn/plugins?id=字数统计>

#### 代码块

##### 代码语法高亮

https://docsify.js.org/#/language-highlight - *Language highlighting*

有关详细信息，请参阅“[PrismJS](开发框架/javascript-plugins.md#prismjs)”。


##### 代码行号

https://prismjs.com/plugins/line-numbers/ - *Line Numbers ▲ Prism plugins*

https://www.bootcdn.cn/prism/ - *prism (v9000.0.1) - Lightweight, robust, elegant syntax highlighting. A spin-off project from Dabblet. | BootCDN - Bootstrap 中文网开源项目免费 CDN 加速服务*

方式一：

```html
<!-- 代码块行号 -->
<link rel="stylesheet" href="https://cdn.bootcdn.net/ajax/libs/prism/9000.0.1/plugins/line-numbers/prism-line-numbers.css">
<style>
  /*
   * Fix line number in code block. 
   * Change this overflow attr to <pre> not the <code>.
   */
  .markdown-section pre[data-lang] {
    overflow: auto !important;
  }
  .markdown-section pre[data-lang] code {
    /*overflow: visible;*/
    padding: 1.25rem 3.25rem;
  }
  .line-numbers .line-numbers-rows {
    left: -1px;
    border-right : 1px solid #fff;
    /* Fix paddings to align with code.*/
    padding: 1.25rem 0; /* Same as code block */
  }
</style>
```

```html
<!-- 代码块行号 -->
<script>
window.$docsify.markdown = {
  renderer: {
    /* Change code block rendering. Add line-numbers class.*/
    code: function (code, lang) {
      let cc = document.createElement('code');
      cc.textContent = code;
      cc.setAttribute('class', 'language-' + lang);
      return '<pre data-lang="' + lang + '" class="line-numbers">' + cc.outerHTML + '</pre>';
    }
  }
}
window.$docsify.plugins.push(
  function (hook, vm) {
    hook.doneEach(function (html) {
      Prism.highlightAll();

      var o = Array.apply(null, document.querySelectorAll("pre[data-lang] code"));
      o.forEach(function (o) {
        var linesNum = (1 + o.textContent.split('\n').length);
        var lineNumbersWrapper;

        var lines = new Array(linesNum);
        lines = lines.join('<span></span>');

        lineNumbersWrapper = document.createElement('span');
        lineNumbersWrapper.className = 'line-numbers-rows';
        lineNumbersWrapper.innerHTML = lines;

        o.appendChild(lineNumbersWrapper);
      })
    })
  }
)
</script>
```

方式二：

```html
<!-- 代码块行号 -->
<link rel="stylesheet" href="//cdn.bootcdn.net/ajax/libs/prism/9000.0.1/plugins/line-numbers/prism-line-numbers.css">
<style>
  /*
   * Fix line number in code block. 
   * Change this overflow attr to <pre> not the <code>.
   */
  .markdown-section pre[data-lang] {
    overflow: auto !important;
  }
  .markdown-section pre[data-lang] code {
    /*overflow: visible;*/
    padding: 1.25rem 3.25rem;
  }
  .line-numbers .line-numbers-rows {
    left: -1px;
    border-right : 1px solid #fff;
    /* Fix paddings to align with code.*/
    padding: 1.25rem 0; /* Same as code block */
  }
</style>
```

```html
<!-- 代码块行号 -->
<script>
window.$docsify.plugins.push(
  function (hook, vm) {
    hook.doneEach(function (html) {
      Prism.highlightAll();
    })
  }
)
</script>
<script src="https://prismjs.com/plugins/line-numbers/prism-line-numbers.js"></script>
```

```html
给 <body></body> 添加 class="line-numbers"
```

参考：

1. https://segmentfault.com/a/1190000009122617 - *代码高亮 - 漂亮的代码语法高亮插件Prism.js简单使用文档 - 严颖专栏 - SegmentFault 思否*

2. https://stackoverflow.com/questions/59508413/static-html-generation-with-prismjs-how-to-enable-line-numbers/64089448#64089448 - *node.js - Static html generation with prismjs - how to enable line-numbers? - Stack Overflow*

##### 代码块折行

参考：

1. https://www.rollupjs.com/ - *简介 | rollup.js 中文文档 | rollup.js中文网*

2. https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLCollection/length - *HTMLCollection.length - Web API 接口参考 | MDN*

##### 复制代码至剪贴板

- 添加代码行数
- 添加类似 GitHub 复制代码块的效果
- 参考：https://blog.csdn.net/xixihahalelehehe/article/details/125120709 - *gtibook 插件 代码块_gitbook 代码_ghostwritten的博客-CSDN博客*

----


样式修改参考：https://tainacan.github.io/tainacan-wiki/#/ - *Tainacan Wiki*

<details class="details-reset"><summary class="btn">复制代码 <span class="dropdown-caret"></summary><div class="border p-3 mt-2">

``` html
<style>
.markdown-section code:not([class*=lang-]):not([class*=language-]) {
  margin: 0 0.15em;
  padding: 0.125em 0.4em;
  border-radius: 2px;
  background: #f2f2f2;
  color: #333;
  white-space: nowrap;
  opacity: 0.75;
}
.content .markdown-section pre[data-lang] {
  position: relative;
  overflow: hidden;
  margin: 1em 0;
  padding: 0;
  border-radius: 4px;
}
.content .markdown-section code {
  color: #454647;
  background-color: #f2f2f2;
  border: 1px solid #dbdbdb;
  border-radius: 2px;
}
.markdown-section pre[data-lang] code {
  display: block;
  overflow: auto;
  // padding: 0.75rem;
  padding: 1.25rem;
}
.content .markdown-section pre>code {
  color: inherit;
  background: inherit;
  boder: inherit;
  border-radius: inherit;
  margin: 0;
}
.content .markdown-section pre {
  background-color: #e6f6f8;
  overflow-y: auto;
}
body .docsify-copy-code-button {
  border-radius: 4px;
  border-top-left-radius: 0;
  border-bottom-right-radius: 0;
  background: #808080;
  color: #fff;
  padding: 5px;
}
.docsify-copy-code-button.error .error,
.docsify-copy-code-button.success .success {
  right: 80%;
  padding: 5px;
}
</style>
```
</div>
</details>


----


- Plugin
    - <https://docsify.js.org/#/zh-cn/plugins?id=复制到剪贴板>
    <details class="details-reset"><summary class="btn">复制代码 <span class="dropdown-caret"></summary><div class="border p-3 mt-2">
    
    ``` html
    <!-- docsify-copy-code -->
    <script>
      // docsify-copy-code (defaults)
      window.$docsify.copyCode = {
        buttonText: 'Copy to clipboard',
        errorText: 'Error',
        successText: 'Copied'
      }
    </script>
    <!-- <script src="//unpkg.com/docsify-copy-code@latest/dist/docsify-copy-code.min.js"></script> -->
    <script src="_assets/libs/docsify-copy-code.js"></script>
    ```
    </div>
    </details>

<br>


##### 显示隐藏的字符

https://prismjs.com/plugins/show-invisibles/ - *Show Invisibles ▲ Prism plugins*

第一步：在 `<head></head>` 标签内添加样式

```html
<link rel="stylesheet" href="https://prismjs.com/plugins/show-invisibles/prism-show-invisibles.css" data-noprefix="">
```

第二步：在 `</body>` 前添加脚本

```html
<script src="https://prismjs.com/plugins/show-invisibles/prism-show-invisibles.js"></script>
```


##### 显示文件系统树结构

https://prismjs.com/plugins/treeview/ - *Treeview ▲ Prism plugins*

第一步：在 `<head></head>` 标签内添加样式

```html
<link rel="stylesheet" href="https://prismjs.com/plugins/treeview/prism-treeview.css" data-noprefix="">
```

第二步：在 `</body>` 前添加脚本

```html
<script src="https://prismjs.com/plugins/treeview/prism-treeview.js"></script>
```
第三步：将

```treeview
root_folder/
├── a first folder/
|   ├── holidays.mov
|   ├── javascript-file.js
|   └── some_picture.jpg
├── documents/
|   ├── spreadsheet.xls
|   ├── manual.pdf
|   ├── document.docx
|   └── presentation.ppt
└── etc.
```
⚠️注意：如果文件类型是目录，则需要在文件名最后加上 `/`；比如：`root_folder` 加了 `/` 后（`root_folder/`），文件名前面显示的是文件夹图标，没有加 `/`，文件名前面显示的是文件图标。


#### ~~评论系统~~

- Plugin

  - disqus https://docsify.js.org/#/zh-cn/plugins?id=disqus

  - gitalk https://docsify.js.org/#/zh-cn/plugins?id=gitalk


#### 当前文档最近修改 / 更新时间

- Showcase

  - https://tainacan.github.io/

  - https://github.com/tainacan/tainacan-wiki/blob/master/index.html

  - https://xflihaibo.github.io/

#### ~~评分~~

- Showcase
  - https://lhammer.cn/You-need-to-know-css/#/


#### ~~鼠标点击特效~~

- Showcase
  - https://notebook.js.org/#/ - *ETS' NoteBook - By Mr.Wu - 微信公众号：码客趣分享 🌹*

#### 目录 TOC

-  Plugin

    - 👍 https://github.com/justintien/docsify-plugin-toc - *page's ToC (Table of Content) for docsify.*
    
    未使用
    <details class="details-reset"><summary class="btn">复制代码 <span class="dropdown-caret"></summary><div class="border p-3 mt-2">

    ``` html
    <script>
      var count = 0;
      var outTime = 1; //分钟
      var el = document.querySelector('.toc-nav-hover')
    
      function go() {
        count++;
        if (count == outTime * 5) {
          // alert('您长时间未操作页面');
    
          document.querySelector('.toc-nav').classList.toggle('toc-nav-hover', el)
    
          count = 0;
          // 此处处理后续操作
        }
      }
      window.setInterval(go, 1000);
    </script>
    ```
    </div>
    </details>
    
    方式一

    <details class="details-reset"><summary class="btn">复制代码 <span class="dropdown-caret"></summary><div class="border p-3 mt-2">

    ``` html
    <div class="toc-toggle" style="min-width: 50px;">📚🔻</div>
    <!-- Table of Contents -->
    <script>
      let ObjStatus = document.querySelector('.toc-toggle')
      document.addEventListener('click', (e) => {
        let t = document.querySelector('.toc-nav') // 最外层元素
        if (!e.path.includes(ObjStatus)) {
          if (!e.path.includes(t)) {
            document.querySelector('.toc-nav').classList.toggle('toc-nav-hover', e.path.includes(t));
            document.querySelector('.toc-toggle').innerText = "📚🔻";
            // ObjStatus.innerHTML = '事件触发情况：触发'
          } else {
            // ObjStatus.innerHTML = '事件触发情况：未触发'
          }
        }
      })
      document.querySelector('.toc-toggle').addEventListener('click', (e) => {
        if (!document.querySelector('.toc-nav-hover')) {
          document.querySelector('.toc-toggle').innerText = "📖🔺";
        } else {
          document.querySelector('.toc-toggle').innerText = "📚🔻";
        }
        document.querySelector('.toc-nav').classList.toggle('toc-nav-hover');
      });
      
      window.$docsify.toc = {
        tocMaxLevel: 5,
        target: 'h1, h2, h3, h4, h5, h6'
      }
    </script>
    <script src="//unpkg.com/docsify-plugin-toc@latest/dist/docsify-plugin-toc.min.js"></script>
    
    ```
    </div>
</details>

    方式二（推荐）

    <details class="details-reset"><summary class="btn">复制代码 <span class="dropdown-caret"></summary><div class="border p-3 mt-2">

    ``` html
    <!-- Table of Contents -->
    <link rel="stylesheet" href="//unpkg.com/docsify-plugin-toc@latest/dist/light.css">
    <link rel="stylesheet" href="_assets/css/custom-docsify-plugin-toc.css">
    <style>
      /* TOC */
      .toc-toggle.toc-toggle-on {
        bottom: 13px;
      }
      .toc-toggle .toggle-line {
        background: #fff;
        display: inline-block;
        height: 2px;
        left: 0;
        position: relative;
        top: 0;
        transition: all 0.4s;
        vertical-align: top;
        width: 100%;
      }
      .toc-toggle .toggle-line:not(:first-child) {
        margin-top: 3px;
      }
      .toc-toggle.toggle-arrow .toggle-line-first {
        top: 2px;
        transform: rotate(-45deg);
        width: 50%;
      }
      .toc-toggle.toggle-arrow .toggle-line-middle {
        width: 90%;
      }
      .toc-toggle.toggle-arrow .toggle-line-last {
        top: -2px;
        transform: rotate(45deg);
        width: 50%;
      }
      .toc-toggle.toggle-close .toggle-line-first {
        top: 5px;
        transform: rotate(-45deg);
      }
      .toc-toggle.toggle-close .toggle-line-middle {
        opacity: 0;
      }
      .toc-toggle.toggle-close .toggle-line-last {
        top: -5px;
        transform: rotate(45deg);
      }
      .toc-sidebar-toggle {
        background: #222;
        /*bottom: 45px;*/
        cursor: pointer;
        height: 24px;
        left: auto;
        /*right: 30px;*/
        padding: 5px;
        position: fixed;
        width: 24px;
        z-index: 1300;
        line-height: 0;
        text-align: left;
      }
      .toc-sidebar-toggle:hover .toggle-line {
        background: #87daff;
      }
      /* New add */
      .flisxm {
        inset: 0px;
        position: fixed;
        display: none;
        background-color: rgba(0,0, 0, 0.5);
      }
      .flisxm-show {
        display: block;
      }
      .toc-sidebar-toggle {
        background: #fff;
        color: #87daff;
      }
      .toc-toggle .toggle-line {
        background: #87daff;
      }
      .toc-toggle.btn {
        white-space: normal;
      }
      .toc-sidebar-toggle {
        width: 28px;
      }
    </style>
    <div class="toc-toggle toc-sidebar-toggle">
        <span class="toggle-line toggle-line-first"></span>
        <span class="toggle-line toggle-line-middle"></span>
        <span class="toggle-line toggle-line-last"></span>
    </div>
    ```
    
    
    ``` html
    <!-- Table of Contents -->
    <script>
      window.$docsify.plugins.push(// 
        function(hook, vm) {
          hook.doneEach(function() {
            setTimeout(function(){
              document.querySelector('.toc-toggle').classList.toggle('toc-toggle-on', document.getElementsByClassName('lv2').length);
              
              var para = document.createElement("div");
              para.setAttribute("class", "flisxm");
              document.querySelector(".toc-nav").appendChild(para);
              
              // 选择需要观察变动的节点
              const targetNode = document.querySelector('.toc-nav');
          
              // 观察器的配置（需要观察什么变动）
              const config = { attributes: true, childList: true, subtree: true };
          
              // 当观察到变动时执行的回调函数
              const callback = function(mutationsList, observer) {
              // Use traditional 'for loops' for IE 11
              for(let mutation of mutationsList) {
                if (mutation.type === 'childList') {
                    console.log('A child node has been added or removed.');
                }
                else if (mutation.type === 'attributes') {
                //console.log(document.querySelector('body').classList.toggle('toc-body', true))
                console.log(document.querySelector('.toc-nav-hover'))
                   if (document.querySelector('.toc-nav-hover')) {
                      console.log("TOC 开启");
                      document.querySelector('body').classList.toggle('toc-body', true);
                      document.querySelector('.flisxm').classList.toggle('flisxm-show', true);
                      document.querySelector('.toc-toggle').classList.toggle('toggle-close', true);
                      document.querySelector('.app-nav').style.display = "none";
                    } else {
                      console.log("TOC 关闭");
                      document.querySelector('body').classList.toggle('toc-body', false);
                      document.querySelector('.flisxm').classList.toggle('flisxm-show', false);
                      document.querySelector('.toc-toggle').classList.toggle('toggle-close', false);
                      document.querySelector('.app-nav').style.display = "block";
                    }
                    console.log('The ' + mutation.attributeName + ' attribute was modified.');
                }
              }
            }, 1);
          });
        },
      )
      
      window.$docsify.toc = {
        tocMaxLevel: 5,
        target: 'h1, h2, h3, h4, h5, h6'
      }
    </script>
    <script src="_assets/libs/docsify-plugin-toc.js"></script>
    ```
    </div>
</details>

    - https://github.com/mrpotatoes/docsify-toc - *GitHub - mrpotatoes/docsify-toc: docsify-toc*
    
        <details class="details-reset"><summary class="btn">复制代码 <span class="dropdown-caret"></summary><div class="border p-3 mt-2">

        ``` css
        /**
         * Page TOC
         * @url //unpkg.com/docsify-toc/
         */
        /*section.content {
            bottom: auto;
        }
        .page_toc {
            top: 120px;
            bottom: 120px;
            overflow: auto;
            !*margin-top: 120px;*!
            font-size: 0.875rem;
            padding: 0 1rem 0 0.25rem;
        }
        .page_toc ul a {
            font-weight: 400;
            color: #888888;
        }
        .page_toc ul a:hover span {
            color: var(--theme-color, #298596);
        }
        .page_toc .active {
            border-left: none;
            color: var(--theme-color, #298596);
            padding-left: 0;
        }
        .page_toc .active::before {
            content:'';
            width: 3px;
            background-color: var(--theme-color, #298596);
            display: inline-block;
            height: 1.25rem;
            position: absolute;
            left: 0;
        }
        !* 滚动条颜色 *!
        .page_toc::-webkit-scrollbar-thumb {
            background: transparent;
            background-image: none;
            border-radius: 2em;
        }
        .markdown-section {
            width: calc(100% - 1160px);
        }
        @media screen and (max-width: 1300px) {
            .page_toc {
                margin-bottom: -120px;
            }
            .nav {
                display: none;
            }
            .markdown-section {
                width: auto;
            }
        }*/
        /* Page TOC */
        /*.page_toc {
          font-size: 0.875rem;
          padding: 0 1rem 0 0.25rem;
          overflow: auto;
          max-height: calc(100vh - 120px);
          max-width: 100%;
        }
        .page_toc ul a {
          font-weight: 400;
          color: #707070;
        }
        .page_toc ul a.anchor span {
          color: #707070;
        }
        .page_toc ul a.anchor:hover {
          text-decoration: none;
        }
        .page_toc ul a.anchor:focus {
          text-decoration: underline;
        }
        .page_toc ul code {
          color: #284472;
        }
        @media screen and (max-width: 1300px) {
          .page_toc {
              max-height: 100%;
              overflow: hidden;
          }
        }
        .page_toc ul a {
          position: relative;
          padding: 5px 10px;
        }
        .page_toc ul a span:hover {
          background: none;
          color: #444;
        }
        .page_toc ul a:before {
          content: "{";
          color: #bbb;
          position: absolute;
          font-size: 16px;
          top: 4px;
          left: 0;
          display: none;
        }
        .page_toc ul a:hover:before {
          font-weight: bold;
          display: block;
        }
        .page_toc .active {
          border-left: none;
          color: #42b983;
          padding: 5px 10px;
          display: inline-block;
        }
        .page_toc .active:before {
          font-weight: bold;
          display: block;
          color: #42b983;
        }
        .page_toc .active:after {
          content: "";
        }*/
        
        /* 滚动条颜色 */
        aside.toc-nav::-webkit-scrollbar-thumb {
            background: transparent!important;
            background-image: none!important;
            border-radius: 2em!important;
        }
        ```
        
        </div>
        </details>

- Showcase
  - 👍 https://tainacan.github.io/tainacan-wiki/
    - 👍 https://github.com/tainacan/tainacan-wiki/blob/master/index.html

#### 目录结构

- Showcase
  - https://xflihaibo.github.io/docs/#/standard/standard - *书写规范 - 幸福拾荒者*

#### Flexible Alerts 🎁

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
    
    

#### Page title 🎁

- Plugin
    - https://github.com/Sujaykumarh/docsify-plugin-title - *🔌 Docsify plugin customize page title*
    <details class="details-reset"><summary class="btn">复制代码 <span class="dropdown-caret"></summary><div class="border p-3 mt-2">
    
    ``` html
    <!-- 自定义页面标题 -->
    <script>
      window.$docsify.customPageTitle = {
        prefix:     'docs-learning',      // [optional] title prefix. default: false eg: prefix: "Application"
        suffix:     false,      // [optional] title suffix. default: false eg: suffix: "v1.0.0"
        seprator:   '-',        // [optional] seprator for title eg: title->   prefix | title | suffix
        debug:      false,      // [optional] should debug
      }
    </script>
    <script src="//cdn.jsdelivr.net/npm/@sujaykumarh/docsify-plugin-title@1.x/dist/plugin.min.js"></script>
    ```
    </div>
    </details>



#### ~~分享~~

- Showcase
  - https://github.com/tainacan/tainacan-wiki/blob/master/index.html

#### ~~Emoji~~

- Plugin
    - https://github.com/TaQini/docsify-twemoji - *parse all emoji in style of twitter emoji for docsify*

    ``` html
    <script src="//unpkg.com/docsify@latest/lib/plugins/emoji.min.js"></script><!--emoji-->
    ```


#### Tabs（标签页）

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

#### ~~Accordion（手风琴） 🎁~~

- Plugin
  - https://github.com/isaozler/docsify-accordion - *Accordion plugin for docsify*

#### ~~网页调试~~

``` html
<!-- 手机端网页调试 -->
<script src="//cdn.bootcdn.net/ajax/libs/eruda/2.3.3/eruda.js"></script>
<script>eruda.init();</script>
```

``` html
<!-- 手机端网页调试 -->
<script src="//unpkg.com/vconsole@latest/dist/vconsole.min.js"></script>
<script>
  // VConsole 默认会挂载到 `window.VConsole` 上
  var vConsole = new window.VConsole();
</script>
```

#### 数学公式 LaTeX

有关详细信息，请参阅“[Markdown > 数学公式](os/tools/markdown.md#数学公式)”。

https://github.com/scruel/docsify-latex - *GitHub - scruel/docsify-latex: A docsify.js plugin for typesetting LaTeX with display engines from markdown.*

``` html
<!-- LaTeX display engine -->
<script src="//cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
<!--  docsify-latex plugin -->
<script src="//cdn.jsdelivr.net/npm/docsify-latex@0"></script>
```

#### 图表 Diagrams

有关详细信息，请参阅“[Markdown > 图表](os/tools/markdown.md#图表)”。

https://github.com/Leward/mermaid-docsify - *GitHub - Leward/mermaid-docsify: A plugin to render mermaid diagrams in docsify*

``` html
<script>
  window.$docsify.mermaidConfig = {
    querySelector: ".mermaid"
  };
</script>
<script type="module">
  import mermaid from "//cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs";
  mermaid.initialize({ startOnLoad: true });
  window.mermaid = mermaid;
</script>
<script src="//unpkg.com/docsify-mermaid@2.0.0/dist/docsify-mermaid.js"></script>
```

参考：

https://blog.csdn.net/jslygwx/article/details/125868321 - *Docsify画图建模Mermaid插件支持_mermaid 插件_Willin Wang的博客-CSDN博客*

### Themes

https://docsify.js.org/#/themes - *Themes*

#### ~~切换主题（白天 / 夜间模式切换）~~

- Showcase
  - https://bytesfly.github.io/island/#/ - *侠客岛*

- Plugin
  - 👍 https://jhildenbiddle.github.io/docsify-themeable/#/themes?id=defaults - *docsify-themeable - A delightfully simple theme system for docsify.js* [GitHub](https://github.com/jhildenbiddle/docsify-themeable)
  - https://github.com/Plugin-contrib/docsify-plugin/tree/master/packages/docsify-dark-mode - *docsify-plugin/packages/docsify-dark-mode at master · Plugin-contrib/docsify-plugin · GitHub*

    <details class="details-reset"><summary class="btn">复制代码 <span class="dropdown-caret"></summary><div class="border p-3 mt-2">
    
    ```html
    <!-- 切换主题 -->
    <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/docsify-dark-mode@latest/dist/style.min.css"/>
    <style>
    .search {
      border-bottom: 1px solid rgb(180 180 180 / 30%)!important;
    }
    .search input {
      background-color: var(--docsify_dark_mode_bg, #fff);
    }
    @media screen and (max-width: 768px) {
      body.close .sidebar-toggle {
        background: var(--docsify_dark_mode_bg, #fff);
        opacity: .8;
      }
    }
    </style>
    ```
    
    ```html
    <!-- 切换主题 -->
    <script src="//cdn.jsdelivr.net/npm/docsify-dark-mode@latest/dist/index.min.js"></script>
    <script>
      window.$docsify.darkMode = {
        dark: {
          // background: "#1c2022",
          background: "#091a28",
          toggleBtnBg: "#34495e",
          textColor: "#b4b4b4"
        },
        light: {
          background: "white",
          toggleBtnBg: "var(--theme-color)",
          // textColor: "var(--theme-color)",
          textColor: "#34495e"
        }
      }
      // ...
    </script>
    ```
    
    </div>
    </details>

