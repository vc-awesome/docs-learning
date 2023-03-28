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
        value: "Badgen",
        formInline: {
          user: '',
          region: ''
        },
        alert: {
          type: "warning",
          type_1: "success",
          type_2: "warning",
          title: "https://img.shields.io/badge/preview-some%20parameters%20missing-lightgray",
          title_1: "https://img.shields.io/badge/preview-some%20parameters%20missing-lightgray",
          title_2: "https://img.shields.io/badge/preview-some%20parameters%20missing-lightgray",
        },
        image: {
          src: "https://img.shields.io/badge/preview-some%20parameters%20missing-lightgray",
          src_1: "",
          src_2: "",
        },
        dropdown: {
          disabled: true,
        },
        is_tooltip: false,
        tooltip_class: {
          'tooltipped': true,
          'tooltipped-s': true,
          'tooltipped-no-delay': true,
        },
        button_icon: {
          uncopy: "el-icon-copy-document",
          copied: "el-icon-check",
        },
        command: "",

        // 
        url: "https://element.eleme.cn/",
      }
    },
    created: function() {
      this.onSubmit();
    },
    methods: {
      handleClick() {
        const _that = this;
        _that.$copyText(_that.image.src).then(function (e) {
          _that.$message({message: 'URL Copied', type: 'success'});
          console.log(e)
        }, function (e) {
          alert('Can not copy')
          console.log(e)
        })
      },
      handleCommand(command, url = '') {
        const _that = this;
        if (command == "a") {
          const text = "![GitHub last commit](" + _that.image.src_1 + ")";
          _that.$copyText(text).then(function (e) {
            // _that.$message({message: 'Markdown Copied', type: 'success'});
            console.log(e)
          }, function (e) {
            alert('Can not copy')
            console.log(e)
          })
        } else if (command == "aa") {
          const text = "![GitHub last commit](" + _that.image.src_2 + ")";
          _that.$copyText(text).then(function (e) {
            // _that.$message({message: 'Markdown Copied', type: 'success'});
            console.log(e)
          }, function (e) {
            alert('Can not copy')
            console.log(e)
          })
        } else if (command == "b") {
          _that.$copyText(_that.message).then(function (e) {
            // _that.$message({message: 'GitHub Copied', type: 'success'});
            console.log(e)
          }, function (e) {
            alert('Can not copy')
            console.log(e)
          })
        } else if (command == "c") {
          _that.$copyText(_that.image.src_1).then(function (e) {
            // _that.$message({message: 'URL Copied', type: 'success'});
            console.log(e)
          }, function (e) {
            alert('Can not copy')
            console.log(e)
          })
        } else if (command == "cc") {
          _that.$copyText(_that.image.src_2).then(function (e) {
            // _that.$message({message: 'URL Copied', type: 'success'});
            console.log(e)
          }, function (e) {
            alert('Can not copy')
            console.log(e)
          })
        } else if (command == "d") {
          _that.$copyText(url).then(function (e) {
            // _that.$message({message: 'URL Copied', type: 'success'});
            console.log(e)
          }, function (e) {
            alert('Can not copy')
            console.log(e)
          })
        }
        _that.command = command;
        _that.is_tooltip = true;
      },
      onSubmit() {
        const _that = this;
        try {
          const url = new URL(this.message);
          if (this.value == 'Shields') {
            _that.image.src = _that.alert.title = "https://img.shields.io/github/last-commit" + url.pathname +"?color=blue&logo=github&style=flat-square";
          } else {
            _that.image.src = _that.alert.title = "https://flat.badgen.net/github/last-commit" + url.pathname +"?icon=github&color=blue";
            _that.value = "Badgen";
          }

          _that.image.src_1 = _that.alert.title_1 = "https://img.shields.io/github/last-commit" + url.pathname +"?color=blue&logo=github&style=flat-square";
          _that.image.src_2 = _that.alert.title_2 = "https://flat.badgen.net/github/last-commit" + url.pathname +"?icon=github&color=blue";
    
          _that.alert.type_1 = "success";
          _that.alert.type_2 = "warning";
          _that.dropdown.disabled = false;
          console.log(url);
          // console.log('submit!');
        }
        catch(err) {
          _that.alert.type_1 = "error";
          _that.alert.type_2 = "error";
          _that.alert.title_1 = err.message;
          _that.alert.title_2 = err.message;
          _that.image.src = "https://img.shields.io/badge/preview-some%20parameters%20missing-lightgray";
          _that.dropdown.disabled = true;
          // console.log(_that)
          //console.log(err)
          //console.log(err.message)
        }
      },
      async getClipboardText() {
        const clipboardItems = await window.navigator.clipboard.read()
        let textHtml, textPlain
        for (const clipboardItem of clipboardItems) {
          for (const type of clipboardItem.types) {
            const item = await clipboardItem.getType(type)
            if (item && item.type === 'text/html') {
              textHtml = await item.text()
            }
            if (item && item.type === 'text/plain') {
              textPlain = await item.text()
            }
          }
        }
        this.message = textPlain;
        console.log(textPlain)
        this.onSubmit();
        return { textHtml, textPlain }
      },
      async getClipboardText2() {
        const clipboardItems = await window.navigator.clipboard.read()
        let textHtml, textPlain
        for (const clipboardItem of clipboardItems) {
          for (const type of clipboardItem.types) {
            const item = await clipboardItem.getType(type)
            if (item && item.type === 'text/html') {
              textHtml = await item.text()
            }
            if (item && item.type === 'text/plain') {
              textPlain = await item.text()
            }
          }
        }
        this.url = textPlain;
        console.log(url);
        return { textHtml, textPlain };
      },
    }
  })
