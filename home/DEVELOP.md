## 部署

### 伪静态

<!-- tabs:start -->

#### **Nginx**

文件名：`nginx.htaccess`

文件描述：Nginx用户配置文件

```nginx
location / {
    if (!-e $request_filename) {
        rewrite  ^(.*)$  /index.php?s=/$1  last;
    }
}
```



#### **Apache**

文件名：`.htaccess`

文件描述：Apache用户配置文件（伪静态）

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

### PHP版本

- 7.2
- 7.3 ✔️
- 7.4



### PHP扩展

- gmp
- scrypt
- redis



### MySQL版本

- 5.7.32



### 文件上传

Linux系统设置项目根目录`public`文件夹权限为`757`或`777`

Linux系统设置项目根目录`runtime`文件夹权限为`757`或`777`



### 账号密码

#### 后台管理

<!-- tabs:start -->

##### **正式**

链接：`http://5gadmin.tikwaipro.com/xpigaeecdateasdtdgrryrxdgw.html`

账号：steam-administrator

密码：ssa,2021.01#14

短信验证码：210114

##### **测试**

链接：`http://5g.test/admin/index/login`

账号：admin

密码：12345678

短信验证码：210114

<!-- tabs:end -->



#### 前端接口

<!-- tabs:start -->

##### **正式**

api `http://5gapi.tikwaipro.com/`



##### **测试**

api-ip `http://192.168.2.7/`

api-domain `http://5g.test/`

<!-- tabs:end -->



### 宝塔

#### 软件

- Supervisor管理器 2.2



### 定时任务

<!-- tabs:start -->

#### **Shell脚本**

任务名称：`<项目名> - [<控制器名> -] 发放静态收益`  
执行周期：每天`00`时`01`分  
脚本内容：

```bash
cd /home/wwwroot/falcon
php think release static
```



任务名称：`<项目名> - [<控制器名> -] 发放动态收益`  
执行周期：每天`00`时`05`分  
脚本内容：

```bash
cd /home/wwwroot/falcon
php think release countMemberYesterdayBonus
```



#### **访问URL**

任务名称：`<项目名> - [<控制器名> -] 签到挖矿`  
执行周期：每隔`1`分钟执行  
URL地址：`http://taskakq122.dstnetwork.top/income/static`

<!-- tabs:end -->



### FAQ

#### 项目部署至宝塔面板报错Warning: require(): open_basedir...

部署时宝塔默认设置了目录防跨域攻击(open_basedir)

在根目录找到user.ini文件

文件描述：PHP用户配置文件（防跨站）

1. `open_basedir=/home/wwwroot/www.thinkphp.cn/public/:/tmp/:/proc/`去掉 `public` 修改为`open_basedir=/home/wwwroot/www.thinkphp.cn/:/tmp/:/proc/`

   

2. 重启web服务器



> **参考链接**

<https://www.cnblogs.com/kinwing/p/11105010.html>

<https://blog.csdn.net/qq_42249896/article/details/87108146>



#### Thinkphp5项目部署至linux服务器出现模板不存在的错误

本地*Windows*系统开发没有任何问题

*Windows*不区分文件的大小写，*linux*区分文件的大小写

将所有渲染出来的模板文件名及文件夹改成小写

**报错**：  `$this->fetch("Me");$this->view("Me");{extend name="User:me"}`

**正常**：  `$this->fetch("me");$this->view("me");{extend name="user:me"}`



> **参考链接**

<https://blog.csdn.net/example440982/article/details/71218986>



#### No input file specified

Linux系统拷贝下来的Thinkphp5源码报 `No input file specified.` 错误

删除访问目录`public`下的 `.user.ini` 文件



## 开发

### 进度

> `√` 已完成
>
> `...` 部分未完成
>
> 未完成

<!-- tabs:start -->

#### **登录注册**

- [x] 登录
- [x] 注册
  - [x] 短信验证码接入
- [x] 忘记密码
  - [x] 短信验证码接入
- [x] 发送短信



#### **会员模块**

- [x] 修改登录密码
  - [x] 短信验证码接入
- [x] 修改安全密码

<!-- tabs:end -->

### composer

`composer require simplito/elliptic-php` 1.0.7

`composer require kornrunner/keccak` 



### UI设计

UI = `用户界面`

[蓝湖](https://lanhuapp.com/web/#/item/project/stage?pid=b94c273a-9cb6-4258-bf2c-1e99fb0ab2a0 )



### API文档

uri：[ShowDoc](https://www.showdoc.com.cn/1223970633701498?page_id=6166293618111531 "steam")

访问密码：123456



### git 仓库

`git@code.aliyun.com:caiyongwen_09/Steam.git`



### 需求更新

> steam业绩修改，页面修改，钱包名字改一下名字（USDT钱包，S钱包，T钱包，F钱包）充提接口改为TRC20，明天早上打包测试

steam业绩方式更改

> `分配大中小区 > 伞下`

钱包名字更改

>`USDT > USDT [ev_price_i_info]`  
>`猎鹰钱包 > S钱包 [ev_price_c_info]`  
>`TT钱包 > T钱包 [ev_price_f_info]`  
>`TR钱包 > F钱包 [ev_price_b_info]`

充提接口更改

> `ERC20_USDT > TRC20_USDT`
>
> `TRC20`：波场  
> `ERC20`：以太坊

