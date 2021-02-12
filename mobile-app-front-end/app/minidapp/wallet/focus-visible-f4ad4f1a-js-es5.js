(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["focus-visible-f4ad4f1a-js"],{

/***/ "./node_modules/@ionic/core/dist/esm-es5/focus-visible-f4ad4f1a.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/focus-visible-f4ad4f1a.js ***!
  \*************************************************************************/
/*! exports provided: startFocusVisible */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startFocusVisible", function() { return startFocusVisible; });
var ION_FOCUSED="ion-focused";var ION_FOCUSABLE="ion-focusable";var FOCUS_KEYS=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp"];var startFocusVisible=function(){var t=[];var e=true;var n=document;var r=function(e){t.forEach((function(t){return t.classList.remove(ION_FOCUSED)}));e.forEach((function(t){return t.classList.add(ION_FOCUSED)}));t=e};var o=function(){e=false;r([])};n.addEventListener("keydown",(function(t){e=FOCUS_KEYS.includes(t.key);if(!e){r([])}}));n.addEventListener("focusin",(function(t){if(e&&t.composedPath){var n=t.composedPath().filter((function(t){if(t.classList){return t.classList.contains(ION_FOCUSABLE)}return false}));r(n)}}));n.addEventListener("focusout",(function(){if(n.activeElement===n.body){r([])}}));n.addEventListener("touchstart",o);n.addEventListener("mousedown",o)};

/***/ })

}]);
//# sourceMappingURL=focus-visible-f4ad4f1a-js-es5.js.map