(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-send-funds-send-funds-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/send-funds/send-funds.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/send-funds/send-funds.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-app>\n<ion-header class=\"page-header ion-no-border\">\n  <ion-toolbar>\n    <ion-title>\n      <ion-item id=\"title\" lines=\"none\" class=\"ion-no-padding\">\n        <ion-icon class=\"menu-btn\" (click)=\"openMenu()\" src=\"assets/menuIcon.svg\"></ion-icon>\n        Send\n      </ion-item>\n      <ion-item id=\"subtitle\" class=\"breadcrumb ion-no-padding\" lines=\"none\" *ngIf=\"tokenArr.length > 0\">\n        Enter transaction details\n      </ion-item>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n\n<ion-content #pageContent class=\"page-content\" *ngIf=\"!isWebCameraOpen\">\n\n  <ion-grid *ngIf=\"tokenArr.length == 0\">\n    <ion-row>\n      <ion-col style=\"display: flex; align-items:center; justify-content:center\" size=\"12\">\n        <ion-label>Fetching tokens...</ion-label>\n      </ion-col>\n      <ion-col style=\"display: flex; align-items:center; justify-content:center\" size=\"12\">\n        <ion-spinner name=\"crescent\"></ion-spinner>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-card class=\"webscan-canvas\" *ngIf=\"isWebCameraOpen\">\n    <ion-card-header class=\"medium-text\">\n    Scan Your Minima QR address now...\n    <ion-progress-bar type=\"indeterminate\" reversed=\"true\"></ion-progress-bar>\n    </ion-card-header>\n    <video height=\"240\" #videoElem></video>\n    <hr>\n    <ion-button block=\"full\" (click)=\"scanQR()\">Stop Scanning</ion-button>\n    <hr>\n  </ion-card>\n\n\n  <form *ngIf=\"!isWebCameraOpen && tokenArr.length > 0\" [formGroup]=\"sendForm\" id=\"sendForm\" (ngSubmit)=\"sendFunds()\">\n    <ion-list class=\"ion-no-padding\">\n      <ion-item class=\"no-hover no-ripple ion-no-padding\" lines=\"none\">\n        <ion-label position=\"floating\">Token</ion-label>\n        <ion-select\n          placeholder=\"Select A Token\"\n          formControlName=\"tokenid\"    \n          interface = 'ion-action-sheet'\n          [(ngModel)]='itemSelected'\n          class=\"no-hover no-ripple input\"\n          (ionChange)=\"onItemSelection($event)\"> \n        <ion-select-option *ngFor=\"let token of tokenArr;\" [value]=\"token.tokenid\" class=\"token-option\">\n          {{ token.token + \"&mdash;\"+ token.tokenid }}\n        </ion-select-option>\n      </ion-select>\n      </ion-item>\n      <ion-item class=\"no-hover no-ripple ion-no-padding\"  lines=\"none\">\n        <ion-label class=\"medium-text\" position=\"stacked\">Address</ion-label>\n        <!-- <span (click)=\"scanQR()\" id=\"qrIcon\"> <ion-icon alt=\"qrCode\" src=\"assets/scan-outline.svg\"></ion-icon></span> -->\n        <div class=\"has\">\n          <ion-input #address class=\"medium-text input\" formControlName=\"address\" clearInput=\"true\" placeholder=\"Enter a valid address\"></ion-input>\n          <button type=\"button\" (click)=\"presentContactModal()\" class=\"clear\"><ion-icon style=\"font-size: 16px; color: var(--ion-color-primary)\" name=\"person-add-outline\"></ion-icon></button>\n        </div>\n      </ion-item>\n      <ion-note *ngIf=\"addressFormItem.invalid && addressFormItem.touched\" class=\"error-message\">\n        <ion-icon name=\"alert-circle\"></ion-icon> <span> Invalid address format!</span> \n        <span style=\"margin-left: 2px\"> An address must begin with 0x or Mx.</span> \n      </ion-note>\n      <ion-item class=\"no-hover no-ripple ion-no-padding\"  lines=\"none\">\n        <ion-label class=\"medium-text\" position=\"stacked\">Amount</ion-label>\n        <ion-input #amount type=\"number\" formControlName=\"amount\" class=\"input\" placeholder=\"Enter token amount\"></ion-input>\n      </ion-item>\n      <ion-note *ngIf=\"amountFormItem.invalid && amountFormItem.touched\" class=\"error-message\">\n        <ion-icon name=\"alert-circle\"></ion-icon> <span> Amount required!</span>\n        <span style=\"margin-left: 2px\"> Amount has to be numeric and greater than 0.</span> \n      </ion-note>\n\n      <ion-item class=\"no-hover no-ripple ion-no-padding\" lines=\"none\">\n        <ion-label position=\"stacked\" style=\"margin-bottom: 1%;\">Message <span style=\"font-family: manrope-light; color:var(--ion-color-optional); margin-right: 7px\">(optional) </span></ion-label>\n        <ion-textarea \n            [(ngModel)]=\"data.message\"\n            formControlName=\"message\"\n            class=\"medium-text input\"\n            auto-grow=\"false\"\n            #message \n            placeholder=\"This message will be public\"\n            maxlength=\"255\">\n            </ion-textarea>\n      </ion-item>\n      <ion-label style=\"margin-left: 0;\" *ngIf=\"data.message\" class=\"length\">{{ data.message.length +\"/255\" }}</ion-label>\n    </ion-list>\n\n    <ion-item lines=\"none\" class=\"send-wrapper ion-no-padding\">\n      <div style=\"display: flex; flex-direction:column; justify-content:right; align-items:flex-end\">\n        <ion-button #submitBtn type=\"submit\" slot=\"end\" [disabled]=\"sendForm.invalid\" class=\"send-funds\" fill=\"clear\">  \n          Send Funds\n       </ion-button>\n       <ion-note *ngIf=\"status.length > 0\">{{ status }}</ion-note>\n      </div>\n      \n    </ion-item>\n  </form>\n\n</ion-content>\n<ion-footer class=\"border-t\">\n  <ion-button (click)=\"giveMe50()\" class=\"gimme50 no-ripple\" fill=\"none\">\n    Gimme 50\n  </ion-button>\n</ion-footer>\n</ion-app>\n\n"

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

module.exports = "ion-card-content {\n  background: var(--ion-card-color);\n}\n\nion-card-header {\n  --color: var(--ion-text-color,#000);\n}\n\nion-item {\n  --inner-padding-end: 0;\n}\n\nion-item ion-label {\n  white-space: normal;\n  margin-bottom: 2%;\n  font-size: 20px;\n  font-family: manrope-bold;\n  color: var(--ion-color-color);\n}\n\nion-item.wordCountWrapper {\n  padding: 0;\n  margin: 0;\n}\n\nion-select {\n  outline: none !important;\n  border: 1px solid #f0f0fa;\n  font-family: manrope-regular;\n  background-color: var(--ion-color-inputs);\n  outline: 1px solid #91919D;\n  font-size: 12px;\n  padding-left: 2% !important;\n  --placeholder-opacity: 0.7;\n  color: #808080;\n}\n\nion-select:hover {\n  background: var(--ion-color-inputs) !important;\n  background-color: var(--ion-color-inputs) !important;\n  --background-hover: none !important;\n}\n\nion-select::part(icon) {\n  top: 50%;\n  color: var(--ion-color-primary);\n  opacity: 1;\n}\n\nion-select-option {\n  font-family: manrope-bold;\n}\n\nion-input {\n  font-size: 12px;\n  color: #000;\n  background-color: var(--ion-color-inputs);\n  border: 1px solid #f0f0fa;\n  padding-left: 2% !important;\n}\n\n.transparentBody {\n  background: none transparent !important;\n  --background: none transparent !important;\n}\n\n.webscan-canvas {\n  text-align: center;\n  --background: none transparent !important;\n}\n\nion-footer {\n  width: 100%;\n  height: 90px;\n  background-color: #001C32;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\nion-toolbar {\n  --background: var(--ion-m-background);\n}\n\n.input {\n  font-family: manrope-light;\n}\n\n.length {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: baseline;\n          align-items: baseline;\n  font-family: manrope-light;\n  margin-left: 27px;\n  font-size: 12px;\n}\n\nion-textarea {\n  color: black !important;\n  background: var(--ion-color-inputs);\n  border: 1px solid #f0f0fa;\n  padding-left: 2% !important;\n  font-size: 12px;\n  margin-bottom: 1%;\n}\n\nion-item.send-wrapper {\n  display: -webkit-box;\n  display: flex;\n  float: right;\n  -webkit-box-pack: right;\n          justify-content: right;\n  -webkit-box-align: end;\n          align-items: flex-end;\n}\n\nbutton.footer {\n  width: 100%;\n  height: 100%;\n  font-size: 16px;\n  text-align: center;\n  text-transform: none;\n  font-family: manrope-bold;\n  background: transparent;\n  color: #fff;\n}\n\nbutton.footer:focus {\n  background: transparent;\n  --background: transparent;\n}\n\nion-button.send-funds {\n  height: 35px;\n  width: 164px;\n  --background: var(--ion-color-primary);\n  text-transform: none;\n  font-family: manrope-bold;\n  color: #fff;\n  float: right;\n  --border-radius: 0;\n}\n\nion-button.send-funds:hover {\n  --background: #346EE5;\n}\n\ndiv.has {\n  display: -webkit-box;\n  display: flex;\n  width: 100%;\n}\n\ndiv.has button {\n  background-color: transparent;\n  border: 1px solid #F0F0FA;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGlhc25lbXIvcHJvamVjdHMvV2FsbGV0L21vYmlsZS1hcHAtZnJvbnQtZW5kL2FwcC9zcmMvYXBwL3BhZ2VzL3NlbmQtZnVuZHMvc2VuZC1mdW5kcy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3NlbmQtZnVuZHMvc2VuZC1mdW5kcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQ0FBQTtBQ0NGOztBRENBO0VBQ0UsbUNBQUE7QUNFRjs7QURBQTtFQUNFLHNCQUFBO0FDR0Y7O0FEREE7RUFDRSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsNkJBQUE7QUNJRjs7QURGQTtFQUNFLFVBQUE7RUFDQSxTQUFBO0FDS0Y7O0FESEE7RUFDRSx3QkFBQTtFQUNBLHlCQUFBO0VBQ0EsNEJBQUE7RUFDQSx5Q0FBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtFQUNBLDJCQUFBO0VBQ0EsMEJBQUE7RUFDQSxjQUFBO0FDTUY7O0FESkE7RUFDRSw4Q0FBQTtFQUNBLG9EQUFBO0VBQ0EsbUNBQUE7QUNPRjs7QURMQTtFQUNFLFFBQUE7RUFDQSwrQkFBQTtFQUNBLFVBQUE7QUNRRjs7QUROQTtFQUNFLHlCQUFBO0FDU0Y7O0FEUEE7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLHlDQUFBO0VBQ0EseUJBQUE7RUFDQSwyQkFBQTtBQ1VGOztBRFJBO0VBQ0MsdUNBQUE7RUFDQSx5Q0FBQTtBQ1dEOztBRFRBO0VBQ0Msa0JBQUE7RUFDQyx5Q0FBQTtBQ1lGOztBRFZBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0FDYUY7O0FEVkE7RUFDRSxxQ0FBQTtBQ2FGOztBRFhBO0VBQ0UsMEJBQUE7QUNjRjs7QURaQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDJCQUFBO1VBQUEscUJBQUE7RUFDQSwwQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ2VGOztBRGJBO0VBQ0UsdUJBQUE7RUFDQSxtQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsMkJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNnQkY7O0FEZEE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7VUFBQSxzQkFBQTtFQUNBLHNCQUFBO1VBQUEscUJBQUE7QUNpQkY7O0FEZkE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EseUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7QUNrQkY7O0FEaEJBO0VBQ0UsdUJBQUE7RUFDQSx5QkFBQTtBQ21CRjs7QURqQkE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHNDQUFBO0VBQ0Esb0JBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNvQkY7O0FEbEJBO0VBQ0UscUJBQUE7QUNxQkY7O0FEbkJBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsV0FBQTtBQ3NCRjs7QURyQkU7RUFDRSw2QkFBQTtFQUNBLHlCQUFBO0FDdUJKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2VuZC1mdW5kcy9zZW5kLWZ1bmRzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJkLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY2FyZC1jb2xvcik7XG59XG5pb24tY2FyZC1oZWFkZXIge1xuICAtLWNvbG9yOiB2YXIoLS1pb24tdGV4dC1jb2xvciwjMDAwKTtcbn1cbmlvbi1pdGVtIHtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMDtcbn1cbmlvbi1pdGVtIGlvbi1sYWJlbCB7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gIG1hcmdpbi1ib3R0b206IDIlO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBtYW5yb3BlLWJvbGQ7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItY29sb3IpO1xufVxuaW9uLWl0ZW0ud29yZENvdW50V3JhcHBlciB7XG4gIHBhZGRpbmc6MDtcbiAgbWFyZ2luOjA7XG59XG5pb24tc2VsZWN0IHtcbiAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZjBmMGZhO1xuICBmb250LWZhbWlseTogbWFucm9wZS1yZWd1bGFyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItaW5wdXRzKTtcbiAgb3V0bGluZTogMXB4IHNvbGlkICM5MTkxOUQ7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgcGFkZGluZy1sZWZ0OiAyJSFpbXBvcnRhbnQ7XG4gIC0tcGxhY2Vob2xkZXItb3BhY2l0eTogMC43O1xuICBjb2xvcjogIzgwODA4MDtcbn1cbmlvbi1zZWxlY3Q6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItaW5wdXRzKSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItaW5wdXRzKSAhaW1wb3J0YW50O1xuICAtLWJhY2tncm91bmQtaG92ZXI6IG5vbmUgIWltcG9ydGFudDtcbn1cbmlvbi1zZWxlY3Q6OnBhcnQoaWNvbikge1xuICB0b3A6IDUwJTtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgb3BhY2l0eTogMTtcbn1cbmlvbi1zZWxlY3Qtb3B0aW9uIHtcbiAgZm9udC1mYW1pbHk6IG1hbnJvcGUtYm9sZDtcbn1cbmlvbi1pbnB1dCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICMwMDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1pbnB1dHMpO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZjBmMGZhO1xuICBwYWRkaW5nLWxlZnQ6IDIlICFpbXBvcnRhbnQ7XG59XG4udHJhbnNwYXJlbnRCb2R5IHtcblx0YmFja2dyb3VuZDogbm9uZSB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuXHQtLWJhY2tncm91bmQ6IG5vbmUgdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cbi53ZWJzY2FuLWNhbnZhcyB7XG4gdGV4dC1hbGlnbjogY2VudGVyO1xuIFx0LS1iYWNrZ3JvdW5kOiBub25lIHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5pb24tZm9vdGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogOTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMUMzMjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tbS1iYWNrZ3JvdW5kKTtcbn1cbi5pbnB1dCB7XG4gIGZvbnQtZmFtaWx5OiBtYW5yb3BlLWxpZ2h0O1xufVxuLmxlbmd0aCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbiAgZm9udC1mYW1pbHk6IG1hbnJvcGUtbGlnaHQ7XG4gIG1hcmdpbi1sZWZ0OiAyN3B4O1xuICBmb250LXNpemU6IDEycHg7XG59XG5pb24tdGV4dGFyZWEge1xuICBjb2xvcjogYmxhY2shaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItaW5wdXRzKTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2YwZjBmYTtcbiAgcGFkZGluZy1sZWZ0OiAyJSFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbWFyZ2luLWJvdHRvbTogMSU7XG59XG5pb24taXRlbS5zZW5kLXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbG9hdDogcmlnaHQ7XG4gIGp1c3RpZnktY29udGVudDogcmlnaHQ7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbn1cbmJ1dHRvbi5mb290ZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGZvbnQtZmFtaWx5OiBtYW5yb3BlLWJvbGQ7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogI2ZmZjtcbn1cbmJ1dHRvbi5mb290ZXI6Zm9jdXMge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbmlvbi1idXR0b24uc2VuZC1mdW5kcyB7XG4gIGhlaWdodDogMzVweDtcbiAgd2lkdGg6IDE2NHB4O1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGZvbnQtZmFtaWx5OiBtYW5yb3BlLWJvbGQ7XG4gIGNvbG9yOiAjZmZmO1xuICBmbG9hdDogcmlnaHQ7IFxuICAtLWJvcmRlci1yYWRpdXM6IDA7XG59XG5pb24tYnV0dG9uLnNlbmQtZnVuZHM6aG92ZXIge1xuICAtLWJhY2tncm91bmQ6ICMzNDZFRTU7XG59XG5kaXYuaGFzIHtcbiAgZGlzcGxheTogZmxleDsgXG4gIHdpZHRoOiAxMDAlO1xuICBidXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNGMEYwRkE7XG4gIH1cbn0iLCJpb24tY2FyZC1jb250ZW50IHtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNhcmQtY29sb3IpO1xufVxuXG5pb24tY2FyZC1oZWFkZXIge1xuICAtLWNvbG9yOiB2YXIoLS1pb24tdGV4dC1jb2xvciwjMDAwKTtcbn1cblxuaW9uLWl0ZW0ge1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xufVxuXG5pb24taXRlbSBpb24tbGFiZWwge1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICBtYXJnaW4tYm90dG9tOiAyJTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LWZhbWlseTogbWFucm9wZS1ib2xkO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWNvbG9yKTtcbn1cblxuaW9uLWl0ZW0ud29yZENvdW50V3JhcHBlciB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbn1cblxuaW9uLXNlbGVjdCB7XG4gIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2YwZjBmYTtcbiAgZm9udC1mYW1pbHk6IG1hbnJvcGUtcmVndWxhcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWlucHV0cyk7XG4gIG91dGxpbmU6IDFweCBzb2xpZCAjOTE5MTlEO1xuICBmb250LXNpemU6IDEycHg7XG4gIHBhZGRpbmctbGVmdDogMiUgIWltcG9ydGFudDtcbiAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAwLjc7XG4gIGNvbG9yOiAjODA4MDgwO1xufVxuXG5pb24tc2VsZWN0OmhvdmVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWlucHV0cykgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWlucHV0cykgIWltcG9ydGFudDtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1zZWxlY3Q6OnBhcnQoaWNvbikge1xuICB0b3A6IDUwJTtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgb3BhY2l0eTogMTtcbn1cblxuaW9uLXNlbGVjdC1vcHRpb24ge1xuICBmb250LWZhbWlseTogbWFucm9wZS1ib2xkO1xufVxuXG5pb24taW5wdXQge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjMDAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItaW5wdXRzKTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2YwZjBmYTtcbiAgcGFkZGluZy1sZWZ0OiAyJSAhaW1wb3J0YW50O1xufVxuXG4udHJhbnNwYXJlbnRCb2R5IHtcbiAgYmFja2dyb3VuZDogbm9uZSB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAtLWJhY2tncm91bmQ6IG5vbmUgdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cblxuLndlYnNjYW4tY2FudmFzIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAtLWJhY2tncm91bmQ6IG5vbmUgdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cblxuaW9uLWZvb3RlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDkwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDFDMzI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG5pb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLW0tYmFja2dyb3VuZCk7XG59XG5cbi5pbnB1dCB7XG4gIGZvbnQtZmFtaWx5OiBtYW5yb3BlLWxpZ2h0O1xufVxuXG4ubGVuZ3RoIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xuICBmb250LWZhbWlseTogbWFucm9wZS1saWdodDtcbiAgbWFyZ2luLWxlZnQ6IDI3cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuaW9uLXRleHRhcmVhIHtcbiAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1pbnB1dHMpO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZjBmMGZhO1xuICBwYWRkaW5nLWxlZnQ6IDIlICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbWFyZ2luLWJvdHRvbTogMSU7XG59XG5cbmlvbi1pdGVtLnNlbmQtd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsb2F0OiByaWdodDtcbiAganVzdGlmeS1jb250ZW50OiByaWdodDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xufVxuXG5idXR0b24uZm9vdGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBmb250LWZhbWlseTogbWFucm9wZS1ib2xkO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICNmZmY7XG59XG5cbmJ1dHRvbi5mb290ZXI6Zm9jdXMge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuaW9uLWJ1dHRvbi5zZW5kLWZ1bmRzIHtcbiAgaGVpZ2h0OiAzNXB4O1xuICB3aWR0aDogMTY0cHg7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgZm9udC1mYW1pbHk6IG1hbnJvcGUtYm9sZDtcbiAgY29sb3I6ICNmZmY7XG4gIGZsb2F0OiByaWdodDtcbiAgLS1ib3JkZXItcmFkaXVzOiAwO1xufVxuXG5pb24tYnV0dG9uLnNlbmQtZnVuZHM6aG92ZXIge1xuICAtLWJhY2tncm91bmQ6ICMzNDZFRTU7XG59XG5cbmRpdi5oYXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbn1cbmRpdi5oYXMgYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNGMEYwRkE7XG59Il19 */"

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
/* harmony import */ var _service_tools_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../service/tools.service */ "./src/app/service/tools.service.ts");
/* harmony import */ var src_app_service_contacts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/contacts.service */ "./src/app/service/contacts.service.ts");
/* harmony import */ var _components_contacts_view_modal_contacts_view_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../components/contacts-view-modal/contacts-view-modal.component */ "./src/app/components/contacts-view-modal/contacts-view-modal.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _service_balance_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/balance.service */ "./src/app/service/balance.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _service_minima_api_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../service/minima-api.service */ "./src/app/service/minima-api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");










