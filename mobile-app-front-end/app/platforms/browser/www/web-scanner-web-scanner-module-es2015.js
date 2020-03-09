(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["web-scanner-web-scanner-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/web-scanner/web-scanner.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/web-scanner/web-scanner.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-app>\n<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n    <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title color=\"primary\">Web</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content *ngIf=\"isCameraOpen==false\">\n    <ion-list lines=\"none\">\n      <ion-item lines=\"none\" class=\"web-img\">\n        <ion-img class=\"web-img\" [src]=\"identifyImg()\"></ion-img>\n      </ion-item>\n      <ion-item lines=\"none\">\n        <ion-text class=\"web-lbl\" style=\"font-family: Aeonik-light; width:100%; text-align: center;\">Minima Web ready to scan.</ion-text>\n      </ion-item>\n      \n      <ion-item>\n        <ion-text class=\"web-lbl\" style=\"font-family: Aeonik-light; width:100%; text-align: center;\">Navigate to <ion-note style=\"font-weight: bold;\">\"https://dev.minima.global\"</ion-note> on desktop.</ion-text>\n      </ion-item>\n    </ion-list>\n    \n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <ion-buttons>\n      <ion-button class=\"qr-button\" expand=\"block\" (click)=\"stopCamera()\"  *ngIf=\"isCameraOpen==true\">\n        Stop scanning\n       </ion-button> \n      <ion-button class=\"qr-button\" (click)=\"scanQR()\" *ngIf=\"isCameraOpen==false\">\n        <ion-icon name=\"qr-scanner\"></ion-icon> \n        Scan Qr Code\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer>\n</ion-app>"

/***/ }),

/***/ "./src/app/web-scanner/web-scanner.module.ts":
/*!***************************************************!*\
  !*** ./src/app/web-scanner/web-scanner.module.ts ***!
  \***************************************************/
/*! exports provided: WebScannerPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebScannerPageModule", function() { return WebScannerPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _web_scanner_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./web-scanner.page */ "./src/app/web-scanner/web-scanner.page.ts");







const routes = [
    {
        path: '',
        component: _web_scanner_page__WEBPACK_IMPORTED_MODULE_6__["WebScannerPage"]
    }
];
let WebScannerPageModule = class WebScannerPageModule {
};
WebScannerPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_web_scanner_page__WEBPACK_IMPORTED_MODULE_6__["WebScannerPage"]]
    })
], WebScannerPageModule);



/***/ }),

/***/ "./src/app/web-scanner/web-scanner.page.scss":
/*!***************************************************!*\
  !*** ./src/app/web-scanner/web-scanner.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".qr-button {\n  width: 100%;\n  height: 40px;\n}\n\n.qr-button:hover {\n  height: 50px;\n}\n\nion-icon {\n  padding: 5px;\n}\n\n.web-img {\n  padding-top: 20px;\n  margin: auto;\n  width: 300px;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.web-lbl {\n  white-space: normal;\n  margin: auto;\n  -webkit-box-align: center;\n          align-items: center;\n  font-family: \"Aeonik-light\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGlhcy9Qcm9qZWN0cy9taW5pbWFjb3JlL21vYmlsZS1hcHAtZnJvbnQtZW5kL2FwcC9zcmMvYXBwL3dlYi1zY2FubmVyL3dlYi1zY2FubmVyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvd2ViLXNjYW5uZXIvd2ViLXNjYW5uZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNDSjs7QURDQTtFQUNJLFlBQUE7QUNFSjs7QURBQTtFQUNJLFlBQUE7QUNHSjs7QUREQTtFQUNJLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDSUo7O0FERkE7RUFDSSxtQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsMkJBQUE7QUNLSiIsImZpbGUiOiJzcmMvYXBwL3dlYi1zY2FubmVyL3dlYi1zY2FubmVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5xci1idXR0b24ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNDBweDtcbn1cbi5xci1idXR0b246aG92ZXIge1xuICAgIGhlaWdodDogNTBweDtcbn1cbmlvbi1pY29uIHtcbiAgICBwYWRkaW5nOiA1cHg7XG59XG4ud2ViLWltZyB7XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLndlYi1sYmwge1xuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZm9udC1mYW1pbHk6ICdBZW9uaWstbGlnaHQnO1xuXG59XG5cblxuLy8gaU9TICYgQW5kcm9pZCBsYXlvdXQgZml4XG4vLyAuaW9zIHdlYi1pbWcge1xuLy8gICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuLy8gfVxuLy8gLm1kIHdlYi1pbWcge1xuLy8gICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuLy8gfVxuIiwiLnFyLWJ1dHRvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQwcHg7XG59XG5cbi5xci1idXR0b246aG92ZXIge1xuICBoZWlnaHQ6IDUwcHg7XG59XG5cbmlvbi1pY29uIHtcbiAgcGFkZGluZzogNXB4O1xufVxuXG4ud2ViLWltZyB7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBtYXJnaW46IGF1dG87XG4gIHdpZHRoOiAzMDBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLndlYi1sYmwge1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICBtYXJnaW46IGF1dG87XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBcIkFlb25pay1saWdodFwiO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/web-scanner/web-scanner.page.ts":
/*!*************************************************!*\
  !*** ./src/app/web-scanner/web-scanner.page.ts ***!
  \*************************************************/
