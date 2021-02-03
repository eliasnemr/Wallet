(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-balance-view-tokens-view-tokens-module~view-tokens-view-tokens-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/balance/view-tokens/view-tokens.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/balance/view-tokens/view-tokens.page.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-title>\n      <ion-item routerLink=\"/balance\" class=\"no-ripple ion-no-padding\" lines=\"none\">\n       Balance\n      </ion-item>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-item class=\"breadcrumb ion-no-padding\" lines=\"none\" *ngIf=\"tokenArr.length > 0\">\n  Token details\n</ion-item>\n<ion-content>\n  <div class=\"body\">\n  <ion-list lines=\"none\">\n    <ion-item color=\"none\">\n      <ion-avatar slot=\"start\">\n        <img class=\"custom-icon\" *ngIf=\"token.tokenid !== '0x00' && token.icon.length == 0\" [src]=\"createIcon( token.tokenid )\"/>\n        <img class=\"custom-icon\" *ngIf=\"token.tokenid !== '0x00' && token.icon.length > 0\" [src]=\"token.icon\"/>\n        <img *ngIf=\"token.tokenid === '0x00'\" class=\"custom-icon\" alt=\"minima\" src=\"assets/minima-logo-box.svg\"> \n      </ion-avatar>\n      <ion-label>\n        <h3>{{token.token}}</h3> \n      </ion-label>\n    </ion-item>\n    <ion-item *ngIf=\"token.description && token.description.length > 0\" color=\"none\">\n      <ion-label position=\"stacked\" style=\"font-size: 1.0rem; font-family: manrope-bold; opacity: 1\">Token Description</ion-label>\n      <ion-input disabled>\n        {{ token.description }}\n      </ion-input>\n    </ion-item>\n    <ion-item color=\"none\" class=\"ion-no-padding\">\n      <ion-col class=\"title\">\n        Name\n      </ion-col>\n      <ion-col class=\"value\">\n        {{token.token}}\n      </ion-col>\n    </ion-item>\n    <ion-item color=\"none\" class=\"ion-no-padding\">\n      <ion-col class=\"title\">\n        Token ID\n      <a class=\"copy\" (click)=\"copyToClipPWA(token.tokenid)\">\n        Copy \n      </a>\n      </ion-col>\n      <ion-col class=\"value\">\n        {{token.tokenid}}\n      </ion-col>\n    </ion-item>\n    <ion-item  color=\"none\" class=\"ion-no-padding\" [hidden]=\"token.tokenid == '0x00'\">\n      <ion-col class=\"title\">\n        Coin ID\n      <a class=\"copy\" (click)=\"copyToClipPWA(token.coinid)\">\n        Copy \n      </a>\n      </ion-col>\n      <ion-col class=\"minima-numeric value\">\n        {{token.coinid}}\n      </ion-col>\n    </ion-item>\n    <ion-item color=\"none\" class=\"ion-no-padding\">\n      <ion-col class=\"title\">\n        Total Supply\n      </ion-col>\n      <ion-col class=\"minima-numeric value\">\n        {{token.total}}\n      </ion-col>\n    </ion-item>\n    <ion-item color=\"none\" class=\"ion-no-padding\">\n      <ion-col class=\"title\">\n        Confirmed Amount\n      </ion-col>\n      <ion-col class=\"minima-numeric value\">\n        {{token.confirmed}}\n      </ion-col>\n    </ion-item>\n    <ion-item color=\"none\" class=\"ion-no-padding\">\n      <ion-col class=\"title\">\n        Unconfirmed Amount\n      </ion-col>\n      <ion-col class=\"minima-numeric value\">\n        {{token.unconfirmed}}\n      </ion-col>\n    </ion-item>\n    <ion-item color=\"none\" class=\"ion-no-padding\">\n      <ion-col class=\"title\">\n        Sendable Amount\n      </ion-col>\n      <ion-col class=\"value minima-numeric\">\n        {{token.sendable}}\n      </ion-col>\n    </ion-item>\n    <ion-item color=\"none\" class=\"ion-no-padding\">\n      <ion-col class=\"title\">\n        Mempool Amount\n      </ion-col>\n      <ion-col class=\"minima-numeric value\">\n        {{token.mempool}}\n      </ion-col>\n    </ion-item>\n    <ion-item color=\"none\" class=\"ion-no-padding\" [hidden]=\"token.tokenid == '0x00'\">\n      <ion-col class=\"title\">\n        Token Type\n      </ion-col>\n      <ion-col class=\"value\">\n        {{type}}\n      </ion-col>\n    </ion-item>\n    <ion-item color=\"none\" class=\"ion-no-padding\"  [hidden]=\"token.tokenid == '0x00' || !token.proof\">\n      <ion-col class=\"title\">\n        Proof\n      </ion-col>\n      <ion-col class=\"value\">\n        {{token.proof}}\n      </ion-col>\n    </ion-item>\n    <ion-item color=\"none\" class=\"ion-no-padding\" [hidden]=\"token.tokenid == '0x00' || !token.proof \">\n      <ion-col class=\"title\">\n        Validate Proof\n      </ion-col>\n      <ion-col class=\"value\">\n        <ion-button *ngIf=\"token.proof\" class=\"small-text\" size=\"small\" (click)=\"validateProof(token.tokenid)\">\n          Validate\n        </ion-button> \n      </ion-col>\n    </ion-item>   \n  </ion-list>\n  </div>\n</ion-content>\n"

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

module.exports = "ion-toolbar ion-title {\n  font-size: 18px;\n}\nion-toolbar ion-title ion-item:first-child {\n  --border-color: #001C32;\n  --border-width: 0px 0px 1px 0px;\n  margin-top: 12px;\n  margin-left: 4px;\n  margin-right: 10px;\n  font-size: 18px;\n  --min-height: 39px;\n  font-family: manrope-bold;\n  color: var(--ion-color-tertiary);\n  cursor: pointer;\n}\nion-title ion-item:hover {\n  opacity: 0.98;\n  background: none;\n  --background-hover: none;\n}\nion-item.breadcrumb {\n  --border-color: #91919D;\n  --border-width: 0px 0px 1px 0px;\n  margin-left: 23px;\n  margin-right: 30px;\n  --min-height: 39px;\n  font-family: manrope-medium;\n}\nion-back-button .button-native .button-inner ion-icon {\n  font-size: 1.2rem !important;\n}\nion-back-button:hover {\n  --background-hover: none;\n  --color: var(--ion-color-secondary);\n}\nion-item-divider {\n  background: var(--ion-m-background);\n}\nion-card-title .custom-icon {\n  max-height: 38px;\n  max-width: 38px;\n}\nion-list ion-item {\n  background-color: #FDFDFF;\n}\n.item .item-content {\n  background-color: transparent !important;\n}\nion-list {\n  background-color: transparent;\n  background: transparent;\n}\nion-list ion-item {\n  border: 1px solid #F0F0FA;\n  --border-color: #F0F0FA;\n}\nion-list ion-item ion-col {\n  margin-left: 13px;\n  margin-right: 20px;\n}\n.title {\n  font-family: manrope-semibold;\n  font-size: 16px;\n  float: left;\n  text-overflow: ellipsis;\n  max-width: inherit;\n  white-space: normal;\n  word-wrap: normal;\n}\n.value {\n  font-size: 16px;\n  font-family: manrope-regular;\n  text-align: right;\n  float: right;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  max-width: inherit;\n  overflow: hidden;\n}\n.copy {\n  text-decoration: underline;\n  cursor: pointer;\n  font-size: 0.8rem;\n}\n.body {\n  margin-right: 30px;\n  margin-left: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGlhc25lbXIvcHJvamVjdHMvV2FsbGV0L21vYmlsZS1hcHAtZnJvbnQtZW5kL2FwcC9zcmMvYXBwL3BhZ2VzL2JhbGFuY2Uvdmlldy10b2tlbnMvdmlldy10b2tlbnMucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9iYWxhbmNlL3ZpZXctdG9rZW5zL3ZpZXctdG9rZW5zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNFLGVBQUE7QUNBTjtBREVNO0VBQ0UsdUJBQUE7RUFDQSwrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxlQUFBO0FDQVI7QURJQTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtFQUNBLHdCQUFBO0FDREo7QURJQTtFQUNJLHVCQUFBO0VBQ0EsK0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtBQ0RKO0FESUE7RUFDSSw0QkFBQTtBQ0RKO0FER0E7RUFDSSx3QkFBQTtFQUNBLG1DQUFBO0FDQUo7QURFQTtFQUNJLG1DQUFBO0FDQ0o7QURDQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtBQ0VKO0FEQUE7RUFDSSx5QkFBQTtBQ0dKO0FEREE7RUFDSSx3Q0FBQTtBQ0lKO0FERkE7RUFDSSw2QkFBQTtFQUNBLHVCQUFBO0FDS0o7QURIQTtFQUNJLHlCQUFBO0VBQ0EsdUJBQUE7QUNNSjtBREpBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtBQ09KO0FETEE7RUFDSSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUNRSjtBRE5BO0VBQ0ksZUFBQTtFQUNBLDRCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNTSjtBRFBBO0VBQ0ksMEJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNVSjtBRFJBO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtBQ1dKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYmFsYW5jZS92aWV3LXRva2Vucy92aWV3LXRva2Vucy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhciB7XG4gICAgaW9uLXRpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgIFxuICAgICAgaW9uLWl0ZW06Zmlyc3QtY2hpbGQge1xuICAgICAgICAtLWJvcmRlci1jb2xvcjogIzAwMUMzMjtcbiAgICAgICAgLS1ib3JkZXItd2lkdGg6IDBweCAwcHggMXB4IDBweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMTJweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDRweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIC0tbWluLWhlaWdodDogMzlweDtcbiAgICAgICAgZm9udC1mYW1pbHk6IG1hbnJvcGUtYm9sZDtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeSk7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIH1cbiAgfVxufVxuaW9uLXRpdGxlIGlvbi1pdGVtOmhvdmVyIHtcbiAgICBvcGFjaXR5OiAwLjk4O1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgLS1iYWNrZ3JvdW5kLWhvdmVyOiBub25lO1xufVxuXG5pb24taXRlbS5icmVhZGNydW1iIHtcbiAgICAtLWJvcmRlci1jb2xvcjogIzkxOTE5RDtcbiAgICAtLWJvcmRlci13aWR0aDogMHB4IDBweCAxcHggMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAyM3B4O1xuICAgIG1hcmdpbi1yaWdodDogMzBweDtcbiAgICAtLW1pbi1oZWlnaHQ6IDM5cHg7XG4gICAgZm9udC1mYW1pbHk6IG1hbnJvcGUtbWVkaXVtO1xufVxuXG5pb24tYmFjay1idXR0b24gLmJ1dHRvbi1uYXRpdmUgLmJ1dHRvbi1pbm5lciBpb24taWNvbiB7XG4gICAgZm9udC1zaXplOiAxLjJyZW0haW1wb3J0YW50O1xufVxuaW9uLWJhY2stYnV0dG9uOmhvdmVyIHtcbiAgICAtLWJhY2tncm91bmQtaG92ZXI6IG5vbmU7XG4gICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG59XG5pb24taXRlbS1kaXZpZGVyIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tbS1iYWNrZ3JvdW5kKTtcbn1cbmlvbi1jYXJkLXRpdGxlIC5jdXN0b20taWNvbiB7XG4gICAgbWF4LWhlaWdodDogMzhweDtcbiAgICBtYXgtd2lkdGg6IDM4cHg7XG59XG5pb24tbGlzdCBpb24taXRlbSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZERkRGRjtcbn1cbi5pdGVtIC5pdGVtLWNvbnRlbnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIH1cbmlvbi1saXN0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbmlvbi1saXN0IGlvbi1pdGVtIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRjBGMEZBO1xuICAgIC0tYm9yZGVyLWNvbG9yOiAjRjBGMEZBO1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0gaW9uLWNvbCB7ICAgIFxuICAgIG1hcmdpbi1sZWZ0OiAxM3B4O1xuICAgIG1hcmdpbi1yaWdodDogMjBweDtcbn1cbi50aXRsZSB7XG4gICAgZm9udC1mYW1pbHk6IG1hbnJvcGUtc2VtaWJvbGQ7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIG1heC13aWR0aDogaW5oZXJpdDtcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICAgIHdvcmQtd3JhcDogbm9ybWFsO1xufVxuLnZhbHVlIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC1mYW1pbHk6IG1hbnJvcGUtcmVndWxhcjtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICBtYXgtd2lkdGg6IGluaGVyaXQ7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5jb3B5IHtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZm9udC1zaXplOiAwLjhyZW07XG59XG4uYm9keSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xufSIsImlvbi10b29sYmFyIGlvbi10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cbmlvbi10b29sYmFyIGlvbi10aXRsZSBpb24taXRlbTpmaXJzdC1jaGlsZCB7XG4gIC0tYm9yZGVyLWNvbG9yOiAjMDAxQzMyO1xuICAtLWJvcmRlci13aWR0aDogMHB4IDBweCAxcHggMHB4O1xuICBtYXJnaW4tdG9wOiAxMnB4O1xuICBtYXJnaW4tbGVmdDogNHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgLS1taW4taGVpZ2h0OiAzOXB4O1xuICBmb250LWZhbWlseTogbWFucm9wZS1ib2xkO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5KTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5pb24tdGl0bGUgaW9uLWl0ZW06aG92ZXIge1xuICBvcGFjaXR5OiAwLjk4O1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICAtLWJhY2tncm91bmQtaG92ZXI6IG5vbmU7XG59XG5cbmlvbi1pdGVtLmJyZWFkY3J1bWIge1xuICAtLWJvcmRlci1jb2xvcjogIzkxOTE5RDtcbiAgLS1ib3JkZXItd2lkdGg6IDBweCAwcHggMXB4IDBweDtcbiAgbWFyZ2luLWxlZnQ6IDIzcHg7XG4gIG1hcmdpbi1yaWdodDogMzBweDtcbiAgLS1taW4taGVpZ2h0OiAzOXB4O1xuICBmb250LWZhbWlseTogbWFucm9wZS1tZWRpdW07XG59XG5cbmlvbi1iYWNrLWJ1dHRvbiAuYnV0dG9uLW5hdGl2ZSAuYnV0dG9uLWlubmVyIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAxLjJyZW0gIWltcG9ydGFudDtcbn1cblxuaW9uLWJhY2stYnV0dG9uOmhvdmVyIHtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiBub25lO1xuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbn1cblxuaW9uLWl0ZW0tZGl2aWRlciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1tLWJhY2tncm91bmQpO1xufVxuXG5pb24tY2FyZC10aXRsZSAuY3VzdG9tLWljb24ge1xuICBtYXgtaGVpZ2h0OiAzOHB4O1xuICBtYXgtd2lkdGg6IDM4cHg7XG59XG5cbmlvbi1saXN0IGlvbi1pdGVtIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZERkRGRjtcbn1cblxuLml0ZW0gLml0ZW0tY29udGVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1saXN0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG5pb24tbGlzdCBpb24taXRlbSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNGMEYwRkE7XG4gIC0tYm9yZGVyLWNvbG9yOiAjRjBGMEZBO1xufVxuXG5pb24tbGlzdCBpb24taXRlbSBpb24tY29sIHtcbiAgbWFyZ2luLWxlZnQ6IDEzcHg7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cblxuLnRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IG1hbnJvcGUtc2VtaWJvbGQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBtYXgtd2lkdGg6IGluaGVyaXQ7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gIHdvcmQtd3JhcDogbm9ybWFsO1xufVxuXG4udmFsdWUge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtZmFtaWx5OiBtYW5yb3BlLXJlZ3VsYXI7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBmbG9hdDogcmlnaHQ7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBtYXgtd2lkdGg6IGluaGVyaXQ7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5jb3B5IHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAwLjhyZW07XG59XG5cbi5ib2R5IHtcbiAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xuICBtYXJnaW4tbGVmdDogMjVweDtcbn0iXX0= */"

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
    constructor(route, api, toastController, balanceService) {
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
};
ViewTokensPage.ctorParameters = () => [
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
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
        _service_minima_api_service__WEBPACK_IMPORTED_MODULE_3__["MinimaApiService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
        _service_balance_service__WEBPACK_IMPORTED_MODULE_1__["BalanceService"]])
], ViewTokensPage);



/***/ })

}]);
//# sourceMappingURL=default~pages-balance-view-tokens-view-tokens-module~view-tokens-view-tokens-module-es2015.js.map