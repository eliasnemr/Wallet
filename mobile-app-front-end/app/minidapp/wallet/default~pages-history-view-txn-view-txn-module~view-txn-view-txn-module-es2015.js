(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-history-view-txn-view-txn-module~view-txn-view-txn-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/history/view-txn/view-txn.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/history/view-txn/view-txn.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"page-header ion-no-border\">\n  <ion-toolbar>\n    <ion-title>\n      <ion-item id=\"title\" lines=\"none\" class=\"no-ripple ion-no-padding\">\n        <ion-icon routerLink=\"/history\" class=\"back-btn\" name=\"arrow-back\"></ion-icon>\n        History\n      </ion-item>\n      <ion-item id=\"subtitle\" class=\"breadcrumb ion-no-padding\" lines=\"none\">\n        Transaction details\n      </ion-item>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"page-content\">\n  <ion-grid  *ngIf=\"!loading && !myTxn\">\n    <ion-row>\n      <ion-col style=\"display: flex; align-items:center; justify-content:center\" size=\"12\">\n        <ion-label>Invalid transaction ID!</ion-label>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-grid  *ngIf=\"loading && transactionID.length !== 0\">\n    <ion-row>\n      <ion-col style=\"display: flex; align-items:center; justify-content:center\" size=\"12\">\n        <ion-label>Fetching transaction details...</ion-label>\n      </ion-col>\n      <ion-col style=\"display: flex; align-items:center; justify-content:center\" size=\"12\">\n        <ion-spinner name=\"crescent\"></ion-spinner>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid class=\"ion-no-padding\" *ngIf=\"!loading && transactionID.length !== 0 && myTxn\">    \n    <ion-list class=\"ion-no-padding\" id=\"transaction-details\">\n      <ion-item lines=\"none\" class=\"ion-no-padding\">\n        <ion-label>\n          <h6 class=\"title\">Status</h6>\n          <p class=\"value completed\">Completed</p>\n        </ion-label>\n      </ion-item>\n\n      <ion-item lines=\"none\" class=\"ion-no-padding\">\n        <ion-label>\n          <h6 class=\"title\">Hash\n            <a class=\"copy\" (click)=\"copyToClipPWA(myTxn.txpow.txpowid)\">\n              Copy \n            </a>\n          </h6>\n          <p class=\"value\"> {{ myTxn.txpow.txpowid }}</p>\n        </ion-label>\n      </ion-item>\n\n      <ion-item lines=\"none\" class=\"ion-no-padding\">\n        <ion-label>\n          <h6 class=\"title\">Date & time</h6>\n          <p class=\"value\"> {{ relaytime }}</p>\n        </ion-label>\n      </ion-item>\n\n      <ion-item *ngIf=\"message && message.length > 0\" lines=\"none\" class=\"ion-no-padding\">\n        <ion-label>\n          <h6 class=\"title\">Public message</h6>\n          <p class=\"value\"> {{ message }}</p>\n        </ion-label>\n      </ion-item>\n\n      <ion-item lines=\"none\" class=\"ion-no-padding\">\n        <ion-label>\n          <h6 class=\"title\">Size</h6>\n          <p class=\"value\"> {{ myTxn.txpow.size }}</p>\n        </ion-label>\n      </ion-item>\n\n      <ion-item lines=\"none\" class=\"ion-no-padding\">\n        <ion-label>\n          <h6 class=\"title\">In block</h6>\n          <p class=\"value\">{{ myTxn.txpow.header.block }}</p>\n        </ion-label>\n      </ion-item>\n\n      <ion-item lines=\"none\" *ngIf=\"type === 'Token Creation.'\" class=\"ion-no-padding\">\n        <ion-label>\n          <h6 class=\"title\">Token name</h6>\n          <p class=\"value\">{{ myTxn.txpow.body.txn.tokengen.token }}</p>\n        </ion-label>\n      </ion-item>\n\n      <ion-item lines=\"none\" *ngIf=\"type === 'Token Creation.'\" class=\"ion-no-padding\">\n        <ion-label>\n          <h6 class=\"title\">Token total</h6>\n          <p class=\"value\">{{ myTxn.txpow.body.txn.tokengen.total }}</p>\n        </ion-label>\n      </ion-item>\n\n      <ion-item id=\"last-child\" lines=\"none\" class=\"ion-no-padding\">\n        <ion-label>\n          <h6 class=\"title\">Transaction type</h6>\n          <p class=\"value\">{{type}}</p>\n        </ion-label>\n      </ion-item> \n    </ion-list>\n\n      \n\n\n    <ion-list id=\"input-details\">\n      <ion-list-header>\n        <ion-item lines=\"none\" class=\"ion-no-padding\">\n          Transaction inputs\n        </ion-item>\n      </ion-list-header>\n\n      <ng-container *ngFor=\"let input of myTxn.txpow.body.txn.inputs; let i = index\">\n        <div id=\"inputs\">\n        <ion-item lines=\"none\" class=\"ion-no-padding\">\n          <ion-label>\n            <h6 class=\"title\">Index</h6>\n            <p class=\"value\">{{ '#'+ i}}</p>\n          </ion-label>\n        </ion-item>\n        <ion-item lines=\"none\" class=\"ion-no-padding\">\n          <ion-label>\n            <h6 class=\"title\">Coin ID</h6>\n            <p class=\"value\">{{ input.coinid }}</p>\n          </ion-label>\n        </ion-item>\n        <ion-item lines=\"none\" class=\"ion-no-padding\">\n          <ion-label>\n            <h6 class=\"title\"> Recipient address\n              <a class=\"copy\" (click)=\"copyToClipPWA(input.address)\">\n                Copy\n              </a>\n            </h6>\n            <p class=\"value\">{{ input.mxaddress }}</p>\n          </ion-label>\n        </ion-item>\n        <ion-item lines=\"full\" class=\"ion-no-padding\">\n          <ion-label>\n            <h6 class=\"title\">Amount</h6>\n            <p class=\"value\">{{ input.amount }}</p>\n          </ion-label>\n        </ion-item>\n      </div>\n      </ng-container>\n    </ion-list>\n\n    <ion-list id=\"output-details\">\n      <ion-list-header class=\"ion-no-padding\">\n        <ion-item lines=\"none\" class=\"ion-no-padding\">\n          Transaction outputs\n        </ion-item>\n      </ion-list-header>\n\n      <ng-container *ngFor=\"let output of myTxn.txpow.body.txn.outputs; let i = index\">\n        <div id=\"outputs\">\n        <ion-item lines=\"none\" class=\"ion-no-padding\">\n          <ion-label>\n            <h6 class=\"title\">Index</h6>\n            <p class=\"value\">{{ '#'+ i}}</p>\n          </ion-label>\n        </ion-item>\n        <ion-item lines=\"none\" class=\"ion-no-padding\">\n          <ion-label>\n            <h6 class=\"title\">Coin ID</h6>\n            <p class=\"value\">{{ output.coinid }}</p>\n          </ion-label>\n        </ion-item>\n        <ion-item lines=\"none\" class=\"ion-no-padding\">\n          <ion-label>\n            <h6 class=\"title\">Outgoing address\n              <a class=\"copy\" (click)=\"copyToClipPWA(output.address)\">\n                Copy\n              </a>\n            </h6>\n            <p class=\"value\">{{ output.mxaddress }}</p>\n          </ion-label>\n        </ion-item>\n        <ion-item lines=\"full\" class=\"ion-no-padding\">\n          <ion-label>\n            <h6 class=\"title\">Amount</h6>\n            <p class=\"value\">{{ output.amount }}</p>\n          </ion-label>\n        </ion-item>\n      </div>\n      </ng-container>\n    </ion-list>\n\n  </ion-grid>\n</ion-content>\n\n<ion-footer class=\"border-t\">\n  <ion-button (click)=\"giveMe50()\" class=\"gimme50 no-ripple\" fill=\"none\">\n    Gimme 50\n  </ion-button>\n</ion-footer>\n"

/***/ }),

