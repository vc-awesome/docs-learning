# uView

## 简介

> uView UI，是 uni-app 生态最优秀的 UI 框架，全面的组件和便捷的工具会让您信手拈来，如鱼得水

![GitHub last commit](https://badgen.net/github/last-commit/umicro/uView2.0?icon=github&color=blue)
![GitHub Release Date - Published_At](https://img.shields.io/github/release-date/umicro/uView2.0?display_date=published_at&logo=github)
![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/umicro/uView2.0?logo=github)
![GitHub Repo stars](https://img.shields.io/github/stars/umicro/uView2.0?style=social)

## 官方

https://uviewui.com/ - *uView 2.0 - 全面兼容 nvue 的 uni-app 生态框架 - uni-app UI 框架*

https://github.com/umicro/uView2.0 - *umicro/uView2.0: uView UI，是全面兼容nvue的uni-app生态框架，全面的组件和便捷的工具会让您信手拈来，如鱼得水*

https://ext.dcloud.net.cn/plugin?id=1593 - *uView2.0重磅发布，利剑出鞘，一统江湖 - DCloud 插件市场*

## 版本

### 1.x

https://v1.uviewui.com/ - *uView - 多平台快速开发的UI框架 - uni-app UI框架* 

https://github.com/umicro/uView - *GitHub - umicro/uView: uView UI，是uni-app生态最优秀的UI框架，全面的组件和便捷的工具会让您信手拈来，如鱼得水*

![GitHub last commit](https://badgen.net/github/last-commit/umicro/uView?icon=github&color=blue)
![GitHub Release Date - Published_At](https://img.shields.io/github/release-date/umicro/uView?display_date=published_at&logo=github)
![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/umicro/uView?logo=github)
![GitHub Repo stars](https://img.shields.io/github/stars/umicro/uView?style=social)

### 2.x

## 安装

https://uviewui.com/components/install.html - *安装 | uView 2.0 - 全面兼容 nvue 的 uni-app 生态框架 - uni-app UI 框架*

## 用法

### 内置样式

#### 定位

```css
.u-relative,
.u-rela {
  position: relative;
}

.u-absolute,
.u-abso {
  position: absolute;
}
```

#### 字体大小

```css
.u-font-xs {
  font-size: 22rpx;
}

.u-font-sm {
  font-size: 26rpx;
}

.u-font-md {
  font-size: 28rpx;
}

.u-font-lg {
  font-size: 30rpx;
}

.u-font-xl {
  font-size: 34rpx;
}
```

#### 内外边距

#### flex布局

### 常用组件

#### Icon 图标

#### Cell 单元格

#### Button 按钮

#### Layout 布局

#### Form 表单

#### Rate 评分

#### Upload 上传

手动上传

自动上传

#### NoticeBar 滚动通知

#### Line 线条

#### Card 卡片

#### Grid 宫格布局

#### TimeLine 时间轴

#### Skeleton 骨架屏

#### Divider 分割线

#### Radio单选框

#### Checkbox复选框

#### Modal模态框

#### Empty 内容为空

代码示例

```html
<template>
  <view>
    <u-navbar title="收益记录"></u-navbar>
    <view class="u-padding-40">
      <u-cell-group :border="false">
        <u-cell-item :label="item.create_time" :title="item.title" :value="item.value" :arrow="false" :value-style="{'color': '#06AD5C'}" v-for="(item, index) in list"></u-cell-item>
      </u-cell-group>
      <u-empty mode="data" v-show="showEmpty" style="padding-top: 200rpx;"></u-empty>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        list: [],
        machineId: '',
        showEmpty: true
      };
    },
    onLoad(option) {
      this.machineId = option.machine_id;
    },
    methods: {
      getUserMachineLog() {
        this.$http.get('/machine/profitlog', {params: {machine_id: this.machineId}}).then(res => {
          console.log('ok->[节点收益列表]', res);
          this.list = res.data.data;
          if (res.data.data.length > 0) {
            this.showEmpty = false;
          } else {
            this.showEmpty = true;
          }
        }).catch(err => {
          console.log(err);
        })
      }
    },
    onShow() {
      this.getUserMachineLog();
    }
  };
</script>

<style lang="scss" scoped>

</style>

```

#### Gap 间隔槽

## 遇到的问题

问题：当使用`模板->页面->订单列表` + `组件->导航组件->Navbar自定义导航栏`，出现模板中的`tabs标签`组件无法固定，会随着滚动条滚动

解决：使用`uni-app`的条件编译 解决各端差异的方式

实例：

> 定义样式

```css
/* #ifdef APP-PLUS */
  .wrap {
    display: flex;
    flex-direction: column;
    // var(--window-top) 是手机状态栏的高度，var(--window-bottom) 是底部选项卡tabbar的高度，44px 是uView组件 Navbar自定义导航栏的高度，80rpx 是 uView组件 tabs标签的高度
    height: calc(100vh - var(--window-top) - var(--window-bottom) - 44px - 80rpx);
    width: 100%;
    background-color: #fff;
  }

  /* #endif */

  /* #ifdef H5 */
  .wrap {
    display: flex;
    flex-direction: column;
    height: calc(100vh - var(--window-top) - var(--window-bottom) - 44px);
    width: 100%;
    background-color: #fff;
  }

  /* #endif */
```
