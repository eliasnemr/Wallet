(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["send-funds-send-funds-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/send-funds/send-funds.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/send-funds/send-funds.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-app>\n<ion-header *ngIf=\"isCameraOpen==false\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title color=\"primary\">\n      Send\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card *ngIf=\"isCameraOpen==false\" >\n    <ion-card-header>\n      <ion-card-title>\n        <ion-item lines=\"none\">\n          <ion-icon style=\" font-size:2.0rem;\" slot=\"start\" name=\"send\" class=\"icon-head\" ></ion-icon>\n        </ion-item>\n      </ion-card-title>\n    </ion-card-header>\n\n    <ion-card-content>\n      <form>\n        <ion-item>\n          <ion-label position=\"floating\">Tokens</ion-label>\n          <ion-select \n              class=\"token-select\"\n              name=\"token\"\n              cancelText=\"Dismiss\"\n              okText=\"Ok\"\n              [(ngModel)]= \"data.tokenid\"\n              placeholder=\"Select your token\">\n            <ion-select-option  *ngFor=\"let token of tokenArr\" [value]=\"token.tokenid\">\n              {{ token.token  + '->' + token.tokenid  }} \n            </ion-select-option>\n        </ion-select>\n        </ion-item>\n\n        <ion-item>\n          <ion-label position=\"floating\">Address</ion-label>\n          <ion-input name=\"address\" [(ngModel)]=\"data.address\"></ion-input>\n          \n        </ion-item>\n        <ion-item lines=\"none\" slot=\"end\">\n          <ion-button type=\"button\" class=\"util-btns\" size=\"small\" (click)=\"scanQR()\">\n            <ion-label slot=\"start\" style=\"padding:2px\">SCAN QR</ion-label>\n            <ion-icon  name=\"qr-scanner\" ></ion-icon>\n          </ion-button>\n          <ion-button type=\"button\" size=\"small\" class=\"util-btns\" (click)=\"pasteFromClipboard()\">\n            <ion-label slot=\"start\" style=\"padding:5px\">CLIPBOARD</ion-label>\n            <ion-icon name=\"clipboard\" ></ion-icon>\n          </ion-button>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"floating\">Amount</ion-label>\n          <ion-input type=\"number\" name=\"amount\" [(ngModel)]=\"data.amount\"></ion-input>\n        </ion-item>\n      </form>\n\n    </ion-card-content>\n    \n  </ion-card>\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <ion-buttons> \n      <ion-button class=\"action-btn\" expand=\"block\" (click)=\"stopCamera()\"  *ngIf=\"isCameraOpen==true\">\n        Stop scanning\n       </ion-button>\n      <ion-button class=\"action-btn\" expand=\"block\" (click)=\"sendFunds()\" *ngIf=\"isCameraOpen==false\">\n        <ion-icon name=\"send\" slot=\"start\"></ion-icon> Send\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer>\n</ion-app>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _send_funds_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./send-funds.page */ "./src/app/send-funds/send-funds.page.ts");







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

/***/ "./src/app/send-funds/send-funds.page.scss":
/*!*************************************************!*\
  !*** ./src/app/send-funds/send-funds.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".transparentBody {\n  --background: none transparent;\n}\n\nion-card {\n  border-radius: 15px;\n}\n\nion-footer ion-toolbar ion-buttons ion-button {\n  width: 100%;\n}\n\n.icon-head {\n  color: #1FB4CD;\n}\n\n.util-btns {\n  padding: 3px;\n  text-align: center;\n  margin: 2px;\n}\n\n.action-btn {\n  height: 40px;\n}\n\n.action-btn:hover {\n  height: 50px !important;\n}\n\n.token-select {\n  font-family: Aeonik;\n  color: #1FB4CD;\n  font-weight: bolder;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGlhcy9Qcm9qZWN0cy9taW5pbWFjb3JlL21vYmlsZS1hcHAtZnJvbnQtZW5kL2FwcC9zcmMvYXBwL3NlbmQtZnVuZHMvc2VuZC1mdW5kcy5wYWdlLnNjc3MiLCJzcmMvYXBwL3NlbmQtZnVuZHMvc2VuZC1mdW5kcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw4QkFBQTtBQ0NKOztBRFNBO0VBQ0UsbUJBQUE7QUNORjs7QURRQTtFQUNFLFdBQUE7QUNMRjs7QURPQTtFQUNFLGNBQUE7QUNKRjs7QURNQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUVBLFdBQUE7QUNKRjs7QURNQTtFQUNFLFlBQUE7QUNIRjs7QURLQTtFQUNFLHVCQUFBO0FDRkY7O0FESUE7RUFDRSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQ0RGIiwiZmlsZSI6InNyYy9hcHAvc2VuZC1mdW5kcy9zZW5kLWZ1bmRzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50cmFuc3BhcmVudEJvZHkge1xuICAgIC0tYmFja2dyb3VuZDogbm9uZSB0cmFuc3BhcmVudDtcbiAgfVxuXG4vLyBpb24tYXBwLnRyYW5zcGFyZW50Qm9keSBpb24tbmF2e29wYWNpdHk6MH1cblxuLy8gaW9uLWFwcC50cmFuc3BhcmVudEJvZHksIGlvbi1hcHAudHJhbnNwYXJlbnRCb2R5IGlvbi1jb250ZW50LCBpb24tYXBwLnRyYW5zcGFyZW50Qm9keSAubmF2LWRlY29yIHtcblx0IFxuLy8gXHQtLWJhY2tncm91bmQ6IG5vbmUgdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbi8vICAgfVxuXG5pb24tY2FyZCB7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG59XG5pb24tZm9vdGVyIGlvbi10b29sYmFyIGlvbi1idXR0b25zIGlvbi1idXR0b257XG4gIHdpZHRoOiAxMDAlO1xufVxuLmljb24taGVhZHtcbiAgY29sb3I6ICMxRkI0Q0Q7XG59XG4udXRpbC1idG5zIHtcbiAgcGFkZGluZzogM3B4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIC8vIHBhZGRpbmc6IDFweDtcbiAgbWFyZ2luOiAycHg7XG59XG4uYWN0aW9uLWJ0biB7XG4gIGhlaWdodDogNDBweDtcbn1cbi5hY3Rpb24tYnRuOmhvdmVyIHtcbiAgaGVpZ2h0OiA1MHB4ICFpbXBvcnRhbnQ7IFxufVxuLnRva2VuLXNlbGVjdCB7XG4gIGZvbnQtZmFtaWx5OiBBZW9uaWs7XG4gIGNvbG9yOiAjMUZCNENEO1xuICBmb250LXdlaWdodDogYm9sZGVyO1xufVxuIiwiLnRyYW5zcGFyZW50Qm9keSB7XG4gIC0tYmFja2dyb3VuZDogbm9uZSB0cmFuc3BhcmVudDtcbn1cblxuaW9uLWNhcmQge1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xufVxuXG5pb24tZm9vdGVyIGlvbi10b29sYmFyIGlvbi1idXR0b25zIGlvbi1idXR0b24ge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmljb24taGVhZCB7XG4gIGNvbG9yOiAjMUZCNENEO1xufVxuXG4udXRpbC1idG5zIHtcbiAgcGFkZGluZzogM3B4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMnB4O1xufVxuXG4uYWN0aW9uLWJ0biB7XG4gIGhlaWdodDogNDBweDtcbn1cblxuLmFjdGlvbi1idG46aG92ZXIge1xuICBoZWlnaHQ6IDUwcHggIWltcG9ydGFudDtcbn1cblxuLnRva2VuLXNlbGVjdCB7XG4gIGZvbnQtZmFtaWx5OiBBZW9uaWs7XG4gIGNvbG9yOiAjMUZCNENEO1xuICBmb250LXdlaWdodDogYm9sZGVyO1xufSJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_qr_scanner_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/qr-scanner/ngx */ "./node_modules/@ionic-native/qr-scanner/ngx/index.js");
/* harmony import */ var _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/clipboard/ngx */ "./node_modules/@ionic-native/clipboard/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _service_minima_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/minima-api.service */ "./src/app/service/minima-api.service.ts");
/* harmony import */ var _tokens__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../tokens */ "./src/app/tokens.ts");