/***/ "./src/app/pages/history/view-txn/view-txn.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/history/view-txn/view-txn.module.ts ***!
  \***********************************************************/
/*! exports provided: ViewTXNPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewTXNPageModule", function() { return ViewTXNPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _view_txn_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view-txn.page */ "./src/app/pages/history/view-txn/view-txn.page.ts");







const routes = [
    {
        path: '',
        component: _view_txn_page__WEBPACK_IMPORTED_MODULE_6__["ViewTXNPage"]
    }
];
let ViewTXNPageModule = class ViewTXNPageModule {
};
ViewTXNPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_view_txn_page__WEBPACK_IMPORTED_MODULE_6__["ViewTXNPage"]]
    })
], ViewTXNPageModule);



/***/ }),

/***/ "./src/app/pages/history/view-txn/view-txn.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/history/view-txn/view-txn.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-list#input-details, ion-list#output-details {\n  margin: 0;\n  padding: 0;\n}\n\ndiv#inputs ion-item, div#outputs ion-item {\n  border-bottom: 1px solid var(--ion-color-item-border);\n}\n\nion-list ion-item {\n  --inner-padding-end: 0;\n}\n\nion-list#input-details ion-item:nth-child(0), ion-list#output-details ion-item:nth-child(0) {\n  margin-left: 0 !important;\n}\n\nion-list#input-details ion-list-header, ion-list#output-details ion-list-header {\n  font-size: 16px;\n  padding-left: 0;\n}\n\nion-list#input-details ion-list-header ion-item, ion-list#output-details ion-list-header ion-item {\n  width: 100%;\n  border-bottom: 1px solid var(--ion-color-item-border);\n}\n\nion-list#transaction-details {\n  margin: 0;\n  padding: 0;\n}\n\nion-list#transaction-details ion-item:first-child ion-label {\n  margin-top: 3px !important;\n}\n\nion-list#transaction-details ion-item ion-label {\n  margin-top: 0px;\n  margin-bottom: 6px;\n}\n\nion-list#transaction-details ion-item {\n  border-bottom: 1px solid var(--ion-color-item-border);\n}\n\nion-item#last-child {\n  --border-color: #001C32 !important;\n  --border-width: 0 0 1px 0;\n}\n\n.copy {\n  text-decoration: underline;\n  cursor: pointer;\n  font-size: 0.8rem;\n}\n\nion-list-header ion-item {\n  --border-color: var(--ion-color-ruler);\n  --border-width: 0px 0px 1px 0px;\n  --inner-padding-end: 0;\n  font-size: 16px;\n  font-family: manrope-bold;\n}\n\n.title {\n  font-family: manrope-bold;\n  font-size: 1rem;\n  text-overflow: ellipsis;\n  max-width: inherit;\n  white-space: normal;\n  word-wrap: normal;\n  color: var(--ion-color-color);\n}\n\n.value {\n  font-family: manrope-regular;\n  text-align: left;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  max-width: inherit;\n  overflow: hidden;\n  color: var(--ion-color-color);\n  opacity: 0.7;\n}\n\n.wrap {\n  white-space: normal !important;\n  text-overflow: clip !important;\n  overflow: auto !important;\n}\n\n.relay {\n  display: inline-block;\n  width: 100%;\n}\n\n.chevron {\n  width: 15px;\n}\n\n.completed {\n  font-size: 16px;\n  color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGlhc25lbXIvcHJvamVjdHMvV2FsbGV0L21vYmlsZS1hcHAtZnJvbnQtZW5kL2FwcC9zcmMvYXBwL3BhZ2VzL2hpc3Rvcnkvdmlldy10eG4vdmlldy10eG4ucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9oaXN0b3J5L3ZpZXctdHhuL3ZpZXctdHhuLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFNBQUE7RUFDQSxVQUFBO0FDQ0o7O0FEQ0E7RUFDSSxxREFBQTtBQ0VKOztBREFBO0VBQ0ksc0JBQUE7QUNHSjs7QUREQTtFQUNJLHlCQUFBO0FDSUo7O0FERkE7RUFDSSxlQUFBO0VBQ0EsZUFBQTtBQ0tKOztBREpJO0VBQ0ksV0FBQTtFQUNBLHFEQUFBO0FDTVI7O0FESEE7RUFDSSxTQUFBO0VBQ0EsVUFBQTtBQ01KOztBREpBO0VBQ0ksMEJBQUE7QUNPSjs7QURMQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtBQ1FKOztBRE5BO0VBQ0kscURBQUE7QUNTSjs7QURQQTtFQUNJLGtDQUFBO0VBQ0EseUJBQUE7QUNVSjs7QURSQTtFQUNJLDBCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDV0o7O0FEVEE7RUFDSSxzQ0FBQTtFQUNBLCtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QUNZSjs7QURWQTtFQUNJLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsNkJBQUE7QUNhSjs7QURYQTtFQUNJLDRCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtBQ2NKOztBRFpBO0VBQ0ksOEJBQUE7RUFDQSw4QkFBQTtFQUNBLHlCQUFBO0FDZUo7O0FEYkE7RUFDSSxxQkFBQTtFQUNBLFdBQUE7QUNnQko7O0FEZEE7RUFDSSxXQUFBO0FDaUJKOztBRGRBO0VBQ0ksZUFBQTtFQUNBLCtCQUFBO0FDaUJKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaGlzdG9yeS92aWV3LXR4bi92aWV3LXR4bi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tbGlzdCNpbnB1dC1kZXRhaWxzLCBpb24tbGlzdCNvdXRwdXQtZGV0YWlscyB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG59XG5kaXYjaW5wdXRzIGlvbi1pdGVtLCBkaXYjb3V0cHV0cyBpb24taXRlbSB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1pdGVtLWJvcmRlcik7XG59XG5pb24tbGlzdCBpb24taXRlbSB7XG4gICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMDtcbn1cbmlvbi1saXN0I2lucHV0LWRldGFpbHMgaW9uLWl0ZW06bnRoLWNoaWxkKDApLCBpb24tbGlzdCNvdXRwdXQtZGV0YWlscyBpb24taXRlbTpudGgtY2hpbGQoMCkge1xuICAgIG1hcmdpbi1sZWZ0OiAwIWltcG9ydGFudDtcbn1cbmlvbi1saXN0I2lucHV0LWRldGFpbHMgaW9uLWxpc3QtaGVhZGVyLCBpb24tbGlzdCNvdXRwdXQtZGV0YWlscyBpb24tbGlzdC1oZWFkZXIge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgaW9uLWl0ZW0ge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1pdGVtLWJvcmRlcik7XG4gICAgfVxufVxuaW9uLWxpc3QjdHJhbnNhY3Rpb24tZGV0YWlscyB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG59XG5pb24tbGlzdCN0cmFuc2FjdGlvbi1kZXRhaWxzIGlvbi1pdGVtOmZpcnN0LWNoaWxkIGlvbi1sYWJlbCB7XG4gICAgbWFyZ2luLXRvcDogM3B4ICFpbXBvcnRhbnQ7XG59XG5pb24tbGlzdCN0cmFuc2FjdGlvbi1kZXRhaWxzIGlvbi1pdGVtIGlvbi1sYWJlbCB7XG4gICAgbWFyZ2luLXRvcDogMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDZweDtcbn1cbmlvbi1saXN0I3RyYW5zYWN0aW9uLWRldGFpbHMgaW9uLWl0ZW0ge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItaXRlbS1ib3JkZXIpO1xufVxuaW9uLWl0ZW0jbGFzdC1jaGlsZCB7XG4gICAgLS1ib3JkZXItY29sb3I6ICMwMDFDMzIgIWltcG9ydGFudDtcbiAgICAtLWJvcmRlci13aWR0aDogMCAwIDFweCAwO1xufVxuLmNvcHkge1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmb250LXNpemU6IDAuOHJlbTtcbn1cbmlvbi1saXN0LWhlYWRlciBpb24taXRlbSB7XG4gICAgLS1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1ydWxlcik7XG4gICAgLS1ib3JkZXItd2lkdGg6IDBweCAwcHggMXB4IDBweDtcbiAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LWZhbWlseTogbWFucm9wZS1ib2xkO1xufVxuLnRpdGxlIHtcbiAgICBmb250LWZhbWlseTogbWFucm9wZS1ib2xkO1xuICAgIGZvbnQtc2l6ZTogMS4wcmVtO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIG1heC13aWR0aDogaW5oZXJpdDtcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICAgIHdvcmQtd3JhcDogbm9ybWFsO1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItY29sb3IpO1xufVxuLnZhbHVlIHtcbiAgICBmb250LWZhbWlseTogbWFucm9wZS1yZWd1bGFyO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICBtYXgtd2lkdGg6IGluaGVyaXQ7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWNvbG9yKTtcbiAgICBvcGFjaXR5OiAwLjdcbn1cbi53cmFwIHtcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsICFpbXBvcnRhbnQ7XG4gICAgdGV4dC1vdmVyZmxvdzogY2xpcCAhaW1wb3J0YW50O1xuICAgIG92ZXJmbG93OiBhdXRvICFpbXBvcnRhbnQ7XG59XG4ucmVsYXkge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbn1cbi5jaGV2cm9uIHtcbiAgICB3aWR0aDogMTVweDtcbn1cblxuLmNvbXBsZXRlZCB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSlcbn1cblxuIiwiaW9uLWxpc3QjaW5wdXQtZGV0YWlscywgaW9uLWxpc3Qjb3V0cHV0LWRldGFpbHMge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbmRpdiNpbnB1dHMgaW9uLWl0ZW0sIGRpdiNvdXRwdXRzIGlvbi1pdGVtIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1pdGVtLWJvcmRlcik7XG59XG5cbmlvbi1saXN0IGlvbi1pdGVtIHtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMDtcbn1cblxuaW9uLWxpc3QjaW5wdXQtZGV0YWlscyBpb24taXRlbTpudGgtY2hpbGQoMCksIGlvbi1saXN0I291dHB1dC1kZXRhaWxzIGlvbi1pdGVtOm50aC1jaGlsZCgwKSB7XG4gIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1saXN0I2lucHV0LWRldGFpbHMgaW9uLWxpc3QtaGVhZGVyLCBpb24tbGlzdCNvdXRwdXQtZGV0YWlscyBpb24tbGlzdC1oZWFkZXIge1xuICBmb250LXNpemU6IDE2cHg7XG4gIHBhZGRpbmctbGVmdDogMDtcbn1cbmlvbi1saXN0I2lucHV0LWRldGFpbHMgaW9uLWxpc3QtaGVhZGVyIGlvbi1pdGVtLCBpb24tbGlzdCNvdXRwdXQtZGV0YWlscyBpb24tbGlzdC1oZWFkZXIgaW9uLWl0ZW0ge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1pdGVtLWJvcmRlcik7XG59XG5cbmlvbi1saXN0I3RyYW5zYWN0aW9uLWRldGFpbHMge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbmlvbi1saXN0I3RyYW5zYWN0aW9uLWRldGFpbHMgaW9uLWl0ZW06Zmlyc3QtY2hpbGQgaW9uLWxhYmVsIHtcbiAgbWFyZ2luLXRvcDogM3B4ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1saXN0I3RyYW5zYWN0aW9uLWRldGFpbHMgaW9uLWl0ZW0gaW9uLWxhYmVsIHtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBtYXJnaW4tYm90dG9tOiA2cHg7XG59XG5cbmlvbi1saXN0I3RyYW5zYWN0aW9uLWRldGFpbHMgaW9uLWl0ZW0ge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWl0ZW0tYm9yZGVyKTtcbn1cblxuaW9uLWl0ZW0jbGFzdC1jaGlsZCB7XG4gIC0tYm9yZGVyLWNvbG9yOiAjMDAxQzMyICFpbXBvcnRhbnQ7XG4gIC0tYm9yZGVyLXdpZHRoOiAwIDAgMXB4IDA7XG59XG5cbi5jb3B5IHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAwLjhyZW07XG59XG5cbmlvbi1saXN0LWhlYWRlciBpb24taXRlbSB7XG4gIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcnVsZXIpO1xuICAtLWJvcmRlci13aWR0aDogMHB4IDBweCAxcHggMHB4O1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtZmFtaWx5OiBtYW5yb3BlLWJvbGQ7XG59XG5cbi50aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBtYW5yb3BlLWJvbGQ7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIG1heC13aWR0aDogaW5oZXJpdDtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgd29yZC13cmFwOiBub3JtYWw7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItY29sb3IpO1xufVxuXG4udmFsdWUge1xuICBmb250LWZhbWlseTogbWFucm9wZS1yZWd1bGFyO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgbWF4LXdpZHRoOiBpbmhlcml0O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWNvbG9yKTtcbiAgb3BhY2l0eTogMC43O1xufVxuXG4ud3JhcCB7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWwgIWltcG9ydGFudDtcbiAgdGV4dC1vdmVyZmxvdzogY2xpcCAhaW1wb3J0YW50O1xuICBvdmVyZmxvdzogYXV0byAhaW1wb3J0YW50O1xufVxuXG4ucmVsYXkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY2hldnJvbiB7XG4gIHdpZHRoOiAxNXB4O1xufVxuXG4uY29tcGxldGVkIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/history/view-txn/view-txn.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/history/view-txn/view-txn.page.ts ***!
  \*********************************************************/
