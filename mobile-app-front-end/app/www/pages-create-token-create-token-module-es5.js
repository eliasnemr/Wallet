(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-create-token-create-token-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/create-token/create-token.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/create-token/create-token.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-app>\n<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title color = \"primary\" slot=\"start\" > Token </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card color=\"white\">\n    <ion-card-header>\n    \n      <ion-card-title>\n      <ion-icon size=\"large\" name=\"clipboard\"></ion-icon>\n      <ion-text style=\"position:relative; padding:8px 0 0 8px;\" [hidden]=\"tokenName.length === 0\">Your transaction for the token, {{ tokenName }}</ion-text>\n      </ion-card-title>\n    </ion-card-header>\n\n    <ion-card-content>\n      <!-- Token FORM -->\n      <form (ngSubmit)=\"createTokenAdvanced(f)\" #f=\"ngForm\" id='my-form'>\n\n        <ion-item lines=\"none\" [hidden]=\"!nft.isNonFungible\">\n          <ion-text style=\"padding: 20px; color: #855EFC; font-weight: 800;\">\n          <ion-icon size=\"small\" name=\"images\"></ion-icon>\n          Your can only send this token whole\n          <ion-icon size=\"small\" name=\"images\"></ion-icon>\n          </ion-text>  \n          \n        </ion-item>\n      \n        <ion-item>\n          <ion-label position=\"floating\" class=\"amount-font\">Name</ion-label>\n          <ion-input #nameTextArea name=\"name\" [(ngModel)]=\"data.name\" (ionChange)=\"onUpdateTokenName($event)\"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label class=\"amount-font\"  position=\"floating\">Amount</ion-label>\n          <ion-input #amountRef name=\"amount\" [(ngModel)]=\"data.amount\" (ionChange)=\"onAmountChanged($event)\"></ion-input>\n        </ion-item>\n\n        <!-- Description -->\n        <ion-item>\n          <ion-label class=\"amount-font\"  position=\"floating\">Description (Optional)</ion-label>\n          <ion-textarea #textarea \n                    name=\"description\"\n                    maxlength=\"255\" \n                    auto-grow=\"true\" \n                    [(ngModel)]=\"data.description\" \n                    placeholder=\"write your description here...\">\n          </ion-textarea>\n          <p style=\"position: relative; left:80%; font-family:'Optima'\">{{ data.description.length+\"/255\"}}</p>\n        </ion-item>\n        <!-- Icon Entry -->\n        <ion-item [hidden]=\"iconEntry.isChecked\">\n          <ion-label>Icon</ion-label>\n          <ion-checkbox class=\"checkbox\" name=\"checkboxicon\" [(ngModel)]=\"iconEntry.isChecked\"></ion-checkbox>\n        </ion-item>\n\n        <ion-item [hidden]=\"!iconEntry.isChecked\">\n          <ion-label>Icon (Optional)</ion-label>\n          <ion-input name=\"icon\" #iconURL [(ngModel)]=\"data.icon\" placeholder=\"icon URL\"></ion-input>\n          <ion-checkbox class=\"checkbox\" name=\"checkboxicon\" [(ngModel)]=\"iconEntry.isChecked\"></ion-checkbox>\n        </ion-item>\n        <!-- Proof Entry -->\n        <ion-item [hidden]=\"proofEntry.isChecked\">\n          <ion-label>Proof</ion-label>\n          <ion-checkbox class=\"checkbox\" name=\"checkboxproof\" [(ngModel)]=\"proofEntry.isChecked\"></ion-checkbox>\n        </ion-item>\n\n        <ion-item [hidden]=\"!proofEntry.isChecked\">\n          <ion-label>Proof (Optional)</ion-label>\n          <ion-input name=\"proof\" #proofURL [(ngModel)]=\"data.proof\" placeholder=\"proof URL\"></ion-input>\n          <ion-checkbox class=\"checkbox\" name=\"checkboxproof\" [(ngModel)]=\"proofEntry.isChecked\"></ion-checkbox>\n        </ion-item>\n        \n        <ion-item lines=\"none\">\n          <ion-label>Non Fungible Token</ion-label>\n          <ion-checkbox class=\"checkbox\" name=\"NFT\" [(ngModel)]=\"nft.isNonFungible\"></ion-checkbox>\n        </ion-item>\n      </form>\n    </ion-card-content>\n\n    \n      \n  </ion-card>\n\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <ion-buttons>\n      <button form=\"my-form\" style=\"width: 100%; background-color:transparent;\">\n      <ion-button \n        class=\"action-btn\" \n        shape=\"fill\"  \n        slot=\"primary\" \n        expand=\"fill\" \n        type=\"submit\" >\n      <ion-icon name=\"brush\" slot=\"start\"></ion-icon>\n        Create token\n      </ion-button>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer>\n\n</ion-app>"

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
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
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

module.exports = "ion-list ion-item ion-range ion-label {\n  font-size: 1rem;\n  font-weight: 300;\n  position: relative;\n}\n\n.checkbox {\n  padding-left: 5px;\n  padding-top: 5px;\n}\n\n.amount-font {\n  font-size: 1rem;\n}\n\nion-footer ion-toolbar ion-buttons ion-button {\n  width: 100%;\n}\n\nion-card {\n  --background: var(--ion-background-color, #f2f2f2);\n}\n\n.tokenStyle {\n  color: #FF671D;\n  white-space: normal;\n  font-family: \"Aeonik-Light\";\n}\n\nion-toolbar ion-title {\n  font-weight: 300;\n  position: relative;\n}\n\n.action-btn {\n  height: 72px;\n}\n\n.action-btn:hover {\n  height: 72px;\n}\n\n.action-btn:hover ion-icon {\n  font-size: large;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGlhcy9Qcm9qZWN0cy9taW5pbWFjb3JlL21vYmlsZS1hcHAtZnJvbnQtZW5kL2FwcC9zcmMvYXBwL3BhZ2VzL2NyZWF0ZS10b2tlbi9jcmVhdGUtdG9rZW4ucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9jcmVhdGUtdG9rZW4vY3JlYXRlLXRva2VuLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0FDRUo7O0FEQUE7RUFDSSxlQUFBO0FDR0o7O0FEQUE7RUFDRyxXQUFBO0FDR0g7O0FEQUE7RUFDSSxrREFBQTtBQ0dKOztBREFBO0VBQ0ksY0FBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7QUNHSjs7QURBQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7QUNHSjs7QUREQTtFQUNJLFlBQUE7QUNJSjs7QURGQTtFQUNJLFlBQUE7QUNLSjs7QURISTtFQUNJLGdCQUFBO0FDS1IiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jcmVhdGUtdG9rZW4vY3JlYXRlLXRva2VuLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1saXN0IGlvbi1pdGVtIGlvbi1yYW5nZSBpb24tbGFiZWwge1xuICAgIGZvbnQtc2l6ZTogMS4wcmVtO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgcG9zaXRpb246cmVsYXRpdmU7XG59XG4uY2hlY2tib3gge1xuICAgIHBhZGRpbmctbGVmdDogNXB4O1xuICAgIHBhZGRpbmctdG9wOiA1cHg7XG59XG4uYW1vdW50LWZvbnR7XG4gICAgZm9udC1zaXplOiAxcmVtO1xufVxuXG5pb24tZm9vdGVyIGlvbi10b29sYmFyIGlvbi1idXR0b25zIGlvbi1idXR0b257XG4gICB3aWR0aDogMTAwJTtcbn1cblxuaW9uLWNhcmQge1xuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsICNmMmYyZjIpO1xufVxuXG4udG9rZW5TdHlsZSB7XG4gICAgY29sb3I6ICNGRjY3MUQ7XG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgICBmb250LWZhbWlseTogJ0Flb25pay1MaWdodCc7XG59XG5cbmlvbi10b29sYmFyIGlvbi10aXRsZSB7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbn1cbi5hY3Rpb24tYnRuIHtcbiAgICBoZWlnaHQ6IDcycHg7XG59XG4uYWN0aW9uLWJ0bjpob3ZlciB7XG4gICAgaGVpZ2h0OiA3MnB4O1xuXG4gICAgaW9uLWljb24ge1xuICAgICAgICBmb250LXNpemU6IGxhcmdlO1xuICAgICAgfVxufSIsImlvbi1saXN0IGlvbi1pdGVtIGlvbi1yYW5nZSBpb24tbGFiZWwge1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmNoZWNrYm94IHtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG59XG5cbi5hbW91bnQtZm9udCB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cblxuaW9uLWZvb3RlciBpb24tdG9vbGJhciBpb24tYnV0dG9ucyBpb24tYnV0dG9uIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmlvbi1jYXJkIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwgI2YyZjJmMik7XG59XG5cbi50b2tlblN0eWxlIHtcbiAgY29sb3I6ICNGRjY3MUQ7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gIGZvbnQtZmFtaWx5OiBcIkFlb25pay1MaWdodFwiO1xufVxuXG5pb24tdG9vbGJhciBpb24tdGl0bGUge1xuICBmb250LXdlaWdodDogMzAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5hY3Rpb24tYnRuIHtcbiAgaGVpZ2h0OiA3MnB4O1xufVxuXG4uYWN0aW9uLWJ0bjpob3ZlciB7XG4gIGhlaWdodDogNzJweDtcbn1cbi5hY3Rpb24tYnRuOmhvdmVyIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiBsYXJnZTtcbn0iXX0= */"

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
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var CreateTokenPage = /** @class */ (function () {
    function CreateTokenPage(api, alertController, toastController) {
        this.api = api;
        this.alertController = alertController;
        this.toastController = toastController;
        this.data = {
            name: String,
            amount: Number,
            description: String,
            script: String,
            icon: String,
            proof: String,
        };
        this.minimaAmount = 0;
        this.tokenAmount = 0;
        this.tokenName = '';
        this.balance = 0;
        this.descriptionLength = 0;
        this.iconEntry = {
            isChecked: Boolean
        };
        this.proofEntry = {
            isChecked: Boolean
        };
        this.nft = {
            isNonFungible: Boolean
        };
        this.data.name = "";
        this.data.amount = "";
        this.data.description = "";
        this.data.script = "RETURN TRUE";
        this.data.icon = "";
        this.data.proof = "";
        this.iconEntry.isChecked = false;
        this.proofEntry.isChecked = false;
        this.nft.isNonFungible = false;
    }
    CreateTokenPage.prototype.ionViewDidEnter = function () { };
    CreateTokenPage.prototype.ngOnInit = function () { };
    CreateTokenPage.prototype.createTokenAdvanced = function (f) {
        var _this = this;
        console.log(f);
        if (f.value.name && f.value.name.length > 0 && f.value.amount && f.value.amount > 0) {
            console.log("passed check 1");
            this.data.name = f.value.name;
            this.data.amount = f.value.amount;
            this.data.description = f.value.description;
            // Check and set..
            if (f.value.checkboxproof === false) {
                this.data.proof = "";
            }
            else {
                this.data.proof = f.value.proof;
            }
            if (f.checkboxicon === false || f.value.icon === "" || f.value.icon.length <= 0) {
                this.data.icon = "";
            }
            else {
                this.data.icon = f.value.icon;
            }
            // if NFT return custom script if not.. RETURN TRUE
            if (f.value.NFT === false) {
                this.data.script = "RETURN TRUE";
            }
            else if (f.value.NFT === true) {
                this.data.script = "ASSERT FLOOR ( @AMOUNT ) EQ @AMOUNT LET checkout = 0 WHILE ( checkout LT @TOTOUT ) DO IF GETOUTTOK ( checkout ) EQ @TOKENID THEN LET outamt = GETOUTAMT ( checkout ) ASSERT FLOOR ( outamt ) EQ outamt ENDIF LET checkout = INC ( checkout ) ENDWHILE RETURN TRUE";
            }
            this.api.createToken(this.data).then(function (res) {
                if (res.status === true) {
                    _this.presentToast('Success! ' + _this.data.name + ' has been created.', "success");
                    _this.resetForm();
                }
                else {
                    _this.presentToast("Your token creation failed, " + res.message, 'danger');
                }
            });
        }
        else {
            this.presentToast('There is an error with your inputs.', 'danger');
        }
    };
    //Alerts
    CreateTokenPage.prototype.presentToast = function (msg, type) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: msg,
                            duration: 4000,
                            color: type,
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
    CreateTokenPage.prototype.onAmountChanged = function (event) {
        this.tokenAmount = event.target.value;
        this.minimaAmount = this.tokenAmount / 1000000000000;
        var regExp = new RegExp('^[a-zA-Z]+$');
        var regExpSpecial = new RegExp('[^\w\d]');
        if (regExp.test(this.tokenAmount.toString())) {
            event.target.value = this.tokenAmount.toString().slice(0, -1);
        }
    };
    CreateTokenPage.prototype.resetForm = function () {
        this.nameText.value = '';
        this.amountRef.value = '';
        this.proofURL.value = '';
        this.iconURL.value = '';
        this.textArea.value = '';
        this.iconEntry.isChecked = false;
        this.proofEntry.isChecked = false;
        this.nft.isNonFungible = false;
        this.tokenAmount = 0;
        this.tokenName = '';
    };
    CreateTokenPage.prototype.onUpdateTokenName = function (event) {
        this.tokenName = event.target.value;
    };
    CreateTokenPage.ctorParameters = function () { return [
        { type: _service_minima_api_service__WEBPACK_IMPORTED_MODULE_2__["MinimaApiService"] },
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('textarea', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonTextarea"])
    ], CreateTokenPage.prototype, "textArea", void 0);
    CreateTokenPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-token',
            template: __webpack_require__(/*! raw-loader!./create-token.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/create-token/create-token.page.html"),
            styles: [__webpack_require__(/*! ./create-token.page.scss */ "./src/app/pages/create-token/create-token.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_minima_api_service__WEBPACK_IMPORTED_MODULE_2__["MinimaApiService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]])
    ], CreateTokenPage);
    return CreateTokenPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-create-token-create-token-module-es5.js.map