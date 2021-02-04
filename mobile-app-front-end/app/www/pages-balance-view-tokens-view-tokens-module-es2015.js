(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-balance-view-tokens-view-tokens-module"],{

/***/ "./src/app/service/minima-api.service.ts":
/*!***********************************************!*\
  !*** ./src/app/service/minima-api.service.ts ***!
  \***********************************************/
/*! exports provided: MinimaApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MinimaApiService", function() { return MinimaApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var minima__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! minima */ "./node_modules/minima/dist/minima.js");
/* harmony import */ var minima__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(minima__WEBPACK_IMPORTED_MODULE_3__);




let MinimaApiService = class MinimaApiService {
    constructor(loadingController) {
        this.loadingController = loadingController;
        this.loader = null;
    }
    showLoader() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.loader == null) {
                this.loader = yield this.loadingController.create({
                    message: 'Loading'
                });
                this.loader.present();
            }
        });
    }
    hideLoader() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.loader !== null) {
                yield this.loader.dismiss();
                this.loader = null;
            }
            else { }
        });
    }
    createToken(data) {
        return this.req("tokencreate name:\"" + data.name + "\" amount:" + data.amount + " description:\"" + data.description + "\" script:\"" + data.script + "\" icon:" + data.icon + " proof:" + data.proof);
    }
    validateTokenID(tokenid) {
        return this.req("tokenvalidate " + tokenid);
    }
    sendMessageTransaction(data) {
        const txnidentifier = Math.floor(Math.random() * 1000000000);
        const port254 = 254;
        const port255 = 255;
        const customTXN = 
        // Custom TXN with an ID
        "txncreate " + txnidentifier + ";" +
            // Add state variable 1
            "txnstate " + txnidentifier + " 254 01000100" + ";" +
            // Add User state variable 2
            "txnstate " + txnidentifier + " 255 \"" + data.message + "\"" + ";" +
            // Auto fill the transaction
            "txnauto " + txnidentifier + " " + data.amount + " " + data.address + " " + data.tokenid + ";" +
            // Post it!
            "txnpost " + txnidentifier + ";" +
            // Clear the txn
            "txndelete " + txnidentifier + ";";
        return this.req(customTXN);
    }
    webLink(data) {
        return this.req('weblink+' + data.url);
    }
    setHost(newHost) {
        localStorage.setItem('minima_host', newHost);
    }
    newAddress() {
        return this.req('newaddress');
    }
    sendFunds(data) {
        return this.req('send ' + data.amount + ' ' + data.address + ' ' + data.tokenid);
    }
    giveMe50() {
        return this.req('gimme50');
    }
    getBalance() {
        return this.req('balance');
    }
    getHistory() {
        return this.req('history');
    }
    clearMyHistory() {
        return this.req('history clear');
    }
    getStatus() {
        return this.req('status');
    }
    // Use minima.js instead..
    req(fnc) {
        const promise = new Promise((resolve) => {
            minima__WEBPACK_IMPORTED_MODULE_3__["Minima"].cmd(fnc, (resp) => {
                //console.log(resp);
                resolve(resp);
            });
        });
        return promise;
    }
};
MinimaApiService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] }
];
MinimaApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]])
], MinimaApiService);



/***/ })

}]);
//# sourceMappingURL=pages-balance-view-tokens-view-tokens-module-es2015.js.map