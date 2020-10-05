(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["view-tokens-view-tokens-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/balance/view-tokens/view-tokens.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/balance/view-tokens/view-tokens.page.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/balance\"></ion-back-button>\n    </ion-buttons>\n\n    <ion-title>{{ token }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title>\n        <img src={{icon}} alt=\"icon\" style=\"width: 5vh;\"> \n      </ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      {{description}}\n    </ion-card-content>\n  </ion-card>\n\n  <ion-list>\n      <ion-list-header>\n        Token Details\n      </ion-list-header>\n      <ion-item>\n        <ion-col class=\"title\">\n          Name\n        </ion-col>\n        <ion-col class=\"value\">\n          {{token}}\n        </ion-col>\n      </ion-item>\n      <ion-item>\n        <ion-col class=\"title\">\n          Token ID\n        <a class=\"copy\" (click)=\"copyToClipPWA(tokenid)\">\n          Copy \n        </a>\n        </ion-col>\n        <ion-col class=\"value\">\n          {{tokenid}}\n        </ion-col>\n      </ion-item>\n      <ion-item [hidden]=\"tokenid == '0x00'\">\n        <ion-col class=\"title\">\n          Coin ID\n        <a class=\"copy\" (click)=\"copyToClipPWA(coinid)\">\n          Copy \n        </a>\n        </ion-col>\n        <ion-col class=\"value\">\n          {{coinid}}\n        </ion-col>\n      </ion-item>\n      <ion-item>\n        <ion-col class=\"title\">\n          Total\n        </ion-col>\n        <ion-col class=\"value\">\n          {{total}}\n        </ion-col>\n      </ion-item>\n      <ion-item>\n        <ion-col class=\"title\">\n          Confirmed Amount\n        </ion-col>\n        <ion-col class=\"value\">\n          {{confirmed}}\n        </ion-col>\n      </ion-item>\n      <ion-item>\n        <ion-col class=\"title\">\n          Unconfirmed Amount\n        </ion-col>\n        <ion-col class=\"value\">\n          {{unconfirmed}}\n        </ion-col>\n      </ion-item>\n            <ion-item>\n        <ion-col class=\"title\">\n          Sendable Amount\n        </ion-col>\n        <ion-col class=\"value\">\n          {{sendable}}\n        </ion-col>\n      </ion-item>\n            <ion-item>\n        <ion-col class=\"title\">\n          Mempool Amount\n        </ion-col>\n        <ion-col class=\"value\">\n          {{mempool}}\n        </ion-col>\n      </ion-item>\n      <ion-item [hidden]=\"tokenid == '0x00'\">\n        <ion-col class=\"title\">\n          Token Type\n        </ion-col>\n        <ion-col class=\"value\">\n          {{script}}\n        </ion-col>\n      </ion-item>\n      <ion-item [hidden]=\"tokenid == '0x00' || !proof\">\n        <ion-col class=\"title\">\n          Proof\n        </ion-col>\n        <ion-col class=\"value\">\n          {{proof}}\n        </ion-col>\n      </ion-item>\n      <ion-item [hidden]=\"tokenid == '0x00' || !proof \">\n        <ion-col class=\"title\">\n          Validate Proof\n        </ion-col>\n        <ion-col class=\"value\">\n          <ion-button *ngIf=\"proof\" class=\"small-text\" size=\"small\" (click)=\"validateProof(tokenid)\">\n            Validate\n          </ion-button> \n        </ion-col>\n      </ion-item>    \n\n\n               \n\n\n    </ion-list>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/balance/view-tokens/view-tokens.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/balance/view-tokens/view-tokens.module.ts ***!
  \*****************************************************************/
/*! exports provided: ViewTokensPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewTokensPageModule", function() { return ViewTokensPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _view_tokens_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view-tokens.page */ "./src/app/pages/balance/view-tokens/view-tokens.page.ts");







var routes = [
    {
        path: '',
        component: _view_tokens_page__WEBPACK_IMPORTED_MODULE_6__["ViewTokensPage"]
    }
];
var ViewTokensPageModule = /** @class */ (function () {
    function ViewTokensPageModule() {
    }
    ViewTokensPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_view_tokens_page__WEBPACK_IMPORTED_MODULE_6__["ViewTokensPage"]]
        })
    ], ViewTokensPageModule);
    return ViewTokensPageModule;
}());



