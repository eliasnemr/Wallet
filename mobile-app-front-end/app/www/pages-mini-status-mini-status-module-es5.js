(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-mini-status-mini-status-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/mini-status/mini-status.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/mini-status/mini-status.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-app>\n<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title color=\"primary\">\n      Status\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n        <ion-list *ngIf=\"statusOfStatus === 'updated' \">\n        <ion-list-header>\n        Minima Node Status\n        </ion-list-header>\n          <ion-item>\n            <ion-icon name=\"checkmark-circle\" slot=\"start\"></ion-icon>\n            <ion-label>\n            <h2>Status</h2>\n            <p> {{ status?.status }}</p>\n            </ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-icon name=\"checkmark-circle\" slot=\"start\"></ion-icon>\n            <ion-label>\n            <h2>Node uptime</h2>\n            <p>{{ status?.response.stringuptime }}</p>\n            </ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-icon name=\"checkmark-circle\" slot=\"start\"></ion-icon>\n            <ion-label>\n            <h2>Configuration path</h2>\n            <p>{{ status?.response.conf }}</p>\n            </ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-icon name=\"checkmark-circle\" slot=\"start\"></ion-icon>\n            <ion-label>\n            <h2>Hosting IP</h2>\n            <p>{{ status?.response.host +':' }}{{ status?.response.port }}</p>\n            </ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-icon name=\"checkmark-circle\" slot=\"start\"></ion-icon>\n            <ion-label>\n            <h2>RPC Port</h2>\n            <p>{{ status?.response.rpcport }}</p>\n            </ion-label>\n          </ion-item>\n          <ion-item lines=\"none\">\n            <ion-icon name=\"checkmark-circle\" slot=\"start\"></ion-icon>\n            <ion-label>\n            <h2>Last block number</h2>\n            <p>{{ status?.response.tip.block }}</p>\n            </ion-label>\n          </ion-item>\n        </ion-list>\n\n        <!-- SKELETON UX FOR LOADING -->\n        <div *ngIf=\"statusOfStatus === 'empty'\">\n        <ion-list>\n        <ion-list-header>\n        Minima Node Status\n        </ion-list-header>\n          <ion-item>\n            <ion-icon name=\"checkmark-circle\" slot=\"start\"></ion-icon>\n            <ion-label>\n            <h2>Status</h2>\n            <p> <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text></p>\n            </ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-icon name=\"checkmark-circle\" slot=\"start\"></ion-icon>\n            <ion-label>\n            <h2>Node uptime</h2>\n            <p> <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text></p>\n            </ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-icon name=\"checkmark-circle\" slot=\"start\"></ion-icon>\n            <ion-label>\n            <h2>Configuration path</h2>\n            <p> <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text></p>\n            </ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-icon name=\"checkmark-circle\" slot=\"start\"></ion-icon>\n            <ion-label>\n            <h2>Hosting IP</h2>\n            <p> <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text></p>\n            </ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-icon name=\"checkmark-circle\" slot=\"start\"></ion-icon>\n            <ion-label>\n            <h2>RPC Port</h2>\n            <p> <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text></p>\n            </ion-label>\n          </ion-item>\n          <ion-item lines=\"none\">\n            <ion-icon name=\"checkmark-circle\" slot=\"start\"></ion-icon>\n            <ion-label>\n            <h2>Last block number</h2>\n            <p> <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text></p>\n            </ion-label>\n          </ion-item>\n        </ion-list>\n        </div>\n\n</ion-content>\n\n<ion-footer>\n     <ion-list lines=\"none\">\n       <ion-item>\n       <ion-icon slot=\"start\" name=\"notifications\"></ion-icon>\n       <p>Call \"status\" in \n         <a style=\"font-style: normal;\" routerLink=\"/mini-term\">terminal</a> for more details of the node's status.</p> \n      </ion-item>\n     </ion-list>\n</ion-footer>\n</ion-app>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _mini_status_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mini-status.page */ "./src/app/pages/mini-status/mini-status.page.ts");







var routes = [
    {
        path: '',
        component: _mini_status_page__WEBPACK_IMPORTED_MODULE_6__["MiniStatusPage"]
    }
];
var MiniStatusPageModule = /** @class */ (function () {
    function MiniStatusPageModule() {
    }
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
    return MiniStatusPageModule;
}());



/***/ }),

