# 命名规则

## 变量


## 方法

`getXxxConfig` | `config` 获取 Xxx 的配置

`getXxxInfo` | `info` 获取 Xxx 的单条信息

`getXxxList` | `lists` 获取 Xxx 的多条信息

`getXxxLog` | `logs` 获取 Xxx 的记录

`getXxxConfigById` 通过 id 获取 Xxx 的配置

`getXxxConfigByType` 通过 type 获取 Xxx 的配置（依此类推）

`setXxxStatus` 设置 Xxx 的状态

`calc` 输入框输入值计算数值（可用于异步请求）

`all` 一键操作

例：

- `allAdd` 一键添加
- `allDelete` 一键删除

`add` 添加

`edit` 编辑

`delete` 删除

`logs` 获取Xxx的日志

例：

- 控制器 `Raise`
- 方法 `logs`
- 表示获取募集的日志

本文档位置：

- 后端 thinkphp > 控制器
- 后端 thinkphp > 应用模块


## 文件

> 各文件名配 UI 截图

前端

不需要登录页面

- `login.html` / `signin.html` 登录
- `forget-password.html` / `forgot-password.html` 忘记密码
- `register.html` / `signup.html` 注册
- `agreement.html` 注册协议
- `download.html` 下载（下载安卓包链接、下载苹果包链接）
- `sitemap.html` 网站地图
- `apps.html` 应用
- `docs.html` 文档

需要登录的页面

- `home.html` 首页

- `finance.html` 资产
  - `finance-income.html` 收益
  - `finance-income-static.html` 静态收益
  - `finance-income-dynamic.html` 动态收益
  - `finance-withdrawal.html` 提现

