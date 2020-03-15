(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["mini-status-mini-status-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/mini-status/mini-status.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/mini-status/mini-status.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-app>\n<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title color=\"primary\">\n      Status\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n            <ion-refresher-content></ion-refresher-content>\n</ion-refresher>\n\n        <ion-item lines=\"none\">\n          \n          <ion-icon class=\"status-logo\"slot=\"start\" src=\"../../assets/icon/minima.svg\"></ion-icon>\n\n          <h2 class=\"status-logo-title\">\n            MINIMA             \n            <ion-badge class=\"sup\" color=\"primary\">BETA</ion-badge>\n          </h2>\n            \n\n        \n        </ion-item>\n\n      \n\n    \n        <ion-list>\n          <ion-item>\n            <ion-icon name=\"checkmark-circle\" slot=\"start\"></ion-icon>\n            <ion-label>\n            <h2>Status</h2>\n            <p color=\"getColor()\">{{ status }}</p>\n            </ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-icon name=\"checkmark-circle\" slot=\"start\"></ion-icon>\n            <ion-label>\n            <h2>Node uptime</h2>\n            <p>{{ stringUptime }}</p>\n            </ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-icon name=\"checkmark-circle\" slot=\"start\"></ion-icon>\n            <ion-label>\n            <h2>Configuration path</h2>\n            <p>{{ conf }}</p>\n            </ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-icon name=\"checkmark-circle\" slot=\"start\"></ion-icon>\n            <ion-label>\n            <h2>Hosting IP</h2>\n            <p>{{ miniHost }}{{ miniPort}}</p>\n            </ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-icon name=\"checkmark-circle\" slot=\"start\"></ion-icon>\n            <ion-label>\n            <h2>RPC Port</h2>\n            <p>{{ miniRpcport }}</p>\n            </ion-label>\n          </ion-item>\n          <ion-item lines=\"none\">\n            <ion-icon name=\"checkmark-circle\" slot=\"start\"></ion-icon>\n            <ion-label>\n            <h2>Last block number</h2>\n            <p>{{ block }}</p>\n            </ion-label>\n          </ion-item>\n        </ion-list>\n\n</ion-content>\n\n<ion-footer>\n     <ion-list lines=\"none\">\n       <ion-item>\n       <ion-icon slot=\"start\" name=\"notifications\"></ion-icon>\n       <p>Call \"status\" in \n         <a style=\"font-style: normal;\" routerLink=\"/mini-term\">terminal</a> for more details of the node's status.</p> \n      </ion-item>\n     </ion-list>\n</ion-footer>\n</ion-app>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _mini_status_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mini-status.page */ "./src/app/mini-status/mini-status.page.ts");







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

/***/ "./src/app/mini-status/mini-status.page.scss":
/*!***************************************************!*\
  !*** ./src/app/mini-status/mini-status.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#status-content {\n  width: 100%;\n  padding: 5px;\n  border-radius: 20%;\n  font-size: 0.5em;\n}\n\n#status-content ion-icon {\n  padding-left: 1em;\n  color: #FF671D;\n}\n\n#status-content ion-list ion-grid ion-col ion-item {\n  font-size: 1.5em;\n}\n\n.ion-text-wrap {\n  word-wrap: normal;\n}\n\nion-list ion-item h2 {\n  color: #06AAC7;\n}\n\nion-list ion-item p {\n  white-space: normal;\n}\n\nion-list ion-icon {\n  padding-right: 4px;\n}\n\nion-icon {\n  color: #06AAC7;\n}\n\nion-chip {\n  background-color: transparent;\n}\n\nion-footer ion-list ion-item {\n  border-top: 2px solid #ffffcc;\n  border-bottom: 2px solid #ffffcc;\n  border-radius: 5px;\n}\n\n.status-logo {\n  font-size: 30px;\n}\n\n.sup {\n  border-radius: 10px;\n  font-size: 8px;\n  margin-bottom: 10px;\n  background-color: none;\n}\n\nion-note {\n  font-family: \"Aeonik\";\n  font-weight: bolder;\n  font-size: 22px;\n  padding-top: 23px;\n  color: #929396;\n}\n\n.status-logo-title {\n  font-family: \"Ridley-normal\";\n  font-size: 22px;\n}\n\n.status-logo-title {\n  font-family: \"Ridley-normal\";\n  margin-top: 24px;\n  font-size: 20px;\n}\n\n@media only screen and (min-width: 992px) {\n  .status-logo-title {\n    font-family: \"Ridley-normal\";\n    margin-top: 24px;\n    font-size: 20px;\n  }\n\n  ion-note {\n    position: absolute;\n    padding-right: 50px;\n    font-weight: bolder;\n    font-size: 12px;\n    font-family: \"Aeonik\";\n    color: #929396;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGlhcy9Qcm9qZWN0cy9taW5pbWFjb3JlL21vYmlsZS1hcHAtZnJvbnQtZW5kL2FwcC9zcmMvYXBwL21pbmktc3RhdHVzL21pbmktc3RhdHVzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbWluaS1zdGF0dXMvbWluaS1zdGF0dXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDREo7O0FESUE7RUFDSSxpQkFBQTtFQUNBLGNBQUE7QUNESjs7QURJQTtFQUNJLGdCQUFBO0FDREo7O0FESUE7RUFDSSxpQkFBQTtBQ0RKOztBRE1BO0VBQ0ksY0FBQTtBQ0hKOztBRE1BO0VBQ0ksbUJBQUE7QUNISjs7QURNQztFQUNHLGtCQUFBO0FDSEo7O0FET0E7RUFDSSxjQUFBO0FDSko7O0FET0E7RUFDSSw2QkFBQTtBQ0pKOztBRE9BO0VBQ0ksNkJBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0FDSko7O0FET0E7RUFDSSxlQUFBO0FDSko7O0FETUE7RUFDSSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FDSEo7O0FES0E7RUFDSSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ0ZKOztBRElBO0VBQ0ksNEJBQUE7RUFDQSxlQUFBO0FDREo7O0FER0E7RUFDSSw0QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ0FKOztBREdBO0VBQ0k7SUFDSSw0QkFBQTtJQUNBLGdCQUFBO0lBQ0EsZUFBQTtFQ0FOOztFREdFO0lBQ0ksa0JBQUE7SUFDQSxtQkFBQTtJQUNBLG1CQUFBO0lBQ0EsZUFBQTtJQUNBLHFCQUFBO0lBQ0EsY0FBQTtFQ0FOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9taW5pLXN0YXR1cy9taW5pLXN0YXR1cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuI3N0YXR1cy1jb250ZW50IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjAlO1xuICAgIGZvbnQtc2l6ZTogMC41ZW07XG59XG5cbiNzdGF0dXMtY29udGVudCBpb24taWNvbiB7XG4gICAgcGFkZGluZy1sZWZ0OiAxZW07XG4gICAgY29sb3I6ICNGRjY3MUQ7XG59XG5cbiNzdGF0dXMtY29udGVudCBpb24tbGlzdCBpb24tZ3JpZCBpb24tY29sIGlvbi1pdGVtIHtcbiAgICBmb250LXNpemU6IDEuNWVtO1xufVxuXG4uaW9uLXRleHQtd3JhcCB7XG4gICAgd29yZC13cmFwOiBub3JtYWw7XG59XG5cblxuXG5pb24tbGlzdCBpb24taXRlbSBoMiB7XG4gICAgY29sb3I6ICMwNkFBQzc7XG59XG5cbmlvbi1saXN0IGlvbi1pdGVtIHAge1xuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG59XG5cbiBpb24tbGlzdCBpb24taWNvbiB7XG4gICAgcGFkZGluZy1yaWdodDogNHB4O1xufVxuXG5cbmlvbi1pY29uIHtcbiAgICBjb2xvcjogIzA2QUFDNztcbn1cblxuaW9uLWNoaXAge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG5pb24tZm9vdGVyIGlvbi1saXN0IGlvbi1pdGVtIHtcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgI2ZmZmZjYztcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQjZmZmZmNjO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLnN0YXR1cy1sb2dvIHtcbiAgICBmb250LXNpemU6IDMwcHg7XG59XG4uc3VwIHtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogOHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbm9uZTtcbn1cbmlvbi1ub3RlIHtcbiAgICBmb250LWZhbWlseTogJ0Flb25payc7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICBmb250LXNpemU6IDIycHg7XG4gICAgcGFkZGluZy10b3A6IDIzcHg7XG4gICAgY29sb3I6ICM5MjkzOTY7XG59XG4uc3RhdHVzLWxvZ28tdGl0bGUge1xuICAgIGZvbnQtZmFtaWx5OiAnUmlkbGV5LW5vcm1hbCc7XG4gICAgZm9udC1zaXplOiAyMnB4O1xufVxuLnN0YXR1cy1sb2dvLXRpdGxlIHtcbiAgICBmb250LWZhbWlseTogJ1JpZGxleS1ub3JtYWwnO1xuICAgIG1hcmdpbi10b3A6MjRweDtcbiAgICBmb250LXNpemU6IDIwcHg7XG5cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgICAuc3RhdHVzLWxvZ28tdGl0bGUge1xuICAgICAgICBmb250LWZhbWlseTogJ1JpZGxleS1ub3JtYWwnO1xuICAgICAgICBtYXJnaW4tdG9wOjI0cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcblxuICAgIH1cbiAgICBpb24tbm90ZSB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgcGFkZGluZy1yaWdodDogNTBweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBmb250LWZhbWlseTogJ0Flb25payc7XG4gICAgICAgIGNvbG9yOiAjOTI5Mzk2O1xuICAgIH1cbn0iLCIjc3RhdHVzLWNvbnRlbnQge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXItcmFkaXVzOiAyMCU7XG4gIGZvbnQtc2l6ZTogMC41ZW07XG59XG5cbiNzdGF0dXMtY29udGVudCBpb24taWNvbiB7XG4gIHBhZGRpbmctbGVmdDogMWVtO1xuICBjb2xvcjogI0ZGNjcxRDtcbn1cblxuI3N0YXR1cy1jb250ZW50IGlvbi1saXN0IGlvbi1ncmlkIGlvbi1jb2wgaW9uLWl0ZW0ge1xuICBmb250LXNpemU6IDEuNWVtO1xufVxuXG4uaW9uLXRleHQtd3JhcCB7XG4gIHdvcmQtd3JhcDogbm9ybWFsO1xufVxuXG5pb24tbGlzdCBpb24taXRlbSBoMiB7XG4gIGNvbG9yOiAjMDZBQUM3O1xufVxuXG5pb24tbGlzdCBpb24taXRlbSBwIHtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbn1cblxuaW9uLWxpc3QgaW9uLWljb24ge1xuICBwYWRkaW5nLXJpZ2h0OiA0cHg7XG59XG5cbmlvbi1pY29uIHtcbiAgY29sb3I6ICMwNkFBQzc7XG59XG5cbmlvbi1jaGlwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbmlvbi1mb290ZXIgaW9uLWxpc3QgaW9uLWl0ZW0ge1xuICBib3JkZXItdG9wOiAycHggc29saWQgI2ZmZmZjYztcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNmZmZmY2M7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLnN0YXR1cy1sb2dvIHtcbiAgZm9udC1zaXplOiAzMHB4O1xufVxuXG4uc3VwIHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgZm9udC1zaXplOiA4cHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IG5vbmU7XG59XG5cbmlvbi1ub3RlIHtcbiAgZm9udC1mYW1pbHk6IFwiQWVvbmlrXCI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgcGFkZGluZy10b3A6IDIzcHg7XG4gIGNvbG9yOiAjOTI5Mzk2O1xufVxuXG4uc3RhdHVzLWxvZ28tdGl0bGUge1xuICBmb250LWZhbWlseTogXCJSaWRsZXktbm9ybWFsXCI7XG4gIGZvbnQtc2l6ZTogMjJweDtcbn1cblxuLnN0YXR1cy1sb2dvLXRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IFwiUmlkbGV5LW5vcm1hbFwiO1xuICBtYXJnaW4tdG9wOiAyNHB4O1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgLnN0YXR1cy1sb2dvLXRpdGxlIHtcbiAgICBmb250LWZhbWlseTogXCJSaWRsZXktbm9ybWFsXCI7XG4gICAgbWFyZ2luLXRvcDogMjRweDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gIH1cblxuICBpb24tbm90ZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHBhZGRpbmctcmlnaHQ6IDUwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZm9udC1mYW1pbHk6IFwiQWVvbmlrXCI7XG4gICAgY29sb3I6ICM5MjkzOTY7XG4gIH1cbn0iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_minima_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/minima-api.service */ "./src/app/service/minima-api.service.ts");



var MiniStatusPage = /** @class */ (function () {
    function MiniStatusPage(api) {
        this.api = api;
        this.host = '';
        this.loader = null;
    }
    MiniStatusPage.prototype.ngOnInit = function () { };
    MiniStatusPage.prototype.ionViewWillEnter = function () {
        this.updateStatus();
    };
    MiniStatusPage.prototype.ionViewDidEnter = function () {
        // this.plotSimpleBarChart();
    };
    MiniStatusPage.prototype.doRefresh = function (event) {
        var _this = this;
        console.log('Refreshing page..');
        this.api.getStatus().then(function (res) {
            console.log(res);
            _this.updateStatus();
        });
        setTimeout(function () {
            console.log('Async operation has ended');
            event.target.complete();
        }, 200);
    };
    MiniStatusPage.prototype.updateStatus = function () {
        var _this = this;
        this.api.getStatus().then(function (res) {
            console.log(res.response.tip.Block);
            // Check node's status..
            if (res.status === true) {
                _this.status = "Online";
            }
            else {
                _this.status = "Offline";
            }
            // fetch json vars..
            _this.versionNumber = res.response.version;
            _this.blocksGenerated = res.response.tip.Block;
            _this.upTime = res.response.milliuptime;
            _this.stringUptime = res.response.stringuptime;
            _this.conf = res.response.conf;
            _this.miniHost = res.response.host + ":";
            _this.miniPort = res.response.port;
            _this.miniRpcport = res.response.rpcport;
            _this.pulse = res.response.pulse;
            _this.block = res.response.tip.block;
        });
    };
    MiniStatusPage.prototype.getColor = function () {
        if (this.status == "Online") {
            return 'green';
        }
        else {
            return 'red';
        }
    };
    MiniStatusPage.ctorParameters = function () { return [
        { type: _service_minima_api_service__WEBPACK_IMPORTED_MODULE_2__["MinimaApiService"] }
    ]; };
    MiniStatusPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mini-status',
            template: __webpack_require__(/*! raw-loader!./mini-status.page.html */ "./node_modules/raw-loader/index.js!./src/app/mini-status/mini-status.page.html"),
            styles: [__webpack_require__(/*! ./mini-status.page.scss */ "./src/app/mini-status/mini-status.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_minima_api_service__WEBPACK_IMPORTED_MODULE_2__["MinimaApiService"]])
    ], MiniStatusPage);
    return MiniStatusPage;
}());



/***/ })

}]);
//# sourceMappingURL=mini-status-mini-status-module-es5.js.map