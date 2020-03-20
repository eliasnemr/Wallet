(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["balance-balance-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/balance/balance.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/balance/balance.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n      <ion-title color=\"primary\">\n        Balance\n      </ion-title>\n    </ion-toolbar>\n\n  </ion-header>\n\n  <ion-content>\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"this.service.doRefresh($event)\">\n      <ion-refresher-content></ion-refresher-content>\n    </ion-refresher>\n\n    <ion-card color=\"white\">\n      <ion-card-header color=\"white\">\n\n      </ion-card-header>\n      <ion-card-content>\n\n        <ion-icon style=\" font-size:2.0rem; padding-left:10px;\" name=\"card\" slot=\"start\" class=\"icon-head\"></ion-icon>\n\n        <ion-list *ngFor=\"let token of tokenArr;\">\n          \n          <ion-item-sliding>\n            <ion-item-options side=\"start\">\n              <ion-item-option routerLink=\"/my-address\">Receive</ion-item-option>\n              <ion-item-option color=\"danger\" routerLink=\"/send-funds\">Send</ion-item-option>\n            </ion-item-options>\n\n            <ion-item lines=\"full\" style=\"padding: 0px;\">\n              <ion-label class=\"logo-names\">\n                <ion-icon class=\"balance-token\" src=\"../../assets/icon/minima.svg\"></ion-icon>\n                <ion-note class=\"balance-tokenname\"> {{ token.token }} </ion-note>\n              </ion-label>\n              <ion-label  class=\"confirmed-amount\">\n                {{ token.confirmed }}\n              </ion-label>\n              <ion-label *ngIf='token.unconfirmed != 0' class=\"unconfirmed-amount\" color=\"black\">\n                {{ token.unconfirmed }}\n              </ion-label>\n            </ion-item>\n\n            \n            <ion-item-options side=\"end\">\n              <ion-item-option (click)=\"presentPopover($event, token.id)\">Token ID</ion-item-option>\n            </ion-item-options>\n          </ion-item-sliding>\n         \n        </ion-list>\n      </ion-card-content>\n    </ion-card>\n\n  </ion-content>\n\n  <ion-footer>\n    <ion-toolbar>\n      <ion-buttons>\n        <ion-button class=\"action-btn\" shape=\"\" expand=\"block\" type=\"button\" (click)=\"giveMe50()\">\n          <ion-icon name=\"cash\" slot=\"start\"></ion-icon> Gimme 50\n        </ion-button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-footer>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _balance_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./balance.page */ "./src/app/balance/balance.page.ts");







const routes = [
    {
        path: '',
        component: _balance_page__WEBPACK_IMPORTED_MODULE_6__["BalancePage"],
    }
];
let BalancePageModule = class BalancePageModule {
};
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



/***/ }),

