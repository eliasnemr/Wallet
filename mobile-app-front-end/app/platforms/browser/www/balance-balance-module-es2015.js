(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["balance-balance-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/balance/balance.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/balance/balance.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-app>\n<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title color=\"primary\">  \n    Balance\n    </ion-title>\n  </ion-toolbar>\n  \n</ion-header>\n\n<ion-content>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n\n  <ion-card color=\"white\">\n    <ion-card-header color=\"white\">\n      \n    </ion-card-header>\n    <ion-card-content>\n      \n      <ion-icon style=\" font-size:2.0rem; padding-left:10px;\" name=\"card\" slot=\"start\" class=\"icon-head\"></ion-icon>\n\n      <ion-list *ngFor=\"let token of tokenArr\" #tokenArrayReference>\n\n        <ion-item-sliding>\n          <ion-item-options side=\"start\">\n            <ion-item-option routerLink=\"/my-address\">Receive</ion-item-option>\n            <ion-item-option color=\"danger\" routerLink=\"/send-funds\">Send</ion-item-option>\n          </ion-item-options>\n          \n          <ion-item detail lines=\"full\" style=\"padding: 0px;\">\n            <ion-label class=\"logo-names\">\n              <ion-icon class=\"balance-token\" [hidden]=\"amiToken()\" src=\"../../assets/icon/minima.svg\"></ion-icon> \n              <ion-note class=\"balance-tokenname\" #refToken> {{ token.token }} </ion-note>\n            </ion-label>  \n            <ion-label class=\"confirmed-amount\">\n              {{ token.confirmed  }} \n            </ion-label>\n            <ion-label class=\"confirmed-amount\">\n             {{ token.unconfirmed }}\n            </ion-label>\n          </ion-item>\n      \n          <ion-item-options side=\"end\">\n            <ion-item-option (click)=\"presentPopover($event, token.tokenid)\">Token ID</ion-item-option>\n          </ion-item-options>\n        </ion-item-sliding>\n        \n    </ion-list>\n    \n\n    <ion-progress-bar \n    #progressBar value=\"0.25\" \n    buffer=\"0.5\" \n    [hidden] = \"progressShow\">\n    </ion-progress-bar>  \n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <ion-buttons>\n      <ion-button class=\"action-btn\" shape=\"\" expand=\"block\" type=\"button\"  (click)=\"giveMe50()\">\n        <ion-icon name=\"cash\" slot=\"start\"></ion-icon> Gimme 50\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer>\n</ion-app>"

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

module.exports = "@media screen and (max-width: 320px) {\n  p {\n    font-size: 10px;\n  }\n}\nion-card {\n  border-radius: 30px;\n  background-color: #FFFFFF;\n}\nion-footer ion-toolbar ion-buttons ion-button {\n  width: 100%;\n}\n.confirmed-label {\n  margin: auto;\n  font-size: 1rem;\n  font-weight: 300;\n  white-space: normal;\n}\n.confirmed-amount {\n  color: #00AAC7;\n  font-size: 1rem;\n  font-weight: 300;\n  white-space: normal;\n}\n.logo-names {\n  font-size: 0.8rem;\n  font-weight: 300;\n}\n.icon-head {\n  color: #1FB4CD;\n}\n.action-btn {\n  height: 40px;\n}\n.action-btn:hover {\n  height: 50px;\n}\n.balance-token {\n  font-size: 1.5rem;\n}\n.balance-tokenname {\n  position: absolute;\n  padding-top: 6px;\n  padding-left: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGlhcy9Qcm9qZWN0cy9taW5pbWFjb3JlL21vYmlsZS1hcHAtZnJvbnQtZW5kL2FwcC9zcmMvYXBwL2JhbGFuY2UvYmFsYW5jZS5wYWdlLnNjc3MiLCJzcmMvYXBwL2JhbGFuY2UvYmFsYW5jZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSTtJQUNJLGVBQUE7RUNDTjtBQUNGO0FEQ0E7RUFDSSxtQkFBQTtFQUNBLHlCQUFBO0FDQ0o7QURHQTtFQUNJLFdBQUE7QUNBSjtBREdDO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDQUw7QURFQztFQUNHLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0NKO0FEQ0M7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0FDRUw7QURFQztFQUNHLGNBQUE7QUNDSjtBRENDO0VBQ0csWUFBQTtBQ0VKO0FEQUU7RUFDRSxZQUFBO0FDR0o7QURBRTtFQUNJLGlCQUFBO0FDR047QURERTtFQUNDLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ0lIIiwiZmlsZSI6InNyYy9hcHAvYmFsYW5jZS9iYWxhbmNlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMyMHB4KSB7XG4gICAgcCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICB9XG59XG5pb24tY2FyZCB7XG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xuXG59XG5cbmlvbi1mb290ZXIgaW9uLXRvb2xiYXIgaW9uLWJ1dHRvbnMgaW9uLWJ1dHRvbntcbiAgICB3aWR0aDogMTAwJTtcbiB9XG5cbiAuY29uZmlybWVkLWxhYmVse1xuICAgICBtYXJnaW46IGF1dG87XG4gICAgIGZvbnQtc2l6ZTogMS4wcmVtO1xuICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuIH1cbiAuY29uZmlybWVkLWFtb3VudCB7XG4gICAgY29sb3I6ICMwMEFBQzc7XG4gICAgZm9udC1zaXplOiAxLjByZW07XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuIH1cbiAubG9nby1uYW1lcyB7XG4gICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICBcbiB9XG5cbiAuaWNvbi1oZWFke1xuICAgIGNvbG9yOiAjMUZCNENEO1xuIH1cbiAuYWN0aW9uLWJ0biB7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICB9XG4gIC5hY3Rpb24tYnRuOmhvdmVyIHtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gIH1cblxuICAuYmFsYW5jZS10b2tlbiB7XG4gICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgfVxuICAuYmFsYW5jZS10b2tlbm5hbWUge1xuICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgcGFkZGluZy10b3A6IDZweDtcbiAgIHBhZGRpbmctbGVmdDogMnB4O1xuICB9IiwiQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzIwcHgpIHtcbiAgcCB7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICB9XG59XG5pb24tY2FyZCB7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XG59XG5cbmlvbi1mb290ZXIgaW9uLXRvb2xiYXIgaW9uLWJ1dHRvbnMgaW9uLWJ1dHRvbiB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY29uZmlybWVkLWxhYmVsIHtcbiAgbWFyZ2luOiBhdXRvO1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG59XG5cbi5jb25maXJtZWQtYW1vdW50IHtcbiAgY29sb3I6ICMwMEFBQzc7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbn1cblxuLmxvZ28tbmFtZXMge1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cblxuLmljb24taGVhZCB7XG4gIGNvbG9yOiAjMUZCNENEO1xufVxuXG4uYWN0aW9uLWJ0biB7XG4gIGhlaWdodDogNDBweDtcbn1cblxuLmFjdGlvbi1idG46aG92ZXIge1xuICBoZWlnaHQ6IDUwcHg7XG59XG5cbi5iYWxhbmNlLXRva2VuIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG59XG5cbi5iYWxhbmNlLXRva2VubmFtZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcGFkZGluZy10b3A6IDZweDtcbiAgcGFkZGluZy1sZWZ0OiAycHg7XG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _service_minima_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/minima-api.service */ "./src/app/service/minima-api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _tokens__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../tokens */ "./src/app/tokens.ts");
/* harmony import */ var _pop_over_pop_over_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../pop-over/pop-over.component */ "./src/app/pop-over/pop-over.component.ts");
/* harmony import */ var _service_balance_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../service/balance.service */ "./src/app/service/balance.service.ts");








