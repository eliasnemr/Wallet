(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-mini-status-mini-status-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/mini-status/mini-status.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/mini-status/mini-status.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-app>\n<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button class=\"menu-icon\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title class=\"large-text\">\n      Status\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-grid *ngIf=\"!status?.version\">\n    <ion-row>\n      \n      <ion-col style=\"display: flex; align-items:center; justify-content:center\" size=\"12\">\n        <ion-chip>\n          <ion-label>Status</ion-label>\n          <ion-icon name=\"close\" color=\"danger\"></ion-icon>\n        </ion-chip>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid *ngIf=\"status?.version\">\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-chip>\n          <ion-label>Status</ion-label>\n          <ion-icon *ngIf=\"status?.version\" name=\"checkmark\" color=\"success\"></ion-icon>\n          <ion-icon *ngIf=\"!status?.version\" name=\"close\" color=\"danger\"></ion-icon>\n        </ion-chip>\n        <ion-chip>\n          <ion-label><span style=\"color:var(--ion-color-secondary)\">v</span>{{ status?.version}} </ion-label>\n        </ion-chip>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-card class=\"borders\">\n          <ion-card-header>\n            Current Status\n          </ion-card-header>\n          <ion-card-content>\n            <ion-list lines=\"none\">\n              <ion-item>\n                <ion-col size-md=\"3\" size-sm=\"6\" class=\"title\">\n                  Uptime\n                </ion-col>\n                <ion-col style=\"white-space: normal!important;\" class=\"value\">\n                  {{ status?.uptime }}\n                </ion-col>\n              </ion-item>\n              <ion-item>\n                <ion-col size-md=\"3\" size-sm=\"6\" class=\"title\">\n                  Last Block No.\n                </ion-col>\n                <ion-col class=\"value\">\n                  {{ status?.lastblock }}\n                </ion-col>\n              </ion-item>\n              <ion-item>\n                <ion-col size-md=\"3\" size-sm=\"6\" class=\"title\">\n                  Configuration Path\n                </ion-col>\n                <ion-col style=\"white-space: normal!important;\" class=\"value\">\n                  {{ status?.conf }}\n                </ion-col>\n              </ion-item>\n              <ion-item>\n                <ion-col size-md=\"3\" size-sm=\"6\" class=\"title\">\n                  Host IP\n                </ion-col>\n                <ion-col style=\"white-space: normal!important;\" class=\"value\">\n                  {{ status?.host +':' }}{{ status?.minimaport }}\n                </ion-col>\n              </ion-item>\n              <ion-item>\n                <ion-col size-md=\"3\" size-sm=\"6\" class=\"title\">\n                  RPC Port\n                </ion-col>\n                <ion-col style=\"white-space: normal!important;\" class=\"value\">\n                  {{ status?.rpcport }}\n                </ion-col>\n              </ion-item>\n              <ion-item>\n                <ion-col size-md=\"3\" size-sm=\"6\" class=\"title\">\n                  MiniDAPP Server Port\n                </ion-col>\n                <ion-col style=\"white-space: normal!important;\" class=\"value\">\n                  {{ status?.minidappserver }}\n                </ion-col>\n              </ion-item>\n              <ion-item>\n                <ion-col size-md=\"3\" size-sm=\"6\" class=\"title\">\n                  Chainweight\n                </ion-col>\n                <ion-col style=\"white-space: normal!important;\" class=\"value\">\n                  {{ status?.chainweight }}\n                </ion-col>\n              </ion-item>\n              <ion-item>\n                <ion-col size-md=\"3\" size-sm=\"6\" class=\"title\">\n                  Chainlength\n                </ion-col>\n                <ion-col style=\"white-space: normal!important;\" class=\"value\">\n                  {{ status?.chainlength }}\n                </ion-col>\n              </ion-item>\n              <ion-item>\n                <ion-col size-md=\"3\" size-sm=\"6\" class=\"title\">\n                  Chainspeed\n                </ion-col>\n                <ion-col style=\"white-space: normal!important;\" class=\"value\">\n                  {{ status?.chainspeed }}\n                </ion-col>\n              </ion-item>\n              <ion-item>\n                <ion-col size-md=\"3\" size-sm=\"6\" class=\"title\">\n                  RAM Used\n                </ion-col>\n                <ion-col style=\"white-space: normal!important;\" class=\"value\">\n                  {{ status?.ram }}\n                </ion-col>\n              </ion-item>\n              <ion-item>\n                <ion-col size-md=\"3\" size-sm=\"6\" class=\"title\">\n                  IBD\n                </ion-col>\n                <ion-col style=\"white-space: normal!important;\" class=\"value\">\n                  {{ status?.IBD }}\n                </ion-col>\n              </ion-item>\n              <ion-item>\n                <ion-col size-md=\"3\" size-sm=\"6\" class=\"title\">\n                  TxPoW Database Length\n                </ion-col>\n                <ion-col style=\"white-space: normal!important;\" class=\"value\">\n                  {{ status?.txpowdb }}\n                </ion-col>\n              </ion-item>\n              <ion-item>\n                <ion-col size-md=\"3\" size-sm=\"6\" class=\"title\">\n                  Number of Connections\n                </ion-col>\n                <ion-col style=\"white-space: normal!important;\" class=\"value\">\n                  {{ status?.connections }}\n                </ion-col>\n              </ion-item>\n              <ion-item>\n                <ion-col size-md=\"3\" size-sm=\"6\" class=\"title\">\n                  Tip\n                </ion-col>\n                <ion-col class=\"value\">\n                  {{ status?.tip }}\n                </ion-col>\n              </ion-item>\n            </ion-list>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n</ion-app>"

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
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
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

module.exports = "* {\n  color: var(--ion-color-tertiary);\n}\n\nion-header ion-title {\n  font-family: manrope-bold;\n  font-size: 1.2rem;\n  padding-top: 5%;\n}\n\nion-chip {\n  background-color: var(--ion-color-chip);\n}\n\nion-chip ion-label {\n  font-family: manrope-bold;\n}\n\n.title {\n  font-family: manrope-bold;\n  font-size: 1rem;\n  float: left;\n  text-overflow: ellipsis;\n  max-width: inherit;\n  white-space: normal;\n  word-wrap: normal;\n}\n\n.value {\n  font-family: manrope-light;\n  text-align: left;\n  float: left;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  max-width: inherit;\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGlhc25lbXIvcHJvamVjdHMvV2FsbGV0L21vYmlsZS1hcHAtZnJvbnQtZW5kL2FwcC9zcmMvYXBwL3BhZ2VzL21pbmktc3RhdHVzL21pbmktc3RhdHVzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvbWluaS1zdGF0dXMvbWluaS1zdGF0dXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksZ0NBQUE7QUNBSjs7QURFQTtFQUNJLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDQ0o7O0FEQ0E7RUFDSSx1Q0FBQTtBQ0VKOztBREFBO0VBQ0kseUJBQUE7QUNHSjs7QUREQTtFQUNJLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQ0lKOztBREZBO0VBQ0ksMEJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0tKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbWluaS1zdGF0dXMvbWluaS1zdGF0dXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4qIHtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5KTtcbn1cbmlvbi1oZWFkZXIgaW9uLXRpdGxlIHtcbiAgICBmb250LWZhbWlseTogbWFucm9wZS1ib2xkO1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIHBhZGRpbmctdG9wOiA1JTtcbn1cbmlvbi1jaGlwIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItY2hpcCk7XG59XG5pb24tY2hpcCBpb24tbGFiZWwge1xuICAgIGZvbnQtZmFtaWx5OiBtYW5yb3BlLWJvbGQ7XG59XG4udGl0bGUge1xuICAgIGZvbnQtZmFtaWx5OiBtYW5yb3BlLWJvbGQ7XG4gICAgZm9udC1zaXplOiAxLjByZW07XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgbWF4LXdpZHRoOiBpbmhlcml0O1xuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gICAgd29yZC13cmFwOiBub3JtYWw7XG59XG4udmFsdWUge1xuICAgIGZvbnQtZmFtaWx5OiBtYW5yb3BlLWxpZ2h0O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgZmxvYXQ6bGVmdDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIG1heC13aWR0aDogaW5oZXJpdDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufSIsIioge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5KTtcbn1cblxuaW9uLWhlYWRlciBpb24tdGl0bGUge1xuICBmb250LWZhbWlseTogbWFucm9wZS1ib2xkO1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgcGFkZGluZy10b3A6IDUlO1xufVxuXG5pb24tY2hpcCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1jaGlwKTtcbn1cblxuaW9uLWNoaXAgaW9uLWxhYmVsIHtcbiAgZm9udC1mYW1pbHk6IG1hbnJvcGUtYm9sZDtcbn1cblxuLnRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IG1hbnJvcGUtYm9sZDtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmbG9hdDogbGVmdDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIG1heC13aWR0aDogaW5oZXJpdDtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgd29yZC13cmFwOiBub3JtYWw7XG59XG5cbi52YWx1ZSB7XG4gIGZvbnQtZmFtaWx5OiBtYW5yb3BlLWxpZ2h0O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmbG9hdDogbGVmdDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIG1heC13aWR0aDogaW5oZXJpdDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn0iXX0= */"

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
    function MiniStatusPage(service) {
        this.service = service;
    }
    MiniStatusPage.prototype.ngOnInit = function () { };
    MiniStatusPage.prototype.ionViewWillEnter = function () {
        this.updateStatus();
    };
    MiniStatusPage.prototype.ionViewWillLeave = function () {
        if (this.statusSubscription) {
            this.statusSubscription.unsubscribe(); // unsubs
        }
    };
    MiniStatusPage.prototype.updateStatus = function () {
        var _this = this;
        this.statusSubscription = this.service.updatedStatus
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (responseData) {
            responseData.uptime = responseData.uptime.replace(/0 Years|0 Months|0 Weeks|0 Days|0 Hours|0 Minutes|0 Seconds|0 Milliseconds/gi, " ");
            responseData.uptime = responseData.uptime.replace(/1 Minutes/gi, "1 Minute");
            responseData.uptime = responseData.uptime.replace(/1 Seconds/gi, "1 Second");
            responseData.uptime = responseData.uptime.replace(/1 Years/gi, "1 Year");
            responseData.uptime = responseData.uptime.replace(/1 Milliseconds/gi, "1 Millisecond");
            responseData.uptime = responseData.uptime.replace(/1 Hours/gi, "1 Hour");
            return responseData;
        }))
            .subscribe(function (res) {
            if (_this.lastJSON !== JSON.stringify(res)) {
                _this.status = res;
                _this.lastJSON = JSON.stringify(res);
            }
        });
    };
    MiniStatusPage.ctorParameters = function () { return [
        { type: _service_status_service__WEBPACK_IMPORTED_MODULE_2__["StatusService"] }
    ]; };
    MiniStatusPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-mini-status',
            template: __webpack_require__(/*! raw-loader!./mini-status.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/mini-status/mini-status.page.html"),
            styles: [__webpack_require__(/*! ./mini-status.page.scss */ "./src/app/pages/mini-status/mini-status.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_status_service__WEBPACK_IMPORTED_MODULE_2__["StatusService"]])
    ], MiniStatusPage);
    return MiniStatusPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-mini-status-mini-status-module-es5.js.map