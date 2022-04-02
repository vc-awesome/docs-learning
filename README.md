>
> 文档进阶之路：`记事本` > `word` > `markdown` > `docsify`

?> A scalable set of icons handcrafted with <3 by GitHub.  
<i class="bi bi-translate dark-yellow"></i> GitHub 使用 <3 手工制作的一组可扩展图标。

```markdown
?> A scalable set of icons handcrafted with <3 by GitHub.  
<i class="bi bi-translate dark-yellow"></i> GitHub 使用 <3 手工制作的一组可扩展图标。
```



!> Official open source SVG icon library for Bootstrap.<br><i class="bi bi-translate dark-yellow"></i> Bootstrap 的官方开源 SVG 图标库。

```markdown
!> Official open source SVG icon library for Bootstrap.  
<i class="bi bi-translate dark-yellow"></i> Bootstrap 的官方开源 SVG 图标库。
```



## todo

- markdown yaml front matter
- github
- awesome
- 开发框架
- 图标字体



## icon

?> 图标



<i class="fa fa-link"></i> <i class="bi bi-link-45deg"></i> <i class="ri-links-line"></i> [图标字体库](/front-end/?id=图标字体库)



| Preview                          | Name                  | Code                                                       |
| -------------------------------- | --------------------- | ---------------------------------------------------------- |
| <i class="bi bi-link-45deg"></i> | Bootstrap Icon        | `<i class="bi bi-link-45deg"></i>`                         |
| <i class="fa fa-link"></i>       | Fontawesome Icon      | `<i class="fa fa-link"></i>`                               |
| <i class="fa fa-link fa-lg"></i> | Fontawesome Icon Size | `<i class="fa fa-link fa-lg fa-2x fa-3x fa-4x fa-5x"></i>` |



## emoji

?> Emoji 是来自 UTF-8 字符集的字符: 😄 😍 💗。  
表情符号（英语：emoji，日语：絵文字／えもじ emoji），是使用在网页和聊天中的形意符号，最初是日本在无线通信中所使用的视觉情感符号（图画文字）。表情意指面部表情，图标则是图形标志的意思，可用来代表多种表情，如笑脸表示笑、蛋糕表示食物等。 Emoji 看起来像一张图片或图标，其实不是。  
`Emoji` 实际上是 UTF-8 (Unicode) 字符集上的字符。  
UTF-8 几乎涵盖了世界上所有的字符和符号。



<i class="fa fa-external-link"></i> https://emojipedia.org/

<i class="fa fa-external-link"></i> https://www.webfx.com/tools/emoji-cheat-sheet/

