!function(e,t){for(var n in t)e[n]=t[n]}(exports,function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=6)}({6:function(e,t,n){const r=n(7);t.handler=function(e,t,n){n(null,{statusCode:200,body:JSON.stringify({data:r})})}},7:function(e){e.exports=[{type:"text",name:"name",label:"Hi, My name is",placeholder:"Please enter your name",validation:"A-Za-z"},{type:"radio_group",name:"and_i",label:"And I",options:[{label:"Am a spam bot / didnt read this form thoroughly",value:"chump"},{label:"Am I recruiter who has a potential contract role for you",value:"prospect - recruiter"},{label:"Am someone who would be interested in working with you",value:"prospect - client/partner"},{label:"Will always love youuuu....",value:"Whitney Houston"}]},{type:"textarea",name:"details",label:"Here are my contact details and some more information",placeholder:"Enter anything you like here but if you don't put your details in, I can't reach you."}]}}));