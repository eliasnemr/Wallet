(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["create-token-create-token-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/create-token/create-token.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/create-token/create-token.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-app>\n\n<ion-header>\n  <ion-toolbar>\n\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title color = \"primary\" slot=\"start\"> Token </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-toolbar>\n  <ion-title> \n  <ion-icon name=\"brush\"></ion-icon>\n    Fill out your token contract here.\n</ion-title>\n</ion-toolbar>\n\n<ion-content>\n\n    <ion-card (click) =\"alertUser()\">\n      <ion-card-header>\n        <ion-card-title>\n          <ion-icon name=\"clipboard\"></ion-icon>\n          Your Contract for the token, \"<ion-text class=\"tokenStyle\">{{ tokenName }}</ion-text>\"\n        </ion-card-title>\n      </ion-card-header>\n\n      <ion-card-content>\n\n        <ion-list lines=\"none\">\n          <ion-item>\n            <ion-icon style=\"color:#FF671D\" name=\"return-right\" size=\"small\"></ion-icon> \n            <ion-text style=\"font-weight: lighter; font-family: Aeonik-Light; padding:5px;\">\n              Converting {{ tokenAmount }} Minima to\n              \"<ion-text style=\"font-weight: lighter; font-family: Aeonik-Light;\" class=\"tokenStyle\">{{ tokenName }}</ion-text>\"\n              </ion-text>\n          </ion-item>\n        </ion-list>\n        \n\n      </ion-card-content>\n\n    </ion-card>\n\n    <form>\n      <ion-list>\n        <ion-item>\n          <ion-label position=\"floating\" class=\"amount-font\">Name</ion-label>\n          <ion-input #nameTextArea (ionChange)=\"onUpdateTokenName($event)\"></ion-input>\n           <!-- <ion-input placeholder=\"a description of token\"></ion-input> -->\n        </ion-item>\n\n        <ion-item>\n          <ion-label class=\"amount-font\" position=\"floating\">Amount</ion-label>\n          <ion-input #amountRef (ionChange)=\"onAmountChanged($event)\"></ion-input>\n        </ion-item>\n\n        <!-- <ion-item lines=\"none\" position=\"float\">\n\n          <ion-range \n          #tokenSlider\n          color=\"danger\" \n          pin=\"true\"\n          min=\"0\"\n          max=\"{{ balance }}\"\n          (ionChange)=\"onSliderChanged($event)\">\n          <ion-label slot=\"start\" size=\"small\" >0</ion-label>  \n          <ion-label slot=\"end\"> {{ balance }} </ion-label>\n        </ion-range>\n        </ion-item> -->\n        \n\n      \n      </ion-list>\n\n\n\n\n    </form>\n\n\n    \n\n\n \n\n\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <ion-buttons>\n      <ion-button  style=\"color:#FF671D\"shape=\"fill\"  slot=\"primary\" expand=\"fill\" type=\"button\" position=\"relative\" >\n      Create token\n      </ion-button>\n    </ion-buttons>\n    \n    <ion-buttons>\n      <ion-button \n      style=\"color:crimson\" \n      shape=\"fill\"  \n      slot=\"primary\" \n      expand=\"fill\"\n      type=\"button\" \n      position=\"relative\"\n      (click) = \"resetForm()\" >\n      Reset\n      </ion-button>\n    </ion-buttons>\n    \n  </ion-toolbar>\n</ion-footer>\n</ion-app>"

/***/ }),

/***/ "./src/app/create-token/create-token.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/create-token/create-token.module.ts ***!
  \*****************************************************/
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
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _create_token_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./create-token.page */ "./src/app/create-token/create-token.page.ts");







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

