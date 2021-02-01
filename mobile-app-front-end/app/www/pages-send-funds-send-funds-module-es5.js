(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-send-funds-send-funds-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/send-funds/send-funds.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/send-funds/send-funds.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-app>\n<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button class=\"menu-icon\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Send\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content *ngIf=\"!isWebCameraOpen\">\n\n  <ion-grid *ngIf=\"tokenArr.length == 0\">\n    <ion-row>\n      <ion-col style=\"display: flex; align-items:center; justify-content:center\" size=\"12\">\n        <ion-label>Fetching tokens...</ion-label>\n      </ion-col>\n      <ion-col style=\"display: flex; align-items:center; justify-content:center\" size=\"12\">\n        <ion-spinner name=\"crescent\"></ion-spinner>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-card class=\"webscan-canvas\" *ngIf=\"isWebCameraOpen\">\n    <ion-card-header class=\"medium-text\">\n    Scan Your Minima QR address now...\n    <ion-progress-bar type=\"indeterminate\" reversed=\"true\"></ion-progress-bar>\n    </ion-card-header>\n    <video height=\"240\" #videoElem></video>\n    <hr>\n    <ion-button block=\"full\" (click)=\"scanQR()\">Stop Scanning</ion-button>\n    <hr>\n  </ion-card>\n\n  <ion-card class=\"borders\" *ngIf=\"!isWebCameraOpen && tokenArr.length > 0\">\n    <ion-card-header>\n      Post A Transaction\n      <ion-card-title>\n          <ion-icon style=\" font-size:1.2rem;\" slot=\"start\" name=\"send\" class=\"icon-head medium-text\" ></ion-icon>\n      </ion-card-title>\n    </ion-card-header>\n\n    <ion-card-content>\n      <form [formGroup]=\"sendForm\" id=\"sendForm\" (ngSubmit)=\"sendFunds()\">\n        <ion-list lines=\"none\">\n          <ion-item>\n            <ion-label position=\"fixed\" class=\"medium-text\">Token</ion-label>\n            <ion-select\n              placeholder=\"Select A Token\"\n              formControlName=\"tokenid\"    \n              interface = 'alert'\n              [(ngModel)]='itemSelected'\n              class=\"medium-text input\"\n              (ionChange)=\"onItemSelection($event)\"> \n            <ion-select-option *ngFor=\"let token of tokenArr;\"  [value]=\"token.tokenid\" class=\"token-option\">\n              {{ token.token + \"&mdash;\"+ token.tokenid }}\n            </ion-select-option>\n          </ion-select>\n          </ion-item>\n          <ion-item lines=\"none\">\n            <ion-label class=\"medium-text\" position=\"fixed\">Address</ion-label>\n            <span (click)=\"scanQR()\" id=\"qrIcon\"> <ion-icon alt=\"qrCode\" src=\"assets/scan-outline.svg\"></ion-icon></span>\n            <ion-input #address class=\"medium-text input\" formControlName=\"address\" clearInput=\"true\" placeholder=\"address\"></ion-input>\n          </ion-item>\n          <ion-item class=\"error\" lines=\"none\" *ngIf=\"addressFormItem.invalid && addressFormItem.touched\">\n            <ion-label position=\"fixed\"></ion-label>\n            <ion-note class=\"error-message\">\n              <ion-icon name=\"alert-circle\"></ion-icon> <span> Invalid address format!</span> <br>\n              <span>&mdash; An address must begin with 0x or Mx.</span> \n            </ion-note>\n          </ion-item>\n          <ion-item lines=\"none\">\n            <ion-label class=\"medium-text\" position=\"fixed\">Amount</ion-label>\n            <ion-input #amount type=\"number\" formControlName=\"amount\" class=\"input medium-text\" placeholder=\"amount\"></ion-input>\n          </ion-item>\n          <ion-item class=\"error\" lines=\"none\" *ngIf=\"amountFormItem.invalid && amountFormItem.touched\">\n            <ion-label position=\"fixed\"></ion-label>\n            <ion-note class=\"error-message\">\n              <ion-icon name=\"alert-circle\"></ion-icon> <span> Amount required!</span> <br>\n              <span>&mdash; Amount has to be numeric and greater than 0.</span> \n            </ion-note>\n          </ion-item>\n          <ion-row id=\"quickAmount\">\n            <ion-col size=\"3\">\n\n            </ion-col>\n            <ion-col size=\"9\" style=\"padding-right:2.5%\">\n              <ion-button class=\"medium-text\" (click)=\"fillAmount('max')\" size=\"small\" fill=\"outline\">Send Max</ion-button>\n              <ion-button class=\"medium-text\" (click)=\"fillAmount('half')\" size=\"small\" fill=\"outline\">Send 1/2</ion-button>\n              <ion-button class=\"medium-text\" (click)=\"fillAmount('quarter')\" size=\"small\" fill=\"outline\">Send 1/4</ion-button>\n            </ion-col>\n          </ion-row>\n          <ion-item lines=\"none\">\n            <!-- Disabled Checkbox -->\n            <ion-checkbox (click)=\"useMessage()\"></ion-checkbox>\n            <ion-label class=\"medium-text\" [hidden]=\"messageToggle\" style=\"padding-left: 10px;\">Message</ion-label>\n            <ion-label class=\"medium-text\" [hidden]=\"!messageToggle\" style=\"padding-left: 10px;\">This message is public</ion-label>\n            </ion-item>\n            <ion-item [hidden]=\"!messageToggle\" lines=\"none\">\n                <ion-textarea \n                [(ngModel)]=\"data.message\"\n                formControlName=\"message\"\n                class=\"medium-text input\"\n                auto-grow=\"false\"\n                #message \n                placeholder=\"type your message...\"\n                maxlength=\"255\">\n                </ion-textarea>\n            </ion-item>\n            <ion-note *ngIf=\"data.message\" class=\"length\">{{ data.message.length +\"/255\" }}</ion-note>\n        </ion-list>\n      </form>\n        \n        \n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n<ion-footer>\n  <ion-toolbar class=\"border-t\">\n    <ion-buttons> \n      <ion-button type=\"button\" class=\"action-btn medium-text\" expand=\"block\" (click)=\"stopScanning()\"  *ngIf=\"isCameraOpen==true\">\n        Stop scanning\n       </ion-button>\n      <ion-button #submitBtn [disabled]=\"sendForm.invalid\" expand=\"block\" *ngIf=\"isCameraOpen==false\">\n        <button type=\"submit\" form=\"sendForm\" class=\"footer\">\n          <ion-icon slot=\"start\" name=\"send\"></ion-icon> Send Funds\n        </button> \n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer>\n</ion-app>\n\n"

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

module.exports = "ion-card-content {\n  background: var(--ion-card-color);\n}\n\nion-card-header {\n  --color: var(--ion-text-color,#000);\n}\n\nion-toolbar {\n  --background: var(--ion-m-background);\n  font-family: manrope-bold;\n  color: var(--ion-color-tertiary);\n}\n\nion-toolbar ion-title {\n  padding-top: 5%;\n  font-size: 1.2rem;\n  color: var(--ion-color-tertiary);\n}\n\nion-toolbar ion-buttons ion-menu-button {\n  font-size: 1rem;\n  color: var(--ion-color-tertiary);\n}\n\nion-item ion-label {\n  white-space: normal;\n}\n\nion-item.wordCountWrapper {\n  padding: 0;\n  margin: 0;\n}\n\nion-select {\n  display: inherit;\n  font-family: manrope-bold;\n  background-color: #ffffff;\n  outline: 1px solid #91919D;\n  font-size: 1rem;\n  color: var(--ion-color-primary);\n}\n\nion-select-option {\n  font-family: manrope-bold;\n}\n\nion-input {\n  color: #000;\n  line-height: 16px;\n  background-color: #ffffff;\n}\n\n#quickAmount ion-col ion-button {\n  float: right;\n  color: var(--ion-color-gray-two);\n  background-color: var(--ion-color-primary);\n  text-transform: none;\n  font-family: manrope-bold;\n}\n\n#qrIcon {\n  z-index: 99999;\n  cursor: pointer;\n  right: 6%;\n  position: absolute;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  color: var(--ion-color-primary) !important;\n}\n\n.icon-head {\n  color: #1FB4CD;\n}\n\n.util-btns {\n  padding: 3px;\n  text-align: center;\n  margin: 2px;\n}\n\n.action-btn {\n  height: 72px;\n}\n\n.transparentBody {\n  background: none transparent !important;\n  --background: none transparent !important;\n}\n\n.webscan-canvas {\n  text-align: center;\n  --background: none transparent !important;\n}\n\nion-footer ion-toolbar ion-buttons ion-button {\n  width: 100%;\n  height: 58px;\n  text-transform: none;\n  font-family: manrope-bold;\n}\n\nion-toolbar {\n  --background: var(--ion-m-background);\n}\n\n.input {\n  font-family: manrope-light;\n}\n\n.length {\n  position: relative;\n  float: right;\n  z-index: 2000;\n  font-family: manrope-light;\n  color: var(--ion-color-tertiary) !important;\n  margin-right: 5%;\n}\n\nion-textarea {\n  color: black !important;\n  background: #ffffff;\n  padding-left: 1%;\n  margin-bottom: 1%;\n}\n\nion-item.error {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\nion-item.error span {\n  color: var(--ion-color-tertiary);\n  display: inline-block;\n  vertical-align: middle;\n}\n\nion-note.error-message ion-icon {\n  color: var(--ion-color-secondary);\n  font-size: 1rem;\n  display: inline-block;\n  vertical-align: middle;\n}\n\nion-note.error-message {\n  display: block;\n}\n\nbutton.footer {\n  width: 100%;\n  height: 58px;\n  font-size: 1rem;\n  text-align: center;\n  text-transform: none;\n  font-family: manrope-bold;\n  background: transparent;\n  color: var(--ion-color-tertiary);\n}\n\nbutton.footer:hover {\n  cursor: pointer;\n  opacity: 0.6;\n}\n\nbutton.footer ion-icon {\n  font-size: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGlhc25lbXIvcHJvamVjdHMvV2FsbGV0L21vYmlsZS1hcHAtZnJvbnQtZW5kL2FwcC9zcmMvYXBwL3BhZ2VzL3NlbmQtZnVuZHMvc2VuZC1mdW5kcy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3NlbmQtZnVuZHMvc2VuZC1mdW5kcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQ0FBQTtBQ0NGOztBRENBO0VBQ0UsbUNBQUE7QUNFRjs7QURBQTtFQUNFLHFDQUFBO0VBQ0EseUJBQUE7RUFDQSxnQ0FBQTtBQ0dGOztBREZFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0NBQUE7QUNJSjs7QURGRTtFQUNFLGVBQUE7RUFDQSxnQ0FBQTtBQ0lKOztBRERBO0VBQ0UsbUJBQUE7QUNJRjs7QURGQTtFQUNFLFVBQUE7RUFDQSxTQUFBO0FDS0Y7O0FESEE7RUFDRSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSwwQkFBQTtFQUNBLGVBQUE7RUFDQSwrQkFBQTtBQ01GOztBREpBO0VBQ0UseUJBQUE7QUNPRjs7QURMQTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0FDUUY7O0FETkM7RUFDQyxZQUFBO0VBQ0EsZ0NBQUE7RUFDQSwwQ0FBQTtFQUNBLG9CQUFBO0VBQ0EseUJBQUE7QUNTRjs7QURQQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSwwQ0FBQTtBQ1VGOztBRFBBO0VBQ0UsY0FBQTtBQ1VGOztBRFJBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBRUEsV0FBQTtBQ1VGOztBRFJBO0VBQ0UsWUFBQTtBQ1dGOztBRFJBO0VBQ0MsdUNBQUE7RUFDQSx5Q0FBQTtBQ1dEOztBRFRBO0VBQ0Msa0JBQUE7RUFDQyx5Q0FBQTtBQ1lGOztBRFZBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLHlCQUFBO0FDYUY7O0FEVkE7RUFDRSxxQ0FBQTtBQ2FGOztBRFhBO0VBQ0UsMEJBQUE7QUNjRjs7QURaQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSwwQkFBQTtFQUNBLDJDQUFBO0VBQ0EsZ0JBQUE7QUNlRjs7QURiQTtFQUNFLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDZ0JGOztBRGJBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7QUNnQkY7O0FEZEE7RUFDRSxnQ0FBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7QUNpQkY7O0FEZkE7RUFDRSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0FDa0JGOztBRGhCQTtFQUNFLGNBQUE7QUNtQkY7O0FEakJBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLHlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQ0FBQTtBQ29CRjs7QURsQkE7RUFDRSxlQUFBO0VBQ0EsWUFBQTtBQ3FCRjs7QURuQkE7RUFDRSxlQUFBO0FDc0JGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2VuZC1mdW5kcy9zZW5kLWZ1bmRzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJkLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY2FyZC1jb2xvcik7XG59XG5pb24tY2FyZC1oZWFkZXIge1xuICAtLWNvbG9yOiB2YXIoLS1pb24tdGV4dC1jb2xvciwjMDAwKTtcbn1cbmlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tbS1iYWNrZ3JvdW5kKTtcbiAgZm9udC1mYW1pbHk6IG1hbnJvcGUtYm9sZDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeSk7XG4gIGlvbi10aXRsZSB7XG4gICAgcGFkZGluZy10b3A6IDUlO1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnkpO1xuICB9XG4gIGlvbi1idXR0b25zIGlvbi1tZW51LWJ1dHRvbiB7XG4gICAgZm9udC1zaXplOiAxLjByZW07XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeSk7XG4gIH1cbn1cbmlvbi1pdGVtIGlvbi1sYWJlbCB7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG59XG5pb24taXRlbS53b3JkQ291bnRXcmFwcGVyIHtcbiAgcGFkZGluZzowO1xuICBtYXJnaW46MDtcbn1cbmlvbi1zZWxlY3Qge1xuICBkaXNwbGF5OiBpbmhlcml0O1xuICBmb250LWZhbWlseTogbWFucm9wZS1ib2xkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBvdXRsaW5lOiAxcHggc29saWQgIzkxOTE5RDtcbiAgZm9udC1zaXplOiAxLjByZW07XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5pb24tc2VsZWN0LW9wdGlvbiB7XG4gIGZvbnQtZmFtaWx5OiBtYW5yb3BlLWJvbGQ7XG59XG5pb24taW5wdXQge1xuICBjb2xvcjogIzAwMDtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG59XG4gI3F1aWNrQW1vdW50IGlvbi1jb2wgaW9uLWJ1dHRvbiB7XG4gIGZsb2F0OiByaWdodDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1ncmF5LXR3byk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGZvbnQtZmFtaWx5OiBtYW5yb3BlLWJvbGQ7XG59XG4jcXJJY29uIHtcbiAgei1pbmRleDogOTk5OTk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcmlnaHQ6IDYlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpIWltcG9ydGFudDtcbn1cblxuLmljb24taGVhZHtcbiAgY29sb3I6ICMxRkI0Q0Q7XG59XG4udXRpbC1idG5zIHtcbiAgcGFkZGluZzogM3B4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIC8vIHBhZGRpbmc6IDFweDtcbiAgbWFyZ2luOiAycHg7XG59XG4uYWN0aW9uLWJ0biB7XG4gIGhlaWdodDogNzJweDtcbn1cblxuLnRyYW5zcGFyZW50Qm9keSB7XG5cdGJhY2tncm91bmQ6IG5vbmUgdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcblx0LS1iYWNrZ3JvdW5kOiBub25lIHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG4ud2Vic2Nhbi1jYW52YXMge1xuIHRleHQtYWxpZ246IGNlbnRlcjtcbiBcdC0tYmFja2dyb3VuZDogbm9uZSB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuaW9uLWZvb3RlciBpb24tdG9vbGJhciBpb24tYnV0dG9ucyBpb24tYnV0dG9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNThweDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGZvbnQtZmFtaWx5OiBtYW5yb3BlLWJvbGQ7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tbS1iYWNrZ3JvdW5kKTtcbn1cbi5pbnB1dCB7XG4gIGZvbnQtZmFtaWx5OiBtYW5yb3BlLWxpZ2h0O1xufVxuLmxlbmd0aCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZmxvYXQ6IHJpZ2h0O1xuICB6LWluZGV4OiAyMDAwO1xuICBmb250LWZhbWlseTogbWFucm9wZS1saWdodDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeSkhaW1wb3J0YW50O1xuICBtYXJnaW4tcmlnaHQ6IDUlO1xufVxuaW9uLXRleHRhcmVhIHtcbiAgY29sb3I6IGJsYWNrIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgcGFkZGluZy1sZWZ0OiAxJTtcbiAgbWFyZ2luLWJvdHRvbTogMSU7XG59XG5cbmlvbi1pdGVtLmVycm9yIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5pb24taXRlbS5lcnJvciBzcGFuIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeSk7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbmlvbi1ub3RlLmVycm9yLW1lc3NhZ2UgaW9uLWljb24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gIGZvbnQtc2l6ZTogMS4wcmVtO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5pb24tbm90ZS5lcnJvci1tZXNzYWdlIHsgXG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuYnV0dG9uLmZvb3RlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDU4cHg7XG4gIGZvbnQtc2l6ZTogMS4wcmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBmb250LWZhbWlseTogbWFucm9wZS1ib2xkO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeSk7XG59XG5idXR0b24uZm9vdGVyOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBvcGFjaXR5OiAwLjY7XG59XG5idXR0b24uZm9vdGVyIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAxLjByZW07XG59IiwiaW9uLWNhcmQtY29udGVudCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jYXJkLWNvbG9yKTtcbn1cblxuaW9uLWNhcmQtaGVhZGVyIHtcbiAgLS1jb2xvcjogdmFyKC0taW9uLXRleHQtY29sb3IsIzAwMCk7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tbS1iYWNrZ3JvdW5kKTtcbiAgZm9udC1mYW1pbHk6IG1hbnJvcGUtYm9sZDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeSk7XG59XG5pb24tdG9vbGJhciBpb24tdGl0bGUge1xuICBwYWRkaW5nLXRvcDogNSU7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5KTtcbn1cbmlvbi10b29sYmFyIGlvbi1idXR0b25zIGlvbi1tZW51LWJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeSk7XG59XG5cbmlvbi1pdGVtIGlvbi1sYWJlbCB7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG59XG5cbmlvbi1pdGVtLndvcmRDb3VudFdyYXBwZXIge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG59XG5cbmlvbi1zZWxlY3Qge1xuICBkaXNwbGF5OiBpbmhlcml0O1xuICBmb250LWZhbWlseTogbWFucm9wZS1ib2xkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBvdXRsaW5lOiAxcHggc29saWQgIzkxOTE5RDtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG5pb24tc2VsZWN0LW9wdGlvbiB7XG4gIGZvbnQtZmFtaWx5OiBtYW5yb3BlLWJvbGQ7XG59XG5cbmlvbi1pbnB1dCB7XG4gIGNvbG9yOiAjMDAwO1xuICBsaW5lLWhlaWdodDogMTZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbn1cblxuI3F1aWNrQW1vdW50IGlvbi1jb2wgaW9uLWJ1dHRvbiB7XG4gIGZsb2F0OiByaWdodDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1ncmF5LXR3byk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGZvbnQtZmFtaWx5OiBtYW5yb3BlLWJvbGQ7XG59XG5cbiNxckljb24ge1xuICB6LWluZGV4OiA5OTk5OTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICByaWdodDogNiU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSkgIWltcG9ydGFudDtcbn1cblxuLmljb24taGVhZCB7XG4gIGNvbG9yOiAjMUZCNENEO1xufVxuXG4udXRpbC1idG5zIHtcbiAgcGFkZGluZzogM3B4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMnB4O1xufVxuXG4uYWN0aW9uLWJ0biB7XG4gIGhlaWdodDogNzJweDtcbn1cblxuLnRyYW5zcGFyZW50Qm9keSB7XG4gIGJhY2tncm91bmQ6IG5vbmUgdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgLS1iYWNrZ3JvdW5kOiBub25lIHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5cbi53ZWJzY2FuLWNhbnZhcyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgLS1iYWNrZ3JvdW5kOiBub25lIHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1mb290ZXIgaW9uLXRvb2xiYXIgaW9uLWJ1dHRvbnMgaW9uLWJ1dHRvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDU4cHg7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBmb250LWZhbWlseTogbWFucm9wZS1ib2xkO1xufVxuXG5pb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLW0tYmFja2dyb3VuZCk7XG59XG5cbi5pbnB1dCB7XG4gIGZvbnQtZmFtaWx5OiBtYW5yb3BlLWxpZ2h0O1xufVxuXG4ubGVuZ3RoIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmbG9hdDogcmlnaHQ7XG4gIHotaW5kZXg6IDIwMDA7XG4gIGZvbnQtZmFtaWx5OiBtYW5yb3BlLWxpZ2h0O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5KSAhaW1wb3J0YW50O1xuICBtYXJnaW4tcmlnaHQ6IDUlO1xufVxuXG5pb24tdGV4dGFyZWEge1xuICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgcGFkZGluZy1sZWZ0OiAxJTtcbiAgbWFyZ2luLWJvdHRvbTogMSU7XG59XG5cbmlvbi1pdGVtLmVycm9yIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbmlvbi1pdGVtLmVycm9yIHNwYW4ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5KTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG5pb24tbm90ZS5lcnJvci1tZXNzYWdlIGlvbi1pY29uIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICBmb250LXNpemU6IDFyZW07XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuaW9uLW5vdGUuZXJyb3ItbWVzc2FnZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5idXR0b24uZm9vdGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNThweDtcbiAgZm9udC1zaXplOiAxcmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBmb250LWZhbWlseTogbWFucm9wZS1ib2xkO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeSk7XG59XG5cbmJ1dHRvbi5mb290ZXI6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG9wYWNpdHk6IDAuNjtcbn1cblxuYnV0dG9uLmZvb3RlciBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn0iXX0= */"

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
/* harmony import */ var _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/clipboard/ngx */ "./node_modules/@ionic-native/clipboard/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _service_minima_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../service/minima-api.service */ "./src/app/service/minima-api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var minima__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! minima */ "./node_modules/minima/dist/minima.js");
/* harmony import */ var minima__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(minima__WEBPACK_IMPORTED_MODULE_8__);









