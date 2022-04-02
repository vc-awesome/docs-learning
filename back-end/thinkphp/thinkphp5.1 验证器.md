## 验证规则

除了内置规则，还可以自定义验证规则

### 验证器内添加

[自定义验证规则](https://www.kancloud.cn/manual/thinkphp5_1/354102 "最后一行")



### 闭包验证

[方法定义](https://www.kancloud.cn/manual/thinkphp5_1/360141)



> 如果使用了闭包进行验证，则不再支持对该字段使用多个验证规则。



------

## 验证方式

### 验证器验证（模型验证）

### 独立验证

### 控制器验证

```php
$result = $this->validate(
    [
        'name'  => 'thinkphp',
        'email' => 'thinkphp@qq.com',
    ],
    'app\index\validate\User');

    if (true !== $result) {
        // 验证失败 输出错误信息
        dump($result);
    }
```

