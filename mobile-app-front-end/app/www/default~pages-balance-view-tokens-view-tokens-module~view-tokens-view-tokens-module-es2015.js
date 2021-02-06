(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-balance-view-tokens-view-tokens-module~view-tokens-view-tokens-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/balance/view-tokens/view-tokens.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/balance/view-tokens/view-tokens.page.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-title>\n      <ion-item id=\"title\" class=\"no-ripple ion-no-padding\" lines=\"none\">\n      <ion-icon routerLink=\"/balance\" class=\"back-btn\" name=\"arrow-back\"></ion-icon>\n      Balance\n      </ion-item>\n      <ion-item id=\"subtitle\" class=\"breadcrumb ion-no-padding\" lines=\"none\" *ngIf=\"tokenArr.length > 0\">\n        Token details\n      </ion-item>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"body\">\n  <ion-list lines=\"none\">\n    <ion-item color=\"none\">\n      <ion-avatar slot=\"start\">\n        <img class=\"custom-icon\" *ngIf=\"token.tokenid !== '0x00' && token.icon.length == 0\" [src]=\"createIcon( token.tokenid )\"/>\n        <img class=\"custom-icon\" *ngIf=\"token.tokenid !== '0x00' && token.icon.length > 0\" [src]=\"token.icon\"/>\n        <img *ngIf=\"token.tokenid === '0x00'\" class=\"custom-icon\" alt=\"minima\" src=\"assets/minimaIcon.svg\"> \n      </ion-avatar>\n      <ion-label id=\"name\">\n        <h3>{{token.token}}</h3> \n      </ion-label>\n    </ion-item>\n    <ion-item *ngIf=\"token.description && token.description.length > 0\" color=\"none\">\n      <ion-label position=\"stacked\" style=\"font-size: 1.3rem; font-family: manrope-medium; opacity: 1\">Token Description</ion-label>\n      <ion-input style=\"font-family: manrope-regular;\" disabled>\n        {{ token.description }}\n      </ion-input>\n    </ion-item>\n    <ion-item color=\"none\" class=\"ion-no-padding\">\n      <ion-col class=\"title\">\n        Name\n      </ion-col>\n      <ion-col class=\"value\">\n        {{token.token}}\n      </ion-col>\n    </ion-item>\n    <ion-item color=\"none\" class=\"ion-no-padding\">\n      <ion-col class=\"title\">\n        Token ID\n      <a class=\"copy\" (click)=\"copyToClipPWA(token.tokenid)\">\n        Copy \n      </a>\n      </ion-col>\n      <ion-col class=\"value\">\n        {{token.tokenid}}\n      </ion-col>\n    </ion-item>\n    <ion-item  color=\"none\" class=\"ion-no-padding\" [hidden]=\"token.tokenid == '0x00'\">\n      <ion-col class=\"title\">\n        Coin ID\n      <a class=\"copy\" (click)=\"copyToClipPWA(token.coinid)\">\n        Copy \n      </a>\n      </ion-col>\n      <ion-col class=\"minima-numeric value\">\n        {{token.coinid}}\n      </ion-col>\n    </ion-item>\n    <ion-item color=\"none\" class=\"ion-no-padding\">\n      <ion-col class=\"title\">\n        Total Supply\n      </ion-col>\n      <ion-col class=\"minima-numeric value\">\n        {{token.total}}\n      </ion-col>\n    </ion-item>\n    <ion-item color=\"none\" class=\"ion-no-padding\">\n      <ion-col class=\"title\">\n        Confirmed Amount\n      </ion-col>\n      <ion-col class=\"minima-numeric value\">\n        {{token.confirmed}}\n      </ion-col>\n    </ion-item>\n    <ion-item color=\"none\" class=\"ion-no-padding\">\n      <ion-col class=\"title\">\n        Unconfirmed Amount\n      </ion-col>\n      <ion-col class=\"minima-numeric value\">\n        {{token.unconfirmed}}\n      </ion-col>\n    </ion-item>\n    <ion-item color=\"none\" class=\"ion-no-padding\">\n      <ion-col class=\"title\">\n        Sendable Amount\n      </ion-col>\n      <ion-col class=\"value minima-numeric\">\n        {{token.sendable}}\n      </ion-col>\n    </ion-item>\n    <ion-item color=\"none\" class=\"ion-no-padding\">\n      <ion-col class=\"title\">\n        Mempool Amount\n      </ion-col>\n      <ion-col class=\"minima-numeric value\">\n        {{token.mempool}}\n      </ion-col>\n    </ion-item>\n    <ion-item color=\"none\" class=\"ion-no-padding\" [hidden]=\"token.tokenid == '0x00'\">\n      <ion-col class=\"title\">\n        Token Type\n      </ion-col>\n      <ion-col class=\"value\">\n        {{type}}\n      </ion-col>\n    </ion-item>\n    <ion-item color=\"none\" class=\"ion-no-padding\"  [hidden]=\"token.tokenid == '0x00' || !token.proof\">\n      <ion-col class=\"title\">\n        Proof\n      </ion-col>\n      <ion-col class=\"value\">\n        {{token.proof}}\n      </ion-col>\n    </ion-item>\n    <ion-item color=\"none\" class=\"ion-no-padding\" [hidden]=\"token.tokenid == '0x00' || !token.proof \">\n      <ion-col class=\"title\">\n        Validate Proof\n      </ion-col>\n      <ion-col class=\"value\">\n        <ion-button *ngIf=\"token.proof\" class=\"small-text\" size=\"small\" (click)=\"validateProof(token.tokenid)\">\n          Validate\n        </ion-button> \n      </ion-col>\n    </ion-item>   \n  </ion-list>\n  </div>\n</ion-content>\n\n<ion-footer class=\"border-t\">\n  <ion-button (click)=\"giveMe50()\" class=\"gimme50 no-ripple\" fill=\"none\">\n    Gimme 50\n  </ion-button>\n</ion-footer>"

/***/ }),

