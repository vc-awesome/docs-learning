资源文件夹命名

## Link

[Tools > Docsify > Directory Structure](/tools/docsify?id=目录结构)

参考

- ThinkPHP https://www.kancloud.cn/manual/thinkphp6_0/1037483 *基础 > 目录结构*

- Bootstrap https://v5.bootcss.com/docs/getting-started/contents/ *快速入门 > 内容*



## 项目

扩展目录：_H:\√ 123456\╰ 公司项目\!! 统一格式文件分类_

扩展文件：_H:\√ 123456\╰ 公司项目\!! 统一格式文件分类\√ 统一格式文件分类.txt_

```text
 -- 参考 ydwxld
 ---------* 表示新建项目文件夹必加


<年月日>_<项目名>[_<主次 main|new|old>]/
├─ API/
├─ APP封装/
│  ├─ 图标，启动图/
│  │   ├─ 启动页.png
│  │   ├─ Android/
│  │   │  └─ 图标.png
│  │   └─ iOS/
│  │       └─ 图标.png
│  ├─ 正式安装包/
│  │   ├─ android/
│  │   │  └─ xxx-v1.0.0.apk
│  │   ├─ ios/
│  │   │  └─ xxx.ipa
│  │   └─ wgt/
│  │        └─ xxx.wgt
│  └─ 测试安装包/
├─ UI/ #蓝湖
│  ├─ PSD/
│  ├─ PxCook 软件/
│  ├─ 补充图/
│  ├─ 更新/
│  │   ├─ 第1更（年月日）
│  │   ├─ ……
│  │   └─ 第N更（年月日）
│  ├─ 其它（banner,logo...）/
│  ├─ 切图/
│  ├─ 效果图/
│  └─ 字体库/
├─ SSL证书/
├─ 更新记录/
│  ├─ 版本更新（年月日）.txt
│  └─ 版本更新具体操作（年月日）.txt
├─ 海报/
│  ├─ 第一期（包含图片、文案）
│  ├─ ……
│  └─ 第N期
├─ 活动/
├─ 文案/
├─ 操作指引/
├─ 开发详情/
│  ├─ 测试数据
│  ├─ 功能文档
│  ├─ 开发源码
│  ├─ 前端页面
│  │   ├─ 商品图片
│  │   ├─ 首页轮播图
│  │   │   └─ 第1版（版本迭代/文件夹）
│  │   └─ xxx_web.rar（项目前端源码）
│  ├─ 数据库设计
│  ├─ 系统logo
│  ├─ 系统优化
│  ├─ 需求分析
│  └─ 多语言翻译|中英译文/
├─ 视频/
├─ 数据库备份/ ---------*
│   # 命名格式(有数据)：数据库名称_年月日_时分秒.sql
│   # 命名格式(无数据)：数据库名称_年月日_时分秒_nodata.sql
├─ 数据表/
├─ 系统源码/ #命名格式：项目名称_年月日_时分秒.rar ---------*
│  ├─ 本地（含源码和sql）/
│  ├─ 前端/
│  │   ├─ h5/
│  │   └─ uniapp/
│  ├─ 后端/
│  │   └─ thinkphp/
│  │       ├─ cron.txt # 定时任务
│  │       └─ ...
│  ├─ 前后端/
│  │   └─ thinkphp/
│  └─ 波场/
│       └─ thinkphp/
├─ 项目参考/
├─ 项目图片/
│  └─ 首页轮播图/
├─ 项目文档/ ---------*
│  ├─ 开发文档/
│  │   └─ 开发文档.docx
│  ├─ 设计文档/
│  │   └─ 设计文档.docx
│  ├─ 修改文档/
│  │   └─ 修改文档.docx
│  ├─ 需求文档/
│  │   ├─ xxx「原文档」.docx
│  │   └─ 需求文档.docx
│  └─ * 年月日_项目名_模板.docx
├─ ⭐ 线上最新备份（备份内容：代码、数据库、定时任务）
├─ 账号密码/
├─ 范例 --todo.txt
├─ 范例 --时间轴.txt ---------*
├─ 范例 --网站网址.txt ---------*
├─ 范例 --项目部署.md ---------*
├─ 范例 --项目域名.md ---------*
├─ 范例 --账号密码.txt ---------*
└─ 范例 --以下项目资料 --<项目名称>.txt
```



## 前端

### Custom ✨

> 自定义目录结构

参考站点：

1️⃣ https://gamium.world/ 🇺🇸

2️⃣ https://unpkg.com/fontawesome-free/

```markdown
myproject
+-- pages
│  +-- login
+-- static
│  +-- css
│      +-- custom.css //自定义样式
│      +-- main.css //主样式
│      +-- style.css //全局样式
│      +-- fonts.css //字体样式
│      +-- modal.css
│      +-- index.css
│      +-- default.css
│  +-- font
│  +-- images
│  +-- img
│  +-- js
│      +-- data.js //中英文数据
│      +-- main.js
│      +-- website.js
│  +-- media
│  +-- pdf
│  +-- picture
│  +-- videos
│  +-- libs //扩展库
│      +-- bootstrap
│          +-- css
│          +-- js
+-- 404.html
+-- index.html
```

### Web

> 资源存放

参考 Bootstrap 源码：

- :cn: https://v5.bootcss.com/docs/getting-started/contents

- :us: https://getbootstrap.com/docs/5.1/getting-started/contents/

