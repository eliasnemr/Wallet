(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-mini-status-mini-status-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/mini-status/mini-status.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/mini-status/mini-status.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-app>\n<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button class=\"menu-icon\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title class=\"large-text\">\n      Status\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-card-header>\n     Minima Node{{ \" Version \"+ status?.version }}\n    </ion-card-header>\n    <ion-card-content>\n      <ion-list>\n        <ion-grid>\n          <ion-row>\n            <ion-col size=\"12\">\n              <h5>\n                Status\n              </h5>\n              <p *ngIf=\"status?.version\" class=\"status-on small-text\"> Online</p>\n              <p *ngIf=\"!status?.version\" class=\"status-off small-text\"> Offline</p>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"12\">\n              <h5>\n                Node Version\n              </h5>\n              <p class=\"small-text\">{{ \"v\"+status?.version }}</p>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"12\">\n              <h5>\n                Uptime\n              </h5>\n              <p class=\"small-text\">{{ status?.uptime.substring(0,51) }}</p>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"12\">\n              <h5>\n                Configuration path\n              </h5>\n              <p class=\"small-text\">{{ status?.conf }}</p>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"12\">\n              <h5>\n                Host IP\n              </h5>\n              <p class=\"small-text\">{{ status?.host +':' }}{{ status?.minimaport }}</p>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"12\">\n              <h5>\n                RPC Port\n              </h5>\n              <p class=\"small-text\">{{ status?.rpcport }}</p>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"12\">\n              <h5>\n                Last Block Number\n              </h5>\n              <p class=\"small-text\">{{ status?.lastblock }}</p>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"12\">\n              <h5>\n                Relayed Time\n              </h5>\n              <p class=\"small-text\"> {{ status?.lasttime.substring(4, 30) }}</p>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-list> \n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n</ion-app>"

/***/ }),

/***/ "./node_modules/rxjs-compat/_esm2015/Observable/timer.js":
/*!***************************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm2015/Observable/timer.js ***!
  \***************************************************************/
/*! exports provided: timer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timer", function() { return rxjs__WEBPACK_IMPORTED_MODULE_0__["timer"]; });


//# sourceMappingURL=timer.js.map

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _mini_status_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mini-status.page */ "./src/app/pages/mini-status/mini-status.page.ts");







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

/***/ "./src/app/pages/mini-status/mini-status.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/mini-status/mini-status.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-card-header {\n  --background: var(--ion-background-color, #f2f2f2);\n  background: -webkit-gradient(linear, left top, left bottom, from(var(--ion-background-color, #fff)), to(var(--ion-background-color, #f2f2f2))) !important;\n  background: linear-gradient(to bottom, var(--ion-background-color, #fff) 0%, var(--ion-background-color, #f2f2f2) 100%) !important;\n}\n\nion-list-header {\n  background: var(--ion-card-header);\n}\n\n.status-on {\n  color: #48D2D3;\n}\n\n.status-off {\n  color: #f2f2f2;\n}\n\nion-toolbar {\n  --background: var(--card-header-color);\n}\n\nion-row {\n  margin-bottom: 8px;\n}\n\nh5, ion-card-header {\n  font-weight: 600;\n  letter-spacing: -0.02em;\n}\n\np {\n  opacity: 0.6;\n  font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGlhcy9Qcm9qZWN0cy9taW5pbWFjb3JlL21vYmlsZS1hcHAtZnJvbnQtZW5kL2FwcC9zcmMvYXBwL3BhZ2VzL21pbmktc3RhdHVzL21pbmktc3RhdHVzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvbWluaS1zdGF0dXMvbWluaS1zdGF0dXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0RBQUE7RUFDQSx5SkFBQTtFQUFBLGtJQUFBO0FDQ0o7O0FERUE7RUFDSSxrQ0FBQTtBQ0NKOztBREVBO0VBQ0ksY0FBQTtBQ0NKOztBRENBO0VBQ0ksY0FBQTtBQ0VKOztBREFBO0VBQ0ksc0NBQUE7QUNHSjs7QURBQTtFQUNJLGtCQUFBO0FDR0o7O0FEQUE7RUFDSSxnQkFBQTtFQUNBLHVCQUFBO0FDR0o7O0FEQUE7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7QUNHSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21pbmktc3RhdHVzL21pbmktc3RhdHVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJkLWhlYWRlciB7XG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwgI2YyZjJmMik7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZmZmKSAwJSwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsICNmMmYyZjIpIDEwMCUpICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1saXN0LWhlYWRlciB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNhcmQtaGVhZGVyKTtcbn1cblxuLnN0YXR1cy1vbiB7XG4gICAgY29sb3I6ICM0OEQyRDM7XG59XG4uc3RhdHVzLW9mZiB7XG4gICAgY29sb3I6ICNmMmYyZjI7XG59XG5pb24tdG9vbGJhciB7XG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1jYXJkLWhlYWRlci1jb2xvcik7XG59XG5cbmlvbi1yb3cge1xuICAgIG1hcmdpbi1ib3R0b206IDhweDtcbn1cblxuaDUsIGlvbi1jYXJkLWhlYWRlciB7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMDJlbTtcbn1cblxucCB7XG4gICAgb3BhY2l0eTogMC42O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG59IiwiaW9uLWNhcmQtaGVhZGVyIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwgI2YyZjJmMik7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZmZmKSAwJSwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsICNmMmYyZjIpIDEwMCUpICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1saXN0LWhlYWRlciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jYXJkLWhlYWRlcik7XG59XG5cbi5zdGF0dXMtb24ge1xuICBjb2xvcjogIzQ4RDJEMztcbn1cblxuLnN0YXR1cy1vZmYge1xuICBjb2xvcjogI2YyZjJmMjtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWNhcmQtaGVhZGVyLWNvbG9yKTtcbn1cblxuaW9uLXJvdyB7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cblxuaDUsIGlvbi1jYXJkLWhlYWRlciB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4wMmVtO1xufVxuXG5wIHtcbiAgb3BhY2l0eTogMC42O1xuICBmb250LXdlaWdodDogNTAwO1xufSJdfQ== */"

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
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _service_status_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../service/status.service */ "./src/app/service/status.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





