(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-history-history-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/history/history.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/history/history.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-app>\n  <ion-header class=\"page-header ion-no-border\">\n    <ion-toolbar>\n         <ion-title *ngIf=\"!ios\" class=\"large-text\">\n          <ion-item id=\"title\" lines=\"none\" class=\"ion-no-padding\">\n            <ion-icon class=\"menu-btn\" (click)=\"openMenu()\" src=\"assets/menuIcon.svg\"></ion-icon>\n            History\n          </ion-item>\n          <ion-item id=\"subtitle\" class=\"breadcrumb ion-no-padding\" lines=\"none\" *ngIf=\"transactions.length > 0\">\n            Transaction history\n          </ion-item>\n        </ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n\n\n  <ion-content class=\"page-content\">\n    <ion-list class=\"ion-no-padding\" #historyList *ngFor=\"let txn of transactions\" lines=\"none\">\n        <ion-item class=\"ion-no-padding\" routerLink=\"/view-txn/{{ txn.txpow.txpowid }}\" routerDirection=\"forward\" lines=\"none\">\n            <ion-avatar slot=\"start\">\n              <ion-icon style=\"fill: var(--ion-color-secondary) !important\" *ngIf=\"txn.values[0].amount.substring(0,1) == '-'\" class=\"icon\" src=\"assets/sendIcon.svg\" alt=\"send-receive\"></ion-icon>\n              <ion-icon style=\"fill:var(--ion-color-primary) !important\" *ngIf=\"txn.values[0].amount.substring(0,1) !== '-' && txn.values[0].name !== 'Create Token'\" class=\"icon\" src=\"assets/receiveIcon.svg\" alt=\"send-receive\"></ion-icon>\n              <ion-icon *ngIf=\"!txn.values[0].name.name && txn.values[0].name === 'Create Token'\" class=\"icon\" src=\"assets/createIcon.svg\" alt=\"send-receive\"></ion-icon>\n            </ion-avatar>\n          <ion-label class=\"transactionLabel\">\n            <div *ngIf=\"!txn.values[0].name.name && txn.values[0].name !== 'Create Token'\">\n              <span *ngIf=\"txn.values[0].amount.substring(0,1) === '-'\">\n                <h3 style=\"color: var(--ion-color-secondary) !important\">Minima</h3>\n                <p class=\"time\">{{txn.values[0].day}} {{txn.values[0].month}} &mdash; {{txn.values[0].time}} </p>\n              </span>\n              <span *ngIf=\"txn.values[0].amount.substring(0,1) !== '-'\">\n                <h3 style=\"color:var(--ion-color-primary) !important\">Minima</h3>\n                <p class=\"time\">{{txn.values[0].day}} {{txn.values[0].month}}, {{ txn.values[0].year }} &mdash; {{txn.values[0].time}} </p>\n              </span>\n            </div>\n\n            <div id=\"txnType\" *ngIf=\"txn.values[0].name.name\">\n              <span *ngIf=\"txn.values[0].amount.substring(0,1) == '-'\"> \n                <h3 style=\"color: var(--ion-color-secondary) !important\">{{ txn.values[0].name.name }}</h3>\n                <p class=\"time\">{{txn.values[0].day}} {{txn.values[0].month}} &mdash; {{txn.values[0].time}} </p>\n              </span>\n              <span *ngIf=\"txn.values[0].amount.substring(0,1) !== '-'\">\n                <h3 style=\"color:var(--ion-color-primary) !important\">{{ txn.values[0].name.name }}</h3>\n                <p class=\"time\">{{txn.values[0].day}} {{txn.values[0].month}}, {{ txn.values[0].year }} &mdash; {{txn.values[0].time}} </p>\n              </span>\n            </div>\n\n            <div class=\"tokenName\" *ngIf=\"!txn.values[0].name.name && txn.values[0].name === 'Create Token'\">\n              <h3>{{ txn.txpow.body.txn.tokengen.token }}</h3>\n              <!-- <p>&mdash; {{ txn.txpow.body.txn.tokengen.token }}</p> -->\n              <p class=\"time\">{{txn.values[0].day}} {{txn.values[0].month}}, {{ txn.values[0].year }} &mdash; {{txn.values[0].time}} </p>\n            </div>\n          </ion-label>\n\n          <ion-label class=\"transactionAmount\" slot=\"end\" *ngIf=\"txn.values[0].name !== 'Create Token'\">\n            <span *ngIf=\"txn.values[0].amount.substring(0,1) === '-'\"> \n              <h3 style=\"color: var(--ion-color-secondary) !important\" class=\"minima-numeric\">{{ txn.values[0].amount}}</h3>\n            </span>\n            <span *ngIf=\"txn.values[0].amount.substring(0,1) !== '-'\">\n              <h3 style=\"color:var(--ion-color-primary) !important\" class=\"minima-numeric\">{{ \"+\"+ txn.values[0].amount}}</h3>\n            </span>\n          </ion-label>\n          <ion-label class=\"transactionAmount\" slot=\"end\" *ngIf=\"txn.values[0].name === 'Create Token'\">\n            <span class=\"minima-numeric\">\n              <h3 style=\"text-align: right;\">{{\"+\" + txn.txpow.body.txn.tokengen.total}}</h3>\n              <p>{{\"-\"+txn.values[0].amount+\" Mini\"}}</p>\n            </span>\n          </ion-label>\n        </ion-item>\n    </ion-list>\n\n    <ion-grid *ngIf=\"transactions.length == 0\">\n      <ion-row>\n        <ion-col style=\"display: flex; align-items:center; justify-content:center\" size=\"12\">\n          <ion-label>{{ prompt }}</ion-label>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n  </ion-content>\n\n  <ion-footer class=\"border-t\">\n    <ion-button (click)=\"giveMe50()\" class=\"gimme50 no-ripple\" fill=\"none\">\n      Gimme 50\n    </ion-button>\n  </ion-footer>\n</ion-app>"

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
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _history_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./history.page */ "./src/app/pages/history/history.page.ts");







