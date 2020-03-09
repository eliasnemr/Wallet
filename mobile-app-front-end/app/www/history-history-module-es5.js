(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["history-history-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/history/history.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/history/history.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-app>\n  <ion-header>\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n      <ion-title color=\"primary\">Transaction History</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content>\n    <ion-card>\n      <ion-card-header>\n        Recent Activity\n      </ion-card-header>\n      <ion-card-content>\n  \n        <ion-item *ngIf=\"t_summaryArr.length < 1\" lines=\"none\">\n        <ion-text>No activities to display.</ion-text>\n        </ion-item>\n        <ion-list *ngFor=\"let trans of t_summaryArr.slice().reverse();\">\n      \n        <ion-grid><ion-row>\n        <ion-item *ngIf=\"t_summaryArr.length >= 1;\" detail class=\"activity\"\n           (click)=\"presentHistoryInfo($event, trans.receivingAddress,\n                                     trans.blockNumber, trans.transAmount, trans.isBlock, \n                                     trans.txpowid, trans.parent, trans.blockdiff, trans.date)\">\n          <ion-col class=\"col-month\" fixed=\"true\">\n          <ion-label>\n          <h1 id=\"month\">\n            {{ trans.transMonth }} \n          </h1>\n          <p id=\"day\">\n            {{ trans.transDay }}\n          </p>\n        </ion-label>\n        </ion-col>\n        <!-- Maybe add icon here -->\n  \n        <ion-col class=\"col-transtype\" fixed=\"true\">\n        <ion-label id=\"transaction\">\n          <h2 class=\"h2-type\">\n            {{ checkTransType(trans.transAmount) }} {{ trans.transTokenName }}\n          </h2>\n          <p class=\"p-tokenid\">\n            Token Id: {{ trans.transTokenId }}\n          </p>\n        </ion-label>\n        </ion-col>\n  \n        <ion-col class=\"col-transamnt\" fixed=\"true\">\n        <ion-label class=\"amount\">\n          <h2 class=\"amount-h2\">\n            {{ trans.transAmount }} MINI\n          </h2>\n          <p class=\"amount-p\">\n            +$11.09\n          </p>\n        </ion-label> \n       \n      </ion-col>\n        </ion-item>\n          \n      </ion-row></ion-grid>\n      </ion-list>\n  \n  \n      </ion-card-content>\n    </ion-card>\n  \n  </ion-content>\n  </ion-app>"

/***/ }),

/***/ "./src/app/MiniObjects/t_summary.ts":
/*!******************************************!*\
  !*** ./src/app/MiniObjects/t_summary.ts ***!
  \******************************************/
/*! exports provided: T_Summary */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "T_Summary", function() { return T_Summary; });
var T_Summary = /** @class */ (function () {
    function T_Summary(id, month, day, tknId, tknName, tknAmount, tknConvert, addr, blkNum, isBlock, txpowid, parent, blockdiff, date) {
        this.transId = id;
        this.transMonth = month;
        this.transDay = day;
        this.transTokenId = tknId;
        this.transTokenName = tknName;
        this.transAmount = tknAmount;
        this.transConversion = tknConvert;
        this.receivingAddress = addr;
        this.blockNumber = blkNum;
        this.isBlock = isBlock;
        this.txpowid = txpowid;
        this.parent = parent;
        this.blockdiff = blockdiff;
        this.date = date;
    }
    T_Summary.ctorParameters = function () { return [
        { type: Number },
        { type: String },
        { type: Number },
        { type: undefined },
        { type: String },
        { type: Number },
        { type: Number },
        { type: undefined },
        { type: undefined },
        { type: Boolean },
        { type: String },
        { type: String },
        { type: Number },
        { type: String }
    ]; };
    return T_Summary;
}());



/***/ }),

/***/ "./src/app/history/history.module.ts":
/*!*******************************************!*\
  !*** ./src/app/history/history.module.ts ***!
  \*******************************************/
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
/* harmony import */ var _history_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./history.page */ "./src/app/history/history.page.ts");







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

