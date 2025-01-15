# 功能列表

![illustration](https://ts1.cn.mm.bing.net/th/id/R-C.b28b87dbc8812622736aac73cf37539c?rik=BIGaw6uE0D9qXA&riu=http%3a%2f%2fwww.zaosin.com%2fueditor%2fphp%2fupload%2fimage%2f20200213%2f1581559968819970.jpg&ehk=Ll4hVfVB6CMopeYY%2fgk8may7wNMNHibyK9PJ02KzwmE%3d&risl=&pid=ImgRaw&r=0)

<small>*插图来源于：[溯源系统的各项功能介绍](http://www.zaosin.com/info/3946.html)*</small>

## 服务端

### 局域网搭建文件下载和上传功能服务器

```nginx
# PhpStudy 下配置文件 192.168.31.105_8083.conf
server {
        listen        8083;
        server_name  192.168.31.105;
        charset utf-8;
        root   "E:/vc_service/download";
        
        # 添加以下配置--start
        location / {
            autoindex on;
            autoindex_exact_size off;
            autoindex_localtime on;
        }
        # 添加配置--end
        
        location ~ \.php(.*)$ {
            fastcgi_pass   127.0.0.1:9012;
            fastcgi_index  index.php;
            fastcgi_split_path_info  ^((?U).+\.php)(/?.+)$;
            fastcgi_param  SCRIPT_FILENAME  $document_root$fastcgi_script_name;
            fastcgi_param  PATH_INFO  $fastcgi_path_info;
            fastcgi_param  PATH_TRANSLATED  $document_root$fastcgi_path_info;
            include        fastcgi_params;
        }
}
```

实例：

1. http://www.zisync.com/ - *Index of /*

参考：

1. https://blog.csdn.net/weixin_42039699/article/details/118356050 - *文件下载和上传功能服务器搭建配置* 「**Tags**: *nginx、✔miniserve、nodejs*」

2. https://www.jianshu.com/p/806a7def3982 - *Nginx 搭建文件服务器*

3. https://www.lmlphp.com/user/51901/article/item/564363/ - *用nginx搭建简单的文件下载服务器的方法*

4. https://blog.csdn.net/zljszn/article/details/121796235 - *利用nginx搭建一个文件下载服务器*

### 内网穿透

工具：

1. https://github.com/ehang-io/nps - *一款轻量级、高性能、功能强大的内网穿透代理服务器。支持tcp、udp、socks5、http等几乎所有流量转发，可用来访问内网网站、本地支付接口调试、ssh访问、远程桌面，内网dns解析、内网socks5代理等等……，并带有功能强大的web管理端。a lightweight, high-performance, powerful intranet penetration proxy server, with a powerful web management terminal.* [via](https://www.tenlonstudio.com/17213.html/comment-page-1)

   ![GitHub last commit](https://img.shields.io/github/last-commit/ehang-io/nps?color=blue&logo=github)

2. https://github.com/fatedier/frp - *A fast reverse proxy to help you expose a local server behind a NAT or firewall to the internet.*

   ![GitHub last commit](https://img.shields.io/github/last-commit/fatedier/frp?color=blue&logo=github)

   https://sspai.com/post/73283 - *简单几步实现内网穿透 - 少数派*

参考：

1. https://blog.csdn.net/qq_37429313/article/details/113386866 - *内网穿透教程__WILLPOWER_的博客-CSDN博客_路由器内网穿透*

2. <https://baike.baidu.com/item/内网穿透/8597835> - *内网穿透_百度百科*

3. https://blog.csdn.net/weixin_42063820/article/details/124563983 - *实现内网穿透_scanner小霸王的博客-CSDN博客_内网透传*

4. https://blog.csdn.net/qq_40165417/article/details/103759804 - *内网穿透--五分钟完成搭建(从零开始)_本可奈何的博客-CSDN博客*

5. https://service.oray.com/question/3579.htmlwebdav - *搭建私有云盘（NAS+花生壳内网穿透）-贝锐官网*

6. https://www.jianshu.com/p/bbc966c05009 - *3分钟用PC搭建自己的私人云盘 + 内网穿透 - 简书*

7. https://blog.csdn.net/qq_41676577/article/details/112856663 - *树莓派云盘内网穿透及扩容_树莓派爱好者基地的博客-CSDN博客*

8. https://blog.csdn.net/lidashent/article/details/115695503 - *使用ipv6内网穿透，实现私有云盘搭建，实现远程控制等功能_lidashent的博客-CSDN博客_ipv6访问内网设备*

9. https://freefrp.net/ - *Free FRP 免费 FRP 内网穿透*

### 防盗链

![](https://mmbiz.qpic.cn/mmbiz_png/pUm6Hxkd434wqEQPXicYgeicvxMJicFdSXPyHvXhibIs9tRcA4Mr8xT5wnMQJT1hlUgic2FBJ9BZuzofyjszkrUQMTg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

### 负载均衡

https://mp.weixin.qq.com/s/FgRXYeq7gFcm4XTXU5lSHA - *高性能负载均衡架构如何 实现，这些知识点大多数人不知道！*

## 功能

### 验证

#### 短信验证

参考：

1. https://blog.csdn.net/s371795639/article/details/53381274 - *PHP 短信验证功能_php 短信验证码账号在哪个文件夹下 - CSDN 博客*

2. http://www.jb51.net/article/84166.htm - *php 短信接口代码_php 技巧_脚本之家*

#### 图形验证

暂无

#### 谷歌验证器

https://zhuanlan.zhihu.com/p/137451265 - *php实现google验证器*

https://www.jianshu.com/p/e0cf4dd70873 - *谷歌验证器如何安装使用*

#### 谷歌图形验证

https://developers.google.com/recaptcha

### 登录

https://uniapp.dcloud.net.cn/api/plugins/login.html - *uni.login(OBJECT) | uni-app官网*

https://mp.weixin.qq.com/s/VVyVQJM_qmziX0PX_CytMA - *【Redis应用】基于Redis实现短信登录*

https://mp.weixin.qq.com/s/0_ws5p8isjzzVYbNCvPVIg - *token是什么? 无感刷新token技术让项目安全性与体验性完美平衡*

https://mp.weixin.qq.com/s/Y5MWj66Ujc3Jj7UKoa7VNw - *揭秘Cookie、Session、JWT之间的关系*

#### 手机号码

暂无

#### 微信授权

暂无

#### 账号密码

暂无

#### 扫码登录

暂无

### 生成二维码

参考：

1. https://www.thinkphp.cn/topic/51726.html - *Thinkphp3.2 结合 phpqrcode 生成二维码（含 Logo 的二维码），附案例 - ThinkPHP 框架*

2. https://blog.csdn.net/sinat_35861727/article/details/73862991 - *使用 phpqrcode 生成二维码 - CSDN 博客*

### 无限级分类

参考：

1. https://www.php.cn/faq/353267.html - *php 递归实现无限级分类树 - php 教程 - PHP 中文网*

2. https://www.jianshu.com/p/ff07b46666c7 - *无限极分类原理与实现 - 简书*

### 多语言

程序切换语言含国旗可参考

1. https://igoutu.cn - *免费的图标、剪贴画插图、照片和音乐*

### 进度条

1. 页面进度条
2. ajax 进度条

### 背景图

```diff
<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="content-type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title></title>
  </head>
  <body>
+    <img
+      src="https://lug.ustc.edu.cn/static/USTC_logo.svg"
+      style="
+        position: fixed;
+        bottom: -320px;
+        left: -200px;
+        opacity: 0.1;
+        z-index: -100;
+      "
+    />
  </body>
</html>
```

参考：

1. https://lug.ustc.edu.cn/ - *LUG @ USTC - LUG @ USTC*

#### 使用 CSS 渐变替换共用背景图

暂无

### 切换主题

方式一：

```css
@media (prefers-color-scheme: light) {
  :root{--变量1: 色值1;--变量2: 色值2; ……}
}
@media (prefers-color-scheme: dark) {
  :root{--变量1: 色值3; --变量2: 色值4; ……}
}
```

方式二：

```javascript
/**
 * 加载 js 或 css
 * @param {*} filename
 * @param {*} filetype
 */
function loadjscssfile(filename, filetype) {
  if (filetype == 'js') {
    // if filename is a external JavaScript file
    var fileref = document.createElement('script');
    fileref.setAttribute('type', 'text/javascript');
    fileref.setAttribute('src', filename);
  } else if (filetype == 'css') {
    // if filename is an external CSS file
    var fileref = document.createElement('link');
    fileref.setAttribute('rel', 'stylesheet');
    fileref.setAttribute('type', 'text/css');
    fileref.setAttribute('href', filename);
  }
  if (typeof fileref != 'undefined') {
    document.getElementsByTagName('head')[0].appendChild(fileref);
  }
}
/* 切换主题 */
const mediaQueryListDark = window.matchMedia('(prefers-color-scheme: dark)');
if (mediaQueryListDark.matches) {
  // 系统当前是暗色(dark)主题
  loadjscssfile('https://fastly.jsdelivr.net/npm/docsify/lib/themes/dark.css', 'css');
}

const mediaQueryListLight = window.matchMedia('(prefers-color-scheme: light)');
if (mediaQueryListLight.matches) {
  // 系统当前是亮色(light)主题
  loadjscssfile('https://fastly.jsdelivr.net/npm/docsify/lib/themes/vue.css', 'css');
}
```

参考：

1. https://sanonz.github.io/2020/to-build-dark-and-light-theme-with-web/ - *在 WEB 端实现亮/暗主题跟随系统功能 | Sanonz*
2. https://segmentfault.com/a/1190000041985635 - *关于前端主题切换的思考和现代前端样式的解决方案落地 - 个人文章 - SegmentFault 思否*
3. https://zhuanlan.zhihu.com/p/460111867 - *WEB前端跟随系统亮暗主题 - 知乎*
4. https://zhuanlan.zhihu.com/p/143279853 - *Web界面深色模式和主题化开发 - 知乎*

### 深色模式

暂无

### 点击按钮横向滚动

<a href="demo/swiper.html">Demo</a>

参考：

1. https://blog.csdn.net/glorious_future/article/details/124867003 - *点击按钮横向滚动左右滚动_overflow 滚动条点击按钮实现滚动 - CSDN 博客*

### 返回页面顶部、底部及上下翻页

[Demo](os/mobile/_files/markor/theme/demo.html)

参考：

1. https://lrepacks.net/ - *Авторские репаки от ELCHUPACABRA - REPACK скачать*
2. https://segmentfault.com/a/1190000041750000 - *javascript - 这几种方法帮你快速实现回到页面顶部 - 个人文章 - SegmentFault 思否*
3. https://www.cnblogs.com/mq0036/p/17662834.html - *基于JS实现回到页面顶部的五种写法(从实现到增强) - jack_Meng - 博客园*
4. https://www.runoob.com/w3cnote/js-to-top.html - *JavaScript 返回顶部实例 | 菜鸟教程*

### 复制代码（块）

https://github.com/Martinomagnifico/reveal.js-copycode - *GitHub - Martinomagnifico/reveal.js-copycode: A simple plugin that automatically shows a 'copy' button in code blocks in Reveal.js*

![GitHub last commit](https://img.shields.io/github/last-commit/Martinomagnifico/reveal.js-copycode?color=blue&logo=github)
![GitHub Release Date - Published_At](https://img.shields.io/github/release-date/Martinomagnifico/reveal.js-copycode?display_date=published_at&logo=github)
![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/Martinomagnifico/reveal.js-copycode?logo=github)
![GitHub Repo stars](https://img.shields.io/github/stars/Martinomagnifico/reveal.js-copycode?style=social)

### 并发

https://mp.weixin.qq.com/s/QZ4z_I5Gl6FNz6jcyGkknA - *得物面试：10wqps高并发，如何防止重复下单？*

https://mp.weixin.qq.com/s/7-F_t4TDbGlFbL7AmQuP6g - *美团面试：10wqps高并发，如何防止重复下单？*

https://mp.weixin.qq.com/s/JE1c2fTcHQ4U5OaWWgkBqA - *高并发解决方案详解(8大主流架构方案)*

https://mp.weixin.qq.com/s/zCbRiA6c9phXs5BJ-hqTfQ - *秒杀系统的设计*

https://mp.weixin.qq.com/s/PhiGAQXJe-c60GHKypgIyw - *电商设计订单超时未支付关闭的方案整理*

### 幂等

https://mp.weixin.qq.com/s/gR2y6lF5TJqBQs2eaWRqrg - *幂等设计的8种实现方式*

### 生成订单号

```php
/**
 * 生成 20 位编号（时间 + 微秒 + 随机数 + 会员 ID%1000），该值会传给第三方支付接口
 * 长度 = 12位 + 3位 + 2位 + 3位  = 20位
 * 1000个会员同一微秒提订单，重复机率为 1/100
 * @return string
 */

function makePaySn($member_id) {
    return date('ymdHis',  TIMESTAMP).sprintf('%03d', (float) microtime() * 1000) .mt_rand(10, 99).sprintf('%03d', intval($member_id) % 1000);
}
```

```php
/**
 * 订单编号生成规则，n(n>=1) 个订单表对应一个支付表，
 * 生成订单编号（年取 1 位 + $pay_id 取 13 位 + 第 N 个子订单取 2 位）
 * 1000个会员同一微秒提订单，重复机率为 1/100
 * @param $pay_id 支付表自增 ID
 * @return string
 */
public function makeOrderSn($pay_id) {
    // 记录生成子订单的个数，如果生成多个子订单，该值会累加
    static $num;
    if (empty($num)) {
        $num = 1;
    } else {
        $num++;
    }
    return (date('y', TIMESTAMP) % 9 + 1) . sprintf('%013d', $pay_id) . sprintf('%02d', $num);
}
```

### 类型转换

#### PDF

https://mp.weixin.qq.com/s/1hBmfI47ptZgw7KNb97T8A - *使用 react-pdf 打造在线简历生成器*

#### 目录结构转为 Markdown

搜索关键词：`file tree md`

1. [files2md - npm](https://www.npmjs.com/package/files2md) - *Automagically generate file trees in your markdown files. Latest version: 1.0.1, last published: 8 years ago. Start using files2md in your project by running `npm i files2md`. There are no other projects in the npm registry using files2md.*

    ![GitHub last commit](https://img.shields.io/github/last-commit/aymericbeaumet/files2md?color=blue&logo=github)
    ![npm](https://img.shields.io/npm/v/files2md?logo=npm)

2. [file-mkdir - npm](https://www.npmjs.com/package/file-mkdir) - *It is used to generate the project directory tree, and supports markdown and txt file formats.. Latest version: 0.1.3, last published: a year ago. Start using file-mkdir in your project by running `npm i file-mkdir`. There are no other projects in the npm registry using file-mkdir.* [GitHub Repo](https://github.com/inblossoms/file-mkdir)

    ![GitHub last commit](https://img.shields.io/github/last-commit/inblossoms/file-mkdir?color=blue&logo=github)
    ![npm](https://img.shields.io/npm/v/file-mkdir?logo=npm)
    ![GitHub Repo stars](https://img.shields.io/github/stars/inblossoms/file-mkdir?style=social)

3. [markdown-file-tree - npm](https://www.npmjs.com/package/markdown-file-tree) - *Generate file-tree in markdown, e.g. (`_Sidebar.md`) for Github wiki, including links to files.. Latest version: 1.0.7, last published: 5 years ago. Start using markdown-file-tree in your project by running `npm i markdown-file-tree`. There are no other projects in the npm registry using markdown-file-tree.* [GitHub Repo](https://github.com/pavel-john/markdown-file-tree)

    ![GitHub last commit](https://img.shields.io/github/last-commit/pavel-john/markdown-file-tree?color=blue&logo=github)
    ![npm](https://img.shields.io/npm/v/markdown-file-tree?logo=npm)
    ![GitHub Repo stars](https://img.shields.io/github/stars/pavel-john/markdown-file-tree?style=social)

4. [md-file-tree - npm](https://www.npmjs.com/package/md-file-tree) - *Generate markdown tree of all the files in a directory, recursively.. Latest version: 0.2.0, last published: 5 years ago. Start using md-file-tree in your project by running `npm i md-file-tree`. There are no other projects in the npm registry using md-file-tree.* [GitHub Repo](https://github.com/michalbe/md-file-tree)

    ![GitHub last commit](https://img.shields.io/github/last-commit/michalbe/md-file-tree?color=blue&logo=github)
    ![npm](https://img.shields.io/npm/v/md-file-tree?logo=npm)
    ![GitHub Repo stars](https://img.shields.io/github/stars/michalbe/md-file-tree?style=social)

### 文件上传

https://mp.weixin.qq.com/s/0bFd6xs16Kajg853TOObAA - *大文件切片上传，全网最简单的实现没有之一*

https://mp.weixin.qq.com/s/9LSNHkAMG_hd8VSi79LZrA - *面试官：为什么网盘上传多个视频文件不能一起上传，80%人回答不清楚！*

### 消息推送

https://mp.weixin.qq.com/s/Z5g3mlZGeTqHdK0jKBGf-g - *整理常见的实时消息推送方案*

### 限流

https://mp.weixin.qq.com/s/NHZ7CmnHspChjh7orBfPqA - *就这么几个限流算法，总是记了又忘。。。*

## 演示

1. <a href="demo/prism-line-numbers.html" target="_blank">prism-line-numbers</a>
2. <a href="demo/swiper.html" target="_blank">swiper</a>
3. <a href="content/os/mobile/_files/markor/theme/demo.html"
target="_blank">markor-theme-demo</a>

## 源码分析

JavaScript 源码解读

### jperasmus/docsify-copy-code

<https://github.com/jperasmus/docsify-copy-code> - *GitHub - jperasmus/docsify-copy-code: A docsify plugin that copies Markdown code block to your clipboard*

![GitHub last commit](https://img.shields.io/github/last-commit/jperasmus/docsify-copy-code?color=blue&logo=github)
![GitHub Repo stars](https://img.shields.io/github/stars/jperasmus/docsify-copy-code?style=social)

- https://unpkg.com/docsify-copy-code@2.1.1/dist/docsify-copy-code.js （文件内容中出现的 `1e3` 表示 1×10^3 = 1000）

### &#119;ww.itfanr.cc

http://www.itfanr.cc/ - *IT范*

https://theme-next.org/ - *Home Page | Theme-Next*

回到顶部-back2top（带页面滚动进度）
