(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-create-token-create-token-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/create-token/create-token.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/create-token/create-token.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-app>\r\n<ion-header class=\"ion-no-border\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button class=\"menu-icon\"></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"large-text\">Token</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <ion-title class=\"cardHeader\">\r\n    <span id=\"cardText\">Choose A Token Type</span>\r\n  </ion-title>\r\n    <ion-list id=\"listCardOptions\">\r\n      <ion-row>\r\n        <ion-col size-xs=\"12\">\r\n          <ion-card id=\"basicCard\" class=\"tokenType borders\">\r\n            <ion-card-header>\r\n              Basic Token\r\n            </ion-card-header>\r\n            <ion-card-content>\r\n              <ion-list lines=\"none\">\r\n                <ion-item>\r\n                <ion-label>Name</ion-label>\r\n                <ion-checkbox disabled=\"true\" checked=\"true\"></ion-checkbox>\r\n                </ion-item>\r\n                <ion-item>\r\n                <ion-label>Amount</ion-label>\r\n                <ion-checkbox disabled=\"true\" checked=\"true\"></ion-checkbox>\r\n                </ion-item>\r\n              </ion-list>\r\n            </ion-card-content>\r\n            <ion-card-subtitle>\r\n              <ion-buttons>\r\n                <ion-button (click)=\"toggleBasicAnimation()\" class=\"createBtn\">\r\n                  Create Basic Token\r\n                </ion-button>\r\n              </ion-buttons>\r\n            </ion-card-subtitle>\r\n          </ion-card>\r\n        </ion-col>\r\n        <ion-col size-xs=\"12\">\r\n          <ion-card #advancedCard id=\"advancedCard\" class=\"tokenType borders\">\r\n            <ion-card-header>\r\n              Advanced Token &mdash; <ion-note style=\"font-style:oblique; font-family:manrope-light\">A Basic Token With Optional Values</ion-note>\r\n            </ion-card-header>\r\n            <ion-card-content>\r\n              <ion-list>\r\n                <ion-item lines=\"none\">\r\n                  <ion-label>Description</ion-label>\r\n                  <ion-checkbox id=\"description\" disabled=\"false\" checked=\"false\" [(ngModel)]=\"advancedFormInputsChecked.description\"></ion-checkbox>\r\n                </ion-item>\r\n                <ion-item lines=\"none\">\r\n                  <ion-label>Custom Icon URL</ion-label>\r\n                  <ion-checkbox id=\"icon\" disabled=\"false\" checked=\"false\" [(ngModel)]=\"advancedFormInputsChecked.icon\"></ion-checkbox>\r\n                </ion-item>\r\n                <ion-item lines=\"none\">\r\n                  <ion-label>Proof URL</ion-label>\r\n                  <ion-checkbox id=\"proof\" disabled=\"false\" checked=\"false\" [(ngModel)]=\"advancedFormInputsChecked.proof\"></ion-checkbox>\r\n                </ion-item>\r\n                <ion-item lines=\"none\">\r\n                  <ion-label>Non-Fungible Token</ion-label>\r\n                  <ion-checkbox id=\"nft\" disabled=\"false\" checked=\"false\" [(ngModel)]=\"advancedFormInputsChecked.nft\"></ion-checkbox>\r\n                </ion-item>\r\n              </ion-list>\r\n            </ion-card-content>\r\n\r\n            <ion-card-subtitle>\r\n              <ion-buttons>\r\n                <ion-button (click)=\"toggleAdvAnimation()\" class=\"createBtn\">\r\n                  Create Advanced Token\r\n                </ion-button>\r\n              </ion-buttons>\r\n            </ion-card-subtitle>\r\n          </ion-card>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-list>\r\n\r\n  <ion-card class=\"borders\" *ngIf=\"basic || advanced\">\r\n    <ion-card-content>\r\n    <form (ngSubmit)=\"createTokenAdvanced()\" [formGroup]=\"tokenCreationForm\" id='tokenCreationForm'>\r\n    <ion-list lines=\"none\">\r\n      <ion-item lines=\"none\">\r\n        <ion-label position=\"fixed\" class=\"medium-text\">Amount</ion-label>\r\n        <ion-input placeholder=\"amount\" type=\"number\" class=\"medium-text input\" #amountRef name=\"amount\" formControlName=\"amount\"></ion-input>\r\n      </ion-item>\r\n      <ion-item class=\"error\" lines=\"none\" *ngIf=\"amount.invalid && amount.touched\">\r\n        <ion-label position=\"fixed\"></ion-label>\r\n        <ion-note class=\"error-message\">\r\n          <ion-icon name=\"alert-circle\"></ion-icon> <span> An amount is required!</span> <br>\r\n          <span>&mdash; An amount must be numeric and greater than 0.</span> \r\n        </ion-note>\r\n      </ion-item>\r\n\r\n      <ion-item lines=\"none\">\r\n        <ion-label position=\"fixed\" class=\"medium-text\">Token Name</ion-label>\r\n        <ion-input placeholder=\"token name\" class=\"medium-text input\" #nameTextArea name=\"name\" formControlName=\"name\"></ion-input>\r\n      </ion-item>\r\n      <ion-item class=\"error\" lines=\"none\" *ngIf=\"name.invalid && name.touched\">\r\n        <ion-label position=\"fixed\"></ion-label>\r\n        <ion-note class=\"error-message\">\r\n          <ion-icon name=\"alert-circle\"></ion-icon> <span> A name is required!</span> <br>\r\n          <span>&mdash; A name must be a maximum length of 255 characters.</span> \r\n        </ion-note>\r\n      </ion-item>\r\n\r\n      <ion-item lines=\"none\" [hidden]=\"!advancedFormInputsChecked.icon\" lines=\"none\">\r\n        <ion-label position=\"fixed\" class=\"medium-text\">Icon <span style=\"font-family: manrope-light; color:var(--ion-color-primary)\">(Optional)</span></ion-label>\r\n        <ion-input class=\"medium-text input\" name=\"icon\" #iconURL formControlName=\"icon\" placeholder=\"add the URL of your icon here...\"></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item lines=\"none\" [hidden]=\"!advancedFormInputsChecked.proof\" lines=\"none\">\r\n        <ion-label position=\"fixed\" class=\"medium-text\">Proof <span style=\"font-family: manrope-light; color:var(--ion-color-primary)\">(Optional)</span></ion-label>\r\n        <ion-input  name=\"proof\" class=\"medium-text input\" #proofURL formControlName=\"proof\" placeholder=\"add to host website a text file with a token ID.\"></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item lines=\"none\" [hidden]=\"!advancedFormInputsChecked.description\" lines=\"none\">\r\n        <ion-label position=\"stacked\"  class=\"medium-text\">Description <span style=\"font-family: manrope-light; color:var(--ion-color-primary)\">(Optional)</span></ion-label>\r\n        <ion-textarea\r\n        #description \r\n        class=\"medium-text input\"\r\n        name=\"description\"\r\n        maxlength=\"255\"\r\n        [(ngModel)] = \"customToken.description\"\r\n        formControlName=\"description\"\r\n        placeholder=\"type your description here...\">\r\n        </ion-textarea>\r\n      </ion-item>\r\n      <ion-item class=\"length\" *ngIf=\"customToken.description && customToken.description.length > 0\">\r\n        <ion-note>{{ customToken.description.length+'/255'}}</ion-note>\r\n      </ion-item>\r\n\r\n      <ion-item [hidden]=\"!advancedFormInputsChecked.nft\">\r\n        <ion-label>\r\n          <ion-icon class=\"nftIcon\" src=\"assets/nft2.svg\"></ion-icon>\r\n          <ion-note>In the case you would like to spend this token, it must be spent whole.</ion-note>\r\n        </ion-label>\r\n      </ion-item>\r\n    </ion-list>      \r\n    </form>\r\n</ion-card-content>\r\n  </ion-card>\r\n  <ion-button id=\"backBtn\" style=\"display:none;\" fill=\"clear\" (click)=\"toggleBackAnimation()\" name=\"arrow-back\">\r\n    <ion-icon name=\"arrow-back\"></ion-icon>\r\n  </ion-button>\r\n</ion-content>\r\n<ion-footer id=\"footer\" style=\"display: none;\" class=\"border-t\">\r\n  <ion-toolbar>\r\n    <ion-buttons>\r\n      <ion-button #submitBtn [disabled]=\"tokenCreationForm.invalid\" expand=\"block\">\r\n      <button type=\"submit\" class=\"footer\" id=\"createTknBtn2\" form=\"tokenCreationForm\">\r\n        <ion-icon name=\"brush\" slot=\"start\"></ion-icon> Create Token\r\n      </button>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n\r\n</ion-app>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _create_token_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./create-token.page */ "./src/app/pages/create-token/create-token.page.ts");







const routes = [
    {
        path: '',
        component: _create_token_page__WEBPACK_IMPORTED_MODULE_6__["CreateTokenPage"]
    }
];
let CreateTokenPageModule = class CreateTokenPageModule {
};
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



/***/ }),

