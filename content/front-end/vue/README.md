## 官方

[Vue.js](开发框架/README?id=vuejs)

## 项目开发中遇到的问题

1. `CDN`方式引入`vant`时，无法使用图片懒加载

   ```js
   // 通过 CDN 引入时不会自动注册 Lazyload 组件
   // 可以通过下面的方式手动注册
   
   Vue.use(vant.Lazyload); // Vue.use(vant.Lazyload);需要放在new Vue({});前面
   ```

   参考链接：

   https://segmentfault.com/q/1010000022016145 - *前端 - vant 轮播图怎么实现图片懒加载 - SegmentFault 思否*

2. https://cloud.tencent.com/developer/article/1626876 - *如何实现 Vue 自定义组件中 hover 事件以及 v-model - 腾讯云开发者社区-腾讯云*

3. https://blog.csdn.net/weixin_44092905/article/details/120336568 - *记一个vue开发问题-----js如何从浏览器剪贴板获取内容_咕咚，来了的博客-CSDN博客_vue 获取不到clipboarddata*

   https://ask.csdn.net/questions/7482682 - *vue 实现获取剪切板的内容-有问必答-CSDN问答*

4. 待添加...



## 学习笔记

### vue.use原理

<https://www.uviewui.com/components/vueUse.html>



### vuex store

定义 `index.js` 文件并存放在 `store` 文件夹

`vuex`用来管理`vue`的所有组件状态

下载并引入`vuex`

```js
import vue from 'vue';
import vuex from 'vuex';

Vue.use(vuex);

export const store = new Vuex.Store({
    state: {}
    getters: {}
    mutations: {}
    action: {}

    // 获取状态对象
    store.state
    // 触发状态变更
    store.commit
});
```



### vue-router



### vue-cli

引入

`
import`

导出

`export`

当使用某个模块或组件时，需先引入，定义模块后导出或者通过` Vue.use(模块名) `使用



### qs

```js
import qs from 'qs';

Vue.prototype.qs = qs;

qs.stringify();  // 转换成查询字符串
qs.parse();  // 转换成 json 对象
```



### axios



### http

[vue-resource安装与使用](https://www.cnblogs.com/liluning/p/12144775.html)





## UI组件库

[VUX](https://vux.li/)

[Vant](https://youzan.github.io/vant/#/zh-CN)

> [上拉加载](https://blog.csdn.net/Poppy_LYT/article/details/99327571)



[Element](https://element.eleme.cn/#/zh-CN)

[Mint](http://mint-ui.github.io/#!/zh-cn)