/***/ "./src/app/pages/mini-status/mini-status.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/mini-status/mini-status.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#status-content {\n  width: 100%;\n  padding: 5px;\n  border-radius: 20%;\n  font-size: 0.5em;\n}\n\n#status-content ion-icon {\n  padding-left: 1em;\n  color: #FF671D;\n}\n\n#status-content ion-list ion-grid ion-col ion-item {\n  font-size: 1.5em;\n}\n\n.ion-text-wrap {\n  word-wrap: normal;\n}\n\nion-list ion-item h2 {\n  color: #06AAC7;\n}\n\nion-list ion-item p {\n  white-space: normal;\n}\n\nion-list ion-icon {\n  padding-right: 4px;\n}\n\nion-icon {\n  color: #06AAC7;\n}\n\nion-chip {\n  background-color: transparent;\n}\n\nion-footer ion-list ion-item {\n  border-top: 2px solid #ffffcc;\n  border-bottom: 2px solid #ffffcc;\n  border-radius: 5px;\n}\n\n.status-logo {\n  font-size: 30px;\n}\n\n.sup {\n  border-radius: 10px;\n  font-size: 8px;\n  margin-bottom: 10px;\n  background-color: none;\n}\n\nion-note {\n  font-family: \"Aeonik\";\n  font-weight: bolder;\n  font-size: 22px;\n  padding-top: 23px;\n  color: #929396;\n}\n\n.status-logo-title {\n  font-family: \"Ridley-normal\";\n  font-size: 22px;\n}\n\n.status-logo-title {\n  font-family: \"Ridley-normal\";\n  margin-top: 24px;\n  font-size: 20px;\n}\n\nion-list-header {\n  font-size: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGlhcy9Qcm9qZWN0cy9taW5pbWFjb3JlL21vYmlsZS1hcHAtZnJvbnQtZW5kL2FwcC9zcmMvYXBwL3BhZ2VzL21pbmktc3RhdHVzL21pbmktc3RhdHVzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvbWluaS1zdGF0dXMvbWluaS1zdGF0dXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDREo7O0FESUE7RUFDSSxpQkFBQTtFQUNBLGNBQUE7QUNESjs7QURJQTtFQUNJLGdCQUFBO0FDREo7O0FESUE7RUFDSSxpQkFBQTtBQ0RKOztBRE1BO0VBQ0ksY0FBQTtBQ0hKOztBRE1BO0VBQ0ksbUJBQUE7QUNISjs7QURNQztFQUNHLGtCQUFBO0FDSEo7O0FET0E7RUFDSSxjQUFBO0FDSko7O0FET0E7RUFDSSw2QkFBQTtBQ0pKOztBRE9BO0VBQ0ksNkJBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0FDSko7O0FET0E7RUFDSSxlQUFBO0FDSko7O0FETUE7RUFDSSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FDSEo7O0FES0E7RUFDSSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ0ZKOztBRElBO0VBQ0ksNEJBQUE7RUFDQSxlQUFBO0FDREo7O0FER0E7RUFDSSw0QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ0FKOztBREVBO0VBQ0ksZUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbWluaS1zdGF0dXMvbWluaS1zdGF0dXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbiNzdGF0dXMtY29udGVudCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDIwJTtcbiAgICBmb250LXNpemU6IDAuNWVtO1xufVxuXG4jc3RhdHVzLWNvbnRlbnQgaW9uLWljb24ge1xuICAgIHBhZGRpbmctbGVmdDogMWVtO1xuICAgIGNvbG9yOiAjRkY2NzFEO1xufVxuXG4jc3RhdHVzLWNvbnRlbnQgaW9uLWxpc3QgaW9uLWdyaWQgaW9uLWNvbCBpb24taXRlbSB7XG4gICAgZm9udC1zaXplOiAxLjVlbTtcbn1cblxuLmlvbi10ZXh0LXdyYXAge1xuICAgIHdvcmQtd3JhcDogbm9ybWFsO1xufVxuXG5cblxuaW9uLWxpc3QgaW9uLWl0ZW0gaDIge1xuICAgIGNvbG9yOiAjMDZBQUM3O1xufVxuXG5pb24tbGlzdCBpb24taXRlbSBwIHtcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xufVxuXG4gaW9uLWxpc3QgaW9uLWljb24ge1xuICAgIHBhZGRpbmctcmlnaHQ6IDRweDtcbn1cblxuXG5pb24taWNvbiB7XG4gICAgY29sb3I6ICMwNkFBQzc7XG59XG5cbmlvbi1jaGlwIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuaW9uLWZvb3RlciBpb24tbGlzdCBpb24taXRlbSB7XG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICNmZmZmY2M7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkI2ZmZmZjYztcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5zdGF0dXMtbG9nbyB7XG4gICAgZm9udC1zaXplOiAzMHB4O1xufVxuLnN1cCB7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBmb250LXNpemU6IDhweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IG5vbmU7XG59XG5pb24tbm90ZSB7XG4gICAgZm9udC1mYW1pbHk6ICdBZW9uaWsnO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICAgIHBhZGRpbmctdG9wOiAyM3B4O1xuICAgIGNvbG9yOiAjOTI5Mzk2O1xufVxuLnN0YXR1cy1sb2dvLXRpdGxlIHtcbiAgICBmb250LWZhbWlseTogJ1JpZGxleS1ub3JtYWwnO1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbn1cbi5zdGF0dXMtbG9nby10aXRsZSB7XG4gICAgZm9udC1mYW1pbHk6ICdSaWRsZXktbm9ybWFsJztcbiAgICBtYXJnaW4tdG9wOjI0cHg7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuaW9uLWxpc3QtaGVhZGVyIHtcbiAgICBmb250LXNpemU6IDEuMHJlbTtcbn1cbiIsIiNzdGF0dXMtY29udGVudCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwJTtcbiAgZm9udC1zaXplOiAwLjVlbTtcbn1cblxuI3N0YXR1cy1jb250ZW50IGlvbi1pY29uIHtcbiAgcGFkZGluZy1sZWZ0OiAxZW07XG4gIGNvbG9yOiAjRkY2NzFEO1xufVxuXG4jc3RhdHVzLWNvbnRlbnQgaW9uLWxpc3QgaW9uLWdyaWQgaW9uLWNvbCBpb24taXRlbSB7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG59XG5cbi5pb24tdGV4dC13cmFwIHtcbiAgd29yZC13cmFwOiBub3JtYWw7XG59XG5cbmlvbi1saXN0IGlvbi1pdGVtIGgyIHtcbiAgY29sb3I6ICMwNkFBQzc7XG59XG5cbmlvbi1saXN0IGlvbi1pdGVtIHAge1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xufVxuXG5pb24tbGlzdCBpb24taWNvbiB7XG4gIHBhZGRpbmctcmlnaHQ6IDRweDtcbn1cblxuaW9uLWljb24ge1xuICBjb2xvcjogIzA2QUFDNztcbn1cblxuaW9uLWNoaXAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuaW9uLWZvb3RlciBpb24tbGlzdCBpb24taXRlbSB7XG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCAjZmZmZmNjO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2ZmZmZjYztcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uc3RhdHVzLWxvZ28ge1xuICBmb250LXNpemU6IDMwcHg7XG59XG5cbi5zdXAge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBmb250LXNpemU6IDhweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogbm9uZTtcbn1cblxuaW9uLW5vdGUge1xuICBmb250LWZhbWlseTogXCJBZW9uaWtcIjtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBwYWRkaW5nLXRvcDogMjNweDtcbiAgY29sb3I6ICM5MjkzOTY7XG59XG5cbi5zdGF0dXMtbG9nby10aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlJpZGxleS1ub3JtYWxcIjtcbiAgZm9udC1zaXplOiAyMnB4O1xufVxuXG4uc3RhdHVzLWxvZ28tdGl0bGUge1xuICBmb250LWZhbWlseTogXCJSaWRsZXktbm9ybWFsXCI7XG4gIG1hcmdpbi10b3A6IDI0cHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuaW9uLWxpc3QtaGVhZGVyIHtcbiAgZm9udC1zaXplOiAxcmVtO1xufSJdfQ== */"

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
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _service_status_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../service/status.service */ "./src/app/service/status.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");




