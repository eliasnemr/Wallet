(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-history-history-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/history/history.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/history/history.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-app>\n  <ion-header>\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-menu-button class=\"menu-icon\"></ion-menu-button>\n        </ion-buttons>\n      <ion-title class=\"large-text\">Transaction History</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content>\n\n  <ion-card>\n  \n  <ion-card-header>\n  <!-- Category Segment -->\n  <ion-segment (ionChange)=\"segmentChanged($event, slides)\" [(ngModel)] = \"categories\">\n    <ion-segment-button value=\"0\" class=\"seg\">\n      <ion-label>Transactions</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"1\" class=\"seg\">\n      <ion-label>Tokens</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"2\" class=\"seg\">\n    <ion-label>All</ion-label>\n    </ion-segment-button>\n  </ion-segment>\n  </ion-card-header>\n\n  <ion-slides #slides \n              pager=\"false\"\n             [options]=\"sliderOptions\" \n             (ionSlideDidChange)=\"slideChanged(slides)\" \n             (ionSlideDidLoad)=\"slideChanged(slides)\">\n\n  <!-- @@@@@@@@@@@@@@@@@@@@@@@@@@@ Transactions @@@@@@@@@@@@@@@@@@@@@@@@@@@ -->\n  <ion-slide>\n    <ion-card-content>\n    <!-- NO TRANSACTIONS -->\n    <ion-text *ngIf=\"isEmpty\" class=\"medium-text\">No activities to display.</ion-text>\n\n    <span *ngFor=\"let transaction of transactions;\">\n    <ion-grid>\n      <ion-row *ngIf=\"transactions.length >= 1 && transaction.values[0].name !== 'Create Token';\">\n        <ion-item \n        lines=\"full\" \n        class=\"activity\"\n        (click)=\"presentModal(transaction.txpow.txpowid, \n                  transaction.values[0].amount,\n                  transaction.txpow.body.txn.state,\n                  transaction.txpow.header.block,\n                  transaction.txpow.body.txn.inputs[0].tokenid,\n                  transaction.txpow.header.date,\n                  transaction.txpow.isblock,\n                  transaction.values[0].name,\n                  transaction.txpow.body.txn.outputs[0].address)\">\n\n      <!-- TXN Icon -- desktop only -->\n      <ion-col size=\"1\" [hidden]=\"ios\">\n        <ion-icon [name]=\"getTXNType(transaction.values[0].amount)\" class=\"large-text\"></ion-icon>\n      </ion-col>\n\n      <!-- TXN Date -->\n      <ion-col size=\"2\" fixed=\"true\">\n      <span>\n      <p class=\"small-text\" id=\"day\">\n      {{ transaction.txpow.header.date.substring(8, 10) }}\n      </p>\n      <h1 class=\"medium-text\" id=\"month\">\n      {{ transaction.txpow.header.date.substring(4, 7) }} \n      </h1>\n      </span>\n      </ion-col>\n\n\n      <!-- If it's minima do this.. -->\n        <!-- TXN Description -->\n      <ion-col *ngIf=\"!transaction.values[0].name.name\" size=\"4\" fixed=\"true\" [hidden]=\"ios\">\n        <span class=\"medium-text\" *ngIf=\"transaction.values[0].amount.substring(0,1) == '-'\"> \n          Sent Minima\n        </span>\n\n        <span class=\"medium-text\" *ngIf=\"transaction.values[0].amount.substring(0,1) !== '-'\">\n          Received Minima\n        </span>\n      </ion-col>\n\n      <!-- TXN Description -->\n      <ion-col *ngIf=\"!transaction.values[0].name.name\" size=\"6\" fixed=\"true\" [hidden]=\"!ios\">\n        <span class=\"medium-text\" *ngIf=\"transaction.values[0].amount.substring(0,1) == '-'\"> \n          Sent Minima\n        </span>\n\n        <span class=\"medium-text\" *ngIf=\"transaction.values[0].amount.substring(0,1) !== '-'\">\n          Received Minima\n        </span>\n      </ion-col>\n\n      <!-- If it's a TOKEN.. do this.. -->\n        <!-- TXN Description -->\n      <ion-col *ngIf=\"transaction.values[0].name.name\" size=\"4\" fixed=\"true\" [hidden]=\"ios\">\n        <span class=\"medium-text\" *ngIf=\"transaction.values[0].amount.substring(0,1) == '-'\"> \n          Sent {{ transaction.values[0].name.name }}\n        </span>\n\n        <span class=\"medium-text\" *ngIf=\"transaction.values[0].amount.substring(0,1) !== '-'\">\n          Received {{ transaction.values[0].name.name }}\n        </span>\n      </ion-col>\n\n      <!-- TXN Description -->\n      <ion-col *ngIf=\"transaction.values[0].name.name\" size=\"6\" fixed=\"true\" [hidden]=\"!ios\">\n        <span class=\"medium-text\" *ngIf=\"transaction.values[0].amount.substring(0,1) == '-'\"> \n          Sent {{ transaction.values[0].name.name }}\n        </span>\n\n        <span class=\"medium-text\" *ngIf=\"transaction.values[0].amount.substring(0,1) !== '-'\">\n          Received {{ transaction.values[0].name.name }}\n        </span>\n      </ion-col>\n      \n\n      <!-- TXN AMOUNT -->\n      <ion-col size=\"4\" fixed=\"true\">\n        <span  *ngIf=\"transaction.values[0].amount.substring(0,1) == '-'\"> \n          <h2 class=\"negative medium-text\">{{ transaction.values[0].amount}}</h2>\n        </span>\n\n        <span  *ngIf=\"transaction.values[0].amount.substring(0,1) !== '-'\">\n          <h2 class=\"positive medium-text\">{{ \"+\"+ transaction.values[0].amount}}</h2>\n        </span>\n      </ion-col>\n\n      <!-- TXN Message -->\n      <ion-col size=\"4\" class=\"medium-text\" *ngIf=\"transaction.txpow.body.txn.state.length > 0\" [hidden]=\"ios\">\n      <p *ngIf=\"transaction.txpow.body.txn.state[1].data.length <= 15\" class=\"msg-details\">{{transaction.txpow.body.txn.state[1].data.substring(0, 15)}}</p>\n      <p *ngIf=\"transaction.txpow.body.txn.state[1].data.length > 15\" class=\"msg-details\">{{transaction.txpow.body.txn.state[1].data.substring(0, 8) + \"...\"}}</p>\n      </ion-col>\n    </ion-item>\n\n    </ion-row>\n      </ion-grid>\n      </span>\n        </ion-card-content>\n          </ion-slide>\n\n    <!-- @@@@@@@@@@@@@@@@@@@@@@@@@@@ Token Creation @@@@@@@@@@@@@@@@@@@@@@@@@@@ -->\n    <ion-slide>\n      <ion-card-content style=\"width: 100%; text-align: center;\">\n    \n        <ion-text *ngIf=\"tokens.length < 1\">No token activities to display. </ion-text>\n    \n    <span *ngIf=\"tokens.length > 0\">\n    <ion-grid *ngFor=\"let transaction of tokens;\">\n      <ion-row *ngIf=\"transactions.length >= 1 && transaction.values[0].name === 'Create Token';\">\n        <ion-item lines=\"full\" class=\"activity-tokens\"\n        (click)=\"presentTokenModal(transaction.txpow.txpowid, \n                  transaction.values[0].amount,\n                  transaction.txpow.body.txn.state,\n                  transaction.txpow.header.block,\n                  transaction.txpow.body.txn.tokengen.tokenid,\n                  transaction.txpow.header.date,\n                  transaction.txpow.isblock,\n                  transaction.values[0].name,\n                  transaction.txpow.body.txn.tokengen.token,\n                  transaction.txpow.body.txn.tokengen.total,\n                  transaction.txpow.body.txn.tokengen.description)\">\n      \n      <!-- TXN Icon -->\n      <ion-col size=\"1\" [hidden]=\"ios\">\n      <ion-icon name=\"brush\" class=\"large-text\"></ion-icon>\n      </ion-col>\n\n      <!-- TXN Date -->\n      <ion-col size=\"2\" fixed=\"true\">\n      <span>\n      <p id=\"day\">\n      {{ transaction.txpow.header.date.substring(8, 10) }}\n      </p>\n      <h1 id=\"month\">\n      {{ transaction.txpow.header.date.substring(4, 7) }} \n      </h1>\n      </span>\n      </ion-col>\n\n      <!-- TXN Description -->\n      <ion-col size=\"4\" class=\"col-transtype\" fixed=\"true\" [hidden]=\"ios\">\n        <span id=\"transaction\">\n        <h2 class=\"h2-type medium-text\">\n        Created a token\n        </h2>\n        <p class=\"medium-text\" id=\"token-name\">{{ transaction.txpow.body.txn.tokengen.token }}</p>\n        </span>\n      </ion-col>\n      <!-- TXN Description -->\n      <ion-col size=\"5\" class=\"col-transtype\" fixed=\"true\" [hidden]=\"!ios\">\n        <span id=\"transaction\">\n        <h2 class=\"h2-type medium-text\">\n        Created a token\n        </h2>\n        <p class=\"small-text\" id=\"token-name\">{{ transaction.txpow.body.txn.tokengen.token }}</p>\n        </span>\n      </ion-col>\n\n\n      <!-- TXN AMOUNT -->\n      <ion-col id=\"amount\" size=\"4\" fixed=\"true\">\n        <span *ngIf=\"transaction.values[0].amount.substring(0,1) == '-'\"> \n          <h2 class=\"positive medium-text\">{{ \"+\" + transaction.txpow.body.txn.tokengen.total }}</h2>\n          <p id=\"mini-amnt small-text\">{{ \"-\"+transaction.values[0].amount + \" MINI\"}}</p>\n        </span>\n\n        <span *ngIf=\"transaction.values[0].amount.substring(0,1) !== '-'\">\n          <h2 class=\"positive medium-text\">{{ \"+\" +transaction.txpow.body.txn.tokengen.total }}</h2>\n          <p id=\"mini-amnt small-text\">{{ \"-\"+transaction.values[0].amount + \" MINI\"}}</p>\n        </span>\n      </ion-col>\n\n    </ion-item>\n      </ion-row>\n      </ion-grid>\n      </span>\n        </ion-card-content>\n         </ion-slide>\n\n    <!-- @@@@@@@@@@@@@@@@@@@@@@@@@ All @@@@@@@@@@@@@@@@@@@@@@@@@@@@@ -->\n    <ion-slide>\n      <ion-card-content>\n\n      <ion-text *ngIf=\"isEmpty\">No activities to display.</ion-text>\n\n    <span *ngIf=\"tokens.length > 0 || transactions.length > 0\">\n      <ion-grid *ngFor=\"let transaction of allTransactions;\">\n      <ion-row *ngIf=\"transactions.length >= 1 && transaction.values[0].name !== 'Create Token';\">\n        <ion-item lines=\"full\" class=\"activity\"\n        (click)=\"presentModal(transaction.txpow.txpowid, \n                  transaction.values[0].amount,\n                  transaction.txpow.body.txn.state,\n                  transaction.txpow.header.block,\n                  transaction.txpow.body.txn.inputs[0].tokenid,\n                  transaction.txpow.header.date,\n                  transaction.txpow.isblock,\n                  transaction.values[0].name)\">\n\n      <!-- TXN Icon -->\n      <ion-col size=\"1\" [hidden]=\"ios\">\n      <ion-icon [name]=\"getTXNType(transaction.values[0].amount)\" class=\"large-text\"></ion-icon>\n      </ion-col>\n\n      <!-- TXN Date -->\n      <ion-col size=\"2\" class=\"col-month\" fixed=\"true\">\n      <ion-label>\n      <p class=\"small-text\" id=\"day\">\n      {{ transaction.txpow.header.date.substring(8, 10) }}\n      </p>\n      <h1 class=\"medium-text\" id=\"month\">\n      {{ transaction.txpow.header.date.substring(4, 7) }} \n      </h1>\n      </ion-label>\n      </ion-col>\n\n      <!-- If it's minima do this.. -->\n        <!-- TXN Description -->\n      <ion-col *ngIf=\"!transaction.values[0].name.name\" size=\"4\" fixed=\"true\" [hidden]=\"ios\">\n        <span class=\"medium-text\" *ngIf=\"transaction.values[0].amount.substring(0,1) == '-'\"> \n          Sent Minima\n        </span>\n\n        <span class=\"medium-text\" *ngIf=\"transaction.values[0].amount.substring(0,1) !== '-'\">\n          Received Minima\n        </span>\n      </ion-col>\n\n      <!-- TXN Description -->\n      <ion-col *ngIf=\"!transaction.values[0].name.name\" size=\"6\" fixed=\"true\" [hidden]=\"!ios\">\n        <span class=\"medium-text\" *ngIf=\"transaction.values[0].amount.substring(0,1) == '-'\"> \n          Sent Minima\n        </span>\n\n        <span class=\"medium-text\" *ngIf=\"transaction.values[0].amount.substring(0,1) !== '-'\">\n          Received Minima\n        </span>\n      </ion-col>\n\n      <!-- If it's a TOKEN.. do this.. -->\n        <!-- TXN Description -->\n      <ion-col *ngIf=\"transaction.values[0].name.name\" size=\"4\" fixed=\"true\" [hidden]=\"ios\">\n        <span class=\"medium-text\" *ngIf=\"transaction.values[0].amount.substring(0,1) == '-'\"> \n          Sent {{ transaction.values[0].name.name }}\n        </span>\n\n        <span class=\"medium-text\" *ngIf=\"transaction.values[0].amount.substring(0,1) !== '-'\">\n          Received {{ transaction.values[0].name.name }}\n        </span>\n      </ion-col>\n\n      <!-- TXN Description -->\n      <ion-col *ngIf=\"transaction.values[0].name.name\" size=\"6\" fixed=\"true\" [hidden]=\"!ios\">\n        <span class=\"medium-text\" *ngIf=\"transaction.values[0].amount.substring(0,1) == '-'\"> \n          Sent {{ transaction.values[0].name.name }}\n        </span>\n\n        <span class=\"medium-text\" *ngIf=\"transaction.values[0].amount.substring(0,1) !== '-'\">\n          Received {{ transaction.values[0].name.name }}\n        </span>\n      </ion-col>\n\n      <!-- TXN AMOUNT -->\n      <ion-col size=\"4\" fixed=\"true\">\n        <span *ngIf=\"transaction.values[0].amount.substring(0,1) == '-'\"> \n          <h2 class=\"negative medium-text\">{{ transaction.values[0].amount}}</h2>\n        </span>\n\n        <span *ngIf=\"transaction.values[0].amount.substring(0,1) !== '-'\">\n          <h2 class=\"positive medium-text\">{{ \"+\"+ transaction.values[0].amount}}</h2>\n        </span>\n      </ion-col>\n\n      <!-- TXN Message -->\n      <ion-col size=\"4\" *ngIf=\"transaction.txpow.body.txn.state.length > 0\" [hidden]=\"ios\">\n      <p *ngIf=\"transaction.txpow.body.txn.state[1].data.length <= 15\" class=\"msg-details small-text\">{{transaction.txpow.body.txn.state[1].data.substring(0, 15)}}</p>\n      <p *ngIf=\"transaction.txpow.body.txn.state[1].data.length > 15\" class=\"msg-details small-text\">{{transaction.txpow.body.txn.state[1].data.substring(0, 15) + \"...\"}}</p>\n      </ion-col>\n    </ion-item>\n    <!-- Tokens -->\n    </ion-row>\n    \n    <ion-row *ngIf=\"transactions.length >= 1 && transaction.values[0].name === 'Create Token';\">\n    <ion-item\n    lines=\"full\"\n    class=\"activity-tokens\"\n    (click)=\"presentTokenModal(transaction.txpow.txpowid, \n                  transaction.values[0].amount,\n                  transaction.txpow.body.txn.state,\n                  transaction.txpow.header.block,\n                  transaction.txpow.body.txn.tokengen.tokenid,\n                  transaction.txpow.header.date,\n                  transaction.txpow.isblock,\n                  transaction.values[0].name,\n                  transaction.txpow.body.txn.tokengen.token,\n                  transaction.txpow.body.txn.tokengen.total,\n                  transaction.txpow.body.txn.tokengen.description)\">\n      <!-- TXN Icon -->\n      <ion-col size=\"1\" [hidden]=\"ios\">\n      <ion-icon name=\"brush\" class=\"large-text\"></ion-icon>\n      </ion-col>\n\n      <!-- TXN Date -->\n      <ion-col size=\"2\" fixed=\"true\">\n      <span>\n      <p  class=\"small-text\" id=\"day\">\n      {{ transaction.txpow.header.date.substring(8, 10) }}\n      </p>\n      <h1 class=\"medium-text\" id=\"month\">\n      {{ transaction.txpow.header.date.substring(4, 7) }} \n      </h1>\n      </span>\n      </ion-col>\n\n      <!-- TXN Description -->\n      <ion-col size=\"4\" class=\"col-transtype\" fixed=\"true\" [hidden]=\"ios\">\n        <span id=\"transaction\">\n        <h2 class=\"h2-type medium-text\">\n        Created a token\n        </h2>\n        <p class=\"small-text\" id=\"token-name\">{{ transaction.txpow.body.txn.tokengen.token }}</p>\n        </span>\n      </ion-col>\n      <!-- TXN Description -->\n      <ion-col size=\"5\" class=\"col-transtype\" fixed=\"true\" [hidden]=\"!ios\">\n        <span id=\"transaction\">\n        <h2 class=\"h2-type medium-text\">\n        Created a token\n        </h2>\n        <p class=\"small-text\" id=\"token-name\">{{ transaction.txpow.body.txn.tokengen.token }}</p>\n        </span>\n      </ion-col>\n\n\n      <!-- TXN AMOUNT -->\n      <ion-col id=\"amount\" size=\"4\" fixed=\"true\">\n        <span *ngIf=\"transaction.values[0].amount.substring(0,1) == '-'\"> \n          <h2 class=\"positive medium-text\">{{ \"+\" + transaction.txpow.body.txn.tokengen.total }}</h2>\n          <p id=\"mini-amnt small-text\">{{ \"-\"+transaction.values[0].amount + \" MINI\"}}</p>\n        </span>\n\n        <span  *ngIf=\"transaction.values[0].amount.substring(0,1) !== '-'\">\n          <h2 class=\"positive medium-text\">{{ \"+\" +transaction.txpow.body.txn.tokengen.total }}</h2>\n          <p id=\"mini-amnt small-text\">{{ \"-\"+transaction.values[0].amount + \" MINI\"}}</p>\n        </span>\n      </ion-col>\n    \n    </ion-item>\n      </ion-row>\n        </ion-grid>\n          </span>\n          </ion-card-content>\n            </ion-slide>\n\n\n    <ion-slide>\n    <!-- SKELETON FOR UX LOADING -->\n  <span *ngFor=\"let length of t_summarySpoof\">\n  <ion-grid>\n    <ion-row *ngIf=\"length.values[0].name !== 'Create Token' && transactions.length < 1\">\n      <ion-item  class=\"activity-skeleton\" lines=\"full\">\n\n    <!-- TXN Icon Skeleton -->\n    <ion-col size=\"1\" [hidden]=\"ios\">\n    <ion-skeleton-text animated style=\"width: 50%; height: 50%;\"></ion-skeleton-text>\n    </ion-col>\n\n    <!-- TXN Date Skeleton -->\n    <ion-col size=\"2\" class=\"col-month\" fixed=\"true\">\n      <ion-label>\n      <p id=\"day\">\n        <ion-skeleton-text animated style=\"width: 5%\"></ion-skeleton-text>\n      </p>\n      <h1 id=\"month\">\n        <ion-skeleton-text animated style=\"width: 10%; height: 10%;\"></ion-skeleton-text>\n      </h1>\n      </ion-label>\n    </ion-col>\n  <!-- TXN Details Skeleton -->\n  <ion-col size=\"2\"class=\"col-transtype\" fixed=\"true\">\n    <ion-label id=\"transaction\">\n      <h2 class=\"h2-type\">\n        <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n      </h2>\n    </ion-label>\n  </ion-col>\n  <!-- TXN Amount Skeleton-->\n  <ion-col size=\"6\" class=\"col-transamnt\" fixed=\"true\">\n    <ion-label class=\"amount\">\n      <h2 class=\"amount-h2\">\n        <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n      </h2>\n    </ion-label> \n  </ion-col>\n\n  <!-- TXN Message Skeleton -->\n  <ion-col size=\"4\" [hidden]=\"ios\">\n  <ion-skeleton-text animated style=\"width: 50%; height: 10%;\"></ion-skeleton-text>\n  </ion-col>\n\n  </ion-item>\n    </ion-row>\n      </ion-grid>\n      </span>\n        </ion-slide>\n      </ion-slides>\n  </ion-card>\n\n\n  \n  \n  \n  \n</ion-content>\n  </ion-app>"

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

module.exports = "ion-grid {\n  --ion-grid-padding: 0;\n  --ion-grid-column-padding: 0;\n  --ion-grid-width-xl: 360px;\n  --ion-grid-width-lg: 360px;\n  --ion-grid-padding-md: 90px;\n}\n\nion-card-header {\n  --background: var(--ion-background-color, #f2f2f2);\n  background: -webkit-gradient(linear, left top, left bottom, from(var(--ion-background-color, #fff)), to(var(--ion-background-color, #f2f2f2))) !important;\n  background: linear-gradient(to bottom, var(--ion-background-color, #fff) 0%, var(--ion-background-color, #f2f2f2) 100%) !important;\n}\n\nion-card-content {\n  width: 100%;\n  text-align: center;\n}\n\nion-segment {\n  margin-top: 5px;\n  padding: 0px 10px 0px 10px;\n}\n\nion-card-content ion-text {\n  margin-top: 10px;\n}\n\nion-row {\n  padding: 2px;\n}\n\nion-grid {\n  padding: 0px;\n}\n\nion-row:hover {\n  background: var(--ion-background-color, #f2f2f2);\n}\n\n.list-md {\n  padding: 0px 0px 0px 0px !important;\n}\n\n/** @@@@@@ TXN Details @@@@@@ **/\n\n.date {\n  display: block;\n}\n\n.amount {\n  margin-left: 120px;\n}\n\n.ios .amount {\n  margin-left: 0px;\n}\n\n.md .amount {\n  margin-left: 0px;\n}\n\n.activity {\n  width: 100%;\n  border-left: 2px solid #07ABC8;\n}\n\n.activity-tokens {\n  width: 100%;\n  border-left: 2px solid #6dcc92;\n}\n\n.divider {\n  padding: 5px;\n}\n\n.activity-skeleton {\n  width: 100%;\n  border-left: 2px solid #f2f2f2;\n}\n\nion-row {\n  width: 95%;\n}\n\n.activity div h1 {\n  font-size: 14px;\n  text-transform: uppercase;\n}\n\n#amount {\n  font-weight: 500;\n  font-size: 18px;\n}\n\n#month {\n  font-weight: 700;\n  font-size: 20px;\n  color: #00AAC7;\n}\n\n#day {\n  font-weight: 700;\n  font-size: 22px;\n  color: #FF671D;\n}\n\n#token-name {\n  font-weight: 700;\n}\n\n.p-tokenid {\n  font-weight: bolder;\n  font-size: 18px;\n}\n\n.amount-p {\n  font-weight: bolder;\n  font-size: 20px;\n}\n\n.amount-h2 {\n  font-weight: bolder;\n  font-size: 20px;\n}\n\n.msg-details {\n  font-size: --minima-text;\n  -webkit-hyphens: auto;\n      -ms-hyphens: auto;\n          hyphens: auto;\n  white-space: normal;\n  word-wrap: break-word;\n  word-break: break-all;\n}\n\n#token-name {\n  font-weight: 300;\n  color: #b3b3b3;\n}\n\n#mini-amnt {\n  font-weight: 300;\n  font-size: 12px;\n  color: #b3b3b3;\n}\n\n.negative {\n  color: #F07473;\n  font-weight: 500;\n}\n\n.positive {\n  color: #48D2D3;\n  font-weight: 800;\n}\n\n/** @@@@@@@@@@@@@@@@@ iOS @@@@@@@@@@@@@@@@@@@ */\n\n.ios ion-card-content {\n  -webkit-padding-start: 0px;\n          padding-inline-start: 0px;\n  -webkit-padding-end: 0px;\n          padding-inline-end: 0px;\n}\n\n.ios #month {\n  font-size: 13px;\n  color: #00AAC7;\n}\n\n.ios #day {\n  font-size: 12px;\n  color: #FF671D;\n}\n\n.ios .h2-type {\n  font-size: 14px;\n}\n\n.ios .p-tokenid {\n  font-size: 12px;\n}\n\n.ios .amount-p {\n  font-size: 14px;\n}\n\n.ios .amount-h2 {\n  font-size: 14px;\n}\n\n/** @@@@@@@@@@@@@@@@@ Material Design @@@@@@@@@@@@@@@@@@@ */\n\n.md ion-card-content {\n  -webkit-padding-start: 0px;\n          padding-inline-start: 0px;\n  -webkit-padding-end: 0px;\n          padding-inline-end: 0px;\n}\n\n.md #month {\n  font-size: 14px;\n  color: #00AAC7;\n}\n\n.md #day {\n  font-size: 12px;\n  color: #FF671D;\n}\n\n.md .h2-type {\n  font-size: 14px;\n}\n\n.md .p-tokenid {\n  font-size: 12px;\n}\n\n.md .amount-p {\n  font-size: 14px;\n}\n\n.md .amount-h2 {\n  font-size: 14px;\n}\n\n.md .seg {\n  font-size: 12px;\n}\n\n.no-activity-item {\n  padding-left: 2%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGlhcy9Qcm9qZWN0cy9taW5pbWFjb3JlL21vYmlsZS1hcHAtZnJvbnQtZW5kL2FwcC9zcmMvYXBwL3BhZ2VzL2hpc3RvcnkvaGlzdG9yeS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2hpc3RvcnkvaGlzdG9yeS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxxQkFBQTtFQUNBLDRCQUFBO0VBQ0EsMEJBQUE7RUFDQSwwQkFBQTtFQUNBLDJCQUFBO0FDQUo7O0FER0E7RUFFSSxrREFBQTtFQUNBLHlKQUFBO0VBQUEsa0lBQUE7QUNESjs7QURLQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtBQ0ZKOztBRElBO0VBQ0ksZUFBQTtFQUNBLDBCQUFBO0FDREo7O0FER0E7RUFDSSxnQkFBQTtBQ0FKOztBREVBO0VBQ0ksWUFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtBQ0NKOztBRENBO0VBQ0ksZ0RBQUE7QUNFSjs7QURBQTtFQUNJLG1DQUFBO0FDR0o7O0FEQUEsZ0NBQUE7O0FBQ0E7RUFDSSxjQUFBO0FDR0o7O0FEREE7RUFDSSxrQkFBQTtBQ0lKOztBREZBO0VBQ0ksZ0JBQUE7QUNLSjs7QURIQTtFQUNJLGdCQUFBO0FDTUo7O0FESkE7RUFDSSxXQUFBO0VBQ0EsOEJBQUE7QUNPSjs7QURMQTtFQUNJLFdBQUE7RUFDQSw4QkFBQTtBQ1FKOztBRE5BO0VBQ0ksWUFBQTtBQ1NKOztBRFBBO0VBQ0ksV0FBQTtFQUNBLDhCQUFBO0FDVUo7O0FEUkE7RUFDSSxVQUFBO0FDV0o7O0FEVEE7RUFDSSxlQUFBO0VBQ0EseUJBQUE7QUNZSjs7QURWQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtBQ2FKOztBRFhBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ2NKOztBRFpBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ2VKOztBRGJBO0VBQ0ksZ0JBQUE7QUNnQko7O0FEZEE7RUFDSSxtQkFBQTtFQUNBLGVBQUE7QUNpQko7O0FEZkE7RUFDSSxtQkFBQTtFQUNBLGVBQUE7QUNrQko7O0FEaEJBO0VBQ0ksbUJBQUE7RUFDQSxlQUFBO0FDbUJKOztBRGhCQTtFQUNJLHdCQUFBO0VBQ0EscUJBQUE7TUFBQSxpQkFBQTtVQUFBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7QUNtQko7O0FEakJBO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0FDb0JKOztBRGxCQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNxQko7O0FEbkJBO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0FDc0JKOztBRHBCQTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtBQ3VCSjs7QURwQkEsK0NBQUE7O0FBQ0E7RUFDSSwwQkFBQTtVQUFBLHlCQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtBQ3VCSjs7QURyQkE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQ3dCSjs7QUR0QkE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQ3lCSjs7QUR0QkE7RUFDSSxlQUFBO0FDeUJKOztBRHZCQTtFQUNJLGVBQUE7QUMwQko7O0FEeEJBO0VBQ0ksZUFBQTtBQzJCSjs7QUR6QkE7RUFDSSxlQUFBO0FDNEJKOztBRHpCQSwyREFBQTs7QUFDQTtFQUNJLDBCQUFBO1VBQUEseUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0FDNEJKOztBRDFCQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FDNkJKOztBRDNCQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FDOEJKOztBRDNCQTtFQUNJLGVBQUE7QUM4Qko7O0FENUJBO0VBQ0ksZUFBQTtBQytCSjs7QUQ3QkE7RUFDSSxlQUFBO0FDZ0NKOztBRDlCQTtFQUNJLGVBQUE7QUNpQ0o7O0FEL0JBO0VBQ0ksZUFBQTtBQ2tDSjs7QUQvQkE7RUFDSSxnQkFBQTtBQ2tDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hpc3RvcnkvaGlzdG9yeS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpb24tZ3JpZCwgaW9uLXJvdywgaW9uLWNvbCBcbmlvbi1ncmlkIHtcbiAgICAtLWlvbi1ncmlkLXBhZGRpbmc6IDA7XG4gICAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMDtcbiAgICAtLWlvbi1ncmlkLXdpZHRoLXhsOiAzNjBweDtcbiAgICAtLWlvbi1ncmlkLXdpZHRoLWxnOiAzNjBweDtcbiAgICAtLWlvbi1ncmlkLXBhZGRpbmctbWQ6IDkwcHg7XG59XG5cbmlvbi1jYXJkLWhlYWRlciB7XG5cbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZjJmMmYyKTtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsICNmZmYpIDAlLCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwgI2YyZjJmMikgMTAwJSkgIWltcG9ydGFudDtcbiAgICBcbn1cblxuaW9uLWNhcmQtY29udGVudCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyAgICBcbn1cbmlvbi1zZWdtZW50IHtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgcGFkZGluZzogMHB4IDEwcHggMHB4IDEwcHg7XG59XG5pb24tY2FyZC1jb250ZW50IGlvbi10ZXh0IHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuaW9uLXJvdyB7XG4gICAgcGFkZGluZzogMnB4O1xufSBcblxuaW9uLWdyaWQge1xuICAgIHBhZGRpbmc6IDBweDtcbn1cbmlvbi1yb3c6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZjJmMmYyKTtcbn1cbi5saXN0LW1kIHtcbiAgICBwYWRkaW5nOiAwcHggMHB4IDBweCAwcHggIWltcG9ydGFudDtcbn1cblxuLyoqIEBAQEBAQCBUWE4gRGV0YWlscyBAQEBAQEAgKiovXG4uZGF0ZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG4uYW1vdW50IHtcbiAgICBtYXJnaW4tbGVmdDogMTIwcHg7XG59XG4uaW9zIC5hbW91bnQge1xuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XG59XG4ubWQgLmFtb3VudCB7XG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcbn1cbi5hY3Rpdml0eSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjMDdBQkM4O1xufVxuLmFjdGl2aXR5LXRva2VucyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCByZ2IoMTA5LCAyMDQsIDE0Nik7XG59XG4uZGl2aWRlciB7XG4gICAgcGFkZGluZzogNXB4O1xufVxuLmFjdGl2aXR5LXNrZWxldG9uIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkICNmMmYyZjI7XG59XG5pb24tcm93IHtcbiAgICB3aWR0aDogOTUlO1xufVxuLmFjdGl2aXR5IGRpdiBoMSB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG4jYW1vdW50IHtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbn1cbiNtb250aCB7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgY29sb3I6ICMwMEFBQzc7XG59XG4jZGF5IHtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICBjb2xvcjogI0ZGNjcxRDtcbn1cbiN0b2tlbi1uYW1lIHtcbiAgICBmb250LXdlaWdodDogNzAwO1xufVxuLnAtdG9rZW5pZCB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICBmb250LXNpemU6IDE4cHg7XG59ICAgXG4uYW1vdW50LXAge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuLmFtb3VudC1oMiB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5tc2ctZGV0YWlscyB7XG4gICAgZm9udC1zaXplOiAtLW1pbmltYS10ZXh0O1xuICAgIGh5cGhlbnM6IGF1dG87XG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgd29yZC1icmVhazogYnJlYWstYWxsO1xufVxuI3Rva2VuLW5hbWUge1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgY29sb3I6ICNiM2IzYjM7XG59XG4jbWluaS1hbW50IHtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBjb2xvcjogI2IzYjNiMztcbn1cbi5uZWdhdGl2ZSB7XG4gICAgY29sb3I6ICNGMDc0NzM7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5wb3NpdGl2ZSB7XG4gICAgY29sb3I6ICM0OEQyRDM7XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbn1cblxuLyoqIEBAQEBAQEBAQEBAQEBAQEBAIGlPUyBAQEBAQEBAQEBAQEBAQEBAQEBAICovXG4uaW9zIGlvbi1jYXJkLWNvbnRlbnQge1xuICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAwcHg7XG4gICAgcGFkZGluZy1pbmxpbmUtZW5kOiAwcHg7XG59XG4uaW9zICNtb250aCB7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGNvbG9yOiAjMDBBQUM3O1xufVxuLmlvcyAjZGF5IHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgY29sb3I6ICNGRjY3MUQ7XG59XG5cbi5pb3MgLmgyLXR5cGUge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5pb3MgLnAtdG9rZW5pZCB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xufSAgIFxuLmlvcyAuYW1vdW50LXAge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5pb3MgLmFtb3VudC1oMiB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4vKiogQEBAQEBAQEBAQEBAQEBAQEAgTWF0ZXJpYWwgRGVzaWduIEBAQEBAQEBAQEBAQEBAQEBAQEAgKi9cbi5tZCBpb24tY2FyZC1jb250ZW50IHtcbiAgICBwYWRkaW5nLWlubGluZS1zdGFydDogMHB4O1xuICAgIHBhZGRpbmctaW5saW5lLWVuZDogMHB4O1xufVxuLm1kICNtb250aCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiAjMDBBQUM3O1xufVxuLm1kICNkYXkge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBjb2xvcjogI0ZGNjcxRDtcbn1cblxuLm1kIC5oMi10eXBlIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG59XG4ubWQgLnAtdG9rZW5pZCB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xufSAgIFxuLm1kIC5hbW91bnQtcCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuLm1kIC5hbW91bnQtaDIge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5tZCAuc2VnIHtcbiAgICBmb250LXNpemU6IDEycHg7XG59XG5cbi5uby1hY3Rpdml0eS1pdGVtIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDIlO1xufVxuXG5cblxuIiwiaW9uLWdyaWQge1xuICAtLWlvbi1ncmlkLXBhZGRpbmc6IDA7XG4gIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDA7XG4gIC0taW9uLWdyaWQtd2lkdGgteGw6IDM2MHB4O1xuICAtLWlvbi1ncmlkLXdpZHRoLWxnOiAzNjBweDtcbiAgLS1pb24tZ3JpZC1wYWRkaW5nLW1kOiA5MHB4O1xufVxuXG5pb24tY2FyZC1oZWFkZXIge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZjJmMmYyKTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsICNmZmYpIDAlLCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwgI2YyZjJmMikgMTAwJSkgIWltcG9ydGFudDtcbn1cblxuaW9uLWNhcmQtY29udGVudCB7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlvbi1zZWdtZW50IHtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBwYWRkaW5nOiAwcHggMTBweCAwcHggMTBweDtcbn1cblxuaW9uLWNhcmQtY29udGVudCBpb24tdGV4dCB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbmlvbi1yb3cge1xuICBwYWRkaW5nOiAycHg7XG59XG5cbmlvbi1ncmlkIHtcbiAgcGFkZGluZzogMHB4O1xufVxuXG5pb24tcm93OmhvdmVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsICNmMmYyZjIpO1xufVxuXG4ubGlzdC1tZCB7XG4gIHBhZGRpbmc6IDBweCAwcHggMHB4IDBweCAhaW1wb3J0YW50O1xufVxuXG4vKiogQEBAQEBAIFRYTiBEZXRhaWxzIEBAQEBAQCAqKi9cbi5kYXRlIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5hbW91bnQge1xuICBtYXJnaW4tbGVmdDogMTIwcHg7XG59XG5cbi5pb3MgLmFtb3VudCB7XG4gIG1hcmdpbi1sZWZ0OiAwcHg7XG59XG5cbi5tZCAuYW1vdW50IHtcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbn1cblxuLmFjdGl2aXR5IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgIzA3QUJDODtcbn1cblxuLmFjdGl2aXR5LXRva2VucyB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItbGVmdDogMnB4IHNvbGlkICM2ZGNjOTI7XG59XG5cbi5kaXZpZGVyIHtcbiAgcGFkZGluZzogNXB4O1xufVxuXG4uYWN0aXZpdHktc2tlbGV0b24ge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjZjJmMmYyO1xufVxuXG5pb24tcm93IHtcbiAgd2lkdGg6IDk1JTtcbn1cblxuLmFjdGl2aXR5IGRpdiBoMSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuI2Ftb3VudCB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuI21vbnRoIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogIzAwQUFDNztcbn1cblxuI2RheSB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgY29sb3I6ICNGRjY3MUQ7XG59XG5cbiN0b2tlbi1uYW1lIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLnAtdG9rZW5pZCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLmFtb3VudC1wIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4uYW1vdW50LWgyIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4ubXNnLWRldGFpbHMge1xuICBmb250LXNpemU6IC0tbWluaW1hLXRleHQ7XG4gIGh5cGhlbnM6IGF1dG87XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xufVxuXG4jdG9rZW4tbmFtZSB7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGNvbG9yOiAjYjNiM2IzO1xufVxuXG4jbWluaS1hbW50IHtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogI2IzYjNiMztcbn1cblxuLm5lZ2F0aXZlIHtcbiAgY29sb3I6ICNGMDc0NzM7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5wb3NpdGl2ZSB7XG4gIGNvbG9yOiAjNDhEMkQzO1xuICBmb250LXdlaWdodDogODAwO1xufVxuXG4vKiogQEBAQEBAQEBAQEBAQEBAQEAgaU9TIEBAQEBAQEBAQEBAQEBAQEBAQEAgKi9cbi5pb3MgaW9uLWNhcmQtY29udGVudCB7XG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAwcHg7XG4gIHBhZGRpbmctaW5saW5lLWVuZDogMHB4O1xufVxuXG4uaW9zICNtb250aCB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6ICMwMEFBQzc7XG59XG5cbi5pb3MgI2RheSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICNGRjY3MUQ7XG59XG5cbi5pb3MgLmgyLXR5cGUge1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5pb3MgLnAtdG9rZW5pZCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmlvcyAuYW1vdW50LXAge1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5pb3MgLmFtb3VudC1oMiB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLyoqIEBAQEBAQEBAQEBAQEBAQEBAIE1hdGVyaWFsIERlc2lnbiBAQEBAQEBAQEBAQEBAQEBAQEBAICovXG4ubWQgaW9uLWNhcmQtY29udGVudCB7XG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAwcHg7XG4gIHBhZGRpbmctaW5saW5lLWVuZDogMHB4O1xufVxuXG4ubWQgI21vbnRoIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzAwQUFDNztcbn1cblxuLm1kICNkYXkge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjRkY2NzFEO1xufVxuXG4ubWQgLmgyLXR5cGUge1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5tZCAucC10b2tlbmlkIHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4ubWQgLmFtb3VudC1wIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4ubWQgLmFtb3VudC1oMiB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLm1kIC5zZWcge1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5uby1hY3Rpdml0eS1pdGVtIHtcbiAgcGFkZGluZy1sZWZ0OiAyJTtcbn0iXX0= */"

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
            initialSlide: 2,
            slidesPerView: 1,
            slideShadows: true,
            speed: 500
        };
        // + vars
        this.transactions = [];
        this.minimaTransactions = [];
        this.allTransactions = [];
        this.tokens = [];
        this.tokenTransactions = [];
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
        if (this.polledHistorySubscription) {
            this.polledHistorySubscription.unsubscribe();
        }
    }
    /** Modals */
    presentModal(_txpowid, _amount, _message, _block, _tokenid, _date, _isBlock, _name, _address) {
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
                    'TokenName': _name,
                    'Address': _address
                }
            });
            return yield modal.present();
        });
    }
    presentTokenModal(_txpowid, _amount, _message, _block, _tokenid, _date, _isBlock, _name, _tokenNameGiven, _amountCreated, _description) {
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
                    'TokenName': _name,
                    'tokenNameGiven': _tokenNameGiven,
                    'amountCreated': _amountCreated,
                    'description': _description
                }
            });
            return yield modal.present();
        });
    }
    /** MISC Functions */
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
            responseData.response.history.forEach((element) => {
                let name = element.values[0].name;
                if (name.substring(0, 1) === '{') {
                    element.values[0].name = JSON.parse(name);
                    this.transactions.push(element);
                    this.allTransactions.push(element);
                }
                else if (name === 'Create Token') {
                    this.allTransactions.push(element);
                    this.tokens.push(element);
                }
                else {
                    this.transactions.push(element);
                    this.allTransactions.push(element);
                }
            });
        })).subscribe(responseData => {
            if (this.lastJSON !== JSON.stringify(responseData)) {
                //this.transactions = responseData;
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
        return this.polledHistory$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["timer"])(0, 2000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["concatMap"])(_ => history$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((res) => res));
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