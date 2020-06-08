(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-history-history-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/history/history.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/history/history.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-app>\n  <ion-header>\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n      <ion-title color=\"primary\">Transaction History</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content>\n\n    <ion-card>\n      <ion-card-header>\n        Recent Activity\n        <!-- Category Segment -->\n      <ion-segment (ionChange)=\"segmentChanged($event, slides)\" [(ngModel)] = \"categories\">\n        <ion-segment-button value=\"0\" class=\"seg\">\n          <ion-label>Transactions</ion-label>\n        </ion-segment-button>\n        <ion-segment-button value=\"1\" class=\"seg\">\n          <ion-label>Tokens Created</ion-label>\n        </ion-segment-button>\n        <ion-segment-button value=\"2\" class=\"seg\">\n        <ion-label>All</ion-label>\n        </ion-segment-button>\n      </ion-segment>\n      </ion-card-header>\n\n  <ion-slides #slides pager=\"false\" [options]=\"sliderOptions\" (ionSlideDidChange)=\"slideChanged(slides)\" (ionSlideDidLoad)=\"slideChanged(slides)\">\n\n  <!-- @@@@@@@@@@@@@@@@@@@@@@@@@@@ Transactions @@@@@@@@@@@@@@@@@@@@@@@@@@@ -->\n  <ion-slide class=\"swiper-slide\">\n    <ion-card-content>\n\n    <ion-text *ngIf=\"isEmpty\">No activities to display.</ion-text>\n\n    <ion-grid *ngFor=\"let transaction of transactions;\">\n      <ion-row *ngIf=\"transactions.length >= 1 && transaction.values[0].name !== 'Create Token';\">\n        <ion-item lines=\"full\" class=\"activity\"\n        (click)=\"presentModal(transaction.txpow.txpowid, \n                  transaction.values[0].amount,\n                  transaction.txpow.body.txn.state,\n                  transaction.txpow.header.block,\n                  transaction.txpow.body.txn.inputs[0].tokenid,\n                  transaction.txpow.header.date,\n                  transaction.txpow.isblock,\n                  transaction.values[0].name)\">\n\n      <!-- TXN Icon -->\n      <ion-col size=\"1\" [hidden]=\"ios\">\n      <ion-icon [name]=\"getTXNType(transaction.values[0].amount)\" size=\"large\"></ion-icon>\n      </ion-col>\n\n      <!-- TXN Date -->\n      <ion-col size=\"2\" fixed=\"true\">\n      <ion-label>\n      <p id=\"day\">\n      {{ transaction.txpow.header.date.substring(8, 10) }}\n      </p>\n      <h1 id=\"month\">\n      {{ transaction.txpow.header.date.substring(4, 7) }} \n      </h1>\n      </ion-label>\n      </ion-col>\n\n      <!-- TXN Description -->\n      <ion-col size=\"4\" fixed=\"true\" [hidden]=\"ios\">\n        <ion-label id=\"transaction\">\n        <h2 class=\"h2-type\">\n        {{ checkTransType(transaction.values[0].amount) }} <span id=\"token-name\">{{ (transaction.values[0].name).substring(0,12) }}</span>\n        </h2>\n        </ion-label>\n      </ion-col>\n\n      <!-- TXN Description -->\n      <ion-col size=\"6\" fixed=\"true\" [hidden]=\"!ios\">\n        <ion-label id=\"transaction\">\n        <h2 class=\"h2-type\">\n        {{ checkTransType(transaction.values[0].amount) }} <span id=\"token-name\">{{ (transaction.values[0].name).substring(0,12) }}</span>\n        </h2>\n        </ion-label>\n      </ion-col>\n      \n\n      <!-- TXN AMOUNT -->\n      <ion-col size=\"4\" fixed=\"true\">\n      <h2 class=\"amount-h2\" *ngIf=\"transaction.values[0].amount.substring(0,1) === '-'\">\n      {{ transaction.values[0].amount + \" \" }} <span style=\"text-transform: uppercase;\"> {{ (transaction.values[0].name).substring(0, 4)}} </span>\n      </h2>\n      <h2 class=\"amount-h2\" *ngIf=\"transaction.values[0].amount.substring(0,1) !== '-'\">\n      {{ \"+\" + transaction.values[0].amount + \" \" }} <span style=\"text-transform: uppercase;\"> {{ (transaction.values[0].name).substring(0, 4)}} </span>\n      </h2>\n      </ion-col>\n\n      <!-- TXN Message -->\n      <ion-col size=\"4\" *ngIf=\"transaction.txpow.body.txn.state.length > 0\" [hidden]=\"ios\">\n      <ion-note *ngIf=\"transaction.txpow.body.txn.state[1].data.length <= 15\" class=\"msg-details\">{{transaction.txpow.body.txn.state[1].data.substring(0, 15)}}</ion-note>\n      <ion-note *ngIf=\"transaction.txpow.body.txn.state[1].data.length > 15\" class=\"msg-details\">{{transaction.txpow.body.txn.state[1].data.substring(0, 8) + \"...\"}}</ion-note>\n      </ion-col>\n    </ion-item>\n\n    </ion-row>\n      </ion-grid>\n        </ion-card-content>\n          </ion-slide>\n\n    <!-- @@@@@@@@@@@@@@@@@@@@@@@@@@@ Token Creation @@@@@@@@@@@@@@@@@@@@@@@@@@@ -->\n    <ion-slide class=\"swiper-slide\">\n      <ion-card-content style=\"width: 100%; text-align: center;\">\n    \n        <ion-text *ngIf=\"tokens.length < 1\">No token activities to display. </ion-text>\n    \n    <ion-grid *ngFor=\"let transaction of transactions;\">\n      <ion-row *ngIf=\"transactions.length >= 1 && transaction.values[0].name === 'Create Token';\">\n        <ion-item lines=\"full\" class=\"activity-tokens\"\n        (click)=\"presentTokenModal(transaction.txpow.txpowid, \n                  transaction.values[0].amount,\n                  transaction.txpow.body.txn.state,\n                  transaction.txpow.header.block,\n                  transaction.txpow.body.txn.inputs[0].tokenid,\n                  transaction.txpow.header.date,\n                  transaction.txpow.isblock,\n                  transaction.values[0].name)\">\n      \n      <!-- TXN Icon -->\n      <ion-col size=\"1\" [hidden]=\"ios\">\n      <ion-icon name=\"brush\" size=\"large\"></ion-icon>\n      </ion-col>\n\n      <!-- TXN Date -->\n      <ion-col size=\"2\" fixed=\"true\">\n      <ion-label>\n      <p id=\"day\">\n      {{ transaction.txpow.header.date.substring(8, 10) }}\n      </p>\n      <h1 id=\"month\">\n      {{ transaction.txpow.header.date.substring(4, 7) }} \n      </h1>\n      </ion-label>\n      </ion-col>\n\n      <!-- TXN Description -->\n      <ion-col size=\"4\" class=\"col-transtype\" fixed=\"true\" [hidden]=\"ios\">\n        <ion-label id=\"transaction\">\n        <h2 class=\"h2-type\">\n        Created a token.\n        </h2>\n        </ion-label>\n      </ion-col>\n      <!-- TXN Description -->\n      <ion-col size=\"5\" class=\"col-transtype\" fixed=\"true\" [hidden]=\"!ios\">\n        <ion-label id=\"transaction\">\n        <h2 class=\"h2-type\">\n        Created a token\n        </h2>\n        </ion-label>\n      </ion-col>\n\n\n      <!-- TXN AMOUNT -->\n      <ion-col size=\"4\" fixed=\"true\">\n      <h2 class=\"amount-h2\" *ngIf=\"transaction.values[0].amount.substring(0,1) === '-'\">\n      {{ transaction.values[0].amount + \" \" }} <span style=\"text-transform: uppercase;\"> MINI </span>\n      </h2>\n      <h2 class=\"amount-h2\" *ngIf=\"transaction.values[0].amount.substring(0,1) !== '-'\">\n      {{ \"+\" + transaction.values[0].amount + \" \" }} <span style=\"text-transform: uppercase;\"> MINI </span>\n      </h2>\n      </ion-col>\n\n    </ion-item>\n      </ion-row>\n      </ion-grid>\n        </ion-card-content>\n         </ion-slide>\n\n    <!-- @@@@@@@@@@@@@@@@@@@@@@@@@ All @@@@@@@@@@@@@@@@@@@@@@@@@@@@@ -->\n    <ion-slide class=\"swiper-slide\">\n      <ion-card-content>\n\n      <ion-text *ngIf=\"isEmpty\">No activities to display.</ion-text>\n\n    <ion-grid *ngFor=\"let transaction of transactions;\">\n      <ion-row *ngIf=\"transactions.length >= 1 && transaction.values[0].name !== 'Create Token';\">\n        <ion-item lines=\"full\" class=\"activity\"\n        (click)=\"presentModal(transaction.txpow.txpowid, \n                  transaction.values[0].amount,\n                  transaction.txpow.body.txn.state,\n                  transaction.txpow.header.block,\n                  transaction.txpow.body.txn.inputs[0].tokenid,\n                  transaction.txpow.header.date,\n                  transaction.txpow.isblock,\n                  transaction.values[0].name)\">\n\n      <!-- TXN Icon -->\n      <ion-col size=\"1\" [hidden]=\"ios\">\n      <ion-icon [name]=\"getTXNType(transaction.values[0].amount)\" size=\"large\"></ion-icon>\n      </ion-col>\n\n      <!-- TXN Date -->\n      <ion-col size=\"2\" class=\"col-month\" fixed=\"true\">\n      <ion-label>\n      <p id=\"day\">\n      {{ transaction.txpow.header.date.substring(8, 10) }}\n      </p>\n      <h1 id=\"month\">\n      {{ transaction.txpow.header.date.substring(4, 7) }} \n      </h1>\n      </ion-label>\n      </ion-col>\n\n      <!-- TXN Description -->\n      <ion-col size=\"4\" fixed=\"true\" [hidden]=\"ios\">\n        <ion-label id=\"transaction\">\n        <h2 class=\"h2-type\">\n        {{ checkTransType(transaction.values[0].amount) }} <span id=\"token-name\">{{ (transaction.values[0].name).substring(0,12) }}</span>\n        </h2>\n        </ion-label>\n      </ion-col>\n\n      <!-- TXN Description -->\n      <ion-col size=\"6\" fixed=\"true\" [hidden]=\"!ios\">\n        <ion-label id=\"transaction\">\n        <h2 class=\"h2-type\">\n        {{ checkTransType(transaction.values[0].amount) }} <span id=\"token-name\">{{ (transaction.values[0].name).substring(0,12) }}</span>\n        </h2>\n        </ion-label>\n      </ion-col>\n\n      <!-- TXN AMOUNT -->\n      <ion-col size=\"4\" fixed=\"true\">\n      <h2 class=\"amount-h2\" *ngIf=\"transaction.values[0].amount.substring(0,1) === '-'\">\n      {{ transaction.values[0].amount + \" \" }} <span style=\"text-transform: uppercase;\"> {{ (transaction.values[0].name).substring(0, 4)}} </span>\n      </h2>\n      <h2 class=\"amount-h2\" *ngIf=\"transaction.values[0].amount.substring(0,1) !== '-'\">\n      {{ \"+\" + transaction.values[0].amount + \" \" }} <span style=\"text-transform: uppercase;\"> {{ (transaction.values[0].name).substring(0, 4)}} </span>\n      </h2>\n      </ion-col>\n\n      <!-- TXN Message -->\n      <ion-col size=\"4\" *ngIf=\"transaction.txpow.body.txn.state.length > 0\" [hidden]=\"ios\">\n      <ion-note *ngIf=\"transaction.txpow.body.txn.state[1].data.length <= 15\" class=\"msg-details\">{{transaction.txpow.body.txn.state[1].data.substring(0, 15)}}</ion-note>\n      <ion-note *ngIf=\"transaction.txpow.body.txn.state[1].data.length > 15\" class=\"msg-details\">{{transaction.txpow.body.txn.state[1].data.substring(0, 15) + \"...\"}}</ion-note>\n      </ion-col>\n    </ion-item>\n    <!-- Tokens -->\n    </ion-row>\n\n    <ion-row *ngIf=\"transactions.length >= 1 && transaction.values[0].name === 'Create Token';\">\n    <ion-item\n    lines=\"full\"\n    class=\"activity-tokens\"\n    (click)=\"presentTokenModal(transaction.txpow.txpowid, \n                  transaction.values[0].amount,\n                  transaction.txpow.body.txn.state,\n                  transaction.txpow.header.block,\n                  transaction.txpow.body.txn.inputs[0].tokenid,\n                  transaction.txpow.header.date,\n                  transaction.txpow.isblock,\n                  transaction.values[0].name)\">\n      <!-- TXN Icon -->\n      <ion-col size=\"1\" [hidden]=\"ios\">\n      <ion-icon name=\"brush\" size=\"large\"></ion-icon>\n      </ion-col>\n\n      <!-- TXN Date -->\n      <ion-col size=\"2\" class=\"col-month\" fixed=\"true\">\n      <ion-label>\n      <p id=\"day\">\n      {{ transaction.txpow.header.date.substring(8, 10) }}\n      </p>\n      <h1 id=\"month\">\n      {{ transaction.txpow.header.date.substring(4, 7) }} \n      </h1>\n      </ion-label>\n      </ion-col>\n\n      <!-- TXN Description -->\n      <ion-col size=\"5\" class=\"col-transtype\" fixed=\"true\">\n        <ion-label id=\"transaction\">\n        <h2 class=\"h2-type\">\n        Created a token\n        </h2>\n        </ion-label>\n      </ion-col>\n\n      <!-- TXN AMOUNT -->\n      <ion-col size=\"4\" fixed=\"true\">\n      <h2 class=\"amount-h2\" *ngIf=\"transaction.values[0].amount.substring(0,1) === '-'\">\n      {{ transaction.values[0].amount + \" \" }} <span style=\"text-transform: uppercase;\"> MINI </span>\n      </h2>\n      <h2 class=\"amount-h2\" *ngIf=\"transaction.values[0].amount.substring(0,1) !== '-'\">\n      {{ \"+\" + transaction.values[0].amount + \" \" }} <span style=\"text-transform: uppercase;\"> MINI </span>\n      </h2>\n      </ion-col>\n    \n    </ion-item>\n      </ion-row>\n        </ion-grid>\n          </ion-card-content>\n            </ion-slide>\n              </ion-slides>\n\n\n\n  <!-- SKELETON FOR UX LOADING -->\n   \n  \n  <ion-grid *ngFor=\"let length of t_summarySpoof\">\n    <ion-row *ngIf=\"length.values[0].name !== 'Create Token' && transactions.length < 1\">\n      <ion-item  class=\"activity-skeleton\" lines=\"full\">\n\n    <!-- TXN Icon Skeleton -->\n    <ion-col size=\"1\" [hidden]=\"ios\">\n    <ion-skeleton-text animated style=\"width: 50%; height: 50%;\"></ion-skeleton-text>\n    </ion-col>\n\n    <!-- TXN Date Skeleton -->\n    <ion-col size=\"2\" class=\"col-month\" fixed=\"true\">\n      <ion-label>\n      <p id=\"day\">\n        <ion-skeleton-text animated style=\"width: 5%\"></ion-skeleton-text>\n      </p>\n      <h1 id=\"month\">\n        <ion-skeleton-text animated style=\"width: 10%; height: 10%;\"></ion-skeleton-text>\n      </h1>\n      </ion-label>\n    </ion-col>\n  <!-- TXN Details Skeleton -->\n  <ion-col size=\"2\"class=\"col-transtype\" fixed=\"true\">\n    <ion-label id=\"transaction\">\n      <h2 class=\"h2-type\">\n        <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n      </h2>\n    </ion-label>\n  </ion-col>\n  <!-- TXN Amount Skeleton-->\n  <ion-col size=\"6\" class=\"col-transamnt\" fixed=\"true\">\n    <ion-label class=\"amount\">\n      <h2 class=\"amount-h2\">\n        <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n      </h2>\n    </ion-label> \n  </ion-col>\n\n  <!-- TXN Message Skeleton -->\n  <ion-col size=\"4\" [hidden]=\"ios\">\n  <ion-skeleton-text animated style=\"width: 50%; height: 10%;\"></ion-skeleton-text>\n  </ion-col>\n\n  </ion-item>\n    </ion-row>\n      </ion-grid>\n        </ion-card>\n  \n  \n</ion-content>\n  </ion-app>"

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

module.exports = "ion-card-header {\n  --background: var(--ion-background-color, #f2f2f2);\n}\n\nion-card-content {\n  width: 100%;\n  text-align: center;\n}\n\nion-segment {\n  margin-top: 5px;\n  padding: 0px 10px 0px 10px;\n}\n\nion-card-content ion-text {\n  margin-top: 10px;\n}\n\nion-row {\n  padding: 2px;\n}\n\nion-grid {\n  padding: 0px;\n}\n\nion-row:hover {\n  background: var(--ion-background-color, #f2f2f2);\n}\n\n.list-md {\n  padding: 0px 0px 0px 0px !important;\n}\n\n/** @@@@@@ TXN Details @@@@@@ **/\n\n.date {\n  display: block;\n}\n\n.amount {\n  margin-left: 120px;\n}\n\n.ios .amount {\n  margin-left: 0px;\n}\n\n.md .amount {\n  margin-left: 0px;\n}\n\n.activity {\n  width: 100%;\n  border-left: 2px solid #07ABC8;\n}\n\n.activity-tokens {\n  width: 100%;\n  border-left: 2px solid #6dcc92;\n}\n\n.divider {\n  padding: 5px;\n}\n\n.activity-skeleton {\n  width: 100%;\n  border-left: 2px solid #f2f2f2;\n}\n\nion-row {\n  width: 90%;\n}\n\n.activity div h1 {\n  font-size: 14px;\n  text-transform: uppercase;\n}\n\n.amount {\n  text-align: center;\n}\n\n#month {\n  font-weight: bolder;\n  font-size: 20px;\n  color: #00AAC7;\n}\n\n#day {\n  font-weight: bolder;\n  font-size: 22px;\n  color: #FF671D;\n}\n\n#token-name {\n  font-weight: bolder;\n  color: #FF671D;\n}\n\n.h2-type {\n  font-size: 20px;\n}\n\n.p-tokenid {\n  font-weight: bolder;\n  font-size: 18px;\n}\n\n.amount-p {\n  font-weight: bolder;\n  font-size: 20px;\n}\n\n.amount-h2 {\n  font-weight: bolder;\n  font-size: 20px;\n}\n\n.msg-details {\n  font-size: 16px;\n}\n\n/** @@@@@@@@@@@@@@@@@ iOS @@@@@@@@@@@@@@@@@@@ */\n\n.ios ion-card-content {\n  -webkit-padding-start: 0px;\n          padding-inline-start: 0px;\n  -webkit-padding-end: 0px;\n          padding-inline-end: 0px;\n}\n\n.ios #month {\n  font-size: 13px;\n  color: #00AAC7;\n}\n\n.ios #day {\n  font-size: 12px;\n  color: #FF671D;\n}\n\n.ios .h2-type {\n  font-size: 14px;\n}\n\n.ios .p-tokenid {\n  font-size: 12px;\n}\n\n.ios .amount-p {\n  font-size: 14px;\n}\n\n.ios .amount-h2 {\n  font-size: 14px;\n}\n\n/** @@@@@@@@@@@@@@@@@ Material Design @@@@@@@@@@@@@@@@@@@ */\n\n.md ion-card-content {\n  -webkit-padding-start: 0px;\n          padding-inline-start: 0px;\n  -webkit-padding-end: 0px;\n          padding-inline-end: 0px;\n}\n\n.md #month {\n  font-size: 14px;\n  color: #00AAC7;\n}\n\n.md #day {\n  font-size: 12px;\n  color: #FF671D;\n}\n\n.md .h2-type {\n  font-size: 14px;\n}\n\n.md .p-tokenid {\n  font-size: 12px;\n}\n\n.md .amount-p {\n  font-size: 14px;\n}\n\n.md .amount-h2 {\n  font-size: 14px;\n}\n\n.md .seg {\n  font-size: 12px;\n}\n\n.no-activity-item {\n  padding-left: 2%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGlhcy9Qcm9qZWN0cy9taW5pbWFjb3JlL21vYmlsZS1hcHAtZnJvbnQtZW5kL2FwcC9zcmMvYXBwL3BhZ2VzL2hpc3RvcnkvaGlzdG9yeS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2hpc3RvcnkvaGlzdG9yeS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrREFBQTtBQ0NKOztBRENBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0FDRUo7O0FEQUE7RUFDSSxlQUFBO0VBQ0EsMEJBQUE7QUNHSjs7QUREQTtFQUNJLGdCQUFBO0FDSUo7O0FERkE7RUFDSSxZQUFBO0FDS0o7O0FERkE7RUFDSSxZQUFBO0FDS0o7O0FESEE7RUFDSSxnREFBQTtBQ01KOztBREpBO0VBQ0ksbUNBQUE7QUNPSjs7QURKQSxnQ0FBQTs7QUFDQTtFQUNJLGNBQUE7QUNPSjs7QURMQTtFQUNJLGtCQUFBO0FDUUo7O0FETkE7RUFDSSxnQkFBQTtBQ1NKOztBRFBBO0VBQ0ksZ0JBQUE7QUNVSjs7QURSQTtFQUNJLFdBQUE7RUFDQSw4QkFBQTtBQ1dKOztBRFRBO0VBQ0ksV0FBQTtFQUNBLDhCQUFBO0FDWUo7O0FEVkE7RUFDSSxZQUFBO0FDYUo7O0FEWEE7RUFDSSxXQUFBO0VBQ0EsOEJBQUE7QUNjSjs7QURaQTtFQUNJLFVBQUE7QUNlSjs7QURiQTtFQUNJLGVBQUE7RUFDQSx5QkFBQTtBQ2dCSjs7QURkQTtFQUNJLGtCQUFBO0FDaUJKOztBRGZBO0VBQ0ksbUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ2tCSjs7QURoQkE7RUFDSSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDbUJKOztBRGpCQTtFQUNJLG1CQUFBO0VBQ0EsY0FBQTtBQ29CSjs7QURqQkE7RUFDSSxlQUFBO0FDb0JKOztBRGxCQTtFQUNJLG1CQUFBO0VBQ0EsZUFBQTtBQ3FCSjs7QURuQkE7RUFDSSxtQkFBQTtFQUNBLGVBQUE7QUNzQko7O0FEcEJBO0VBQ0ksbUJBQUE7RUFDQSxlQUFBO0FDdUJKOztBRHBCQTtFQUNJLGVBQUE7QUN1Qko7O0FEcEJBLCtDQUFBOztBQUNBO0VBQ0ksMEJBQUE7VUFBQSx5QkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7QUN1Qko7O0FEckJBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUN3Qko7O0FEdEJBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUN5Qko7O0FEdEJBO0VBQ0ksZUFBQTtBQ3lCSjs7QUR2QkE7RUFDSSxlQUFBO0FDMEJKOztBRHhCQTtFQUNJLGVBQUE7QUMyQko7O0FEekJBO0VBQ0ksZUFBQTtBQzRCSjs7QUR6QkEsMkRBQUE7O0FBQ0E7RUFDSSwwQkFBQTtVQUFBLHlCQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtBQzRCSjs7QUQxQkE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQzZCSjs7QUQzQkE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQzhCSjs7QUQzQkE7RUFDSSxlQUFBO0FDOEJKOztBRDVCQTtFQUNJLGVBQUE7QUMrQko7O0FEN0JBO0VBQ0ksZUFBQTtBQ2dDSjs7QUQ5QkE7RUFDSSxlQUFBO0FDaUNKOztBRC9CQTtFQUNJLGVBQUE7QUNrQ0o7O0FEL0JBO0VBQ0ksZ0JBQUE7QUNrQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9oaXN0b3J5L2hpc3RvcnkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmQtaGVhZGVyIHtcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZjJmMmYyKTtcbn1cbmlvbi1jYXJkLWNvbnRlbnQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbmlvbi1zZWdtZW50IHtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgcGFkZGluZzogMHB4IDEwcHggMHB4IDEwcHg7XG59XG5pb24tY2FyZC1jb250ZW50IGlvbi10ZXh0IHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuaW9uLXJvdyB7XG4gICAgcGFkZGluZzogMnB4O1xufSBcblxuaW9uLWdyaWQge1xuICAgIHBhZGRpbmc6IDBweDtcbn1cbmlvbi1yb3c6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZjJmMmYyKTtcbn1cbi5saXN0LW1kIHtcbiAgICBwYWRkaW5nOiAwcHggMHB4IDBweCAwcHggIWltcG9ydGFudDtcbn1cblxuLyoqIEBAQEBAQCBUWE4gRGV0YWlscyBAQEBAQEAgKiovXG4uZGF0ZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG4uYW1vdW50IHtcbiAgICBtYXJnaW4tbGVmdDogMTIwcHg7XG59XG4uaW9zIC5hbW91bnQge1xuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XG59XG4ubWQgLmFtb3VudCB7XG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcbn1cbi5hY3Rpdml0eSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjMDdBQkM4O1xufVxuLmFjdGl2aXR5LXRva2VucyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCByZ2IoMTA5LCAyMDQsIDE0Nik7XG59XG4uZGl2aWRlciB7XG4gICAgcGFkZGluZzogNXB4O1xufVxuLmFjdGl2aXR5LXNrZWxldG9uIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkICNmMmYyZjI7XG59XG5pb24tcm93IHtcbiAgICB3aWR0aDogOTAlO1xufVxuLmFjdGl2aXR5IGRpdiBoMSB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG4uYW1vdW50IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4jbW9udGgge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGNvbG9yOiAjMDBBQUM3O1xufVxuI2RheSB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICBmb250LXNpemU6IDIycHg7XG4gICAgY29sb3I6ICNGRjY3MUQ7XG59XG4jdG9rZW4tbmFtZSB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICBjb2xvcjogI0ZGNjcxRDtcbn1cblxuLmgyLXR5cGUge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbn1cbi5wLXRva2VuaWQge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICAgZm9udC1zaXplOiAxOHB4O1xufSAgIFxuLmFtb3VudC1wIHtcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbn1cbi5hbW91bnQtaDIge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4ubXNnLWRldGFpbHMge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLyoqIEBAQEBAQEBAQEBAQEBAQEBAIGlPUyBAQEBAQEBAQEBAQEBAQEBAQEBAICovXG4uaW9zIGlvbi1jYXJkLWNvbnRlbnQge1xuICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAwcHg7XG4gICAgcGFkZGluZy1pbmxpbmUtZW5kOiAwcHg7XG59XG4uaW9zICNtb250aCB7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGNvbG9yOiAjMDBBQUM3O1xufVxuLmlvcyAjZGF5IHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgY29sb3I6ICNGRjY3MUQ7XG59XG5cbi5pb3MgLmgyLXR5cGUge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5pb3MgLnAtdG9rZW5pZCB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xufSAgIFxuLmlvcyAuYW1vdW50LXAge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5pb3MgLmFtb3VudC1oMiB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4vKiogQEBAQEBAQEBAQEBAQEBAQEAgTWF0ZXJpYWwgRGVzaWduIEBAQEBAQEBAQEBAQEBAQEBAQEAgKi9cbi5tZCBpb24tY2FyZC1jb250ZW50IHtcbiAgICBwYWRkaW5nLWlubGluZS1zdGFydDogMHB4O1xuICAgIHBhZGRpbmctaW5saW5lLWVuZDogMHB4O1xufVxuLm1kICNtb250aCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiAjMDBBQUM3O1xufVxuLm1kICNkYXkge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBjb2xvcjogI0ZGNjcxRDtcbn1cblxuLm1kIC5oMi10eXBlIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG59XG4ubWQgLnAtdG9rZW5pZCB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xufSAgIFxuLm1kIC5hbW91bnQtcCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuLm1kIC5hbW91bnQtaDIge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5tZCAuc2VnIHtcbiAgICBmb250LXNpemU6IDEycHg7XG59XG5cbi5uby1hY3Rpdml0eS1pdGVtIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDIlO1xufVxuIiwiaW9uLWNhcmQtaGVhZGVyIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwgI2YyZjJmMik7XG59XG5cbmlvbi1jYXJkLWNvbnRlbnQge1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5pb24tc2VnbWVudCB7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgcGFkZGluZzogMHB4IDEwcHggMHB4IDEwcHg7XG59XG5cbmlvbi1jYXJkLWNvbnRlbnQgaW9uLXRleHQge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG5pb24tcm93IHtcbiAgcGFkZGluZzogMnB4O1xufVxuXG5pb24tZ3JpZCB7XG4gIHBhZGRpbmc6IDBweDtcbn1cblxuaW9uLXJvdzpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZjJmMmYyKTtcbn1cblxuLmxpc3QtbWQge1xuICBwYWRkaW5nOiAwcHggMHB4IDBweCAwcHggIWltcG9ydGFudDtcbn1cblxuLyoqIEBAQEBAQCBUWE4gRGV0YWlscyBAQEBAQEAgKiovXG4uZGF0ZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uYW1vdW50IHtcbiAgbWFyZ2luLWxlZnQ6IDEyMHB4O1xufVxuXG4uaW9zIC5hbW91bnQge1xuICBtYXJnaW4tbGVmdDogMHB4O1xufVxuXG4ubWQgLmFtb3VudCB7XG4gIG1hcmdpbi1sZWZ0OiAwcHg7XG59XG5cbi5hY3Rpdml0eSB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItbGVmdDogMnB4IHNvbGlkICMwN0FCQzg7XG59XG5cbi5hY3Rpdml0eS10b2tlbnMge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjNmRjYzkyO1xufVxuXG4uZGl2aWRlciB7XG4gIHBhZGRpbmc6IDVweDtcbn1cblxuLmFjdGl2aXR5LXNrZWxldG9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgI2YyZjJmMjtcbn1cblxuaW9uLXJvdyB7XG4gIHdpZHRoOiA5MCU7XG59XG5cbi5hY3Rpdml0eSBkaXYgaDEge1xuICBmb250LXNpemU6IDE0cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5hbW91bnQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbiNtb250aCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6ICMwMEFBQzc7XG59XG5cbiNkYXkge1xuICBmb250LXdlaWdodDogYm9sZGVyO1xuICBmb250LXNpemU6IDIycHg7XG4gIGNvbG9yOiAjRkY2NzFEO1xufVxuXG4jdG9rZW4tbmFtZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIGNvbG9yOiAjRkY2NzFEO1xufVxuXG4uaDItdHlwZSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLnAtdG9rZW5pZCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLmFtb3VudC1wIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4uYW1vdW50LWgyIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4ubXNnLWRldGFpbHMge1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi8qKiBAQEBAQEBAQEBAQEBAQEBAQCBpT1MgQEBAQEBAQEBAQEBAQEBAQEBAQCAqL1xuLmlvcyBpb24tY2FyZC1jb250ZW50IHtcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDBweDtcbiAgcGFkZGluZy1pbmxpbmUtZW5kOiAwcHg7XG59XG5cbi5pb3MgI21vbnRoIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogIzAwQUFDNztcbn1cblxuLmlvcyAjZGF5IHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogI0ZGNjcxRDtcbn1cblxuLmlvcyAuaDItdHlwZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmlvcyAucC10b2tlbmlkIHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uaW9zIC5hbW91bnQtcCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmlvcyAuYW1vdW50LWgyIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4vKiogQEBAQEBAQEBAQEBAQEBAQEAgTWF0ZXJpYWwgRGVzaWduIEBAQEBAQEBAQEBAQEBAQEBAQEAgKi9cbi5tZCBpb24tY2FyZC1jb250ZW50IHtcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDBweDtcbiAgcGFkZGluZy1pbmxpbmUtZW5kOiAwcHg7XG59XG5cbi5tZCAjbW9udGgge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjMDBBQUM3O1xufVxuXG4ubWQgI2RheSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICNGRjY3MUQ7XG59XG5cbi5tZCAuaDItdHlwZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLm1kIC5wLXRva2VuaWQge1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5tZCAuYW1vdW50LXAge1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5tZCAuYW1vdW50LWgyIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4ubWQgLnNlZyB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLm5vLWFjdGl2aXR5LWl0ZW0ge1xuICBwYWRkaW5nLWxlZnQ6IDIlO1xufSJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_history_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/history.service */ "./src/app/service/history.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _components_historymodal_historymodal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/historymodal/historymodal.page */ "./src/app/components/historymodal/historymodal.page.ts");
/* harmony import */ var _components_historytokenmodal_historytokenmodal_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/historytokenmodal/historytokenmodal.page */ "./src/app/components/historytokenmodal/historytokenmodal.page.ts");








