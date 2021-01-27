(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/@ionic/core/dist/esm-es5/ion-backdrop.entry.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/ion-backdrop.entry.js ***!
  \*********************************************************************/
/*! exports provided: ion_backdrop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_backdrop", function() { return Backdrop; });
/* harmony import */ var _index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-e806d1f6.js */ "./node_modules/@ionic/core/dist/esm-es5/index-e806d1f6.js");
/* harmony import */ var _ionic_global_9d5c8ee3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ionic-global-9d5c8ee3.js */ "./node_modules/@ionic/core/dist/esm-es5/ionic-global-9d5c8ee3.js");
/* harmony import */ var _gesture_controller_31cb6bb9_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gesture-controller-31cb6bb9.js */ "./node_modules/@ionic/core/dist/esm-es5/gesture-controller-31cb6bb9.js");
var backdropIosCss=":host{left:0;right:0;top:0;bottom:0;display:block;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);contain:strict;cursor:pointer;opacity:0.01;-ms-touch-action:none;touch-action:none;z-index:2}:host(.backdrop-hide){background:transparent}:host(.backdrop-no-tappable){cursor:auto}:host{background-color:var(--ion-backdrop-color, #000)}";var backdropMdCss=":host{left:0;right:0;top:0;bottom:0;display:block;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);contain:strict;cursor:pointer;opacity:0.01;-ms-touch-action:none;touch-action:none;z-index:2}:host(.backdrop-hide){background:transparent}:host(.backdrop-no-tappable){cursor:auto}:host{background-color:var(--ion-backdrop-color, #000)}";var Backdrop=function(){function o(o){Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this,o);this.ionBackdropTap=Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this,"ionBackdropTap",7);this.blocker=_gesture_controller_31cb6bb9_js__WEBPACK_IMPORTED_MODULE_2__["G"].createBlocker({disableScroll:true});this.visible=true;this.tappable=true;this.stopPropagation=true}o.prototype.connectedCallback=function(){if(this.stopPropagation){this.blocker.block()}};o.prototype.disconnectedCallback=function(){this.blocker.unblock()};o.prototype.onMouseDown=function(o){this.emitTap(o)};o.prototype.emitTap=function(o){if(this.stopPropagation){o.preventDefault();o.stopPropagation()}if(this.tappable){this.ionBackdropTap.emit()}};o.prototype.render=function(){var o;var t=Object(_ionic_global_9d5c8ee3_js__WEBPACK_IMPORTED_MODULE_1__["b"])(this);return Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__["H"],{tabindex:"-1","aria-hidden":"true",class:(o={},o[t]=true,o["backdrop-hide"]=!this.visible,o["backdrop-no-tappable"]=!this.tappable,o)})};return o}();Backdrop.style={ios:backdropIosCss,md:backdropMdCss};

/***/ })

}]);
//# sourceMappingURL=5-es5.js.map