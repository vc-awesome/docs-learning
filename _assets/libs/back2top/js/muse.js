/* global NexT, CONFIG, Velocity */

document.addEventListener('DOMContentLoaded', () => {

  var isRight = CONFIG.sidebar.position === 'right';
  var SIDEBAR_WIDTH = CONFIG.sidebar.width || 320;
  var SIDEBAR_DISPLAY_DURATION = 200;
  var mousePos = {};

  var sidebarToggleLines = {
    lines: document.querySelector('.toc-sidebar-toggle'),
    init : function() {
      this.lines.classList.remove('toggle-arrow', 'toggle-close');
    },
    arrow: function() {
      this.lines.classList.remove('toggle-close');
      this.lines.classList.add('toggle-arrow');
    },
    close: function() {
      this.lines.classList.remove('toggle-arrow');
      this.lines.classList.add('toggle-close');
    }
  };

  var sidebarToggleMotion = {
    sidebarEl       : document.querySelector('.sidebar'),
    isSidebarVisible: false,
    init            : function() {
      sidebarToggleLines.init();

      window.addEventListener('mousedown', this.mousedownHandler.bind(this));
      window.addEventListener('mouseup', this.mouseupHandler.bind(this));
      // document.querySelector('#sidebar-dimmer').addEventListener('click', this.clickHandler.bind(this));
      document.querySelector('.toc-sidebar-toggle').addEventListener('click', this.clickHandler.bind(this));
      document.querySelector('.toc-sidebar-toggle').addEventListener('mouseenter', this.mouseEnterHandler.bind(this));
      document.querySelector('.toc-sidebar-toggle').addEventListener('mouseleave', this.mouseLeaveHandler.bind(this));
      window.addEventListener('sidebar:show', this.showSidebar.bind(this));
      window.addEventListener('sidebar:hide', this.hideSidebar.bind(this));

      /*let ObjStatus = document.querySelector('.toc-toggle')
      document.addEventListener('click', (e) => {
        let t = document.querySelector('.toc-nav') // 最外层元素
        if (!e.path.includes(ObjStatus)) {
          if (!e.path.includes(t)) {
            // document.querySelector('.toc-nav').classList.toggle('toc-nav-hover', e.path.includes(t));

            if (document.querySelector('.toc-nav-hover')) {
              this.hideSidebar();
            }
            // ObjStatus.innerHTML = '事件触发情况：触发'
          } else {
            // ObjStatus.innerHTML = '事件触发情况：未触发'
          }
        }
      })*/
    },
    mousedownHandler: function(event) {
      mousePos.X = event.pageX;
      mousePos.Y = event.pageY;
    },
    mouseupHandler: function(event) {
      var deltaX = event.pageX - mousePos.X;
      var deltaY = event.pageY - mousePos.Y;
      var clickingBlankPart = Math.sqrt((deltaX * deltaX) + (deltaY * deltaY)) < 20 && event.target.matches('.main');
      if (this.isSidebarVisible && (clickingBlankPart || event.target.matches('img.medium-zoom-image, .fancybox img'))) {
        this.hideSidebar();
      }
    },
    clickHandler: function() {
      this.isSidebarVisible ? this.hideSidebar() : this.showSidebar();
    },
    mouseEnterHandler: function() {
      if (!this.isSidebarVisible) {
        sidebarToggleLines.arrow();
      }
    },
    mouseLeaveHandler: function() {
      if (!this.isSidebarVisible) {
        sidebarToggleLines.init();
      }
    },
    showSidebar: function() {
      this.isSidebarVisible = true;
      // this.sidebarEl.classList.add('sidebar-active');
      // if (typeof Velocity === 'function') {
      //   Velocity(document.querySelectorAll('.sidebar .motion-element'), isRight ? 'transition.slideRightIn' : 'transition.slideLeftIn', {
      //     stagger: 50,
      //     drag   : true
      //   });
      // }

      document.querySelector('.toc-nav').classList.toggle('toc-nav-hover');

      sidebarToggleLines.close();
      // NexT.utils.isDesktop() && window.anime(Object.assign({
      //   targets : document.body,
      //   duration: SIDEBAR_DISPLAY_DURATION,
      //   easing  : 'linear'
      // }, isRight ? {
      //   'padding-right': SIDEBAR_WIDTH
      // } : {
      //   'padding-left': SIDEBAR_WIDTH
      // }));
    },
    hideSidebar: function() {
      this.isSidebarVisible = false;
      // this.sidebarEl.classList.remove('sidebar-active');

      document.querySelector('.toc-nav').classList.toggle('toc-nav-hover');

      sidebarToggleLines.init();
      // NexT.utils.isDesktop() && window.anime(Object.assign({
      //   targets : document.body,
      //   duration: SIDEBAR_DISPLAY_DURATION,
      //   easing  : 'linear'
      // }, isRight ? {
      //   'padding-right': 0
      // } : {
      //   'padding-left': 0
      // }));
    }
  };
  sidebarToggleMotion.init();

  // function updateFooterPosition() {
  //   var footer = document.querySelector('.footer');
  //   var containerHeight = document.querySelector('.header').offsetHeight + document.querySelector('.main').offsetHeight + footer.offsetHeight;
  //   footer.classList.toggle('footer-fixed', containerHeight <= window.innerHeight);
  // }

  // updateFooterPosition();
  // window.addEventListener('resize', updateFooterPosition);
  // window.addEventListener('scroll', updateFooterPosition);
});
