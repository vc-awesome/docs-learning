todo...

## node学习笔记

Node.js官网 > https://nodejs.org/zh-cn/

Node.js中文网 > 
http://nodejs.cn/

Node.js淘宝镜像 > https://npm.taobao.org/mirrors/node/



## node教程

<https://www.runoob.com/nodejs/nodejs-tutorial.html>



## node命令行

查看当前版本 `node --version`



## npm命令行

查看版本

`
npm -v`

版本升级

`
npm install npm` # 本地升级

`npm install npm -g` # 全局升级

使用淘宝镜像升级

`
npm install -g cnpm --registry=https://registry.npm.taobao.org`

查看全局安装的模块

`
npm list -g`

查看`grunt`模块的版本号

`npm list grunt`



## nvm命令行

> `nvm`管理不同版本的`node`与`npm`

https://www.runoob.com/w3cnote/nvm-manager-node-versions.html

https://www.cnblogs.com/gaozejie/p/10689742.html

### 安装nvm

安装`node/npm
nvm install [版本号，例：14.22.1]`

卸载`node/npm
nvm unistall [版本号，例：14.22.1]`

切换`node/npm
nvm use [版本号，例：14.22.1]`

列出已安装`node
nvm ls`

列出远程服务器上所有可用版本

linux/macos

`mvm ls-remote`


windows

`nvm ls available`

### FAQ


[利用nvm安装npm失败的解决办法](https://blog.csdn.net/N1keo/article/details/89971307)

[如何切换node的版本？](https://www.html.cn/qa/node-js/11997.html)