/***/ "./src/app/history/history.page.scss":
/*!*******************************************!*\
  !*** ./src/app/history/history.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".date {\n  display: block;\n}\n\n.amount {\n  margin-left: 120px;\n}\n\n.ios .amount {\n  margin-left: 0px;\n}\n\n.md .amount {\n  margin-left: 0px;\n}\n\n.activity {\n  width: 100%;\n}\n\n.activity:hover {\n  background-color: grey;\n}\n\n.activity div h1 {\n  font-size: 14px;\n  text-transform: uppercase;\n}\n\n.amount {\n  text-align: center;\n}\n\n#month {\n  font-size: 12px;\n  color: #00AAC7;\n}\n\n#day {\n  font-size: 14px;\n  color: #FF671D;\n}\n\n.h2-type {\n  font-size: 14px;\n}\n\n.p-tokenid {\n  font-size: 12px;\n}\n\n.amount-p {\n  font-size: 14px;\n}\n\n.amount-h2 {\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGlhcy9Qcm9qZWN0cy9taW5pbWFjb3JlL21vYmlsZS1hcHAtZnJvbnQtZW5kL2FwcC9zcmMvYXBwL2hpc3RvcnkvaGlzdG9yeS5wYWdlLnNjc3MiLCJzcmMvYXBwL2hpc3RvcnkvaGlzdG9yeS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0FDQ0o7O0FEQ0E7RUFDSSxrQkFBQTtBQ0VKOztBREFBO0VBQ0ksZ0JBQUE7QUNHSjs7QUREQTtFQUNJLGdCQUFBO0FDSUo7O0FERkE7RUFDSSxXQUFBO0FDS0o7O0FERkE7RUFDSSxzQkFBQTtBQ0tKOztBREhBO0VBQ0ksZUFBQTtFQUNBLHlCQUFBO0FDTUo7O0FESEE7RUFDSSxrQkFBQTtBQ01KOztBREhBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUNNSjs7QURKQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FDT0o7O0FESkE7RUFDSSxlQUFBO0FDT0o7O0FETEE7RUFDSSxlQUFBO0FDUUo7O0FETkE7RUFDSSxlQUFBO0FDU0o7O0FEUEE7RUFDSSxlQUFBO0FDVUoiLCJmaWxlIjoic3JjL2FwcC9oaXN0b3J5L2hpc3RvcnkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRhdGUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuLmFtb3VudCB7XG4gICAgbWFyZ2luLWxlZnQ6IDEyMHB4O1xufVxuLmlvcyAuYW1vdW50IHtcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xufVxuLm1kIC5hbW91bnQge1xuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XG59XG4uYWN0aXZpdHkge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uYWN0aXZpdHk6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XG59XG4uYWN0aXZpdHkgZGl2IGgxIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLmFtb3VudCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4jbW9udGgge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBjb2xvcjogIzAwQUFDNztcbn1cbiNkYXkge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogI0ZGNjcxRDtcblxufVxuLmgyLXR5cGUge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5wLXRva2VuaWQge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbn0gICBcbi5hbW91bnQtcCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuLmFtb3VudC1oMiB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufSIsIi5kYXRlIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5hbW91bnQge1xuICBtYXJnaW4tbGVmdDogMTIwcHg7XG59XG5cbi5pb3MgLmFtb3VudCB7XG4gIG1hcmdpbi1sZWZ0OiAwcHg7XG59XG5cbi5tZCAuYW1vdW50IHtcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbn1cblxuLmFjdGl2aXR5IHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5hY3Rpdml0eTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XG59XG5cbi5hY3Rpdml0eSBkaXYgaDEge1xuICBmb250LXNpemU6IDE0cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5hbW91bnQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbiNtb250aCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICMwMEFBQzc7XG59XG5cbiNkYXkge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjRkY2NzFEO1xufVxuXG4uaDItdHlwZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLnAtdG9rZW5pZCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmFtb3VudC1wIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uYW1vdW50LWgyIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/history/history.page.ts":
/*!*****************************************!*\
  !*** ./src/app/history/history.page.ts ***!
  \*****************************************/
