官方文档看至：`控制器->空控制器`

> 类私有属性、方法命名方式：_parseType，通常下划线开头的方法属于私有方法；



## sql 批量更新

```php
/*
批量更新
@ $table_name 表名全名
@ data 更新的数据 二位数组
@ 返回执行行数
@ 老-猫 2017-08-02
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



**Thinkphp3.2 `assign()`/`display()`方法 要区分大小写**

`APP_DEBUG true`调试模式下不区分大小写

`APP_DEBUG false`非调试模式下区分大小写

 

`display()`方法

例子：`display('taskadd');` 对应的静态页面命名必须是taskadd.html

注意大小写要对应，不然在Linux下会找不到模板

`assign()`方法

例子：`assign('tasklist', $taskList);` 在模板页使用时，只能用name="tasklist"

大小写要一定得对应，不然报错。