let SendFundsPage = class SendFundsPage {
    constructor(menu, modalController, myTools, formBuilder, api, balanceService, _contactService, route) {
        this.menu = menu;
        this.modalController = modalController;
        this.myTools = myTools;
        this.formBuilder = formBuilder;
        this.api = api;
        this.balanceService = balanceService;
        this._contactService = _contactService;
        this.route = route;
        this.nftScript = 'ASSERT FLOOR ( @AMOUNT ) EQ @AMOUNT LET checkout = 0 WHILE ( checkout LT @TOTOUT )' +
            'DO IF GETOUTTOK ( checkout ) EQ @TOKENID THEN LET outamt = GETOUTAMT ( checkout ) ASSERT FLOOR ( outamt )' +
            'EQ outamt ENDIF LET checkout = INC ( checkout ) ENDWHILE RETURN TRUE';
        this.status = '';
        this.isWebCameraOpen = false;
        this.data = { tokenid: '', amount: '', address: '', message: '' };
        this.messageToggle = false;
        this.tokenArr = [];
        this.pullInTokens();
    }
    ionViewWillEnter() {
        this._contactService.$selected_address.subscribe((res) => {
            if (res.address.length === 0) {
            }
            else {
                this.addressFormItem.setValue(res.address);
                this._contactService.$selected_address.next({ address: '' });
            }
        });
        this.getTokenSelected();
    }
    ionViewWillLeave() {
    }
    ngOnInit() {
        this.formInit();
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
    openMenu() {
        this.menu.open();
    }
    pullInTokens() {
        this.balanceService.data.subscribe((balance) => {
            this.tokenArr = balance;
        });
    }
    presentContactModal() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let contactModal = yield this.modalController.create({
                component: _components_contacts_view_modal_contacts_view_modal_component__WEBPACK_IMPORTED_MODULE_3__["ContactsViewModalComponent"],
                cssClass: 'contacts-view'
            });
            contactModal.present();
        });
    }
    sendFunds() {
        this.status = 'Creating your transaction...';
        this.myTools.scrollToBottom(this.pageContent);
        this.sendForm.value.amnt = this.sendForm.value.amount.toString();
        const data = this.sendForm.value;
        //console.log(data);
        try {
            this.post(data);
        }
        catch (err) {
            console.log(err);
        }
        finally {
            setTimeout(() => {
                this.status = '';
                this.submitBtn.disabled = false;
            }, 6000);
        }
    }
    post(data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.submitBtn.disabled = true;
            this.status = 'Posting your transaction...';
            if (data.message !== null && (data.message || data.message.length > 0)) {
                const res = yield this.api.sendMessageTransaction(data);
                console.log(res);
                if (res.status) {
                    setTimeout(() => {
                        this.submitBtn.disabled = false;
                    }, 500);
                    this.status = 'Transaction posted!';
                    this.myTools.presentAlert('Transaction Status', 'Transaction has been posted to the network!', 'Successful');
                    this.resetForm();
                }
                else {
                    setTimeout(() => {
                        this.submitBtn.disabled = false;
                    }, 500);
                    this.status = 'Transaction failed!';
                    this.myTools.presentAlert('Transaction Status', res.message, 'Failed');
                }
            }
            else {
                const res = yield this.api.sendFunds(data);
                console.log(res);
                if (res.status) {
                    //console.log(res);
                    setTimeout(() => {
                        this.submitBtn.disabled = false;
                    }, 500);
                    this.status = 'Transaction posted!';
                    this.myTools.presentAlert('Transaction Status', 'Transaction has been posted to the network!', 'Successful');
                    this.resetForm();
                }
                else {
                    setTimeout(() => {
                        this.submitBtn.disabled = false;
                    }, 500);
                    this.status = 'Transaction failed!';
                    this.myTools.presentAlert('Transaction Status', res.message, 'Failed');
                }
            }
        });
    }
    resetForm() {
        this.sendForm.reset();
        this.formInit();
    }
    formInit() {
        this.sendForm = this.formBuilder.group({
            tokenid: '',
            address: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(2),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(60),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('[Mx|0x][a-zA-Z0-9]+')
                ]],
            amount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            message: ''
        });
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
                this.myTools.presentAlert('Gimme50', 'Successful', 'Status');
            }
            else {
                this.myTools.presentAlert('Gimme50', res.message, 'Status');
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
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["MenuController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"] },
    { type: _service_tools_service__WEBPACK_IMPORTED_MODULE_1__["ToolsService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _service_minima_api_service__WEBPACK_IMPORTED_MODULE_8__["MinimaApiService"] },
    { type: _service_balance_service__WEBPACK_IMPORTED_MODULE_5__["BalanceService"] },
    { type: src_app_service_contacts_service__WEBPACK_IMPORTED_MODULE_2__["ContactService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewChild"])('submitBtn', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonButton"])
], SendFundsPage.prototype, "submitBtn", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewChild"])('amount', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonInput"])
], SendFundsPage.prototype, "amountInp", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewChild"])('videoElem', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ElementRef"])
], SendFundsPage.prototype, "videoElem", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewChild"])('pageContent', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonContent"])
], SendFundsPage.prototype, "pageContent", void 0);
SendFundsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
        selector: 'app-send-funds',
        template: __webpack_require__(/*! raw-loader!./send-funds.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/send-funds/send-funds.page.html"),
        styles: [__webpack_require__(/*! ./send-funds.page.scss */ "./src/app/pages/send-funds/send-funds.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_7__["MenuController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"],
        _service_tools_service__WEBPACK_IMPORTED_MODULE_1__["ToolsService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        _service_minima_api_service__WEBPACK_IMPORTED_MODULE_8__["MinimaApiService"],
        _service_balance_service__WEBPACK_IMPORTED_MODULE_5__["BalanceService"],
        src_app_service_contacts_service__WEBPACK_IMPORTED_MODULE_2__["ContactService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"]])
], SendFundsPage);



