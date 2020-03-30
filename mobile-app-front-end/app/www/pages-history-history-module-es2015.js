(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-history-history-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/history/history.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/history/history.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-app>\n  <ion-header>\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n      <ion-title color=\"primary\">Transaction History</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content>\n    <ion-card>\n      <ion-card-header>\n        Recent Activity\n      </ion-card-header>\n    <ion-card-content>\n  \n<ion-item *ngIf=\"t_summaryArr.length < 1\" lines=\"none\">\n<ion-text style=\"font-family: Aeonik-light;\">No activities to display.</ion-text>\n</ion-item>\n\n  <ion-list *ngFor=\"let transaction of t_summaryArr;\">\n    <a *ngFor=\"let trans of transaction.txpow.txn.outputs\">\n  <ion-grid><ion-row>\n  <ion-item *ngIf=\"t_summaryArr.length >= 1;\" detail class=\"activity\"\n  (click)=\"presentHistoryInfo($event, \n              trans.address,\n              transaction.txpow.block, \n              transaction.value, \n              transaction.txpow.isblock, \n              transaction.txpow.txpowid, \n              transaction.txpow.parent, \n              transaction.txpow.blkdiff, \n              transaction.txpow.date.substring(11,16))\">\n\n  <ion-col class=\"col-month\" fixed=\"true\">\n\n  <ion-label>\n  <h1 id=\"month\">\n  {{ transaction.txpow.date.substring(4, 7) }} \n  </h1>\n  <p id=\"day\">\n  {{ transaction.txpow.date.substring(8, 10) }}\n  </p>\n  </ion-label>\n\n  </ion-col>\n\n  <ion-col class=\"col-transtype\" fixed=\"true\">\n\n  <ion-label id=\"transaction\">\n  <h2 class=\"h2-type\">\n  {{ checkTransType(transaction.value) }} Minima\n  </h2>\n\n  <a *ngFor=\"let input of transaction.txpow.txn.inputs\">\n\n  <p class=\"p-tokenid\">\n  Token Id: {{ input.tokenid.substring(0, 10) }}\n  </p>\n\n  </a>\n\n  </ion-label>\n\n  </ion-col>\n\n  <ion-col class=\"col-transamnt\" fixed=\"true\">\n\n  <ion-label class=\"amount\">\n  <h2 class=\"amount-h2\">\n  {{ transaction.value + \" \" }} MINI\n  </h2>\n  </ion-label>\n\n  </ion-col>\n\n  </ion-item>\n\n\n  \n  </ion-row></ion-grid>\n  </a>\n  </ion-list>\n\n\n\n  <!-- SKELETON FOR UX LOADING -->\n<div *ngIf=\"t_summaryArr.length < 1\">\n<ion-list *ngFor=\"let length of t_summarySpoof\">\n  <ion-grid><ion-row>\n  <ion-item detail class=\"activity\">\n  \n  <ion-col class=\"col-month\" fixed=\"true\">\n    <ion-label>\n    <h1 id=\"month\">\n      <ion-skeleton-text animated style=\"width: 10%; height: 10%;\"></ion-skeleton-text>\n    </h1>\n    <p id=\"day\">\n      <ion-skeleton-text animated style=\"width: 5%\"></ion-skeleton-text>\n    </p>\n    </ion-label>\n  </ion-col>\n\n<ion-col class=\"col-transtype\" fixed=\"true\">\n  <ion-label id=\"transaction\">\n    <h2 class=\"h2-type\">\n      <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n    </h2>\n    <p class=\"p-tokenid\">\n      <ion-skeleton-text animated style=\"width: 30%\"></ion-skeleton-text>\n    </p>\n  </ion-label>\n</ion-col>\n\n<ion-col class=\"col-transamnt\" fixed=\"true\">\n  <ion-label class=\"amount\">\n    <h2 class=\"amount-h2\">\n      <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n    </h2>\n  </ion-label> \n</ion-col>\n</ion-item>\n\n</ion-row></ion-grid>\n</ion-list>\n</div>\n\n</ion-card-content>\n</ion-card>\n  \n  </ion-content>\n  </ion-app>"

/***/ }),

/***/ "./src/app/pages/history/history.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/history/history.module.ts ***!
  \*************************************************/
/*! exports provided: HistoryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryPageModule", function() { return HistoryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _history_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./history.page */ "./src/app/pages/history/history.page.ts");







