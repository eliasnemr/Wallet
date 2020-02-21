(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["mini-status-mini-status-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/mini-status/mini-status.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/mini-status/mini-status.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-app>\n<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title color=\"primary\">\n      Status\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n            <ion-refresher-content></ion-refresher-content>\n</ion-refresher>\n\n\n    <ion-toolbar>\n        <ion-item lines=\"none\">\n          <ion-icon class=\"status-logo\"slot=\"start\" src=\"../../assets/icon/minima.svg\"></ion-icon>\n          <ion-note class=\"status-logo-title\">\n            MINIMA\n            <ion-badge class=\"sup\" color=\"secondary\">BETA</ion-badge>\n          </ion-note>\n        </ion-item>\n\n    </ion-toolbar>\n      \n\n    \n        <ion-list>\n          <ion-item>\n            <ion-icon name=\"checkmark-circle\" slot=\"start\"></ion-icon>\n            <ion-label>\n            <h2>Status</h2>\n            <p color=\"getColor()\">{{ status }}</p>\n            </ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-icon name=\"checkmark-circle\" slot=\"start\"></ion-icon>\n            <ion-label>\n            <h2>Node uptime</h2>\n            <p>{{ stringUptime }}</p>\n            </ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-icon name=\"checkmark-circle\" slot=\"start\"></ion-icon>\n            <ion-label>\n            <h2>Configuration path</h2>\n            <p>{{ conf }}</p>\n            </ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-icon name=\"checkmark-circle\" slot=\"start\"></ion-icon>\n            <ion-label>\n            <h2>Hosting IP</h2>\n            <p>{{ miniHost }}{{ miniPort}}</p>\n            </ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-icon name=\"checkmark-circle\" slot=\"start\"></ion-icon>\n            <ion-label>\n            <h2>RPC Port</h2>\n            <p>{{ miniRpcport }}</p>\n            </ion-label>\n          </ion-item>\n          <ion-item lines=\"none\">\n            <ion-icon name=\"checkmark-circle\" slot=\"start\"></ion-icon>\n            <ion-label>\n            <h2>Last block number</h2>\n            <p>{{ block }}</p>\n            </ion-label>\n          </ion-item>\n        </ion-list>\n\n</ion-content>\n\n<ion-footer>\n     <ion-list lines=\"none\">\n       <ion-item>\n       <ion-icon slot=\"start\" name=\"notifications\"></ion-icon>\n       <p>Call \"status\" in \n         <a style=\"font-style: normal;\" routerLink=\"/mini-term\">terminal</a> for more details of the node's status.</p> \n      </ion-item>\n     </ion-list>\n</ion-footer>\n</ion-app>"

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

module.exports = "#status-content {\n  width: 100%;\n  padding: 5px;\n  border-radius: 20%;\n  font-size: 0.5em;\n}\n\n#status-content ion-icon {\n  padding-left: 1em;\n  color: #FF671D;\n}\n\n#status-content ion-list ion-grid ion-col ion-item {\n  font-size: 1.5em;\n}\n\n.ion-text-wrap {\n  word-wrap: normal;\n}\n\nion-list ion-item h2 {\n  color: #06AAC7;\n}\n\nion-list ion-item p {\n  white-space: normal;\n}\n\nion-list ion-icon {\n  padding-right: 4px;\n}\n\nion-icon {\n  color: #06AAC7;\n}\n\nion-chip {\n  background-color: transparent;\n}\n\nion-footer ion-list ion-item {\n  border-top: 2px solid #ffffcc;\n  border-bottom: 2px solid #ffffcc;\n  border-radius: 5px;\n}\n\n.status-logo {\n  font-size: 30px;\n}\n\nion-note ion-badge {\n  border-radius: 10px;\n  font-size: 10px;\n  margin-bottom: 10px;\n  background-color: none;\n}\n\nion-note {\n  font-family: \"Aeonik\";\n  font-weight: bolder;\n  font-size: 22px;\n  padding-top: 23px;\n  color: #929396;\n}\n\n.status-logo-title {\n  font-family: \"Ridley-normal\";\n  font-weight: lighter;\n  font-size: 22px;\n  padding-top: 12px;\n  position: absolute;\n}\n\n@media only screen and (min-width: 992px) {\n  .status-logo-title {\n    font-family: \"Ridley-normal\";\n    font-weight: lighter;\n    font-size: 22px;\n    padding-top: 12px;\n    position: absolute;\n  }\n\n  ion-note {\n    position: absolute;\n    padding-right: 50px;\n    font-weight: bolder;\n    font-size: 12px;\n    font-family: \"Aeonik\";\n    color: #929396;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGlhcy9Qcm9qZWN0cy9taW5pbWFjb3JlL21vYmlsZS1hcHAtZnJvbnQtZW5kL2FwcC9zcmMvYXBwL21pbmktc3RhdHVzL21pbmktc3RhdHVzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbWluaS1zdGF0dXMvbWluaS1zdGF0dXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDREo7O0FESUE7RUFDSSxpQkFBQTtFQUNBLGNBQUE7QUNESjs7QURJQTtFQUNJLGdCQUFBO0FDREo7O0FESUE7RUFDSSxpQkFBQTtBQ0RKOztBRE1BO0VBQ0ksY0FBQTtBQ0hKOztBRE1BO0VBQ0ksbUJBQUE7QUNISjs7QURNQztFQUNHLGtCQUFBO0FDSEo7O0FET0E7RUFDSSxjQUFBO0FDSko7O0FET0E7RUFDSSw2QkFBQTtBQ0pKOztBRE9BO0VBQ0ksNkJBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0FDSko7O0FET0E7RUFDSSxlQUFBO0FDSko7O0FETUE7RUFDSSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FDSEo7O0FES0E7RUFDSSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ0ZKOztBRElBO0VBQ0ksNEJBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDREo7O0FESUE7RUFDSTtJQUNJLDRCQUFBO0lBQ0Esb0JBQUE7SUFDQSxlQUFBO0lBQ0EsaUJBQUE7SUFDQSxrQkFBQTtFQ0ROOztFRElFO0lBQ0ksa0JBQUE7SUFDQSxtQkFBQTtJQUNBLG1CQUFBO0lBQ0EsZUFBQTtJQUNBLHFCQUFBO0lBQ0EsY0FBQTtFQ0ROO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9taW5pLXN0YXR1cy9taW5pLXN0YXR1cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuI3N0YXR1cy1jb250ZW50IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjAlO1xuICAgIGZvbnQtc2l6ZTogMC41ZW07XG59XG5cbiNzdGF0dXMtY29udGVudCBpb24taWNvbiB7XG4gICAgcGFkZGluZy1sZWZ0OiAxZW07XG4gICAgY29sb3I6ICNGRjY3MUQ7XG59XG5cbiNzdGF0dXMtY29udGVudCBpb24tbGlzdCBpb24tZ3JpZCBpb24tY29sIGlvbi1pdGVtIHtcbiAgICBmb250LXNpemU6IDEuNWVtO1xufVxuXG4uaW9uLXRleHQtd3JhcCB7XG4gICAgd29yZC13cmFwOiBub3JtYWw7XG59XG5cblxuXG5pb24tbGlzdCBpb24taXRlbSBoMiB7XG4gICAgY29sb3I6ICMwNkFBQzc7XG59XG5cbmlvbi1saXN0IGlvbi1pdGVtIHAge1xuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG59XG5cbiBpb24tbGlzdCBpb24taWNvbiB7XG4gICAgcGFkZGluZy1yaWdodDogNHB4O1xufVxuXG5cbmlvbi1pY29uIHtcbiAgICBjb2xvcjogIzA2QUFDNztcbn1cblxuaW9uLWNoaXAge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG5pb24tZm9vdGVyIGlvbi1saXN0IGlvbi1pdGVtIHtcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgI2ZmZmZjYztcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQjZmZmZmNjO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLnN0YXR1cy1sb2dvIHtcbiAgICBmb250LXNpemU6IDMwcHg7XG59XG5pb24tbm90ZSBpb24tYmFkZ2Uge1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbm9uZTtcbn1cbmlvbi1ub3RlIHtcbiAgICBmb250LWZhbWlseTogJ0Flb25payc7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICBmb250LXNpemU6IDIycHg7XG4gICAgcGFkZGluZy10b3A6IDIzcHg7XG4gICAgY29sb3I6ICM5MjkzOTY7XG59XG4uc3RhdHVzLWxvZ28tdGl0bGUge1xuICAgIGZvbnQtZmFtaWx5OiAnUmlkbGV5LW5vcm1hbCc7XG4gICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICAgIHBhZGRpbmctdG9wOiAxMnB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkge1xuICAgIC5zdGF0dXMtbG9nby10aXRsZSB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUmlkbGV5LW5vcm1hbCc7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICAgIHBhZGRpbmctdG9wOiAxMnB4O1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgfVxuICAgIFxuICAgIGlvbi1ub3RlIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnQWVvbmlrJztcbiAgICAgICAgY29sb3I6ICM5MjkzOTY7XG4gICAgfVxufSIsIiNzdGF0dXMtY29udGVudCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwJTtcbiAgZm9udC1zaXplOiAwLjVlbTtcbn1cblxuI3N0YXR1cy1jb250ZW50IGlvbi1pY29uIHtcbiAgcGFkZGluZy1sZWZ0OiAxZW07XG4gIGNvbG9yOiAjRkY2NzFEO1xufVxuXG4jc3RhdHVzLWNvbnRlbnQgaW9uLWxpc3QgaW9uLWdyaWQgaW9uLWNvbCBpb24taXRlbSB7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG59XG5cbi5pb24tdGV4dC13cmFwIHtcbiAgd29yZC13cmFwOiBub3JtYWw7XG59XG5cbmlvbi1saXN0IGlvbi1pdGVtIGgyIHtcbiAgY29sb3I6ICMwNkFBQzc7XG59XG5cbmlvbi1saXN0IGlvbi1pdGVtIHAge1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xufVxuXG5pb24tbGlzdCBpb24taWNvbiB7XG4gIHBhZGRpbmctcmlnaHQ6IDRweDtcbn1cblxuaW9uLWljb24ge1xuICBjb2xvcjogIzA2QUFDNztcbn1cblxuaW9uLWNoaXAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuaW9uLWZvb3RlciBpb24tbGlzdCBpb24taXRlbSB7XG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCAjZmZmZmNjO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2ZmZmZjYztcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uc3RhdHVzLWxvZ28ge1xuICBmb250LXNpemU6IDMwcHg7XG59XG5cbmlvbi1ub3RlIGlvbi1iYWRnZSB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogbm9uZTtcbn1cblxuaW9uLW5vdGUge1xuICBmb250LWZhbWlseTogXCJBZW9uaWtcIjtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBwYWRkaW5nLXRvcDogMjNweDtcbiAgY29sb3I6ICM5MjkzOTY7XG59XG5cbi5zdGF0dXMtbG9nby10aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlJpZGxleS1ub3JtYWxcIjtcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgcGFkZGluZy10b3A6IDEycHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkge1xuICAuc3RhdHVzLWxvZ28tdGl0bGUge1xuICAgIGZvbnQtZmFtaWx5OiBcIlJpZGxleS1ub3JtYWxcIjtcbiAgICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgICBmb250LXNpemU6IDIycHg7XG4gICAgcGFkZGluZy10b3A6IDEycHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICB9XG5cbiAgaW9uLW5vdGUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtZmFtaWx5OiBcIkFlb25pa1wiO1xuICAgIGNvbG9yOiAjOTI5Mzk2O1xuICB9XG59Il19 */"

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
    doRefresh(event) {
        console.log('Refreshing page..');
        this.api.getStatus().then((res) => {
            console.log(res);
            this.updateStatus();
        });
        setTimeout(() => {
            console.log('Async operation has ended');
            event.target.complete();
        }, 200);
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
            this.miniHost = res.response.host + ":";
            this.miniPort = res.response.port;
            this.miniRpcport = res.response.rpcport;
            this.pulse = res.response.pulse;
            this.block = res.response.tip.block;
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