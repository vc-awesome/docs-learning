/**
 * 加载 js 或 css
 * @param {*} filename
 * @param {*} filetype
 */
function loadjscssfile(filename, filetype) {
  if (filetype == 'js') {
    // if filename is a external JavaScript file
    var fileref = document.createElement('script');
    fileref.setAttribute('type', 'text/javascript');
    fileref.setAttribute('src', filename);
  } else if (filetype == 'css') {
    // if filename is an external CSS file
    var fileref = document.createElement('link');
    fileref.setAttribute('rel', 'stylesheet');
    fileref.setAttribute('type', 'text/css');
    fileref.setAttribute('href', filename);
  }
  if (typeof fileref != 'undefined') {
    document.getElementsByTagName('head')[0].appendChild(fileref);
  }
}

/**
 * 注入样式
 * @param {*} css 样式
 * @param {*} ref
 * @returns
 */
function styleInject(css, ref) {
  if (ref === void 0) {
    ref = {};
  }
  var insertAt = ref.insertAt;
  if (!css || typeof document === 'undefined') {
    return;
  }
  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';
  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}
(function () {
  /**
   * 注入元素
   * @param {*} css 样式
   * @param {*} ref
   * @returns
   */
  function elementInject(element, ref) {
    if (ref === void 0) {
      ref = {};
    }
    var insertAt = ref.insertAt;
    if (!css || typeof document === 'undefined') {
      return;
    }
    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.type = 'text/css';
    if (insertAt === 'top') {
      if (head.firstChild) {
        head.insertBefore(style, head.firstChild);
      } else {
        head.appendChild(style);
      }
    } else {
      head.appendChild(style);
    }
    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  }

  /* 用于 os/tools/custom-badge.md */

  // CSS
  loadjscssfile('_assets/clipboard-code-block.css', 'css');
  loadjscssfile('https://fastly.jsdelivr.net/gh/vc-awesome/bookmarks@master/fontawesome/releases/v6.5.1/css/all.min.css',
  'css');
  loadjscssfile(
    'https://fastly.jsdelivr.net/npm/element-ui/lib/theme-chalk/index.css',
    'css',
  );
  loadjscssfile('_assets/css/simple.css', 'css');
  
  /* 切换主题 */
  const mediaQueryListDark = window.matchMedia('(prefers-color-scheme: dark)');
  if (mediaQueryListDark.matches) {
    // 系统当前是暗色(dark)主题
  loadjscssfile('https://fastly.jsdelivr.net/npm/docsify/lib/themes/dark.css', 'css');
  }

  const mediaQueryListLight = window.matchMedia(
    '(prefers-color-scheme: light)',
  );
  if (mediaQueryListLight.matches) {
    // 系统当前是亮色(light)主题
    loadjscssfile('https://fastly.jsdelivr.net/npm/docsify/lib/themes/vue.css', 'css');
  }
  
  // JS
  /* loadjscssfile(
    "https://cdn.jsdelivr.net/combine/npm/vue@2/dist/vue.min.js,npm/element-ui/lib/index.js,npm/vue-clipboard2@latest/dist/vue-clipboard.min.js",
    "js",
  ); */

  /* 复制代码 */
  // loadjscssfile("_assets/js/docsify-copy-code.js", "js");

  /* 返回顶部 */
  // loadjscssfile("_assets/js/simple-back2top.js", "js");
})();
