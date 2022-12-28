## 开发规范

> 开发规范（标准）Standard

[JAVA开发中的一些规范讲解(阿里巴巴Java开发规范手册)](https://www.jb51.net/article/137783.htm)



[Github上编码规范开源项目推荐 - GitHub中文社区](https://www.githubs.cn/collections/style-guide)



## 源码解读

`js` 源码解读

- https://github.com/jperasmus/docsify-copy-code

## 镜像站

- http://mirrors.163.com/ - *网易开源镜像站*

- https://mirrors.tuna.tsinghua.edu.cn/ - *清华大学开源软件镜像站*

- https://mirrors.ustc.edu.cn/ - *中国科学技术大学开源镜像站*

- GitHub
  - https://ghproxy.com/ - *GitHub Proxy 代理加速*
  - https://zgq-inc.github.io/overthefirewall/#speedup_download - *Github文件加速下载*
  - <https://greasyfork.org/zh-CN/scripts/412245-github-增强-高速下载> - *Github 增强 - 高速下载*



## Warning

> [!WARNING] 开发过程中，尽可能在无痕，且没安装任何扩展程序的浏览器中运行测试；因为扩展程序中的脚本会窜程序，导致发生意想不到的错误。
> 比如（亲身经历）：
>
> 1. 浏览器安装了鼠标手势扩展程序，使得 TP6 中的表单令牌，前端 token 请求页面获取一次，后端 token 请求页面获取一次加上扩展程序请求了一次url，从而重置了两次token，导致前后端验证失败；
> 2. 服务器生产环境，使用了有扩展程序的浏览器，导致操作只访问url一次，而扩展程序脚本也请求了一次，使得后端接收了两次请求，造成重复插入数据问题。
>