const routes = [
    {
        path: '',
        component: _history_page__WEBPACK_IMPORTED_MODULE_6__["HistoryPage"],
        children: [
            {
                path: 'view-txn',
                loadChildren: () => __webpack_require__.e(/*! import() | view-txn-view-txn-module */ "default~pages-history-view-txn-view-txn-module~view-txn-view-txn-module").then(__webpack_require__.bind(null, /*! ./view-txn/view-txn.module */ "./src/app/pages/history/view-txn/view-txn.module.ts")).then(m => m.ViewTXNPageModule)
            }
        ]
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

module.exports = "ion-icon.icon {\n  width: 36.83px;\n  height: 36.83px;\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-box-pack: center;\n          justify-content: center;\n  align-content: center;\n}\n\nion-card-content ion-text {\n  margin-top: 10px;\n}\n\nion-list ion-item {\n  --inner-padding-end: 0;\n}\n\nion-list ion-item:first-child {\n  margin-top: 12px;\n}\n\nion-list ion-item {\n  --border-width: 0px 0px 0px 0px;\n  opacity: 1;\n  --background-activated: var(--ion-color-token)!important;\n  --background-activated-opacity: 0.2 !important;\n  --background-hover: var(--ion-color-item-hover);\n  --background-hover-opacity: 1;\n  --border-color: var(--ion-color-item-border);\n}\n\nion-label {\n  max-width: auto;\n  display: inline-block;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}\n\nion-label.transactionAmount {\n  margin: 0;\n  padding: 0;\n}\n\nion-label.transactionLabel h3 {\n  padding: 0;\n  margin: 0;\n  font-family: manrope-medium;\n  font-size: 16px;\n}\n\nion-label.transactionLabel p {\n  font-family: manrope-light;\n  padding: 0;\n  margin: 0;\n}\n\nion-label.transactionLabel p.time {\n  color: var(--ion-color-gray-three);\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}\n\nion-label.transactionAmount p {\n  font-family: manrope-light;\n}\n\nion-content {\n  overflow-y: scroll;\n}\n\n#filter-settings {\n  position: absolute;\n  right: 5%;\n  top: 15%;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGlhc25lbXIvcHJvamVjdHMvV2FsbGV0L21vYmlsZS1hcHAtZnJvbnQtZW5kL2FwcC9zcmMvYXBwL3BhZ2VzL2hpc3RvcnkvaGlzdG9yeS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2hpc3RvcnkvaGlzdG9yeS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EscUJBQUE7QUNDSjs7QURDQTtFQUNJLGdCQUFBO0FDRUo7O0FEQUE7RUFDSSxzQkFBQTtBQ0dKOztBRERBO0VBQ0ksZ0JBQUE7QUNJSjs7QURGQTtFQUNJLCtCQUFBO0VBQ0EsVUFBQTtFQUNBLHdEQUFBO0VBQ0EsOENBQUE7RUFDQSwrQ0FBQTtFQUNBLDZCQUFBO0VBQ0EsNENBQUE7QUNLSjs7QURIQTtFQUNJLGVBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ01KOztBREpBO0VBQ0ksU0FBQTtFQUNBLFVBQUE7QUNPSjs7QURMQTtFQUNJLFVBQUE7RUFDQSxTQUFBO0VBQ0EsMkJBQUE7RUFDQSxlQUFBO0FDUUo7O0FETkE7RUFDSSwwQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FDU0o7O0FEUEE7RUFDSSxrQ0FBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ1VKOztBRFJBO0VBQ0ksMEJBQUE7QUNXSjs7QURUQTtFQUNJLGtCQUFBO0FDWUo7O0FEVEE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsZUFBQTtBQ1lKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaGlzdG9yeS9oaXN0b3J5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pY29uLmljb24ge1xuICAgIHdpZHRoOiAzNi44M3B4O1xuICAgIGhlaWdodDogMzYuODNweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG59XG5pb24tY2FyZC1jb250ZW50IGlvbi10ZXh0IHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0ge1xuICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XG59XG5pb24tbGlzdCBpb24taXRlbTpmaXJzdC1jaGlsZCB7XG4gICAgbWFyZ2luLXRvcDogMTJweDtcbn1cbmlvbi1saXN0IGlvbi1pdGVtIHtcbiAgICAtLWJvcmRlci13aWR0aDogMHB4IDBweCAwcHggMHB4O1xuICAgIG9wYWNpdHk6IDE7XG4gICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogdmFyKC0taW9uLWNvbG9yLXRva2VuKSFpbXBvcnRhbnQ7XG4gICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZC1vcGFjaXR5OiAwLjIgIWltcG9ydGFudDtcbiAgICAtLWJhY2tncm91bmQtaG92ZXI6IHZhcigtLWlvbi1jb2xvci1pdGVtLWhvdmVyKTtcbiAgICAtLWJhY2tncm91bmQtaG92ZXItb3BhY2l0eTogMTtcbiAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWl0ZW0tYm9yZGVyKTtcbn1cbmlvbi1sYWJlbCB7XG4gICAgbWF4LXdpZHRoOiBhdXRvO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5pb24tbGFiZWwudHJhbnNhY3Rpb25BbW91bnQge1xuICAgIG1hcmdpbjowO1xuICAgIHBhZGRpbmc6MDtcbn1cbmlvbi1sYWJlbC50cmFuc2FjdGlvbkxhYmVsIGgzIHtcbiAgICBwYWRkaW5nOjA7XG4gICAgbWFyZ2luOjA7XG4gICAgZm9udC1mYW1pbHk6IG1hbnJvcGUtbWVkaXVtO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbn1cbmlvbi1sYWJlbC50cmFuc2FjdGlvbkxhYmVsIHAge1xuICAgIGZvbnQtZmFtaWx5OiBtYW5yb3BlLWxpZ2h0O1xuICAgIHBhZGRpbmc6MDtcbiAgICBtYXJnaW46MDtcbn1cbmlvbi1sYWJlbC50cmFuc2FjdGlvbkxhYmVsIHAudGltZSB7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1ncmF5LXRocmVlKTtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5pb24tbGFiZWwudHJhbnNhY3Rpb25BbW91bnQgcCB7XG4gICAgZm9udC1mYW1pbHk6IG1hbnJvcGUtbGlnaHQ7XG59XG5pb24tY29udGVudCB7XG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xufVxuXG4jZmlsdGVyLXNldHRpbmdzIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDUlO1xuICAgIHRvcDogMTUlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuIiwiaW9uLWljb24uaWNvbiB7XG4gIHdpZHRoOiAzNi44M3B4O1xuICBoZWlnaHQ6IDM2LjgzcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuaW9uLWNhcmQtY29udGVudCBpb24tdGV4dCB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbmlvbi1saXN0IGlvbi1pdGVtIHtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMDtcbn1cblxuaW9uLWxpc3QgaW9uLWl0ZW06Zmlyc3QtY2hpbGQge1xuICBtYXJnaW4tdG9wOiAxMnB4O1xufVxuXG5pb24tbGlzdCBpb24taXRlbSB7XG4gIC0tYm9yZGVyLXdpZHRoOiAwcHggMHB4IDBweCAwcHg7XG4gIG9wYWNpdHk6IDE7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHZhcigtLWlvbi1jb2xvci10b2tlbikhaW1wb3J0YW50O1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkLW9wYWNpdHk6IDAuMiAhaW1wb3J0YW50O1xuICAtLWJhY2tncm91bmQtaG92ZXI6IHZhcigtLWlvbi1jb2xvci1pdGVtLWhvdmVyKTtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyLW9wYWNpdHk6IDE7XG4gIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItaXRlbS1ib3JkZXIpO1xufVxuXG5pb24tbGFiZWwge1xuICBtYXgtd2lkdGg6IGF1dG87XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbmlvbi1sYWJlbC50cmFuc2FjdGlvbkFtb3VudCB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuaW9uLWxhYmVsLnRyYW5zYWN0aW9uTGFiZWwgaDMge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIGZvbnQtZmFtaWx5OiBtYW5yb3BlLW1lZGl1bTtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG5pb24tbGFiZWwudHJhbnNhY3Rpb25MYWJlbCBwIHtcbiAgZm9udC1mYW1pbHk6IG1hbnJvcGUtbGlnaHQ7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbn1cblxuaW9uLWxhYmVsLnRyYW5zYWN0aW9uTGFiZWwgcC50aW1lIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1ncmF5LXRocmVlKTtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbmlvbi1sYWJlbC50cmFuc2FjdGlvbkFtb3VudCBwIHtcbiAgZm9udC1mYW1pbHk6IG1hbnJvcGUtbGlnaHQ7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xufVxuXG4jZmlsdGVyLXNldHRpbmdzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogNSU7XG4gIHRvcDogMTUlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59Il19 */"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_history_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/history.service */ "./src/app/service/history.service.ts");
/* harmony import */ var _providers_user_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../providers/user-data */ "./src/app/providers/user-data.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");









