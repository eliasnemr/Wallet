(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-send-funds-send-funds-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/send-funds/send-funds.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/send-funds/send-funds.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-app>\n<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title color=\"primary\">\n      Send\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content *ngIf=\"isCameraOpen==false\">\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title>\n        <ion-item lines=\"none\">\n          <ion-icon style=\" font-size:2.0rem;\" slot=\"start\" name=\"send\" class=\"icon-head\" ></ion-icon>\n        </ion-item>\n      </ion-card-title>\n    </ion-card-header>\n\n    <ion-card-content>\n        <ion-item>\n          <ion-label position=\"floating\">Tokens</ion-label>\n          <ion-select \n              \n              interface = 'alert'\n              class=\"token-select\"\n              placeholder = \"Select your token\"\n              [(ngModel)]=\"selected_minima\">\n          <ion-select-option *ngFor=\"let token of tokenArr; let i = index\" value=\"{{token.id}}\" class=\"token-option\" >\n            {{ token.token  + ' <' + token.id.substring(0, 12) + '>'  }} \n          </ion-select-option>\n        </ion-select>\n        </ion-item>\n\n        <ion-item>\n          <ion-label position=\"floating\">Address</ion-label>\n          <ion-input name=\"address\" [(ngModel)]=\"data.address\"></ion-input>\n          \n        </ion-item>\n        <ion-item lines=\"none\" slot=\"end\" [hidden]=\"!checkPlatform()\">\n          <ion-button type=\"button\" class=\"util-btns\" size=\"small\" (click)=\"scanQR()\">\n            <ion-label slot=\"start\" style=\"padding:2px\">SCAN QR</ion-label>\n            <ion-icon  name=\"qr-scanner\" ></ion-icon>\n          </ion-button>\n          <ion-button type=\"button\" size=\"small\" class=\"util-btns\" (click)=\"pasteFromClipboard()\" [hidden]=\"!checkPlatform()\">\n            <ion-label slot=\"start\" style=\"padding:5px\">CLIPBOARD</ion-label>\n            <ion-icon name=\"clipboard\" ></ion-icon>\n          </ion-button>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"floating\">Amount</ion-label>\n          <ion-input type=\"number\" name=\"amount\" [(ngModel)]=\"data.amount\"></ion-input>\n        </ion-item>\n    </ion-card-content>\n    \n  </ion-card>\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <ion-buttons> \n      <ion-button class=\"action-btn\" expand=\"block\" (click)=\"stopCamera()\"  *ngIf=\"isCameraOpen==true\">\n        Stop scanning\n       </ion-button>\n      <ion-button class=\"action-btn\" expand=\"block\" (click)=\"sendFunds()\" *ngIf=\"isCameraOpen==false\">\n        <ion-icon name=\"send\" slot=\"start\"></ion-icon> Send\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer>\n</ion-app>"

/***/ }),

/***/ "./src/app/pages/send-funds/send-funds.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/send-funds/send-funds.module.ts ***!
  \*******************************************************/
/*! exports provided: SendFundsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendFundsPageModule", function() { return SendFundsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _send_funds_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./send-funds.page */ "./src/app/pages/send-funds/send-funds.page.ts");







const routes = [
    {
        path: '',
        component: _send_funds_page__WEBPACK_IMPORTED_MODULE_6__["SendFundsPage"]
    }
];
let SendFundsPageModule = class SendFundsPageModule {
};
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



/***/ }),

