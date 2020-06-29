(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-balance-balance-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/balance/balance.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/balance/balance.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n      <ion-title color=\"primary\">\n        Balance\n      </ion-title>\n    </ion-toolbar>\n\n  </ion-header>\n\n  <ion-content>\n\n  <ion-card color=\"white\">\n      <ion-card-header color=\"white\">\n      </ion-card-header>\n  <ion-card-content>\n\n  <ion-grid style=\"width: 100%;\" *ngFor=\"let token of tokenArr;\">\n    <ion-row>    \n      <ion-item-sliding>\n      <ion-item-options side=\"start\">\n      <ion-item-option class=\"receive-slide\" routerLink=\"/my-address\">Receive</ion-item-option>\n      <ion-item-option class=\"send-slide\" (click)=\"sendTokenOver(token.tokenid)\">Send</ion-item-option>\n      </ion-item-options>\n\n  <!-- TOKENS ONLY -->\n  <ion-item lines=\"full\" \n            (click)=\"presentTokenDescr(token.tokenid, token.token, token.description,\n                                      token.icon, token.proof, token.total, token.script,\n                                      token.coinid, token.totalamount, token.scale, token.confirmed,\n                                      token.unconfirmed, token.mempool, token.sendable)\">\n    <ion-avatar slot=\"start\">\n      <img *ngIf=\"token.icon\" alt=\"Avatar\" class=\"balance-token\" src=\"{{ token.icon }}\">\n      <img *ngIf=\"!token.icon || token.icon.length <= 0\" alt=\"Avatar\"class=\"balance-token\" src=\"assets/icon/icon.png\">\n    </ion-avatar>\n\n  <ion-col size=\"3\" style=\"padding: 12px;\"slot=\"start\">\n\n    <ion-row *ngIf=\"token.token.length < 15\" style=\"border: none; padding-left: 5px;\">\n      <ion-text class=\"balance-name\"> {{ token.token}} </ion-text>\n    </ion-row>\n    <ion-row *ngIf=\"token.token.length >= 15\" style=\"border: none; padding-left: 5px;\">\n      <ion-text class=\"balance-name\"> {{ token.token.substring(0,15)+\"...\" }} </ion-text>\n    </ion-row>\n    <ion-row style=\"border:none; padding-left: 5px;\">\n      <ion-text class=\"abbr-name\"> {{ token.token.substring(0,3) }} </ion-text>\n    </ion-row>\n\n  </ion-col>\n\n  <ion-col size=\"3\" slot=\"end\" #balance>\n  <ion-label *ngIf=\"token.confirmed == token.sendable\" class=\"confirmed-amount\">\n    {{ token.confirmed }}\n  </ion-label>\n  <ion-label *ngIf=\"token.sendable != token.confirmed\" class=\"confirmed-amount\">\n    {{ token.confirmed +\"/\"+token.sendable }}\n  </ion-label>\n  </ion-col>\n\n  <ion-col *ngIf='token.unconfirmed !== 0' size=\"3\" slot=\"end\">\n  <ion-label class=\"unconfirmed-amount\" color=\"white\">\n    {{ token.unconfirmed }}\n  </ion-label>\n  </ion-col>\n\n  <ion-col *ngIf='token.mempool != 0' size=\"3\" slot=\"end\">\n  <ion-label class=\"unconfirmed-amount\" color=\"#92A8D1\">\n    {{ token.mempool }}\n  </ion-label>\n  </ion-col>\n  \n  </ion-item>\n\n\n  <ion-item-options side=\"end\">\n    <ion-item-option (click)=\"presentPopover($event, token.tokenid)\">Token ID</ion-item-option>\n  </ion-item-options>\n  </ion-item-sliding>\n    </ion-row>\n      </ion-grid>\n\n  \n\n  </ion-card-content>\n  </ion-card>\n  </ion-content>\n\n  <ion-footer>\n    <ion-toolbar>\n      <ion-buttons>\n        <ion-button class=\"action-btn\" shape=\"\" expand=\"block\" type=\"button\" (click)=\"giveMe50()\">\n          <ion-icon name=\"cash\" slot=\"start\"></ion-icon> Gimme 50\n        </ion-button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-footer>"

/***/ }),

/***/ "./src/app/pages/balance/balance.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/balance/balance.module.ts ***!
  \*************************************************/
