(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-create-token-create-token-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/create-token/create-token.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/create-token/create-token.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-app>\n<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button class=\"menu-icon\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title class=\"large-text\">Token</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-title class=\"cardHeader\">\n    <span id=\"cardText\">Choose A Token Type</span>\n  </ion-title>\n    <ion-list id=\"listCardOptions\">\n      <ion-row>\n        <ion-col size-xs=\"12\">\n          <ion-card id=\"basicCard\" class=\"tokenType borders\">\n            <ion-card-header>\n              Basic Token\n            </ion-card-header>\n            <ion-card-content>\n              <ion-list lines=\"none\">\n                <ion-item>\n                <ion-label>Name</ion-label>\n                <ion-checkbox disabled=\"true\" checked=\"true\"></ion-checkbox>\n                </ion-item>\n                <ion-item>\n                <ion-label>Amount</ion-label>\n                <ion-checkbox disabled=\"true\" checked=\"true\"></ion-checkbox>\n                </ion-item>\n              </ion-list>\n            </ion-card-content>\n            <ion-card-subtitle>\n              <ion-buttons>\n                <ion-button (click)=\"toggleBasicAnimation()\" class=\"createBtn\">\n                  Create Basic Token\n                </ion-button>\n              </ion-buttons>\n            </ion-card-subtitle>\n          </ion-card>\n        </ion-col>\n        <ion-col size-xs=\"12\">\n          <ion-card #advancedCard id=\"advancedCard\" class=\"tokenType borders\">\n            <ion-card-header>\n              Advanced Token &mdash; <ion-note style=\"font-style:oblique; font-family:manrope-light\">A Basic Token With Optional Values</ion-note>\n            </ion-card-header>\n            <ion-card-content>\n              <ion-list>\n                <ion-item lines=\"none\">\n                  <ion-label>Description</ion-label>\n                  <ion-checkbox id=\"description\" disabled=\"false\" checked=\"false\" [(ngModel)]=\"advancedFormInputsChecked.description\"></ion-checkbox>\n                </ion-item>\n                <ion-item lines=\"none\">\n                  <ion-label>Custom Icon URL</ion-label>\n                  <ion-checkbox id=\"icon\" disabled=\"false\" checked=\"false\" [(ngModel)]=\"advancedFormInputsChecked.icon\"></ion-checkbox>\n                </ion-item>\n                <ion-item lines=\"none\">\n                  <ion-label>Proof URL</ion-label>\n                  <ion-checkbox id=\"proof\" disabled=\"false\" checked=\"false\" [(ngModel)]=\"advancedFormInputsChecked.proof\"></ion-checkbox>\n                </ion-item>\n                <ion-item lines=\"none\">\n                  <ion-label>Non-Fungible Token</ion-label>\n                  <ion-checkbox id=\"nft\" disabled=\"false\" checked=\"false\" [(ngModel)]=\"advancedFormInputsChecked.nft\"></ion-checkbox>\n                </ion-item>\n              </ion-list>\n            </ion-card-content>\n\n            <ion-card-subtitle>\n              <ion-buttons>\n                <ion-button (click)=\"toggleAdvAnimation()\" class=\"createBtn\">\n                  Create Advanced Token\n                </ion-button>\n              </ion-buttons>\n            </ion-card-subtitle>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n    </ion-list>\n\n  <ion-card class=\"borders\" *ngIf=\"basic || advanced\">\n    <ion-card-content>\n    <form (ngSubmit)=\"createTokenAdvanced()\" [formGroup]=\"tokenCreationForm\" id='tokenCreationForm'>\n    <ion-list lines=\"none\">\n      <ion-item lines=\"none\">\n        <ion-label position=\"fixed\" class=\"medium-text\">Amount</ion-label>\n        <ion-input placeholder=\"amount\" type=\"number\" class=\"medium-text input\" #amountRef name=\"amount\" formControlName=\"amount\"></ion-input>\n      </ion-item>\n      <ion-item class=\"error\" lines=\"none\" *ngIf=\"amount.invalid && amount.touched\">\n        <ion-label position=\"fixed\"></ion-label>\n        <ion-note class=\"error-message\">\n          <ion-icon name=\"alert-circle\"></ion-icon> <span> An amount is required!</span> <br>\n          <span>&mdash; An amount must be numeric and greater than 0.</span> \n        </ion-note>\n      </ion-item>\n\n      <ion-item lines=\"none\">\n        <ion-label position=\"fixed\" class=\"medium-text\">Token Name</ion-label>\n        <ion-input placeholder=\"token name\" class=\"medium-text input\" #nameTextArea name=\"name\" formControlName=\"name\"></ion-input>\n      </ion-item>\n      <ion-item class=\"error\" lines=\"none\" *ngIf=\"name.invalid && name.touched\">\n        <ion-label position=\"fixed\"></ion-label>\n        <ion-note class=\"error-message\">\n          <ion-icon name=\"alert-circle\"></ion-icon> <span> A name is required!</span> <br>\n          <span>&mdash; A name must be a maximum length of 255 characters.</span> \n        </ion-note>\n      </ion-item>\n\n      <ion-item lines=\"none\" [hidden]=\"!advancedFormInputsChecked.icon\" lines=\"none\">\n        <ion-label position=\"fixed\" class=\"medium-text\">Icon <span style=\"font-family: manrope-light; color:var(--ion-color-primary)\">(Optional)</span></ion-label>\n        <ion-input class=\"medium-text input\" name=\"icon\" #iconURL formControlName=\"icon\" placeholder=\"add the URL of your icon here...\"></ion-input>\n      </ion-item>\n\n      <ion-item lines=\"none\" [hidden]=\"!advancedFormInputsChecked.proof\" lines=\"none\">\n        <ion-label position=\"fixed\" class=\"medium-text\">Proof <span style=\"font-family: manrope-light; color:var(--ion-color-primary)\">(Optional)</span></ion-label>\n        <ion-input  name=\"proof\" class=\"medium-text input\" #proofURL formControlName=\"proof\" placeholder=\"add to host website a text file with a token ID.\"></ion-input>\n      </ion-item>\n\n      <ion-item lines=\"none\" [hidden]=\"!advancedFormInputsChecked.description\" lines=\"none\">\n        <ion-label position=\"stacked\"  class=\"medium-text\">Description <span style=\"font-family: manrope-light; color:var(--ion-color-primary)\">(Optional)</span></ion-label>\n        <ion-textarea\n        #description \n        class=\"medium-text input\"\n        name=\"description\"\n        maxlength=\"255\"\n        [(ngModel)] = \"customToken.description\"\n        formControlName=\"description\"\n        placeholder=\"type your description here...\">\n        </ion-textarea>\n      </ion-item>\n      <ion-item class=\"length\" *ngIf=\"customToken.description && customToken.description.length > 0\">\n        <ion-note>{{ customToken.description.length+'/255'}}</ion-note>\n      </ion-item>\n\n      <ion-item [hidden]=\"!advancedFormInputsChecked.nft\">\n        <ion-label>\n          <ion-icon class=\"nftIcon\" src=\"assets/nft2.svg\"></ion-icon>\n          <ion-note>In the case you would like to spend this token, it must be spent whole.</ion-note>\n        </ion-label>\n      </ion-item>\n    </ion-list>      \n    </form>\n</ion-card-content>\n  </ion-card>\n  <ion-button id=\"backBtn\" style=\"display:none;\" fill=\"clear\" (click)=\"toggleBackAnimation()\" name=\"arrow-back\">\n    <ion-icon name=\"arrow-back\"></ion-icon>\n  </ion-button>\n</ion-content>\n<ion-footer id=\"footer\" style=\"display: none;\" class=\"border-t\">\n  <ion-toolbar>\n    <ion-buttons>\n      <ion-button #submitBtn [disabled]=\"tokenCreationForm.invalid\" expand=\"block\">\n      <button type=\"submit\" class=\"footer\" id=\"createTknBtn2\" form=\"tokenCreationForm\">\n        <ion-icon name=\"brush\" slot=\"start\"></ion-icon> Create Token\n      </button>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer>\n\n</ion-app>"

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

module.exports = "ion-input {\n  color: #000;\n  line-height: 16px;\n  background-color: #ffffff;\n}\n\nion-item ion-label {\n  white-space: normal;\n}\n\nion-checkbox.checkbox {\n  padding-left: 5px;\n  padding-top: 5px;\n}\n\nion-footer ion-toolbar ion-buttons ion-button {\n  width: 100%;\n  height: 47px;\n  text-transform: none;\n  font-family: manrope-bold;\n}\n\nion-note {\n  color: var(--ion-color-secondary);\n  font-family: manrope-bold;\n}\n\nbutton.footer {\n  font-size: 1rem;\n  width: 100%;\n  height: 47px;\n  text-align: center;\n  text-transform: none;\n  font-family: manrope-bold;\n  color: var(--ion-color-tertiary) !important;\n  background-color: transparent;\n  display: none;\n}\n\nbutton.footer ion-icon {\n  font-size: 1rem;\n}\n\nbutton.footer:hover {\n  cursor: pointer;\n  opacity: 0.6;\n}\n\nion-icon.nftIcon {\n  font-size: 1.9rem;\n}\n\nion-textarea {\n  padding-left: 1%;\n  color: black !important;\n  background: #ffffff;\n}\n\nion-checkbox {\n  --size: 15px;\n}\n\nion-toolbar {\n  --background: var(--ion-m-background);\n  font-family: manrope-bold;\n  color: var(--ion-color-tertiary);\n}\n\nion-toolbar ion-title {\n  font-size: 1.2rem;\n  padding-top: 5%;\n}\n\nion-toolbar ion-buttons ion-menu-button {\n  font-size: 1rem;\n  color: var(--ion-color-tertiary);\n}\n\nion-title.cardHeader {\n  padding-top: 2%;\n  font-size: 0.9rem;\n  display: inline-block;\n}\n\nion-title.cardHeader ion-icon {\n  cursor: pointer;\n}\n\nion-card-content {\n  background: var(--ion-card-color);\n}\n\nion-card-header {\n  --color: var(--ion-text-color,#000);\n  font-family: manrope-bold;\n}\n\n.input {\n  font-family: manrope-light;\n}\n\n.length {\n  position: relative;\n  float: right;\n  z-index: 2000;\n}\n\n.length ion-note {\n  font-family: manrope-light !important;\n  color: var(--ion-color-tertiary) !important;\n}\n\nion-card.tokenType ion-card-subtitle {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\nion-card.tokenType ion-card-subtitle ion-buttons ion-button {\n  text-transform: none;\n}\n\nion-card.tokenType ion-card-subtitle ion-buttons ion-button {\n  --background-hover: var(--ion-color-tertiary);\n  --color: var(--ion-color-primary);\n}\n\nion-button.createBtn:hover {\n  -webkit-transform: scale(1.01);\n          transform: scale(1.01);\n  --background-hover: none!important;\n}\n\nion-card.tokenType {\n  cursor: pointer;\n}\n\nion-card.tokenType:hover {\n  -webkit-transform: scale(1.01);\n          transform: scale(1.01);\n}\n\n#backBtn {\n  cursor: pointer;\n  font-size: 1.2rem;\n  --background-hover: var(--ion-color-tertiary);\n  --color: var(--ion-color-primary);\n}\n\n#backBtn:hover {\n  -webkit-transform: scale(1.02);\n          transform: scale(1.02);\n  --background-hover: none!important;\n  --color: var(--ion-color-secondary);\n}\n\nion-item.error {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: left;\n          align-items: left;\n  -webkit-box-pack: left;\n          justify-content: left;\n}\n\nion-item.error span {\n  color: var(--ion-color-tertiary);\n  display: inline-block;\n  vertical-align: middle;\n}\n\nion-note.error-message ion-icon {\n  color: var(--ion-color-secondary);\n  font-size: 1rem;\n  display: inline-block;\n  vertical-align: middle;\n}\n\nion-note.error-message {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGlhc25lbXIvcHJvamVjdHMvV2FsbGV0L21vYmlsZS1hcHAtZnJvbnQtZW5kL2FwcC9zcmMvYXBwL3BhZ2VzL2NyZWF0ZS10b2tlbi9jcmVhdGUtdG9rZW4ucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9jcmVhdGUtdG9rZW4vY3JlYXRlLXRva2VuLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxtQkFBQTtBQ0VGOztBREFBO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtBQ0dGOztBRERBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLHlCQUFBO0FDSUY7O0FERkE7RUFDRSxpQ0FBQTtFQUNBLHlCQUFBO0FDS0Y7O0FESEE7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EseUJBQUE7RUFDQSwyQ0FBQTtFQUNBLDZCQUFBO0VBQ0EsYUFBQTtBQ01GOztBREpBO0VBQ0UsZUFBQTtBQ09GOztBRExBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7QUNRRjs7QUROQTtFQUNFLGlCQUFBO0FDU0Y7O0FEUEE7RUFDRSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNVRjs7QURSQTtFQUNFLFlBQUE7QUNXRjs7QURUQTtFQUNFLHFDQUFBO0VBQ0EseUJBQUE7RUFDQSxnQ0FBQTtBQ1lGOztBRFhFO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0FDYUo7O0FEWEU7RUFDRSxlQUFBO0VBQ0EsZ0NBQUE7QUNhSjs7QURWQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0FDYUY7O0FEWEE7RUFDRSxlQUFBO0FDY0Y7O0FEWkE7RUFDRSxpQ0FBQTtBQ2VGOztBRGJBO0VBQ0UsbUNBQUE7RUFDQSx5QkFBQTtBQ2dCRjs7QURkQTtFQUNFLDBCQUFBO0FDaUJGOztBRGZBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQ2tCRjs7QURoQkE7RUFDRSxxQ0FBQTtFQUNBLDJDQUFBO0FDbUJGOztBRGhCQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0FDbUJGOztBRGpCQTtFQUNFLG9CQUFBO0FDb0JGOztBRGxCQTtFQUNFLDZDQUFBO0VBQ0EsaUNBQUE7QUNxQkY7O0FEbkJBO0VBQ0UsOEJBQUE7VUFBQSxzQkFBQTtFQUNBLGtDQUFBO0FDc0JGOztBRHBCQTtFQUNFLGVBQUE7QUN1QkY7O0FEckJBO0VBQ0UsOEJBQUE7VUFBQSxzQkFBQTtBQ3dCRjs7QUR0QkE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSw2Q0FBQTtFQUNBLGlDQUFBO0FDeUJGOztBRHZCQTtFQUNFLDhCQUFBO1VBQUEsc0JBQUE7RUFDQSxrQ0FBQTtFQUNBLG1DQUFBO0FDMEJGOztBRHhCQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHVCQUFBO1VBQUEsaUJBQUE7RUFDQSxzQkFBQTtVQUFBLHFCQUFBO0FDMkJGOztBRHpCQTtFQUNFLGdDQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtBQzRCRjs7QUQxQkE7RUFDRSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0FDNkJGOztBRDNCQTtFQUNFLGNBQUE7QUM4QkYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jcmVhdGUtdG9rZW4vY3JlYXRlLXRva2VuLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pbnB1dCB7XG4gIGNvbG9yOiAjMDAwO1xuICBsaW5lLWhlaWdodDogMTZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbn1cbmlvbi1pdGVtIGlvbi1sYWJlbCB7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG59XG5pb24tY2hlY2tib3guY2hlY2tib3gge1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgcGFkZGluZy10b3A6IDVweDtcbn1cbmlvbi1mb290ZXIgaW9uLXRvb2xiYXIgaW9uLWJ1dHRvbnMgaW9uLWJ1dHRvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQ3cHg7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBmb250LWZhbWlseTogbWFucm9wZS1ib2xkO1xufVxuaW9uLW5vdGUge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gIGZvbnQtZmFtaWx5OiBtYW5yb3BlLWJvbGQ7XG59XG5idXR0b24uZm9vdGVyIHtcbiAgZm9udC1zaXplOiAxLjByZW07XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQ3cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGZvbnQtZmFtaWx5OiBtYW5yb3BlLWJvbGQ7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnkpIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5idXR0b24uZm9vdGVyIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAxLjByZW07XG59XG5idXR0b24uZm9vdGVyOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBvcGFjaXR5OiAwLjY7XG59XG5pb24taWNvbi5uZnRJY29uIHtcbiAgZm9udC1zaXplOiAxLjlyZW07XG59XG5pb24tdGV4dGFyZWEge1xuICBwYWRkaW5nLWxlZnQ6IDElO1xuICBjb2xvcjogYmxhY2shaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xufVxuaW9uLWNoZWNrYm94IHtcbiAgLS1zaXplOiAxNXB4O1xufVxuaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1tLWJhY2tncm91bmQpO1xuICBmb250LWZhbWlseTogbWFucm9wZS1ib2xkO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5KTtcbiAgaW9uLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICBwYWRkaW5nLXRvcDogNSU7XG4gIH1cbiAgaW9uLWJ1dHRvbnMgaW9uLW1lbnUtYnV0dG9uIHtcbiAgICBmb250LXNpemU6IDEuMHJlbTtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5KTtcbiAgfVxufVxuaW9uLXRpdGxlLmNhcmRIZWFkZXIge1xuICBwYWRkaW5nLXRvcDogMiU7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5pb24tdGl0bGUuY2FyZEhlYWRlciBpb24taWNvbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbmlvbi1jYXJkLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY2FyZC1jb2xvcik7XG59XG5pb24tY2FyZC1oZWFkZXIge1xuICAtLWNvbG9yOiB2YXIoLS1pb24tdGV4dC1jb2xvciwjMDAwKTtcbiAgZm9udC1mYW1pbHk6IG1hbnJvcGUtYm9sZDtcbn1cbi5pbnB1dCB7XG4gIGZvbnQtZmFtaWx5OiBtYW5yb3BlLWxpZ2h0O1xufVxuLmxlbmd0aCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZmxvYXQ6IHJpZ2h0O1xuICB6LWluZGV4OiAyMDAwO1xufVxuLmxlbmd0aCBpb24tbm90ZSB7XG4gIGZvbnQtZmFtaWx5OiBtYW5yb3BlLWxpZ2h0IWltcG9ydGFudDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeSkhaW1wb3J0YW50O1xufVxuXG5pb24tY2FyZC50b2tlblR5cGUgaW9uLWNhcmQtc3VidGl0bGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbmlvbi1jYXJkLnRva2VuVHlwZSBpb24tY2FyZC1zdWJ0aXRsZSBpb24tYnV0dG9ucyBpb24tYnV0dG9uIHtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG59XG5pb24tY2FyZC50b2tlblR5cGUgaW9uLWNhcmQtc3VidGl0bGUgaW9uLWJ1dHRvbnMgaW9uLWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5KTtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuaW9uLWJ1dHRvbi5jcmVhdGVCdG46aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDEpO1xuICAtLWJhY2tncm91bmQtaG92ZXI6IG5vbmUhaW1wb3J0YW50O1xufVxuaW9uLWNhcmQudG9rZW5UeXBlIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuaW9uLWNhcmQudG9rZW5UeXBlOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjAxKTtcbn1cbiNiYWNrQnRuIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnkpO1xuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG4jYmFja0J0bjpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wMik7XG4gIC0tYmFja2dyb3VuZC1ob3Zlcjogbm9uZSFpbXBvcnRhbnQ7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xufVxuaW9uLWl0ZW0uZXJyb3Ige1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogbGVmdDtcbiAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xufVxuaW9uLWl0ZW0uZXJyb3Igc3BhbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnkpO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5pb24tbm90ZS5lcnJvci1tZXNzYWdlIGlvbi1pY29uIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICBmb250LXNpemU6IDEuMHJlbTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuaW9uLW5vdGUuZXJyb3ItbWVzc2FnZSB7IFxuICBkaXNwbGF5OiBibG9jaztcbn0iLCJpb24taW5wdXQge1xuICBjb2xvcjogIzAwMDtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG59XG5cbmlvbi1pdGVtIGlvbi1sYWJlbCB7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG59XG5cbmlvbi1jaGVja2JveC5jaGVja2JveCB7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xuICBwYWRkaW5nLXRvcDogNXB4O1xufVxuXG5pb24tZm9vdGVyIGlvbi10b29sYmFyIGlvbi1idXR0b25zIGlvbi1idXR0b24ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0N3B4O1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgZm9udC1mYW1pbHk6IG1hbnJvcGUtYm9sZDtcbn1cblxuaW9uLW5vdGUge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gIGZvbnQtZmFtaWx5OiBtYW5yb3BlLWJvbGQ7XG59XG5cbmJ1dHRvbi5mb290ZXIge1xuICBmb250LXNpemU6IDFyZW07XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQ3cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGZvbnQtZmFtaWx5OiBtYW5yb3BlLWJvbGQ7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnkpICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5idXR0b24uZm9vdGVyIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuXG5idXR0b24uZm9vdGVyOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBvcGFjaXR5OiAwLjY7XG59XG5cbmlvbi1pY29uLm5mdEljb24ge1xuICBmb250LXNpemU6IDEuOXJlbTtcbn1cblxuaW9uLXRleHRhcmVhIHtcbiAgcGFkZGluZy1sZWZ0OiAxJTtcbiAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG59XG5cbmlvbi1jaGVja2JveCB7XG4gIC0tc2l6ZTogMTVweDtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1tLWJhY2tncm91bmQpO1xuICBmb250LWZhbWlseTogbWFucm9wZS1ib2xkO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5KTtcbn1cbmlvbi10b29sYmFyIGlvbi10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBwYWRkaW5nLXRvcDogNSU7XG59XG5pb24tdG9vbGJhciBpb24tYnV0dG9ucyBpb24tbWVudS1idXR0b24ge1xuICBmb250LXNpemU6IDFyZW07XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnkpO1xufVxuXG5pb24tdGl0bGUuY2FyZEhlYWRlciB7XG4gIHBhZGRpbmctdG9wOiAyJTtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuaW9uLXRpdGxlLmNhcmRIZWFkZXIgaW9uLWljb24ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmlvbi1jYXJkLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY2FyZC1jb2xvcik7XG59XG5cbmlvbi1jYXJkLWhlYWRlciB7XG4gIC0tY29sb3I6IHZhcigtLWlvbi10ZXh0LWNvbG9yLCMwMDApO1xuICBmb250LWZhbWlseTogbWFucm9wZS1ib2xkO1xufVxuXG4uaW5wdXQge1xuICBmb250LWZhbWlseTogbWFucm9wZS1saWdodDtcbn1cblxuLmxlbmd0aCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZmxvYXQ6IHJpZ2h0O1xuICB6LWluZGV4OiAyMDAwO1xufVxuXG4ubGVuZ3RoIGlvbi1ub3RlIHtcbiAgZm9udC1mYW1pbHk6IG1hbnJvcGUtbGlnaHQgIWltcG9ydGFudDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeSkgIWltcG9ydGFudDtcbn1cblxuaW9uLWNhcmQudG9rZW5UeXBlIGlvbi1jYXJkLXN1YnRpdGxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbmlvbi1jYXJkLnRva2VuVHlwZSBpb24tY2FyZC1zdWJ0aXRsZSBpb24tYnV0dG9ucyBpb24tYnV0dG9uIHtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG59XG5cbmlvbi1jYXJkLnRva2VuVHlwZSBpb24tY2FyZC1zdWJ0aXRsZSBpb24tYnV0dG9ucyBpb24tYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnkpO1xuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbmlvbi1idXR0b24uY3JlYXRlQnRuOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjAxKTtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiBub25lIWltcG9ydGFudDtcbn1cblxuaW9uLWNhcmQudG9rZW5UeXBlIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5pb24tY2FyZC50b2tlblR5cGU6aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDEpO1xufVxuXG4jYmFja0J0biB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5KTtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG4jYmFja0J0bjpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wMik7XG4gIC0tYmFja2dyb3VuZC1ob3Zlcjogbm9uZSFpbXBvcnRhbnQ7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xufVxuXG5pb24taXRlbS5lcnJvciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBsZWZ0O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XG59XG5cbmlvbi1pdGVtLmVycm9yIHNwYW4ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5KTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG5pb24tbm90ZS5lcnJvci1tZXNzYWdlIGlvbi1pY29uIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICBmb250LXNpemU6IDFyZW07XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuaW9uLW5vdGUuZXJyb3ItbWVzc2FnZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufSJdfQ== */"

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
    CreateTokenPage.prototype.ionViewDidEnter = function () { };
    CreateTokenPage.prototype.ngOnInit = function () {
        this.tokenCreationForm = this.formBuilder.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(255)]],
            amount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(255)]],
            description: '',
            script: '',
            icon: '',
            proof: ''
        });
    };
    CreateTokenPage.prototype.toggleBasicAnimation = function () {
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
    };
    CreateTokenPage.prototype.toggleAdvAnimation = function () {
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
    };
    CreateTokenPage.prototype.toggleBackAnimation = function () {
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
    CreateTokenPage.prototype.createTokenAdvanced = function () {
        var _this = this;
        this.loading = true;
        var newToken = this.tokenCreationForm.value;
        if (this.advancedFormInputsChecked.nft) {
            this.submitBtn.disabled = true;
            newToken.script = this.myNFT; // script for non-fungible
            this.api.createToken(newToken).then(function (res) {
                if (res.status) {
                    _this.presentAlert('Success', 'Token ' + _this.customToken.name + ' has been created.', 'Token Creation Status');
                    _this.toggleBackAnimation();
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
                    _this.toggleBackAnimation();
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