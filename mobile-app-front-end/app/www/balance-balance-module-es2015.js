(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["balance-balance-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/balance/balance.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/balance/balance.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-app>\n<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title color=\"primary\">  \n    Balance\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n\n  <ion-card color=\"white\">\n    <ion-card-header color=\"white\">\n      <ion-item lines=\"none\">\n        <ion-icon style=\" font-size:1.0rem\" name=\"card\" slot=\"start\"></ion-icon>\n        <ion-card-title class=\"ion-text-center\" color=\"tertiary\"><ion-text color=\"tertiary\"></ion-text></ion-card-title>\n      </ion-item>\n    </ion-card-header>\n    <ion-card-content>\n\n      <!-- <ion-lis *ngFor = \"let coin of balance\"> -->\n      <ion-list lines=\"none\" style=\"padding:20px;\">\n        <ion-item>\n          <ion-label></ion-label> <!-- Empty label filler -->\n          <ion-label class=\"confirmed-label\">\n            Confirmed\n          </ion-label>\n          <ion-label class=\"confirmed-label\">\n            {{strUnconfirmed}}\n          </ion-label>\n\n        </ion-item>\n          \n        <ion-item>\n          <ion-label class=\"logo-names\">\n            <ion-icon src=\"../../assets/icon/minima.svg\"></ion-icon> MINI\n          </ion-label>  \n          <ion-label class=\"confirmed-amount\">\n            {{ confirmed }}\n          </ion-label>\n          <ion-label class=\"confirmed-amount\">\n           {{ unconfirmed }}\n          </ion-label>\n        </ion-item>\n        <ion-progress-bar #progressBar value=\"0.25\" buffer=\"0.5\" [hidden] = \"progressShow\"></ion-progress-bar>\n    </ion-list>\n      \n    </ion-card-content>\n  </ion-card>\n\n\n\n  <!-- <ion-card>\n    <ion-card-header>\n      <ion-item>\n        <ion-icon name=\"book\" style=\"color:#FF671D;\" slot=\"start\"></ion-icon>\n        <ion-card-title class=\"ion-text-centre\">Transaction History (UNDER DEV)</ion-card-title>\n      </ion-item>\n    </ion-card-header>\n\n    <ion-card-content> -->\n      <!-- Begin Transaction Pull (Received, Sent transactions) -->\n      <!-- <ion-list-header>\n        \n        <ion-label><ion-icon name=\"calendar\"></ion-icon>Today</ion-label>\n      </ion-list-header>\n      <ion-list>\n        <ion-grid>\n          <ion-row style=\"width: 100%; height: 100%;\"> -->\n            <!-- <ion-col size=\"4\"> \n              <ion-chip class=\"ion-margin-start\">\n                  <ion-icon name=\"arrow-round-back\"></ion-icon>\n                <ion-label>Received</ion-label>\n              </ion-chip>\n            </ion-col>\n\n            <ion-col size=\"4\"> \n              \n                <ion-label>\n                  <h3 style=\"font-weight: bold;\">0xf53B48a78B7B5111347b4dED5769BAA11f65ea26</h3>\n                  <p>16:48</p>\n                </ion-label>\n            \n            </ion-col>\n\n            <ion-col size=\"4\" style=\"text-overflow: ellipsis;\"> \n              <ion-chip class=\"ion-margin-start\">\n              + 50.00\n              </ion-chip>\n            </ion-col>\n\n          </ion-row>\n\n          <ion-row style=\"width: 100%; height: 100%;\">\n            <ion-col size=\"4\"> \n              <ion-chip class=\"ion-margin-start\">\n                  <ion-icon name=\"arrow-round-forward\"></ion-icon>\n                <ion-label>Sent</ion-label>\n              </ion-chip>\n            </ion-col>\n\n            <ion-col size=\"4\"> \n              <ion-label>\n                <h3 style=\"font-weight: bold;\">0xf53B48a78B7B5111347b4dED5769BAA11f65ea26</h3>\n                <p>17:00</p>\n              </ion-label>\n            </ion-col>\n\n            <ion-col size=\"4\" style=\"text-overflow: ellipsis;\"> \n              <ion-chip class=\"ion-margin-start\">\n              - 200.00\n              </ion-chip>\n            </ion-col>\n\n          </ion-row>\n        </ion-grid>\n\n\n      </ion-list> -->\n\n\n      <!-- <ion-list-header>\n        <ion-label><ion-icon name=\"calendar\"></ion-icon>Yesterday</ion-label>\n      </ion-list-header>\n      <ion-list>\n        <ion-grid>\n          <ion-row style=\"width: 100%; height: 100%;\">\n            <ion-col size=\"4\"> \n              <ion-chip class=\"ion-margin-start\">\n                  <ion-icon name=\"arrow-round-back\"></ion-icon>\n                <ion-label>Received</ion-label>\n              </ion-chip>\n            </ion-col>\n\n            <ion-col size=\"4\"> \n              \n                <ion-label>\n                  <h3 style=\"font-weight: bold;\">0xf53B48a78B7B5111347b4dED5769BAA11f65ea26</h3>\n                  <p>16:48</p>\n                </ion-label>\n            \n            </ion-col>\n\n            <ion-col size=\"4\" style=\"text-overflow: ellipsis;\"> \n              <ion-chip class=\"ion-margin-start\">\n              + 50.00\n              </ion-chip>\n            </ion-col>\n\n          </ion-row>\n\n          <ion-row style=\"width: 100%; height: 100%;\">\n            <ion-col size=\"4\"> \n              <ion-chip class=\"ion-margin-start\">\n                  <ion-icon name=\"arrow-round-forward\"></ion-icon>\n                <ion-label>Sent</ion-label>\n              </ion-chip>\n            </ion-col>\n\n            <ion-col size=\"4\">\n              <ion-label>\n                <h3 style=\"font-weight: bold;\">0xf53B48a78B7B5111347b4dED5769BAA11f65ea26</h3>\n                <p>17:00</p>\n              </ion-label>\n            </ion-col>\n\n            <ion-col size=\"4\" style=\"text-overflow: ellipsis;\"> \n              <ion-chip class=\"ion-margin-start\">\n              - 200.00\n              </ion-chip>\n            </ion-col>\n\n          </ion-row>\n        </ion-grid>\n\n\n      </ion-list>\n\n\n    </ion-card-content>\n  </ion-card> -->\n\n\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <ion-buttons>\n      <ion-button style=\"color:#FF671D\"  shape=\"\" expand=\"block\" type=\"button\"  (click)=\"giveMe50()\">\n        <ion-icon name=\"cash\" slot=\"start\" style=\"color: #FF671D\"></ion-icon> Gimme 50\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer>\n</ion-app>"

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

module.exports = "@media screen and (max-width: 320px) {\n  p {\n    font-size: 10px;\n  }\n}\nion-card {\n  border-radius: 30px;\n  background-color: #FFFFFF;\n}\nion-footer ion-toolbar ion-buttons ion-button {\n  width: 100%;\n}\n.confirmed-label {\n  font-size: 0.75rem;\n  font-weight: 300;\n  white-space: normal;\n}\n.confirmed-amount {\n  color: #00AAC7;\n  font-size: 0.75rem;\n  font-weight: 300;\n  white-space: normal;\n}\n.logo-names {\n  font-size: 0.75rem;\n  font-weight: 300;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGlhcy9Qcm9qZWN0cy9taW5pbWFjb3JlL21vYmlsZS1hcHAtZnJvbnQtZW5kL2FwcC9zcmMvYXBwL2JhbGFuY2UvYmFsYW5jZS5wYWdlLnNjc3MiLCJzcmMvYXBwL2JhbGFuY2UvYmFsYW5jZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSTtJQUNJLGVBQUE7RUNDTjtBQUNGO0FEQ0E7RUFDSSxtQkFBQTtFQUNBLHlCQUFBO0FDQ0o7QURHQTtFQUNJLFdBQUE7QUNBSjtBREdDO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDQUw7QURFQztFQUNHLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNDSjtBRENDO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtBQ0VMIiwiZmlsZSI6InNyYy9hcHAvYmFsYW5jZS9iYWxhbmNlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMyMHB4KSB7XG4gICAgcCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICB9XG59XG5pb24tY2FyZCB7XG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xuXG59XG5cbmlvbi1mb290ZXIgaW9uLXRvb2xiYXIgaW9uLWJ1dHRvbnMgaW9uLWJ1dHRvbntcbiAgICB3aWR0aDogMTAwJTtcbiB9XG5cbiAuY29uZmlybWVkLWxhYmVse1xuICAgICBmb250LXNpemU6IDAuNzVyZW07XG4gICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gfVxuIC5jb25maXJtZWQtYW1vdW50IHtcbiAgICBjb2xvcjogIzAwQUFDNztcbiAgICBmb250LXNpemU6IDAuNzVyZW07XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuIH1cbiAubG9nby1uYW1lcyB7XG4gICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgXG4gfSIsIkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMyMHB4KSB7XG4gIHAge1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgfVxufVxuaW9uLWNhcmQge1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xufVxuXG5pb24tZm9vdGVyIGlvbi10b29sYmFyIGlvbi1idXR0b25zIGlvbi1idXR0b24ge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNvbmZpcm1lZC1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbn1cblxuLmNvbmZpcm1lZC1hbW91bnQge1xuICBjb2xvcjogIzAwQUFDNztcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xuICBmb250LXdlaWdodDogMzAwO1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xufVxuXG4ubG9nby1uYW1lcyB7XG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn0iXX0= */"

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





let BalancePage = class BalancePage {
    constructor(api, alertController, route) {
        this.api = api;
        this.alertController = alertController;
        this.route = route;
        this.hideProgress = false;
        this.progressShow = true;
        this.confirmed = 0;
    }
    ngOnInit() {
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
    }
    ionViewWillEnter() {
        this.api.getBalance().then((res) => {
            console.log(res);
            this.progressShow = true;
            this.confirmed = 0;
            this.unconfirmed = '';
            this.strUnconfirmed = '';
            let conf = res.response.confirmed;
            let unconf = res.response.unconfirmed;
            for (let i = 0; i < conf.length; i++) {
                this.confirmed += Math.round(conf[i].amount * 100) / 100;
                console.log("Confirmed has been logged" + this.confirmed);
            }
            if (unconf.length > 0) {
                this.progressShow = false;
                for (let j = 0; j < unconf.length; j++) {
                    this.strUnconfirmed = "Unconfirmed";
                    this.unconfirmed += Math.round(unconf[j].amount * 100) / 100;
                    console.log("Unconfirmed has been balanced");
                }
            }
            //this.balance = Math.round(res.response.confirmed.amount * 100) / 100;
            console.log('Balance set');
        });
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
        this.api.getBalance().then((res) => {
            this.progressShow = true;
            this.confirmed = 0;
            this.unconfirmed = "";
            this.strUnconfirmed = "";
            let conf = res.response.confirmed;
            let unconf = res.response.unconfirmed;
            for (let i = 0; i < conf.length; i++) {
                this.confirmed += Math.round(conf[i].amount * 100) / 100;
            }
            if (unconf.length > 0) {
                this.progressShow = false;
                for (let j = 0; j < unconf.length; j++) {
                    this.strUnconfirmed = "Unconfirmed";
                    this.unconfirmed += Math.round(unconf[j].amount * 100) / 100;
                }
            }
        });
        setTimeout(() => {
            event.target.complete();
            console.log('refreshing completed.');
        }, 200);
    }
};
BalancePage.ctorParameters = () => [
    { type: _service_minima_api_service__WEBPACK_IMPORTED_MODULE_3__["MinimaApiService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
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



/***/ })

}]);
//# sourceMappingURL=balance-balance-module-es2015.js.map