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

module.exports = "<ion-app>\n<ion-header>\n  <ion-toolbar class=\"border-b\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button class=\"menu-icon\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title class=\"large-text\">\n      Send\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content *ngIf=\"isCameraOpen==false\">\n\n  <ion-grid *ngIf=\"tokenArr.length == 0\">\n    <ion-row>\n      <ion-col style=\"display: flex; align-items:center; justify-content:center\" size=\"12\">\n        <ion-label>Fetching tokens...</ion-label>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-card  class=\"webscan-canvas\" *ngIf=\"!checkPlatform() && isWebCameraOpen\">\n    <ion-card-header class=\"medium-text\">\n    Scan Your Minima QR address now...\n    <ion-progress-bar type=\"indeterminate\" reversed=\"true\"></ion-progress-bar>\n    </ion-card-header>\n    <video height=\"240\" #videoElem></video>\n    <hr>\n    <ion-button block=\"full\" (click)=\"stopWebScanQR()\">Stop Scanning</ion-button>\n    <hr>\n  </ion-card>\n\n  <ion-card class=\"borders\" *ngIf=\"!isWebCameraOpen && tokenArr.length > 0\">\n    <ion-card-header>\n      Post A Transaction\n      <ion-card-title>\n          <ion-icon style=\" font-size:1.2rem;\" slot=\"start\" name=\"send\" class=\"icon-head medium-text\" ></ion-icon>\n      </ion-card-title>\n    </ion-card-header>\n\n    <ion-card-content>\n      <ion-list lines=\"none\">\n        <ion-item>\n          <ion-label position=\"fixed\" class=\"medium-text\">Token</ion-label>\n          <ion-select\n              interface = 'alert'\n              class=\"medium-text input\"\n              [(ngModel)]=\"itemSelected\"\n              (ionChange)=\"onItemSelection($event)\"> \n          <ion-select-option *ngFor=\"let token of tokenArr;\" [value]=\"token\" class=\"token-option\">\n            {{ token.token + \"&mdash;\"+ token.tokenid }}\n          </ion-select-option>\n        </ion-select>\n        </ion-item>\n        <ion-item lines=\"none\">\n          <ion-label class=\"medium-text\" position=\"fixed\">Address</ion-label>\n          <span (click)=\"webScanQR()\" id=\"qrIcon\"> <ion-icon alt=\"qrCode\" src=\"assets/scan-outline.svg\"></ion-icon></span>\n          <ion-input #address class=\"medium-text input\" name=\"address\" [(ngModel)]=\"data.address\" clearInput=\"true\" placeholder=\"address\"></ion-input>\n        </ion-item>\n        <ion-item lines=\"none\">\n          <ion-label class=\"medium-text\" position=\"fixed\">Amount</ion-label>\n          <ion-input #amount type=\"number\" name=\"amount\" class=\"input medium-text\" [(ngModel)]=\"data.amount\" placeholder=\"amount\"></ion-input>\n        </ion-item>\n        <ion-row id=\"quickAmount\">\n          <ion-col size=\"3\">\n\n          </ion-col>\n          <ion-col size=\"9\" style=\"padding-right:2.5%\">\n            <ion-button class=\"medium-text\" (click)=\"fillAmount('max')\" size=\"small\" fill=\"outline\">Send Max</ion-button>\n            <ion-button class=\"medium-text\" (click)=\"fillAmount('half')\" size=\"small\" fill=\"outline\">Send 1/2</ion-button>\n            <ion-button class=\"medium-text\" (click)=\"fillAmount('quarter')\" size=\"small\" fill=\"outline\">Send 1/4</ion-button>\n          </ion-col>\n        </ion-row>\n        <ion-item lines=\"none\">\n          <!-- Disabled Checkbox -->\n          <ion-checkbox [(ngModel)]=\"messageEntry.isChecked\" (ionChange)=\"checkboxValue($event, messageEntry.isChecked)\"></ion-checkbox>\n          <ion-label class=\"medium-text\" [hidden]=\"messageEntry.isChecked\" style=\"padding-left: 10px;\">Message</ion-label>\n          <ion-label class=\"medium-text\" [hidden]=\"!messageEntry.isChecked\" style=\"padding-left: 10px;\">This message is public</ion-label>\n          </ion-item>\n          <ion-item [hidden]=\"!messageEntry.isChecked\" lines=\"none\">\n              <ion-textarea \n              class=\"medium-text input\"\n              auto-grow=\"true\"\n              #message \n              [(ngModel)]=\"data.message\" \n              placeholder=\"type your message...\"\n              maxlength=\"255\">\n              </ion-textarea>\n            <span *ngIf=\"data.message\" class=\"length\">{{ data.message.length +\"/255\"}}</span>\n          </ion-item>\n      </ion-list>\n        \n        \n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n<ion-footer>\n  <ion-toolbar class=\"border-t\">\n    <ion-buttons> \n      <ion-button type=\"button\" class=\"action-btn medium-text\" expand=\"block\" (click)=\"stopCamera()\"  *ngIf=\"isCameraOpen==true\">\n        Stop scanning\n       </ion-button>\n      <ion-button type=\"button\" class=\"action-btn medium-text\" expand=\"block\" (click)=\"sendFunds()\" *ngIf=\"isCameraOpen==false\">\n        <ion-icon name=\"send\" slot=\"start\"></ion-icon> Send\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer>\n</ion-app>\n\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _send_funds_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./send-funds.page */ "./src/app/pages/send-funds/send-funds.page.ts");







