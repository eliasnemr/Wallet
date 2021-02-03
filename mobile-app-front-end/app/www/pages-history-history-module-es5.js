(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-history-history-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/history/history.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/history/history.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-app>\n  <ion-header class=\"ion-no-border\">\n    <ion-toolbar>\n         <ion-title *ngIf=\"!ios\" class=\"large-text\">\n          <ion-item lines=\"none\" class=\"ion-no-padding\">\n            <ion-menu-button></ion-menu-button>\n            History\n          </ion-item>\n        </ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-item class=\"breadcrumb ion-no-padding\" lines=\"none\" *ngIf=\"transactions.length > 0\">\n    Transaction History\n  </ion-item>\n\n  <ion-content>\n    <ion-list class=\"ion-no-padding\" #historyList *ngFor=\"let txn of transactions\">\n        <ion-item class=\"ion-no-padding\" routerLink=\"/view-txn/{{ txn.txpow.txpowid }}\" routerDirection=\"forward\" lines=\"full\">\n            <ion-avatar slot=\"start\">\n              <ion-icon *ngIf=\"txn.values[0].amount.substring(0,1) == '-'\" class=\"icon\" src=\"assets/sendIcon.svg\" alt=\"send-receive\"></ion-icon>\n              <ion-icon *ngIf=\"txn.values[0].amount.substring(0,1) !== '-' && txn.values[0].name !== 'Create Token'\" class=\"icon\" src=\"assets/receiveIcon.svg\" alt=\"send-receive\"></ion-icon>\n              <ion-icon *ngIf=\"!txn.values[0].name.name && txn.values[0].name === 'Create Token'\" class=\"icon\" src=\"assets/createIcon.svg\" alt=\"send-receive\"></ion-icon>\n            </ion-avatar>\n          <ion-label class=\"transactionLabel\">\n            <div *ngIf=\"!txn.values[0].name.name && txn.values[0].name !== 'Create Token'\">\n              <span *ngIf=\"txn.values[0].amount.substring(0,1) === '-'\">\n                <h3>Minima</h3>\n                <p class=\"time\">{{txn.values[0].day}} {{txn.values[0].month}} &mdash; {{txn.values[0].time}} </p>\n              </span>\n              <span *ngIf=\"txn.values[0].amount.substring(0,1) !== '-'\">\n                <h3>Minima</h3>\n                <p class=\"time\">{{txn.values[0].day}} {{txn.values[0].month}}, {{ txn.values[0].year }} &mdash; {{txn.values[0].time}} </p>\n              </span>\n            </div>\n\n            <div id=\"txnType\" *ngIf=\"txn.values[0].name.name\">\n              <span *ngIf=\"txn.values[0].amount.substring(0,1) == '-'\"> \n                <h3>{{ txn.values[0].name.name }}</h3>\n                <p class=\"time\">{{txn.values[0].day}} {{txn.values[0].month}} &mdash; {{txn.values[0].time}} </p>\n              </span>\n              <span *ngIf=\"txn.values[0].amount.substring(0,1) !== '-'\">\n                <h3>{{ txn.values[0].name.name }}</h3>\n                <p class=\"time\">{{txn.values[0].day}} {{txn.values[0].month}}, {{ txn.values[0].year }} &mdash; {{txn.values[0].time}} </p>\n              </span>\n            </div>\n\n            <div class=\"tokenName\" *ngIf=\"!txn.values[0].name.name && txn.values[0].name === 'Create Token'\">\n              <h3>{{ txn.txpow.body.txn.tokengen.token }}</h3>\n              <!-- <p>&mdash; {{ txn.txpow.body.txn.tokengen.token }}</p> -->\n              <p class=\"time\">{{txn.values[0].day}} {{txn.values[0].month}}, {{ txn.values[0].year }} &mdash; {{txn.values[0].time}} </p>\n            </div>\n          </ion-label>\n\n          <ion-label class=\"transactionAmount\" slot=\"end\" *ngIf=\"txn.values[0].name !== 'Create Token'\">\n            <span *ngIf=\"txn.values[0].amount.substring(0,1) === '-'\"> \n              <h3 class=\"minima-numeric\">{{ txn.values[0].amount}}</h3>\n            </span>\n            <span *ngIf=\"txn.values[0].amount.substring(0,1) !== '-'\">\n              <h3 class=\"minima-numeric\">{{ \"+\"+ txn.values[0].amount}}</h3>\n            </span>\n          </ion-label>\n          <ion-label class=\"transactionAmount\" slot=\"end\" *ngIf=\"txn.values[0].name === 'Create Token'\">\n            <span class=\"minima-numeric\">\n              <h3 style=\"text-align: right;\">{{\"+\" + txn.txpow.body.txn.tokengen.total}}</h3>\n              <p>{{\"-\"+txn.values[0].amount+\" Mini\"}}</p>\n            </span>\n          </ion-label>\n        </ion-item>\n    </ion-list>\n\n    <ion-grid *ngIf=\"transactions.length == 0\">\n      <ion-row>\n        <ion-col style=\"display: flex; align-items:center; justify-content:center\" size=\"12\">\n          <ion-label>{{ prompt }}</ion-label>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n  </ion-content>\n\n  <ion-footer>\n    <ion-button (click)=\"giveMe50()\" class=\"gimme50 no-ripple\" fill=\"none\">\n      Gimme 50\n    </ion-button>\n  </ion-footer>\n</ion-app>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _history_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./history.page */ "./src/app/pages/history/history.page.ts");







var routes = [
    {
        path: '',
        component: _history_page__WEBPACK_IMPORTED_MODULE_6__["HistoryPage"],
        children: [
            {
                path: 'view-txn',
                loadChildren: function () { return __webpack_require__.e(/*! import() | view-txn-view-txn-module */ "default~pages-history-view-txn-view-txn-module~view-txn-view-txn-module").then(__webpack_require__.bind(null, /*! ./view-txn/view-txn.module */ "./src/app/pages/history/view-txn/view-txn.module.ts")).then(function (m) { return m.ViewTXNPageModule; }); }
            }
        ]
    }
];
var HistoryPageModule = /** @class */ (function () {
    function HistoryPageModule() {
    }
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
    return HistoryPageModule;
}());



/***/ }),

