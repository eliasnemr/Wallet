(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["mini-status-mini-status-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/mini-status/mini-status.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/mini-status/mini-status.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Status\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!-- Block Generated vs Time elapsed Chart -->\n  <ion-card class=\"welcome-card\" style=\"background-color:#00AAC8;\">\n    <ion-card-header id=\"status-header\">\n      <ion-card-title>\n        <ion-item>\n          <ion-icon align-self-start src=\"../../assets/icon/minima.svg\" size=\"2\"></ion-icon>\n          Minima  v{{ versionNumber }}\n        </ion-item>\n      </ion-card-title>\n    </ion-card-header>\n\n\n    <ion-card-content id=\"status-content\">\n      <ion-list lines=\"none\">\n        <ion-grid no-padding>\n          <ion-row>\n            <ion-col size=\"2\">\n              <ion-item >\n                <ion-icon align-self-center name=\"checkmark\" size=\"2\"></ion-icon>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-item>\n                Your node's status\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"4\">\n              <ion-item \n              [ngStyle] = \" {'color': getColor()}\"\n               #statusColor>\n                {{status}}\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <!-- New Row -->\n          <ion-row>\n            <ion-col size=\"2\">\n              <ion-item>\n                <ion-icon align-self-center name=\"checkmark\" size=\"2\"></ion-icon>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-item>\n                Current uptime\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"4\">\n              <ion-item>\n                {{upTime}}\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <!-- New Row -->\n          <ion-row>\n            <ion-col size=\"2\">\n              <ion-item>\n                <ion-icon align-self-center name=\"checkmark\" size=\"2\"></ion-icon>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-item>\n                String uptime\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"4\">\n              <ion-item>\n                {{stringUptime}}\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <!-- New Row -->\n          <ion-row>\n            <ion-col size=\"2\">\n              <ion-item>\n                <ion-icon align-self-center name=\"checkmark\" size=\"2\"></ion-icon>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-item>\n                Configured at\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"4\">\n              <ion-item>\n                {{ conf }}\n              </ion-item>\n            </ion-col>\n          </ion-row>\n\n        </ion-grid>\n      </ion-list>\n      \n      <!-- <div id=\"highcharts\" style=\"width:100%; height:250px;\"></div> -->\n    </ion-card-content>\n  </ion-card>\n\n\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/mini-status/mini-status.module.ts":
/*!***************************************************!*\
  !*** ./src/app/mini-status/mini-status.module.ts ***!
  \***************************************************/
/*! exports provided: MiniStatusPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiniStatusPageModule", function() { return MiniStatusPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _mini_status_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mini-status.page */ "./src/app/mini-status/mini-status.page.ts");







const routes = [
    {
        path: '',
        component: _mini_status_page__WEBPACK_IMPORTED_MODULE_6__["MiniStatusPage"]
    }
];
let MiniStatusPageModule = class MiniStatusPageModule {
};
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



/***/ }),

/***/ "./src/app/mini-status/mini-status.page.scss":
/*!***************************************************!*\
  !*** ./src/app/mini-status/mini-status.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#status-content {\n  width: 100%;\n  padding: 20px;\n  border-radius: 20%;\n}\n\n#status-content ion-icon {\n  padding-left: 40px;\n  color: #FF671D;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGlhcy9Qcm9qZWN0cy9taW5pbWFjb3JlL21vYmlsZS1hcHAtZnJvbnQtZW5kL2FwcC9zcmMvYXBwL21pbmktc3RhdHVzL21pbmktc3RhdHVzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbWluaS1zdGF0dXMvbWluaS1zdGF0dXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQ0FKOztBRElBO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0FDREoiLCJmaWxlIjoic3JjL2FwcC9taW5pLXN0YXR1cy9taW5pLXN0YXR1cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbiNzdGF0dXMtY29udGVudCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiAyMCU7O1xufVxuXG5cbiNzdGF0dXMtY29udGVudCBpb24taWNvbiB7XG4gICAgcGFkZGluZy1sZWZ0OiA0MHB4O1xuICAgIGNvbG9yOiAjRkY2NzFEO1xufSIsIiNzdGF0dXMtY29udGVudCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiAyMCU7XG59XG5cbiNzdGF0dXMtY29udGVudCBpb24taWNvbiB7XG4gIHBhZGRpbmctbGVmdDogNDBweDtcbiAgY29sb3I6ICNGRjY3MUQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/mini-status/mini-status.page.ts":
/*!*************************************************!*\
  !*** ./src/app/mini-status/mini-status.page.ts ***!
  \*************************************************/
/*! exports provided: MiniStatusPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiniStatusPage", function() { return MiniStatusPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_minima_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/minima-api.service */ "./src/app/service/minima-api.service.ts");



let MiniStatusPage = class MiniStatusPage {
    constructor(api) {
        this.api = api;
        this.host = '';
        this.loader = null;
    }
    ngOnInit() { }
    ionViewWillEnter() {
        this.updateStatus();
    }
    ionViewDidEnter() {
        // this.plotSimpleBarChart();
    }
    updateStatus() {
        this.api.getStatus().then((res) => {
            console.log(res.response.tip.Block);
            // Check node's status..
            if (res.status === true) {
                this.status = "Online";
            }
            else {
                this.status = "Offline";
            }
            // fetch json vars..
            this.versionNumber = res.response.version;
            this.blocksGenerated = res.response.tip.Block;
            this.upTime = res.response.milliuptime;
            this.stringUptime = res.response.stringuptime;
            this.conf = res.response.conf;
        });
    }
    getColor() {
        if (this.status == "Online") {
            return 'green';
        }
        else {
            return 'red';
        }
    }
};
MiniStatusPage.ctorParameters = () => [
    { type: _service_minima_api_service__WEBPACK_IMPORTED_MODULE_2__["MinimaApiService"] }
];
MiniStatusPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mini-status',
        template: __webpack_require__(/*! raw-loader!./mini-status.page.html */ "./node_modules/raw-loader/index.js!./src/app/mini-status/mini-status.page.html"),
        styles: [__webpack_require__(/*! ./mini-status.page.scss */ "./src/app/mini-status/mini-status.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_minima_api_service__WEBPACK_IMPORTED_MODULE_2__["MinimaApiService"]])
], MiniStatusPage);



/***/ })

}]);
//# sourceMappingURL=mini-status-mini-status-module-es2015.js.map