(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-send-funds-send-funds-module"],{

/***/ "./node_modules/qr-scanner/qr-scanner.min.js":
/*!***************************************************!*\
  !*** ./node_modules/qr-scanner/qr-scanner.min.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class e{static hasCamera(){return navigator.mediaDevices.enumerateDevices().then((a)=>a.some((a)=>"videoinput"===a.kind)).catch(()=>!1)}constructor(a,c,b=e.DEFAULT_CANVAS_SIZE){this.$video=a;this.$canvas=document.createElement("canvas");this._onDecode=c;this._paused=this._active=!1;this.$canvas.width=b;this.$canvas.height=b;this._sourceRect={x:0,y:0,width:b,height:b};this._onCanPlay=this._onCanPlay.bind(this);this._onPlay=this._onPlay.bind(this);this._onVisibilityChange=this._onVisibilityChange.bind(this);
this.$video.addEventListener("canplay",this._onCanPlay);this.$video.addEventListener("play",this._onPlay);document.addEventListener("visibilitychange",this._onVisibilityChange);this._qrWorker=new Worker(e.WORKER_PATH)}destroy(){this.$video.removeEventListener("canplay",this._onCanPlay);this.$video.removeEventListener("play",this._onPlay);document.removeEventListener("visibilitychange",this._onVisibilityChange);this.stop();this._qrWorker.postMessage({type:"close"})}start(){if(this._active&&!this._paused)return Promise.resolve();
"https:"!==window.location.protocol&&console.warn("The camera stream is only accessible if the page is transferred via https.");this._active=!0;this._paused=!1;if(document.hidden)return Promise.resolve();clearTimeout(this._offTimeout);this._offTimeout=null;if(this.$video.srcObject)return this.$video.play(),Promise.resolve();let a="environment";return this._getCameraStream("environment",!0).catch(()=>{a="user";return this._getCameraStream()}).then((c)=>{this.$video.srcObject=c;this._setVideoMirror(a)}).catch((a)=>
{this._active=!1;throw a;})}stop(){this.pause();this._active=!1}pause(){this._paused=!0;this._active&&(this.$video.pause(),this._offTimeout||(this._offTimeout=setTimeout(()=>{let a=this.$video.srcObject&&this.$video.srcObject.getTracks()[0];a&&(a.stop(),this._offTimeout=this.$video.srcObject=null)},300)))}static scanImage(a,c=null,b=null,d=null,f=!1,g=!1){let h=!1,l=new Promise((l,g)=>{b||(b=new Worker(e.WORKER_PATH),h=!0,b.postMessage({type:"inversionMode",data:"both"}));let n,m,k;m=(a)=>{"qrResult"===
a.data.type&&(b.removeEventListener("message",m),b.removeEventListener("error",k),clearTimeout(n),null!==a.data.data?l(a.data.data):g("QR code not found."))};k=(a)=>{b.removeEventListener("message",m);b.removeEventListener("error",k);clearTimeout(n);g("Scanner error: "+(a?a.message||a:"Unknown Error"))};b.addEventListener("message",m);b.addEventListener("error",k);n=setTimeout(()=>k("timeout"),3E3);e._loadImage(a).then((a)=>{a=e._getImageData(a,c,d,f);b.postMessage({type:"decode",data:a},[a.data.buffer])}).catch(k)});
c&&g&&(l=l.catch(()=>e.scanImage(a,null,b,d,f)));return l=l.finally(()=>{h&&b.postMessage({type:"close"})})}setGrayscaleWeights(a,c,b,d=!0){this._qrWorker.postMessage({type:"grayscaleWeights",data:{red:a,green:c,blue:b,useIntegerApproximation:d}})}setInversionMode(a){this._qrWorker.postMessage({type:"inversionMode",data:a})}_onCanPlay(){this._updateSourceRect();this.$video.play()}_onPlay(){this._updateSourceRect();this._scanFrame()}_onVisibilityChange(){document.hidden?this.pause():this._active&&
this.start()}_updateSourceRect(){let a=Math.round(2/3*Math.min(this.$video.videoWidth,this.$video.videoHeight));this._sourceRect.width=this._sourceRect.height=a;this._sourceRect.x=(this.$video.videoWidth-a)/2;this._sourceRect.y=(this.$video.videoHeight-a)/2}_scanFrame(){if(!this._active||this.$video.paused||this.$video.ended)return!1;requestAnimationFrame(()=>{e.scanImage(this.$video,this._sourceRect,this._qrWorker,this.$canvas,!0).then(this._onDecode,(a)=>{this._active&&"QR code not found."!==a&&
console.error(a)}).then(()=>this._scanFrame())})}_getCameraStream(a,c=!1){let b=[{width:{min:1024}},{width:{min:768}},{}];a&&(c&&(a={exact:a}),b.forEach((b)=>b.facingMode=a));return this._getMatchingCameraStream(b)}_getMatchingCameraStream(a){return 0===a.length?Promise.reject("Camera not found."):navigator.mediaDevices.getUserMedia({video:a.shift()}).catch(()=>this._getMatchingCameraStream(a))}_setVideoMirror(a){this.$video.style.transform="scaleX("+("user"===a?-1:1)+")"}static _getImageData(a,c=
null,b=null,d=!1){b=b||document.createElement("canvas");let f=c&&c.x?c.x:0,g=c&&c.y?c.y:0,h=c&&c.width?c.width:a.width||a.videoWidth;c=c&&c.height?c.height:a.height||a.videoHeight;d||b.width===h&&b.height===c||(b.width=h,b.height=c);d=b.getContext("2d",{alpha:!1});d.imageSmoothingEnabled=!1;d.drawImage(a,f,g,h,c,0,0,b.width,b.height);return d.getImageData(0,0,b.width,b.height)}static _loadImage(a){if(a instanceof HTMLCanvasElement||a instanceof HTMLVideoElement||window.ImageBitmap&&a instanceof window.ImageBitmap||
window.OffscreenCanvas&&a instanceof window.OffscreenCanvas)return Promise.resolve(a);if(a instanceof Image)return e._awaitImageLoad(a).then(()=>a);if(a instanceof File||a instanceof URL||"string"===typeof a){let c=new Image;c.src=a instanceof File?URL.createObjectURL(a):a;return e._awaitImageLoad(c).then(()=>{a instanceof File&&URL.revokeObjectURL(c.src);return c})}return Promise.reject("Unsupported image type.")}static _awaitImageLoad(a){return new Promise((c,b)=>{if(a.complete&&0!==a.naturalWidth)c();
else{let d,f;d=()=>{a.removeEventListener("load",d);a.removeEventListener("error",f);c()};f=()=>{a.removeEventListener("load",d);a.removeEventListener("error",f);b("Image load error")};a.addEventListener("load",d);a.addEventListener("error",f)}})}}e.DEFAULT_CANVAS_SIZE=400;e.WORKER_PATH="qr-scanner-worker.min.js";/* harmony default export */ __webpack_exports__["default"] = (e);
//# sourceMappingURL=qr-scanner.min.js.map


/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/send-funds/send-funds.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/send-funds/send-funds.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-app>\n<ion-header>\n  <ion-toolbar class=\"border-b\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button class=\"menu-icon\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title class=\"large-text\">\n      Send\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content *ngIf=\"isCameraOpen==false\">\n\n  <ion-grid *ngIf=\"tokenArr.length == 0\">\n    <ion-row>\n      <ion-col style=\"display: flex; align-items:center; justify-content:center\" size=\"12\">\n        <ion-label>Fetching tokens...</ion-label>\n      </ion-col>\n      <ion-col style=\"display: flex; align-items:center; justify-content:center\" size=\"12\">\n        <ion-spinner name=\"crescent\"></ion-spinner>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-card class=\"webscan-canvas\" *ngIf=\"!checkPlatform() && isWebCameraOpen\">\n    <ion-card-header class=\"medium-text\">\n    Scan Your Minima QR address now...\n    <ion-progress-bar type=\"indeterminate\" reversed=\"true\"></ion-progress-bar>\n    </ion-card-header>\n    <video height=\"240\" #videoElem></video>\n    <hr>\n    <ion-button block=\"full\" (click)=\"stopWebScanQR()\">Stop Scanning</ion-button>\n    <hr>\n  </ion-card>\n\n  <ion-card class=\"borders\" *ngIf=\"!isWebCameraOpen && tokenArr.length > 0\">\n    <ion-card-header>\n      Post A Transaction\n      <ion-card-title>\n          <ion-icon style=\" font-size:1.2rem;\" slot=\"start\" name=\"send\" class=\"icon-head medium-text\" ></ion-icon>\n      </ion-card-title>\n    </ion-card-header>\n\n    <ion-card-content>\n      <form [formGroup]=\"sendForm\" id=\"sendForm\" (ngSubmit)=\"sendFunds()\">\n        <ion-list lines=\"none\">\n          <ion-item>\n            <ion-label position=\"fixed\" class=\"medium-text\">Token</ion-label>\n            <ion-select\n                formControlName=\"token\"\n                interface = 'alert'\n                [(ngModel)]=\"itemSelected\"\n                class=\"medium-text input\"\n                (ionChange)=\"onItemSelection($event)\"> \n            <ion-select-option *ngFor=\"let token of tokenArr;\" [value]=\"token\" class=\"token-option\">\n              {{ token.token + \"&mdash;\"+ token.tokenid }}\n            </ion-select-option>\n          </ion-select>\n          </ion-item>\n          <ion-item lines=\"none\">\n            <ion-label class=\"medium-text\" position=\"fixed\">Address</ion-label>\n            <span (click)=\"webScanQR()\" id=\"qrIcon\"> <ion-icon alt=\"qrCode\" src=\"assets/scan-outline.svg\"></ion-icon></span>\n            <ion-input #address class=\"medium-text input\" formControlName=\"address\" clearInput=\"true\" placeholder=\"address\"></ion-input>\n          </ion-item>\n          <ion-item class=\"error\" lines=\"none\" *ngIf=\"addressFormItem.invalid && addressFormItem.touched\">\n            <ion-label position=\"fixed\"></ion-label>\n            <ion-note class=\"error-message\">\n              <ion-icon name=\"alert-circle\"></ion-icon> <span> Invalid address format!</span> <br>\n              <span>&mdash; An address must begin with 0x or Mx.</span> \n            </ion-note>\n          </ion-item>\n          <ion-item lines=\"none\">\n            <ion-label class=\"medium-text\" position=\"fixed\">Amount</ion-label>\n            <ion-input #amount type=\"number\" formControlName=\"amount\" class=\"input medium-text\" placeholder=\"amount\"></ion-input>\n          </ion-item>\n          <ion-item class=\"error\" lines=\"none\" *ngIf=\"amountFormItem.invalid && amountFormItem.touched\">\n            <ion-label position=\"fixed\"></ion-label>\n            <ion-note class=\"error-message\">\n              <ion-icon name=\"alert-circle\"></ion-icon> <span> Amount required!</span> <br>\n              <span>&mdash; Amount has to be numeric and greater than 0.</span> \n            </ion-note>\n          </ion-item>\n          <ion-row id=\"quickAmount\">\n            <ion-col size=\"3\">\n\n            </ion-col>\n            <ion-col size=\"9\" style=\"padding-right:2.5%\">\n              <ion-button class=\"medium-text\" (click)=\"fillAmount('max')\" size=\"small\" fill=\"outline\">Send Max</ion-button>\n              <ion-button class=\"medium-text\" (click)=\"fillAmount('half')\" size=\"small\" fill=\"outline\">Send 1/2</ion-button>\n              <ion-button class=\"medium-text\" (click)=\"fillAmount('quarter')\" size=\"small\" fill=\"outline\">Send 1/4</ion-button>\n            </ion-col>\n          </ion-row>\n          <ion-item lines=\"none\">\n            <!-- Disabled Checkbox -->\n            <ion-checkbox (click)=\"useMessage()\"></ion-checkbox>\n            <ion-label class=\"medium-text\" [hidden]=\"messageToggle\" style=\"padding-left: 10px;\">Message</ion-label>\n            <ion-label class=\"medium-text\" [hidden]=\"!messageToggle\" style=\"padding-left: 10px;\">This message is public</ion-label>\n            </ion-item>\n            <ion-item [hidden]=\"!messageToggle\" lines=\"none\">\n                <ion-textarea \n                [(ngModel)]=\"data.message\"\n                formControlName=\"message\"\n                class=\"medium-text input\"\n                auto-grow=\"false\"\n                #message \n                placeholder=\"type your message...\"\n                maxlength=\"255\">\n                </ion-textarea>\n            </ion-item>\n            <ion-note *ngIf=\"data.message\" class=\"length\">{{ data.message.length +\"/255\" }}</ion-note>\n        </ion-list>\n      </form>\n        \n        \n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n<ion-footer>\n  <ion-toolbar class=\"border-t\">\n    <ion-buttons> \n      <ion-button type=\"button\" class=\"action-btn medium-text\" expand=\"block\" (click)=\"stopCamera()\"  *ngIf=\"isCameraOpen==true\">\n        Stop scanning\n       </ion-button>\n      <ion-button [disabled]=\"sendForm.invalid\" expand=\"block\" *ngIf=\"isCameraOpen==false\">\n        <button type=\"submit\" form=\"sendForm\" class=\"footer\">\n          <ion-icon slot=\"start\" name=\"send\"></ion-icon> Send Funds\n        </button> \n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer>\n</ion-app>\n\n"

/***/ }),