let MiniStatusPage = class MiniStatusPage {
    constructor(service, ref, plat) {
        this.service = service;
        this.ref = ref;
        this.plat = plat;
    }
    ngOnInit() { }
    ionViewWillEnter() {
        setTimeout(() => {
            this.updateStatus(); // subscribes & polls status
        }, 500);
        window.addEventListener('MinimaEvent', (evt) => {
            // Event connection success
            if (evt.detail.event === 'newblock') {
                this.updateStatus();
            }
        });
    }
    ionViewWillLeave() {
        if (this.statusSubscription) {
            this.statusSubscription.unsubscribe(); // unsubs
        }
    }
    getImg() {
        if (document.body.classList.value === 'dark') {
            return '../../assets/fulllogodark.svg';
        }
        else {
            return '../../assets/fulllogo.svg';
        }
    }
    checkPlatform() {
        if (this.plat.is('ios') || this.plat.is('android')) {
            return false;
        }
        else {
            return true;
        }
    }
    updateStatus() {
        this.statusSubscription = this.service.getStatus()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(responseData => {
            const status = responseData;
            return status;
        }))
            .subscribe((res) => {
            if (this.lastJSON != JSON.stringify(res)) {
                this.status = res;
                this.lastJSON = JSON.stringify(res);
            }
        });
    }
};
MiniStatusPage.ctorParameters = () => [
    { type: _service_status_service__WEBPACK_IMPORTED_MODULE_2__["StatusService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] }
];
MiniStatusPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-mini-status',
        template: __webpack_require__(/*! raw-loader!./mini-status.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/mini-status/mini-status.page.html"),
        providers: [_service_status_service__WEBPACK_IMPORTED_MODULE_2__["StatusService"]],
        styles: [__webpack_require__(/*! ./mini-status.page.scss */ "./src/app/pages/mini-status/mini-status.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_status_service__WEBPACK_IMPORTED_MODULE_2__["StatusService"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]])
], MiniStatusPage);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs_Observable_timer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/Observable/timer */ "./node_modules/rxjs-compat/_esm2015/Observable/timer.js");





let StatusService = class StatusService {
    constructor() {
        this.manualRefresh = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    getStatus() {
        return this.request('status');
    }
    request(route) {
        const statusObservable = rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(observer => {
            observer.next(Minima.status);
        });
        let status$ = statusObservable;
        return this.polledStatus$ = Object(rxjs_Observable_timer__WEBPACK_IMPORTED_MODULE_4__["timer"])(0, 3000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["concatMap"])(_ => status$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => res));
    }
};
StatusService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], StatusService);



/***/ })

}]);
//# sourceMappingURL=pages-mini-status-mini-status-module-es2015.js.map