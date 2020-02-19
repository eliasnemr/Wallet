(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["web-scanner-web-scanner-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/web-scanner/web-scanner.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/web-scanner/web-scanner.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-menu-button slot=\"start\"></ion-menu-button>\n    <ion-title color=\"primary\">Web</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n\n<ion-content>\n  <ion-toolbar>\n    <ion-item lines=\"none\" class=\"web-img\">\n      <ion-img class=\"web-img\" src=\"../assets/web.svg\"></ion-img>\n    </ion-item>\n    <ion-item class=\"web-img\" lines=\"none\">\n      <ion-text class=\"web-lbl\" style=\"font-family: Aeonik-light; width:100%; text-align: center;\"> <br><br><br>Minima Web ready to scan.</ion-text>\n    </ion-item>\n  </ion-toolbar>\n\n\n</ion-content>\n\n\n\n<ion-footer>\n  <ion-toolbar>\n    <ion-buttons>\n      <ion-button class=\"qr-button\" expand=\"block\" (click)=\"stopCamera()\"  *ngIf=\"isCameraOpen===true\">\n        Stop scanning\n       </ion-button> \n\n      <ion-button class=\"qr-button\" (click)=\"scanQR()\" *ngIf=\"isCameraOpen===false\">\n        <ion-icon name=\"qr-scanner\"></ion-icon> \n        Scan Qr Code\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _web_scanner_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./web-scanner.page */ "./src/app/web-scanner/web-scanner.page.ts");







var routes = [
    {
        path: '',
        component: _web_scanner_page__WEBPACK_IMPORTED_MODULE_6__["WebScannerPage"]
    }
];
var WebScannerPageModule = /** @class */ (function () {
    function WebScannerPageModule() {
    }
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
    return WebScannerPageModule;
}());



/***/ }),

/***/ "./src/app/web-scanner/web-scanner.page.scss":
/*!***************************************************!*\
  !*** ./src/app/web-scanner/web-scanner.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".qr-button {\n  width: 100%;\n  height: 40px;\n}\n\n.qr-button:hover {\n  height: 50px;\n}\n\nion-icon {\n  padding: 5px;\n}\n\n.web-img {\n  margin: auto;\n  width: 300px;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.web-lbl {\n  white-space: normal;\n  margin: auto;\n  -webkit-box-align: center;\n          align-items: center;\n  font-family: \"Aeonik-light\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGlhcy9Qcm9qZWN0cy9taW5pbWFjb3JlL21vYmlsZS1hcHAtZnJvbnQtZW5kL2FwcC9zcmMvYXBwL3dlYi1zY2FubmVyL3dlYi1zY2FubmVyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvd2ViLXNjYW5uZXIvd2ViLXNjYW5uZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNDSjs7QURDQTtFQUNJLFlBQUE7QUNFSjs7QURBQTtFQUNJLFlBQUE7QUNHSjs7QUREQTtFQUVJLFlBQUE7RUFFQSxZQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ0VKOztBREFBO0VBQ0ksbUJBQUE7RUFFQSxZQUFBO0VBRUEseUJBQUE7VUFBQSxtQkFBQTtFQUNBLDJCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC93ZWItc2Nhbm5lci93ZWItc2Nhbm5lci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucXItYnV0dG9uIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDQwcHg7XG59XG4ucXItYnV0dG9uOmhvdmVyIHtcbiAgICBoZWlnaHQ6IDUwcHg7XG59XG5pb24taWNvbiB7XG4gICAgcGFkZGluZzogNXB4O1xufVxuLndlYi1pbWcge1xuICAgIC8vIGhlaWdodDogNDB2aCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogYXV0bztcbiAgICAvLyB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLndlYi1sYmwge1xuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gICAgLy9oZWlnaHQ6IDExdmggIWltcG9ydGFudDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgLy93aWR0aDogYXV0byAhaW1wb3J0YW50O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZm9udC1mYW1pbHk6ICdBZW9uaWstbGlnaHQnO1xuXG59XG4iLCIucXItYnV0dG9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDBweDtcbn1cblxuLnFyLWJ1dHRvbjpob3ZlciB7XG4gIGhlaWdodDogNTBweDtcbn1cblxuaW9uLWljb24ge1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbi53ZWItaW1nIHtcbiAgbWFyZ2luOiBhdXRvO1xuICB3aWR0aDogMzAwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi53ZWItbGJsIHtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgbWFyZ2luOiBhdXRvO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LWZhbWlseTogXCJBZW9uaWstbGlnaHRcIjtcbn0iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");





var WebScannerPage = /** @class */ (function () {
    function WebScannerPage(qrScanner, zone, alertController, api) {
        this.qrScanner = qrScanner;
        this.zone = zone;
        this.alertController = alertController;
        this.api = api;
        this.isCameraOpen = false;
        this.scanSub = null;
        this.data = {};
        this.ionApp = document.getElementsByTagName('ion-app')[0];
    }
    WebScannerPage.prototype.ngOnInit = function () {
    };
    WebScannerPage.prototype.ionViewWillEnter = function () {
        this.isCameraOpen = false;
    };
    WebScannerPage.prototype.ionViewWillLeave = function () {
        this.stopCamera();
    };
    WebScannerPage.prototype.scanQR = function () {
        var _this = this;
        this.qrScanner.prepare()
            .then(function (status) {
            if (status.authorized) {
                // camera permission was granted
                console.log('scanQR', status);
                setTimeout(function () {
                    window.document.querySelectorAll('ion-content')
                        .forEach(function (element) {
                        var element1 = element.shadowRoot.querySelector('style');
                        element1.innerHTML = element1.innerHTML
                            .replace('--background:var(--ion-background-color,#fff);', '--background: transparent');
                    });
                }, 300);
                _this.qrScanner.show();
                _this.isCameraOpen = true;
                _this.scanSub = _this.qrScanner.scan().subscribe(function (text) {
                    console.log('Scanned something', text);
                    _this.zone.run(function () {
                        //alert("Scanned this ->>>" + text);
                        _this.stopCamera();
                        _this.qrWebLink(text);
                        // window.document.querySelector('ion-content').classList.remove('.transparentBody');
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
    WebScannerPage.prototype.qrWebLink = function (text) {
        var _this = this;
        this.data.url = text;
        if (this.data.url !== '') {
            this.api.webLink(this.data).then(function (res) {
                console.log("weblink " + JSON.stringify(res));
                if (res.status === true) {
                    _this.presentAlert('Success!', 'You are now connected.');
                }
                else {
                    alert("Hasn't connected");
                    _this.presentAlert(res.error, 'Error');
                }
            });
        }
        else {
            this.presentAlert('Please rescan qr image.', 'Unsucessful!');
        }
    };
    WebScannerPage.prototype.stopCamera = function () {
        console.log('stop camera', this.scanSub);
        if (this.scanSub !== null) {
            console.log("stopCamera - is not null..");
            this.qrScanner.hide();
            this.scanSub.unsubscribe();
        }
        this.scanSub = null;
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
    WebScannerPage.prototype.presentAlert = function (msg, header) {
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
    WebScannerPage.ctorParameters = function () { return [
        { type: _ionic_native_qr_scanner_ngx__WEBPACK_IMPORTED_MODULE_3__["QRScanner"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
        { type: _service_minima_api_service__WEBPACK_IMPORTED_MODULE_1__["MinimaApiService"] }
    ]; };
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
    return WebScannerPage;
}());



/***/ })

}]);
//# sourceMappingURL=web-scanner-web-scanner-module-es5.js.map