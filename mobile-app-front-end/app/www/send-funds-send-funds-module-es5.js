(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["send-funds-send-funds-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/send-funds/send-funds.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/send-funds/send-funds.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-app>\n<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title color=\"primary\">\n      Send\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content *ngIf=\"isCameraOpen==false\">\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title>\n        <ion-item lines=\"none\">\n          <ion-icon style=\" font-size:2.0rem;\" slot=\"start\" name=\"send\" class=\"icon-head\" ></ion-icon>\n        </ion-item>\n      </ion-card-title>\n    </ion-card-header>\n\n    <ion-card-content>\n        <ion-item>\n          <ion-label position=\"floating\">Tokens</ion-label>\n          <ion-select \n              class=\"token-select\"\n              name=\"token\"\n              cancelText=\"Dismiss\"\n              okText=\"Ok\"\n              [(ngModel)]= \"data.tokenid\"\n              placeholder=\"Select your token\">\n            <ion-select-option  *ngFor=\"let token of tokenArr\" [value]=\"token.tokenid\">\n              {{ token.token  + ' <' + token.tokenid.substring(0, 12) + '>'  }} \n            </ion-select-option>\n        </ion-select>\n        </ion-item>\n\n        <ion-item>\n          <ion-label position=\"floating\">Address</ion-label>\n          <ion-input name=\"address\" [(ngModel)]=\"data.address\"></ion-input>\n          \n        </ion-item>\n        <ion-item lines=\"none\" slot=\"end\">\n          <ion-button type=\"button\" class=\"util-btns\" size=\"small\" (click)=\"scanQR()\">\n            <ion-label slot=\"start\" style=\"padding:2px\">SCAN QR</ion-label>\n            <ion-icon  name=\"qr-scanner\" ></ion-icon>\n          </ion-button>\n          <ion-button type=\"button\" size=\"small\" class=\"util-btns\" (click)=\"pasteFromClipboard()\">\n            <ion-label slot=\"start\" style=\"padding:5px\">CLIPBOARD</ion-label>\n            <ion-icon name=\"clipboard\" ></ion-icon>\n          </ion-button>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"floating\">Amount</ion-label>\n          <ion-input type=\"number\" name=\"amount\" [(ngModel)]=\"data.amount\"></ion-input>\n        </ion-item>\n    </ion-card-content>\n    \n  </ion-card>\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <ion-buttons> \n      <ion-button class=\"action-btn\" expand=\"block\" (click)=\"stopCamera()\"  *ngIf=\"isCameraOpen==true\">\n        Stop scanning\n       </ion-button>\n      <ion-button class=\"action-btn\" expand=\"block\" (click)=\"sendFunds()\" *ngIf=\"isCameraOpen==false\">\n        <ion-icon name=\"send\" slot=\"start\"></ion-icon> Send\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer>\n</ion-app>"

/***/ }),

/***/ "./src/app/send-funds/send-funds.module.ts":
/*!*************************************************!*\
  !*** ./src/app/send-funds/send-funds.module.ts ***!
  \*************************************************/
/*! exports provided: SendFundsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendFundsPageModule", function() { return SendFundsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _send_funds_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./send-funds.page */ "./src/app/send-funds/send-funds.page.ts");







var routes = [
    {
        path: '',
        component: _send_funds_page__WEBPACK_IMPORTED_MODULE_6__["SendFundsPage"]
    }
];
var SendFundsPageModule = /** @class */ (function () {
    function SendFundsPageModule() {
    }
    SendFundsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_send_funds_page__WEBPACK_IMPORTED_MODULE_6__["SendFundsPage"]]
        })
    ], SendFundsPageModule);
    return SendFundsPageModule;
}());



/***/ }),

