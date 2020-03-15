(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["balance-balance-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/balance/balance.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/balance/balance.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-app>\n  <ion-header>\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n      <ion-title color=\"primary\">\n        Balance\n      </ion-title>\n    </ion-toolbar>\n\n  </ion-header>\n\n  <ion-content>\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n      <ion-refresher-content></ion-refresher-content>\n    </ion-refresher>\n\n    <ion-card color=\"white\">\n      <ion-card-header color=\"white\">\n\n      </ion-card-header>\n      <ion-card-content>\n\n        <ion-icon style=\" font-size:2.0rem; padding-left:10px;\" name=\"card\" slot=\"start\" class=\"icon-head\"></ion-icon>\n\n        <ion-list *ngFor=\"let token of tokenArr;\" #tokenArrayReference>\n\n          <ion-item-sliding>\n            <ion-item-options side=\"start\">\n              <ion-item-option routerLink=\"/my-address\">Receive</ion-item-option>\n              <ion-item-option color=\"danger\" routerLink=\"/send-funds\">Send</ion-item-option>\n            </ion-item-options>\n\n            <ion-item lines=\"full\" style=\"padding: 0px;\">\n              <ion-label class=\"logo-names\" text-left>\n                <ion-icon class=\"balance-token\" [hidden]=\"amiToken()\" src=\"../../assets/icon/minima.svg\"></ion-icon>\n                <ion-note class=\"balance-tokenname\" #refToken> {{ token.token}} </ion-note>\n              </ion-label>\n              <ion-label class=\"confirmed-amount\" text-right>\n                {{ token.confirmed }}\n              </ion-label>\n              <ion-label  *ngIf='token.unconfirmed != 0' class=\"unconfirmed-amount\" color=\"black\" text-right>\n                {{ token.unconfirmed }}\n              </ion-label>\n            </ion-item>\n\n            <ion-item-options side=\"end\">\n              <ion-item-option (click)=\"presentPopover($event, token.tokenid)\">Token ID</ion-item-option>\n            </ion-item-options>\n          </ion-item-sliding>\n\n        </ion-list>\n\n\n        <ion-progress-bar #progressBar value=\"0.25\" buffer=\"0.5\" [hidden]=\"progressShow\">\n        </ion-progress-bar>\n      </ion-card-content>\n    </ion-card>\n\n  </ion-content>\n\n  <ion-footer>\n    <ion-toolbar>\n      <ion-buttons>\n        <ion-button class=\"action-btn\" shape=\"\" expand=\"block\" type=\"button\" (click)=\"giveMe50()\">\n          <ion-icon name=\"cash\" slot=\"start\"></ion-icon> Gimme 50\n        </ion-button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-footer>"

/***/ }),

/***/ "./src/app/balance/balance.module.ts":
/*!*******************************************!*\
  !*** ./src/app/balance/balance.module.ts ***!
  \*******************************************/
/*! exports provided: BalancePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BalancePageModule", function() { return BalancePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _balance_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./balance.page */ "./src/app/balance/balance.page.ts");







var routes = [
    {
        path: '',
        component: _balance_page__WEBPACK_IMPORTED_MODULE_6__["BalancePage"],
    }
];
var BalancePageModule = /** @class */ (function () {
    function BalancePageModule() {
    }
    BalancePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_balance_page__WEBPACK_IMPORTED_MODULE_6__["BalancePage"]]
        })
    ], BalancePageModule);
    return BalancePageModule;
}());



/***/ }),

