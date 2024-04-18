# 命名规则

## 变量名

> 变量的命名使用驼峰法（首字母小写），例如 `$tableName`、`$instance`

## 常量名

> 常量以大写字母和下划线命名，例如 `APP_PATH`

## 函数名

> 函数的命名使用小写字母和下划线（小写字母开头）的方式，例如 `get_client_ip`

## 类名

> 类的命名采用驼峰法（首字母大写），例如 `User`、`UserType`

### 属性名

> 属性的命名使用驼峰法（首字母小写），例如 `tableName`、`instance`

### 方法名

> 方法的命名使用驼峰法（首字母小写），例如 `getUserName`


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

`logs` 获取 Xxx 的日志

例：

- 控制器 `Raise`
- 方法 `logs`
- 表示获取募集的日志

## 目录名

> 使用小写+下划线

## 文件名

> 小写+下划线命名

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
- `about-us.html` 关于我们

需要登录的页面

- `home.html` 首页

- `finance.html` 资产
  - `finance-income.html` 收益
  - `finance-income-static.html` 静态收益
  - `finance-income-dynamic.html` 动态收益
  - `finance-withdrawal.html` 提现

- `me.html` 我的
  - `me-share.html` 分享（分享码、分享码二维码、复制下载链接）
  - `me-security.html` 安全中心
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

## 图片名

参考
- [css命名规则]() > 工具 > background 背景
- [css命名规则]() > 组件 > icon 图标

形状
- 圆形 /`circle`/`round`
- 正方形 /`square`
- 长方形 /`rectangle`

颜色
- 深色 `dark`
- 浅色 `light`

尺寸
- `xxs`
- `xs`
- `sm`
- `default`
- `lg`
- `xl`
- `xxl`
- `xxxl`

## HTML

### 表单属性 name

注册和登录

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

## CSS

### 属性 class

暂无

## 布局

### TokenPocket

> App 名称：TokenPocket

Tabbar 底部导航栏

- 资产 `Assets`

- 市场 `Market`

- 发现 `Discover`

- 资讯 `News`

- 我的 `Me`

资产（Assets）页

- 我的资产 `my assets`

- 详情 `details`

转账 `transfer`
- 直接转账 `transfer`
  - 收款地址 `receiver`
  - 输入或粘贴钱包地址 `enter or paste the wallet address`
    - 地址簿 `address book`
    - 新建联系人 `add contact`
  - 转账金额 `transfer amount`
  - 请输入数量 `please input amount`
  - 全部 `all`
  - 钱包余额 `wallet balance`
  - 高级功能 `advanced`
  - 上链数据 `input data`
  - 该数据会写入区块链，并且消耗一定得费用 `the data will be recorded on the blockchain and it will cost some fee`
  - 确认 `confirm`
- 地址簿转账 `contact`
- 扫码转账 `scan qrcode`
- 转账历史 `transfer history`
收款 `receive`
- 扫一扫，向我支付 `scan to pay`
- 收款地址 `receiver`
- 分享 `share`
- 复制 `copy`
闪兑 `swap`
- 余额 `bal`
- 转出数量 `pay amount`
- 转入数量 `receive amount`
- 选择接收者钱包 `receive address`
- 接收者地址 `recipient account`
- 参考汇率 `reference rate`
- 手续费 0.2%，矿工费及换币费自付，小额兑换将损失较大汇率 `Fee 0.2%,pay miner fee and coin exchange fee by yourself`
- 开始兑换 `instant swap`
- 交易记录 `records`
- 没有兑换记录 `no swap record`

搜索 `search`

更多工具 `more`

带宽/能量 `resources`

钱包列表 `wallets`

波场 `tron`

我知道了 `i got it`

创建钱包 `create wallet`

导入钱包 `import wallet`

取消 `cancel`

### GitHub Mobile

1. `Home` 主页
2. `My Work` 我的工作
3. `Issues` 议题
4. `Pull Requests` 拉取请求
5. `Discussions` 讨论
6. `Repositories` 仓库
7. `Organizations` 组织
8. `Favorites` 收藏夹
9. `Shortcuts` 快捷键
10. `Notifications` 通知
11. `Explore` 探索
12. `Profile` 个人资料

### MIUI

