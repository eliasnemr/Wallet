(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-history-history-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/history/history.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/history/history.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-app>\n  <ion-header translucent=\"true\">\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-menu-button class=\"menu-icon\"></ion-menu-button>\n        </ion-buttons>\n        \n         <ion-title *ngIf=\"!ios\" class=\"large-text\">History</ion-title>\n\n        <ion-segment [(ngModel)]=\"segment\" (ionChange)=\"updateHistory()\" *ngIf=\"ios\" color=\"primary\">\n          <ion-segment-button (ionChange)=\"updateHistory()\" value=\"all\">\n            <ion-label>All</ion-label>\n          </ion-segment-button>\n          <ion-segment-button  value=\"saved\">\n            <ion-label>Saved</ion-label>\n          </ion-segment-button>\n        </ion-segment>\n\n        <ion-segment [(ngModel)]=\"segment\" (ionChange)=\"updateHistory()\" *ngIf=\"!ios\" color=\"tertiary\">\n          <ion-segment-button (ionChange)=\"updateHistory()\" value=\"all\">\n            <ion-label>All</ion-label>\n          </ion-segment-button>\n          <ion-segment-button value=\"saved\">\n            <ion-label>Saved</ion-label>\n          </ion-segment-button>\n        </ion-segment>\n\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content fullscreen=\"true\">\n    <ion-header collapse=\"condense\">\n      <ion-toolbar>\n        <ion-title size=\"large\">History</ion-title>\n      </ion-toolbar>\n    </ion-header>\n\n    <ion-list #historyList>\n      <ion-item-group sticky>\n        <ion-label>\n          \n        </ion-label>\n      </ion-item-group>\n\n      <ion-item-sliding *ngFor=\"let txn of transactions\" #slidingItem [attr.track]=\"\">\n        <ion-item routerLink=\"/view-txn/{{ txn.txpow.txpowid }}\" routerDirection=\"forward\">\n          \n          <ion-row>\n            <ion-col size=\"1\" size-md=\"1\" size-lg=\"1\" size-s=\"1\" size-xs=\"0\">\n              <img style=\"width: 25px;\" id=\"history-icon\" src=\"./assets/sent.svg\" alt=\"send-receive\">\n            </ion-col>\n\n            <ion-col size=\"2\" size-md=\"2\" size-lg=\"2\" size-s=\"2\" size-xs=\"2\">\n              <div class=\"align-middle date\">\n                <p class=\"small-text\">\n                  {{ txn.txpow.header.date.substring(4, 7) }} \n                </p>\n                <h5 class=\"small-text\">\n                  {{ txn.txpow.header.date.substring(8, 10) }}\n                </h5>\n              </div>\n            </ion-col>\n\n            <ion-col *ngIf=\"!txn.values[0].name.name  && txn.values[0].name !== 'Create Token'\">\n              <span *ngIf=\"txn.values[0].amount.substring(0,1) == '-'\"> \n                <h5 class=\"medium-text\">\n                  Sent Minima\n                </h5>\n              </span>\n      \n              <span class=\"medium-text\" *ngIf=\"txn.values[0].amount.substring(0,1) !== '-'\">\n                <h5 class=\"medium-text\">\n                  Received Minima\n                </h5>\n              </span>\n            </ion-col>\n      \n            <ion-col *ngIf=\"txn.values[0].name.name\" size=\"4\">\n              <span class=\"medium-text\" *ngIf=\"txn.values[0].amount.substring(0,1) == '-'\"> \n                <h5 class=\"medium-text\">\n                  Sent {{ txn.values[0].name.name }}\n                </h5>\n              </span>\n      \n              <span class=\"medium-text\" *ngIf=\"txn.values[0].amount.substring(0,1) !== '-'\">\n                <h5 class=\"medium-text\">\n                  Received {{ txn.values[0].name.name }}\n                </h5>\n              </span>\n            </ion-col>\n\n            <ion-col *ngIf=\"!txn.values[0].name.name && txn.values[0].name === 'Create Token'\">\n                <h5 class=\"medium-text\" style=\"margin-top:8px; margin-bottom:0;\">\n                  Created a Token\n                </h5>\n                <p class=\"small-text\" style=\"margin:0;opacity:0.8;\"> &mdash; {{ txn.txpow.body.txn.tokengen.token }}</p>\n            </ion-col>\n\n            <ion-col *ngIf=\"txn.values[0].name !== 'Create Token'\">\n              <span *ngIf=\"txn.values[0].amount.substring(0,1) == '-'\"> \n                <h5 class=\"medium-text\">{{ txn.values[0].amount}}</h5>\n              </span>\n      \n              <span *ngIf=\"txn.values[0].amount.substring(0,1) !== '-'\">\n                <h5 class=\"medium-text\">{{ \"+\"+ txn.values[0].amount}}</h5>\n              </span>\n            </ion-col>\n\n            <ion-col *ngIf=\"txn.values[0].name === 'Create Token'\">\n              <h2 class=\"medium-text\" style=\"margin-top:8px; margin-bottom:0;\">{{ \"+\" + txn.txpow.body.txn.tokengen.total }}</h2>\n              <p class=\"small-text\" style=\"margin:0;opacity:0.8;\"> {{ \"-\" + txn.values[0].amount + \" MINI\"}}</p>\n            </ion-col>\n\n          </ion-row>\n\n        </ion-item>\n        <ion-item-options>\n          <ion-item-option color=\"success\" (click)=\"saveItem(slidingItem, txn)\" *ngIf=\"segment === 'all'\">\n            Save\n          </ion-item-option>\n          <ion-item-option color=\"danger\" (click)=\"removeItem(slidingItem, txn, 'Remove Transaction.')\" *ngIf=\"segment === 'saved'\">\n            Remove\n          </ion-item-option>\n          \n        </ion-item-options>\n      </ion-item-sliding>\n    </ion-list>\n\n\n    <ion-list-header [hidden]=\"transactions.length > 0\">\n      No Activities Yet\n    </ion-list-header>\n\n\n</ion-content>\n  </ion-app>"

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
        component: _history_page__WEBPACK_IMPORTED_MODULE_6__["HistoryPage"],
        children: [
            {
                path: 'view-txn',
                loadChildren: () => __webpack_require__.e(/*! import() | view-txn-view-txn-module */ "view-txn-view-txn-module").then(__webpack_require__.bind(null, /*! ./view-txn/view-txn.module */ "./src/app/pages/history/view-txn/view-txn.module.ts")).then(m => m.ViewTXNPageModule)
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

module.exports = "ion-grid {\n  --ion-grid-padding: 0;\n  --ion-grid-column-padding: 0;\n  --ion-grid-width-xl: 360px;\n  --ion-grid-width-lg: 360px;\n  --ion-grid-padding-md: 90px;\n}\n\nion-card-header {\n  --background: var(--ion-background-color, #f2f2f2);\n  background: -webkit-gradient(linear, left top, left bottom, from(var(--ion-background-color, #fff)), to(var(--ion-background-color, #f2f2f2))) !important;\n  background: linear-gradient(to bottom, var(--ion-background-color, #fff) 0%, var(--ion-background-color, #f2f2f2) 100%) !important;\n}\n\nion-segment {\n  padding-left: 0;\n  padding-right: 0;\n}\n\n.ios ion-title {\n  font-size: 30px !important;\n}\n\nion-toolbar {\n  --padding-top: 15px;\n}\n\n.ios ion-toolbar {\n  --padding-top: 30px;\n  --padding-left: 10px;\n  --padding-right: 5px;\n  --padding-bottom: 5px;\n}\n\n.ios ion-segment {\n  padding-top: 5px;\n}\n\nion-card-content {\n  width: 100%;\n  text-align: center;\n}\n\nion-segment {\n  margin-top: 5px;\n  padding: 0px 10px 0px 10px;\n}\n\nion-card-content ion-text {\n  margin-top: 10px;\n}\n\nion-row {\n  padding: 2px;\n}\n\nion-grid {\n  padding: 0px;\n}\n\nion-row:hover {\n  background: var(--ion-background-color, #f2f2f2);\n}\n\nion-row {\n  width: 100%;\n}\n\nion-toolbar {\n  --background: var(--card-header-color);\n}\n\nh5 {\n  font-weight: 600;\n  opacity: 0.8;\n}\n\nion-col img {\n  display: block;\n  height: 100%;\n}\n\n.align-middle {\n  display: block;\n  height: 100%;\n}\n\n.date p {\n  margin-top: 8px;\n  margin-bottom: 0;\n  font-weight: 500;\n}\n\n.date h5 {\n  margin: 0;\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGlhc25lbXIvcHJvamVjdHMvV0FMTEVUL21vYmlsZS1hcHAtZnJvbnQtZW5kL2FwcC9zcmMvYXBwL3BhZ2VzL2hpc3RvcnkvaGlzdG9yeS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2hpc3RvcnkvaGlzdG9yeS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxxQkFBQTtFQUNBLDRCQUFBO0VBQ0EsMEJBQUE7RUFDQSwwQkFBQTtFQUNBLDJCQUFBO0FDQUo7O0FER0E7RUFFSSxrREFBQTtFQUNBLHlKQUFBO0VBQUEsa0lBQUE7QUNESjs7QURJQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQ0RKOztBREdBO0VBQ0ksMEJBQUE7QUNBSjs7QURFQTtFQUNJLG1CQUFBO0FDQ0o7O0FEQ0E7RUFDSSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtBQ0VKOztBRENBO0VBQ0ksZ0JBQUE7QUNFSjs7QURDQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtBQ0VKOztBREFBO0VBQ0ksZUFBQTtFQUNBLDBCQUFBO0FDR0o7O0FEREE7RUFDSSxnQkFBQTtBQ0lKOztBREZBO0VBQ0ksWUFBQTtBQ0tKOztBREZBO0VBQ0ksWUFBQTtBQ0tKOztBREhBO0VBQ0ksZ0RBQUE7QUNNSjs7QURIQTtFQUNJLFdBQUE7QUNNSjs7QURIQTtFQUNJLHNDQUFBO0FDTUo7O0FESEE7RUFDSSxnQkFBQTtFQUNBLFlBQUE7QUNNSjs7QURKQTtFQUNJLGNBQUE7RUFDQSxZQUFBO0FDT0o7O0FETEE7RUFDSSxjQUFBO0VBQ0EsWUFBQTtBQ1FKOztBRE5BO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNTSjs7QURQQTtFQUNJLFNBQUE7RUFDQSxnQkFBQTtBQ1VKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaGlzdG9yeS9oaXN0b3J5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGlvbi1ncmlkLCBpb24tcm93LCBpb24tY29sIFxuaW9uLWdyaWQge1xuICAgIC0taW9uLWdyaWQtcGFkZGluZzogMDtcbiAgICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwO1xuICAgIC0taW9uLWdyaWQtd2lkdGgteGw6IDM2MHB4O1xuICAgIC0taW9uLWdyaWQtd2lkdGgtbGc6IDM2MHB4O1xuICAgIC0taW9uLWdyaWQtcGFkZGluZy1tZDogOTBweDtcbn1cblxuaW9uLWNhcmQtaGVhZGVyIHtcblxuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsICNmMmYyZjIpO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwgI2ZmZikgMCUsIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZjJmMmYyKSAxMDAlKSAhaW1wb3J0YW50O1xuICAgIFxufVxuaW9uLXNlZ21lbnQge1xuICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xufVxuLmlvcyBpb24tdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMzBweCAhaW1wb3J0YW50O1xufVxuaW9uLXRvb2xiYXIge1xuICAgIC0tcGFkZGluZy10b3A6IDE1cHg7XG59XG4uaW9zIGlvbi10b29sYmFyIHtcbiAgICAtLXBhZGRpbmctdG9wOiAzMHB4O1xuICAgIC0tcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIC0tcGFkZGluZy1yaWdodDogNXB4O1xuICAgIC0tcGFkZGluZy1ib3R0b206IDVweDtcblxufVxuLmlvcyBpb24tc2VnbWVudCB7XG4gICAgcGFkZGluZy10b3A6IDVweDtcbn1cblxuaW9uLWNhcmQtY29udGVudCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyAgICBcbn1cbmlvbi1zZWdtZW50IHtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgcGFkZGluZzogMHB4IDEwcHggMHB4IDEwcHg7XG59XG5pb24tY2FyZC1jb250ZW50IGlvbi10ZXh0IHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuaW9uLXJvdyB7XG4gICAgcGFkZGluZzogMnB4O1xufSBcblxuaW9uLWdyaWQge1xuICAgIHBhZGRpbmc6IDBweDtcbn1cbmlvbi1yb3c6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZjJmMmYyKTtcbn1cblxuaW9uLXJvdyB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWNhcmQtaGVhZGVyLWNvbG9yKTtcbn1cblxuaDUge1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgb3BhY2l0eTogMC44O1xufVxuaW9uLWNvbCBpbWcge1xuICAgIGRpc3BsYXk6YmxvY2s7XG4gICAgaGVpZ2h0OjEwMCU7XG59XG4uYWxpZ24tbWlkZGxlIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG4uZGF0ZSBwIHtcbiAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICBmb250LXdlaWdodDogNTAwO1xufVxuLmRhdGUgaDUge1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LXdlaWdodDogNjAwO1xufVxuIiwiaW9uLWdyaWQge1xuICAtLWlvbi1ncmlkLXBhZGRpbmc6IDA7XG4gIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDA7XG4gIC0taW9uLWdyaWQtd2lkdGgteGw6IDM2MHB4O1xuICAtLWlvbi1ncmlkLXdpZHRoLWxnOiAzNjBweDtcbiAgLS1pb24tZ3JpZC1wYWRkaW5nLW1kOiA5MHB4O1xufVxuXG5pb24tY2FyZC1oZWFkZXIge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZjJmMmYyKTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsICNmZmYpIDAlLCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwgI2YyZjJmMikgMTAwJSkgIWltcG9ydGFudDtcbn1cblxuaW9uLXNlZ21lbnQge1xuICBwYWRkaW5nLWxlZnQ6IDA7XG4gIHBhZGRpbmctcmlnaHQ6IDA7XG59XG5cbi5pb3MgaW9uLXRpdGxlIHtcbiAgZm9udC1zaXplOiAzMHB4ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1wYWRkaW5nLXRvcDogMTVweDtcbn1cblxuLmlvcyBpb24tdG9vbGJhciB7XG4gIC0tcGFkZGluZy10b3A6IDMwcHg7XG4gIC0tcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAtLXBhZGRpbmctcmlnaHQ6IDVweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogNXB4O1xufVxuXG4uaW9zIGlvbi1zZWdtZW50IHtcbiAgcGFkZGluZy10b3A6IDVweDtcbn1cblxuaW9uLWNhcmQtY29udGVudCB7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlvbi1zZWdtZW50IHtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBwYWRkaW5nOiAwcHggMTBweCAwcHggMTBweDtcbn1cblxuaW9uLWNhcmQtY29udGVudCBpb24tdGV4dCB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbmlvbi1yb3cge1xuICBwYWRkaW5nOiAycHg7XG59XG5cbmlvbi1ncmlkIHtcbiAgcGFkZGluZzogMHB4O1xufVxuXG5pb24tcm93OmhvdmVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsICNmMmYyZjIpO1xufVxuXG5pb24tcm93IHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1jYXJkLWhlYWRlci1jb2xvcik7XG59XG5cbmg1IHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgb3BhY2l0eTogMC44O1xufVxuXG5pb24tY29sIGltZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5hbGlnbi1taWRkbGUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uZGF0ZSBwIHtcbiAgbWFyZ2luLXRvcDogOHB4O1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uZGF0ZSBoNSB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn0iXX0= */"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _service_history_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/history.service */ "./src/app/service/history.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _providers_user_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../providers/user-data */ "./src/app/providers/user-data.ts");








let HistoryPage = class HistoryPage {
    constructor(service, modalController, user, alertCtrl, toastCtrl, config, router) {
        this.service = service;
        this.modalController = modalController;
        this.user = user;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.config = config;
        this.router = router;
        this.categories = 0;
        this.segment = 'all';
        // + vars
        this.transactions = [];
        this.saved = [];
        // - vars
        this.lastJSON = '';
    }
    ngOnInit() {
        this.pullInHistorySummary();
        this.ios = this.config.get('mode') === 'ios';
    }
    ionViewDidLeave() {
        if (this.historySub) {
            this.historySub.unsubscribe();
        }
        this.user.storage.set('saved_transactions', this.user.saved).then((val) => {
        });
    }
    saveItem(slidingItem, txn) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.user.hasSaved(txn.txpow.txpowid)) {
                // Prompt to remove as saved
                this.removeItem(slidingItem, txn.txpow.txpowid, 'This has already been saved');
                // saved = 'false' now
                txn.saved = 'false';
            }
            else {
                // Add to Saved
                this.user.addToSaved(txn.txpow.txpowid);
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
                            this.user.removeFromSaved(txn.txpow.txpowid);
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
    // Get all users activities+transactions history
    pullInHistorySummary() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield new Promise((resolve, reject) => {
                Minima.cmd('history', (res) => {
                    this.service.historyData$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](res);
                    resolve(this.service.historyData$);
                });
            }).then((res) => {
                this.historySub = res.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])((resp) => {
                    this.transactions = [];
                    resp.response.history.forEach((element) => {
                        const name = element.values[0].name;
                        if (name.substring(0, 1) === '{') {
                            element.values[0].name = JSON.parse(name);
                        }
                        this.transactions.push(element);
                    });
                    return this.transactions;
                })).subscribe((resp) => {
                    if (this.lastJSON !== JSON.stringify(resp)) {
                        // this.transactions = responseData;
                        this.lastJSON = JSON.stringify(resp);
                    }
                });
            });
        });
    }
};
HistoryPage.ctorParameters = () => [
    { type: _service_history_service__WEBPACK_IMPORTED_MODULE_5__["HistoryService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _providers_user_data__WEBPACK_IMPORTED_MODULE_7__["UserData"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Config"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('historyList', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonList"])
], HistoryPage.prototype, "historyList", void 0);
HistoryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-history',
        template: __webpack_require__(/*! raw-loader!./history.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/history/history.page.html"),
        styles: [__webpack_require__(/*! ./history.page.scss */ "./src/app/pages/history/history.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_history_service__WEBPACK_IMPORTED_MODULE_5__["HistoryService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _providers_user_data__WEBPACK_IMPORTED_MODULE_7__["UserData"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Config"],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]])
], HistoryPage);



/***/ }),

/***/ "./src/app/providers/user-data.ts":
/*!****************************************!*\
  !*** ./src/app/providers/user-data.ts ***!
  \****************************************/
/*! exports provided: UserData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserData", function() { return UserData; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");



let UserData = class UserData {
    constructor(storage) {
        this.storage = storage;
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
UserData.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"] }
];
UserData = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"]])
], UserData);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HistoryService = class HistoryService {
    constructor() { }
};
HistoryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], HistoryService);



/***/ })

}]);
//# sourceMappingURL=pages-history-history-module-es2015.js.map