/***/ }),

/***/ "./src/app/pages/balance/view-tokens/view-tokens.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/balance/view-tokens/view-tokens.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-card {\n  border-radius: 50px;\n}\n\nion-card:hover {\n  background-color: #f2f2f2;\n  -webkit-transform: scale(0.9);\n          transform: scale(0.9);\n}\n\nion-card-content {\n  text-align: center;\n  -webkit-box-pack: center !important;\n          justify-content: center !important;\n  align-content: center;\n  display: -webkit-box;\n  display: flex;\n  height: auto;\n}\n\nion-card-header {\n  text-align: center;\n  -webkit-box-pack: center !important;\n          justify-content: center !important;\n  align-content: center;\n  display: -webkit-box;\n  display: flex;\n  border-radius: 50px;\n  height: auto;\n}\n\nion-card-content {\n  margin-left: 5%;\n  margin-right: 5%;\n  white-space: normal;\n  overflow: auto;\n}\n\nion-list-header {\n  font-weight: 600;\n  font-size: 1.5rem;\n  letter-spacing: -0.02em;\n}\n\n.title {\n  letter-spacing: -0.02em;\n  float: left;\n  font-weight: 500;\n}\n\n.value {\n  font-size: 0.8rem;\n  opacity: 0.8;\n  text-align: right;\n  float: right;\n  white-space: pre-wrap;\n  word-wrap: none;\n  word-break: break-all;\n}\n\n.copy {\n  text-decoration: underline;\n  cursor: pointer;\n  font-size: 0.8rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGlhcy9Qcm9qZWN0cy9taW5pbWFjb3JlL21vYmlsZS1hcHAtZnJvbnQtZW5kL2FwcC9zcmMvYXBwL3BhZ2VzL2JhbGFuY2Uvdmlldy10b2tlbnMvdmlldy10b2tlbnMucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9iYWxhbmNlL3ZpZXctdG9rZW5zL3ZpZXctdG9rZW5zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0FDQ0o7O0FEQ0E7RUFDSSx5QkFBQTtFQUNBLDZCQUFBO1VBQUEscUJBQUE7QUNFSjs7QURBQTtFQUNJLGtCQUFBO0VBQ0EsbUNBQUE7VUFBQSxrQ0FBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsWUFBQTtBQ0dKOztBRERBO0VBQ0ksa0JBQUE7RUFDQSxtQ0FBQTtVQUFBLGtDQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUNJSjs7QURGQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQ0tKOztBREhBO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0FDTUo7O0FESkE7RUFDSSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ09KOztBRExBO0VBQ0ksaUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7QUNRSjs7QUROQTtFQUNJLDBCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDU0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9iYWxhbmNlL3ZpZXctdG9rZW5zL3ZpZXctdG9rZW5zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJkIHtcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xufVxuaW9uLWNhcmQ6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpO1xufVxuaW9uLWNhcmQtY29udGVudCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgaGVpZ2h0OiBhdXRvO1xufVxuaW9uLWNhcmQtaGVhZGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIGhlaWdodDogYXV0bztcbn1cbmlvbi1jYXJkLWNvbnRlbnQge1xuICAgIG1hcmdpbi1sZWZ0OiA1JTtcbiAgICBtYXJnaW4tcmlnaHQ6IDUlO1xuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG59XG5pb24tbGlzdC1oZWFkZXIge1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjAyZW07XG59XG4udGl0bGUge1xuICAgIGxldHRlci1zcGFjaW5nOiAtMC4wMmVtO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4udmFsdWUge1xuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgIG9wYWNpdHk6IDAuODtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xuICAgIHdvcmQtd3JhcDogbm9uZTtcbiAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG59XG4uY29weSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xufSIsImlvbi1jYXJkIHtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbn1cblxuaW9uLWNhcmQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xuICB0cmFuc2Zvcm06IHNjYWxlKDAuOSk7XG59XG5cbmlvbi1jYXJkLWNvbnRlbnQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG5pb24tY2FyZC1oZWFkZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG5pb24tY2FyZC1jb250ZW50IHtcbiAgbWFyZ2luLWxlZnQ6IDUlO1xuICBtYXJnaW4tcmlnaHQ6IDUlO1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuaW9uLWxpc3QtaGVhZGVyIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGxldHRlci1zcGFjaW5nOiAtMC4wMmVtO1xufVxuXG4udGl0bGUge1xuICBsZXR0ZXItc3BhY2luZzogLTAuMDJlbTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi52YWx1ZSB7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBvcGFjaXR5OiAwLjg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBmbG9hdDogcmlnaHQ7XG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbiAgd29yZC13cmFwOiBub25lO1xuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG59XG5cbi5jb3B5IHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAwLjhyZW07XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/balance/view-tokens/view-tokens.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/balance/view-tokens/view-tokens.page.ts ***!
  \***************************************************************/
