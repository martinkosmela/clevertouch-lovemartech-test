"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}!function(n){var r={};function o(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=n,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==_typeof(t)&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t){document.querySelectorAll(".form input").forEach(function(e){e.addEventListener("input",function(){e.value.trim()?e.classList.add("form__input--filled"):e.classList.remove("form__input--filled")})});var n=document.querySelector("#contactForm");n.addEventListener("submit",function(e){e.preventDefault();e=new FormData(n);r(e)});var r=function(e){e=Array.from(e.values());console.log("Contact form data: "+e)},o=document.querySelector("#newsletterForm");o.addEventListener("submit",function(e){e.preventDefault();e=new FormData(o);i(e)});var u,c,i=function(e){var t=e.get("email"),e=e.get("consent");t&&"on"===e?console.log("Newsletter form email: ".concat(t,", ").concat(e)):alert("Email and accepting consent is required")};"IntersectionObserver"in window&&(u=document.querySelectorAll(".lazy"),c=new IntersectionObserver(function(e){e.forEach(function(e){e.isIntersecting&&((e=e.target).src=e.dataset.src,e.classList.remove("lazy"),c.unobserve(e))})}),u.forEach(function(e){c.observe(e)}))}]);
//# sourceMappingURL=all.js.map
