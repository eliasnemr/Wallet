(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-create-token-create-token-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/create-token/create-token.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/create-token/create-token.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-app>\n<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-title>\n      <ion-item class=\"ion-no-padding\">\n        <ion-menu-button></ion-menu-button>\n        Token\n      </ion-item>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-item class=\"breadcrumb ion-no-padding\" lines=\"none\">\n  Create a custom token\n</ion-item>\n\n<ion-content>\n  <form (ngSubmit)=\"createTokenAdvanced()\" [formGroup]=\"tokenCreationForm\" id='tokenCreationForm'>\n  <ion-list lines=\"none\">\n\n    <ion-item class=\"no-ripple\" lines=\"none\">\n      <ion-label position=\"stacked\" class=\"medium-text\">Name</ion-label>\n      <ion-input placeholder=\"Enter a token name\" class=\"medium-text input\" #nameTextArea name=\"name\" formControlName=\"name\"></ion-input>\n    </ion-item>\n    <ion-item class=\"error\" lines=\"none\" *ngIf=\"name.invalid && name.touched\">\n      <ion-note class=\"error-message\">\n        <ion-icon name=\"alert-circle\"></ion-icon> <span> A name is required!</span> <br>\n        <span>&mdash; A name must be a maximum length of 255 characters.</span> \n      </ion-note>\n    </ion-item>\n\n    <ion-item class=\"no-ripple\" lines=\"none\">\n      <ion-label position=\"stacked\" class=\"medium-text\">Amount</ion-label>\n      <ion-input placeholder=\"Enter token amount\" type=\"number\" class=\"medium-text input\" #amountRef name=\"amount\" formControlName=\"amount\"></ion-input>\n    </ion-item>\n    <ion-item class=\"error\" lines=\"none\" *ngIf=\"amount.invalid && amount.touched\">\n      <ion-note class=\"error-message\">\n        <ion-icon name=\"alert-circle\"></ion-icon> <span> An amount is required!</span> <br>\n        <span>&mdash; An amount must be numeric and greater than 0.</span> \n      </ion-note>\n    </ion-item>\n\n    <ion-item class=\"no-ripple\" lines=\"none\" lines=\"none\">\n      <ion-label position=\"stacked\" class=\"medium-text\">Icon <span style=\"font-family: manrope-light; color:var(--ion-color-primary)\">(Optional)</span></ion-label>\n      <ion-input class=\"medium-text input\" name=\"icon\" #iconURL formControlName=\"icon\" placeholder=\"Enter a valid icon URL\"></ion-input>\n    </ion-item>\n\n    <ion-item class=\"no-ripple\" lines=\"none\" lines=\"none\">\n      <ion-label position=\"stacked\" class=\"medium-text\">Proof <span style=\"font-family: manrope-light; color:var(--ion-color-primary)\">(Optional)</span></ion-label>\n      <ion-input  name=\"proof\" class=\"medium-text input\" #proofURL formControlName=\"proof\" placeholder=\"Enter URL of website hosting token ID text\"></ion-input>\n    </ion-item>\n\n    <ion-item class=\"no-ripple\" lines=\"none\" lines=\"none\">\n      <ion-label position=\"stacked\"  class=\"medium-text\">Description <span style=\"font-family: manrope-light; color:var(--ion-color-primary)\">(Optional)</span></ion-label>\n      <ion-textarea\n      #description \n      class=\"medium-text input\"\n      name=\"description\"\n      maxlength=\"255\"\n      [(ngModel)] = \"customToken.description\"\n      formControlName=\"description\"\n      placeholder=\"Enter a description\">\n      </ion-textarea>\n    </ion-item>\n    <ion-label class=\"length\" *ngIf=\"customToken.description && customToken.description.length > 0\">{{ customToken.description.length+'/255'}}</ion-label>\n    <ion-item class=\"no-ripple\">\n      <ion-label class=\"nft\">\n        <ion-icon class=\"nftIcon\" src=\"assets/nft2.svg\"></ion-icon> <span style=\"font-family: manrope-light; color:var(--ion-color-primary)\">(Optional)</span>\n        Spend this token in whole only.\n      </ion-label>\n      <ion-checkbox formControlName=\"nft\" slot=\"end\"></ion-checkbox>\n    </ion-item>\n  </ion-list>\n  \n  <ion-row>\n    <ion-col size=\"12\">\n      <ion-button #submitBtn type=\"submit\" class=\"create-token\" [disabled]=\"tokenCreationForm.invalid\" fill=\"clear\">\n        Create Token\n      </ion-button>\n    </ion-col>\n  </ion-row>\n\n  </form>\n</ion-content>\n\n<ion-footer>\n  <ion-button (click)=\"giveMe50()\" class=\"gimme50 no-ripple\" fill=\"none\">\n    Gimme 50\n  </ion-button>\n</ion-footer>\n\n</ion-app>"

/***/ }),

