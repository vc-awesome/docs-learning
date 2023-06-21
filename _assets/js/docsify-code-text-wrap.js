/*!
 * docsify-code-text-wrap
 * v2.1.1
 * https://github.com/jperasmus/docsify-code-text-wrap
 * (c) 2017-2020 JP Erasmus <jperasmus11@gmail.com>
 * MIT license
 */
(function() {
    "use strict";
    function _typeof(obj) {
        if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
            _typeof = function(obj) {
                return typeof obj;
            };
        } else {
            _typeof = function(obj) {
                return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
            };
        }
        return _typeof(obj);
    }
    function styleInject(css, ref) {
        if (ref === void 0) ref = {};
        var insertAt = ref.insertAt;
        if (!css || typeof document === "undefined") {
            return;
        }
        var head = document.head || document.getElementsByTagName("head")[0];
        var style = document.createElement("style");
        // style.type = "text/css";
        style.setAttribute("name", "docsify-code-text-wrap-button");
        if (insertAt === "top") {
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
    var css = ".docsify-code-text-wrap-button,.docsify-code-text-wrap-button span{cursor:pointer;transition:all .25s ease}.docsify-code-text-wrap-button{position:absolute;z-index:1;top:0;right:38px;overflow:visible;padding:5px;border:0;border-radius:0;outline:0;font-size:1em;background:#808080;color:#fff;opacity:0}.docsify-code-text-wrap-button span{border:0;border-radius:3px;background:inherit;pointer-events:none}.docsify-code-text-wrap-button:focus,pre:hover .docsify-code-text-wrap-button{opacity:1}.docsify-code-text-wrap-on{color:var(--theme-color,#42b983);}pre>button:first-of-type{border-bottom-left-radius:inherit;}";
    styleInject(css);
    function docsifyCodeTextWrap(hook, vm) {
        hook.doneEach(function() {
            var targetElms = Array.apply(null, document.querySelectorAll("pre[data-lang]"));
            var i18n = {
                buttonText: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"14\" height=\"14\"><path fill=\"none\" d=\"M0 0h24v24H0z\"/><path d=\"M15 18h1.5a2.5 2.5 0 1 0 0-5H3v-2h13.5a4.5 4.5 0 1 1 0 9H15v2l-4-3 4-3v2zM3 4h18v2H3V4zm6 14v2H3v-2h6z\" fill=\"currentColor\"/></svg>"
            };
            var template = [ '<button class="docsify-code-text-wrap-button">', '<span class="label">'.concat(i18n.buttonText, "</span>"), "</button>" ].join("");
            targetElms.forEach(function(elm, index) {
              // JS 判断文本是否溢出

                // 当前容器的宽度
                var containerLength = elm.firstElementChild.offsetWidth;
                // 当前文字（包括省略部分）的宽度
                var textLength = elm.firstElementChild.scrollWidth;
                // console.log(o.getBoundingClientRect().x)

                // console.log("containerLength:" + containerLength);
                // console.log("textLength", textLength);
                if (textLength > containerLength) {
                  // 文本溢出增加折行按钮
                  elm.insertAdjacentHTML("beforeend", template);
                }
            });

            // 选择需要观察变动的节点
            const targetNodes = Array.apply(null, document.querySelectorAll('details'));
            targetNodes.forEach(function(elem, index) {
              // 观察器的配置（需要观察什么变动）
              const config = { attributes: true, childList: false, subtree: true };

              // 当观察到变动时执行的回调函数
              const callback = function(mutationsList, observer) {
                  // Use traditional 'for loops' for IE 11
                  for(let mutation of mutationsList) {
                      if (mutation.type === 'childList') {
                          // console.log('A child node has been added or removed.');
                      }
                      else if (mutation.type === 'attributes') {
                        // console.log('The ' + mutation.attributeName + ' attribute was modified.');
                        if (mutation.target.nodeName == "DETAILS") {
                          var elems = $(mutation.target).find("pre");
                          Array.apply(null,elems).forEach(function(elm, index) {
                            // 当前容器的宽度
                            var containerLength = elm.firstElementChild.offsetWidth;
                            // console.log("containerLength:" + containerLength);
                            // 当前文字（包括省略部分）的宽度
                            var textLength = elm.firstElementChild.scrollWidth;
                            // console.log("textLength", textLength);
                            if (textLength > containerLength) {
                              // 文本溢出增加折行按钮
                              elm.lastElementChild.insertAdjacentHTML("beforebegin", template);
                            }
                          })
                          // 之后，可停止观察
                          observer.disconnect();
                        }
                      }
                  }
              };

              // 创建一个观察器实例并传入回调函数
              const observer = new MutationObserver(callback);

              // 以上述配置开始观察目标节点
              observer.observe(elem, config);

              // 之后，可停止观察
              // observer.disconnect();
            })
        });
        hook.mounted(function() {
            var listenerHost = document.querySelector(".content");
            listenerHost.addEventListener("click", function(evt) {
                var isCodeTextWrapButton = evt.target.classList.contains("docsify-code-text-wrap-button");
                if (isCodeTextWrapButton) {
                    var buttonElm = evt.target.tagName === "BUTTON" ? evt.target : evt.target.parentNode;
                    var preElm = buttonElm.parentNode;
                    try {
                        if (window.getComputedStyle(buttonElm, null).opacity == 1) {
                        // 判断是否存在某个 class
                        if (buttonElm.getAttribute("class").indexOf("docsify-code-text-wrap-on") != -1) {
                            // 存在
                            buttonElm.classList.remove('docsify-code-text-wrap-on'),
                            preElm.removeAttribute("style");
                        } else {
                            // 不存在
                            buttonElm.classList.add('docsify-code-text-wrap-on'),
                            preElm.style = "white-space: pre-wrap;overflow-wrap: anywhere;";
                        }
                      }
                    } catch (err) {
                        console.error("docsify-code-text-wrap: ".concat(err));
                    }
                }
            });
        });
    }
    if (document.querySelector('link[href*="docsify-code-text-wrap"]')) {
        console.warn("[Deprecation] Link to external docsify-code-text-wrap stylesheet is no longer necessary.");
    }
    window.DocsifyCodeTextWrapPlugin = {
        init: function init() {
            return function(hook, vm) {
                hook.ready(function() {
                    console.warn("[Deprecation] Manually initializing docsify-code-text-wrap using window.DocsifyCodeTextWrapPlugin.init() is no longer necessary.");
                });
            };
        }
    };
    window.$docsify = window.$docsify || {};
    window.$docsify.plugins = [ docsifyCodeTextWrap ].concat(window.$docsify.plugins || []);
})();
