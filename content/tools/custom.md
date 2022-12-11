## 生成（GitHub）徽章

<script>
    new Vue({
      el: '#app1',
      data: function() {
        return {
          message: "https://github.com/vc-awesome/docs-learning",
          options: [{
            value: 'Badgen',
            label: 'Badgen'
          }, {
            value: 'Shields',
            label: 'Shields'
          }],
          value: "",
          formInline: {
            user: '',
            region: ''
          },
          alert: {
            show: false,
            type: "",
            title: "成功提示的文案",
          }
        }
      },
      methods: {
        onSubmit() {
          const _that = this;
          try {
            const url = new URL(this.message);



            if (this.value == 'Shields') {
              _that.alert.title = "https://img.shields.io/github/last-commit" + url.pathname +"?color=blue&logo=github&style=flat-square";
            } else {
              _that.alert.title = "https://flat.badgen.net/github/last-commit" + url.pathname +"?icon=github&color=blue";
            }
            
            _that.alert.show = true;
            _that.alert.type = "success";
            console.log(url);
            console.log('submit!');
          }
          catch(err) {
            _that.alert.show = true;
            _that.alert.type = "error";
            _that.alert.title = err.message;
            console.log(_that)
            //console.log(err)
            //console.log(err.message)
          }


        }
      }
    })
</script>

<output data-lang="output">

<div id="app1">
  <el-form :inline="true" :model="formInline" class="demo-form-inline">
    <el-form-item label="">
    	<el-input v-model="message" placeholder="请输入内容" clearable prefix-icon="el-icon-search"></el-input>
    </el-form-item>
    <el-form-item label="">
      <el-select v-model="value" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">生成</el-button>
    </el-form-item>
  </el-form>
  <el-alert
    :title="alert.title"
    :type="alert.type"
    show-icon v-if="alert.show">
  </el-alert>
  <el-divider></el-divider>
  <el-image :src="alert.title" v-if="alert.type=='success'"></el-image>
</div>
</output>

参考链接

1. https://docsify.js.org/#/zh-cn/vue - *兼容 Vue*
2. https://docsify.js.org/#/vue - *Vue compatibility*
3. https://element.eleme.cn/#/zh-CN - *Element - 网站快速成型工具*
4. https://www.runoob.com/vue2/vue-tutorial.html - *Vue.js 教程 | 菜鸟教程*
