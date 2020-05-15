(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-history-history-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/history/history.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/history/history.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-app>\n  <ion-header>\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n      <ion-title color=\"primary\">Transaction History</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content>\n    <ion-card>\n      <ion-card-header>\n        Recent Activity\n        <!-- Category Segment -->\n      <ion-segment\n        *ngIf = \"transactions.length > 1\"\n        (ionChange)=\"segmentChanged($event, slides)\" \n        [(ngModel)] = \"categories\"\n        class=\"category-seg\">\n        <ion-segment-button value=\"0\" class=\"seg\">\n          <ion-label>Transactions</ion-label>\n        </ion-segment-button>\n        <ion-segment-button value=\"1\" class=\"seg\">\n          <ion-label>Tokens Created</ion-label>\n        </ion-segment-button>\n        <ion-segment-button value=\"2\" class=\"seg\">\n        <ion-label>All</ion-label>\n        </ion-segment-button>\n      </ion-segment>\n      </ion-card-header>\n\n  <ion-slides\n  #slides\n  pager=\"false\"\n  [options]=\"sliderOptions\"\n  (ionSlideDidChange)=\"slideChanged(slides)\"\n  (ionSlideDidLoad)=\"slideChanged(slides)\">\n\n    <!-- @@@@@@@@@@@@@@@@@@@@@@@@@@@ Transactions @@@@@@@@@@@@@@@@@@@@@@@@@@@ -->\n    \n    <ion-slide class=\"swiper-slide\">\n    <ion-card-content style=\"width: 100%; text-align: center;\">\n\n    <!-- Zero activities -->\n    <ion-text *ngIf=\"transactions.length < 1\" style=\"font-family: Aeonik-light;\">No activities to display.</ion-text>\n    <ion-list *ngFor=\"let transaction of transactions;\">\n    <ion-grid><ion-row>\n    <ion-item \n    *ngIf=\"transactions.length >= 1 && transaction.values[0].name !== 'Create Token';\" \n    class=\"activity\"\n    (click)=\"presentHistoryInfo($event,\n              transaction.values[0].name, \n              transaction.txpow.txn.inputs[0].address,\n              transaction.txpow.block, \n              transaction.values[0].amount, \n              transaction.txpow.isblock, \n              transaction.txpow.txpowid, \n              transaction.txpow.parent, \n              transaction.txpow.blkdiff, \n              transaction.txpow.date.substring(11,16),\n              transaction.txpow.txn.state)\">\n      <!-- Start info -->\n\n      <!-- TxPoW ID -->\n      <ion-col size=\"1\">\n      <ion-icon [name]=\"getTXNType(transaction.values[0].amount)\" size=\"large\"></ion-icon>\n      </ion-col>\n\n      <ion-col class=\"col-month\" fixed=\"true\">\n      <ion-label>\n      <p id=\"day\">\n      {{ transaction.txpow.date.substring(8, 10) }}\n      </p>\n      <h1 id=\"month\">\n      {{ transaction.txpow.date.substring(4, 7) }} \n      </h1>\n      </ion-label>\n      </ion-col>\n\n      <!-- Middle info -->\n      <ion-col class=\"col-transtype\" fixed=\"true\">\n        <ion-label id=\"transaction\">\n        <h2 class=\"h2-type\">\n        {{ checkTransType(transaction.values[0].amount) }} <span id=\"token-name\">{{ (transaction.values[0].name).substring(0,12) }}</span>\n        </h2>\n        <a *ngFor=\"let input of transaction.txpow.txn.inputs\">\n        <p *ngIf=\"input.tokenid ==='0x00'\"class=\"p-tokenid\">\n        {{ input.tokenid.substring(0, 10) }}\n        </p>\n        <p *ngIf=\"input.tokenid !=='0x00'\" class=\"p-tokenid\">\n        {{ input.tokenid.substring(0, 10) + \"...\" }}\n        </p>\n        </a>\n        </ion-label>\n      </ion-col>\n\n      <!-- end info -->\n      <ion-col class=\"col-transamnt\" fixed=\"true\">\n      <ion-label class=\"amount\">\n      <h2 class=\"amount-h2\">\n      {{ transaction.values[0].amount + \" \" }} <span style=\"text-transform: uppercase;\"> {{ (transaction.values[0].name).substring(0, 4)}} </span>\n      </h2>\n      </ion-label>\n      </ion-col>\n\n      <ion-col size=\"1\">\n      <p><ion-badge>{{transaction.txpow.txpowid.substring(8, 12)}}</ion-badge></p>\n      </ion-col>\n      </ion-item>\n\n    </ion-row></ion-grid>\n    </ion-list>\n    </ion-card-content>\n    </ion-slide>\n    <!-- @@@@@@@@@@@@@@@@@@@@@@@@@@@ Token Creation @@@@@@@@@@@@@@@@@@@@@@@@@@@ -->\n    <ion-slide class=\"swiper-slide\">\n    <ion-card-content style=\"width: 100%; text-align: center !important;\">\n    \n    <ion-text *ngIf=\"tokens.length < 1\" style=\"font-family: 'Aeonik-light';\"> No token activities to display. </ion-text>\n    \n    \n    <ion-list *ngFor=\"let transaction of transactions;\">\n    <ion-grid *ngIf=\"transactions.length >= 1 && transaction.values[0].name === 'Create Token';\" ><ion-row>\n    <ion-item \n    class=\"activity\"\n    (click)=\"presentHistoryTokenInfo($event, \n              transaction.txpow.txn.inputs[0].address,\n              transaction.txpow.block, \n              transaction.values[1].amount, \n              transaction.txpow.isblock, \n              transaction.txpow.txpowid, \n              transaction.txpow.parent, \n              transaction.txpow.blkdiff, \n              transaction.txpow.date.substring(11,16),\n              transaction.txpow.txn.state)\">\n      <!-- Start info -->\n\n      <!-- TxPoW ID -->\n      <ion-col size=\"1\">\n      <ion-badge>{{transaction.txpow.txpowid.substring(8, 12)}}</ion-badge>\n      </ion-col>\n\n      <ion-col class=\"col-month\" fixed=\"true\">\n      <ion-label>\n      <p id=\"day\">\n      {{ transaction.txpow.date.substring(8, 10) }}\n      </p>\n      <h1 id=\"month\">\n      {{ transaction.txpow.date.substring(4, 7) }} \n      </h1>\n      </ion-label>\n      </ion-col>\n\n      <!-- Middle info -->\n      <ion-col class=\"col-transtype\" fixed=\"true\">\n        <ion-label id=\"transaction\">\n        <h2 class=\"h2-type\">\n        Created a token.\n        </h2>\n        <p class=\"p-tokenid\">\n        TxPoW Id: {{ transaction.txpow.txpowid.substring(0, 10)}}\n        </p>\n        </ion-label>\n      </ion-col>\n\n      <!-- end info -->\n      <ion-col class=\"col-transamnt\" fixed=\"true\">\n      <ion-label class=\"amount\">\n      <h2 class=\"amount-h2\">\n      {{ transaction.values[1].amount.substring(0, 8) + \" \" }} MINI\n      </h2>\n      </ion-label>\n      </ion-col>\n      </ion-item>\n\n    </ion-row></ion-grid>\n    </ion-list>\n\n    </ion-card-content>\n    </ion-slide>\n\n    <!-- @@@@@@@@@@@@@@@@@@@@@@@@@ All @@@@@@@@@@@@@@@@@@@@@@@@@@@@@ -->\n    <ion-slide class=\"swiper-slide\">\n    <ion-card-content style=\"width: 100%; text-align: center;\">\n\n    <!-- Zero activities -->\n    <ion-text *ngIf=\"transactions.length < 1\" style=\"font-family: Aeonik-light;\">No activities to display.</ion-text>\n\n    <ion-list *ngFor=\"let transaction of transactions;\">\n    <ion-grid *ngIf=\"transactions.length >= 1 && transaction.values[0].name !== 'Create Token';\"><ion-row>\n    <ion-item \n    class=\"activity\"\n    (click)=\"presentHistoryInfo($event,\n              transaction.values[0].name, \n              transaction.txpow.txn.inputs[0].address,\n              transaction.txpow.block, \n              transaction.values[0].amount, \n              transaction.txpow.isblock, \n              transaction.txpow.txpowid, \n              transaction.txpow.parent, \n              transaction.txpow.blkdiff, \n              transaction.txpow.date.substring(11,16),\n               transaction.txpow.txn.state)\">\n      <!-- Start info -->\n\n      <!-- TxPoW ID -->\n      <ion-col size=\"1\">\n      <ion-badge>{{transaction.txpow.txpowid.substring(8, 12)}}</ion-badge>\n      </ion-col>\n\n      <ion-col class=\"col-month\" fixed=\"true\">\n      <ion-label>\n      <p id=\"day\">\n      {{ transaction.txpow.date.substring(8, 10) }}\n      </p>\n      <h1 id=\"month\">\n      {{ transaction.txpow.date.substring(4, 7) }} \n      </h1>\n      </ion-label>\n      </ion-col>\n\n      <!-- Middle info -->\n      <ion-col class=\"col-transtype\" fixed=\"true\">\n        <ion-label id=\"transaction\">\n        <h2 class=\"h2-type\">\n        {{ checkTransType(transaction.values[0].amount) }} {{ (transaction.values[0].name).substring(0,12) }}\n        </h2>\n        <a *ngFor=\"let input of transaction.txpow.txn.inputs\">\n        <p class=\"p-tokenid\">\n        Token Id: {{ input.tokenid.substring(0, 10) }}\n        </p>\n        </a>\n        </ion-label>\n      </ion-col>\n\n      <!-- end info -->\n      <ion-col class=\"col-transamnt\" fixed=\"true\">\n      <ion-label class=\"amount\">\n      <h2 class=\"amount-h2\">\n      {{ transaction.values[0].amount + \" \" }} <span style=\"text-transform: uppercase;\"> {{ (transaction.values[0].name).substring(0, 4)}} </span>\n      </h2>\n      </ion-label>\n      </ion-col>\n      </ion-item>\n\n    </ion-row></ion-grid>\n \n    <ion-grid *ngIf=\"transactions.length >= 1 && transaction.values[0].name === 'Create Token';\"><ion-row>\n    <ion-item \n    class=\"activity\"\n    (click)=\"presentHistoryTokenInfo($event, \n              transaction.txpow.txn.inputs[0].address,\n              transaction.txpow.block, \n              transaction.values[1].amount, \n              transaction.txpow.isblock, \n              transaction.txpow.txpowid, \n              transaction.txpow.parent, \n              transaction.txpow.blkdiff, \n              transaction.txpow.date.substring(11,16))\">\n      <!-- Start info -->\n\n      <!-- TxPoW ID -->\n      <ion-col size=\"1\">\n      <ion-badge>{{transaction.txpow.txpowid.substring(8, 12)}}</ion-badge>\n      </ion-col>\n\n      <ion-col class=\"col-month\" fixed=\"true\">\n      <ion-label>\n      <p id=\"day\">\n      {{ transaction.txpow.date.substring(8, 10) }}\n      </p>\n      <h1 id=\"month\">\n      {{ transaction.txpow.date.substring(4, 7) }} \n      </h1>\n      </ion-label>\n      </ion-col>\n\n      <!-- Middle info -->\n      <ion-col class=\"col-transtype\" fixed=\"true\">\n        <ion-label id=\"transaction\">\n        <h2 class=\"h2-type\">\n        Created a token.\n        </h2>\n        <p class=\"p-tokenid\">\n        TxPoW Id: {{ transaction.txpow.txpowid.substring(0, 10)}}\n        </p>\n        </ion-label>\n      </ion-col>\n\n      <!-- end info -->\n      <ion-col class=\"col-transamnt\" fixed=\"true\">\n      <ion-label class=\"amount\">\n      <h2 class=\"amount-h2\">\n      {{ transaction.values[1].amount.substring(0, 5) + \" \" }} MINI\n      </h2>\n      </ion-label>\n      </ion-col>\n    </ion-item>\n\n    </ion-row></ion-grid>\n    </ion-list>\n    </ion-card-content>\n    </ion-slide>\n  </ion-slides>\n\n\n\n  <!-- SKELETON FOR UX LOADING -->\n  <div *ngIf=\"transactions.length < 1\">  \n  <ion-list *ngFor=\"let length of t_summarySpoof\">\n    <ion-grid *ngIf=\"length.values[0].name !== 'Create Token'\"><ion-row>\n    <ion-item class=\"activity\">\n    \n          <!-- TxPoW ID -->\n      <ion-col size=\"1\">\n      <ion-skeleton-text animated style=\"width: 50%; height: 10%;\"></ion-skeleton-text>\n      </ion-col>\n\n    <ion-col class=\"col-month\" fixed=\"true\">\n      <ion-label>\n      <p id=\"day\">\n        <ion-skeleton-text animated style=\"width: 5%\"></ion-skeleton-text>\n      </p>\n      <h1 id=\"month\">\n        <ion-skeleton-text animated style=\"width: 10%; height: 10%;\"></ion-skeleton-text>\n      </h1>\n      </ion-label>\n    </ion-col>\n\n  <ion-col class=\"col-transtype\" fixed=\"true\">\n    <ion-label id=\"transaction\">\n      <h2 class=\"h2-type\">\n        <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n      </h2>\n      <p class=\"p-tokenid\">\n        <ion-skeleton-text animated style=\"width: 30%\"></ion-skeleton-text>\n      </p>\n    </ion-label>\n  </ion-col>\n\n  <ion-col class=\"col-transamnt\" fixed=\"true\">\n    <ion-label class=\"amount\">\n      <h2 class=\"amount-h2\">\n        <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n      </h2>\n    </ion-label> \n  </ion-col>\n  </ion-item>\n\n  </ion-row></ion-grid>\n  </ion-list>\n  </div>\n\n</ion-card>\n  \n  </ion-content>\n  </ion-app>"

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
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _history_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./history.page */ "./src/app/pages/history/history.page.ts");







