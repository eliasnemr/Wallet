(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["view-tokens-view-tokens-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/balance/view-tokens/view-tokens.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/balance/view-tokens/view-tokens.page.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar class=\"border-b\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/balance\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{ token.token }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title>\n        <ion-avatar>\n          <img class=\"custom-icon\" *ngIf=\"token.tokenid !== '0x00' && token.icon.length == 0\" [src]=\"createIcon( token.tokenid )\"/>\n          <img class=\"custom-icon\" *ngIf=\"token.tokenid !== '0x00' && token.icon.length > 0\" [src]=\"token.icon\"/>\n          <img *ngIf=\"token.tokenid === '0x00'\" class=\"custom-icon\" alt=\"minima\" src=\"assets/minimaBox.svg\"> \n        </ion-avatar>        \n      </ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-label>\n        <h3>{{token.token}}</h3> \n        <p>{{token.description}}</p>\n      </ion-label>\n    </ion-card-content>\n    <ion-item-divider class=\"border-b\"></ion-item-divider>\n    <ion-list lines=\"none\">\n      <ion-list-header>\n        Token Details\n      </ion-list-header>\n      <ion-item>\n        <ion-col size-md=\"3\"  size-sm=\"6\" class=\"title\">\n          Name\n        </ion-col>\n        <ion-col class=\"value\">\n          {{token.token}}\n        </ion-col>\n      </ion-item>\n      <ion-item>\n        <ion-col size-md=\"3\"  size-sm=\"6\" class=\"title\">\n          Token ID\n        <a class=\"copy\" (click)=\"copyToClipPWA(token.tokenid)\">\n          Copy \n        </a>\n        </ion-col>\n        <ion-col class=\"value\">\n          {{token.tokenid}}\n        </ion-col>\n      </ion-item>\n      <ion-item [hidden]=\"token.tokenid == '0x00'\">\n        <ion-col size-md=\"3\"  size-sm=\"6\" class=\"title\">\n          Coin ID\n        <a class=\"copy\" (click)=\"copyToClipPWA(token.coinid)\">\n          Copy \n        </a>\n        </ion-col>\n        <ion-col class=\"minima-numeric value\">\n          {{token.coinid}}\n        </ion-col>\n      </ion-item>\n      <ion-item>\n        <ion-col size-md=\"3\"  size-sm=\"6\" class=\"title\">\n          Total Supply\n        </ion-col>\n        <ion-col class=\"minima-numeric value\">\n          {{token.total}}\n        </ion-col>\n      </ion-item>\n      <ion-item>\n        <ion-col size-md=\"3\"  size-sm=\"6\" class=\"title\">\n          Confirmed Amount\n        </ion-col>\n        <ion-col class=\"minima-numeric value\">\n          {{token.confirmed}}\n        </ion-col>\n      </ion-item>\n      <ion-item>\n        <ion-col size-md=\"3\"  size-sm=\"6\" class=\"title\">\n          Unconfirmed Amount\n        </ion-col>\n        <ion-col class=\"minima-numeric value\">\n          {{token.unconfirmed}}\n        </ion-col>\n      </ion-item>\n        <ion-item>\n        <ion-col size-md=\"3\" size-sm=\"6\" class=\"title\">\n          Sendable Amount\n        </ion-col>\n        <ion-col class=\"value minima-numeric\">\n          {{token.sendable}}\n        </ion-col>\n      </ion-item>\n        <ion-item>\n        <ion-col size-md=\"3\"  size-sm=\"6\" class=\"title\">\n          Mempool Amount\n        </ion-col>\n        <ion-col class=\"minima-numeric value\">\n          {{token.mempool}}\n        </ion-col>\n      </ion-item>\n      <ion-item [hidden]=\"token.tokenid == '0x00'\">\n        <ion-col size-md=\"3\"  size-sm=\"6\" class=\"title\">\n          Token Type\n        </ion-col>\n        <ion-col class=\"value\">\n          {{type}}\n        </ion-col>\n      </ion-item>\n      <ion-item  [hidden]=\"token.tokenid == '0x00' || !token.proof\">\n        <ion-col size-md=\"3\"  size-sm=\"6\" class=\"title\">\n          Proof\n        </ion-col>\n        <ion-col class=\"value\">\n          {{token.proof}}\n        </ion-col>\n      </ion-item>\n      <ion-item size-md=\"3\" size-sm=\"6\" [hidden]=\"token.tokenid == '0x00' || !token.proof \">\n        <ion-col class=\"title\">\n          Validate Proof\n        </ion-col>\n        <ion-col class=\"value\">\n          <ion-button *ngIf=\"token.proof\" class=\"small-text\" size=\"small\" (click)=\"validateProof(token.tokenid)\">\n            Validate\n          </ion-button> \n        </ion-col>\n      </ion-item>    \n    </ion-list>\n  </ion-card>\n</ion-content>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _view_tokens_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view-tokens.page */ "./src/app/pages/balance/view-tokens/view-tokens.page.ts");







var routes = [
    {
        path: '',
        component: _view_tokens_page__WEBPACK_IMPORTED_MODULE_6__["ViewTokensPage"]
    }
];
var ViewTokensPageModule = /** @class */ (function () {
    function ViewTokensPageModule() {
    }
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
    return ViewTokensPageModule;
}());



/***/ }),

