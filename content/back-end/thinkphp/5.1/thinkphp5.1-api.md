| 错误码              | 错误解释                           |
| ------------------- | ---------------------------------- |
| 200 OK              | 请求成功                           |
| 400 INVALID REQUEST | 请求失败                           |
| 401 Unauthorized    | 没有权限（令牌、用户名、密码错误） |
| 404 NOT FOUND       | 数据不存在、为空                   |

1. 数据不存在、为空返回 `404`

   > `HTTP Status Code 404`

```php
if ($list->isEmpty()) {
	// 数据为空返回404
    return ApiResponse::NotFound();
}
```

2. 请求失败、无效的请求返回 `400`

   > `HTTP Status Code 400`

```php
// 请求失败
return ApiResponse::BadRequest();
```

