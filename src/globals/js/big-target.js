/* global jQuery */

;(function ($) {
  $.fn.clarity_bigTarget = function (target) {
    var clickbox = $(this)
    var destination = clickbox.find(target).attr('href')
    clickbox.on('click', function () {
      window.location = destination
    }).css('cursor', 'pointer')
    return this
  }
})(jQuery)