/*! exports provided: HistoryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryPage", function() { return HistoryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _MiniObjects_t_summary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../MiniObjects/t_summary */ "./src/app/MiniObjects/t_summary.ts");
/* harmony import */ var _service_minima_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../service/minima-api.service */ "./src/app/service/minima-api.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _pop_history_pop_history_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../pop-history/pop-history.component */ "./src/app/pop-history/pop-history.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");






var HistoryPage = /** @class */ (function () {
    function HistoryPage(popHistoryController, api) {
        this.popHistoryController = popHistoryController;
        this.api = api;
        this.t_summaryArr = [];
    }
    HistoryPage.prototype.ngOnInit = function () { };
    HistoryPage.prototype.ionViewDidEnter = function () {
        this.pullInHistorySummary();
    };
    // Present history details popover when tapped/clicked
    HistoryPage.prototype.presentHistoryInfo = function (ev, _addr, _blkNumber, _amnt, _isBlock, _txpowid, _parent, _blockdiff, _date) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var popover;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popHistoryController.create({
                            component: _pop_history_pop_history_component__WEBPACK_IMPORTED_MODULE_4__["PopHistoryComponent"],
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
    // Check if we're receiving or sending
    HistoryPage.prototype.checkTransType = function (amount) {
        if (amount.toString().substring(0, 1) === "-") {
            return "Sent";
        }
        else {
            return "Received";
        }
    };
    //LATER USE, history order
    HistoryPage.prototype.getUserOrderPref = function () {
        if (true) {
            return 't_summaryArr.slice().reverse()';
        }
        else {}
    };
    // Get all users transaction history
    HistoryPage.prototype.pullInHistorySummary = function () {
        var _this = this;
        this.api.getHistory().then(function (res) {
            if (res.status === true) {
                console.log('Pulling in history ->' + res);
                var countActivity_1 = 0;
                // loop through every transaction there is..
                res.response.history.forEach(function (activity) {
                    countActivity_1++;
                    // get the information of summary
                    var Month = activity.txpow.date.substring(4, 7);
                    var Day = activity.txpow.date.substring(8, 10);
                    var Tokenid = activity.txpow.txn.inputs.tokenid;
                    var Amount = activity.value;
                    var InputsArr = activity.txpow.txn.inputs;
                    var OutputsArr = activity.txpow.txn.outputs;
                    var Address = '';
                    // get information of Details
                    var blockNumber = activity.txpow.block;
                    var isBlock = activity.txpow.isblock;
                    var txpowid = activity.txpow.txpowid;
                    var parent = activity.txpow.parent;
                    var blockdiff = activity.txpow.blockdiff;
                    var date = activity.txpow.date.substring(4);
                    console.log("Is this txpow a block -> " + isBlock);
                    //let tokenName = activity.tokenName;
                    // Loop in inputs and get required key indexes to create our summary obj
                    InputsArr.forEach(function (element) {
                        Tokenid = element.tokenid.substring(0, 10);
                    });
                    OutputsArr.forEach(function (element) {
                        Address = element.address;
                    });
                    //create t_summary(transaction_summary) Object to push into Array
                    var transSummary = new _MiniObjects_t_summary__WEBPACK_IMPORTED_MODULE_1__["T_Summary"](countActivity_1, Month, Day, Tokenid, "Minima", Amount, 10, Address, blockNumber, isBlock, txpowid, parent, blockdiff, date);
                    _this.t_summaryArr.push(transSummary);
                });
            }
        });
        this.t_summaryArr = new Array;
    };
    HistoryPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"] },
        { type: _service_minima_api_service__WEBPACK_IMPORTED_MODULE_2__["MinimaApiService"] }
    ]; };
    HistoryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
            selector: 'app-history',
            template: __webpack_require__(/*! raw-loader!./history.page.html */ "./node_modules/raw-loader/index.js!./src/app/history/history.page.html"),
            styles: [__webpack_require__(/*! ./history.page.scss */ "./src/app/history/history.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"], _service_minima_api_service__WEBPACK_IMPORTED_MODULE_2__["MinimaApiService"]])
    ], HistoryPage);
    return HistoryPage;
}());



/***/ })

}]);
//# sourceMappingURL=history-history-module-es5.js.map