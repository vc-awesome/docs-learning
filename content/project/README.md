# 项目

![](https://mmbiz.qpic.cn/mmbiz_png/pUm6Hxkd434wqEQPXicYgeicvxMJicFdSXPfC9icficgKdCvouibVYo1exCRwbnicgzF03H0sTd9bY1uzjevrotKKJ83A/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_png/pUm6Hxkd434wqEQPXicYgeicvxMJicFdSXPyHvXhibIs9tRcA4Mr8xT5wnMQJT1hlUgic2FBJ9BZuzofyjszkrUQMTg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

<small>*插图来源于：[一文看懂DevOps，再不懂来打我](https://mp.weixin.qq.com/s/rKssu46Cemwn2EqmJkkM2Q)*</small>

## 简介

> DevOps is a methodology in the software development and IT industry. Used as a set of practices and tools, DevOps integrates and automates the work of software development (Dev) and IT operations (Ops) as a means for improving and shortening the systems development life cycle.
>
> <cite>—— [DevOps - Wikipedia](https://en.m.wikipedia.org/wiki/DevOps )</cite>

---

https://mp.weixin.qq.com/s/rKssu46Cemwn2EqmJkkM2Q - *一文看懂DevOps，再不懂来打我*

---

项目开发流程文档：

1. https://wenku.baidu.com/view/1d86901226fff705cd170a62.html - *项目开发流程文档 - 百度文库*

2. https://wenku.baidu.com/view/e1e52b00df80d4d8d15abe23482fb4daa58d1de6.html - *项目开发规范文档 - 百度文库*

## 安全

> 百度关键词搜索：[Web 安全与认证授权](https://www.baidu.com/s?word=Web%20安全与认证授权)

1. 服务器 404 错误页面

2. ThinkPHP 框架开发阶段报错信息屏蔽
   - 上线部署关闭 `index.php` 中的 `define('APP_DEBUG', true);`
   - 在公共 `Common` 文件夹中添加一行配置参数 `'TMPL_EXCEPTION_FILE' => './Public/404.html',` （异常跳转到指定的404页面）

3. ThinkPHP 框架 public 文件夹禁止访问
   - 在文件夹中添加 `index.html` 空白文件

4. MySQL 的密码不能太简单

5. 隐藏服务器的信息，框架的信息，编程语言的信息

6. 代码加密、混淆

## 测试

## 部署

https://www.daniao.org/tag/列表程序 - *列表程序 - 大鸟博客*

使用 vercel 部署并且绑定自定义域名