var MiniStatusPage = /** @class */ (function () {
    function MiniStatusPage(service, ref) {
        this.service = service;
        this.ref = ref;
        this.statusOfStatus = 'empty';
        // - vars
        this.host = '';
        this.loader = null;
    }
    MiniStatusPage.prototype.ngOnInit = function () { };
    MiniStatusPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        setTimeout(function () {
            _this.updateStatus(); // subscribes & polls status
            _this.statusOfStatus = 'updated';
        }, 500);
    };
    MiniStatusPage.prototype.ionViewWillLeave = function () {
        this.statusSubscription.unsubscribe(); // unsubs
    };
    MiniStatusPage.prototype.getImg = function () {
        if (document.body.classList.value === 'dark') {
            return '../../assets/fulllogodark.svg';
        }
        else {
            return '../../assets/fulllogo.svg';
        }
    };
    MiniStatusPage.prototype.updateStatus = function () {
        var _this = this;
        this.statusSubscription = this.service.getStatus()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (responseData) {
            var status = responseData;
            return status;
        }))
            .subscribe(function (res) {
            _this.status = res;
        });
    };
    MiniStatusPage.ctorParameters = function () { return [
        { type: _service_status_service__WEBPACK_IMPORTED_MODULE_2__["StatusService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] }
    ]; };
    MiniStatusPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-mini-status',
            template: __webpack_require__(/*! raw-loader!./mini-status.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/mini-status/mini-status.page.html"),
            providers: [_service_status_service__WEBPACK_IMPORTED_MODULE_2__["StatusService"]],
            styles: [__webpack_require__(/*! ./mini-status.page.scss */ "./src/app/pages/mini-status/mini-status.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_status_service__WEBPACK_IMPORTED_MODULE_2__["StatusService"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]])
    ], MiniStatusPage);
    return MiniStatusPage;
}());



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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs_Observable_timer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/Observable/timer */ "./node_modules/rxjs-compat/_esm5/Observable/timer.js");







