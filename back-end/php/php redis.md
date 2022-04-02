## 集群

`pconnect` 长链接方式

1. phpredis在扩展中使用c可以保持php-fpm到redis的长连接，所以一个php-fpm进程上的多个请求是复用同一个连接的。phpredis的pconnect就是长连接方式。
2. predis是使用php的socket来连接redis，所以需要每次请求连接redis。

## 数据类型

### 字符串

`string`

### 队列

`list`

### hash表

`hash`

### 有序集合

`sort set`

### 无序集合

`set`

## composer

`predis/predis`

<span class="icon octicon-file composer-icon medium-yellow "></span> <https://packagist.org/packages/predis/predis>



## github

`phpredis/phpredis`

<span class="icon octicon-file github-icon "></span> <https://github.com/phpredis/phpredis>



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