/***/ "./src/app/balance/balance.page.scss":
/*!*******************************************!*\
  !*** ./src/app/balance/balance.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media screen and (max-width: 320px) {\n  p {\n    font-size: 10px;\n  }\n}\nion-card {\n  border-radius: 30px;\n  background-color: #FFFFFF;\n}\nion-footer ion-toolbar ion-buttons ion-button {\n  width: 100%;\n}\n.confirmed-label {\n  margin: auto;\n  font-size: 1rem;\n  font-weight: 300;\n  white-space: normal;\n}\n.confirmed-amount {\n  color: #00AAC7;\n  font-size: 1rem;\n  font-family: \"Aeonik-bold\";\n  white-space: normal;\n}\n.unconfirmed-amount {\n  font-size: 0.8rem;\n  font-family: \"Aeonik-bold\";\n  white-space: normal;\n}\n.logo-names {\n  font-size: 1rem;\n  font-weight: 300;\n}\n.icon-head {\n  color: #1FB4CD;\n}\n.action-btn {\n  height: 40px;\n}\n.action-btn:hover {\n  height: 50px;\n}\n.balance-token {\n  font-size: 1.5rem;\n}\n.balance-tokenname {\n  position: absolute;\n  font-family: \"Aeonik-bold\";\n  text-transform: uppercase;\n  padding-top: 6px;\n  padding-left: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGlhcy9Qcm9qZWN0cy9taW5pbWFjb3JlL21vYmlsZS1hcHAtZnJvbnQtZW5kL2FwcC9zcmMvYXBwL2JhbGFuY2UvYmFsYW5jZS5wYWdlLnNjc3MiLCJzcmMvYXBwL2JhbGFuY2UvYmFsYW5jZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSTtJQUNJLGVBQUE7RUNDTjtBQUNGO0FEQ0E7RUFDSSxtQkFBQTtFQUNBLHlCQUFBO0FDQ0o7QURHQTtFQUNJLFdBQUE7QUNBSjtBREdDO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDQUw7QURFQztFQUNHLGNBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSxtQkFBQTtBQ0NKO0FEQ0M7RUFDSSxpQkFBQTtFQUNBLDBCQUFBO0VBQ0EsbUJBQUE7QUNFTDtBREFDO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FDR0w7QURDQztFQUNHLGNBQUE7QUNFSjtBREFDO0VBQ0csWUFBQTtBQ0dKO0FEREU7RUFDRSxZQUFBO0FDSUo7QURERTtFQUNJLGlCQUFBO0FDSU47QURGRTtFQUNDLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNLSCIsImZpbGUiOiJzcmMvYXBwL2JhbGFuY2UvYmFsYW5jZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMjBweCkge1xuICAgIHAge1xuICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgfVxufVxuaW9uLWNhcmQge1xuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcblxufVxuXG5pb24tZm9vdGVyIGlvbi10b29sYmFyIGlvbi1idXR0b25zIGlvbi1idXR0b257XG4gICAgd2lkdGg6IDEwMCU7XG4gfVxuXG4gLmNvbmZpcm1lZC1sYWJlbHtcbiAgICAgbWFyZ2luOiBhdXRvO1xuICAgICBmb250LXNpemU6IDEuMHJlbTtcbiAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiB9XG4gLmNvbmZpcm1lZC1hbW91bnQge1xuICAgIGNvbG9yOiAjMDBBQUM3O1xuICAgIGZvbnQtc2l6ZTogMS4wcmVtO1xuICAgIGZvbnQtZmFtaWx5OiAnQWVvbmlrLWJvbGQnO1xuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gfVxuIC51bmNvbmZpcm1lZC1hbW91bnQge1xuICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICAgZm9udC1mYW1pbHk6ICdBZW9uaWstYm9sZCc7XG4gICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gfVxuIC5sb2dvLW5hbWVzIHtcbiAgICAgZm9udC1zaXplOiAxLjByZW07XG4gICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgIFxuIH1cblxuIC5pY29uLWhlYWR7XG4gICAgY29sb3I6ICMxRkI0Q0Q7XG4gfVxuIC5hY3Rpb24tYnRuIHtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gIH1cbiAgLmFjdGlvbi1idG46aG92ZXIge1xuICAgIGhlaWdodDogNTBweDtcbiAgfVxuXG4gIC5iYWxhbmNlLXRva2VuIHtcbiAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICB9XG4gIC5iYWxhbmNlLXRva2VubmFtZSB7XG4gICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICBmb250LWZhbWlseTogJ0Flb25pay1ib2xkJyA7XG4gICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgcGFkZGluZy10b3A6IDZweDtcbiAgIHBhZGRpbmctbGVmdDogMnB4O1xuICB9IiwiQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzIwcHgpIHtcbiAgcCB7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICB9XG59XG5pb24tY2FyZCB7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XG59XG5cbmlvbi1mb290ZXIgaW9uLXRvb2xiYXIgaW9uLWJ1dHRvbnMgaW9uLWJ1dHRvbiB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY29uZmlybWVkLWxhYmVsIHtcbiAgbWFyZ2luOiBhdXRvO1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG59XG5cbi5jb25maXJtZWQtYW1vdW50IHtcbiAgY29sb3I6ICMwMEFBQzc7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC1mYW1pbHk6IFwiQWVvbmlrLWJvbGRcIjtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbn1cblxuLnVuY29uZmlybWVkLWFtb3VudCB7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBmb250LWZhbWlseTogXCJBZW9uaWstYm9sZFwiO1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xufVxuXG4ubG9nby1uYW1lcyB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cblxuLmljb24taGVhZCB7XG4gIGNvbG9yOiAjMUZCNENEO1xufVxuXG4uYWN0aW9uLWJ0biB7XG4gIGhlaWdodDogNDBweDtcbn1cblxuLmFjdGlvbi1idG46aG92ZXIge1xuICBoZWlnaHQ6IDUwcHg7XG59XG5cbi5iYWxhbmNlLXRva2VuIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG59XG5cbi5iYWxhbmNlLXRva2VubmFtZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZm9udC1mYW1pbHk6IFwiQWVvbmlrLWJvbGRcIjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgcGFkZGluZy10b3A6IDZweDtcbiAgcGFkZGluZy1sZWZ0OiAycHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/balance/balance.page.ts":
/*!*****************************************!*\
  !*** ./src/app/balance/balance.page.ts ***!
  \*****************************************/
