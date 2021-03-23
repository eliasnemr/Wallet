(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-mini-status-mini-status-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/mini-status/mini-status.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/mini-status/mini-status.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-app>\n<ion-header class=\"page-header ion-no-border\">\n  <ion-toolbar>\n    <ion-title class=\"large-text\">\n      <ion-item id=\"title\" lines=\"none\" class=\"ion-no-padding\">\n        <ion-icon class=\"menu-btn\" (click)=\"openMenu()\" src=\"assets/menuIcon.svg\"></ion-icon>\n        Status\n      </ion-item>\n      <ion-item *ngIf=\"status?.version\" id=\"subtitle\" class=\"breadcrumb ion-no-padding\" lines=\"none\">\n        Current status \n        <ion-icon class=\"status-icon\" *ngIf=\"!status?.version\" src=\"assets/statusCross.svg\"></ion-icon>\n        <ion-icon class=\"status-icon\" *ngIf=\"status?.version\" src=\"assets/statusTick.svg\"></ion-icon>\n        <span *ngIf=\"status?.version\">v{{ status?.version}}</span>\n      \n      </ion-item>\n      </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"page-content\">\n  <ion-grid *ngIf=\"!status?.version\">\n    <ion-row class=\"ion-no-padding ion-no-margin\">\n      <ion-col class=\"ion-no-padding ion-no-margin ion-text-center\">\n        Node is currently offline.\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-list *ngIf=\"status?.version\" class=\"ion-no-padding\">\n    <ion-item class=\"ion-no-padding\">\n      <ion-label>\n        <h6 class=\"title\">Uptime</h6>\n        <p class=\"value\">{{ status?.uptime }}</p>\n      </ion-label>\n    </ion-item>\n\n    <ion-item class=\"ion-no-padding\">\n      <ion-label>\n        <h6 class=\"title\">Last block</h6>\n        <p class=\"value\">{{ status?.lastblock }}</p>\n      </ion-label>\n    </ion-item>\n\n    <ion-item class=\"ion-no-padding\">\n      <ion-label>\n        <h6 class=\"title\">Host IP</h6>\n        <p class=\"value\">{{ status?.host }}</p>\n      </ion-label>\n    </ion-item>\n\n    <ion-item class=\"ion-no-padding\">\n      <ion-label>\n        <h6 class=\"title\">MiniDAPP server port</h6>\n        <p class=\"value\">{{ status?.minidappserver }}</p>\n      </ion-label>\n    </ion-item>\n\n    <ion-item class=\"ion-no-padding\">\n      <ion-label>\n        <h6 class=\"title\">RAM usage</h6>\n        <p class=\"value\">{{ status?.ram }}</p>\n      </ion-label>\n    </ion-item>\n\n    <ion-item class=\"ion-no-padding\">\n      <ion-label>\n        <h6 class=\"title\">IBD</h6>\n        <p class=\"value\">{{ status?.IBD }}</p>\n      </ion-label>\n    </ion-item>\n\n    <ion-item class=\"ion-no-padding\">\n      <ion-label>\n        <h6 class=\"title\">Tip</h6>\n        <p class=\"value\">{{ status?.tip }}</p>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n<ion-footer class=\"border-t\">\n  <ion-button (click)=\"giveMe50()\" class=\"gimme50 no-ripple\" fill=\"none\">\n    Gimme 50\n  </ion-button>\n</ion-footer>\n</ion-app>"

/***/ }),

/***/ "./src/app/pages/mini-status/mini-status.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/mini-status/mini-status.module.ts ***!
  \*********************************************************/
/*! exports provided: MiniStatusPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiniStatusPageModule", function() { return MiniStatusPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _mini_status_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mini-status.page */ "./src/app/pages/mini-status/mini-status.page.ts");







var routes = [
    {
        path: '',
        component: _mini_status_page__WEBPACK_IMPORTED_MODULE_6__["MiniStatusPage"]
    }
];
var MiniStatusPageModule = /** @class */ (function () {
    function MiniStatusPageModule() {
    }
    MiniStatusPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_mini_status_page__WEBPACK_IMPORTED_MODULE_6__["MiniStatusPage"]]
        })
    ], MiniStatusPageModule);
    return MiniStatusPageModule;
}());