let HistoryPage = class HistoryPage {
    constructor(menu, api, alertController, historyService, userHistorySavedData, modalController, alertCtrl, toastCtrl, popoverController, config, router) {
        this.menu = menu;
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
    ngOnInit() {
        this.pullInHistorySummary();
        this.ios = this.config.get('mode') === 'ios';
    }
    openMenu() {
        this.menu.open();
    }
    saveItem(slidingItem, txn) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.userHistorySavedData.hasSaved(txn.txpow.txpowid)) {
                // Prompt to remove as saved
                this.removeItem(slidingItem, txn.txpow.txpowid, 'This has already been saved');
                // saved = 'false' now
                txn.saved = 'false';
            }
            else {
                // Add to Saved
                this.userHistorySavedData.addToSaved(txn.txpow.txpowid);
                // Add true attribute to this txn
                txn.saved = 'true';
                // close the open item
                slidingItem.close();
                // Create a Toast
                const toast = yield this.toastCtrl.create({
                    header: `Transaction with ID:${txn.txpow.txpowid.substring(0, 15) + '...'} was successfully saved.`,
                    duration: 3000,
                    buttons: [{
                            text: 'Close',
                            role: 'cancel'
                        }]
                });
                yield toast.present();
            }
        });
    }
    removeItem(slidingItem, txn, title) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: title,
                message: 'Would you like to remove this transaction from your saved transactions?',
                buttons: [
                    {
                        text: 'Cancel',
                        handler: () => {
                            // Cancel button clicked, do not remove the transaction
                            // Close the sliding item and hide the option buttons
                            slidingItem.close();
                        }
                    },
                    {
                        text: 'Remove',
                        handler: () => {
                            // they want to remove this transaction from their saved transactions
                            this.userHistorySavedData.removeFromSaved(txn.txpow.txpowid);
                            // close the sliding item and hide the option buttons
                            slidingItem.close();
                        }
                    }
                ]
            });
            // now present the alert on top of all other content
            yield alert.present();
        });
    }
    updateHistory() {
        if (this.historyList) {
            this.historyList.closeSlidingItems();
        }
        if (this.segment === 'saved') {
            this.filterHistory();
        }
        else if (this.segment === 'all') {
            this.pullInHistorySummary();
        }
    }
    filterHistory() {
        this.transactions = this.transactions.filter((txn) => {
            return txn.saved === 'true';
        });
    }
    pullInHistorySummary() {
        this.historyService.data.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])((res) => {
            res.history.forEach((txpow) => {
                const name = txpow.values[0].name;
                txpow.values[0].time = moment__WEBPACK_IMPORTED_MODULE_7__(txpow.txpow.header.timesecs * 1000).format('hh:mm A');
                txpow.values[0].day = moment__WEBPACK_IMPORTED_MODULE_7__(txpow.txpow.header.timesecs * 1000).format("DD");
                txpow.values[0].month = moment__WEBPACK_IMPORTED_MODULE_7__(txpow.txpow.header.timesecs * 1000).format("MMM");
                txpow.values[0].year = moment__WEBPACK_IMPORTED_MODULE_7__(txpow.txpow.header.timesecs * 1000).format("YYYY");
                if (name && !name.name && name.substring(0, 1) === '{') {
                    txpow.values[0].name = JSON.parse(name);
                }
            });
            return res.history;
        })).subscribe((res) => {
            const currentJSON = JSON.stringify(res);
            if (this.lastJSON !== currentJSON) {
                this.transactions = res.reverse();
            }
            this.lastJSON = currentJSON;
        });
        if (this.transactions.length === 0) {
            this.prompt = 'No recent transactions found...';
        }
    }
    presentAlert(hdr, message, subtitle) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'alertContainer',
                header: hdr,
                subHeader: subtitle,
                message: message,
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    giveMe50() {
        this.api.giveMe50().then((res) => {
            if (res.status === true) {
                this.presentAlert('Gimme50', 'Successful', 'Status');
            }
            else {
                this.presentAlert('Gimme50', res.message, 'Status');
            }
        });
    }
};
HistoryPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] },
    { type: _service_minima_api_service__WEBPACK_IMPORTED_MODULE_1__["MinimaApiService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _service_history_service__WEBPACK_IMPORTED_MODULE_5__["HistoryService"] },
    { type: _providers_user_data__WEBPACK_IMPORTED_MODULE_6__["UserHistorySavedData"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Config"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"] }
];
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
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"],
        _service_minima_api_service__WEBPACK_IMPORTED_MODULE_1__["MinimaApiService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
        _service_history_service__WEBPACK_IMPORTED_MODULE_5__["HistoryService"],
        _providers_user_data__WEBPACK_IMPORTED_MODULE_6__["UserHistorySavedData"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Config"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]])
], HistoryPage);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let UserHistorySavedData = class UserHistorySavedData {
    constructor() {
        this.saved = [];
    }
    // has the user saved this?
    hasSaved(txn_txpow_txpowid) {
        return (this.saved.indexOf(txn_txpow_txpowid) > -1);
    }
    // add txn as saved
    addToSaved(txn_txpow_txpowid) {
        this.saved.push(txn_txpow_txpowid);
    }
    // remove txn from saved
    removeFromSaved(txn_txpow_txpowid) {
        const index = this.saved.indexOf(txn_txpow_txpowid);
        if (index > -1) {
            this.saved.splice(index, 1);
        }
    }
};
UserHistorySavedData = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], UserHistorySavedData);



/***/ })

}]);
//# sourceMappingURL=pages-history-history-module-es2015.js.map