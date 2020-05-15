(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-history-history-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/history/history.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/history/history.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-app>\n  <ion-header>\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n      <ion-title color=\"primary\">Transaction History</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content>\n    <ion-card>\n      <ion-card-header>\n        Recent Activity\n        <!-- Category Segment -->\n      <ion-segment\n        *ngIf = \"transactions.length > 1\"\n        (ionChange)=\"segmentChanged($event, slides)\" \n        [(ngModel)] = \"categories\">\n        <ion-segment-button value=\"0\" class=\"seg\">\n          <ion-label>Transactions</ion-label>\n        </ion-segment-button>\n        <ion-segment-button value=\"1\" class=\"seg\">\n          <ion-label>Tokens Created</ion-label>\n        </ion-segment-button>\n        <ion-segment-button value=\"2\" class=\"seg\">\n        <ion-label>All</ion-label>\n        </ion-segment-button>\n      </ion-segment>\n      </ion-card-header>\n\n  <ion-slides\n  #slides\n  pager=\"false\"\n  [options]=\"sliderOptions\"\n  (ionSlideDidChange)=\"slideChanged(slides)\"\n  (ionSlideDidLoad)=\"slideChanged(slides)\">\n\n    <!-- @@@@@@@@@@@@@@@@@@@@@@@@@@@ Transactions @@@@@@@@@@@@@@@@@@@@@@@@@@@ -->\n    \n    <ion-slide class=\"swiper-slide\">\n    <ion-card-content style=\"width: 100%; text-align: center;\">\n\n    <!-- Zero activities -->\n    <ion-text *ngIf=\"transactions.length < 1\" style=\"font-family: Aeonik-light;\">No activities to display.</ion-text>\n    <ion-list *ngFor=\"let transaction of transactions;\">\n    <ion-grid><ion-row>\n    <ion-item \n    *ngIf=\"transactions.length >= 1 && transaction.values[0].name !== 'Create Token';\" \n    class=\"activity\"\n    (click)=\"presentModal(transaction.txpow.txpowid, \n              transaction.values[0].amount,\n              transaction.txpow.txn.state,\n              transaction.txpow.txnid,\n              transaction.txpow.block,\n              transaction.txpow.parent,\n              transaction.txpow.txn.inputs[0].tokenid,\n              transaction.txpow.date,\n              transaction.txpow.isblock,\n              transaction.values[0].name)\">\n\n      <!-- TXN Icon -->\n      <ion-col size=\"1\">\n      <ion-icon [name]=\"getTXNType(transaction.values[0].amount)\" size=\"large\"></ion-icon>\n      </ion-col>\n\n      <!-- TXN Date -->\n      <ion-col size=\"1\" class=\"col-month\" fixed=\"true\">\n      <ion-label>\n      <p id=\"day\">\n      {{ transaction.txpow.date.substring(8, 10) }}\n      </p>\n      <h1 id=\"month\">\n      {{ transaction.txpow.date.substring(4, 7) }} \n      </h1>\n      </ion-label>\n      </ion-col>\n\n      <!-- TXN Description -->\n      <ion-col size=\"2\" class=\"col-transtype\" fixed=\"true\">\n        <ion-label id=\"transaction\">\n        <h2 class=\"h2-type\">\n        {{ checkTransType(transaction.values[0].amount) }} <span id=\"token-name\">{{ (transaction.values[0].name).substring(0,12) }}</span>\n        </h2>\n        <a *ngFor=\"let input of transaction.txpow.txn.inputs\">\n        <p *ngIf=\"input.tokenid ==='0x00'\"class=\"p-tokenid\">\n        {{ input.tokenid.substring(0, 10) }}\n        </p>\n        <p *ngIf=\"input.tokenid !=='0x00'\" class=\"p-tokenid\">\n        {{ input.tokenid.substring(0, 10) + \"...\" }}\n        </p>\n        </a>\n        </ion-label>\n      </ion-col>\n\n      <!-- TXN AMOUNT -->\n      <ion-col size=\"6\" class=\"col-transamnt\" fixed=\"true\">\n      <ion-label class=\"amount\">\n      <h2 class=\"amount-h2\">\n      {{ transaction.values[0].amount + \" \" }} <span style=\"text-transform: uppercase;\"> {{ (transaction.values[0].name).substring(0, 4)}} </span>\n      </h2>\n      </ion-label>\n      </ion-col>\n\n      <!-- TXN Message -->\n      <ion-col size=\"4\" *ngIf=\"transaction.txpow.txn.state.length > 0\">\n      <ion-note *ngIf=\"transaction.txpow.txn.state[1].data.length <= 15\" class=\"msg-details\">{{transaction.txpow.txn.state[1].data.substring(0, 15)}}</ion-note>\n      <ion-note *ngIf=\"transaction.txpow.txn.state[1].data.length > 15\" class=\"msg-details\">{{transaction.txpow.txn.state[1].data.substring(0, 15) + \"...\"}}</ion-note>\n      </ion-col>\n\n    </ion-item>\n    </ion-row></ion-grid>\n    </ion-list>\n    </ion-card-content>\n    </ion-slide>\n\n    <!-- @@@@@@@@@@@@@@@@@@@@@@@@@@@ Token Creation @@@@@@@@@@@@@@@@@@@@@@@@@@@ -->\n    <ion-slide class=\"swiper-slide\">\n    <ion-card-content style=\"width: 100%; text-align: center !important;\">\n    \n    <ion-text *ngIf=\"tokens.length < 1\" style=\"font-family: 'Aeonik-light';\"> No token activities to display. </ion-text>\n    \n    \n    <ion-list *ngFor=\"let transaction of transactions;\">\n    <ion-grid *ngIf=\"transactions.length >= 1 && transaction.values[0].name === 'Create Token';\" ><ion-row>\n    <ion-item \n    class=\"activity\"\n    (click)=\"presentModal()\">\n      <!-- TXN Icon -->\n      <ion-col size=\"1\">\n      <ion-icon name=\"brush-outline\" size=\"large\"></ion-icon>\n      </ion-col>\n\n      <!-- TXN Date -->\n      <ion-col size=\"1\" class=\"col-month\" fixed=\"true\">\n      <ion-label>\n      <p id=\"day\">\n      {{ transaction.txpow.date.substring(8, 10) }}\n      </p>\n      <h1 id=\"month\">\n      {{ transaction.txpow.date.substring(4, 7) }} \n      </h1>\n      </ion-label>\n      </ion-col>\n\n      <!-- TXN Description -->\n      <ion-col size=\"4\" class=\"col-transtype\" fixed=\"true\">\n        <ion-label id=\"transaction\">\n        <h2 class=\"h2-type\">\n        Created a token.\n        </h2>\n        </ion-label>\n      </ion-col>\n\n      <!-- TXN Amount -->\n      <ion-col size=\"6\" class=\"col-transamnt\" fixed=\"true\">\n      <ion-label class=\"amount\">\n      <h2 class=\"amount-h2\">\n      {{ transaction.values[1].amount.substring(0, 8) + \" \" }} MINI\n      </h2>\n      </ion-label>\n      </ion-col>\n\n      </ion-item>\n    </ion-row></ion-grid>\n    </ion-list>\n\n    </ion-card-content>\n    </ion-slide>\n\n    <!-- @@@@@@@@@@@@@@@@@@@@@@@@@ All @@@@@@@@@@@@@@@@@@@@@@@@@@@@@ -->\n    <ion-slide class=\"swiper-slide\">\n    <ion-card-content style=\"width: 100%; text-align: center;\">\n\n    <!-- Zero activities -->\n    <ion-text *ngIf=\"transactions.length < 1\" style=\"font-family: Aeonik-light;\">No activities to display.</ion-text>\n\n    <ion-list *ngFor=\"let transaction of transactions;\">\n    <ion-grid *ngIf=\"transactions.length >= 1 && transaction.values[0].name !== 'Create Token';\"><ion-row>\n    <ion-item \n    class=\"activity\"\n    (click)=\"presentModal()\">\n\n      <!-- TXN Icon -->\n      <ion-col size=\"1\">\n      <ion-icon [name]=\"getTXNType(transaction.values[0].amount)\" size=\"large\"></ion-icon>\n      </ion-col>\n\n      <!-- TXN Date -->\n      <ion-col size=\"1\" class=\"col-month\" fixed=\"true\">\n      <ion-label>\n      <p id=\"day\">\n      {{ transaction.txpow.date.substring(8, 10) }}\n      </p>\n      <h1 id=\"month\">\n      {{ transaction.txpow.date.substring(4, 7) }} \n      </h1>\n      </ion-label>\n      </ion-col>\n\n      <!-- TXN Description -->\n      <ion-col size=\"2\" class=\"col-transtype\" fixed=\"true\">\n        <ion-label id=\"transaction\">\n        <h2 class=\"h2-type\">\n        {{ checkTransType(transaction.values[0].amount) }} <span id=\"token-name\">{{ (transaction.values[0].name).substring(0,12) }}</span>\n        </h2>\n        <a *ngFor=\"let input of transaction.txpow.txn.inputs\">\n        <p *ngIf=\"input.tokenid ==='0x00'\"class=\"p-tokenid\">\n        {{ input.tokenid.substring(0, 10) }}\n        </p>\n        <p *ngIf=\"input.tokenid !=='0x00'\" class=\"p-tokenid\">\n        {{ input.tokenid.substring(0, 10) + \"...\" }}\n        </p>\n        </a>\n        </ion-label>\n      </ion-col>\n\n      <!-- TXN AMOUNT -->\n      <ion-col size=\"6\" class=\"col-transamnt\" fixed=\"true\">\n      <ion-label class=\"amount\">\n      <h2 class=\"amount-h2\">\n      {{ transaction.values[0].amount + \" \" }} <span style=\"text-transform: uppercase;\"> {{ (transaction.values[0].name).substring(0, 4)}} </span>\n      </h2>\n      </ion-label>\n      </ion-col>\n\n      <!-- TXN Message -->\n      <ion-col size=\"4\" *ngIf=\"transaction.txpow.txn.state.length > 0\">\n      <ion-note *ngIf=\"transaction.txpow.txn.state[1].data.length <= 15\" class=\"msg-details\">{{transaction.txpow.txn.state[1].data.substring(0, 15)}}</ion-note>\n      <ion-note *ngIf=\"transaction.txpow.txn.state[1].data.length > 15\" class=\"msg-details\">{{transaction.txpow.txn.state[1].data.substring(0, 15) + \"...\"}}</ion-note>\n      </ion-col>\n\n    </ion-item>\n    </ion-row></ion-grid>\n \n    <ion-grid *ngIf=\"transactions.length >= 1 && transaction.values[0].name === 'Create Token';\"><ion-row>\n    <ion-item \n    class=\"activity\"\n    (click)=\"presentModal()\">\n      <!-- TXN Icon -->\n      <ion-col size=\"1\">\n      <ion-icon name=\"brush-outline\" size=\"large\"></ion-icon>\n      </ion-col>\n\n      <!-- TXN Date -->\n      <ion-col size=\"1\" class=\"col-month\" fixed=\"true\">\n      <ion-label>\n      <p id=\"day\">\n      {{ transaction.txpow.date.substring(8, 10) }}\n      </p>\n      <h1 id=\"month\">\n      {{ transaction.txpow.date.substring(4, 7) }} \n      </h1>\n      </ion-label>\n      </ion-col>\n\n      <!-- TXN Description -->\n      <ion-col size=\"2\" class=\"col-transtype\" fixed=\"true\">\n        <ion-label id=\"transaction\">\n        <h2 class=\"h2-type\">\n        Created a token.\n        </h2>\n        </ion-label>\n      </ion-col>\n\n      <!-- TXN Amount -->\n      <ion-col size=\"6\" class=\"col-transamnt\" fixed=\"true\">\n      <ion-label class=\"amount\">\n      <h2 class=\"amount-h2\">\n      {{ transaction.values[1].amount.substring(0, 8) + \" \" }} MINI\n      </h2>\n      </ion-label>\n      </ion-col>\n\n    </ion-item>\n    </ion-row></ion-grid>\n    </ion-list>\n    </ion-card-content>\n    </ion-slide>\n  </ion-slides>\n\n\n\n  <!-- SKELETON FOR UX LOADING -->\n  <div *ngIf=\"transactions.length < 1\">  \n  <ion-list *ngFor=\"let length of t_summarySpoof\">\n    <ion-grid *ngIf=\"length.values[0].name !== 'Create Token'\"><ion-row>\n    <ion-item class=\"activity\">\n    \n    <!-- TXN Icon Skeleton -->\n    <ion-col size=\"1\">\n    <ion-avatar>\n    <ion-skeleton-text animated style=\"width: 50%; height: 50%;\"></ion-skeleton-text>\n    </ion-avatar>\n    </ion-col>\n\n    <!-- TXN Date Skeleton -->\n    <ion-col size=\"2\" class=\"col-month\" fixed=\"true\">\n      <ion-label>\n      <p id=\"day\">\n        <ion-skeleton-text animated style=\"width: 5%\"></ion-skeleton-text>\n      </p>\n      <h1 id=\"month\">\n        <ion-skeleton-text animated style=\"width: 10%; height: 10%;\"></ion-skeleton-text>\n      </h1>\n      </ion-label>\n    </ion-col>\n  <!-- TXN Details Skeleton -->\n  <ion-col size=\"2\"class=\"col-transtype\" fixed=\"true\">\n    <ion-label id=\"transaction\">\n      <h2 class=\"h2-type\">\n        <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n      </h2>\n      <p class=\"p-tokenid\">\n        <ion-skeleton-text animated style=\"width: 30%\"></ion-skeleton-text>\n      </p>\n    </ion-label>\n  </ion-col>\n  <!-- TXN Amount Skeleton-->\n  <ion-col size=\"6\" class=\"col-transamnt\" fixed=\"true\">\n    <ion-label class=\"amount\">\n      <h2 class=\"amount-h2\">\n        <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n      </h2>\n    </ion-label> \n  </ion-col>\n\n  <!-- TXN Message Skeleton -->\n  <ion-col size=\"4\">\n  <ion-skeleton-text animated style=\"width: 50%; height: 10%;\"></ion-skeleton-text>\n  </ion-col>\n  </ion-item>\n\n  </ion-row></ion-grid>\n  </ion-list>\n  </div>\n\n</ion-card>\n  \n  </ion-content>\n  </ion-app>"

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

module.exports = "ion-card-header {\n  --background: var(--ion-background-color, #f2f2f2);\n}\n\nion-segment {\n  margin-top: 5px;\n  padding: 0px 10px 0px 10px;\n}\n\nion-card-content ion-text {\n  margin-top: 10px;\n}\n\n.list-md {\n  padding: 0px 0px 0px 0px !important;\n}\n\n/** @@@@@@ TXN Details @@@@@@ **/\n\n.date {\n  display: block;\n}\n\n.amount {\n  margin-left: 120px;\n}\n\n.ios .amount {\n  margin-left: 0px;\n}\n\n.md .amount {\n  margin-left: 0px;\n}\n\n.activity {\n  width: 90%;\n  left: 12%;\n  right: 5%;\n}\n\nion-row {\n  width: 90%;\n}\n\n.activity div h1 {\n  font-size: 14px;\n  text-transform: uppercase;\n}\n\n.amount {\n  text-align: center;\n}\n\n#month {\n  font-weight: bolder;\n  font-size: 20px;\n  color: #00AAC7;\n}\n\n#day {\n  font-weight: bolder;\n  font-size: 22px;\n  color: #FF671D;\n}\n\n#token-name {\n  font-weight: bolder;\n  color: #FF671D;\n}\n\n.h2-type {\n  font-size: 20px;\n}\n\n.p-tokenid {\n  font-weight: bolder;\n  font-size: 18px;\n}\n\n.amount-p {\n  font-weight: bolder;\n  font-size: 20px;\n}\n\n.amount-h2 {\n  font-weight: bolder;\n  font-size: 20px;\n}\n\n.msg-details {\n  font-size: 16px;\n}\n\n/** @@@@@@@@@@@@@@@@@ iOS @@@@@@@@@@@@@@@@@@@ */\n\n.ios ion-card-content {\n  -webkit-padding-start: 0px;\n          padding-inline-start: 0px;\n  -webkit-padding-end: 0px;\n          padding-inline-end: 0px;\n}\n\n.ios #month {\n  font-size: 13px;\n  color: #00AAC7;\n}\n\n.ios #day {\n  font-size: 12px;\n  color: #FF671D;\n}\n\n.ios .h2-type {\n  font-size: 14px;\n}\n\n.ios .p-tokenid {\n  font-size: 12px;\n}\n\n.ios .amount-p {\n  font-size: 14px;\n}\n\n.ios .amount-h2 {\n  font-size: 14px;\n}\n\n/** @@@@@@@@@@@@@@@@@ Material Design @@@@@@@@@@@@@@@@@@@ */\n\n.md ion-card-content {\n  -webkit-padding-start: 0px;\n          padding-inline-start: 0px;\n  -webkit-padding-end: 0px;\n          padding-inline-end: 0px;\n}\n\n.md #month {\n  font-size: 14px;\n  color: #00AAC7;\n}\n\n.md #day {\n  font-size: 12px;\n  color: #FF671D;\n}\n\n.md .h2-type {\n  font-size: 14px;\n}\n\n.md .p-tokenid {\n  font-size: 12px;\n}\n\n.md .amount-p {\n  font-size: 14px;\n}\n\n.md .amount-h2 {\n  font-size: 14px;\n}\n\n.md .seg {\n  font-size: 12px;\n}\n\n.no-activity-item {\n  padding-left: 2%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGlhcy9Qcm9qZWN0cy9taW5pbWFjb3JlL21vYmlsZS1hcHAtZnJvbnQtZW5kL2FwcC9zcmMvYXBwL3BhZ2VzL2hpc3RvcnkvaGlzdG9yeS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2hpc3RvcnkvaGlzdG9yeS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrREFBQTtBQ0NKOztBRENBO0VBQ0ksZUFBQTtFQUNBLDBCQUFBO0FDRUo7O0FEQUE7RUFDSSxnQkFBQTtBQ0dKOztBRERBO0VBQ0ksbUNBQUE7QUNJSjs7QUREQSxnQ0FBQTs7QUFDQTtFQUNJLGNBQUE7QUNJSjs7QURGQTtFQUNJLGtCQUFBO0FDS0o7O0FESEE7RUFDSSxnQkFBQTtBQ01KOztBREpBO0VBQ0ksZ0JBQUE7QUNPSjs7QURMQTtFQUNJLFVBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtBQ1FKOztBRExBO0VBQ0ksVUFBQTtBQ1FKOztBRE5BO0VBQ0ksZUFBQTtFQUNBLHlCQUFBO0FDU0o7O0FEUEE7RUFDSSxrQkFBQTtBQ1VKOztBRFJBO0VBQ0ksbUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ1dKOztBRFRBO0VBQ0ksbUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ1lKOztBRFZBO0VBQ0ksbUJBQUE7RUFDQSxjQUFBO0FDYUo7O0FEVkE7RUFDSSxlQUFBO0FDYUo7O0FEWEE7RUFDSSxtQkFBQTtFQUNBLGVBQUE7QUNjSjs7QURaQTtFQUNJLG1CQUFBO0VBQ0EsZUFBQTtBQ2VKOztBRGJBO0VBQ0ksbUJBQUE7RUFDQSxlQUFBO0FDZ0JKOztBRGJBO0VBQ0ksZUFBQTtBQ2dCSjs7QURiQSwrQ0FBQTs7QUFDQTtFQUNJLDBCQUFBO1VBQUEseUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0FDZ0JKOztBRGRBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUNpQko7O0FEZkE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQ2tCSjs7QURmQTtFQUNJLGVBQUE7QUNrQko7O0FEaEJBO0VBQ0ksZUFBQTtBQ21CSjs7QURqQkE7RUFDSSxlQUFBO0FDb0JKOztBRGxCQTtFQUNJLGVBQUE7QUNxQko7O0FEbEJBLDJEQUFBOztBQUNBO0VBQ0ksMEJBQUE7VUFBQSx5QkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7QUNxQko7O0FEbkJBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUNzQko7O0FEcEJBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUN1Qko7O0FEcEJBO0VBQ0ksZUFBQTtBQ3VCSjs7QURyQkE7RUFDSSxlQUFBO0FDd0JKOztBRHRCQTtFQUNJLGVBQUE7QUN5Qko7O0FEdkJBO0VBQ0ksZUFBQTtBQzBCSjs7QUR4QkE7RUFDSSxlQUFBO0FDMkJKOztBRHhCQTtFQUNJLGdCQUFBO0FDMkJKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaGlzdG9yeS9oaXN0b3J5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJkLWhlYWRlciB7XG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwgI2YyZjJmMik7XG59XG5pb24tc2VnbWVudCB7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIHBhZGRpbmc6IDBweCAxMHB4IDBweCAxMHB4O1xufVxuaW9uLWNhcmQtY29udGVudCBpb24tdGV4dCB7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi5saXN0LW1kIHtcbiAgICBwYWRkaW5nOiAwcHggMHB4IDBweCAwcHggIWltcG9ydGFudDtcbn1cblxuLyoqIEBAQEBAQCBUWE4gRGV0YWlscyBAQEBAQEAgKiovXG4uZGF0ZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG4uYW1vdW50IHtcbiAgICBtYXJnaW4tbGVmdDogMTIwcHg7XG59XG4uaW9zIC5hbW91bnQge1xuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XG59XG4ubWQgLmFtb3VudCB7XG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcbn1cbi5hY3Rpdml0eSB7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBsZWZ0OiAxMiU7XG4gICAgcmlnaHQ6IDUlO1xuXG59XG5pb24tcm93IHtcbiAgICB3aWR0aDogOTAlO1xufVxuLmFjdGl2aXR5IGRpdiBoMSB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG4uYW1vdW50IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4jbW9udGgge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGNvbG9yOiAjMDBBQUM3O1xufVxuI2RheSB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICBmb250LXNpemU6IDIycHg7XG4gICAgY29sb3I6ICNGRjY3MUQ7XG59XG4jdG9rZW4tbmFtZSB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICBjb2xvcjogI0ZGNjcxRDtcbn1cblxuLmgyLXR5cGUge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbn1cbi5wLXRva2VuaWQge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICAgZm9udC1zaXplOiAxOHB4O1xufSAgIFxuLmFtb3VudC1wIHtcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbn1cbi5hbW91bnQtaDIge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4ubXNnLWRldGFpbHMge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLyoqIEBAQEBAQEBAQEBAQEBAQEBAIGlPUyBAQEBAQEBAQEBAQEBAQEBAQEBAICovXG4uaW9zIGlvbi1jYXJkLWNvbnRlbnQge1xuICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAwcHg7XG4gICAgcGFkZGluZy1pbmxpbmUtZW5kOiAwcHg7XG59XG4uaW9zICNtb250aCB7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGNvbG9yOiAjMDBBQUM3O1xufVxuLmlvcyAjZGF5IHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgY29sb3I6ICNGRjY3MUQ7XG59XG5cbi5pb3MgLmgyLXR5cGUge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5pb3MgLnAtdG9rZW5pZCB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xufSAgIFxuLmlvcyAuYW1vdW50LXAge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5pb3MgLmFtb3VudC1oMiB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4vKiogQEBAQEBAQEBAQEBAQEBAQEAgTWF0ZXJpYWwgRGVzaWduIEBAQEBAQEBAQEBAQEBAQEBAQEAgKi9cbi5tZCBpb24tY2FyZC1jb250ZW50IHtcbiAgICBwYWRkaW5nLWlubGluZS1zdGFydDogMHB4O1xuICAgIHBhZGRpbmctaW5saW5lLWVuZDogMHB4O1xufVxuLm1kICNtb250aCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiAjMDBBQUM3O1xufVxuLm1kICNkYXkge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBjb2xvcjogI0ZGNjcxRDtcbn1cblxuLm1kIC5oMi10eXBlIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG59XG4ubWQgLnAtdG9rZW5pZCB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xufSAgIFxuLm1kIC5hbW91bnQtcCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuLm1kIC5hbW91bnQtaDIge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5tZCAuc2VnIHtcbiAgICBmb250LXNpemU6IDEycHg7XG59XG5cbi5uby1hY3Rpdml0eS1pdGVtIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDIlO1xufVxuXG4iLCJpb24tY2FyZC1oZWFkZXIge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZjJmMmYyKTtcbn1cblxuaW9uLXNlZ21lbnQge1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIHBhZGRpbmc6IDBweCAxMHB4IDBweCAxMHB4O1xufVxuXG5pb24tY2FyZC1jb250ZW50IGlvbi10ZXh0IHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLmxpc3QtbWQge1xuICBwYWRkaW5nOiAwcHggMHB4IDBweCAwcHggIWltcG9ydGFudDtcbn1cblxuLyoqIEBAQEBAQCBUWE4gRGV0YWlscyBAQEBAQEAgKiovXG4uZGF0ZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uYW1vdW50IHtcbiAgbWFyZ2luLWxlZnQ6IDEyMHB4O1xufVxuXG4uaW9zIC5hbW91bnQge1xuICBtYXJnaW4tbGVmdDogMHB4O1xufVxuXG4ubWQgLmFtb3VudCB7XG4gIG1hcmdpbi1sZWZ0OiAwcHg7XG59XG5cbi5hY3Rpdml0eSB7XG4gIHdpZHRoOiA5MCU7XG4gIGxlZnQ6IDEyJTtcbiAgcmlnaHQ6IDUlO1xufVxuXG5pb24tcm93IHtcbiAgd2lkdGg6IDkwJTtcbn1cblxuLmFjdGl2aXR5IGRpdiBoMSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLmFtb3VudCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuI21vbnRoIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogIzAwQUFDNztcbn1cblxuI2RheSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgY29sb3I6ICNGRjY3MUQ7XG59XG5cbiN0b2tlbi1uYW1lIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgY29sb3I6ICNGRjY3MUQ7XG59XG5cbi5oMi10eXBlIHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4ucC10b2tlbmlkIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4uYW1vdW50LXAge1xuICBmb250LXdlaWdodDogYm9sZGVyO1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5hbW91bnQtaDIge1xuICBmb250LXdlaWdodDogYm9sZGVyO1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5tc2ctZGV0YWlscyB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLyoqIEBAQEBAQEBAQEBAQEBAQEBAIGlPUyBAQEBAQEBAQEBAQEBAQEBAQEBAICovXG4uaW9zIGlvbi1jYXJkLWNvbnRlbnQge1xuICBwYWRkaW5nLWlubGluZS1zdGFydDogMHB4O1xuICBwYWRkaW5nLWlubGluZS1lbmQ6IDBweDtcbn1cblxuLmlvcyAjbW9udGgge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiAjMDBBQUM3O1xufVxuXG4uaW9zICNkYXkge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjRkY2NzFEO1xufVxuXG4uaW9zIC5oMi10eXBlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uaW9zIC5wLXRva2VuaWQge1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5pb3MgLmFtb3VudC1wIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uaW9zIC5hbW91bnQtaDIge1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi8qKiBAQEBAQEBAQEBAQEBAQEBAQCBNYXRlcmlhbCBEZXNpZ24gQEBAQEBAQEBAQEBAQEBAQEBAQCAqL1xuLm1kIGlvbi1jYXJkLWNvbnRlbnQge1xuICBwYWRkaW5nLWlubGluZS1zdGFydDogMHB4O1xuICBwYWRkaW5nLWlubGluZS1lbmQ6IDBweDtcbn1cblxuLm1kICNtb250aCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICMwMEFBQzc7XG59XG5cbi5tZCAjZGF5IHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogI0ZGNjcxRDtcbn1cblxuLm1kIC5oMi10eXBlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4ubWQgLnAtdG9rZW5pZCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLm1kIC5hbW91bnQtcCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLm1kIC5hbW91bnQtaDIge1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5tZCAuc2VnIHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4ubm8tYWN0aXZpdHktaXRlbSB7XG4gIHBhZGRpbmctbGVmdDogMiU7XG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_history_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/history.service */ "./src/app/service/history.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _components_historymodal_historymodal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/historymodal/historymodal.page */ "./src/app/components/historymodal/historymodal.page.ts");







