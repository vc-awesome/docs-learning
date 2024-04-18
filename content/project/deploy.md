# 项目部署

## Web 服务器伪静态

<!-- tabs:start -->

### **Nginx**

文件名：`nginx.htaccess`

文件描述：Nginx 用户配置文件

```nginx
location / {
    if (!-e $request_filename) {
        rewrite  ^(.*)$  /index.php?s=/$1  last;
    }
}
```

### **Apache**

文件名：`.htaccess`

文件描述：Apache 用户配置文件

```bash
<IfModule mod_rewrite.c>
  Options +FollowSymlinks -Multiviews
  RewriteEngine On

  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteRule ^(.*)$ index.php/$1 [QSA,PT,L]
</IfModule>
```

<!-- tabs:end -->

## PHP 版本

- 7.2
- 7.3 ✔️
- 7.4 🐞

## PHP 扩展

- gmp
- scrypt
- redis

## MySQL 版本

- 5.7.32

## Redis 版本

暂无

## 文件上传

Linux 系统设置项目根目录 `public` 和 `runtime` 文件夹的权限为 `757` 或 `777`

## 账号密码

### 后台管理

<!-- tabs:start -->

#### **正式**

链接：`http://5gadmin.tikwaipro.com/xpigaeecdateasdtdgrryrxdgw.html`

账号：`steam-administrator`

密码：`ssa,2021.01#14`

短信验证码：`210114`

#### **测试**

链接：`http://5g.test/admin/index/login`

账号：`admin`

密码：`12345678`

短信验证码：`210114`

<!-- tabs:end -->

### 前端接口

<!-- tabs:start -->

#### **正式**

`http://5gapi.tikwaipro.com/`

#### **测试**

IP 方式：`http://192.168.2.7/`

Domain 方式：`http://5g.test/`

<!-- tabs:end -->

## 宝塔

### 软件

- Supervisor 管理器 `2.2`

## 定时任务

<!-- tabs:start -->

### **Shell 脚本**

任务名称：`<项目名> - [<控制器名> -] 发放静态收益`

执行周期：每天 `00` 时 `01` 分

脚本内容：

```bash
cd /home/wwwroot/falcon
php think release static
```

### **访问 URL**

任务名称：`<项目名> - [<控制器名> -] 签到挖矿`

执行周期：每隔 `1` 分钟执行

URL 地址：`http://taskakq122.dstnetwork.top/income/static`

<!-- tabs:end -->

### **数据库备份**

暂无

## 常见问题

### 项目部署至宝塔面板报错 Warning: require(): open_basedir...

原因：

1. 部署时，宝塔默认设置了目录防跨域攻击（open_basedir）

操作步骤：

1. 在根目录找到 `user.ini` 文件

    文件描述：PHP 用户配置文件（防跨站）

2. 将 `open_basedir=/home/wwwroot/www.thinkphp.cn/public/:/tmp/:/proc/` 去掉 `public` 修改为：`open_basedir=/home/wwwroot/www.thinkphp.cn/:/tmp/:/proc/`

3. 重启 Web 服务器

参考链接：

1. <https://www.cnblogs.com/kinwing/p/11105010.html> - *open_basedir restriction in effect,解决php引入文件权限问题 解决方法 - KinwingHU - 博客园*

2. <https://blog.csdn.net/qq_42249896/article/details/87108146> - *宝塔部署项目报Warning: require(): open_basedir restriction in effect的解决方案-CSDN博客*

### Thinkphp5 项目部署至 linux 服务器出现模板不存在的错误

本地 *Windows* 系统开发没有任何问题

*Windows* 不区分文件的大小写，*Linux* 区分文件的大小写

将所有渲染出来的模板文件名及文件夹改成小写

**报错**：  `$this->fetch("Me");$this->view("Me");{extend name="User:me"}`

**正常**：  `$this->fetch("me");$this->view("me");{extend name="user:me"}`

参考链接：

1. <https://blog.csdn.net/example440982/article/details/71218986> - *thinkphp5踩坑之部署到服务器模板不存在-CSDN博客*

### No input file specified

Linux 系统拷贝下来的 ThinkPHP5 源码报 `No input file specified.` 错误

删除访问目录 `public` 下的 `.user.ini` 文件
