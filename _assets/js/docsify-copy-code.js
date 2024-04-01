/* eslint-disable */

(function () {
  var copyCode = function (hook, vm) {
    // Invoked one time when the docsify instance has mounted on the DOM
    hook.mounted(function() {
      var listenerHost = document.querySelector(".content,header");
      listenerHost.addEventListener("click", function(evt) {
        var isCodeElm = evt.target.nodeName == "CODE" || evt.target.parentNode.dataset.codecopy;
        if (isCodeElm && evt.target.parentNode.nodeName != "PRE") {
          if (evt.target.parentNode.dataset.codecopy) {
            copy(evt, evt.target.parentNode);
            return;
          }
          copy(evt);
        }
      });
      function copy(evt, showToolTipTarget) {
        if (showToolTipTarget === undefined) {
          showToolTipTarget = evt.target;
        }
        var range = document.createRange();
        var codeElm = evt.target;
        var selection = window.getSelection();
        range.selectNode(codeElm);
        selection.removeAllRanges();
        selection.addRange(range);
        try {
          var successful = document.execCommand("copy");
          if (successful) {
            showTooltip(showToolTipTarget, 'Copied!');
          }
        } catch (err) {
          console.error("docsify-copy-code: ".concat(err));
          showTooltip(showToolTipTarget, "docsify-copy-code: ".concat(err));
        }
        selection = window.getSelection();
        if (typeof selection.removeRange === "function") {
          selection.removeRange(range);
        } else if (typeof selection.removeAllRanges === "function") {
          selection.removeAllRanges();
        }
      }
      function showTooltip(elem, msg) {
        elem.setAttribute('class', 'tooltipped tooltipped-ne tooltipped-no-delay tooltipped-align-left-1');
        elem.setAttribute('aria-label', msg);
      }
    });
    hook.doneEach(function() {
      var codes = document.querySelectorAll('p code,li > code,[data-codecopy]');
      for (var i = 0; i < codes.length; i++) {
        codes[i].addEventListener('mouseleave', clearTooltip);
        if (!window.Docsify.util.isMobile) {
          codes[i].addEventListener('mouseenter', showTooltip);
          codes[i].addEventListener('blur', showTooltip);
        }
      }
      function clearTooltip(e) {
        e.currentTarget.removeAttribute('class');
        e.currentTarget.removeAttribute('aria-label');
      }
      function showTooltip(e) {
        e.currentTarget.setAttribute('class', 'tooltipped tooltipped-ne tooltipped-no-delay tooltipped-align-left-1');
        e.currentTarget.setAttribute('aria-label', 'Click copy to clipboard');
      }
    });
  };

  // Add plugin to docsify's plugin array
  $docsify = $docsify || {};
  $docsify.plugins = [].concat(copyCode, $docsify.plugins || []);
})();
