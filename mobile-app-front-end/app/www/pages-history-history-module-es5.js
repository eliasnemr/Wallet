(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-history-history-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/history/history.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/history/history.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-app>\n  <ion-header class=\"page-header ion-no-border\">\n    <ion-toolbar>\n         <ion-title *ngIf=\"!ios\" class=\"large-text\">\n          <ion-item id=\"title\" lines=\"none\" class=\"ion-no-padding\">\n            <ion-icon \n            class=\"menu-btn\" \n            (click)=\"openMenu()\" \n            src=\"assets/menuIcon.svg\"></ion-icon>\n            History\n          </ion-item>\n          <ion-item \n          id=\"subtitle\" \n          class=\"breadcrumb ion-no-padding\" \n          lines=\"none\" \n          *ngIf=\"transactions.length > 0\">\n            Transaction history\n          </ion-item>\n        </ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list \n    class=\"ion-no-padding\" \n    #historyList  \n    lines=\"none\">\n        <ion-item \n        *ngFor=\"let txn of transactions.slice().reverse()\"\n        class=\"ion-no-padding\" \n        routerLink=\"/view-txn/{{ txn.txpow.txpowid }}\" \n        routerDirection=\"forward\"\n        lines=\"none\">\n            <!-- <ion-avatar slot=\"start\">\n              <ion-icon \n              style=\"fill: var(--ion-color-secondary) !important\"\n              *ngIf=\"txn.values[0].amount.substring(0,1) == '-'\" \n              class=\"icon\" \n              src=\"assets/sendIcon.svg\" \n              alt=\"send-receive\"></ion-icon>\n              <ion-icon \n              style=\"fill:var(--ion-color-primary) !important\" \n              *ngIf=\"txn.values[0].amount.substring(0,1) !== '-' && txn.values[0].name !== 'Create Token'\" \n              class=\"icon\" src=\"assets/receiveIcon.svg\" \n              alt=\"send-receive\"></ion-icon>\n              <ion-icon \n              *ngIf=\"!txn.values[0].name.name && txn.values[0].name === 'Create Token'\" \n              class=\"icon\"\n              src=\"assets/createIcon.svg\" \n              alt=\"send-receive\"></ion-icon>\n            </ion-avatar> -->\n\n            <!-- <ion-list style=\"background-color: transparent; margin:0; padding:2px\">\n              <ion-label class=\"token-name\">\n                <h3 \n                [ngStyle]=\"txn.values[0].amount.substring(0,1) === '-' \n                            ? {'color' : 'var(--ion-color-secondary'} \n                            : {'color' : 'var(--ion-color-primary)'}\"\n                *ngIf=\"txn.values[0].name !== 'Create Token' \n                        && !txn.values[0].name.name\">\n                        {{ txn.values[0].name }}</h3>\n                <h3 *ngIf=\"txn.values[0].name === 'Create Token'\">{{ txn.txpow.body.txn.tokengen.token }}</h3>\n                <h3 \n                [ngStyle]=\"txn.values[0].amount.substring(0,1) === '-' \n                            ? {'color' : 'var(--ion-color-secondary'} \n                            : {'color' : 'var(--ion-color-primary)'}\" \n                *ngIf=\"txn.values[0].name !== 'Create Token' \n                        && txn.values[0].name.name\">\n                        {{ txn.values[0].name.name }}</h3>\n              </ion-label>\n              \n\n              <ion-label \n              class=\"ion-no-padding ion-no-margin transaction-amount\" \n              slot=\"end\" \n              *ngIf=\"txn.values[0].name !== 'Create Token'\">\n                <span *ngIf=\"txn.values[0].amount.substring(0,1) === '-'\"> \n                  <h3 class=\"minima-numeric left\">{{ txn.values[0].amount}}</h3>\n                </span>\n                <span *ngIf=\"txn.values[0].amount.substring(0,1) !== '-'\">\n                  <h3 class=\"minima-numeric left\">{{ \"+\"+ txn.values[0].amount}}</h3>\n                </span>\n              </ion-label>\n              <ion-label \n              class=\"ion-no-padding ion-no-margin transaction-amount\"\n              slot=\"end\" \n              *ngIf=\"txn.values[0].name === 'Create Token'\">\n                <span class=\"minima-numeric left\">\n                  <h3>{{\"+\" + txn.txpow.body.txn.tokengen.total}}</h3>\n                  <p>{{\"-\"+txn.values[0].amount+\" Mini\"}}</p>\n                </span>\n              </ion-label>\n            </ion-list> -->\n\n          <ion-list \n          slot=\"end\"\n          style=\"background-color: transparent;\" \n          class=\"date-time ion-no-padding ion-no-margin\">\n            <ion-label>\n            <!-- <h6 class=\"ion-no-padding ion-no-margin\">\n              {{ txn.values[0].day }} {{ txn.values[0].month }} {{ txn.values[0].year }}\n            </h6>\n            <p class=\"ion-no-padding ion-no-margin ion-text-right\">{{ txn.values[0].time }}</p> -->\n            </ion-label>\n          </ion-list>\n        </ion-item>\n    </ion-list>\n\n    <ion-grid *ngIf=\"transactions.length == 0\">\n      <ion-row>\n        <ion-col style=\"display: flex; align-items:center; justify-content:center\" size=\"12\">\n          <ion-label>{{ prompt }}</ion-label>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n  </ion-content>\n\n  <ion-footer class=\"border-t\">\n    <ion-button (click)=\"giveMe50()\" class=\"gimme50 no-ripple\" fill=\"none\">\n      Gimme 50\n    </ion-button>\n  </ion-footer>\n</ion-app>"

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

module.exports = "ion-icon.icon {\n  width: 36.83px;\n  height: 36.83px;\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-box-pack: center;\n          justify-content: center;\n  align-content: center;\n}\n\nion-card-content ion-text {\n  margin-top: 10px;\n}\n\nion-list ion-item {\n  --padding-start: 27px;\n  --inner-padding-end: 27px;\n}\n\nion-list ion-item:first-child {\n  margin-top: 12px;\n}\n\nion-list ion-item {\n  --border-width: 0px 0px 0px 0px;\n  opacity: 1;\n  --background-activated: var(--ion-color-token)!important;\n  --background-activated-opacity: 0.2 !important;\n  --background-hover: var(--ion-color-item-hover);\n  --background-hover-opacity: 1;\n  --border-color: var(--ion-color-item-border);\n}\n\nion-list.date-time ion-label {\n  padding-top: 20px;\n}\n\nion-list.date-time ion-label h6 {\n  line-height: 10px;\n  color: #aaaabe;\n  font-size: 14px;\n  padding: 0;\n  margin: 0;\n}\n\nion-list.date-time ion-label p {\n  line-height: 13px;\n  color: #aaaabe;\n  margin: 0;\n  padding: 0;\n  font-size: 12px;\n}\n\nion-label {\n  max-width: auto;\n  display: inline-block;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}\n\nion-label.transactionLabel h3 {\n  padding: 0;\n  margin: 0;\n  font-family: manrope-medium;\n  font-size: 16px;\n}\n\nion-label.transactionLabel p {\n  font-family: manrope-light;\n  color: #ABACBF;\n  padding: 0;\n  margin: 0;\n}\n\nion-label.transactionLabel p.time {\n  color: var(--ion-color-gray-three);\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}\n\nion-label.token-name h3 {\n  font-family: manrope-medium;\n  padding: 0;\n  margin: 0;\n  line-height: 17px;\n  text-overflow: ellipsis;\n  max-width: 205px;\n  overflow: hidden;\n  white-space: nowrap;\n}\n\nion-label.transaction-amount h3 {\n  padding: 0;\n  margin: 0;\n}\n\nion-label.transaction-amount p {\n  line-height: 8px;\n  padding: 0;\n  margin: 0;\n  font-size: 10px;\n  font-family: manrope-light;\n}\n\nion-content {\n  overflow-y: scroll;\n}\n\n#filter-settings {\n  position: absolute;\n  right: 5%;\n  top: 15%;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGlhc25lbXIvcHJvamVjdHMvV2FsbGV0L21vYmlsZS1hcHAtZnJvbnQtZW5kL2FwcC9zcmMvYXBwL3BhZ2VzL2hpc3RvcnkvaGlzdG9yeS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2hpc3RvcnkvaGlzdG9yeS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EscUJBQUE7QUNDSjs7QURDQTtFQUNJLGdCQUFBO0FDRUo7O0FEQUE7RUFDSSxxQkFBQTtFQUNBLHlCQUFBO0FDR0o7O0FEREE7RUFDSSxnQkFBQTtBQ0lKOztBREZBO0VBQ0ksK0JBQUE7RUFDQSxVQUFBO0VBQ0Esd0RBQUE7RUFDQSw4Q0FBQTtFQUNBLCtDQUFBO0VBQ0EsNkJBQUE7RUFDQSw0Q0FBQTtBQ0tKOztBREhBO0VBQ0ksaUJBQUE7QUNNSjs7QURMSTtFQUNJLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQ09SOztBRExJO0VBQ0ksaUJBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FDT1I7O0FESkE7RUFDSSxlQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNPSjs7QURMQTtFQUNJLFVBQUE7RUFDQSxTQUFBO0VBQ0EsMkJBQUE7RUFDQSxlQUFBO0FDUUo7O0FETkE7RUFDSSwwQkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQ1NKOztBRFBBO0VBQ0ksa0NBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNVSjs7QURQSTtFQUNJLDJCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDVVI7O0FETkk7RUFDSSxVQUFBO0VBQ0EsU0FBQTtBQ1NSOztBRFBJO0VBQ0ksZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSwwQkFBQTtBQ1NSOztBRE5BO0VBQ0ksa0JBQUE7QUNTSjs7QUROQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxlQUFBO0FDU0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9oaXN0b3J5L2hpc3RvcnkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWljb24uaWNvbiB7XG4gICAgd2lkdGg6IDM2LjgzcHg7XG4gICAgaGVpZ2h0OiAzNi44M3B4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbn1cbmlvbi1jYXJkLWNvbnRlbnQgaW9uLXRleHQge1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG59XG5pb24tbGlzdCBpb24taXRlbSB7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAyN3B4O1xuICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDI3cHg7XG59XG5pb24tbGlzdCBpb24taXRlbTpmaXJzdC1jaGlsZCB7XG4gICAgbWFyZ2luLXRvcDogMTJweDtcbn1cbmlvbi1saXN0IGlvbi1pdGVtIHtcbiAgICAtLWJvcmRlci13aWR0aDogMHB4IDBweCAwcHggMHB4O1xuICAgIG9wYWNpdHk6IDE7XG4gICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogdmFyKC0taW9uLWNvbG9yLXRva2VuKSFpbXBvcnRhbnQ7XG4gICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZC1vcGFjaXR5OiAwLjIgIWltcG9ydGFudDtcbiAgICAtLWJhY2tncm91bmQtaG92ZXI6IHZhcigtLWlvbi1jb2xvci1pdGVtLWhvdmVyKTtcbiAgICAtLWJhY2tncm91bmQtaG92ZXItb3BhY2l0eTogMTtcbiAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWl0ZW0tYm9yZGVyKTtcbn1cbmlvbi1saXN0LmRhdGUtdGltZSBpb24tbGFiZWwge1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgIGg2IHtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEwcHg7XG4gICAgICAgIGNvbG9yOiAjYWFhYWJlO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICB9XG4gICAgcCB7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxM3B4O1xuICAgICAgICBjb2xvcjogI2FhYWFiZTtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgfVxufVxuaW9uLWxhYmVsIHtcbiAgICBtYXgtd2lkdGg6IGF1dG87XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbmlvbi1sYWJlbC50cmFuc2FjdGlvbkxhYmVsIGgzIHtcbiAgICBwYWRkaW5nOjA7XG4gICAgbWFyZ2luOjA7XG4gICAgZm9udC1mYW1pbHk6IG1hbnJvcGUtbWVkaXVtO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbn1cbmlvbi1sYWJlbC50cmFuc2FjdGlvbkxhYmVsIHAge1xuICAgIGZvbnQtZmFtaWx5OiBtYW5yb3BlLWxpZ2h0O1xuICAgIGNvbG9yOiAjQUJBQ0JGO1xuICAgIHBhZGRpbmc6MDtcbiAgICBtYXJnaW46MDsgXG59XG5pb24tbGFiZWwudHJhbnNhY3Rpb25MYWJlbCBwLnRpbWUge1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZ3JheS10aHJlZSk7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuaW9uLWxhYmVsLnRva2VuLW5hbWUge1xuICAgIGgzIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IG1hbnJvcGUtbWVkaXVtO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxN3B4O1xuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgbWF4LXdpZHRoOiAyMDVweDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB9XG59XG5pb24tbGFiZWwudHJhbnNhY3Rpb24tYW1vdW50IHtcbiAgICBoMyB7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICB9XG4gICAgcCB7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiA4cHg7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICBmb250LWZhbWlseTogbWFucm9wZS1saWdodDtcbiAgICB9XG59XG5pb24tY29udGVudCB7XG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xufVxuXG4jZmlsdGVyLXNldHRpbmdzIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDUlO1xuICAgIHRvcDogMTUlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuIiwiaW9uLWljb24uaWNvbiB7XG4gIHdpZHRoOiAzNi44M3B4O1xuICBoZWlnaHQ6IDM2LjgzcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuaW9uLWNhcmQtY29udGVudCBpb24tdGV4dCB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbmlvbi1saXN0IGlvbi1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAyN3B4O1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAyN3B4O1xufVxuXG5pb24tbGlzdCBpb24taXRlbTpmaXJzdC1jaGlsZCB7XG4gIG1hcmdpbi10b3A6IDEycHg7XG59XG5cbmlvbi1saXN0IGlvbi1pdGVtIHtcbiAgLS1ib3JkZXItd2lkdGg6IDBweCAwcHggMHB4IDBweDtcbiAgb3BhY2l0eTogMTtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogdmFyKC0taW9uLWNvbG9yLXRva2VuKSFpbXBvcnRhbnQ7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQtb3BhY2l0eTogMC4yICFpbXBvcnRhbnQ7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogdmFyKC0taW9uLWNvbG9yLWl0ZW0taG92ZXIpO1xuICAtLWJhY2tncm91bmQtaG92ZXItb3BhY2l0eTogMTtcbiAgLS1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1pdGVtLWJvcmRlcik7XG59XG5cbmlvbi1saXN0LmRhdGUtdGltZSBpb24tbGFiZWwge1xuICBwYWRkaW5nLXRvcDogMjBweDtcbn1cbmlvbi1saXN0LmRhdGUtdGltZSBpb24tbGFiZWwgaDYge1xuICBsaW5lLWhlaWdodDogMTBweDtcbiAgY29sb3I6ICNhYWFhYmU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xufVxuaW9uLWxpc3QuZGF0ZS10aW1lIGlvbi1sYWJlbCBwIHtcbiAgbGluZS1oZWlnaHQ6IDEzcHg7XG4gIGNvbG9yOiAjYWFhYWJlO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuaW9uLWxhYmVsIHtcbiAgbWF4LXdpZHRoOiBhdXRvO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG5pb24tbGFiZWwudHJhbnNhY3Rpb25MYWJlbCBoMyB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1mYW1pbHk6IG1hbnJvcGUtbWVkaXVtO1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbmlvbi1sYWJlbC50cmFuc2FjdGlvbkxhYmVsIHAge1xuICBmb250LWZhbWlseTogbWFucm9wZS1saWdodDtcbiAgY29sb3I6ICNBQkFDQkY7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbn1cblxuaW9uLWxhYmVsLnRyYW5zYWN0aW9uTGFiZWwgcC50aW1lIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1ncmF5LXRocmVlKTtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbmlvbi1sYWJlbC50b2tlbi1uYW1lIGgzIHtcbiAgZm9udC1mYW1pbHk6IG1hbnJvcGUtbWVkaXVtO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIGxpbmUtaGVpZ2h0OiAxN3B4O1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgbWF4LXdpZHRoOiAyMDVweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuaW9uLWxhYmVsLnRyYW5zYWN0aW9uLWFtb3VudCBoMyB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbn1cbmlvbi1sYWJlbC50cmFuc2FjdGlvbi1hbW91bnQgcCB7XG4gIGxpbmUtaGVpZ2h0OiA4cHg7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBmb250LWZhbWlseTogbWFucm9wZS1saWdodDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG59XG5cbiNmaWx0ZXItc2V0dGluZ3Mge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiA1JTtcbiAgdG9wOiAxNSU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn0iXX0= */"

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
/* harmony import */ var _service_tools_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../service/tools.service */ "./src/app/service/tools.service.ts");
/* harmony import */ var _service_minima_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../service/minima-api.service */ "./src/app/service/minima-api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_history_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../service/history.service */ "./src/app/service/history.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");








