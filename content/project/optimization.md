# 优化

<https://blog.skk.moe/tags/前端性能优化/> - *标签: 前端性能优化 | Sukka's Blog*

## 压缩图片

https://tinypng.com/ - *TinyPNG – Compress WebP, PNG and JPEG images
intelligently*

## 合并文件

https://www.npmjs.com/package/concat - *concat - npm*

```sh
concat ./clipboard-code-block.css ./clipboard-code-block.js \
       -o clipboard-merge.js
```

## 压缩 HTML

https://www.npmjs.com/package/html-minifier - *html-minifier - npm*

## 压缩 CSS

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

## 压缩 JS

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

## 懒加载

https://developer.mozilla.org/zh-CN/docs/Web/Performance/Lazy_loading - *懒加载 - Web 性能 | MDN*

https://github.com/tuupola/lazyload - *GitHub - tuupola/lazyload: Vanilla
JavaScript plugin for lazyloading images*

![GitHub last commit](https://img.shields.io/github/last-commit/tuupola/lazyload?color=blue&logo=github)
![GitHub Release Date - Published_At](https://img.shields.io/github/release-date/tuupola/lazyload?display_date=published_at&logo=github)
![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/tuupola/lazyload?logo=github)
![GitHub Repo stars](https://img.shields.io/github/stars/tuupola/lazyload?style=social)
