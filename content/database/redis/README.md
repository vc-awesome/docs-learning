## 简介

> Redis is an open source (BSD licensed), in-memory data structure store, used as a database, cache, and message broker. Redis provides data structures …

## 官方

官方链接：https://redis.io/

中文链接：http://www.redis.cn/



## 安装

## 命令行

cmd 切换至 redis 所在目录

### 开启

```bash
redis-server.exe redis.windows.conf --开启 redis 服务
redis-cli.exe -h 127.0.0.1 -p 6379 --访问服务端（开启另一个 cmd 窗口）
```



### 配置

```bash
config get [config_setting_name] --获取配置信息（使用 * 号获取所有配置项）
config set [config_setting_name] [new_config_value] --设置配置值
```



## 数据类型

- 字符串 `string`

- 队列 `list`

- hash表 `hash`

- 有序集合 `sort set`

- 无序集合 `set`

## PHP

### 安装

#### Linux

https://www.php.cn/php-ask-479206.html - *php redis怎么安装*

1. 下载 phpredis ；
2. 解压安装包并进入解压后的目录；
3. 在当前目录下生成 configure 配置文件；
4. 编译安装；
5. 在 php.ini 加载 phpredis 扩展。

### Composer

`predis/predis`

<span class="icon octicon-file composer-icon medium-yellow "></span> <https://packagist.org/packages/predis/predis>



### GitHub

`phpredis/phpredis`

<span class="icon octicon-file github-icon "></span> <https://github.com/phpredis/phpredis>

## 集群

`pconnect` 长链接方式

1. phpredis 在扩展中使用 c 可以保持 php-fpm 到 redis 的长连接，所以一个 php-fpm 进程上的多个请求是复用同一个连接的。phpredis 的 pconnect 就是长连接方式。
2. predis 是使用 php 的 socket 来连接 redis，所以需要每次请求连接 redis。

