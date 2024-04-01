/* eslint-disable */

// window.onload = function() {

// }
document.addEventListener("DOMContentLoaded", function (event) {
  // <script src="https://clipboardjs.com/assets/scripts/snippets.js"></script>
  var snippets = document.querySelectorAll("pre");
  [].forEach.call(snippets, function (snippet) {
    /*snippet.firstChild.insertAdjacentHTML(
    "beforebegin",
    '<button class="btn" data-clipboard-snippet><img class="clippy" width="13" src="https://clipboardjs.com/assets/images/clippy.svg" alt="Copy to clipboard"></button>'
  );*/
    snippet.firstChild.insertAdjacentHTML(
      "beforebegin",
      '<button class="btn" data-clipboard-snippet><svg class="clippy" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z"></path><path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"></path></svg></button>'
    );
  });
  var clipboardSnippets = new ClipboardJS("[data-clipboard-snippet]", {
    target: function (trigger) {
      return trigger.nextElementSibling;
    }
  });
  clipboardSnippets.on("success", function (e) {
    e.clearSelection();
    showTooltip(e.trigger, "Copied!");
  });
  clipboardSnippets.on("error", function (e) {
    showTooltip(e.trigger, fallbackMessage(e.action));
  });

  // <script src="https://clipboardjs.com/assets/scripts/tooltips.js"><\/script>
  var btns = document.querySelectorAll(".btn");
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("mouseleave", clearTooltip);
    btns[i].addEventListener("blur", clearTooltip);
  }
  function clearTooltip(e) {
    e.currentTarget.setAttribute("class", "btn");
    e.currentTarget.removeAttribute("aria-label");
  }
  function showTooltip(elem, msg) {
    elem.setAttribute("class", "btn tooltipped tooltipped-w");
    elem.setAttribute("aria-label", msg);
  }
  function fallbackMessage(action) {
    var actionMsg = "";
    var actionKey = action === "cut" ? "X" : "C";
    if (/iPhone|iPad/i.test(navigator.userAgent)) {
      actionMsg = "No support :(";
    } else if (/Mac/i.test(navigator.userAgent)) {
      actionMsg = "Press ⌘-" + actionKey + " to " + action;
    } else {
      actionMsg = "Press Ctrl-" + actionKey + " to " + action;
    }
    return actionMsg;
  }
});