/***/ "./src/app/send-funds/send-funds.page.scss":
/*!*************************************************!*\
  !*** ./src/app/send-funds/send-funds.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-card {\n  border-radius: 15px;\n}\n\nion-footer ion-toolbar ion-buttons ion-button {\n  width: 100%;\n}\n\n.icon-head {\n  color: #1FB4CD;\n}\n\n.util-btns {\n  padding: 3px;\n  text-align: center;\n  margin: 2px;\n}\n\n.action-btn {\n  height: 40px;\n}\n\n.action-btn:hover {\n  height: 50px !important;\n}\n\n.token-select {\n  font-family: Aeonik;\n  color: #1FB4CD;\n  font-weight: bolder;\n}\n\n.transparentBody {\n  background: none transparent !important;\n  --background: none transparent !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGlhcy9Qcm9qZWN0cy9taW5pbWFjb3JlL21vYmlsZS1hcHAtZnJvbnQtZW5kL2FwcC9zcmMvYXBwL3NlbmQtZnVuZHMvc2VuZC1mdW5kcy5wYWdlLnNjc3MiLCJzcmMvYXBwL3NlbmQtZnVuZHMvc2VuZC1mdW5kcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtBQ0NGOztBRENBO0VBQ0UsV0FBQTtBQ0VGOztBREFBO0VBQ0UsY0FBQTtBQ0dGOztBRERBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBRUEsV0FBQTtBQ0dGOztBRERBO0VBQ0UsWUFBQTtBQ0lGOztBREZBO0VBQ0UsdUJBQUE7QUNLRjs7QURIQTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FDTUY7O0FESkE7RUFDQyx1Q0FBQTtFQUNBLHlDQUFBO0FDT0QiLCJmaWxlIjoic3JjL2FwcC9zZW5kLWZ1bmRzL3NlbmQtZnVuZHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmQge1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xufVxuaW9uLWZvb3RlciBpb24tdG9vbGJhciBpb24tYnV0dG9ucyBpb24tYnV0dG9ue1xuICB3aWR0aDogMTAwJTtcbn1cbi5pY29uLWhlYWR7XG4gIGNvbG9yOiAjMUZCNENEO1xufVxuLnV0aWwtYnRucyB7XG4gIHBhZGRpbmc6IDNweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAvLyBwYWRkaW5nOiAxcHg7XG4gIG1hcmdpbjogMnB4O1xufVxuLmFjdGlvbi1idG4ge1xuICBoZWlnaHQ6IDQwcHg7XG59XG4uYWN0aW9uLWJ0bjpob3ZlciB7XG4gIGhlaWdodDogNTBweCAhaW1wb3J0YW50OyBcbn1cbi50b2tlbi1zZWxlY3Qge1xuICBmb250LWZhbWlseTogQWVvbmlrO1xuICBjb2xvcjogIzFGQjRDRDtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbn1cbi50cmFuc3BhcmVudEJvZHkge1xuXHRiYWNrZ3JvdW5kOiBub25lIHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG5cdC0tYmFja2dyb3VuZDogbm9uZSB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufSIsImlvbi1jYXJkIHtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbn1cblxuaW9uLWZvb3RlciBpb24tdG9vbGJhciBpb24tYnV0dG9ucyBpb24tYnV0dG9uIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5pY29uLWhlYWQge1xuICBjb2xvcjogIzFGQjRDRDtcbn1cblxuLnV0aWwtYnRucyB7XG4gIHBhZGRpbmc6IDNweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDJweDtcbn1cblxuLmFjdGlvbi1idG4ge1xuICBoZWlnaHQ6IDQwcHg7XG59XG5cbi5hY3Rpb24tYnRuOmhvdmVyIHtcbiAgaGVpZ2h0OiA1MHB4ICFpbXBvcnRhbnQ7XG59XG5cbi50b2tlbi1zZWxlY3Qge1xuICBmb250LWZhbWlseTogQWVvbmlrO1xuICBjb2xvcjogIzFGQjRDRDtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbn1cblxuLnRyYW5zcGFyZW50Qm9keSB7XG4gIGJhY2tncm91bmQ6IG5vbmUgdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgLS1iYWNrZ3JvdW5kOiBub25lIHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/send-funds/send-funds.page.ts":
/*!***********************************************!*\
  !*** ./src/app/send-funds/send-funds.page.ts ***!
  \***********************************************/
