(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-balance-view-tokens-view-tokens-module~view-tokens-view-tokens-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/balance/view-tokens/view-tokens.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/balance/view-tokens/view-tokens.page.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header  class=\"ion-no-border\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/balance\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>{{ token.token }}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <ion-card>\r\n    <ion-card-header>\r\n      <ion-card-title>\r\n        <ion-avatar>\r\n          <img class=\"custom-icon\" *ngIf=\"token.tokenid !== '0x00' && token.icon.length == 0\" [src]=\"createIcon( token.tokenid )\"/>\r\n          <img class=\"custom-icon\" *ngIf=\"token.tokenid !== '0x00' && token.icon.length > 0\" [src]=\"token.icon\"/>\r\n          <img *ngIf=\"token.tokenid === '0x00'\" class=\"custom-icon\" alt=\"minima\" src=\"assets/minima-logo-box.svg\"> \r\n        </ion-avatar>        \r\n      </ion-card-title>\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n      <ion-label>\r\n        <h3>{{token.token}}</h3> \r\n        <p>{{token.description}}</p>\r\n      </ion-label>\r\n    </ion-card-content>\r\n    <ion-item-divider class=\"border-b\"></ion-item-divider>\r\n    <ion-list lines=\"none\">\r\n      <ion-list-header>\r\n        Token Details\r\n      </ion-list-header>\r\n      <ion-item>\r\n        <ion-col size-md=\"3\"  size-sm=\"6\" class=\"title\">\r\n          Name\r\n        </ion-col>\r\n        <ion-col class=\"value\">\r\n          {{token.token}}\r\n        </ion-col>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-col size-md=\"3\"  size-sm=\"6\" class=\"title\">\r\n          Token ID\r\n        <a class=\"copy\" (click)=\"copyToClipPWA(token.tokenid)\">\r\n          Copy \r\n        </a>\r\n        </ion-col>\r\n        <ion-col class=\"value\">\r\n          {{token.tokenid}}\r\n        </ion-col>\r\n      </ion-item>\r\n      <ion-item [hidden]=\"token.tokenid == '0x00'\">\r\n        <ion-col size-md=\"3\"  size-sm=\"6\" class=\"title\">\r\n          Coin ID\r\n        <a class=\"copy\" (click)=\"copyToClipPWA(token.coinid)\">\r\n          Copy \r\n        </a>\r\n        </ion-col>\r\n        <ion-col class=\"minima-numeric value\">\r\n          {{token.coinid}}\r\n        </ion-col>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-col size-md=\"3\"  size-sm=\"6\" class=\"title\">\r\n          Total Supply\r\n        </ion-col>\r\n        <ion-col class=\"minima-numeric value\">\r\n          {{token.total}}\r\n        </ion-col>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-col size-md=\"3\"  size-sm=\"6\" class=\"title\">\r\n          Confirmed Amount\r\n        </ion-col>\r\n        <ion-col class=\"minima-numeric value\">\r\n          {{token.confirmed}}\r\n        </ion-col>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-col size-md=\"3\"  size-sm=\"6\" class=\"title\">\r\n          Unconfirmed Amount\r\n        </ion-col>\r\n        <ion-col class=\"minima-numeric value\">\r\n          {{token.unconfirmed}}\r\n        </ion-col>\r\n      </ion-item>\r\n        <ion-item>\r\n        <ion-col size-md=\"3\" size-sm=\"6\" class=\"title\">\r\n          Sendable Amount\r\n        </ion-col>\r\n        <ion-col class=\"value minima-numeric\">\r\n          {{token.sendable}}\r\n        </ion-col>\r\n      </ion-item>\r\n        <ion-item>\r\n        <ion-col size-md=\"3\"  size-sm=\"6\" class=\"title\">\r\n          Mempool Amount\r\n        </ion-col>\r\n        <ion-col class=\"minima-numeric value\">\r\n          {{token.mempool}}\r\n        </ion-col>\r\n      </ion-item>\r\n      <ion-item [hidden]=\"token.tokenid == '0x00'\">\r\n        <ion-col size-md=\"3\"  size-sm=\"6\" class=\"title\">\r\n          Token Type\r\n        </ion-col>\r\n        <ion-col class=\"value\">\r\n          {{type}}\r\n        </ion-col>\r\n      </ion-item>\r\n      <ion-item  [hidden]=\"token.tokenid == '0x00' || !token.proof\">\r\n        <ion-col size-md=\"3\"  size-sm=\"6\" class=\"title\">\r\n          Proof\r\n        </ion-col>\r\n        <ion-col class=\"value\">\r\n          {{token.proof}}\r\n        </ion-col>\r\n      </ion-item>\r\n      <ion-item size-md=\"3\" size-sm=\"6\" [hidden]=\"token.tokenid == '0x00' || !token.proof \">\r\n        <ion-col class=\"title\">\r\n          Validate Proof\r\n        </ion-col>\r\n        <ion-col class=\"value\">\r\n          <ion-button *ngIf=\"token.proof\" class=\"small-text\" size=\"small\" (click)=\"validateProof(token.tokenid)\">\r\n            Validate\r\n          </ion-button> \r\n        </ion-col>\r\n      </ion-item>    \r\n    </ion-list>\r\n  </ion-card>\r\n</ion-content>\r\n"

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

module.exports = "ion-title {\n  font-family: manrope-bold;\n  width: inherit;\n  max-width: inherit;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  font-size: 1.2rem;\n  color: var(--ion-color-primary);\n  padding-top: 5%;\n}\n\nion-back-button .button-native .button-inner ion-icon {\n  font-size: 1.2rem !important;\n}\n\nion-back-button:hover {\n  --background-hover: none;\n  --color: var(--ion-color-secondary);\n}\n\nion-item-divider {\n  background: var(--ion-m-background);\n}\n\nion-card:hover {\n  background-color: --minima-color;\n  -webkit-transform: scale(1.01);\n          transform: scale(1.01);\n}\n\nion-card-title .custom-icon {\n  max-height: 75px;\n  max-width: 75px;\n}\n\nion-card-content {\n  text-align: center;\n  -webkit-box-pack: center !important;\n          justify-content: center !important;\n  align-content: center;\n  display: -webkit-box;\n  display: flex;\n  height: auto;\n  color: var(--ion-color-tertiary);\n}\n\nion-card-content h3 {\n  font-family: manrope-bold;\n  display: block;\n}\n\nion-card-content p {\n  font-family: manrope-light;\n}\n\nion-card-header {\n  text-align: center;\n  -webkit-box-pack: center !important;\n          justify-content: center !important;\n  align-content: center;\n  display: -webkit-box;\n  display: flex;\n  border-radius: 50px;\n  height: auto;\n}\n\nion-card-content {\n  margin-left: 5%;\n  margin-right: 5%;\n  white-space: normal;\n  overflow: auto;\n}\n\nion-list-header {\n  font-size: 1.2rem;\n  font-family: manrope-bold;\n}\n\n.title {\n  font-family: manrope-bold;\n  font-size: 1rem;\n  float: left;\n  text-overflow: ellipsis;\n  max-width: inherit;\n  white-space: normal;\n  word-wrap: normal;\n}\n\n.value {\n  font-family: manrope-light;\n  text-align: left;\n  float: left;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  max-width: inherit;\n  overflow: hidden;\n}\n\n.copy {\n  text-decoration: underline;\n  cursor: pointer;\n  font-size: 0.8rem;\n}\n\nion-item {\n  padding: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGlhc25lbXIvcHJvamVjdHMvV0FMTEVUL21vYmlsZS1hcHAtZnJvbnQtZW5kL2FwcC9zcmMvYXBwL3BhZ2VzL2JhbGFuY2Uvdmlldy10b2tlbnMvdmlldy10b2tlbnMucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9iYWxhbmNlL3ZpZXctdG9rZW5zL3ZpZXctdG9rZW5zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsK0JBQUE7RUFDQSxlQUFBO0FDQ0o7O0FEQ0E7RUFDSSw0QkFBQTtBQ0VKOztBREFBO0VBQ0ksd0JBQUE7RUFDQSxtQ0FBQTtBQ0dKOztBRERBO0VBQ0ksbUNBQUE7QUNJSjs7QURGQTtFQUNJLGdDQUFBO0VBQ0EsOEJBQUE7VUFBQSxzQkFBQTtBQ0tKOztBREhBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0FDTUo7O0FESkE7RUFDSSxrQkFBQTtFQUNBLG1DQUFBO1VBQUEsa0NBQUE7RUFDQSxxQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLFlBQUE7RUFDQSxnQ0FBQTtBQ09KOztBRExBO0VBQ0kseUJBQUE7RUFDQSxjQUFBO0FDUUo7O0FETkE7RUFDSSwwQkFBQTtBQ1NKOztBRFBBO0VBQ0ksa0JBQUE7RUFDQSxtQ0FBQTtVQUFBLGtDQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUNVSjs7QURSQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQ1dKOztBRFRBO0VBQ0ksaUJBQUE7RUFDQSx5QkFBQTtBQ1lKOztBRFZBO0VBQ0kseUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FDYUo7O0FEWEE7RUFDSSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDY0o7O0FEWkE7RUFDSSwwQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ2VKOztBRGJBO0VBQ0ksVUFBQTtBQ2dCSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2JhbGFuY2Uvdmlldy10b2tlbnMvdmlldy10b2tlbnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRpdGxlIHtcclxuICAgIGZvbnQtZmFtaWx5OiBtYW5yb3BlLWJvbGQ7XHJcbiAgICB3aWR0aDogaW5oZXJpdDtcclxuICAgIG1heC13aWR0aDogaW5oZXJpdDtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgIHBhZGRpbmctdG9wOiA1JTsgXHJcbn1cclxuaW9uLWJhY2stYnV0dG9uIC5idXR0b24tbmF0aXZlIC5idXR0b24taW5uZXIgaW9uLWljb24ge1xyXG4gICAgZm9udC1zaXplOiAxLjJyZW0haW1wb3J0YW50O1xyXG59XHJcbmlvbi1iYWNrLWJ1dHRvbjpob3ZlciB7XHJcbiAgICAtLWJhY2tncm91bmQtaG92ZXI6IG5vbmU7XHJcbiAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcclxufVxyXG5pb24taXRlbS1kaXZpZGVyIHtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1tLWJhY2tncm91bmQpO1xyXG59XHJcbmlvbi1jYXJkOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IC0tbWluaW1hLWNvbG9yO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAxKTtcclxufVxyXG5pb24tY2FyZC10aXRsZSAuY3VzdG9tLWljb24ge1xyXG4gICAgbWF4LWhlaWdodDogNzVweDtcclxuICAgIG1heC13aWR0aDogNzVweDtcclxufVxyXG5pb24tY2FyZC1jb250ZW50IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeSk7XHJcbn1cclxuaW9uLWNhcmQtY29udGVudCBoMyB7XHJcbiAgICBmb250LWZhbWlseTogbWFucm9wZS1ib2xkO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuaW9uLWNhcmQtY29udGVudCBwIHtcclxuICAgIGZvbnQtZmFtaWx5OiBtYW5yb3BlLWxpZ2h0O1xyXG59XHJcbmlvbi1jYXJkLWhlYWRlciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuaW9uLWNhcmQtY29udGVudCB7XHJcbiAgICBtYXJnaW4tbGVmdDogNSU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDUlO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcbmlvbi1saXN0LWhlYWRlciB7XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgIGZvbnQtZmFtaWx5OiBtYW5yb3BlLWJvbGQ7XHJcbn1cclxuLnRpdGxlIHtcclxuICAgIGZvbnQtZmFtaWx5OiBtYW5yb3BlLWJvbGQ7XHJcbiAgICBmb250LXNpemU6IDEuMHJlbTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICBtYXgtd2lkdGg6IGluaGVyaXQ7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG4gICAgd29yZC13cmFwOiBub3JtYWw7XHJcbn1cclxuLnZhbHVlIHtcclxuICAgIGZvbnQtZmFtaWx5OiBtYW5yb3BlLWxpZ2h0O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGZsb2F0OmxlZnQ7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICBtYXgtd2lkdGg6IGluaGVyaXQ7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbi5jb3B5IHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZm9udC1zaXplOiAwLjhyZW07XHJcbn1cclxuaW9uLWl0ZW0ge1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG4iLCJpb24tdGl0bGUge1xuICBmb250LWZhbWlseTogbWFucm9wZS1ib2xkO1xuICB3aWR0aDogaW5oZXJpdDtcbiAgbWF4LXdpZHRoOiBpbmhlcml0O1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIHBhZGRpbmctdG9wOiA1JTtcbn1cblxuaW9uLWJhY2stYnV0dG9uIC5idXR0b24tbmF0aXZlIC5idXR0b24taW5uZXIgaW9uLWljb24ge1xuICBmb250LXNpemU6IDEuMnJlbSAhaW1wb3J0YW50O1xufVxuXG5pb24tYmFjay1idXR0b246aG92ZXIge1xuICAtLWJhY2tncm91bmQtaG92ZXI6IG5vbmU7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xufVxuXG5pb24taXRlbS1kaXZpZGVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLW0tYmFja2dyb3VuZCk7XG59XG5cbmlvbi1jYXJkOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogLS1taW5pbWEtY29sb3I7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wMSk7XG59XG5cbmlvbi1jYXJkLXRpdGxlIC5jdXN0b20taWNvbiB7XG4gIG1heC1oZWlnaHQ6IDc1cHg7XG4gIG1heC13aWR0aDogNzVweDtcbn1cblxuaW9uLWNhcmQtY29udGVudCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IGF1dG87XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnkpO1xufVxuXG5pb24tY2FyZC1jb250ZW50IGgzIHtcbiAgZm9udC1mYW1pbHk6IG1hbnJvcGUtYm9sZDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbmlvbi1jYXJkLWNvbnRlbnQgcCB7XG4gIGZvbnQtZmFtaWx5OiBtYW5yb3BlLWxpZ2h0O1xufVxuXG5pb24tY2FyZC1oZWFkZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG5pb24tY2FyZC1jb250ZW50IHtcbiAgbWFyZ2luLWxlZnQ6IDUlO1xuICBtYXJnaW4tcmlnaHQ6IDUlO1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuaW9uLWxpc3QtaGVhZGVyIHtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGZvbnQtZmFtaWx5OiBtYW5yb3BlLWJvbGQ7XG59XG5cbi50aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBtYW5yb3BlLWJvbGQ7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBtYXgtd2lkdGg6IGluaGVyaXQ7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gIHdvcmQtd3JhcDogbm9ybWFsO1xufVxuXG4udmFsdWUge1xuICBmb250LWZhbWlseTogbWFucm9wZS1saWdodDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBtYXgtd2lkdGg6IGluaGVyaXQ7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5jb3B5IHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAwLjhyZW07XG59XG5cbmlvbi1pdGVtIHtcbiAgcGFkZGluZzogMDtcbn0iXX0= */"

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
        this.balanceService.data.subscribe((res) => {
            this.tokenArr = res;
            this.urlID = this.route.snapshot.paramMap.get("id");
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
    ngOnInit() { }
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
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _service_minima_api_service__WEBPACK_IMPORTED_MODULE_3__["MinimaApiService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _service_balance_service__WEBPACK_IMPORTED_MODULE_1__["BalanceService"]])
], ViewTokensPage);



/***/ })

}]);
//# sourceMappingURL=default~pages-balance-view-tokens-view-tokens-module~view-tokens-view-tokens-module-es2015.js.map