<i class="fa fa-external-link"></i> [github emoji 表情列表](https://www.cnblogs.com/takeurhand/p/6940135.html)

<i class="fa fa-external-link"></i> [![Gitmoji](https://img.shields.io/badge/gitmoji-%20😜%20😍-FFDD67.svg?style=flat-square)](https://gitmoji.dev/)

<i class="fa fa-link"></i> [<i class="fa fa-github"></i> GitHub](/home/github)

<i class="fa fa-link"></i> [<i class="icon octicon-file markdown-icon"></i> Markdown](/home/markdown.md?id=emoji表情 "Markdown")



| 简码                 | 效果               | 描述                           | emoji | 用途/使用场景    |
| -------------------- | ------------------ | ------------------------------ | ----- | ---------------- |
| `:rocket:`           | :rocket:           | Rocket                         | 🚀     | get started/开始 |
| `:fire:`             | :fire:             | Fire                           | 🔥     | 热点             |
| `:seedling:`         | :seedling:         | Seedling                       | 🌱     | 开发中/完善中    |
| `:heart:`            | :heart:            | Red Heart                      | ❤️     |                  |
| `:name_badge:`       | :name_badge:       | Name Badge                     | 📛     |                  |
| `:sparkles:`         | :sparkles:         | Sparkles                       | ✨     |                  |
| `:tada:`             | :tada:             | Party Popper                   | 🎉     |                  |
| `:smiley:`           | :smiley:           | Grinning Face with Big Eyes    | 😃     |                  |
| `:blush:`            | :blush:            | Smiling Face with Smiling Eyes | 😊     |                  |
| `:joy:`              | :joy:              | Face with Tears of Joy         | 😂     |                  |
| `:two_hearts:`       | :two_hearts:       | Two Hearts                     | 💕     |                  |
| `:ticket:`           | :ticket:           | Ticket                         | 🎫     |                  |
| `:muscle:`           | :muscle:           | Muscle                         | 💪     |                  |
| `:thumbsup:`         | :thumbsup:         | Thumbs Up                      | 👍     | 推荐/点赞        |
| `:clap:`             | :clap:             | Clapping Hands                 | 👏     |                  |
| `:writing_hand:`     | :writing_hand:     | Writing Hand                   | ✍️     |                  |
| `:heavy_check_mark:` | :heavy_check_mark: | Check Mark                     | ✔️     |                  |
| `:x:`                | :x:                | Cross Mark                     | ❌     |                  |
| `:chestnut:`         | :chestnut:         | Chestnut                       | 🌰     | 举例             |
| `:warning:`          | :warning:          | Warning                        | ⚠️     |                  |
|                      |                    |                                |       | 分享             |



## docsify

?> A magical documentation site generator.<br><i class="bi bi-translate dark-yellow"></i> 一个神奇的文档网站生成器。



<i class="fa fa-laptop"></i> https://docsify.js.org/

<i class="fa fa-github fa-lg"></i> https://github.com/docsifyjs/docsify/



### Plugins

**固定`顶部导航栏`**

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

------



**自定义`滚动条`样式**

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

------

**自定义`侧边栏`**

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

------

**回到顶部**

https://gitee.com/zhengxiangqi/docsify-scroll-to-top



**添加页脚**

https://docsify.js.org/#/zh-cn/write-a-plugin?id=例子



**全文搜索**

https://docsify.js.org/#/zh-cn/plugins?id=全文搜索-search



**字数统计**

https://docsify.js.org/#/zh-cn/plugins?id=字数统计



**复制到剪贴板/复制代码**

https://docsify.js.org/#/zh-cn/plugins?id=复制到剪贴板



**评论系统**

- disqus https://docsify.js.org/#/zh-cn/plugins?id=disqus
- gitalk https://docsify.js.org/#/zh-cn/plugins?id=gitalk



**当前文档最近修改/更新时间**

参考：

https://tainacan.github.io/

https://github.com/tainacan/tainacan-wiki/blob/master/index.html

https://xflihaibo.github.io/



**评分**

参考：https://lhammer.cn/You-need-to-know-css/#/



**切换主题（白天/夜间模式切换）**

参考：https://bytesfly.github.io/island/#/



**鼠标点击特效**

参考：https://notebook.js.org/#/



**目录TOC**

:thumbsup: https://github.com/justintien/docsify-plugin-toc

https://github.com/mrpotatoes/docsify-toc

参考：

https://tainacan.github.io/tainacan-wiki/

https://github.com/tainacan/tainacan-wiki/blob/master/index.html



**分享**

参考：

https://github.com/tainacan/tainacan-wiki/blob/master/index.html



**目录结构**

https://xflihaibo.github.io/docs/#/standard/standard



**emoji**

https://github.com/TaQini/docsify-twemoji



### Showcase

:thumbsup: https://notebook.js.org/#/

http://note.taqini.space/

https://xflihaibo.github.io/docs/#/

https://bytesfly.github.io/island/#/

https://docs.saasify.sh/#/

https://tainacan.github.io/tainacan-wiki/#/

https://lhammer.cn/You-need-to-know-css/#/

https://vueblocks.github.io/ve-charts/#/



`_media` 存放图片、视频、音频等资源



看至：`gitmoji-changelog`



## awesome

?> 😎 Awesome lists about all kinds of interesting topics.  
<i class="bi bi-translate dark-yellow"></i> 😎 关于各种有趣主题的精彩列表。



![](https://awesome.re/badge-flat2.svg) 

<i class="fa fa-github fa-lg"></i> https://github.com/sindresorhus/awesome

<i class="fa fa-github fa-lg"></i></i> <i class="fa fa-search"></i> https://github.com/topics/awesome



参考链接

chaozh
/
awesome-blockchain-cn https://github.com/chaozh/awesome-blockchain-cn

ziadoz
/
awesome-php https://github.com/ziadoz/awesome-php

tiimgreen
/
github-cheat-sheet https://github.com/tiimgreen/github-cheat-sheet

AllThingsSmitty
/
css-protips https://github.com/AllThingsSmitty/css-protips

------

Awesome系列：Github中不能错过的巨人肩膀 https://zhuanlan.zhihu.com/p/144053402

Github awesome 系列开源项目合集 https://www.cnblogs.com/fanbi/p/12807731.html

Github最受欢迎的Awesome系列 https://blog.csdn.net/weixin_34404393/article/details/88021937

GitHub 上的 Awesome 系列（资源大全系列） https://zhuanlan.zhihu.com/p/89873800

