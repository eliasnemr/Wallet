(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-balance-balance-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/balance/balance.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/balance/balance.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-menu-button class=\"menu-icon\"></ion-menu-button>\n      </ion-buttons>\n      <ion-title class=\"large-text\">\n        Balance\n      </ion-title>\n    </ion-toolbar>\n\n  </ion-header>\n\n  <ion-content>\n\n  <ion-card color=\"white\">\n      <ion-card-header color=\"white\">\n      </ion-card-header>\n  <ion-card-content>\n\n  <ion-grid style=\"width: 100%;\" *ngFor=\"let token of tokenArr;\">\n    <ion-row>    \n      <ion-item-sliding>\n      <ion-item-options side=\"start\">\n      <ion-item-option class=\"receive-slide\" routerLink=\"/my-address\">Receive</ion-item-option>\n      <ion-item-option class=\"send-slide\" (click)=\"sendTokenOver(token.tokenid)\">Send</ion-item-option>\n      </ion-item-options>\n\n  <!-- TOKENS ONLY -->\n  <ion-item lines=\"full\" \n            (click)=\"presentTokenDescr(token.tokenid, token.token, token.description,\n                                      token.icon, token.proof, token.total, token.script,\n                                      token.coinid, token.totalamount, token.scale, token.confirmed,\n                                      token.unconfirmed, token.mempool, token.sendable)\">\n    <ion-avatar slot=\"start\">\n      <img *ngIf=\"token.icon\" alt=\"Avatar\" class=\"balance-token\" src=\"{{ token.icon }}\">\n      <img *ngIf=\"!token.icon || token.icon.length <= 0\" alt=\"Avatar\" class=\"balance-token\" src=\"assets/icon/icon.png\">\n    </ion-avatar>\n\n  <ion-col size=\"9\" style=\"padding: 12px;\" slot=\"start\">\n\n    <!-- if token name is shorter than 15 -->\n    <div *ngIf=\"token.token.length < 15\">\n      <ion-row style=\"border: none; padding-left: 5px;\">\n        <ion-text class=\"medium-text\"> {{ token.token}} </ion-text>\n      </ion-row>\n    </div>\n    <!-- if token name is longer than 15 and smaller than 30 -->   \n    <div *ngIf=\"token.token.length >= 15 && token.token.length < 30\" >\n      <ion-row style=\"border:none; padding-left: 5px;\">\n        <ion-text class=\"medium-text\"> {{ token.token.substring(0,15)+\"-\" }} </ion-text>\n      </ion-row>\n      <ion-row style=\"border:none; padding-left: 5px;\">\n        <ion-text class=\"small-text\"> {{ token.token.substring(15, 30) }} </ion-text>\n      </ion-row>\n    </div>\n    <!-- if token name is longer than 30 and smaller than 45 -->   \n    <div *ngIf=\"token.token.length >= 15 && token.token.length < 45\" >\n      <ion-row style=\"border:none; padding-left: 5px;\">\n        <ion-text class=\"medium-text\"> {{ token.token.substring(0,15)+\"-\" }} </ion-text>\n      </ion-row>\n      <ion-row style=\"border:none; padding-left: 5px;\">\n        <ion-text class=\"small-text\"> {{ token.token.substring(15, 30)+\"-\" }} </ion-text>\n      </ion-row>\n      <ion-row style=\"border:none; padding-left: 5px;\">\n        <ion-text class=\"smaller-text\"> {{ token.token.substring(30, 45) }} </ion-text>\n      </ion-row>\n    </div>\n    <!-- if token name is longer than 45... -->   \n    <div *ngIf=\"token.token.length >= 45\" >\n      <ion-row style=\"border:none; padding-left: 5px;\">\n        <ion-text class=\"medium-text\"> {{ token.token.substring(0,15)+\"-\" }} </ion-text>\n      </ion-row>\n      <ion-row style=\"border:none; padding-left: 5px;\">\n        <ion-text class=\"small-text\"> {{ token.token.substring(15, 30)+\"-\" }} </ion-text>\n      </ion-row>\n      <ion-row style=\"border:none; padding-left: 5px;\">\n        <ion-text class=\"smaller-text\"> {{ token.token.substring(30, 45)+\"...\" }} </ion-text>\n      </ion-row>\n    </div>\n    \n\n    <ion-row style=\"border:none; padding-left: 5px;\">\n      <ion-text class=\"abbr-name smaller-text\"> {{ token.token.substring(0,3) }} </ion-text>\n    </ion-row>\n\n  </ion-col>\n\n\n    <ion-col size=\"3\" slot=\"end\">\n\n      <ion-row style=\"border:none;\">\n        <span *ngIf=\"token.confirmed === token.sendable\" class=\"confirmed-amount medium-text\">{{ token.confirmed }}</span>\n        <span *ngIf=\"token.confirmed !== token.sendable\" class=\"confirmed-amount medium-text\">{{ token.confirmed +\"/\"+token.sendable }}</span>\n      </ion-row>\n\n      <ion-row *ngIf=\"token.unconfirmed !== 0\" style=\"border:none;\">\n        <span class=\"unconfirmed-amount medium-text\">\n          {{ token.unconfirmed }}\n        </span>\n      </ion-row>\n\n      <ion-row *ngIf=\"token.mempool === 0\" style=\"border:none;\">\n        <span class=\"unconfirmed-amount medium-text\">\n          {{ token.mempool }}\n        </span>\n      </ion-row>\n\n    </ion-col>\n\n  \n  </ion-item>\n\n\n  <ion-item-options side=\"end\">\n    <ion-item-option (click)=\"presentPopover($event, token.tokenid)\">Token ID</ion-item-option>\n  </ion-item-options>\n  </ion-item-sliding>\n    </ion-row>\n      </ion-grid>\n\n  \n\n  </ion-card-content>\n  </ion-card>\n  </ion-content>\n\n  <ion-footer>\n    <ion-toolbar>\n      <ion-buttons>\n        <ion-button class=\"action-btn medium-text\" shape=\"\" expand=\"block\" type=\"button\" (click)=\"giveMe50()\">\n          <ion-icon name=\"cash\" slot=\"start\"></ion-icon> Gimme 50\n        </ion-button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-footer>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _balance_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./balance.page */ "./src/app/pages/balance/balance.page.ts");







var routes = [
    {
        path: '',
        component: _balance_page__WEBPACK_IMPORTED_MODULE_6__["BalancePage"],
    }
];
var BalancePageModule = /** @class */ (function () {
    function BalancePageModule() {
    }
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
    return BalancePageModule;
}());



/***/ }),