/***/ "./src/app/balance/balance.page.scss":
/*!*******************************************!*\
  !*** ./src/app/balance/balance.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media screen and (max-width: 320px) {\n  p {\n    font-size: 10px;\n  }\n}\nion-card {\n  border-radius: 30px;\n  background-color: #FFFFFF;\n}\nion-footer ion-toolbar ion-buttons ion-button {\n  width: 100%;\n}\n.confirmed-label {\n  margin: auto;\n  font-size: 1rem;\n  font-weight: 300;\n  white-space: normal;\n}\n.confirmed-amount {\n  color: #00AAC7;\n  font-size: 1rem;\n  font-family: \"Aeonik-bold\";\n  white-space: normal;\n  text-align: right;\n}\n.unconfirmed-amount {\n  font-size: 0.8rem;\n  font-family: \"Aeonik-bold\";\n  white-space: normal;\n  text-align: right;\n}\n.logo-names {\n  font-size: 1rem;\n  font-weight: 300;\n  text-align: left;\n}\n.icon-head {\n  color: #1FB4CD;\n}\n.action-btn {\n  height: 40px;\n}\n.action-btn:hover {\n  height: 50px;\n}\n.balance-token {\n  font-size: 1.5rem;\n}\n.balance-tokenname {\n  position: absolute;\n  font-family: \"Aeonik-bold\";\n  text-transform: uppercase;\n  padding-top: 6px;\n  padding-left: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGlhcy9Qcm9qZWN0cy9taW5pbWFjb3JlL21vYmlsZS1hcHAtZnJvbnQtZW5kL2FwcC9zcmMvYXBwL2JhbGFuY2UvYmFsYW5jZS5wYWdlLnNjc3MiLCJzcmMvYXBwL2JhbGFuY2UvYmFsYW5jZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSTtJQUNJLGVBQUE7RUNDTjtBQUNGO0FEQ0E7RUFDSSxtQkFBQTtFQUNBLHlCQUFBO0FDQ0o7QURHQTtFQUNJLFdBQUE7QUNBSjtBREdDO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDQUw7QURFQztFQUNHLGNBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FDQ0o7QURDQztFQUNJLGlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FDRUw7QURBQztFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDR0w7QURDQztFQUNHLGNBQUE7QUNFSjtBREFDO0VBQ0csWUFBQTtBQ0dKO0FEREU7RUFDRSxZQUFBO0FDSUo7QURERTtFQUNJLGlCQUFBO0FDSU47QURGRTtFQUNDLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNLSCIsImZpbGUiOiJzcmMvYXBwL2JhbGFuY2UvYmFsYW5jZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMjBweCkge1xuICAgIHAge1xuICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgfVxufVxuaW9uLWNhcmQge1xuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcblxufVxuXG5pb24tZm9vdGVyIGlvbi10b29sYmFyIGlvbi1idXR0b25zIGlvbi1idXR0b257XG4gICAgd2lkdGg6IDEwMCU7XG4gfVxuXG4gLmNvbmZpcm1lZC1sYWJlbHtcbiAgICAgbWFyZ2luOiBhdXRvO1xuICAgICBmb250LXNpemU6IDEuMHJlbTtcbiAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiB9XG4gLmNvbmZpcm1lZC1hbW91bnQge1xuICAgIGNvbG9yOiAjMDBBQUM3O1xuICAgIGZvbnQtc2l6ZTogMS4wcmVtO1xuICAgIGZvbnQtZmFtaWx5OiAnQWVvbmlrLWJvbGQnO1xuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gfVxuIC51bmNvbmZpcm1lZC1hbW91bnQge1xuICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICAgZm9udC1mYW1pbHk6ICdBZW9uaWstYm9sZCc7XG4gICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuIH1cbiAubG9nby1uYW1lcyB7XG4gICAgIGZvbnQtc2l6ZTogMS4wcmVtO1xuICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICBcbiB9XG5cbiAuaWNvbi1oZWFke1xuICAgIGNvbG9yOiAjMUZCNENEO1xuIH1cbiAuYWN0aW9uLWJ0biB7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICB9XG4gIC5hY3Rpb24tYnRuOmhvdmVyIHtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gIH1cblxuICAuYmFsYW5jZS10b2tlbiB7XG4gICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgfVxuICAuYmFsYW5jZS10b2tlbm5hbWUge1xuICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgZm9udC1mYW1pbHk6ICdBZW9uaWstYm9sZCcgO1xuICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgIHBhZGRpbmctdG9wOiA2cHg7XG4gICBwYWRkaW5nLWxlZnQ6IDJweDtcbiAgfSIsIkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMyMHB4KSB7XG4gIHAge1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgfVxufVxuaW9uLWNhcmQge1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xufVxuXG5pb24tZm9vdGVyIGlvbi10b29sYmFyIGlvbi1idXR0b25zIGlvbi1idXR0b24ge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNvbmZpcm1lZC1sYWJlbCB7XG4gIG1hcmdpbjogYXV0bztcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogMzAwO1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xufVxuXG4uY29uZmlybWVkLWFtb3VudCB7XG4gIGNvbG9yOiAjMDBBQUM3O1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtZmFtaWx5OiBcIkFlb25pay1ib2xkXCI7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4udW5jb25maXJtZWQtYW1vdW50IHtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIGZvbnQtZmFtaWx5OiBcIkFlb25pay1ib2xkXCI7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4ubG9nby1uYW1lcyB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLmljb24taGVhZCB7XG4gIGNvbG9yOiAjMUZCNENEO1xufVxuXG4uYWN0aW9uLWJ0biB7XG4gIGhlaWdodDogNDBweDtcbn1cblxuLmFjdGlvbi1idG46aG92ZXIge1xuICBoZWlnaHQ6IDUwcHg7XG59XG5cbi5iYWxhbmNlLXRva2VuIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG59XG5cbi5iYWxhbmNlLXRva2VubmFtZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZm9udC1mYW1pbHk6IFwiQWVvbmlrLWJvbGRcIjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgcGFkZGluZy10b3A6IDZweDtcbiAgcGFkZGluZy1sZWZ0OiAycHg7XG59Il19 */"

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
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _service_minima_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../service/minima-api.service */ "./src/app/service/minima-api.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _pop_over_pop_over_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pop-over/pop-over.component */ "./src/app/pop-over/pop-over.component.ts");
/* harmony import */ var _service_balance_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service/balance.service */ "./src/app/service/balance.service.ts");