let BalancePage = class BalancePage {
    constructor(api, alertController, route, popoverController, balanceService) {
        this.api = api;
        this.alertController = alertController;
        this.route = route;
        this.popoverController = popoverController;
        this.balanceService = balanceService;
        this.MINIMA_TOKEN_ID = '0x0000000000000000000000000000000000000000000000000000000000000000';
        this.amitoken = false;
        this.tokenArr = [];
        this.hideProgress = false;
        this.progressShow = true;
        this.confirmed = 0;
    }
    ngOnInit() { }
    ionViewWillEnter() {
        this.pullInTokens();
    }
    pullInTokens() {
        this.api.getBalance().then((res) => {
            console.log(res);
            this.strUnconfirmed = '';
            let countTokens = 0;
            res.response.balance.forEach(element => {
                countTokens++;
                if (element.tokenid === this.MINIMA_TOKEN_ID) {
                    let tempConfirmed = (Math.round(element.confirmed * 100) / 100);
                    let tempUnConfirmed = '';
                    if (element.unconfirmed > 0) {
                        this.strUnconfirmed = 'Unconfirmed';
                        tempUnConfirmed = (Math.round(element.unconfirmed * 100) / 100).toString();
                    }
                    else {
                        tempUnConfirmed = '';
                    }
                    let temp = new _tokens__WEBPACK_IMPORTED_MODULE_5__["Tokens"](element.tokenid, element.token, tempConfirmed, tempUnConfirmed, element.total);
                    this.tokenArr.push(temp);
                    //this.tokenArr[0] = temp;
                }
                this.strUnconfirmed = '';
            });
            res.response.balance.forEach(element => {
                if (element.tokenid != this.MINIMA_TOKEN_ID) {
                    let tempConfirmed = (Math.round(element.confirmed * 100) / 100);
                    let tempUnConfirmed = '';
                    if (element.unconfirmed > 0) {
                        this.strUnconfirmed = 'Unconfirmed';
                        tempUnConfirmed = (Math.round(element.unconfirmed * 100) / 100).toString();
                    }
                    else {
                        tempUnConfirmed = '';
                    }
                    let temp = new _tokens__WEBPACK_IMPORTED_MODULE_5__["Tokens"](element.tokenid, element.token, tempConfirmed, tempUnConfirmed, element.total);
                    this.tokenArr.push(temp);
                }
                this.strUnconfirmed = '';
            });
        });
        this.tokenArr = new Array;
    }
    amiToken() {
        return this.amitoken;
    }
    shouldHide() {
        return true;
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
        this.api.giveMe50().then((res) => {
            if (res.status === true) {
                console.log("Result is true" + res);
                this.presentAlert('A transfer of 50 is on the way...', 'Minima');
                this.doRefresh(self.event);
            }
            else {
                console.log("Result is false " + res);
                this.presentAlert(res.error, 'Error');
            }
        });
    }
    doRefresh(event) {
        console.log('Refreshing page..');
        //window.location.reload();
        this.pullInTokens();
        setTimeout(() => {
            event.target.complete();
            console.log('refreshing completed.');
        }, 200);
    }
    presentPopover(ev, data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: _pop_over_pop_over_component__WEBPACK_IMPORTED_MODULE_6__["PopOverComponent"],
                event: ev,
                cssClass: 'popover',
                translucent: false,
                componentProps: { tokenid: data },
            });
            return yield popover.present();
        });
    }
};
BalancePage.ctorParameters = () => [
    { type: _service_minima_api_service__WEBPACK_IMPORTED_MODULE_3__["MinimaApiService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] },
    { type: _service_balance_service__WEBPACK_IMPORTED_MODULE_7__["BalanceService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('referenceToken', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonLabel"])
], BalancePage.prototype, "referenceToken", void 0);
BalancePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-balance',
        template: __webpack_require__(/*! raw-loader!./balance.page.html */ "./node_modules/raw-loader/index.js!./src/app/balance/balance.page.html"),
        styles: [__webpack_require__(/*! ./balance.page.scss */ "./src/app/balance/balance.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_minima_api_service__WEBPACK_IMPORTED_MODULE_3__["MinimaApiService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"],
        _service_balance_service__WEBPACK_IMPORTED_MODULE_7__["BalanceService"]])
], BalancePage);



/***/ })

}]);
//# sourceMappingURL=balance-balance-module-es2015.js.map