1. `skip` 跳过
2. `settings` 设置
3. `wallpaper` 壁纸
4. `album` 相册
5. `gallery` 相册
6. `app info` 应用信息
7. `getapps` 应用商店
8. `floating windows` 小窗应用
9. 全部参数

手机布局

1. `status bar` 状态栏
2. `control center` 控制中心
3. `notifications` 通知
4. `lock screen` 锁屏通知
5. `floating` 悬浮通知
6. `badges` 桌面角标

应用商店

1. `accept` 接受
2. `deny` 拒绝
3. `allow` 允许
4. `sync` 同步
5. `install` 安装
6. `uninstall` 卸载
7. `share` 分享
8. `update` 更新
9. `connecting pending` 等待中
10. `holding` 等待安装
11. `verifying` 验证中
12. `installing` 安装中
13. `resume` 重新开始；（中断后）继续
14. `open` 打开
15. `ignore this time` 忽略这次
16. `always ignore` 总是忽略
17. `Non-system app updates` 非系统 app 更新
18. `System app updates` 系统 app 更新
19. `ignored apps` 已忽略的 app 
20. `update history` 更新历史 
21. `All apps are up to date` 所有应用程序都是最新的

### 弹层提示

下载页面提示
- IOS 暂未开放...

首页面提示
- 功能开发中...

复制提示
- 内容已复制
- 已复制到剪贴板！ `copied to clipboard!`
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
- 请刷新页面后提交 `Refresh the page`

## 英语词汇

> English Vocabulary

> 专术 = 专业术语

`access denied` 拒绝访问

`execute` 执行

`avatar preview` 头像预览

`real time` 实时

`real name` 实名