let BalancePage = class BalancePage {
    constructor(service, api, alertController, popoverController, balanceService, ref) {
        this.service = service;
        this.api = api;
        this.alertController = alertController;
        this.popoverController = popoverController;
        this.balanceService = balanceService;
        this.ref = ref;
        this.hideProgress = false;
        this.progressShow = true;
        this.confirmed = 0;
        // - vars
        this.host = '';
        this.MINI_TOKENID = '0x0000000000000000000000000000000000000000000000000000000000000000';
    }
    ionViewWillEnter() {
        this.pullInTokens(); // subscribes & polls balance
    }
    ngOnInit() { }
    ionViewWillLeave() {
        this.balanceSubscription.unsubscribe();
    }
    presentAlert(msg, header) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: header,
                message: msg,
                buttons: ['Cancel', 'Ok']
            });
            yield alert.present();
        });
    }
    giveMe50() {
        this.service.giveMe50().subscribe((res) => {
            if (res.status === true) {
                console.log("Result is true" + res);
                this.pullInTokens();
                setTimeout(() => {
                    this.presentAlert('A transfer of 50 is on the way...', 'Minima');
                }, 600);
            }
            else {
                console.log("Result is false " + res);
                this.presentAlert(res.error, 'Error');
            }
        });
    }
    doRefresh(event) {
        console.log('Refreshing page..');
        setTimeout(() => {
            event.target.complete();
            console.log('refreshing completed.');
        }, 1000);
    }
    presentPopover(ev, data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: _pop_over_pop_over_component__WEBPACK_IMPORTED_MODULE_5__["PopOverComponent"],
                event: ev,
                cssClass: 'balance-popover',
                translucent: false,
                componentProps: { tokenid: data },
            });
            return yield popover.present();
        });
    }
    pullInTokens() {
        this.balanceSubscription = this.service.getBalance().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(responseData => {
            const tokenArr = [];
            for (const key in responseData.response.balance) {
                if (responseData.response.balance.hasOwnProperty(key)) {
                    let element = responseData.response.balance[key];
                    // round up confirmed && unconfirmed
                    let tempConfirmed = (Math.round(element.confirmed * 100) / 100);
                    let tempUnconfirmed = (Math.round(element.unconfirmed * 100) / 100);
                    tokenArr.push({
                        id: element.tokenid,
                        token: element.token,
                        confirmed: tempConfirmed,
                        unconfirmed: tempUnconfirmed,
                        total: element.total
                    });
                    // add Minima always to the top
                    if (element.tokenid === this.MINI_TOKENID) {
                        tokenArr.pop(); // pop it
                        this.service.update(tokenArr, {
                            id: element.tokenid,
                            token: element.token,
                            confirmed: tempConfirmed,
                            unconfirmed: tempUnconfirmed,
                            total: element.total
                        });
                    }
                }
            }
            return tokenArr;
        }))
            .subscribe(responseData => {
            this.tokenArr = [...responseData];
        });
    }
};
BalancePage.ctorParameters = () => [
    { type: _service_balance_service__WEBPACK_IMPORTED_MODULE_6__["BalanceService"] },
    { type: _service_minima_api_service__WEBPACK_IMPORTED_MODULE_2__["MinimaApiService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"] },
    { type: _service_balance_service__WEBPACK_IMPORTED_MODULE_6__["BalanceService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] }
];
BalancePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-balance',
        template: __webpack_require__(/*! raw-loader!./balance.page.html */ "./node_modules/raw-loader/index.js!./src/app/balance/balance.page.html"),
        providers: [_service_balance_service__WEBPACK_IMPORTED_MODULE_6__["BalanceService"]],
        styles: [__webpack_require__(/*! ./balance.page.scss */ "./src/app/balance/balance.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_balance_service__WEBPACK_IMPORTED_MODULE_6__["BalanceService"],
        _service_minima_api_service__WEBPACK_IMPORTED_MODULE_2__["MinimaApiService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"],
        _service_balance_service__WEBPACK_IMPORTED_MODULE_6__["BalanceService"],
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]])
], BalancePage);



/***/ })

}]);
//# sourceMappingURL=balance-balance-module-es2015.js.map