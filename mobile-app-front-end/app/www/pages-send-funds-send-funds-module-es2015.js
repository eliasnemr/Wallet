(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-send-funds-send-funds-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/send-funds/send-funds.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/send-funds/send-funds.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-app>\n<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-title>\n      <ion-item lines=\"none\" class=\"ion-no-padding\">\n        <ion-menu-button></ion-menu-button>\n        Send\n      </ion-item>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-item class=\"breadcrumb ion-no-padding\" lines=\"none\" *ngIf=\"tokenArr.length > 0\">\n  Enter transaction details\n</ion-item>\n\n<ion-content *ngIf=\"!isWebCameraOpen\">\n\n  <ion-grid *ngIf=\"tokenArr.length == 0\">\n    <ion-row>\n      <ion-col style=\"display: flex; align-items:center; justify-content:center\" size=\"12\">\n        <ion-label>Fetching tokens...</ion-label>\n      </ion-col>\n      <ion-col style=\"display: flex; align-items:center; justify-content:center\" size=\"12\">\n        <ion-spinner name=\"crescent\"></ion-spinner>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-card class=\"webscan-canvas\" *ngIf=\"isWebCameraOpen\">\n    <ion-card-header class=\"medium-text\">\n    Scan Your Minima QR address now...\n    <ion-progress-bar type=\"indeterminate\" reversed=\"true\"></ion-progress-bar>\n    </ion-card-header>\n    <video height=\"240\" #videoElem></video>\n    <hr>\n    <ion-button block=\"full\" (click)=\"scanQR()\">Stop Scanning</ion-button>\n    <hr>\n  </ion-card>\n\n\n  <form *ngIf=\"!isWebCameraOpen && tokenArr.length > 0\" [formGroup]=\"sendForm\" id=\"sendForm\" (ngSubmit)=\"sendFunds()\">\n    <ion-list>\n      <ion-item class=\"no-hover no-ripple\" lines=\"none\" style=\"margin-left: 25px; margin-right: 14px; --padding-start: 0; --padding-end: 0\">\n        <ion-label position=\"floating\">Token</ion-label>\n        <ion-select\n          placeholder=\"Select A Token\"\n          formControlName=\"tokenid\"    \n          interface = 'ion-action-sheet'\n          [(ngModel)]='itemSelected'\n          class=\"no-hover no-ripple input\"\n          (ionChange)=\"onItemSelection($event)\"> \n        <ion-select-option *ngFor=\"let token of tokenArr;\" [value]=\"token.tokenid\" class=\"token-option\">\n          {{ token.token + \"&mdash;\"+ token.tokenid }}\n        </ion-select-option>\n      </ion-select>\n      </ion-item>\n      <ion-item class=\"no-hover no-ripple\"  lines=\"none\">\n        <ion-label class=\"medium-text\" position=\"stacked\">Address</ion-label>\n        <!-- <span (click)=\"scanQR()\" id=\"qrIcon\"> <ion-icon alt=\"qrCode\" src=\"assets/scan-outline.svg\"></ion-icon></span> -->\n        <ion-input #address class=\"medium-text input\" formControlName=\"address\" clearInput=\"true\" placeholder=\"Enter a valid address\"></ion-input>\n      </ion-item>\n      <ion-item class=\"no-hover no-ripple\"  class=\"error\" lines=\"none\" *ngIf=\"addressFormItem.invalid && addressFormItem.touched\">\n        <ion-note class=\"error-message\">\n          <ion-icon name=\"alert-circle\"></ion-icon> <span> Invalid address format!</span> <br>\n          <span>&mdash; An address must begin with 0x or Mx.</span> \n        </ion-note>\n      </ion-item>\n      <ion-item class=\"no-hover no-ripple\"  lines=\"none\">\n        <ion-label class=\"medium-text\" position=\"stacked\">Amount</ion-label>\n        <ion-input #amount type=\"number\" formControlName=\"amount\" class=\"input medium-text\" placeholder=\"Enter token amount\"></ion-input>\n      </ion-item>\n      <ion-item class=\"error\" lines=\"none\" *ngIf=\"amountFormItem.invalid && amountFormItem.touched\">\n        <ion-note class=\"error-message\">\n          <ion-icon name=\"alert-circle\"></ion-icon> <span> Amount required!</span> <br>\n          <span>&mdash; Amount has to be numeric and greater than 0.</span> \n        </ion-note>\n      </ion-item>\n\n      <ion-item class=\"no-hover no-ripple\"  lines=\"none\">\n        <ion-label position=\"stacked\" style=\"margin-bottom: 1%;\">Message (optional)</ion-label>\n        <ion-textarea \n            [(ngModel)]=\"data.message\"\n            formControlName=\"message\"\n            class=\"medium-text input\"\n            auto-grow=\"false\"\n            #message \n            placeholder=\"This message will be public\"\n            maxlength=\"255\">\n            </ion-textarea>\n      </ion-item>\n      <ion-label *ngIf=\"data.message\" class=\"length\">{{ data.message.length +\"/255\" }}</ion-label>\n    </ion-list>\n\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-button #submitBtn type=\"submit\" [disabled]=\"sendForm.invalid\" class=\"send-funds\" fill=\"clear\">  \n           Send Funds\n        </ion-button>\n      </ion-col>\n    </ion-row>\n    \n\n  </form>\n\n</ion-content>\n<ion-footer>\n  <!-- <ion-toolbar class=\"border-t\">\n    <ion-buttons> \n      <ion-button type=\"button\" class=\"action-btn medium-text\" expand=\"block\" (click)=\"stopScanning()\"  *ngIf=\"isCameraOpen==true\">\n        Stop scanning\n       </ion-button>\n      <ion-button #submitBtn [disabled]=\"sendForm.invalid\" expand=\"block\" *ngIf=\"isCameraOpen==false\">\n        <button type=\"submit\" form=\"sendForm\" class=\"footer\">\n          <ion-icon slot=\"start\" name=\"send\"></ion-icon> Send Funds\n        </button> \n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar> -->\n  <ion-button (click)=\"giveMe50()\" class=\"gimme50 no-ripple\" fill=\"none\">\n    Gimme 50\n  </ion-button>\n</ion-footer>\n</ion-app>\n\n"

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
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
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

module.exports = "ion-card-content {\n  background: var(--ion-card-color);\n}\n\nion-card-header {\n  --color: var(--ion-text-color,#000);\n}\n\nion-list ion-item {\n  margin-left: 10px;\n  margin-right: 15px;\n}\n\nion-item ion-label {\n  white-space: normal;\n  margin-bottom: 2%;\n}\n\nion-item.wordCountWrapper {\n  padding: 0;\n  margin: 0;\n}\n\nion-select {\n  outline: none !important;\n  border: 1px solid #f0f0fa;\n  font-family: manrope-regular;\n  background-color: #ffffff;\n  outline: 1px solid #91919D;\n  font-size: 12px;\n  padding-left: 2% !important;\n  --placeholder-opacity: 0.7;\n}\n\nion-select:hover {\n  background: #fff !important;\n  background-color: #fff !important;\n  --background-hover: none !important;\n}\n\nion-select::part(icon) {\n  top: 50%;\n  color: var(--ion-color-primary);\n  opacity: 1;\n}\n\nion-select-option {\n  font-family: manrope-bold;\n}\n\nion-input {\n  font-size: 12px;\n  color: #000;\n  line-height: 15px;\n  height: 35px;\n  background-color: #fff;\n  border: 1px solid #f0f0fa;\n  padding-left: 2% !important;\n}\n\n.transparentBody {\n  background: none transparent !important;\n  --background: none transparent !important;\n}\n\n.webscan-canvas {\n  text-align: center;\n  --background: none transparent !important;\n}\n\nion-footer {\n  width: 100%;\n  height: 90px;\n  background-color: #001C32;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\nion-toolbar {\n  --background: var(--ion-m-background);\n}\n\n.input {\n  font-family: manrope-light;\n}\n\n.length {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: baseline;\n          align-items: baseline;\n  font-family: manrope-light;\n  margin-left: 27px;\n  font-size: 12px;\n}\n\nion-textarea {\n  color: black !important;\n  background: #ffffff;\n  border: 1px solid #f0f0fa;\n  padding-left: 2% !important;\n  font-size: 12px;\n  margin-bottom: 1%;\n}\n\nion-item.error {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\nion-item.error span {\n  color: var(--ion-color-tertiary);\n  display: inline-block;\n  vertical-align: middle;\n}\n\nion-note.error-message ion-icon {\n  color: var(--ion-color-secondary);\n  font-size: 1rem;\n  display: inline-block;\n  vertical-align: middle;\n}\n\nion-note.error-message {\n  display: block;\n}\n\nbutton.footer {\n  width: 100%;\n  height: 100%;\n  font-size: 16px;\n  text-align: center;\n  text-transform: none;\n  font-family: manrope-bold;\n  background: transparent;\n  color: #fff;\n}\n\nbutton.footer:focus {\n  background: transparent;\n  --background: transparent;\n}\n\nion-button.send-funds {\n  height: 35px;\n  width: 164px;\n  --background: var(--ion-color-primary);\n  text-transform: none;\n  font-family: manrope-bold;\n  color: #fff;\n  float: right;\n  margin-right: 26px;\n  --border-radius: 0;\n}\n\nion-button.gimme50 {\n  text-transform: none;\n  color: #fff;\n  border: 1px solid #f0f0fa;\n  box-shadow: 0px 3px 6px #C8C8D41A;\n  border: 1px solid #F0F0FA;\n  border-radius: 28px;\n  opacity: 1;\n  width: 159px;\n  height: 45px;\n  font-size: 1rem;\n  font-family: manrope-bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGlhc25lbXIvcHJvamVjdHMvV2FsbGV0L21vYmlsZS1hcHAtZnJvbnQtZW5kL2FwcC9zcmMvYXBwL3BhZ2VzL3NlbmQtZnVuZHMvc2VuZC1mdW5kcy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3NlbmQtZnVuZHMvc2VuZC1mdW5kcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQ0FBQTtBQ0NGOztBRENBO0VBQ0UsbUNBQUE7QUNFRjs7QURDQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7QUNFRjs7QURDQTtFQUNFLG1CQUFBO0VBQ0EsaUJBQUE7QUNFRjs7QURBQTtFQUNFLFVBQUE7RUFDQSxTQUFBO0FDR0Y7O0FEREE7RUFDRSx3QkFBQTtFQUNBLHlCQUFBO0VBQ0EsNEJBQUE7RUFDQSx5QkFBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtFQUNBLDJCQUFBO0VBQ0EsMEJBQUE7QUNJRjs7QURGQTtFQUNFLDJCQUFBO0VBQ0EsaUNBQUE7RUFDQSxtQ0FBQTtBQ0tGOztBREhBO0VBQ0UsUUFBQTtFQUNBLCtCQUFBO0VBQ0EsVUFBQTtBQ01GOztBREpBO0VBQ0UseUJBQUE7QUNPRjs7QURMQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLDJCQUFBO0FDUUY7O0FETkE7RUFDQyx1Q0FBQTtFQUNBLHlDQUFBO0FDU0Q7O0FEUEE7RUFDQyxrQkFBQTtFQUNDLHlDQUFBO0FDVUY7O0FEUkE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7QUNXRjs7QURSQTtFQUNFLHFDQUFBO0FDV0Y7O0FEVEE7RUFDRSwwQkFBQTtBQ1lGOztBRFZBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsMkJBQUE7VUFBQSxxQkFBQTtFQUNBLDBCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDYUY7O0FEWEE7RUFDRSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSwyQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ2NGOztBRFhBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7QUNjRjs7QURaQTtFQUNFLGdDQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtBQ2VGOztBRGJBO0VBQ0UsaUNBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtBQ2dCRjs7QURkQTtFQUNFLGNBQUE7QUNpQkY7O0FEZkE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EseUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7QUNrQkY7O0FEaEJBO0VBQ0UsdUJBQUE7RUFDQSx5QkFBQTtBQ21CRjs7QURqQkE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHNDQUFBO0VBQ0Esb0JBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ29CRjs7QURqQkE7RUFDRSxvQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGlDQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQ29CRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NlbmQtZnVuZHMvc2VuZC1mdW5kcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2FyZC1jb250ZW50IHtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNhcmQtY29sb3IpO1xufVxuaW9uLWNhcmQtaGVhZGVyIHtcbiAgLS1jb2xvcjogdmFyKC0taW9uLXRleHQtY29sb3IsIzAwMCk7XG59XG5cbmlvbi1saXN0IGlvbi1pdGVtIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbn1cblxuaW9uLWl0ZW0gaW9uLWxhYmVsIHtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgbWFyZ2luLWJvdHRvbTogMiU7XG59XG5pb24taXRlbS53b3JkQ291bnRXcmFwcGVyIHtcbiAgcGFkZGluZzowO1xuICBtYXJnaW46MDtcbn1cbmlvbi1zZWxlY3Qge1xuICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmMGYwZmE7XG4gIGZvbnQtZmFtaWx5OiBtYW5yb3BlLXJlZ3VsYXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIG91dGxpbmU6IDFweCBzb2xpZCAjOTE5MTlEO1xuICBmb250LXNpemU6IDEycHg7XG4gIHBhZGRpbmctbGVmdDogMiUhaW1wb3J0YW50O1xuICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDAuNztcbn1cbmlvbi1zZWxlY3Q6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZmZmICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiBub25lICFpbXBvcnRhbnQ7XG59XG5pb24tc2VsZWN0OjpwYXJ0KGljb24pIHtcbiAgdG9wOiA1MCU7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIG9wYWNpdHk6IDE7XG59XG5pb24tc2VsZWN0LW9wdGlvbiB7XG4gIGZvbnQtZmFtaWx5OiBtYW5yb3BlLWJvbGQ7XG59XG5pb24taW5wdXQge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjMDAwO1xuICBsaW5lLWhlaWdodDogMTVweDtcbiAgaGVpZ2h0OiAzNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZjBmMGZhO1xuICBwYWRkaW5nLWxlZnQ6IDIlICFpbXBvcnRhbnQ7XG59XG4udHJhbnNwYXJlbnRCb2R5IHtcblx0YmFja2dyb3VuZDogbm9uZSB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuXHQtLWJhY2tncm91bmQ6IG5vbmUgdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cbi53ZWJzY2FuLWNhbnZhcyB7XG4gdGV4dC1hbGlnbjogY2VudGVyO1xuIFx0LS1iYWNrZ3JvdW5kOiBub25lIHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5pb24tZm9vdGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogOTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMUMzMjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tbS1iYWNrZ3JvdW5kKTtcbn1cbi5pbnB1dCB7XG4gIGZvbnQtZmFtaWx5OiBtYW5yb3BlLWxpZ2h0O1xufVxuLmxlbmd0aCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbiAgZm9udC1mYW1pbHk6IG1hbnJvcGUtbGlnaHQ7XG4gIG1hcmdpbi1sZWZ0OiAyN3B4O1xuICBmb250LXNpemU6IDEycHg7XG59XG5pb24tdGV4dGFyZWEge1xuICBjb2xvcjogYmxhY2shaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZjBmMGZhO1xuICBwYWRkaW5nLWxlZnQ6IDIlIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtYXJnaW4tYm90dG9tOiAxJTtcbn1cblxuaW9uLWl0ZW0uZXJyb3Ige1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbmlvbi1pdGVtLmVycm9yIHNwYW4ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5KTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuaW9uLW5vdGUuZXJyb3ItbWVzc2FnZSBpb24taWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgZm9udC1zaXplOiAxLjByZW07XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbmlvbi1ub3RlLmVycm9yLW1lc3NhZ2UgeyBcbiAgZGlzcGxheTogYmxvY2s7XG59XG5idXR0b24uZm9vdGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBmb250LWZhbWlseTogbWFucm9wZS1ib2xkO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICNmZmY7XG59XG5idXR0b24uZm9vdGVyOmZvY3VzIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5pb24tYnV0dG9uLnNlbmQtZnVuZHMge1xuICBoZWlnaHQ6IDM1cHg7XG4gIHdpZHRoOiAxNjRweDtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBmb250LWZhbWlseTogbWFucm9wZS1ib2xkO1xuICBjb2xvcjogI2ZmZjtcbiAgZmxvYXQ6IHJpZ2h0OyBcbiAgbWFyZ2luLXJpZ2h0OiAyNnB4O1xuICAtLWJvcmRlci1yYWRpdXM6IDA7XG59XG5cbmlvbi1idXR0b24uZ2ltbWU1MCB7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2YwZjBmYTtcbiAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggI0M4QzhENDFBO1xuICBib3JkZXI6IDFweCBzb2xpZCAjRjBGMEZBO1xuICBib3JkZXItcmFkaXVzOiAyOHB4O1xuICBvcGFjaXR5OiAxO1xuICB3aWR0aDogMTU5cHg7XG4gIGhlaWdodDogNDVweDtcbiAgZm9udC1zaXplOiAxLjByZW07XG4gIGZvbnQtZmFtaWx5OiBtYW5yb3BlLWJvbGQ7XG4gfSIsImlvbi1jYXJkLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY2FyZC1jb2xvcik7XG59XG5cbmlvbi1jYXJkLWhlYWRlciB7XG4gIC0tY29sb3I6IHZhcigtLWlvbi10ZXh0LWNvbG9yLCMwMDApO1xufVxuXG5pb24tbGlzdCBpb24taXRlbSB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG5cbmlvbi1pdGVtIGlvbi1sYWJlbCB7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gIG1hcmdpbi1ib3R0b206IDIlO1xufVxuXG5pb24taXRlbS53b3JkQ291bnRXcmFwcGVyIHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xufVxuXG5pb24tc2VsZWN0IHtcbiAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZjBmMGZhO1xuICBmb250LWZhbWlseTogbWFucm9wZS1yZWd1bGFyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBvdXRsaW5lOiAxcHggc29saWQgIzkxOTE5RDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBwYWRkaW5nLWxlZnQ6IDIlICFpbXBvcnRhbnQ7XG4gIC0tcGxhY2Vob2xkZXItb3BhY2l0eTogMC43O1xufVxuXG5pb24tc2VsZWN0OmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2ZmZiAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gIC0tYmFja2dyb3VuZC1ob3Zlcjogbm9uZSAhaW1wb3J0YW50O1xufVxuXG5pb24tc2VsZWN0OjpwYXJ0KGljb24pIHtcbiAgdG9wOiA1MCU7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIG9wYWNpdHk6IDE7XG59XG5cbmlvbi1zZWxlY3Qtb3B0aW9uIHtcbiAgZm9udC1mYW1pbHk6IG1hbnJvcGUtYm9sZDtcbn1cblxuaW9uLWlucHV0IHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzAwMDtcbiAgbGluZS1oZWlnaHQ6IDE1cHg7XG4gIGhlaWdodDogMzVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2YwZjBmYTtcbiAgcGFkZGluZy1sZWZ0OiAyJSAhaW1wb3J0YW50O1xufVxuXG4udHJhbnNwYXJlbnRCb2R5IHtcbiAgYmFja2dyb3VuZDogbm9uZSB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAtLWJhY2tncm91bmQ6IG5vbmUgdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cblxuLndlYnNjYW4tY2FudmFzIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAtLWJhY2tncm91bmQ6IG5vbmUgdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cblxuaW9uLWZvb3RlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDkwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDFDMzI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG5pb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLW0tYmFja2dyb3VuZCk7XG59XG5cbi5pbnB1dCB7XG4gIGZvbnQtZmFtaWx5OiBtYW5yb3BlLWxpZ2h0O1xufVxuXG4ubGVuZ3RoIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xuICBmb250LWZhbWlseTogbWFucm9wZS1saWdodDtcbiAgbWFyZ2luLWxlZnQ6IDI3cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuaW9uLXRleHRhcmVhIHtcbiAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmMGYwZmE7XG4gIHBhZGRpbmctbGVmdDogMiUgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtYXJnaW4tYm90dG9tOiAxJTtcbn1cblxuaW9uLWl0ZW0uZXJyb3Ige1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuaW9uLWl0ZW0uZXJyb3Igc3BhbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnkpO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbmlvbi1ub3RlLmVycm9yLW1lc3NhZ2UgaW9uLWljb24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG5pb24tbm90ZS5lcnJvci1tZXNzYWdlIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbmJ1dHRvbi5mb290ZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGZvbnQtZmFtaWx5OiBtYW5yb3BlLWJvbGQ7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogI2ZmZjtcbn1cblxuYnV0dG9uLmZvb3Rlcjpmb2N1cyB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG5pb24tYnV0dG9uLnNlbmQtZnVuZHMge1xuICBoZWlnaHQ6IDM1cHg7XG4gIHdpZHRoOiAxNjRweDtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBmb250LWZhbWlseTogbWFucm9wZS1ib2xkO1xuICBjb2xvcjogI2ZmZjtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tcmlnaHQ6IDI2cHg7XG4gIC0tYm9yZGVyLXJhZGl1czogMDtcbn1cblxuaW9uLWJ1dHRvbi5naW1tZTUwIHtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZjBmMGZhO1xuICBib3gtc2hhZG93OiAwcHggM3B4IDZweCAjQzhDOEQ0MUE7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNGMEYwRkE7XG4gIGJvcmRlci1yYWRpdXM6IDI4cHg7XG4gIG9wYWNpdHk6IDE7XG4gIHdpZHRoOiAxNTlweDtcbiAgaGVpZ2h0OiA0NXB4O1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtZmFtaWx5OiBtYW5yb3BlLWJvbGQ7XG59Il19 */"

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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _service_balance_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/balance.service */ "./src/app/service/balance.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/clipboard/ngx */ "./node_modules/@ionic-native/clipboard/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _service_minima_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../service/minima-api.service */ "./src/app/service/minima-api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var minima__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! minima */ "./node_modules/minima/dist/minima.js");
/* harmony import */ var minima__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(minima__WEBPACK_IMPORTED_MODULE_8__);









let SendFundsPage = class SendFundsPage {
    constructor(formBuilder, clipboard, alertController, api, balanceService, route, router) {
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
    ionViewWillEnter() {
        this.getTokenSelected();
    }
    ionViewWillLeave() {
    }
    ngOnInit() {
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
    }
    get tokenFormItem() {
        return this.sendForm.get('tokenid');
    }
    get addressFormItem() {
        return this.sendForm.get('address');
    }
    get amountFormItem() {
        return this.sendForm.get('amount');
    }
    get messageFormItem() {
        return this.sendForm.get('message');
    }
    pullInTokens() {
        this.balanceService.data.subscribe((balance) => {
            this.tokenArr = balance;
        });
    }
    sendFunds() {
        this.sendForm.value.amnt = this.sendForm.value.amount.toString();
        const data = this.sendForm.value;
        console.log(data);
        if (data.message !== null && (data.message || data.message.length > 0)) {
            this.submitBtn.disabled = true;
            this.api.sendMessageTransaction(data).then((res) => {
                if (minima__WEBPACK_IMPORTED_MODULE_8__["Minima"].util.checkAllResponses(res)) {
                    console.log(res);
                    setTimeout(() => {
                        this.submitBtn.disabled = false;
                    }, 500);
                    this.presentAlert('Transaction Status', 'Transaction has been posted to the network!', 'Successful');
                    this.sendForm.reset();
                }
                else {
                    setTimeout(() => {
                        this.submitBtn.disabled = false;
                    }, 500);
                    this.presentAlert('Transaction Status', res.message, 'Failed');
                }
            });
        }
        else {
            this.data.message = '';
            this.submitBtn.disabled = true;
            this.api.sendFunds(data).then((res) => {
                if (res.status) {
                    console.log(res);
                    setTimeout(() => {
                        this.submitBtn.disabled = false;
                    }, 500);
                    this.presentAlert('Transaction Status', 'Transaction has been posted to the network!', 'Successful');
                    this.sendForm.reset();
                }
                else {
                    setTimeout(() => {
                        this.submitBtn.disabled = false;
                    }, 500);
                    this.presentAlert('Transaction Status', res.message, 'Failed');
                }
            });
        }
    }
    // get token selected or set Minima as default
    getTokenSelected() {
        this.route.queryParamMap.subscribe((res) => {
            this.itemSelected = res.params.id;
            if (!res.params.id) {
                this.itemSelected = '0x00';
            }
        });
    }
    giveMe50() {
        this.api.giveMe50().then((res) => {
            if (res.status === true) {
                this.presentAlert('Gimme50', 'Successful', 'Status');
            }
            else {
                this.presentAlert('Gimme50', res.message, 'Status');
            }
        });
    }
    // listen to selection change
    onItemSelection(ev) {
        this.itemSelected = this.sendForm.get('tokenid').value;
    }
    fillAmount(type) {
        const param = this.sendForm.get('tokenid').value;
        this.amountInp.value = '';
        this.tokenArr.forEach(element => {
            if (param === element.tokenid || (param === element.tokenid && element.script !== this.nftScript)) {
                const maxAmmo = element.sendable;
                if (type === 'max') {
                    this.amountInp.value = maxAmmo;
                }
                else if (type === 'half') {
                    this.amountInp.value = (parseFloat(maxAmmo) / 2.0).toString();
                }
                else if (type === 'quarter') {
                    this.amountInp.value = (parseFloat(maxAmmo) / 4.0).toString();
                }
            }
            else if (element.script === this.nftScript) {
                const maxAmmo = element.sendable;
                if (type === 'max') {
                    this.amountInp.value = maxAmmo;
                }
                else if (type === 'half') {
                    this.amountInp.value = Math.floor((parseFloat(maxAmmo) / 2.0)).toString();
                }
                else if (type === 'quarter') {
                    this.amountInp.value = Math.floor((parseFloat(maxAmmo) / 4.0)).toString();
                }
            }
        });
    }
    scanQR() {
        this.isWebCameraOpen = true;
        console.log("Camera is now on: " + this.isWebCameraOpen);
        const stream = navigator.mediaDevices.getUserMedia({
            video: { facingMode: 'environment' }
        });
        this.videoElem.nativeElement.src = stream;
        this.videoElem.nativeElement.setAttribute('playsinline', true); // iOS - do not open fullscreen
        this.videoElem.nativeElement.play();
    }
    stopScanning() {
        this.isWebCameraOpen = false;
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
    useMessage() {
        if (this.messageToggle) {
            this.messageToggle = false;
        }
        else {
            this.messageToggle = true;
        }
    }
};
SendFundsPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] },
    { type: _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_4__["Clipboard"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _service_minima_api_service__WEBPACK_IMPORTED_MODULE_6__["MinimaApiService"] },
    { type: _service_balance_service__WEBPACK_IMPORTED_MODULE_2__["BalanceService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }
];
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



/***/ })

}]);
//# sourceMappingURL=pages-send-funds-send-funds-module-es2015.js.map