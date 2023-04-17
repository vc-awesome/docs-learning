## 单项散列加密

> 不可逆



### PHP 加密函数

1. md5

2. hash

3. crypt

4. sha1



## 对称加密

> - 可逆
> - 加解密用同一秘钥（秘钥加密、秘钥解密）



### PHP 加密函数

1. `base64_encode`加密，`base64_decode`解密

2. `urlencode`加密，`urldecode`解密



### DES

- 模式

  - CBC

  - ECB

> `openssl`  

https://www.yisu.com/zixun/123259.html - *PHP7实现OpenSSL DES-EDE-CBC加密和解密*

http://www.36nu.com/post/252 - *php使用openssl扩展实现des加解密方法*

> `mcrypt`  
> `PHP < 7.2.0`

https://blog.csdn.net/xzykai/article/details/78932206 - *PHP版DES算法加密数据（3DES）*

https://www.cnblogs.com/forforever/p/12674203.html - *Des加密算法的PHP实现*

https://www.cnblogs.com/laushow/p/9086745.html - *PHP DES加密解密*



### AES

AES 是 DES 的升级版，密钥长度更长，选择更多，也更灵活，安全性更高，速度更快。

> `openssl`  

https://www.jb51.net/article/126021.htm - *AES加解密代码*

https://www.cnblogs.com/lvjiefly/p/12624830.html - *PHP使用OpenSSL实现AES加密的笔记*

> `mcrypt`  
> `PHP < 7.2.0`

https://www.jb51.net/article/189421.htm - *如何在PHP中使用AES加密算法加密数据*

https://www.jb51.net/article/128149.htm - *对称加密算法（DES/AES）类的实现代码*



### HMAC

https://blog.csdn.net/dengjiexian123/article/details/53313913 - *php中使用hash_hmac函数实现HMAC-SHA1签名算法的来龙去脉*

自定义

https://www.xiabingbao.com/encrypt/2016/09/04/php-simple-encrypt.html - *简单对称加密算法*



## 非对称加密

https://blog.csdn.net/clh604/article/details/20224735 - *php rsa加密解密实例*

https://www.cnblogs.com/chenhaoyu/p/10695245.html - *PHP RSA加解密详解*

https://blog.csdn.net/u014294681/article/details/86705999 - *加解密篇 - 非对称加密算法 (RSA、DSA、ECC、DH)*



### RSA

> - 可逆
> - 加解密秘钥不同（公钥加密、私钥解密）

1. 下载 RSA 密钥生成工具 `openssl`

   - Windows

     https://www.cnblogs.com/dshvv/p/12271280.html - *windows安装OpenSSL*

   - Linux

     通常 Linux 系统自带该工具


2. 生成 RSA 密钥

   > 使用 `openssl` 工具生成

   

   ```bash
   > openssl genrsa -out rsa_private_key.pem 1024 #生成原始 RSA私钥文件
   > openssl pkcs8 -topk8 -inform PEM -in rsa_private_key.pem -outform PEM -nocrypt -out private_key.pem #将原始 RSA私钥转换为 pkcs8格式
   > openssl rsa -in rsa_private_key.pem -pubout -out rsa_public_key.pem #生成RSA公钥 rsa_public_key.pem
   ```

   

3. RSA 函数

   

   ```php
   class RSA
   {
       /**
        * @param string $str 要加密的数据
        * @param string $public_key 公钥
        * @return string
        */
       static public function encrypt($str, $public_key) {
   
           $encrypted = '';
           $pu_key = openssl_pkey_get_public($public_key);
           openssl_public_encrypt($str, $encrypted, $pu_key);//公钥加密
   
           $encrypted = base64_encode($encrypted);
   
           return $encrypted;
       }
   
       /**
        * 解密
        * @param string $str 要解密的数据
        * @param string $private_key 私钥
        * @return string
        */
       static public function decrypt($str, $private_key) {
   
           $decrypted = '';
           $pi_key =  openssl_pkey_get_private($private_key);
           openssl_private_decrypt(base64_decode($str), $decrypted, $pi_key);//私钥解密
   
           return $decrypted;
       }
   }
   ```

   

### DSA



### ECC



### DH



## 字符串加密

https://www.cnblogs.com/kinwing/p/11450904.html - *6种php加密解密方法*



## 数组加密

```php
namespace crypto;
class CryptoArray {
    // 设置加密种子
    public static $key_t = "sjiofssdsfd";
	// 加密函数(参数:数组，返回值:字符串)
    public static function encrypt($cookie_array){
        $txt = serialize($cookie_array);
        srand();//生成随机数
        $encrypt_key = md5(rand(0,10000));//从0到10000取一个随机数
        $ctr = 0;
        $tmp = '';
        for($i = 0;$i < strlen($txt);$i++){
            $ctr = $ctr == strlen($encrypt_key) ? 0 : $ctr;
            $tmp .= $encrypt_key[$ctr].($txt[$i] ^ $encrypt_key[$ctr++]);
        }
        return base64_encode(Haxi::key($tmp,Haxi::$key_t));
    }
     
    // 解密函数(参数:字符串，返回值:数组)
    public static function decrypt($txt){
        $txt = Haxi::key(base64_decode($txt), Haxi::$key_t);
        $tmp = '';
        for($i = 0;$i < strlen($txt); $i++) {
            $md5 = $txt[$i];
            $tmp .= $txt[++$i] ^ $md5;
        }
        $tmp_t = unserialize($tmp);
        return $tmp_t;
    }
    
    public static function key($txt,$encrypt_key){
        $encrypt_key = md5($encrypt_key);
        $ctr = 0;
        $tmp = '';
        for($i = 0; $i < strlen($txt); $i++) {
            $ctr = $ctr == strlen($encrypt_key) ? 0 : $ctr;
            $tmp .= $txt[$i] ^ $encrypt_key[$ctr++];
        }
        return $tmp;
    }
}
```

参考：https://www.cnblogs.com/chenliuxiao/p/12482095.html - *PHP数组加密解密*



## 参考链接

https://www.php.cn/php-weizijiaocheng-399378.html - *PHP对称加密函数实现数据的加密解密详解*

https://zhuanlan.zhihu.com/p/146986309 - *PHP加密解密详解*

https://www.cnblogs.com/wangyuyanhello/p/13784577.html - *PHP加密解密*

https://www.cnblogs.com/zhangjinghe/p/7754332.html - *密码加密方式*

https://cloud.tencent.com/developer/article/1724226 - *password_hash*