var HistoryPage = /** @class */ (function () {
    function HistoryPage(menu, router, modalController, popoverController, config, myTools, api, historyService) {
        this.menu = menu;
        this.router = router;
        this.modalController = modalController;
        this.popoverController = popoverController;
        this.config = config;
        this.myTools = myTools;
        this.api = api;
        this.historyService = historyService;
        this.categories = 0;
        this.segment = 'all';
        this.prompt = 'Fetching your history...';
        this.transactions = [];
        this.saved = [];
        this.lastJSON = '';
    }
    HistoryPage.prototype.ngOnInit = function () {
        this.ios = this.config.get('mode') === 'ios';
    };
    HistoryPage.prototype.ionViewWillEnter = function () {
        this.pullInHistorySummary();
    };
    HistoryPage.prototype.openMenu = function () {
        this.menu.open();
    };
    HistoryPage.prototype.pullInHistorySummary = function () {
        var _this = this;
        // console.log('Pulling in history');
        this.historyService.data.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (res) {
            res.history.forEach(function (txpow) {
                console.log(txpow);
                if (txpow.txpow.body.txn.tokengen) {
                    //console.log('Token Creation, look at tokengen');
                    //console.log(txpow.txpow.body.txn.tokengen);
                }
                else if (!txpow.txpow.body.txn.tokengen &&
                    //  txpow.values.length > 0 &&
                    txpow.values[0].name &&
                    txpow.values[0].name.substring(0, 1) !== "{\"") {
                    console.log('This is a normal Minima value transaction');
                }
                else if (!txpow.txpow.body.txn.tokengen &&
                    txpow.values.length > 0 &&
                    txpow.values[0].name &&
                    txpow.values[0].name.substring(0, 1) === "{\"") {
                    console.log('This is a token value transaction');
                    console.log(txpow);
                    var token_descr = JSON.parse(txpow.values[0].name);
                    console.log(token_descr);
                    var name_1 = token_descr.name;
                    console.log('Name of token txn' + name_1);
                }
                // if( txpow.values.length > 0) {
                //   const name = txpow.values[0].name;
                //   if (name && !name.name && name.substring(0, 1) === '{') {
                //     txpow.values[0].name = JSON.parse(name);
                //     txpow.values[0].time = moment( parseInt(txpow.txpow.header.timemilli)).format('hh:mm a');
                //     txpow.values[0].day = moment( parseInt(txpow.txpow.header.timemilli)).format("DD");
                //     txpow.values[0].month = moment( parseInt(txpow.txpow.header.timemilli)).format("MMM");
                //     txpow.values[0].year = moment( parseInt(txpow.txpow.header.timemilli)).format("YYYY");
                //   }
                // }
            });
            return res.history;
        })).subscribe(function (res) {
            _this.transactions = res;
        });
        if (this.transactions.length === 0) {
            this.prompt = 'No recent transactions found...';
        }
    };
    HistoryPage.prototype.giveMe50 = function () {
        var _this = this;
        this.api.giveMe50().then(function (res) {
            if (res.status === true) {
                _this.myTools.presentAlert('Gimme50', 'Successful', 'Status');
            }
            else {
                _this.myTools.presentAlert('Gimme50', res.message, 'Status');
            }
        });
    };
    HistoryPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Config"] },
        { type: _service_tools_service__WEBPACK_IMPORTED_MODULE_1__["ToolsService"] },
        { type: _service_minima_api_service__WEBPACK_IMPORTED_MODULE_2__["MinimaApiService"] },
        { type: _service_history_service__WEBPACK_IMPORTED_MODULE_6__["HistoryService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"])('historyList', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonList"])
    ], HistoryPage.prototype, "historyList", void 0);
    HistoryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
            selector: 'app-history',
            template: __webpack_require__(/*! raw-loader!./history.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/history/history.page.html"),
            styles: [__webpack_require__(/*! ./history.page.scss */ "./src/app/pages/history/history.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Config"],
            _service_tools_service__WEBPACK_IMPORTED_MODULE_1__["ToolsService"],
            _service_minima_api_service__WEBPACK_IMPORTED_MODULE_2__["MinimaApiService"],
            _service_history_service__WEBPACK_IMPORTED_MODULE_6__["HistoryService"]])
    ], HistoryPage);
    return HistoryPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-history-history-module-es5.js.map