- `me.html` 我的
  - `me-share.html` 分享（分享码、分享码二维码、复制下载链接）
  - `me-security.html 安全中心
  - `me-security-password-login.html` 修改登录密码
  - `me-security-password-payment.html` 修改支付密码
  - `me-realname.html` 实名认证
  - `me-payment.html` 支付方式 / 收款方式
  - `me-payment-bank.html` 银行卡
  - `me-payment-form.html` 支付方式编辑
  - `me-team.html` 团队结构
  - `me-message.html` 消息中心
  - `me-upgrade.html` 升级
  - `me-profile.html` 个人信息
  - `me-profile-form.html` 个人信息编辑
  - `me-customer-service.html` 客服
  - `me-about.html` 关于我们
  - `me-guide.html` 指导, 引导, 导向, 导, 向导, 指引
  - `me-feedback.html` 反馈
  - `me-help.html` 帮助
  - `me-settings.html` 设置
  - `me-contact.html` 联系我们

- `news.html` 消息
  - `news-message.html` 消息列表
  - `news-detail.html` 消息详情
  - `news-faq.html` 问答;常见问题解答

- `announcement.html` 公告
  - `announcement-detail.html` 公告详情

- `machine.html` 矿机列表
  - `machine-output.html` 产出
  - `machine-record.html` 收益记录

- `wallet.html` 资产；钱包
  - `wallet-recharge.html` 充值
  - `wallet-withdrawal.html` 提现
  - `wallet-transfer.html` 转账
  - `wallet-detail.html` 钱包各资产明细
  - `wallet-total-detail.html` 钱包总明细
  - `wallet-record.html` 钱包记录

- `trade.html` 交易
  - `trade-hall.html` 交易大厅
  - `trade-delegate.html` 发布委托单
  - `trade-order.html` 交易订单
  - `trade-order-detail.html` 交易订单详情
  - `trade-buy.html` 购买
  - `trade-sell.html` 出售

- `mall.html` 商城（store | shop）
  - `mall-cart.html` 购物车
  - `mall-order.html` 订单
  - `mall-product.html` 产品
  - `mall-events.html` 活动
  - `mall-retail.html` 零售

后台

- `user-add.html`
- `user-edit.html`
- `user-list.html`
- `user-tree.html`

- `sites.html` 网站


## 图片

参考
- [css命名规则]() > 工具 > background 背景
- [css命名规则]() > 组件 > icon 图标

形状
- 圆形 /circle/round
- 正方形 /square
- 长方形 /rectangle

颜色
- 深色 dark
- 浅色 light

尺寸
- xxs
- xs
- sm
- default
- lg
- xl
- xxl
- xxxl


## 简写

- `description` desc 描述
- `parameter` param 参数
- `submarine` sub 子元素
- `document` doc 文档
- `password` pwd/passwd 密码
- `template` tmp 或者 tpl 模板
- `temporary` temp 短暂的;暂时的;临时的
- `number` num 数字;编号;
- `administrators` admin 管理员
- `telephone` tel 电话
- `information` info 信息
- `multimedia` multi 多媒体
- `calculate` calc 计算;核算;预测;推测
- `multiple` multi adj.数量多的;多种多样的 n.倍数
- `statistic` stats n.统计数据;统计学
- `configuration` cfg 或者 config 配置
- `certificate` cert 证书
- `navigation` nav n.航行;导航;领航
- `expire` exp vi.(因到期而)失效，终止;到期;届满;逝世;去世;故去
- `reference` refs n.参考;说到(或写到)的事;提到;谈及;涉及;查询;查阅;(帮助或意见的)征求，征询;标记，标识，编号;推荐信;推荐人;参考书目vt.查阅;参考;给(书等)附参考资料 via https://www.php.net/manual/zh/refs.fileprocess.file.php
- `backgroud color` bgc 背景色
- `background` bg 背景
- `repositories` repos 仓库
- `option` opt 选项
- `miscellaneous` misc （人，物）混杂的，各种各样的；多方面的，多才多艺的

https://www.runoob.com/w3cnote/linux-command-full-fight.html - *Linux 常用命令全拼 | 菜鸟教程*

## 表单提交参数

注册

- [member_]`name` / [member_]`account` 账号
- [member_]`email` 邮箱
- [member_]`nickname` 昵称
- [member_]`truename` 真实姓名
- [member_]`sex` 性别
- [member_]`birthday` 生日
- [member_]`address` / [member_]`area_info` 详细地址/地区内容
- [member_]`mobile` 手机号码
- [member_]`email` 邮箱
- [member_]`password` 登录密码
- [member_]`password_confirm` / [member_]`repassword` 确认登录密码
- [member_]`payment_password` / [member_]`paypwd` 支付密码
- [member_]`payment_password_confirm` / [member_]`paypwd_confirm` / [member_]`repaypwd` 确认支付密码
- [member_]`security_password` 安全密码
- [member_]`security_password_confirm` 确认安全密码
- `captcha_normal` 图片验证码
- `sms_mobile` 短信手机号
- `sms_captcha` 短信验证码
- `email_captcha` 邮箱验证码
- `inviter_mobile` 邀请人手机号码
- `invitation_code` 邀请码
- `is_accept` 未勾选隐私政策注册协议

转账

- `to_member_mobile` 接收人手机号码
- `money` 金额
- `amount` 数量

按钮

- `view certificate` 查看证书
- `confirm` 确认
- `cancel` 取消
- `login` 登录
- `register` 注册
- `save` 保存
- `long press to save` 长按图片保存
- `download` 下载

## Apps 布局

> App名称：TokenPocket

Tabbar 底部导航栏

资产 Assets

市场 Market

发现 Discover

资讯 News

我的 Me

资产（Assets）页

我的资产 my assets

详情 details

转账 transfer
- 直接转账 transfer
  - 收款地址 receiver
  - 输入或粘贴钱包地址 enter or paste the wallet address
    - 地址簿 address book
    - 新建联系人 add contact
  - 转账金额 transfer amount
  - 请输入数量 please input amount
  - 全部 all
  - 钱包余额 wallet balance
  - 高级功能 advanced
  - 上链数据 input data
  - 该数据会写入区块链，并且消耗一定得费用 the data will be recorded on the blockchain and it will cost some fee
  - 确认 confirm
- 地址簿转账 contact
- 扫码转账 scan qrcode
- 转账历史 transfer history
收款 receive
- 扫一扫，向我支付 scan to pay
- 收款地址 receiver
- 分享 share
- 复制 copy
闪兑 swap
- 余额 bal
- 转出数量 pay amount
- 转入数量 receive amount
- 选择接收者钱包 receive address
- 接收者地址 recipient account
- 参考汇率 reference rate
- 手续费0.2%，矿工费及换币费自付，小额兑换将损失较大汇率 Fee 0.2%,pay miner fee and coin exchange fee by yourself
- 开始兑换 instant swap
- 交易记录 records
- 没有兑换记录 no swap record

搜索 search

更多工具 more

带宽/能量 resources

钱包列表 wallets

波场 tron

我知道了 i got it

创建钱包 create wallet

导入钱包 import wallet

取消 cancel

> App 名称：支付宝


## 弹层提示

下载页面提示
- IOS 暂未开放...

首页面提示
- 功能开发中...

复制提示
- 内容已复制
- 已复制到剪贴板！ copied to clipboard!
- 已保存图片至相册
- 图片保存成功

未分类
- 系统正忙，请稍后
- 加载中...
- 安装准备中
- 正在加载更多内容...
- 正在加载
- 今天的施肥次数已经用完啦，明天再来吧
- 忙不过来了，客官请稍后
- 订阅成功~
- 请刷新页面后提交 Refresh the page
