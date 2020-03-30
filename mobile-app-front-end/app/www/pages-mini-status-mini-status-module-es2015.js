(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-mini-status-mini-status-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/mini-status/mini-status.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/mini-status/mini-status.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-app>\n<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title color=\"primary\">\n      Status\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n        <ion-list *ngIf=\"statusOfStatus === 'updated' \">\n        <ion-list-header>\n        Minima Node Status\n        </ion-list-header>\n          <ion-item>\n            <ion-icon name=\"checkmark-circle\" slot=\"start\"></ion-icon>\n            <ion-label>\n            <h2>Status</h2>\n            <p *ngIf=\"status?.status === true\" class=\"status-on\"> Online</p>\n            <p *ngIf=\"status?.status === false\" class=\"status-off\"> Offline</p>\n            </ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-icon name=\"checkmark-circle\" slot=\"start\"></ion-icon>\n            <ion-label>\n            <h2>Node uptime</h2>\n            <p>{{ status?.response.uptime }}</p>\n            </ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-icon name=\"checkmark-circle\" slot=\"start\"></ion-icon>\n            <ion-label>\n            <h2>Configuration path</h2>\n            <p>{{ status?.response.conf }}</p>\n            </ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-icon name=\"checkmark-circle\" slot=\"start\"></ion-icon>\n            <ion-label>\n            <h2>Hosting IP</h2>\n            <p>{{ status?.response.host +':' }}{{ status?.response.port }}</p>\n            </ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-icon name=\"checkmark-circle\" slot=\"start\"></ion-icon>\n            <ion-label>\n            <h2>RPC Port</h2>\n            <p>{{ status?.response.rpcport }}</p>\n            </ion-label>\n          </ion-item>\n          <ion-item lines=\"none\">\n            <ion-icon name=\"checkmark-circle\" slot=\"start\"></ion-icon>\n            <ion-label>\n            <h2>Last block number</h2>\n            <p>{{ status?.response.lastblock }}</p>\n            </ion-label>\n          </ion-item>\n        </ion-list>\n\n        <!-- SKELETON UX FOR LOADING -->\n        <div *ngIf=\"statusOfStatus === 'empty'\">\n        <ion-list>\n        <ion-list-header>\n        Minima Node Status\n        </ion-list-header>\n          <ion-item>\n            <ion-icon name=\"checkmark-circle\" slot=\"start\"></ion-icon>\n            <ion-label>\n            <h2>Status</h2>\n            <p> <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text></p>\n            </ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-icon name=\"checkmark-circle\" slot=\"start\"></ion-icon>\n            <ion-label>\n            <h2>Node uptime</h2>\n            <p> <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text></p>\n            </ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-icon name=\"checkmark-circle\" slot=\"start\"></ion-icon>\n            <ion-label>\n            <h2>Configuration path</h2>\n            <p> <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text></p>\n            </ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-icon name=\"checkmark-circle\" slot=\"start\"></ion-icon>\n            <ion-label>\n            <h2>Hosting IP</h2>\n            <p> <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text></p>\n            </ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-icon name=\"checkmark-circle\" slot=\"start\"></ion-icon>\n            <ion-label>\n            <h2>RPC Port</h2>\n            <p> <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text></p>\n            </ion-label>\n          </ion-item>\n          <ion-item lines=\"none\">\n            <ion-icon name=\"checkmark-circle\" slot=\"start\"></ion-icon>\n            <ion-label>\n            <h2>Last block number</h2>\n            <p> <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text></p>\n            </ion-label>\n          </ion-item>\n        </ion-list>\n        </div>\n\n</ion-content>\n\n<ion-footer>\n     <ion-list lines=\"none\">\n       <ion-item>\n       <ion-icon slot=\"start\" name=\"notifications\"></ion-icon>\n       <p>Call \"status\" in \n         <a style=\"font-style: normal;\" routerLink=\"/mini-term\">terminal</a> for more details of the node's status.</p> \n      </ion-item>\n     </ion-list>\n</ion-footer>\n</ion-app>"

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

module.exports = "#status-content {\n  width: 100%;\n  padding: 5px;\n  border-radius: 20%;\n  font-size: 0.5em;\n}\n\n#status-content ion-icon {\n  padding-left: 1em;\n  color: #FF671D;\n}\n\n#status-content ion-list ion-grid ion-col ion-item {\n  font-size: 1.5em;\n}\n\n.ion-text-wrap {\n  word-wrap: normal;\n}\n\nion-list ion-item h2 {\n  color: #06AAC7;\n}\n\nion-list ion-item p {\n  white-space: normal;\n}\n\nion-list ion-icon {\n  padding-right: 4px;\n}\n\nion-icon {\n  color: #06AAC7;\n}\n\nion-chip {\n  background-color: transparent;\n}\n\nion-footer ion-list ion-item {\n  border-top: 2px solid #ffffcc;\n  border-bottom: 2px solid #ffffcc;\n  border-radius: 5px;\n}\n\n.status-logo {\n  font-size: 30px;\n}\n\n.sup {\n  border-radius: 10px;\n  font-size: 8px;\n  margin-bottom: 10px;\n  background-color: none;\n}\n\nion-note {\n  font-family: \"Aeonik\";\n  font-weight: bolder;\n  font-size: 22px;\n  padding-top: 23px;\n  color: #929396;\n}\n\n.status-logo-title {\n  font-family: \"Ridley-normal\";\n  font-size: 22px;\n}\n\n.status-logo-title {\n  font-family: \"Ridley-normal\";\n  margin-top: 24px;\n  font-size: 20px;\n}\n\nion-list-header {\n  font-size: 1rem;\n}\n\n.status-on {\n  color: #3FBF3F;\n}\n\n.status-off {\n  color: #f2f2f2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGlhcy9Qcm9qZWN0cy9taW5pbWFjb3JlL21vYmlsZS1hcHAtZnJvbnQtZW5kL2FwcC9zcmMvYXBwL3BhZ2VzL21pbmktc3RhdHVzL21pbmktc3RhdHVzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvbWluaS1zdGF0dXMvbWluaS1zdGF0dXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDREo7O0FESUE7RUFDSSxpQkFBQTtFQUNBLGNBQUE7QUNESjs7QURJQTtFQUNJLGdCQUFBO0FDREo7O0FESUE7RUFDSSxpQkFBQTtBQ0RKOztBRE1BO0VBQ0ksY0FBQTtBQ0hKOztBRE1BO0VBQ0ksbUJBQUE7QUNISjs7QURNQztFQUNHLGtCQUFBO0FDSEo7O0FET0E7RUFDSSxjQUFBO0FDSko7O0FET0E7RUFDSSw2QkFBQTtBQ0pKOztBRE9BO0VBQ0ksNkJBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0FDSko7O0FET0E7RUFDSSxlQUFBO0FDSko7O0FETUE7RUFDSSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FDSEo7O0FES0E7RUFDSSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ0ZKOztBRElBO0VBQ0ksNEJBQUE7RUFDQSxlQUFBO0FDREo7O0FER0E7RUFDSSw0QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ0FKOztBREVBO0VBQ0ksZUFBQTtBQ0NKOztBREVBO0VBQ0ksY0FBQTtBQ0NKOztBRENBO0VBQ0ksY0FBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbWluaS1zdGF0dXMvbWluaS1zdGF0dXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbiNzdGF0dXMtY29udGVudCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDIwJTtcbiAgICBmb250LXNpemU6IDAuNWVtO1xufVxuXG4jc3RhdHVzLWNvbnRlbnQgaW9uLWljb24ge1xuICAgIHBhZGRpbmctbGVmdDogMWVtO1xuICAgIGNvbG9yOiAjRkY2NzFEO1xufVxuXG4jc3RhdHVzLWNvbnRlbnQgaW9uLWxpc3QgaW9uLWdyaWQgaW9uLWNvbCBpb24taXRlbSB7XG4gICAgZm9udC1zaXplOiAxLjVlbTtcbn1cblxuLmlvbi10ZXh0LXdyYXAge1xuICAgIHdvcmQtd3JhcDogbm9ybWFsO1xufVxuXG5cblxuaW9uLWxpc3QgaW9uLWl0ZW0gaDIge1xuICAgIGNvbG9yOiAjMDZBQUM3O1xufVxuXG5pb24tbGlzdCBpb24taXRlbSBwIHtcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xufVxuXG4gaW9uLWxpc3QgaW9uLWljb24ge1xuICAgIHBhZGRpbmctcmlnaHQ6IDRweDtcbn1cblxuXG5pb24taWNvbiB7XG4gICAgY29sb3I6ICMwNkFBQzc7XG59XG5cbmlvbi1jaGlwIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuaW9uLWZvb3RlciBpb24tbGlzdCBpb24taXRlbSB7XG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICNmZmZmY2M7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkI2ZmZmZjYztcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5zdGF0dXMtbG9nbyB7XG4gICAgZm9udC1zaXplOiAzMHB4O1xufVxuLnN1cCB7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBmb250LXNpemU6IDhweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IG5vbmU7XG59XG5pb24tbm90ZSB7XG4gICAgZm9udC1mYW1pbHk6ICdBZW9uaWsnO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICAgIHBhZGRpbmctdG9wOiAyM3B4O1xuICAgIGNvbG9yOiAjOTI5Mzk2O1xufVxuLnN0YXR1cy1sb2dvLXRpdGxlIHtcbiAgICBmb250LWZhbWlseTogJ1JpZGxleS1ub3JtYWwnO1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbn1cbi5zdGF0dXMtbG9nby10aXRsZSB7XG4gICAgZm9udC1mYW1pbHk6ICdSaWRsZXktbm9ybWFsJztcbiAgICBtYXJnaW4tdG9wOjI0cHg7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuaW9uLWxpc3QtaGVhZGVyIHtcbiAgICBmb250LXNpemU6IDEuMHJlbTtcbn1cblxuLnN0YXR1cy1vbiB7XG4gICAgY29sb3I6ICMzRkJGM0Y7XG59XG4uc3RhdHVzLW9mZiB7XG4gICAgY29sb3I6ICNmMmYyZjJcbn0iLCIjc3RhdHVzLWNvbnRlbnQge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXItcmFkaXVzOiAyMCU7XG4gIGZvbnQtc2l6ZTogMC41ZW07XG59XG5cbiNzdGF0dXMtY29udGVudCBpb24taWNvbiB7XG4gIHBhZGRpbmctbGVmdDogMWVtO1xuICBjb2xvcjogI0ZGNjcxRDtcbn1cblxuI3N0YXR1cy1jb250ZW50IGlvbi1saXN0IGlvbi1ncmlkIGlvbi1jb2wgaW9uLWl0ZW0ge1xuICBmb250LXNpemU6IDEuNWVtO1xufVxuXG4uaW9uLXRleHQtd3JhcCB7XG4gIHdvcmQtd3JhcDogbm9ybWFsO1xufVxuXG5pb24tbGlzdCBpb24taXRlbSBoMiB7XG4gIGNvbG9yOiAjMDZBQUM3O1xufVxuXG5pb24tbGlzdCBpb24taXRlbSBwIHtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbn1cblxuaW9uLWxpc3QgaW9uLWljb24ge1xuICBwYWRkaW5nLXJpZ2h0OiA0cHg7XG59XG5cbmlvbi1pY29uIHtcbiAgY29sb3I6ICMwNkFBQzc7XG59XG5cbmlvbi1jaGlwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbmlvbi1mb290ZXIgaW9uLWxpc3QgaW9uLWl0ZW0ge1xuICBib3JkZXItdG9wOiAycHggc29saWQgI2ZmZmZjYztcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNmZmZmY2M7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLnN0YXR1cy1sb2dvIHtcbiAgZm9udC1zaXplOiAzMHB4O1xufVxuXG4uc3VwIHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgZm9udC1zaXplOiA4cHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IG5vbmU7XG59XG5cbmlvbi1ub3RlIHtcbiAgZm9udC1mYW1pbHk6IFwiQWVvbmlrXCI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgcGFkZGluZy10b3A6IDIzcHg7XG4gIGNvbG9yOiAjOTI5Mzk2O1xufVxuXG4uc3RhdHVzLWxvZ28tdGl0bGUge1xuICBmb250LWZhbWlseTogXCJSaWRsZXktbm9ybWFsXCI7XG4gIGZvbnQtc2l6ZTogMjJweDtcbn1cblxuLnN0YXR1cy1sb2dvLXRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IFwiUmlkbGV5LW5vcm1hbFwiO1xuICBtYXJnaW4tdG9wOiAyNHB4O1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbmlvbi1saXN0LWhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cblxuLnN0YXR1cy1vbiB7XG4gIGNvbG9yOiAjM0ZCRjNGO1xufVxuXG4uc3RhdHVzLW9mZiB7XG4gIGNvbG9yOiAjZjJmMmYyO1xufSJdfQ== */"

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




let MiniStatusPage = class MiniStatusPage {
    constructor(service, ref) {
        this.service = service;
        this.ref = ref;
        this.statusOfStatus = 'empty';
        // - vars
        this.host = '';
        this.loader = null;
    }
    ngOnInit() { }
    ionViewWillEnter() {
        setTimeout(() => {
            this.updateStatus(); // subscribes & polls status
            this.statusOfStatus = 'updated';
        }, 500);
    }
    ionViewWillLeave() {
        this.statusSubscription.unsubscribe(); // unsubs
    }
    getImg() {
        if (document.body.classList.value === 'dark') {
            return '../../assets/fulllogodark.svg';
        }
        else {
            return '../../assets/fulllogo.svg';
        }
    }
    updateStatus() {
        this.statusSubscription = this.service.getStatus()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(responseData => {
            const status = responseData;
            return status;
        }))
            .subscribe((res) => {
            this.status = res;
        });
    }
};
MiniStatusPage.ctorParameters = () => [
    { type: _service_status_service__WEBPACK_IMPORTED_MODULE_2__["StatusService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] }
];
MiniStatusPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-mini-status',
        template: __webpack_require__(/*! raw-loader!./mini-status.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/mini-status/mini-status.page.html"),
        providers: [_service_status_service__WEBPACK_IMPORTED_MODULE_2__["StatusService"]],
        styles: [__webpack_require__(/*! ./mini-status.page.scss */ "./src/app/pages/mini-status/mini-status.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_status_service__WEBPACK_IMPORTED_MODULE_2__["StatusService"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]])
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
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../environments/environment.prod */ "./src/environments/environment.prod.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs_Observable_timer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/Observable/timer */ "./node_modules/rxjs-compat/_esm2015/Observable/timer.js");







let StatusService = class StatusService {
    constructor(http, ref) {
        this.http = http;
        this.ref = ref;
        this.manualRefresh = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.host = '';
        this.loader = null;
        this.host = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__["environment"].defaultNode;
        this.host = this.getHost();
    }
    getStatus() {
        return this.request('status');
    }
    getHost() {
        if (localStorage.getItem('minima_host') == null) {
            localStorage.setItem('minima_host', this.host);
            return this.host;
        }
        else {
            return localStorage.getItem('minima_host');
        }
    }
    doRefresh(event) {
        this.manualRefresh.next('');
        setTimeout(() => {
            event.target.complete();
        }, 1000);
    }
    request(route) {
        let apiUrl = this.host + route; // this.host+'route' = "127.0.0.1:8999/'balance'"
        let status$ = this.http.get(apiUrl);
        return this.polledStatus$ = Object(rxjs_Observable_timer__WEBPACK_IMPORTED_MODULE_6__["timer"])(0, 3000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["merge"])(this.manualRefresh), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["concatMap"])(_ => status$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((res) => res));
    }
};
StatusService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] }
];
StatusService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]])
], StatusService);



/***/ })

}]);
//# sourceMappingURL=pages-mini-status-mini-status-module-es2015.js.map