/***/ "./src/app/pages/balance/view-tokens/view-tokens.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/balance/view-tokens/view-tokens.module.ts ***!
  \*****************************************************************/
/*! exports provided: ViewTokensPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewTokensPageModule", function() { return ViewTokensPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _view_tokens_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view-tokens.page */ "./src/app/pages/balance/view-tokens/view-tokens.page.ts");







const routes = [
    {
        path: '',
        component: _view_tokens_page__WEBPACK_IMPORTED_MODULE_6__["ViewTokensPage"]
    }
];
let ViewTokensPageModule = class ViewTokensPageModule {
};
ViewTokensPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_view_tokens_page__WEBPACK_IMPORTED_MODULE_6__["ViewTokensPage"]]
    })
], ViewTokensPageModule);



/***/ }),

/***/ "./src/app/pages/balance/view-tokens/view-tokens.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/balance/view-tokens/view-tokens.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-title ion-item:hover {\n  background: none;\n  --background-hover: none;\n}\n\nion-list ion-item {\n  background-color: var(--ion-color-token);\n  opacity: 1;\n}\n\n.item .item-content {\n  background-color: transparent !important;\n}\n\nion-label#name h3 {\n  font-family: manrope-bold;\n  font-size: 16px;\n}\n\nion-list {\n  margin-top: 7px;\n  background-color: transparent;\n  background: transparent;\n}\n\nion-list ion-item {\n  color: var(--ion-color-color);\n  border: 1px solid var(--ion-color-item-border);\n  --border-color: var(--ion-color-item-border);\n  padding-right: 0;\n}\n\nion-list ion-item ion-col {\n  margin-left: 13px;\n}\n\n.title {\n  font-family: manrope-semibold;\n  font-size: 16px;\n  float: left;\n  text-overflow: ellipsis;\n  max-width: inherit;\n  white-space: normal;\n  word-wrap: normal;\n}\n\n.value {\n  font-size: 16px;\n  font-family: manrope-regular;\n  text-align: right;\n  float: right;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  max-width: inherit;\n  overflow: hidden;\n}\n\n.copy {\n  text-decoration: underline;\n  cursor: pointer;\n  font-size: 0.8rem;\n}\n\n.body {\n  margin-right: 30px;\n  margin-left: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGlhc25lbXIvcHJvamVjdHMvV2FsbGV0L21vYmlsZS1hcHAtZnJvbnQtZW5kL2FwcC9zcmMvYXBwL3BhZ2VzL2JhbGFuY2Uvdmlldy10b2tlbnMvdmlldy10b2tlbnMucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9iYWxhbmNlL3ZpZXctdG9rZW5zL3ZpZXctdG9rZW5zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0Esd0JBQUE7QUNDSjs7QURDQTtFQUNJLHdDQUFBO0VBQ0EsVUFBQTtBQ0VKOztBREFBO0VBQ0ksd0NBQUE7QUNHSjs7QUREQTtFQUNJLHlCQUFBO0VBQ0EsZUFBQTtBQ0lKOztBREZBO0VBQ0ksZUFBQTtFQUNBLDZCQUFBO0VBQ0EsdUJBQUE7QUNLSjs7QURIQTtFQUNJLDZCQUFBO0VBQ0EsOENBQUE7RUFDQSw0Q0FBQTtFQUNBLGdCQUFBO0FDTUo7O0FESkE7RUFDSSxpQkFBQTtBQ09KOztBREpBO0VBQ0ksNkJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FDT0o7O0FETEE7RUFDSSxlQUFBO0VBQ0EsNEJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ1FKOztBRE5BO0VBQ0ksMEJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNTSjs7QURQQTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7QUNVSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2JhbGFuY2Uvdmlldy10b2tlbnMvdmlldy10b2tlbnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRpdGxlIGlvbi1pdGVtOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIC0tYmFja2dyb3VuZC1ob3Zlcjogbm9uZTtcbn1cbmlvbi1saXN0IGlvbi1pdGVtIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItdG9rZW4pO1xuICAgIG9wYWNpdHk6IDE7XG59XG4uaXRlbSAuaXRlbS1jb250ZW50IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICB9XG5pb24tbGFiZWwjbmFtZSBoMyB7XG4gICAgZm9udC1mYW1pbHk6IG1hbnJvcGUtYm9sZDtcbiAgICBmb250LXNpemU6IDE2cHg7XG59XG5pb24tbGlzdCB7IFxuICAgIG1hcmdpbi10b3A6IDdweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbmlvbi1saXN0IGlvbi1pdGVtIHtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWNvbG9yKTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItaXRlbS1ib3JkZXIpO1xuICAgIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItaXRlbS1ib3JkZXIpO1xuICAgIHBhZGRpbmctcmlnaHQ6IDA7XG59XG5pb24tbGlzdCBpb24taXRlbSBpb24tY29sIHsgICAgXG4gICAgbWFyZ2luLWxlZnQ6IDEzcHg7XG59XG5cbi50aXRsZSB7XG4gICAgZm9udC1mYW1pbHk6IG1hbnJvcGUtc2VtaWJvbGQ7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIG1heC13aWR0aDogaW5oZXJpdDtcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICAgIHdvcmQtd3JhcDogbm9ybWFsO1xufVxuLnZhbHVlIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC1mYW1pbHk6IG1hbnJvcGUtcmVndWxhcjtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICBtYXgtd2lkdGg6IGluaGVyaXQ7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5jb3B5IHtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZm9udC1zaXplOiAwLjhyZW07XG59XG4uYm9keSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xufSIsImlvbi10aXRsZSBpb24taXRlbTpob3ZlciB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIC0tYmFja2dyb3VuZC1ob3Zlcjogbm9uZTtcbn1cblxuaW9uLWxpc3QgaW9uLWl0ZW0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItdG9rZW4pO1xuICBvcGFjaXR5OiAxO1xufVxuXG4uaXRlbSAuaXRlbS1jb250ZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cblxuaW9uLWxhYmVsI25hbWUgaDMge1xuICBmb250LWZhbWlseTogbWFucm9wZS1ib2xkO1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbmlvbi1saXN0IHtcbiAgbWFyZ2luLXRvcDogN3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbmlvbi1saXN0IGlvbi1pdGVtIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1jb2xvcik7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1pdGVtLWJvcmRlcik7XG4gIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItaXRlbS1ib3JkZXIpO1xuICBwYWRkaW5nLXJpZ2h0OiAwO1xufVxuXG5pb24tbGlzdCBpb24taXRlbSBpb24tY29sIHtcbiAgbWFyZ2luLWxlZnQ6IDEzcHg7XG59XG5cbi50aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBtYW5yb3BlLXNlbWlib2xkO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZsb2F0OiBsZWZ0O1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgbWF4LXdpZHRoOiBpbmhlcml0O1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICB3b3JkLXdyYXA6IG5vcm1hbDtcbn1cblxuLnZhbHVlIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LWZhbWlseTogbWFucm9wZS1yZWd1bGFyO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgbWF4LXdpZHRoOiBpbmhlcml0O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uY29weSB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xufVxuXG4uYm9keSB7XG4gIG1hcmdpbi1yaWdodDogMzBweDtcbiAgbWFyZ2luLWxlZnQ6IDI1cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/balance/view-tokens/view-tokens.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/balance/view-tokens/view-tokens.page.ts ***!
  \***************************************************************/
