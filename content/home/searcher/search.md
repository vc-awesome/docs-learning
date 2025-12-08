# 搜索技巧

![illustration](https://www.runoob.com/wp-content/uploads/2023/03/search-engine-logo.png)

<small>*插图来源于：[盘点全球搜索引擎及其使用技巧 | 菜鸟教程](https://www.runoob.com/w3cnote/search-engines-usage-skills.html)*</small>

## 搜索引擎

1. [搜索引擎](os/tools/browser/README.md#搜索引擎)

    1. 寻找更多搜索引擎：https://addons.mozilla.org/zh-CN/firefox/extensions/category/search-tools/ - *搜索工具 中的扩展 – Firefox 附加组件（zh-CN）*

2. [浏览器扩展](os/tools/browser/extensions/README.md#搜索引擎)

3. [自建 Web search 工具](os/tools/custom/search.md)

4. https://www.chongbuluo.com/ - *虫部落 - 让搜索更简单*

### 在浏览器中设置搜索引擎

- Mozilla Firefox

    浏览器地址栏输入：`about:preferences#search`

    - https://support.mozilla.org/zh-CN/products/firefox#search - *Firefox 帮助*

        - https://support.mozilla.org/zh-CN/kb/add-or-remove-search-engine-firefox - *在 Firefox 中添加、删除搜索引擎 | Firefox 帮助*

        - <https://support.mozilla.org/zh-CN/kb/在%20Firefox%20for%20Android%20中管理我的默认搜索引擎> - *在 Firefox for Android 中管理我的默认搜索引擎 | Firefox for Android 帮助*

- Opera

    浏览器地址栏输入：`opera://settings/searchEngines`

### 搜索引擎插件

https://mycroftproject.com/ - *Mycroft Project: Search Engine Plugins - Firefox IE Chrome*

_注：其中 %s 是关键字的占位符。_

#### DuckDuckGo

1. DuckDuckGo 搜索 🚫

    ```url
    https://duckduckgo.com/?q=%s
    ```

    https://duckduckgo.com/?q=

    ```url
    https://duckduckgo.com/?q=%s&ia=chat&duckai=1
    ```
    https://duckduckgo.com/?q=&ia=chat&duckai=1

#### Ecosia

1. Ecosia 搜索 🚫

    ```url
    https://www.ecosia.org/search?q=%s
    ```

    https://www.ecosia.org/search?q=

    ```url
    https://www.ecosia.org/chat?q=%s
    ```

    https://www.ecosia.org/chat?q=

#### GitHub

1. GitHub 关键词搜索

    ```url
    https://github.com/search?q=%s
    ```

    https://github.com/search?q=

#### Microsoft Bing

1. Microsoft Bing 搜索

    ```url
    https://cn.bing.com/search?q=%s
    ```

    https://cn.bing.com/search?q=

#### Stack Overflow

1. Stack Overflow 搜索

    ```url
    https://stackoverflow.com/search?q=%s
    ```

    https://stackoverflow.com/search?q=

#### 百度

1. 百度关键词搜索

    ```url
    https://www.baidu.com/s?word=%s
    ```

    https://www.baidu.com/s?word=

    ```url
    https://chat.baidu.com/search?word=%s
    ```

    https://chat.baidu.com/search?word=

2. 百度百科关键词搜索

    ```url
    https://baike.baidu.com/item/%s
    ```

    https://baike.baidu.com/item/

#### 知乎

1. 知乎话题搜索

    ```url
    https://www.zhihu.com/search?type=content&q=%s
    ```

    https://www.zhihu.com/search?q=

### 使用技巧

下面列出了 11 种用法：

1. __双引号 `""`__

    双引号 "" 可以让搜索的关键词精准匹配，而不会对我们输入的关键字进行切分。例如，我们搜索  "`python range 用法`"，通过结果可以看出使用双引号和不使用双引号结果是不一样的。

2. __排除符号 `-`__

    如果我们想排除某些结果，可以在搜索词前面加上减号 - 符号。例如，我们搜索 "`python -菜鸟教程`" 将返回与 "python" 有关的结果，但不包括任何与 "菜鸟教程" 有关的结果。

3. __通配符 `*`__

    使用通配符 * 可以帮助您找到不完整或变形的单词。例如，我们搜索 "`python * 手册`" 将返回所有以 "python" 和 "手册" 为关键词的结果。

4. __竖线符号 `|`__

    使用竖线符号 | 可以在同一搜索中搜索多个选项。例如，我们搜索 "`python | java`"，可以看到结果会把两个官网展示出来。

5. __搜索特定网站 `site:`__

    如果您只想在特定网站上搜索，请在搜索词前面加上 site: 和网站的 URL。例如，我们搜索 "`site:runoob.com java`" 将返回所有在菜鸟教程上与 "java" 有关的结果。

6. __搜索相关网站 `related:`__

    使用 related: 可以帮助您找到与特定网站相关的其他网站。例如，我们搜索 "`related:runoob.com`" 将返回所有与菜鸟教程相关的网站。

7. __使用括号 `()`__

    使用括号可以帮助您更好地组织搜索。例如，我们搜索 "`(python OR java) site:runoob.com`" 将返回所有在 RUNOOB 上与 "python" 或 "java" 有关的结果。

8. __搜索范围 `..`__

    使用两个点 .. 可以搜索一个范围。例如，我们搜索 "`最佳科幻电影 2000..2010`" 将返回在 2000 年到 2010 年之间发行的所有科幻电影的结果。

9. __定义符号 `define:`__

    使用 "define:" 可以快速获取某个词的定义。例如，搜索 "`define:人工智能`" 将返回人工智能的定义。

10. __搜索缩写 `acronym:`__

    使用 "acronym:" 可以搜索缩写的定义。例如，搜索 "`acronym:AI`" 将返回人工智能的相关定义。

11. __时间范围 `daterange:`__

    使用 "daterange:" 可以搜索某个特定的时间范围内的内容。例如，搜索 "`马拉松比赛 daterange:2011-01-01..2022-01-01`" 将返回 2011 年到 2022 年之间的马拉松比赛相关的结果。

参考：

1. https://www.runoob.com/w3cnote/search-engines-usage-skills.html - *盘点全球搜索引擎及其使用技巧 | 菜鸟教程*

## 搜索工具

### ChatGPT

简介：

> ChatGPT helps you get answers, find inspiration and be more productive. It is free to use and easy to try. Just ask and ChatGPT can help with writing, learning, brainstorming and more.

官方：

1. https://openai.com/chatgpt/ - *ChatGPT | OpenAI*
2. https://chatgpt.com/ - *ChatGPT*

### DuckDuckGo

#### !Bangs

https://duckduckgo.com/bangs - *DuckDuckGo !Bangs*\
\> _via https://github.com/einaregilsson/Redirector - *GitHub - einaregilsson/Redirector: Browser extension (Firefox, Chrome, Opera, Edge) to redirect urls based on regex patterns, like a client side mod_rewrite.*_

#### Lite

https://lite.duckduckgo.com/lite - *DuckDuckGo*

### Microsoft Bing

简介：

> 使用 Microsoft 必应进行搜索，并利用 AI 的强大功能查找信息、浏览网页、图像、视频、地图等。为永远充满好奇心的人提供的智能搜索引擎。

官方：

https://cn.bing.com/ - *Search - Microsoft Bing*

### Sourcegraph

简介：

> Sourcegraph’s code AI platform makes it easy for devs to write, fix, and maintain code with Cody, the AI coding assistant, and Code Search.

![GitHub last commit](https://img.shields.io/github/last-commit/sourcegraph/sourcegraph?logo=github&color=blue)
![GitHub Release Date - Published_At](https://img.shields.io/github/release-date/sourcegraph/sourcegraph?display_date=published_at&logo=github)
![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/sourcegraph/sourcegraph?logo=github)
![GitHub Repo stars](https://img.shields.io/github/stars/sourcegraph/sourcegraph?style=social)

官方：

1. https://sourcegraph.com/ - *Sourcegraph | Code AI platform*
2. https://docs.sourcegraph.com/ - *Sourcegraph - Sourcegraph docs*
3. https://github.com/sourcegraph/sourcegraph - *GitHub - sourcegraph/sourcegraph: Code AI platform with Code Search & Cody*

安装：

https://sourcegraph.com/docs/integration/browser_extension - *Browser Extensions - Sourcegraph docs*

- https://www.crxsoso.com/webstore/detail/dgjhfomjieaadpoljlnidmbgkdffpack - *Sourcegraph | Chrome扩展 - Crx搜搜*

https://sourcegraph.com/docs/integration/browser_extension/how-tos/browser_search_engine - *Browser search engine shortcuts - Sourcegraph docs*

用法：

https://sourcegraph.com/search - *Sourcegraph*

示例：

1. https://sourcegraph.com/search?origin=source&q=repo%3A%5Egithub.com%2Fwangdoc%2Fbash-tutorial%24+source&patternType=literal - *repo:^github.com/wangdoc… - Sourcegraph*
2. <https://sourcegraph.com/search?q=context:global+repo:^github\.com/TonyJiangWJ/Ant-Forest$+file:has.content(当前在限制运行时间范围，停止运行)&patternType=standard&sm=1&groupBy=path> - *context:global repo:^git… - Sourcegraph*

#### Code Search

https://sourcegraph.com/search - *Search Public Code*

https://sourcegraph.com/code-search - *Code Search | Grok your entire codebase with Sourcegraph*

### Wikipedia

简介：

> Wikipedia is a free online encyclopedia, created and edited by volunteers around the world and hosted by the Wikimedia Foundation.
>
> <cite>—— https://www.wikipedia.org/ - *Wikipedia*</cite>

官方：

https://www.wikipedia.org/ - *Wikipedia*

https://en.wikipedia.org/wiki/Main_Page - *Wikipedia, the free encyclopedia*

https://en.wikipedia.org/wiki/Wikipedia - *Wikipedia - Wikipedia*