/***/ }),

/***/ "./src/app/pages/mini-status/mini-status.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/mini-status/mini-status.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  color: var(--ion-color-tertiary);\n}\n\nion-icon.status-icon {\n  margin-left: 7px;\n  margin-right: 7px;\n  width: 20px;\n  height: 20px;\n}\n\nion-chip {\n  background-color: var(--ion-color-chip);\n}\n\nion-chip ion-label {\n  font-family: manrope-bold;\n}\n\nion-list ion-item {\n  --border-color: var(--ion-color-item-border);\n  --inner-padding-end: 0;\n}\n\n.title {\n  font-family: manrope-bold;\n  font-size: 16px;\n  text-overflow: ellipsis;\n  max-width: inherit;\n  white-space: normal;\n  word-wrap: normal;\n  color: var(--ion-color-color);\n}\n\n.value {\n  font-family: manrope-regular;\n  text-align: left;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  max-width: inherit;\n  overflow: hidden;\n  color: var(--ion-color-color);\n  opacity: 0.7;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGlhc25lbXIvcHJvamVjdHMvV2FsbGV0L21vYmlsZS1hcHAtZnJvbnQtZW5kL2FwcC9zcmMvYXBwL3BhZ2VzL21pbmktc3RhdHVzL21pbmktc3RhdHVzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvbWluaS1zdGF0dXMvbWluaS1zdGF0dXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksZ0NBQUE7QUNBSjs7QURFQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0NKOztBRENBO0VBQ0ksdUNBQUE7QUNFSjs7QURBQTtFQUNJLHlCQUFBO0FDR0o7O0FEREE7RUFDSSw0Q0FBQTtFQUNBLHNCQUFBO0FDSUo7O0FERkE7RUFDSSx5QkFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLDZCQUFBO0FDS0o7O0FESEE7RUFDSSw0QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2QkFBQTtFQUNBLFlBQUE7QUNNSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21pbmktc3RhdHVzL21pbmktc3RhdHVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuKiB7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeSk7XG59XG5pb24taWNvbi5zdGF0dXMtaWNvbiB7XG4gICAgbWFyZ2luLWxlZnQ6IDdweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDdweDtcbiAgICB3aWR0aDogMjBweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG59XG5pb24tY2hpcCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWNoaXApO1xufVxuaW9uLWNoaXAgaW9uLWxhYmVsIHtcbiAgICBmb250LWZhbWlseTogbWFucm9wZS1ib2xkO1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0ge1xuICAgIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItaXRlbS1ib3JkZXIpO1xuICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XG59XG4udGl0bGUge1xuICAgIGZvbnQtZmFtaWx5OiBtYW5yb3BlLWJvbGQ7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIG1heC13aWR0aDogaW5oZXJpdDtcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICAgIHdvcmQtd3JhcDogbm9ybWFsO1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItY29sb3IpO1xufVxuLnZhbHVlIHtcbiAgICBmb250LWZhbWlseTogbWFucm9wZS1yZWd1bGFyO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICBtYXgtd2lkdGg6IGluaGVyaXQ7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWNvbG9yKTtcbiAgICBvcGFjaXR5OiAwLjc7XG59IiwiKiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnkpO1xufVxuXG5pb24taWNvbi5zdGF0dXMtaWNvbiB7XG4gIG1hcmdpbi1sZWZ0OiA3cHg7XG4gIG1hcmdpbi1yaWdodDogN3B4O1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xufVxuXG5pb24tY2hpcCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1jaGlwKTtcbn1cblxuaW9uLWNoaXAgaW9uLWxhYmVsIHtcbiAgZm9udC1mYW1pbHk6IG1hbnJvcGUtYm9sZDtcbn1cblxuaW9uLWxpc3QgaW9uLWl0ZW0ge1xuICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWl0ZW0tYm9yZGVyKTtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMDtcbn1cblxuLnRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IG1hbnJvcGUtYm9sZDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgbWF4LXdpZHRoOiBpbmhlcml0O1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICB3b3JkLXdyYXA6IG5vcm1hbDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1jb2xvcik7XG59XG5cbi52YWx1ZSB7XG4gIGZvbnQtZmFtaWx5OiBtYW5yb3BlLXJlZ3VsYXI7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBtYXgtd2lkdGg6IGluaGVyaXQ7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItY29sb3IpO1xuICBvcGFjaXR5OiAwLjc7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/mini-status/mini-status.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/mini-status/mini-status.page.ts ***!
  \*******************************************************/
