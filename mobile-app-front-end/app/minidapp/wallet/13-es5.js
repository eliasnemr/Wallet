(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ "./node_modules/@ionic/core/dist/esm-es5/ion-img.entry.js":
/*!****************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/ion-img.entry.js ***!
  \****************************************************************/
/*! exports provided: ion_img */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_img", function() { return Img; });
/* harmony import */ var _index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-e806d1f6.js */ "./node_modules/@ionic/core/dist/esm-es5/index-e806d1f6.js");
/* harmony import */ var _ionic_global_9d5c8ee3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ionic-global-9d5c8ee3.js */ "./node_modules/@ionic/core/dist/esm-es5/ionic-global-9d5c8ee3.js");
var imgCss=":host{display:block;-o-object-fit:contain;object-fit:contain}img{display:block;width:100%;height:100%;-o-object-fit:inherit;object-fit:inherit;-o-object-position:inherit;object-position:inherit}";var Img=function(){function t(t){var e=this;Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this,t);this.ionImgWillLoad=Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this,"ionImgWillLoad",7);this.ionImgDidLoad=Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this,"ionImgDidLoad",7);this.ionError=Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this,"ionError",7);this.onLoad=function(){e.ionImgDidLoad.emit()};this.onError=function(){e.ionError.emit()}}t.prototype.srcChanged=function(){this.addIO()};t.prototype.componentDidLoad=function(){this.addIO()};t.prototype.addIO=function(){var t=this;if(this.src===undefined){return}if(typeof window!=="undefined"&&"IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"isIntersecting"in window.IntersectionObserverEntry.prototype){this.removeIO();this.io=new IntersectionObserver((function(e){if(e[0].isIntersecting){t.load();t.removeIO()}}));this.io.observe(this.el)}else{setTimeout((function(){return t.load()}),200)}};t.prototype.load=function(){this.loadError=this.onError;this.loadSrc=this.src;this.ionImgWillLoad.emit()};t.prototype.removeIO=function(){if(this.io){this.io.disconnect();this.io=undefined}};t.prototype.render=function(){return Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__["H"],{class:Object(_ionic_global_9d5c8ee3_js__WEBPACK_IMPORTED_MODULE_1__["b"])(this)},Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__["h"])("img",{decoding:"async",src:this.loadSrc,alt:this.alt,onLoad:this.onLoad,onError:this.loadError,part:"image"}))};Object.defineProperty(t.prototype,"el",{get:function(){return Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__["i"])(this)},enumerable:false,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{src:["srcChanged"]}},enumerable:false,configurable:true});return t}();Img.style=imgCss;

/***/ })

}]);
//# sourceMappingURL=13-es5.js.map