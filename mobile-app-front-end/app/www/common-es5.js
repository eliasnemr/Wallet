(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./node_modules/@ionic/core/dist/esm-es5/button-active-a6787d69.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/button-active-a6787d69.js ***!
  \*************************************************************************/
/*! exports provided: c */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createButtonActiveGesture; });
/* harmony import */ var _index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-e806d1f6.js */ "./node_modules/@ionic/core/dist/esm-es5/index-e806d1f6.js");
/* harmony import */ var _index_f49d994d_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-f49d994d.js */ "./node_modules/@ionic/core/dist/esm-es5/index-f49d994d.js");
/* harmony import */ var _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./haptic-27b3f981.js */ "./node_modules/@ionic/core/dist/esm-es5/haptic-27b3f981.js");
var createButtonActiveGesture=function(t,e){var n;var r;var i=function(t,r,i){if(typeof document==="undefined"){return}var o=document.elementFromPoint(t,r);if(!o||!e(o)){c();return}if(o!==n){c();a(o,i)}};var a=function(t,e){n=t;if(!r){r=n}var i=n;Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__["c"])((function(){return i.classList.add("ion-activated")}));e()};var c=function(t){if(t===void 0){t=false}if(!n){return}var e=n;Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__["c"])((function(){return e.classList.remove("ion-activated")}));if(t&&r!==n){n.click()}n=undefined};return Object(_index_f49d994d_js__WEBPACK_IMPORTED_MODULE_1__["createGesture"])({el:t,gestureName:"buttonActiveDrag",threshold:0,onStart:function(t){return i(t.currentX,t.currentY,_haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__["a"])},onMove:function(t){return i(t.currentX,t.currentY,_haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__["b"])},onEnd:function(){c(true);Object(_haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__["h"])();r=undefined}})};

/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm-es5/framework-delegate-4584ab5a.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/framework-delegate-4584ab5a.js ***!
  \******************************************************************************/
/*! exports provided: a, d */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return attachComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return detachComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var attachComponent=function(e,t,n,r,o){return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0,void 0,void 0,(function(){var a;return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this,(function(i){switch(i.label){case 0:if(e){return[2,e.attachViewToDom(t,n,o,r)]}if(typeof n!=="string"&&!(n instanceof HTMLElement)){throw new Error("framework delegate is missing")}a=typeof n==="string"?t.ownerDocument&&t.ownerDocument.createElement(n):n;if(r){r.forEach((function(e){return a.classList.add(e)}))}if(o){Object.assign(a,o)}t.appendChild(a);if(!a.componentOnReady)return[3,2];return[4,a.componentOnReady()];case 1:i.sent();i.label=2;case 2:return[2,a]}}))}))};var detachComponent=function(e,t){if(t){if(e){var n=t.parentElement;return e.removeViewFromDom(n,t)}t.remove()}return Promise.resolve()};

/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm-es5/haptic-27b3f981.js":
/*!******************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/haptic-27b3f981.js ***!
  \******************************************************************/
/*! exports provided: a, b, c, d, h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hapticSelectionStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hapticSelectionChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hapticSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return hapticImpact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hapticSelectionEnd; });
var HapticEngine={getEngine:function(){var t=window;return t.TapticEngine||t.Capacitor&&t.Capacitor.isPluginAvailable("Haptics")&&t.Capacitor.Plugins.Haptics},available:function(){return!!this.getEngine()},isCordova:function(){return!!window.TapticEngine},isCapacitor:function(){var t=window;return!!t.Capacitor},impact:function(t){var i=this.getEngine();if(!i){return}var n=this.isCapacitor()?t.style.toUpperCase():t.style;i.impact({style:n})},notification:function(t){var i=this.getEngine();if(!i){return}var n=this.isCapacitor()?t.style.toUpperCase():t.style;i.notification({style:n})},selection:function(){this.impact({style:"light"})},selectionStart:function(){var t=this.getEngine();if(!t){return}if(this.isCapacitor()){t.selectionStart()}else{t.gestureSelectionStart()}},selectionChanged:function(){var t=this.getEngine();if(!t){return}if(this.isCapacitor()){t.selectionChanged()}else{t.gestureSelectionChanged()}},selectionEnd:function(){var t=this.getEngine();if(!t){return}if(this.isCapacitor()){t.selectionEnd()}else{t.gestureSelectionEnd()}}};var hapticSelection=function(){HapticEngine.selection()};var hapticSelectionStart=function(){HapticEngine.selectionStart()};var hapticSelectionChanged=function(){HapticEngine.selectionChanged()};var hapticSelectionEnd=function(){HapticEngine.selectionEnd()};var hapticImpact=function(t){HapticEngine.impact(t)};

/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm-es5/spinner-configs-cd7845af.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/spinner-configs-cd7845af.js ***!
  \***************************************************************************/
/*! exports provided: S */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return SPINNERS; });
var spinners={bubbles:{dur:1e3,circles:9,fn:function(r,n,e){var t=r*n/e-r+"ms";var a=2*Math.PI*n/e;return{r:5,style:{top:9*Math.sin(a)+"px",left:9*Math.cos(a)+"px","animation-delay":t}}}},circles:{dur:1e3,circles:8,fn:function(r,n,e){var t=n/e;var a=r*t-r+"ms";var s=2*Math.PI*t;return{r:5,style:{top:9*Math.sin(s)+"px",left:9*Math.cos(s)+"px","animation-delay":a}}}},circular:{dur:1400,elmDuration:true,circles:1,fn:function(){return{r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}}}},crescent:{dur:750,circles:1,fn:function(){return{r:26,style:{}}}},dots:{dur:750,circles:3,fn:function(r,n){var e=-(110*n)+"ms";return{r:6,style:{left:9-9*n+"px","animation-delay":e}}}},lines:{dur:1e3,lines:12,fn:function(r,n,e){var t="rotate("+(30*n+(n<6?180:-180))+"deg)";var a=r*n/e-r+"ms";return{y1:17,y2:29,style:{transform:t,"animation-delay":a}}}},"lines-small":{dur:1e3,lines:12,fn:function(r,n,e){var t="rotate("+(30*n+(n<6?180:-180))+"deg)";var a=r*n/e-r+"ms";return{y1:12,y2:20,style:{transform:t,"animation-delay":a}}}}};var SPINNERS=spinners;

/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm-es5/theme-ff3fc52f.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/theme-ff3fc52f.js ***!
  \*****************************************************************/
/*! exports provided: c, g, h, o */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createColorClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getClassMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hostContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return openURL; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var hostContext=function(r,t){return t.closest(r)!==null};var createColorClasses=function(r,t){var e;return typeof r==="string"&&r.length>0?Object.assign((e={"ion-color":true},e["ion-color-"+r]=true,e),t):t};var getClassList=function(r){if(r!==undefined){var t=Array.isArray(r)?r:r.split(" ");return t.filter((function(r){return r!=null})).map((function(r){return r.trim()})).filter((function(r){return r!==""}))}return[]};var getClassMap=function(r){var t={};getClassList(r).forEach((function(r){return t[r]=true}));return t};var SCHEME=/^[a-z][a-z0-9+\-.]*:/;var openURL=function(r,t,e,n){return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0,void 0,void 0,(function(){var o;return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this,(function(a){if(r!=null&&r[0]!=="#"&&!SCHEME.test(r)){o=document.querySelector("ion-router");if(o){if(t!=null){t.preventDefault()}return[2,o.push(r,e,n)]}}return[2,false]}))}))};

/***/ })

}]);
//# sourceMappingURL=common-es5.js.map