/***/ "./src/app/pages/balance/balance.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/balance/balance.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media screen and (max-width: 320px) {\n  p {\n    font-size: 10px;\n  }\n}\nion-item-sliding ion-item div .item-native {\n  padding-left: 0px;\n}\n.send-slide {\n  background-color: #FF671E;\n}\nion-card {\n  --background: var(--ion-background-color, #f2f2f2);\n}\nion-avatar {\n  width: 100% !important;\n  height: 100% !important;\n  max-width: 20px !important;\n  max-height: 150px !important;\n}\nimg {\n  padding: 0 !important;\n  border: 1px solid var(--minima-icons);\n  max-width: 150px;\n  max-height: 75px;\n  width: 120px;\n  border-radius: 50%;\n}\nion-footer ion-toolbar ion-buttons ion-button {\n  width: 100%;\n}\n.confirmed-label {\n  margin: auto;\n  font-weight: 300;\n  white-space: normal;\n}\n.confirmed-amount {\n  color: var(--minima-text);\n  white-space: normal;\n  -webkit-hyphens: auto;\n      -ms-hyphens: auto;\n          hyphens: auto;\n  word-break: break-all;\n  text-align: right;\n}\n.unconfirmed-amount {\n  white-space: normal;\n  word-break: break-all;\n  -webkit-hyphens: auto;\n      -ms-hyphens: auto;\n          hyphens: auto;\n  color: var(--minima-text);\n  text-align: right;\n}\n.icon-head {\n  color: #1FB4CD;\n}\n.action-btn {\n  height: 72px;\n}\n.action-btn:hover {\n  height: 72px;\n}\n.action-btn:hover ion-icon {\n  font-size: large;\n}\n.balance-token {\n  float: left;\n  width: 35px;\n  padding-right: 5px;\n}\n.balance-tokenname {\n  float: right;\n  position: relative;\n  padding-top: 5px;\n  font-size: 17px;\n  font-weight: 1200;\n}\n.abbr-name {\n  font-style: oblique;\n  font-weight: 400;\n  text-transform: uppercase;\n}\n/** SKELETON CSS */\n.wrapper {\n  width: 250px;\n  overflow: hidden;\n}\n.skeleton-icon {\n  size: 0.5rem;\n}\n.skeleton-name {\n  width: 20%;\n}\n.skeleton-amount {\n  width: 5%;\n}\n.ios .skeleton-amount {\n  margin-left: 10%;\n}\n.ios .skeleton-name {\n  width: 20%;\n}\nion-grid:hover {\n  background: var(--ion-background-color, #f2f2f2);\n}\nion-row {\n  border-left: 2px solid #FF671E;\n  border-right: 2px solid #1FB4CD;\n}\n@media screen and (max-width: 900px) {\n  .skeleton-icon {\n    size: 0.5rem;\n  }\n\n  .skeleton-name {\n    width: 20%;\n  }\n\n  .skeleton-amount {\n    margin-left: 90%;\n    width: 5%;\n  }\n}\n.balance {\n  font-size: 12px;\n}\nion-col {\n  --ion-grid-columns: 0;\n}\nion-grid {\n  --ion-grid-width-sm: 240px;\n  --ion-grid-width-lg: 240px;\n  --ion-grid-column-padding: 2px;\n}\nion-card-header {\n  --background: var(--ion-background-color, #f2f2f2);\n  background: -webkit-gradient(linear, left top, left bottom, from(var(--ion-background-color, #fff)), to(var(--ion-background-color, #f2f2f2))) !important;\n  background: linear-gradient(to bottom, var(--ion-background-color, #fff) 0%, var(--ion-background-color, #f2f2f2) 100%) !important;\n}\nion-card-content {\n  padding: 5px;\n  --background: var(--ion-background-color, #f2f2f2);\n  background: -webkit-gradient(linear, left top, left bottom, from(var(--ion-background-color, #fff)), to(var(--ion-background-color, #f2f2f2))) !important;\n  background: linear-gradient(to bottom, var(--ion-background-color, #fff) 0%, var(--ion-background-color, #f2f2f2) 100%) !important;\n}\n.tokenDescr-modal .modal-wrapper {\n  width: 1500px;\n  height: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGlhcy9Qcm9qZWN0cy9taW5pbWFjb3JlL21vYmlsZS1hcHAtZnJvbnQtZW5kL2FwcC9zcmMvYXBwL3BhZ2VzL2JhbGFuY2UvYmFsYW5jZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2JhbGFuY2UvYmFsYW5jZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSTtJQUNJLGVBQUE7RUNDTjtBQUNGO0FERUE7RUFDRSxpQkFBQTtBQ0FGO0FER0E7RUFDRSx5QkFBQTtBQ0FGO0FER0E7RUFDSSxrREFBQTtBQ0FKO0FER0E7RUFDRSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsMEJBQUE7RUFDQSw0QkFBQTtBQ0FGO0FERUE7RUFDRSxxQkFBQTtFQUNBLHFDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0NGO0FERUE7RUFDSSxXQUFBO0FDQ0o7QURFQztFQUNJLFlBQUE7RUFDRCxnQkFBQTtFQUNDLG1CQUFBO0FDQ0w7QURDQztFQUNHLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtNQUFBLGlCQUFBO1VBQUEsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7QUNFSjtBREFDO0VBQ0ksbUJBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO01BQUEsaUJBQUE7VUFBQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtBQ0dMO0FEQ0M7RUFDRyxjQUFBO0FDRUo7QURBQztFQUNFLFlBQUE7QUNHSDtBRERFO0VBQ0UsWUFBQTtBQ0lKO0FERkk7RUFDRSxnQkFBQTtBQ0lOO0FEQUU7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDR0o7QURERTtFQUNDLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDSUg7QURGRTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBQ0tKO0FEREUsa0JBQUE7QUFDQTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtBQ0lKO0FERkU7RUFDRSxZQUFBO0FDS0o7QURIRTtFQUNFLFVBQUE7QUNNSjtBREpFO0VBQ0UsU0FBQTtBQ09KO0FESEU7RUFDRSxnQkFBQTtBQ01KO0FESkU7RUFDRSxVQUFBO0FDT0o7QURKQTtFQUNFLGdEQUFBO0FDT0Y7QURMQTtFQUNFLDhCQUFBO0VBQ0EsK0JBQUE7QUNRRjtBRExBO0VBQ0k7SUFDRSxZQUFBO0VDUUo7O0VETkU7SUFDRSxVQUFBO0VDU0o7O0VEUEU7SUFDRSxnQkFBQTtJQUNBLFNBQUE7RUNVSjtBQUNGO0FEUEE7RUFDRSxlQUFBO0FDU0Y7QURMQTtFQUNFLHFCQUFBO0FDUUY7QUROQTtFQUNFLDBCQUFBO0VBQ0EsMEJBQUE7RUFFQSw4QkFBQTtBQ1FGO0FETEE7RUFDRSxrREFBQTtFQUNBLHlKQUFBO0VBQUEsa0lBQUE7QUNRRjtBRE5BO0VBQ0UsWUFBQTtFQUVBLGtEQUFBO0VBQ0EseUpBQUE7RUFBQSxrSUFBQTtBQ1FGO0FESkE7RUFDRSxhQUFBO0VBQ0EsWUFBQTtBQ09GIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYmFsYW5jZS9iYWxhbmNlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMyMHB4KSB7XG4gICAgcCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICB9XG59XG5cbmlvbi1pdGVtLXNsaWRpbmcgaW9uLWl0ZW0gZGl2IC5pdGVtLW5hdGl2ZSB7XG4gIHBhZGRpbmctbGVmdDogMHB4O1xufVxuXG4uc2VuZC1zbGlkZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRjY3MUU7XG59XG5cbmlvbi1jYXJkIHtcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZjJmMmYyKTtcbn1cblxuaW9uLWF2YXRhciB7XG4gIHdpZHRoOjEwMCUgIWltcG9ydGFudDsgIFxuICBoZWlnaHQgOiAxMDAlICFpbXBvcnRhbnQ7ICBcbiAgbWF4LXdpZHRoOiAyMHB4ICFpbXBvcnRhbnQ7ICAvL2FueSBzaXplXG4gIG1heC1oZWlnaHQ6IDE1MHB4ICFpbXBvcnRhbnQ7IC8vYW55IHNpemUgXG59XG5pbWcge1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLW1pbmltYS1pY29ucyk7XG4gIG1heC13aWR0aDogMTUwcHg7XG4gIG1heC1oZWlnaHQ6IDc1cHg7XG4gIHdpZHRoOiAxMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG5pb24tZm9vdGVyIGlvbi10b29sYmFyIGlvbi1idXR0b25zIGlvbi1idXR0b257XG4gICAgd2lkdGg6IDEwMCU7XG4gfVxuXG4gLmNvbmZpcm1lZC1sYWJlbHtcbiAgICAgbWFyZ2luOiBhdXRvO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gfVxuIC5jb25maXJtZWQtYW1vdW50IHtcbiAgICBjb2xvcjogdmFyKC0tbWluaW1hLXRleHQpO1xuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gICAgaHlwaGVuczogYXV0bztcbiAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gfVxuIC51bmNvbmZpcm1lZC1hbW91bnQge1xuICAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG4gICAgIGh5cGhlbnM6IGF1dG87XG4gICAgIGNvbG9yOiB2YXIoLS1taW5pbWEtdGV4dCk7XG4gICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuIH1cblxuXG4gLmljb24taGVhZHtcbiAgICBjb2xvcjogIzFGQjRDRDtcbiB9XG4gLmFjdGlvbi1idG4ge1xuICAgaGVpZ2h0OiA3MnB4O1xuIH1cbiAgLmFjdGlvbi1idG46aG92ZXIge1xuICAgIGhlaWdodDogNzJweDtcblxuICAgIGlvbi1pY29uIHtcbiAgICAgIGZvbnQtc2l6ZTogbGFyZ2U7XG4gICAgfVxuICB9XG5cbiAgLmJhbGFuY2UtdG9rZW4ge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHdpZHRoOiAzNXB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgfVxuICAuYmFsYW5jZS10b2tlbm5hbWUge1xuICAgZmxvYXQ6cmlnaHQ7XG4gICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICBwYWRkaW5nLXRvcDogNXB4O1xuICAgZm9udC1zaXplOiAxN3B4O1xuICAgZm9udC13ZWlnaHQ6IDEyMDA7XG4gIH1cbiAgLmFiYnItbmFtZSB7XG4gICAgZm9udC1zdHlsZTogb2JsaXF1ZTtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICB9XG4gXG5cbiAgLyoqIFNLRUxFVE9OIENTUyAqL1xuICAud3JhcHBlciB7XG4gICAgd2lkdGg6IDI1MHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cbiAgLnNrZWxldG9uLWljb24ge1xuICAgIHNpemU6IDAuNXJlbTtcbiAgfVxuICAuc2tlbGV0b24tbmFtZSB7XG4gICAgd2lkdGg6IDIwJTtcbiAgfVxuICAuc2tlbGV0b24tYW1vdW50IHtcbiAgICB3aWR0aDogNSU7XG4gIH1cblxuICAvL2lPUyBcbiAgLmlvcyAuc2tlbGV0b24tYW1vdW50IHtcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xuICB9XG4gIC5pb3MgLnNrZWxldG9uLW5hbWUge1xuICAgIHdpZHRoOiAyMCU7XG4gIH1cblxuaW9uLWdyaWQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwgI2YyZjJmMik7XG59XG5pb24tcm93IHtcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjRkY2NzFFO1xuICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAjMUZCNENEO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCkge1xuICAgIC5za2VsZXRvbi1pY29uIHtcbiAgICAgIHNpemU6IDAuNXJlbTtcbiAgICB9XG4gICAgLnNrZWxldG9uLW5hbWUge1xuICAgICAgd2lkdGg6IDIwJTtcbiAgICB9XG4gICAgLnNrZWxldG9uLWFtb3VudCB7XG4gICAgICBtYXJnaW4tbGVmdDogOTAlO1xuICAgICAgd2lkdGg6IDUlO1xuICAgIH1cbn1cbiBcbi5iYWxhbmNlIHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4gIC8vIGlvbi1jb2wgXG5pb24tY29sIHtcbiAgLS1pb24tZ3JpZC1jb2x1bW5zOiAwO1xufVxuaW9uLWdyaWQge1xuICAtLWlvbi1ncmlkLXdpZHRoLXNtOiAyNDBweDtcbiAgLS1pb24tZ3JpZC13aWR0aC1sZzogMjQwcHg7XG5cbiAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMnB4O1xuXG59XG5pb24tY2FyZC1oZWFkZXIge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZjJmMmYyKTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZmZmKSAwJSwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsICNmMmYyZjIpIDEwMCUpICFpbXBvcnRhbnQ7XG59XG5pb24tY2FyZC1jb250ZW50IHtcbiAgcGFkZGluZzogNXB4O1xuXG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsICNmMmYyZjIpO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsICNmZmYpIDAlLCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwgI2YyZjJmMikgMTAwJSkgIWltcG9ydGFudDtcblxufVxuXG4udG9rZW5EZXNjci1tb2RhbCAubW9kYWwtd3JhcHBlcntcbiAgd2lkdGg6IDE1MDBweDtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG5cbiIsIkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMyMHB4KSB7XG4gIHAge1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgfVxufVxuaW9uLWl0ZW0tc2xpZGluZyBpb24taXRlbSBkaXYgLml0ZW0tbmF0aXZlIHtcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XG59XG5cbi5zZW5kLXNsaWRlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGNjcxRTtcbn1cblxuaW9uLWNhcmQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZjJmMmYyKTtcbn1cblxuaW9uLWF2YXRhciB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xuICBtYXgtd2lkdGg6IDIwcHggIWltcG9ydGFudDtcbiAgbWF4LWhlaWdodDogMTUwcHggIWltcG9ydGFudDtcbn1cblxuaW1nIHtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1taW5pbWEtaWNvbnMpO1xuICBtYXgtd2lkdGg6IDE1MHB4O1xuICBtYXgtaGVpZ2h0OiA3NXB4O1xuICB3aWR0aDogMTIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuaW9uLWZvb3RlciBpb24tdG9vbGJhciBpb24tYnV0dG9ucyBpb24tYnV0dG9uIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jb25maXJtZWQtbGFiZWwge1xuICBtYXJnaW46IGF1dG87XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG59XG5cbi5jb25maXJtZWQtYW1vdW50IHtcbiAgY29sb3I6IHZhcigtLW1pbmltYS10ZXh0KTtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgaHlwaGVuczogYXV0bztcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLnVuY29uZmlybWVkLWFtb3VudCB7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcbiAgaHlwaGVuczogYXV0bztcbiAgY29sb3I6IHZhcigtLW1pbmltYS10ZXh0KTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5pY29uLWhlYWQge1xuICBjb2xvcjogIzFGQjRDRDtcbn1cblxuLmFjdGlvbi1idG4ge1xuICBoZWlnaHQ6IDcycHg7XG59XG5cbi5hY3Rpb24tYnRuOmhvdmVyIHtcbiAgaGVpZ2h0OiA3MnB4O1xufVxuLmFjdGlvbi1idG46aG92ZXIgaW9uLWljb24ge1xuICBmb250LXNpemU6IGxhcmdlO1xufVxuXG4uYmFsYW5jZS10b2tlbiB7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogMzVweDtcbiAgcGFkZGluZy1yaWdodDogNXB4O1xufVxuXG4uYmFsYW5jZS10b2tlbm5hbWUge1xuICBmbG9hdDogcmlnaHQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZy10b3A6IDVweDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBmb250LXdlaWdodDogMTIwMDtcbn1cblxuLmFiYnItbmFtZSB7XG4gIGZvbnQtc3R5bGU6IG9ibGlxdWU7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi8qKiBTS0VMRVRPTiBDU1MgKi9cbi53cmFwcGVyIHtcbiAgd2lkdGg6IDI1MHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uc2tlbGV0b24taWNvbiB7XG4gIHNpemU6IDAuNXJlbTtcbn1cblxuLnNrZWxldG9uLW5hbWUge1xuICB3aWR0aDogMjAlO1xufVxuXG4uc2tlbGV0b24tYW1vdW50IHtcbiAgd2lkdGg6IDUlO1xufVxuXG4uaW9zIC5za2VsZXRvbi1hbW91bnQge1xuICBtYXJnaW4tbGVmdDogMTAlO1xufVxuXG4uaW9zIC5za2VsZXRvbi1uYW1lIHtcbiAgd2lkdGg6IDIwJTtcbn1cblxuaW9uLWdyaWQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwgI2YyZjJmMik7XG59XG5cbmlvbi1yb3cge1xuICBib3JkZXItbGVmdDogMnB4IHNvbGlkICNGRjY3MUU7XG4gIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICMxRkI0Q0Q7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XG4gIC5za2VsZXRvbi1pY29uIHtcbiAgICBzaXplOiAwLjVyZW07XG4gIH1cblxuICAuc2tlbGV0b24tbmFtZSB7XG4gICAgd2lkdGg6IDIwJTtcbiAgfVxuXG4gIC5za2VsZXRvbi1hbW91bnQge1xuICAgIG1hcmdpbi1sZWZ0OiA5MCU7XG4gICAgd2lkdGg6IDUlO1xuICB9XG59XG4uYmFsYW5jZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuaW9uLWNvbCB7XG4gIC0taW9uLWdyaWQtY29sdW1uczogMDtcbn1cblxuaW9uLWdyaWQge1xuICAtLWlvbi1ncmlkLXdpZHRoLXNtOiAyNDBweDtcbiAgLS1pb24tZ3JpZC13aWR0aC1sZzogMjQwcHg7XG4gIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDJweDtcbn1cblxuaW9uLWNhcmQtaGVhZGVyIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwgI2YyZjJmMik7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZmZmKSAwJSwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsICNmMmYyZjIpIDEwMCUpICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1jYXJkLWNvbnRlbnQge1xuICBwYWRkaW5nOiA1cHg7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsICNmMmYyZjIpO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwgI2ZmZikgMCUsIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZjJmMmYyKSAxMDAlKSAhaW1wb3J0YW50O1xufVxuXG4udG9rZW5EZXNjci1tb2RhbCAubW9kYWwtd3JhcHBlciB7XG4gIHdpZHRoOiAxNTAwcHg7XG4gIGhlaWdodDogYXV0bztcbn0iXX0= */"

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
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _service_minima_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/minima-api.service */ "./src/app/service/minima-api.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _components_pop_over_pop_over_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/pop-over/pop-over.component */ "./src/app/components/pop-over/pop-over.component.ts");
/* harmony import */ var _service_balance_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../service/balance.service */ "./src/app/service/balance.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_token_descr_token_descr_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/token-descr/token-descr.component */ "./src/app/components/token-descr/token-descr.component.ts");









