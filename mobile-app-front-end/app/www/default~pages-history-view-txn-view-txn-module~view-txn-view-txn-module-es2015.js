(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-history-view-txn-view-txn-module~view-txn-view-txn-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/history/view-txn/view-txn.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/history/view-txn/view-txn.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <!-- <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/history\"></ion-back-button>\n    </ion-buttons> -->\n    <ion-title>\n      <ion-item id=\"title\" lines=\"none\" class=\"no-ripple ion-no-padding\">\n        <ion-icon routerLink=\"/history\" class=\"back-btn\" name=\"arrow-back\"></ion-icon>\n        History\n      </ion-item>\n      <ion-item id=\"subtitle\" class=\"breadcrumb ion-no-padding\" lines=\"none\">\n        Transaction Details\n      </ion-item>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n\n<ion-content>\n  <ion-grid style=\"margin-left: 8px; margin-right:6px\">    \n    <ion-list id=\"transaction-details\">\n      <ion-item lines=\"none\" class=\"ion-no-padding\">\n        <ion-label class=\"value completed\">\n          <h6 class=\"title\">Status</h6>\n          <p>Completed</p>\n        </ion-label>\n      </ion-item>\n\n      <ion-item lines=\"none\" class=\"ion-no-padding\">\n        <ion-label>\n          <h6 class=\"title\">Hash\n            <a class=\"copy\" (click)=\"copyToClipPWA(id)\">\n              Copy \n            </a>\n          </h6>\n          <p class=\"value wrap\"> {{ id }}</p>\n        </ion-label>\n      </ion-item>\n\n      <ion-item lines=\"none\" class=\"ion-no-padding\">\n        <ion-label>\n          <h6 class=\"title\">Size</h6>\n          <p class=\"value\"> {{ size }}</p>\n        </ion-label>\n      </ion-item>\n\n      <ion-item lines=\"none\" class=\"ion-no-padding\">\n        <ion-label>\n          <h6 class=\"title\">Date & Time</h6>\n          <p class=\"value\"> {{ relaytime }}</p>\n        </ion-label>\n      </ion-item>\n\n      <ion-item lines=\"none\" class=\"ion-no-padding\">\n        <ion-label>\n          <h6 *ngIf=\"isinblock === true\" class=\"title\">Missed Block</h6>\n          <h6 *ngIf=\"isinblock === false\" class=\"title\">In Block</h6>\n          <p class=\"value\">{{blocknumber}}</p>\n        </ion-label>\n      </ion-item>\n\n      <ion-item lines=\"none\" class=\"ion-no-padding\">\n        <ion-label>\n          <h6 class=\"title\">Nonce</h6>\n          <p class=\"value\">{{nonce}}</p>\n        </ion-label>\n      </ion-item>\n\n      <ion-item lines=\"none\" *ngIf=\"type === 'Token Creation.'\" class=\"ion-no-padding\">\n        <ion-label>\n          <h6 class=\"title\">Token Name</h6>\n          <p class=\"value\">{{ tokenname }}</p>\n        </ion-label>\n      </ion-item>\n\n      <ion-item lines=\"none\" *ngIf=\"type === 'Token Creation.'\" class=\"ion-no-padding\">\n        <ion-label>\n          <h6 class=\"title\">Token Total</h6>\n          <p class=\"value\">{{ tokentotal }}</p>\n        </ion-label>\n      </ion-item>\n\n      <ion-item id=\"last-child\" lines=\"none\" class=\"ion-no-padding\">\n        <ion-label>\n          <h6 class=\"title\">Transaction Type</h6>\n          <p class=\"value\">{{type}}</p>\n        </ion-label>\n      </ion-item>    \n    </ion-list>\n\n    <ion-list id=\"input-details\">\n      <ion-list-header>\n        <ion-item lines=\"none\" class=\"ion-no-padding\">\n          Inputs\n        </ion-item>\n      </ion-list-header>\n\n      <ng-container *ngFor=\"let input of inputs; let i = index\">\n        <div id=\"inputs\">\n        <ion-item lines=\"none\" class=\"ion-no-padding\">\n          <ion-label>\n            <h6 class=\"title\">Index</h6>\n            <p class=\"value\">{{ '#'+ i}}</p>\n          </ion-label>\n        </ion-item>\n        <ion-item lines=\"none\" class=\"ion-no-padding\">\n          <ion-label>\n            <h6 class=\"title\">Coin ID</h6>\n            <p class=\"value\">{{ input.coinid }}</p>\n          </ion-label>\n        </ion-item>\n        <ion-item lines=\"none\" class=\"ion-no-padding\">\n          <ion-label>\n            <h6 class=\"title\">Address\n              <a class=\"copy\" (click)=\"copyToClipPWA(input.address)\">\n                Copy\n              </a>\n            </h6>\n            <p class=\"value\">{{ input.address }}</p>\n          </ion-label>\n        </ion-item>\n        <ion-item lines=\"full\" class=\"ion-no-padding\">\n          <ion-label>\n            <h6 class=\"title\">Amount</h6>\n            <p class=\"value\">{{ input.amount }}</p>\n          </ion-label>\n        </ion-item>\n      </div>\n      </ng-container>\n    </ion-list>\n\n    <ion-list id=\"output-details\">\n      <ion-list-header class=\"ion-no-padding\">\n        <ion-item lines=\"none\" class=\"ion-no-padding\">\n          Outputs\n        </ion-item>\n      </ion-list-header>\n\n      <ng-container *ngFor=\"let output of outputs; let i = index\">\n        <div id=\"outputs\">\n        <ion-item lines=\"none\" class=\"ion-no-padding\">\n          <ion-label>\n            <h6 class=\"title\">Index</h6>\n            <p class=\"value\">{{ '#'+ i}}</p>\n          </ion-label>\n        </ion-item>\n        <ion-item lines=\"none\" class=\"ion-no-padding\">\n          <ion-label>\n            <h6 class=\"title\">Coin ID</h6>\n            <p class=\"value\">{{ output.coinid }}</p>\n          </ion-label>\n        </ion-item>\n        <ion-item lines=\"none\" class=\"ion-no-padding\">\n          <ion-label>\n            <h6 class=\"title\">Address\n              <a class=\"copy\" (click)=\"copyToClipPWA(output.address)\">\n                Copy\n              </a>\n            </h6>\n            <p class=\"value\">{{ output.address }}</p>\n          </ion-label>\n        </ion-item>\n        <ion-item lines=\"full\" class=\"ion-no-padding\">\n          <ion-label>\n            <h6 class=\"title\">Amount</h6>\n            <p class=\"value\">{{ output.amount }}</p>\n          </ion-label>\n        </ion-item>\n      </div>\n      </ng-container>\n    </ion-list>\n\n  </ion-grid>\n</ion-content>\n\n<ion-footer class=\"border-t\">\n  <ion-button (click)=\"giveMe50()\" class=\"gimme50 no-ripple\" fill=\"none\">\n    Gimme 50\n  </ion-button>\n</ion-footer>\n"

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

module.exports = "ion-list#input-details, ion-list#output-details {\n  margin: 0;\n  padding: 0;\n}\n\ndiv#inputs, div#outputs {\n  margin-left: 11px;\n  margin-right: 18px;\n}\n\ndiv#inputs ion-item, div#outputs ion-item {\n  border-bottom: 1px solid var(--ion-color-item-border);\n}\n\nion-list#input-details ion-item:nth-child(0), ion-list#output-details ion-item:nth-child(0) {\n  margin-left: 0 !important;\n}\n\nion-list#input-details ion-list-header, ion-list#output-details ion-list-header {\n  font-size: 16px;\n  padding-left: 0;\n}\n\nion-list#input-details ion-list-header ion-item, ion-list#output-details ion-list-header ion-item {\n  margin-left: 11px;\n  width: 100%;\n  margin-right: 17px !important;\n  border-bottom: 1px solid var(--ion-color-item-border);\n}\n\nion-list#transaction-details {\n  margin: 0;\n  padding: 0;\n}\n\nion-list#transaction-details ion-item:first-child ion-label {\n  margin-top: 3px !important;\n}\n\nion-list#transaction-details ion-item ion-label {\n  margin-top: 0px;\n  margin-bottom: 6px;\n}\n\nion-list#transaction-details ion-item {\n  border-bottom: 1px solid var(--ion-color-item-border);\n  margin-left: 10px;\n  margin-right: 17px;\n}\n\nion-item#last-child {\n  --border-color: #001C32 !important;\n  --border-width: 0 0 1px 0;\n}\n\n.copy {\n  text-decoration: underline;\n  cursor: pointer;\n  font-size: 0.8rem;\n}\n\nion-list-header ion-label h6 {\n  font-size: 16px;\n  font-family: manrope-bold;\n}\n\nion-list-header ion-label p {\n  font-size: 16px;\n  font-family: manrope-medium;\n}\n\n.title {\n  font-family: manrope-bold;\n  font-size: 1rem;\n  text-overflow: ellipsis;\n  max-width: inherit;\n  white-space: normal;\n  word-wrap: normal;\n  color: var(--ion-color-color);\n}\n\n.value {\n  font-family: manrope-regular;\n  text-align: left;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  max-width: inherit;\n  overflow: hidden;\n  color: var(--ion-color-color);\n  opacity: 0.7;\n}\n\n.wrap {\n  white-space: normal !important;\n  text-overflow: clip !important;\n  overflow: auto !important;\n}\n\n.relay {\n  display: inline-block;\n  width: 100%;\n}\n\n.chevron {\n  width: 15px;\n}\n\n.completed p {\n  font-size: 16px;\n  color: rgba(75, 222, 131, 0.7);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGlhc25lbXIvcHJvamVjdHMvV2FsbGV0L21vYmlsZS1hcHAtZnJvbnQtZW5kL2FwcC9zcmMvYXBwL3BhZ2VzL2hpc3Rvcnkvdmlldy10eG4vdmlldy10eG4ucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9oaXN0b3J5L3ZpZXctdHhuL3ZpZXctdHhuLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFNBQUE7RUFDQSxVQUFBO0FDQ0o7O0FEQ0E7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0FDRUo7O0FEQUE7RUFDSSxxREFBQTtBQ0dKOztBRERBO0VBQ0kseUJBQUE7QUNJSjs7QURGQTtFQUNJLGVBQUE7RUFDQSxlQUFBO0FDS0o7O0FESkk7RUFDSSxpQkFBQTtFQUNBLFdBQUE7RUFDQSw2QkFBQTtFQUNBLHFEQUFBO0FDTVI7O0FESEE7RUFDSSxTQUFBO0VBQ0EsVUFBQTtBQ01KOztBREpBO0VBQ0ksMEJBQUE7QUNPSjs7QURMQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtBQ1FKOztBRE5BO0VBQ0kscURBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDU0o7O0FEUEE7RUFDSSxrQ0FBQTtFQUNBLHlCQUFBO0FDVUo7O0FEUkE7RUFDSSwwQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ1dKOztBRFRBO0VBQ0ksZUFBQTtFQUNBLHlCQUFBO0FDWUo7O0FEVkE7RUFDSSxlQUFBO0VBQ0EsMkJBQUE7QUNhSjs7QURYQTtFQUNJLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsNkJBQUE7QUNjSjs7QURaQTtFQUNJLDRCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtBQ2VKOztBRGJBO0VBQ0ksOEJBQUE7RUFDQSw4QkFBQTtFQUNBLHlCQUFBO0FDZ0JKOztBRGRBO0VBQ0kscUJBQUE7RUFDQSxXQUFBO0FDaUJKOztBRGZBO0VBQ0ksV0FBQTtBQ2tCSjs7QURoQkE7RUFDSSxlQUFBO0VBQ0EsOEJBQUE7QUNtQkoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9oaXN0b3J5L3ZpZXctdHhuL3ZpZXctdHhuLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1saXN0I2lucHV0LWRldGFpbHMsIGlvbi1saXN0I291dHB1dC1kZXRhaWxzIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbn1cbmRpdiNpbnB1dHMsIGRpdiNvdXRwdXRzIHtcbiAgICBtYXJnaW4tbGVmdDogMTFweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDE4cHg7XG59XG5kaXYjaW5wdXRzIGlvbi1pdGVtLCBkaXYjb3V0cHV0cyBpb24taXRlbSB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1pdGVtLWJvcmRlcik7XG59XG5pb24tbGlzdCNpbnB1dC1kZXRhaWxzIGlvbi1pdGVtOm50aC1jaGlsZCgwKSwgaW9uLWxpc3Qjb3V0cHV0LWRldGFpbHMgaW9uLWl0ZW06bnRoLWNoaWxkKDApIHtcbiAgICBtYXJnaW4tbGVmdDogMCFpbXBvcnRhbnQ7XG59XG5pb24tbGlzdCNpbnB1dC1kZXRhaWxzIGlvbi1saXN0LWhlYWRlciwgaW9uLWxpc3Qjb3V0cHV0LWRldGFpbHMgaW9uLWxpc3QtaGVhZGVyIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgIGlvbi1pdGVtIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDExcHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDE3cHghaW1wb3J0YW50O1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWl0ZW0tYm9yZGVyKTtcbiAgICB9XG59XG5pb24tbGlzdCN0cmFuc2FjdGlvbi1kZXRhaWxzIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbn1cbmlvbi1saXN0I3RyYW5zYWN0aW9uLWRldGFpbHMgaW9uLWl0ZW06Zmlyc3QtY2hpbGQgaW9uLWxhYmVsIHtcbiAgICBtYXJnaW4tdG9wOiAzcHggIWltcG9ydGFudDtcbn1cbmlvbi1saXN0I3RyYW5zYWN0aW9uLWRldGFpbHMgaW9uLWl0ZW0gaW9uLWxhYmVsIHtcbiAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNnB4O1xufVxuaW9uLWxpc3QjdHJhbnNhY3Rpb24tZGV0YWlscyBpb24taXRlbSB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1pdGVtLWJvcmRlcik7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxN3B4O1xufVxuaW9uLWl0ZW0jbGFzdC1jaGlsZCB7XG4gICAgLS1ib3JkZXItY29sb3I6ICMwMDFDMzIgIWltcG9ydGFudDtcbiAgICAtLWJvcmRlci13aWR0aDogMCAwIDFweCAwO1xufVxuLmNvcHkge1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmb250LXNpemU6IDAuOHJlbTtcbn1cbmlvbi1saXN0LWhlYWRlciBpb24tbGFiZWwgaDYge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LWZhbWlseTogbWFucm9wZS1ib2xkO1xufVxuaW9uLWxpc3QtaGVhZGVyIGlvbi1sYWJlbCBwIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC1mYW1pbHk6IG1hbnJvcGUtbWVkaXVtO1xufVxuLnRpdGxlIHtcbiAgICBmb250LWZhbWlseTogbWFucm9wZS1ib2xkO1xuICAgIGZvbnQtc2l6ZTogMS4wcmVtO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIG1heC13aWR0aDogaW5oZXJpdDtcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICAgIHdvcmQtd3JhcDogbm9ybWFsO1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItY29sb3IpO1xufVxuLnZhbHVlIHtcbiAgICBmb250LWZhbWlseTogbWFucm9wZS1yZWd1bGFyO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICBtYXgtd2lkdGg6IGluaGVyaXQ7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWNvbG9yKTtcbiAgICBvcGFjaXR5OiAwLjdcbn1cbi53cmFwIHtcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsICFpbXBvcnRhbnQ7XG4gICAgdGV4dC1vdmVyZmxvdzogY2xpcCAhaW1wb3J0YW50O1xuICAgIG92ZXJmbG93OiBhdXRvICFpbXBvcnRhbnQ7XG59XG4ucmVsYXkge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbn1cbi5jaGV2cm9uIHtcbiAgICB3aWR0aDogMTVweDtcbn1cbi5jb21wbGV0ZWQgcCB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGNvbG9yOiByZ2JhKDc1LDIyMiwxMzEsIDAuNyk7XG59XG5cbiIsImlvbi1saXN0I2lucHV0LWRldGFpbHMsIGlvbi1saXN0I291dHB1dC1kZXRhaWxzIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG5kaXYjaW5wdXRzLCBkaXYjb3V0cHV0cyB7XG4gIG1hcmdpbi1sZWZ0OiAxMXB4O1xuICBtYXJnaW4tcmlnaHQ6IDE4cHg7XG59XG5cbmRpdiNpbnB1dHMgaW9uLWl0ZW0sIGRpdiNvdXRwdXRzIGlvbi1pdGVtIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1pdGVtLWJvcmRlcik7XG59XG5cbmlvbi1saXN0I2lucHV0LWRldGFpbHMgaW9uLWl0ZW06bnRoLWNoaWxkKDApLCBpb24tbGlzdCNvdXRwdXQtZGV0YWlscyBpb24taXRlbTpudGgtY2hpbGQoMCkge1xuICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xufVxuXG5pb24tbGlzdCNpbnB1dC1kZXRhaWxzIGlvbi1saXN0LWhlYWRlciwgaW9uLWxpc3Qjb3V0cHV0LWRldGFpbHMgaW9uLWxpc3QtaGVhZGVyIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBwYWRkaW5nLWxlZnQ6IDA7XG59XG5pb24tbGlzdCNpbnB1dC1kZXRhaWxzIGlvbi1saXN0LWhlYWRlciBpb24taXRlbSwgaW9uLWxpc3Qjb3V0cHV0LWRldGFpbHMgaW9uLWxpc3QtaGVhZGVyIGlvbi1pdGVtIHtcbiAgbWFyZ2luLWxlZnQ6IDExcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tcmlnaHQ6IDE3cHggIWltcG9ydGFudDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1pdGVtLWJvcmRlcik7XG59XG5cbmlvbi1saXN0I3RyYW5zYWN0aW9uLWRldGFpbHMge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbmlvbi1saXN0I3RyYW5zYWN0aW9uLWRldGFpbHMgaW9uLWl0ZW06Zmlyc3QtY2hpbGQgaW9uLWxhYmVsIHtcbiAgbWFyZ2luLXRvcDogM3B4ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1saXN0I3RyYW5zYWN0aW9uLWRldGFpbHMgaW9uLWl0ZW0gaW9uLWxhYmVsIHtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBtYXJnaW4tYm90dG9tOiA2cHg7XG59XG5cbmlvbi1saXN0I3RyYW5zYWN0aW9uLWRldGFpbHMgaW9uLWl0ZW0ge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWl0ZW0tYm9yZGVyKTtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIG1hcmdpbi1yaWdodDogMTdweDtcbn1cblxuaW9uLWl0ZW0jbGFzdC1jaGlsZCB7XG4gIC0tYm9yZGVyLWNvbG9yOiAjMDAxQzMyICFpbXBvcnRhbnQ7XG4gIC0tYm9yZGVyLXdpZHRoOiAwIDAgMXB4IDA7XG59XG5cbi5jb3B5IHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAwLjhyZW07XG59XG5cbmlvbi1saXN0LWhlYWRlciBpb24tbGFiZWwgaDYge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtZmFtaWx5OiBtYW5yb3BlLWJvbGQ7XG59XG5cbmlvbi1saXN0LWhlYWRlciBpb24tbGFiZWwgcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC1mYW1pbHk6IG1hbnJvcGUtbWVkaXVtO1xufVxuXG4udGl0bGUge1xuICBmb250LWZhbWlseTogbWFucm9wZS1ib2xkO1xuICBmb250LXNpemU6IDFyZW07XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBtYXgtd2lkdGg6IGluaGVyaXQ7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gIHdvcmQtd3JhcDogbm9ybWFsO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWNvbG9yKTtcbn1cblxuLnZhbHVlIHtcbiAgZm9udC1mYW1pbHk6IG1hbnJvcGUtcmVndWxhcjtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIG1heC13aWR0aDogaW5oZXJpdDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1jb2xvcik7XG4gIG9wYWNpdHk6IDAuNztcbn1cblxuLndyYXAge1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsICFpbXBvcnRhbnQ7XG4gIHRleHQtb3ZlcmZsb3c6IGNsaXAgIWltcG9ydGFudDtcbiAgb3ZlcmZsb3c6IGF1dG8gIWltcG9ydGFudDtcbn1cblxuLnJlbGF5IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNoZXZyb24ge1xuICB3aWR0aDogMTVweDtcbn1cblxuLmNvbXBsZXRlZCBwIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogcmdiYSg3NSwgMjIyLCAxMzEsIDAuNyk7XG59Il19 */"

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
/* harmony import */ var _service_minima_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../service/minima-api.service */ "./src/app/service/minima-api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var minima__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! minima */ "./node_modules/minima/dist/minima.js");
/* harmony import */ var minima__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(minima__WEBPACK_IMPORTED_MODULE_5__);






var moment = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
let ViewTXNPage = class ViewTXNPage {
    constructor(route, toastController, api, alertController) {
        this.route = route;
        this.toastController = toastController;
        this.api = api;
        this.alertController = alertController;
        this.hide = false;
        this.txn = this.route.snapshot.paramMap.get('id');
    }
    ngOnInit() {
        minima__WEBPACK_IMPORTED_MODULE_5__["Minima"].cmd('txpowinfo ' + this.txn, (res) => {
            if (res.status) {
                this.id = res.response.txpow.txpowid;
                this.relaytime = new Date(res.response.txpow.header.timesecs * 1000).toISOString();
                this.relaytime = moment(this.relaytime).format('DD/MM/YYYY - hh:mm:ss', true);
                this.size = res.response.txpow.size;
                this.isblock = res.response.txpow.isblock;
                this.isinblock = res.response.isinblock;
                this.blocknumber = res.response.inblock;
                this.nonce = res.response.txpow.header.nonce;
                this.inputs = res.response.txpow.body.txn.inputs;
                this.outputs = res.response.txpow.body.txn.outputs;
                if (res.response.txpow.body.txn.tokengen) {
                    this.type = 'Token Creation.';
                    this.tokenname = res.response.txpow.body.txn.tokengen.token;
                    this.tokentotal = res.response.txpow.body.txn.tokengen.total;
                }
                else {
                    this.type = 'Value Transfer.';
                }
            }
            else {
                console.log(res.message);
            }
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
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
    { type: _service_minima_api_service__WEBPACK_IMPORTED_MODULE_1__["MinimaApiService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] }
];
ViewTXNPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-view-txn',
        template: __webpack_require__(/*! raw-loader!./view-txn.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/history/view-txn/view-txn.page.html"),
        styles: [__webpack_require__(/*! ./view-txn.page.scss */ "./src/app/pages/history/view-txn/view-txn.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"], _service_minima_api_service__WEBPACK_IMPORTED_MODULE_1__["MinimaApiService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]])
], ViewTXNPage);



/***/ })

}]);
//# sourceMappingURL=default~pages-history-view-txn-view-txn-module~view-txn-view-txn-module-es2015.js.map