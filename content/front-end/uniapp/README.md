## Index

官网：https://www.dcloud.io - *DCloud - HBuilder、HBuilderX、uni-app、uniapp、5+、5plus、mui、wap2app、流应用、HTML5、小程序开发、跨平台App、多端框架*

插件市场：https://ext.dcloud.net.cn

uni-app：https://uniapp.dcloud.io

HBuilder X：https://www.dcloud.io/hbuilderx.html

GitHub：https://github.com/dcloudio/uni-app



## FAQ

### Uniapp wgt热更新进度条异常

项目：`Nait`

时间：`2021/03/26`

问题：（问题解决耗时5小时）

Uniapp wgt热更新进度条异常

原因：

服务器没有响应`Content-Length`

![img](./_images/图片1.png) 

解决：

Apache 配置`mod_deflate.c`模块，添加`wgt`文件类型

![img](./_images/图片2.png) 



### HBuilder原生App云打包应用版本不一致提示

项目：`LOH`

时间：`2021/04/24`

问题：（问题解决耗时2小时）

uni-app运行环境版本和编译器版本不一致的问题

原因：

https://ask.dcloud.net.cn/article/35627

解决：

1. HBuilder编辑器版本升级（升级完重新启动编辑器）

2. 删除项目根目录`unpackage`文件夹（文件夹包含了旧版本的打包配置）

3. 卸载重装编辑器插件`App真机运行`、`uni-app编译`（完成后重新启动编辑器）

 
