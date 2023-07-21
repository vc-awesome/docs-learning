## 官方

https://www.postman.com/ - *Postman API Platform | Sign Up for Free*

## 安装

https://www.postman.com/downloads/ - *Download Postman | Get Started for Free*

## 入门指南

### Environments

添加环境

- 格式：

  `「<年月日>_<项目名>」测试`

  `「<年月日>_<项目名>」生产`

  `「<年月日>_<项目名>」开发`

  `「<年月日>_<项目名>」开发@设备名`

- 例子：

  `「20210508_swarm」开发@company` （公司电脑）

  `「20210508_swarm」开发@MacBook` （个人电脑）

### Collection

添加 collection

- 命名格式：

  `<年月日>_<项目名称>[（接口加密|crypto-js）]`

- 例子：

  `20210508_skybet（接口加密）`

  `20210508_newxx（crypto-js）`

### 项目变量

- 添加变量

  - host 主机

    variable: host

    initial value: http://20210518-current.develop

    current value: http://20210518-current.develop

  - host_<环境>

    例如：`host_test`,`host_task`,`host_api`

  - host_task

    variable: host_task

    initial value: http://task.20210518-current.develop

    current value: http://task.20210518-current.develop

  - login_token

    variable: login_token

    initial value: 

    current value: 

  - form_token

    variable: form_token

    initial value: 

    current value: 

- 使用变量
  - 在需要用的地方使用：`{{变量名}}`

### Pre-request Script 请求前脚本

> 身为一个接口自动化测试工具，具有在运行中的动态行为不足为奇，Postman 集成了一个强大的，基于 NodeJS 的 Script 引擎，利用它能够为请求以及响应添加一些动态的行为：json
>
> 1）在发送请求以前，编写 Pre-Request-Script，为请求参数进行加密处理、参数化等。api
>
> 2）接收到请求响应后，编写 Tests-Script，制定响应断言、处理返回的数据等。app 



```js
const echoGetRequest = {
  url: pm.environment.get("host") + "/api/v1/member/getFormToken",
  method: 'GET',
  header: [
    "Authorization: Bearer "+ pm.globals.get("login_token"),
  ]
};
// 发送请求
pm.sendRequest(echoGetRequest, function (err, response) {
  pm.globals.set("form_token", response.json().data.form_token);
  console.log(response.json());
});
```

### 接口签名

https://www.jianshu.com/p/16345cd50753

[Postman预处理添加默认请求参数及自动生成签名参数（sign）](https://blog.csdn.net/lsh127k/article/details/108375577)

```js
// 获取环境变量
pm.environment.get("variable_key");

// 请求前添加get变量
pm.request.addQueryParams("app_key=123456")

// 请求前添加post变量
pm.request.body.urlencoded.add({key: "app_key", value: "123456"})

// 获取header内容
pm.request.headers.get("Cookie");

// 获取body内容
pm.request.body.raw

// 获取post的body参数
pm.request.body.urlencoded

// 获取url中get的queryString参数
pm.request.url.query

// 获取响应体的文本问题
response.text();

// 获取json数据
response.json();
```

 

```js
tokenUrl

signatureUrl

client_credentials_url

access_token
```



获取请求参数的变量值

https://www.zhihu.com/question/455217937/answer/1842612861



```js
// json序列化为string
JSON.stringify()

// string反序列化json
JSON.parse()

// 获取参数类型
typeof(变量名)

// URL编码
encodeURIComponent()

// URL解码
decodeURIComponent()
```

### Tests 响应后脚本

响应断言

```js
// 设置全局变量
pm.globals.set("login_token", pm.response.json().data.login_token);

// 设置环境变量（登录成功设置login_token值）
pm.environment.set("login_token", pm.response.json().data);
```

### get 传递数组

Params

设置格式

| Key           | Value |
| ------------- | ----- |
| currency_id[] | 1     |
| currency_id[] | 2     |

后端接收到的就是 `payment` 的数组形式



参考链接：https://www.cnblogs.com/dee0912/p/4136381.html

### body 设置提交数据

单键传递数组(对象)

1. **form-data** 方式

   设置格式

   | Key       | Value |
   | --------- | ----- |
   | payment[] | 1     |
   | payment[] | 2     |
   | payment[] | 3     |

​		

​		后端接收到的就是 `payment` 的数组形式

​		参考链接：https://blog.csdn.net/u014001964/article/details/88807609/

2. **raw** 方式

   设置格式

    ```js
    {
      "unit_price": "",
      "amount": "",
      "payments": [
        1,
        2,
        3
      ]
    }
    ```

​		下拉选择 JSON 方式

​		后端接收到的就是 `payment` 的数组形式

​		参考链接：https://blog.csdn.net/lhq186/article/details/97033786

### post 请求上传文件

参考链接：https://blog.csdn.net/maowendi/article/details/80537304

### 引入外部 js 文件

### Runner

runer 是串行执行，不是并发执行

串行（迭代）执行，等上一个请求执行完才会接着执行下一个请求

Postman 暂时没有并发测试功能
