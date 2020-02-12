(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["send-funds-send-funds-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/send-funds/send-funds.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/send-funds/send-funds.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-app>\n<ion-header *ngIf=\"isCameraOpen==false\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title color=\"primary\">\n      Send\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content >\n  <ion-card *ngIf=\"isCameraOpen==false\" >\n    <ion-card-header>\n      <ion-card-title>\n        <ion-item lines=\"none\">\n          \n          <ion-icon style=\" font-size:1.0rem;\" slot=\"start\" name=\"send\" size=\"2\"></ion-icon>\n          \n        </ion-item>\n      </ion-card-title>\n   \n    \n    </ion-card-header>\n\n    <ion-card-content>\n      <form>\n\n        <!-- <ion-item>\n          <ion-label position=\"floating\">Minima / Token</ion-label>\n          <ion-select \n              name=\"token\" \n              value=\"Minima\" \n              [(ngModel)]=\"data.tokenid\" \n              placeholder=\"Minima\">\n\n        <ion-select-option *ngFor=\"let token of data.tokenid\">{{ token }}</ion-select-option>\n\n            <ion-select-option value=\"minima\"></ion-select-option>\n            <ion-select-option value=\"ethereum\">Ethereum</ion-select-option>\n\n          </ion-select>\n        </ion-item> -->\n        <ion-item>\n          <ion-label position=\"floating\">Address</ion-label>\n          <ion-input name=\"address\" [(ngModel)]=\"data.address\"></ion-input>\n        </ion-item>\n\n        <div class=\"rightAlign\">\n          <ion-button type=\"button\" slot=\"end\" size=\"small\" (click)=\"scanQR()\">\n            <ion-icon  name=\"qr-scanner\" slot=\"start\"></ion-icon>QR Code\n          </ion-button>\n          <ion-button type=\"button\" slot=\"end\" size=\"small\" (click)=\"pasteFromClipboard()\">\n            <ion-icon name=\"clipboard\" slot=\"start\"></ion-icon>Paste from clipboard\n          </ion-button>\n        </div>\n        <ion-item>\n          <ion-label position=\"floating\">Amount</ion-label>\n          <ion-input type=\"number\" name=\"amount\" [(ngModel)]=\"data.amount\"></ion-input>\n        </ion-item>\n        \n      </form>\n\n    </ion-card-content>\n  </ion-card>\n</ion-content >\n<ion-footer>\n  <ion-toolbar>\n    <ion-button expand=\"block\" (click)=\"stopCamera()\"  *ngIf=\"isCameraOpen==true\">\n     Stop scanning\n    </ion-button>    \n\n    <ion-buttons>\n      <ion-button color=\"danger\" expand=\"block\" (click)=\"sendFunds()\" *ngIf=\"isCameraOpen==false\">\n        <ion-icon name=\"send\" slot=\"start\"></ion-icon> Send\n      </ion-button>\n    </ion-buttons>\n    \n  </ion-toolbar>\n</ion-footer>\n</ion-app>"

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

module.exports = ".transparentBody {\n  --background: none transparent;\n}\n\nion-card {\n  border-radius: 15px;\n}\n\nion-footer ion-toolbar ion-buttons ion-button {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGlhcy9Qcm9qZWN0cy9taW5pbWFjb3JlL21vYmlsZS1hcHAtZnJvbnQtZW5kL2FwcC9zcmMvYXBwL3NlbmQtZnVuZHMvc2VuZC1mdW5kcy5wYWdlLnNjc3MiLCJzcmMvYXBwL3NlbmQtZnVuZHMvc2VuZC1mdW5kcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw4QkFBQTtBQ0NKOztBRFNBO0VBQ0UsbUJBQUE7QUNORjs7QURRQTtFQUNFLFdBQUE7QUNMRiIsImZpbGUiOiJzcmMvYXBwL3NlbmQtZnVuZHMvc2VuZC1mdW5kcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudHJhbnNwYXJlbnRCb2R5IHtcbiAgICAtLWJhY2tncm91bmQ6IG5vbmUgdHJhbnNwYXJlbnQ7XG4gIH1cblxuLy8gaW9uLWFwcC50cmFuc3BhcmVudEJvZHkgaW9uLW5hdntvcGFjaXR5OjB9XG5cbi8vIGlvbi1hcHAudHJhbnNwYXJlbnRCb2R5LCBpb24tYXBwLnRyYW5zcGFyZW50Qm9keSBpb24tY29udGVudCwgaW9uLWFwcC50cmFuc3BhcmVudEJvZHkgLm5hdi1kZWNvciB7XG5cdCBcbi8vIFx0LS1iYWNrZ3JvdW5kOiBub25lIHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4vLyAgIH1cblxuaW9uLWNhcmQge1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xufVxuaW9uLWZvb3RlciBpb24tdG9vbGJhciBpb24tYnV0dG9ucyBpb24tYnV0dG9ue1xuICB3aWR0aDogMTAwJTtcbn0iLCIudHJhbnNwYXJlbnRCb2R5IHtcbiAgLS1iYWNrZ3JvdW5kOiBub25lIHRyYW5zcGFyZW50O1xufVxuXG5pb24tY2FyZCB7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG59XG5cbmlvbi1mb290ZXIgaW9uLXRvb2xiYXIgaW9uLWJ1dHRvbnMgaW9uLWJ1dHRvbiB7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_qr_scanner_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/qr-scanner/ngx */ "./node_modules/@ionic-native/qr-scanner/ngx/index.js");
/* harmony import */ var _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/clipboard/ngx */ "./node_modules/@ionic-native/clipboard/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _service_minima_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/minima-api.service */ "./src/app/service/minima-api.service.ts");






var SendFundsPage = /** @class */ (function () {
    function SendFundsPage(qrScanner, clipboard, alertController, zone, api) {
        this.qrScanner = qrScanner;
        this.clipboard = clipboard;
        this.alertController = alertController;
        this.zone = zone;
        this.api = api;
        this.data = {};
        this.isCameraOpen = false;
        this.scanSub = null;
        this.ionApp = document.getElementsByTagName('ion-app')[0];
    }
    SendFundsPage.prototype.ngOnInit = function () {
    };
    SendFundsPage.prototype.ionViewWillEnter = function () {
        this.isCameraOpen = false;
    };
    SendFundsPage.prototype.ionViewWillLeave = function () {
        this.stopCamera();
    };
    SendFundsPage.prototype.scanQR = function () {
        var _this = this;
        this.qrScanner.prepare()
            .then(function (status) {
            if (status.authorized) {
                // camera permission was granted
                console.log('scanQR', status);
                //add transparent BG to the ion app
                //window.document.querySelector('ion-content').classList.add('transparentBody');
                // this.ionApp.style.display = 'none';
                setTimeout(function () {
                    window.document.querySelectorAll('ion-content')
                        .forEach(function (element) {
                        var element1 = element.shadowRoot.querySelector('style');
                        element1.innerHTML = element1.innerHTML
                            .replace('--background:var(--ion-background-color,#fff);', '--background: transparent');
                    });
                }, 300);
                // start scanning
                _this.qrScanner.show();
                _this.isCameraOpen = true;
                _this.scanSub = _this.qrScanner.scan().subscribe(function (text) {
                    console.log('Scanned something', text);
                    _this.zone.run(function () {
                        _this.data.address = text;
                        _this.stopCamera();
                        //window.document.querySelector('ion-content').classList.remove('.transparentBody');
                        window.document.querySelectorAll('ion-content')
                            .forEach(function (element) {
                            var element1 = element.shadowRoot.querySelector('style');
                            element1.innerHTML = element1.innerHTML
                                .replace('--background: transparent', '--background:var(--ion-background-color,#fff);');
                        });
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
        //window.document.querySelector('ion-content').classList.remove('transparentBody');
        window.document.querySelectorAll('ion-content')
            .forEach(function (element) {
            var element1 = element.shadowRoot.querySelector('style');
            element1.innerHTML = element1.innerHTML
                .replace('--background: transparent', '--background:var(--ion-background-color,#fff);');
        });
        this.ionApp.style.display = 'block';
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
    SendFundsPage.prototype.sendFunds = function () {
        var _this = this;
        if (this.data.address && this.data.address !== '' && this.data.amount && this.data.amount > 0) {
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
        { type: _ionic_native_qr_scanner_ngx__WEBPACK_IMPORTED_MODULE_2__["QRScanner"] },
        { type: _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_3__["Clipboard"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
        { type: _service_minima_api_service__WEBPACK_IMPORTED_MODULE_5__["MinimaApiService"] }
    ]; };
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
    return SendFundsPage;
}());



/***/ })

}]);
//# sourceMappingURL=send-funds-send-funds-module-es5.js.map