var BalancePage = /** @class */ (function () {
    function BalancePage(service, api, alertController, popoverController, ref, route, modalController) {
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
    BalancePage.prototype.ionViewWillEnter = function () {
        this.pullInTokens();
    };
    BalancePage.prototype.ngOnInit = function () {
        var _this = this;
        window.addEventListener('MinimaEvent', function (evt) {
            // Event connection success
            if (evt.detail.event === 'newbalance') {
                _this.pullInTokens();
            }
            else if (evt.detail.event === 'connected') {
                _this.pullInTokens();
            }
        });
    };
    BalancePage.prototype.ionViewWillLeave = function () {
        this.balanceSubscription.unsubscribe(); // unsubs
    };
    BalancePage.prototype.presentAlert = function (msg, header) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: header,
                            message: msg,
                            buttons: ['Cancel', 'Ok']
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    BalancePage.prototype.sendTokenOver = function (id) {
        this.route.navigate(['/send-funds/' + id]);
    };
    BalancePage.prototype.giveMe50 = function () {
        var _this = this;
        this.service.giveMe50().subscribe(function (res) {
            if (res.status === true) {
                _this.pullInTokens();
                setTimeout(function () {
                    _this.presentAlert('A transfer of 50 is on the way...', 'Minima');
                }, 600);
            }
            else if (res.status === false) {
                _this.presentAlert(res.message + '!', 'Unsuccessful');
            }
        });
    };
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
    BalancePage.prototype.presentTokenDescr = function (id, token, descr, icon, proof, total, script, coinid, totalamnt, scale, conf, unconf, memp, sendable) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
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
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    BalancePage.prototype.presentPopover = function (ev, id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var popover;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverController.create({
                            component: _components_pop_over_pop_over_component__WEBPACK_IMPORTED_MODULE_5__["PopOverComponent"],
                            event: ev,
                            cssClass: 'balance-popover',
                            translucent: false,
                            componentProps: { 'tokenid': id },
                        })];
                    case 1:
                        popover = _a.sent();
                        return [4 /*yield*/, popover.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    BalancePage.prototype.pullArrLength = function () {
        var _this = this;
        this.service.getBalance().subscribe(function (res) {
            res.forEach(function (element) {
                _this.tokenSpoof.push(element);
            });
        });
    };
    BalancePage.prototype.pullInTokens = function () {
        var _this = this;
        this.balanceSubscription = this.service.getBalance().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (responseData) {
            var tokenArr = [];
            for (var key in responseData) {
                if (responseData.hasOwnProperty(key)) {
                    var element = responseData[key];
                    // round up confirmed && unconfirmed
                    var tempConfirmed = (Math.round(element.confirmed * 1000) / 1000);
                    var tempUnconfirmed = (Math.round(element.unconfirmed * 1000) / 1000);
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
                    if (element.tokenid === _this.MINIMA) {
                        tokenArr.pop(); // pop it
                        _this.service.update(tokenArr, {
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
            .subscribe(function (responseData) {
            //check if changed
            if (_this.lastJSON !== JSON.stringify(responseData)) {
                _this.tokenArr = responseData.slice();
                _this.lastJSON = JSON.stringify(responseData);
            }
        });
    };
    BalancePage.ctorParameters = function () { return [
        { type: _service_balance_service__WEBPACK_IMPORTED_MODULE_6__["BalanceService"] },
        { type: _service_minima_api_service__WEBPACK_IMPORTED_MODULE_2__["MinimaApiService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
    ]; };
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
    return BalancePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-balance-balance-module-es5.js.map