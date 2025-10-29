# 命名规则

## 开发者系列

### 变量名

> 变量的命名使用驼峰法（首字母小写），例如 `$tableName`、`$instance`

### 常量名

> 常量以大写字母和下划线命名，例如 `APP_PATH`

### 函数名

> 函数的命名使用小写字母和下划线（小写字母开头）的方式，例如 `get_client_ip`

### 类名

> 类的命名采用驼峰法（首字母大写），例如 `User`、`UserType`

#### 属性名

> 属性的命名使用驼峰法（首字母小写），例如 `tableName`、`instance`

#### 方法名

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

### HTML

#### 表单属性 name

格式：`[prefix_]<name>`

示例：

1. `member_name`
2. `member_email`

注册和登录

- `name` / `account` 账号
- `email` 邮箱
- `nickname` 昵称
- `truename` 真实姓名
- `sex` 性别
- `birthday` 生日
- `address` / `area_info` 详细地址/地区内容
- `mobile` 手机号码
- `email` 邮箱
- `password` 登录密码
- `password_confirm` / `repassword` 确认登录密码
- `payment_password` / `paypwd` 支付密码
- `payment_password_confirm` / `paypwd_confirm` / `repaypwd` 确认支付密码
- `security_password` 安全密码
- `security_password_confirm` 确认安全密码
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

### CSS

#### 属性 class

暂无

## 目录名

> 使用小写+下划线

`customize` - 自定义

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

格式：

```bash
[prefix-]<name>[-[shape|color|size]]<.[jpg|jpeg|png|gif]>
```

- `shape` - 形状
  - `circle` - 圆形
  - `round` - 圆角
  - `square` - 正方形
  - `rectangle` - 长方形

- `color` - 颜色
  - `dark` - 深色
  - `light` - 浅色

- `size` - 尺寸
  - `xxs`
  - `xs`
  - `sm`
  - `default`
  - `lg`
  - `xl`
  - `xxl`
  - `xxxl`

示例：

1. `cf-logo-square.jpg`
2. `cf-logo-dark.png`

参考：

1. [css命名规则]() > 工具 > background 背景
2. [css命名规则]() > 组件 > icon 图标

## 英语词汇

> English Vocabulary

> 专术 = 专业术语

`access denied` 拒绝访问

`execute` 执行

`avatar preview` 头像预览

`real time` 实时

`real name` 实名

