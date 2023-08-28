## 安全

> 百度关键词搜索：[Web 安全与认证授权](https://www.baidu.com/s?word=Web%20安全与认证授权)

1. 服务器 404 错误页面

2. ThinkPHP 框架开发阶段报错信息屏蔽
   - 上线部署关闭 `index.php` 中的 `define('APP_DEBUG',true);`
   - 在公共 `Common` 文件夹中添加一行配置参数 `'TMPL_EXCEPTION_FILE' => './Public/404.html',` （异常跳转到指定的404页面）

3. ThinkPHP 框架 public 文件夹禁止访问
   - 在文件夹中添加 `index.html` 空白文件

4. MySQL 的密码不能太简单

5. 隐藏服务器的信息，框架的信息，编程语言的信息


## 部署

https://www.daniao.org/tag/列表程序 - *列表程序 - 大鸟博客*

使用 vercel 部署并且绑定自定义域名
