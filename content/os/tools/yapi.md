# YApi

![YApi](https://hellosean1025.github.io/yapi/ydoc/images/dogbg@2x.png)

## 简介

> YApi 是一个可本地部署的、打通前后端及QA的、可视化的接口管理平台

![GitHub last commit](https://badgen.net/github/last-commit/YMFE/yapi?icon=github&color=blue)
![GitHub Release Date](https://img.shields.io/github/release-date/YMFE/yapi?logo=github)
![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/YMFE/yapi?logo=github)
![GitHub Repo stars](https://img.shields.io/github/stars/YMFE/yapi?style=social)

## 官方

GitHub：

1. https://github.com/YMFE/yapi/

主页：

1. ~~http://yapi.smart-xwork.cn/~~

文档：

1. 🐇 ~~http://yapi.smart-xwork.cn/doc/index.html~~
2. 🐢 https://hellosean1025.github.io/yapi/index.html

## 安装

### 部署

1. http://yapi.smart-xwork.cn/doc/devops/index.html - *⚠️ 推荐使用方式二安装，方式一无法安装*

2. https://github.com/YMFE/yapi#内网部署

参考：

1. https://www.cnblogs.com/1120lwk/p/14228385.html - *YApi搭建流程*

## 快速入门

### 数据导入

官方文档：

1. https://hellosean1025.github.io/yapi/documents/data.html - *数据导入-教程*

Postman 数据导入步骤：

1. postman 导出 collection 版本为 Collection v2
2. 使用 postman-collection-transformer 工具将 collection v2 转换成 collection v1 版本
   1. postman-collection-transformer
      - 下载链接：https://www.npmjs.com/package/postman-collection-transformer
   2. 命令行代码（使用 **Git Bash** 打开）

      ```powershell
      E:\> postman-collection-transformer convert \
      
      --input ./20220224_nimtech.postman_collection.json \
      
      --input-version 2.0.0 \
      
      --output ./20220224_nimtech.postman_collection_v1.0.0.json \
      
      --output-version 1.0.0 \
      
      --pretty --overwrite
      ```

3. 将转换后的文件 *./20220224_nimtech.postman_collection_v1.0.0.json* 导入至 *yapi* 接口管理平台

### mock

## FAQ

1. YApi-v1.9.2部署失败 *（Accessing non-existent property 'count' of module exports inside circular dependency）* 的解决方案

    https://www.cnblogs.com/KingJames/p/14341095.html

2. 安装yapi出现问题解决方式

    https://blog.csdn.net/qq_44837971/article/details/112566053

3. *node.js UnhandledPromiseRejectionWarning* 报错原因解决

    https://blog.csdn.net/qq_41329287/article/details/114984567
