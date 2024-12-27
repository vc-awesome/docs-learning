# 浏览器扩展

## 简介

> <img src="https://raw.githubusercontent.com/github/explore/8eaa4711f3b6015070483ff1c3b707292304efe4/topics/chrome-extension/chrome-extension.png" alt="package icon" loading="lazy" decoding="async" align="left" width="58" hspace="10" vspace="0" /> Chrome extensions are add-ons for Chromium-based browsers, such as Google Chrome, which enable users to customize the Chrome browsing experience. Built using web technologies like HTML, CSS, and JavaScript, extensions make use of various APIs supported by the browser. Extensions are typically downloaded from online marketplaces, with the Chrome Web Store being the most widely used. Chrome extensions work on most Chromium browsers, not just Google Chrome developed by Google.（译文：Chrome 扩展程序是基于 Chromium 的浏览器（例如 Google Chrome）的附加组件，使用户能够自定义 Chrome 浏览体验。扩展使用 HTML、CSS 和 JavaScript 等 Web 技术构建，并利用浏览器支持的各种 API。扩展程序通常从在线市场下载，其中 Chrome 网上应用店使用最广泛。 Chrome 扩展程序适用于大多数 Chromium 浏览器，而不仅仅是 Google 开发的 Google Chrome。）
> 
> —— <cite>[chrome-extension · GitHub Topics](https://github.com/topics/chrome-extension)</cite>


## 搜索

1. https://www.runningcheese.com/extensions - *浏览器必备，2022 年度最喜欢浏览器扩展 - 奔跑中的奶酪*

    - 支持注册登录

2. https://ldqk.xyz/1775 - *高效上网——Chrome/Edge浏览器优秀扩展插件推荐*

---

1. https://mp.weixin.qq.com/s/74mW44aBySJ9VW1_A7j5mg - *前端请装上这个 Chrome 插件*

2. https://mp.weixin.qq.com/s/KS-fh60zqfR-6GCD5eGFaQ - *Chrome 超强生产力工具 - Omni*


### GitHub Topics

1. https://github.com/topics/chrome-extension - *chrome-extension · GitHub Topics · GitHub*

2. https://github.com/topics/browser-extension - *browser-extension · GitHub Topics · GitHub*


## 安装

### 扩展商店

1. https://chrome.google.com/webstore/ - *Chrome 应用商店*

2. https://addons.mozilla.org/zh-CN/firefox/extensions/ - _扩展 – Firefox 附加组件（zh-CN）_

3. https://microsoftedge.microsoft.com/addons/Microsoft-Edge-Extensions-Home?hl=zh-CN - _Microsoft Edge 加载项_


### 下载 CRX

1. https://www.crxsoso.com/ - *Crx搜搜 - 浏览器扩展商店 Chrome,Edge,Firefox,Opera*

    - 支持注册登录

2. https://www.baiduyun.wiki/zh-cn/crx.html - *如何安装浏览器扩展？ | 油小猴*

3. https://crxdl.com/ - *CrxDL - Chrome浏览器扩展插件CRX下载网*

4. https://www.crx4chrome.com/ - *Crx4Chrome - Download CRX for Chrome Apps & Extensions*


## 推荐使用

1. [OneTab](#onetab)
2. [Bitwarden - 免费密码管理器](#bitwarden)
3. [Extensity](#extensity)
4. [Gooreplacer](#gooreplacer)
5. [crxMouse Chrome™ 手势](#crxmouse)
6. [CopyTabTitleUrl](#copy-tab-title-url)
7. [Wappalyzer](#wappalyzer)
8. [FeHelper(前端助手)](#fehelper)
9. [Tampermonkey](#dhdgffkkebhmkfjojejmpbldmpobfkfo)
10. [uBlock Origin](#ublock-origin)
11. [Google 翻译](#google-translate)
12. [Proxy SwitchyOmega](#proxy-switchyomega)
13. [Clipboard Helper](#clipboard-helper)
14. [Replace Google CDN](#kpampjmfiopfpkkepbllemkibefkiice)
15. [floccus](#fnaicdffflnofjppbagibeoednhnbjhg)


### 使用场景

手机浏览器常用：

1. [Tampermonkey](#tampermonkey)
2. [uBlock Origin](#ublock-origin)
3. [CopyTabTitleUrl](#copy-tab-title-url)
4. [Wappalyzer](#wappalyzer)

在手机上写作：

1. [CopyTabTitleUrl](#copy-tab-title-url)
2. [Copy Image URL](#copy-image-url)
3. [拷贝猫](#copycat)
4. [MarkDownload - Markdown Web Clipper](#markdown)


## 开发扩展

1. 在 [Copy DOM Content | Chrome扩展 - Crx搜搜](https://www.crxsoso.com/webstore/detail/dmdbhcacalljmfmilnhmnhihdfoamdap) 源代码的基础上，开发了自己的第一个浏览器扩展程序。

   参考：

   1. https://www.5axxw.com/questions/content/cce8xc - *如何通过浏览器扩展获取页面主体标签的内容？ - 我爱学习网*

2. https://github.com/zenorocha/codecopy - *zenorocha/codecopy: A browser extension that adds copy to clipboard buttons on every code block*

   ![GitHub last commit](https://img.shields.io/github/last-commit/zenorocha/codecopy?color=blue&logo=github)

   > 环境要求：
   >
   > - macOS: Ventura 13.3.1 (a) - Apple M1
   > - Node: 16.15.0
   > - codecopy: 1.2.0（开发包版本）
   
   1. 下载开发包
   
      ```bash
      git clone https://github.com/zenorocha/codecopy.git codecopy
      ```
   
   2. Install dependencies:
   
      ```bash
      cd codecopy
      ```
   
      ```bash
      npm install
      ```
   
      💡 当使用 npm install 安装依赖包失败时，可使用 yarn install 安装（ yarn 安装前，删除 node_modules 目录）：
   
      ```bash
      yarn install
      ```
   
   3. Compile scripts and styles:
   
      ```bash
      npm start
      ```
   
      💡 当执行 npm start 失败时，可使用 npx mix 编译脚本和样式：
   
      ```bash
      npx mix
      ```


### 如何开发浏览器扩展程序？

开发手册：

1. https://developer.mozilla.org/zh-CN/docs/Mozilla/Add-ons/WebExtensions - *浏览器扩展 - Mozilla | MDN*

源码参考：

1. https://github.com/wadefelix/copylinktabnameandurl - *wadefelix/copylinktabnameandurl: 复制链接/标签名称和地址*

    ![GitHub last commit](https://img.shields.io/github/last-commit/wadefelix/copylinktabnameandurl?color=blue&logo=github)

2. https://github.com/ruanyf/chrome-extension-demo - *GitHub - ruanyf/chrome-extension-demo: how to create a Chrome extension*

    ![GitHub last commit](https://img.shields.io/github/last-commit/ruanyf/chrome-extension-demo?color=blue&logo=github)

### 如何将浏览器扩展程序打包成 crx 文件？

1. 地址栏输入：`chrome://extensions/` ；

2. 点击页面左上角的「打包扩展程序」；

3. 填写「扩展程序根目录」： */Users/xxx/Downloads/crx*

   如何获取扩展程序根目录：

   1. 选择需要打包的扩展程序，在卡片的左下角点击「详情」；
   2. 向下滑动页面，找到「来源」列表选项；
   3. 点击进入目录，复制目录的绝对路径，例： */Users/xxx/Downloads/crx* 。

4. 点击「打包扩展程序」；

5. 进入 */Users/xxx/Downloads/crx* 目录，多出来的 *crx.crx* 文件和 *crx.pem* 文件即为打包成功的文件。

参考：

1. https://www.cnblogs.com/Galesaur-wcy/p/15748799.html - *如何使用Chrome浏览器，打包生成自己的插件（crx格式文件）？ - 冰糖葫芦很乖 - 博客园*

2. https://www.zhihu.com/question/53546074/answer/2229754960 - *谷歌浏览器插件开发完毕打包如何打包成crx文件？ - 知乎*


## 扩展备份

https://mp.weixin.qq.com/s/6XmbRFbd8-iTGXFg0LEVmw - *不看后悔！明明是用好浏览器必备，网上却几乎没有人提...*

备份要点：

1. 设置备份

2. 数据备份


## 扩展列表

### 脚本管理器

1. [篡改猴（Tampermonkey）](https://www.tampermonkey.net/) <i id="dhdgffkkebhmkfjojejmpbldmpobfkfo"></i> - *使用用户脚本自由地改变网络* [Chrome](https://chrome.google.com/webstore/detail/dhdgffkkebhmkfjojejmpbldmpobfkfo), [Firefox](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/), [Opera](https://addons.opera.com/en/extensions/details/tampermonkey-beta/), Mobile Browser (Firefox, Edge, Kiwi)

    ![Chrome Web Store](https://img.shields.io/chrome-web-store/v/dhdgffkkebhmkfjojejmpbldmpobfkfo) ![Chrome Web Store](https://img.shields.io/chrome-web-store/rating/dhdgffkkebhmkfjojejmpbldmpobfkfo?style=social)

2. [暴力猴（Violentmonkey）](https://violentmonkey.github.io/) - *一个开源的用户脚本管理器，支持很多浏览器* [Chrome](https://chrome.google.com/webstore/detail/jinjaccalgkegednnccohejagnlnfdag), [Firefox](https://addons.mozilla.org/firefox/addon/violentmonkey/), [Edge](https://microsoftedge.microsoft.com/addons/detail/eeagobfjdenkkddmbclomhiblgggliao), [GitHub Repo](https://github.com/violentmonkey/violentmonkey)

    ![Chrome Web Store](https://img.shields.io/chrome-web-store/v/jinjaccalgkegednnccohejagnlnfdag) ![Chrome Web Store](https://img.shields.io/chrome-web-store/rating/jinjaccalgkegednnccohejagnlnfdag?style=social) ![GitHub last commit](https://img.shields.io/github/last-commit/violentmonkey/violentmonkey?color=blue&logo=github)


3. [Greasemonkey](http://www.greasespot.net/) - *Greasemonkey is a user script manager for Firefox.* [Chrome](#), [Firefox](https://addons.mozilla.org/firefox/addon/greasemonkey/), [Edge](#), [Opera](#), [Web](#), [GitHub Repo](https://github.com/greasemonkey/greasemonkey/), [Via](#), [Tampermonkey](#), Mobile Browser (Firefox, ~~Edge~~, ~~Kiwi~~)

    ![GitHub last commit](https://img.shields.io/github/last-commit/greasemonkey/greasemonkey?color=blue&logo=github)

4. [ScriptCat](https://docs.scriptcat.org/) - *脚本猫,一个可以执行用户脚本的浏览器扩展,万物皆可脚本化,让你的浏览器可以做更多的事情!* [Chrome](https://chrome.google.com/webstore/detail/scriptcat/ndcooeababalnlpkfedmmbbbgkljhpjf), [Firefox](https://addons.mozilla.org/zh-CN/firefox/addon/scriptcat/), [Edge](https://microsoftedge.microsoft.com/addons/detail/scriptcat/liilgpjgabokdklappibcjfablkpcekh), [GitHub Repo](https://github.com/scriptscat/scriptcat)

    ![Chrome Web Store](https://img.shields.io/chrome-web-store/v/ndcooeababalnlpkfedmmbbbgkljhpjf)
    ![Chrome Web Store](https://img.shields.io/chrome-web-store/rating/ndcooeababalnlpkfedmmbbbgkljhpjf?style=social)
    ![GitHub last commit](https://img.shields.io/github/last-commit/scriptscat/scriptcat?color=blue&logo=github)


### 扩展管理

1. [Extensity](https://sergiokas.github.io/Extensity/) <i id="extensity"></i> - *Quickly enable/disable Google Chrome extensions* [Chrome](https://chrome.google.com/webstore/detail/jjmflmamggggndanpgfnpelongoepncg), [GitHub Repo](https://github.com/sergiokas/Extensity)

    ![Chrome Web Store](https://img.shields.io/chrome-web-store/v/jjmflmamggggndanpgfnpelongoepncg)
    ![Chrome Web Store](https://img.shields.io/chrome-web-store/rating/jjmflmamggggndanpgfnpelongoepncg?style=social)
    ![GitHub last commit](https://img.shields.io/github/last-commit/sergiokas/Extensity?color=blue&logo=github)

2. [SimpleExtManager](http://blandlifedev.blogspot.com) - *这简单的菜单可让您方便的管理瀏覽器的扩展程序。* [Chrome](https://chrome.google.com/webstore/detail/kniehgiejgnnpgojkdhhjbgbllnfkfdk), [Opera](https://addons.opera.com/en/extensions/details/simpleextmanager/)

    ![Chrome Web Store](https://img.shields.io/chrome-web-store/v/kniehgiejgnnpgojkdhhjbgbllnfkfdk)
    ![Chrome Web Store](https://img.shields.io/chrome-web-store/rating/kniehgiejgnnpgojkdhhjbgbllnfkfdk?style=social)


### 标签页管理

1. [OneTab](https://www.one-tab.com/) <i id="onetab"></i> - *节省高达95％的内存，并减轻标签页混乱现象* [Chrome](https://chrome.google.com/webstore/detail/chphlpgkkbolifaimnlloiipkdnihall), [Firefox](https://addons.mozilla.org/en-US/firefox/addon/onetab/), [Edge](https://microsoftedge.microsoft.com/addons/detail/onetab/hoimpamkkoehapgenciaoajfkfkpgfop), [Safari](https://apps.apple.com/gb/app/onetab/id1540160809), Mobile Browser (Firefox)

    ![Chrome Web Store](https://img.shields.io/chrome-web-store/v/chphlpgkkbolifaimnlloiipkdnihall) ![Chrome Web Store](https://img.shields.io/chrome-web-store/rating/chphlpgkkbolifaimnlloiipkdnihall?style=social)

2. [TABLERONE tab manager](https://www.crxsoso.com/webstore/detail/andpjllgocabfacjlelkfpdemfklpfpo) - *打开太多标签会降低您的工作效率。您的计算机变慢，您需要更长时间才能找到正确的选项卡，而且您经常会在此过程中分心。*

3. [ Toast - Save Tabs for Later](https://www.crxsoso.com/webstore/detail/pejhbjnfifdecpkgcjhgmcaphdobmiie) - *您肯定有一些打开或固定的选项卡非常有用，但现在不需要。它们不应该被添加到书签中，尽管它们太重要了，不会丢失在浏览器的阅读列表中。*

4. **Duplicate Tab** - *Duplicates the current tab* [Firefox](https://addons.mozilla.org/en-GB/firefox/addon/duplicate_tab/), [GitHub Repo](https://github.com/Skeletonxf/duplicate-tab)

    ![GitHub last commit](https://img.shields.io/github/last-commit/Skeletonxf/duplicate-tab?color=blue&logo=github)

### 标签页定时刷新

1. [ChromeReloadPlus](https://chrome.google.com/webstore/detail/chromereloadplus/nbbpjdmdkcmpimmhloehkojhbhjlboog) - *Automatically reload a page. Configure interval between page refreshes and see a count-down until the next refresh.* [Chrome](https://chrome.google.com/webstore/detail/nbbpjdmdkcmpimmhloehkojhbhjlboog)


### 书签同步

1. [EverSync - Sync bookmarks, backup favorites](https://chrome.google.com/webstore/detail/eversync-sync-bookmarks-b/iohcojnlgnfbmjfjfkbhahhmppcggdog) - *Synchronize your bookmarks, FVD Speed Dials. Secure online access. Backup, restore your bookmarks. Sync favorites between computers* [Chrome](https://chrome.google.com/webstore/detail/iohcojnlgnfbmjfjfkbhahhmppcggdog)

    ![Chrome Web Store](https://img.shields.io/chrome-web-store/v/iohcojnlgnfbmjfjfkbhahhmppcggdog?style=flat) ![Chrome Web Store](https://img.shields.io/chrome-web-store/rating/iohcojnlgnfbmjfjfkbhahhmppcggdog?style=social)

2. [Cross-browser bookmarks syncing - floccus.org](https://floccus.org/) <i id="fnaicdffflnofjppbagibeoednhnbjhg"></i> - *:cloud: Sync your bookmarks privately across browsers and devices - floccusaddon/floccus* [Chrome](https://chrome.google.com/webstore/detail/floccus/fnaicdffflnofjppbagibeoednhnbjhg), [Firefox](https://addons.mozilla.org/en-US/firefox/addon/floccus/), [Edge](https://microsoftedge.microsoft.com/addons/detail/gjkddcofhiifldbllobcamllmanombji), [GitHub Repo](https://github.com/floccusaddon/floccus), Mobile Browser (~~Firefox~~, Kiwi)

    ![Chrome Web Store](https://img.shields.io/chrome-web-store/v/fnaicdffflnofjppbagibeoednhnbjhg?style=flat) ![Chrome Web Store](https://img.shields.io/chrome-web-store/rating/fnaicdffflnofjppbagibeoednhnbjhg?style=social) ![GitHub last commit](https://img.shields.io/github/last-commit/floccusaddon/floccus?color=blue&logo=github)

3. [xBrowserSync](https://github.com/xbrowsersync) - *xBrowserSync - Browser syncing as it should be: secure, anonymous and free!* [Chrome](https://chrome.google.com/webstore/detail/lcbjdhceifofjlpecfpeimnnphbcjgnc)

    ![Chrome Web Store](https://img.shields.io/chrome-web-store/v/lcbjdhceifofjlpecfpeimnnphbcjgnc?style=flat)
    ![Chrome Web Store](https://img.shields.io/chrome-web-store/rating/lcbjdhceifofjlpecfpeimnnphbcjgnc?style=social)
    ![GitHub last commit](https://img.shields.io/github/last-commit/xbrowsersync/app?color=blue&logo=github)

4. [BookmarkHub](https://github.com/dudor/BookmarkHub) - *BookmarkHub is a browser plug-in that can synchronize your bookmarks between different browsers.* [Chrome](https://chrome.google.com/webstore/detail/fohimdklhhcpcnpmmichieidclgfdmol), [GitHub Repo](https://github.com/dudor/BookmarkHub)

    ![Chrome Web Store](https://img.shields.io/chrome-web-store/v/fohimdklhhcpcnpmmichieidclgfdmol?style=flat)
    ![Chrome Web Store](https://img.shields.io/chrome-web-store/rating/fohimdklhhcpcnpmmichieidclgfdmol?style=social)
    ![GitHub last commit](https://img.shields.io/github/last-commit/dudor/BookmarkHub?color=blue&logo=github)


### 标签页和书签

1. [Sidebery]() - *Vertical tabs tree and bookmarks in sidebar with advanced containers configuration, grouping and many other features.* [Firefox](https://addons.mozilla.org/zh-CN/firefox/addon/sidebery/), [GitHub Repo](https://github.com/mbnuqw/sidebery)

2. [Default Bookmark Folder]() - *Allows you to choose the default bookmark location folder and quickly bookmark pages via a dedicated icon.* [Firefox](https://addons.mozilla.org/zh-CN/firefox/addon/default-bookmark-folder/), [GitHub Repo](https://github.com/teddy-gustiaux/default-bookmark-folder)

### 浏览历史记录

1. [浏览器历史加](https://www.crxsoso.com/webstore/detail/adjifobelhoemalljgnjdlockheiacmc) - *浏览器历史加替换默认浏览器历史记录，并提供额外的控件，以便轻松管理和浏览历史记录。*


### 密码管理

1. [Bitwarden - 免费密码管理器](https://bitwarden.com/download/#downloads-web-browser) <i id="bitwarden"></i> - *Bitwarden 是一个安全且免费的跨平台密码管理器。* [Chrome](https://chrome.google.com/webstore/detail/nngceckbapebfimnlniiiahkandclblb), [Firefox](https://addons.mozilla.org/en-US/firefox/addon/bitwarden-password-manager/), [Edge](https://microsoftedge.microsoft.com/addons/detail/jbkfoedolllekgbhcbcoahefnbanhhlh), [GitHub Repo](https://github.com/bitwarden/clients)

    ![Chrome Web Store](https://img.shields.io/chrome-web-store/v/nngceckbapebfimnlniiiahkandclblb?style=flat) ![Chrome Web Store](https://img.shields.io/chrome-web-store/rating/nngceckbapebfimnlniiiahkandclblb?style=social)


### 广告拦截

1. [AdGuard 广告拦截器](https://adguard.com/zh_cn/adguard-browser-extension/overview.html) - *一款无与伦比的广告拦截扩展，用以对抗各式广告与弹窗。可以拦截 Facebook、YouTube 和其它所有网站的广告。* [Chrome](https://chrome.google.com/webstore/detail/bgnkhhnnamicmpeenaelnjfhikgbkllg), [Firefox](https://www.crxsoso.com/firefox/detail/adguard-adblocker), [Opera](https://addons.opera.com/en/extensions/details/adguard/), [GitHub Repo](https://github.com/AdGuardTeam/AdGuardBrowserExtension)

    ![Chrome Web Store](https://img.shields.io/chrome-web-store/v/bgnkhhnnamicmpeenaelnjfhikgbkllg) ![Chrome Web Store](https://img.shields.io/chrome-web-store/rating/bgnkhhnnamicmpeenaelnjfhikgbkllg?style=social)

2. [uBlock Origin](https://chrome.google.com/webstore/detail/ublock-origin/cjpalhdlnbpafiamejdnhcphjbkeiagm) <i id="ublock-origin"></i> - *一款高效的网络请求过滤工具，占用极低的内存和 CPU。* [Chrome](https://chrome.google.com/webstore/detail/cjpalhdlnbpafiamejdnhcphjbkeiagm), [Firefox](https://addons.mozilla.org/zh-CN/firefox/addon/ublock-origin/), [Opera](https://addons.opera.com/en/extensions/details/ublock/), [GitHub Repo](https://github.com/gorhill/uBlock)

    ![Chrome Web Store](https://img.shields.io/chrome-web-store/v/cjpalhdlnbpafiamejdnhcphjbkeiagm) ![Chrome Web Store](https://img.shields.io/chrome-web-store/rating/cjpalhdlnbpafiamejdnhcphjbkeiagm?style=social)

3. [Adblock Plus - 免费的广告拦截器](http://adblockplus.org/) - *阻止 YouTube™ 广告、弹出窗口并抵御恶意软件！* [Chrome](https://chrome.google.com/webstore/detail/cfhdojbkjhnklbpkdaibdccddilifddb), [GitLab Repo](https://gitlab.com/adblockinc/ext/adblockplus)

    ![Chrome Web Store](https://img.shields.io/chrome-web-store/v/cfhdojbkjhnklbpkdaibdccddilifddb) ![Chrome Web Store](https://img.shields.io/chrome-web-store/rating/cfhdojbkjhnklbpkdaibdccddilifddb?style=social)

---

测试：

1. https://www.tampermonkey.net

2. https://www.runoob.com/php/php-tutorial.html

### 二维码

1. 推荐使用[FeHelper(前端助手)](#fehelper)扩展，这样可以少安装一个扩展程序。

    - 使用方法：「FH应用市场」中安装「二维码/解码」功能，并将其「加入右键」。

2. [草料二维码-快速生码和解码工具](https://chrome.google.com/webstore/detail/%E8%8D%89%E6%96%99%E4%BA%8C%E7%BB%B4%E7%A0%81-%E5%BF%AB%E9%80%9F%E7%94%9F%E7%A0%81%E5%92%8C%E8%A7%A3%E7%A0%81%E5%B7%A5%E5%85%B7/moombeodfomdpjnpocobemoiaemednkg) - *草料二维码官方开发的免费工具插件，提供简单、专业、快捷的二维码生成和解码功能。* [Chrome](https://chrome.google.com/webstore/detail/moombeodfomdpjnpocobemoiaemednkg)

3. [二维码（生成及识别）](https://www.crxsoso.com/webstore/detail/hkojjajclkgeijhcmfjcjkddfjpaimek) - *将当前页面地址、选中的文本或链接等生成二维码，也可以识别网页中的二维码图片（支持识别中文）。*


### 鼠标手势

1. [crxMouse Chrome™ 手势](https://crxmouse.com/) <i id="crxmouse"></i> - *原名:Gestures for Chrome(TM)汉化版.方便,快捷,充分发掘鼠标的所有操作.功能包括:鼠标手势,超级拖曳,滚轮手势,摇杆手势,平滑滚动,标签页列表等.* [Chrome](https://chrome.google.com/webstore/detail/jlgkpaicikihijadgifklkbpdajbkhjo)

2. **Gesturefy** - *Navigate, operate, and browse faster with mouse gestures! A customizable Firefox mouse gesture add-on with a variety of different commands.* [Firefox](https://addons.mozilla.org/zh-CN/firefox/addon/gesturefy/), [GitHub Repo](https://github.com/Robbendebiene/Gesturefy)


### 搜索引擎

1. https://post.smzdm.com/p/az595ge5/ - *Chrome扩展推荐：比地址栏更高效，多个搜索引擎快速切换*
2. https://www.runningcheese.com/context-search - *最好用的右键搜索扩展，现在有替代方案了! - 奔跑中的奶酪*
3. https://www.anlijun.co/1008.html - *「效率工具」右键自定义搜索引擎，Selection Search | 安利君*

---

1. **Selection Search** - *Search for the selected text in search engines* [Chrome](https://chrome.google.com/webstore/detail/gipnlpdeieaidmmeaichnddnmjmcakoe), [Firefox](https://addons.mozilla.org/en-US/firefox/addon/selection-search-ff/), [GitHub Repo](https://github.com/Pitmairen/selection-search)

    ![Chrome Web Store](https://img.shields.io/chrome-web-store/v/gipnlpdeieaidmmeaichnddnmjmcakoe)
    ![Chrome Web Store](https://img.shields.io/chrome-web-store/rating/gipnlpdeieaidmmeaichnddnmjmcakoe?style=social)
    ![GitHub last commit](https://img.shields.io/github/last-commit/Pitmairen/selection-search?color=blue&logo=github)


2. [大术专搜](https://garywill.github.io/) - *以 灵活又顺手 的方式 在(切换) 任意一个 或 (连续)多个 搜索引擎（或任意网站）进行搜索。跨浏览器工具。具有高度自定义性。* [Chrome](https://chrome.google.com/webstore/detail/ojcnjeigmgjaiolalpapfnmmhdmpjhfb), [Firefox](https://addons.mozilla.org/firefox/addon/big-search/), [GitHub Repo](https://github.com/garywill/BigSearch), [Web](http://acsearch.tk)

3. [All in one web searcher](https://www.aakashweb.com) - *多合一网络搜索器是一个简单而强大的扩展，可以通过零点击搜索多个站点。添加站点以进行搜索，自定义顺序并在任何地方快速搜索。* [Chrome](https://chrome.google.com/webstore/detail/enofjgiadilpmldfknojklfjbeaooiap)

4. [SearchBar](https://www.crxsoso.com/webstore/detail/fjefgkhmchopegjeicnblodnidbammed) - *The most efficient way to use your favourite search engines. Search selected text, use customizable hotkeys and much more.*


### 工具箱

1. [Ctool 程序开发常用工具](https://ctool.dev/) - *程序开发常用工具,哈希/加解密/编码转换/时间戳/二维码/拼音/IP查询/代码优化/Unicode/正则等...* [Chrome](https://chrome.google.com/webstore/detail/ipfcebkfhpkjeikaammlkcnalknjahmh), [Firefox](https://addons.mozilla.org/zh-CN/firefox/addon/ctool/) [Web](https://ctool.dev/), [GitHub Repo](https://github.com/baiy/Ctool), [Windows](https://www.microsoft.com/store/apps/9P63J98XZ0M1), [macOS](https://github.com/baiy/Ctool/releases/latest), [Linux](https://github.com/baiy/Ctool/releases/latest)

    ![Chrome Web Store](https://img.shields.io/chrome-web-store/v/ipfcebkfhpkjeikaammlkcnalknjahmh)
    ![Chrome Web Store](https://img.shields.io/chrome-web-store/rating/ipfcebkfhpkjeikaammlkcnalknjahmh?style=social)
    ![GitHub last commit](https://img.shields.io/github/last-commit/baiy/Ctool?color=blue&logo=github)

2. [即时工具](https://www.67tool.com/) - *一款在线高效办公工具，拥有近300款工具包括视频工具、音频工具、图片工具、文档处理、文档转换、办公辅助、设计工具等等* [Chrome](https://chrome.google.com/webstore/detail/fnlomhffjgaiejopfbacfjjpnegclmfb), [Firefox](https://addons.mozilla.org/zh-CN/firefox/addon/即时工具/), [Web](https://www.67tool.com/), [Windows](https://client.67tool.com/#download), [macOS](https://client.67tool.com/#download)


### 统计字数

1. [Jisū](https://www.crxsoso.com/webstore/detail/dgnmohofbgnaacababkedheeannmdohi) <i id="jisu"></i> - *Count words and characters in selected text.* [Chrome](https://chrome.google.com/webstore/detail/dgnmohofbgnaacababkedheeannmdohi), [Edge](https://microsoftedge.microsoft.com/addons/detail/jis%C5%AB/bbclbgdgnkggbgnknlppkkgghfemliap), [GitHub Repo](https://github.com/ikamonster/jisu)

    ![Chrome Web Store](https://img.shields.io/chrome-web-store/v/dgnmohofbgnaacababkedheeannmdohi)
    ![Chrome Web Store](https://img.shields.io/chrome-web-store/rating/dgnmohofbgnaacababkedheeannmdohi?style=social)
    ![GitHub last commit](https://img.shields.io/github/last-commit/ikamonster/jisu?color=blue&logo=github)


### 复制链接

1. [CopyTabTitleUrl](https://www.bugbugnow.net) <i id="copy-tab-title-url"></i> - *Copy the title and URL to the clipboard.* [Chrome](https://chrome.google.com/webstore/detail/lmgbdjfoaihhgdphombpgjpaohjfeapp), [Firefox](https://addons.mozilla.org/zh-CN/firefox/addon/copytabtitleurl/), [GitHub Repo](https://github.com/k08045kk/CopyTabTitleUrl), Mobile Browser (Firefox, Kiwi)

    ![Chrome Web Store](https://img.shields.io/chrome-web-store/v/lmgbdjfoaihhgdphombpgjpaohjfeapp) ![Chrome Web Store](https://img.shields.io/chrome-web-store/rating/lmgbdjfoaihhgdphombpgjpaohjfeapp?style=social) ![GitHub last commit](https://img.shields.io/github/last-commit/k08045kk/CopyTabTitleUrl?color=blue&logo=github)

    <details markdown='1'><summary><i style="color:red">SEE MORE >></i></summary>

    - 设置
    
        - 关闭“Othter”-“Enable multiple selection tabs”（开启此功能会复制多个标签的内容）（默认开启）
        
        - Markdown 格式
        
            ```markdown
            [${title}](${url})
            ```
        
        - 自定义格式“format”
        
            ```markdown
            ${url} - *${title}*
            ```
        
        - “Other”-“Decode the URL”（开启此功能会复制解码的网址）（默认关闭）（类似扩展：https://www.crxsoso.com/webstore/detail/fnbbfiapefhkicjhecnoepbijhanpkjp - *Copy Unicode URLs | Chrome扩展 - Crx搜搜*）
        
            - 开启：`https://www.baidu.com/s?word=复制链接标题`
            - 关闭： `https://www.baidu.com/s?word=%E5%A4%8D%E5%88%B6%E9%93%BE%E6%8E%A5%E6%A0%87%E9%A2%98`
        
        - 复制当前标签的图标网址
        
            1. 勾选“Other”-“Extended mode”；
            2. 勾选“Other”-“Enable format2”；
            3. 勾选“Other”-“Enable extended context menu”；
            4. 在“Format”-“format3:”中输入：`${favIconUrl}`；
            5. 勾选“Context menu”-“All context menus”；
            6. 勾选“Other”-“Edit the context menu title”，然后将“Context menu”-“Menu item”中的`format3`改成`favIconUrl`并勾选（更改后方便识别）；
            7. 打开一个页面 https://developer.mozilla.org/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/tabs/Tab ，鼠标单击右键：*打开上下文菜单 > CopyTabTitleUrl > 单击“favIconUrl”*；
            8. 复制成功。
        
        - 复制图片的 URL（类似扩展：[Copy Image URL](#copy-image-url)）
        
            1. 勾选“Other”-“Extended mode”；
            2. 勾选“Other”-“Enable format2”；
            3. 勾选“Other”-“Enable extended context menu”；
            4. 在“Format”-“format4:”中输入：`${src}`；
            5. 勾选“Context menu”-“All context menus”；
            6. 勾选“Other”-“Edit the context menu title”，然后将“Context menu”-“Menu item”中的`format4`改成`ImageSrc`并勾选（更改后方便识别）；
            7. 打开一个页面 https://docs.github.com/zh/pages/getting-started-with-github-pages/creating-a-custom-404-page-for-your-github-pages-site ，在页面中找到一张图片并在图片上鼠标单击右键：*打开上下文菜单 > CopyTabTitleUrl > 单击“ImageSrc”*；
            8. 复制成功。
        
        - 设置“Context menu”-“Browser action context menu”
        
            | ✅  已勾选 | ❌ 未勾选 |
            | ---- | ---- |
            | - *电脑端浏览器：鼠标右键图标*<br />![browser-extension-copytabtitleurl-01](_images/browser-extension-copytabtitleurl-01.png)<br />*手机端狐猴浏览器：长按图标* 这下面放一张图 | - *电脑端浏览器：鼠标右键图标*<br />![browser-extension-copytabtitleurl-01](_images/browser-extension-copytabtitleurl-02.png)<br />*手机端狐猴浏览器：长按图标* 这下面放一张图 |
        
        - 复制选定的文本或空白文本（※1）
        
            由于上面的操作设置了“Extended mode”，这里直接从第 4 步开始设置：
        
            1. 在“Format”-“format5:”中输入：`${selectedText}`；
        
            2. 勾选“Context menu”-“All context menus”；
        
            3. 勾选“Other”-“Edit the context menu title”，然后将“Context menu”-“Menu item”中的`format5`改成`selectedText`并勾选（更改后方便识别）；
        
            4. 打开一个页面 https://wiki.termux.com/wiki/Package_Management ，在页面中选中一段文本后鼠标单击右键：*打开上下文菜单 > CopyTabTitleUrl > 单击“selectedText”*；
        
            5. 使用上述的操作复制的文本是纯文本格式，如果使用浏览器（Chrome Browser）右键复制的文本内容则是网页格式：
        
                🧪 测试：比如在上一步打开的网页中，找一个表格并选中表格中的链接文本，对比两种右键复制如下：
        
                ```md
                # CopyTabTitle``Url 右键复制的内容
                game-packages
                
                # 浏览器右键复制的内容
                [game-packages](https://github.com/termux/game-packages)
                ```

    </details>

2. [Copy Title and Url as Markdown Style](https://www.crxsoso.com/webstore/detail/fpmbiocnfbjpajgeaicmnjnnokmkehil) - *Copy the title and url of the page as Markdown style*

    - 自定义格式

        ```markdown
        ${url} - *${title}*
        ```

3. [复制链接/标签名称和地址](https://www.crxsoso.com/webstore/detail/noakklbbencpgcahamhocalnepfjeeok) - *在链接上右键菜单中加入命令以纯文本格式同时拷贝该链接的文本和链接地址，也可在标签栏上右键复制该标签页面的标题和链接。极大方便了在即时聊天工具、电子邮件、博客等网络工具中分享互联网链接。*

4. [复制链接到剪贴板 ](https://www.crxsoso.com/webstore/detail/miancenhdlkbmjmhlginhaaepbdnlllc) - *复制 URL 到剪贴板，支持 HTML, Markdown, 纯文本等多种格式。*

    - _**via** https://www.zhihu.com/tardis/landing/m/360/art/342236056 - *效率工具：如何快速复制页面标题和链接？*_

5. [拷贝猫](https://blackglory.me/) <i id="copycat"></i> - *为网页提供前所未有的强大复制功能。* [Chrome](https://chrome.google.com/webstore/detail/jdjbiojkklnaeoanimopafmnmhldejbg), [Firefox](https://addons.mozilla.org/zh-CN/firefox/addon/extension-copycat/), [GitHub Repo](https://github.com/BlackGlory/copycat)

    ![Chrome Web Store](https://img.shields.io/chrome-web-store/v/jdjbiojkklnaeoanimopafmnmhldejbg) ![Chrome Web Store](https://img.shields.io/chrome-web-store/rating/jdjbiojkklnaeoanimopafmnmhldejbg?style=social)
    ![GitHub last commit](https://img.shields.io/github/last-commit/BlackGlory/copycat?color=blue&logo=github)

    -  复制图片为 Data URL


### 复制图片链接

1. [Copy Image URL](https://www.crxsoso.com/webstore/detail/okellkdngnddldceghgglinloadinfgg) <i id="copy-image-url"></i> - *此扩展程序允许您从 Google 图片搜索结果中复制图片源 URL*

    ![Chrome Web Store](https://img.shields.io/chrome-web-store/v/okellkdngnddldceghgglinloadinfgg) ![Chrome Web Store](https://img.shields.io/chrome-web-store/rating/okellkdngnddldceghgglinloadinfgg?style=social)


### 复制代码

1. [CodeCopy](https://github.com/zenorocha/codecopy) - *A browser extension that adds copy to clipboard buttons on every code block*


### 剪贴板

1. [Clipboard Helper](https://www.crxsoso.com/webstore/detail/meljmedplehjlnnaempfdoecookjenph) <i id="clipboard-helper"></i> - *Clipboard helper tool tracks clipboard history + keyboard shortcuts*

2. [Clipboard History Pro: best productivity tool](https://www.crxsoso.com/webstore/detail/ajiejmhbejpdgkkigpddefnjmgcbkenk) - *Clipboard manager extension for your browser: history of copied text, favorite items, instant paste*


### 音视频播放

1. [视频文件播放器](https://webvideoplayer.org/) - *用于播放本地文件的视频播放器。* [Chrome](https://chrome.google.com/webstore/detail/kfcfjmdnmmokdhndbpfcachlkliggggc), [Web](https://webvideoplayer.org/player.html)

2. [MediaPlayer - Video and Audio Player](https://www.crxsoso.com/webstore/detail/mgmhnaapafpejpkhdhijgkljhpcpecpj) - *一个建立在video.js项目之上的强大媒体播放器，支持HSL、速度控制和播放列表。*

3. [Video Speed Controller](https://www.crxsoso.com/webstore/detail/nffaoalbilbmmfgbnbgppjihopabppdk) - _Video Speed Controller Speed up, slow down, advance and rewind HTML5 audio/video with shortcuts_


### Table of Contents

🔎 ▸ `toc`, `outline`

测试：

- [ ] https://sindresorhus.com/velja - *Velja — Sindre Sorhus*

1. **Smart TOC** - *显示任何网站的目录，使阅读和浏览长篇文章、文档和在线书籍更加容易。* [Chrome](https://chrome.google.com/webstore/detail/lifgeihcfpkmmlfjbailfpfhbahhibba), [Firefox](https://addons.mozilla.org/en-US/firefox/addon/smart_toc/), [GitHub Repo](https://github.com/FallenMax/smart-toc)

    ![Chrome Web Store](https://img.shields.io/chrome-web-store/v/lifgeihcfpkmmlfjbailfpfhbahhibba) ![Chrome Web Store](https://img.shields.io/chrome-web-store/rating/lifgeihcfpkmmlfjbailfpfhbahhibba?style=social) ![GitHub last commit](https://img.shields.io/github/last-commit/FallenMax/smart-toc?color=blue&logo=github)

    > 狐猴手机浏览器需要开启“桌面模式”，否则提示“Can not locate article/headings”。

    - 收费功能（Pro 版本，应用内购买升级）

2. **AI TOC** - *Generate a table of contents (TOC) based on heading tags, and even get a summary of each section with the power of AI.* [Chrome](https://chrome.google.com/webstore/detail/ghnagbbpipiicibgeiglmckdnblokcdf)

     ![Chrome Web Store](https://img.shields.io/chrome-web-store/v/ghnagbbpipiicibgeiglmckdnblokcdf) ![Chrome Web Store](https://img.shields.io/chrome-web-store/rating/ghnagbbpipiicibgeiglmckdnblokcdf?style=social)

3. [Better TOC](https://www.crxsoso.com/webstore/detail/mfdeklaldohihacjmckidgphclafeaaa) - *Auto generate toc for readme, article, more, support llm Q&A* [Chrome](https://chromewebstore.google.com/detail/better-toc/mfdeklaldohihacjmckidgphclafeaaa), [Firefox](#), [Edge](#), [Opera](#), [Web](#), [GitHub Repo](#), [Via](#)

    ![Chrome Web Store](https://img.shields.io/chrome-web-store/v/mfdeklaldohihacjmckidgphclafeaaa)
    ![Chrome Web Store](https://img.shields.io/chrome-web-store/rating/mfdeklaldohihacjmckidgphclafeaaa?style=social)

4. [Simple Outliner / 智能网页大纲]() - *Simple Outliner / 自动生成网页大纲、目录，Support Inoreader and Feedly。* [Chrome](https://chromewebstore.google.com/detail/simple-outliner-%E6%99%BA%E8%83%BD%E7%BD%91%E9%A1%B5%E5%A4%A7%E7%BA%B2/ppdjhggfcaenclmimmdigbcglfoklgaf), [Firefox](#), [Edge](#), [Opera](#), [Web](#), [GitHub Repo](https://github.com/lcomplete/smart-toc), [Via](#)

    ![Chrome Web Store](https://img.shields.io/chrome-web-store/v/ppdjhggfcaenclmimmdigbcglfoklgaf)
    ![Chrome Web Store](https://img.shields.io/chrome-web-store/rating/ppdjhggfcaenclmimmdigbcglfoklgaf?style=social)
    ![GitHub last commit](https://img.shields.io/github/last-commit/lcomplete/smart-toc?color=blue&logo=github)


### 翻译

1. [沉浸式翻译](https://immersivetranslate.com/) - *沉浸式翻译是一款浏览器插件，可以智能识别网页主内容区进行双语翻译，插件支持全平台浏览器，PDF文件翻译，EPUB电子书双语翻译、制作、导出，字幕文件翻译等功能。* [Chrome](https://chrome.google.com/webstore/detail/immersive-translate/bpoadfkcbjbfhfodiogcnhhhpibjhbnh), [Firefox](https://addons.mozilla.org/zh-CN/firefox/addon/immersive-translate/), [Edge](https://microsoftedge.microsoft.com/addons/detail/沉浸式翻译-网页翻译插件-pdf翻译-/amkbmndfnliijdhojkpoglbnaaahippg), [Web](https://app.immersivetranslate.com/text/), [GitHub Repo](https://github.com/immersive-translate/immersive-translate), [Tampermonkey](https://download.immersivetranslate.com/immersive-translate.user.js), Mobile Browser (Firefox, Edge, Kiwi)

    ![Chrome Web Store](https://img.shields.io/chrome-web-store/v/bpoadfkcbjbfhfodiogcnhhhpibjhbnh)
    ![Chrome Web Store](https://img.shields.io/chrome-web-store/rating/bpoadfkcbjbfhfodiogcnhhhpibjhbnh?style=social)
    ![GitHub last commit](https://img.shields.io/github/last-commit/immersive-translate/immersive-translate?color=blue&logo=github)

2. [Google 翻译](https://translate.google.com/) <i id="google-translate"></i> - *浏览网页时可轻松查看翻译版本。由Google翻译小组提供。* [Chrome](https://chrome.google.com/webstore/detail/google-translate/aapbdbdomjkkjkaonfhkkikfgjllcleb)

    ![Chrome Web Store](https://img.shields.io/chrome-web-store/v/aapbdbdomjkkjkaonfhkkikfgjllcleb) ![Chrome Web Store](https://img.shields.io/chrome-web-store/rating/aapbdbdomjkkjkaonfhkkikfgjllcleb?style=social)

    <details markdown='1'><summary><i style="color:red">SEE MORE >></i></summary>

    - 百度搜索：*谷歌翻译加速，谷歌翻译扩展无法使用*

    - 参考：

      1. https://blog.csdn.net/m0_67402096/article/details/123323867 - *谷歌浏览器 无法翻译此网页的解决方法*
      2. https://zhuanlan.zhihu.com/p/286815739 - *「技巧」解决「Google 翻译」改版后，访问及翻译 速度很慢很迟钝的问题！ - 知乎*

    - 👏 https://hcfy.app/blog/2022/09/28/ggg - *谷歌翻译不能用的解决方案 | 划词翻译 (hcfy.app)*

        - 修改 hosts 文件（分 3 步操作）
            - [前提：自动化工具（获取可用 IP）](https://hcfy.app/blog/2022/09/28/ggg#自动化工具)
            
            - [第一步：复制可用 IP](https://hcfy.app/blog/2022/09/28/ggg#%E7%AC%AC%E4%B8%80%E6%AD%A5%E5%A4%8D%E5%88%B6%E5%8F%AF%E7%94%A8-ip)
            
            - [第二步：将 IP 写入 hosts 文件中](https://hcfy.app/blog/2022/09/28/ggg#%E7%AC%AC%E4%BA%8C%E6%AD%A5%E5%B0%86-ip-%E5%86%99%E5%85%A5-hosts-%E6%96%87%E4%BB%B6%E4%B8%AD)
            
            - [第三步：测试 IP 是否可用](https://hcfy.app/blog/2022/09/28/ggg#%E7%AC%AC%E4%B8%89%E6%AD%A5%E6%B5%8B%E8%AF%95-ip-%E6%98%AF%E5%90%A6%E5%8F%AF%E7%94%A8)
    
    </details>

3. **TWP - Translate Web Pages** - *使用谷歌或者Yandex实时翻译您的界面。不需要打开新的标签。现在与NoScript Extension一起工作。* [Chrome(.crx)](https://github.com/FilipePS/Traduzir-paginas-web#chrome-edge-and-brave-with-crx-and-auto-update), [Firefox](https://addons.mozilla.org/pt-BR/firefox/addon/traduzir-paginas-web/), [GitHub Repo](https://github.com/FilipePS/Traduzir-paginas-web)

    ![GitHub last commit](https://img.shields.io/github/last-commit/FilipePS/Traduzir-paginas-web?color=blue&logo=github)

4. [~~百度翻译：网页翻译、海淘神器~~](https://fanyi.baidu.com/) - *百度翻译官方出品。支持27种语言的翻译，浏览外文网页时可一键网页翻译、双语对照查看、查询单词结果等。特别针对20+家海淘网站进行过翻译优化，让你的海淘过程更加得心应手。* [Chrome](https://chrome.google.com/webstore/detail/edhchknefojhifoiebpcbkhcjlkkklci)

    <details markdown='1'><summary><i style="color:red">SEE MORE >></i></summary>

    - 各扩展商店均已下架

        - 仍可使用；*如何安装？👉可查看“阿虚同学”这篇微信公众号文章《[谷歌带走了我最爱的全文翻译，连夜找来1个复活方法和6个替代神器！](https://mp.weixin.qq.com/s/6pU3et5V7xUc2_ZlHO186w)》 的第 4.1 节*。
    </details>

5. [划词翻译](https://hcfy.app/) - *一站式划词 / 截图 / 网页全文 / 音视频翻译扩展，支持谷歌、DeepL、百度、腾讯等 9 个国内外主流翻译源，且均可用于网页翻译。能在 PDF 里使用。* [Chrome](https://chrome.google.com/webstore/detail/%E5%88%92%E8%AF%8D%E7%BF%BB%E8%AF%91/ikhdkkncnoglghljlkmcimlnlhkeamad), [GitHub Org](https://github.com/hcfyapp)

    ![Chrome Web Store](https://img.shields.io/chrome-web-store/v/ikhdkkncnoglghljlkmcimlnlhkeamad)
    ![GitHub last commit](https://img.shields.io/github/last-commit/hcfyapp/crx-selection-translate?color=blue&logo=github)
    ![Chrome Web Store](https://img.shields.io/chrome-web-store/rating/ikhdkkncnoglghljlkmcimlnlhkeamad?style=social)

    - FAQ：https://hcfy.app/blog/2022/09/28/ggg - *谷歌翻译不能用的解决方案 | 划词翻译 (hcfy.app)*

6. [沙拉查词-聚合词典划词翻译](https://saladict.crimx.com/) - *Saladict 沙拉查词是一款专业划词翻译扩展，为交叉阅读而生。大量权威词典涵盖中英日韩法德西语，支持复杂的划词操作、网页翻译、生词本与 PDF 浏览。* [Chrome](https://chrome.google.com/webstore/detail/cdonnmffkdaoajfknoeeecmchibpmkmg), [GitHub Repo](https://github.com/crimx/ext-saladict)

    ![Chrome Web Store](https://img.shields.io/chrome-web-store/v/cdonnmffkdaoajfknoeeecmchibpmkmg)
    ![GitHub last commit](https://img.shields.io/github/last-commit/crimx/ext-saladict?color=blue&logo=github)
    ![Chrome Web Store](https://img.shields.io/chrome-web-store/rating/cdonnmffkdaoajfknoeeecmchibpmkmg?style=social)

### 开发者

1. [Wappalyzer](https://www.wappalyzer.com/) <i id="wappalyzer"></i> - *Identify web technologies* [Chrome](https://chrome.google.com/webstore/detail/wappalyzer/gppongmhjkpfnbhagpmjfkannfbllamg), [Edge](https://microsoftedge.microsoft.com/addons/detail/wappalyzer-technology-p/mnbndgmknlpdjdnjfmfcdjoegcckoikn?hl=zh-CN), [Firefox](https://addons.mozilla.org/en-US/firefox/addon/wappalyzer/)

    ![Chrome Web Store](https://img.shields.io/chrome-web-store/v/gppongmhjkpfnbhagpmjfkannfbllamg)
    ![Chrome Web Store](https://img.shields.io/chrome-web-store/rating/gppongmhjkpfnbhagpmjfkannfbllamg?style=social)

2. [FeHelper(前端助手)](https://www.baidufe.com/fehelper) <i id="fehelper"></i> - *JSON自动格式化、手动格式化，支持排序、解码、下载等，更多功能可在配置页按需安装！* [Chrome](https://chrome.google.com/webstore/detail/pkgccpejnmalmdinmhkkfafefagiiiad), [Firefox](https://www.baidufe.com/fehelper/index/index.html?action=install-firefox), [GitHub Repo](https://github.com/zxlie/FeHelper)

    ![Chrome Web Store](https://img.shields.io/chrome-web-store/v/pkgccpejnmalmdinmhkkfafefagiiiad)
    ![Chrome Web Store](https://img.shields.io/chrome-web-store/rating/pkgccpejnmalmdinmhkkfafefagiiiad?style=social)
    ![GitHub last commit](https://img.shields.io/github/last-commit/zxlie/FeHelper?color=blue&logo=github)

    <details markdown='1'><summary><i style="color:red">SEE MORE >></i></summary>

    - 常用功能：

        - JSON美化工具
        - 信息编码转换
        - 时间(戳)转换
        - 代码美化工具
        - 页面取色工具
        - 二维码/解码

    - FAQ：

        在火狐浏览器中遇到扩展中的插件无发下载或更新的问题，可使用下列的解决方式：

        1. 访问插件 [主页](https://www.baidufe.com/fehelper) ；
        2. 打开 「Web 开发者工具」；
        3. 在「网络监视器中」，查看站点所需的网络资源是否请求正常；
        4. 如存在请求失败的资源，在「新建标签页打开」，查看失败的具体原因。

    </details>

3. [EditThisCookie](https://chrome.google.com/webstore/detail/editthiscookie/fngmhnnpilhplaeedifhccceomclgfbg) - *EditThisCookie是一个cookie管理器。您可以添加，删除，编辑，搜索，锁定和屏蔽cookies！* [Chrome](https://chrome.google.com/webstore/detail/fngmhnnpilhplaeedifhccceomclgfbg)

    ![Chrome Web Store](https://img.shields.io/chrome-web-store/v/fngmhnnpilhplaeedifhccceomclgfbg)
    ![Chrome Web Store](https://img.shields.io/chrome-web-store/rating/fngmhnnpilhplaeedifhccceomclgfbg?style=social)
  
4. [时间戳转化](https://www.crxsoso.com/webstore/detail/ahkgjgnlldlkagonpndejcbhipkealgo) - *鼠标右键格式化时间戳*

    ![Chrome Web Store](https://img.shields.io/chrome-web-store/v/ahkgjgnlldlkagonpndejcbhipkealgo)

5. [SingleFile](https://www.crxsoso.com/webstore/detail/mpiodijhokgodhhofbcjdecpffjipkle) - *SingleFile 是一个扩展程序，可帮助您将完整的页面（包含 CSS、图像、字体、框架等）保存为单个 HTML 文件。*

6. **MobiDevTools** - *A mobile devtools for debugging web sites and applications with the console, DOM, network info, sources, and more.* [Firefox](https://addons.mozilla.org/zh-CN/android/addon/mobidevtools/)

7. 页面取色

    1. [TabColor color picker](https://www.crxsoso.com/webstore/detail/kcebljecdacbgcoiajdooincchocggha) - *Extract color codes from opened tabs with TabColor color picker tool*

    2. [颜色选择器 - Geco](https://www.crxsoso.com/webstore/detail/eokjikchkppnkdipbiggnmlkahcdkikp) - *从网页抓取颜色，颜色选择器，颜色历史。与颜色选择器，颜色选择，滴管，colorzilla相比，这个更好。*

8. 查看页面源代码（适用于手机端「狐猴浏览器」，电脑端直接右键操作 > 显示网页源代码）

    1. [View Page Source](https://apps.jeurissen.co/view-page-source) - *Get access to the page source with the click of a button* [Chrome](https://www.crxsoso.com/webstore/detail/lcdkhcclmhdepcmfjmdjehekfdldpbje)

    2. [View link source](https://www.crxsoso.com/webstore/detail/kmpjbdkdnehfenbgchigbbmnahcfeidc) - *Add &quot;View link source&quot; to the context menu.*

#### User Agent
 
1. [User-Agent Switcher](https://www.crxsoso.com/webstore/detail/kchfmpdcejfkipopnolndinkeoipnoia) - *Simplest way to switch between user-agents in your browser!*


#### URL

1. **URL Parser** - *Parse Your URL* [Chrome](https://chrome.google.com/webstore/detail/hdcdndiioaocgliphphofdcaiblbhjem)

2. [JSON formatter, viewer and URL Encoder tool](https://sites.google.com/view/url-encoder-decoder-extension/home) - *Automatic URL Encoder, Decoder tool with JSON Formatter, Validator and Beautifier features* [Chrome](https://chrome.google.com/webstore/detail/infnlhnhibphpaljmnnadaldibggkokb)

3. [Force Underline](http://www.efojs.com/) - *Chrome extension that enforces underline on all hyperlinks* [Chrome](https://chrome.google.com/webstore/detail/force-underline/mailocoigbmikldobfkikagehcoficho), [Firefox](#), [Edge](#), [Opera](#), [Web](#), [GitHub Repo](#), [Via](#), Mobile Browser (Kiwi)

### GitHub

搜索：

1. https://github.com/topics/github-extension - *github-extension · GitHub Topics · GitHub*

2. https://github.com/stefanbuck/awesome-browser-extensions-for-github - *A collection of awesome browser extensions for GitHub.* [Website](https://stefanbuck.com/awesome-browser-extensions-for-github)

    ![GitHub last commit](https://img.shields.io/github/last-commit/stefanbuck/awesome-browser-extensions-for-github?color=blue&logo=github)

扩展程序列表：

1. [Refined GitHub](https://github.com/refined-github/refined-github) - *:octocat: Browser extension that simplifies the GitHub interface and adds useful features* [Chrome](https://chrome.google.com/webstore/detail/hlepfoohegkhhmjieoechaddaejaokhf), [Firefox](https://addons.mozilla.org/zh-CN/firefox/addon/refined-github-/)

    ![Chrome Web Store](https://img.shields.io/chrome-web-store/v/hlepfoohegkhhmjieoechaddaejaokhf)
    ![Chrome Web Store](https://img.shields.io/chrome-web-store/rating/hlepfoohegkhhmjieoechaddaejaokhf?style=social)
    ![GitHub last commit](https://img.shields.io/github/last-commit/refined-github/refined-github?color=blue&logo=github)

2. [OctoLinker](https://github.com/OctoLinker/OctoLinker) - *GitHub - OctoLinker/OctoLinker: OctoLinker — Links together, what belongs together* [Chrome](https://chrome.google.com/webstore/detail/jlmafbaeoofdegohdhinkhilhclaklkp)

3. [GitZip for github](http://gitzip.org/) - _It can make the sub-directories and files of github repository as zip and download it_ [Chrome](https://chrome.google.com/webstore/detail/ffabmkklhbepgcgfonabamgnfafbdlkn)

4. [Octotree - GitHub code tree](https://www.octotree.io/) - _GitHub on steroids_ [Chrome](https://chrome.google.com/webstore/detail/bkhaagjahfmjljalopjnoealnfndnagc)

5. [Gitako - GitHub file tree](https://www.crxsoso.com/webstore/detail/giljefjcheohhamkjphiebfjnlphnokk) - *File tree for GitHub, and more than that.*

6. [Enhanced GitHub](https://varunmalhotra.xyz/enhanced-github/) - *Display repo size, size of each file, download link and option to copy file contents* [Chrome](https://chrome.google.com/webstore/detail/anlikcnbgdeidpacdbdljnabclhahhmd), [Firefox](https://addons.mozilla.org/en-US/firefox/addon/enhanced-github/), [Edge](https://microsoftedge.microsoft.com/addons/detail/enhanced-github/eibibhailjcnbpjmemmcaakcookdleon), [GitHub Repo](https://github.com/softvar/enhanced-github)

    ![Chrome Web Store](https://img.shields.io/chrome-web-store/v/anlikcnbgdeidpacdbdljnabclhahhmd)
    ![GitHub last commit](https://img.shields.io/github/last-commit/softvar/enhanced-github?color=blue&logo=github)

    - 💡 不支持图片、文件夹的大小显示

    - [测试](https://github.com/coco413/SecMind)

7. [File Icons for GitHub and GitLab](https://github.com/homerchen19/github-file-icons) - _A Chrome Extension which gives different filetypes different icons to GitHub, GitLab, gitea and gogs._ [Chrome](https://chrome.google.com/webstore/detail/ficfmibkjjnpogdcfhfokmihanoldbfe)

8. [github-vscode-icons](https://github.com/dderevjanik/github-vscode-icons) - _This extension shows a VS Code icons in Github Repositories_ [Chrome](https://chrome.google.com/webstore/detail/hoccpcefjcgnabbmojbfoflggkecmpgd)

9. [GitHub加速](https://github.com/fhefh2015/Fast-GitHub) - _Github download speeds are generally slow in Asia, and with this plugin the download speeds will be insane!_ [Chrome](https://chrome.google.com/webstore/detail/ffjjnphohkfckeplcjflmgneebafggej)

    - 💡 仅支持下载、克隆源码加速，不支持页面、图片加速

10. https://github.com/conwnet/github1s - *GitHub - conwnet/github1s: One second to read GitHub code with VS Code.* ( _**via** https://zhuanlan.zhihu.com/p/350615234 - *人生第一个扩展——Github1s - 知乎*_ )

    ![GitHub last commit](https://img.shields.io/github/last-commit/conwnet/github1s?color=blue&logo=github)

11. [GitHub File Icons](https://github.com/homerchen19/github-file-icons) - *🌈 🗂 A browser extension which gives different filetypes different icons to GitHub, GitLab, gitea and gogs.* [Chrome](https://chrome.google.com/webstore/detail/kkokonbjllgdmblmbichgkkikhlcnekp)

     ![GitHub last commit](https://img.shields.io/github/last-commit/homerchen19/github-file-icons?color=blue&logo=github)

     🏷️ _安装谷歌扩展程序_ 、 _图标 icon_

     _**via** [简单三步，让GitHub依照不同文档类型显示不同的图标](https://baijiahao.baidu.com/s?id=1590369276833636579)_

12. [Sourcegraph](https://github.com/sourcegraph/sourcegraph) - *GitHub - sourcegraph/sourcegraph: Code Intelligence Platform* [Chrome](https://chrome.google.com/webstore/detail/dgjhfomjieaadpoljlnidmbgkdffpack), [Website](https://sourcegraph.com/)

    ![GitHub last commit](https://img.shields.io/github/last-commit/sourcegraph/sourcegraph?color=blue&logo=github)

### Markdown

1. [Markdown Here](http://markdown-here.com) - *用Markdown写一封漂亮的电子邮件。* [GitHub Repo](https://github.com/adam-p/markdown-here), [Chrome](https://chrome.google.com/webstore/detail/elifhakcjgalahccnjkneoccemfahfoa), [Firefox](https://addons.mozilla.org/en-US/firefox/addon/markdown-here/)

    ![Chrome Web Store](https://img.shields.io/chrome-web-store/v/elifhakcjgalahccnjkneoccemfahfoa)
    ![Chrome Web Store](https://img.shields.io/chrome-web-store/rating/elifhakcjgalahccnjkneoccemfahfoa?style=social)
    ![GitHub last commit](https://img.shields.io/github/last-commit/adam-p/markdown-here?color=blue&logo=github)

2. **MarkDownload - Markdown Web Clipper** - *A Firefox and Google Chrome extension to clip websites and download them into a readable markdown file. - deathau/markdownload* [Chrome](https://chrome.google.com/webstore/detail/markdownload-markdown-web/pcmpcfapbekmbjjkdalcgopdkipoggdi), [Firefox](https://addons.mozilla.org/en-US/firefox/addon/markdownload/), [Edge](https://microsoftedge.microsoft.com/addons/detail/hajanaajapkhaabfcofdjgjnlgkdkknm), [GitHub Repo](https://github.com/deathau/markdownload)

    ![Chrome Web Store](https://img.shields.io/chrome-web-store/v/pcmpcfapbekmbjjkdalcgopdkipoggdi)
    ![Chrome Web Store](https://img.shields.io/chrome-web-store/rating/pcmpcfapbekmbjjkdalcgopdkipoggdi?style=social)
    ![GitHub last commit](https://img.shields.io/github/last-commit/deathau/markdownload?color=blue&logo=github)


### 钱包

1. [MetaMask](https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn) <i id="metamask"></i> - *以太坊浏览器插件* [Edge](https://microsoftedge.microsoft.com/addons/detail/metamask/ejbalbakoplchlghecdalmeeeajnimhm)

2. [TronLink（波宝钱包）](https://chrome.google.com/webstore/detail/tronlink%EF%BC%88%E6%B3%A2%E5%AE%9D%E9%92%B1%E5%8C%85%EF%BC%89/ibnejdfjmmkpcnlpebklmnkoeoihofec) - *The first and most popular TRON wallet. Recommended by TRON Foundation.*


### 下载工具

1. [Chrono下载管理器](https://chrome.google.com/webstore/detail/chrono-download-manager/mciiogijehkdemklbdcbfkefimifhecn) - *最好用的 Chrome 下载管理（支持资源嗅探）*

    ![Chrome Web Store](https://img.shields.io/chrome-web-store/v/mciiogijehkdemklbdcbfkefimifhecn) ![Chrome Web Store](https://img.shields.io/chrome-web-store/rating/mciiogijehkdemklbdcbfkefimifhecn?style=social)
  
2. [视频下载器 - CoCoCut](https://www.crxsoso.com/webstore/detail/gddbgllpilhpnjpkdbopahnpealaklle) - _Chrome专业视频下载器和音乐下载器,可以 在线下载视频、音乐。免费、安全、简单易用。_

    ![Chrome Web Store](https://img.shields.io/chrome-web-store/v/gddbgllpilhpnjpkdbopahnpealaklle) ![Chrome Web Store](https://img.shields.io/chrome-web-store/rating/gddbgllpilhpnjpkdbopahnpealaklle?style=social)

3. 🧪[M3U8 Downloader](https://www.crxsoso.com/webstore/detail/pibnhedpldjakfpnfkabbnifhmokakfb) - *You can download m3u8 live stream video.*


### 网络管理

#### HTTP/URL

1. [Redirector](https://einaregilsson.com/redirector/) - *Automatically redirect content based on user-defined rules.* [Chrome](https://chrome.google.com/webstore/detail/ocgpenflpmgnfapjedencafcfakcekcd), [Firefox](https://addons.mozilla.org/zh-CN/firefox/addon/redirector/), [GitHub Repo](https://github.com/einaregilsson/Redirector), Mobile Browser (Firefox, ~~Edge~~, Kiwi)

    ![Chrome Web Store](https://img.shields.io/chrome-web-store/v/ocgpenflpmgnfapjedencafcfakcekcd) ![Chrome Web Store](https://img.shields.io/chrome-web-store/rating/ocgpenflpmgnfapjedencafcfakcekcd?style=social) ![GitHub last commit](https://img.shields.io/github/last-commit/einaregilsson/Redirector?color=blue&logo=github)

    - 💡 无法重定向地址：`https://chrome.google.com/`

2. [Gooreplacer](https://github.com/jiacai2050/gooreplacer) <i id="gooreplacer"></i> *⚡️⚡️A browser extension to modify HTTP requests :-)* [Chrome](https://chrome.google.com/webstore/detail/jnlkjeecojckkigmchmfoigphmgkgbip), [GitHub Repo](https://github.com/jiacai2050/gooreplacer)

    ![Chrome Web Store](https://img.shields.io/chrome-web-store/v/jnlkjeecojckkigmchmfoigphmgkgbip) ![Chrome Web Store](https://img.shields.io/chrome-web-store/rating/jnlkjeecojckkigmchmfoigphmgkgbip?style=social) ![GitHub last commit](https://img.shields.io/github/last-commit/jiacai2050/gooreplacer?color=blue&logo=github)

    💡 无法重定向地址：`https://chrome.google.com/`

    <details markdown='1'><summary><i style="color:red">SEE MORE >></i></summary>

    设置重定向：
    
    ```md
    匹配模式：^[http|https]+://[\w-]+\.+[\w-]+/([\w-]*)(@[.0-9]*)(/[\w-./?%&=]*)?$

    目标地址：http://localhost:3000/node_modules/$1/$3

    匹配类型：正则表达式
    
    测试链接：https://unpkg.com/docsify-mermaid@2.0.0/dist/docsify-mermaid.js
    
    测试说明：设置好上面的配置；当成功匹配到测试链接时，匹配模式第一个括号内（`([\w-]*)`）的值对应测试链接的 `docsify-mermaid`，第二个括号内（`(@[.0-9]*)`）的值对应 `@2.0.0`，第三个括号内（`(/[\w-./?%&=]*)`）的值对应 `dist/docsify-mermaid.js`，这时链接被重定向目标地址：*http://localhost:3000/node_modules/docsify-mermaid/$dist/docsify-mermaid.js*。
    ```
    
    正则在线测试工具：https://c.runoob.com/front-end/854/
    
    官方帮助文档：https://github.com/jiacai2050/gooreplacer/blob/master/doc/guides.md
    
    </details>

3. [ClearURLs](https://docs.clearurls.xyz/) - *ClearURLs is an add-on based on the new WebExtensions technology and will automatically remove tracking elements from URLs to help protect your privacy.* [Chrome](https://chrome.google.com/webstore/detail/clearurls/lckanjgmijmafbedllaakclkaicjfmnk), [Firefox](https://addons.mozilla.org/firefox/addon/clearurls/), [Edge](https://microsoftedge.microsoft.com/addons/detail/mdkdmaickkfdekbjdoojfalpbkgaddei), [GitHub Repo](https://github.com/ClearURLs/Addon)

    ![Chrome Web Store](https://img.shields.io/chrome-web-store/v/lckanjgmijmafbedllaakclkaicjfmnk)
    ![Chrome Web Store](https://img.shields.io/chrome-web-store/rating/lckanjgmijmafbedllaakclkaicjfmnk?style=social)
    ![GitHub last commit](https://img.shields.io/github/last-commit/ClearURLs/Addon?color=blue&logo=github)

    - 测试链接：<https://getpocket.com/zh/collections?utm_source=www.mozilla.org&utm_campaign=homepage&utm_medium=referral&_gl=1*10ctwb5*_ga*OTIzMjc0MTM1LjE2OTMyNTE1OTg.*_ga_MQ7767QQQW*MTcwNTU1NDA1MS4zLjEuMTcwNTU1NDk3My4wLjAuMA..>

#### CDN

1. [Replace Google CDN](https://www.crxsoso.com/webstore/detail/kpampjmfiopfpkkepbllemkibefkiice) <i id="kpampjmfiopfpkkepbllemkibefkiice"></i> - *♋ 一个 Chrome 插件：将 Google CDN 替换为国内的。* [Chrome](https://chrome.google.com/webstore/detail/replace-google-cdn/kpampjmfiopfpkkepbllemkibefkiice), [Firefox](https://addons.mozilla.org/zh-CN/firefox/addon/google-cdn-replace/), [Firefox-forked](https://addons.mozilla.org/zh-CN/firefox/addon/replace-google-cdn/), [GitHub Repo](https://github.com/justjavac/ReplaceGoogleCDN)

    ![Chrome Web Store](https://img.shields.io/chrome-web-store/v/kpampjmfiopfpkkepbllemkibefkiice) ![Chrome Web Store](https://img.shields.io/chrome-web-store/rating/kpampjmfiopfpkkepbllemkibefkiice?style=social) ![GitHub last commit](https://img.shields.io/github/last-commit/justjavac/ReplaceGoogleCDN?color=blue&logo=github)

2. [LocalCDN](https://www.localcdn.org/) - *将请求重定向到本地资源，保护你免于 CDN（内容分发网络）的跟踪。* [Chrome](https://chrome.google.com/webstore/detail/njdfdhgcmkocbgbhcioffdbicglldapd), [Firefox](https://addons.mozilla.org/en-US/firefox/addon/localcdn-fork-of-decentraleyes/), [Source Code](https://codeberg.org/nobody/LocalCDN)

#### Proxy

1. [Proxy SwitchyOmega](https://github.com/FelisCatus/SwitchyOmega) <i id="proxy-switchyomega"></i> - *轻松快捷地管理和切换多个代理设置。* [Chrome](https://chrome.google.com/webstore/detail/padekgcemlokbadohgkifijomclgjgif), [Firefox](https://addons.mozilla.org/en-US/firefox/addon/switchyomega/), [GitHub Repo](https://github.com/FelisCatus/SwitchyOmega), [更多内容](os/tools/vpn#proxy-switchyomega-🔥)

    ![Chrome Web Store](https://img.shields.io/chrome-web-store/v/padekgcemlokbadohgkifijomclgjgif) ![Chrome Web Store](https://img.shields.io/chrome-web-store/rating/padekgcemlokbadohgkifijomclgjgif?style=social) ![GitHub last commit](https://img.shields.io/github/last-commit/FelisCatus/SwitchyOmega?color=blue&logo=github)

2. [FoxyProxy Standard](http://getfoxyproxy.org/) - *FoxyProxy是一个高级的代理管理工具，它完全替代了Firefox有限的代理功能。它提供比SwitchProxy、ProxyButton、 QuickProxy、xyzproxy、ProxyTex、TorButton等等更多的功能。* [Chrome](https://chrome.google.com/webstore/detail/gcknhkkoolaabfmlnjonogaaifnjlfnp), [Firefox](https://addons.mozilla.org/zh-CN/firefox/addon/foxyproxy-standard/), [GitHub Repo](https://github.com/foxyproxy/browser-extension)

    ![GitHub last commit](https://img.shields.io/github/last-commit/foxyproxy/browser-extension?color=blue&logo=github)
    ![GitHub Repo stars](https://img.shields.io/github/stars/foxyproxy/browser-extension?style=social)

3. [Chrome同步助手](https://www.crxsoso.com/webstore/detail/gbkepcmpjglfonklehdgjnimebhnmlel) <i id="chrome-sync-helper"></i> - *实现Chrome账号同步和扩展自动更新。* [Chrome](https://chrome.google.com/webstore/detail/gbkepcmpjglfonklehdgjnimebhnmlel)

4. [CroxyProxy Free Web Proxy](https://www.croxyproxy.com/) - *CroxyProxy is free and reliable web proxy service. Access your favorite resources such as Youtube, Facebook, Gmail, Google!* [Chrome](https://chrome.google.com/webstore/detail/lmmpgfjnchldhcieiiegcpdmaidkaanb)

5. [ZenMate Free VPN–Best VPN for Chrome](https://chrome.google.com/webstore/detail/zenmate-free-vpn%E2%80%93best-vpn/fdcgdnkidjaadafnichfpabhfomcebme) - *ZenMate Free VPN 是一款用于 Chrome 的免费 vpn，用于隐藏您的 IP 地址* [Chrome](https://chrome.google.com/webstore/detail/fdcgdnkidjaadafnichfpabhfomcebme)

6. [~~skyZIP™ Proxy~~](https://www.skyzip.de/) - *skyZIP browser extension is perfect for anonymous internet access like a service and can do even more and faster.* [Chrome](https://chrome.google.com/webstore/detail/skyzip-proxy/hbgknjagaclofapkgkeapamhmglnbphi)


#### IP/DNS

1. [DNS Checker - SEO and Domain Analysis](https://www.crxsoso.com/webstore/detail/gegfpbhjnhegdnjdkghhnneaocdbbhjp) - *SEO and Domain Analysis Tool by DNS Checker. Provides SEO Report, Meta Redirects and 404s, Client IP, Domain IP & Geo Location, etc*

2. [Country Flags & IP Whois](https://add0n.com/country-flags.html)（[Website 1](https://webextension.org/listing/country-flags.html)） - *显示网站服务器位置的国旗、Whois 和地理信息* [Chrome](https://chrome.google.com/webstore/detail/bffjckjhidlcnenenacdahhpbacpgapo), [Firefox](https://addons.mozilla.org/en-US/firefox/addon/country-flags-ip-whois/), [Edge](https://microsoftedge.microsoft.com/addons/detail/country-flags-ip-whois/hmkmedgmocnmelekbdpogdpednpfjdne), [Opera](https://addons.opera.com/en/extensions/details/country-flags-ip-whois/), [GitHub Repo](https://github.com/andy-portmen/country-flags)

    ![Chrome Web Store](https://img.shields.io/chrome-web-store/v/bffjckjhidlcnenenacdahhpbacpgapo)
    ![Chrome Web Store](https://img.shields.io/chrome-web-store/rating/bffjckjhidlcnenenacdahhpbacpgapo?style=social)
    ![GitHub last commit](https://img.shields.io/github/last-commit/andy-portmen/country-flags?color=blue&logo=github)

3. [Flagfox](https://flagfox.wordpress.com/) - *显示描述当前服务器位置的国旗。* [Firefox](https://addons.mozilla.org/zh-CN/firefox/addon/flagfox/)

### SEO

1. [SEO META 1 COPY](https://macha795.com/addon-seo-meta-1-copy/) - *This is an extension that allows you to easily check SEO-related meta information and copy it with one click.* [Chrome](https://chrome.google.com/webstore/detail/eblbmdomppeajmpblgeppodbkfnonppc), [Firefox](https://addons.mozilla.org/zh-CN/firefox/addon/seo-meta-1-copy/) 👉 *未开启 Proxy 时，可搭配 [Chrome同步助手](#chrome-sync-helper) 使用*

2. [Detailed SEO Extension](https://detailed.com/extension/) - *Get SEO insights at the click of a button to any website you're currently on. Built by full-time SEO's for daily analysis.* [Chrome](https://chrome.google.com/webstore/detail/pfjdepjjfjjahkjfpkcgfmfhmnakjfba), [Firefox](https://www.crxsoso.com/firefox/detail/detailed-seo-extension)

3. [Blue Button | the webpage X-ray](https://www.crxsoso.com/webstore/detail/ahbcoeleapdfhmlnjglbiaddohfncace) - *See title tags & meta description, scripts, stylesheets, images & fonts* [Chrome](https://chrome.google.com/webstore/detail/ahbcoeleapdfhmlnjglbiaddohfncace)

4. [SEOquake](https://www.seoquake.com/) - *SEOquake is a free plugin that provides you with key SEO metrics, along with other useful tools such as SEO Audit and many others* [Chrome](https://chrome.google.com/webstore/detail/akdgnmcogleenhbclghghlkkdndkjdjc), [Firefox](https://www.crxsoso.com/firefox/detail/seoquake-seo-extension)


### 主题

1. [Dark Reader](https://darkreader.org/) - *Enable dark mode (night mode) on all websites* [Chrome](https://chrome.google.com/webstore/detail/dark-reader/eimadpbcbfnmbkopoojfekhnkhdbieeh/), [Firefox](https://addons.mozilla.org/firefox/addon/darkreader/), [Edge](https://microsoftedge.microsoft.com/addons/detail/dark-reader/ifoakfbpdcdoeenechcleahebpibofpc/), [GitHub Repo](https://github.com/darkreader/darkreader), Mobile Browser (Firefox, Edge, Kiwi)

    ![Chrome Web Store](https://img.shields.io/chrome-web-store/v/eimadpbcbfnmbkopoojfekhnkhdbieeh)
    ![Chrome Web Store](https://img.shields.io/chrome-web-store/rating/eimadpbcbfnmbkopoojfekhnkhdbieeh?style=social)
    ![GitHub last commit](https://img.shields.io/github/last-commit/darkreader/darkreader?color=blue&logo=github)


2. [Stylish](https://userstyles.org/) - *Stylish is the #1 choice for free website themes that lets you customize any website. Choose your website skins today from our gallery and get Styling!* [Chrome](https://chromewebstore.google.com/detail/stylish-custom-themes-for/fjnbnpbmkenffdnngjfgmeleoegfcffe), [Firefox](https://addons.mozilla.org/zh-CN/firefox/addon/stylish/), [Edge](https://microsoftedge.microsoft.com/addons/detail/stylish-custom-themes-f/pibpbbbcgeakmkmhgnllkkjdgpoabdge?hl=en-GB), [Opera](#), [Web](#), [GitHub Repo](#), [Via](#), [Tampermonkey](#), Mobile Browser (~~Firefox~~, ~~Edge~~, Kiwi)

    ![Chrome Web Store](https://img.shields.io/chrome-web-store/v/fjnbnpbmkenffdnngjfgmeleoegfcffe)
    ![Chrome Web Store](https://img.shields.io/chrome-web-store/rating/fjnbnpbmkenffdnngjfgmeleoegfcffe?style=social)


### 其他

1. [Hack-Tools](https://chrome.google.com/webstore/detail/hack-tools/cmbndhnoonmghfofefkcccljbkdpamhi) - *The all in one Red team extension for web pentester* [Chrome](https://chrome.google.com/webstore/detail/cmbndhnoonmghfofefkcccljbkdpamhi)

2. [Chrome版Todoist](https://chrome.google.com/webstore/detail/todoist-for-chrome/jldhpllghnbhlbpcmnajkpdmadaolakh) - *使用Chrome版Todoist管理邮件* [Chrome](https://chrome.google.com/webstore/detail/jldhpllghnbhlbpcmnajkpdmadaolakh)

3. [DuckDuckGo Privacy Essentials](https://chrome.google.com/webstore/detail/duckduckgo-privacy-essent/bkdgflcldnnnapblkhphbgpggdiikppg) - *为浏览器提供简单无缝的隐私保护。* [Chrome](https://chrome.google.com/webstore/detail/bkdgflcldnnnapblkhphbgpggdiikppg)

4. [MultiLogin](https://www.crxsoso.com/webstore/detail/ijfgglilaeakmoilplpcjcgjaoleopfi) - *Using websites with multiple accounts at the same time is made easy. Create an independent tab with a click of a button.*

5. **为什么你们就是不能加个空格呢？** - *自动在网页中所有的中文字和半形的英文、数字、符号之间插入空白。（摊手）没办法，我大处女座都有强迫症。* [Chrome](https://chrome.google.com/webstore/detail/paphcfdffjnbcgkokihcdjliihicmbpd), [Firefox](https://github.com/vinta/pangu.js/blob/master/browser_extensions/firefox/paranoid-auto-spacing.user.js), [GitHub Repo](https://github.com/vinta/pangu.js), [Tampermonkey](https://cdn.jsdelivr.net/gh/vinta/pangu.js@4.0.7/browser_extensions/firefox/paranoid-auto-spacing.user.js), [jsDelivr](https://cdn.jsdelivr.net/gh/vinta/pangu.js/)

    ![Chrome Web Store](https://img.shields.io/chrome-web-store/v/paphcfdffjnbcgkokihcdjliihicmbpd)
    ![Chrome Web Store](https://img.shields.io/chrome-web-store/rating/paphcfdffjnbcgkokihcdjliihicmbpd?style=social)
    ![GitHub last commit](https://img.shields.io/github/last-commit/vinta/pangu.js?color=blue&logo=github)


## 备注

*注：本文中带有格式 `${url} - *${title}*` 的内容，**title** 部分是从网页 **description** 中提取。*

✅*表示使用中*

🧪*表示待实践*
