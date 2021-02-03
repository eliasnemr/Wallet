(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-history-view-txn-view-txn-module~view-txn-view-txn-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/history/view-txn/view-txn.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/history/view-txn/view-txn.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <!-- <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/history\"></ion-back-button>\n    </ion-buttons> -->\n    <ion-title>\n      <ion-item routerLink=\"/history\" lines=\"none\" class=\"no-ripple ion-no-padding\">\n      History\n      </ion-item>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-item class=\"breadcrumb ion-no-padding\" lines=\"none\">\n  Transaction Details\n</ion-item>\n\n<ion-content>\n  <ion-grid style=\"margin-left: 8px; margin-right:6px\">    \n    <ion-list id=\"transaction-details\">\n      <ion-item lines=\"none\" class=\"ion-no-padding\">\n        <ion-label class=\"value completed\">\n          <h6 class=\"title\">Status</h6>\n          <p>Completed</p>\n        </ion-label>\n      </ion-item>\n\n      <ion-item lines=\"none\" class=\"ion-no-padding\">\n        <ion-label>\n          <h6 class=\"title\">Hash\n            <a class=\"copy\" (click)=\"copyToClipPWA(id)\">\n              Copy \n            </a>\n          </h6>\n          <p class=\"value wrap\"> {{ id }}</p>\n        </ion-label>\n      </ion-item>\n\n      <ion-item lines=\"none\" class=\"ion-no-padding\">\n        <ion-label>\n          <h6 class=\"title\">Size</h6>\n          <p class=\"value\"> {{ size }}</p>\n        </ion-label>\n      </ion-item>\n\n      <ion-item lines=\"none\" class=\"ion-no-padding\">\n        <ion-label>\n          <h6 class=\"title\">Date & Time</h6>\n          <p class=\"value\"> {{ relaytime }}</p>\n        </ion-label>\n      </ion-item>\n\n      <ion-item lines=\"none\" class=\"ion-no-padding\">\n        <ion-label>\n          <h6 *ngIf=\"isinblock === true\" class=\"title\">Missed Block</h6>\n          <h6 *ngIf=\"isinblock === false\" class=\"title\">In Block</h6>\n          <p>{{blocknumber}}</p>\n        </ion-label>\n      </ion-item>\n\n      <ion-item lines=\"none\" class=\"ion-no-padding\">\n        <ion-label>\n          <h6 class=\"title\">Nonce</h6>\n          <p class=\"value\">{{nonce}}</p>\n        </ion-label>\n      </ion-item>\n\n      <ion-item lines=\"none\" *ngIf=\"type === 'Token Creation.'\" class=\"ion-no-padding\">\n        <ion-label>\n          <h6 class=\"title\">Token Name</h6>\n          <p class=\"value\">{{ tokenname }}</p>\n        </ion-label>\n      </ion-item>\n\n      <ion-item lines=\"none\" *ngIf=\"type === 'Token Creation.'\" class=\"ion-no-padding\">\n        <ion-label>\n          <h6 class=\"title\">Token Total</h6>\n          <p class=\"value\">{{ tokentotal }}</p>\n        </ion-label>\n      </ion-item>\n\n      <ion-item id=\"last-child\" lines=\"none\" class=\"ion-no-padding\">\n        <ion-label>\n          <h6 class=\"title\">Transaction Type</h6>\n          <p class=\"value\">{{type}}</p>\n        </ion-label>\n      </ion-item>    \n    </ion-list>\n\n    <ion-list id=\"input-details\">\n      <ion-list-header>\n        <ion-item lines=\"none\" class=\"ion-no-padding\">\n          Inputs\n        </ion-item>\n      </ion-list-header>\n\n      <ng-container *ngFor=\"let input of inputs; let i = index\">\n        <div id=\"inputs\">\n        <ion-item lines=\"none\" class=\"ion-no-padding\">\n          <ion-label>\n            <h6>Index</h6>\n            <p>{{ '#'+ i}}</p>\n          </ion-label>\n        </ion-item>\n        <ion-item lines=\"none\" class=\"ion-no-padding\">\n          <ion-label>\n            <h6>Coin ID</h6>\n            <p>{{ input.coinid }}</p>\n          </ion-label>\n        </ion-item>\n        <ion-item lines=\"none\" class=\"ion-no-padding\">\n          <ion-label>\n            <h6>Address\n              <a class=\"copy\" (click)=\"copyToClipPWA(input.address)\">\n                Copy\n              </a>\n            </h6>\n            <p>{{ input.address }}</p>\n          </ion-label>\n        </ion-item>\n        <ion-item lines=\"full\" class=\"ion-no-padding\">\n          <ion-label>\n            <h6>Amount</h6>\n            <p>{{ input.amount }}</p>\n          </ion-label>\n        </ion-item>\n      </div>\n      </ng-container>\n    </ion-list>\n\n    <ion-list id=\"output-details\">\n      <ion-list-header>\n        <ion-item lines=\"none\" class=\"ion-no-padding\">\n          Outputs\n        </ion-item>\n      </ion-list-header>\n\n      <ng-container *ngFor=\"let output of outputs; let i = index\">\n        <div id=\"outputs\">\n        <ion-item lines=\"none\" class=\"ion-no-padding\">\n          <ion-label>\n            <h6>Index</h6>\n            <p>{{ '#'+ i}}</p>\n          </ion-label>\n        </ion-item>\n        <ion-item lines=\"none\" class=\"ion-no-padding\">\n          <ion-label>\n            <h6>Coin ID</h6>\n            <p>{{ output.coinid }}</p>\n          </ion-label>\n        </ion-item>\n        <ion-item lines=\"none\" class=\"ion-no-padding\">\n          <ion-label>\n            <h6>Address\n              <a class=\"copy\" (click)=\"copyToClipPWA(output.address)\">\n                Copy\n              </a>\n            </h6>\n            <p>{{ output.address }}</p>\n          </ion-label>\n        </ion-item>\n        <ion-item lines=\"full\" class=\"ion-no-padding\">\n          <ion-label>\n            <h6>Amount</h6>\n            <p>{{ output.amount }}</p>\n          </ion-label>\n        </ion-item>\n      </div>\n      </ng-container>\n    </ion-list>\n\n  </ion-grid>\n</ion-content>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _view_txn_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view-txn.page */ "./src/app/pages/history/view-txn/view-txn.page.ts");







var routes = [
    {
        path: '',
        component: _view_txn_page__WEBPACK_IMPORTED_MODULE_6__["ViewTXNPage"]
    }
];
var ViewTXNPageModule = /** @class */ (function () {
    function ViewTXNPageModule() {
    }
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
    return ViewTXNPageModule;
}());



/***/ }),