const routes = [
    {
        path: '',
        component: _send_funds_page__WEBPACK_IMPORTED_MODULE_6__["SendFundsPage"]
    }
];
let SendFundsPageModule = class SendFundsPageModule {
};
SendFundsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_send_funds_page__WEBPACK_IMPORTED_MODULE_6__["SendFundsPage"]]
    })
], SendFundsPageModule);



/***/ }),

/***/ "./src/app/pages/send-funds/send-funds.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/send-funds/send-funds.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-card-content {\n  background: var(--ion-card-color);\n}\n\nion-card-header {\n  --color: var(--ion-text-color,#000);\n}\n\nion-toolbar {\n  --background: var(--ion-m-background);\n  font-family: manrope-bold;\n  color: var(--ion-color-tertiary);\n}\n\nion-toolbar ion-title {\n  font-size: 1rem;\n}\n\nion-toolbar ion-buttons ion-menu-button {\n  font-size: 1rem;\n  color: var(--ion-color-tertiary);\n}\n\nion-item ion-label {\n  white-space: normal;\n}\n\nion-select {\n  display: inherit;\n  font-family: manrope-bold;\n  background-color: #ffffff;\n  outline: 1px solid #91919D;\n  font-size: 1rem;\n  color: var(--ion-color-primary);\n}\n\nion-select-option {\n  font-family: manrope-bold;\n}\n\nion-input {\n  color: #000;\n  line-height: 16px;\n  background-color: #ffffff;\n}\n\n#quickAmount ion-col ion-button {\n  float: right;\n  color: var(--ion-color-tertiary);\n  text-transform: none;\n  text-decoration: underline;\n  font-family: manrope-bold;\n}\n\n#qrIcon {\n  z-index: 99999;\n  cursor: pointer;\n  right: 6%;\n  position: absolute;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  color: var(--ion-color-primary) !important;\n}\n\n.icon-head {\n  color: #1FB4CD;\n}\n\n.util-btns {\n  padding: 3px;\n  text-align: center;\n  margin: 2px;\n}\n\n.action-btn {\n  height: 72px;\n}\n\n.transparentBody {\n  background: none transparent !important;\n  --background: none transparent !important;\n}\n\n.webscan-canvas {\n  text-align: center;\n  --background: none transparent !important;\n}\n\nion-footer ion-toolbar ion-buttons ion-button {\n  width: 100%;\n  height: 58px;\n  text-transform: none;\n  font-family: manrope-bold;\n}\n\nion-toolbar {\n  --background: var(--ion-m-background);\n}\n\n.input {\n  font-family: manrope-light;\n}\n\n.length {\n  position: absolute;\n  right: 5%;\n  z-index: 2000;\n  font-family: manrope-bold;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  font-size: 1rem;\n  color: black !important;\n}\n\nion-textarea {\n  color: black !important;\n  background: #ffffff;\n  padding-left: 1%;\n  margin-bottom: 1%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGlhc25lbXIvcHJvamVjdHMvV0FMTEVUL21vYmlsZS1hcHAtZnJvbnQtZW5kL2FwcC9zcmMvYXBwL3BhZ2VzL3NlbmQtZnVuZHMvc2VuZC1mdW5kcy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3NlbmQtZnVuZHMvc2VuZC1mdW5kcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQ0FBQTtBQ0NGOztBRENBO0VBQ0UsbUNBQUE7QUNFRjs7QURBQTtFQUNFLHFDQUFBO0VBQ0EseUJBQUE7RUFDQSxnQ0FBQTtBQ0dGOztBREZFO0VBQ0UsZUFBQTtBQ0lKOztBREZFO0VBQ0UsZUFBQTtFQUNBLGdDQUFBO0FDSUo7O0FEREE7RUFDRSxtQkFBQTtBQ0lGOztBREZBO0VBQ0UsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0VBQ0EsK0JBQUE7QUNLRjs7QURIQTtFQUNFLHlCQUFBO0FDTUY7O0FESkE7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtBQ09GOztBRExDO0VBQ0MsWUFBQTtFQUNBLGdDQUFBO0VBQ0Esb0JBQUE7RUFDQSwwQkFBQTtFQUNBLHlCQUFBO0FDUUY7O0FETkE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsMENBQUE7QUNTRjs7QUROQTtFQUNFLGNBQUE7QUNTRjs7QURQQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUVBLFdBQUE7QUNTRjs7QURQQTtFQUNFLFlBQUE7QUNVRjs7QURQQTtFQUNDLHVDQUFBO0VBQ0EseUNBQUE7QUNVRDs7QURSQTtFQUNDLGtCQUFBO0VBQ0MseUNBQUE7QUNXRjs7QURUQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSx5QkFBQTtBQ1lGOztBRFRBO0VBQ0UscUNBQUE7QUNZRjs7QURWQTtFQUNFLDBCQUFBO0FDYUY7O0FEWEE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtBQ2NGOztBRFpBO0VBQ0UsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNlRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NlbmQtZnVuZHMvc2VuZC1mdW5kcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2FyZC1jb250ZW50IHtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNhcmQtY29sb3IpO1xufVxuaW9uLWNhcmQtaGVhZGVyIHtcbiAgLS1jb2xvcjogdmFyKC0taW9uLXRleHQtY29sb3IsIzAwMCk7XG59XG5pb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLW0tYmFja2dyb3VuZCk7XG4gIGZvbnQtZmFtaWx5OiBtYW5yb3BlLWJvbGQ7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnkpO1xuICBpb24tdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMS4wcmVtO1xuICB9XG4gIGlvbi1idXR0b25zIGlvbi1tZW51LWJ1dHRvbiB7XG4gICAgZm9udC1zaXplOiAxLjByZW07XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeSk7XG4gIH1cbn1cbmlvbi1pdGVtIGlvbi1sYWJlbCB7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG59XG5pb24tc2VsZWN0IHtcbiAgZGlzcGxheTogaW5oZXJpdDtcbiAgZm9udC1mYW1pbHk6IG1hbnJvcGUtYm9sZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgb3V0bGluZTogMXB4IHNvbGlkICM5MTkxOUQ7XG4gIGZvbnQtc2l6ZTogMS4wcmVtO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuaW9uLXNlbGVjdC1vcHRpb24ge1xuICBmb250LWZhbWlseTogbWFucm9wZS1ib2xkO1xufVxuaW9uLWlucHV0IHtcbiAgY29sb3I6ICMwMDA7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xufVxuICNxdWlja0Ftb3VudCBpb24tY29sIGlvbi1idXR0b24ge1xuICBmbG9hdDogcmlnaHQ7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnkpO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIGZvbnQtZmFtaWx5OiBtYW5yb3BlLWJvbGQ7XG59XG4jcXJJY29uIHtcbiAgei1pbmRleDogOTk5OTk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcmlnaHQ6IDYlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpIWltcG9ydGFudDtcbn1cblxuLmljb24taGVhZHtcbiAgY29sb3I6ICMxRkI0Q0Q7XG59XG4udXRpbC1idG5zIHtcbiAgcGFkZGluZzogM3B4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIC8vIHBhZGRpbmc6IDFweDtcbiAgbWFyZ2luOiAycHg7XG59XG4uYWN0aW9uLWJ0biB7XG4gIGhlaWdodDogNzJweDtcbn1cblxuLnRyYW5zcGFyZW50Qm9keSB7XG5cdGJhY2tncm91bmQ6IG5vbmUgdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcblx0LS1iYWNrZ3JvdW5kOiBub25lIHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG4ud2Vic2Nhbi1jYW52YXMge1xuIHRleHQtYWxpZ246IGNlbnRlcjtcbiBcdC0tYmFja2dyb3VuZDogbm9uZSB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuaW9uLWZvb3RlciBpb24tdG9vbGJhciBpb24tYnV0dG9ucyBpb24tYnV0dG9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNThweDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGZvbnQtZmFtaWx5OiBtYW5yb3BlLWJvbGQ7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tbS1iYWNrZ3JvdW5kKTtcbn1cbi5pbnB1dCB7XG4gIGZvbnQtZmFtaWx5OiBtYW5yb3BlLWxpZ2h0O1xufVxuLmxlbmd0aCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDUlO1xuICB6LWluZGV4OiAyMDAwO1xuICBmb250LWZhbWlseTogbWFucm9wZS1ib2xkO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxLjByZW07XG4gIGNvbG9yOiBibGFjayFpbXBvcnRhbnQ7XG59XG5pb24tdGV4dGFyZWEge1xuICBjb2xvcjogYmxhY2shaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBwYWRkaW5nLWxlZnQ6IDElO1xuICBtYXJnaW4tYm90dG9tOiAxJTtcbn0iLCJpb24tY2FyZC1jb250ZW50IHtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNhcmQtY29sb3IpO1xufVxuXG5pb24tY2FyZC1oZWFkZXIge1xuICAtLWNvbG9yOiB2YXIoLS1pb24tdGV4dC1jb2xvciwjMDAwKTtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1tLWJhY2tncm91bmQpO1xuICBmb250LWZhbWlseTogbWFucm9wZS1ib2xkO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5KTtcbn1cbmlvbi10b29sYmFyIGlvbi10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cbmlvbi10b29sYmFyIGlvbi1idXR0b25zIGlvbi1tZW51LWJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeSk7XG59XG5cbmlvbi1pdGVtIGlvbi1sYWJlbCB7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG59XG5cbmlvbi1zZWxlY3Qge1xuICBkaXNwbGF5OiBpbmhlcml0O1xuICBmb250LWZhbWlseTogbWFucm9wZS1ib2xkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBvdXRsaW5lOiAxcHggc29saWQgIzkxOTE5RDtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG5pb24tc2VsZWN0LW9wdGlvbiB7XG4gIGZvbnQtZmFtaWx5OiBtYW5yb3BlLWJvbGQ7XG59XG5cbmlvbi1pbnB1dCB7XG4gIGNvbG9yOiAjMDAwO1xuICBsaW5lLWhlaWdodDogMTZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbn1cblxuI3F1aWNrQW1vdW50IGlvbi1jb2wgaW9uLWJ1dHRvbiB7XG4gIGZsb2F0OiByaWdodDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeSk7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgZm9udC1mYW1pbHk6IG1hbnJvcGUtYm9sZDtcbn1cblxuI3FySWNvbiB7XG4gIHotaW5kZXg6IDk5OTk5O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHJpZ2h0OiA2JTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KSAhaW1wb3J0YW50O1xufVxuXG4uaWNvbi1oZWFkIHtcbiAgY29sb3I6ICMxRkI0Q0Q7XG59XG5cbi51dGlsLWJ0bnMge1xuICBwYWRkaW5nOiAzcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAycHg7XG59XG5cbi5hY3Rpb24tYnRuIHtcbiAgaGVpZ2h0OiA3MnB4O1xufVxuXG4udHJhbnNwYXJlbnRCb2R5IHtcbiAgYmFja2dyb3VuZDogbm9uZSB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAtLWJhY2tncm91bmQ6IG5vbmUgdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cblxuLndlYnNjYW4tY2FudmFzIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAtLWJhY2tncm91bmQ6IG5vbmUgdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cblxuaW9uLWZvb3RlciBpb24tdG9vbGJhciBpb24tYnV0dG9ucyBpb24tYnV0dG9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNThweDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGZvbnQtZmFtaWx5OiBtYW5yb3BlLWJvbGQ7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tbS1iYWNrZ3JvdW5kKTtcbn1cblxuLmlucHV0IHtcbiAgZm9udC1mYW1pbHk6IG1hbnJvcGUtbGlnaHQ7XG59XG5cbi5sZW5ndGgge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiA1JTtcbiAgei1pbmRleDogMjAwMDtcbiAgZm9udC1mYW1pbHk6IG1hbnJvcGUtYm9sZDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG59XG5cbmlvbi10ZXh0YXJlYSB7XG4gIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBwYWRkaW5nLWxlZnQ6IDElO1xuICBtYXJnaW4tYm90dG9tOiAxJTtcbn0iXX0= */"

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
/* harmony import */ var _service_balance_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/balance.service */ "./src/app/service/balance.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_qr_scanner_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/qr-scanner/ngx */ "./node_modules/@ionic-native/qr-scanner/ngx/index.js");
/* harmony import */ var _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/clipboard/ngx */ "./node_modules/@ionic-native/clipboard/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _service_minima_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../service/minima-api.service */ "./src/app/service/minima-api.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var qr_scanner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! qr-scanner */ "./node_modules/qr-scanner/qr-scanner.min.js");