/***/ "./src/app/pages/send-funds/send-funds.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/send-funds/send-funds.module.ts ***!
  \*******************************************************/
/*! exports provided: SendFundsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendFundsPageModule", function() { return SendFundsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _send_funds_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./send-funds.page */ "./src/app/pages/send-funds/send-funds.page.ts");







var routes = [
    {
        path: '',
        component: _send_funds_page__WEBPACK_IMPORTED_MODULE_6__["SendFundsPage"]
    }
];
var SendFundsPageModule = /** @class */ (function () {
    function SendFundsPageModule() {
    }
    SendFundsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_send_funds_page__WEBPACK_IMPORTED_MODULE_6__["SendFundsPage"]]
        })
    ], SendFundsPageModule);
    return SendFundsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/send-funds/send-funds.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/send-funds/send-funds.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-card-content {\n  background: var(--ion-card-color);\n}\n\nion-card-header {\n  --color: var(--ion-text-color,#000);\n}\n\nion-toolbar {\n  --background: var(--ion-m-background);\n  font-family: manrope-bold;\n  color: var(--ion-color-tertiary);\n}\n\nion-toolbar ion-title {\n  font-size: 1rem;\n}\n\nion-toolbar ion-buttons ion-menu-button {\n  font-size: 1rem;\n  color: var(--ion-color-tertiary);\n}\n\nion-item ion-label {\n  white-space: normal;\n}\n\nion-item.wordCountWrapper {\n  padding: 0;\n  margin: 0;\n}\n\nion-select {\n  display: inherit;\n  font-family: manrope-bold;\n  background-color: #ffffff;\n  outline: 1px solid #91919D;\n  font-size: 1rem;\n  color: var(--ion-color-primary);\n}\n\nion-select-option {\n  font-family: manrope-bold;\n}\n\nion-input {\n  color: #000;\n  line-height: 16px;\n  background-color: #ffffff;\n}\n\n#quickAmount ion-col ion-button {\n  float: right;\n  color: var(--ion-color-tertiary);\n  text-transform: none;\n  text-decoration: underline;\n  font-family: manrope-bold;\n}\n\n#qrIcon {\n  z-index: 99999;\n  cursor: pointer;\n  right: 6%;\n  position: absolute;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  color: var(--ion-color-primary) !important;\n}\n\n.icon-head {\n  color: #1FB4CD;\n}\n\n.util-btns {\n  padding: 3px;\n  text-align: center;\n  margin: 2px;\n}\n\n.action-btn {\n  height: 72px;\n}\n\n.transparentBody {\n  background: none transparent !important;\n  --background: none transparent !important;\n}\n\n.webscan-canvas {\n  text-align: center;\n  --background: none transparent !important;\n}\n\nion-footer ion-toolbar ion-buttons ion-button {\n  width: 100%;\n  height: 58px;\n  text-transform: none;\n  font-family: manrope-bold;\n}\n\nion-toolbar {\n  --background: var(--ion-m-background);\n}\n\n.input {\n  font-family: manrope-light;\n}\n\n.length {\n  position: relative;\n  float: right;\n  z-index: 2000;\n  font-family: manrope-light;\n  color: var(--ion-color-tertiary) !important;\n  margin-right: 5%;\n}\n\nion-textarea {\n  color: black !important;\n  background: #ffffff;\n  padding-left: 1%;\n  margin-bottom: 1%;\n}\n\nion-item.error {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\nion-item.error span {\n  color: var(--ion-color-tertiary);\n  display: inline-block;\n  vertical-align: middle;\n}\n\nion-note.error-message ion-icon {\n  color: var(--ion-color-secondary);\n  font-size: 1rem;\n  display: inline-block;\n  vertical-align: middle;\n}\n\nion-note.error-message {\n  display: block;\n}\n\nbutton.footer {\n  width: 100%;\n  height: 58px;\n  font-size: 1rem;\n  text-align: center;\n  text-transform: none;\n  font-family: manrope-bold;\n  background: transparent;\n  color: var(--ion-color-tertiary);\n}\n\nbutton.footer:hover {\n  cursor: pointer;\n  opacity: 0.6;\n}\n\nbutton.footer ion-icon {\n  font-size: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGlhc25lbXIvcHJvamVjdHMvV0FMTEVUL21vYmlsZS1hcHAtZnJvbnQtZW5kL2FwcC9zcmMvYXBwL3BhZ2VzL3NlbmQtZnVuZHMvc2VuZC1mdW5kcy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3NlbmQtZnVuZHMvc2VuZC1mdW5kcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQ0FBQTtBQ0NGOztBRENBO0VBQ0UsbUNBQUE7QUNFRjs7QURBQTtFQUNFLHFDQUFBO0VBQ0EseUJBQUE7RUFDQSxnQ0FBQTtBQ0dGOztBREZFO0VBQ0UsZUFBQTtBQ0lKOztBREZFO0VBQ0UsZUFBQTtFQUNBLGdDQUFBO0FDSUo7O0FEREE7RUFDRSxtQkFBQTtBQ0lGOztBREZBO0VBQ0UsVUFBQTtFQUNBLFNBQUE7QUNLRjs7QURIQTtFQUNFLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtFQUNBLCtCQUFBO0FDTUY7O0FESkE7RUFDRSx5QkFBQTtBQ09GOztBRExBO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7QUNRRjs7QUROQztFQUNDLFlBQUE7RUFDQSxnQ0FBQTtFQUNBLG9CQUFBO0VBQ0EsMEJBQUE7RUFDQSx5QkFBQTtBQ1NGOztBRFBBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLDBDQUFBO0FDVUY7O0FEUEE7RUFDRSxjQUFBO0FDVUY7O0FEUkE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFFQSxXQUFBO0FDVUY7O0FEUkE7RUFDRSxZQUFBO0FDV0Y7O0FEUkE7RUFDQyx1Q0FBQTtFQUNBLHlDQUFBO0FDV0Q7O0FEVEE7RUFDQyxrQkFBQTtFQUNDLHlDQUFBO0FDWUY7O0FEVkE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EseUJBQUE7QUNhRjs7QURWQTtFQUNFLHFDQUFBO0FDYUY7O0FEWEE7RUFDRSwwQkFBQTtBQ2NGOztBRFpBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDBCQUFBO0VBQ0EsMkNBQUE7RUFDQSxnQkFBQTtBQ2VGOztBRGJBO0VBQ0UsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNnQkY7O0FEYkE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtBQ2dCRjs7QURkQTtFQUNFLGdDQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtBQ2lCRjs7QURmQTtFQUNFLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7QUNrQkY7O0FEaEJBO0VBQ0UsY0FBQTtBQ21CRjs7QURkQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSx5QkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0NBQUE7QUNpQkY7O0FEZkE7RUFDRSxlQUFBO0VBQ0EsWUFBQTtBQ2tCRjs7QURoQkE7RUFDRSxlQUFBO0FDbUJGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2VuZC1mdW5kcy9zZW5kLWZ1bmRzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJkLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY2FyZC1jb2xvcik7XG59XG5pb24tY2FyZC1oZWFkZXIge1xuICAtLWNvbG9yOiB2YXIoLS1pb24tdGV4dC1jb2xvciwjMDAwKTtcbn1cbmlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tbS1iYWNrZ3JvdW5kKTtcbiAgZm9udC1mYW1pbHk6IG1hbnJvcGUtYm9sZDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeSk7XG4gIGlvbi10aXRsZSB7XG4gICAgZm9udC1zaXplOiAxLjByZW07XG4gIH1cbiAgaW9uLWJ1dHRvbnMgaW9uLW1lbnUtYnV0dG9uIHtcbiAgICBmb250LXNpemU6IDEuMHJlbTtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5KTtcbiAgfVxufVxuaW9uLWl0ZW0gaW9uLWxhYmVsIHtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbn1cbmlvbi1pdGVtLndvcmRDb3VudFdyYXBwZXIge1xuICBwYWRkaW5nOjA7XG4gIG1hcmdpbjowO1xufVxuaW9uLXNlbGVjdCB7XG4gIGRpc3BsYXk6IGluaGVyaXQ7XG4gIGZvbnQtZmFtaWx5OiBtYW5yb3BlLWJvbGQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIG91dGxpbmU6IDFweCBzb2xpZCAjOTE5MTlEO1xuICBmb250LXNpemU6IDEuMHJlbTtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cbmlvbi1zZWxlY3Qtb3B0aW9uIHtcbiAgZm9udC1mYW1pbHk6IG1hbnJvcGUtYm9sZDtcbn1cbmlvbi1pbnB1dCB7XG4gIGNvbG9yOiAjMDAwO1xuICBsaW5lLWhlaWdodDogMTZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbn1cbiAjcXVpY2tBbW91bnQgaW9uLWNvbCBpb24tYnV0dG9uIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5KTtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICBmb250LWZhbWlseTogbWFucm9wZS1ib2xkO1xufVxuI3FySWNvbiB7XG4gIHotaW5kZXg6IDk5OTk5O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHJpZ2h0OiA2JTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KSFpbXBvcnRhbnQ7XG59XG5cbi5pY29uLWhlYWR7XG4gIGNvbG9yOiAjMUZCNENEO1xufVxuLnV0aWwtYnRucyB7XG4gIHBhZGRpbmc6IDNweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAvLyBwYWRkaW5nOiAxcHg7XG4gIG1hcmdpbjogMnB4O1xufVxuLmFjdGlvbi1idG4ge1xuICBoZWlnaHQ6IDcycHg7XG59XG5cbi50cmFuc3BhcmVudEJvZHkge1xuXHRiYWNrZ3JvdW5kOiBub25lIHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG5cdC0tYmFja2dyb3VuZDogbm9uZSB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuLndlYnNjYW4tY2FudmFzIHtcbiB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gXHQtLWJhY2tncm91bmQ6IG5vbmUgdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cbmlvbi1mb290ZXIgaW9uLXRvb2xiYXIgaW9uLWJ1dHRvbnMgaW9uLWJ1dHRvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDU4cHg7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBmb250LWZhbWlseTogbWFucm9wZS1ib2xkO1xufVxuXG5pb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLW0tYmFja2dyb3VuZCk7XG59XG4uaW5wdXQge1xuICBmb250LWZhbWlseTogbWFucm9wZS1saWdodDtcbn1cbi5sZW5ndGgge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZsb2F0OiByaWdodDtcbiAgei1pbmRleDogMjAwMDtcbiAgZm9udC1mYW1pbHk6IG1hbnJvcGUtbGlnaHQ7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnkpIWltcG9ydGFudDtcbiAgbWFyZ2luLXJpZ2h0OiA1JTtcbn1cbmlvbi10ZXh0YXJlYSB7XG4gIGNvbG9yOiBibGFjayFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIHBhZGRpbmctbGVmdDogMSU7XG4gIG1hcmdpbi1ib3R0b206IDElO1xufVxuXG5pb24taXRlbS5lcnJvciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuaW9uLWl0ZW0uZXJyb3Igc3BhbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnkpO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5pb24tbm90ZS5lcnJvci1tZXNzYWdlIGlvbi1pY29uIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICBmb250LXNpemU6IDEuMHJlbTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuaW9uLW5vdGUuZXJyb3ItbWVzc2FnZSB7IFxuICBkaXNwbGF5OiBibG9jaztcbn1cbmlvbi1idXR0b24ge1xuICBcbn1cbmJ1dHRvbi5mb290ZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1OHB4O1xuICBmb250LXNpemU6IDEuMHJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgZm9udC1mYW1pbHk6IG1hbnJvcGUtYm9sZDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnkpO1xufVxuYnV0dG9uLmZvb3Rlcjpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3BhY2l0eTogMC42O1xufVxuYnV0dG9uLmZvb3RlciBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMS4wcmVtO1xufSIsImlvbi1jYXJkLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY2FyZC1jb2xvcik7XG59XG5cbmlvbi1jYXJkLWhlYWRlciB7XG4gIC0tY29sb3I6IHZhcigtLWlvbi10ZXh0LWNvbG9yLCMwMDApO1xufVxuXG5pb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLW0tYmFja2dyb3VuZCk7XG4gIGZvbnQtZmFtaWx5OiBtYW5yb3BlLWJvbGQ7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnkpO1xufVxuaW9uLXRvb2xiYXIgaW9uLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuaW9uLXRvb2xiYXIgaW9uLWJ1dHRvbnMgaW9uLW1lbnUtYnV0dG9uIHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5KTtcbn1cblxuaW9uLWl0ZW0gaW9uLWxhYmVsIHtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbn1cblxuaW9uLWl0ZW0ud29yZENvdW50V3JhcHBlciB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbn1cblxuaW9uLXNlbGVjdCB7XG4gIGRpc3BsYXk6IGluaGVyaXQ7XG4gIGZvbnQtZmFtaWx5OiBtYW5yb3BlLWJvbGQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIG91dGxpbmU6IDFweCBzb2xpZCAjOTE5MTlEO1xuICBmb250LXNpemU6IDFyZW07XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbmlvbi1zZWxlY3Qtb3B0aW9uIHtcbiAgZm9udC1mYW1pbHk6IG1hbnJvcGUtYm9sZDtcbn1cblxuaW9uLWlucHV0IHtcbiAgY29sb3I6ICMwMDA7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xufVxuXG4jcXVpY2tBbW91bnQgaW9uLWNvbCBpb24tYnV0dG9uIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5KTtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICBmb250LWZhbWlseTogbWFucm9wZS1ib2xkO1xufVxuXG4jcXJJY29uIHtcbiAgei1pbmRleDogOTk5OTk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcmlnaHQ6IDYlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpICFpbXBvcnRhbnQ7XG59XG5cbi5pY29uLWhlYWQge1xuICBjb2xvcjogIzFGQjRDRDtcbn1cblxuLnV0aWwtYnRucyB7XG4gIHBhZGRpbmc6IDNweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDJweDtcbn1cblxuLmFjdGlvbi1idG4ge1xuICBoZWlnaHQ6IDcycHg7XG59XG5cbi50cmFuc3BhcmVudEJvZHkge1xuICBiYWNrZ3JvdW5kOiBub25lIHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIC0tYmFja2dyb3VuZDogbm9uZSB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuXG4ud2Vic2Nhbi1jYW52YXMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIC0tYmFja2dyb3VuZDogbm9uZSB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuXG5pb24tZm9vdGVyIGlvbi10b29sYmFyIGlvbi1idXR0b25zIGlvbi1idXR0b24ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1OHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgZm9udC1mYW1pbHk6IG1hbnJvcGUtYm9sZDtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1tLWJhY2tncm91bmQpO1xufVxuXG4uaW5wdXQge1xuICBmb250LWZhbWlseTogbWFucm9wZS1saWdodDtcbn1cblxuLmxlbmd0aCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZmxvYXQ6IHJpZ2h0O1xuICB6LWluZGV4OiAyMDAwO1xuICBmb250LWZhbWlseTogbWFucm9wZS1saWdodDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeSkgIWltcG9ydGFudDtcbiAgbWFyZ2luLXJpZ2h0OiA1JTtcbn1cblxuaW9uLXRleHRhcmVhIHtcbiAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIHBhZGRpbmctbGVmdDogMSU7XG4gIG1hcmdpbi1ib3R0b206IDElO1xufVxuXG5pb24taXRlbS5lcnJvciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG5pb24taXRlbS5lcnJvciBzcGFuIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeSk7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuaW9uLW5vdGUuZXJyb3ItbWVzc2FnZSBpb24taWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbmlvbi1ub3RlLmVycm9yLW1lc3NhZ2Uge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuYnV0dG9uLmZvb3RlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDU4cHg7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgZm9udC1mYW1pbHk6IG1hbnJvcGUtYm9sZDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnkpO1xufVxuXG5idXR0b24uZm9vdGVyOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBvcGFjaXR5OiAwLjY7XG59XG5cbmJ1dHRvbi5mb290ZXIgaW9uLWljb24ge1xuICBmb250LXNpemU6IDFyZW07XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/send-funds/send-funds.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/send-funds/send-funds.page.ts ***!
  \*****************************************************/
/*! exports provided: SendFundsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendFundsPage", function() { return SendFundsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _service_balance_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/balance.service */ "./src/app/service/balance.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_qr_scanner_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/qr-scanner/ngx */ "./node_modules/@ionic-native/qr-scanner/ngx/index.js");
/* harmony import */ var _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/clipboard/ngx */ "./node_modules/@ionic-native/clipboard/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _service_minima_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../service/minima-api.service */ "./src/app/service/minima-api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var qr_scanner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! qr-scanner */ "./node_modules/qr-scanner/qr-scanner.min.js");
/* harmony import */ var minima__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! minima */ "./node_modules/minima/dist/minima.js");
/* harmony import */ var minima__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(minima__WEBPACK_IMPORTED_MODULE_10__);