/*! exports provided: WebScannerPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebScannerPage", function() { return WebScannerPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _service_minima_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../service/minima-api.service */ "./src/app/service/minima-api.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_qr_scanner_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/qr-scanner/ngx */ "./node_modules/@ionic-native/qr-scanner/ngx/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");





let WebScannerPage = class WebScannerPage {
    constructor(qrScanner, zone, alertController, api, platform) {
        this.qrScanner = qrScanner;
        this.zone = zone;
        this.alertController = alertController;
        this.api = api;
        this.platform = platform;
        this.isCameraOpen = false;
        this.scanSub = null;
        this.data = {};
        this.ionApp = document.getElementsByTagName('ion-app')[0];
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.isCameraOpen = false;
    }
    ionViewWillLeave() {
        this.stopCamera();
    }
    // figure out which web pic to use depending if light or dark mode
    identifyImg() {
        if (document.body.classList.value === 'dark') {
            return '../assets/darkweb.svg';
        }
        else {
            return '../assets/lightweb.svg';
        }
    }
    identifyPlatformToScan_Add() {
        if (this.platform.is('ios')) {
            console.log('iOS Qr Code.');
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
            console.log('iOS Qr Code.');
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
                // camera permission was granted
                console.log('scanQR', status);
                this.identifyPlatformToScan_Add();
                this.qrScanner.show();
                this.isCameraOpen = true;
                this.scanSub = this.qrScanner.scan().subscribe((text) => {
                    console.log('Scanned something', text);
                    this.zone.run(() => {
                        //alert("Scanned this ->>>" + text);
                        this.stopCamera();
                        this.qrWebLink(text);
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
    qrWebLink(text) {
        this.data.url = text;
        if (this.data.url !== '') {
            this.api.webLink(this.data).then((res) => {
                console.log("weblink " + JSON.stringify(res));
                if (res.status === true) {
                    this.presentAlert('Success!', 'You are now connected.');
                }
                else {
                    this.presentAlert(res.error, 'Error');
                }
            });
        }
        else {
            this.presentAlert('Please rescan qr image.', 'Unsucessful!');
        }
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
};
WebScannerPage.ctorParameters = () => [
    { type: _ionic_native_qr_scanner_ngx__WEBPACK_IMPORTED_MODULE_3__["QRScanner"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _service_minima_api_service__WEBPACK_IMPORTED_MODULE_1__["MinimaApiService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] }
];
WebScannerPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-web-scanner',
        template: __webpack_require__(/*! raw-loader!./web-scanner.page.html */ "./node_modules/raw-loader/index.js!./src/app/web-scanner/web-scanner.page.html"),
        styles: [__webpack_require__(/*! ./web-scanner.page.scss */ "./src/app/web-scanner/web-scanner.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_qr_scanner_ngx__WEBPACK_IMPORTED_MODULE_3__["QRScanner"],
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        _service_minima_api_service__WEBPACK_IMPORTED_MODULE_1__["MinimaApiService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]])
], WebScannerPage);



/***/ })

}]);
//# sourceMappingURL=web-scanner-web-scanner-module-es2015.js.map