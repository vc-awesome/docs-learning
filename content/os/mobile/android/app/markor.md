# Markor

## 简介

> Text editor - Notes & ToDo (for Android) - Markdown, todo.txt, plaintext, math, ..

![F-Droid Version](https://img.shields.io/f-droid/v/net.gsantner.markor)
![GitHub last commit](https://img.shields.io/github/last-commit/gsantner/markor?color=blue&logo=github)
![GitHub Release Date - Published_At](https://img.shields.io/github/release-date/gsantner/markor?display_date=published_at&logo=github)
![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/gsantner/markor?logo=github)
![GitHub Repo stars](https://img.shields.io/github/stars/gsantner/markor?style=social)
![Platforms](https://img.shields.io/badge/platforms-Android-blue)

## 官方

https://github.com/gsantner/markor - *GitHub - gsantner/markor: Text editor - Notes & ToDo (for Android) - Markdown, todo.txt, plaintext, math, ..*

## 安装

https://github.com/gsantner/markor/releases - *Releases · gsantner/markor · GitHub*

https://f-droid.org/packages/net.gsantner.markor/ - *Markor | F-Droid - Free and Open Source Android App Repository*

## 设置

### 通用

> ⚙️ _更多 > 设置 > 通用_

1. Features
    1. 语法高亮：勾选
    2. 动态高亮：勾选
    3. 多窗口：勾选

### 其它

> ⚙️ _更多 > 设置 > 其它_

1. 编辑器
    1. 快捷键间距：2
    2. 基本颜色方案：选择「预设值-Gruvbox」

2. 文件浏览器
    1. 文件描述格式

        - 设置成：`FS yyyy/MM/dd aahh:mm`

        - 显示效果：**30KB 2020/04/02 上午10:30**

3. Backup
    1. 备份设置

### 编辑模式

> ⚙️ _更多 > 设置 > 编辑模式_

1. 字号：16
2. 制表符宽度：4
3. 杂项设置
    1. 行间距：100
    2. 折行：勾选
    3. 使用 Tab 键缩进行：勾选

### 查看模式

> ⚙️ *更多 > 设置 > 查看模式*


1. 滑动以更改模式：不勾选

2. 在“查看模式”下，`<a></a>` 标签内的文本内容不自动换行，导致查看完整页面需要左右滑动的处理方式如下：

    - ⚙️ *更多 > 设置 > 查看模式 > （Inject）Inject -> Head*

    - 在 `<style></style>` 标签内添加样式 ↓

        ```css
          a,
          u,
          em {
            word-break: break-word;
            word-wrap: break-word;
          }
        ```

3. 在“查看模式”下，设置 `<code></code>` 标签内容的样式：

    - ⚙️ *更多 > 设置 > 查看模式 > （Inject）Inject -> Head*

    - 在 `<style></style>` 标签内添加样式 ↓

        ```css
          code {
            padding: .2em .4em;
            margin: 0;
            font-size: 85%;
            white-space: break-spaces;
            word-wrap: break-word;
            background-color: rgba(175,184,193,.2);
            border-radius: 6px;
          }
        ```

    参考：https://docs.github.com/zh/pages/setting-up-a-github-pages-site-with-jekyll/adding-content-to-your-github-pages-site-using-jekyll#about-content-in-jekyll-sites （在网页浏览器的“手机模式”下，查看效果更佳。）

4. 在“查看模式”下，设置 `<kbd></kbd>` 标签内容的样式：

    - ⚙️ *更多 > 设置 > 查看模式 > （Inject）Inject -> Head*

    - 在 `<style></style>` 标签内添加样式 ↓

        ```css
          kbd {
            border: solid 1px #ccc;
            border-radius: 3px;
            display: inline-block;
            font-size: 12px !important;
            line-height: 12px;
            margin-bottom: 3px;
            padding: 3px 5px;
            vertical-align: middle;
            color: #1f2328;
            background-color: #f6f8fa;
            box-shadow: inset 0 -1px 0 rgba(175,184,193,.2);
          }
        ```

5. 在“查看模式”下，设置自定义的主题样式：

    [下载主题](home/markdown.md#主题)：

    1. [少数派经典主题](https://sspai.com/post/43873)

6. 在“查看模式”下，添加背景图标签内容：

    - ⚙️ *更多 > 设置 > 查看模式 > （Inject）Inject -> body*

    - 在 `</body>` 标签添加内容 ↓

        ```html
        <img
          src="https://lug.ustc.edu.cn/static/USTC_logo.svg"
          style="
            position: fixed;
            bottom: -320px;
            left: -200px;
            opacity: 0.1;
            z-index: -100;
          "
        />
        
        ```

        参考：https://lug.ustc.edu.cn/ - *中国科学技术大学 Linux 用户协会*

7. 以上 5 条设置合并

    - ⚙️ *更多 > 设置 > 查看模式 > （Inject）Inject -> body*

    - 注入下列内容 ↓

        ```html
        <link
          rel="stylesheet"
          href="file:////storage/emulated/0/Documents/markor/note/markor/markor-custom.css"
        />
        <!--Theme-->
        <link
          rel="stylesheet"
          href="file:////storage/emulated/0/Documents/markor/note/markor/themes/sspai/sspai-custom.css"
        />
        <!--Font Awesome-->
        <link
          rel="stylesheet"
          href="https://fastly.jsdelivr.net/npm/font-awesome@4.7.0/css/font-awesome.min.css"
        />
        <link
          rel="stylesheet"
          href="https://site-assets.fontawesome.com/releases/v6.4.0/css/all.css"
        />
        <!--复制代码块-->
        <link
          href="file:////storage/emulated/0/Documents/markor/gh/docs-learning/_assets/clipboard-code-block.css"
          rel="stylesheet"
        />
        <script
          src="https://clipboardjs.com/dist/clipboard.min.js"
          defer
        ></script>
        <script
          src="file:////storage/emulated/0/Documents/markor/gh/docs-learning/_assets/clipboard-code-block.js"
          defer
        ></script>
        <script
          src="file:////storage/emulated/0/Documents/markor/gh/docs-learning/_assets/clipboard-code.js"
          defer
        ></script>
        <!--页面背景图-->
        <img
          src="https://lug.ustc.edu.cn/static/USTC_logo.svg"
          style="
            position: fixed;
            bottom: -320px;
            left: -200px;
            opacity: 0.1;
            z-index: -100;
          "
        />
        
        ```

8. 在“查看模式”下，添加"返回页面顶部、底部及上下翻页"功能：

    - ⚙️ *更多 > 设置 > 查看模式 > （Inject）Inject -> head*

    - 注入下列内容 ↓

        ```html
        <style>
          html,
          body {
            /*font-family: sans-serif-condensed;*/
            /*font-size: 80%;*/
          }
        </style>
        
        <script type="text/javascript">
          function onPageLoaded() {
            /*if ('{{ post.text_converter_name }}' == 'MarkdownTextConverter') {
              window.scrollTo(0, document.body.scrollHeight);
            }*/

            /* **********************************************
                Begin 替换 <a> 标签的链接路径
            ********************************************** */

            const [currentHref, replaceHref] = [window.location.href, `file:///storage/emulated/0/Documents/markor/gh/docs-learning/content/`];
            const regex = new RegExp(`${replaceHref}(?!.*?\/#)`, 'i');

            // 获取所有的 <a> 标签
            const links = document.querySelectorAll('a');

            // 遍历每个 <a> 标签并替换 href 属性
            links.forEach(link => {
              // alert(link.href);
              if (regex.test(link.href)) {
                // alert(link.href);
                link.href = link.href.replaceAll(currentHref, replaceHref);
              }
            });
          }
        </script>
        <script
          src="file:////storage/emulated/0/Documents/markor/note/markor/jquery-2.2.4.min.js"
          defer
        ></script>
        <script
          src="file:////storage/emulated/0/Documents/markor/note/markor/anime.min.js"
          defer
        ></script>
        <script
          src="file:////storage/emulated/0/Documents/markor/note/markor/markor-back2top.js"
          defer
        ></script>
        <script
          src="https://prismjs.com/plugins/autoloader/prism-autoloader.js"
          defer
        ></script>
        ```

#### 主题

⚙️ *更多 > 设置 > 查看模式 > （Inject）Inject -> body*（注入下列内容 ↓）

少数派经典主题：

```html
<!--Theme-->
<link
  rel="stylesheet"
  href="file:////storage/emulated/0/Documents/markor/note/markor/themes/sspai/sspai-custom.css"
/>
```

Typora's GitHub 主题：

```html
<!--Theme-->
<link
  rel="stylesheet"
  href="file:////storage/emulated/0/Documents/markor/note/markor/themes/typora/github.css"
/>
```

Typora's Night 主题：

```html
<!--Theme-->
<link
  rel="stylesheet"
  href="file:////storage/emulated/0/Documents/markor/note/markor/themes/typora/night.css"
/>
```

### 格式

#### Markdown

⚙️ _更多 > 设置 >（格式）Markdown_

1. 语法高亮
    1. 语法高亮延时：650
    2. 高亮行末：勾选
    3. 新增行 = 新建段落：不勾选（*默认不勾选，建议不勾选*）

        - “勾选”显示效果（分行排列）：

            ![GitHub last commit](https://img.shields.io/github/last-commit/gsantner/markor?color=blue&logo=github)\
            ![GitHub Release Date - Published_At](https://img.shields.io/github/release-date/gsantner/markor?display_date=published_at&logo=github)\
            ![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/gsantner/markor?logo=github)

        - “不勾选”显示效果（一行排列）

            ![GitHub last commit](https://img.shields.io/github/last-commit/gsantner/markor?color=blue&logo=github)
            ![GitHub Release Date - Published_At](https://img.shields.io/github/release-date/gsantner/markor?display_date=published_at&logo=github)
            ![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/gsantner/markor?logo=github)
2. 查看模式

    1. 启用数学公式渲染：勾选（ _默认不开启_ ）

3. ActionButton
    1. 操作顺序
        1. 特殊按键
        2. 打开链接
        3. Indent
        4. De-indent
        5. 行内代码
        6. 开始新行
        7. 1级标题
        8. 2级标题
        9. 3级标题
        10. 无序列表
        11. 有序列表
        12. 复选列表
        13. 引用
        14. 斜体
        15. 粗体
        16. 删除线
        17. 表格
        18. 水平线
        19. Accordion
        20. 下移行
        21. 上移行
        22. 复制行
        23. 删除行
        24. 日期和时间
        25. 插入片段
        26. 插入链接
        27. 插入图片
        28. Audio
        29. 跳转至底部
        30. 旋转
        31. 打开方式

## 用法

### Markdown

#### ActionButton

ActionButton 长按图标按钮触发的功能

- 行内代码：代码块
- 复选列表：列出文档所有复选
- 斜体：当前行内容斜体
- 粗体：当前行内容加粗
- 删除线：当前行内容添加删除线
- 打开链接：搜索文档
- 特殊按键：切换至文首/文末
- 上移一行：快速定位光标至可视区域
- 下移一行：快速定位光标至可视区域
- 插入链接：在文件管理器中选择一张图片并插入
- 插入图片：开启拍照并插入拍好的照片
- Audio：开启录音（此功能异常）

### 同步

1. https://github.com/gsantner/markor/discussions/1381 - *Filemanager & sync client support (cannot open file from other app) · gsantner/markor · Discussion #1381 · GitHub*

### Format

#### todo.txt

简介：

> Track your tasks and projects in a plain text file, todo.txt.  A todo.txt is software and operating system agnostic; it's searchable, portable, lightweight and easily manipulated.

![GitHub last commit](https://img.shields.io/github/last-commit/todotxt/todo.txt?color=blue&logo=github)
![GitHub Release Date - Published_At](https://img.shields.io/github/release-date/todotxt/todo.txt?display_date=published_at&logo=github)
![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/todotxt/todo.txt?logo=github)
![GitHub Repo stars](https://img.shields.io/github/stars/todotxt/todo.txt?style=social)

官方：

https://github.com/gsantner/markor#format-todotxt - *GitHub - gsantner/markor: Text editor - Notes & ToDo (for Android) - Markdown, todo.txt, plaintext, math, ..*

http://todotxt.org/ - *Todo.txt: Future-proof task tracking in a file you control*

https://github.com/todotxt/todo.txt - *GitHub - todotxt/todo.txt: ‼️ A complete primer on the whys and hows of todo.txt.*

## 更新日志

https://github.com/gsantner/markor/blob/master/CHANGELOG.md - *markor/CHANGELOG.md at master · gsantner/markor · GitHub*
