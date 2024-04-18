# API

## 简介

> An API can be thought of as an instruction manual for communication between multiple software apparatuses. For example, an API may be used for database communication between web applications. By extracting the implementation and relinquishing data into objects, an API simplifies programming. （译文：API 可以被认为是用于多个软件设备之间通信的指令手册。例如，API 可用于 web 应用程序之间的数据库通信。通过提取实现并将数据释放到对象中，API 简化了编程。）
>
> API（Application Programming Interface，应用程序编程接口）


## 搜索

1. https://github.com/topics/api - *api · GitHub Topics · GitHub*

2. https://github.com/yosriady/awesome-api-devtools - *GitHub - yosriady/awesome-api-devtools: A collection of useful resources for building RESTful HTTP+JSON APIs.*

    ![GitHub last commit](https://img.shields.io/github/last-commit/yosriady/awesome-api-devtools?color=blue&logo=github)
    ![GitHub Repo stars](https://img.shields.io/github/stars/yosriady/awesome-api-devtools?style=social)

3. https://www.kancloud.cn/special/api - *API设计指南 - 专题 · 看云*


## 前期准备

开发前考虑

- 表单令牌（不支持 cookie 无法使用）
- API 请求数据的规范
- API 返回数据的规范

---

- API 版本控制

---

- admin 请求调用
- `request()` 助手函数
- 操作方法依赖注入
- Facade 调用
- `input()`

---

API 请求调用

```php
$this->request
$this->request->only
$this->request->post
```

API 响应调用

```php
use Zewail\Api\Facades\Response as ApiResponse;
ApiResponse::paginator($news_list);
```

---

模型

实例化模型类 `model()` 助手函数

---

数据响应

分页

通过主键 id 查询请求

---

API 分类

1. APP API

API 请求验证

1. JWT（无状态）
2. OAuth2.0
3. Session + cookie（有状态）

API 管理系统

1. Swagger + Postman
2. Swagger + YApi

API 安全

1. 开放 API 网关
2. 成熟开源网关系统
3. API 接口加密策略
4. PHP 接口签名验证

### 预备知识

#### HTTP

### 设计规范

1. https://juejin.cn/post/6844904069652283400 - *API 接口设计规范 - 掘金*

2. https://www.cnblogs.com/it-3327/p/11820330.html - *系统的讲解 - PHP 接口签名验证 - it-world - 博客园*

3. https://juejin.cn/post/7176220436714225721 - *瞧瞧别人家的API接口，那叫一个优雅 - 掘金*


#### Restful API

版本号：v1，v2，... 文件夹

路由配置：

请求方式：`GET`，`POST`，`DELETE`，`PUTH`

响应状态码：参考 > 豆瓣 API

参考：

1. https://godruoyi.com/posts/the-resetful-api-design-specification - *RESTful API 设计规范*

    - https://github.com/godruoyi/restful-api-specification - *GitHub - godruoyi/restful-api-specification: RESTful API Design Specification*

        ![GitHub last commit](https://img.shields.io/github/last-commit/godruoyi/restful-api-specification?color=blue&logo=github)
        ![GitHub Repo stars](https://img.shields.io/github/stars/godruoyi/restful-api-specification?style=social)

2. https://www.kancloud.cn/momingsixiali/thinkphp-resturl-api/664273 - *PHP实战: 使用thinkphp5制作restful api · thinkphp-resturl-api · 看云*

3. http://www.ruanyifeng.com/blog/2018/10/restful-api-best-practices.html - *RESTful API 最佳实践 - 阮一峰的网络日志*

4. http://www.ruanyifeng.com/blog/2014/05/restful_api.html - *RESTful API 设计指南 - 阮一峰的网络日志*

5. https://segmentfault.com/a/1190000019818569 - *url - RESTful API风格 - 前后端的那点小事 - SegmentFault 思否*

6. https://blog.csdn.net/shangrila_kun/article/details/89026968 - *REST服务和RESTful API是什么_api、rest服务-CSDN博客*

7. https://blog.csdn.net/laotianv5/article/details/81634997 - *什么是Restful API？_rsetfulapi-CSDN博客*

8. https://www.cnblogs.com/liwenzhou/p/9338256.html - *RESTful API介绍 - Q1mi - 博客园*

9. https://baijiahao.baidu.com/s?id=1634470186508003064 - *RESTful风格/RESTful Api/RESTful 架构？*

10. https://www.runoob.com/w3cnote/restful-architecture.html - *RESTful 架构详解 | 菜鸟教程*

11.  https://gitee.com/liushoukun/restfulapi-tp5 - *liushoukun/restfulapi-tp5*

12. https://www.cnblogs.com/haima/p/9486733.html - *thinkphp5开发restful-api接口 学习笔记一 - HaimaBlog - 博客园*

13. https://www.thinkphp.cn/extend/782.html - *ThinkPHP-RESTful API - ThinkPHP框架*

14. https://www.jianshu.com/p/5ada97c547b7 - *使用开放API获取网站数据——以豆瓣为例 - Yangjialin - 简书*

15. https://www.douban.com/group/topic/123746666/ - *REST服务和RESTful API是什么_api、rest服务-CSDN博客*

16. https://douban-api-docs.zce.me/book.html

17. https://www.runoob.com/http/http-tutorial.html - *HTTP 教程 | 菜鸟教程*

18. https://github.com/Leslin/thinkphp5-restfulapi - *GitHub - Leslin/thinkphp5-restfulapi: restful-api 风格接口 APP 接口 APP 接口权限 oauth2.0 接口版本管理 接口鉴权*

    ![GitHub last commit](https://img.shields.io/github/last-commit/Leslin/thinkphp5-restfulapi?color=blue&logo=github)
    ![GitHub Release Date - Published_At](https://img.shields.io/github/release-date/Leslin/thinkphp5-restfulapi?display_date=published_at&logo=github)
    ![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/Leslin/thinkphp5-restfulapi?logo=github)
    ![GitHub Repo stars](https://img.shields.io/github/stars/Leslin/thinkphp5-restfulapi?style=social)

19. https://github.com/dotku/thinkphp-restful-api - *GitHub - dotku/thinkphp-restful-api: 还没有空去研究 ThinkPHP 5，自己写了一个基于 ThinkPHP 3.2 的 API*

    ![GitHub last commit](https://img.shields.io/github/last-commit/dotku/thinkphp-restful-api?color=blue&logo=github)
    ![GitHub Repo stars](https://img.shields.io/github/stars/dotku/thinkphp-restful-api?style=social)

20. https://github.com/crifan/http_restful_api - *GitHub - crifan/http_restful_api: 整理 HTTP 后台端的 RESTful API 方面的知识*

    ![GitHub last commit](https://img.shields.io/github/last-commit/crifan/http_restful_api?logo=github&color=blue)
    ![GitHub Repo stars](https://img.shields.io/github/stars/crifan/http_restful_api?style=social)

21. https://docs.microsoft.com/zh-cn/onedrive/developer/rest-api/ - *通过 Microsoft Graph API 访问 OneDrive 和 SharePoint - OneDrive dev center | Microsoft Docs*

22. https://github.com/microsoft/api-guidelines - *GitHub - microsoft/api-guidelines: Microsoft REST API Guidelines*

    ![GitHub last commit](https://img.shields.io/github/last-commit/microsoft/api-guidelines?color=blue&logo=github)
    ![GitHub Repo stars](https://img.shields.io/github/stars/microsoft/api-guidelines?style=social)

#### OpenAPI

> 开放 API

1. https://swagger.io/docs/specification/about/ - *About Swagger Specification | Documentation | Swagger*

2. https://developers.weixin.qq.com/doc/ - *微信官方文档 | 微信开放文档*

3. https://open.weixin.qq.com/ - *微信开放平台*

4. https://mp.weixin.qq.com/ - *微信公众平台*

5. https://open.weibo.com/ - *新浪微博开放平台 - 首页*

6. https://open.alipay.com/ - *支付宝开放平台*

7. https://cloud.baidu.com/doc/NLP/s/Tk6z52d7c - *鉴权认证机制 - 语言与知识 | 百度智能云文档*

8. https://www.oschina.net/openapi - *API 文档 - 开放平台 - OSCHINA 社区*

9. https://help.aliyun.com/product/74373.html - *OpenAPI Explorer - 阿里云帮助中心*


#### RPC API

暂无


#### GraphQL

> A query language for your API — GraphQL provides a complete description of the data in your API, gives clients the power to ask for exactly what they need and nothing more, makes it easier to evolve APIs over time, and enables powerful developer tools.

https://graphql.org/ - *GraphQL | A query language for your API* [中文站点](https://graphql.bootcss.com/) [GitHub Org](https://github.com/graphql)

## 用法

### 身份认证 & Auth 鉴权指南

https://apifox.com/help/auth/api-key - *什么是 API Key | Apifox 帮助文档*

#### API Key
#### Bearer Token
#### JWT
#### Basic Auth
#### Digest Auth
#### OAuth 2.0

### 文档书写

参考：

> Postman > My Workspace > Collections > Template （完善中）

分类:

- 需要登录
- 无需登录|公共接口
- <分类名> 依据UI的页面分类命名

接口:

- 获取数据类

  - 获取xx数据 例：获取首页数据
  - 获取xx列表 例：获取参与列表
  - 获取xx详情 例：获取甄选详情
  - 获取xx信息 例：获取质押信息
  - 获取xx记录 例：获取转账记录

- 提交数据类

  - <动词命名> 例：质押、参与、购买...

### URL 格式

- 展示索引页

    `/api/模块名/index`

- 获取xx信息（一维数组）

    `/api/模块名/getXxInfo`

- 获取xx列表（二维或多维数组）

    `/api/模块名/getXxList`

- 提交xx信息

    `/api/模块名/postXx`

- 可查看本文档 “[中英文](home/chinese-english-translate.md)”

    1. Add
    2. Edit
    3. Delete
    4. Bind
    5. Unbind
    6. Set
    7. Join
    8. Quit
    9. Forget
    10. Find
    11. Query


### 返回格式

参考：

- https://juejin.cn/post/6844903625030909960 - *RESETful API 设计规范 - 掘金*
- 项目猎鹰
- 项目swarm

基于 TP5.1

```php
/**
 * api返回成功
 *
 * 基于 thinkphp5.1 框架
 *
 * @param string $data
 * @return \think\response\Json
 */
function response_success($data = '')
{
    return json([
        'code' => 0,
        'msg'  => 'success',
        'data' => $data
    ]);
}
```

```php
/**
 * api返回失败
 *
 * 基于 thinkphp5.1 框架
 *
 * @param $message
 * @param string $error_code
 * @param int $code
 * @return \think\response\Json
 */
function response_failure($message, $error_code = '000', $code = 400)
{
    return json([
        'error_code' => $code. $error_code,
        'message'    => $message
    ], $code);
}
```

json响应格式

成功

```json
{
    "code": 0,
    "msg": "success",
    "data": {
        "username": "username"
    }
}
```

或

```php
{
    "code": -1,
    "msg": "该活动不存在",
}
```

失败
以下必须返回的数据

```json
{
    "message": "您查找的资源不存在",
    "error_code": 404001
}
```

```json
{
"error_code":40100,
"message":"Unauthorized"
}
```

```json
{
"error_code":429001,
"message":"你操作太频繁了"
}
```

```json
{
"error_code":403002,
"message":"用户已禁用"
}
```

```json
{
"error_code":40000,
"message":"无效的签名"
}
```

```json
{
"error_code":40301,
"message":"权限不足"
}
```

```json
{
"message":"405 Method Not Allowed",
"error_code": 40500
}
```

```json
{
"error_code":40900,
"message":"手机号已存在"
}
```

```json
{
"error_code":41500,
"message":"不允许上传的图片格式"
}
```

```json
{
"message":"You have exceeded your rate limit.",
"error_code":42900
}
```

```json
{
"error_code":50300,
"message":"服务维护中"
}
```

其中错误码（error_code）必须 和 HTTP 状态码对应，也方便错误码归类
以下建议(可选)返回的数据

```json
{
    "message": "直接展示给终端用户的错误信息",
    "error_code": "业务错误码",
    "error": "供开发者查看的错误信息",
    "debug": [
        "错误堆栈，必须开启 debug 才存在"
    ]
}
```

业务错误码 error_code ：

- 400000 数据验证错误 message ``
- 401000 Unauthorized message `校验失败，需要重新登录`
- 404000 Not Found message `请求数据不存在`
- 403000 Forbidden message `账户严重违规，已封号`
- 403001 Forbidden message `账号已在其他设备上登录`

路由地址：

- 查询所有

    `/api/v1/member/index`

    状态码：200

- 新增

    `/api/v1/member/save`

    状态码：200

- 查询

    `/api/v1/member/read`

    状态码：200

- 修改

    `/api/v1/member/update`

    状态码：201

- 删除

    `/api/v1/member/delete`

    状态码：204


### 接口加密

> JavaScript library of crypto standards. Contribute to brix/crypto-js development by creating an account on GitHub.

![GitHub last commit](https://img.shields.io/github/last-commit/brix/crypto-js?color=blue&logo=github)
![GitHub tag (with filter)](https://img.shields.io/github/v/tag/brix/crypto-js?logo=github&color=blue)
![npm](https://img.shields.io/npm/v/crypto-js?logo=npm)
![GitHub Repo stars](https://img.shields.io/github/stars/brix/crypto-js?style=social)

https://github.com/brix/crypto-js - *GitHub - brix/crypto-js: JavaScript library of crypto standards.*

https://www.npmjs.com/package/crypto-js - *crypto-js - npm*

用法：

```js
// hmac-sha256 加密
CryptoJS.HmacSHA256("Message", val);
// base64 编码
CryptoJS.enc.Base64.stringify(val);
// sha256 加密
CryptoJS.SHA256(val);
```

```js
app_secret
app_key
timestamp
sign
```

使用加密方式：`请求内容` 拼接 `时间戳` 拼接 `app_secret`

可添加：参数升序排序后加密

php 例：

```php
md5("name=test&timestamp=198294231&app_secret=1294dsf23")
```

postman 例：

```js
// 前置处理器：计算请求签名
var _app_secret = pm.environment.get('provider_app_secret');
var _time = (new Date()).valueOf();
var _pre_sign = 'requestBody=' + pm.request.body.raw + ',time=' + _time + ',appSecret=' + _app_secret;
var _sign = CryptoJS.MD5(_pre_sign).toString();
pm.environment.set('_time', _time);
pm.environment.set('_sign', _sign);

console.log('[Pre]OpenAccountApi.getUserToken _pre_sign='+_pre_sign+',_sign=' + _sign);
```

参考：

1. https://segmentfault.com/a/1190000019732163 - *javascript - js使用AES加密PHP使用Openssl解密 - 程序开发 - SegmentFault 思否*

2. https://www.cnblogs.com/loveyunk/p/7513902.html - *crypto-js计算文件的sha256值 - loveyunk+ - 博客园*

3. https://mp.apipost.cn/a/a40300512bd44601 - *JS中利用CryptoJS进行MD5/SHA256/BASE64/AES加解密的方法与示例-前端-ApiPost博客*

其它：

1. https://zhuanlan.zhihu.com/p/111257822/ - *PHP接口签名验证*
2. https://www.cnblogs.com/qhorse/p/9264860.html - *PHP开发API接口签名及验证*
3. https://blog.csdn.net/dengjiexian123/article/details/53313913 - *php中使用hash_hmac函数实现HMAC-SHA1签名算法的来龙去脉*


### 重复请求

1. https://mp.weixin.qq.com/s/tSrmb6B2ZOrgE2Ix_YYGtg - *几行代码，优雅的避免接口重复请求！同事都说好！*


## 工具

1. https://www.jianshu.com/p/d7b13670e0eb - *API文档管理工具 / 接口文档*

2. https://mp.weixin.qq.com/s/FYU4s7Z4WGjV1Q9L7zlOpw - *一秒钟搞定API文档*

更多移步 QQ 浏览器 > 工具 > develop│api 文档工具


### YApi

https://github.com/YMFE/yapi - *YApi 是一个可本地部署的、打通前后端及QA的、可视化的接口管理平台. Contribute to YMFE/yapi development by creating an account on GitHub.*

![GitHub last commit](https://img.shields.io/github/last-commit/YMFE/yapi?color=blue&logo=github)
![GitHub Release Date - Published_At](https://img.shields.io/github/release-date/YMFE/yapi?display_date=published_at&logo=github)
![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/YMFE/yapi?logo=github)
![GitHub Repo stars](https://img.shields.io/github/stars/YMFE/yapi?style=social)


### Postman

https://www.postman.com/ - *Postman is an API platform for building and using APIs. Postman simplifies each step of the API lifecycle and streamlines collaboration so you can create better APIs—faster.*


### Showdoc

> 一个非常适合IT团队的在线API文档、技术文档工具。你可以使用Showdoc来编写在线API文档、技术文档、数据字典、在线手册

https://www.showdoc.com.cn/ - *ShowDoc*

https://www.showdoc.com.cn/page/741656402509783#语法说明 - *自动生成API文档*

https://www.showdoc.com.cn/page/102098 - *开放API*


### Apizza

https://www.apizza.net/ - *apizza - 极客专属的 api 管理工具*


### Apijson

https://github.com/Tencent/APIJSON - *🏆 零代码、全功能、强安全 ORM 库 🚀 后端接口和文档零代码，前端(客户端) 定制返回 JSON 的数据和结构。 🏆 A JSON Transmission Protocol and an ORM Library 🚀 provides APIs and Docs without writing any code.*

![GitHub last commit](https://img.shields.io/github/last-commit/Tencent/APIJSON?color=blue&logo=github)
![GitHub Release Date - Published_At](https://img.shields.io/github/release-date/Tencent/APIJSON?display_date=published_at&logo=github)
![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/Tencent/APIJSON?logo=github)
![GitHub Repo stars](https://img.shields.io/github/stars/Tencent/APIJSON?style=social)


### docway

http://www.docway.net - *小幺鸡在线接口文档管理工具*


### swagger

https://swagger.io - *API Documentation & Design Tools for Teams | Swagger*

https://swagger.io/docs/ - *Swagger Documentation*

https://github.com/swagger-api - *Swagger · GitHub*

### Apipost

https://www.apipost.cn/ - *Apipost-API 文档、设计、调试、自动化测试一体化协作平台*

参考：

1. https://mp.weixin.qq.com/s/_TNwCYSZs5OKs__Vq3JI0Q - *深夜把玩 ApiPost，分享细腻体验！*


### Apifox

https://apifox.com/ - *Apifox - API 文档、调试、Mock、测试一体化协作平台 - 接口文档工具，接口自动化测试工具，接口Mock工具，API文档工具，API Mock工具，API自动化测试工具*

https://apifox.com/help/ - *Apifox 快速入门 | Apifox 帮助文档*

参考：

1. https://mp.weixin.qq.com/s/cn1R_olFlXXca2c2wMtflw - *再见丑陋的 Swagger，这个API神器界面更炫酷，逼格更高，体验更好！*

2. https://mp.weixin.qq.com/s/J5qBVHZL2dqfxbk6SEq8bw - *SDK 和 API 的区别是什么？*