/***/ }),

/***/ "./src/app/service/minima-api.service.ts":
/*!***********************************************!*\
  !*** ./src/app/service/minima-api.service.ts ***!
  \***********************************************/
/*! exports provided: MinimaApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MinimaApiService", function() { return MinimaApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var minima__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! minima */ "./node_modules/minima/dist/minima.js");
/* harmony import */ var minima__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(minima__WEBPACK_IMPORTED_MODULE_3__);




let MinimaApiService = class MinimaApiService {
    constructor(loadingController) {
        this.loadingController = loadingController;
    }
    createToken(data) {
        if (data.script !== "") {
            if (data.nft === true) {
                return this.req("tokencreate name:\"" + data.name + "\" amount:\"" + data.amount + '.' + 0 + "\" description:\"" + data.description + "\" script:\"" + data.script + "\" icon:\"" + data.icon + "\" proof:\"" + data.proof + "\"");
            }
            else {
                return this.req("tokencreate name:\"" + data.name + "\" amount:\"" + data.amount + "\" description:\"" + data.description + "\" script:\"" + data.script + "\" icon:\"" + data.icon + "\" proof:\"" + data.proof + "\"");
            }
        }
        else {
            if (data.nft === true) {
                return this.req("tokencreate name:\"" + data.name + "\" amount:\"" + data.amount + '.' + 0 + "\" description:\"" + data.description + "\" icon:\"" + data.icon + "\" proof:\"" + data.proof + "\"");
            }
            else {
                return this.req("tokencreate name:\"" + data.name + "\" amount:\"" + data.amount + "\" description:\"" + data.description + "\" icon:\"" + data.icon + "\" proof:\"" + data.proof + "\"");
            }
        }
    }
    validateTokenID(tokenid) {
        return this.req("tokenvalidate " + tokenid);
    }
    sendMessageTransaction(data) {
        const postTransaction = "send " + data.amount + " " + data.address + " " + data.tokenid + " " + " 254:[01000100]#255:[\"" + data.message + "\"]";
        return this.req(postTransaction);
    }
    webLink(data) {
        return this.req('weblink+' + data.url);
    }
    setHost(newHost) {
        localStorage.setItem('minima_host', newHost);
    }
    newAddress() {
        return this.req('newaddress');
    }
    sendFunds(data) {
        return this.req('send ' + data.amount + ' ' + data.address + ' ' + data.tokenid);
    }
    giveMe50() {
        return this.req('gimme50');
    }
    getBalance() {
        return this.req('balance');
    }
    getHistory() {
        return this.req('history');
    }
    clearMyHistory() {
        return this.req('history clear');
    }
    getStatus() {
        return this.req('status');
    }
    req(fnc) {
        const promise = new Promise((resolve) => {
            minima__WEBPACK_IMPORTED_MODULE_3__["Minima"].cmd(fnc, (resp) => {
                //console.log(resp);
                resolve(resp);
            });
        });
        return promise;
    }
};
MinimaApiService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] }
];
MinimaApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]])
], MinimaApiService);



/***/ })

}]);
//# sourceMappingURL=pages-send-funds-send-funds-module-es2015.js.map