/*! exports provided: MiniStatusPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiniStatusPage", function() { return MiniStatusPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _service_minima_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../service/minima-api.service */ "./src/app/service/minima-api.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _service_status_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../service/status.service */ "./src/app/service/status.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var minima__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! minima */ "./node_modules/minima/dist/minima.js");
/* harmony import */ var minima__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(minima__WEBPACK_IMPORTED_MODULE_6__);







var MiniStatusPage = /** @class */ (function () {
    function MiniStatusPage(menu, service, alertController, api) {
        this.menu = menu;
        this.service = service;
        this.alertController = alertController;
        this.api = api;
    }
    MiniStatusPage.prototype.ngOnInit = function () { };
    MiniStatusPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        minima__WEBPACK_IMPORTED_MODULE_6__["Minima"].cmd('status full', function (res) {
            _this.service.updatedStatus.next(res.response);
        });
        this.updateStatus();
    };
    MiniStatusPage.prototype.ionViewWillLeave = function () {
        if (this.statusSubscription) {
            this.statusSubscription.unsubscribe(); // unsubs
        }
    };
    MiniStatusPage.prototype.presentAlert = function (hdr, message, subtitle) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            cssClass: 'alertContainer',
                            header: hdr,
                            subHeader: subtitle,
                            message: message,
                            buttons: ['OK']
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MiniStatusPage.prototype.openMenu = function () {
        this.menu.open();
    };
    MiniStatusPage.prototype.giveMe50 = function () {
        var _this = this;
        this.api.giveMe50().then(function (res) {
            if (res.status === true) {
                _this.presentAlert('Gimme50', 'Successful', 'Status');
            }
            else {
                _this.presentAlert('Gimme50', res.message, 'Status');
            }
        });
    };
    MiniStatusPage.prototype.updateStatus = function () {
        var _this = this;
        this.service.updatedStatus
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (responseData) {
            //console.log(responseData);
            responseData.uptime = responseData.uptime.replace(/\b0 Years\b|\b0 Months\b|\b0 Weeks\b|\b0 Days\b|\b0 Hours\b|\b0 Minutes\b|\b0 Seconds\b|\b0 Milliseconds\b/gi, " ");
            // responseData.uptime = responseData.uptime.replace(/1 Minutes/gi, "1 Minute");
            // responseData.uptime = responseData.uptime.replace(/1 Seconds/gi, "1 Second");
            // responseData.uptime = responseData.uptime.replace(/1 Years/gi, "1 Year");
            // responseData.uptime = responseData.uptime.replace(/1 Milliseconds/gi, "1 Millisecond");
            // responseData.uptime = responseData.uptime.replace(/1 Hours/gi, "1 Hour");
            return responseData;
        })).subscribe(function (res) {
            //console.log(res);
            if (_this.lastJSON !== JSON.stringify(res)) {
                _this.status = res;
                _this.lastJSON = JSON.stringify(res);
            }
        });
    };
    MiniStatusPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
        { type: _service_status_service__WEBPACK_IMPORTED_MODULE_4__["StatusService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
        { type: _service_minima_api_service__WEBPACK_IMPORTED_MODULE_1__["MinimaApiService"] }
    ]; };
    MiniStatusPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
            selector: 'app-mini-status',
            template: __webpack_require__(/*! raw-loader!./mini-status.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/mini-status/mini-status.page.html"),
            styles: [__webpack_require__(/*! ./mini-status.page.scss */ "./src/app/pages/mini-status/mini-status.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"], _service_status_service__WEBPACK_IMPORTED_MODULE_4__["StatusService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _service_minima_api_service__WEBPACK_IMPORTED_MODULE_1__["MinimaApiService"]])
    ], MiniStatusPage);
    return MiniStatusPage;
}());