const routes = [
    {
        path: '',
        component: _history_page__WEBPACK_IMPORTED_MODULE_6__["HistoryPage"]
    }
];
let HistoryPageModule = class HistoryPageModule {
};
HistoryPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_history_page__WEBPACK_IMPORTED_MODULE_6__["HistoryPage"]]
    })
], HistoryPageModule);



/***/ }),

/***/ "./src/app/pages/history/history.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/history/history.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".date {\n  display: block;\n}\n\n.amount {\n  margin-left: 120px;\n}\n\n.ios .amount {\n  margin-left: 0px;\n}\n\n.md .amount {\n  margin-left: 0px;\n}\n\n.activity {\n  width: 100%;\n}\n\n.activity:hover {\n  background-color: grey;\n}\n\n.activity div h1 {\n  font-size: 14px;\n  text-transform: uppercase;\n}\n\n.amount {\n  text-align: center;\n}\n\n#month {\n  font-size: 12px;\n  color: #00AAC7;\n}\n\n#day {\n  font-size: 14px;\n  color: #FF671D;\n}\n\n.h2-type {\n  font-size: 14px;\n}\n\n.p-tokenid {\n  font-size: 12px;\n}\n\n.amount-p {\n  font-size: 14px;\n}\n\n.amount-h2 {\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGlhcy9Qcm9qZWN0cy9taW5pbWFjb3JlL21vYmlsZS1hcHAtZnJvbnQtZW5kL2FwcC9zcmMvYXBwL3BhZ2VzL2hpc3RvcnkvaGlzdG9yeS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2hpc3RvcnkvaGlzdG9yeS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0FDQ0o7O0FEQ0E7RUFDSSxrQkFBQTtBQ0VKOztBREFBO0VBQ0ksZ0JBQUE7QUNHSjs7QUREQTtFQUNJLGdCQUFBO0FDSUo7O0FERkE7RUFDSSxXQUFBO0FDS0o7O0FERkE7RUFDSSxzQkFBQTtBQ0tKOztBREhBO0VBQ0ksZUFBQTtFQUNBLHlCQUFBO0FDTUo7O0FESEE7RUFDSSxrQkFBQTtBQ01KOztBREhBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUNNSjs7QURKQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FDT0o7O0FESkE7RUFDSSxlQUFBO0FDT0o7O0FETEE7RUFDSSxlQUFBO0FDUUo7O0FETkE7RUFDSSxlQUFBO0FDU0o7O0FEUEE7RUFDSSxlQUFBO0FDVUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9oaXN0b3J5L2hpc3RvcnkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRhdGUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuLmFtb3VudCB7XG4gICAgbWFyZ2luLWxlZnQ6IDEyMHB4O1xufVxuLmlvcyAuYW1vdW50IHtcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xufVxuLm1kIC5hbW91bnQge1xuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XG59XG4uYWN0aXZpdHkge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uYWN0aXZpdHk6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XG59XG4uYWN0aXZpdHkgZGl2IGgxIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLmFtb3VudCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4jbW9udGgge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBjb2xvcjogIzAwQUFDNztcbn1cbiNkYXkge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogI0ZGNjcxRDtcblxufVxuLmgyLXR5cGUge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5wLXRva2VuaWQge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbn0gICBcbi5hbW91bnQtcCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuLmFtb3VudC1oMiB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufSIsIi5kYXRlIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5hbW91bnQge1xuICBtYXJnaW4tbGVmdDogMTIwcHg7XG59XG5cbi5pb3MgLmFtb3VudCB7XG4gIG1hcmdpbi1sZWZ0OiAwcHg7XG59XG5cbi5tZCAuYW1vdW50IHtcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbn1cblxuLmFjdGl2aXR5IHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5hY3Rpdml0eTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XG59XG5cbi5hY3Rpdml0eSBkaXYgaDEge1xuICBmb250LXNpemU6IDE0cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5hbW91bnQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbiNtb250aCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICMwMEFBQzc7XG59XG5cbiNkYXkge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjRkY2NzFEO1xufVxuXG4uaDItdHlwZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLnAtdG9rZW5pZCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmFtb3VudC1wIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uYW1vdW50LWgyIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/history/history.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/history/history.page.ts ***!
  \***********************************************/
/*! exports provided: HistoryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryPage", function() { return HistoryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _service_minima_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/minima-api.service */ "./src/app/service/minima-api.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _components_pop_history_pop_history_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/pop-history/pop-history.component */ "./src/app/components/pop-history/pop-history.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_history_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/history.service */ "./src/app/service/history.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");