/***/ "./src/app/pages/create-token/create-token.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/create-token/create-token.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-input {\n  color: #000;\n  line-height: 16px;\n  background-color: #ffffff;\n}\n\nion-item ion-label {\n  white-space: normal;\n}\n\nion-checkbox.checkbox {\n  padding-left: 5px;\n  padding-top: 5px;\n}\n\nion-footer ion-toolbar ion-buttons ion-button {\n  width: 100%;\n  height: 47px;\n  text-transform: none;\n  font-family: manrope-bold;\n}\n\nion-note {\n  color: var(--ion-color-secondary);\n  font-family: manrope-bold;\n}\n\nbutton.footer {\n  font-size: 1rem;\n  width: 100%;\n  height: 47px;\n  text-align: center;\n  text-transform: none;\n  font-family: manrope-bold;\n  color: var(--ion-color-tertiary) !important;\n  background-color: transparent;\n  display: none;\n}\n\nbutton.footer ion-icon {\n  font-size: 1rem;\n}\n\nbutton.footer:hover {\n  cursor: pointer;\n  opacity: 0.6;\n}\n\nion-icon.nftIcon {\n  font-size: 1.9rem;\n}\n\nion-textarea {\n  padding-left: 1%;\n  color: black !important;\n  background: #ffffff;\n}\n\nion-checkbox {\n  --size: 15px;\n}\n\nion-toolbar {\n  --background: var(--ion-m-background);\n  font-family: manrope-bold;\n  color: var(--ion-color-tertiary);\n}\n\nion-toolbar ion-title {\n  font-size: 1.2rem;\n  padding-top: 5%;\n}\n\nion-toolbar ion-buttons ion-menu-button {\n  font-size: 1rem;\n  color: var(--ion-color-tertiary);\n}\n\nion-title.cardHeader {\n  padding-top: 2%;\n  font-size: 0.9rem;\n  display: inline-block;\n}\n\nion-title.cardHeader ion-icon {\n  cursor: pointer;\n}\n\nion-card-content {\n  background: var(--ion-card-color);\n}\n\nion-card-header {\n  --color: var(--ion-text-color,#000);\n  font-family: manrope-bold;\n}\n\n.input {\n  font-family: manrope-light;\n}\n\n.length {\n  position: relative;\n  float: right;\n  z-index: 2000;\n}\n\n.length ion-note {\n  font-family: manrope-light !important;\n  color: var(--ion-color-tertiary) !important;\n}\n\nion-card.tokenType ion-card-subtitle {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\nion-card.tokenType ion-card-subtitle ion-buttons ion-button {\n  text-transform: none;\n}\n\nion-card.tokenType ion-card-subtitle ion-buttons ion-button {\n  --background-hover: var(--ion-color-tertiary);\n  --color: var(--ion-color-primary);\n}\n\nion-button.createBtn:hover {\n  -webkit-transform: scale(1.01);\n          transform: scale(1.01);\n  --background-hover: none!important;\n}\n\nion-card.tokenType {\n  cursor: pointer;\n}\n\nion-card.tokenType:hover {\n  -webkit-transform: scale(1.01);\n          transform: scale(1.01);\n}\n\n#backBtn {\n  cursor: pointer;\n  font-size: 1.2rem;\n  --background-hover: var(--ion-color-tertiary);\n  --color: var(--ion-color-primary);\n}\n\n#backBtn:hover {\n  -webkit-transform: scale(1.02);\n          transform: scale(1.02);\n  --background-hover: none!important;\n  --color: var(--ion-color-secondary);\n}\n\nion-item.error {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: left;\n          align-items: left;\n  -webkit-box-pack: left;\n          justify-content: left;\n}\n\nion-item.error span {\n  color: var(--ion-color-tertiary);\n  display: inline-block;\n  vertical-align: middle;\n}\n\nion-note.error-message ion-icon {\n  color: var(--ion-color-secondary);\n  font-size: 1rem;\n  display: inline-block;\n  vertical-align: middle;\n}\n\nion-note.error-message {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGlhc25lbXIvcHJvamVjdHMvV0FMTEVUL21vYmlsZS1hcHAtZnJvbnQtZW5kL2FwcC9zcmMvYXBwL3BhZ2VzL2NyZWF0ZS10b2tlbi9jcmVhdGUtdG9rZW4ucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9jcmVhdGUtdG9rZW4vY3JlYXRlLXRva2VuLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxtQkFBQTtBQ0VGOztBREFBO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtBQ0dGOztBRERBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLHlCQUFBO0FDSUY7O0FERkE7RUFDRSxpQ0FBQTtFQUNBLHlCQUFBO0FDS0Y7O0FESEE7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EseUJBQUE7RUFDQSwyQ0FBQTtFQUNBLDZCQUFBO0VBQ0EsYUFBQTtBQ01GOztBREpBO0VBQ0UsZUFBQTtBQ09GOztBRExBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7QUNRRjs7QUROQTtFQUNFLGlCQUFBO0FDU0Y7O0FEUEE7RUFDRSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNVRjs7QURSQTtFQUNFLFlBQUE7QUNXRjs7QURUQTtFQUNFLHFDQUFBO0VBQ0EseUJBQUE7RUFDQSxnQ0FBQTtBQ1lGOztBRFhFO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0FDYUo7O0FEWEU7RUFDRSxlQUFBO0VBQ0EsZ0NBQUE7QUNhSjs7QURWQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0FDYUY7O0FEWEE7RUFDRSxlQUFBO0FDY0Y7O0FEWkE7RUFDRSxpQ0FBQTtBQ2VGOztBRGJBO0VBQ0UsbUNBQUE7RUFDQSx5QkFBQTtBQ2dCRjs7QURkQTtFQUNFLDBCQUFBO0FDaUJGOztBRGZBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQ2tCRjs7QURoQkE7RUFDRSxxQ0FBQTtFQUNBLDJDQUFBO0FDbUJGOztBRGhCQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0FDbUJGOztBRGpCQTtFQUNFLG9CQUFBO0FDb0JGOztBRGxCQTtFQUNFLDZDQUFBO0VBQ0EsaUNBQUE7QUNxQkY7O0FEbkJBO0VBQ0UsOEJBQUE7VUFBQSxzQkFBQTtFQUNBLGtDQUFBO0FDc0JGOztBRHBCQTtFQUNFLGVBQUE7QUN1QkY7O0FEckJBO0VBQ0UsOEJBQUE7VUFBQSxzQkFBQTtBQ3dCRjs7QUR0QkE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSw2Q0FBQTtFQUNBLGlDQUFBO0FDeUJGOztBRHZCQTtFQUNFLDhCQUFBO1VBQUEsc0JBQUE7RUFDQSxrQ0FBQTtFQUNBLG1DQUFBO0FDMEJGOztBRHhCQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHVCQUFBO1VBQUEsaUJBQUE7RUFDQSxzQkFBQTtVQUFBLHFCQUFBO0FDMkJGOztBRHpCQTtFQUNFLGdDQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtBQzRCRjs7QUQxQkE7RUFDRSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0FDNkJGOztBRDNCQTtFQUNFLGNBQUE7QUM4QkYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jcmVhdGUtdG9rZW4vY3JlYXRlLXRva2VuLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pbnB1dCB7XHJcbiAgY29sb3I6ICMwMDA7XHJcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxufVxyXG5pb24taXRlbSBpb24tbGFiZWwge1xyXG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbn1cclxuaW9uLWNoZWNrYm94LmNoZWNrYm94IHtcclxuICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICBwYWRkaW5nLXRvcDogNXB4O1xyXG59XHJcbmlvbi1mb290ZXIgaW9uLXRvb2xiYXIgaW9uLWJ1dHRvbnMgaW9uLWJ1dHRvbiB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA0N3B4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gIGZvbnQtZmFtaWx5OiBtYW5yb3BlLWJvbGQ7XHJcbn1cclxuaW9uLW5vdGUge1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcclxuICBmb250LWZhbWlseTogbWFucm9wZS1ib2xkO1xyXG59XHJcbmJ1dHRvbi5mb290ZXIge1xyXG4gIGZvbnQtc2l6ZTogMS4wcmVtO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNDdweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgZm9udC1mYW1pbHk6IG1hbnJvcGUtYm9sZDtcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5KSFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5idXR0b24uZm9vdGVyIGlvbi1pY29uIHtcclxuICBmb250LXNpemU6IDEuMHJlbTtcclxufVxyXG5idXR0b24uZm9vdGVyOmhvdmVyIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgb3BhY2l0eTogMC42O1xyXG59XHJcbmlvbi1pY29uLm5mdEljb24ge1xyXG4gIGZvbnQtc2l6ZTogMS45cmVtO1xyXG59XHJcbmlvbi10ZXh0YXJlYSB7XHJcbiAgcGFkZGluZy1sZWZ0OiAxJTtcclxuICBjb2xvcjogYmxhY2shaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbn1cclxuaW9uLWNoZWNrYm94IHtcclxuICAtLXNpemU6IDE1cHg7XHJcbn1cclxuaW9uLXRvb2xiYXIge1xyXG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLW0tYmFja2dyb3VuZCk7XHJcbiAgZm9udC1mYW1pbHk6IG1hbnJvcGUtYm9sZDtcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5KTtcclxuICBpb24tdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICBwYWRkaW5nLXRvcDogNSU7XHJcbiAgfVxyXG4gIGlvbi1idXR0b25zIGlvbi1tZW51LWJ1dHRvbiB7XHJcbiAgICBmb250LXNpemU6IDEuMHJlbTtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnkpO1xyXG4gIH1cclxufVxyXG5pb24tdGl0bGUuY2FyZEhlYWRlciB7XHJcbiAgcGFkZGluZy10b3A6IDIlO1xyXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5pb24tdGl0bGUuY2FyZEhlYWRlciBpb24taWNvbiB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbmlvbi1jYXJkLWNvbnRlbnQge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jYXJkLWNvbG9yKTtcclxufVxyXG5pb24tY2FyZC1oZWFkZXIge1xyXG4gIC0tY29sb3I6IHZhcigtLWlvbi10ZXh0LWNvbG9yLCMwMDApO1xyXG4gIGZvbnQtZmFtaWx5OiBtYW5yb3BlLWJvbGQ7XHJcbn1cclxuLmlucHV0IHtcclxuICBmb250LWZhbWlseTogbWFucm9wZS1saWdodDtcclxufVxyXG4ubGVuZ3RoIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIHotaW5kZXg6IDIwMDA7XHJcbn1cclxuLmxlbmd0aCBpb24tbm90ZSB7XHJcbiAgZm9udC1mYW1pbHk6IG1hbnJvcGUtbGlnaHQhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnkpIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLWNhcmQudG9rZW5UeXBlIGlvbi1jYXJkLXN1YnRpdGxlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuaW9uLWNhcmQudG9rZW5UeXBlIGlvbi1jYXJkLXN1YnRpdGxlIGlvbi1idXR0b25zIGlvbi1idXR0b24ge1xyXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG59XHJcbmlvbi1jYXJkLnRva2VuVHlwZSBpb24tY2FyZC1zdWJ0aXRsZSBpb24tYnV0dG9ucyBpb24tYnV0dG9uIHtcclxuICAtLWJhY2tncm91bmQtaG92ZXI6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeSk7XHJcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG59XHJcbmlvbi1idXR0b24uY3JlYXRlQnRuOmhvdmVyIHtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDEpO1xyXG4gIC0tYmFja2dyb3VuZC1ob3Zlcjogbm9uZSFpbXBvcnRhbnQ7XHJcbn1cclxuaW9uLWNhcmQudG9rZW5UeXBlIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuaW9uLWNhcmQudG9rZW5UeXBlOmhvdmVyIHtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDEpO1xyXG59XHJcbiNiYWNrQnRuIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnkpO1xyXG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxufVxyXG4jYmFja0J0bjpob3ZlciB7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjAyKTtcclxuICAtLWJhY2tncm91bmQtaG92ZXI6IG5vbmUhaW1wb3J0YW50O1xyXG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xyXG59XHJcbmlvbi1pdGVtLmVycm9yIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBsZWZ0O1xyXG4gIGp1c3RpZnktY29udGVudDogbGVmdDtcclxufVxyXG5pb24taXRlbS5lcnJvciBzcGFuIHtcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5KTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG5pb24tbm90ZS5lcnJvci1tZXNzYWdlIGlvbi1pY29uIHtcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XHJcbiAgZm9udC1zaXplOiAxLjByZW07XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuaW9uLW5vdGUuZXJyb3ItbWVzc2FnZSB7IFxyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59IiwiaW9uLWlucHV0IHtcbiAgY29sb3I6ICMwMDA7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xufVxuXG5pb24taXRlbSBpb24tbGFiZWwge1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xufVxuXG5pb24tY2hlY2tib3guY2hlY2tib3gge1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgcGFkZGluZy10b3A6IDVweDtcbn1cblxuaW9uLWZvb3RlciBpb24tdG9vbGJhciBpb24tYnV0dG9ucyBpb24tYnV0dG9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDdweDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGZvbnQtZmFtaWx5OiBtYW5yb3BlLWJvbGQ7XG59XG5cbmlvbi1ub3RlIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICBmb250LWZhbWlseTogbWFucm9wZS1ib2xkO1xufVxuXG5idXR0b24uZm9vdGVyIHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0N3B4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBmb250LWZhbWlseTogbWFucm9wZS1ib2xkO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5KSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuYnV0dG9uLmZvb3RlciBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cblxuYnV0dG9uLmZvb3Rlcjpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3BhY2l0eTogMC42O1xufVxuXG5pb24taWNvbi5uZnRJY29uIHtcbiAgZm9udC1zaXplOiAxLjlyZW07XG59XG5cbmlvbi10ZXh0YXJlYSB7XG4gIHBhZGRpbmctbGVmdDogMSU7XG4gIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xufVxuXG5pb24tY2hlY2tib3gge1xuICAtLXNpemU6IDE1cHg7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tbS1iYWNrZ3JvdW5kKTtcbiAgZm9udC1mYW1pbHk6IG1hbnJvcGUtYm9sZDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeSk7XG59XG5pb24tdG9vbGJhciBpb24tdGl0bGUge1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgcGFkZGluZy10b3A6IDUlO1xufVxuaW9uLXRvb2xiYXIgaW9uLWJ1dHRvbnMgaW9uLW1lbnUtYnV0dG9uIHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5KTtcbn1cblxuaW9uLXRpdGxlLmNhcmRIZWFkZXIge1xuICBwYWRkaW5nLXRvcDogMiU7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbmlvbi10aXRsZS5jYXJkSGVhZGVyIGlvbi1pY29uIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5pb24tY2FyZC1jb250ZW50IHtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNhcmQtY29sb3IpO1xufVxuXG5pb24tY2FyZC1oZWFkZXIge1xuICAtLWNvbG9yOiB2YXIoLS1pb24tdGV4dC1jb2xvciwjMDAwKTtcbiAgZm9udC1mYW1pbHk6IG1hbnJvcGUtYm9sZDtcbn1cblxuLmlucHV0IHtcbiAgZm9udC1mYW1pbHk6IG1hbnJvcGUtbGlnaHQ7XG59XG5cbi5sZW5ndGgge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZsb2F0OiByaWdodDtcbiAgei1pbmRleDogMjAwMDtcbn1cblxuLmxlbmd0aCBpb24tbm90ZSB7XG4gIGZvbnQtZmFtaWx5OiBtYW5yb3BlLWxpZ2h0ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnkpICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1jYXJkLnRva2VuVHlwZSBpb24tY2FyZC1zdWJ0aXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG5pb24tY2FyZC50b2tlblR5cGUgaW9uLWNhcmQtc3VidGl0bGUgaW9uLWJ1dHRvbnMgaW9uLWJ1dHRvbiB7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xufVxuXG5pb24tY2FyZC50b2tlblR5cGUgaW9uLWNhcmQtc3VidGl0bGUgaW9uLWJ1dHRvbnMgaW9uLWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5KTtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG5pb24tYnV0dG9uLmNyZWF0ZUJ0bjpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wMSk7XG4gIC0tYmFja2dyb3VuZC1ob3Zlcjogbm9uZSFpbXBvcnRhbnQ7XG59XG5cbmlvbi1jYXJkLnRva2VuVHlwZSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuaW9uLWNhcmQudG9rZW5UeXBlOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjAxKTtcbn1cblxuI2JhY2tCdG4ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAtLWJhY2tncm91bmQtaG92ZXI6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeSk7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuI2JhY2tCdG46aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDIpO1xuICAtLWJhY2tncm91bmQtaG92ZXI6IG5vbmUhaW1wb3J0YW50O1xuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbn1cblxuaW9uLWl0ZW0uZXJyb3Ige1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogbGVmdDtcbiAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xufVxuXG5pb24taXRlbS5lcnJvciBzcGFuIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeSk7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuaW9uLW5vdGUuZXJyb3ItbWVzc2FnZSBpb24taWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbmlvbi1ub3RlLmVycm9yLW1lc3NhZ2Uge1xuICBkaXNwbGF5OiBibG9jaztcbn0iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_minima_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/minima-api.service */ "./src/app/service/minima-api.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");





