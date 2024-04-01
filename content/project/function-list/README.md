# 功能列表

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

   ![GitHub last commit](https://badgen.net/github/last-commit/fatedier/frp?icon=github&color=blue)

   https://sspai.com/post/73283 - *简单几步实现内网穿透 - 少数派*

参考：

1. https://blog.csdn.net/qq_37429313/article/details/113386866 - *内网穿透教程__WILLPOWER_的博客-CSDN博客_路由器内网穿透*

2. https://baike.baidu.com/item/%E5%86%85%E7%BD%91%E7%A9%BF%E9%80%8F/8597835 - *内网穿透_百度百科*

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

#### 谷歌验证器

https://zhuanlan.zhihu.com/p/137451265 - *php实现google验证器*

https://www.jianshu.com/p/e0cf4dd70873 - *谷歌验证器如何安装使用*

#### 谷歌图形验证

https://developers.google.com/recaptcha

### 二维码

参考：

1. https://www.thinkphp.cn/topic/51726.html - *Thinkphp3.2 结合 phpqrcode 生成二维码（含 Logo 的二维码），附案例 - ThinkPHP 框架*

2. https://blog.csdn.net/sinat_35861727/article/details/73862991 - *使用 phpqrcode 生成二维码 - CSDN 博客*

### 无限极分类

参考：

1. https://www.php.cn/faq/353267.html - *php 递归实现无限级分类树 - php 教程 - PHP 中文网*

2. https://www.jianshu.com/p/ff07b46666c7 - *无限极分类原理与实现 - 简书*

### 多语言

程序切换语言含国旗可参考

1. https://igoutu.cn - *免费的图标、剪贴画插图、照片和音乐*

### 进度条

1. 页面进度条
2. ajax 进度条

### 使用 CSS 渐变替换共用背景图

### 切换主题

```css
// css
@media (prefers-color-scheme: light) {
  :root{--变量1: 色值1;--变量2: 色值2; ……}
}
@media (prefers-color-scheme: dark) {
  :root{--变量1: 色值3; --变量2: 色值4; ……}
}
```

参考：

1. https://sanonz.github.io/2020/to-build-dark-and-light-theme-with-web/ - *在 WEB 端实现亮/暗主题跟随系统功能 | Sanonz*
2. https://segmentfault.com/a/1190000041985635 - *关于前端主题切换的思考和现代前端样式的解决方案落地 - 个人文章 - SegmentFault 思否*
3. https://zhuanlan.zhihu.com/p/460111867 - *WEB前端跟随系统亮暗主题 - 知乎*
4. https://zhuanlan.zhihu.com/p/143279853 - *Web界面深色模式和主题化开发 - 知乎*

### 点击按钮横向滚动

<a href="demo/swiper.html">Demo</a>

参考：

1. https://blog.csdn.net/glorious_future/article/details/124867003 - *点击按钮横向滚动左右滚动_overflow 滚动条点击按钮实现滚动 - CSDN 博客*

### 返回页面顶部、底部及上下翻页

[demo](os/mobile/_files/markor/theme/demo.html)

参考：

1. https://lrepacks.net/ - *Авторские репаки от ELCHUPACABRA - REPACK скачать*

### 复制代码（块）

https://github.com/Martinomagnifico/reveal.js-copycode - *GitHub - Martinomagnifico/reveal.js-copycode: A simple plugin that automatically shows a 'copy' button in code blocks in Reveal.js*

![GitHub last commit](https://badgen.net/github/last-commit/Martinomagnifico/reveal.js-copycode?icon=github&color=blue)
![GitHub Repo stars](https://img.shields.io/github/stars/Martinomagnifico/reveal.js-copycode?style=social)

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

#### URL 转 Markdown

https://cn.bing.com/search?q=url+%E8%BD%AC+markdown - *url 转 markdown - 搜索*

https://www.appinn.com/webpage-to-markdown/ - *3 个工具，将网页转换为 Markdown：安卓、Edge、Chrome、Firefox、Obsidian、Safari - 小众软件*

#### 目录结构转为 Markdown

搜索关键词：`file tree md`

1. https://www.npmjs.com/package/files2md - *files2md - npm*

    ![GitHub last commit](https://img.shields.io/github/last-commit/aymericbeaumet/files2md?color=blue&logo=github)
    ![npm](https://img.shields.io/npm/v/files2md?logo=npm)

2. ✅ https://www.npmjs.com/package/file-mkdir - *file-mkdir - npm* [GitHub](https://github.com/inblossoms/file-mkdir)

    ![GitHub last commit](https://img.shields.io/github/last-commit/inblossoms/file-mkdir?color=blue&logo=github)
    ![npm](https://img.shields.io/npm/v/file-mkdir?logo=npm)
    ![GitHub Repo stars](https://img.shields.io/github/stars/inblossoms/file-mkdir?style=social)

3. https://www.npmjs.com/package/markdown-file-tree - *markdown-file-tree - npm* [GitHub](https://github.com/pavel-john/markdown-file-tree)

    ![GitHub last commit](https://img.shields.io/github/last-commit/pavel-john/markdown-file-tree?color=blue&logo=github)
    ![npm](https://img.shields.io/npm/v/markdown-file-tree?logo=npm)
    ![GitHub Repo stars](https://img.shields.io/github/stars/pavel-john/markdown-file-tree?style=social)

4. ✅ https://www.npmjs.com/package/md-file-tree - *md-file-tree - npm* [GitHub](https://github.com/michalbe/md-file-tree)

    ![GitHub last commit](https://img.shields.io/github/last-commit/michalbe/md-file-tree?color=blue&logo=github)
    ![npm](https://img.shields.io/npm/v/md-file-tree?logo=npm)
    ![GitHub Repo stars](https://img.shields.io/github/stars/michalbe/md-file-tree?style=social)

## 优化

### 压缩图片

https://tinypng.com/ - *TinyPNG – Compress WebP, PNG and JPEG images
intelligently*

### 合并文件

https://www.npmjs.com/package/concat - *concat - npm*

```sh
concat ./clipboard-code-block.css ./clipboard-code-block.js \
       -o clipboard-merge.js
```

### 压缩 HTML

### 压缩 CSS

https://www.npmjs.com/package/clean-css - *clean-css - npm*

- https://github.com/clean-css/clean-css-cli - *GitHub -
clean-css/clean-css-cli: The command line interface to clean-css CSS optimizer*

```sh
cleancss clipboard-code-block.css \
         -o clipboard-code-block.min.css
```

合并多个文件并压缩：

```sh
cleancss one.css two.css three.css \
         -o merged.min.css
```

### 压缩 JS

https://www.npmjs.com/package/uglify-js - *uglify-js - npm* [GitHub](https://github.com/mishoo/UglifyJS)

```sh
uglifyjs clipboard-code-block.js \
         -o clipboard-code-block.min.js -c -m
```

合并多个文件并压缩：

```sh
uglifyjs js/file1.js js/file2.js \
         -o foo.min.js -c -m
```

在线工具：

1. https://www.filesmerge.com/zh/merge-javascript-files - *合并 JS -- 在线文件合并器 (Free & Secure)*
2. http://tool.uis.cc/jsmin/ - *uis.cc - js 在线压缩*
3. https://skalman.github.io/UglifyJS-online/ - *UglifyJS 3: Online JavaScript minifier*
4. http://cdn.uglifyjs.net/ - *JS Minify and Beautify - Online*

参考：

1. https://segmentfault.com/a/1190000008995453 - *UglifyJS 中文文档 - 前端流浪者 - SegmentFault 思否*
2. https://juejin.cn/post/7036169445550587940 - *解读uglifyJS ——Javascript代码压缩 - 掘金*
3. https://blog.csdn.net/foupwang/article/details/102927763 - *前端打包工具 UglifyJS 使用入门 - CSDN 博客*

### 懒加载

https://developer.mozilla.org/zh-CN/docs/Web/Performance/Lazy_loading - *懒加载 - Web 性能 | MDN*

https://github.com/tuupola/lazyload/ - *GitHub - tuupola/lazyload: Vanilla
JavaScript plugin for lazyloading images*

![GitHub last commit](https://badgen.net/github/last-commit/tuupola/lazyload?icon=github&color=blue)

## 演示

1. <a href="demo/prism-line-numbers.html" target="_blank">prism-line-numbers</a>
2. <a href="demo/swiper.html" target="_blank">swiper</a>
3. <a href="content/os/mobile/_files/markor/theme/demo.html"
target="_blank">markor-theme-demo</a>

## 源码分析

*JavaScript* 源码解读

### jperasmus/docsify-copy-code

https://github.com/jperasmus/docsify-copy-code

- https://unpkg.com/docsify-copy-code@2.1.1/dist/docsify-copy-code.js  
  文件内容中出现的 `1e3` 表示 1×10^3 = 1000

### &#119;ww.itfanr.cc

http://www.itfanr.cc/ - *IT范*

https://theme-next.org/ - *Home Page | Theme-Next*

回到顶部-back2top（带页面滚动进度）
