(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-balance-balance-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/balance/balance.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/balance/balance.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n      <ion-title color=\"primary\">\n        Balance\n      </ion-title>\n    </ion-toolbar>\n\n  </ion-header>\n\n  <ion-content>\n\n    <ion-card color=\"white\">\n      <ion-card-header color=\"white\">\n      </ion-card-header>\n  <ion-card-content>\n\n  <ion-icon style=\" font-size:2.0rem; padding-left:10px;\" name=\"card\" slot=\"start\" class=\"icon-head\"></ion-icon>\n\n  <ion-grid style=\"width: 100%;\" *ngFor=\"let token of tokenArr;\">\n    <ion-row>    \n      <ion-item-sliding>\n      <ion-item-options side=\"start\">\n      <ion-item-option class=\"receive-slide\" routerLink=\"/my-address\">Receive</ion-item-option>\n      <ion-item-option class=\"send-slide\" (click)=\"sendTokenOver(token.tokenid)\">Send</ion-item-option>\n      </ion-item-options>\n\n  <ion-item lines=\"full\">\n  <ion-col size=\"2\" slot=\"start\">\n  <ion-label class=\"logo-names\">\n    <ion-icon class=\"balance-token\" src=\"./assets/icon/minima.svg\"></ion-icon>\n    <ion-note class=\"balance-tokenname\"> {{ token.token }} </ion-note>\n  </ion-label>\n  </ion-col>\n\n  <ion-col size=\"3\" slot=\"end\" #balance>\n  <ion-label *ngIf=\"token.confirmed == token.sendable\" class=\"confirmed-amount\">\n    {{ token.confirmed }}\n  </ion-label>\n  <ion-label *ngIf=\"token.sendable != token.confirmed\" class=\"confirmed-amount\">\n    {{ token.confirmed +\"/\"+token.sendable }}\n  </ion-label>\n  </ion-col>\n\n  <ion-col *ngIf='token.unconfirmed !== 0' size=\"3\" slot=\"end\">\n  <ion-label class=\"unconfirmed-amount\" color=\"white\">\n    {{ token.unconfirmed }}\n  </ion-label>\n  </ion-col>\n\n  <ion-col *ngIf='token.mempool != 0' size=\"3\" slot=\"end\">\n  <ion-label class=\"unconfirmed-amount\" color=\"#92A8D1\">\n    {{ token.mempool }}\n  </ion-label>\n  </ion-col>\n  \n  </ion-item>\n\n  <ion-item-options side=\"end\">\n    <ion-item-option (click)=\"presentPopover($event, token.tokenid)\">Token ID</ion-item-option>\n  </ion-item-options>\n  </ion-item-sliding>\n    </ion-row>\n      </ion-grid>\n\n  \n\n  </ion-card-content>\n  </ion-card>\n  </ion-content>\n\n  <ion-footer>\n    <ion-toolbar>\n      <ion-buttons>\n        <ion-button class=\"action-btn\" shape=\"\" expand=\"block\" type=\"button\" (click)=\"giveMe50()\">\n          <ion-icon name=\"cash\" slot=\"start\"></ion-icon> Gimme 50\n        </ion-button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-footer>"

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

module.exports = "@media screen and (max-width: 320px) {\n  p {\n    font-size: 10px;\n  }\n}\n.send-slide {\n  background-color: #FF671E;\n}\nion-card {\n  --background: var(--ion-background-color, #f2f2f2);\n}\nion-footer ion-toolbar ion-buttons ion-button {\n  width: 100%;\n}\n.confirmed-label {\n  margin: auto;\n  font-size: 1rem;\n  font-weight: 300;\n  white-space: normal;\n}\n.confirmed-amount {\n  color: #00AAC7;\n  font-size: 1rem;\n  font-family: \"Aeonik-bold\";\n  white-space: normal;\n  text-align: right;\n}\n.unconfirmed-amount {\n  font-size: 1rem;\n  font-family: \"monospace\";\n  white-space: normal;\n  color: #9494b8;\n  text-align: right;\n}\n.logo-names {\n  font-size: 1rem;\n  font-weight: 300;\n  text-align: left;\n}\n.icon-head {\n  color: #1FB4CD;\n}\n.action-btn {\n  height: 72px;\n}\n.action-btn:hover {\n  height: 72px;\n}\n.action-btn:hover ion-icon {\n  font-size: large;\n}\n.balance-token {\n  font-size: 1.5rem;\n}\n.balance-tokenname {\n  position: absolute;\n  font-family: \"Aeonik-bold\";\n  text-transform: uppercase;\n  padding-top: 6px;\n  padding-left: 2px;\n}\n/** SKELETON CSS */\n.wrapper {\n  width: 250px;\n  overflow: hidden;\n}\n.skeleton-icon {\n  size: 0.5rem;\n}\n.skeleton-name {\n  width: 20%;\n}\n.skeleton-amount {\n  width: 5%;\n}\n.ios .skeleton-amount {\n  margin-left: 10%;\n}\n.ios .skeleton-name {\n  width: 20%;\n}\nion-grid:hover {\n  background: var(--ion-background-color, #f2f2f2);\n}\nion-row {\n  border-left: 2px solid #FF671E;\n  border-right: 2px solid #1FB4CD;\n}\n@media screen and (max-width: 900px) {\n  .skeleton-icon {\n    size: 0.5rem;\n  }\n\n  .skeleton-name {\n    width: 20%;\n  }\n\n  .skeleton-amount {\n    margin-left: 90%;\n    width: 5%;\n  }\n}\n.balance {\n  font-size: 12px;\n}\nion-col {\n  --ion-grid-columns: 0;\n}\nion-grid {\n  --ion-grid-width-sm: 240px;\n  --ion-grid-width-lg: 240px;\n  --ion-grid-column-padding: 2px;\n}\nion-card-content {\n  padding: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGlhcy9Qcm9qZWN0cy9taW5pbWFjb3JlL21vYmlsZS1hcHAtZnJvbnQtZW5kL2FwcC9zcmMvYXBwL3BhZ2VzL2JhbGFuY2UvYmFsYW5jZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2JhbGFuY2UvYmFsYW5jZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSTtJQUNJLGVBQUE7RUNDTjtBQUNGO0FERUE7RUFDRSx5QkFBQTtBQ0FGO0FER0E7RUFDSSxrREFBQTtBQ0FKO0FESUE7RUFDSSxXQUFBO0FDREo7QURJQztFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0RMO0FER0M7RUFDRyxjQUFBO0VBQ0EsZUFBQTtFQUNBLDBCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQ0FKO0FERUM7RUFDSSxlQUFBO0VBQ0Esd0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQ0NMO0FEQ0M7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ0VMO0FERUM7RUFDRyxjQUFBO0FDQ0o7QURDQztFQUNFLFlBQUE7QUNFSDtBREFFO0VBQ0UsWUFBQTtBQ0dKO0FEREk7RUFDRSxnQkFBQTtBQ0dOO0FEQ0U7RUFDSSxpQkFBQTtBQ0VOO0FEQUU7RUFDQyxrQkFBQTtFQUNBLDBCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDR0g7QURBRSxrQkFBQTtBQUNBO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0FDR0o7QURERTtFQUNFLFlBQUE7QUNJSjtBREZFO0VBQ0UsVUFBQTtBQ0tKO0FESEU7RUFDRSxTQUFBO0FDTUo7QURGRTtFQUNFLGdCQUFBO0FDS0o7QURIRTtFQUNFLFVBQUE7QUNNSjtBREhBO0VBQ0UsZ0RBQUE7QUNNRjtBREpBO0VBQ0UsOEJBQUE7RUFDQSwrQkFBQTtBQ09GO0FESkE7RUFDSTtJQUNFLFlBQUE7RUNPSjs7RURMRTtJQUNFLFVBQUE7RUNRSjs7RURORTtJQUNFLGdCQUFBO0lBQ0EsU0FBQTtFQ1NKO0FBQ0Y7QURORTtFQUNFLGVBQUE7QUNRSjtBREpBO0VBQ0UscUJBQUE7QUNPRjtBRExBO0VBQ0UsMEJBQUE7RUFDQSwwQkFBQTtFQUVBLDhCQUFBO0FDT0Y7QURIQTtFQUNFLFlBQUE7QUNNRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2JhbGFuY2UvYmFsYW5jZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMjBweCkge1xuICAgIHAge1xuICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgfVxufVxuXG4uc2VuZC1zbGlkZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRjY3MUU7XG59XG5cbmlvbi1jYXJkIHtcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZjJmMmYyKTtcblxufVxuXG5pb24tZm9vdGVyIGlvbi10b29sYmFyIGlvbi1idXR0b25zIGlvbi1idXR0b257XG4gICAgd2lkdGg6IDEwMCU7XG4gfVxuXG4gLmNvbmZpcm1lZC1sYWJlbHtcbiAgICAgbWFyZ2luOiBhdXRvO1xuICAgICBmb250LXNpemU6IDEuMHJlbTtcbiAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiB9XG4gLmNvbmZpcm1lZC1hbW91bnQge1xuICAgIGNvbG9yOiAjMDBBQUM3O1xuICAgIGZvbnQtc2l6ZTogMS4wcmVtO1xuICAgIGZvbnQtZmFtaWx5OiAnQWVvbmlrLWJvbGQnO1xuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gfVxuIC51bmNvbmZpcm1lZC1hbW91bnQge1xuICAgICBmb250LXNpemU6IDEuMHJlbTtcbiAgICAgZm9udC1mYW1pbHk6ICdtb25vc3BhY2UnO1xuICAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICAgICBjb2xvcjogIzk0OTRiODtcbiAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gfVxuIC5sb2dvLW5hbWVzIHtcbiAgICAgZm9udC1zaXplOiAxLjByZW07XG4gICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgIFxuIH1cblxuIC5pY29uLWhlYWR7XG4gICAgY29sb3I6ICMxRkI0Q0Q7XG4gfVxuIC5hY3Rpb24tYnRuIHtcbiAgIGhlaWdodDogNzJweDtcbiB9XG4gIC5hY3Rpb24tYnRuOmhvdmVyIHtcbiAgICBoZWlnaHQ6IDcycHg7XG5cbiAgICBpb24taWNvbiB7XG4gICAgICBmb250LXNpemU6IGxhcmdlO1xuICAgIH1cbiAgfVxuXG4gIC5iYWxhbmNlLXRva2VuIHtcbiAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICB9XG4gIC5iYWxhbmNlLXRva2VubmFtZSB7XG4gICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICBmb250LWZhbWlseTogJ0Flb25pay1ib2xkJyA7XG4gICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgcGFkZGluZy10b3A6IDZweDtcbiAgIHBhZGRpbmctbGVmdDogMnB4O1xuICB9XG5cbiAgLyoqIFNLRUxFVE9OIENTUyAqL1xuICAud3JhcHBlciB7XG4gICAgd2lkdGg6IDI1MHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cbiAgLnNrZWxldG9uLWljb24ge1xuICAgIHNpemU6IDAuNXJlbTtcbiAgfVxuICAuc2tlbGV0b24tbmFtZSB7XG4gICAgd2lkdGg6IDIwJTtcbiAgfVxuICAuc2tlbGV0b24tYW1vdW50IHtcbiAgICB3aWR0aDogNSU7XG4gIH1cblxuICAvL2lPUyBcbiAgLmlvcyAuc2tlbGV0b24tYW1vdW50IHtcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xuICB9XG4gIC5pb3MgLnNrZWxldG9uLW5hbWUge1xuICAgIHdpZHRoOiAyMCU7XG4gIH1cblxuaW9uLWdyaWQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwgI2YyZjJmMik7XG59XG5pb24tcm93IHtcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjRkY2NzFFO1xuICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAjMUZCNENEO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCkge1xuICAgIC5za2VsZXRvbi1pY29uIHtcbiAgICAgIHNpemU6IDAuNXJlbTtcbiAgICB9XG4gICAgLnNrZWxldG9uLW5hbWUge1xuICAgICAgd2lkdGg6IDIwJTtcbiAgICB9XG4gICAgLnNrZWxldG9uLWFtb3VudCB7XG4gICAgICBtYXJnaW4tbGVmdDogOTAlO1xuICAgICAgd2lkdGg6IDUlO1xuICAgIH1cbn1cbiBcbiAgLmJhbGFuY2Uge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgfVxuXG4gIC8vIGlvbi1jb2wgXG5pb24tY29sIHtcbiAgLS1pb24tZ3JpZC1jb2x1bW5zOiAwO1xufVxuaW9uLWdyaWQge1xuICAtLWlvbi1ncmlkLXdpZHRoLXNtOiAyNDBweDtcbiAgLS1pb24tZ3JpZC13aWR0aC1sZzogMjQwcHg7XG5cbiAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMnB4O1xuXG59XG5cbmlvbi1jYXJkLWNvbnRlbnQge1xuICBwYWRkaW5nOiA1cHg7XG59IiwiQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzIwcHgpIHtcbiAgcCB7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICB9XG59XG4uc2VuZC1zbGlkZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRjY3MUU7XG59XG5cbmlvbi1jYXJkIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwgI2YyZjJmMik7XG59XG5cbmlvbi1mb290ZXIgaW9uLXRvb2xiYXIgaW9uLWJ1dHRvbnMgaW9uLWJ1dHRvbiB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY29uZmlybWVkLWxhYmVsIHtcbiAgbWFyZ2luOiBhdXRvO1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG59XG5cbi5jb25maXJtZWQtYW1vdW50IHtcbiAgY29sb3I6ICMwMEFBQzc7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC1mYW1pbHk6IFwiQWVvbmlrLWJvbGRcIjtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi51bmNvbmZpcm1lZC1hbW91bnQge1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtZmFtaWx5OiBcIm1vbm9zcGFjZVwiO1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICBjb2xvcjogIzk0OTRiODtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5sb2dvLW5hbWVzIHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogMzAwO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uaWNvbi1oZWFkIHtcbiAgY29sb3I6ICMxRkI0Q0Q7XG59XG5cbi5hY3Rpb24tYnRuIHtcbiAgaGVpZ2h0OiA3MnB4O1xufVxuXG4uYWN0aW9uLWJ0bjpob3ZlciB7XG4gIGhlaWdodDogNzJweDtcbn1cbi5hY3Rpb24tYnRuOmhvdmVyIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiBsYXJnZTtcbn1cblxuLmJhbGFuY2UtdG9rZW4ge1xuICBmb250LXNpemU6IDEuNXJlbTtcbn1cblxuLmJhbGFuY2UtdG9rZW5uYW1lIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBmb250LWZhbWlseTogXCJBZW9uaWstYm9sZFwiO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBwYWRkaW5nLXRvcDogNnB4O1xuICBwYWRkaW5nLWxlZnQ6IDJweDtcbn1cblxuLyoqIFNLRUxFVE9OIENTUyAqL1xuLndyYXBwZXIge1xuICB3aWR0aDogMjUwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5za2VsZXRvbi1pY29uIHtcbiAgc2l6ZTogMC41cmVtO1xufVxuXG4uc2tlbGV0b24tbmFtZSB7XG4gIHdpZHRoOiAyMCU7XG59XG5cbi5za2VsZXRvbi1hbW91bnQge1xuICB3aWR0aDogNSU7XG59XG5cbi5pb3MgLnNrZWxldG9uLWFtb3VudCB7XG4gIG1hcmdpbi1sZWZ0OiAxMCU7XG59XG5cbi5pb3MgLnNrZWxldG9uLW5hbWUge1xuICB3aWR0aDogMjAlO1xufVxuXG5pb24tZ3JpZDpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZjJmMmYyKTtcbn1cblxuaW9uLXJvdyB7XG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgI0ZGNjcxRTtcbiAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgIzFGQjRDRDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTAwcHgpIHtcbiAgLnNrZWxldG9uLWljb24ge1xuICAgIHNpemU6IDAuNXJlbTtcbiAgfVxuXG4gIC5za2VsZXRvbi1uYW1lIHtcbiAgICB3aWR0aDogMjAlO1xuICB9XG5cbiAgLnNrZWxldG9uLWFtb3VudCB7XG4gICAgbWFyZ2luLWxlZnQ6IDkwJTtcbiAgICB3aWR0aDogNSU7XG4gIH1cbn1cbi5iYWxhbmNlIHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG5pb24tY29sIHtcbiAgLS1pb24tZ3JpZC1jb2x1bW5zOiAwO1xufVxuXG5pb24tZ3JpZCB7XG4gIC0taW9uLWdyaWQtd2lkdGgtc206IDI0MHB4O1xuICAtLWlvbi1ncmlkLXdpZHRoLWxnOiAyNDBweDtcbiAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMnB4O1xufVxuXG5pb24tY2FyZC1jb250ZW50IHtcbiAgcGFkZGluZzogNXB4O1xufSJdfQ== */"

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








let BalancePage = class BalancePage {
    constructor(service, api, alertController, popoverController, ref, route) {
        this.service = service;
        this.api = api;
        this.alertController = alertController;
        this.popoverController = popoverController;
        this.ref = ref;
        this.route = route;
        this.tokenArr = [];
        this.tokenSpoof = [];
        // - vars
        this.lastJSON = '';
        this.host = '';
        this.MINI_TOKENID = '0x00';
    }
    ionViewWillEnter() {
        this.pullInTokens(); // subscribes & polls balance
        window.addEventListener('MinimaEvent', (evt) => {
            // Event connection success
            if (evt.detail.event === 'newbalance') {
                this.pullInTokens();
            }
        });
    }
    ngOnInit() { }
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
    // currently unavailable
    doRefresh(event) {
        // setTimeout( () => {
        //   event.target.complete();
        //   console.log('refreshing completed.');
        // }, 1000);
    }
    presentPopover(ev, id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log("id taken: " + id);
            const popover = yield this.popoverController.create({
                component: _components_pop_over_pop_over_component__WEBPACK_IMPORTED_MODULE_5__["PopOverComponent"],
                event: ev,
                cssClass: 'balance-popover',
                translucent: false,
                componentProps: { tokenid: id },
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
                        total: element.total,
                        confirmed: tempConfirmed,
                        unconfirmed: tempUnconfirmed,
                        mempool: element.mempool,
                        sendable: element.sendable
                    });
                    // add Minima always to the top
                    if (element.tokenid === this.MINI_TOKENID) {
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
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }
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
        _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
], BalancePage);



/***/ })

}]);
//# sourceMappingURL=pages-balance-balance-module-es2015.js.map