/*! exports provided: SendFundsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendFundsPage", function() { return SendFundsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _service_balance_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../service/balance.service */ "./src/app/service/balance.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_qr_scanner_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/qr-scanner/ngx */ "./node_modules/@ionic-native/qr-scanner/ngx/index.js");
/* harmony import */ var _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/clipboard/ngx */ "./node_modules/@ionic-native/clipboard/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _service_minima_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service/minima-api.service */ "./src/app/service/minima-api.service.ts");







var SendFundsPage = /** @class */ (function () {
    function SendFundsPage(qrScanner, clipboard, alertController, zone, api, balanceService, platform) {
        this.qrScanner = qrScanner;
        this.clipboard = clipboard;
        this.alertController = alertController;
        this.zone = zone;
        this.api = api;
        this.balanceService = balanceService;
        this.platform = platform;
        this.data = {};
        this.isCameraOpen = false;
        this.scanSub = null;
        this.ionApp = document.getElementsByTagName('ion-app')[0];
        // Pull in tokens vars
        this.MINIMA_TOKEN_ID = '0x0000000000000000000000000000000000000000000000000000000000000000';
        this.hideProgress = false;
        this.progressShow = true;
        this.tokenArr = [];
    }
    SendFundsPage.prototype.ngOnInit = function () { };
    SendFundsPage.prototype.ionViewWillEnter = function () {
        this.pullInTokens();
        this.isCameraOpen = false;
    };
    SendFundsPage.prototype.ionViewWillLeave = function () {
        this.stopCamera();
    };
    SendFundsPage.prototype.identifyPlatformToScan_Add = function () {
        if (this.platform.is('ios')) {
            console.log('iOS Qr Code.');
            setTimeout(function () {
                window.document.querySelectorAll('ion-content')
                    .forEach(function (element) {
                    var element1 = element.shadowRoot.querySelector('style');
                    element1.innerHTML = element1.innerHTML
                        .replace('--background:var(--ion-background-color,#fff);', '--background: transparent');
                });
            }, 300);
        }
        else if (this.platform.is('android')) {
            // window.document.querySelector('ion-content').classList.add('transparentBody');
            setTimeout(function () {
                window.document.querySelectorAll('ion-content')
                    .forEach(function (element) {
                    var element1 = element.shadowRoot.querySelector('style');
                    element1.innerHTML = element1.innerHTML
                        .replace('--background:var(--ion-background-color,#fff);', '--background: transparent');
                });
            }, 300);
        }
    };
    SendFundsPage.prototype.identifyPlatformToScan_Remove = function () {
        if (this.platform.is('ios')) {
            console.log('iOS Qr Code.');
            setTimeout(function () {
                window.document.querySelectorAll('ion-content')
                    .forEach(function (element) {
                    var element1 = element.shadowRoot.querySelector('style');
                    element1.innerHTML = element1.innerHTML
                        .replace('--background: transparent', '--background:var(--ion-background-color,#fff);');
                });
            }, 300);
        }
        else if (this.platform.is('android')) {
            // window.document.querySelector('ion-content').classList.remove('transparentBody');
            setTimeout(function () {
                window.document.querySelectorAll('ion-content')
                    .forEach(function (element) {
                    var element1 = element.shadowRoot.querySelector('style');
                    element1.innerHTML = element1.innerHTML
                        .replace('--background: transparent', '--background:var(--ion-background-color,#fff);');
                });
            }, 300);
        }
    };
    SendFundsPage.prototype.scanQR = function () {
        var _this = this;
        this.qrScanner.prepare()
            .then(function (status) {
            if (status.authorized) {
                // camera permission was granted
                console.log('scanQR', status);
                // Which class adding should I use?
                _this.identifyPlatformToScan_Add();
                _this.qrScanner.show();
                _this.isCameraOpen = true;
                _this.scanSub = _this.qrScanner.scan().subscribe(function (text) {
                    console.log('Scanned something', text);
                    _this.zone.run(function () {
                        console.log('Scanned something', text);
                        _this.data.address = text;
                        _this.stopCamera();
                        _this.identifyPlatformToScan_Remove();
                        _this.isCameraOpen = false;
                    });
                }, function (err) {
                    console.log('Scanned failed', err);
                });
            }
            else if (status.denied) {
                // camera permission was permanently denied
                // you must use QRScanner.openSettings() method to guide the user to the settings page
                // then they can grant the permission from there
                console.log('error permission needed');
                _this.presentAlert('Please check camera permission', 'Error');
            }
            else {
                // permission was denied, but not permanently. You can ask for permission again at a later time.
                console.log('error permission needed');
                _this.presentAlert('Please check camera permission', 'Error');
            }
        })
            .catch(function (e) { return console.log('Error is', e); });
    };
    SendFundsPage.prototype.stopCamera = function () {
        console.log('stop camera', this.scanSub);
        if (this.scanSub !== null) {
            console.log("stopCamera - is not null..");
            this.qrScanner.hide();
            this.scanSub.unsubscribe();
        }
        this.scanSub = null;
        this.identifyPlatformToScan_Remove();
        //this.ionApp.style.display = 'block';
        this.isCameraOpen = false;
        this.qrScanner.destroy();
    };
    SendFundsPage.prototype.pasteFromClipboard = function () {
        var _this = this;
        this.clipboard.paste().then(function (resolve) {
            _this.data.address = resolve;
        }, function (reject) {
            console.log('Error: ' + reject);
        });
    };
    SendFundsPage.prototype.presentAlert = function (msg, header) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: header,
                            message: msg,
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
    SendFundsPage.prototype.pullInTokens = function () {
        var _this = this;
        this.balanceService.getBalance().subscribe(function (res) {
            for (var key in res.response) {
                _this.tokenArr = res.response[key];
            }
            return _this.tokenArr;
        });
    };
    SendFundsPage.prototype.sendFunds = function () {
        var _this = this;
        if (this.data.address && this.data.address !== '' && this.data.amount && this.data.amount > 0 &&
            this.data.tokenid && this.data.tokenid !== '') {
            console.log('sendFunds', this.data);
            this.api.sendFunds(this.data).then(function (res) {
                console.log("Send " + JSON.stringify(res));
                if (res.status == true) {
                    _this.presentAlert('Sent successfully!', 'Info');
                }
                else {
                    _this.presentAlert(res.error, 'Error');
                }
            });
        }
        else {
            this.presentAlert('Please check the input fields', 'Error');
        }
    };
    SendFundsPage.ctorParameters = function () { return [
        { type: _ionic_native_qr_scanner_ngx__WEBPACK_IMPORTED_MODULE_3__["QRScanner"] },
        { type: _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_4__["Clipboard"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"] },
        { type: _service_minima_api_service__WEBPACK_IMPORTED_MODULE_6__["MinimaApiService"] },
        { type: _service_balance_service__WEBPACK_IMPORTED_MODULE_1__["BalanceService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"] }
    ]; };
    SendFundsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-send-funds',
            template: __webpack_require__(/*! raw-loader!./send-funds.page.html */ "./node_modules/raw-loader/index.js!./src/app/send-funds/send-funds.page.html"),
            providers: [_service_balance_service__WEBPACK_IMPORTED_MODULE_1__["BalanceService"]],
            styles: [__webpack_require__(/*! ./send-funds.page.scss */ "./src/app/send-funds/send-funds.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_qr_scanner_ngx__WEBPACK_IMPORTED_MODULE_3__["QRScanner"], _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_4__["Clipboard"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"],
            _service_minima_api_service__WEBPACK_IMPORTED_MODULE_6__["MinimaApiService"],
            _service_balance_service__WEBPACK_IMPORTED_MODULE_1__["BalanceService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"]])
    ], SendFundsPage);
    return SendFundsPage;
}());



/***/ })

}]);
//# sourceMappingURL=send-funds-send-funds-module-es5.js.map