## 开发规范

> 开发规范（标准）Standard

https://www.jb51.net/article/137783.htm - _JAVA开发中的一些规范讲解(阿里巴巴Java开发规范手册_

https://www.githubs.cn/collections/style-guide - *Github上编码规范开源项目推荐 - GitHub中文社区*

https://www.w3cschool.cn/wematy/ - *腾讯alloyteam团队前端代码规范_w3cschool*

### 代码规范

https://www.ruanyifeng.com/blog/2012/04/javascript_programming_style.html - *Javascript编程风格* 🇨🇳

https://github.com/mdo/code-guide - *Standards for developing consistent, flexible, and sustainable HTML and CSS.* 🇺🇸 🇨🇳



### 注释规范


``` css
/* 多行
    注释 */

div {
  /* 单行注释 */
}

/**
 * 文件信息注释
 * @desc File Info
 * @author Author Name
 * @date 2015-10-10
 */
```

https://www.w3cschool.cn/wematy/wematy-qaru3bsh.html# - *CSS 注释规范_w3cschool*



``` js
// 自定义内容 - start
/**
 * TOC 添加“代码缩进参考线”
 * PhpStorm 中如何设置并查看效果：
 * 1. phpstorm 菜单栏 -> preferences...（设置）；
 * 2. 编辑器 -> 常规 -> 外观：勾选选项“显示缩进参考线”。
 * @url https://blog.csdn.net/weixin_41981080/article/details/82659022 - PhpStorm代码编辑区竖线的用途
 * @url https://www.cnblogs.com/zqifa/p/12651446.html - phpstorm 代码编辑区去掉、设置灰色竖线 打印分割线设置
 */
 
 
 
// 自定义内容 - end
```


## 源码解读

*js* 源码解读

- https://github.com/jperasmus/docsify-copy-code
    - https://unpkg.com/docsify-copy-code@2.1.1/dist/docsify-copy-code.js  
        文件内容中出现的 `1e3` 表示 1×10^3 = 1000


## 术语表

https://developer.mozilla.org/zh-CN/docs/Glossary - *MDN Web 文档术语表：Web 相关术语的定义 | MDN*
- https://developer.mozilla.org/zh-CN/docs/Glossary/Polyfill - *Polyfill - MDN Web 文档术语表：Web 相关术语的定义 | MDN*
- https://www.jianshu.com/p/7562b8b589f3 - *Polyfill简介 - 编号哈哈哈 - 简书*

https://docs.github.com/zh/get-started/quickstart/github-glossary - *GitHub 词汇表 - GitHub Docs*

## 镜像站

- http://mirrors.163.com/ - *网易开源镜像站*

- https://mirrors.tuna.tsinghua.edu.cn/ - *清华大学开源软件镜像站*

- https://mirrors.ustc.edu.cn/ - *中国科学技术大学开源镜像站*

- GitHub
  - https://ghproxy.com/ - *GitHub Proxy 代理加速*
  - https://zgq-inc.github.io/overthefirewall/#speedup_download - *Github文件加速下载*
  - <https://greasyfork.org/zh-CN/scripts/412245-github-增强-高速下载> - *Github 增强 - 高速下载*



## Warning

开发过程中，尽可能在无痕，且没安装任何扩展程序的浏览器中运行测试；因为扩展程序中的脚本会窜程序，导致发生意想不到的错误。
比如（已踩坑）：

1. 浏览器安装了鼠标手势扩展程序，使得 ThinkPHP6 中的表单令牌功能，前端 token 请求页面获取一次，后端 token 请求页面获取一次加上扩展程序请求了一次 url，从而重置了两次 token，导致前后端验证失败；
2. 服务器生产环境，因为浏览器安装并使用了扩展程序，导致操作只访问 url 一次，而扩展程序脚本也请求了一次，使得后端接收了2 次请求，造成 MySQL 重复插入数据的问题。