/***/ "./src/app/pages/history/history.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/history/history.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-icon.icon {\n  width: 36.83px;\n  height: 36.83px;\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-box-pack: center;\n          justify-content: center;\n  align-content: center;\n}\n\nion-card-content ion-text {\n  margin-top: 10px;\n}\n\nion-list ion-item:first-child {\n  margin-top: 7px;\n}\n\nion-list ion-item {\n  margin-left: 25px;\n  margin-right: 30px;\n  --border-color: #f0f0fa;\n}\n\nion-list ion-item:hover {\n  --border-color: var(--ion-color-primary);\n}\n\nion-label {\n  max-width: auto;\n  display: inline-block;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}\n\nion-label.transactionAmount {\n  margin: 0;\n  padding: 0;\n}\n\nion-label.transactionLabel h3 {\n  padding: 0;\n  margin: 0;\n}\n\nion-label.transactionLabel p {\n  font-family: manrope-light;\n  padding: 0;\n  margin: 0;\n}\n\nion-label.transactionLabel p.time {\n  color: var(--ion-color-gray-three);\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}\n\nion-label.transactionAmount p {\n  font-family: manrope-light;\n}\n\nion-content {\n  overflow-y: scroll;\n}\n\n#filter-settings {\n  position: absolute;\n  right: 5%;\n  top: 15%;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGlhc25lbXIvcHJvamVjdHMvV2FsbGV0L21vYmlsZS1hcHAtZnJvbnQtZW5kL2FwcC9zcmMvYXBwL3BhZ2VzL2hpc3RvcnkvaGlzdG9yeS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2hpc3RvcnkvaGlzdG9yeS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EscUJBQUE7QUNDSjs7QURDQTtFQUNJLGdCQUFBO0FDRUo7O0FEQUE7RUFDSSxlQUFBO0FDR0o7O0FEREE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7QUNJSjs7QURGQTtFQUNJLHdDQUFBO0FDS0o7O0FESEE7RUFDSSxlQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNNSjs7QURKQTtFQUNJLFNBQUE7RUFDQSxVQUFBO0FDT0o7O0FETEE7RUFDSSxVQUFBO0VBQ0EsU0FBQTtBQ1FKOztBRE5BO0VBQ0ksMEJBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQ1NKOztBRFBBO0VBQ0ksa0NBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNVSjs7QURSQTtFQUNJLDBCQUFBO0FDV0o7O0FEVEE7RUFDSSxrQkFBQTtBQ1lKOztBRFRBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLGVBQUE7QUNZSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hpc3RvcnkvaGlzdG9yeS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taWNvbi5pY29uIHtcbiAgICB3aWR0aDogMzYuODNweDtcbiAgICBoZWlnaHQ6IDM2LjgzcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xufVxuaW9uLWNhcmQtY29udGVudCBpb24tdGV4dCB7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbn1cbmlvbi1saXN0IGlvbi1pdGVtOmZpcnN0LWNoaWxkIHtcbiAgICBtYXJnaW4tdG9wOiA3cHg7XG59XG5pb24tbGlzdCBpb24taXRlbSB7XG4gICAgbWFyZ2luLWxlZnQ6IDI1cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xuICAgIC0tYm9yZGVyLWNvbG9yOiAjZjBmMGZhO1xufVxuaW9uLWxpc3QgaW9uLWl0ZW06aG92ZXIge1xuICAgIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5pb24tbGFiZWwge1xuICAgIG1heC13aWR0aDogYXV0bztcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuaW9uLWxhYmVsLnRyYW5zYWN0aW9uQW1vdW50IHtcbiAgICBtYXJnaW46MDtcbiAgICBwYWRkaW5nOjA7XG59XG5pb24tbGFiZWwudHJhbnNhY3Rpb25MYWJlbCBoMyB7XG4gICAgcGFkZGluZzowO1xuICAgIG1hcmdpbjowO1xufVxuaW9uLWxhYmVsLnRyYW5zYWN0aW9uTGFiZWwgcCB7XG4gICAgZm9udC1mYW1pbHk6IG1hbnJvcGUtbGlnaHQ7XG4gICAgcGFkZGluZzowO1xuICAgIG1hcmdpbjowO1xufVxuaW9uLWxhYmVsLnRyYW5zYWN0aW9uTGFiZWwgcC50aW1lIHtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWdyYXktdGhyZWUpO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbmlvbi1sYWJlbC50cmFuc2FjdGlvbkFtb3VudCBwIHtcbiAgICBmb250LWZhbWlseTogbWFucm9wZS1saWdodDtcbn1cbmlvbi1jb250ZW50IHtcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG59XG5cbiNmaWx0ZXItc2V0dGluZ3Mge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogNSU7XG4gICAgdG9wOiAxNSU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4iLCJpb24taWNvbi5pY29uIHtcbiAgd2lkdGg6IDM2LjgzcHg7XG4gIGhlaWdodDogMzYuODNweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xufVxuXG5pb24tY2FyZC1jb250ZW50IGlvbi10ZXh0IHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuaW9uLWxpc3QgaW9uLWl0ZW06Zmlyc3QtY2hpbGQge1xuICBtYXJnaW4tdG9wOiA3cHg7XG59XG5cbmlvbi1saXN0IGlvbi1pdGVtIHtcbiAgbWFyZ2luLWxlZnQ6IDI1cHg7XG4gIG1hcmdpbi1yaWdodDogMzBweDtcbiAgLS1ib3JkZXItY29sb3I6ICNmMGYwZmE7XG59XG5cbmlvbi1saXN0IGlvbi1pdGVtOmhvdmVyIHtcbiAgLS1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuaW9uLWxhYmVsIHtcbiAgbWF4LXdpZHRoOiBhdXRvO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG5pb24tbGFiZWwudHJhbnNhY3Rpb25BbW91bnQge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbmlvbi1sYWJlbC50cmFuc2FjdGlvbkxhYmVsIGgzIHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xufVxuXG5pb24tbGFiZWwudHJhbnNhY3Rpb25MYWJlbCBwIHtcbiAgZm9udC1mYW1pbHk6IG1hbnJvcGUtbGlnaHQ7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbn1cblxuaW9uLWxhYmVsLnRyYW5zYWN0aW9uTGFiZWwgcC50aW1lIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1ncmF5LXRocmVlKTtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbmlvbi1sYWJlbC50cmFuc2FjdGlvbkFtb3VudCBwIHtcbiAgZm9udC1mYW1pbHk6IG1hbnJvcGUtbGlnaHQ7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xufVxuXG4jZmlsdGVyLXNldHRpbmdzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogNSU7XG4gIHRvcDogMTUlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59Il19 */"

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
/* harmony import */ var _service_minima_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../service/minima-api.service */ "./src/app/service/minima-api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _components_pop_filter_pop_filter_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../components/pop-filter/pop-filter.component */ "./src/app/components/pop-filter/pop-filter.component.ts");
/* harmony import */ var _service_history_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../service/history.service */ "./src/app/service/history.service.ts");
/* harmony import */ var _providers_user_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../providers/user-data */ "./src/app/providers/user-data.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");