var SendFundsPage = /** @class */ (function () {
    function SendFundsPage(formBuilder, clipboard, alertController, api, balanceService, route, router) {
        this.formBuilder = formBuilder;
        this.clipboard = clipboard;
        this.alertController = alertController;
        this.api = api;
        this.balanceService = balanceService;
        this.route = route;
        this.router = router;
        this.nftScript = 'ASSERT FLOOR ( @AMOUNT ) EQ @AMOUNT LET checkout = 0 WHILE ( checkout LT @TOTOUT )' +
            'DO IF GETOUTTOK ( checkout ) EQ @TOKENID THEN LET outamt = GETOUTAMT ( checkout ) ASSERT FLOOR ( outamt )' +
            'EQ outamt ENDIF LET checkout = INC ( checkout ) ENDWHILE RETURN TRUE';
        this.isWebCameraOpen = false;
        this.data = { tokenid: '', amount: '', address: '', message: '' };
        this.messageToggle = false;
        this.tokenArr = [];
        this.scanSub = null;
        this.pullInTokens();
    }
    SendFundsPage.prototype.ionViewWillEnter = function () {
        this.getTokenSelected();
    };
    SendFundsPage.prototype.ionViewWillLeave = function () {
    };
    SendFundsPage.prototype.ngOnInit = function () {
        this.sendForm = this.formBuilder.group({
            tokenid: '',
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
    Object.defineProperty(SendFundsPage.prototype, "tokenFormItem", {
        get: function () {
            return this.sendForm.get('tokenid');
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
    SendFundsPage.prototype.pullInTokens = function () {
        var _this = this;
        this.balanceService.data.subscribe(function (balance) {
            _this.tokenArr = balance;
        });
    };
    SendFundsPage.prototype.sendFunds = function () {
        var _this = this;
        this.sendForm.value.amnt = this.sendForm.value.amount.toString();
        var data = this.sendForm.value;
        if (data.message !== null && (data.message || data.message.length > 0)) {
            this.submitBtn.disabled = true;
            this.api.sendMessageTransaction(data).then(function (res) {
                if (minima__WEBPACK_IMPORTED_MODULE_8__["Minima"].util.checkAllResponses(res)) {
                    setTimeout(function () {
                        _this.submitBtn.disabled = false;
                    }, 500);
                    _this.presentAlert('Transaction Status', 'Transaction has been posted to the network!', 'Successful');
                    _this.sendForm.reset();
                }
                else {
                    setTimeout(function () {
                        _this.submitBtn.disabled = false;
                    }, 500);
                    _this.presentAlert('Transaction Status', res.message, 'Failed');
                }
            });
        }
        else {
            this.submitBtn.disabled = true;
            this.api.sendFunds(data).then(function (res) {
                if (res.status) {
                    setTimeout(function () {
                        _this.submitBtn.disabled = false;
                    }, 500);
                    _this.presentAlert('Transaction Status', 'Transaction has been posted to the network!', 'Successful');
                    _this.sendForm.reset();
                }
                else {
                    setTimeout(function () {
                        _this.submitBtn.disabled = false;
                    }, 500);
                    _this.presentAlert('Transaction Status', res.message, 'Failed');
                }
            });
        }
    };
    // get token selected or set Minima as default
    SendFundsPage.prototype.getTokenSelected = function () {
        var _this = this;
        this.route.queryParamMap.subscribe(function (res) {
            _this.itemSelected = res.params.id;
            if (!res.params.id) {
                _this.itemSelected = '0x00';
            }
        });
    };
    // listen to selection change
    SendFundsPage.prototype.onItemSelection = function (ev) {
        this.itemSelected = this.sendForm.get('tokenid').value;
    };
    SendFundsPage.prototype.fillAmount = function (type) {
        var _this = this;
        var param = this.sendForm.get('tokenid').value;
        this.amountInp.value = '';
        this.tokenArr.forEach(function (element) {
            if (param === element.tokenid || (param === element.tokenid && element.script !== _this.nftScript)) {
                var maxAmmo = element.sendable;
                if (type === 'max') {
                    _this.amountInp.value = maxAmmo;
                }
                else if (type === 'half') {
                    _this.amountInp.value = (parseFloat(maxAmmo) / 2.0).toString();
                }
                else if (type === 'quarter') {
                    _this.amountInp.value = (parseFloat(maxAmmo) / 4.0).toString();
                }
            }
            else if (element.script === _this.nftScript) {
                var maxAmmo = element.sendable;
                if (type === 'max') {
                    _this.amountInp.value = maxAmmo;
                }
                else if (type === 'half') {
                    _this.amountInp.value = Math.floor((parseFloat(maxAmmo) / 2.0)).toString();
                }
                else if (type === 'quarter') {
                    _this.amountInp.value = Math.floor((parseFloat(maxAmmo) / 4.0)).toString();
                }
            }
        });
    };
    SendFundsPage.prototype.scanQR = function () {
        this.isWebCameraOpen = true;
        console.log("Camera is now on: " + this.isWebCameraOpen);
        var stream = navigator.mediaDevices.getUserMedia({
            video: { facingMode: 'environment' }
        });
        this.videoElem.nativeElement.src = stream;
        this.videoElem.nativeElement.setAttribute('playsinline', true); // iOS - do not open fullscreen
        this.videoElem.nativeElement.play();
    };
    SendFundsPage.prototype.stopScanning = function () {
        this.isWebCameraOpen = false;
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
    SendFundsPage.prototype.useMessage = function () {
        if (this.messageToggle) {
            this.messageToggle = false;
        }
        else {
            this.messageToggle = true;
        }
    };
    SendFundsPage.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] },
        { type: _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_4__["Clipboard"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
        { type: _service_minima_api_service__WEBPACK_IMPORTED_MODULE_6__["MinimaApiService"] },
        { type: _service_balance_service__WEBPACK_IMPORTED_MODULE_2__["BalanceService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('submitBtn', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonButton"])
    ], SendFundsPage.prototype, "submitBtn", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('amount', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonInput"])
    ], SendFundsPage.prototype, "amountInp", void 0);
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
            _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_4__["Clipboard"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"],
            _service_minima_api_service__WEBPACK_IMPORTED_MODULE_6__["MinimaApiService"],
            _service_balance_service__WEBPACK_IMPORTED_MODULE_2__["BalanceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
    ], SendFundsPage);
    return SendFundsPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-send-funds-send-funds-module-es5.js.map