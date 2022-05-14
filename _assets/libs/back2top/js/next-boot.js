/* global NexT, CONFIG, Velocity */

NexT.boot = {};

NexT.boot.registerEvents = function() {

  NexT.utils.registerScrollPercent();
  NexT.utils.registerCanIUseTag();
};

document.addEventListener('DOMContentLoaded', () => {
  NexT.boot.registerEvents();
});
