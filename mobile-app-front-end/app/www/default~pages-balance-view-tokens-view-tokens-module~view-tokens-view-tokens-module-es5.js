(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-balance-view-tokens-view-tokens-module~view-tokens-view-tokens-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/balance/view-tokens/view-tokens.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/balance/view-tokens/view-tokens.page.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"page-header ion-no-border\">\n  <ion-toolbar>\n    <ion-title>\n      <ion-item id=\"title\" class=\"no-ripple ion-no-padding\" lines=\"none\">\n      <ion-icon routerLink=\"/balance\" class=\"back-btn\" name=\"arrow-back\"></ion-icon>\n      Balance\n      </ion-item>\n      <ion-item id=\"subtitle\" class=\"breadcrumb ion-no-padding\" lines=\"none\" *ngIf=\"tokenArr.length > 0\">\n        Token details\n      </ion-item>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"page-content\">\n  <ion-list lines=\"none\">\n    <ion-item color=\"none\">\n      <ion-avatar slot=\"start\">\n        <img class=\"custom-icon\" *ngIf=\"token.tokenid !== '0x00' && token.icon.length == 0\" [src]=\"createIcon( token.tokenid )\"/>\n        <img class=\"custom-icon\" *ngIf=\"token.tokenid !== '0x00' && token.icon.length > 0\" [src]=\"token.icon\"/>\n        <img *ngIf=\"token.tokenid === '0x00'\" class=\"custom-icon\" alt=\"minima\" src=\"assets/minimaIcon.svg\"> \n      </ion-avatar>\n      <ion-label id=\"name\">\n        <h3>{{token.token}}</h3> \n      </ion-label>\n    </ion-item>\n    <ion-item *ngIf=\"token.description && token.description.length > 0\" color=\"none\">\n      <ion-label position=\"stacked\" style=\"font-size: 1.3rem; font-family: manrope-medium; opacity: 1\">Token Description</ion-label>\n      <ion-input style=\"font-family: manrope-regular;\" disabled>\n        {{ token.description }}\n      </ion-input>\n    </ion-item>\n    <ion-item color=\"none\" class=\"ion-no-padding\">\n      <ion-col class=\"title\">\n        Name\n      </ion-col>\n      <ion-col class=\"value\">\n        {{token.token}}\n      </ion-col>\n    </ion-item>\n    <ion-item color=\"none\" class=\"ion-no-padding\">\n      <ion-col class=\"title\">\n        Token ID\n      <a class=\"copy\" (click)=\"copyToClipPWA(token.tokenid)\">\n        Copy \n      </a>\n      </ion-col>\n      <ion-col class=\"value\">\n        {{token.tokenid}}\n      </ion-col>\n    </ion-item>\n    <ion-item  color=\"none\" class=\"ion-no-padding\" [hidden]=\"token.tokenid == '0x00'\">\n      <ion-col class=\"title\">\n        Coin ID\n      <a class=\"copy\" (click)=\"copyToClipPWA(token.coinid)\">\n        Copy \n      </a>\n      </ion-col>\n      <ion-col class=\"minima-numeric value\">\n        {{token.coinid}}\n      </ion-col>\n    </ion-item>\n    <ion-item color=\"none\" class=\"ion-no-padding\">\n      <ion-col class=\"title\">\n        Total Supply\n      </ion-col>\n      <ion-col class=\"minima-numeric value\">\n        {{token.total}}\n      </ion-col>\n    </ion-item>\n    <ion-item color=\"none\" class=\"ion-no-padding\">\n      <ion-col class=\"title\">\n        Confirmed Amount\n      </ion-col>\n      <ion-col class=\"minima-numeric value\">\n        {{token.confirmed}}\n      </ion-col>\n    </ion-item>\n    <ion-item color=\"none\" class=\"ion-no-padding\">\n      <ion-col class=\"title\">\n        Unconfirmed Amount\n      </ion-col>\n      <ion-col class=\"minima-numeric value\">\n        {{token.unconfirmed}}\n      </ion-col>\n    </ion-item>\n    <ion-item color=\"none\" class=\"ion-no-padding\">\n      <ion-col class=\"title\">\n        Sendable Amount\n      </ion-col>\n      <ion-col class=\"value minima-numeric\">\n        {{token.sendable}}\n      </ion-col>\n    </ion-item>\n    <ion-item color=\"none\" class=\"ion-no-padding\">\n      <ion-col class=\"title\">\n        Mempool Amount\n      </ion-col>\n      <ion-col class=\"minima-numeric value\">\n        {{token.mempool}}\n      </ion-col>\n    </ion-item>\n    <ion-item color=\"none\" class=\"ion-no-padding\" [hidden]=\"token.tokenid == '0x00'\">\n      <ion-col class=\"title\">\n        Token Type\n      </ion-col>\n      <ion-col class=\"value\">\n        {{type}}\n      </ion-col>\n    </ion-item>\n    <ion-item color=\"none\" class=\"ion-no-padding\"  [hidden]=\"token.tokenid == '0x00' || !token.proof\">\n      <ion-col class=\"title\">\n        Proof\n      </ion-col>\n      <ion-col class=\"value\">\n        {{token.proof}}\n      </ion-col>\n    </ion-item>\n    <ion-item color=\"none\" class=\"ion-no-padding\" [hidden]=\"token.tokenid == '0x00' || !token.proof \">\n      <ion-col class=\"title\">\n        Validate Proof\n      </ion-col>\n      <ion-col class=\"value\">\n        <ion-button *ngIf=\"token.proof\" class=\"small-text\" size=\"small\" (click)=\"validateProof(token.tokenid)\">\n          Validate\n        </ion-button> \n      </ion-col>\n    </ion-item>   \n  </ion-list>\n</ion-content>\n\n<ion-footer class=\"border-t\">\n  <ion-button (click)=\"giveMe50()\" class=\"gimme50 no-ripple\" fill=\"none\">\n    Gimme 50\n  </ion-button>\n</ion-footer>"

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
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
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

module.exports = "ion-title ion-item:hover {\n  background: none;\n  --background-hover: none;\n}\n\nion-list ion-item {\n  background-color: var(--ion-color-token);\n  opacity: 1;\n}\n\n.item .item-content {\n  background-color: transparent !important;\n}\n\nion-label#name h3 {\n  font-family: manrope-bold;\n  font-size: 16px;\n}\n\nion-list {\n  margin-top: 7px;\n  background-color: transparent;\n  background: transparent;\n}\n\nion-list ion-item {\n  color: var(--ion-color-color);\n  border: 1px solid var(--ion-color-item-border);\n  --border-color: var(--ion-color-item-border);\n  padding-right: 0;\n}\n\n.title {\n  font-family: manrope-semibold;\n  font-size: 16px;\n  float: left;\n  text-overflow: ellipsis;\n  max-width: inherit;\n  white-space: normal;\n  word-wrap: normal;\n}\n\n.value {\n  font-size: 16px;\n  font-family: manrope-regular;\n  text-align: right;\n  float: right;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  max-width: inherit;\n  overflow: hidden;\n}\n\n.copy {\n  text-decoration: underline;\n  cursor: pointer;\n  font-size: 0.8rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGlhc25lbXIvcHJvamVjdHMvV2FsbGV0L21vYmlsZS1hcHAtZnJvbnQtZW5kL2FwcC9zcmMvYXBwL3BhZ2VzL2JhbGFuY2Uvdmlldy10b2tlbnMvdmlldy10b2tlbnMucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9iYWxhbmNlL3ZpZXctdG9rZW5zL3ZpZXctdG9rZW5zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0Esd0JBQUE7QUNDSjs7QURDQTtFQUNJLHdDQUFBO0VBQ0EsVUFBQTtBQ0VKOztBREFBO0VBQ0ksd0NBQUE7QUNHSjs7QUREQTtFQUNJLHlCQUFBO0VBQ0EsZUFBQTtBQ0lKOztBREZBO0VBQ0ksZUFBQTtFQUNBLDZCQUFBO0VBQ0EsdUJBQUE7QUNLSjs7QURIQTtFQUNJLDZCQUFBO0VBQ0EsOENBQUE7RUFDQSw0Q0FBQTtFQUNBLGdCQUFBO0FDTUo7O0FESkE7RUFDSSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUNPSjs7QURMQTtFQUNJLGVBQUE7RUFDQSw0QkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDUUo7O0FETkE7RUFDSSwwQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ1NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYmFsYW5jZS92aWV3LXRva2Vucy92aWV3LXRva2Vucy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdGl0bGUgaW9uLWl0ZW06aG92ZXIge1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgLS1iYWNrZ3JvdW5kLWhvdmVyOiBub25lO1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci10b2tlbik7XG4gICAgb3BhY2l0eTogMTtcbn1cbi5pdGVtIC5pdGVtLWNvbnRlbnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIH1cbmlvbi1sYWJlbCNuYW1lIGgzIHtcbiAgICBmb250LWZhbWlseTogbWFucm9wZS1ib2xkO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbn1cbmlvbi1saXN0IHsgXG4gICAgbWFyZ2luLXRvcDogN3B4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0ge1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItY29sb3IpO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1pdGVtLWJvcmRlcik7XG4gICAgLS1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1pdGVtLWJvcmRlcik7XG4gICAgcGFkZGluZy1yaWdodDogMDtcbn1cbi50aXRsZSB7XG4gICAgZm9udC1mYW1pbHk6IG1hbnJvcGUtc2VtaWJvbGQ7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIG1heC13aWR0aDogaW5oZXJpdDtcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICAgIHdvcmQtd3JhcDogbm9ybWFsO1xufVxuLnZhbHVlIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC1mYW1pbHk6IG1hbnJvcGUtcmVndWxhcjtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICBtYXgtd2lkdGg6IGluaGVyaXQ7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5jb3B5IHtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZm9udC1zaXplOiAwLjhyZW07XG59XG4iLCJpb24tdGl0bGUgaW9uLWl0ZW06aG92ZXIge1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICAtLWJhY2tncm91bmQtaG92ZXI6IG5vbmU7XG59XG5cbmlvbi1saXN0IGlvbi1pdGVtIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXRva2VuKTtcbiAgb3BhY2l0eTogMTtcbn1cblxuLml0ZW0gLml0ZW0tY29udGVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1sYWJlbCNuYW1lIGgzIHtcbiAgZm9udC1mYW1pbHk6IG1hbnJvcGUtYm9sZDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG5pb24tbGlzdCB7XG4gIG1hcmdpbi10b3A6IDdweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG5pb24tbGlzdCBpb24taXRlbSB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItY29sb3IpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItaXRlbS1ib3JkZXIpO1xuICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWl0ZW0tYm9yZGVyKTtcbiAgcGFkZGluZy1yaWdodDogMDtcbn1cblxuLnRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IG1hbnJvcGUtc2VtaWJvbGQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBtYXgtd2lkdGg6IGluaGVyaXQ7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gIHdvcmQtd3JhcDogbm9ybWFsO1xufVxuXG4udmFsdWUge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtZmFtaWx5OiBtYW5yb3BlLXJlZ3VsYXI7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBmbG9hdDogcmlnaHQ7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBtYXgtd2lkdGg6IGluaGVyaXQ7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5jb3B5IHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAwLjhyZW07XG59Il19 */"

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
/* harmony import */ var _service_balance_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../service/balance.service */ "./src/app/service/balance.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _service_minima_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../service/minima-api.service */ "./src/app/service/minima-api.service.ts");
/* harmony import */ var spark_md5__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! spark-md5 */ "./node_modules/spark-md5/spark-md5.js");
/* harmony import */ var spark_md5__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(spark_md5__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");







var ViewTokensPage = /** @class */ (function () {
    function ViewTokensPage(alertController, route, api, toastController, balanceService) {
        this.alertController = alertController;
        this.route = route;
        this.api = api;
        this.toastController = toastController;
        this.balanceService = balanceService;
        this.urlID = '';
        this.type = '';
    }
    ViewTokensPage.prototype.ngOnInit = function () {
        var _this = this;
        this.balanceService.data.subscribe(function (res) {
            _this.tokenArr = res;
            _this.urlID = _this.route.snapshot.paramMap.get('id');
            _this.tokenArr.forEach(function (tkn) {
                if (tkn.tokenid === _this.urlID) {
                    _this.token = tkn;
                    if (_this.token.tokenid === '0x00') {
                        _this.token.description = 'Minima\'s Official Token.';
                    }
                    else {
                        _this.token.description = tkn.description;
                    }
                    if (tkn.token.tokenid !== '0x00' && tkn.token.icon) {
                        _this.token.icon = 'assets/minimaBox.svg';
                    }
                    else if (tkn.token.tokenid === '0x00') {
                        _this.token.icon = 'assets/minimaBox.svg';
                    }
                    else {
                        _this.token.icon = tkn.icon;
                    }
                    if (_this.token.script === 'RETURN TRUE') {
                        _this.type = 'Value Transfer';
                    }
                    else {
                        _this.type = 'Non Fungible Token';
                    }
                }
            });
        });
    };
    ViewTokensPage.prototype.validateProof = function (tokenid) {
        var _this = this;
        this.api.validateTokenID(tokenid).then(function (res) {
            if (res.response.valid === true) {
                _this.presentToast('This proof is valid.', 'success');
            }
            else {
                _this.presentToast('Proof mismatch - not a valid proof', 'danger');
            }
        });
    };
    ViewTokensPage.prototype.createIcon = function (tokenid) {
        return this.avatar = 'https://www.gravatar.com/avatar/' + spark_md5__WEBPACK_IMPORTED_MODULE_4__["hash"](tokenid) + '?d=identicon';
    };
    // Alerts
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
    ViewTokensPage.prototype.giveMe50 = function () {
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
    ViewTokensPage.prototype.presentAlert = function (hdr, msg, sub) {
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
    ViewTokensPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: _service_minima_api_service__WEBPACK_IMPORTED_MODULE_3__["MinimaApiService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
        { type: _service_balance_service__WEBPACK_IMPORTED_MODULE_1__["BalanceService"] }
    ]; };
    ViewTokensPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
            selector: 'app-view-tokens',
            template: __webpack_require__(/*! raw-loader!./view-tokens.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/balance/view-tokens/view-tokens.page.html"),
            styles: [__webpack_require__(/*! ./view-tokens.page.scss */ "./src/app/pages/balance/view-tokens/view-tokens.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _service_minima_api_service__WEBPACK_IMPORTED_MODULE_3__["MinimaApiService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
            _service_balance_service__WEBPACK_IMPORTED_MODULE_1__["BalanceService"]])
    ], ViewTokensPage);
    return ViewTokensPage;
}());



/***/ })

}]);
//# sourceMappingURL=default~pages-balance-view-tokens-view-tokens-module~view-tokens-view-tokens-module-es5.js.map