/***/ "./src/app/pages/history/view-txn/view-txn.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/history/view-txn/view-txn.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-datetime {\n  font-family: manrope-bold;\n  padding: 0;\n  margin-left: 1%;\n}\n\nion-title ion-item {\n  margin-left: 8px;\n}\n\nion-list#input-details, ion-list#output-details {\n  margin: 0;\n  padding: 0;\n}\n\ndiv#inputs, div#outputs {\n  margin-left: 15px;\n  margin-right: 18px;\n}\n\ndiv#inputs ion-item, div#outputs ion-item {\n  border-bottom: 1px solid #f0f0fa;\n}\n\nion-list#input-details ion-item:nth-child(0), ion-list#output-details ion-item:nth-child(0) {\n  margin-left: 0 !important;\n}\n\nion-list#input-details ion-list-header, ion-list#output-details ion-list-header {\n  font-size: 16px;\n}\n\nion-list#input-details ion-list-header ion-item, ion-list#output-details ion-list-header ion-item {\n  width: 100%;\n  margin-right: 17px !important;\n  border-bottom: 1px solid #001C32;\n}\n\nion-list#transaction-details {\n  margin: 0;\n  padding: 0;\n}\n\nion-list#transaction-details ion-item:first-child ion-label {\n  margin-top: 3px !important;\n}\n\nion-list#transaction-details ion-item ion-label {\n  margin-top: 0px;\n  margin-bottom: 6px;\n}\n\nion-list#transaction-details ion-item {\n  border-bottom: 1px solid #f0f0fa;\n  margin-left: 15px;\n  margin-right: 17px;\n}\n\nion-item#last-child {\n  --border-color: #001C32 !important;\n  --border-width: 0 0 1px 0;\n}\n\n.copy {\n  text-decoration: underline;\n  cursor: pointer;\n  font-size: 0.8rem;\n}\n\nion-list-header ion-label h6 {\n  font-size: 16px;\n  font-family: manrope-bold;\n}\n\nion-list-header ion-label p {\n  font-size: 16px;\n  font-family: manrope-medium;\n}\n\n.title {\n  font-family: manrope-bold;\n  font-size: 1rem;\n  text-overflow: ellipsis;\n  max-width: inherit;\n  white-space: normal;\n  word-wrap: normal;\n}\n\n.value {\n  font-family: manrope-regular;\n  text-align: left;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  max-width: inherit;\n  overflow: hidden;\n}\n\n.wrap {\n  white-space: normal !important;\n  text-overflow: clip !important;\n  overflow: auto !important;\n}\n\n.relay {\n  display: inline-block;\n  width: 100%;\n}\n\n.chevron {\n  width: 15px;\n}\n\n.completed p {\n  font-size: 16px;\n  color: rgba(75, 222, 131, 0.7);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGlhc25lbXIvcHJvamVjdHMvV2FsbGV0L21vYmlsZS1hcHAtZnJvbnQtZW5kL2FwcC9zcmMvYXBwL3BhZ2VzL2hpc3Rvcnkvdmlldy10eG4vdmlldy10eG4ucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9oaXN0b3J5L3ZpZXctdHhuL3ZpZXctdHhuLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUNDSjs7QURDQTtFQUNJLGdCQUFBO0FDRUo7O0FEQUE7RUFDSSxTQUFBO0VBQ0EsVUFBQTtBQ0dKOztBRERBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtBQ0lKOztBREZBO0VBQ0ksZ0NBQUE7QUNLSjs7QURIQTtFQUNJLHlCQUFBO0FDTUo7O0FESkE7RUFDSSxlQUFBO0FDT0o7O0FETEk7RUFDSSxXQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQ0FBQTtBQ09SOztBREpBO0VBQ0ksU0FBQTtFQUNBLFVBQUE7QUNPSjs7QURMQTtFQUNJLDBCQUFBO0FDUUo7O0FETkE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7QUNTSjs7QURQQTtFQUNJLGdDQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ1VKOztBRFJBO0VBQ0ksa0NBQUE7RUFDQSx5QkFBQTtBQ1dKOztBRFRBO0VBQ0ksMEJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNZSjs7QURWQTtFQUNJLGVBQUE7RUFDQSx5QkFBQTtBQ2FKOztBRFhBO0VBQ0ksZUFBQTtFQUNBLDJCQUFBO0FDY0o7O0FEWkE7RUFDSSx5QkFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQ2VKOztBRGJBO0VBQ0ksNEJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDZ0JKOztBRGRBO0VBQ0ksOEJBQUE7RUFDQSw4QkFBQTtFQUNBLHlCQUFBO0FDaUJKOztBRGZBO0VBQ0kscUJBQUE7RUFDQSxXQUFBO0FDa0JKOztBRGhCQTtFQUNJLFdBQUE7QUNtQko7O0FEakJBO0VBQ0ksZUFBQTtFQUNBLDhCQUFBO0FDb0JKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaGlzdG9yeS92aWV3LXR4bi92aWV3LXR4bi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tZGF0ZXRpbWUge1xuICAgIGZvbnQtZmFtaWx5OiBtYW5yb3BlLWJvbGQ7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW4tbGVmdDogMSU7XG59XG5pb24tdGl0bGUgaW9uLWl0ZW0ge1xuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XG59XG5pb24tbGlzdCNpbnB1dC1kZXRhaWxzLCBpb24tbGlzdCNvdXRwdXQtZGV0YWlscyB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG59XG5kaXYjaW5wdXRzLCBkaXYjb3V0cHV0cyB7XG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxOHB4O1xufVxuZGl2I2lucHV0cyBpb24taXRlbSwgZGl2I291dHB1dHMgaW9uLWl0ZW0ge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjBmMGZhO1xufVxuaW9uLWxpc3QjaW5wdXQtZGV0YWlscyBpb24taXRlbTpudGgtY2hpbGQoMCksIGlvbi1saXN0I291dHB1dC1kZXRhaWxzIGlvbi1pdGVtOm50aC1jaGlsZCgwKSB7XG4gICAgbWFyZ2luLWxlZnQ6IDAhaW1wb3J0YW50O1xufVxuaW9uLWxpc3QjaW5wdXQtZGV0YWlscyBpb24tbGlzdC1oZWFkZXIsIGlvbi1saXN0I291dHB1dC1kZXRhaWxzIGlvbi1saXN0LWhlYWRlciB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuXG4gICAgaW9uLWl0ZW0ge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxN3B4IWltcG9ydGFudDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMDFDMzI7XG4gICAgfVxufVxuaW9uLWxpc3QjdHJhbnNhY3Rpb24tZGV0YWlscyB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG59XG5pb24tbGlzdCN0cmFuc2FjdGlvbi1kZXRhaWxzIGlvbi1pdGVtOmZpcnN0LWNoaWxkIGlvbi1sYWJlbCB7XG4gICAgbWFyZ2luLXRvcDogM3B4ICFpbXBvcnRhbnQ7XG59XG5pb24tbGlzdCN0cmFuc2FjdGlvbi1kZXRhaWxzIGlvbi1pdGVtIGlvbi1sYWJlbCB7XG4gICAgbWFyZ2luLXRvcDogMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDZweDtcbn1cbmlvbi1saXN0I3RyYW5zYWN0aW9uLWRldGFpbHMgaW9uLWl0ZW0ge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjBmMGZhO1xuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgIG1hcmdpbi1yaWdodDogMTdweDtcbn1cbmlvbi1pdGVtI2xhc3QtY2hpbGQge1xuICAgIC0tYm9yZGVyLWNvbG9yOiAjMDAxQzMyICFpbXBvcnRhbnQ7XG4gICAgLS1ib3JkZXItd2lkdGg6IDAgMCAxcHggMDtcbn1cbi5jb3B5IHtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZm9udC1zaXplOiAwLjhyZW07XG59XG5pb24tbGlzdC1oZWFkZXIgaW9uLWxhYmVsIGg2IHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC1mYW1pbHk6IG1hbnJvcGUtYm9sZDtcbn1cbmlvbi1saXN0LWhlYWRlciBpb24tbGFiZWwgcCB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtZmFtaWx5OiBtYW5yb3BlLW1lZGl1bTtcbn1cbi50aXRsZSB7XG4gICAgZm9udC1mYW1pbHk6IG1hbnJvcGUtYm9sZDtcbiAgICBmb250LXNpemU6IDEuMHJlbTtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICBtYXgtd2lkdGg6IGluaGVyaXQ7XG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgICB3b3JkLXdyYXA6IG5vcm1hbDtcbn1cbi52YWx1ZSB7XG4gICAgZm9udC1mYW1pbHk6IG1hbnJvcGUtcmVndWxhcjtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgbWF4LXdpZHRoOiBpbmhlcml0O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG4ud3JhcCB7XG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbCAhaW1wb3J0YW50O1xuICAgIHRleHQtb3ZlcmZsb3c6IGNsaXAgIWltcG9ydGFudDtcbiAgICBvdmVyZmxvdzogYXV0byAhaW1wb3J0YW50O1xufVxuLnJlbGF5IHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4uY2hldnJvbiB7XG4gICAgd2lkdGg6IDE1cHg7XG59XG4uY29tcGxldGVkIHAge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBjb2xvcjogcmdiYSg3NSwyMjIsMTMxLCAwLjcpO1xufVxuXG4iLCJpb24tZGF0ZXRpbWUge1xuICBmb250LWZhbWlseTogbWFucm9wZS1ib2xkO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW4tbGVmdDogMSU7XG59XG5cbmlvbi10aXRsZSBpb24taXRlbSB7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG59XG5cbmlvbi1saXN0I2lucHV0LWRldGFpbHMsIGlvbi1saXN0I291dHB1dC1kZXRhaWxzIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG5kaXYjaW5wdXRzLCBkaXYjb3V0cHV0cyB7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDE4cHg7XG59XG5cbmRpdiNpbnB1dHMgaW9uLWl0ZW0sIGRpdiNvdXRwdXRzIGlvbi1pdGVtIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmMGYwZmE7XG59XG5cbmlvbi1saXN0I2lucHV0LWRldGFpbHMgaW9uLWl0ZW06bnRoLWNoaWxkKDApLCBpb24tbGlzdCNvdXRwdXQtZGV0YWlscyBpb24taXRlbTpudGgtY2hpbGQoMCkge1xuICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xufVxuXG5pb24tbGlzdCNpbnB1dC1kZXRhaWxzIGlvbi1saXN0LWhlYWRlciwgaW9uLWxpc3Qjb3V0cHV0LWRldGFpbHMgaW9uLWxpc3QtaGVhZGVyIHtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuaW9uLWxpc3QjaW5wdXQtZGV0YWlscyBpb24tbGlzdC1oZWFkZXIgaW9uLWl0ZW0sIGlvbi1saXN0I291dHB1dC1kZXRhaWxzIGlvbi1saXN0LWhlYWRlciBpb24taXRlbSB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tcmlnaHQ6IDE3cHggIWltcG9ydGFudDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMDFDMzI7XG59XG5cbmlvbi1saXN0I3RyYW5zYWN0aW9uLWRldGFpbHMge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbmlvbi1saXN0I3RyYW5zYWN0aW9uLWRldGFpbHMgaW9uLWl0ZW06Zmlyc3QtY2hpbGQgaW9uLWxhYmVsIHtcbiAgbWFyZ2luLXRvcDogM3B4ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1saXN0I3RyYW5zYWN0aW9uLWRldGFpbHMgaW9uLWl0ZW0gaW9uLWxhYmVsIHtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBtYXJnaW4tYm90dG9tOiA2cHg7XG59XG5cbmlvbi1saXN0I3RyYW5zYWN0aW9uLWRldGFpbHMgaW9uLWl0ZW0ge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YwZjBmYTtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIG1hcmdpbi1yaWdodDogMTdweDtcbn1cblxuaW9uLWl0ZW0jbGFzdC1jaGlsZCB7XG4gIC0tYm9yZGVyLWNvbG9yOiAjMDAxQzMyICFpbXBvcnRhbnQ7XG4gIC0tYm9yZGVyLXdpZHRoOiAwIDAgMXB4IDA7XG59XG5cbi5jb3B5IHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAwLjhyZW07XG59XG5cbmlvbi1saXN0LWhlYWRlciBpb24tbGFiZWwgaDYge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtZmFtaWx5OiBtYW5yb3BlLWJvbGQ7XG59XG5cbmlvbi1saXN0LWhlYWRlciBpb24tbGFiZWwgcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC1mYW1pbHk6IG1hbnJvcGUtbWVkaXVtO1xufVxuXG4udGl0bGUge1xuICBmb250LWZhbWlseTogbWFucm9wZS1ib2xkO1xuICBmb250LXNpemU6IDFyZW07XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBtYXgtd2lkdGg6IGluaGVyaXQ7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gIHdvcmQtd3JhcDogbm9ybWFsO1xufVxuXG4udmFsdWUge1xuICBmb250LWZhbWlseTogbWFucm9wZS1yZWd1bGFyO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgbWF4LXdpZHRoOiBpbmhlcml0O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ud3JhcCB7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWwgIWltcG9ydGFudDtcbiAgdGV4dC1vdmVyZmxvdzogY2xpcCAhaW1wb3J0YW50O1xuICBvdmVyZmxvdzogYXV0byAhaW1wb3J0YW50O1xufVxuXG4ucmVsYXkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY2hldnJvbiB7XG4gIHdpZHRoOiAxNXB4O1xufVxuXG4uY29tcGxldGVkIHAge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiByZ2JhKDc1LCAyMjIsIDEzMSwgMC43KTtcbn0iXX0= */"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var minima__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! minima */ "./node_modules/minima/dist/minima.js");
/* harmony import */ var minima__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(minima__WEBPACK_IMPORTED_MODULE_4__);





