(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["balance-balance-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/balance/balance.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/balance/balance.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title color=\"primary\">  \n    Balance\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n</ion-refresher>\n\n  <ion-card color=\"white\">\n    <ion-card-header color=\"white\">\n      <ion-item lines=\"none\">\n        <ion-icon name=\"card\" style=\"color:#FF671D;\" slot=\"start\"></ion-icon>\n        <ion-card-title class=\"ion-text-center\" color=\"tertiary\"><ion-text color=\"tertiary\">Balance</ion-text></ion-card-title>\n      </ion-item>\n    </ion-card-header>\n    <ion-card-content>\n\n      <!-- <ion-lis *ngFor = \"let coin of balance\"> -->\n      <ion-list lines=\"none\" style=\"padding:20px;\">\n      <ion-grid>\n      \n        <ion-row>\n          <ion-col size=\"4\">\n            <ion-label>\n              \n            </ion-label>             \n          </ion-col>\n          <ion-col size=\"4\">\n            \n            <ion-label class=\"ion-text-wrap\">\n              Confirmed\n            </ion-label>\n          </ion-col>\n          <ion-col size=\"4\"> \n            <ion-label class=\"ion-text-wrap\">\n              {{strUnconfirmed}}\n            </ion-label>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"4\">\n            <ion-label>\n              <ion-icon src=\"../../assets/icon/minima.svg\"></ion-icon> MINI\n            </ion-label>          \n          </ion-col>\n          <ion-col size=\"4\">\n            <p style=\"color: #00AAC7;\">{{confirmed}}</p>\n          </ion-col>\n          <ion-col size=\"4\">\n            \n            <p style=\"color: #00AAC7\">{{unconfirmed}}</p>\n          </ion-col>\n        </ion-row>\n        <ion-progress-bar #progressBar value=\"0.25\" buffer=\"0.5\" [hidden] = \"progressShow\"></ion-progress-bar>\n      </ion-grid>\n    </ion-list>\n      \n    </ion-card-content>\n  </ion-card>\n\n\n\n  <!-- <ion-card>\n    <ion-card-header>\n      <ion-item>\n        <ion-icon name=\"book\" style=\"color:#FF671D;\" slot=\"start\"></ion-icon>\n        <ion-card-title class=\"ion-text-centre\">Transaction History (UNDER DEV)</ion-card-title>\n      </ion-item>\n    </ion-card-header>\n\n    <ion-card-content> -->\n      <!-- Begin Transaction Pull (Received, Sent transactions) -->\n      <!-- <ion-list-header>\n        \n        <ion-label><ion-icon name=\"calendar\"></ion-icon>Today</ion-label>\n      </ion-list-header>\n      <ion-list>\n        <ion-grid>\n          <ion-row style=\"width: 100%; height: 100%;\"> -->\n            <!-- <ion-col size=\"4\"> \n              <ion-chip class=\"ion-margin-start\">\n                  <ion-icon name=\"arrow-round-back\"></ion-icon>\n                <ion-label>Received</ion-label>\n              </ion-chip>\n            </ion-col>\n\n            <ion-col size=\"4\"> \n              \n                <ion-label>\n                  <h3 style=\"font-weight: bold;\">0xf53B48a78B7B5111347b4dED5769BAA11f65ea26</h3>\n                  <p>16:48</p>\n                </ion-label>\n            \n            </ion-col>\n\n            <ion-col size=\"4\" style=\"text-overflow: ellipsis;\"> \n              <ion-chip class=\"ion-margin-start\">\n              + 50.00\n              </ion-chip>\n            </ion-col>\n\n          </ion-row>\n\n          <ion-row style=\"width: 100%; height: 100%;\">\n            <ion-col size=\"4\"> \n              <ion-chip class=\"ion-margin-start\">\n                  <ion-icon name=\"arrow-round-forward\"></ion-icon>\n                <ion-label>Sent</ion-label>\n              </ion-chip>\n            </ion-col>\n\n            <ion-col size=\"4\"> \n              <ion-label>\n                <h3 style=\"font-weight: bold;\">0xf53B48a78B7B5111347b4dED5769BAA11f65ea26</h3>\n                <p>17:00</p>\n              </ion-label>\n            </ion-col>\n\n            <ion-col size=\"4\" style=\"text-overflow: ellipsis;\"> \n              <ion-chip class=\"ion-margin-start\">\n              - 200.00\n              </ion-chip>\n            </ion-col>\n\n          </ion-row>\n        </ion-grid>\n\n\n      </ion-list> -->\n\n\n      <!-- <ion-list-header>\n        <ion-label><ion-icon name=\"calendar\"></ion-icon>Yesterday</ion-label>\n      </ion-list-header>\n      <ion-list>\n        <ion-grid>\n          <ion-row style=\"width: 100%; height: 100%;\">\n            <ion-col size=\"4\"> \n              <ion-chip class=\"ion-margin-start\">\n                  <ion-icon name=\"arrow-round-back\"></ion-icon>\n                <ion-label>Received</ion-label>\n              </ion-chip>\n            </ion-col>\n\n            <ion-col size=\"4\"> \n              \n                <ion-label>\n                  <h3 style=\"font-weight: bold;\">0xf53B48a78B7B5111347b4dED5769BAA11f65ea26</h3>\n                  <p>16:48</p>\n                </ion-label>\n            \n            </ion-col>\n\n            <ion-col size=\"4\" style=\"text-overflow: ellipsis;\"> \n              <ion-chip class=\"ion-margin-start\">\n              + 50.00\n              </ion-chip>\n            </ion-col>\n\n          </ion-row>\n\n          <ion-row style=\"width: 100%; height: 100%;\">\n            <ion-col size=\"4\"> \n              <ion-chip class=\"ion-margin-start\">\n                  <ion-icon name=\"arrow-round-forward\"></ion-icon>\n                <ion-label>Sent</ion-label>\n              </ion-chip>\n            </ion-col>\n\n            <ion-col size=\"4\">\n              <ion-label>\n                <h3 style=\"font-weight: bold;\">0xf53B48a78B7B5111347b4dED5769BAA11f65ea26</h3>\n                <p>17:00</p>\n              </ion-label>\n            </ion-col>\n\n            <ion-col size=\"4\" style=\"text-overflow: ellipsis;\"> \n              <ion-chip class=\"ion-margin-start\">\n              - 200.00\n              </ion-chip>\n            </ion-col>\n\n          </ion-row>\n        </ion-grid>\n\n\n      </ion-list>\n\n\n    </ion-card-content>\n  </ion-card> -->\n\n\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <ion-button  shape=\"round\" expand=\"block\" type=\"button\"  (click)=\"giveMe50()\">\n      <ion-icon name=\"cash\" slot=\"start\" style=\"color:white;\"></ion-icon> Gimme 50\n    </ion-button>\n  </ion-toolbar>\n</ion-footer>"

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

module.exports = "@media screen and (max-width: 320px) {\n  p {\n    font-size: 10px;\n  }\n}\n.ion-text-wrap {\n  word-wrap: normal;\n}\nion-card {\n  border-radius: 30px;\n  background-color: #FFFFFF;\n}\nion-icon {\n  color: #06AAC7;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGlhcy9Qcm9qZWN0cy9taW5pbWFjb3JlL21vYmlsZS1hcHAtZnJvbnQtZW5kL2FwcC9zcmMvYXBwL2JhbGFuY2UvYmFsYW5jZS5wYWdlLnNjc3MiLCJzcmMvYXBwL2JhbGFuY2UvYmFsYW5jZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSTtJQUNJLGVBQUE7RUNDTjtBQUNGO0FERUE7RUFDSSxpQkFBQTtBQ0FKO0FER0E7RUFDSSxtQkFBQTtFQUNBLHlCQUFBO0FDQUo7QURJQTtFQUNJLGNBQUE7QUNESiIsImZpbGUiOiJzcmMvYXBwL2JhbGFuY2UvYmFsYW5jZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMjBweCkge1xuICAgIHAge1xuICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgfVxufVxuXG4uaW9uLXRleHQtd3JhcCB7XG4gICAgd29yZC13cmFwOiBub3JtYWw7XG59XG5cbmlvbi1jYXJkIHtcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XG5cbn1cblxuaW9uLWljb24ge1xuICAgIGNvbG9yOiAjMDZBQUM3O1xufSIsIkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMyMHB4KSB7XG4gIHAge1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgfVxufVxuLmlvbi10ZXh0LXdyYXAge1xuICB3b3JkLXdyYXA6IG5vcm1hbDtcbn1cblxuaW9uLWNhcmQge1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xufVxuXG5pb24taWNvbiB7XG4gIGNvbG9yOiAjMDZBQUM3O1xufSJdfQ== */"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var BalancePage = /** @class */ (function () {
    function BalancePage(api, alertController, route) {
        this.api = api;
        this.alertController = alertController;
        this.route = route;
        this.hideProgress = false;
        this.progressShow = true;
        this.confirmed = 0;
    }
    BalancePage.prototype.ngOnInit = function () {
        // this.firstObsubscription = interval(1000).subscribe( count => {
        //   console.log(count);
        // });
        // const customIntervalObservable = Observable.create(observer => {
        //   observer.next();
        //   this.doRefresh(this.route);
        //   setInterval(() => {
        //     observer.next();
        //     if(this.unconfirmed > 0) {
        //       this.doRefresh(this.alertController);
        //     }else { 
        //       observer.complete();
        //     }
        //   }, 2000);
        // });
        // this.firstObsubscription = customIntervalObservable.subscribe(data => {
        //   alert(data);
        // });
        //this.firstObsubscription.unsubscribe();
        // this.route.params.subscribe((params: Params) => {
        //   this.balance = +params.balance;
        //   console.log("balance has changed");
        // });
    };
    BalancePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.api.getBalance().then(function (res) {
            console.log(res);
            _this.progressShow = true;
            _this.confirmed = 0;
            _this.unconfirmed = '';
            _this.strUnconfirmed = '';
            var conf = res.response.confirmed;
            var unconf = res.response.unconfirmed;
            for (var i = 0; i < conf.length; i++) {
                _this.confirmed += Math.round(conf[i].amount * 100) / 100;
                console.log("Confirmed has been logged" + _this.confirmed);
            }
            if (unconf.length > 0) {
                _this.progressShow = false;
                for (var j = 0; j < unconf.length; j++) {
                    _this.strUnconfirmed = "Unconfirmed";
                    _this.unconfirmed += Math.round(unconf[j].amount * 100) / 100;
                    console.log("Unconfirmed has been balanced");
                }
            }
            //this.balance = Math.round(res.response.confirmed.amount * 100) / 100;
            console.log('Balance set');
        });
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
                _this.doRefresh(self.event);
            }
            else {
                console.log("Result is false " + res);
                _this.presentAlert(res.error, 'Error');
            }
        });
    };
    BalancePage.prototype.doRefresh = function (event) {
        var _this = this;
        console.log('Refreshing page..');
        //window.location.reload();
        this.api.getBalance().then(function (res) {
            _this.progressShow = true;
            _this.confirmed = 0;
            _this.unconfirmed = "";
            _this.strUnconfirmed = "";
            var conf = res.response.confirmed;
            var unconf = res.response.unconfirmed;
            for (var i = 0; i < conf.length; i++) {
                _this.confirmed += Math.round(conf[i].amount * 100) / 100;
            }
            if (unconf.length > 0) {
                _this.progressShow = false;
                for (var j = 0; j < unconf.length; j++) {
                    _this.strUnconfirmed = "Unconfirmed";
                    _this.unconfirmed += Math.round(unconf[j].amount * 100) / 100;
                }
            }
        });
        setTimeout(function () {
            event.target.complete();
            console.log('refreshing completed.');
        }, 200);
    };
    BalancePage.ctorParameters = function () { return [
        { type: _service_minima_api_service__WEBPACK_IMPORTED_MODULE_3__["MinimaApiService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
    ]; };
    BalancePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-balance',
            template: __webpack_require__(/*! raw-loader!./balance.page.html */ "./node_modules/raw-loader/index.js!./src/app/balance/balance.page.html"),
            styles: [__webpack_require__(/*! ./balance.page.scss */ "./src/app/balance/balance.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_minima_api_service__WEBPACK_IMPORTED_MODULE_3__["MinimaApiService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], BalancePage);
    return BalancePage;
}());



/***/ })

}]);
//# sourceMappingURL=balance-balance-module-es5.js.map