let CreateTokenPage = class CreateTokenPage {
    constructor(api, formBuilder, alertController, toastController) {
        this.api = api;
        this.formBuilder = formBuilder;
        this.alertController = alertController;
        this.toastController = toastController;
        this.advancedFormInputsChecked = { description: false, icon: false, proof: false, nft: false };
        this.basic = false;
        this.advanced = false;
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
    ionViewDidEnter() { }
    ngOnInit() {
        this.tokenCreationForm = this.formBuilder.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(255)]],
            amount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(255)]],
            description: '',
            script: '',
            icon: '',
            proof: ''
        });
    }
    toggleBasicAnimation() {
        this.advancedFormInputsChecked.description = false;
        this.advancedFormInputsChecked.icon = false;
        this.advancedFormInputsChecked.nft = false;
        this.advancedFormInputsChecked.proof = false;
        this.basic = true;
        document.getElementById('listCardOptions').style.display = 'none';
        document.getElementById('footer').style.display = 'block';
        document.getElementById('createTknBtn2').style.display = 'block';
        document.getElementById('cardText').innerHTML = 'Enter Your Token Details';
        document.getElementById('backBtn').style.display = 'block';
    }
    toggleAdvAnimation() {
        this.advanced = false;
        if (this.advancedFormInputsChecked.description === false && this.advancedFormInputsChecked.icon === false
            && this.advancedFormInputsChecked.nft === false && this.advancedFormInputsChecked.proof === false) {
            this.advanced = false;
            this.presentAlert('Advanced Token Creator', 'You have to pick an advanced token feature before proceeding.', 'Error');
        }
        else {
            this.advanced = true;
            document.getElementById('listCardOptions').style.display = 'none';
            document.getElementById('footer').style.display = 'block';
            document.getElementById('createTknBtn2').style.display = 'block';
            document.getElementById('cardText').innerHTML = 'Enter Your Token Details';
            document.getElementById('backBtn').style.display = 'block';
        }
    }
    toggleBackAnimation() {
        this.submitBtn.disabled = false;
        document.getElementById('backBtn').style.display = 'none';
        this.advanced = false;
        this.basic = false;
        this.resetForm();
        document.getElementById('cardText').innerHTML = 'Choose A Token Type';
        document.getElementById('listCardOptions').style.display = 'block';
        document.getElementById('tokenCreationForm').style.display = 'none';
        document.getElementById('footer').style.display = 'none';
        document.getElementById('createTknBtn2').style.display = 'none';
    }
    presentToast(msg, type) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
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
            });
            toast.present();
        });
    }
    presentAlert(hdr, message, subtitle) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'alertContainer',
                header: hdr,
                subHeader: subtitle,
                message: message,
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    createTokenAdvanced() {
        this.loading = true;
        const newToken = this.tokenCreationForm.value;
        if (this.advancedFormInputsChecked.nft) {
            this.submitBtn.disabled = true;
            newToken.script = this.myNFT; // script for non-fungible
            this.api.createToken(newToken).then((res) => {
                if (res.status) {
                    this.presentAlert('Success', 'Token ' + this.customToken.name + ' has been created.', 'Token Creation Status');
                    this.toggleBackAnimation();
                }
                else {
                    setTimeout(() => {
                        this.submitBtn.disabled = false;
                    }, 500);
                    this.presentAlert('Something\'s wrong!', res.message, 'Token Creation Status');
                }
            });
        }
        else {
            this.submitBtn.disabled = true;
            newToken.script = 'RETURN TRUE'; // default script to spend token
            this.api.createToken(newToken).then((res) => {
                if (res.status) {
                    this.presentAlert('Success', 'Token ' + this.customToken.name + ' has been created.', 'Token Creation Status');
                    this.toggleBackAnimation();
                }
                else {
                    setTimeout(() => {
                        this.submitBtn.disabled = false;
                    }, 500);
                    this.presentAlert('Something\'s wrong!', res.message, 'Token Creation Status');
                }
            });
        }
    }
    resetForm() {
        this.tokenCreationForm.reset();
    }
    get name() {
        return this.tokenCreationForm.get('name');
    }
    get descr() {
        return this.tokenCreationForm.get('description');
    }
    get icon() {
        return this.tokenCreationForm.get('icon');
    }
    get proof() {
        return this.tokenCreationForm.get('proof');
    }
    get amount() {
        return this.tokenCreationForm.get('amount');
    }
};
CreateTokenPage.ctorParameters = () => [
    { type: _service_minima_api_service__WEBPACK_IMPORTED_MODULE_2__["MinimaApiService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] }
];
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



/***/ })

}]);
//# sourceMappingURL=pages-create-token-create-token-module-es2015.js.map