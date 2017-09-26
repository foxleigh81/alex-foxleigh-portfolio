/* global $ */

/*

Script loader

In order to avoid performance issues, scripts are not automatically
loaded when a component is generated. You must explicitly execute your scripts here.

You can attach a script to any element but please put a js- class for any hooks to ensure future proofing.

*/

$(document).ready(function () {
  // Tell the css that JavaScript has loaded successfully
  $('html').removeClass('no-js').addClass('js')
})