`cheat sheet` 速查表 [via](https://www.markdown.xyz/cheat-sheet/)

`hashtags` n. 话题标签：社交媒体平台上用于标记和分类内容的关键词，以井号（#）开头。

https://mp.weixin.qq.com/s/Fyj79XgqzoYw9wfnQWzFcw - *你还在用for循环遍历list吗？*

- `filter` 过滤
- `map` 映射
- `sorted` 排序
    - `acsending` 升序
    - `descending` 降序
- `collect` 聚合

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
    - `temp` adj.短暂的;暂时的;临时的 n.临时工;临时雇员
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
- `thumbnails`
    - `thumb` 略缩图、预览图

参考：

1. https://www.runoob.com/w3cnote/linux-command-full-fight.html - *Linux 常用命令全拼 | 菜鸟教程*
2. https://gnu-linux.readthedocs.io/zh/latest/Chapter04/30_unix.abbreviation.html - *UNIX 缩写习惯 — Linux latest 文档*

### 分类

1. `category` `categories` 类别
2. `cross-platform` 跨平台的 [via](https://www.wireguard.com/xplatform/)
3. `multi-platform` 多平台的
4. `uncategorized` 未分类
5. `unsorted` 未分类的

### 文件

> `multi` 是 `multiple` 的缩写，意思是多个的，多种的

1. `apk`
2. `archive` 档案
3. `audio` 声音、音频
4. `avatar` 头像
5. `file` 文件
6. `folder` 文件夹
7. `image` 图像
8. `img_cache` 缓存的图像
9. `ipa`
10. `multifile` 多文件
11. `multimedia` 多媒体
12. `thumbnails` 略缩图、预览图

### 文档

https://zhuanlan.zhihu.com/p/456055339 - *【LaTeX】新手教程：从入门到日常使用 - 知乎*

### 网络

1. `traffic` 流量

### 体彩

1. `betting` 投注;打赌;打牌;下注;押宝
2. `lottery` 彩票
3. `odds` (事物发生的)可能性，概率，几率，机会;不利条件;掣肘的事情;逆境;投注赔率

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
2. `scope` 范围
3. `withdrawal` 提现

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

32. `cancel` 取消;撤销;终止;废除(具有法律效力的协议);盖销，注销(票或邮票)

33. `buy` 买，购买
34. `sell` 卖，出售

35. `withdraw` 提取

36. `purchase` 买;购买;采购
37. `sale` n. 出售;销售;销售量;销售部 [名词]

38. `rebate` 返利
39. `commission` 佣金

40. `diff` 级差
41. `peer` 同级
42. `rate` 评分
43. `yield` 产量
44. `profit` 收益

45. `sticker` 粘贴标签、贴纸
46. `statistics` 统计
47. `data`
48. `digits` 数字
49. `faqs` 解答
50. `notice` / `announcement` 公告

51. `invest` 投资
52. `task` 任务

53. `filter` 筛选

54. `ranking` 排名

55. `currency` 货币

56. `approved` 审核通过
57. `unapproved` 未审核通过

58. `accept` 接受（例：Accept All Cookies）
59. `reject` 拒绝;驳回（例：Reject All）

60. `retrieve` 找回;取回

61. `exchange` / `swap` 兑换 [ 不同币/币间兑换 ]
62. `convert` 划转 [ 币/币间划转 ]
63. `transfer` 转移；划转 [ 转给他人 ]

64. `rent` v.租用，租借(房屋、土地、机器等);出租;将…租给;(短期)租用，租借
65. `rerent` 续租（语义单词仅程序开发使用,英文词库无此单词）

66. `annotated` 含附注的
67. `tag` 标签

68. `search` 搜索
69. `filter` 过滤
70. `export` 导出/出口/输出
71. `import` 导入/入口/输入

72. `portage` 搬运/运费
73. `transport` 运输

74. `apportion` 分配
75. `proportion` 比例

76. `match` 匹配

77. `bad`
78. `good`
79. `perfect`

80. `shortage` 不足;缺少;短缺

81. `channel` 渠道

82. `account` 账号

83. `trash` 垃圾

84. `launch` 发动;发射;展开

85. `parses` 解析

86. `hex` 十六进制

87. `capture`

     vt.俘虏;俘获;捕获;用武力夺取;攻取;攻占;夺得;赢得;争得

     n.(被)捕获;(被)俘获

88. `interceptor` 拦截器

89. `library` 库

90. `plugin` 插件

91. `development` 开发
92. `production` 生产

93. `vendor` 第三方库

94. `permit` 允许;准许;使有可能

95. `profit` 利润, 盈利, 收益, 利, 利益, 润

96. `repeat` 重复

97. `allocate` v.拨…(给);划…(归);分配…(给)
98. `allocation`

99. `prompt` 提示
100. `tip` 提示 复数 `tips`
101. `remarks` 备注
102. `description` 说明;描述
103. `title` 标题
104. `details` 详情, 细节, 详, 内容, 枝节
105. `feature` 特征, 特性, 特点, 点, 面目, 详情

106. `helper` 帮手, 助手, 帮工, 义务, 合作者

107. `dot` 点;小点;小圆点;点(用以分隔域名、统一资源地址、电子邮件地址的组成部分)

108. `captcha` (图片)验证码(即全自动区分计算机和人类的图灵测试)

109. `per` prep.每;每一
110. `each` det./pron.(两个或两个以上的人或物中)各自，各个，每个

111. `last` det.最后的;最末的;末尾的;最近的;上一个的;仅剩下的;最终的
112. `recent` adj.近来的;新近的
113. `current` adj. 现在的，现行的
114. `prev` 上一个
115. `next` 下一个

116. `sign in` 登录 （到旅馆或俱乐部）签到，登记
117. `sign up` 注册
118. `sign out` 签名离开；签退

119. `announce` v.宣布;宣告(决定、计划等);(尤指通过广播)通知;声称;宣称

### 手势

https://m3.material.io/foundations/interaction/gestures - *Gestures – Material Design 3*

1. `gestures` n. 手势
2. `tap`
3. `scroll`
4. `swipe`
5. `drag`

### 层级

1. `main` adj.主要的;最重要的
2. `secondary` adj.次要的;从属的;辅助的;间接引发的;继发性的;次生的;中等教育的;中学的

### 时间

1. `start time` - 开始时间戳
2. `end time` - 结束时间戳
3. `start time format` - 格式化开始时间戳（输出格式：2022-7-11 20:00:00）
4. `end time format` - 格式化结束时间戳（输出格式：2022-7-11 20:00:00）

Day - 日

1. `Yesterday` - 昨天
2. `Today` - 今天
3. `Tomorrow` - 明天
4. `Now` - 现在
5. `Hour` - 时
6. `Minute` - 分
7. `Second` - 秒

Week - 星期

英文 | 缩写 | 中文
--- | --- | ---
`Sunday` | `SUN` | 周日
`Monday` | `MON` | 周一
`Tuesday` | `TUE` | 周二
`Wednesday` | `WED` | 周三
`Thursday` | `THU` | 周四
`Friday` | `FRI` | 周五
`Saturday` | `SAT` | 周六

Month - 月份

英文 | 缩写 | 中文
--- | --- | ---
`January` | `Jan.` | 一月
`February` | `Feb.` | 二月
`March` | `Mar.` | 三月
`April` | `Apr.` | 四月
`May` | `May` | 五月
`June` | `Jun.` | 六月
`July` | `Jul.` | 七月
`August` | `Aug.` | 八月
`September` | `Sep.` | 九月
`October` | `Oct.` | 十月
`November` | `Nov.` | 十一月
`December` | `Dec.` | 十二月

💡 很明显，12个月的英文缩写为其单词的前三个字母加上 “.” 。但要注意五月是 May，本身就只有三个字母，所以不用加点表缩写。

参考：

1. http://www.gaosan.com/gaokao/537440.html - *1-12月份的英语_高三网*

### 空间

1. `quota` n.定额;配额;限额;指标;定量;(候选人当选所需的)规定票数，最低票数

   via https://everhelper.me/client/ （登录后的 settings 中）

### 天气

1. `15-day forecast` - 查看近 15 日天气
2. `Clear` - 晴
3. `Cloudy` - 多云
4. `Haze` - 霾
5. `Light rain` - 小雨
6. `Mist` - 雾
7. `Moderate rain` - 中雨
8. `Overcast` - 阴
9. `Rain` - 雨
10. `Showers` - 阵雨
11. `Thunderstorm` - 雷阵雨
12. `Manage cities` - 城市管理
13. `Enter location` - 搜索位置
14. `24-hour forecast` - 24 小时预报
15. `East` - 东
16. `South` - 南
17. `West` - 西
18. `North` - 北
19. `Sunrise` - 日出
20. `Sunset` - 日落
21. `Humidity` - 温度
22. `Real feel` - 体感
23. `UV` - 紫外线
24. `Pressure` - 气压
25. `AQI` - 空气质量
26. `Force` - 风力

https://fanyi-app.baidu.com/static/passage/2022-07/2022-07-04/002/index.html - *为啥30℃气温热成狗，30℃洗澡水冻成猴？*

### 身份

1. `authorization` n.批准;授权;批准书;授权书
2. `authentication` n.身份验证;认证；鉴定

### 图表

1. `Area` - 面积图
2. `Bar` - 柱状图
3. `Candlestick` - K 线图
4. `Line` - 折线图
5. `Pie` - 饼图
6. `Scatter` - 散点图

https://echarts.apache.org/examples/zh/index.html - *Examples - Apache ECharts*

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

## 常见问题

### 变量 foo 和 bar 的由来

- foobar
- foo
- bar
- baz
- qux

参考：

1. https://blog.csdn.net/wangluqinglxq/article/details/27711295 - *变量foo 和 bar的由来_bar foo-CSDN博客*
2. https://cloud.tencent.com/developer/article/1360988 - *你所不知道的“foo”和“bar”-腾讯云开发者社区-腾讯云*
3. https://www.cnblogs.com/6duxz/p/8116646.html - *有趣的冷知识：编程中Foo, Bar 到底什么意思？ - 6度XZ - 博客园*
4. https://docs.pingcode.com/ask/64496.html - *foo到底是什么意思 – PingCode*
5. https://www.cnblogs.com/kenshinobiy/p/14256756.html - *编程中常见的Foo，是什么意思？ - 谦信君 - 博客园*
6. https://cloud.tencent.com/developer/article/2380231 - *为什么很多教程中都有 foo bar？-腾讯云开发者社区-腾讯云*

## 参考

1. [程序员英语词汇宝典](https://learn-english.dev/) - *程序员工作中常见的英语词汇* [GitHub Repo](https://github.com/Wei-Xia/most-frequent-technology-english-words)

    ![GitHub last commit](https://img.shields.io/github/last-commit/Wei-Xia/most-frequent-technology-english-words?color=blue&logo=github)
    ![GitHub Repo stars](https://img.shields.io/github/stars/Wei-Xia/most-frequent-technology-english-words?style=social)

2. https://mp.weixin.qq.com/s/cI_5vOeeDPRDIax7176jRw - *每个程序员必须掌握的常用英语词汇*
