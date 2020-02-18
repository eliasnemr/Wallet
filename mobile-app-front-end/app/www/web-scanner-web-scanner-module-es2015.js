(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["web-scanner-web-scanner-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/web-scanner/web-scanner.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/web-scanner/web-scanner.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-menu-button slot=\"start\"></ion-menu-button>\n    <ion-title color=\"primary\">Web</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n\n<ion-content>\n  <!-- <ion-toolbar>\n    <ion-item lines=\"none\" class=\"web-img\">\n      <ion-img class=\"web-img\" src=\"../assets/web.svg\"></ion-img>\n    </ion-item>\n    <ion-item class=\"web-img\" lines=\"none\">\n      <ion-text class=\"web-lbl\" style=\"font-family: Aeonik-light; width:100%; text-align: center;\"> <br><br><br>Minima Web ready to scan. <br> Scan qr code below to begin.</ion-text>\n    </ion-item>\n  </ion-toolbar> -->\n\n\n</ion-content>\n\n\n\n<ion-footer>\n  <ion-toolbar>\n    <ion-buttons>\n      <ion-button class=\"qr-button\" expand=\"block\" (click)=\"stopCamera()\"  *ngIf=\"isCameraOpen===true\">\n        Stop scanning\n       </ion-button> \n\n      <ion-button class=\"qr-button\" (click)=\"scanQR()\" *ngIf=\"isCameraOpen===false\">\n        <ion-icon name=\"qr-scanner\"></ion-icon> \n        Scan Qr Code\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer>"

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

module.exports = ".qr-button {\n  width: 100%;\n  height: 40px;\n}\n\n.qr-button:hover {\n  height: 50px;\n}\n\nion-icon {\n  padding: 5px;\n}\n\n.web-img {\n  margin: auto;\n  width: 300px;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.web-lbl {\n  white-space: normal;\n  height: 11vh !important;\n  margin: auto;\n  width: auto !important;\n  -webkit-box-align: center;\n          align-items: center;\n  font-family: Aeonik-light;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGlhcy9Qcm9qZWN0cy9taW5pbWFjb3JlL21vYmlsZS1hcHAtZnJvbnQtZW5kL2FwcC9zcmMvYXBwL3dlYi1zY2FubmVyL3dlYi1zY2FubmVyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvd2ViLXNjYW5uZXIvd2ViLXNjYW5uZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNDSjs7QURDQTtFQUNJLFlBQUE7QUNFSjs7QURBQTtFQUNJLFlBQUE7QUNHSjs7QUREQTtFQUVJLFlBQUE7RUFFQSxZQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ0VKOztBREVBO0VBQ0ksbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx5QkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvd2ViLXNjYW5uZXIvd2ViLXNjYW5uZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnFyLWJ1dHRvbiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA0MHB4O1xufVxuLnFyLWJ1dHRvbjpob3ZlciB7XG4gICAgaGVpZ2h0OiA1MHB4O1xufVxuaW9uLWljb24ge1xuICAgIHBhZGRpbmc6IDVweDtcbn1cbi53ZWItaW1nIHtcbiAgICAvLyBoZWlnaHQ6IDQwdmggIWltcG9ydGFudDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgLy8gd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBcblxufVxuLndlYi1sYmwge1xuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gICAgaGVpZ2h0OiAxMXZoICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmb250LWZhbWlseTogQWVvbmlrLWxpZ2h0O1xuXG59XG4iLCIucXItYnV0dG9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDBweDtcbn1cblxuLnFyLWJ1dHRvbjpob3ZlciB7XG4gIGhlaWdodDogNTBweDtcbn1cblxuaW9uLWljb24ge1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbi53ZWItaW1nIHtcbiAgbWFyZ2luOiBhdXRvO1xuICB3aWR0aDogMzAwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi53ZWItbGJsIHtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgaGVpZ2h0OiAxMXZoICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogYXV0bztcbiAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IEFlb25pay1saWdodDtcbn0iXX0= */"

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
    constructor(qrScanner, zone, alertController, api) {
        this.qrScanner = qrScanner;
        this.zone = zone;
        this.alertController = alertController;
        this.api = api;
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
    scanQR() {
        this.qrScanner.prepare()
            .then((status) => {
            if (status.authorized) {
                // camera permission was granted
                console.log('scanQR', status);
                setTimeout(() => {
                    window.document.querySelectorAll('ion-content')
                        .forEach(element => {
                        const element1 = element.shadowRoot.querySelector('style');
                        element1.innerHTML = element1.innerHTML
                            .replace('--background:var(--ion-background-color,#fff);', '--background: transparent');
                    });
                }, 300);
                this.qrScanner.show();
                this.isCameraOpen = true;
                this.scanSub = this.qrScanner.scan().subscribe((text) => {
                    console.log('Scanned something', text);
                    this.zone.run(() => {
                        //alert("Scanned this ->>>" + text);
                        this.stopCamera();
                        this.qrWebLink(text);
                        // window.document.querySelector('ion-content').classList.remove('.transparentBody');
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
    qrWebLink(text) {
        this.data.url = text;
        if (this.data.url !== '') {
            this.api.webLink(this.data).then((res) => {
                console.log("weblink " + JSON.stringify(res));
                if (res.status === true) {
                    this.presentAlert('Success!', 'You are now connected.');
                }
                else {
                    alert("Hasn't connected");
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
    { type: _service_minima_api_service__WEBPACK_IMPORTED_MODULE_1__["MinimaApiService"] }
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
        _service_minima_api_service__WEBPACK_IMPORTED_MODULE_1__["MinimaApiService"]])
], WebScannerPage);



/***/ })

}]);
//# sourceMappingURL=web-scanner-web-scanner-module-es2015.js.map