var routes = [
    {
        path: '',
        component: _history_page__WEBPACK_IMPORTED_MODULE_6__["HistoryPage"]
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

module.exports = "ion-card-header {\n  --background: var(--ion-background-color, #f2f2f2);\n}\n\nion-segment {\n  margin-top: 10px;\n}\n\nion-card-content ion-text {\n  margin-top: 10px;\n}\n\n.list-md {\n  padding: 0px 0px 0px 0px !important;\n}\n\n/** @@@@@@ TXN Details @@@@@@ **/\n\n.date {\n  display: block;\n}\n\n.amount {\n  margin-left: 120px;\n}\n\n.ios .amount {\n  margin-left: 0px;\n}\n\n.md .amount {\n  margin-left: 0px;\n}\n\n.activity {\n  width: 90%;\n  left: 5%;\n  right: 5%;\n}\n\n.activity:hover {\n  background-color: #d8dfe6 !important;\n}\n\n.activity:hover {\n  background-color: slategray;\n  box-shadow: inset 0px 0px 0px 1px red;\n}\n\n.activity div h1 {\n  font-size: 14px;\n  text-transform: uppercase;\n}\n\n.amount {\n  text-align: center;\n}\n\n#month {\n  font-weight: bolder;\n  font-size: 20px;\n  color: #00AAC7;\n}\n\n#day {\n  font-weight: bolder;\n  font-size: 22px;\n  color: #FF671D;\n}\n\n#token-name {\n  font-weight: bolder;\n  color: #FF671D;\n}\n\n.h2-type {\n  font-size: 20px;\n}\n\n.p-tokenid {\n  font-weight: bolder;\n  font-size: 18px;\n}\n\n.amount-p {\n  font-weight: bolder;\n  font-size: 20px;\n}\n\n.amount-h2 {\n  font-weight: bolder;\n  font-size: 20px;\n}\n\n.category-seg {\n  padding: 0px 40px 0px 40px;\n}\n\n/** @@@@@@@@@@@@@@@@@ iOS @@@@@@@@@@@@@@@@@@@ */\n\n.ios ion-card-content {\n  -webkit-padding-start: 0px;\n          padding-inline-start: 0px;\n  -webkit-padding-end: 0px;\n          padding-inline-end: 0px;\n}\n\n.ios #month {\n  font-size: 13px;\n  color: #00AAC7;\n}\n\n.ios #day {\n  font-size: 12px;\n  color: #FF671D;\n}\n\n.ios .h2-type {\n  font-size: 14px;\n}\n\n.ios .p-tokenid {\n  font-size: 12px;\n}\n\n.ios .amount-p {\n  font-size: 14px;\n}\n\n.ios .amount-h2 {\n  font-size: 14px;\n}\n\n/** @@@@@@@@@@@@@@@@@ Material Design @@@@@@@@@@@@@@@@@@@ */\n\n.md ion-card-content {\n  -webkit-padding-start: 0px;\n          padding-inline-start: 0px;\n  -webkit-padding-end: 0px;\n          padding-inline-end: 0px;\n}\n\n.md #month {\n  font-size: 14px;\n  color: #00AAC7;\n}\n\n.md #day {\n  font-size: 12px;\n  color: #FF671D;\n}\n\n.md .h2-type {\n  font-size: 14px;\n}\n\n.md .p-tokenid {\n  font-size: 12px;\n}\n\n.md .amount-p {\n  font-size: 14px;\n}\n\n.md .amount-h2 {\n  font-size: 14px;\n}\n\n.md .seg {\n  font-size: 12px;\n}\n\n.no-activity-item {\n  padding-left: 2%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGlhcy9Qcm9qZWN0cy9taW5pbWFjb3JlL21vYmlsZS1hcHAtZnJvbnQtZW5kL2FwcC9zcmMvYXBwL3BhZ2VzL2hpc3RvcnkvaGlzdG9yeS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2hpc3RvcnkvaGlzdG9yeS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrREFBQTtBQ0NKOztBRENBO0VBQ0ksZ0JBQUE7QUNFSjs7QURBQTtFQUNJLGdCQUFBO0FDR0o7O0FEREE7RUFDSSxtQ0FBQTtBQ0lKOztBRERBLGdDQUFBOztBQUNBO0VBQ0ksY0FBQTtBQ0lKOztBREZBO0VBQ0ksa0JBQUE7QUNLSjs7QURIQTtFQUNJLGdCQUFBO0FDTUo7O0FESkE7RUFDSSxnQkFBQTtBQ09KOztBRExBO0VBQ0ksVUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0FDUUo7O0FETkE7RUFDSSxvQ0FBQTtBQ1NKOztBRFBBO0VBQ0ksMkJBQUE7RUFDQSxxQ0FBQTtBQ1VKOztBRFJBO0VBQ0ksZUFBQTtFQUNBLHlCQUFBO0FDV0o7O0FEVEE7RUFDSSxrQkFBQTtBQ1lKOztBRFZBO0VBQ0ksbUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ2FKOztBRFhBO0VBQ0ksbUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ2NKOztBRFpBO0VBQ0ksbUJBQUE7RUFDQSxjQUFBO0FDZUo7O0FEWkE7RUFDSSxlQUFBO0FDZUo7O0FEYkE7RUFDSSxtQkFBQTtFQUNBLGVBQUE7QUNnQko7O0FEZEE7RUFDSSxtQkFBQTtFQUNBLGVBQUE7QUNpQko7O0FEZkE7RUFDSSxtQkFBQTtFQUNBLGVBQUE7QUNrQko7O0FEZkE7RUFDSSwwQkFBQTtBQ2tCSjs7QURmQSwrQ0FBQTs7QUFDQTtFQUNJLDBCQUFBO1VBQUEseUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0FDa0JKOztBRGhCQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FDbUJKOztBRGpCQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FDb0JKOztBRGpCQTtFQUNJLGVBQUE7QUNvQko7O0FEbEJBO0VBQ0ksZUFBQTtBQ3FCSjs7QURuQkE7RUFDSSxlQUFBO0FDc0JKOztBRHBCQTtFQUNJLGVBQUE7QUN1Qko7O0FEcEJBLDJEQUFBOztBQUNBO0VBQ0ksMEJBQUE7VUFBQSx5QkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7QUN1Qko7O0FEckJBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUN3Qko7O0FEdEJBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUN5Qko7O0FEdEJBO0VBQ0ksZUFBQTtBQ3lCSjs7QUR2QkE7RUFDSSxlQUFBO0FDMEJKOztBRHhCQTtFQUNJLGVBQUE7QUMyQko7O0FEekJBO0VBQ0ksZUFBQTtBQzRCSjs7QUQxQkE7RUFDSSxlQUFBO0FDNkJKOztBRDFCQTtFQUNJLGdCQUFBO0FDNkJKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaGlzdG9yeS9oaXN0b3J5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJkLWhlYWRlciB7XG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwgI2YyZjJmMik7XG59XG5pb24tc2VnbWVudCB7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbn1cbmlvbi1jYXJkLWNvbnRlbnQgaW9uLXRleHQge1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG59XG4ubGlzdC1tZCB7XG4gICAgcGFkZGluZzogMHB4IDBweCAwcHggMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi8qKiBAQEBAQEAgVFhOIERldGFpbHMgQEBAQEBAICoqL1xuLmRhdGUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuLmFtb3VudCB7XG4gICAgbWFyZ2luLWxlZnQ6IDEyMHB4O1xufVxuLmlvcyAuYW1vdW50IHtcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xufVxuLm1kIC5hbW91bnQge1xuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XG59XG4uYWN0aXZpdHkge1xuICAgIHdpZHRoOiA5MCU7XG4gICAgbGVmdDogNSU7XG4gICAgcmlnaHQ6IDUlO1xufVxuLmFjdGl2aXR5OmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkOGRmZTYgIWltcG9ydGFudDtcbn1cbi5hY3Rpdml0eTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogc2xhdGVncmF5O1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDBweCAwcHggMHB4IDFweCByZWQ7XG59XG4uYWN0aXZpdHkgZGl2IGgxIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbi5hbW91bnQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiNtb250aCB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgY29sb3I6ICMwMEFBQzc7XG59XG4jZGF5IHtcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICBjb2xvcjogI0ZGNjcxRDtcbn1cbiN0b2tlbi1uYW1lIHtcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICAgIGNvbG9yOiAjRkY2NzFEO1xufVxuXG4uaDItdHlwZSB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuLnAtdG9rZW5pZCB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICBmb250LXNpemU6IDE4cHg7XG59ICAgXG4uYW1vdW50LXAge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuLmFtb3VudC1oMiB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5jYXRlZ29yeS1zZWcge1xuICAgIHBhZGRpbmc6IDBweCA0MHB4IDBweCA0MHB4O1xufVxuXG4vKiogQEBAQEBAQEBAQEBAQEBAQEAgaU9TIEBAQEBAQEBAQEBAQEBAQEBAQEAgKi9cbi5pb3MgaW9uLWNhcmQtY29udGVudCB7XG4gICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDBweDtcbiAgICBwYWRkaW5nLWlubGluZS1lbmQ6IDBweDtcbn1cbi5pb3MgI21vbnRoIHtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgY29sb3I6ICMwMEFBQzc7XG59XG4uaW9zICNkYXkge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBjb2xvcjogI0ZGNjcxRDtcbn1cblxuLmlvcyAuaDItdHlwZSB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuLmlvcyAucC10b2tlbmlkIHtcbiAgICBmb250LXNpemU6IDEycHg7XG59ICAgXG4uaW9zIC5hbW91bnQtcCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuLmlvcyAuYW1vdW50LWgyIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG59XG5cbi8qKiBAQEBAQEBAQEBAQEBAQEBAQCBNYXRlcmlhbCBEZXNpZ24gQEBAQEBAQEBAQEBAQEBAQEBAQCAqL1xuLm1kIGlvbi1jYXJkLWNvbnRlbnQge1xuICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAwcHg7XG4gICAgcGFkZGluZy1pbmxpbmUtZW5kOiAwcHg7XG59XG4ubWQgI21vbnRoIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6ICMwMEFBQzc7XG59XG4ubWQgI2RheSB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGNvbG9yOiAjRkY2NzFEO1xufVxuXG4ubWQgLmgyLXR5cGUge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5tZCAucC10b2tlbmlkIHtcbiAgICBmb250LXNpemU6IDEycHg7XG59ICAgXG4ubWQgLmFtb3VudC1wIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG59XG4ubWQgLmFtb3VudC1oMiB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuLm1kIC5zZWcge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLm5vLWFjdGl2aXR5LWl0ZW0ge1xuICAgIHBhZGRpbmctbGVmdDogMiU7XG59XG5cbiIsImlvbi1jYXJkLWhlYWRlciB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsICNmMmYyZjIpO1xufVxuXG5pb24tc2VnbWVudCB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbmlvbi1jYXJkLWNvbnRlbnQgaW9uLXRleHQge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4ubGlzdC1tZCB7XG4gIHBhZGRpbmc6IDBweCAwcHggMHB4IDBweCAhaW1wb3J0YW50O1xufVxuXG4vKiogQEBAQEBAIFRYTiBEZXRhaWxzIEBAQEBAQCAqKi9cbi5kYXRlIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5hbW91bnQge1xuICBtYXJnaW4tbGVmdDogMTIwcHg7XG59XG5cbi5pb3MgLmFtb3VudCB7XG4gIG1hcmdpbi1sZWZ0OiAwcHg7XG59XG5cbi5tZCAuYW1vdW50IHtcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbn1cblxuLmFjdGl2aXR5IHtcbiAgd2lkdGg6IDkwJTtcbiAgbGVmdDogNSU7XG4gIHJpZ2h0OiA1JTtcbn1cblxuLmFjdGl2aXR5OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q4ZGZlNiAhaW1wb3J0YW50O1xufVxuXG4uYWN0aXZpdHk6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBzbGF0ZWdyYXk7XG4gIGJveC1zaGFkb3c6IGluc2V0IDBweCAwcHggMHB4IDFweCByZWQ7XG59XG5cbi5hY3Rpdml0eSBkaXYgaDEge1xuICBmb250LXNpemU6IDE0cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5hbW91bnQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbiNtb250aCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6ICMwMEFBQzc7XG59XG5cbiNkYXkge1xuICBmb250LXdlaWdodDogYm9sZGVyO1xuICBmb250LXNpemU6IDIycHg7XG4gIGNvbG9yOiAjRkY2NzFEO1xufVxuXG4jdG9rZW4tbmFtZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIGNvbG9yOiAjRkY2NzFEO1xufVxuXG4uaDItdHlwZSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLnAtdG9rZW5pZCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLmFtb3VudC1wIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4uYW1vdW50LWgyIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4uY2F0ZWdvcnktc2VnIHtcbiAgcGFkZGluZzogMHB4IDQwcHggMHB4IDQwcHg7XG59XG5cbi8qKiBAQEBAQEBAQEBAQEBAQEBAQCBpT1MgQEBAQEBAQEBAQEBAQEBAQEBAQCAqL1xuLmlvcyBpb24tY2FyZC1jb250ZW50IHtcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDBweDtcbiAgcGFkZGluZy1pbmxpbmUtZW5kOiAwcHg7XG59XG5cbi5pb3MgI21vbnRoIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogIzAwQUFDNztcbn1cblxuLmlvcyAjZGF5IHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogI0ZGNjcxRDtcbn1cblxuLmlvcyAuaDItdHlwZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmlvcyAucC10b2tlbmlkIHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uaW9zIC5hbW91bnQtcCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmlvcyAuYW1vdW50LWgyIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4vKiogQEBAQEBAQEBAQEBAQEBAQEAgTWF0ZXJpYWwgRGVzaWduIEBAQEBAQEBAQEBAQEBAQEBAQEAgKi9cbi5tZCBpb24tY2FyZC1jb250ZW50IHtcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDBweDtcbiAgcGFkZGluZy1pbmxpbmUtZW5kOiAwcHg7XG59XG5cbi5tZCAjbW9udGgge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjMDBBQUM3O1xufVxuXG4ubWQgI2RheSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICNGRjY3MUQ7XG59XG5cbi5tZCAuaDItdHlwZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLm1kIC5wLXRva2VuaWQge1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5tZCAuYW1vdW50LXAge1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5tZCAuYW1vdW50LWgyIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4ubWQgLnNlZyB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLm5vLWFjdGl2aXR5LWl0ZW0ge1xuICBwYWRkaW5nLWxlZnQ6IDIlO1xufSJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_history_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/history.service */ "./src/app/service/history.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _components_pop_history_token_pop_history_token_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/pop-history-token/pop-history-token.component */ "./src/app/components/pop-history-token/pop-history-token.component.ts");








var HistoryPage = /** @class */ (function () {
    function HistoryPage(popHistoryController, api, historyService) {
        this.popHistoryController = popHistoryController;
        this.api = api;
        this.historyService = historyService;
        this.categories = 0;
        this.sliderOptions = {
            initialSlide: 0,
            slidesPerView: 1,
            speed: 200
        };
        // + vars
        this.transactions = [];
        this.tokens = [];
        this.t_summarySpoof = [];
        // - vars
        this.lastJSON = '';
    }
    HistoryPage.prototype.ngOnInit = function () { };
    HistoryPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.pullInHistoryLength();
        setTimeout(function () {
            _this.pullInHistorySummary(); // subscribe and polls history
        }, 500);
    };
    HistoryPage.prototype.ionViewDidLeave = function () {
        this.polledHistorySubscription.unsubscribe();
    };
    /** ALERTS */
    // Present history details popover when tapped/clicked
    HistoryPage.prototype.presentHistoryInfo = function (ev, _name, _addr, _blkNumber, _amnt, _isBlock, _txpowid, _parent, _blockdiff, _date, _state) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var popover;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popHistoryController.create({
                            component: _components_pop_history_pop_history_component__WEBPACK_IMPORTED_MODULE_3__["PopHistoryComponent"],
                            cssClass: 'history-popover',
                            event: ev,
                            translucent: true,
                            componentProps: {
                                name: _name,
                                address: _addr,
                                blockNumber: _blkNumber,
                                transAmount: _amnt,
                                isBlock: _isBlock,
                                txpowid: _txpowid,
                                parent: _parent,
                                blockdiff: _blockdiff,
                                date: _date,
                                state: _state
                            },
                        })];
                    case 1:
                        popover = _a.sent();
                        return [4 /*yield*/, popover.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    // Present history details popover when tapped/clicked
    HistoryPage.prototype.presentHistoryTokenInfo = function (ev, _addr, _blkNumber, _amnt, _isBlock, _txpowid, _parent, _blockdiff, _date, _state) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var popover;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popHistoryController.create({
                            component: _components_pop_history_token_pop_history_token_component__WEBPACK_IMPORTED_MODULE_7__["PopHistoryTokenComponent"],
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
                                state: _state
                            },
                        })];
                    case 1:
                        popover = _a.sent();
                        return [4 /*yield*/, popover.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /** MISC Functions */
    // Check if we're receiving or sending
    HistoryPage.prototype.checkTransType = function (amount) {
        if (amount.substring(0, 1) === "-") {
            return "Sent";
        }
        else {
            return "Received";
        }
    };
    HistoryPage.prototype.getTXNType = function (amount) {
        if (amount.substring(0, 1) === "-") {
            return "return-down-back-outline";
        }
        else {
            return "arrow-redo-circle-outline";
        }
    };
    //LATER USE, history order
    HistoryPage.prototype.getUserOrderPref = function () {
        if (true) {
            return 't_summaryArr.slice().reverse()';
        }
        else {}
    };
    // Categories Segment
    HistoryPage.prototype.segmentChanged = function (ev, slides) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.selectedSlide = slides;
                        return [4 /*yield*/, this.selectedSlide.slideTo(this.categories)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    // Slide, after segment button clicked..
    HistoryPage.prototype.slideChanged = function (slides) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.selectedSlide = slides;
                slides.getActiveIndex().then(function (selectedValue) {
                    _this.categories = selectedValue;
                });
                return [2 /*return*/];
            });
        });
    };
    /** API CALLS */
    // get length of history
    HistoryPage.prototype.pullInHistoryLength = function () {
        var _this = this;
        this.historyService.getHistory().subscribe(function (res) {
            _this.t_summarySpoof = res.response.history;
        });
    };
    // Get all users activities+transactions history
    HistoryPage.prototype.pullInHistorySummary = function () {
        var _this = this;
        this.polledHistorySubscription = this.historyService.getHistory().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (responseData) {
            var historyArr = [];
            for (var key in responseData.response) {
                var history_1 = responseData.response;
                if (history_1[key]) {
                    //Transaction description summary
                    historyArr = history_1[key];
                    history_1.history.forEach(function (element) {
                        element.values.forEach(function (val) {
                            if (val.name === 'Create Token')
                                _this.tokens.push(element);
                        });
                    });
                }
                return historyArr;
            }
        })).subscribe(function (responseData) {
            if (_this.lastJSON !== JSON.stringify(responseData)) {
                _this.transactions = responseData;
                _this.lastJSON = JSON.stringify(responseData);
            }
        });
    };
    HistoryPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] },
        { type: _service_minima_api_service__WEBPACK_IMPORTED_MODULE_1__["MinimaApiService"] },
        { type: _service_history_service__WEBPACK_IMPORTED_MODULE_5__["HistoryService"] }
    ]; };
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
    return HistoryPage;
}());



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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");






var HistoryService = /** @class */ (function () {
    function HistoryService(http) {
        this.http = http;
        this.manualRefresh = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.host = '';
        this.host = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__["environment"].defaultNode;
        this.host = this.getHost();
    }
    HistoryService.prototype.getHistory = function () {
        return this.request('history');
    };
    HistoryService.prototype.getHost = function () {
        if (localStorage.getItem('minima_host') == null) {
            localStorage.setItem('minima_host', this.host);
            return this.host;
        }
        else {
            return localStorage.getItem('minima_host');
        }
    };
    HistoryService.prototype.request = function (route) {
        var apiUrl = this.host + route; // this.host+'route' = "127.0.0.1:8999/'balance'"
        var history$ = this.http.get(apiUrl);
        return this.polledHistory$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["timer"])(0, 2000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["merge"])(this.manualRefresh), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["concatMap"])(function (_) { return history$; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res; }));
    };
    HistoryService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    HistoryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], HistoryService);
    return HistoryService;
}());



/***/ })

}]);
//# sourceMappingURL=pages-history-history-module-es5.js.map