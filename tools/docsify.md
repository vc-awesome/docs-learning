> A magical documentation site generator.<br><i class="bi bi-translate dark-yellow"></i> <br>一个神奇的文档网站生成器。

<i class="fa fa-laptop"></i> https://docsify.js.org/

<i class="fa fa-github fa-lg"></i> https://github.com/docsifyjs/docsify/

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

### 固定顶部导航栏

```css
/*固定导航栏*/
nav.app-nav {
    position: fixed;
    margin: 0;
    padding: 10px 0 10px 0;
    width: calc(100% - 325px);
    background-color: #fff;
    height: 55px;
    border-bottom: 1px solid #eee;
}
```



### 自定义滚动条样式 

```css
/*滚动条样式 start*/
/* 滚动条宽度 */
::-webkit-scrollbar {
    width: 4px;
    height: 4px;
}
/* 滚动条颜色 */
::-webkit-scrollbar-thumb {
    background: #33a9dc;
    background-image: linear-gradient(#6ecd56, #33a9dc, #cb6196, #c16290);
    border-radius: 2em;
}
/*滚动条样式 end*/
```



### 自定义侧边栏 

```css
/*自定义侧边栏*/
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

https://gitee.com/zhengxiangqi/docsify-scroll-to-top

### 添加页脚

https://docsify.js.org/#/zh-cn/write-a-plugin?id=例子

### 全文搜索

https://docsify.js.org/#/zh-cn/plugins?id=全文搜索-search

### 字数统计

https://docsify.js.org/#/zh-cn/plugins?id=字数统计

### 复制到剪贴板/复制代码

https://docsify.js.org/#/zh-cn/plugins?id=复制到剪贴板

### 评论系统

- disqus https://docsify.js.org/#/zh-cn/plugins?id=disqus
- gitalk https://docsify.js.org/#/zh-cn/plugins?id=gitalk

### 当前文档最近修改/更新时间

参考：

https://tainacan.github.io/

https://github.com/tainacan/tainacan-wiki/blob/master/index.html

https://xflihaibo.github.io/

### 评分

参考：https://lhammer.cn/You-need-to-know-css/#/

### 切换主题（白天/夜间模式切换）

参考：

https://bytesfly.github.io/island/#/

:thumbsup: https://jhildenbiddle.github.io/docsify-themeable/#/

### 鼠标点击特效

参考：https://notebook.js.org/#/

### 目录TOC

:thumbsup: https://github.com/justintien/docsify-plugin-toc

https://github.com/mrpotatoes/docsify-toc

参考：

👍 https://tainacan.github.io/tainacan-wiki/

👍 https://github.com/tainacan/tainacan-wiki/blob/master/index.html

### 分享

参考：

https://github.com/tainacan/tainacan-wiki/blob/master/index.html

### 目录结构

https://xflihaibo.github.io/docs/#/standard/standard

### emoji

https://github.com/TaQini/docsify-twemoji

### tabs（选项卡）

https://github.com/jhildenbiddle/docsify-tabs

https://jhildenbiddle.github.io/docsify-themeable/#/markdown

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



## Showcase

:thumbsup: https://notebook.js.org/#/

http://note.taqini.space/

https://xflihaibo.github.io/docs/#/

https://bytesfly.github.io/island/#/

https://docs.saasify.sh/#/

https://tainacan.github.io/tainacan-wiki/#/

https://lhammer.cn/You-need-to-know-css/#/

https://vueblocks.github.io/ve-charts/#/



看至：`gitmoji-changelog`