var HistoryPage = /** @class */ (function () {
    function HistoryPage(api, historyService, modalController) {
        this.api = api;
        this.historyService = historyService;
        this.modalController = modalController;
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
    /** Modals */
    HistoryPage.prototype.presentModal = function (_txpowid, _amount, _message, _txnid, _block, _parent, _tokenid, _date, _isBlock, _name) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _components_historymodal_historymodal_page__WEBPACK_IMPORTED_MODULE_6__["HistorymodalPage"],
                            componentProps: {
                                'TXPOW_ID': _txpowid,
                                'Amount': _amount,
                                'Message': _message,
                                'TXN_ID': _txnid,
                                'Block': _block,
                                'Parent': _parent,
                                'TokenID': _tokenid,
                                'Date': _date,
                                'isBlock': _isBlock,
                                'TokenName': _name
                            }
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /** ALERTS */
    // Present history details popover when tapped/clicked
    // async presentHistoryInfo(ev: any, _name: string, _addr: any, _blkNumber: any, _amnt: any,
    //                      _isBlock: boolean, _txpowid: string, _parent: string,
    //                       _blockdiff: number, _date: string, _state: any ) {
    //   const popover = await this.popHistoryController.create({
    //     component: PopHistoryComponent,
    //     cssClass: 'history-popover',
    //     event: ev,
    //     translucent: true,
    //     componentProps: {
    //          name: _name,
    //          address: _addr,
    //          blockNumber: _blkNumber,
    //          transAmount: _amnt,
    //          isBlock: _isBlock,
    //          txpowid: _txpowid,
    //          parent: _parent,
    //          blockdiff: _blockdiff,
    //          date: _date,
    //          state: _state
    //         },
    //   });
    //   return await popover.present();
    // }
    // Present history details popover when tapped/clicked
    // async presentHistoryTokenInfo(ev: any, _addr: any, _blkNumber: any, _amnt: any,
    //   _isBlock: boolean, _txpowid: string, _parent: string,
    //   _blockdiff: number, _date: string, _state: any ) {
    // const popover = await this.popHistoryController.create({
    //       component: PopHistoryTokenComponent,
    //       cssClass: 'history-popover',
    //       event: ev,
    //       translucent: true,
    //       componentProps: {
    //       address: _addr,
    //       blockNumber: _blkNumber,
    //       transAmount: _amnt,
    //       isBlock: _isBlock,
    //       txpowid: _txpowid,
    //       parent: _parent,
    //       blockdiff: _blockdiff,
    //       date: _date,
    //       state: _state
    // },
    // });
    // return await popover.present();
    // }
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
        this.polledHistorySubscription = this.historyService.getHistory().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (responseData) {
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
        { type: _service_minima_api_service__WEBPACK_IMPORTED_MODULE_1__["MinimaApiService"] },
        { type: _service_history_service__WEBPACK_IMPORTED_MODULE_4__["HistoryService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
    ]; };
    HistoryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-history',
            template: __webpack_require__(/*! raw-loader!./history.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/history/history.page.html"),
            styles: [__webpack_require__(/*! ./history.page.scss */ "./src/app/pages/history/history.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_minima_api_service__WEBPACK_IMPORTED_MODULE_1__["MinimaApiService"],
            _service_history_service__WEBPACK_IMPORTED_MODULE_4__["HistoryService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
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