var StatusService = /** @class */ (function () {
    function StatusService(http, ref) {
        this.http = http;
        this.ref = ref;
        this.manualRefresh = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.host = '';
        this.loader = null;
        this.host = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__["environment"].defaultNode;
        this.host = this.getHost();
    }
    StatusService.prototype.getStatus = function () {
        return this.request('status');
    };
    StatusService.prototype.getHost = function () {
        if (localStorage.getItem('minima_host') == null) {
            localStorage.setItem('minima_host', this.host);
            return this.host;
        }
        else {
            return localStorage.getItem('minima_host');
        }
    };
    StatusService.prototype.doRefresh = function (event) {
        this.manualRefresh.next('');
        setTimeout(function () {
            event.target.complete();
        }, 1000);
    };
    StatusService.prototype.request = function (route) {
        var apiUrl = this.host + route; // this.host+'route' = "127.0.0.1:8999/'balance'"
        var status$ = this.http.get(apiUrl);
        return this.polledStatus$ = Object(rxjs_Observable_timer__WEBPACK_IMPORTED_MODULE_6__["timer"])(0, 3000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["merge"])(this.manualRefresh), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["concatMap"])(function (_) { return status$; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (res) { return res; }));
    };
    StatusService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] }
    ]; };
    StatusService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]])
    ], StatusService);
    return StatusService;
}());



/***/ })

}]);
//# sourceMappingURL=pages-mini-status-mini-status-module-es5.js.map