var SendFundsPage = /** @class */ (function () {
    function SendFundsPage(formBuilder, qrScanner, clipboard, alertController, zone, api, balanceService, platform, route, router) {
        this.formBuilder = formBuilder;
        this.qrScanner = qrScanner;
        this.clipboard = clipboard;
        this.alertController = alertController;
        this.zone = zone;
        this.api = api;
        this.balanceService = balanceService;
        this.platform = platform;
        this.route = route;
        this.router = router;
        this.isCameraOpen = false;
        this.isWebCameraOpen = false;
        this.data = {};
        // checkboxValue
        this.messageToggle = false;
        this.tokenArr = [];
        this.lastJSON = '';
        this.scanSub = null;
        this.data.message = '';
        this.pullInTokens();
    }
    SendFundsPage.prototype.ngOnInit = function () {
        this.sendForm = this.formBuilder.group({
            token: '',
            address: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(60),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[Mx|0x][a-zA-Z0-9]+')
                ]],
            amount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            message: ''
        });
    };
    SendFundsPage.prototype.ionViewWillEnter = function () {
        this.isCameraOpen = false;
        this.getTokenSelected();
    };
    SendFundsPage.prototype.ionViewWillLeave = function () {
        this.stopCamera();
    };
    // get token selected or set Minima as default
    SendFundsPage.prototype.getTokenSelected = function () {
        var _this = this;
        // check url snapshot
        var empty = undefined;
        var param = this.route.snapshot.params['id'];
        // check param
        var mMinimaToken = '0x00';
        if (param === empty || param === mMinimaToken) {
            this.itemSelected = this.tokenArr[0];
            this.updateTokenId('0x00');
        }
        else if (param !== empty && param !== mMinimaToken) {
            this.tokenArr.forEach(function (element) {
                if (param === element.tokenid) {
                    _this.itemSelected = element;
                    _this.updateTokenId(element.tokenid);
                }
            });
        }
    };
    // listen to selection change
    SendFundsPage.prototype.onItemSelection = function ($event) {
        var _this = this;
        var param = this.route.snapshot.params['id'];
        this.tokenArr.forEach(function (element) {
            if (_this.itemSelected === element && param !== element.tokenid) {
                _this.itemSelected = element;
                _this.router.navigate(['/send-funds', { id: element.tokenid }]);
                // update tokenid
                _this.updateTokenId(element.tokenid);
            }
        });
    };
    // fn to update tokenid
    SendFundsPage.prototype.updateTokenId = function (id) {
        this.data.tokenid = id;
    };
    SendFundsPage.prototype.fillAmount = function (type) {
        var _this = this;
        var empty = undefined;
        var param = this.route.snapshot.params['id'];
        if (param === empty) {
            param = '0x00';
        }
        this.tokenArr.forEach(function (element) {
            if (param === element.tokenid) {
                _this.max = element.sendable;
                if (type === 'max') {
                    _this.amount.value = _this.max;
                }
                else if (type === 'half') {
                    _this.amount.value = (parseFloat(_this.max) / 2.0).toString();
                }
                else if (type === 'quarter') {
                    _this.amount.value = (parseFloat(_this.max) / 4.0).toString();
                }
            }
        });
    };
    /** ScanQR: Native */
    SendFundsPage.prototype.scanQR = function () {
        var _this = this;
        if (this.platform.is('ios') || this.platform.is('android')) {
            this.qrScanner.prepare()
                .then(function (status) {
                if (status.authorized) {
                    // Which class adding should I use?
                    _this.identifyPlatformToScan_Add();
                    _this.qrScanner.show();
                    _this.isCameraOpen = true;
                    _this.scanSub = _this.qrScanner.scan().subscribe(function (text) {
                        _this.zone.run(function () {
                            _this.data.address = text;
                            _this.stopCamera();
                            _this.identifyPlatformToScan_Remove();
                            _this.isCameraOpen = false;
                        });
                    }, function (err) {
                        console.log('Scanned failed', err);
                    });
                }
                else if (status.denied) {
                    // camera permission was permanently denied
                    // you must use QRScanner.openSettings() method to guide the user to the settings page
                    // then they can grant the permission from there
                    _this.presentAlert('Error', 'Please check camera permission', 'Camera status');
                }
                else {
                    // permission was denied, but not permanently. You can ask for permission again at a later time.
                    _this.presentAlert('Error', 'Please check camera permission', 'Camera status');
                }
            })
                .catch(function (e) { return console.log('Error is', e); });
        }
    };
    SendFundsPage.prototype.stopCamera = function () {
        if (this.scanSub !== null) {
            this.qrScanner.hide();
            this.scanSub.unsubscribe();
        }
        this.scanSub = null;
        this.identifyPlatformToScan_Remove();
        this.isCameraOpen = false;
        this.qrScanner.destroy();
    };
    SendFundsPage.prototype.presentAlert = function (hdr, msg, sub) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            cssClass: 'alert',
                            header: hdr,
                            subHeader: sub,
                            message: msg,
                            buttons: ['OK']
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SendFundsPage.prototype.pullInTokens = function () {
        var _this = this;
        this.balanceService.data.subscribe(function (balance) {
            _this.tokenArr = balance;
        });
    };
    SendFundsPage.prototype.sendFunds = function () {
        var _this = this;
        var data = this.sendForm.value;
        data.tokenid = data.token.tokenid;
        if (data.message.length > 0) {
            this.api.createTXN(data).then(function (res) {
                console.log('Complicated TXN');
                console.log(res);
                if (minima__WEBPACK_IMPORTED_MODULE_10__["Minima"].util.checkAllResponses(res)) {
                    _this.presentAlert('Transaction Status', 'Transaction has been posted to the network!', 'Successful');
                    _this.resetForm();
                }
                else {
                    _this.presentAlert('Transaction Status', res.message, 'Failed');
                }
            });
        }
        else {
            this.api.sendFunds(data).then(function (res) {
                console.log('ez TXN');
                console.log(res);
                if (res.status) {
                    _this.presentAlert('Transaction Status', 'Transaction has been posted to the network!', 'Successful');
                    _this.resetForm();
                }
                else {
                    _this.presentAlert('Transaction Status', res.message, 'Failed');
                }
            });
        }
    };
    SendFundsPage.prototype.resetForm = function () {
        this.address.value = '';
        this.amount.value = '';
        this.message.value = '';
    };
    /** MISC FUNCS */
    SendFundsPage.prototype.identifyPlatformToScan_Add = function () {
        document.addEventListener('DOMContentLoaded', function (event) {
            // Do work
            if (this.platform.is('ios')) {
                setTimeout(function () {
                    window.document.querySelectorAll('ion-content')
                        .forEach(function (element) {
                        var element1 = element.shadowRoot.querySelector('style');
                        element1.innerHTML = element1.innerHTML
                            .replace('--background:var(--ion-background-color,#fff);', '--background: transparent');
                    });
                }, 300);
            }
            else if (this.platform.is('android')) {
                // window.document.querySelector('ion-content').classList.add('transparentBody');
                setTimeout(function () {
                    window.document.querySelectorAll('ion-content')
                        .forEach(function (element) {
                        var element1 = element.shadowRoot.querySelector('style');
                        element1.innerHTML = element1.innerHTML
                            .replace('--background:var(--ion-background-color,#fff);', '--background: transparent');
                    });
                }, 300);
            }
        });
    };
    SendFundsPage.prototype.identifyPlatformToScan_Remove = function () {
        document.addEventListener('DOMContentLoaded', function (event) {
            if (this.platform.is('ios')) {
                setTimeout(function () {
                    window.document.querySelectorAll('ion-content')
                        .forEach(function (element) {
                        var element1 = element.shadowRoot.querySelector('style');
                        element1.innerHTML = element1.innerHTML
                            .replace('--background: transparent', '--background:var(--ion-background-color,#fff);');
                    });
                }, 300);
            }
            else if (this.platform.is('android')) {
                // window.document.querySelector('ion-content').classList.remove('transparentBody');
                setTimeout(function () {
                    window.document.querySelectorAll('ion-content')
                        .forEach(function (element) {
                        var element1 = element.shadowRoot.querySelector('style');
                        element1.innerHTML = element1.innerHTML
                            .replace('--background: transparent', '--background:var(--ion-background-color,#fff);');
                    });
                }, 300);
            }
        });
    };
    SendFundsPage.prototype.useMessage = function () {
        if (this.messageToggle) {
            this.messageToggle = false;
        }
        else {
            this.messageToggle = true;
        }
    };
    SendFundsPage.prototype.checkPlatform = function () {
        if (this.platform.is('desktop')) {
            return false;
        }
        else {
            return true;
        }
    };
    SendFundsPage.prototype.webScanQR = function () {
        var _this = this;
        this.isWebCameraOpen = true;
        qr_scanner__WEBPACK_IMPORTED_MODULE_9__["default"].WORKER_PATH = 'assets/JS/qr-scanner-worker.min.js';
        setTimeout(function () {
            _this.webQrScanner = new qr_scanner__WEBPACK_IMPORTED_MODULE_9__["default"](_this.videoElem.nativeElement, function (result) {
                _this.data.address = result;
                _this.isWebCameraOpen = false;
            });
            _this.webQrScanner.start();
        }, 500);
    };
    SendFundsPage.prototype.stopWebScanQR = function () {
        this.webQrScanner.destroy();
        this.webQrScanner = null;
        this.isWebCameraOpen = false;
    };
    Object.defineProperty(SendFundsPage.prototype, "tokenFormItem", {
        get: function () {
            return this.sendForm.get('token');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SendFundsPage.prototype, "addressFormItem", {
        get: function () {
            return this.sendForm.get('address');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SendFundsPage.prototype, "amountFormItem", {
        get: function () {
            return this.sendForm.get('amount');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SendFundsPage.prototype, "messageFormItem", {
        get: function () {
            return this.sendForm.get('message');
        },
        enumerable: true,
        configurable: true
    });
    SendFundsPage.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] },
        { type: _ionic_native_qr_scanner_ngx__WEBPACK_IMPORTED_MODULE_4__["QRScanner"] },
        { type: _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_5__["Clipboard"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] },
        { type: _service_minima_api_service__WEBPACK_IMPORTED_MODULE_7__["MinimaApiService"] },
        { type: _service_balance_service__WEBPACK_IMPORTED_MODULE_2__["BalanceService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('address', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonInput"])
    ], SendFundsPage.prototype, "address", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('amount', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonInput"])
    ], SendFundsPage.prototype, "amount", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('message', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonTextarea"])
    ], SendFundsPage.prototype, "message", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('videoElem', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"])
    ], SendFundsPage.prototype, "videoElem", void 0);
    SendFundsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-send-funds',
            template: __webpack_require__(/*! raw-loader!./send-funds.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/send-funds/send-funds.page.html"),
            styles: [__webpack_require__(/*! ./send-funds.page.scss */ "./src/app/pages/send-funds/send-funds.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _ionic_native_qr_scanner_ngx__WEBPACK_IMPORTED_MODULE_4__["QRScanner"],
            _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_5__["Clipboard"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"],
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"],
            _service_minima_api_service__WEBPACK_IMPORTED_MODULE_7__["MinimaApiService"],
            _service_balance_service__WEBPACK_IMPORTED_MODULE_2__["BalanceService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]])
    ], SendFundsPage);
    return SendFundsPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-send-funds-send-funds-module-es5.js.map