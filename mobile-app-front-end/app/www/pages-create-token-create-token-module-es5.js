(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-create-token-create-token-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/create-token/create-token.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/create-token/create-token.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-app>\n<ion-header class=\"border-b\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button class=\"menu-icon\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title class=\"large-text\">Token</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card class=\"borders\">\n    <ion-card-header id=\"cardHeader\">\n      Choose A Token Type\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <ion-list>\n        <ion-row>\n          <ion-col size-xs=\"12\">\n            <ion-card id=\"basicCard\" class=\"tokenType borders\">\n              <ion-card-header>\n                Basic Token\n              </ion-card-header>\n              <ion-card-content>\n                <ion-list lines=\"none\">\n                  <ion-item>\n                  <ion-label>Name</ion-label>\n                  <ion-checkbox disabled=\"true\" checked=\"true\"></ion-checkbox>\n                  </ion-item>\n                  <ion-item>\n                  <ion-label>Amount</ion-label>\n                  <ion-checkbox disabled=\"true\" checked=\"true\"></ion-checkbox>\n                  </ion-item>\n                </ion-list>\n              </ion-card-content>\n              <ion-card-subtitle>\n                <ion-buttons>\n                  <ion-button class=\"createBtn\" (click)=\"toggleAnimation()\">\n                    Create Basic Token\n                  </ion-button>\n                </ion-buttons>\n              </ion-card-subtitle>\n            </ion-card>\n          </ion-col>\n          <ion-col size-xs=\"12\">\n            <ion-card #advancedCard id=\"advancedCard\" class=\"tokenType borders\">\n              <ion-card-header>\n                Advanced Token &mdash; <ion-note style=\"font-style:oblique; font-family:manrope-light\">A Basic Token With Optional Values</ion-note>\n              </ion-card-header>\n              <ion-card-content>\n                <ion-list>\n                  <ion-item lines=\"none\">\n                    <ion-label>Description</ion-label>\n                    <ion-checkbox id=\"description\" disabled=\"false\" checked=\"false\" (ionChange)=\"isChecked($event)\"></ion-checkbox>\n                  </ion-item>\n                  <ion-item lines=\"none\">\n                    <ion-label>Custom Icon URL</ion-label>\n                    <ion-checkbox id=\"icon\" disabled=\"false\" checked=\"false\" (ionChange)=\"isChecked($event)\"></ion-checkbox>\n                  </ion-item>\n                  <ion-item lines=\"none\">\n                    <ion-label>Proof URL</ion-label>\n                    <ion-checkbox id=\"proof\" disabled=\"false\" checked=\"false\" (ionChange)=\"isChecked($event)\"></ion-checkbox>\n                  </ion-item>\n                  <ion-item lines=\"none\">\n                    <ion-label>Non-Fungible Token</ion-label>\n                    <ion-checkbox id=\"nft\" disabled=\"false\" checked=\"false\" (ionChange)=\"isChecked($event)\"></ion-checkbox>\n                  </ion-item>\n                </ion-list>\n              </ion-card-content>\n\n              <ion-card-subtitle>\n                <ion-buttons>\n                  <ion-button class=\"createBtn\" (click)=\"toggleAdvAnimation()\">\n                    Create Advanced Token\n                  </ion-button>\n                </ion-buttons>\n              </ion-card-subtitle>\n            </ion-card>\n          </ion-col>\n        </ion-row>\n      </ion-list>\n\n\n\n\n      <form (ngSubmit)=\"createTokenAdvanced(f)\" #f=\"ngForm\" id='my-form' [hidden]=\"!basic && !advanced\">\n      <ion-list lines=\"none\">\n        <ion-item lines=\"none\">\n          <ion-label position=\"fixed\" class=\"medium-text\">Amount</ion-label>\n          <ion-input placeholder=\"amount\" type=\"number\" class=\"medium-text input\" #amountRef name=\"amount\" [(ngModel)]=\"customToken.amount\"></ion-input>\n        </ion-item>\n\n        <ion-item lines=\"none\">\n          <ion-label position=\"fixed\" class=\"medium-text\">Token Name</ion-label>\n          <ion-input placeholder=\"token name\" class=\"medium-text input\" #nameTextArea name=\"name\" [(ngModel)]=\"customToken.name\"></ion-input>\n        </ion-item>\n\n        <ion-item lines=\"none\" [hidden]=\"!advancedFormInputsChecked.description\" lines=\"none\">\n          <ion-label position=\"fixed\" class=\"medium-text\">Description <span style=\"font-family: manrope-light; color:var(--ion-color-primary)\">(Optional)</span></ion-label>\n          <ion-textarea\n          #description \n          class=\"medium-text input\"\n          name=\"description\"\n          maxlength=\"255\" \n          [(ngModel)]=\"customToken.description\" \n          placeholder=\"type your description here...\">\n          </ion-textarea>\n          <span class=\"length smaller-text\">{{ customToken.description.length+\"/255\"}}</span>\n        </ion-item>\n\n        <ion-item lines=\"none\" [hidden]=\"!advancedFormInputsChecked.icon\">\n          <ion-label position=\"fixed\" class=\"medium-text\">Icon <span style=\"font-family: manrope-light; color:var(--ion-color-primary)\">(Optional)</span></ion-label>\n          <ion-input class=\"medium-text input\" name=\"icon\" #iconURL [(ngModel)]=\"customToken.icon\" placeholder=\"add the URL of your icon here...\"></ion-input>\n        </ion-item>\n\n        <ion-item lines=\"none\" [hidden]=\"!advancedFormInputsChecked.proof\">\n          <ion-label position=\"fixed\" class=\"medium-text\">Proof <span style=\"font-family: manrope-light; color:var(--ion-color-primary)\">(Optional)</span></ion-label>\n          <ion-input  name=\"proof\" class=\"medium-text input\" #proofURL [(ngModel)]=\"customToken.proof\" placeholder=\"add to host website a text file with a token ID.\"></ion-input>\n        </ion-item>\n\n         <ion-note class=\"medium-text\" [hidden]=\"!advancedFormInputsChecked.nft\">\n          <ion-icon size=\"small\" name=\"images\"></ion-icon>\n          This token can be spent whole only.\n          </ion-note>  \n        \n      </ion-list>\n      </form>\n    </ion-card-content>\n\n    \n      \n  </ion-card>\n\n</ion-content>\n<ion-footer id=\"footer\" style=\"display: none;\" class=\"border-t\">\n  <ion-toolbar>\n    <ion-buttons>\n      <button id=\"createTknBtn2\" form=\"my-form\" style=\"width: 100%; background-color:transparent; display:none\">\n      <ion-button\n        #createTokenBtn\n        class=\"action-btn medium-text\" \n        shape=\"fill\"  \n        expand=\"fill\" \n        type=\"submit\">\n      <ion-icon name=\"brush\" slot=\"start\"></ion-icon>\n        Create Token\n      </ion-button>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer>\n\n</ion-app>"

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

module.exports = "ion-input {\n  color: #000;\n  line-height: 16px;\n  background-color: #ffffff;\n}\n\nion-item ion-label {\n  white-space: normal;\n}\n\nion-checkbox.checkbox {\n  padding-left: 5px;\n  padding-top: 5px;\n}\n\nion-footer ion-toolbar ion-buttons ion-button {\n  width: 100%;\n  height: 58px;\n  text-transform: none;\n  font-family: manrope-bold;\n}\n\nion-note {\n  color: var(--ion-color-secondary);\n  font-family: manrope-bold;\n  text-align: center;\n}\n\nion-textarea {\n  color: black !important;\n  background: #ffffff;\n}\n\nion-checkbox {\n  --size: 15px;\n}\n\nion-toolbar {\n  --background: var(--ion-m-background);\n  font-family: manrope-bold;\n  color: var(--ion-color-tertiary);\n}\n\nion-toolbar ion-title {\n  font-size: 1rem;\n}\n\nion-toolbar ion-buttons ion-menu-button {\n  font-size: 1rem;\n  color: var(--ion-color-tertiary);\n}\n\nion-card-content {\n  background: var(--ion-card-color);\n}\n\nion-card-header {\n  --color: var(--ion-text-color,#000);\n  font-family: manrope-bold;\n}\n\n.input {\n  font-family: manrope-light;\n}\n\n.length {\n  position: absolute;\n  right: 5%;\n  z-index: 2000;\n  font-family: manrope-bold;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  font-size: 1rem;\n  color: black !important;\n}\n\nion-card.tokenType ion-card-subtitle {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\nion-card.tokenType ion-card-subtitle ion-buttons ion-button {\n  text-transform: none;\n}\n\nion-card.tokenType ion-card-subtitle ion-buttons ion-button {\n  --background-hover: var(--ion-color-tertiary);\n  --color: var(--ion-color-primary);\n}\n\nion-button.createBtn:hover {\n  -webkit-transform: scale(1.01);\n          transform: scale(1.01);\n  --background-hover: none!important;\n}\n\nion-card.tokenType {\n  cursor: pointer;\n}\n\nion-card.tokenType:hover {\n  -webkit-transform: scale(1.01);\n          transform: scale(1.01);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGlhc25lbXIvcHJvamVjdHMvV0FMTEVUL21vYmlsZS1hcHAtZnJvbnQtZW5kL2FwcC9zcmMvYXBwL3BhZ2VzL2NyZWF0ZS10b2tlbi9jcmVhdGUtdG9rZW4ucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9jcmVhdGUtdG9rZW4vY3JlYXRlLXRva2VuLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxtQkFBQTtBQ0VGOztBREFBO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtBQ0dGOztBRERBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLHlCQUFBO0FDSUY7O0FERkE7RUFDRSxpQ0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUNLRjs7QURIQTtFQUNFLHVCQUFBO0VBQ0EsbUJBQUE7QUNNRjs7QURKQTtFQUNFLFlBQUE7QUNPRjs7QURMQTtFQUNFLHFDQUFBO0VBQ0EseUJBQUE7RUFDQSxnQ0FBQTtBQ1FGOztBRFBFO0VBQ0UsZUFBQTtBQ1NKOztBRFBFO0VBQ0UsZUFBQTtFQUNBLGdDQUFBO0FDU0o7O0FETkE7RUFDRSxpQ0FBQTtBQ1NGOztBRFBBO0VBQ0UsbUNBQUE7RUFDQSx5QkFBQTtBQ1VGOztBRFJBO0VBQ0UsMEJBQUE7QUNXRjs7QURUQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0FDWUY7O0FEVEE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtBQ1lGOztBRFZBO0VBQ0Usb0JBQUE7QUNhRjs7QURYQTtFQUNFLDZDQUFBO0VBQ0EsaUNBQUE7QUNjRjs7QURaQTtFQUNFLDhCQUFBO1VBQUEsc0JBQUE7RUFDQSxrQ0FBQTtBQ2VGOztBRGJBO0VBQ0UsZUFBQTtBQ2dCRjs7QURkQTtFQUNFLDhCQUFBO1VBQUEsc0JBQUE7QUNpQkYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jcmVhdGUtdG9rZW4vY3JlYXRlLXRva2VuLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pbnB1dCB7XG4gIGNvbG9yOiAjMDAwO1xuICBsaW5lLWhlaWdodDogMTZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbn1cbmlvbi1pdGVtIGlvbi1sYWJlbCB7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG59XG5pb24tY2hlY2tib3guY2hlY2tib3gge1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgcGFkZGluZy10b3A6IDVweDtcbn1cbmlvbi1mb290ZXIgaW9uLXRvb2xiYXIgaW9uLWJ1dHRvbnMgaW9uLWJ1dHRvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDU4cHg7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBmb250LWZhbWlseTogbWFucm9wZS1ib2xkO1xufVxuaW9uLW5vdGUge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gIGZvbnQtZmFtaWx5OiBtYW5yb3BlLWJvbGQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbmlvbi10ZXh0YXJlYSB7XG4gIGNvbG9yOiBibGFjayFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG59XG5pb24tY2hlY2tib3gge1xuICAtLXNpemU6IDE1cHg7XG59XG5pb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLW0tYmFja2dyb3VuZCk7XG4gIGZvbnQtZmFtaWx5OiBtYW5yb3BlLWJvbGQ7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnkpO1xuICBpb24tdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMS4wcmVtO1xuICB9XG4gIGlvbi1idXR0b25zIGlvbi1tZW51LWJ1dHRvbiB7XG4gICAgZm9udC1zaXplOiAxLjByZW07XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeSk7XG4gIH1cbn1cbmlvbi1jYXJkLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY2FyZC1jb2xvcik7XG59XG5pb24tY2FyZC1oZWFkZXIge1xuICAtLWNvbG9yOiB2YXIoLS1pb24tdGV4dC1jb2xvciwjMDAwKTtcbiAgZm9udC1mYW1pbHk6IG1hbnJvcGUtYm9sZDtcbn1cbi5pbnB1dCB7XG4gIGZvbnQtZmFtaWx5OiBtYW5yb3BlLWxpZ2h0O1xufVxuLmxlbmd0aCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDUlO1xuICB6LWluZGV4OiAyMDAwO1xuICBmb250LWZhbWlseTogbWFucm9wZS1ib2xkO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxLjByZW07XG4gIGNvbG9yOiBibGFjayFpbXBvcnRhbnQ7XG59XG5cbmlvbi1jYXJkLnRva2VuVHlwZSBpb24tY2FyZC1zdWJ0aXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuaW9uLWNhcmQudG9rZW5UeXBlIGlvbi1jYXJkLXN1YnRpdGxlIGlvbi1idXR0b25zIGlvbi1idXR0b24ge1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbn1cbmlvbi1jYXJkLnRva2VuVHlwZSBpb24tY2FyZC1zdWJ0aXRsZSBpb24tYnV0dG9ucyBpb24tYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnkpO1xuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5pb24tYnV0dG9uLmNyZWF0ZUJ0bjpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wMSk7XG4gIC0tYmFja2dyb3VuZC1ob3Zlcjogbm9uZSFpbXBvcnRhbnQ7XG59XG5pb24tY2FyZC50b2tlblR5cGUge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5pb24tY2FyZC50b2tlblR5cGU6aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDEpO1xufVxuIiwiaW9uLWlucHV0IHtcbiAgY29sb3I6ICMwMDA7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xufVxuXG5pb24taXRlbSBpb24tbGFiZWwge1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xufVxuXG5pb24tY2hlY2tib3guY2hlY2tib3gge1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgcGFkZGluZy10b3A6IDVweDtcbn1cblxuaW9uLWZvb3RlciBpb24tdG9vbGJhciBpb24tYnV0dG9ucyBpb24tYnV0dG9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNThweDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGZvbnQtZmFtaWx5OiBtYW5yb3BlLWJvbGQ7XG59XG5cbmlvbi1ub3RlIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICBmb250LWZhbWlseTogbWFucm9wZS1ib2xkO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlvbi10ZXh0YXJlYSB7XG4gIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xufVxuXG5pb24tY2hlY2tib3gge1xuICAtLXNpemU6IDE1cHg7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tbS1iYWNrZ3JvdW5kKTtcbiAgZm9udC1mYW1pbHk6IG1hbnJvcGUtYm9sZDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeSk7XG59XG5pb24tdG9vbGJhciBpb24tdGl0bGUge1xuICBmb250LXNpemU6IDFyZW07XG59XG5pb24tdG9vbGJhciBpb24tYnV0dG9ucyBpb24tbWVudS1idXR0b24ge1xuICBmb250LXNpemU6IDFyZW07XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnkpO1xufVxuXG5pb24tY2FyZC1jb250ZW50IHtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNhcmQtY29sb3IpO1xufVxuXG5pb24tY2FyZC1oZWFkZXIge1xuICAtLWNvbG9yOiB2YXIoLS1pb24tdGV4dC1jb2xvciwjMDAwKTtcbiAgZm9udC1mYW1pbHk6IG1hbnJvcGUtYm9sZDtcbn1cblxuLmlucHV0IHtcbiAgZm9udC1mYW1pbHk6IG1hbnJvcGUtbGlnaHQ7XG59XG5cbi5sZW5ndGgge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiA1JTtcbiAgei1pbmRleDogMjAwMDtcbiAgZm9udC1mYW1pbHk6IG1hbnJvcGUtYm9sZDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1jYXJkLnRva2VuVHlwZSBpb24tY2FyZC1zdWJ0aXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG5pb24tY2FyZC50b2tlblR5cGUgaW9uLWNhcmQtc3VidGl0bGUgaW9uLWJ1dHRvbnMgaW9uLWJ1dHRvbiB7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xufVxuXG5pb24tY2FyZC50b2tlblR5cGUgaW9uLWNhcmQtc3VidGl0bGUgaW9uLWJ1dHRvbnMgaW9uLWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5KTtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG5pb24tYnV0dG9uLmNyZWF0ZUJ0bjpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wMSk7XG4gIC0tYmFja2dyb3VuZC1ob3Zlcjogbm9uZSFpbXBvcnRhbnQ7XG59XG5cbmlvbi1jYXJkLnRva2VuVHlwZSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuaW9uLWNhcmQudG9rZW5UeXBlOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjAxKTtcbn0iXX0= */"

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
    function CreateTokenPage(api, animationCtrl, alertController, toastController) {
        this.api = api;
        this.animationCtrl = animationCtrl;
        this.alertController = alertController;
        this.toastController = toastController;
        this.advancedFormInputsChecked = { description: false, icon: false, proof: false, nft: false };
        this.basic = false;
        this.advanced = false;
        this.isPlaying = false;
        this.customToken = { name: '', amount: 0, description: '', script: '', icon: '', proof: '' };
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
    CreateTokenPage.prototype.ngAfterViewInit = function () {
        this.anim = this.animationCtrl.create('cardAnimation');
        this.animAdvanced = this.animationCtrl.create('advancedCardAnimation');
        this.animSecond = this.animationCtrl.create('cardAnimationSec');
        this.animAdvancedSecond = this.animationCtrl.create('advancedCardAnimationTwo');
        this.formAnim = this.animationCtrl.create('formAnimation');
        this.anim
            .addElement(document.getElementById('basicCard'))
            .duration(1000)
            .easing('ease-out')
            .iterations(1)
            .fromTo('transform', 'translateY(0px)', 'translateY(-25px)')
            .fromTo('opacity', 1, 0.2);
        this.animAdvanced
            .addElement(document.getElementById('advancedCard'))
            .duration(1000)
            .easing('ease-out')
            .iterations(1)
            .fromTo('transform', 'translateX(0px)', 'translateX(50px)')
            .fromTo('opacity', 1, 0.2);
        this.animSecond
            .addElement(document.getElementById('basicCard'))
            .duration(1000)
            .easing('ease-out')
            .iterations(1)
            .fromTo('transform', 'translateX(0px)', 'translateX(50px)')
            .fromTo('opacity', 1, 0.2);
        this.animAdvancedSecond
            .addElement(document.getElementById('advancedCard'))
            .duration(1000)
            .easing('ease-out')
            .iterations(1)
            .fromTo('transform', 'translateY(0px)', 'translateY(50px)')
            .fromTo('opacity', 1, 0.2);
    };
    CreateTokenPage.prototype.toggleAnimation = function () {
        if (this.isPlaying) {
            this.anim.stop();
            this.animAdvanced.stop();
        }
        else {
            this.anim.play();
            this.animAdvanced.play();
            setTimeout(function () {
                document.getElementById('basicCard').style.display = 'none';
                document.getElementById('advancedCard').style.display = 'none';
            }, 500);
            document.getElementById('cardHeader').innerHTML = 'Fill Out Your Token Details';
            document.getElementById('footer').style.display = 'block';
            document.getElementById('my-form').hidden = false;
            document.getElementById('createTknBtn2').style.display = 'block';
        }
        this.isPlaying = !this.isPlaying;
    };
    CreateTokenPage.prototype.toggleAdvAnimation = function () {
        if (this.isPlaying) {
            this.animSecond.stop();
            this.animAdvancedSecond.stop();
        }
        else {
            this.animSecond.play();
            this.animAdvancedSecond.play();
            setTimeout(function () {
                document.getElementById('basicCard').style.display = 'none';
                document.getElementById('advancedCard').style.display = 'none';
            }, 500);
            document.getElementById('cardHeader').innerHTML = 'Fill Out Your Token Details';
            document.getElementById('footer').style.display = 'block';
            document.getElementById('my-form').hidden = false;
            document.getElementById('createTknBtn2').style.display = 'block';
        }
        this.isPlaying = !this.isPlaying;
    };
    CreateTokenPage.prototype.ionViewDidEnter = function () { };
    CreateTokenPage.prototype.ngOnInit = function () { };
    CreateTokenPage.prototype.isChecked = function (ev) {
        if (ev.detail.checked) {
            if (ev.target.id === 'description') {
                this.advancedFormInputsChecked.description = true;
            }
            else if (ev.target.id === 'icon') {
                this.advancedFormInputsChecked.icon = true;
            }
            else if (ev.target.id === 'proof') {
                this.advancedFormInputsChecked.proof = true;
            }
            else if (ev.target.id === 'nft') {
                this.advancedFormInputsChecked.nft = true;
            }
        }
        else if (!ev.detail.checked) {
            if (ev.target.id === 'description') {
                this.advancedFormInputsChecked.description = false;
            }
            else if (ev.target.id === 'icon') {
                this.advancedFormInputsChecked.icon = false;
            }
            else if (ev.target.id === 'proof') {
                this.advancedFormInputsChecked.proof = false;
            }
            else if (ev.target.id === 'nft') {
                this.advancedFormInputsChecked.nft = false;
            }
        }
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
    CreateTokenPage.prototype.createTokenAdvanced = function (f) {
        var _this = this;
        if (f.value.name && f.value.name.length > 0 && f.value.amount && f.value.amount > 0) {
            this.customToken.name = f.value.name;
            this.customToken.amount = f.value.amount;
            // Optional Values 
            if (f.value.description && f.value.description.length > 0) {
                this.customToken.description = f.value.description;
            }
            if (f.value.checkboxproof === false) {
                this.customToken.proof = "";
            }
            else {
                this.customToken.proof = f.value.proof;
            }
            if (f.checkboxicon === false || f.value.icon === "" || f.value.icon.length <= 0) {
                this.customToken.icon = "";
            }
            else {
                this.customToken.icon = f.value.icon;
            }
            if (f.value.NFT === false) {
                console.log('NFT False');
                this.customToken.script = "RETURN TRUE";
            }
            else if (f.value.NFT === true) {
                console.log('NFT False');
                this.customToken.script = "ASSERT FLOOR ( @AMOUNT ) EQ @AMOUNT LET checkout = 0 WHILE ( checkout LT @TOTOUT ) DO IF GETOUTTOK ( checkout ) EQ @TOKENID THEN LET outamt = GETOUTAMT ( checkout ) ASSERT FLOOR ( outamt ) EQ outamt ENDIF LET checkout = INC ( checkout ) ENDWHILE RETURN TRUE";
            }
            this.api.createToken(this.customToken).then(function (res) {
                if (res.status === true) {
                    _this.presentAlert('Success', 'Token ' + _this.customToken.name + ' has been created.', 'Token Creation Status');
                    _this.resetForm();
                }
                else {
                    _this.presentAlert('Error', 'Something went wrong.', 'Token Creation Status');
                }
            });
        }
        else {
            this.presentToast('There is an error with your inputs.', 'danger');
        }
    };
    CreateTokenPage.prototype.resetForm = function () {
        this.nameText.value = '';
        this.amountRef.value = '';
        this.proofURL.value = '';
        this.iconURL.value = '';
        this.description.value = '';
        this.iconEntry.isChecked = false;
        this.proofEntry.isChecked = false;
        this.nft.isNonFungible = false;
    };
    CreateTokenPage.ctorParameters = function () { return [
        { type: _service_minima_api_service__WEBPACK_IMPORTED_MODULE_2__["MinimaApiService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AnimationController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"])
    ], CreateTokenPage.prototype, "tokenForm", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('nameTextArea', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonInput"])
    ], CreateTokenPage.prototype, "nameText", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('amountRef', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonInput"])
    ], CreateTokenPage.prototype, "amountRef", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('proofURL', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonInput"])
    ], CreateTokenPage.prototype, "proofURL", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('iconURL', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonInput"])
    ], CreateTokenPage.prototype, "iconURL", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('description', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonTextarea"])
    ], CreateTokenPage.prototype, "description", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('createTknBtn', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], CreateTokenPage.prototype, "createTknBtn", void 0);
    CreateTokenPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-token',
            template: __webpack_require__(/*! raw-loader!./create-token.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/create-token/create-token.page.html"),
            styles: [__webpack_require__(/*! ./create-token.page.scss */ "./src/app/pages/create-token/create-token.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_minima_api_service__WEBPACK_IMPORTED_MODULE_2__["MinimaApiService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AnimationController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]])
    ], CreateTokenPage);
    return CreateTokenPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-create-token-create-token-module-es5.js.map