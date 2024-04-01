/* eslint-disable */

(function () {
  /**
   *
   * @param {*} css
   * @param {*} ref
   * @returns
   */
  function styleInject(css, ref) {
    if (ref === void 0) {
      ref = {};
    }
    var insertAt = ref.insertAt;
    if (!css || typeof document === "undefined") {
      return;
    }
    var head = document.head || document.getElementsByTagName("head")[0];
    var style = document.createElement("style");
    style.type = "text/css";
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

  document.addEventListener("DOMContentLoaded", function () {
    styleInject(
      " #right-bottom-float-btns{position:fixed !important;display:-webkit-box !important;display:-ms-flexbox !important;display:flex !important;-webkit-box-orient:vertical !important;-webkit-box-direction:normal !important;-ms-flex-direction:column !important;flex-direction:column !important;right:10px !important;bottom:10px !important;z-index:1}#right-bottom-float-btns button{width:40px;min-width:auto;font:inherit;margin:0;overflow:visible;text-transform:none;font-family:inherit;position:relative;display:inline-block;padding:5px 16px;font-size:14px;font-weight:500;line-height:20px;white-space:nowrap;vertical-align:middle;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border:1px solid;border-radius:6px;-webkit-appearance:none;-moz-appearance:none;appearance:none;color:#24292f;background-color:#f6f8fa;border-color:#e0e0e0;-webkit-box-shadow:0 1px 0 rgba(27,31,36,.04),inset 0 1px 0 rgba(255,255,255,.25);box-shadow:0 1px 0 rgba(27,31,36,.04),inset 0 1px 0 rgba(255,255,255,.25);-webkit-transition:80ms cubic-bezier(.33,1,.68,1);-o-transition:80ms cubic-bezier(.33,1,.68,1);transition:80ms cubic-bezier(.33,1,.68,1);-webkit-transition-property:color,background-color,border-color,-webkit-box-shadow;transition-property:color,background-color,border-color,-webkit-box-shadow;-o-transition-property:color,background-color,box-shadow,border-color;transition-property:color,background-color,box-shadow,border-color;transition-property:color,background-color,box-shadow,border-color,-webkit-box-shadow;color:#f22f27;padding:0 12px;font-size:12px;line-height:20px;margin-top:6px;opacity:.6}#right-bottom-float-btns button:hover{-webkit-transition-duration:.1s;-o-transition-duration:.1s;transition-duration:.1s;text-decoration:none;color:#ffffff;background-color:#ff7e79;border-color:rgba(27,31,36,0.15);-webkit-box-shadow:rgba(27,31,36,0.04) 0px 1px 0px 0px,rgba(255,255,255,0.25) 0px 1px 0px 0px inset;box-shadow:rgba(27,31,36,0.04) 0px 1px 0px 0px,rgba(255,255,255,0.25) 0px 1px 0px 0px inset;filter: invert(0)}#right-bottom-float-btns button:active{-webkit-transition:none;-o-transition:none;transition:none;color:#ffffff;background-color:hsla(2.24,100%,73.73%,1);border-color:rgba(27,31,36,0.15);-webkit-box-shadow:rgba(27,31,36,0.15);box-shadow:rgba(27,31,36,0.15);filter: invert(0)}#right-bottom-float-btns button:focus{outline:2px solid #f22f27;outline-offset:-2px;-webkit-box-shadow:none;box-shadow:none}#right-bottom-float-btns button:focus:not(:focus-visible){outline:solid 1px transparent}#right-bottom-float-btns button:focus-visible{outline:2px solid #f22f27;outline-offset:-2px;-webkit-box-shadow:none;box-shadow:none}#right-bottom-float-btns button.back-to-top-progress{display:inline-block;padding:0;font-size:inherit;color:#f22f27;text-decoration:none;white-space:nowrap;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-color:transparent;border:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}"
    );

    document
      .querySelector("body")
      .firstElementChild.insertAdjacentHTML(
        "beforebegin",
        '<div id="right-bottom-float-btns"><!-- 返回顶部 --><button class="back-to-top-progress">0%</button><button class="back-to-top"><span class="fas fa-arrow-up-to-line"></span></button><button class="page-up"><span class="fas fa-arrow-up"></span></button><button class="page-down"><span class="fas fa-arrow-down"></span></button><button class="back-to-top" id="back2bottom"><span class="fas fa-arrow-down-to-line"></span></button></div>'
      );

    var THRESHOLD = 0;
    // For init back to top in sidebar if page was scrolled after page refresh.
    window.addEventListener("scroll", () => {
      var btn = document.querySelector("button.back-to-top-progress");
      var calcScrollPercent = function (btn) {
        if (btn) {
          var docHeight =
            document.querySelector("body").offsetHeight +
            THRESHOLD;
          var winHeight = window.innerHeight;
          var contentVisibilityHeight =
            docHeight > winHeight
              ? docHeight - winHeight
              : document.body.scrollHeight - winHeight;

          // var contentVisibilityHeight = NaN; // 测试
          var scrollPercent = Math.min(
            (100 * window.scrollY) / contentVisibilityHeight,
            100
          );
          if (Number.isNaN(scrollPercent)) {
            // console.error("backToBottom 出现 NaN 问题：", Number.isNaN(scrollPercent));
            // 防止出现 NaN
            scrollPercent = 0;
          }
          // console.log("docHeight: " + docHeight, "winHeight: " + winHeight, "window.scrollY: " + window.scrollY, contentVisibilityHeight, document.body.scrollHeight)
          document.querySelector("button.back-to-top-progress").innerText =
            Math.round(scrollPercent) + "%";
        }
      };
      calcScrollPercent(btn);
    });

    var backToTop = document.querySelector("button.back-to-top");

    backToTop &&
      backToTop.addEventListener("click", () => {
        window.anime({
          targets: document.scrollingElement,
          duration: 500,
          easing: "linear",
          scrollTop: 0
        });
      });

    var backToBottom = document.querySelector("button#back2bottom");

    backToBottom &&
      backToBottom.addEventListener("click", () => {
        window.anime({
          targets: document.scrollingElement,
          duration: 500,
          easing: "linear",
          scrollTop: document.body.scrollHeight
        });
      });
  });
})();

$(document).ready(function () {
  if ($(window).scrollTop() < 200) {
    $(".page-down").fadeIn();
  } else {
    $(".page-up").fadeIn();
  }
  $("#right-bottom-float-btns button").click(function () {
    var currentScroll = $(document).scrollTop();
    if ($(this).hasClass("page-top")) {
      $("html, body").animate({ scrollTop: $("body").offset().top }, 400);
    }
    if ($(this).hasClass("page-bottom")) {
      $("html, body").animate(
        { scrollTop: $(window).scrollTop() + $(document).height() },
        400,
      );
    }
    if ($(this).hasClass("page-up")) {
      $("html, body").animate(
        { scrollTop: currentScroll - $(window).height() },
        400,
      );
    }
    if ($(this).hasClass("page-down")) {
      $("html, body").animate(
        { scrollTop: currentScroll + $(window).height() },
        400,
      );
    }
  });
  $(window).scroll(function () {
    if ($(this).scrollTop() >= $(window).height() / 2) {
      $(".page-up").fadeIn();
    } else {
      $(".page-up").fadeOut();
    }
    if ($(this).scrollTop() >= $(document).height() - $(window).height()) {
      $(".page-up").fadeIn();
      $(".page-down").fadeOut();
    } else if (
      $(this).scrollTop() >=
      $(document).scrollTop() - $(window).height() / 2
    ) {
      $(".page-down").fadeIn();
    }
  });
});
