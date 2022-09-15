## todo...



## 安全

> 百度搜索：Web安全与认证授权

1. 服务器 404 错误页面

2. thinkphp 框架开发阶段报错信息屏蔽
   - 上线部署关闭 `index.php` 中的 `define('APP_DEBUG',true);`
   - 在公共 `Common` 文件夹中添加一行配置参数 `'TMPL_EXCEPTION_FILE' => './Public/404.html',` （异常跳转到指定的404页面）

3. thinkphp 框架 public 文件夹禁止访问
   - 在文件夹中添加 `index.html` 空白文件

4. mysql 的密码不能太简单

5. 隐藏服务器的信息，框架的信息，编程语言的信息

