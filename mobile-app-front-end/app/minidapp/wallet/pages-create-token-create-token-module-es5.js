(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-create-token-create-token-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/create-token/create-token.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/create-token/create-token.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-app>\n<ion-header class=\"page-header ion-no-border\">\n  <ion-toolbar>\n    <ion-title>\n      <ion-item id=\"title\" lines=\"none\" class=\"ion-no-padding\">\n        <ion-icon class=\"menu-btn\" (click)=\"openMenu()\" src=\"assets/menuIcon.svg\"></ion-icon>\n        Token\n      </ion-item>\n      <ion-item id=\"subtitle\" class=\"breadcrumb ion-no-padding\" lines=\"none\">\n        Create a custom token\n      </ion-item>\n      \n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content class=\"page-content\">\n  <form (ngSubmit)=\"createTokenAdvanced()\" [formGroup]=\"tokenCreationForm\" id='tokenCreationForm'>\n  <ion-list lines=\"none\">\n\n    <ion-item class=\"no-ripple ion-no-padding\" lines=\"none\">\n      <ion-label position=\"stacked\">Name</ion-label>\n      <ion-input placeholder=\"Enter a token name\" class=\"medium-text input\" #nameTextArea name=\"name\" formControlName=\"name\"></ion-input>\n    </ion-item>\n\n    <ion-note *ngIf=\"name.invalid && name.touched\" class=\"error-message\">\n      <ion-icon name=\"alert-circle\"></ion-icon> <span> Token name required!</span>\n      <span style=\"margin-left: 2px\"> Token name must be a maximum length of 255 characters.</span> \n    </ion-note>\n\n\n    <ion-item class=\"no-ripple ion-no-padding\" lines=\"none\">\n      <ion-label position=\"stacked\">Amount</ion-label>\n      <ion-input placeholder=\"Enter token amount\" type=\"number\" class=\"medium-text input\" #amountRef name=\"amount\" formControlName=\"amount\"></ion-input>\n    </ion-item>\n\n    <ion-note *ngIf=\"amount.invalid && amount.touched\" class=\"error-message\">\n      <ion-icon name=\"alert-circle\"></ion-icon> <span> Token amount required!</span>\n      <span style=\"margin-left: 2px\"> Token amount must be numeric and greater than 0.</span> \n    </ion-note>\n\n    <ion-item class=\"no-ripple ion-no-padding\" lines=\"none\" lines=\"none\">\n      <ion-label position=\"stacked\">Icon <span style=\"font-family: manrope-light; color:var(--ion-color-optional)\">(optional)</span></ion-label>\n      <ion-input class=\"medium-text input\" name=\"icon\" #iconURL formControlName=\"icon\" placeholder=\"Enter a valid icon URL\"></ion-input>\n    </ion-item>\n\n    <ion-note *ngIf=\"icon.invalid && icon.touched\" class=\"error-message\">\n      <ion-icon name=\"alert-circle\"></ion-icon> <span> Invalid icon URL!</span>\n      <span style=\"margin-left: 2px\"> An icon URL should be of maximum 255 characters and end with .jpg, .png or .gif to be valid.</span> \n    </ion-note>\n\n    <ion-item class=\"no-ripple ion-no-padding\" lines=\"none\" lines=\"none\">\n      <ion-label position=\"stacked\">Proof <span style=\"font-family: manrope-light; color:var(--ion-color-optional)\">(optional)</span></ion-label>\n      <ion-input  name=\"proof\" class=\"medium-text input\" #proofURL formControlName=\"proof\" placeholder=\"Enter URL of website hosting token ID text\"></ion-input>\n    </ion-item>\n\n    <ion-note *ngIf=\"proof.invalid && proof.touched\" class=\"error-message\">\n      <ion-icon name=\"alert-circle\"></ion-icon> <span> Invalid proof URL!</span>\n      <span style=\"margin-left: 2px\"> A proof URL should be a max length of 255 characters with a .txt file in the URL.</span> \n    </ion-note>\n\n    <ion-item class=\"no-ripple ion-no-padding\" lines=\"none\" lines=\"none\">\n      <ion-label position=\"stacked\">Description <span style=\"font-family: manrope-light; color:var(--ion-color-optional)\">(optional)</span></ion-label>\n      <ion-textarea\n      #description \n      class=\"medium-text input\"\n      name=\"description\"\n      maxlength=\"255\"\n      [(ngModel)] = \"customToken.description\"\n      formControlName=\"description\"\n      placeholder=\"Enter a description\">\n      </ion-textarea>\n    </ion-item>\n    <ion-label style=\"margin-left:0\" class=\"length\" *ngIf=\"customToken.description && customToken.description.length > 0\">{{ customToken.description.length+'/255'}}</ion-label>\n    \n    <ion-item id=\"nft\" class=\"no-ripple ion-no-padding\">\n      <ion-label>\n        <ion-icon class=\"nftIcon\" src=\"assets/nft2.svg\"></ion-icon> \n        <span style=\"font-size:16px;font-family: manrope-light; color:var(--ion-color-optional); margin-right: 7px\">(optional)  </span>        \n      </ion-label>\n      <ion-checkbox formControlName=\"nft\" slot=\"end\"></ion-checkbox>\n    </ion-item>\n    \n    <ion-item lines=\"none\" class=\"createtoken-wrapper ion-no-padding\">\n      <div style=\"display: flex; flex-direction:column; justify-content:right; align-items:flex-end\">\n        <ion-button slot=\"end\" #submitBtn type=\"submit\" class=\"create-token\" [disabled]=\"tokenCreationForm.invalid\" fill=\"clear\">\n          Create Token\n        </ion-button>\n        <ion-note *ngIf=\"status.length > 0\">{{ status }}</ion-note>\n      </div>\n    </ion-item>\n\n  </ion-list>\n\n  </form>\n</ion-content>\n\n<ion-footer class=\"border-t\">\n  <ion-button (click)=\"giveMe50()\" class=\"gimme50 no-ripple\" fill=\"none\">\n    Gimme 50\n  </ion-button>\n</ion-footer>\n\n</ion-app>"

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

module.exports = "ion-input {\n  color: #000;\n  font-size: 12px;\n  background-color: var(--ion-color-inputs);\n  border: 1px solid #f0f0fa;\n  padding-left: 2% !important;\n}\n\nion-list ion-item {\n  --inner-padding-end: 0;\n}\n\nion-list:first-child {\n  padding-top: 0;\n}\n\nion-item ion-label {\n  color: var(--ion-color-color);\n  font-size: 20px;\n  font-family: manrope-bold;\n  white-space: normal;\n  margin-bottom: 10px;\n}\n\nion-checkbox.checkbox {\n  padding-left: 5px;\n  padding-top: 5px;\n}\n\nion-item#nft {\n  display: inline;\n  vertical-align: middle;\n}\n\nion-item#nft ion-row {\n  margin-top: 12px;\n}\n\nion-item#nft ion-row:last-child {\n  margin-top: 7px;\n}\n\nion-icon.nftIcon {\n  margin-right: 7px;\n  font-size: 30px;\n}\n\nion-label.nft {\n  font-size: 16px !important;\n}\n\nion-checkbox {\n  --size: 30px;\n}\n\nion-textarea {\n  padding-left: 2%;\n  font-size: 12px;\n  color: black !important;\n  background: var(--ion-color-inputs);\n}\n\nion-title.cardHeader {\n  padding-top: 2%;\n  font-size: 0.9rem;\n  display: inline-block;\n}\n\nion-title.cardHeader ion-icon {\n  cursor: pointer;\n}\n\nion-card-content {\n  background: var(--ion-card-color);\n}\n\nion-card-header {\n  --color: var(--ion-text-color,#000);\n  font-family: manrope-bold;\n}\n\n.input {\n  font-family: manrope-light;\n}\n\n.length {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: baseline;\n          align-items: baseline;\n  -webkit-box-pack: baseline;\n          justify-content: baseline;\n  margin-left: 20px;\n  font-family: manrope-light;\n  font-size: 12px;\n}\n\n.length ion-note {\n  font-family: manrope-light !important;\n  color: var(--ion-color-tertiary) !important;\n}\n\nion-item.createtoken-wrapper {\n  display: -webkit-box;\n  display: flex;\n  float: right;\n  -webkit-box-pack: right;\n          justify-content: right;\n  -webkit-box-align: end;\n          align-items: flex-end;\n}\n\nion-button.create-token {\n  height: 35px;\n  width: 164px;\n  float: right;\n  background-color: var(--ion-color-primary);\n  color: #fff;\n  text-transform: none;\n  font-family: manrope-bold;\n}\n\nion-button.create-token:hover {\n  --background: #346EE5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGlhc25lbXIvcHJvamVjdHMvV2FsbGV0L21vYmlsZS1hcHAtZnJvbnQtZW5kL2FwcC9zcmMvYXBwL3BhZ2VzL2NyZWF0ZS10b2tlbi9jcmVhdGUtdG9rZW4ucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9jcmVhdGUtdG9rZW4vY3JlYXRlLXRva2VuLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EseUNBQUE7RUFDQSx5QkFBQTtFQUNBLDJCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxzQkFBQTtBQ0VGOztBREFBO0VBQ0UsY0FBQTtBQ0dGOztBRERBO0VBQ0UsNkJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FDSUY7O0FERkE7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0FDS0Y7O0FESEE7RUFDRSxlQUFBO0VBQ0Esc0JBQUE7QUNNRjs7QURKQTtFQUNFLGdCQUFBO0FDT0Y7O0FETEE7RUFDRSxlQUFBO0FDUUY7O0FETkE7RUFDRSxpQkFBQTtFQUNBLGVBQUE7QUNTRjs7QURQQTtFQUNFLDBCQUFBO0FDVUY7O0FEUkE7RUFDRSxZQUFBO0FDV0Y7O0FEVEE7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLG1DQUFBO0FDWUY7O0FEVEE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtBQ1lGOztBRFZBO0VBQ0UsZUFBQTtBQ2FGOztBRFhBO0VBQ0UsaUNBQUE7QUNjRjs7QURaQTtFQUNFLG1DQUFBO0VBQ0EseUJBQUE7QUNlRjs7QURiQTtFQUNFLDBCQUFBO0FDZ0JGOztBRGRBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsMkJBQUE7VUFBQSxxQkFBQTtFQUNBLDBCQUFBO1VBQUEseUJBQUE7RUFDQSxpQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtBQ2lCRjs7QURmQTtFQUNFLHFDQUFBO0VBQ0EsMkNBQUE7QUNrQkY7O0FEaEJBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO1VBQUEsc0JBQUE7RUFDQSxzQkFBQTtVQUFBLHFCQUFBO0FDbUJGOztBRGpCQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLDBDQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQ0EseUJBQUE7QUNvQkY7O0FEbEJBO0VBQ0UscUJBQUE7QUNxQkYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jcmVhdGUtdG9rZW4vY3JlYXRlLXRva2VuLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pbnB1dCB7XG4gIGNvbG9yOiAjMDAwO1xuICBmb250LXNpemU6IDEycHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1pbnB1dHMpO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZjBmMGZhO1xuICBwYWRkaW5nLWxlZnQ6IDIlICFpbXBvcnRhbnQ7XG59XG5pb24tbGlzdCBpb24taXRlbSB7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XG59XG5pb24tbGlzdDpmaXJzdC1jaGlsZCB7XG4gIHBhZGRpbmctdG9wOjA7XG59XG5pb24taXRlbSBpb24tbGFiZWwge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWNvbG9yKTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LWZhbWlseTogbWFucm9wZS1ib2xkO1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuaW9uLWNoZWNrYm94LmNoZWNrYm94IHtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG59XG5pb24taXRlbSNuZnQge1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5pb24taXRlbSNuZnQgaW9uLXJvdyB7XG4gIG1hcmdpbi10b3A6IDEycHg7XG59XG5pb24taXRlbSNuZnQgaW9uLXJvdzpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luLXRvcDogN3B4O1xufVxuaW9uLWljb24ubmZ0SWNvbiB7XG4gIG1hcmdpbi1yaWdodDogN3B4O1xuICBmb250LXNpemU6IDMwcHg7XG59XG5pb24tbGFiZWwubmZ0IHtcbiAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XG59XG5pb24tY2hlY2tib3gge1xuICAtLXNpemU6IDMwcHg7XG59XG5pb24tdGV4dGFyZWEge1xuICBwYWRkaW5nLWxlZnQ6IDIlO1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiBibGFjayFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1pbnB1dHMpO1xufVxuXG5pb24tdGl0bGUuY2FyZEhlYWRlciB7XG4gIHBhZGRpbmctdG9wOiAyJTtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbmlvbi10aXRsZS5jYXJkSGVhZGVyIGlvbi1pY29uIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuaW9uLWNhcmQtY29udGVudCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jYXJkLWNvbG9yKTtcbn1cbmlvbi1jYXJkLWhlYWRlciB7XG4gIC0tY29sb3I6IHZhcigtLWlvbi10ZXh0LWNvbG9yLCMwMDApO1xuICBmb250LWZhbWlseTogbWFucm9wZS1ib2xkO1xufVxuLmlucHV0IHtcbiAgZm9udC1mYW1pbHk6IG1hbnJvcGUtbGlnaHQ7XG59XG4ubGVuZ3RoIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGJhc2VsaW5lO1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgZm9udC1mYW1pbHk6IG1hbnJvcGUtbGlnaHQ7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5sZW5ndGggaW9uLW5vdGUge1xuICBmb250LWZhbWlseTogbWFucm9wZS1saWdodCFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnkpIWltcG9ydGFudDtcbn1cbmlvbi1pdGVtLmNyZWF0ZXRva2VuLXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbG9hdDogcmlnaHQ7XG4gIGp1c3RpZnktY29udGVudDogcmlnaHQ7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbn1cbmlvbi1idXR0b24uY3JlYXRlLXRva2VuIHtcbiAgaGVpZ2h0OiAzNXB4O1xuICB3aWR0aDogMTY0cHg7XG4gIGZsb2F0OiByaWdodDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGZvbnQtZmFtaWx5OiBtYW5yb3BlLWJvbGQ7XG59XG5pb24tYnV0dG9uLmNyZWF0ZS10b2tlbjpob3ZlciB7XG4gIC0tYmFja2dyb3VuZDogIzM0NkVFNTtcbn0iLCJpb24taW5wdXQge1xuICBjb2xvcjogIzAwMDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItaW5wdXRzKTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2YwZjBmYTtcbiAgcGFkZGluZy1sZWZ0OiAyJSAhaW1wb3J0YW50O1xufVxuXG5pb24tbGlzdCBpb24taXRlbSB7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XG59XG5cbmlvbi1saXN0OmZpcnN0LWNoaWxkIHtcbiAgcGFkZGluZy10b3A6IDA7XG59XG5cbmlvbi1pdGVtIGlvbi1sYWJlbCB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItY29sb3IpO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBtYW5yb3BlLWJvbGQ7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbmlvbi1jaGVja2JveC5jaGVja2JveCB7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xuICBwYWRkaW5nLXRvcDogNXB4O1xufVxuXG5pb24taXRlbSNuZnQge1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbmlvbi1pdGVtI25mdCBpb24tcm93IHtcbiAgbWFyZ2luLXRvcDogMTJweDtcbn1cblxuaW9uLWl0ZW0jbmZ0IGlvbi1yb3c6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi10b3A6IDdweDtcbn1cblxuaW9uLWljb24ubmZ0SWNvbiB7XG4gIG1hcmdpbi1yaWdodDogN3B4O1xuICBmb250LXNpemU6IDMwcHg7XG59XG5cbmlvbi1sYWJlbC5uZnQge1xuICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcbn1cblxuaW9uLWNoZWNrYm94IHtcbiAgLS1zaXplOiAzMHB4O1xufVxuXG5pb24tdGV4dGFyZWEge1xuICBwYWRkaW5nLWxlZnQ6IDIlO1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItaW5wdXRzKTtcbn1cblxuaW9uLXRpdGxlLmNhcmRIZWFkZXIge1xuICBwYWRkaW5nLXRvcDogMiU7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbmlvbi10aXRsZS5jYXJkSGVhZGVyIGlvbi1pY29uIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5pb24tY2FyZC1jb250ZW50IHtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNhcmQtY29sb3IpO1xufVxuXG5pb24tY2FyZC1oZWFkZXIge1xuICAtLWNvbG9yOiB2YXIoLS1pb24tdGV4dC1jb2xvciwjMDAwKTtcbiAgZm9udC1mYW1pbHk6IG1hbnJvcGUtYm9sZDtcbn1cblxuLmlucHV0IHtcbiAgZm9udC1mYW1pbHk6IG1hbnJvcGUtbGlnaHQ7XG59XG5cbi5sZW5ndGgge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG4gIGp1c3RpZnktY29udGVudDogYmFzZWxpbmU7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBmb250LWZhbWlseTogbWFucm9wZS1saWdodDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4ubGVuZ3RoIGlvbi1ub3RlIHtcbiAgZm9udC1mYW1pbHk6IG1hbnJvcGUtbGlnaHQgIWltcG9ydGFudDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeSkgIWltcG9ydGFudDtcbn1cblxuaW9uLWl0ZW0uY3JlYXRldG9rZW4td3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsb2F0OiByaWdodDtcbiAganVzdGlmeS1jb250ZW50OiByaWdodDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xufVxuXG5pb24tYnV0dG9uLmNyZWF0ZS10b2tlbiB7XG4gIGhlaWdodDogMzVweDtcbiAgd2lkdGg6IDE2NHB4O1xuICBmbG9hdDogcmlnaHQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBmb250LWZhbWlseTogbWFucm9wZS1ib2xkO1xufVxuXG5pb24tYnV0dG9uLmNyZWF0ZS10b2tlbjpob3ZlciB7XG4gIC0tYmFja2dyb3VuZDogIzM0NkVFNTtcbn0iXX0= */"

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
/* harmony import */ var _service_tools_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../service/tools.service */ "./src/app/service/tools.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_minima_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/minima-api.service */ "./src/app/service/minima-api.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");






var CreateTokenPage = /** @class */ (function () {
    function CreateTokenPage(menu, api, formBuilder, myTools) {
        this.menu = menu;
        this.api = api;
        this.formBuilder = formBuilder;
        this.myTools = myTools;
        this.advancedFormInputsChecked = { description: false, icon: false, proof: false, nft: false };
        this.status = '';
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
        this.formInit();
    };
    CreateTokenPage.prototype.openMenu = function () {
        this.menu.open();
    };
    CreateTokenPage.prototype.giveMe50 = function () {
        var _this = this;
        this.api.giveMe50().then(function (res) {
            if (res.status === true) {
                _this.myTools.presentAlert('Gimme50', 'Successful', 'Status');
            }
            else {
                _this.myTools.presentAlert('Gimme50', res.message, 'Status');
            }
        });
    };
    CreateTokenPage.prototype.createTokenAdvanced = function () {
        var _this = this;
        this.loading = true;
        //console.log(this.tokenCreationForm.value);
        var newToken = this.tokenCreationForm.value;
        //console.log(newToken);
        try {
            this.status = 'Creating token...';
            this.create(newToken);
        }
        catch (err) {
            console.log(err);
        }
        finally {
            setTimeout(function () {
                _this.status = '';
                _this.submitBtn.disabled = false;
            }, 6000);
        }
    };
    CreateTokenPage.prototype.create = function (newToken) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var res, res;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(newToken);
                        if (!newToken.nft) return [3 /*break*/, 2];
                        this.submitBtn.disabled = true;
                        newToken.script = this.myNFT; // script for non-fungible
                        return [4 /*yield*/, this.api.createToken(newToken)];
                    case 1:
                        res = _a.sent();
                        if (res.status) {
                            this.status = 'Token created!';
                            this.myTools.presentAlert('Success', 'Token ' + this.customToken.name + ' has been created.', 'Token Creation Status');
                            this.resetForm();
                        }
                        else {
                            setTimeout(function () {
                                _this.submitBtn.disabled = false;
                            }, 500);
                            this.status = 'Token creation failed!';
                            this.myTools.presentAlert('Error', res.message, 'Token Creation Status');
                        }
                        return [3 /*break*/, 4];
                    case 2:
                        this.submitBtn.disabled = true;
                        return [4 /*yield*/, this.api.createToken(newToken)];
                    case 3:
                        res = _a.sent();
                        if (res.status) {
                            this.status = newToken.name + ' has been created!';
                            this.myTools.presentAlert('Success', 'Token ' + this.customToken.name + ' has been created.', 'Token Creation Status');
                            this.resetForm();
                        }
                        else {
                            setTimeout(function () {
                                _this.submitBtn.disabled = false;
                            }, 500);
                            this.status = newToken.name + ' failed to create!';
                            this.myTools.presentAlert('Error', res.message, 'Token Creation Status');
                        }
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    CreateTokenPage.prototype.formInit = function () {
        this.tokenCreationForm = this.formBuilder.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(255)]],
            amount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(255)]],
            description: '',
            script: '',
            icon: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern('(http(s?):)([\\/|\\.|\\w|\\s|\\-])*\.(?:jpg|png|gif)$'), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(255)]],
            proof: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern('(http(s?):)([\\/|\\.|\\w|\\s|\\-])*\.(?:txt)$'), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(255)]],
            nft: false
        });
    };
    CreateTokenPage.prototype.resetForm = function () {
        this.tokenCreationForm.reset();
        this.formInit();
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
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"] },
        { type: _service_minima_api_service__WEBPACK_IMPORTED_MODULE_3__["MinimaApiService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
        { type: _service_tools_service__WEBPACK_IMPORTED_MODULE_1__["ToolsService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('submitBtn', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonButton"])
    ], CreateTokenPage.prototype, "submitBtn", void 0);
    CreateTokenPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-create-token',
            template: __webpack_require__(/*! raw-loader!./create-token.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/create-token/create-token.page.html"),
            styles: [__webpack_require__(/*! ./create-token.page.scss */ "./src/app/pages/create-token/create-token.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"],
            _service_minima_api_service__WEBPACK_IMPORTED_MODULE_3__["MinimaApiService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            _service_tools_service__WEBPACK_IMPORTED_MODULE_1__["ToolsService"]])
    ], CreateTokenPage);
    return CreateTokenPage;
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
    }
    MinimaApiService.prototype.createToken = function (data) {
        return this.req("tokencreate name:\"" + data.name + "\" amount:\"" + data.amount + "\" description:\"" + data.description + "\" script:\"" + data.script + "\" icon:\"" + data.icon + "\" proof:\"" + data.proof + "\"");
    };
    MinimaApiService.prototype.validateTokenID = function (tokenid) {
        return this.req("tokenvalidate " + tokenid);
    };
    MinimaApiService.prototype.sendMessageTransaction = function (data) {
        //const txnidentifier = Math.floor(Math.random()*1000000000);
        var postTransaction = "send " + data.amount + " " + data.address + " " + data.tokenid + " " + " 254:[01000100]#255:[\"" + data.message + "\"]";
        // const customTXN = 
        // // Custom TXN with an ID
        // "txncreate "+txnidentifier+";"+
        // // Add state variable 1
        // "txnstate "+txnidentifier+" 254 01000100"+";"+
        // // Add User state variable 2
        // "txnstate "+txnidentifier+" 255 \""+data.message+"\""+";"+
        // // Auto fill the transaction
        // "txnauto "+txnidentifier+" "+data.amount+" "+data.address+" "+data.tokenid+";"+
        // // Post it!
        // "txnpost "+txnidentifier+";"+
        // // Clear the txn
        // "txndelete "+txnidentifier+";";
        // // send 1 0xFF 0x00 '254:0x1000#255:[This is a message]'
        return this.req(postTransaction);
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
//# sourceMappingURL=pages-create-token-create-token-module-es5.js.map