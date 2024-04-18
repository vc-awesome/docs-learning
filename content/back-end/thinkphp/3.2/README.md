# ThinkPHP 3.2

## 官方

https://www.kancloud.cn/manual/thinkphp - *ThinkPHP3.2.3完全开发手册 · 看云*

官方文档看至：[控制器->空控制器](https://www.kancloud.cn/manual/thinkphp/1724)

> 类私有属性、方法命名方式：_parseType，通常下划线开头的方法属于私有方法；

## 模型

### 自动验证

https://www.kancloud.cn/manual/thinkphp/1776 - *自动验证 · ThinkPHP3.2.3完全开发手册 · 看云*

参考：

1. https://www.cnblogs.com/zhengfengyun/p/6135096.html - *掌握 Thinkphp3.2.0---- 自动验证 - xz 小郑 - 博客园*

### SQL 批量更新

```php
/**
 * 批量更新
 * @ $table_name 表名全名
 * @ data 更新的数据 二位数组
 * @ 返回执行行数
 * @ 老-猫 2017-08-02
*/
function batch_update($table_name='',$data=array(),$field=''){

    if(!$table_name||!$data||!$field){
        return false;
    }else{
        $sql='UPDATE '.$table_name;
    }

    $con = array();
    $con_sql = array();
    $fields = array();

    foreach ($data as $key => $value) {

        $x=0;
        foreach ($value as $k => $v) {

            if ($k!=$field && !$con[$x] && $x==0){
                $con[$x]=" set {$k} = (CASE {$field} ";
            } elseif ($k != $field && !$con[$x] && $x>0) {
                $con[$x]=" {$k} = (CASE {$field} ";
            }

            if($k!=$field){
                $temp=$value[$field];
                $con_sql[$x].= " WHEN '{$temp}' THEN '{$v}' ";
                $x++;
            }
        }

        $temp=$value[$field];

        if (!in_array($temp,$fields)) {
            $fields[] = $temp;
        } 
    
    }
    $num=count($con)-1;

    foreach ($con as $key => $value) {

    foreach ($con_sql as $k => $v) {

    if($k==$key&&$key<$num){$sql.=$value.$v.' end),';}

    elseif($k==$key&&$key==$num){$sql.=$value.$v.' end)';}
    }
    }
    $str=implode(',',$fields);
    $sql.=" where {$field} in({$str})";
    $res = M()->execute($sql);
    //$res =$sql;
    return $res;
}
```

## 安全

### 表单令牌

https://www.kancloud.cn/manual/thinkphp/1843 - *表单令牌 · ThinkPHP3.2.3完全开发手册 · 看云*

参考：

1. https://blog.csdn.net/slpond/article/details/54286250 - *thinkphp 表单令牌使用 - CSDN 博客*

## 专题

### 多语言支持

https://www.kancloud.cn/manual/thinkphp/1874 - *多语言支持 · ThinkPHP3.2.3完全开发手册 · 看云*

参考：

1. https://blog.csdn.net/u014796999/article/details/48550361 - *thinkphp 框架之关于网站语言包的设置和使用（多语言支持）_网站三个语言包怎么设置默认 - CSDN 博客*

2. https://www.thinkphp.cn/topic/39631.html - *thinkphp 3.2.3 实现中英网站分享一下 - ThinkPHP 框架*

## 函数

### 单字母大写函数

> 函数库存储在框架系统中的 `ThinkPHP\Model\Api\functions.php` 中。

C：获取和设置配置参数（支持批量定义）

E：抛出异常处理

G：记录和统计时间（微秒）和内存使用情况

L：获取和设置语言定义（不区分大小写）

T：获取模版文件（格式：`资源://模块@主题/控制器/操作`）

I：获取输入参数（支持过滤和默认值）

N：设置和获取统计数据

F：快速文件数据读取和保存（针对简单类型数据：字符串、数组）

S：缓存管理

W：渲染输出 Widget

U：URL 组装（支持不同 URL 模式）

B：执行某个行为

R：远程调用控制器的操作方法（URL 参数格式：`[资源://][模块/]控制器/操作`）

A：实例化多层控制器（格式：[资源://][模块/]控制器）

M：实例化一个没有模型文件的 Model

D：实例化模型类（格式：`[资源://][模块/]模型`）

## 常见问题

### `assign()` / `display()`方法要区分大小写

`APP_DEBUG true` 调试模式下不区分大小写

`APP_DEBUG false` 非调试模式下区分大小写

`display()` 方法：

例子：`display('taskadd');` 对应的静态页面命名必须是 `taskadd.html`

注意大小写要对应，不然在 Linux 下会找不到模板

`assign()` 方法：

例子：`assign('tasklist', $taskList);` 在模板页使用时，只能用 `name="tasklist"`

大小写要一定得对应，不然报错。