/*! exports provided: ViewTXNPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewTXNPage", function() { return ViewTXNPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _service_history_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../service/history.service */ "./src/app/service/history.service.ts");
/* harmony import */ var _service_minima_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../service/minima-api.service */ "./src/app/service/minima-api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");






var moment = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
let ViewTXNPage = class ViewTXNPage {
    constructor(route, toastController, api, _historyService, alertController) {
        this.route = route;
        this.toastController = toastController;
        this.api = api;
        this._historyService = _historyService;
        this.alertController = alertController;
        this.transactionID = '';
        this.hide = false;
        this.loading = true;
        this.message = '';
        this.transactionID = this.route.snapshot.paramMap.get('id');
    }
    ngOnInit() {
        this._historyService
            .loadHistoryOnce()
            .then((res) => {
            this.loading = false;
            this.myTxn = res.history.filter((txpow) => txpow.txpow.txpowid === this.transactionID);
            this.myTxn = this.myTxn[0];
            this.relaytime = new Date(this.myTxn.txpow.header.timesecs * 1000).toISOString();
            this.relaytime = moment(this.relaytime).format('DD/MM/YYYY - hh:mm:ss', true);
            if (this.myTxn.txpow.body.txn.state && this.myTxn.txpow.body.txn.state[0] && this.myTxn.txpow.body.txn.state[0].data === '[01000100]') {
                this.message = this.myTxn.txpow.body.txn.state[1].data;
                this.message = this.message.substring(1, this.message.length - 1);
            }
            if (this.myTxn.txpow.body.txn.tokengen) {
                this.type = 'Token Creation.';
            }
            else {
                this.type = 'Value Transfer.';
            }
        }).catch(error => {
            console.log(error);
        });
    }
    shout() {
        if (this.hide === true) {
            this.hide = false;
        }
        else {
            this.hide = true;
        }
    }
    presentAlertDefault(hdr, msg, sub) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'alert',
                header: hdr,
                subHeader: sub,
                message: msg,
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    giveMe50() {
        this.api.giveMe50().then((res) => {
            if (res.status === true) {
                this.presentAlertDefault('Gimme50', 'Successful', 'Status');
            }
            else {
                this.presentAlertDefault('Gimme50', res.message, 'Status');
            }
        });
    }
    copyToClipPWA(text) {
        document.addEventListener('copy', (e) => {
            e.clipboardData.setData('text/plain', text);
            this.presentToast('Copied to Clipboard', 'success');
            e.preventDefault();
            document.removeEventListener('copy', null);
        });
        document.execCommand('copy');
    }
    presentToast(msg, type) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: msg,
                duration: 4000,
                buttons: [{
                        text: 'Close',
                        role: 'cancel'
                    }],
                color: type,
                keyboardClose: true,
                translucent: true,
                position: 'bottom'
            });
            toast.present();
        });
    }
};
ViewTXNPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: _service_minima_api_service__WEBPACK_IMPORTED_MODULE_2__["MinimaApiService"] },
    { type: _service_history_service__WEBPACK_IMPORTED_MODULE_1__["HistoryService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] }
];
ViewTXNPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-view-txn',
        template: __webpack_require__(/*! raw-loader!./view-txn.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/history/view-txn/view-txn.page.html"),
        styles: [__webpack_require__(/*! ./view-txn.page.scss */ "./src/app/pages/history/view-txn/view-txn.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
        _service_minima_api_service__WEBPACK_IMPORTED_MODULE_2__["MinimaApiService"],
        _service_history_service__WEBPACK_IMPORTED_MODULE_1__["HistoryService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]])
], ViewTXNPage);



/***/ })

}]);
//# sourceMappingURL=default~pages-history-view-txn-view-txn-module~view-txn-view-txn-module-es2015.js.map