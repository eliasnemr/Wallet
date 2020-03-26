(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-settings-settings-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/settings/settings.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/settings/settings.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-app>\n<ion-header>\n  <ion-toolbar>\n\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n\n    <ion-title color=\"primary\">\n      Settings\n    </ion-title>\n\n    <ion-buttons slot=\"end\">\n      <ion-button (click)= \"presentQuitAlert()\">\n          <ion-icon name=\"power\" color=\"danger\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n    <form>\n      <ion-item>\n        <ion-icon slot=\"start\" name=\"link\" style=\"padding: 10px;\" color=\"primary\"></ion-icon>\n        <ion-label style=\"font-style: normal;\" position=\"floating\" color=\"primary\">Host</ion-label>\n        <ion-input name=\"host\" [(ngModel)]=\"host\"></ion-input>\n      </ion-item>\n    </form>\n   \n    <ion-item lines=\"none\">\n      <ion-icon slot=\"start\" name=\"moon\" style=\"padding: 10px;\" color=\"primary\"></ion-icon>\n      <ion-label style=\"font-style:normal;\" color=\"tertiary\">Night Mode</ion-label>\n      <ion-toggle #darkToggle color=\"primary\" [(ngModel)]=\"toggleValue\" (ionChange)=\"checkToggle($event)\"></ion-toggle>\n    </ion-item>\n    \n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <ion-buttons>\n      \n    \n    <ion-button class=\"action-btn\" expand=\"block\" (click)=\"saveUserPreferences()\">\n      <ion-icon name=\"save\"></ion-icon>\n     Save\n    </ion-button>   \n  </ion-buttons>\n  </ion-toolbar>\n</ion-footer>\n</ion-app>\n"

/***/ }),

/***/ "./src/app/pages/settings/settings.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/settings/settings.module.ts ***!
  \***************************************************/
/*! exports provided: SettingsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageModule", function() { return SettingsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./settings.page */ "./src/app/pages/settings/settings.page.ts");







var routes = [
    {
        path: '',
        component: _settings_page__WEBPACK_IMPORTED_MODULE_6__["SettingsPage"]
    }
];
var SettingsPageModule = /** @class */ (function () {
    function SettingsPageModule() {
    }
    SettingsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_settings_page__WEBPACK_IMPORTED_MODULE_6__["SettingsPage"]]
        })
    ], SettingsPageModule);
    return SettingsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/settings/settings.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/settings/settings.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-card {\n  border-radius: 30px;\n  background-color: #FFFFFF;\n}\n\nion-label {\n  font-style: oblique;\n}\n\nion-chip {\n  background-color: transparent;\n}\n\nion-footer ion-toolbar ion-buttons ion-button {\n  width: 100%;\n}\n\nion-icon {\n  padding: 5px;\n}\n\n.action-btn {\n  height: 40px;\n}\n\n.action-btn:hover {\n  height: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGlhcy9Qcm9qZWN0cy9taW5pbWFjb3JlL21vYmlsZS1hcHAtZnJvbnQtZW5kL2FwcC9zcmMvYXBwL3BhZ2VzL3NldHRpbmdzL3NldHRpbmdzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvc2V0dGluZ3Mvc2V0dGluZ3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSx5QkFBQTtBQ0NKOztBREVBO0VBQ0ksbUJBQUE7QUNDSjs7QURDQTtFQUNJLDZCQUFBO0FDRUo7O0FEQUE7RUFDSSxXQUFBO0FDR0o7O0FEREE7RUFDSSxZQUFBO0FDSUo7O0FERkE7RUFDSSxZQUFBO0FDS0o7O0FESEE7RUFDSSxZQUFBO0FDTUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zZXR0aW5ncy9zZXR0aW5ncy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2FyZCB7XG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xuXG59XG5pb24tbGFiZWwge1xuICAgIGZvbnQtc3R5bGU6IG9ibGlxdWU7XG59XG5pb24tY2hpcCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5pb24tZm9vdGVyIGlvbi10b29sYmFyIGlvbi1idXR0b25zIGlvbi1idXR0b257XG4gICAgd2lkdGg6IDEwMCU7XG4gfVxuaW9uLWljb24ge1xuICAgIHBhZGRpbmc6IDVweDtcbn1cbi5hY3Rpb24tYnRuIHtcbiAgICBoZWlnaHQ6IDQwcHg7XG59XG4uYWN0aW9uLWJ0bjpob3ZlciB7XG4gICAgaGVpZ2h0OiA1MHB4O1xufVxuIiwiaW9uLWNhcmQge1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xufVxuXG5pb24tbGFiZWwge1xuICBmb250LXN0eWxlOiBvYmxpcXVlO1xufVxuXG5pb24tY2hpcCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG5pb24tZm9vdGVyIGlvbi10b29sYmFyIGlvbi1idXR0b25zIGlvbi1idXR0b24ge1xuICB3aWR0aDogMTAwJTtcbn1cblxuaW9uLWljb24ge1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbi5hY3Rpb24tYnRuIHtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuXG4uYWN0aW9uLWJ0bjpob3ZlciB7XG4gIGhlaWdodDogNTBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/settings/settings.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/settings/settings.page.ts ***!
  \*************************************************/
/*! exports provided: SettingsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPage", function() { return SettingsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _service_minima_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/minima-api.service */ "./src/app/service/minima-api.service.ts");
/* harmony import */ var _service_darkMode_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/darkMode.service */ "./src/app/service/darkMode.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");