/***/ }),

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var minima__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! minima */ "./node_modules/minima/dist/minima.js");
/* harmony import */ var minima__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(minima__WEBPACK_IMPORTED_MODULE_3__);




var MinimaApiService = /** @class */ (function () {
    function MinimaApiService(loadingController) {
        this.loadingController = loadingController;
    }
    MinimaApiService.prototype.createToken = function (data) {
        return this.req("tokencreate name:\"" + data.name + "\" amount:" + data.amount + " description:\"" + data.description + "\" script:\"" + data.script + "\" icon:" + data.icon + " proof:" + data.proof);
    };
    MinimaApiService.prototype.validateTokenID = function (tokenid) {
        return this.req("tokenvalidate " + tokenid);
    };
    MinimaApiService.prototype.sendMessageTransaction = function (data) {
        //const txnidentifier = Math.floor(Math.random()*1000000000);
        var postTransaction = "send " + data.amount + " " + data.address + " " + data.tokenid + " " + " 254:[01000100]#255:[\"" + data.message + "\"]";
        // const customTXN = 
        // // Custom TXN with an ID
        // "txncreate "+txnidentifier+";"+
        // // Add state variable 1
        // "txnstate "+txnidentifier+" 254 01000100"+";"+
        // // Add User state variable 2
        // "txnstate "+txnidentifier+" 255 \""+data.message+"\""+";"+
        // // Auto fill the transaction
        // "txnauto "+txnidentifier+" "+data.amount+" "+data.address+" "+data.tokenid+";"+
        // // Post it!
        // "txnpost "+txnidentifier+";"+
        // // Clear the txn
        // "txndelete "+txnidentifier+";";
        // // send 1 0xFF 0x00 '254:0x1000#255:[This is a message]'
        return this.req(postTransaction);
    };
    MinimaApiService.prototype.webLink = function (data) {
        return this.req('weblink+' + data.url);
    };
    MinimaApiService.prototype.setHost = function (newHost) {
        localStorage.setItem('minima_host', newHost);
    };
    MinimaApiService.prototype.newAddress = function () {
        return this.req('newaddress');
    };
    MinimaApiService.prototype.sendFunds = function (data) {
        return this.req('send ' + data.amount + ' ' + data.address + ' ' + data.tokenid);
    };
    MinimaApiService.prototype.giveMe50 = function () {
        return this.req('gimme50');
    };
    MinimaApiService.prototype.getBalance = function () {
        return this.req('balance');
    };
    MinimaApiService.prototype.getHistory = function () {
        return this.req('history');
    };
    MinimaApiService.prototype.clearMyHistory = function () {
        return this.req('history clear');
    };
    MinimaApiService.prototype.getStatus = function () {
        return this.req('status');
    };
    MinimaApiService.prototype.req = function (fnc) {
        var promise = new Promise(function (resolve) {
            minima__WEBPACK_IMPORTED_MODULE_3__["Minima"].cmd(fnc, function (resp) {
                //console.log(resp);
                resolve(resp);
            });
        });
        return promise;
    };
    MinimaApiService.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] }
    ]; };
    MinimaApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]])
    ], MinimaApiService);
    return MinimaApiService;
}());



/***/ }),

/***/ "./src/app/service/status.service.ts":
/*!*******************************************!*\
  !*** ./src/app/service/status.service.ts ***!
  \*******************************************/
/*! exports provided: StatusService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusService", function() { return StatusService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var minima__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! minima */ "./node_modules/minima/dist/minima.js");
/* harmony import */ var minima__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(minima__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var StatusService = /** @class */ (function () {
    function StatusService() {
        var _this = this;
        this.updatedStatus = new rxjs__WEBPACK_IMPORTED_MODULE_3__["ReplaySubject"](1);
        minima__WEBPACK_IMPORTED_MODULE_1__["Minima"].cmd('status full', function (res) {
            if (res.status) {
                //console.log(res);
                var first = res.response;
                _this.updatedStatus.next(first);
            }
        });
    }
    StatusService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], StatusService);
    return StatusService;
}());



/***/ })

}]);
//# sourceMappingURL=pages-mini-status-mini-status-module-es5.js.map