let SendFundsPage = class SendFundsPage {
    constructor(qrScanner, clipboard, alertController, zone, api) {
        this.qrScanner = qrScanner;
        this.clipboard = clipboard;
        this.alertController = alertController;
        this.zone = zone;
        this.api = api;
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
    ngOnInit() { }
    ionViewWillEnter() {
        this.pullInTokens();
        this.isCameraOpen = false;
    }
    ionViewWillLeave() {
        this.stopCamera();
    }
    scanQR() {
        this.qrScanner.prepare()
            .then((status) => {
            if (status.authorized) {
                // camera permission was granted
                console.log('scanQR', status);
                //add transparent BG to the ion app
                //window.document.querySelector('ion-content').classList.add('transparentBody');
                // this.ionApp.style.display = 'none';
                setTimeout(() => {
                    window.document.querySelectorAll('ion-content')
                        .forEach(element => {
                        const element1 = element.shadowRoot.querySelector('style');
                        element1.innerHTML = element1.innerHTML
                            .replace('--background:var(--ion-background-color,#fff);', '--background: transparent');
                    });
                }, 300);
                // start scanning
                this.qrScanner.show();
                this.isCameraOpen = true;
                this.scanSub = this.qrScanner.scan().subscribe((text) => {
                    console.log('Scanned something', text);
                    this.zone.run(() => {
                        console.log('Scanned something', text);
                        this.data.address = text;
                        this.stopCamera();
                        //window.document.querySelector('ion-content').classList.remove('.transparentBody');
                        window.document.querySelectorAll('ion-content')
                            .forEach(element => {
                            const element1 = element.shadowRoot.querySelector('style');
                            element1.innerHTML = element1.innerHTML
                                .replace('--background: transparent', '--background:var(--ion-background-color,#fff);');
                        });
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
                console.log('error permission needed');
                this.presentAlert('Please check camera permission', 'Error');
            }
            else {
                // permission was denied, but not permanently. You can ask for permission again at a later time.
                console.log('error permission needed');
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
        //window.document.querySelector('ion-content').classList.remove('transparentBody');
        window.document.querySelectorAll('ion-content')
            .forEach(element => {
            const element1 = element.shadowRoot.querySelector('style');
            element1.innerHTML = element1.innerHTML
                .replace('--background: transparent', '--background:var(--ion-background-color,#fff);');
        });
        this.ionApp.style.display = 'block';
        this.isCameraOpen = false;
        this.qrScanner.destroy();
    }
    pasteFromClipboard() {
        this.clipboard.paste().then((resolve) => {
            this.data.address = resolve;
        }, (reject) => {
            console.log('Error: ' + reject);
        });
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
        this.api.getBalance().then((res) => {
            console.log(res);
            this.strUnconfirmed = '';
            let countTokens = 0;
            res.response.balance.forEach(element => {
                countTokens++;
                if (element.tokenid === this.MINIMA_TOKEN_ID) {
                    const tempConfirmed = (Math.round(element.confirmed * 100) / 100);
                    let tempUnConfirmed = '';
                    if (element.unconfirmed > 0) {
                        this.strUnconfirmed = 'Unconfirmed';
                        tempUnConfirmed = (Math.round(element.unconfirmed * 100) / 100).toString();
                    }
                    else {
                        tempUnConfirmed = '';
                    }
                    const temp = new _tokens__WEBPACK_IMPORTED_MODULE_6__["Tokens"](element.tokenid, element.token, tempConfirmed, tempUnConfirmed, element.total);
                    this.tokenArr.push(temp);
                    //this.tokenArr[0] = temp;
                }
                this.strUnconfirmed = '';
            });
            res.response.balance.forEach(element => {
                if (element.tokenid != this.MINIMA_TOKEN_ID) {
                    let tempConfirmed = (Math.round(element.confirmed * 100) / 100);
                    let tempUnConfirmed = '';
                    if (element.unconfirmed > 0) {
                        this.strUnconfirmed = 'Unconfirmed';
                        tempUnConfirmed = (Math.round(element.unconfirmed * 100) / 100).toString();
                    }
                    else {
                        tempUnConfirmed = '';
                    }
                    const temp = new _tokens__WEBPACK_IMPORTED_MODULE_6__["Tokens"](element.tokenid, element.token, tempConfirmed, tempUnConfirmed, element.total);
                    this.tokenArr.push(temp);
                }
                this.strUnconfirmed = '';
            });
        });
        this.tokenArr = new Array;
    }
    sendFunds() {
        if (this.data.address && this.data.address !== '' && this.data.amount && this.data.amount > 0 &&
            this.data.tokenid && this.data.tokenid !== '') {
            console.log('sendFunds', this.data);
            this.api.sendFunds(this.data).then((res) => {
                console.log("Send " + JSON.stringify(res));
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
};
SendFundsPage.ctorParameters = () => [
    { type: _ionic_native_qr_scanner_ngx__WEBPACK_IMPORTED_MODULE_2__["QRScanner"] },
    { type: _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_3__["Clipboard"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: _service_minima_api_service__WEBPACK_IMPORTED_MODULE_5__["MinimaApiService"] }
];
SendFundsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-send-funds',
        template: __webpack_require__(/*! raw-loader!./send-funds.page.html */ "./node_modules/raw-loader/index.js!./src/app/send-funds/send-funds.page.html"),
        styles: [__webpack_require__(/*! ./send-funds.page.scss */ "./src/app/send-funds/send-funds.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_qr_scanner_ngx__WEBPACK_IMPORTED_MODULE_2__["QRScanner"], _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_3__["Clipboard"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
        _service_minima_api_service__WEBPACK_IMPORTED_MODULE_5__["MinimaApiService"]])
], SendFundsPage);



/***/ })

}]);
//# sourceMappingURL=send-funds-send-funds-module-es2015.js.map