/***/ "./src/app/pages/create-token/create-token.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/create-token/create-token.module.ts ***!
  \***********************************************************/
/*! exports provided: CreateTokenPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateTokenPageModule", function() { return CreateTokenPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _create_token_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./create-token.page */ "./src/app/pages/create-token/create-token.page.ts");







var routes = [
    {
        path: '',
        component: _create_token_page__WEBPACK_IMPORTED_MODULE_6__["CreateTokenPage"]
    }
];
var CreateTokenPageModule = /** @class */ (function () {
    function CreateTokenPageModule() {
    }
    CreateTokenPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_create_token_page__WEBPACK_IMPORTED_MODULE_6__["CreateTokenPage"]]
        })
    ], CreateTokenPageModule);
    return CreateTokenPageModule;
}());



/***/ }),

/***/ "./src/app/pages/create-token/create-token.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/create-token/create-token.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-input {\n  color: #000;\n  line-height: 16px;\n  font-size: 12px;\n  background-color: #ffffff;\n  border: 1px solid #f0f0fa;\n  padding-left: 2% !important;\n}\n\nion-list {\n  margin-left: 12px;\n  margin-right: 13px;\n}\n\nion-item ion-label {\n  white-space: normal;\n  margin-bottom: 7px;\n}\n\nion-checkbox.checkbox {\n  padding-left: 5px;\n  padding-top: 5px;\n}\n\nion-note {\n  color: var(--ion-color-secondary);\n  font-family: manrope-bold;\n}\n\nion-icon.nftIcon {\n  font-size: 1.5rem;\n}\n\nion-label.nft {\n  font-size: 12px;\n  display: inline-block;\n  -webkit-box-align: center;\n          align-items: center;\n  vertical-align: middle;\n}\n\nion-textarea {\n  padding-left: 2%;\n  font-size: 12px;\n  color: black !important;\n  background: #ffffff;\n}\n\nion-checkbox {\n  --size: 15px;\n}\n\nion-title.cardHeader {\n  padding-top: 2%;\n  font-size: 0.9rem;\n  display: inline-block;\n}\n\nion-title.cardHeader ion-icon {\n  cursor: pointer;\n}\n\nion-card-content {\n  background: var(--ion-card-color);\n}\n\nion-card-header {\n  --color: var(--ion-text-color,#000);\n  font-family: manrope-bold;\n}\n\n.input {\n  font-family: manrope-light;\n}\n\n.length {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: baseline;\n          align-items: baseline;\n  -webkit-box-pack: baseline;\n          justify-content: baseline;\n  margin-left: 20px;\n  font-family: manrope-light;\n  font-size: 12px;\n}\n\n.length ion-note {\n  font-family: manrope-light !important;\n  color: var(--ion-color-tertiary) !important;\n}\n\nion-item.error {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: left;\n          align-items: left;\n  -webkit-box-pack: left;\n          justify-content: left;\n}\n\nion-item.error span {\n  color: var(--ion-color-tertiary);\n  display: inline-block;\n  vertical-align: middle;\n}\n\nion-note.error-message ion-icon {\n  color: var(--ion-color-secondary);\n  font-size: 1rem;\n  display: inline-block;\n  vertical-align: middle;\n}\n\nion-note.error-message {\n  display: block;\n}\n\nion-button.create-token {\n  height: 35px;\n  width: 164px;\n  float: right;\n  background-color: var(--ion-color-primary);\n  margin-right: 23px;\n  color: #fff;\n  text-transform: none;\n  font-family: manrope-bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGlhc25lbXIvcHJvamVjdHMvV2FsbGV0L21vYmlsZS1hcHAtZnJvbnQtZW5kL2FwcC9zcmMvYXBwL3BhZ2VzL2NyZWF0ZS10b2tlbi9jcmVhdGUtdG9rZW4ucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9jcmVhdGUtdG9rZW4vY3JlYXRlLXRva2VuLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsMkJBQUE7QUNDRjs7QURDQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7QUNFRjs7QURBQTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7QUNHRjs7QUREQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7QUNJRjs7QURGQTtFQUNFLGlDQUFBO0VBQ0EseUJBQUE7QUNLRjs7QURIQTtFQUNFLGlCQUFBO0FDTUY7O0FESkE7RUFDRSxlQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esc0JBQUE7QUNPRjs7QURMQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNRRjs7QUROQTtFQUNFLFlBQUE7QUNTRjs7QURQQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0FDVUY7O0FEUkE7RUFDRSxlQUFBO0FDV0Y7O0FEVEE7RUFDRSxpQ0FBQTtBQ1lGOztBRFZBO0VBQ0UsbUNBQUE7RUFDQSx5QkFBQTtBQ2FGOztBRFhBO0VBQ0UsMEJBQUE7QUNjRjs7QURaQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDJCQUFBO1VBQUEscUJBQUE7RUFDQSwwQkFBQTtVQUFBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSwwQkFBQTtFQUNBLGVBQUE7QUNlRjs7QURiQTtFQUNFLHFDQUFBO0VBQ0EsMkNBQUE7QUNnQkY7O0FEZEE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx1QkFBQTtVQUFBLGlCQUFBO0VBQ0Esc0JBQUE7VUFBQSxxQkFBQTtBQ2lCRjs7QURmQTtFQUNFLGdDQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtBQ2tCRjs7QURoQkE7RUFDRSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0FDbUJGOztBRGpCQTtFQUNFLGNBQUE7QUNvQkY7O0FEbEJBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsMENBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUNBLHlCQUFBO0FDcUJGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY3JlYXRlLXRva2VuL2NyZWF0ZS10b2tlbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taW5wdXQge1xuICBjb2xvcjogIzAwMDtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2YwZjBmYTtcbiAgcGFkZGluZy1sZWZ0OiAyJSAhaW1wb3J0YW50O1xufVxuaW9uLWxpc3Qge1xuICBtYXJnaW4tbGVmdDogMTJweDtcbiAgbWFyZ2luLXJpZ2h0OiAxM3B4O1xufVxuaW9uLWl0ZW0gaW9uLWxhYmVsIHtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgbWFyZ2luLWJvdHRvbTogN3B4O1xufVxuaW9uLWNoZWNrYm94LmNoZWNrYm94IHtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG59XG5pb24tbm90ZSB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgZm9udC1mYW1pbHk6IG1hbnJvcGUtYm9sZDtcbn1cbmlvbi1pY29uLm5mdEljb24ge1xuICBmb250LXNpemU6IDEuNXJlbTtcbn1cbmlvbi1sYWJlbC5uZnQge1xuICBmb250LXNpemU6IDEycHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbmlvbi10ZXh0YXJlYSB7XG4gIHBhZGRpbmctbGVmdDogMiU7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6IGJsYWNrIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbn1cbmlvbi1jaGVja2JveCB7XG4gIC0tc2l6ZTogMTVweDtcbn1cbmlvbi10aXRsZS5jYXJkSGVhZGVyIHtcbiAgcGFkZGluZy10b3A6IDIlO1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuaW9uLXRpdGxlLmNhcmRIZWFkZXIgaW9uLWljb24ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5pb24tY2FyZC1jb250ZW50IHtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNhcmQtY29sb3IpO1xufVxuaW9uLWNhcmQtaGVhZGVyIHtcbiAgLS1jb2xvcjogdmFyKC0taW9uLXRleHQtY29sb3IsIzAwMCk7XG4gIGZvbnQtZmFtaWx5OiBtYW5yb3BlLWJvbGQ7XG59XG4uaW5wdXQge1xuICBmb250LWZhbWlseTogbWFucm9wZS1saWdodDtcbn1cbi5sZW5ndGgge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG4gIGp1c3RpZnktY29udGVudDogYmFzZWxpbmU7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBmb250LWZhbWlseTogbWFucm9wZS1saWdodDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLmxlbmd0aCBpb24tbm90ZSB7XG4gIGZvbnQtZmFtaWx5OiBtYW5yb3BlLWxpZ2h0IWltcG9ydGFudDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeSkhaW1wb3J0YW50O1xufVxuaW9uLWl0ZW0uZXJyb3Ige1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogbGVmdDtcbiAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xufVxuaW9uLWl0ZW0uZXJyb3Igc3BhbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnkpO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5pb24tbm90ZS5lcnJvci1tZXNzYWdlIGlvbi1pY29uIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICBmb250LXNpemU6IDEuMHJlbTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuaW9uLW5vdGUuZXJyb3ItbWVzc2FnZSB7IFxuICBkaXNwbGF5OiBibG9jaztcbn1cbmlvbi1idXR0b24uY3JlYXRlLXRva2VuIHtcbiAgaGVpZ2h0OiAzNXB4O1xuICB3aWR0aDogMTY0cHg7XG4gIGZsb2F0OiByaWdodDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBtYXJnaW4tcmlnaHQ6IDIzcHg7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgZm9udC1mYW1pbHk6IG1hbnJvcGUtYm9sZDtcbn0iLCJpb24taW5wdXQge1xuICBjb2xvcjogIzAwMDtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2YwZjBmYTtcbiAgcGFkZGluZy1sZWZ0OiAyJSAhaW1wb3J0YW50O1xufVxuXG5pb24tbGlzdCB7XG4gIG1hcmdpbi1sZWZ0OiAxMnB4O1xuICBtYXJnaW4tcmlnaHQ6IDEzcHg7XG59XG5cbmlvbi1pdGVtIGlvbi1sYWJlbCB7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gIG1hcmdpbi1ib3R0b206IDdweDtcbn1cblxuaW9uLWNoZWNrYm94LmNoZWNrYm94IHtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG59XG5cbmlvbi1ub3RlIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICBmb250LWZhbWlseTogbWFucm9wZS1ib2xkO1xufVxuXG5pb24taWNvbi5uZnRJY29uIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG59XG5cbmlvbi1sYWJlbC5uZnQge1xuICBmb250LXNpemU6IDEycHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuaW9uLXRleHRhcmVhIHtcbiAgcGFkZGluZy1sZWZ0OiAyJTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbn1cblxuaW9uLWNoZWNrYm94IHtcbiAgLS1zaXplOiAxNXB4O1xufVxuXG5pb24tdGl0bGUuY2FyZEhlYWRlciB7XG4gIHBhZGRpbmctdG9wOiAyJTtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuaW9uLXRpdGxlLmNhcmRIZWFkZXIgaW9uLWljb24ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmlvbi1jYXJkLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY2FyZC1jb2xvcik7XG59XG5cbmlvbi1jYXJkLWhlYWRlciB7XG4gIC0tY29sb3I6IHZhcigtLWlvbi10ZXh0LWNvbG9yLCMwMDApO1xuICBmb250LWZhbWlseTogbWFucm9wZS1ib2xkO1xufVxuXG4uaW5wdXQge1xuICBmb250LWZhbWlseTogbWFucm9wZS1saWdodDtcbn1cblxuLmxlbmd0aCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbiAganVzdGlmeS1jb250ZW50OiBiYXNlbGluZTtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBtYW5yb3BlLWxpZ2h0O1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5sZW5ndGggaW9uLW5vdGUge1xuICBmb250LWZhbWlseTogbWFucm9wZS1saWdodCAhaW1wb3J0YW50O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5KSAhaW1wb3J0YW50O1xufVxuXG5pb24taXRlbS5lcnJvciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBsZWZ0O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XG59XG5cbmlvbi1pdGVtLmVycm9yIHNwYW4ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5KTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG5pb24tbm90ZS5lcnJvci1tZXNzYWdlIGlvbi1pY29uIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICBmb250LXNpemU6IDFyZW07XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuaW9uLW5vdGUuZXJyb3ItbWVzc2FnZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5pb24tYnV0dG9uLmNyZWF0ZS10b2tlbiB7XG4gIGhlaWdodDogMzVweDtcbiAgd2lkdGg6IDE2NHB4O1xuICBmbG9hdDogcmlnaHQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgbWFyZ2luLXJpZ2h0OiAyM3B4O1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGZvbnQtZmFtaWx5OiBtYW5yb3BlLWJvbGQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/create-token/create-token.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/create-token/create-token.page.ts ***!
  \*********************************************************/