/*! exports provided: BalancePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BalancePageModule", function() { return BalancePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _balance_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./balance.page */ "./src/app/pages/balance/balance.page.ts");







const routes = [
    {
        path: '',
        component: _balance_page__WEBPACK_IMPORTED_MODULE_6__["BalancePage"],
    }
];
let BalancePageModule = class BalancePageModule {
};
BalancePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_balance_page__WEBPACK_IMPORTED_MODULE_6__["BalancePage"]]
    })
], BalancePageModule);



/***/ }),

/***/ "./src/app/pages/balance/balance.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/balance/balance.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media screen and (max-width: 320px) {\n  p {\n    font-size: 10px;\n  }\n}\nion-item-sliding ion-item div .item-native {\n  padding-left: 0px;\n}\n.send-slide {\n  background-color: #FF671E;\n}\nion-card {\n  --background: var(--ion-background-color, #f2f2f2);\n}\nion-avatar {\n  width: 100% !important;\n  height: 100% !important;\n  max-width: 20px !important;\n  max-height: 150px !important;\n}\nimg {\n  padding: 0 !important;\n  border: 1px solid #f2f2f2;\n  max-width: 150px;\n  width: 120px;\n  border-radius: 50%;\n}\nion-footer ion-toolbar ion-buttons ion-button {\n  width: 100%;\n}\n.confirmed-label {\n  margin: auto;\n  font-size: 1rem;\n  font-weight: 300;\n  white-space: normal;\n}\n.confirmed-amount {\n  color: #00AAC7;\n  font-size: 1rem;\n  font-family: \"Aeonik-bold\";\n  white-space: normal;\n  text-align: right;\n}\n.unconfirmed-amount {\n  font-size: 1rem;\n  font-family: \"monospace\";\n  white-space: normal;\n  color: #9494b8;\n  text-align: right;\n}\n.logo-names {\n  font-size: 1rem;\n  font-weight: 300;\n  text-align: left;\n}\n.icon-head {\n  color: #1FB4CD;\n}\n.action-btn {\n  height: 72px;\n}\n.action-btn:hover {\n  height: 72px;\n}\n.action-btn:hover ion-icon {\n  font-size: large;\n}\n.balance-token {\n  float: left;\n  width: 35px;\n  padding-right: 5px;\n}\n.balance-tokenname {\n  float: right;\n  position: relative;\n  padding-top: 5px;\n  font-size: 17px;\n  font-weight: 1200;\n}\n.abbr-name {\n  font-style: oblique;\n  font-size: 12px;\n  font-weight: 400;\n  text-transform: uppercase;\n}\n/** SKELETON CSS */\n.wrapper {\n  width: 250px;\n  overflow: hidden;\n}\n.skeleton-icon {\n  size: 0.5rem;\n}\n.skeleton-name {\n  width: 20%;\n}\n.skeleton-amount {\n  width: 5%;\n}\n.ios .skeleton-amount {\n  margin-left: 10%;\n}\n.ios .skeleton-name {\n  width: 20%;\n}\nion-grid:hover {\n  background: var(--ion-background-color, #f2f2f2);\n}\nion-row {\n  border-left: 2px solid #FF671E;\n  border-right: 2px solid #1FB4CD;\n}\n@media screen and (max-width: 900px) {\n  .skeleton-icon {\n    size: 0.5rem;\n  }\n\n  .skeleton-name {\n    width: 20%;\n  }\n\n  .skeleton-amount {\n    margin-left: 90%;\n    width: 5%;\n  }\n}\n.balance {\n  font-size: 12px;\n}\nion-col {\n  --ion-grid-columns: 0;\n}\nion-grid {\n  --ion-grid-width-sm: 240px;\n  --ion-grid-width-lg: 240px;\n  --ion-grid-column-padding: 2px;\n}\nion-card-header {\n  --background: var(--ion-background-color, #f2f2f2);\n  background: -webkit-gradient(linear, left top, left bottom, from(var(--ion-background-color, #fff)), to(var(--ion-background-color, #f2f2f2))) !important;\n  background: linear-gradient(to bottom, var(--ion-background-color, #fff) 0%, var(--ion-background-color, #f2f2f2) 100%) !important;\n}\nion-card-content {\n  padding: 5px;\n  --background: var(--ion-background-color, #f2f2f2);\n  background: -webkit-gradient(linear, left top, left bottom, from(var(--ion-background-color, #fff)), to(var(--ion-background-color, #f2f2f2))) !important;\n  background: linear-gradient(to bottom, var(--ion-background-color, #fff) 0%, var(--ion-background-color, #f2f2f2) 100%) !important;\n}\n.tokenDescr-modal .modal-wrapper {\n  width: 1500px;\n  height: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGlhcy9Qcm9qZWN0cy9taW5pbWFjb3JlL21vYmlsZS1hcHAtZnJvbnQtZW5kL2FwcC9zcmMvYXBwL3BhZ2VzL2JhbGFuY2UvYmFsYW5jZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2JhbGFuY2UvYmFsYW5jZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSTtJQUNJLGVBQUE7RUNDTjtBQUNGO0FERUE7RUFDRSxpQkFBQTtBQ0FGO0FER0E7RUFDRSx5QkFBQTtBQ0FGO0FER0E7RUFDSSxrREFBQTtBQ0FKO0FER0E7RUFDRSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsMEJBQUE7RUFDQSw0QkFBQTtBQ0FGO0FERUE7RUFDRSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNDRjtBREVBO0VBQ0ksV0FBQTtBQ0NKO0FERUM7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNDTDtBRENDO0VBQ0csY0FBQTtFQUNBLGVBQUE7RUFDQSwwQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUNFSjtBREFDO0VBQ0ksZUFBQTtFQUNBLHdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUNHTDtBRERDO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNJTDtBREFDO0VBQ0csY0FBQTtBQ0dKO0FEREM7RUFDRSxZQUFBO0FDSUg7QURGRTtFQUNFLFlBQUE7QUNLSjtBREhJO0VBQ0UsZ0JBQUE7QUNLTjtBRERFO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ0lKO0FERkU7RUFDQyxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0tIO0FESEU7RUFDRSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FDTUo7QURIRSxrQkFBQTtBQUNBO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0FDTUo7QURKRTtFQUNFLFlBQUE7QUNPSjtBRExFO0VBQ0UsVUFBQTtBQ1FKO0FETkU7RUFDRSxTQUFBO0FDU0o7QURMRTtFQUNFLGdCQUFBO0FDUUo7QURORTtFQUNFLFVBQUE7QUNTSjtBRE5BO0VBQ0UsZ0RBQUE7QUNTRjtBRFBBO0VBQ0UsOEJBQUE7RUFDQSwrQkFBQTtBQ1VGO0FEUEE7RUFDSTtJQUNFLFlBQUE7RUNVSjs7RURSRTtJQUNFLFVBQUE7RUNXSjs7RURURTtJQUNFLGdCQUFBO0lBQ0EsU0FBQTtFQ1lKO0FBQ0Y7QURUQTtFQUNFLGVBQUE7QUNXRjtBRFBBO0VBQ0UscUJBQUE7QUNVRjtBRFJBO0VBQ0UsMEJBQUE7RUFDQSwwQkFBQTtFQUVBLDhCQUFBO0FDVUY7QURQQTtFQUNFLGtEQUFBO0VBQ0EseUpBQUE7RUFBQSxrSUFBQTtBQ1VGO0FEUkE7RUFDRSxZQUFBO0VBRUEsa0RBQUE7RUFDQSx5SkFBQTtFQUFBLGtJQUFBO0FDVUY7QUROQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0FDU0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9iYWxhbmNlL2JhbGFuY2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzIwcHgpIHtcbiAgICBwIHtcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgIH1cbn1cblxuaW9uLWl0ZW0tc2xpZGluZyBpb24taXRlbSBkaXYgLml0ZW0tbmF0aXZlIHtcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XG59XG5cbi5zZW5kLXNsaWRlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGNjcxRTtcbn1cblxuaW9uLWNhcmQge1xuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsICNmMmYyZjIpO1xufVxuXG5pb24tYXZhdGFyIHtcbiAgd2lkdGg6MTAwJSAhaW1wb3J0YW50OyAgXG4gIGhlaWdodCA6IDEwMCUgIWltcG9ydGFudDsgIFxuICBtYXgtd2lkdGg6IDIwcHggIWltcG9ydGFudDsgIC8vYW55IHNpemVcbiAgbWF4LWhlaWdodDogMTUwcHggIWltcG9ydGFudDsgLy9hbnkgc2l6ZSBcbn1cbmltZyB7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2YyZjJmMjtcbiAgbWF4LXdpZHRoOiAxNTBweDtcbiAgd2lkdGg6IDEyMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbmlvbi1mb290ZXIgaW9uLXRvb2xiYXIgaW9uLWJ1dHRvbnMgaW9uLWJ1dHRvbntcbiAgICB3aWR0aDogMTAwJTtcbiB9XG5cbiAuY29uZmlybWVkLWxhYmVse1xuICAgICBtYXJnaW46IGF1dG87XG4gICAgIGZvbnQtc2l6ZTogMS4wcmVtO1xuICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuIH1cbiAuY29uZmlybWVkLWFtb3VudCB7XG4gICAgY29sb3I6ICMwMEFBQzc7XG4gICAgZm9udC1zaXplOiAxLjByZW07XG4gICAgZm9udC1mYW1pbHk6ICdBZW9uaWstYm9sZCc7XG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiB9XG4gLnVuY29uZmlybWVkLWFtb3VudCB7XG4gICAgIGZvbnQtc2l6ZTogMS4wcmVtO1xuICAgICBmb250LWZhbWlseTogJ21vbm9zcGFjZSc7XG4gICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gICAgIGNvbG9yOiAjOTQ5NGI4O1xuICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiB9XG4gLmxvZ28tbmFtZXMge1xuICAgICBmb250LXNpemU6IDEuMHJlbTtcbiAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgXG4gfVxuXG4gLmljb24taGVhZHtcbiAgICBjb2xvcjogIzFGQjRDRDtcbiB9XG4gLmFjdGlvbi1idG4ge1xuICAgaGVpZ2h0OiA3MnB4O1xuIH1cbiAgLmFjdGlvbi1idG46aG92ZXIge1xuICAgIGhlaWdodDogNzJweDtcblxuICAgIGlvbi1pY29uIHtcbiAgICAgIGZvbnQtc2l6ZTogbGFyZ2U7XG4gICAgfVxuICB9XG5cbiAgLmJhbGFuY2UtdG9rZW4ge1xuICAgIGZsb2F0OmxlZnQ7XG4gICAgd2lkdGg6IDM1cHg7XG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xuICB9XG4gIC5iYWxhbmNlLXRva2VubmFtZSB7XG4gICBmbG9hdDpyaWdodDtcbiAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgIHBhZGRpbmctdG9wOiA1cHg7XG4gICBmb250LXNpemU6IDE3cHg7XG4gICBmb250LXdlaWdodDogMTIwMDtcbiAgfVxuICAuYWJici1uYW1lIHtcbiAgICBmb250LXN0eWxlOiBvYmxpcXVlO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICB9XG5cbiAgLyoqIFNLRUxFVE9OIENTUyAqL1xuICAud3JhcHBlciB7XG4gICAgd2lkdGg6IDI1MHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cbiAgLnNrZWxldG9uLWljb24ge1xuICAgIHNpemU6IDAuNXJlbTtcbiAgfVxuICAuc2tlbGV0b24tbmFtZSB7XG4gICAgd2lkdGg6IDIwJTtcbiAgfVxuICAuc2tlbGV0b24tYW1vdW50IHtcbiAgICB3aWR0aDogNSU7XG4gIH1cblxuICAvL2lPUyBcbiAgLmlvcyAuc2tlbGV0b24tYW1vdW50IHtcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xuICB9XG4gIC5pb3MgLnNrZWxldG9uLW5hbWUge1xuICAgIHdpZHRoOiAyMCU7XG4gIH1cblxuaW9uLWdyaWQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwgI2YyZjJmMik7XG59XG5pb24tcm93IHtcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjRkY2NzFFO1xuICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAjMUZCNENEO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCkge1xuICAgIC5za2VsZXRvbi1pY29uIHtcbiAgICAgIHNpemU6IDAuNXJlbTtcbiAgICB9XG4gICAgLnNrZWxldG9uLW5hbWUge1xuICAgICAgd2lkdGg6IDIwJTtcbiAgICB9XG4gICAgLnNrZWxldG9uLWFtb3VudCB7XG4gICAgICBtYXJnaW4tbGVmdDogOTAlO1xuICAgICAgd2lkdGg6IDUlO1xuICAgIH1cbn1cbiBcbi5iYWxhbmNlIHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4gIC8vIGlvbi1jb2wgXG5pb24tY29sIHtcbiAgLS1pb24tZ3JpZC1jb2x1bW5zOiAwO1xufVxuaW9uLWdyaWQge1xuICAtLWlvbi1ncmlkLXdpZHRoLXNtOiAyNDBweDtcbiAgLS1pb24tZ3JpZC13aWR0aC1sZzogMjQwcHg7XG5cbiAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMnB4O1xuXG59XG5pb24tY2FyZC1oZWFkZXIge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZjJmMmYyKTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZmZmKSAwJSwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsICNmMmYyZjIpIDEwMCUpICFpbXBvcnRhbnQ7XG59XG5pb24tY2FyZC1jb250ZW50IHtcbiAgcGFkZGluZzogNXB4O1xuXG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsICNmMmYyZjIpO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsICNmZmYpIDAlLCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwgI2YyZjJmMikgMTAwJSkgIWltcG9ydGFudDtcblxufVxuXG4udG9rZW5EZXNjci1tb2RhbCAubW9kYWwtd3JhcHBlcntcbiAgd2lkdGg6IDE1MDBweDtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuIiwiQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzIwcHgpIHtcbiAgcCB7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICB9XG59XG5pb24taXRlbS1zbGlkaW5nIGlvbi1pdGVtIGRpdiAuaXRlbS1uYXRpdmUge1xuICBwYWRkaW5nLWxlZnQ6IDBweDtcbn1cblxuLnNlbmQtc2xpZGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY2NzFFO1xufVxuXG5pb24tY2FyZCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsICNmMmYyZjIpO1xufVxuXG5pb24tYXZhdGFyIHtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG4gIG1heC13aWR0aDogMjBweCAhaW1wb3J0YW50O1xuICBtYXgtaGVpZ2h0OiAxNTBweCAhaW1wb3J0YW50O1xufVxuXG5pbWcge1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmMmYyZjI7XG4gIG1heC13aWR0aDogMTUwcHg7XG4gIHdpZHRoOiAxMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG5pb24tZm9vdGVyIGlvbi10b29sYmFyIGlvbi1idXR0b25zIGlvbi1idXR0b24ge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNvbmZpcm1lZC1sYWJlbCB7XG4gIG1hcmdpbjogYXV0bztcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogMzAwO1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xufVxuXG4uY29uZmlybWVkLWFtb3VudCB7XG4gIGNvbG9yOiAjMDBBQUM3O1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtZmFtaWx5OiBcIkFlb25pay1ib2xkXCI7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4udW5jb25maXJtZWQtYW1vdW50IHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LWZhbWlseTogXCJtb25vc3BhY2VcIjtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgY29sb3I6ICM5NDk0Yjg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4ubG9nby1uYW1lcyB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLmljb24taGVhZCB7XG4gIGNvbG9yOiAjMUZCNENEO1xufVxuXG4uYWN0aW9uLWJ0biB7XG4gIGhlaWdodDogNzJweDtcbn1cblxuLmFjdGlvbi1idG46aG92ZXIge1xuICBoZWlnaHQ6IDcycHg7XG59XG4uYWN0aW9uLWJ0bjpob3ZlciBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogbGFyZ2U7XG59XG5cbi5iYWxhbmNlLXRva2VuIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiAzNXB4O1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG59XG5cbi5iYWxhbmNlLXRva2VubmFtZSB7XG4gIGZsb2F0OiByaWdodDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLXRvcDogNXB4O1xuICBmb250LXNpemU6IDE3cHg7XG4gIGZvbnQtd2VpZ2h0OiAxMjAwO1xufVxuXG4uYWJici1uYW1lIHtcbiAgZm9udC1zdHlsZTogb2JsaXF1ZTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4vKiogU0tFTEVUT04gQ1NTICovXG4ud3JhcHBlciB7XG4gIHdpZHRoOiAyNTBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnNrZWxldG9uLWljb24ge1xuICBzaXplOiAwLjVyZW07XG59XG5cbi5za2VsZXRvbi1uYW1lIHtcbiAgd2lkdGg6IDIwJTtcbn1cblxuLnNrZWxldG9uLWFtb3VudCB7XG4gIHdpZHRoOiA1JTtcbn1cblxuLmlvcyAuc2tlbGV0b24tYW1vdW50IHtcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcbn1cblxuLmlvcyAuc2tlbGV0b24tbmFtZSB7XG4gIHdpZHRoOiAyMCU7XG59XG5cbmlvbi1ncmlkOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsICNmMmYyZjIpO1xufVxuXG5pb24tcm93IHtcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjRkY2NzFFO1xuICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAjMUZCNENEO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCkge1xuICAuc2tlbGV0b24taWNvbiB7XG4gICAgc2l6ZTogMC41cmVtO1xuICB9XG5cbiAgLnNrZWxldG9uLW5hbWUge1xuICAgIHdpZHRoOiAyMCU7XG4gIH1cblxuICAuc2tlbGV0b24tYW1vdW50IHtcbiAgICBtYXJnaW4tbGVmdDogOTAlO1xuICAgIHdpZHRoOiA1JTtcbiAgfVxufVxuLmJhbGFuY2Uge1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbmlvbi1jb2wge1xuICAtLWlvbi1ncmlkLWNvbHVtbnM6IDA7XG59XG5cbmlvbi1ncmlkIHtcbiAgLS1pb24tZ3JpZC13aWR0aC1zbTogMjQwcHg7XG4gIC0taW9uLWdyaWQtd2lkdGgtbGc6IDI0MHB4O1xuICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAycHg7XG59XG5cbmlvbi1jYXJkLWhlYWRlciB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsICNmMmYyZjIpO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwgI2ZmZikgMCUsIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZjJmMmYyKSAxMDAlKSAhaW1wb3J0YW50O1xufVxuXG5pb24tY2FyZC1jb250ZW50IHtcbiAgcGFkZGluZzogNXB4O1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZjJmMmYyKTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsICNmZmYpIDAlLCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwgI2YyZjJmMikgMTAwJSkgIWltcG9ydGFudDtcbn1cblxuLnRva2VuRGVzY3ItbW9kYWwgLm1vZGFsLXdyYXBwZXIge1xuICB3aWR0aDogMTUwMHB4O1xuICBoZWlnaHQ6IGF1dG87XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/balance/balance.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/balance/balance.page.ts ***!
  \***********************************************/
