# 高德地图

## 简介

> 高德地图官方网站，提供全国地图浏览，地点搜索，公交驾车查询服务。可同时查看商家团购、优惠信息。高德地图，您的出行、生活好帮手。

## 官方

https://amap.com/ - *高德地图*

https://ditu.amap.com/ - *高德地图*

https://mobile.amap.com/ - *高德地图官方网站*

https://lbs.amap.com/ - *高德开放平台 | 高德地图API*

https://lbs.amap.com/api - *开发 | 高德地图API*

https://lbs.amap.com/tools/picker - *高德地图API*

## 用法

通过 IP 获取地理位置


### HTML

```html
<head>
  <link rel="stylesheet" href="//cdn.bootcdn.net/ajax/libs/twitter-bootstrap/3.3.5/css/bootstrap.min.css" />
  <script src="https://cdn.bootcdn.net/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
</head>
<body>
  <div id="map_nav" class="gaodemap">
    <div id="mapContainer" class="map-01 amap-container">
    </div>
    <div class="ljj-btn-contain common-map-btn-box ">
      <section class="common-map-inner">
        <div class="common-bus-btn">公交</div>
        <div class="common-market-btn">商场</div>
        <div class="common-floor-btn">写字楼</div>
        <div class="common-house-btn">住宅</div>
        <div class="common-p-btn">停车场</div>
      </section>
    </div>
    <div class="map-close-btn" @click="closeMap()">
      <span class="close_map btn btn-default">关闭</span>
    </div>
  </div>
  
  <!-- 放在 </body> 前一行 -->
  <script type="text/javascript">
    window._AMapSecurityConfig = {
      securityJsCode:'b5e30994d4f89a337da73c42e7758e43',
    }
  </script>
  <script src="//webapi.amap.com/maps?v=1.4.15&key=28cbdcfe9abe0ac5aabc839fd11de10b"></script>
</body>
```

### CSS

```css
#map_nav {
  background-color: black;
  visibility: hidden;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  transform: translate3d(0, 100%, 0);
  -webkit-transform: translate3d(0, 100%, 0);
  transition: transform 0.4s 0s;
  -webkit-transition: transform 0.4s 0s;
}
#mapContainer {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.show_map {
  transform: translate3d(0, 0, 0) !important;
  -webkit-transform: translate3d(0, 0, 0) !important;
}
.map-close-btn {
  position:absolute;
  top: 10px;
  left: 10px;
  width:100%;
  z-index:9999;
  color: black;
}
```

### JavaScript

 jquery

```js
// 高德地图
$(function() {
  var pisition_x = $('#position_x').val();
  var pisition_y = $('#position_y').val();

  // 模拟测试
  var pisition_x = '113.984440';
  var pisition_y = '22.553356';

  if (pisition_x != '' && pisition_y != '') {
    // gpsgd(pisition_x, pisition_y);

    $('.open-map').click(showMap);

    // 显示地图
    function showMap() {
      $("#map_nav").css({
        'visibility': 'visible'
      });
      $("#map_nav").toggleClass('show_map');
    }

    // 隐藏地图
    $('.close_map').click(function (e) {
      e.stopPropagation();
      $("#map_nav").toggleClass('show_map');
      setTimeout(function () {
        $('#map_nav').css({
          'visibility': 'hidden'
        });
      }, 400)
    });

    // 初始化地图
    try {
      var map, geolocation, _marker;

      map = new AMap.Map('mapContainer', {
        center: [pisition_x, pisition_y],
        zoom: 14
      });

      // 加载完
      map.on('complete', function () {
        var markers = [{
          icon: '', // 为空默认使用高德自带图标
          position: [pisition_x, pisition_y]
        }];
        markers.forEach(function (marker) {
          _marker = new AMap.Marker({
            map: map,
            icon: marker.icon,
            position: [marker.position[0], marker.position[1]],
            offset: new AMap.Pixel(-12, -12),
          });
        });
      });
    } catch (e) {

    }
  }

  // 初始化地图对象，加载地图
  function gpsgd(x, y, data) {
    try {
      var map = new AMap.Map("ditu", {
        resizeEnable: true,
        center: x > y ? [y, x] : [x, y], // 地图中心点
        zoom: 13 // 地图显示的缩放级别
      });
      // 添加点标记，并使用自己的icon
      // setMarker(x, y, data, map);
      new AMap.Marker({
        map: map,
        position: x > y ? [y, x] : [x, y],
        icon: new AMap.Icon({
          size: new AMap.Size(25, 40), // 图标大小
          // image: "http://webapi.amap.com/theme/v1.3/images/newpc/way_btn2.png",
          image: "/plug/Dev/images/dtt.png",
          imageOffset: new AMap.Pixel(0, 0)
        })
      });
    } catch (error) {

    }
  }
})
```

参考：

1. https://lbs.amap.com/api/javascript-api/summary - *概述-地图 JS API|高德地图API*
2. https://lbs.amap.com/api/webservice/summary - *概述-Web服务 API | 高德地图API*
3. https://developer.mozilla.org/zh-CN/docs/Web/API/Geolocation_API - *地理位置 API - Web API 接口参考 | MDN*
4. https://www.cnblogs.com/meng-ma-blogs/p/9278138.html - *web开发如何使用高德地图API（一）浏览器定位 - Mark-斯 - 博客园*
5. https://www.cnblogs.com/yayaa/p/8176079.html - *使用高德地图JS获取当前位置和经纬度 - Yayaa2 - 博客园*
6. https://juejin.cn/post/7109742253240909831 - *Vue + H5 引用 高德地图 实现定位 + 回显具体位置信息 - 掘金*
7. https://blog.csdn.net/gxhacx/article/details/82813957 - *【高德地图】H5 Web端定位当前位置，获取GPS和地址信息？_高德web获取当前地址_SANZ1991的博客-CSDN博客*
8. https://blog.csdn.net/qq_45834006/article/details/117855106 - *web端高德地图定位_web地图定位_缘不易的博客-CSDN博客*


## 常见问题

1. 为什么在桌面浏览器或者手机浏览器中无法定位到当前 IP 的所在位置，而是定位到默认的首都（北京）地址？

    检查浏览器是否允许 amap.com 获取您的位置（即地理位置授权）；如果你开发接入了高德地图 API，打开自己的网站前，先访问 https://amap.com/ 进行地理位置授权。在火狐浏览器中设置：[Firefox会和网站分享我的位置吗？ | Mozilla 技术支持](https://www.mozilla.org/zh-CN/firefox/geolocation/)