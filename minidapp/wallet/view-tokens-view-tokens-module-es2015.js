(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["view-tokens-view-tokens-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/balance/view-tokens/view-tokens.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/balance/view-tokens/view-tokens.page.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/balance\"></ion-back-button>\n    </ion-buttons>\n\n    <ion-title>{{ token }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title>\n        <img src={{icon}} alt=\"icon\" style=\"width: 5vh;\"> \n      </ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      {{description}}\n    </ion-card-content>\n  </ion-card>\n\n  <ion-list>\n      <ion-list-header>\n        Token Details\n      </ion-list-header>\n      <ion-item>\n        <ion-col class=\"title\">\n          Name\n        </ion-col>\n        <ion-col class=\"value\">\n          {{token}}\n        </ion-col>\n      </ion-item>\n      <ion-item>\n        <ion-col class=\"title\">\n          Token ID\n        <a class=\"copy\" (click)=\"copyToClipPWA(tokenid)\">\n          Copy \n        </a>\n        </ion-col>\n        <ion-col class=\"value\">\n          {{tokenid}}\n        </ion-col>\n      </ion-item>\n      <ion-item [hidden]=\"tokenid == '0x00'\">\n        <ion-col class=\"title\">\n          Coin ID\n        <a class=\"copy\" (click)=\"copyToClipPWA(coinid)\">\n          Copy \n        </a>\n        </ion-col>\n        <ion-col class=\"value\">\n          {{coinid}}\n        </ion-col>\n      </ion-item>\n      <ion-item>\n        <ion-col class=\"title\">\n          Total\n        </ion-col>\n        <ion-col class=\"value\">\n          {{total}}\n        </ion-col>\n      </ion-item>\n      <ion-item>\n        <ion-col class=\"title\">\n          Confirmed Amount\n        </ion-col>\n        <ion-col class=\"value\">\n          {{confirmed}}\n        </ion-col>\n      </ion-item>\n      <ion-item>\n        <ion-col class=\"title\">\n          Unconfirmed Amount\n        </ion-col>\n        <ion-col class=\"value\">\n          {{unconfirmed}}\n        </ion-col>\n      </ion-item>\n            <ion-item>\n        <ion-col class=\"title\">\n          Sendable Amount\n        </ion-col>\n        <ion-col class=\"value\">\n          {{sendable}}\n        </ion-col>\n      </ion-item>\n            <ion-item>\n        <ion-col class=\"title\">\n          Mempool Amount\n        </ion-col>\n        <ion-col class=\"value\">\n          {{mempool}}\n        </ion-col>\n      </ion-item>\n      <ion-item [hidden]=\"tokenid == '0x00'\">\n        <ion-col class=\"title\">\n          Token Type\n        </ion-col>\n        <ion-col class=\"value\">\n          {{script}}\n        </ion-col>\n      </ion-item>\n      <ion-item [hidden]=\"tokenid == '0x00' || !proof\">\n        <ion-col class=\"title\">\n          Proof\n        </ion-col>\n        <ion-col class=\"value\">\n          {{proof}}\n        </ion-col>\n      </ion-item>\n      <ion-item [hidden]=\"tokenid == '0x00' || !proof \">\n        <ion-col class=\"title\">\n          Validate Proof\n        </ion-col>\n        <ion-col class=\"value\">\n          <ion-button *ngIf=\"proof\" class=\"small-text\" size=\"small\" (click)=\"validateProof(tokenid)\">\n            Validate\n          </ion-button> \n        </ion-col>\n      </ion-item>    \n\n\n               \n\n\n    </ion-list>\n\n</ion-content>\n"

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
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
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

module.exports = "ion-card {\n  border-radius: 50px;\n}\n\nion-card:hover {\n  background-color: --minima-color;\n  -webkit-transform: scale(0.9);\n          transform: scale(0.9);\n}\n\nion-card-content {\n  text-align: center;\n  -webkit-box-pack: center !important;\n          justify-content: center !important;\n  align-content: center;\n  display: -webkit-box;\n  display: flex;\n  height: auto;\n}\n\nion-card-header {\n  text-align: center;\n  -webkit-box-pack: center !important;\n          justify-content: center !important;\n  align-content: center;\n  display: -webkit-box;\n  display: flex;\n  border-radius: 50px;\n  height: auto;\n}\n\nion-card-content {\n  margin-left: 5%;\n  margin-right: 5%;\n  white-space: normal;\n  overflow: auto;\n}\n\nion-list-header {\n  font-weight: 600;\n  font-size: 1.5rem;\n  letter-spacing: -0.02em;\n}\n\n.title {\n  letter-spacing: -0.02em;\n  float: left;\n  font-weight: 500;\n}\n\n.value {\n  font-size: 0.8rem;\n  opacity: 0.8;\n  text-align: right;\n  float: right;\n  white-space: pre-wrap;\n  word-wrap: none;\n  word-break: break-all;\n}\n\n.copy {\n  text-decoration: underline;\n  cursor: pointer;\n  font-size: 0.8rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGlhc25lbXIvcHJvamVjdHMvV0FMTEVUL21vYmlsZS1hcHAtZnJvbnQtZW5kL2FwcC9zcmMvYXBwL3BhZ2VzL2JhbGFuY2Uvdmlldy10b2tlbnMvdmlldy10b2tlbnMucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9iYWxhbmNlL3ZpZXctdG9rZW5zL3ZpZXctdG9rZW5zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0FDQ0o7O0FEQ0E7RUFDSSxnQ0FBQTtFQUNBLDZCQUFBO1VBQUEscUJBQUE7QUNFSjs7QURBQTtFQUNJLGtCQUFBO0VBQ0EsbUNBQUE7VUFBQSxrQ0FBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsWUFBQTtBQ0dKOztBRERBO0VBQ0ksa0JBQUE7RUFDQSxtQ0FBQTtVQUFBLGtDQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUNJSjs7QURGQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQ0tKOztBREhBO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0FDTUo7O0FESkE7RUFDSSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ09KOztBRExBO0VBQ0ksaUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7QUNRSjs7QUROQTtFQUNJLDBCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDU0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9iYWxhbmNlL3ZpZXctdG9rZW5zL3ZpZXctdG9rZW5zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJkIHtcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xufVxuaW9uLWNhcmQ6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IC0tbWluaW1hLWNvbG9yO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45KTtcbn1cbmlvbi1jYXJkLWNvbnRlbnQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGhlaWdodDogYXV0bztcbn1cbmlvbi1jYXJkLWhlYWRlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICBoZWlnaHQ6IGF1dG87XG59XG5pb24tY2FyZC1jb250ZW50IHtcbiAgICBtYXJnaW4tbGVmdDogNSU7XG4gICAgbWFyZ2luLXJpZ2h0OiA1JTtcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICAgIG92ZXJmbG93OiBhdXRvO1xufVxuaW9uLWxpc3QtaGVhZGVyIHtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIGxldHRlci1zcGFjaW5nOiAtMC4wMmVtO1xufVxuLnRpdGxlIHtcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMDJlbTtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBmb250LXdlaWdodDogNTAwO1xufVxuLnZhbHVlIHtcbiAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICBvcGFjaXR5OiAwLjg7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbiAgICB3b3JkLXdyYXA6IG5vbmU7XG4gICAgd29yZC1icmVhazogYnJlYWstYWxsO1xufVxuLmNvcHkge1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmb250LXNpemU6IDAuOHJlbTtcbn0iLCJpb24tY2FyZCB7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG59XG5cbmlvbi1jYXJkOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogLS1taW5pbWEtY29sb3I7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC45KTtcbn1cblxuaW9uLWNhcmQtY29udGVudCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbmlvbi1jYXJkLWhlYWRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbmlvbi1jYXJkLWNvbnRlbnQge1xuICBtYXJnaW4tbGVmdDogNSU7XG4gIG1hcmdpbi1yaWdodDogNSU7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG5pb24tbGlzdC1oZWFkZXIge1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjAyZW07XG59XG5cbi50aXRsZSB7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4wMmVtO1xuICBmbG9hdDogbGVmdDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLnZhbHVlIHtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIG9wYWNpdHk6IDAuODtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGZsb2F0OiByaWdodDtcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xuICB3b3JkLXdyYXA6IG5vbmU7XG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcbn1cblxuLmNvcHkge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDAuOHJlbTtcbn0iXX0= */"

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
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _service_minima_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../service/minima-api.service */ "./src/app/service/minima-api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");





let ViewTokensPage = class ViewTokensPage {
    constructor(route, api, toastController) {
        this.route = route;
        this.api = api;
        this.toastController = toastController;
        this.tokenid = this.route.snapshot.paramMap.get("id");
    }
    ngOnInit() {
        Minima.cmd('balance', (res) => {
            res.response.balance.forEach((tkn) => {
                if (tkn.tokenid == this.tokenid) {
                    this.tokenid = tkn.tokenid;
                    this.token = tkn.token;
                    this.coinid = tkn.coinid;
                    this.total = tkn.total; // Token total
                    this.totalamount = tkn.totalamount; // Minima total
                    this.confirmed = tkn.confirmed;
                    this.unconfirmed = tkn.unconfirmed;
                    this.sendable = tkn.sendable;
                    this.mempool = tkn.mempool;
                    if (this.tokenid == "0x00") {
                        this.description = "Minima's Official Token.";
                    }
                    else {
                        this.description = tkn.description;
                    }
                    if (tkn.tokenid != "0x00" && tkn.icon.length == 0) {
                        this.icon = "assets/icon/icon.png";
                    }
                    else if (tkn.tokenid == "0x00") {
                        this.icon = "assets/icon/icon.png";
                    }
                    else {
                        this.icon = tkn.icon;
                    }
                    this.proof = tkn.proof;
                    this.scale = tkn.scale;
                    this.script = tkn.script;
                    if (this.script === "RETURN TRUE") {
                        this.script = "Normal";
                    }
                    else {
                        this.script = "Non-Fungible Token";
                    }
                }
            });
        });
    }
    validateProof(tokenid) {
        this.api.validateTokenID(tokenid).then((res) => {
            if (res.response.valid === true) {
                this.presentToast("This proof is valid.", "success");
            }
            else {
                this.presentToast("Proof Mismatch - Proof is invalid.", "danger");
            }
        });
    }
    //Alerts
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
};
ViewTokensPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _service_minima_api_service__WEBPACK_IMPORTED_MODULE_2__["MinimaApiService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ToastController"] }
];
ViewTokensPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-view-tokens',
        template: __webpack_require__(/*! raw-loader!./view-tokens.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/balance/view-tokens/view-tokens.page.html"),
        styles: [__webpack_require__(/*! ./view-tokens.page.scss */ "./src/app/pages/balance/view-tokens/view-tokens.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _service_minima_api_service__WEBPACK_IMPORTED_MODULE_2__["MinimaApiService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ToastController"]])
], ViewTokensPage);



/***/ })

}]);
//# sourceMappingURL=view-tokens-view-tokens-module-es2015.js.map