```markdown
# 每个页面对应一个css文件，例如：blog页面文件夹下有index.html 和 blog.css
assets/
├─ dist/ #构建目录
│  ├─ css/
│  └─ js/
├─ site/
│  └─ content/
│      └─ docs/ #文档目录
│          └─ 5.1/
│              └─ examples/
├─ js/
└─ scss/
```


### Uni-app

> 资源存放

```text
# 含带 * 号表示官方说明
project/ #目录结构
├─ common/ # 外部引入的css及js文件存放目录
│  ├─ locales/ #语言包
│  │  ├─ my.js #马来语
│  │  ├─ en.js #英文
│  │  └─ zh.js #中文
│  ├─ clipboard.js #APP平台复制文件至粘贴板
│  ├─ custom.css #自定义样式
│  ├─ helper.js #助手函数
│  ├─ http.interceptor.js #拦截器 --from uview
│  ├─ http.api.js #*API集中管理 --from uView
│  ├─ util.js #工具类
│  └─ ...
├─ components #*符合vue组件规范的uni-app组件目录
│  ├─ 项目组件 #仅适用于单一项目
│  └─ 公共组件 #可适用所有项目
├─ js_sdk/ #uniapp官方插件市场
│  ├─ mmmm-image-tools #图像转换工具，可用于图像和base64的转换
│  └─ ...
├─ node_modules/ #npm安装模块
│  └─ vue-i18n/ #多语言
├─ pages/ #页面命名参考本文档 [位置]
│  └─ login/ #未登录可访问的页面
│      ├─ download.vue
│      ├─ forgetPassword.vue
│      ├─ login.vue
│      ├─ register.vue
│      └─ start.vue #启动页面（启动视频、启动图片 etc）
│  └─ tabbarA/
│      └─ index.vue
│  └─ tabbarB/
│      └─ index.vue
│  └─ tabbarC/
│      ├─ me.vue #我的页面
│      ├─ meShare.vue #分享页面
│      └─ index.vue
├─ static/ #更多可查看后端资源存放
│  * css、less/scss 等资源不要放在 static 目录下，建议这些公用的资源放在自建的 common 目录下
│  * static 目录下的 js 文件不会被编译，如果里面有 es6 的代码，不经过转换直接运行，在手机设备上会报错
│  * 存放应用引用的本地静态资源（如图片、视频等）的目录，注意：静态资源只能存放于此
│      ├─ images|imgs/
│      │   ├─ avatar/ #头像
│      │   │   ├─ avatar-square.png #圆角方形
│      │   │   └─ avatar-circle.png #圆形
│      │   ├─ background/ #背景图
│      │   │   └─ bg-i-user.png #图片背景
│      │   └─ empty/ #内容为空 --from uView的Empty组件
│      │	    └─ empty-message.png #消息列表为空
│      │   ├─ start/
│      │   │   └─ start-image.png #启动图
│      │   ├─ common/
│      │   ├─ icon/
│      │   │   └─ icon-upload.png #上传图标
│      │   ├─ logo/
│      │   │   └─ logo.png
│      │   └─ tabbarA/ #底部标签页A、B、C...内的图片
├─ store/ #vuex状态管理
│      └─ index.js
├─ utils/ #工具集，从uniapp插件导入的插件
├─ App.vue
├─ main.js
├─ manifest.json
├─ pages.json
└─ uni.scss
```



## 后端

> ThinkPHP 资源存放：
>
> - public/admin
>
> - public/home
>
> - public/index

```text
ThinkPHP 资源存放：public/static/home/default/
├─ css/
├─ demo/
├─ js/
├─ fonts/
├─ images|imgs/
│  ├─ icon/
│  │  ├─ icon-home.png 未选中
│  │  ├─ icon-home-o.png 选中
│  │  ├─ icon-home-dark.png 深色图标
│  │  ├─ icon-home-light.png 浅色图标
│  │  ├─ icon-home-line.png 线性图标
│  │  ├─ icon-home-fill.png 填充图标 --from uView的icon组件
│  │  └─ icon-upload.png
│  ├─ background|bg/
│  │ 	└─ bg-i-share.png
│  ├─ banner/
│  │  └─ banner-radius.png 圆角轮播图
│  │ 	├─ banner-square.png 方形轮播图
│  │ 	├─ banner-round-a.png 圆形轮播图
│  │ 	├─ banner-round-b.png 圆形轮播图
│  │ 	└─ banner-round-c.png 圆形轮播图
│  ├─ logo/
│  │ 	├─ logo.png
│  │ 	└─ logo-text.png 文字logo
│  ├─ adv/ 广告图
│  ├─ tmp/ 临时图片，例如后台可更改的产品图片
│  │ 	└─ qrcode.png
│  ├─ avatar/ 头像
│  └─ empty/ 内容为空 --from uView的Empty组件
│    	└─ empty-message.png 消息列表为空
├─ lib|libs/ 用lib或者用libs，加s表示复数
├─ pdf/
├─ plug-ins|plugins/
├─ uploads/ 前后台上传的资源
└─ utils/ 工具集 （百度翻译：工具类;效用;实用工具;实用菜单）
```

- Tips:
  1. *uploads* 文件夹占用空间大，建议存放至 *public* 目录下，方便其它文件夹的转移
  2. 如果为了安全考虑，可把 *uploads* 文件夹放到系统的根目录