/***/ "./src/app/create-token/create-token.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/create-token/create-token.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-list ion-item ion-range ion-label {\n  font-size: 1rem;\n  font-weight: 300;\n  position: relative;\n}\n\n.amount-font {\n  font-size: 1rem;\n}\n\nion-footer ion-toolbar ion-buttons ion-button {\n  width: 100%;\n}\n\nion-card {\n  border: 2px solid;\n}\n\n.tokenStyle {\n  color: #FF671D;\n}\n\nion-toolbar ion-title {\n  font-size: 1rem;\n  font-weight: 300;\n  position: relative;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGlhcy9Qcm9qZWN0cy9taW5pbWFjb3JlL21vYmlsZS1hcHAtZnJvbnQtZW5kL2FwcC9zcmMvYXBwL2NyZWF0ZS10b2tlbi9jcmVhdGUtdG9rZW4ucGFnZS5zY3NzIiwic3JjL2FwcC9jcmVhdGUtdG9rZW4vY3JlYXRlLXRva2VuLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNRLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDQ1I7O0FEQ0E7RUFDSSxlQUFBO0FDRUo7O0FERUE7RUFDRyxXQUFBO0FDQ0g7O0FERUE7RUFDSSxpQkFBQTtBQ0NKOztBREVBO0VBQ0ksY0FBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NyZWF0ZS10b2tlbi9jcmVhdGUtdG9rZW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWxpc3QgaW9uLWl0ZW0gaW9uLXJhbmdlIGlvbi1sYWJlbCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4wcmVtO1xuICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbn1cbi5hbW91bnQtZm9udHtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgXG59XG5cbmlvbi1mb290ZXIgaW9uLXRvb2xiYXIgaW9uLWJ1dHRvbnMgaW9uLWJ1dHRvbntcbiAgIHdpZHRoOiAxMDAlO1xufVxuXG5pb24tY2FyZCB7XG4gICAgYm9yZGVyOiAycHggc29saWQ7XG59XG5cbi50b2tlblN0eWxlIHtcbiAgICBjb2xvcjogI0ZGNjcxRDtcbn1cblxuaW9uLXRvb2xiYXIgaW9uLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDEuMHJlbTtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xufSIsImlvbi1saXN0IGlvbi1pdGVtIGlvbi1yYW5nZSBpb24tbGFiZWwge1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmFtb3VudC1mb250IHtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuXG5pb24tZm9vdGVyIGlvbi10b29sYmFyIGlvbi1idXR0b25zIGlvbi1idXR0b24ge1xuICB3aWR0aDogMTAwJTtcbn1cblxuaW9uLWNhcmQge1xuICBib3JkZXI6IDJweCBzb2xpZDtcbn1cblxuLnRva2VuU3R5bGUge1xuICBjb2xvcjogI0ZGNjcxRDtcbn1cblxuaW9uLXRvb2xiYXIgaW9uLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogMzAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59Il19 */"

/***/ }),

/***/ "./src/app/create-token/create-token.page.ts":
/*!***************************************************!*\
  !*** ./src/app/create-token/create-token.page.ts ***!
  \***************************************************/
/*! exports provided: CreateTokenPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateTokenPage", function() { return CreateTokenPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_minima_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/minima-api.service */ "./src/app/service/minima-api.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




var CreateTokenPage = /** @class */ (function () {
    function CreateTokenPage(api) {
        this.api = api;
        this.forNewToken = 0;
        this.tokenAmount = 0;
        this.tokenName = '?';
        this.balance = 0;
    }
    CreateTokenPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.api.getBalance().then(function (res) {
            console.log(res);
            var conf = res.response.confirmed;
            for (var i = 0; i < conf.length; i++) {
                _this.balance = Math.round(conf[i].amount * 100) / 100;
            }
            //this.balance = Math.round(res.response.confirmed.amount * 100) / 100;
            console.log('Balance set');
        });
    };
    CreateTokenPage.prototype.ngOnInit = function () {
    };
    CreateTokenPage.prototype.onAmountChanged = function (event) {
        this.tokenAmount = event.target.value;
        var regExp = new RegExp('^[a-zA-Z]+$');
        var regExpSpecial = new RegExp('[^\w\d]');
        if (regExp.test(this.tokenAmount.toString())) {
            event.target.value = this.tokenAmount.toString().slice(0, -1);
        }
    };
    CreateTokenPage.prototype.resetForm = function () {
        this.nameText.value = '';
        //this.tokenSlider.value = 0;
        this.amountRef.value = '';
        this.forNewToken = 0;
        this.tokenAmount = 0;
        this.tokenName = '';
    };
    CreateTokenPage.prototype.onUpdateTokenName = function (event) {
        this.tokenName = event.target.value;
    };
    CreateTokenPage.prototype.alertUser = function () {
        alert("Fill out form below please");
    };
    CreateTokenPage.ctorParameters = function () { return [
        { type: _service_minima_api_service__WEBPACK_IMPORTED_MODULE_2__["MinimaApiService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('nameTextArea', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonTextarea"])
    ], CreateTokenPage.prototype, "nameText", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tokenSlider', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonRange"])
    ], CreateTokenPage.prototype, "tokenSlider", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('amountRef', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonInput"])
    ], CreateTokenPage.prototype, "amountRef", void 0);
    CreateTokenPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-token',
            template: __webpack_require__(/*! raw-loader!./create-token.page.html */ "./node_modules/raw-loader/index.js!./src/app/create-token/create-token.page.html"),
            styles: [__webpack_require__(/*! ./create-token.page.scss */ "./src/app/create-token/create-token.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_minima_api_service__WEBPACK_IMPORTED_MODULE_2__["MinimaApiService"]])
    ], CreateTokenPage);
    return CreateTokenPage;
}());



/***/ })

}]);
//# sourceMappingURL=create-token-create-token-module-es5.js.map