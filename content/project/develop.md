# 项目开发

## 需求文档

暂无

## 需求更新

1. Steam 业绩修改，页面修改，钱包名字改一下名字（USDT钱包，S钱包，T钱包，F钱包）充提接口改为TRC20，明天早上打包测试。

2. Steam 业绩方式更改

    `分配大中小区 > 伞下`

3. 钱包名字更改

    `USDT > USDT [ev_price_i_info]`
    
    `猎鹰钱包 > S钱包 [ev_price_c_info]`
    
    `TT钱包 > T钱包 [ev_price_f_info]`
    
    `TR钱包 > F钱包 [ev_price_b_info]`

4. 充提接口更改

    `ERC20_USDT > TRC20_USDT`

    `TRC20`：波场
    
    `ERC20`：以太坊

## 开发进度

`√` 已完成

`...` 部分未完成

未完成

<!-- tabs:start -->

### **登录注册**

- [x] 登录
- [x] 注册
  - [x] 短信验证码接入
- [x] 忘记密码
  - [x] 短信验证码接入
- [x] 发送短信

### **会员模块**

- [x] 修改登录密码
  - [x] 短信验证码接入
- [x] 修改安全密码

<!-- tabs:end -->

## 开发工具

1. [微信开发者工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/devtools.html)

    - 支持 Windows, macOS

## UI 设计

[蓝湖](https://lanhuapp.com/web/#/item/project/stage?pid=b94c273a-9cb6-4258-bf2c-1e99fb0ab2a0 )

## API 文档

URI：[ShowDoc](https://www.showdoc.com.cn/1223970633701498?page_id=6166293618111531 "steam")

访问密码：`123456`

## Composer

1. `composer require simplito/elliptic-php` 1.0.7

2. `composer require kornrunner/keccak`

## Git 仓库

`git@code.aliyun.com:caiyongwen_09/Steam.git`

## 版本更新日志

暂无