let HistoryPage = class HistoryPage {
    constructor(popHistoryController, api, historyService) {
        this.popHistoryController = popHistoryController;
        this.api = api;
        this.historyService = historyService;
        // + vars
        this.t_summaryArr = [];
        this.t_summarySpoof = [];
        // - vars
        this.lastJSON = '';
    }
    ngOnInit() { }
    ionViewDidEnter() {
        this.pullInHistoryLength();
        setTimeout(() => {
            this.pullInHistorySummary(); // subscribe and polls history
        }, 1000);
    }
    ionViewDidLeave() {
        this.polledHistorySubscription.unsubscribe();
    }
    // Present history details popover when tapped/clicked
    presentHistoryInfo(ev, _addr, _blkNumber, _amnt, _isBlock, _txpowid, _parent, _blockdiff, _date) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const popover = yield this.popHistoryController.create({
                component: _components_pop_history_pop_history_component__WEBPACK_IMPORTED_MODULE_3__["PopHistoryComponent"],
                cssClass: 'history-popover',
                event: ev,
                translucent: true,
                componentProps: {
                    address: _addr,
                    blockNumber: _blkNumber,
                    transAmount: _amnt,
                    isBlock: _isBlock,
                    txpowid: _txpowid,
                    parent: _parent,
                    blockdiff: _blockdiff,
                    date: _date,
                },
            });
            return yield popover.present();
        });
    }
    // Check if we're receiving or sending
    checkTransType(amount) {
        if (amount.toString().substring(0, 1) === "-") {
            return "Sent";
        }
        else {
            return "Received";
        }
    }
    //LATER USE, history order
    getUserOrderPref() {
        if (true) {
            return 't_summaryArr.slice().reverse()';
        }
        else {}
    }
    // get length of history
    pullInHistoryLength() {
        this.historyService.getHistory().subscribe(res => {
            for (const i in res.response.history) {
                this.t_summarySpoof.push(res.response.history[i]);
            }
        });
    }
    // Get all users transaction history
    pullInHistorySummary() {
        this.polledHistorySubscription = this.historyService.getHistory().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(responseData => {
            let historyArr = [];
            for (const key in responseData.response) {
                let history = responseData.response;
                if (history[key]) {
                    //Transaction description summary
                    historyArr = history[key];
                }
                return historyArr;
            }
        })).subscribe(responseData => {
            if (this.lastJSON !== JSON.stringify(responseData)) {
                this.t_summaryArr = responseData;
                this.lastJSON = JSON.stringify(responseData);
            }
        });
    }
};
HistoryPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] },
    { type: _service_minima_api_service__WEBPACK_IMPORTED_MODULE_1__["MinimaApiService"] },
    { type: _service_history_service__WEBPACK_IMPORTED_MODULE_5__["HistoryService"] }
];
HistoryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-history',
        template: __webpack_require__(/*! raw-loader!./history.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/history/history.page.html"),
        styles: [__webpack_require__(/*! ./history.page.scss */ "./src/app/pages/history/history.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"],
        _service_minima_api_service__WEBPACK_IMPORTED_MODULE_1__["MinimaApiService"],
        _service_history_service__WEBPACK_IMPORTED_MODULE_5__["HistoryService"]])
], HistoryPage);



/***/ }),

/***/ "./src/app/service/history.service.ts":
/*!********************************************!*\
  !*** ./src/app/service/history.service.ts ***!
  \********************************************/
/*! exports provided: HistoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryService", function() { return HistoryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../environments/environment.prod */ "./src/environments/environment.prod.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");






let HistoryService = class HistoryService {
    constructor(http) {
        this.http = http;
        this.manualRefresh = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.host = '';
        this.host = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__["environment"].defaultNode;
        this.host = this.getHost();
    }
    getHistory() {
        return this.request('history');
    }
    getHost() {
        if (localStorage.getItem('minima_host') == null) {
            localStorage.setItem('minima_host', this.host);
            return this.host;
        }
        else {
            return localStorage.getItem('minima_host');
        }
    }
    request(route) {
        let apiUrl = this.host + route; // this.host+'route' = "127.0.0.1:8999/'balance'"
        let history$ = this.http.get(apiUrl);
        return this.polledHistory$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["timer"])(0, 2000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["merge"])(this.manualRefresh), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["concatMap"])(_ => history$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((res) => res));
    }
};
HistoryService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
HistoryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], HistoryService);



/***/ })

}]);
//# sourceMappingURL=pages-history-history-module-es2015.js.map