/*! exports provided: ViewTokensPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewTokensPage", function() { return ViewTokensPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _service_balance_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../service/balance.service */ "./src/app/service/balance.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _service_minima_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../service/minima-api.service */ "./src/app/service/minima-api.service.ts");
/* harmony import */ var spark_md5__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! spark-md5 */ "./node_modules/spark-md5/spark-md5.js");
/* harmony import */ var spark_md5__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(spark_md5__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");







let ViewTokensPage = class ViewTokensPage {
    constructor(alertController, route, api, toastController, balanceService) {
        this.alertController = alertController;
        this.route = route;
        this.api = api;
        this.toastController = toastController;
        this.balanceService = balanceService;
        this.urlID = '';
        this.type = '';
    }
    ngOnInit() {
        this.balanceService.data.subscribe((res) => {
            this.tokenArr = res;
            this.urlID = this.route.snapshot.paramMap.get('id');
            this.tokenArr.forEach((tkn) => {
                if (tkn.tokenid === this.urlID) {
                    this.token = tkn;
                    if (this.token.tokenid === '0x00') {
                        this.token.description = 'Minima\'s Official Token.';
                    }
                    else {
                        this.token.description = tkn.description;
                    }
                    if (tkn.token.tokenid !== '0x00' && tkn.token.icon) {
                        this.token.icon = 'assets/minimaBox.svg';
                    }
                    else if (tkn.token.tokenid === '0x00') {
                        this.token.icon = 'assets/minimaBox.svg';
                    }
                    else {
                        this.token.icon = tkn.icon;
                    }
                    if (this.token.script === 'RETURN TRUE') {
                        this.type = 'Value Transfer';
                    }
                    else {
                        this.type = 'Non Fungible Token';
                    }
                }
            });
        });
    }
    validateProof(tokenid) {
        this.api.validateTokenID(tokenid).then((res) => {
            if (res.response.valid === true) {
                this.presentToast('This proof is valid.', 'success');
            }
            else {
                this.presentToast('Proof mismatch - not a valid proof', 'danger');
            }
        });
    }
    createIcon(tokenid) {
        return this.avatar = 'https://www.gravatar.com/avatar/' + spark_md5__WEBPACK_IMPORTED_MODULE_4__["hash"](tokenid) + '?d=identicon';
    }
    // Alerts
    presentToast(msg, type) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: msg,
                duration: 4000,
                buttons: [{
                        text: 'Close',
                        role: 'cancel'
                    }],
                color: type,
                keyboardClose: true,
                translucent: true,
                position: 'top'
            });
            toast.present();
        });
    }
    copyToClipPWA(text) {
        document.addEventListener('copy', (e) => {
            e.clipboardData.setData('text/plain', text);
            this.presentToast("Copied to Clipboard", "success");
            e.preventDefault();
            document.removeEventListener('copy', null);
        });
        document.execCommand('copy');
    }
    giveMe50() {
        this.api.giveMe50().then((res) => {
            if (res.status === true) {
                this.presentAlert('Gimme50', 'Successful', 'Status');
            }
            else {
                this.presentAlert('Gimme50', res.message, 'Status');
            }
        });
    }
    presentAlert(hdr, msg, sub) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'alert',
                header: hdr,
                subHeader: sub,
                message: msg,
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
};
ViewTokensPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _service_minima_api_service__WEBPACK_IMPORTED_MODULE_3__["MinimaApiService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _service_balance_service__WEBPACK_IMPORTED_MODULE_1__["BalanceService"] }
];
ViewTokensPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
        selector: 'app-view-tokens',
        template: __webpack_require__(/*! raw-loader!./view-tokens.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/balance/view-tokens/view-tokens.page.html"),
        styles: [__webpack_require__(/*! ./view-tokens.page.scss */ "./src/app/pages/balance/view-tokens/view-tokens.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
        _service_minima_api_service__WEBPACK_IMPORTED_MODULE_3__["MinimaApiService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
        _service_balance_service__WEBPACK_IMPORTED_MODULE_1__["BalanceService"]])
], ViewTokensPage);



/***/ })

}]);
//# sourceMappingURL=default~pages-balance-view-tokens-view-tokens-module~view-tokens-view-tokens-module-es2015.js.map