</script>

<div id="app1">

## 生成 GitHub 徽章

  <output data-lang="output">
    <!-- <el-form :inline="true" :model="formInline" class="demo-form-inline" size="medium">
      <el-form-item label="">
      	<el-input v-model="message" placeholder="请输入内容" clearable autocomplete="on">
          <i class="fa fa-github el-input__icon" slot="prefix"></i> 
        </el-input>
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
        <el-button-group>
          <el-button type="primary" icon="el-icon-search" plain @click="onSubmit"></el-button>
          <el-button type="info" :icon="command=='b' ? button_icon.copied : button_icon.uncopy" plain @click="handleCommand('b')" :class="is_tooltip ? tooltip_class : ''" aria-label="Copied!" @mouseleave.native="is_tooltip = false;command='';"></el-button>
        </el-button-group>
      </el-form-item>
    </el-form> -->
    <el-input v-model="message" placeholder="请输入内容" clearable autocomplete="on" size="medium" @clear="getClipboardText">
      <i class="fa fa-github fa-lg el-input__icon" slot="prefix"></i>
      <div slot="prepend">
        <el-button-group>
          <el-button type="info" :icon="command=='b' ? button_icon.copied : button_icon.uncopy" plain @click="handleCommand('b')" :class="is_tooltip ? tooltip_class : ''" aria-label="Copied!" @mouseleave.native="is_tooltip = false;command='';"></el-button><i class="fa fa-github el-input__icon" slot="prefix"></i>
        </el-button-group>
      </div>
      <el-button slot="append" icon="el-icon-search" type="primary" @click="onSubmit"></el-button>
    </el-input>
    <br/>
    <br/>
    <!-- <el-row type="flex" justify="space-between">
        <el-col :span="18">
          <el-input v-model="message" placeholder="请输入内容" clearable autocomplete="on">
            <i class="fa fa-github el-input__icon" slot="prefix"></i> 
          </el-input>
        </el-col>
        <el-col :span="6" style="text-align: right;">
          <el-button-group>
            <el-button type="primary" icon="el-icon-search" plain @click="onSubmit"></el-button>
            <el-button type="info" :icon="command=='b' ? button_icon.copied : button_icon.uncopy" plain @click="handleCommand('b')" :class="is_tooltip ? tooltip_class : ''" aria-label="Copied!" @mouseleave.native="is_tooltip = false;command='';"></el-button>
          </el-button-group>
        </el-col>
      </el-row> -->
    <el-alert
      :title="message"
      type="info"
      :closable="false"
      show-icon>
    </el-alert>
    <br/>
    <div style="box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 12px 0px;">
      <el-alert :title="alert.title_2" :type="alert.type_2" :closable="false" show-icon></el-alert>
      <el-row type="flex" justify="space-between">
        <el-col :span="6">
          <!-- <el-tag type="success" size="small" effect="plain">Shields</el-tag>
          <br/>
          <br/> -->
        </el-col>
        <el-col :span="18" style="text-align: right;" v-if="!dropdown.disabled">
          <el-image :src="image.src_2"></el-image>
          <el-button-group style="vertical-align: inherit;">
            <el-button type="success" :icon="command=='cc' ? button_icon.copied : button_icon.uncopy" size="mini" plain @click="handleCommand('cc')" :class="is_tooltip ? tooltip_class : ''" aria-label="Copied!" @mouseleave.native="is_tooltip = false;command='';">URL</el-button>
            <el-button type="primary" :icon="command=='aa' ? button_icon.copied : button_icon.uncopy" size="mini" plain @click="handleCommand('aa')" :class="is_tooltip ? tooltip_class : ''" aria-label="Copied!" @mouseleave.native="is_tooltip = false;command='';">MD</el-button>
          </el-button-group>
        </el-col>
      </el-row>
    </div>
    <br/>
    <div style="box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 12px 0px;">
      <el-alert :title="alert.title_1" :type="alert.type_1" :closable="false" show-icon></el-alert>
      <el-row type="flex" justify="space-between">
        <el-col :span="6">
          <!-- <el-tag type="primary" size="small" effect="plain">Badgen</el-tag>
          <br/>
          <br/> -->
        </el-col>
        <el-col :span="18" style="text-align: right;" v-if="!dropdown.disabled">
          <el-image :src="image.src_1"></el-image>
          <el-button-group style="vertical-align: inherit;">
            <el-button type="success" :icon="command=='c' ? button_icon.copied : button_icon.uncopy" size="mini" plain @click="handleCommand('c')" :class="is_tooltip ? tooltip_class : ''" aria-label="Copied!" @mouseleave.native="is_tooltip = false;command='';">URL</el-button>
            <el-button type="primary" :icon="command=='a' ? button_icon.copied : button_icon.uncopy" size="mini" plain @click="handleCommand('a')" :class="is_tooltip ? tooltip_class : ''" aria-label="Copied!" @mouseleave.native="is_tooltip = false;command='';">MD</el-button>
          </el-button-group>
        </el-col>
      </el-row>
    </div>
    <br/>
    <!-- <p>
      <el-dropdown @command="handleCommand" size="medium" split-button type="primary" :disabled="dropdown.disabled" @click="handleClick">
        Copy URL
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="a">Copy Markdown</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </p> -->
  </output>

