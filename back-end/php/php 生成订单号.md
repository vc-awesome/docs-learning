```php
/**
 * 生成20位编号(时间+微秒+随机数+会员ID%1000)，该值会传给第三方支付接口
 * 长度 =12位 + 3位 + 2位 + 3位  = 20位
 * 1000个会员同一微秒提订单，重复机率为1/100
 * @return string
 */

function makePaySn($member_id) {
    return date('ymdHis',  TIMESTAMP).sprintf('%03d', (float) microtime() * 1000) .mt_rand(10, 99).sprintf('%03d', intval($member_id) % 1000);
}
```

```php
/**
 * 订单编号生成规则，n(n>=1)个订单表对应一个支付表，
 * 生成订单编号(年取1位 + $pay_id取13位 + 第N个子订单取2位)
 * 1000个会员同一微秒提订单，重复机率为1/100
 * @param $pay_id 支付表自增ID
 * @return string
 */
public function makeOrderSn($pay_id) {
    // 记录生成子订单的个数，如果生成多个子订单，该值会累加
    static $num;
    if (empty($num)) {
        $num = 1;
    } else {
        $num++;
    }
    return (date('y', TIMESTAMP) % 9 + 1) . sprintf('%013d', $pay_id) . sprintf('%02d', $num);
}
```