/*! exports provided: CreateTokenPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateTokenPage", function() { return CreateTokenPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_minima_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/minima-api.service */ "./src/app/service/minima-api.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var CreateTokenPage = /** @class */ (function () {
    function CreateTokenPage(api, formBuilder, alertController, toastController) {
        this.api = api;
        this.formBuilder = formBuilder;
        this.alertController = alertController;
        this.toastController = toastController;
        this.advancedFormInputsChecked = { description: false, icon: false, proof: false, nft: false };
        this.isNft = false;
        this.loading = false;
        this.success = false;
        this.myNFT = 'ASSERT FLOOR ( @AMOUNT ) EQ @AMOUNT LET checkout = 0 WHILE ( checkout LT @TOTOUT ) DO IF GETOUTTOK ( checkout ) EQ @TOKENID THEN LET outamt = GETOUTAMT ( checkout ) ASSERT FLOOR ( outamt ) EQ outamt ENDIF LET checkout = INC ( checkout ) ENDWHILE RETURN TRUE';
        this.customToken = {
            name: '',
            amount: 0,
            icon: '',
            proof: '',
            script: '',
            description: ''
        };
        this.descrEntry = {
            isChecked: false
        };
        this.iconEntry = {
            isChecked: false
        };
        this.proofEntry = {
            isChecked: false
        };
        this.nft = {
            isNonFungible: false
        };
    }
    CreateTokenPage.prototype.ionViewDidEnter = function () { };
    CreateTokenPage.prototype.ngOnInit = function () {
        this.tokenCreationForm = this.formBuilder.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(255)]],
            amount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(255)]],
            description: '',
            script: '',
            icon: '',
            proof: '',
            nft: false
        });
    };
    CreateTokenPage.prototype.presentToast = function (msg, type) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: msg,
                            duration: 4000,
                            color: type,
                            buttons: [{
                                    text: 'Close',
                                    role: 'cancel'
                                }],
                            keyboardClose: true,
                            translucent: true,
                            position: 'top'
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    CreateTokenPage.prototype.presentAlert = function (hdr, message, subtitle) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            cssClass: 'alertContainer',
                            header: hdr,
                            subHeader: subtitle,
                            message: message,
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
    CreateTokenPage.prototype.giveMe50 = function () {
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
    CreateTokenPage.prototype.createTokenAdvanced = function () {
        var _this = this;
        this.loading = true;
        console.log(this.tokenCreationForm.value);
        var newToken = this.tokenCreationForm.value;
        if (newToken.nft) {
            this.submitBtn.disabled = true;
            newToken.script = this.myNFT; // script for non-fungible
            this.api.createToken(newToken).then(function (res) {
                if (res.status) {
                    _this.presentAlert('Success', 'Token ' + _this.customToken.name + ' has been created.', 'Token Creation Status');
                    _this.resetForm();
                }
                else {
                    setTimeout(function () {
                        _this.submitBtn.disabled = false;
                    }, 500);
                    _this.presentAlert('Something\'s wrong!', res.message, 'Token Creation Status');
                }
            });
        }
        else {
            this.submitBtn.disabled = true;
            newToken.script = 'RETURN TRUE'; // default script to spend token
            this.api.createToken(newToken).then(function (res) {
                if (res.status) {
                    _this.presentAlert('Success', 'Token ' + _this.customToken.name + ' has been created.', 'Token Creation Status');
                    _this.resetForm();
                }
                else {
                    setTimeout(function () {
                        _this.submitBtn.disabled = false;
                    }, 500);
                    _this.presentAlert('Something\'s wrong!', res.message, 'Token Creation Status');
                }
            });
        }
    };
    CreateTokenPage.prototype.resetForm = function () {
        this.tokenCreationForm.reset();
    };
    Object.defineProperty(CreateTokenPage.prototype, "name", {
        get: function () {
            return this.tokenCreationForm.get('name');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CreateTokenPage.prototype, "descr", {
        get: function () {
            return this.tokenCreationForm.get('description');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CreateTokenPage.prototype, "icon", {
        get: function () {
            return this.tokenCreationForm.get('icon');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CreateTokenPage.prototype, "proof", {
        get: function () {
            return this.tokenCreationForm.get('proof');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CreateTokenPage.prototype, "amount", {
        get: function () {
            return this.tokenCreationForm.get('amount');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CreateTokenPage.prototype, "myNft", {
        get: function () {
            return this.tokenCreationForm.get('nft');
        },
        enumerable: true,
        configurable: true
    });
    CreateTokenPage.ctorParameters = function () { return [
        { type: _service_minima_api_service__WEBPACK_IMPORTED_MODULE_2__["MinimaApiService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('submitBtn', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonButton"])
    ], CreateTokenPage.prototype, "submitBtn", void 0);
    CreateTokenPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-token',
            template: __webpack_require__(/*! raw-loader!./create-token.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/create-token/create-token.page.html"),
            styles: [__webpack_require__(/*! ./create-token.page.scss */ "./src/app/pages/create-token/create-token.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_minima_api_service__WEBPACK_IMPORTED_MODULE_2__["MinimaApiService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]])
    ], CreateTokenPage);
    return CreateTokenPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-create-token-create-token-module-es5.js.map