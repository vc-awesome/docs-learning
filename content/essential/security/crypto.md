# 加密算法

## 单项散列加密

> 不可逆

### MD5

> 不安全，可破解

https://www.rfc-editor.org/info/rfc1321 - *Information on RFC 1321 » RFC Editor*

### Hash

https://csrc.nist.gov/pubs/fips/180-2/final - *FIPS 180-2, Secure Hash Standard (SHS) | CSRC*

#### SHA-1

> 不安全，可破解

#### SHA-256

暂无

### PHP 加密函数

1. `md5`

2. `hash`

3. `crypt`

4. `sha1`

## 对称加密

> - 可逆
> - 加解密用同一秘钥（秘钥加密、秘钥解密）

### PHP 加密函数

1. `base64_encode` 加密，`base64_decode` 解密

2. `urlencode` 加密，`urldecode` 解密

### DES

- 模式

  - CBC

  - ECB

> `openssl`  

1. https://www.yisu.com/zixun/123259.html - *PHP7实现OpenSSL DES-EDE-CBC加密和解密*

2. http://www.36nu.com/post/252 - *php使用openssl扩展实现des加解密方法*


> `mcrypt`  
> `PHP < 7.2.0`

1. https://blog.csdn.net/xzykai/article/details/78932206 - *PHP版DES算法加密数据（3DES）*

2. https://www.cnblogs.com/forforever/p/12674203.html - *Des加密算法的PHP实现*

3. https://www.cnblogs.com/laushow/p/9086745.html - *PHP DES加密解密*

### AES

AES stands for Advanced Encryption Standard. It's a symmetric encryption algorithm, meaning the same key is used for both encryption and decryption. AES is widely used to secure sensitive data, such as in securing communications over the internet (HTTPS), protecting stored data, and more. It replaced the older Data Encryption Standard (DES) due to its stronger security and efficiency. AES operates on fixed block sizes (128, 192, or 256 bits) and involves multiple rounds of substitution, permutation, and mixing operations to securely encrypt plaintext into ciphertext.

AES 是高级加密标准的缩写。 它是一种对称加密算法，即加密和解密使用相同的密钥。 AES 广泛用于保护敏感数据的安全，如确保互联网（HTTPS）通信安全、保护存储数据等。 由于其更强的安全性和效率，它取代了旧的数据加密标准（DES）。 AES 采用固定的数据块大小（128、192 或 256 位），通过多轮替换、置换和混合操作，将明文安全加密为密文。

AES 是 DES 的升级版，密钥长度更长，选择更多，也更灵活，安全性更高，速度更快。

> `openssl`  

1. https://www.jb51.net/article/126021.htm - *AES加解密代码*

2. https://www.cnblogs.com/lvjiefly/p/12624830.html - *PHP使用OpenSSL实现AES加密的笔记*

> `mcrypt`  
> `PHP < 7.2.0`

1. https://www.jb51.net/article/189421.htm - *如何在PHP中使用AES加密算法加密数据*

2. https://www.jb51.net/article/128149.htm - *对称加密算法（DES/AES）类的实现代码*

### HMAC

HMAC stands for "Keyed-Hash Message Authentication Code." It is a type of message authentication code (MAC) involving a cryptographic hash function in combination with a secret key. HMACs are used to verify both the integrity and authenticity of a message or data transmitted over an insecure channel. 

Here’s how HMAC works:
- **Hash Function**: HMAC uses a cryptographic hash function (such as SHA-256 or SHA-512) that generates a fixed-size hash value from input data.
- **Secret Key**: It also utilizes a secret key known only to the sender and receiver.
- **Processing**: HMAC applies the hash function to the input data concatenated with the secret key. This process ensures that any tampering with the data or the key will result in a different hash value.
- **Verification**: The receiver, knowing the same secret key, can independently compute the HMAC and compare it with the received HMAC. If they match, it indicates that the data has not been altered and comes from a legitimate source.

HMACs are used in various security protocols and applications, such as in VPNs, SSL/TLS, IPsec, and authentication mechanisms. They provide a robust way to ensure data integrity and authenticity in communications.

HMAC 是 "密钥散列信息验证码 "的缩写。 它是一种信息验证码 (MAC)，涉及密码散列函数与秘钥的结合。 HMAC 用于验证通过不安全通道传输的信息或数据的完整性和真实性。 

以下是 HMAC 的工作原理：
- **哈希函数**： HMAC 使用加密散列函数（如 SHA-256 或 SHA-512），从输入数据生成固定大小的散列值。
- **秘钥**： 它还使用只有发送方和接收方知道的秘钥。
- **处理**： HMAC 将散列函数应用于与秘钥连接的输入数据。 这一过程可确保对数据或密钥的任何篡改都会产生不同的散列值。
- **验证**： 接收方知道相同的密钥，可以独立计算 HMAC 并与接收到的 HMAC 进行比较。 如果两者匹配，则表明数据未被篡改，来源合法。

HMAC 用于各种安全协议和应用中，如 VPN、SSL/TLS、IPsec 和验证机制。 它们提供了一种强大的方法来确保通信中的数据完整性和真实性。

https://blog.csdn.net/dengjiexian123/article/details/53313913 - *php中使用hash_hmac函数实现HMAC-SHA1签名算法的来龙去脉*

自定义

https://www.xiabingbao.com/encrypt/2016/09/04/php-simple-encrypt.html - *简单对称加密算法*

## 非对称加密

1. https://blog.csdn.net/clh604/article/details/20224735 - *php rsa加密解密实例*

2. https://www.cnblogs.com/chenhaoyu/p/10695245.html - *PHP RSA加解密详解*

3. https://blog.csdn.net/u014294681/article/details/86705999 - *加解密篇 - 非对称加密算法 (RSA、DSA、ECC、DH)*

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
        * 加密
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

暂无

### ECC

暂无

### DH

暂无

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

## 加密工具

暂无

## 参考

1. https://www.php.cn/php-weizijiaocheng-399378.html - *PHP对称加密函数实现数据的加密解密详解*

2. https://zhuanlan.zhihu.com/p/146986309 - *PHP加密解密详解*

3. https://www.cnblogs.com/wangyuyanhello/p/13784577.html - *PHP加密解密*

4. https://www.cnblogs.com/zhangjinghe/p/7754332.html - *密码加密方式*

5. https://cloud.tencent.com/developer/article/1724226 - *password_hash*
