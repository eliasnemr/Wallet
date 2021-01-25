(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-mini-status-mini-status-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/mini-status/mini-status.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/mini-status/mini-status.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-app>\r\n<ion-header class=\"ion-no-border\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button class=\"menu-icon\"></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"large-text\">\r\n      Status\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-grid *ngIf=\"!status?.version\">\r\n    <ion-row>\r\n      \r\n      <ion-col style=\"display: flex; align-items:center; justify-content:center\" size=\"12\">\r\n        <ion-chip>\r\n          <ion-label>Status</ion-label>\r\n          <ion-icon name=\"close\" color=\"danger\"></ion-icon>\r\n        </ion-chip>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <ion-grid *ngIf=\"status?.version\">\r\n    <ion-row>\r\n      <ion-col size=\"12\">\r\n        <ion-chip>\r\n          <ion-label>Status</ion-label>\r\n          <ion-icon *ngIf=\"status?.version\" name=\"checkmark\" color=\"success\"></ion-icon>\r\n          <ion-icon *ngIf=\"!status?.version\" name=\"close\" color=\"danger\"></ion-icon>\r\n        </ion-chip>\r\n        <ion-chip>\r\n          <ion-label><span style=\"color:var(--ion-color-secondary)\">v</span>{{ status?.version}} </ion-label>\r\n        </ion-chip>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-card class=\"borders\">\r\n          <ion-card-header>\r\n            Current Status\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n            <ion-list lines=\"none\">\r\n              <ion-item>\r\n                <ion-col size-md=\"3\" size-sm=\"6\" class=\"title\">\r\n                  Uptime\r\n                </ion-col>\r\n                <ion-col style=\"white-space: normal!important;\" class=\"value\">\r\n                  {{ status?.uptime }}\r\n                </ion-col>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-col size-md=\"3\" size-sm=\"6\" class=\"title\">\r\n                  Last Block No.\r\n                </ion-col>\r\n                <ion-col class=\"value\">\r\n                  {{ status?.lastblock }}\r\n                </ion-col>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-col size-md=\"3\" size-sm=\"6\" class=\"title\">\r\n                  Configuration Path\r\n                </ion-col>\r\n                <ion-col style=\"white-space: normal!important;\" class=\"value\">\r\n                  {{ status?.conf }}\r\n                </ion-col>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-col size-md=\"3\" size-sm=\"6\" class=\"title\">\r\n                  Host IP\r\n                </ion-col>\r\n                <ion-col style=\"white-space: normal!important;\" class=\"value\">\r\n                  {{ status?.host +':' }}{{ status?.minimaport }}\r\n                </ion-col>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-col size-md=\"3\" size-sm=\"6\" class=\"title\">\r\n                  RPC Port\r\n                </ion-col>\r\n                <ion-col style=\"white-space: normal!important;\" class=\"value\">\r\n                  {{ status?.rpcport }}\r\n                </ion-col>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-col size-md=\"3\" size-sm=\"6\" class=\"title\">\r\n                  MiniDAPP Server Port\r\n                </ion-col>\r\n                <ion-col style=\"white-space: normal!important;\" class=\"value\">\r\n                  {{ status?.minidappserver }}\r\n                </ion-col>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-col size-md=\"3\" size-sm=\"6\" class=\"title\">\r\n                  Chainweight\r\n                </ion-col>\r\n                <ion-col style=\"white-space: normal!important;\" class=\"value\">\r\n                  {{ status?.chainweight }}\r\n                </ion-col>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-col size-md=\"3\" size-sm=\"6\" class=\"title\">\r\n                  Chainlength\r\n                </ion-col>\r\n                <ion-col style=\"white-space: normal!important;\" class=\"value\">\r\n                  {{ status?.chainlength }}\r\n                </ion-col>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-col size-md=\"3\" size-sm=\"6\" class=\"title\">\r\n                  Chainspeed\r\n                </ion-col>\r\n                <ion-col style=\"white-space: normal!important;\" class=\"value\">\r\n                  {{ status?.chainspeed }}\r\n                </ion-col>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-col size-md=\"3\" size-sm=\"6\" class=\"title\">\r\n                  RAM Used\r\n                </ion-col>\r\n                <ion-col style=\"white-space: normal!important;\" class=\"value\">\r\n                  {{ status?.ram }}\r\n                </ion-col>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-col size-md=\"3\" size-sm=\"6\" class=\"title\">\r\n                  IBD\r\n                </ion-col>\r\n                <ion-col style=\"white-space: normal!important;\" class=\"value\">\r\n                  {{ status?.IBD }}\r\n                </ion-col>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-col size-md=\"3\" size-sm=\"6\" class=\"title\">\r\n                  TxPoW Database Length\r\n                </ion-col>\r\n                <ion-col style=\"white-space: normal!important;\" class=\"value\">\r\n                  {{ status?.txpowdb }}\r\n                </ion-col>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-col size-md=\"3\" size-sm=\"6\" class=\"title\">\r\n                  Number of Connections\r\n                </ion-col>\r\n                <ion-col style=\"white-space: normal!important;\" class=\"value\">\r\n                  {{ status?.connections }}\r\n                </ion-col>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-col size-md=\"3\" size-sm=\"6\" class=\"title\">\r\n                  Tip\r\n                </ion-col>\r\n                <ion-col class=\"value\">\r\n                  {{ status?.tip }}\r\n                </ion-col>\r\n              </ion-item>\r\n            </ion-list>\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n</ion-content>\r\n</ion-app>"

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
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
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

module.exports = "* {\n  color: var(--ion-color-tertiary);\n}\n\nion-header ion-title {\n  font-family: manrope-bold;\n  font-size: 1.2rem;\n  padding-top: 5%;\n}\n\nion-chip {\n  background-color: var(--ion-color-chip);\n}\n\nion-chip ion-label {\n  font-family: manrope-bold;\n}\n\n.title {\n  font-family: manrope-bold;\n  font-size: 1rem;\n  float: left;\n  text-overflow: ellipsis;\n  max-width: inherit;\n  white-space: normal;\n  word-wrap: normal;\n}\n\n.value {\n  font-family: manrope-light;\n  text-align: left;\n  float: left;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  max-width: inherit;\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGlhc25lbXIvcHJvamVjdHMvV0FMTEVUL21vYmlsZS1hcHAtZnJvbnQtZW5kL2FwcC9zcmMvYXBwL3BhZ2VzL21pbmktc3RhdHVzL21pbmktc3RhdHVzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvbWluaS1zdGF0dXMvbWluaS1zdGF0dXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksZ0NBQUE7QUNBSjs7QURFQTtFQUNJLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDQ0o7O0FEQ0E7RUFDSSx1Q0FBQTtBQ0VKOztBREFBO0VBQ0kseUJBQUE7QUNHSjs7QUREQTtFQUNJLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQ0lKOztBREZBO0VBQ0ksMEJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0tKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbWluaS1zdGF0dXMvbWluaS1zdGF0dXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbioge1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeSk7XHJcbn1cclxuaW9uLWhlYWRlciBpb24tdGl0bGUge1xyXG4gICAgZm9udC1mYW1pbHk6IG1hbnJvcGUtYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgcGFkZGluZy10b3A6IDUlO1xyXG59XHJcbmlvbi1jaGlwIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1jaGlwKTtcclxufVxyXG5pb24tY2hpcCBpb24tbGFiZWwge1xyXG4gICAgZm9udC1mYW1pbHk6IG1hbnJvcGUtYm9sZDtcclxufVxyXG4udGl0bGUge1xyXG4gICAgZm9udC1mYW1pbHk6IG1hbnJvcGUtYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMS4wcmVtO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIG1heC13aWR0aDogaW5oZXJpdDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbiAgICB3b3JkLXdyYXA6IG5vcm1hbDtcclxufVxyXG4udmFsdWUge1xyXG4gICAgZm9udC1mYW1pbHk6IG1hbnJvcGUtbGlnaHQ7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgZmxvYXQ6bGVmdDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIG1heC13aWR0aDogaW5oZXJpdDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn0iLCIqIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeSk7XG59XG5cbmlvbi1oZWFkZXIgaW9uLXRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IG1hbnJvcGUtYm9sZDtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIHBhZGRpbmctdG9wOiA1JTtcbn1cblxuaW9uLWNoaXAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItY2hpcCk7XG59XG5cbmlvbi1jaGlwIGlvbi1sYWJlbCB7XG4gIGZvbnQtZmFtaWx5OiBtYW5yb3BlLWJvbGQ7XG59XG5cbi50aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBtYW5yb3BlLWJvbGQ7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBtYXgtd2lkdGg6IGluaGVyaXQ7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gIHdvcmQtd3JhcDogbm9ybWFsO1xufVxuXG4udmFsdWUge1xuICBmb250LWZhbWlseTogbWFucm9wZS1saWdodDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBtYXgtd2lkdGg6IGluaGVyaXQ7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59Il19 */"

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
    constructor(service) {
        this.service = service;
    }
    ngOnInit() { }
    ionViewWillEnter() {
        this.updateStatus();
    }
    ionViewWillLeave() {
        if (this.statusSubscription) {
            this.statusSubscription.unsubscribe(); // unsubs
        }
    }
    updateStatus() {
        this.statusSubscription = this.service.updatedStatus
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((responseData) => {
            responseData.uptime = responseData.uptime.replace(/0 Years|0 Months|0 Weeks|0 Days|0 Hours|0 Minutes|0 Seconds|0 Milliseconds/gi, " ");
            responseData.uptime = responseData.uptime.replace(/1 Minutes/gi, "1 Minute");
            responseData.uptime = responseData.uptime.replace(/1 Seconds/gi, "1 Second");
            responseData.uptime = responseData.uptime.replace(/1 Years/gi, "1 Year");
            responseData.uptime = responseData.uptime.replace(/1 Milliseconds/gi, "1 Millisecond");
            responseData.uptime = responseData.uptime.replace(/1 Hours/gi, "1 Hour");
            return responseData;
        }))
            .subscribe((res) => {
            if (this.lastJSON !== JSON.stringify(res)) {
                this.status = res;
                this.lastJSON = JSON.stringify(res);
            }
        });
    }
};
MiniStatusPage.ctorParameters = () => [
    { type: _service_status_service__WEBPACK_IMPORTED_MODULE_2__["StatusService"] }
];
MiniStatusPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-mini-status',
        template: __webpack_require__(/*! raw-loader!./mini-status.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/mini-status/mini-status.page.html"),
        styles: [__webpack_require__(/*! ./mini-status.page.scss */ "./src/app/pages/mini-status/mini-status.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_status_service__WEBPACK_IMPORTED_MODULE_2__["StatusService"]])
], MiniStatusPage);



/***/ })

}]);
//# sourceMappingURL=pages-mini-status-mini-status-module-es2015.js.map