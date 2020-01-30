(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["mini-status-mini-status-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/mini-status/mini-status.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/mini-status/mini-status.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Status\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n\n<ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n</ion-refresher>\n\n\n  <ion-card class=\"welcome-card\" style=\"background-color:transparent\">\n    <ion-card-header id=\"status-header\">\n      <ion-card-title>\n        <ion-item>\n          <ion-chip>\n          <ion-icon align-self-start src=\"../../assets/icon/minima.svg\" size=\"2\"></ion-icon>\n          <b>Minima  v{{ versionNumber }} </b>\n          </ion-chip>\n        </ion-item>\n      </ion-card-title>\n    </ion-card-header>\n\n    <ion-card-content id=\"status-content\">\n      <ion-list lines=\"none\">\n        <ion-grid no-padding>\n          <ion-row>\n            <ion-col size=\"2\">\n              <ion-item>\n                <ion-icon name=\"checkmark\" size=\"2\"></ion-icon>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-item>\n                <ion-chip>\n                  <ion-text>\n                    Your node's status\n                  </ion-text>\n                </ion-chip>\n              </ion-item>\n\n            </ion-col>\n            <ion-col size=\"4\">\n              <ion-chip>\n              <ion-item \n              [ngStyle] = \" {'color': getColor()}\"\n               #statusColor>\n                {{status}}\n              </ion-item>\n            </ion-chip>\n            </ion-col>\n          </ion-row>\n          <!-- New Row -->\n          <ion-row>\n            <ion-col size=\"2\">\n              <ion-item>\n                <ion-icon name=\"checkmark\" size=\"2\"></ion-icon>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-item>\n                Node uptime\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"4\">\n              <ion-item>\n                {{stringUptime}}\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <!-- New Row -->\n          <ion-row>\n            <ion-col size=\"2\">\n              <ion-item>\n                <ion-icon name=\"checkmark\" size=\"2\"></ion-icon>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-item>\n                Configured at\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"4\">\n              <ion-item>\n                {{ conf }}\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <!-- New Row -->\n          <ion-row>\n            <ion-col size=\"2\">\n              <ion-item>\n                <ion-icon name=\"checkmark\" size=\"2\"></ion-icon>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-item>\n                Hosting at\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"4\">\n              <ion-item>\n                {{ miniHost}}{{miniPort}}\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <!-- New Row -->\n          <ion-row>\n            <ion-col size=\"2\">\n              <ion-item>\n                <ion-icon name=\"checkmark\" size=\"2\"></ion-icon>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-item>\n                RpcPort\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"4\">\n              <ion-item>\n                {{ miniRpcport }}\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <!-- New Row -->\n          <ion-row>\n            <ion-col size=\"2\">\n              <ion-item>\n                <ion-icon name=\"checkmark\" size=\"2\"></ion-icon>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-item>\n                Pulse\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"4\">\n              <ion-item>\n                {{ pulse }}\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <!-- New Row -->\n          <ion-row>\n            <ion-col size=\"2\">\n              <ion-item>\n                <ion-icon name=\"checkmark\" size=\"2\"></ion-icon>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-item>\n                Current block number\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"4\">\n              <ion-item>\n                {{ block }}\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-list>\n      \n      <!-- <div id=\"highcharts\" style=\"width:100%; height:250px;\"></div> -->\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header align-items-center> \n      <ion-card-title>\n        <ion-item>\n          <ion-icon name=\"notifications\"></ion-icon> \n          <b>\n            Please note.\n          </b>\n        </ion-item>\n      </ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      \n        If you would like a more detailed status of the node (block details, chainspeed..)\n          call \"<b>status</b>\" in terminal!\n     \n    </ion-card-content>\n  </ion-card>\n\n\n</ion-content>\n"

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

module.exports = "#status-content {\n  width: 100%;\n  padding: 5px;\n  border-radius: 20%;\n  font-size: 0.5em;\n}\n\n#status-content ion-icon {\n  padding-left: 1em;\n  color: #FF671D;\n}\n\n#status-content ion-list ion-grid ion-col ion-item {\n  font-size: 1.5em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGlhcy9Qcm9qZWN0cy9taW5pbWFjb3JlL21vYmlsZS1hcHAtZnJvbnQtZW5kL2FwcC9zcmMvYXBwL21pbmktc3RhdHVzL21pbmktc3RhdHVzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbWluaS1zdGF0dXMvbWluaS1zdGF0dXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDREo7O0FESUE7RUFDSSxpQkFBQTtFQUNBLGNBQUE7QUNESjs7QURJQTtFQUNJLGdCQUFBO0FDREoiLCJmaWxlIjoic3JjL2FwcC9taW5pLXN0YXR1cy9taW5pLXN0YXR1cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuI3N0YXR1cy1jb250ZW50IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjAlO1xuICAgIGZvbnQtc2l6ZTogMC41ZW07XG59XG5cbiNzdGF0dXMtY29udGVudCBpb24taWNvbiB7XG4gICAgcGFkZGluZy1sZWZ0OiAxZW07XG4gICAgY29sb3I6ICNGRjY3MUQ7XG59XG5cbiNzdGF0dXMtY29udGVudCBpb24tbGlzdCBpb24tZ3JpZCBpb24tY29sIGlvbi1pdGVtIHtcbiAgICBmb250LXNpemU6IDEuNWVtO1xufVxuXG4iLCIjc3RhdHVzLWNvbnRlbnQge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXItcmFkaXVzOiAyMCU7XG4gIGZvbnQtc2l6ZTogMC41ZW07XG59XG5cbiNzdGF0dXMtY29udGVudCBpb24taWNvbiB7XG4gIHBhZGRpbmctbGVmdDogMWVtO1xuICBjb2xvcjogI0ZGNjcxRDtcbn1cblxuI3N0YXR1cy1jb250ZW50IGlvbi1saXN0IGlvbi1ncmlkIGlvbi1jb2wgaW9uLWl0ZW0ge1xuICBmb250LXNpemU6IDEuNWVtO1xufSJdfQ== */"

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
        }, 1500);
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