/***/ "./src/app/pages/send-funds/send-funds.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/send-funds/send-funds.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-card {\n  border-radius: 15px;\n}\n\nion-footer ion-toolbar ion-buttons ion-button {\n  width: 100%;\n}\n\n.icon-head {\n  color: #1FB4CD;\n}\n\n.util-btns {\n  padding: 3px;\n  text-align: center;\n  margin: 2px;\n}\n\n.action-btn {\n  height: 40px;\n}\n\n.action-btn:hover {\n  height: 50px !important;\n}\n\n.token-select {\n  font-family: Aeonik;\n  color: #1FB4CD;\n  font-weight: bolder;\n  max-width: 100% !important;\n  width: 100% !important;\n  padding-left: 0 !important;\n}\n\n.token-select .alert-wrapper.sc-ion-alert-md {\n  max-width: 50% !important;\n}\n\n.transparentBody {\n  background: none transparent !important;\n  --background: none transparent !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGlhcy9Qcm9qZWN0cy9taW5pbWFjb3JlL21vYmlsZS1hcHAtZnJvbnQtZW5kL2FwcC9zcmMvYXBwL3BhZ2VzL3NlbmQtZnVuZHMvc2VuZC1mdW5kcy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3NlbmQtZnVuZHMvc2VuZC1mdW5kcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtBQ0NGOztBRENBO0VBQ0UsV0FBQTtBQ0VGOztBREFBO0VBQ0UsY0FBQTtBQ0dGOztBRERBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBRUEsV0FBQTtBQ0dGOztBRERBO0VBQ0UsWUFBQTtBQ0lGOztBREZBO0VBQ0UsdUJBQUE7QUNLRjs7QURIQTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7RUFDQSxzQkFBQTtFQUNBLDBCQUFBO0FDTUY7O0FESkE7RUFDRSx5QkFBQTtBQ09GOztBRExBO0VBQ0MsdUNBQUE7RUFDQSx5Q0FBQTtBQ1FEIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2VuZC1mdW5kcy9zZW5kLWZ1bmRzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJkIHtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbn1cbmlvbi1mb290ZXIgaW9uLXRvb2xiYXIgaW9uLWJ1dHRvbnMgaW9uLWJ1dHRvbntcbiAgd2lkdGg6IDEwMCU7XG59XG4uaWNvbi1oZWFke1xuICBjb2xvcjogIzFGQjRDRDtcbn1cbi51dGlsLWJ0bnMge1xuICBwYWRkaW5nOiAzcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgLy8gcGFkZGluZzogMXB4O1xuICBtYXJnaW46IDJweDtcbn1cbi5hY3Rpb24tYnRuIHtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuLmFjdGlvbi1idG46aG92ZXIge1xuICBoZWlnaHQ6IDUwcHggIWltcG9ydGFudDsgXG59XG4udG9rZW4tc2VsZWN0IHtcbiAgZm9udC1mYW1pbHk6IEFlb25paztcbiAgY29sb3I6ICMxRkI0Q0Q7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWxlZnQ6IDAgIWltcG9ydGFudDtcbn1cbi50b2tlbi1zZWxlY3QgLmFsZXJ0LXdyYXBwZXIuc2MtaW9uLWFsZXJ0LW1kIHtcbiAgbWF4LXdpZHRoOiA1MCUgIWltcG9ydGFudDtcbn1cbi50cmFuc3BhcmVudEJvZHkge1xuXHRiYWNrZ3JvdW5kOiBub25lIHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG5cdC0tYmFja2dyb3VuZDogbm9uZSB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuIiwiaW9uLWNhcmQge1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xufVxuXG5pb24tZm9vdGVyIGlvbi10b29sYmFyIGlvbi1idXR0b25zIGlvbi1idXR0b24ge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmljb24taGVhZCB7XG4gIGNvbG9yOiAjMUZCNENEO1xufVxuXG4udXRpbC1idG5zIHtcbiAgcGFkZGluZzogM3B4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMnB4O1xufVxuXG4uYWN0aW9uLWJ0biB7XG4gIGhlaWdodDogNDBweDtcbn1cblxuLmFjdGlvbi1idG46aG92ZXIge1xuICBoZWlnaHQ6IDUwcHggIWltcG9ydGFudDtcbn1cblxuLnRva2VuLXNlbGVjdCB7XG4gIGZvbnQtZmFtaWx5OiBBZW9uaWs7XG4gIGNvbG9yOiAjMUZCNENEO1xuICBmb250LXdlaWdodDogYm9sZGVyO1xuICBtYXgtd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgcGFkZGluZy1sZWZ0OiAwICFpbXBvcnRhbnQ7XG59XG5cbi50b2tlbi1zZWxlY3QgLmFsZXJ0LXdyYXBwZXIuc2MtaW9uLWFsZXJ0LW1kIHtcbiAgbWF4LXdpZHRoOiA1MCUgIWltcG9ydGFudDtcbn1cblxuLnRyYW5zcGFyZW50Qm9keSB7XG4gIGJhY2tncm91bmQ6IG5vbmUgdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgLS1iYWNrZ3JvdW5kOiBub25lIHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/send-funds/send-funds.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/send-funds/send-funds.page.ts ***!
  \*****************************************************/