/*! exports provided: ViewTokensPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewTokensPage", function() { return ViewTokensPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _service_minima_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../service/minima-api.service */ "./src/app/service/minima-api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");





var ViewTokensPage = /** @class */ (function () {
    function ViewTokensPage(route, api, toastController) {
        this.route = route;
        this.api = api;
        this.toastController = toastController;
        this.tokenid = this.route.snapshot.paramMap.get("id");
    }
    ViewTokensPage.prototype.ngOnInit = function () {
        var _this = this;
        Minima.cmd('balance', function (res) {
            res.response.balance.forEach(function (tkn) {
                if (tkn.tokenid == _this.tokenid) {
                    _this.tokenid = tkn.tokenid;
                    _this.token = tkn.token;
                    _this.coinid = tkn.coinid;
                    _this.total = tkn.total; // Token total
                    _this.totalamount = tkn.totalamount; // Minima total
                    _this.confirmed = tkn.confirmed;
                    _this.unconfirmed = tkn.unconfirmed;
                    _this.sendable = tkn.sendable;
                    _this.mempool = tkn.mempool;
                    if (_this.tokenid == "0x00") {
                        _this.description = "Minima's Official Token.";
                    }
                    else {
                        _this.description = tkn.description;
                    }
                    if (tkn.tokenid != "0x00" && tkn.icon.length == 0) {
                        _this.icon = "assets/icon/icon.png";
                    }
                    else if (tkn.tokenid == "0x00") {
                        _this.icon = "assets/icon/icon.png";
                    }
                    else {
                        _this.icon = tkn.icon;
                    }
                    _this.proof = tkn.proof;
                    _this.scale = tkn.scale;
                    _this.script = tkn.script;
                    if (_this.script === "RETURN TRUE") {
                        _this.script = "Normal";
                    }
                    else {
                        _this.script = "Non-Fungible Token";
                    }
                }
            });
        });
    };
    ViewTokensPage.prototype.validateProof = function (tokenid) {
        var _this = this;
        this.api.validateTokenID(tokenid).then(function (res) {
            if (res.response.valid === true) {
                _this.presentToast("This proof is valid.", "success");
            }
            else {
                _this.presentToast("Proof Mismatch - Proof is invalid.", "danger");
            }
        });
    };
    //Alerts
    ViewTokensPage.prototype.presentToast = function (msg, type) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: msg,
                            duration: 4000,
                            buttons: [{
                                    text: 'Close',
                                    role: 'cancel'
                                }],
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
    ViewTokensPage.prototype.copyToClipPWA = function (text) {
        var _this = this;
        document.addEventListener('copy', function (e) {
            e.clipboardData.setData('text/plain', text);
            _this.presentToast("Copied to Clipboard", "success");
            e.preventDefault();
            document.removeEventListener('copy', null);
        });
        document.execCommand('copy');
    };
    ViewTokensPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _service_minima_api_service__WEBPACK_IMPORTED_MODULE_2__["MinimaApiService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ToastController"] }
    ]; };
    ViewTokensPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: 'app-view-tokens',
            template: __webpack_require__(/*! raw-loader!./view-tokens.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/balance/view-tokens/view-tokens.page.html"),
            styles: [__webpack_require__(/*! ./view-tokens.page.scss */ "./src/app/pages/balance/view-tokens/view-tokens.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _service_minima_api_service__WEBPACK_IMPORTED_MODULE_2__["MinimaApiService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ToastController"]])
    ], ViewTokensPage);
    return ViewTokensPage;
}());



/***/ })

}]);
//# sourceMappingURL=view-tokens-view-tokens-module-es5.js.map