var HistoryPage = /** @class */ (function () {
    function HistoryPage(api, alertController, historyService, userHistorySavedData, modalController, alertCtrl, toastCtrl, popoverController, config, router) {
        this.api = api;
        this.alertController = alertController;
        this.historyService = historyService;
        this.userHistorySavedData = userHistorySavedData;
        this.modalController = modalController;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.popoverController = popoverController;
        this.config = config;
        this.router = router;
        this.categories = 0;
        this.segment = 'all';
        this.prompt = 'Fetching your history...';
        this.transactions = [];
        this.saved = [];
        this.lastJSON = '';
    }
    HistoryPage.prototype.ngOnInit = function () {
        this.pullInHistorySummary();
        this.ios = this.config.get('mode') === 'ios';
    };
    HistoryPage.prototype.saveItem = function (slidingItem, txn) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.userHistorySavedData.hasSaved(txn.txpow.txpowid)) return [3 /*break*/, 1];
                        // Prompt to remove as saved
                        this.removeItem(slidingItem, txn.txpow.txpowid, 'This has already been saved');
                        // saved = 'false' now
                        txn.saved = 'false';
                        return [3 /*break*/, 4];
                    case 1:
                        // Add to Saved
                        this.userHistorySavedData.addToSaved(txn.txpow.txpowid);
                        // Add true attribute to this txn
                        txn.saved = 'true';
                        // close the open item
                        slidingItem.close();
                        return [4 /*yield*/, this.toastCtrl.create({
                                header: "Transaction with ID:" + (txn.txpow.txpowid.substring(0, 15) + '...') + " was successfully saved.",
                                duration: 3000,
                                buttons: [{
                                        text: 'Close',
                                        role: 'cancel'
                                    }]
                            })];
                    case 2:
                        toast = _a.sent();
                        return [4 /*yield*/, toast.present()];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    HistoryPage.prototype.removeItem = function (slidingItem, txn, title) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: title,
                            message: 'Would you like to remove this transaction from your saved transactions?',
                            buttons: [
                                {
                                    text: 'Cancel',
                                    handler: function () {
                                        // Cancel button clicked, do not remove the transaction
                                        // Close the sliding item and hide the option buttons
                                        slidingItem.close();
                                    }
                                },
                                {
                                    text: 'Remove',
                                    handler: function () {
                                        // they want to remove this transaction from their saved transactions
                                        _this.userHistorySavedData.removeFromSaved(txn.txpow.txpowid);
                                        // close the sliding item and hide the option buttons
                                        slidingItem.close();
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        // now present the alert on top of all other content
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        // now present the alert on top of all other content
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HistoryPage.prototype.presentFilterSettings = function (ev) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var popover;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverController.create({
                            component: _components_pop_filter_pop_filter_component__WEBPACK_IMPORTED_MODULE_5__["PopFilterComponent"],
                            event: ev,
                            translucent: true,
                            animated: true
                        })];
                    case 1:
                        popover = _a.sent();
                        return [4 /*yield*/, popover.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    HistoryPage.prototype.updateHistory = function () {
        if (this.historyList) {
            this.historyList.closeSlidingItems();
        }
        if (this.segment === 'saved') {
            this.filterHistory();
        }
        else if (this.segment === 'all') {
            this.pullInHistorySummary();
        }
    };
    HistoryPage.prototype.filterHistory = function () {
        this.transactions = this.transactions.filter(function (txn) {
            return txn.saved === 'true';
        });
    };
    HistoryPage.prototype.pullInHistorySummary = function () {
        var _this = this;
        this.historyService.data.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])(function (res) {
            res.history.forEach(function (txpow) {
                var name = txpow.values[0].name;
                txpow.values[0].time = moment__WEBPACK_IMPORTED_MODULE_8__(txpow.txpow.header.timesecs * 1000).format('hh:mm A');
                txpow.values[0].day = moment__WEBPACK_IMPORTED_MODULE_8__(txpow.txpow.header.timesecs * 1000).format("DD");
                txpow.values[0].month = moment__WEBPACK_IMPORTED_MODULE_8__(txpow.txpow.header.timesecs * 1000).format("MMM");
                txpow.values[0].year = moment__WEBPACK_IMPORTED_MODULE_8__(txpow.txpow.header.timesecs * 1000).format("YYYY");
                if (name && !name.name && name.substring(0, 1) === '{') {
                    txpow.values[0].name = JSON.parse(name);
                }
            });
            return res.history;
        })).subscribe(function (res) {
            var currentJSON = JSON.stringify(res);
            if (_this.lastJSON !== currentJSON) {
                _this.transactions = res.reverse();
            }
            _this.lastJSON = currentJSON;
        });
        if (this.transactions.length === 0) {
            this.prompt = 'No recent transactions found...';
        }
    };
    HistoryPage.prototype.presentAlert = function (hdr, message, subtitle) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            cssClass: 'alertContainer',
                            header: hdr,
                            subHeader: subtitle,
                            message: message,
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
    HistoryPage.prototype.giveMe50 = function () {
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
    HistoryPage.ctorParameters = function () { return [
        { type: _service_minima_api_service__WEBPACK_IMPORTED_MODULE_1__["MinimaApiService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
        { type: _service_history_service__WEBPACK_IMPORTED_MODULE_6__["HistoryService"] },
        { type: _providers_user_data__WEBPACK_IMPORTED_MODULE_7__["UserHistorySavedData"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Config"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"])('historyList', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonList"])
    ], HistoryPage.prototype, "historyList", void 0);
    HistoryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: 'app-history',
            template: __webpack_require__(/*! raw-loader!./history.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/history/history.page.html"),
            styles: [__webpack_require__(/*! ./history.page.scss */ "./src/app/pages/history/history.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_minima_api_service__WEBPACK_IMPORTED_MODULE_1__["MinimaApiService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            _service_history_service__WEBPACK_IMPORTED_MODULE_6__["HistoryService"],
            _providers_user_data__WEBPACK_IMPORTED_MODULE_7__["UserHistorySavedData"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Config"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]])
    ], HistoryPage);
    return HistoryPage;
}());



/***/ }),

/***/ "./src/app/providers/user-data.ts":
/*!****************************************!*\
  !*** ./src/app/providers/user-data.ts ***!
  \****************************************/
/*! exports provided: UserHistorySavedData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserHistorySavedData", function() { return UserHistorySavedData; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UserHistorySavedData = /** @class */ (function () {
    function UserHistorySavedData() {
        this.saved = [];
    }
    // has the user saved this?
    UserHistorySavedData.prototype.hasSaved = function (txn_txpow_txpowid) {
        return (this.saved.indexOf(txn_txpow_txpowid) > -1);
    };
    // add txn as saved
    UserHistorySavedData.prototype.addToSaved = function (txn_txpow_txpowid) {
        this.saved.push(txn_txpow_txpowid);
    };
    // remove txn from saved
    UserHistorySavedData.prototype.removeFromSaved = function (txn_txpow_txpowid) {
        var index = this.saved.indexOf(txn_txpow_txpowid);
        if (index > -1) {
            this.saved.splice(index, 1);
        }
    };
    UserHistorySavedData = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UserHistorySavedData);
    return UserHistorySavedData;
}());



/***/ })

}]);
//# sourceMappingURL=pages-history-history-module-es5.js.map