/***/ "./src/app/pages/balance/view-tokens/view-tokens.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/balance/view-tokens/view-tokens.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-title {\n  font-family: manrope-bold;\n  width: inherit;\n  max-width: inherit;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  font-size: 1rem;\n}\n\nion-back-button .button-native .button-inner ion-icon {\n  font-size: 1.2rem !important;\n}\n\nion-back-button:hover {\n  --background-hover: none;\n  --color: var(--ion-color-secondary);\n}\n\nion-item-divider {\n  background: var(--ion-m-background);\n}\n\nion-card:hover {\n  background-color: --minima-color;\n  -webkit-transform: scale(1.01);\n          transform: scale(1.01);\n}\n\nion-card-title .custom-icon {\n  max-height: 75px;\n  max-width: 75px;\n}\n\nion-card-content {\n  text-align: center;\n  -webkit-box-pack: center !important;\n          justify-content: center !important;\n  align-content: center;\n  display: -webkit-box;\n  display: flex;\n  height: auto;\n  color: var(--ion-color-tertiary);\n}\n\nion-card-content h3 {\n  font-family: manrope-bold;\n  display: block;\n}\n\nion-card-content p {\n  font-family: manrope-light;\n}\n\nion-card-header {\n  text-align: center;\n  -webkit-box-pack: center !important;\n          justify-content: center !important;\n  align-content: center;\n  display: -webkit-box;\n  display: flex;\n  border-radius: 50px;\n  height: auto;\n}\n\nion-card-content {\n  margin-left: 5%;\n  margin-right: 5%;\n  white-space: normal;\n  overflow: auto;\n}\n\nion-list-header {\n  font-size: 1.2rem;\n  font-family: manrope-bold;\n}\n\n.title {\n  font-family: manrope-bold;\n  font-size: 1rem;\n  float: left;\n  text-overflow: ellipsis;\n  max-width: inherit;\n  white-space: normal;\n  word-wrap: normal;\n}\n\n.value {\n  font-family: manrope-light;\n  text-align: left;\n  float: left;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  max-width: inherit;\n  overflow: hidden;\n}\n\n.copy {\n  text-decoration: underline;\n  cursor: pointer;\n  font-size: 0.8rem;\n}\n\nion-item {\n  padding: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGlhc25lbXIvcHJvamVjdHMvV0FMTEVUL21vYmlsZS1hcHAtZnJvbnQtZW5kL2FwcC9zcmMvYXBwL3BhZ2VzL2JhbGFuY2Uvdmlldy10b2tlbnMvdmlldy10b2tlbnMucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9iYWxhbmNlL3ZpZXctdG9rZW5zL3ZpZXctdG9rZW5zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUNDSjs7QURDQTtFQUNJLDRCQUFBO0FDRUo7O0FEQUE7RUFDSSx3QkFBQTtFQUNBLG1DQUFBO0FDR0o7O0FEREE7RUFDSSxtQ0FBQTtBQ0lKOztBREZBO0VBQ0ksZ0NBQUE7RUFDQSw4QkFBQTtVQUFBLHNCQUFBO0FDS0o7O0FESEE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7QUNNSjs7QURKQTtFQUNJLGtCQUFBO0VBQ0EsbUNBQUE7VUFBQSxrQ0FBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0FDT0o7O0FETEE7RUFDSSx5QkFBQTtFQUNBLGNBQUE7QUNRSjs7QUROQTtFQUNJLDBCQUFBO0FDU0o7O0FEUEE7RUFDSSxrQkFBQTtFQUNBLG1DQUFBO1VBQUEsa0NBQUE7RUFDQSxxQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ1VKOztBRFJBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FDV0o7O0FEVEE7RUFDSSxpQkFBQTtFQUNBLHlCQUFBO0FDWUo7O0FEVkE7RUFDSSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUNhSjs7QURYQTtFQUNJLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNjSjs7QURaQTtFQUNJLDBCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDZUo7O0FEYkE7RUFDSSxVQUFBO0FDZ0JKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYmFsYW5jZS92aWV3LXRva2Vucy92aWV3LXRva2Vucy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdGl0bGUge1xuICAgIGZvbnQtZmFtaWx5OiBtYW5yb3BlLWJvbGQ7XG4gICAgd2lkdGg6IGluaGVyaXQ7XG4gICAgbWF4LXdpZHRoOiBpbmhlcml0O1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgZm9udC1zaXplOiAxLjByZW07IFxufVxuaW9uLWJhY2stYnV0dG9uIC5idXR0b24tbmF0aXZlIC5idXR0b24taW5uZXIgaW9uLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtIWltcG9ydGFudDtcbn1cbmlvbi1iYWNrLWJ1dHRvbjpob3ZlciB7XG4gICAgLS1iYWNrZ3JvdW5kLWhvdmVyOiBub25lO1xuICAgIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xufVxuaW9uLWl0ZW0tZGl2aWRlciB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0taW9uLW0tYmFja2dyb3VuZCk7XG59XG5pb24tY2FyZDpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogLS1taW5pbWEtY29sb3I7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAxKTtcbn1cbmlvbi1jYXJkLXRpdGxlIC5jdXN0b20taWNvbiB7XG4gICAgbWF4LWhlaWdodDogNzVweDtcbiAgICBtYXgtd2lkdGg6IDc1cHg7XG59XG5pb24tY2FyZC1jb250ZW50IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeSk7XG59XG5pb24tY2FyZC1jb250ZW50IGgzIHtcbiAgICBmb250LWZhbWlseTogbWFucm9wZS1ib2xkO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuaW9uLWNhcmQtY29udGVudCBwIHtcbiAgICBmb250LWZhbWlseTogbWFucm9wZS1saWdodDtcbn1cbmlvbi1jYXJkLWhlYWRlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICBoZWlnaHQ6IGF1dG87XG59XG5pb24tY2FyZC1jb250ZW50IHtcbiAgICBtYXJnaW4tbGVmdDogNSU7XG4gICAgbWFyZ2luLXJpZ2h0OiA1JTtcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICAgIG92ZXJmbG93OiBhdXRvO1xufVxuaW9uLWxpc3QtaGVhZGVyIHtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICBmb250LWZhbWlseTogbWFucm9wZS1ib2xkO1xufVxuLnRpdGxlIHtcbiAgICBmb250LWZhbWlseTogbWFucm9wZS1ib2xkO1xuICAgIGZvbnQtc2l6ZTogMS4wcmVtO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIG1heC13aWR0aDogaW5oZXJpdDtcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICAgIHdvcmQtd3JhcDogbm9ybWFsO1xufVxuLnZhbHVlIHtcbiAgICBmb250LWZhbWlseTogbWFucm9wZS1saWdodDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGZsb2F0OmxlZnQ7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICBtYXgtd2lkdGg6IGluaGVyaXQ7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5jb3B5IHtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZm9udC1zaXplOiAwLjhyZW07XG59XG5pb24taXRlbSB7XG4gICAgcGFkZGluZzogMDtcbn1cbiIsImlvbi10aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBtYW5yb3BlLWJvbGQ7XG4gIHdpZHRoOiBpbmhlcml0O1xuICBtYXgtd2lkdGg6IGluaGVyaXQ7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBmb250LXNpemU6IDFyZW07XG59XG5cbmlvbi1iYWNrLWJ1dHRvbiAuYnV0dG9uLW5hdGl2ZSAuYnV0dG9uLWlubmVyIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAxLjJyZW0gIWltcG9ydGFudDtcbn1cblxuaW9uLWJhY2stYnV0dG9uOmhvdmVyIHtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiBub25lO1xuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbn1cblxuaW9uLWl0ZW0tZGl2aWRlciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1tLWJhY2tncm91bmQpO1xufVxuXG5pb24tY2FyZDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IC0tbWluaW1hLWNvbG9yO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDEpO1xufVxuXG5pb24tY2FyZC10aXRsZSAuY3VzdG9tLWljb24ge1xuICBtYXgtaGVpZ2h0OiA3NXB4O1xuICBtYXgtd2lkdGg6IDc1cHg7XG59XG5cbmlvbi1jYXJkLWNvbnRlbnQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5KTtcbn1cblxuaW9uLWNhcmQtY29udGVudCBoMyB7XG4gIGZvbnQtZmFtaWx5OiBtYW5yb3BlLWJvbGQ7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5pb24tY2FyZC1jb250ZW50IHAge1xuICBmb250LWZhbWlseTogbWFucm9wZS1saWdodDtcbn1cblxuaW9uLWNhcmQtaGVhZGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGhlaWdodDogYXV0bztcbn1cblxuaW9uLWNhcmQtY29udGVudCB7XG4gIG1hcmdpbi1sZWZ0OiA1JTtcbiAgbWFyZ2luLXJpZ2h0OiA1JTtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbmlvbi1saXN0LWhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBmb250LWZhbWlseTogbWFucm9wZS1ib2xkO1xufVxuXG4udGl0bGUge1xuICBmb250LWZhbWlseTogbWFucm9wZS1ib2xkO1xuICBmb250LXNpemU6IDFyZW07XG4gIGZsb2F0OiBsZWZ0O1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgbWF4LXdpZHRoOiBpbmhlcml0O1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICB3b3JkLXdyYXA6IG5vcm1hbDtcbn1cblxuLnZhbHVlIHtcbiAgZm9udC1mYW1pbHk6IG1hbnJvcGUtbGlnaHQ7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgbWF4LXdpZHRoOiBpbmhlcml0O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uY29weSB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xufVxuXG5pb24taXRlbSB7XG4gIHBhZGRpbmc6IDA7XG59Il19 */"

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
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _service_minima_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../service/minima-api.service */ "./src/app/service/minima-api.service.ts");
/* harmony import */ var spark_md5__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! spark-md5 */ "./node_modules/spark-md5/spark-md5.js");
/* harmony import */ var spark_md5__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(spark_md5__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");







var ViewTokensPage = /** @class */ (function () {
    function ViewTokensPage(route, api, toastController, balanceService) {
        var _this = this;
        this.route = route;
        this.api = api;
        this.toastController = toastController;
        this.balanceService = balanceService;
        this.urlID = '';
        this.type = '';
        this.balanceService.data.subscribe(function (res) {
            _this.tokenArr = res;
            _this.urlID = _this.route.snapshot.paramMap.get("id");
            _this.tokenArr.forEach(function (tkn) {
                if (tkn.tokenid === _this.urlID) {
                    _this.token = tkn;
                    if (_this.token.tokenid === '0x00') {
                        _this.token.description = 'Minima\'s Official Token.';
                    }
                    else {
                        _this.token.description = tkn.description;
                    }
                    if (tkn.token.tokenid !== '0x00' && tkn.token.icon) {
                        _this.token.icon = 'assets/minimaBox.svg';
                    }
                    else if (tkn.token.tokenid === '0x00') {
                        _this.token.icon = 'assets/minimaBox.svg';
                    }
                    else {
                        _this.token.icon = tkn.icon;
                    }
                    if (_this.token.script === 'RETURN TRUE') {
                        _this.type = 'Value Transfer';
                    }
                    else {
                        _this.type = 'Non Fungible Token';
                    }
                }
            });
        });
    }
    ViewTokensPage.prototype.ngOnInit = function () { };
    ViewTokensPage.prototype.validateProof = function (tokenid) {
        var _this = this;
        this.api.validateTokenID(tokenid).then(function (res) {
            if (res.response.valid === true) {
                _this.presentToast('This proof is valid.', 'success');
            }
            else {
                _this.presentToast('Proof mismatch - not a valid proof', 'danger');
            }
        });
    };
    ViewTokensPage.prototype.createIcon = function (tokenid) {
        return this.avatar = 'https://www.gravatar.com/avatar/' + spark_md5__WEBPACK_IMPORTED_MODULE_4__["hash"](tokenid) + '?d=identicon';
    };
    // Alerts
    ViewTokensPage.prototype.presentToast = function (msg, type) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
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
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    ViewTokensPage.prototype.copyToClipPWA = function (text) {
        var _this = this;
        document.addEventListener('copy', function (e) {
            e.clipboardData.setData('text/plain', text);
            _this.presentToast("Copied to Clipboard", "success");
            e.preventDefault();
            document.removeEventListener('copy', null);
        });
        document.execCommand('copy');
    };
    ViewTokensPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: _service_minima_api_service__WEBPACK_IMPORTED_MODULE_3__["MinimaApiService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
        { type: _service_balance_service__WEBPACK_IMPORTED_MODULE_1__["BalanceService"] }
    ]; };
    ViewTokensPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
            selector: 'app-view-tokens',
            template: __webpack_require__(/*! raw-loader!./view-tokens.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/balance/view-tokens/view-tokens.page.html"),
            styles: [__webpack_require__(/*! ./view-tokens.page.scss */ "./src/app/pages/balance/view-tokens/view-tokens.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _service_minima_api_service__WEBPACK_IMPORTED_MODULE_3__["MinimaApiService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _service_balance_service__WEBPACK_IMPORTED_MODULE_1__["BalanceService"]])
    ], ViewTokensPage);
    return ViewTokensPage;
}());



/***/ })

}]);
//# sourceMappingURL=view-tokens-view-tokens-module-es5.js.map