参考链接

1. https://docsify.js.org/#/zh-cn/vue - *兼容 Vue*
2. https://docsify.js.org/#/vue - *Vue compatibility*
3. https://element.eleme.cn/#/zh-CN - *Element - 网站快速成型工具*
4. https://www.runoob.com/vue2/vue-tutorial.html - *Vue.js 教程 | 菜鸟教程*


## 输入 URL 获取页面标题

  <output data-lang="output">
    <iframe :src="url" id="iframe2"></iframe>
    <el-input v-model="url" placeholder="请输入内容" clearable autocomplete="on" size="medium" @clear="getClipboardText2">
      <div slot="prepend">
        <el-button-group>
          <el-button type="info" :icon="command=='d' ? button_icon.copied : button_icon.uncopy" plain @click="handleCommand('d', 'view-source:' + url)" :class="is_tooltip ? tooltip_class : ''" aria-label="Copied!" @mouseleave.native="is_tooltip = false;command='';"></el-button><i class="fa fa-github el-input__icon" slot="prefix"></i>
        </el-button-group>
      </div>
      <!-- <el-button slot="append" icon="el-icon-search" type="primary" @click="onSubmit2"></el-button> -->
    </el-input>
    <br/>
    <br/>
    <el-alert
      :title="'view-source:' + url"
      type="info"
      :closable="false"
      show-icon>
    </el-alert>
  </output>

</div>
