# luch request

## 简介

> luch-request 是一个基于Promise 开发的uni-app跨平台、项目级别的请求库，它有更小的体积，易用的api，方便简单的自定义能力。

![GitHub last commit](https://badgen.net/github/last-commit/lei-mu/luch-request?icon=github&color=blue)
![GitHub Release Date - Published_At](https://img.shields.io/github/release-date/lei-mu/luch-request?display_date=published_at&logo=github)
![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/lei-mu/luch-request?logo=github)
![GitHub Repo stars](https://img.shields.io/github/stars/lei-mu/luch-request?style=social)

## 官方

https://www.quanzhan.co/luch-request/ - *luch-request*

https://github.com/lei-mu/luch-request - *GitHub - lei-mu/luch-request: luch-request 是一个基于Promise 开发的uni-app跨平台、项目级别的请求库，它有更小的体积，易用的api，方便简单的自定义能力。*

## 安装

https://ext.dcloud.net.cn/plugin?id=392 - *luch-request - DCloud 插件市场*

## 用法

### post 提交

```javascript
this.$http.post('/login/login', this.form).then(res => {
    console.log('ok', res)
    uni.setStorageSync('login_token', res.data);
    this.$u.route({
        type: 'switchTab',
        url: 'pages/tabbarA/index'
    })
}).catch(err => {
    console.log(err)
    this.$refs.uToast.show({
        title: err.message,
        type: 'warning',
        icon: false
    })
})
```

### post 提交成功等待数秒后跳转

```javascript
this.$http.post('/trade/issueSellOrder', this.formSell).then(res => {
    console.log('ok', res)
    this.$refs.uToast.show({
        title: res.data,
        type: 'success',
        icon: true,
        back: true
   })
}).catch(err => {
    console.log(err)
    this.$refs.uToast.show({
        title: err.message,
        type: 'warning',
        icon: false
    })
})
```

> 依赖 uView 的 "Toast 消息提示" 组件
>
> `<templete><templete>` 中需添加 `<u-toast ref="uToast"/>`

### get 提交

```javascript
this.$http.get('/machine/index').then(res => {
    console.log('ok->[矿机列表]', res)
    this.list = res.data.data
}).catch(err => {
    console.log(err)
})
```