var SettingsPage = /** @class */ (function () {
    function SettingsPage(api, alertController, toastController, darkMode, storage) {
        var _this = this;
        this.api = api;
        this.alertController = alertController;
        this.toastController = toastController;
        this.darkMode = darkMode;
        this.storage = storage;
        this.host = '';
        this.storage.get('toggleVal').then(function (toggleVal) {
            _this.toggleValue = toggleVal;
        });
    }
    /** LIFE CYCLES */
    SettingsPage.prototype.ngOnInit = function () { };
    SettingsPage.prototype.ionViewWillEnter = function () {
        this.host = this.api.getHost();
    };
    SettingsPage.prototype.ionViewWillLeave = function () {
        this.saveUserPreferences();
    };
    /** MISCELLANEOUS */
    SettingsPage.prototype.saveUserPreferences = function () {
        var _this = this;
        // get toggleVal
        this.storage.get('toggleVal').then(function (toggleVal) {
            _this.toggleValue = toggleVal;
        });
        // save host used.
        if (this.host !== '') {
            this.api.setHost(this.host);
        }
        this.presentToast();
    };
    SettingsPage.prototype.checkToggle = function (e) {
        if (this.toggleValue === false) {
            this.storage.set('toggleVal', this.toggleValue);
            document.body.classList.toggle('dark', this.toggleValue);
        }
        else {
            this.storage.set('toggleVal', this.toggleValue);
            document.body.classList.toggle('dark', this.toggleValue);
        }
        // if(this.isToggled === false){
        //   this.isToggled = true;
        //   document.body.classList.toggle("dark", true);
        // } else {
        //   this.isToggled = false;
        //   document.body.classList.toggle("dark", false);
        // }
        // console.log("Toggled: "+ this.isToggled); 
    };
    /** API SERVICE CALLS */
    SettingsPage.prototype.giveMe50 = function () {
        var _this = this;
        this.api.giveMe50().then(function (res) {
            console.log("Testing giveMe50() " + res);
            if (res.status == true) {
                console.log("Result is true" + res);
                _this.presentAlert('You get 50', 'Info');
            }
            else {
                console.log("Result is false " + res);
                _this.presentAlert(res.error, 'Error');
            }
        });
    };
    /** ALERTS & TOASTS */
    SettingsPage.prototype.presentAlert = function (msg, header) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: header,
                            message: msg,
                            buttons: ['Cancel', 'Ok']
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
    SettingsPage.prototype.presentQuitAlert = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: "Quit Minima",
                            message: "To turn off the Minima Node, you can currently do that by: <br>Android - Force stop in phone's settings.<br>iOS - Sliding up in task manager.",
                            buttons: ['Cancel', 'Ok']
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
    SettingsPage.prototype.presentToast = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: 'Your settings have been saved.',
                            duration: 2000,
                            color: 'danger',
                            keyboardClose: true,
                            translucent: true,
                            position: 'bottom'
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    SettingsPage.ctorParameters = function () { return [
        { type: _service_minima_api_service__WEBPACK_IMPORTED_MODULE_3__["MinimaApiService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
        { type: _service_darkMode_service__WEBPACK_IMPORTED_MODULE_4__["darkMode"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] }
    ]; };
    SettingsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__(/*! raw-loader!./settings.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/settings/settings.page.html"),
            styles: [__webpack_require__(/*! ./settings.page.scss */ "./src/app/pages/settings/settings.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_minima_api_service__WEBPACK_IMPORTED_MODULE_3__["MinimaApiService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _service_darkMode_service__WEBPACK_IMPORTED_MODULE_4__["darkMode"], _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"]])
    ], SettingsPage);
    return SettingsPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-settings-settings-module-es5.js.map