/*! exports provided: BalancePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BalancePage", function() { return BalancePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _service_minima_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/minima-api.service */ "./src/app/service/minima-api.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _components_pop_over_pop_over_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/pop-over/pop-over.component */ "./src/app/components/pop-over/pop-over.component.ts");
/* harmony import */ var _service_balance_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../service/balance.service */ "./src/app/service/balance.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_token_descr_token_descr_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/token-descr/token-descr.component */ "./src/app/components/token-descr/token-descr.component.ts");









let BalancePage = class BalancePage {
    constructor(service, api, alertController, popoverController, ref, route, modalController) {
        this.service = service;
        this.api = api;
        this.alertController = alertController;
        this.popoverController = popoverController;
        this.ref = ref;
        this.route = route;
        this.modalController = modalController;
        this.tokenArr = [];
        this.tokenSpoof = [];
        // - vars
        this.lastJSON = '';
        this.host = '';
        this.MINIMA = '0x00';
    }
    ionViewWillEnter() {
        this.pullInTokens();
    }
    ngOnInit() {
        window.addEventListener('MinimaEvent', (evt) => {
            // Event connection success
            if (evt.detail.event === 'newbalance') {
                this.pullInTokens();
            }
            else if (evt.detail.event === 'connected') {
                this.pullInTokens();
            }
        });
    }
    ionViewWillLeave() {
        this.balanceSubscription.unsubscribe(); // unsubs
    }
    presentAlert(msg, header) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: header,
                message: msg,
                buttons: ['Cancel', 'Ok']
            });
            yield alert.present();
        });
    }
    sendTokenOver(id) {
        this.route.navigate(['/send-funds/' + id]);
    }
    giveMe50() {
        this.service.giveMe50().subscribe((res) => {
            if (res.status === true) {
                this.pullInTokens();
                setTimeout(() => {
                    this.presentAlert('A transfer of 50 is on the way...', 'Minima');
                }, 600);
            }
            else if (res.status === false) {
                this.presentAlert(res.message + '!', 'Unsuccessful');
            }
        });
    }
    /** Async Pop ups */
    /** Tokens
   *
  tokenid?: string;
  token: string;
  description: string;
  icon: string;
  proof: string;
  total: string;
  script: string;
  coinid: string;
  totalamount: number;
  scale: string;
  confirmed: number;
  unconfirmed: any;
  mempool: string;
  sendable: string;
   */
    presentTokenDescr(id, token, descr, icon, proof, total, script, coinid, totalamnt, scale, conf, unconf, memp, sendable) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _components_token_descr_token_descr_component__WEBPACK_IMPORTED_MODULE_8__["TokenDescrComponent"],
                cssClass: 'tokenDescr-modal',
                componentProps: {
                    'tokenid': id,
                    'name': token,
                    'description': descr,
                    'icon': icon,
                    'proof': proof,
                    'total': total,
                    'script': script,
                    'coinid': coinid,
                    'totalamount': totalamnt,
                    'scale': scale,
                    'confirmed': conf,
                    'unconfirmed': unconf,
                    'mempool': memp,
                    'sendable': sendable,
                }
            });
            return yield modal.present();
        });
    }
    presentPopover(ev, id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log("id taken: " + id);
            const popover = yield this.popoverController.create({
                component: _components_pop_over_pop_over_component__WEBPACK_IMPORTED_MODULE_5__["PopOverComponent"],
                event: ev,
                cssClass: 'balance-popover',
                translucent: false,
                componentProps: { 'tokenid': id },
            });
            return yield popover.present();
        });
    }
    pullArrLength() {
        this.service.getBalance().subscribe(res => {
            res.forEach(element => {
                this.tokenSpoof.push(element);
            });
        });
    }
    pullInTokens() {
        this.balanceSubscription = this.service.getBalance().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(responseData => {
            const tokenArr = [];
            for (const key in responseData) {
                if (responseData.hasOwnProperty(key)) {
                    let element = responseData[key];
                    // round up confirmed && unconfirmed
                    let tempConfirmed = (Math.round(element.confirmed * 1000) / 1000);
                    let tempUnconfirmed = (Math.round(element.unconfirmed * 1000) / 1000);
                    tokenArr.push({
                        tokenid: element.tokenid,
                        token: element.token,
                        description: element.description,
                        icon: element.icon,
                        proof: element.proof,
                        total: element.total,
                        script: element.script,
                        coinid: element.coinid,
                        totalamount: element.totalamount,
                        scale: element.scale,
                        confirmed: tempConfirmed,
                        unconfirmed: tempUnconfirmed,
                        mempool: element.mempool,
                        sendable: element.sendable
                    });
                    // add Minima always to the top
                    if (element.tokenid === this.MINIMA) {
                        tokenArr.pop(); // pop it
                        this.service.update(tokenArr, {
                            tokenid: element.tokenid,
                            token: element.token,
                            total: element.total,
                            confirmed: tempConfirmed,
                            unconfirmed: tempUnconfirmed,
                            mempool: element.mempool,
                            sendable: element.sendable
                        });
                    }
                }
            }
            return tokenArr;
        }))
            .subscribe(responseData => {
            //check if changed
            if (this.lastJSON !== JSON.stringify(responseData)) {
                this.tokenArr = [...responseData];
                this.lastJSON = JSON.stringify(responseData);
            }
        });
    }
};
BalancePage.ctorParameters = () => [
    { type: _service_balance_service__WEBPACK_IMPORTED_MODULE_6__["BalanceService"] },
    { type: _service_minima_api_service__WEBPACK_IMPORTED_MODULE_2__["MinimaApiService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('balance', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"])
], BalancePage.prototype, "balance", void 0);
BalancePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-balance',
        template: __webpack_require__(/*! raw-loader!./balance.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/balance/balance.page.html"),
        providers: [_service_balance_service__WEBPACK_IMPORTED_MODULE_6__["BalanceService"]],
        styles: [__webpack_require__(/*! ./balance.page.scss */ "./src/app/pages/balance/balance.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_balance_service__WEBPACK_IMPORTED_MODULE_6__["BalanceService"],
        _service_minima_api_service__WEBPACK_IMPORTED_MODULE_2__["MinimaApiService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"],
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"],
        _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]])
], BalancePage);



/***/ })

}]);
//# sourceMappingURL=pages-balance-balance-module-es2015.js.map