`cheat sheet` 速查表 [via](https://www.markdown.xyz/cheat-sheet/)

https://mp.weixin.qq.com/s/Fyj79XgqzoYw9wfnQWzFcw - *你还在用for循环遍历list吗？*

- filter 过滤
- map 映射
- sorted 排序
- collect 聚合

### 简写

- `description`
    - `desc` 描述
- `parameter`
    - `param` 参数
- `submarine`
    - `sub` 子元素
- `document`
    - `doc` 文档
- `password`
    - `pwd` / `passwd` 密码
- `template`
    - `tmp` 或者 `tpl` 模板
- `temporary`
    - `temp` 短暂的;暂时的;临时的
- `number`
    - `num` 数字;编号;
- `administrators`
    - `admin` 管理员
- `telephone`
    - `tel` 电话
- `information`
    - `info` 信息
- `multimedia`
    - `multi` 多媒体
- `calculate`
    - `calc` 计算;核算;预测;推测
- `multiple`
    - `multi` adj.数量多的;多种多样的 n.倍数
- `statistic`
    - `stats` n.统计数据;统计学
- `configuration`
    - `cfg` 或者 `config` 配置
- `certificate`
    - `cert` 证书
- `navigation`
    - `nav` n.航行;导航;领航
- `expire`
    - `exp` vi.(因到期而)失效，终止;到期;届满;逝世;去世;故去
- `reference`
    - `refs` n.参考;说到(或写到)的事;提到;谈及;涉及;查询;查阅;(帮助或意见的)征求，征询;标记，标识，编号;推荐信;推荐人;参考书目vt.查阅;参考;给(书等)附参考资料 [via](https://www.php.net/manual/zh/refs.fileprocess.file.php)
- `backgroud color`
    - `bgc` 背景色
- `background`
    - `bg` 背景
- `repositories`
    - `repos` 仓库
- `option`
    - `opt` 选项
- `miscellaneous`
    - `misc` （人，物）混杂的，各种各样的；多方面的，多才多艺的
- `favourite`
    - `fav` v. 把……添加到收藏夹；n. 特别喜爱的人（或事物）；最有希望获胜者；收藏夹，书签
- `download`
    - `dl` 下载 [via](https://docs.snipaste.com/zh-cn/download)

https://www.runoob.com/w3cnote/linux-command-full-fight.html - *Linux 常用命令全拼 | 菜鸟教程*

### 分类

1. `unsorted` 未分类的
2. `multi-platform` 多平台的
3. `cross-platform` 跨平台的 [via](https://www.wireguard.com/xplatform/)
4. `category` `categories` 类别
5. `uncategorized` 未分类

### 文件

> `multi` 是 `multiple` 的缩写，意思是多个的，多种的

1. `multifile` 多文件
2. `multimedia` 多媒体
3. `folder` 文件夹
4. `file` 文件
5. `archive` 档案
6. `thumb`（`thumbnails`） 略缩图、预览图
7. `audio` 声音、音频
8. `image` 图像
9. `img_cache` 缓存的图像
10. `avatar` 头像
11. `apk`
12. `ipa`

### 文档

https://zhuanlan.zhihu.com/p/456055339 - *【LaTeX】新手教程：从入门到日常使用 - 知乎*

### 网络

1. `traffic` 流量

### 体彩

1. `betting` 投注;打赌;打牌;下注;押宝
2. `odds` (事物发生的)可能性，概率，几率，机会;不利条件;掣肘的事情;逆境;投注赔率
3. `lottery` 彩票

### OTC

1. `confirm receipt` 确认收款
2. `get sale info` 获取出售信息
3. `get payment info` 获取付款信息
4. `upload cert` 上传交易凭证
5. `buyer` 买家
6. `seller` 卖家
7. `mobile` 手机号
8. `order sn` 订单号
9. `order no` 订单号

### 电商

1. `delivery time` 发货时间
2. `consignor`/`shipper`/`consigner` 发货人
3. `invoice` 发货单
4. `recipients` 收件人
5. `consignee` 收货人；受托人；承销人，受货人；代售人
6. `store` 店铺
7. `store name` 店铺名称
8. `price` 价格
9. `decimal` 价格的小数点
10. `number` 数量
11. `quantity` 数量
12. `total` 合计
13. `total price` 合计价格
14. `logistics` 物流
15. `evaluate` 评价
16. `available balance` 可用余额
17. `order` 订单
18. `order status` 订单状态
    1. 待付款
    2. 待发货
    3. 待收货
    4. 待评论
19. `return` 退货
20. `refund` 退款

参考：

1. https://fanyi-app.baidu.com/static/passage/2022-06/2022-06-24/003/index.html - *网购常见词：包邮、好评、退货，用英语怎么说？*
2. https://www.amazon.com/ - *Amazon.com. Spend less. Smile more.*

### 金融

1. `buy limit` 限价买进
2. `sell limit` 限价卖出
3. `buy stop` 止损买进
4. `sell stop` 止损卖出
5. `hedge` 对冲
6. `fund` 基金

参考：

1. http://blog.sina.com.cn/s/blog_666a7c730101a9q7.html - *4种挂单交易的讲解_simon_新浪博客*

### 名词

1. `canceller` 取消者
2. `withdrawal` 提现
3. `scope` 范围

### 动词

1. `add` 新增
2. `edit` 修改
3. `del` 删除
4. `status` 设置状态
5. `set` 设置
6. `bind` 绑定
7. `unbind` 解绑
8. `unbound` 未绑定
9. `get` 获取
10. `grant` 发放
11. `check` 检查
12. `upload` 上传
13. `modify` 修改
14. `release` 释放
15. `generate` 生成
16. `regenerate` 重新生成
17. `format` 格式化
18. `review` 审核;复查;重新考虑;回顾;反思;写(关于书籍、戏剧、电影等的)评论;评介
19. `query` 查询
20. `build` 构建;创建
21. `revise` 改变，修改(意见或计划);修改，修订(书刊、估算等);复习;温习
22. `correct` 改正;纠正;修正;批改;改;指出错误
23. `fix` 使固定;安装;决定，确定(日期、时间、数量等);安排;组织
24. `restore` 恢复(某种情况或感受);使复原;使复位;使复职;修复;整修
25. `repair` 修理;修补;修缮;补救;纠正;弥补
26. `renovate` 修复;翻新;重新粉刷
27. `join`

    v.参加;加入;连接;联合;接合;联结;结合;汇合;成为…的一员

    n.连接;结合;接合点

28. `quit`

    v.退出;戒掉;停止;离开(工作职位、学校等);离任;离校;离开，迁出，搬离(住处)

29. `view`
30. `preview`

    n.预览;预演;预展;预映;(报刊上有关电影、电视节目等的)预先评述，预告

    vt.为(影视节目)写预评;概述;扼要介绍

31. `iterate` vi.迭代(数学或计算过程，或一系列指令)

---

32. `cancel` 取消;撤销;终止;废除(具有法律效力的协议);盖销，注销(票或邮票)

---

33. `buy` 买，购买
34. `sell` 卖，出售

---

35. `withdraw` 提取

---

36. `purchase` 买;购买;采购
37. `sale` n. 出售;销售;销售量;销售部 [名词]

---

38. `rebate` 返利
39. `commission` 佣金

---

40. `diff` 级差
41. `peer` 同级
42. `rate` 评分
43. `yield` 产量
44. `profit` 收益

---

1. `temp` 临时
2. `temporary` adj.短暂的;暂时的;临时的 n.临时工;临时雇员
3. `sticker` 粘贴标签、贴纸
4. `statistics` 统计
5. `data`
6. `digits` 数字
7. `faqs` 解答
8. `notice` / `announcement` 公告

---

61. `invest` 投资
62. `task` 任务

---

63. `filter` 筛选

---

64. `ranking` 排名

---

65. `currency` 货币

---

66. `approved` 审核通过
67. `unapproved` 未审核通过

---

67. `accept` 接受（例：Accept All Cookies）
68. `reject` 拒绝;驳回（例：Reject All）

---

69. `retrieve` 找回;取回

---

70. `exchange` / `swap` 兑换 [ 不同币/币间兑换 ]
71. `convert` 划转 [ 币/币间划转 ]
72. `transfer` 转移；划转 [ 转给他人 ]

---

1. `rent` v.租用，租借(房屋、土地、机器等);出租;将…租给;(短期)租用，租借
2. `rerent` 续租（语义单词仅程序开发使用,英文词库无此单词）

---

76. `annotated` 含附注的
77. `tag` 标签

---

78. `search` 搜索
79. `filter` 过滤
80. `export` 导出/出口/输出
81. `import` 导入/入口/输入

---

82. `portage` 搬运/运费
83. `transport` 运输

---

84. `apportion` 分配
85. `proportion` 比例

---

86. `match` 匹配

---

87. `bad`
88. `good`
89. `perfect`

---

90. `shortage` 不足;缺少;短缺

---

91. `channel` 渠道

---

92. `account` 账号

---

93. `trash` 垃圾

---

1. `launch` 发动;发射;展开

---

98. `parses` 解析

---

99. `hex` 十六进制

---

100. `capture`

     vt.俘虏;俘获;捕获;用武力夺取;攻取;攻占;夺得;赢得;争得

     n.(被)捕获;(被)俘获

---

101. `interceptor` 拦截器

---

102. `library` 库

---

103. `plugin` 插件

---

104. `development` 开发
105. `production` 生产

---

106. `vendor` 第三方库

---

107. `permit` 允许;准许;使有可能

---

108. `profit` 利润, 盈利, 收益, 利, 利益, 润

---

109. `repeat` 重复

---

110. `allocate` v.拨…(给);划…(归);分配…(给)
111. `allocation`

---

112. `prompt` 提示
113. `tip` 提示 复数 `tips`
114. `remarks` 备注
115. `description` 说明;描述
116. `title` 标题
117. `details` 详情, 细节, 详, 内容, 枝节
118. `feature` 特征, 特性, 特点, 点, 面目, 详情

---

119. `helper` 帮手, 助手, 帮工, 义务, 合作者

---

120. `dot` 点;小点;小圆点;点(用以分隔域名、统一资源地址、电子邮件地址的组成部分)

---

121. `captcha` (图片)验证码(即全自动区分计算机和人类的图灵测试)

---

122. `per` prep.每;每一
123. `each` det./pron.(两个或两个以上的人或物中)各自，各个，每个

---

124. `last` det.最后的;最末的;末尾的;最近的;上一个的;仅剩下的;最终的
125. `recent` adj.近来的;新近的
126. `current` adj. 现在的，现行的
127. `prev` 上一个
128. `next` 下一个

---

129. `sign in` 登录 （到旅馆或俱乐部）签到，登记
130. `sign up` 注册
131. `sign out` 签名离开；签退

---

133. `announce` v.宣布;宣告(决定、计划等);(尤指通过广播)通知;声称;宣称

### 层级

1. `main` adj.主要的;最重要的
2. `secondary` adj.次要的;从属的;辅助的;间接引发的;继发性的;次生的;中等教育的;中学的

### 时间

1. `start time` 开始时间戳
2. `end time` 结束时间戳
3. `start time format` 格式化开始时间戳（输出格式：2022-7-11 20:00:00）
4. `end time format` 格式化结束时间戳（输出格式：2022-7-11 20:00:00）
5. `yesterday` 昨天
6. `today` 今天
7. `friday` 星期五
8. `now` 现在

月份

1. `January` - `Jan.` 一月
2. `February` - `Feb.` 二月
3. `March` - `Mar.` 三月
4. `April` - `Apr.` 四月
5. `May` - `May` 五月
6. `June` - `Jun.` 六月
7. `July` - `Jul.` 七月
8. `August` - `Aug.` 八月
9. `September` - `Sep.` 九月
10. `October` - `Oct.` 十月
11. `November` - `Nov.` 十一月
12. `December` - `Dec.` 十二月

💡 很明显，12个月的英文缩写为其单词的前三个字母加上 “.” 。但要注意五月是 May，本身就只有三个字母，所以不用加点表缩写。

参考：

1. http://www.gaosan.com/gaokao/537440.html - *1-12月份的英语_高三网*

### 空间

1. `quota` n.定额;配额;限额;指标;定量;(候选人当选所需的)规定票数，最低票数

   via https://everhelper.me/client/ （登录后的 settings 中）

### 天气

https://fanyi-app.baidu.com/static/passage/2022-07/2022-07-04/002/index.html - *为啥30℃气温热成狗，30℃洗澡水冻成猴？*

### 身份

1. `authorization` n.批准;授权;批准书;授权书
2. `authentication` n.身份验证;认证；鉴定

### 图表

1. `Line`
2. `Bar`
3. `Pie`
4. `Area`

### 审核

1. `success` 成功
2. `failure` 失败
3. `refuse` 拒绝
4. `pass` 通过
5. `approved` v.赞成;同意;批准，通过(计划、要求等);认可;核准
6. `fail` 失败
7. `finish` 完成
8. `complete` 完成
9. 待审核
10. 同步区块中
11. 提现成功
12. 提现驳回

### 单位

1. `Ten` 十
2. `Hundred` 百
3. `Thousand` 千
4. `Million` 百万
5. `Billion` 十亿

参考：

1. https://qb.zuoyebang.com/xfe-question/question/7e58dc921d8c5df0d63cc61df8d61f2d.html - *数量单位 英文字符十百千万十万百万千万亿十亿英文字符示例B是单词billion的缩写，1B＝10亿M是单词million的缩写，1M＝100万并非 计算机容量换算_作业帮*
2. https://qb.zuoyebang.com/xfe-question/question/b40440e99814c856b9060bf573908bc9.html - *英语里面的万,十万,百万,千万,亿,十亿,百亿,千亿.英语里没有“万”这个数量单位 所以用ten thousand（10千）表示“万”那么后来的十万,百万,千万,亿,十亿,百亿,千亿.怎么表示?_作业帮*

### 翻译

「PHP ⇋ JS」

- 语言翻译（在线谷歌翻译）

- PHP 格式语言翻译（直接翻译）

- JavaScript 格式语言翻译（使用工具 Notepad++）

  1. 去除制表符 `\t` ；

  2. `{\r\n` 替换成 `{\r\n"xxxxx` ；

  3. `,\r\n` 替换成 `,\r\n"xxxxx` ；

  4. `:` 替换成 `"=>` 。
  
  参考：
  
  1. https://jingyan.baidu.com/article/73c3ce2845a23ae50343d936.html - *如何使用notepad++查看和替换回车换行符-百度经验*

### 参考

1. [程序员英语词汇宝典](https://learn-english.dev/) - *程序员工作中常见的英语词汇* [GitHub Repo](https://github.com/Wei-Xia/most-frequent-technology-english-words)

    ![GitHub last commit](https://badgen.net/github/last-commit/Wei-Xia/most-frequent-technology-english-words?icon=github&color=blue)
    ![GitHub Repo stars](https://img.shields.io/github/stars/Wei-Xia/most-frequent-technology-english-words?style=social)

2. https://mp.weixin.qq.com/s/cI_5vOeeDPRDIax7176jRw - *每个程序员必须掌握的常用英语词汇*