let SendFundsPage = class SendFundsPage {
    constructor(qrScanner, clipboard, alertController, zone, api, service, platform, route, router) {
        this.qrScanner = qrScanner;
        this.clipboard = clipboard;
        this.alertController = alertController;
        this.zone = zone;
        this.api = api;
        this.service = service;
        this.platform = platform;
        this.route = route;
        this.router = router;
        this.isCameraOpen = false;
        this.isWebCameraOpen = false;
        this.data = {};
        // checkboxValue
        this.messageEntry = { isChecked: false };
        // Token Array Type
        this.tokenArr = [];
        this.MINIMA_TOKEN_ID = '0x00';
        this.lastJSON = '';
        this.scanSub = null;
        this.data.message = '';
        this.pullInTokens();
    }
    ngOnInit() { }
    ionViewWillEnter() { this.isCameraOpen = false; }
    ionViewWillLeave() {
        this.balanceSubscription.unsubscribe(); // unsubscribe
        this.stopCamera();
    }
    // get token selected or set Minima as default
    getTokenSelected() {
        // check url snapshot
        const empty = undefined;
        const param = this.route.snapshot.params['id'];
        // check param
        if (param === empty || param === this.MINIMA_TOKEN_ID) {
            this.itemSelected = this.tokenArr[0];
            this.updateTokenId('0x00');
        }
        else if (param !== empty && param !== this.MINIMA_TOKEN_ID) {
            this.tokenArr.forEach(element => {
                if (param === element.tokenid) {
                    this.itemSelected = element;
                    this.updateTokenId(element.tokenid);
                }
            });
        }
    }
    // listen to selection change
    onItemSelection($event) {
        const param = this.route.snapshot.params['id'];
        this.tokenArr.forEach(element => {
            if (this.itemSelected === element && param !== element.tokenid) {
                this.itemSelected = element;
                this.router.navigate(['/send-funds', { id: element.tokenid }]);
                // update tokenid
                this.updateTokenId(element.tokenid);
            }
        });
    }
    // fn to update tokenid
    updateTokenId(id) {
        this.data.tokenid = id;
    }
    fillAmount(type) {
        const empty = undefined;
        let param = this.route.snapshot.params['id'];
        if (param === empty) {
            param = '0x00';
        }
        this.tokenArr.forEach(element => {
            if (param === element.tokenid) {
                this.max = element.sendable;
                if (type === 'max') {
                    this.amount.value = this.max;
                }
                else if (type === 'half') {
                    this.amount.value = (parseFloat(this.max) / 2.0).toString();
                }
                else if (type === 'quarter') {
                    this.amount.value = (parseFloat(this.max) / 4.0).toString();
                }
            }
        });
    }
    /** ScanQR: Native */
    scanQR() {
        if (this.platform.is('ios') || this.platform.is('android')) {
            this.qrScanner.prepare()
                .then((status) => {
                if (status.authorized) {
                    // Which class adding should I use?
                    this.identifyPlatformToScan_Add();
                    this.qrScanner.show();
                    this.isCameraOpen = true;
                    this.scanSub = this.qrScanner.scan().subscribe((text) => {
                        this.zone.run(() => {
                            this.data.address = text;
                            this.stopCamera();
                            this.identifyPlatformToScan_Remove();
                            this.isCameraOpen = false;
                        });
                    }, (err) => {
                        console.log('Scanned failed', err);
                    });
                }
                else if (status.denied) {
                    // camera permission was permanently denied
                    // you must use QRScanner.openSettings() method to guide the user to the settings page
                    // then they can grant the permission from there
                    this.presentAlert('Error', 'Please check camera permission', 'Camera status');
                }
                else {
                    // permission was denied, but not permanently. You can ask for permission again at a later time.
                    this.presentAlert('Error', 'Please check camera permission', 'Camera status');
                }
            })
                .catch((e) => console.log('Error is', e));
        }
    }
    stopCamera() {
        if (this.scanSub !== null) {
            this.qrScanner.hide();
            this.scanSub.unsubscribe();
        }
        this.scanSub = null;
        this.identifyPlatformToScan_Remove();
        this.isCameraOpen = false;
        if (this.platform.is['mobile']
            || this.platform.is['capacitor']
            || this.platform.is['cordova']
            || this.platform.is['mobileweb']
            || this.platform.is['iphone']
            || this.platform.is['ipad']
            || this.platform.is['hybrid']
            || this.platform.is['android']
            || this.platform.is['tablet']) {
            this.qrScanner.destroy();
        }
    }
    presentAlert(hdr, msg, sub) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'alert',
                header: hdr,
                subHeader: sub,
                message: msg,
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    // check if it's a token, or a Mini
    instanceOfToken(data) {
        return 'script' in data;
    }
    pullInTokens() {
        this.balanceSubscription = this.service.updatedBalance
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])((balance) => {
            const tokenArr = [];
            for (const key in balance) {
                if (balance.hasOwnProperty(key)) {
                    if (this.instanceOfToken(balance[key])) {
                        const element = balance[key];
                        tokenArr.push({
                            tokenid: element.tokenid,
                            token: element.token,
                            description: element.description,
                            icon: element.icon,
                            proof: element.proof,
                            total: element.total,
                            script: element.script,
                            coinid: element.coinid,
                            totalamount: element.totalamount,
                            scale: element.scale,
                            confirmed: element.confirmed,
                            unconfirmed: element.unconfirmed,
                            mempool: element.mempool,
                            sendable: element.sendable
                        });
                    }
                    else {
                        const element = balance[key];
                        // add Minima always to the top
                        tokenArr.pop(); // pop it
                        this.service.update(tokenArr, {
                            tokenid: element.tokenid,
                            token: element.token,
                            total: element.total,
                            confirmed: element.confirmed,
                            unconfirmed: element.unconfirmed,
                            mempool: element.mempool,
                            sendable: element.sendable
                        });
                    }
                }
            }
            return tokenArr;
        }))
            .subscribe(responseData => {
            // check if changed
            if (this.lastJSON !== JSON.stringify(responseData)) {
                this.tokenArr = [...responseData];
                this.lastJSON = JSON.stringify(responseData);
                // add tokens
                this.getTokenSelected();
            }
        });
    }
    sendFunds() {
        if (this.data.address && this.data.address !== '' && this.data.amount && this.data.amount > 0 &&
            this.data.tokenid && this.data.tokenid !== '' && !this.data.message) {
            this.api.sendFunds(this.data).then((res) => {
                if (res.status === true) {
                    // clear inputs
                    this.address.value = '';
                    this.amount.value = '';
                    // success
                    this.presentAlert('Success', 'Your transaction has been successfully posted!', 'Transaction Status');
                }
                else {
                    this.presentAlert('Error', res.message, 'Transaction Status');
                }
            });
        }
        else if (this.data.address && this.data.address !== '' && this.data.amount && this.data.amount > 0 &&
            this.data.tokenid && this.data.tokenid !== '' && this.data.message !== undefined && this.data.message.length >= 0) {
            this.api.createTXN(this.data).then((res) => {
                if (res[5].status === true) {
                    // clear inputs
                    this.address.value = '';
                    this.amount.value = '';
                    this.message.value = '';
                    // success
                    this.presentAlert('Success', 'Your transaction has been successfully posted!', 'Transaction Status');
                }
                else if (res[4].status === false) {
                    this.presentAlert('Error', res.message, 'Transaction Status');
                }
            });
        }
        else {
            this.presentAlert('Error', 'Please check your input fields.', 'Transaction Status');
        }
    }
    /** MISC FUNCS */
    identifyPlatformToScan_Add() {
        document.addEventListener('DOMContentLoaded', function (event) {
            // Do work
            if (this.platform.is('ios')) {
                setTimeout(() => {
                    window.document.querySelectorAll('ion-content')
                        .forEach(element => {
                        const element1 = element.shadowRoot.querySelector('style');
                        element1.innerHTML = element1.innerHTML
                            .replace('--background:var(--ion-background-color,#fff);', '--background: transparent');
                    });
                }, 300);
            }
            else if (this.platform.is('android')) {
                // window.document.querySelector('ion-content').classList.add('transparentBody');
                setTimeout(() => {
                    window.document.querySelectorAll('ion-content')
                        .forEach(element => {
                        const element1 = element.shadowRoot.querySelector('style');
                        element1.innerHTML = element1.innerHTML
                            .replace('--background:var(--ion-background-color,#fff);', '--background: transparent');
                    });
                }, 300);
            }
        });
    }
    identifyPlatformToScan_Remove() {
        document.addEventListener('DOMContentLoaded', function (event) {
            if (this.platform.is('ios')) {
                setTimeout(() => {
                    window.document.querySelectorAll('ion-content')
                        .forEach(element => {
                        const element1 = element.shadowRoot.querySelector('style');
                        element1.innerHTML = element1.innerHTML
                            .replace('--background: transparent', '--background:var(--ion-background-color,#fff);');
                    });
                }, 300);
            }
            else if (this.platform.is('android')) {
                // window.document.querySelector('ion-content').classList.remove('transparentBody');
                setTimeout(() => {
                    window.document.querySelectorAll('ion-content')
                        .forEach(element => {
                        const element1 = element.shadowRoot.querySelector('style');
                        element1.innerHTML = element1.innerHTML
                            .replace('--background: transparent', '--background:var(--ion-background-color,#fff);');
                    });
                }, 300);
            }
        });
    }
    // work around for weird ion-textarea height: 0 + auto-grow='true'
    checkTextarea() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return this.message.getInputElement().then((element) => {
                if (element.style.height == '0px') {
                    return element.style.height = 'auto';
                }
                else {
                    setTimeout(() => this.checkTextarea(), 100);
                }
            });
        });
    }
    checkboxValue(ev, messageEntry) {
        this.checkTextarea();
        if (messageEntry === false) {
            this.data.message = undefined;
        }
    }
    // Display/hide mobile buttons with this..
    checkPlatform() {
        if (this.platform.is('desktop')) {
            return false;
        }
        else {
            return true;
        }
    }
    pasteFromClipboard() {
        if (this.platform.is('desktop')) {
            this.pasteFromPWA();
        }
        else {
            this.clipboard.paste().then((resolve) => {
                this.data.address = resolve;
            }, (reject) => {
                console.log('Error: ' + reject);
            });
        }
    }
    pasteFromPWA() {
        document.addEventListener('paste', (e) => {
            this.data.address = e.clipboardData.getData('text');
            e.preventDefault();
            document.removeEventListener('paste', null);
        });
        document.execCommand('paste');
    }
    webScanQR() {
        this.isWebCameraOpen = true;
        qr_scanner__WEBPACK_IMPORTED_MODULE_9__["default"].WORKER_PATH = 'assets/JS/qr-scanner-worker.min.js';
        setTimeout(() => {
            this.webQrScanner = new qr_scanner__WEBPACK_IMPORTED_MODULE_9__["default"](this.videoElem.nativeElement, result => {
                this.data.address = result;
                this.isWebCameraOpen = false;
            });
            this.webQrScanner.start();
        }, 500);
    }
    stopWebScanQR() {
        this.webQrScanner.destroy();
        this.webQrScanner = null;
        this.isWebCameraOpen = false;
    }
};
SendFundsPage.ctorParameters = () => [
    { type: _ionic_native_qr_scanner_ngx__WEBPACK_IMPORTED_MODULE_3__["QRScanner"] },
    { type: _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_4__["Clipboard"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"] },
    { type: _service_minima_api_service__WEBPACK_IMPORTED_MODULE_6__["MinimaApiService"] },
    { type: _service_balance_service__WEBPACK_IMPORTED_MODULE_1__["BalanceService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('address', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonInput"])
], SendFundsPage.prototype, "address", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('amount', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonInput"])
], SendFundsPage.prototype, "amount", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('message', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonTextarea"])
], SendFundsPage.prototype, "message", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('videoElem', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"])
], SendFundsPage.prototype, "videoElem", void 0);
SendFundsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-send-funds',
        template: __webpack_require__(/*! raw-loader!./send-funds.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/send-funds/send-funds.page.html"),
        styles: [__webpack_require__(/*! ./send-funds.page.scss */ "./src/app/pages/send-funds/send-funds.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_qr_scanner_ngx__WEBPACK_IMPORTED_MODULE_3__["QRScanner"],
        _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_4__["Clipboard"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"],
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"],
        _service_minima_api_service__WEBPACK_IMPORTED_MODULE_6__["MinimaApiService"],
        _service_balance_service__WEBPACK_IMPORTED_MODULE_1__["BalanceService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"],
        _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]])
], SendFundsPage);



/***/ })

}]);
//# sourceMappingURL=pages-send-funds-send-funds-module-es2015.js.map