var moment = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
var ViewTXNPage = /** @class */ (function () {
    function ViewTXNPage(route, toastController) {
        this.route = route;
        this.toastController = toastController;
        this.hide = false;
        this.txn = this.route.snapshot.paramMap.get('id');
    }
    ViewTXNPage.prototype.ngOnInit = function () {
        var _this = this;
        minima__WEBPACK_IMPORTED_MODULE_4__["Minima"].cmd('txpowinfo ' + this.txn, function (res) {
            if (res.status) {
                _this.id = res.response.txpow.txpowid;
                _this.relaytime = new Date(res.response.txpow.header.timesecs * 1000).toISOString();
                _this.relaytime = moment(_this.relaytime).format('DD/MM/YYYY - hh:mm:ss', true);
                _this.size = res.response.txpow.size;
                _this.isblock = res.response.txpow.isblock;
                _this.isinblock = res.response.isinblock;
                _this.blocknumber = res.response.inblock;
                _this.nonce = res.response.txpow.header.nonce;
                _this.inputs = res.response.txpow.body.txn.inputs;
                _this.outputs = res.response.txpow.body.txn.outputs;
                if (res.response.txpow.body.txn.tokengen) {
                    _this.type = 'Token Creation.';
                    _this.tokenname = res.response.txpow.body.txn.tokengen.token;
                    _this.tokentotal = res.response.txpow.body.txn.tokengen.total;
                }
                else {
                    _this.type = 'Value Transfer.';
                }
            }
            else {
                console.log(res.message);
            }
        });
    };
    ViewTXNPage.prototype.shout = function () {
        if (this.hide === true) {
            this.hide = false;
        }
        else {
            this.hide = true;
        }
    };
    ViewTXNPage.prototype.copyToClipPWA = function (text) {
        var _this = this;
        document.addEventListener('copy', function (e) {
            e.clipboardData.setData('text/plain', text);
            _this.presentToast('Copied to Clipboard', 'success');
            e.preventDefault();
            document.removeEventListener('copy', null);
        });
        document.execCommand('copy');
    };
    ViewTXNPage.prototype.presentToast = function (msg, type) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
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
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    ViewTXNPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] }
    ]; };
    ViewTXNPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-view-txn',
            template: __webpack_require__(/*! raw-loader!./view-txn.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/history/view-txn/view-txn.page.html"),
            styles: [__webpack_require__(/*! ./view-txn.page.scss */ "./src/app/pages/history/view-txn/view-txn.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]])
    ], ViewTXNPage);
    return ViewTXNPage;
}());



/***/ })

}]);
//# sourceMappingURL=default~pages-history-view-txn-view-txn-module~view-txn-view-txn-module-es5.js.map