/*! exports provided: BalancePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BalancePage", function() { return BalancePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _service_minima_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/minima-api.service */ "./src/app/service/minima-api.service.ts");
/* harmony import */ var _MiniObjects_tokens__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../MiniObjects/tokens */ "./src/app/MiniObjects/tokens.ts");
/* harmony import */ var _pop_over_pop_over_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pop-over/pop-over.component */ "./src/app/pop-over/pop-over.component.ts");
/* harmony import */ var _service_balance_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service/balance.service */ "./src/app/service/balance.service.ts");







var BalancePage = /** @class */ (function () {
    function BalancePage(api, alertController, popoverController, balanceService, changeDetection) {
        this.api = api;
        this.alertController = alertController;
        this.popoverController = popoverController;
        this.balanceService = balanceService;
        this.changeDetection = changeDetection;
        this.MINIMA_TOKEN_ID = '0x0000000000000000000000000000000000000000000000000000000000000000';
        this.amitoken = false;
        this.tokenArr = [];
        this.hideProgress = false;
        this.progressShow = true;
        this.confirmed = 0;
        // - vars
        this.host = '';
    }
    BalancePage.prototype.ngOnInit = function () { };
    BalancePage.prototype.ionViewWillEnter = function () {
        this.pullInTokens();
    };
    BalancePage.prototype.pullInTokens = function () {
        var _this = this;
        // get our balance
        this.api.getBalance().then(function (res) {
            console.log(res);
            var countTokens = 0;
            var tempConfirmed = 0;
            var tempUnConfirmed = '';
            // check through every token we own..
            res.response.balance.forEach(function (element) {
                countTokens++;
                // if token === Minima then return that on top of our list.
                if (element.tokenid === _this.MINIMA_TOKEN_ID) {
                    // round up our confirmed amount and add it into tempConfirmed
                    tempConfirmed = (Math.round(element.confirmed * 100) / 100);
                    tempUnConfirmed = '';
                    if (element.unconfirmed > 0) {
                        tempUnConfirmed = (Math.round(element.unconfirmed * 100) / 100).toString();
                    }
                    else {
                        tempUnConfirmed = '';
                    }
                    // create a temporary array.. push it into our global array
                    var temp = new _MiniObjects_tokens__WEBPACK_IMPORTED_MODULE_4__["Tokens"](element.tokenid, element.token, tempConfirmed, tempUnConfirmed, element.total);
                    _this.tokenArr.push(temp);
                }
            });
            // check through every token we have..
            res.response.balance.forEach(function (element) {
                // if it's not Minima once again add the rest of the tokens..
                if (element.tokenid != _this.MINIMA_TOKEN_ID) {
                    tempConfirmed = (Math.round(element.confirmed * 100) / 100);
                    tempUnConfirmed = '';
                    if (element.unconfirmed > 0) {
                        tempUnConfirmed = (Math.round(element.unconfirmed * 100) / 100).toString();
                    }
                    else {
                        tempUnConfirmed = '';
                    }
                    // Create another temporary array
                    var temp = new _MiniObjects_tokens__WEBPACK_IMPORTED_MODULE_4__["Tokens"](element.tokenid, element.token, tempConfirmed, tempUnConfirmed, element.total);
                    // push it into..
                    _this.tokenArr.push(temp);
                }
            });
        });
        this.tokenArr = new Array;
    };
    BalancePage.prototype.amiToken = function () {
        return this.amitoken;
    };
    BalancePage.prototype.shouldHide = function () {
        return true;
    };
    BalancePage.prototype.presentAlert = function (msg, header) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: header,
                            message: msg,
                            buttons: ['Cancel', 'Ok']
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
    BalancePage.prototype.giveMe50 = function () {
        var _this = this;
        this.api.giveMe50().then(function (res) {
            if (res.status === true) {
                console.log("Result is true" + res);
                _this.presentAlert('A transfer of 50 is on the way...', 'Minima');
                _this.pullInTokens();
            }
            else {
                console.log("Result is false " + res);
                _this.presentAlert(res.error, 'Error');
            }
        });
    };
    BalancePage.prototype.doRefresh = function (event) {
        console.log('Refreshing page..');
        //window.location.reload();
        this.pullInTokens();
        setTimeout(function () {
            event.target.complete();
            console.log('refreshing completed.');
        }, 0);
    };
    BalancePage.prototype.presentPopover = function (ev, data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var popover;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverController.create({
                            component: _pop_over_pop_over_component__WEBPACK_IMPORTED_MODULE_5__["PopOverComponent"],
                            event: ev,
                            cssClass: 'balance-popover',
                            translucent: false,
                            componentProps: { tokenid: data },
                        })];
                    case 1:
                        popover = _a.sent();
                        return [4 /*yield*/, popover.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    BalancePage.ctorParameters = function () { return [
        { type: _service_minima_api_service__WEBPACK_IMPORTED_MODULE_3__["MinimaApiService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] },
        { type: _service_balance_service__WEBPACK_IMPORTED_MODULE_6__["BalanceService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('referenceToken', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonLabel"])
    ], BalancePage.prototype, "referenceToken", void 0);
    BalancePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-balance',
            template: __webpack_require__(/*! raw-loader!./balance.page.html */ "./node_modules/raw-loader/index.js!./src/app/balance/balance.page.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].Default,
            styles: [__webpack_require__(/*! ./balance.page.scss */ "./src/app/balance/balance.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_minima_api_service__WEBPACK_IMPORTED_MODULE_3__["MinimaApiService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"],
            _service_balance_service__WEBPACK_IMPORTED_MODULE_6__["BalanceService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], BalancePage);
    return BalancePage;
}());



/***/ })

}]);
//# sourceMappingURL=balance-balance-module-es5.js.map