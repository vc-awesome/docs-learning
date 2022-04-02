项目：swarm



## post提交格式

```js
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

## post提交成功等待数秒跳转

```js
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

> 依赖 uView 的 `Toast 消息提示` 组件
>
> \<templete\>中需添加`<u-toast ref="uToast"/>`



## get提交格式

```js
this.$http.get('/machine/index').then(res => {
    console.log('ok->[矿机列表]', res)
    this.list = res.data.data
}).catch(err => {
    console.log(err)
})
```