/*! exports provided: SendFundsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendFundsPage", function() { return SendFundsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _service_balance_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/balance.service */ "./src/app/service/balance.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_qr_scanner_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/qr-scanner/ngx */ "./node_modules/@ionic-native/qr-scanner/ngx/index.js");
/* harmony import */ var _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/clipboard/ngx */ "./node_modules/@ionic-native/clipboard/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _service_minima_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../service/minima-api.service */ "./src/app/service/minima-api.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");









let SendFundsPage = class SendFundsPage {
    constructor(qrScanner, clipboard, alertController, zone, api, balanceService, platform, route) {
        this.qrScanner = qrScanner;
        this.clipboard = clipboard;
        this.alertController = alertController;
        this.zone = zone;
        this.api = api;
        this.balanceService = balanceService;
        this.platform = platform;
        this.route = route;
        this.lastJSON = '';
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
    ngOnInit() {
        console.log(this.route.snapshot.params['id']);
    }
    ionViewWillEnter() {
        if (this.route.snapshot.params['id'] === '') {
            this.selected_minima = this.MINIMA_TOKEN_ID;
            this.pullInTokens();
            this.isCameraOpen = false;
        }
        else {
            this.selected_minima = this.route.snapshot.params['id'];
            this.pullInTokens();
            this.isCameraOpen = false;
        }
    }
    ionViewWillLeave() {
        this.stopCamera();
        this.balanceSubscription.unsubscribe();
    }
    ionViewDidLoad() {
        this.data.tokenid = this.MINIMA_TOKEN_ID;
    }
    identifyPlatformToScan_Add() {
        if (this.platform.is('ios')) {
            setTimeout(() => {
                window.document.querySelectorAll('ion-content')
                    .forEach(element => {
                    const element1 = element.shadowRoot.querySelector('style');
                    element1.innerHTML = element1.innerHTML
                        .replace('--background:var(--ion-background-color,#fff);', '--background: transparent');
                });
            }, 300);
        }
        else if (this.platform.is('android')) {
            // window.document.querySelector('ion-content').classList.add('transparentBody');
            setTimeout(() => {
                window.document.querySelectorAll('ion-content')
                    .forEach(element => {
                    const element1 = element.shadowRoot.querySelector('style');
                    element1.innerHTML = element1.innerHTML
                        .replace('--background:var(--ion-background-color,#fff);', '--background: transparent');
                });
            }, 300);
        }
    }
    identifyPlatformToScan_Remove() {
        if (this.platform.is('ios')) {
            setTimeout(() => {
                window.document.querySelectorAll('ion-content')
                    .forEach(element => {
                    const element1 = element.shadowRoot.querySelector('style');
                    element1.innerHTML = element1.innerHTML
                        .replace('--background: transparent', '--background:var(--ion-background-color,#fff);');
                });
            }, 300);
        }
        else if (this.platform.is('android')) {
            // window.document.querySelector('ion-content').classList.remove('transparentBody');
            setTimeout(() => {
                window.document.querySelectorAll('ion-content')
                    .forEach(element => {
                    const element1 = element.shadowRoot.querySelector('style');
                    element1.innerHTML = element1.innerHTML
                        .replace('--background: transparent', '--background:var(--ion-background-color,#fff);');
                });
            }, 300);
        }
    }
    scanQR() {
        this.qrScanner.prepare()
            .then((status) => {
            if (status.authorized) {
                // Which class adding should I use?
                this.identifyPlatformToScan_Add();
                this.qrScanner.show();
                this.isCameraOpen = true;
                this.scanSub = this.qrScanner.scan().subscribe((text) => {
                    this.zone.run(() => {
                        this.data.address = text;
                        this.stopCamera();
                        this.identifyPlatformToScan_Remove();
                        this.isCameraOpen = false;
                    });
                }, (err) => {
                    console.log('Scanned failed', err);
                });
            }
            else if (status.denied) {
                // camera permission was permanently denied
                // you must use QRScanner.openSettings() method to guide the user to the settings page
                // then they can grant the permission from there
                this.presentAlert('Please check camera permission', 'Error');
            }
            else {
                // permission was denied, but not permanently. You can ask for permission again at a later time.
                this.presentAlert('Please check camera permission', 'Error');
            }
        })
            .catch((e) => console.log('Error is', e));
    }
    stopCamera() {
        console.log('stop camera', this.scanSub);
        if (this.scanSub !== null) {
            console.log("stopCamera - is not null..");
            this.qrScanner.hide();
            this.scanSub.unsubscribe();
        }
        this.scanSub = null;
        this.identifyPlatformToScan_Remove();
        this.isCameraOpen = false;
        this.qrScanner.destroy();
    }
    pasteFromClipboard() {
        if (this.platform.is('desktop') || this.platform.is('pwa')) {
            this.pasteFromPWA();
        }
        else {
            this.clipboard.paste().then((resolve) => {
                this.data.address = resolve;
            }, (reject) => {
                console.log('Error: ' + reject);
            });
        }
    }
    pasteFromPWA() {
        document.addEventListener('paste', (e) => {
            this.data.address = e.clipboardData.getData('text');
            e.preventDefault();
            document.removeEventListener('paste', null);
        });
        document.execCommand('paste');
        console.log('executed paste command');
    }
    presentAlert(msg, header) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: header,
                message: msg,
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    pullInTokens() {
        this.balanceSubscription = this.balanceService.getBalance().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(responseData => {
            const tokenArr = [];
            for (const key in responseData.response.balance) {
                if (responseData.response.balance.hasOwnProperty(key)) {
                    let element = responseData.response.balance[key];
                    // round up confirmed && unconfirmed
                    let tempConfirmed = (Math.round(element.confirmed * 100) / 100);
                    let tempUnconfirmed = (Math.round(element.unconfirmed * 100) / 100);
                    if (this.MINIMA_TOKEN_ID === element.tokenid) {
                        this.minimaToken = element.tokenid;
                    }
                    tokenArr.push({
                        id: element.tokenid,
                        token: element.token,
                        confirmed: tempConfirmed,
                        unconfirmed: tempUnconfirmed,
                        total: element.total
                    });
                    // add Minima always to the top
                    if (element.tokenid === this.MINIMA_TOKEN_ID) {
                        tokenArr.pop(); // pop it
                        this.balanceService.update(tokenArr, {
                            id: element.tokenid,
                            token: element.token,
                            confirmed: tempConfirmed,
                            unconfirmed: tempUnconfirmed,
                            total: element.total
                        });
                    }
                }
            }
            return tokenArr;
        }))
            .subscribe(responseData => {
            //check if changed
            if (this.lastJSON !== JSON.stringify(responseData)) {
                this.tokenArr = [...responseData];
                this.lastJSON = JSON.stringify(responseData);
            }
        });
    }
    sendFunds() {
        this.data.tokenid = this.selected_minima;
        if (this.data.address && this.data.address !== '' && this.data.amount && this.data.amount > 0 &&
            this.data.tokenid && this.data.tokenid !== '') {
            this.api.sendFunds(this.data).then((res) => {
                if (res.status == true) {
                    this.presentAlert('Sent successfully!', 'Info');
                }
                else {
                    this.presentAlert(res.error, 'Error');
                }
            });
        }
        else {
            this.presentAlert('Please check the input fields', 'Error');
        }
    }
    checkPlatform() {
        if (this.platform.is('desktop') || this.platform.is('pwa')) {
            return false;
        }
        else {
            return true;
        }
    }
};
SendFundsPage.ctorParameters = () => [
    { type: _ionic_native_qr_scanner_ngx__WEBPACK_IMPORTED_MODULE_3__["QRScanner"] },
    { type: _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_4__["Clipboard"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"] },
    { type: _service_minima_api_service__WEBPACK_IMPORTED_MODULE_6__["MinimaApiService"] },
    { type: _service_balance_service__WEBPACK_IMPORTED_MODULE_1__["BalanceService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] }
];
SendFundsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-send-funds',
        template: __webpack_require__(/*! raw-loader!./send-funds.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/send-funds/send-funds.page.html"),
        providers: [_service_balance_service__WEBPACK_IMPORTED_MODULE_1__["BalanceService"]],
        styles: [__webpack_require__(/*! ./send-funds.page.scss */ "./src/app/pages/send-funds/send-funds.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_qr_scanner_ngx__WEBPACK_IMPORTED_MODULE_3__["QRScanner"], _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_4__["Clipboard"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"],
        _service_minima_api_service__WEBPACK_IMPORTED_MODULE_6__["MinimaApiService"],
        _service_balance_service__WEBPACK_IMPORTED_MODULE_1__["BalanceService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"],
        _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]])
], SendFundsPage);



/***/ })

}]);
//# sourceMappingURL=pages-send-funds-send-funds-module-es2015.js.map