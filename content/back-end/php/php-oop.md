# 面向对象

## 简介

> 面向对象（Object-Oriented，简称 OO）是一种编程思想和方法，它将程序中的数据和操作数据的方法封装在一起，形成"对象"，并通过对象之间的交互和消息传递来完成程序的功能。面向对象编程强调数据的封装、继承、多态和动态绑定等特性，使得程序具有更好的可扩展性、可维护性和可重用性。
>
> 在面向对象的程序设计（英语：Object-oriented programming，缩写：OOP）中，对象是一个由信息及对信息进行处理的描述所组成的整体，是对现实世界的抽象。
>
> 在现实世界里我们所面对的事情都是对象，如计算机、电视机、自行车等。

## 教程

1. https://www.php.net/manual/zh/language.oop5.php - *PHP: 类与对象 - Manual*
2. https://www.runoob.com/php/php-oop.html - *PHP 面向对象 | 菜鸟教程*

## 入门指南

### 类

```php
<?php
class phpClass {
  var $var1;
  var $var2 = "constant string";
  
  function myfunc ($arg1, $arg2) {
     [..]
  }
  [..]
}
?>
```

```php
<?php
class Site {
  /* 成员变量 */
  var $url;
  var $title;
  
  /* 成员函数 */
  function setUrl($par){
     $this->url = $par;
  }
  
  function getUrl(){
     echo $this->url . PHP_EOL;
  }
  
  function setTitle($par){
     $this->title = $par;
  }
  
  function getTitle(){
     echo $this->title . PHP_EOL;
  }
}
?>
```

#### 成员变量（属性）

https://www.php.net/manual/zh/language.oop5.properties.php - *PHP: 属性 - Manual*

#### 成员函数（方法）

#### 类的内部调用

非静态：

`$this` 伪变量

由于静态方法不需要通过对象即可调用，所以伪变量 `$this` 在静态方法中不可用

`->` 对象运算符

```php
$this->property
```

静态：

- `self`
- `static`

不可以由对象通过 `->` 操作符来访问

```php
self::$property
```

引用父类：

`parent`

### 对象（类的实例）

```php
$runoob = new Site;
$taobao = new Site;
$google = new Site;
```

### 构造函数

```php
void __construct ([ mixed $args [, $... ]] )
```

#### 调用父类构造方法

```php
function __construct() {
    parent::__construct();  // 子类构造方法不能自动调用父类的构造方法
    print "SubClass 类中构造方法" . PHP_EOL;
}
```

### 析构函数

```php
void __destruct ( void )
```

### 访问控制（可见性）

#### public（公有）

被定义为公有的类成员可以在任何地方被访问

#### protected（受保护）

被定义为受保护的类成员则可以被其自身以及其子类和父类访问

#### private（私有）

被定义为私有的类成员则只能被其定义所在的类访问

### 常量

https://www.php.net/manual/zh/language.oop5.constants.php - *PHP: 类常量 - Manual*

只能用静态方式访问

### static 关键字

静态属性

```php
public static $my_static = 'foo';
```

静态方法

```php
public static function aStaticMethod() {
    // ...
}
```

### Final 关键字

暂无

### 抽象类 abstract

### 对象接口 interface

> [PHP手册 > 语言参考 > 类与对象](https://www.php.net/manual/zh/language.oop5.interfaces.php)

### 代码复用 trait

`use`

### 魔术方法

#### 属性重载

`__set`

在给不可访问属性赋值时，[__set()](https://www.php.net/manual/zh/language.oop5.overloading.php#object.set) 会被调用

```php
public __set ( string $name , mixed $value ) : void
```

`__get`

读取不可访问属性的值时，[__get()](https://www.php.net/manual/zh/language.oop5.overloading.php#object.get) 会被调用

```php
public __get ( string $name ) : mixed
```

`__isset`

当对不可访问属性调用 [isset()](https://www.php.net/manual/zh/function.isset.php) 或 [empty()](https://www.php.net/manual/zh/function.empty.php) 时，[__isset()](https://www.php.net/manual/zh/language.oop5.overloading.php#object.isset) 会被调用

```php
public __isset ( string $name ) : bool
```

`__unset`

当对不可访问属性调用 [unset()](https://www.php.net/manual/zh/function.unset.php) 时，[__unset()](https://www.php.net/manual/zh/language.oop5.overloading.php#object.unset) 会被调用

```php
public __unset ( string $name ) : void
```

> 参数 `$name` 是指要操作的变量名称。[__set()](https://www.php.net/manual/zh/language.oop5.overloading.php#object.set) 方法的 `$value` 参数指定了 `$name` 变量的值。
>
> 属性重载只能在对象中进行。在静态方法中，这些魔术方法将不会被调用。所以这些方法都不能被 声明为 [static](https://www.php.net/manual/zh/language.oop5.static.php)。从 PHP 5.3.0 起, 将这些魔术方法定义为 `static` 会产生一个警告。

#### 方法重载

`__call`

在对象中调用一个不可访问方法时，[__call()](https://www.php.net/manual/zh/language.oop5.overloading.php#object.call) 会被调用。

```php
public __call ( string $name , array $arguments ) : mixed
```

`__callStatic`

在静态上下文中调用一个不可访问方法时，[__callStatic()](https://www.php.net/manual/zh/language.oop5.overloading.php#object.callstatic) 会被调用。

```php
public static __callStatic ( string $name , array $arguments ) : mixed
```

> `$name` 参数是要调用的方法名称。
> `$arguments` 参数是一个枚举数组，包含着要传递给方法 `$name` 的参数。
