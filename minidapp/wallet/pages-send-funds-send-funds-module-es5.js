(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-send-funds-send-funds-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/send-funds/send-funds.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/send-funds/send-funds.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-app>\n<ion-header class=\"page-header ion-no-border\">\n  <ion-toolbar>\n    <ion-title>\n      <ion-item id=\"title\" lines=\"none\" class=\"ion-no-padding\">\n        <ion-icon class=\"menu-btn\" (click)=\"openMenu()\" src=\"assets/menuIcon.svg\"></ion-icon>\n        Send\n      </ion-item>\n      <ion-item id=\"subtitle\" class=\"breadcrumb ion-no-padding\" lines=\"none\" *ngIf=\"tokenArr.length > 0\">\n        Enter transaction details\n      </ion-item>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n\n<ion-content class=\"page-content\" *ngIf=\"!isWebCameraOpen\">\n\n  <ion-grid *ngIf=\"tokenArr.length == 0\">\n    <ion-row>\n      <ion-col style=\"display: flex; align-items:center; justify-content:center\" size=\"12\">\n        <ion-label>Fetching tokens...</ion-label>\n      </ion-col>\n      <ion-col style=\"display: flex; align-items:center; justify-content:center\" size=\"12\">\n        <ion-spinner name=\"crescent\"></ion-spinner>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-card class=\"webscan-canvas\" *ngIf=\"isWebCameraOpen\">\n    <ion-card-header class=\"medium-text\">\n    Scan Your Minima QR address now...\n    <ion-progress-bar type=\"indeterminate\" reversed=\"true\"></ion-progress-bar>\n    </ion-card-header>\n    <video height=\"240\" #videoElem></video>\n    <hr>\n    <ion-button block=\"full\" (click)=\"scanQR()\">Stop Scanning</ion-button>\n    <hr>\n  </ion-card>\n\n\n  <form *ngIf=\"!isWebCameraOpen && tokenArr.length > 0\" [formGroup]=\"sendForm\" id=\"sendForm\" (ngSubmit)=\"sendFunds()\">\n    <ion-list class=\"ion-no-padding\">\n      <ion-item class=\"no-hover no-ripple ion-no-padding\" lines=\"none\">\n        <ion-label position=\"floating\">Token</ion-label>\n        <ion-select\n          placeholder=\"Select A Token\"\n          formControlName=\"tokenid\"    \n          interface = 'ion-action-sheet'\n          [(ngModel)]='itemSelected'\n          class=\"no-hover no-ripple input\"\n          (ionChange)=\"onItemSelection($event)\"> \n        <ion-select-option *ngFor=\"let token of tokenArr;\" [value]=\"token.tokenid\" class=\"token-option\">\n          {{ token.token + \"&mdash;\"+ token.tokenid }}\n        </ion-select-option>\n      </ion-select>\n      </ion-item>\n      <ion-item class=\"no-hover no-ripple ion-no-padding\"  lines=\"none\">\n        <ion-label class=\"medium-text\" position=\"stacked\">Address</ion-label>\n        <!-- <span (click)=\"scanQR()\" id=\"qrIcon\"> <ion-icon alt=\"qrCode\" src=\"assets/scan-outline.svg\"></ion-icon></span> -->\n        <ion-input #address class=\"medium-text input\" formControlName=\"address\" clearInput=\"true\" placeholder=\"Enter a valid address\"></ion-input>\n      </ion-item>\n      <ion-item class=\"error ion-no-padding\"  lines=\"none\" *ngIf=\"addressFormItem.invalid && addressFormItem.touched\">\n        <ion-note class=\"error-message\">\n          <ion-icon name=\"alert-circle\"></ion-icon> <span> Invalid address format!</span> \n          <span style=\"margin-left: 2px\"> An address must begin with 0x or Mx.</span> \n        </ion-note>\n      </ion-item>\n      <ion-item class=\"no-hover no-ripple ion-no-padding\"  lines=\"none\">\n        <ion-label class=\"medium-text\" position=\"stacked\">Amount</ion-label>\n        <ion-input #amount type=\"number\" formControlName=\"amount\" class=\"input\" placeholder=\"Enter token amount\"></ion-input>\n      </ion-item>\n      <ion-item class=\"error ion-no-padding\" lines=\"none\" *ngIf=\"amountFormItem.invalid && amountFormItem.touched\">\n        <ion-note class=\"error-message\">\n          <ion-icon name=\"alert-circle\"></ion-icon> <span> Amount required!</span>\n          <span style=\"margin-left: 2px\"> Amount has to be numeric and greater than 0.</span> \n        </ion-note>\n      </ion-item>\n\n      <ion-item class=\"no-hover no-ripple ion-no-padding\" lines=\"none\">\n        <ion-label position=\"stacked\" style=\"margin-bottom: 1%;\">Message <span style=\"font-family: manrope-light; color:var(--ion-color-optional); margin-right: 7px\">(optional) </span></ion-label>\n        <ion-textarea \n            [(ngModel)]=\"data.message\"\n            formControlName=\"message\"\n            class=\"medium-text input\"\n            auto-grow=\"false\"\n            #message \n            placeholder=\"This message will be public\"\n            maxlength=\"255\">\n            </ion-textarea>\n      </ion-item>\n      <ion-label *ngIf=\"data.message\" class=\"length\">{{ data.message.length +\"/255\" }}</ion-label>\n    </ion-list>\n\n    <ion-item lines=\"none\" class=\"ion-no-padding\"> \n      <ion-button #submitBtn type=\"submit\" slot=\"end\" [disabled]=\"sendForm.invalid\" class=\"send-funds\" fill=\"clear\">  \n        Send Funds\n     </ion-button>\n    </ion-item>\n  </form>\n\n</ion-content>\n<ion-footer class=\"border-t\">\n  <ion-button (click)=\"giveMe50()\" class=\"gimme50 no-ripple\" fill=\"none\">\n    Gimme 50\n  </ion-button>\n</ion-footer>\n</ion-app>\n\n"

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

module.exports = "ion-card-content {\n  background: var(--ion-card-color);\n}\n\nion-card-header {\n  --color: var(--ion-text-color,#000);\n}\n\nion-item {\n  --inner-padding-end: 0;\n}\n\nion-item ion-label {\n  white-space: normal;\n  margin-bottom: 2%;\n  font-size: 20px;\n  font-family: manrope-bold;\n  color: var(--ion-color-color);\n}\n\nion-item.wordCountWrapper {\n  padding: 0;\n  margin: 0;\n}\n\nion-select {\n  outline: none !important;\n  border: 1px solid #f0f0fa;\n  font-family: manrope-regular;\n  background-color: var(--ion-color-inputs);\n  outline: 1px solid #91919D;\n  font-size: 12px;\n  padding-left: 2% !important;\n  --placeholder-opacity: 0.7;\n  color: #808080;\n}\n\nion-select:hover {\n  background: var(--ion-color-inputs) !important;\n  background-color: var(--ion-color-inputs) !important;\n  --background-hover: none !important;\n}\n\nion-select::part(icon) {\n  top: 50%;\n  color: var(--ion-color-primary);\n  opacity: 1;\n}\n\nion-select-option {\n  font-family: manrope-bold;\n}\n\nion-input {\n  font-size: 12px;\n  color: #000;\n  background-color: var(--ion-color-inputs);\n  border: 1px solid #f0f0fa;\n  padding-left: 2% !important;\n}\n\n.transparentBody {\n  background: none transparent !important;\n  --background: none transparent !important;\n}\n\n.webscan-canvas {\n  text-align: center;\n  --background: none transparent !important;\n}\n\nion-footer {\n  width: 100%;\n  height: 90px;\n  background-color: #001C32;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\nion-toolbar {\n  --background: var(--ion-m-background);\n}\n\n.input {\n  font-family: manrope-light;\n}\n\n.length {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: baseline;\n          align-items: baseline;\n  font-family: manrope-light;\n  margin-left: 27px;\n  font-size: 12px;\n}\n\nion-textarea {\n  color: black !important;\n  background: var(--ion-color-inputs);\n  border: 1px solid #f0f0fa;\n  padding-left: 2% !important;\n  font-size: 12px;\n  margin-bottom: 1%;\n}\n\nion-item.error {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\nion-item.error span {\n  color: var(--ion-color-tertiary);\n  display: inline-block;\n  vertical-align: middle;\n}\n\nion-note.error-message ion-icon {\n  color: var(--ion-color-secondary);\n  font-size: 1rem;\n  display: inline-block;\n  vertical-align: middle;\n}\n\nion-note.error-message {\n  display: block;\n}\n\nbutton.footer {\n  width: 100%;\n  height: 100%;\n  font-size: 16px;\n  text-align: center;\n  text-transform: none;\n  font-family: manrope-bold;\n  background: transparent;\n  color: #fff;\n}\n\nbutton.footer:focus {\n  background: transparent;\n  --background: transparent;\n}\n\nion-button.send-funds {\n  height: 35px;\n  width: 164px;\n  --background: var(--ion-color-primary);\n  text-transform: none;\n  font-family: manrope-bold;\n  color: #fff;\n  float: right;\n  --border-radius: 0;\n}\n\nion-button.send-funds:hover {\n  --background: #346EE5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGlhc25lbXIvcHJvamVjdHMvV2FsbGV0L21vYmlsZS1hcHAtZnJvbnQtZW5kL2FwcC9zcmMvYXBwL3BhZ2VzL3NlbmQtZnVuZHMvc2VuZC1mdW5kcy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3NlbmQtZnVuZHMvc2VuZC1mdW5kcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQ0FBQTtBQ0NGOztBRENBO0VBQ0UsbUNBQUE7QUNFRjs7QURBQTtFQUNFLHNCQUFBO0FDR0Y7O0FEREE7RUFDRSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsNkJBQUE7QUNJRjs7QURGQTtFQUNFLFVBQUE7RUFDQSxTQUFBO0FDS0Y7O0FESEE7RUFDRSx3QkFBQTtFQUNBLHlCQUFBO0VBQ0EsNEJBQUE7RUFDQSx5Q0FBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtFQUNBLDJCQUFBO0VBQ0EsMEJBQUE7RUFDQSxjQUFBO0FDTUY7O0FESkE7RUFDRSw4Q0FBQTtFQUNBLG9EQUFBO0VBQ0EsbUNBQUE7QUNPRjs7QURMQTtFQUNFLFFBQUE7RUFDQSwrQkFBQTtFQUNBLFVBQUE7QUNRRjs7QUROQTtFQUNFLHlCQUFBO0FDU0Y7O0FEUEE7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLHlDQUFBO0VBQ0EseUJBQUE7RUFDQSwyQkFBQTtBQ1VGOztBRFJBO0VBQ0MsdUNBQUE7RUFDQSx5Q0FBQTtBQ1dEOztBRFRBO0VBQ0Msa0JBQUE7RUFDQyx5Q0FBQTtBQ1lGOztBRFZBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0FDYUY7O0FEVkE7RUFDRSxxQ0FBQTtBQ2FGOztBRFhBO0VBQ0UsMEJBQUE7QUNjRjs7QURaQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDJCQUFBO1VBQUEscUJBQUE7RUFDQSwwQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ2VGOztBRGJBO0VBQ0UsdUJBQUE7RUFDQSxtQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsMkJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNnQkY7O0FEYkE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtBQ2dCRjs7QURkQTtFQUNFLGdDQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtBQ2lCRjs7QURmQTtFQUNFLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7QUNrQkY7O0FEaEJBO0VBQ0UsY0FBQTtBQ21CRjs7QURqQkE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EseUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7QUNvQkY7O0FEbEJBO0VBQ0UsdUJBQUE7RUFDQSx5QkFBQTtBQ3FCRjs7QURuQkE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHNDQUFBO0VBQ0Esb0JBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNzQkY7O0FEcEJBO0VBQ0UscUJBQUE7QUN1QkYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zZW5kLWZ1bmRzL3NlbmQtZnVuZHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmQtY29udGVudCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jYXJkLWNvbG9yKTtcbn1cbmlvbi1jYXJkLWhlYWRlciB7XG4gIC0tY29sb3I6IHZhcigtLWlvbi10ZXh0LWNvbG9yLCMwMDApO1xufVxuaW9uLWl0ZW0ge1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xufVxuaW9uLWl0ZW0gaW9uLWxhYmVsIHtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgbWFyZ2luLWJvdHRvbTogMiU7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC1mYW1pbHk6IG1hbnJvcGUtYm9sZDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1jb2xvcik7XG59XG5pb24taXRlbS53b3JkQ291bnRXcmFwcGVyIHtcbiAgcGFkZGluZzowO1xuICBtYXJnaW46MDtcbn1cbmlvbi1zZWxlY3Qge1xuICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmMGYwZmE7XG4gIGZvbnQtZmFtaWx5OiBtYW5yb3BlLXJlZ3VsYXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1pbnB1dHMpO1xuICBvdXRsaW5lOiAxcHggc29saWQgIzkxOTE5RDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBwYWRkaW5nLWxlZnQ6IDIlIWltcG9ydGFudDtcbiAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAwLjc7XG4gIGNvbG9yOiAjODA4MDgwO1xufVxuaW9uLXNlbGVjdDpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1pbnB1dHMpICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1pbnB1dHMpICFpbXBvcnRhbnQ7XG4gIC0tYmFja2dyb3VuZC1ob3Zlcjogbm9uZSAhaW1wb3J0YW50O1xufVxuaW9uLXNlbGVjdDo6cGFydChpY29uKSB7XG4gIHRvcDogNTAlO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBvcGFjaXR5OiAxO1xufVxuaW9uLXNlbGVjdC1vcHRpb24ge1xuICBmb250LWZhbWlseTogbWFucm9wZS1ib2xkO1xufVxuaW9uLWlucHV0IHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzAwMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWlucHV0cyk7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmMGYwZmE7XG4gIHBhZGRpbmctbGVmdDogMiUgIWltcG9ydGFudDtcbn1cbi50cmFuc3BhcmVudEJvZHkge1xuXHRiYWNrZ3JvdW5kOiBub25lIHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG5cdC0tYmFja2dyb3VuZDogbm9uZSB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuLndlYnNjYW4tY2FudmFzIHtcbiB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gXHQtLWJhY2tncm91bmQ6IG5vbmUgdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cbmlvbi1mb290ZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA5MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAxQzMyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1tLWJhY2tncm91bmQpO1xufVxuLmlucHV0IHtcbiAgZm9udC1mYW1pbHk6IG1hbnJvcGUtbGlnaHQ7XG59XG4ubGVuZ3RoIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xuICBmb250LWZhbWlseTogbWFucm9wZS1saWdodDtcbiAgbWFyZ2luLWxlZnQ6IDI3cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbmlvbi10ZXh0YXJlYSB7XG4gIGNvbG9yOiBibGFjayFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1pbnB1dHMpO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZjBmMGZhO1xuICBwYWRkaW5nLWxlZnQ6IDIlIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtYXJnaW4tYm90dG9tOiAxJTtcbn1cblxuaW9uLWl0ZW0uZXJyb3Ige1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbmlvbi1pdGVtLmVycm9yIHNwYW4ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5KTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuaW9uLW5vdGUuZXJyb3ItbWVzc2FnZSBpb24taWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgZm9udC1zaXplOiAxLjByZW07XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbmlvbi1ub3RlLmVycm9yLW1lc3NhZ2UgeyBcbiAgZGlzcGxheTogYmxvY2s7XG59XG5idXR0b24uZm9vdGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBmb250LWZhbWlseTogbWFucm9wZS1ib2xkO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICNmZmY7XG59XG5idXR0b24uZm9vdGVyOmZvY3VzIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5pb24tYnV0dG9uLnNlbmQtZnVuZHMge1xuICBoZWlnaHQ6IDM1cHg7XG4gIHdpZHRoOiAxNjRweDtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBmb250LWZhbWlseTogbWFucm9wZS1ib2xkO1xuICBjb2xvcjogI2ZmZjtcbiAgZmxvYXQ6IHJpZ2h0OyBcbiAgLS1ib3JkZXItcmFkaXVzOiAwO1xufVxuaW9uLWJ1dHRvbi5zZW5kLWZ1bmRzOmhvdmVyIHtcbiAgLS1iYWNrZ3JvdW5kOiAjMzQ2RUU1O1xufSIsImlvbi1jYXJkLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY2FyZC1jb2xvcik7XG59XG5cbmlvbi1jYXJkLWhlYWRlciB7XG4gIC0tY29sb3I6IHZhcigtLWlvbi10ZXh0LWNvbG9yLCMwMDApO1xufVxuXG5pb24taXRlbSB7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XG59XG5cbmlvbi1pdGVtIGlvbi1sYWJlbCB7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gIG1hcmdpbi1ib3R0b206IDIlO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBtYW5yb3BlLWJvbGQ7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItY29sb3IpO1xufVxuXG5pb24taXRlbS53b3JkQ291bnRXcmFwcGVyIHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xufVxuXG5pb24tc2VsZWN0IHtcbiAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZjBmMGZhO1xuICBmb250LWZhbWlseTogbWFucm9wZS1yZWd1bGFyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItaW5wdXRzKTtcbiAgb3V0bGluZTogMXB4IHNvbGlkICM5MTkxOUQ7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgcGFkZGluZy1sZWZ0OiAyJSAhaW1wb3J0YW50O1xuICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDAuNztcbiAgY29sb3I6ICM4MDgwODA7XG59XG5cbmlvbi1zZWxlY3Q6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItaW5wdXRzKSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItaW5wdXRzKSAhaW1wb3J0YW50O1xuICAtLWJhY2tncm91bmQtaG92ZXI6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuaW9uLXNlbGVjdDo6cGFydChpY29uKSB7XG4gIHRvcDogNTAlO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBvcGFjaXR5OiAxO1xufVxuXG5pb24tc2VsZWN0LW9wdGlvbiB7XG4gIGZvbnQtZmFtaWx5OiBtYW5yb3BlLWJvbGQ7XG59XG5cbmlvbi1pbnB1dCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICMwMDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1pbnB1dHMpO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZjBmMGZhO1xuICBwYWRkaW5nLWxlZnQ6IDIlICFpbXBvcnRhbnQ7XG59XG5cbi50cmFuc3BhcmVudEJvZHkge1xuICBiYWNrZ3JvdW5kOiBub25lIHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIC0tYmFja2dyb3VuZDogbm9uZSB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuXG4ud2Vic2Nhbi1jYW52YXMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIC0tYmFja2dyb3VuZDogbm9uZSB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuXG5pb24tZm9vdGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogOTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMUMzMjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tbS1iYWNrZ3JvdW5kKTtcbn1cblxuLmlucHV0IHtcbiAgZm9udC1mYW1pbHk6IG1hbnJvcGUtbGlnaHQ7XG59XG5cbi5sZW5ndGgge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG4gIGZvbnQtZmFtaWx5OiBtYW5yb3BlLWxpZ2h0O1xuICBtYXJnaW4tbGVmdDogMjdweDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG5pb24tdGV4dGFyZWEge1xuICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWlucHV0cyk7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmMGYwZmE7XG4gIHBhZGRpbmctbGVmdDogMiUgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtYXJnaW4tYm90dG9tOiAxJTtcbn1cblxuaW9uLWl0ZW0uZXJyb3Ige1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuaW9uLWl0ZW0uZXJyb3Igc3BhbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnkpO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbmlvbi1ub3RlLmVycm9yLW1lc3NhZ2UgaW9uLWljb24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG5pb24tbm90ZS5lcnJvci1tZXNzYWdlIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbmJ1dHRvbi5mb290ZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGZvbnQtZmFtaWx5OiBtYW5yb3BlLWJvbGQ7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogI2ZmZjtcbn1cblxuYnV0dG9uLmZvb3Rlcjpmb2N1cyB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG5pb24tYnV0dG9uLnNlbmQtZnVuZHMge1xuICBoZWlnaHQ6IDM1cHg7XG4gIHdpZHRoOiAxNjRweDtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBmb250LWZhbWlseTogbWFucm9wZS1ib2xkO1xuICBjb2xvcjogI2ZmZjtcbiAgZmxvYXQ6IHJpZ2h0O1xuICAtLWJvcmRlci1yYWRpdXM6IDA7XG59XG5cbmlvbi1idXR0b24uc2VuZC1mdW5kczpob3ZlciB7XG4gIC0tYmFja2dyb3VuZDogIzM0NkVFNTtcbn0iXX0= */"

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
    function SendFundsPage(menu, formBuilder, clipboard, alertController, api, balanceService, route, router) {
        this.menu = menu;
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
    SendFundsPage.prototype.openMenu = function () {
        this.menu.open();
    };
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
        //console.log(data);
        if (data.message !== null && (data.message || data.message.length > 0)) {
            this.submitBtn.disabled = true;
            this.api.sendMessageTransaction(data).then(function (res) {
                if (minima__WEBPACK_IMPORTED_MODULE_8__["Minima"].util.checkAllResponses(res)) {
                    //console.log(res);
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
            this.data.message = '';
            this.submitBtn.disabled = true;
            this.api.sendFunds(data).then(function (res) {
                if (res.status) {
                    //console.log(res);
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
    SendFundsPage.prototype.giveMe50 = function () {
        var _this = this;
        this.api.giveMe50().then(function (res) {
            if (res.status === true) {
                _this.presentAlert('Gimme50', 'Successful', 'Status');
            }
            else {
                _this.presentAlert('Gimme50', res.message, 'Status');
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
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"] },
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_4__["Clipboard"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"],
            _service_minima_api_service__WEBPACK_IMPORTED_MODULE_6__["MinimaApiService"],
            _service_balance_service__WEBPACK_IMPORTED_MODULE_2__["BalanceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
    ], SendFundsPage);
    return SendFundsPage;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var minima__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! minima */ "./node_modules/minima/dist/minima.js");
/* harmony import */ var minima__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(minima__WEBPACK_IMPORTED_MODULE_3__);




var MinimaApiService = /** @class */ (function () {
    function MinimaApiService(loadingController) {
        this.loadingController = loadingController;
        this.loader = null;
    }
    MinimaApiService.prototype.showLoader = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!(this.loader == null)) return [3 /*break*/, 2];
                        _a = this;
                        return [4 /*yield*/, this.loadingController.create({
                                message: 'Loading'
                            })];
                    case 1:
                        _a.loader = _b.sent();
                        this.loader.present();
                        _b.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    MinimaApiService.prototype.hideLoader = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.loader !== null)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.loader.dismiss()];
                    case 1:
                        _a.sent();
                        this.loader = null;
                        return [3 /*break*/, 2];
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    MinimaApiService.prototype.createToken = function (data) {
        return this.req("tokencreate name:\"" + data.name + "\" amount:" + data.amount + " description:\"" + data.description + "\" script:\"" + data.script + "\" icon:" + data.icon + " proof:" + data.proof);
    };
    MinimaApiService.prototype.validateTokenID = function (tokenid) {
        return this.req("tokenvalidate " + tokenid);
    };
    MinimaApiService.prototype.sendMessageTransaction = function (data) {
        var txnidentifier = Math.floor(Math.random() * 1000000000);
        var port254 = 254;
        var port255 = 255;
        var customTXN = 
        // Custom TXN with an ID
        "txncreate " + txnidentifier + ";" +
            // Add state variable 1
            "txnstate " + txnidentifier + " 254 01000100" + ";" +
            // Add User state variable 2
            "txnstate " + txnidentifier + " 255 \"" + data.message + "\"" + ";" +
            // Auto fill the transaction
            "txnauto " + txnidentifier + " " + data.amount + " " + data.address + " " + data.tokenid + ";" +
            // Post it!
            "txnpost " + txnidentifier + ";" +
            // Clear the txn
            "txndelete " + txnidentifier + ";";
        return this.req(customTXN);
    };
    MinimaApiService.prototype.webLink = function (data) {
        return this.req('weblink+' + data.url);
    };
    MinimaApiService.prototype.setHost = function (newHost) {
        localStorage.setItem('minima_host', newHost);
    };
    MinimaApiService.prototype.newAddress = function () {
        return this.req('newaddress');
    };
    MinimaApiService.prototype.sendFunds = function (data) {
        return this.req('send ' + data.amount + ' ' + data.address + ' ' + data.tokenid);
    };
    MinimaApiService.prototype.giveMe50 = function () {
        return this.req('gimme50');
    };
    MinimaApiService.prototype.getBalance = function () {
        return this.req('balance');
    };
    MinimaApiService.prototype.getHistory = function () {
        return this.req('history');
    };
    MinimaApiService.prototype.clearMyHistory = function () {
        return this.req('history clear');
    };
    MinimaApiService.prototype.getStatus = function () {
        return this.req('status');
    };
    // Use minima.js instead..
    MinimaApiService.prototype.req = function (fnc) {
        var promise = new Promise(function (resolve) {
            minima__WEBPACK_IMPORTED_MODULE_3__["Minima"].cmd(fnc, function (resp) {
                //console.log(resp);
                resolve(resp);
            });
        });
        return promise;
    };
    MinimaApiService.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] }
    ]; };
    MinimaApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]])
    ], MinimaApiService);
    return MinimaApiService;
}());



/***/ })

}]);
//# sourceMappingURL=pages-send-funds-send-funds-module-es5.js.map