let HistoryPage = class HistoryPage {
    constructor(api, historyService, modalController, platform) {
        this.api = api;
        this.historyService = historyService;
        this.modalController = modalController;
        this.platform = platform;
        this.isEmpty = true;
        this.categories = 0;
        this.ios = false;
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
    ngOnInit() {
        if (this.platform.is('ios') || this.platform.is('android')) {
            this.ios = true;
        }
    }
    ionViewDidEnter() {
        this.pullInHistoryLength(); // get length for skeleton
        setTimeout(() => {
            this.pullInHistorySummary(); // subscribe and polls history
        }, 500);
    }
    ionViewDidLeave() {
        this.polledHistorySubscription.unsubscribe();
    }
    /** Modals */
    presentModal(_txpowid, _amount, _message, _block, _tokenid, _date, _isBlock, _name) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _components_historymodal_historymodal_page__WEBPACK_IMPORTED_MODULE_6__["HistorymodalPage"],
                componentProps: {
                    'TXPOW_ID': _txpowid,
                    'Amount': _amount,
                    'Message': _message,
                    'Block': _block,
                    'TokenID': _tokenid,
                    'Date': _date,
                    'isBlock': _isBlock,
                    'TokenName': _name
                }
            });
            return yield modal.present();
        });
    }
    presentTokenModal(_txpowid, _amount, _message, _block, _tokenid, _date, _isBlock, _name) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _components_historytokenmodal_historytokenmodal_page__WEBPACK_IMPORTED_MODULE_7__["HistorytokenmodalPage"],
                componentProps: {
                    'TXPOW_ID': _txpowid,
                    'Amount': _amount,
                    'Message': _message,
                    'Block': _block,
                    'TokenID': _tokenid,
                    'Date': _date,
                    'isBlock': _isBlock,
                    'TokenName': _name
                }
            });
            return yield modal.present();
        });
    }
    /** MISC Functions */
    // Check if we're receiving or sending
    checkTransType(amount) {
        if (amount.substring(0, 1) === "-") {
            return "Sent";
        }
        else {
            return "Received";
        }
    }
    getTXNType(amount) {
        if (amount.substring(0, 1) === "-") {
            return "arrow-round-back";
        }
        else {
            return "arrow-round-forward";
        }
    }
    //LATER USE, history order
    getUserOrderPref() {
        if (true) {
            return 't_summaryArr.slice().reverse()';
        }
        else {}
    }
    // Categories Segment
    segmentChanged(ev, slides) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.selectedSlide = slides;
            yield this.selectedSlide.slideTo(this.categories);
        });
    }
    // Slide, after segment button clicked..
    slideChanged(slides) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.selectedSlide = slides;
            slides.getActiveIndex().then(selectedValue => {
                this.categories = selectedValue;
            });
        });
    }
    /** API CALLS */
    // get length of history
    pullInHistoryLength() {
        this.historyService.getHistory().subscribe((res) => {
            this.t_summarySpoof = res.response.history;
            /** Check if we have any txn */
            if (this.t_summarySpoof.length > 0) {
                this.isEmpty = false;
            }
        });
    }
    // Get all users activities+transactions history
    pullInHistorySummary() {
        this.polledHistorySubscription = this.historyService.getHistory().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(responseData => {
            console.log(responseData);
            let historyArr = [];
            for (const key in responseData.response) {
                let history = responseData.response;
                if (history[key]) {
                    //Transaction description summary
                    historyArr = history[key];
                    history.history.forEach((element) => {
                        if (element.values[0].name === 'Create Token') {
                            this.tokens.push(element);
                        }
                    });
                }
                return historyArr;
            }
        })).subscribe(responseData => {
            if (this.lastJSON !== JSON.stringify(responseData)) {
                this.transactions = responseData;
                this.lastJSON = JSON.stringify(responseData);
            }
        });
    }
};
HistoryPage.ctorParameters = () => [
    { type: _service_minima_api_service__WEBPACK_IMPORTED_MODULE_1__["MinimaApiService"] },
    { type: _service_history_service__WEBPACK_IMPORTED_MODULE_4__["HistoryService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] }
];
HistoryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-history',
        template: __webpack_require__(/*! raw-loader!./history.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/history/history.page.html"),
        styles: [__webpack_require__(/*! ./history.page.scss */ "./src/app/pages/history/history.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_minima_api_service__WEBPACK_IMPORTED_MODULE_1__["MinimaApiService"], _service_history_service__WEBPACK_IMPORTED_MODULE_4__["HistoryService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]])
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
        // let apiUrl = this.host + route; // this.host+'route' = "127.0.0.1:8999/'balance'"
        // let history$ = this.http.get(apiUrl);
        const historyObservable = rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"].create(observer => {
            Minima.cmd('history', function (res) {
                observer.next(res);
            });
        });
        let history$ = historyObservable;
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