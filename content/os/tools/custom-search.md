<script>
  new Vue({
    el: '#app-search',
    data: function() {
      return {
        message: "GitHub",
        options: [{
          value: 'baidu',
          label: '百度'
        }, {
          value: "zhihu",
          label: "知乎"
        }, {
          value: "github",
          label: "GitHub"
        }, {
          value: "duckduckgo",
          label: "DuckDuckGo"
        }],
        value: "baidu",
        alert: {
          type: "warning",
          title: "",
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
        tooltip_e_class: {
          'tooltipped': true,
          'tooltipped-e': true,
          'tooltipped-no-delay': true,
        },
        command: "",
      }
    },
    created: function() {
      this.onSubmit();
    },
    methods: {
      handleClick() {
        const _that = this;
        _that.$copyText(_that.alert.title).then(function (e) {
          // _that.$message({message: 'URL Copied', type: 'success'});
          console.log(e)
        }, function (e) {
          alert('Can not copy')
          console.log(e)
        })
        _that.is_tooltip = true;
      },
      handleCommand(command) {
        const _that = this;
        if (command == "a") {
          const text = _that.label + "：[" + _that.message + "](" + _that.alert.title + ")";
          _that.$copyText(text).then(function (e) {
            // _that.$message({message: 'Markdown Copied', type: 'success'});
            console.log(e)
          }, function (e) {
            alert('Can not copy')
            console.log(e)
          })
        } else {
          
        }
        _that.command = command;
        _that.is_tooltip = true;
      },
      onSubmit() {
        const _that = this;
        const _params = encodeURI(this.message);
        try {
          if (this.value == 'baidu') {
            _that.alert.title = "https://www.baidu.com/s?word=" + _params;
            _that.label = "百度关键词搜索"
          } else if (this.value == 'zhihu') {
            _that.alert.title = "https://www.zhihu.com/search?type=content&q=" + _params;
            _that.label = "知乎话题搜索"
          } else if (this.value == 'github') {
            _that.alert.title = "https://github.com/search?q=" + _params;
            _that.label = "GitHub 关键词搜索"
          } else if (this.value == 'duckduckgo') {
            _that.alert.title = "https://duckduckgo.com/?q=" + _params;
            _that.label = "DuckDuckGo 关键词搜索"
          } else {
            _that.value = "duckduckgo";
          }
          _that.dropdown.disabled = false;
          // console.log('submit!');
        }
        catch(err) {
          _that.dropdown.disabled = true;
          // console.log(_that)
          // console.log(err)
          // console.log(err.message)
        }
      },
      update() {
        this.onSubmit();
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
      openLink() {
        window.open(this.alert.title);
      }
    }
  })
</script>

<div id="app-search">
  <output data-lang="output">
    <el-form :inline="true" class="demo-form-inline" size="medium">
      <el-form-item label="">
      	<el-input v-model="message" placeholder="请输入关键词" clearable autocomplete="on" prefix-icon="el-icon-key" @input="update">
        </el-input>
      </el-form-item>
      <el-form-item label="">
        <el-select v-model="value" placeholder="请选择"  @change="update">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <div>
        <el-button size="medium" type="primary" icon="el-icon-s-promotion" plain @click="openLink">打开</el-button>
        <el-dropdown @command="handleCommand" size="medium" split-button type="primary" :hide-on-click="false" :disabled="dropdown.disabled" @click="handleClick" :class="is_tooltip ? tooltip_class : ''" aria-label="Copied!" @mouseleave.native="is_tooltip = false;command='';">
        Copy URL
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="a" :class="is_tooltip ? tooltip_e_class : ''" aria-label="Copied!" @mouseleave.native="is_tooltip = false;command='';">Copy Markdown</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </el-form>
    <br/>
    <div style="box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 12px 0px;">
      <el-alert
        title="👆🏻 点击上方打开按钮，在新标签页中打开链接"
        :description="alert.title"
        type="success"
        :closable="false">
      </el-alert>
    </div>
  </output>
</div>

*附：*
1. *点击复制成功后，弹出的提示工具功能，请参阅 “https://primer.style/css/components/tooltips#tooltip - Tooltips | Primer CSS” 。*
2. _https://www.imangodoc.com/19368453.html - *入门 CSS 工具提示方向 - 芒果文档*_
3. https://element.eleme.cn/#/zh-CN - *Element - 网站快速成型工具*
  
