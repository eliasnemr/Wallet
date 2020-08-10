(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-balance-balance-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/balance/balance.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/balance/balance.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-menu-button class=\"menu-icon\"></ion-menu-button>\n      </ion-buttons>\n      <ion-title class=\"large-text\">\n        Balance\n      </ion-title>\n    </ion-toolbar>\n\n  </ion-header>\n\n  <ion-content>\n\n  <ion-card color=\"white\">\n      <ion-card-header color=\"white\">\n      </ion-card-header>\n  <ion-card-content>\n\n  <ion-grid style=\"width: 100%;\" *ngFor=\"let token of tokenArr;\">\n    <ion-row>    \n      <ion-item-sliding>\n      <ion-item-options side=\"start\">\n      <ion-item-option class=\"receive-slide small-text\" routerLink=\"/my-address\">Receive</ion-item-option>\n      <ion-item-option class=\"send-slide small-text\" (click)=\"sendTokenOver(token.tokenid)\">Send</ion-item-option>\n      </ion-item-options>\n\n  <!-- TOKENS ONLY -->\n  <ion-item lines=\"full\" \n            (click)=\"presentTokenDescr(token.tokenid, token.token, token.description,\n                                      token.icon, token.proof, token.total, token.script,\n                                      token.coinid, token.totalamount, token.scale, token.confirmed,\n                                      token.unconfirmed, token.mempool, token.sendable)\">\n    <ion-avatar slot=\"start\">\n      <img *ngIf=\"token.icon\" alt=\"Avatar\" class=\"balance-token\" src=\"{{ token.icon }}\">\n      <img *ngIf=\"!token.icon || token.icon.length <= 0\" alt=\"Avatar\" class=\"balance-token\" src=\"assets/icon/icon.png\">\n    </ion-avatar>\n\n  <ion-col size=\"9\" style=\"padding: 12px;\" slot=\"start\">\n\n    <!-- if token name is shorter than 15 -->\n    <div *ngIf=\"token.token.length < 15\">\n      <ion-row style=\"border: none; padding-left: 5px;\">\n        <ion-text class=\"medium-text\"> {{ token.token}} </ion-text>\n      </ion-row>\n    </div>\n    <!-- if token name is longer than 15 and smaller than 30 -->   \n    <div *ngIf=\"token.token.length >= 15 && token.token.length < 30\" >\n      <ion-row style=\"border:none; padding-left: 5px;\">\n        <ion-text class=\"medium-text\"> {{ token.token.substring(0,15)+\"-\" }} </ion-text>\n      </ion-row>\n      <ion-row style=\"border:none; padding-left: 5px;\">\n        <ion-text class=\"small-text\"> {{ token.token.substring(15, 30) }} </ion-text>\n      </ion-row>\n    </div>\n    <!-- if token name is longer than 30 and smaller than 45 -->   \n    <div *ngIf=\"token.token.length >= 15 && token.token.length < 45\" >\n      <ion-row style=\"border:none; padding-left: 5px;\">\n        <ion-text class=\"medium-text\"> {{ token.token.substring(0,15)+\"-\" }} </ion-text>\n      </ion-row>\n      <ion-row style=\"border:none; padding-left: 5px;\">\n        <ion-text class=\"small-text\"> {{ token.token.substring(15, 30)+\"-\" }} </ion-text>\n      </ion-row>\n      <ion-row style=\"border:none; padding-left: 5px;\">\n        <ion-text class=\"smaller-text\"> {{ token.token.substring(30, 45) }} </ion-text>\n      </ion-row>\n    </div>\n    <!-- if token name is longer than 45... -->   \n    <div *ngIf=\"token.token.length >= 45\" >\n      <ion-row style=\"border:none; padding-left: 5px;\">\n        <ion-text class=\"medium-text\"> {{ token.token.substring(0,15)+\"-\" }} </ion-text>\n      </ion-row>\n      <ion-row style=\"border:none; padding-left: 5px;\">\n        <ion-text class=\"small-text\"> {{ token.token.substring(15, 30)+\"-\" }} </ion-text>\n      </ion-row>\n      <ion-row style=\"border:none; padding-left: 5px;\">\n        <ion-text class=\"smaller-text\"> {{ token.token.substring(30, 45)+\"...\" }} </ion-text>\n      </ion-row>\n    </div>\n    \n\n    <ion-row style=\"border:none; padding-left: 5px;\">\n      <ion-text class=\"abbr-name small-text\"> {{ token.token.substring(0,3) }} </ion-text>\n    </ion-row>\n\n  </ion-col>\n\n\n    <ion-col size=\"3\" slot=\"end\">\n\n      <ion-row style=\"border:none;\">\n        <span *ngIf=\"token.confirmed !== token.sendable\" class=\"confirmed-amount medium-text\">{{ token.confirmed }}</span>\n        <span *ngIf=\"token.confirmed === token.sendable\" class=\"confirmed-amount medium-text\">{{ token.confirmed +\"/\"+token.sendable }}</span>\n      </ion-row>\n\n      <ion-row *ngIf=\"token.unconfirmed !== 0\" style=\"border:none;\">\n        <span class=\"unconfirmed-amount medium-text\">\n          {{ token.unconfirmed }}\n        </span>\n      </ion-row>\n\n      <ion-row *ngIf=\"token.mempool === 0\" style=\"border:none;\">\n        <span class=\"mempool-amount medium-text\">\n          {{ token.mempool }}\n        </span>\n      </ion-row>\n\n    </ion-col>\n\n  \n  </ion-item>\n\n\n  <ion-item-options side=\"end\">\n    <ion-item-option class=\"small-text\" (click)=\"presentPopover($event, token.tokenid)\">Token ID</ion-item-option>\n  </ion-item-options>\n  </ion-item-sliding>\n    </ion-row>\n      </ion-grid>\n\n  \n\n  </ion-card-content>\n  </ion-card>\n  </ion-content>\n\n  <ion-footer>\n    <ion-toolbar>\n      <ion-buttons>\n        <ion-button class=\"action-btn medium-text\" shape=\"\" expand=\"block\" type=\"button\" (click)=\"giveMe50()\">\n          <ion-icon name=\"cash\" slot=\"start\"></ion-icon> Gimme 50\n        </ion-button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-footer>"

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

module.exports = "@media screen and (max-width: 320px) {\n  p {\n    font-size: 10px;\n  }\n}\nion-item-sliding ion-item div .item-native {\n  padding-left: 0px;\n}\n.send-slide {\n  background-color: #FF671E;\n}\nion-card {\n  --background: var(--ion-background-color, #f2f2f2);\n}\nion-avatar {\n  width: 100% !important;\n  height: 100% !important;\n  max-width: 20px !important;\n  max-height: 150px !important;\n}\nimg {\n  padding: 0 !important;\n  border: 1px solid var(--minima-icons);\n  max-width: 150px;\n  max-height: 75px;\n  width: 120px;\n  border-radius: 50%;\n}\nion-footer ion-toolbar ion-buttons ion-button {\n  width: 100%;\n}\n.confirmed-label {\n  margin: auto;\n  font-weight: 300;\n  white-space: normal;\n}\n.confirmed-amount {\n  color: var(--minima-text);\n  white-space: normal;\n  -webkit-hyphens: auto;\n      -ms-hyphens: auto;\n          hyphens: auto;\n  word-break: break-all;\n  text-align: right;\n}\n.unconfirmed-amount {\n  white-space: normal;\n  word-break: break-all;\n  font-style: oblique;\n  opacity: 0.5;\n  color: var(--minima-text);\n  text-align: right;\n}\n.mempool-amount {\n  white-space: normal;\n  word-break: break-all;\n  font-style: oblique;\n  opacity: 0.3;\n  color: var(--minima-text);\n  text-align: right;\n}\n.icon-head {\n  color: #1FB4CD;\n}\n.action-btn {\n  height: 72px;\n}\n.action-btn:hover {\n  height: 72px;\n}\n.action-btn:hover ion-icon {\n  font-size: large;\n}\n.balance-token {\n  max-height: 40px;\n  float: left;\n  max-width: 35px;\n  padding-right: 5px;\n}\n.balance-tokenname {\n  float: right;\n  position: relative;\n  padding-top: 5px;\n  font-size: 17px;\n  font-weight: 1200;\n}\n.abbr-name {\n  font-style: oblique;\n  font-weight: 400;\n  text-transform: uppercase;\n}\n/** SKELETON CSS */\n.wrapper {\n  width: 250px;\n  overflow: hidden;\n}\n.skeleton-icon {\n  size: 0.5rem;\n}\n.skeleton-name {\n  width: 20%;\n}\n.skeleton-amount {\n  width: 5%;\n}\n.ios .skeleton-amount {\n  margin-left: 10%;\n}\n.ios .skeleton-name {\n  width: 20%;\n}\nion-grid:hover {\n  background: var(--ion-background-color, #f2f2f2);\n}\nion-row {\n  border-left: 2px solid #FF671E;\n  border-right: 2px solid #1FB4CD;\n}\n@media screen and (max-width: 900px) {\n  .skeleton-icon {\n    size: 0.5rem;\n  }\n\n  .skeleton-name {\n    width: 20%;\n  }\n\n  .skeleton-amount {\n    margin-left: 90%;\n    width: 5%;\n  }\n}\n.balance {\n  font-size: 12px;\n}\nion-col {\n  --ion-grid-columns: 0;\n}\nion-grid {\n  --ion-grid-width-sm: 240px;\n  --ion-grid-width-lg: 240px;\n  --ion-grid-column-padding: 2px;\n}\nion-card-header {\n  --background: var(--ion-background-color, #f2f2f2);\n  background: -webkit-gradient(linear, left top, left bottom, from(var(--ion-background-color, #fff)), to(var(--ion-background-color, #f2f2f2))) !important;\n  background: linear-gradient(to bottom, var(--ion-background-color, #fff) 0%, var(--ion-background-color, #f2f2f2) 100%) !important;\n}\nion-card-content {\n  padding: 5px;\n  --background: var(--ion-background-color, #f2f2f2);\n  background: -webkit-gradient(linear, left top, left bottom, from(var(--ion-background-color, #fff)), to(var(--ion-background-color, #f2f2f2))) !important;\n  background: linear-gradient(to bottom, var(--ion-background-color, #fff) 0%, var(--ion-background-color, #f2f2f2) 100%) !important;\n}\n.tokenDescr-modal .modal-wrapper {\n  width: 1500px;\n  height: auto;\n}\n.small-text {\n  font-weight: 500;\n  opacity: 0.75;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGlhcy9Qcm9qZWN0cy9taW5pbWFjb3JlL21vYmlsZS1hcHAtZnJvbnQtZW5kL2FwcC9zcmMvYXBwL3BhZ2VzL2JhbGFuY2UvYmFsYW5jZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2JhbGFuY2UvYmFsYW5jZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSTtJQUNJLGVBQUE7RUNDTjtBQUNGO0FERUE7RUFDRSxpQkFBQTtBQ0FGO0FER0E7RUFDRSx5QkFBQTtBQ0FGO0FER0E7RUFDSSxrREFBQTtBQ0FKO0FER0E7RUFDRSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsMEJBQUE7RUFDQSw0QkFBQTtBQ0FGO0FERUE7RUFDRSxxQkFBQTtFQUNBLHFDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0NGO0FERUE7RUFDSSxXQUFBO0FDQ0o7QURFQztFQUNJLFlBQUE7RUFDRCxnQkFBQTtFQUNDLG1CQUFBO0FDQ0w7QURDQztFQUNHLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtNQUFBLGlCQUFBO1VBQUEsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7QUNFSjtBREFDO0VBQ0ksbUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7QUNHTDtBRERDO0VBQ0MsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7QUNJRjtBREFDO0VBQ0csY0FBQTtBQ0dKO0FEREM7RUFDRSxZQUFBO0FDSUg7QURGRTtFQUNFLFlBQUE7QUNLSjtBREhJO0VBQ0UsZ0JBQUE7QUNLTjtBRERFO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDSUo7QURGRTtFQUNDLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDS0g7QURIRTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBQ01KO0FERkUsa0JBQUE7QUFDQTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtBQ0tKO0FESEU7RUFDRSxZQUFBO0FDTUo7QURKRTtFQUNFLFVBQUE7QUNPSjtBRExFO0VBQ0UsU0FBQTtBQ1FKO0FESkU7RUFDRSxnQkFBQTtBQ09KO0FETEU7RUFDRSxVQUFBO0FDUUo7QURMQTtFQUNFLGdEQUFBO0FDUUY7QUROQTtFQUNFLDhCQUFBO0VBQ0EsK0JBQUE7QUNTRjtBRE5BO0VBQ0k7SUFDRSxZQUFBO0VDU0o7O0VEUEU7SUFDRSxVQUFBO0VDVUo7O0VEUkU7SUFDRSxnQkFBQTtJQUNBLFNBQUE7RUNXSjtBQUNGO0FEUkE7RUFDRSxlQUFBO0FDVUY7QUROQTtFQUNFLHFCQUFBO0FDU0Y7QURQQTtFQUNFLDBCQUFBO0VBQ0EsMEJBQUE7RUFFQSw4QkFBQTtBQ1NGO0FETkE7RUFDRSxrREFBQTtFQUNBLHlKQUFBO0VBQUEsa0lBQUE7QUNTRjtBRFBBO0VBQ0UsWUFBQTtFQUVBLGtEQUFBO0VBQ0EseUpBQUE7RUFBQSxrSUFBQTtBQ1NGO0FETEE7RUFDRSxhQUFBO0VBQ0EsWUFBQTtBQ1FGO0FESkE7RUFDRSxnQkFBQTtFQUNBLGFBQUE7QUNPRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2JhbGFuY2UvYmFsYW5jZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMjBweCkge1xuICAgIHAge1xuICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgfVxufVxuXG5pb24taXRlbS1zbGlkaW5nIGlvbi1pdGVtIGRpdiAuaXRlbS1uYXRpdmUge1xuICBwYWRkaW5nLWxlZnQ6IDBweDtcbn1cblxuLnNlbmQtc2xpZGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY2NzFFO1xufVxuXG5pb24tY2FyZCB7XG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwgI2YyZjJmMik7XG59XG5cbmlvbi1hdmF0YXIge1xuICB3aWR0aDoxMDAlICFpbXBvcnRhbnQ7ICBcbiAgaGVpZ2h0IDogMTAwJSAhaW1wb3J0YW50OyAgXG4gIG1heC13aWR0aDogMjBweCAhaW1wb3J0YW50OyAgLy9hbnkgc2l6ZVxuICBtYXgtaGVpZ2h0OiAxNTBweCAhaW1wb3J0YW50OyAvL2FueSBzaXplIFxufVxuaW1nIHtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1taW5pbWEtaWNvbnMpO1xuICBtYXgtd2lkdGg6IDE1MHB4O1xuICBtYXgtaGVpZ2h0OiA3NXB4O1xuICB3aWR0aDogMTIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuaW9uLWZvb3RlciBpb24tdG9vbGJhciBpb24tYnV0dG9ucyBpb24tYnV0dG9ue1xuICAgIHdpZHRoOiAxMDAlO1xuIH1cblxuIC5jb25maXJtZWQtbGFiZWx7XG4gICAgIG1hcmdpbjogYXV0bztcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuIH1cbiAuY29uZmlybWVkLWFtb3VudCB7XG4gICAgY29sb3I6IHZhcigtLW1pbmltYS10ZXh0KTtcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICAgIGh5cGhlbnM6IGF1dG87XG4gICAgd29yZC1icmVhazogYnJlYWstYWxsO1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuIH1cbiAudW5jb25maXJtZWQtYW1vdW50IHtcbiAgICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgICAgd29yZC1icmVhazogYnJlYWstYWxsO1xuICAgICBmb250LXN0eWxlOiBvYmxpcXVlO1xuICAgICBvcGFjaXR5OiAwLjU7XG4gICAgIGNvbG9yOiB2YXIoLS1taW5pbWEtdGV4dCk7XG4gICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuIH1cbiAubWVtcG9vbC1hbW91bnQge1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG4gIGZvbnQtc3R5bGU6IG9ibGlxdWU7XG4gIG9wYWNpdHk6IDAuMztcbiAgY29sb3I6IHZhcigtLW1pbmltYS10ZXh0KTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gfVxuXG5cbiAuaWNvbi1oZWFke1xuICAgIGNvbG9yOiAjMUZCNENEO1xuIH1cbiAuYWN0aW9uLWJ0biB7XG4gICBoZWlnaHQ6IDcycHg7XG4gfVxuICAuYWN0aW9uLWJ0bjpob3ZlciB7XG4gICAgaGVpZ2h0OiA3MnB4O1xuXG4gICAgaW9uLWljb24ge1xuICAgICAgZm9udC1zaXplOiBsYXJnZTtcbiAgICB9XG4gIH1cblxuICAuYmFsYW5jZS10b2tlbiB7XG4gICAgbWF4LWhlaWdodDogNDBweDtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBtYXgtd2lkdGg6IDM1cHg7XG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xuICB9XG4gIC5iYWxhbmNlLXRva2VubmFtZSB7XG4gICBmbG9hdDpyaWdodDtcbiAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgIHBhZGRpbmctdG9wOiA1cHg7XG4gICBmb250LXNpemU6IDE3cHg7XG4gICBmb250LXdlaWdodDogMTIwMDtcbiAgfVxuICAuYWJici1uYW1lIHtcbiAgICBmb250LXN0eWxlOiBvYmxpcXVlO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgIH1cbiBcblxuICAvKiogU0tFTEVUT04gQ1NTICovXG4gIC53cmFwcGVyIHtcbiAgICB3aWR0aDogMjUwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuICAuc2tlbGV0b24taWNvbiB7XG4gICAgc2l6ZTogMC41cmVtO1xuICB9XG4gIC5za2VsZXRvbi1uYW1lIHtcbiAgICB3aWR0aDogMjAlO1xuICB9XG4gIC5za2VsZXRvbi1hbW91bnQge1xuICAgIHdpZHRoOiA1JTtcbiAgfVxuXG4gIC8vaU9TIFxuICAuaW9zIC5za2VsZXRvbi1hbW91bnQge1xuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XG4gIH1cbiAgLmlvcyAuc2tlbGV0b24tbmFtZSB7XG4gICAgd2lkdGg6IDIwJTtcbiAgfVxuXG5pb24tZ3JpZDpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZjJmMmYyKTtcbn1cbmlvbi1yb3cge1xuICBib3JkZXItbGVmdDogMnB4IHNvbGlkICNGRjY3MUU7XG4gIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICMxRkI0Q0Q7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XG4gICAgLnNrZWxldG9uLWljb24ge1xuICAgICAgc2l6ZTogMC41cmVtO1xuICAgIH1cbiAgICAuc2tlbGV0b24tbmFtZSB7XG4gICAgICB3aWR0aDogMjAlO1xuICAgIH1cbiAgICAuc2tlbGV0b24tYW1vdW50IHtcbiAgICAgIG1hcmdpbi1sZWZ0OiA5MCU7XG4gICAgICB3aWR0aDogNSU7XG4gICAgfVxufVxuIFxuLmJhbGFuY2Uge1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbiAgLy8gaW9uLWNvbCBcbmlvbi1jb2wge1xuICAtLWlvbi1ncmlkLWNvbHVtbnM6IDA7XG59XG5pb24tZ3JpZCB7XG4gIC0taW9uLWdyaWQtd2lkdGgtc206IDI0MHB4O1xuICAtLWlvbi1ncmlkLXdpZHRoLWxnOiAyNDBweDtcblxuICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAycHg7XG5cbn1cbmlvbi1jYXJkLWhlYWRlciB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsICNmMmYyZjIpO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsICNmZmYpIDAlLCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwgI2YyZjJmMikgMTAwJSkgIWltcG9ydGFudDtcbn1cbmlvbi1jYXJkLWNvbnRlbnQge1xuICBwYWRkaW5nOiA1cHg7XG5cbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwgI2YyZjJmMik7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwgI2ZmZikgMCUsIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZjJmMmYyKSAxMDAlKSAhaW1wb3J0YW50O1xuXG59XG5cbi50b2tlbkRlc2NyLW1vZGFsIC5tb2RhbC13cmFwcGVye1xuICB3aWR0aDogMTUwMHB4O1xuICBoZWlnaHQ6IGF1dG87XG59XG5cblxuLnNtYWxsLXRleHQge1xuICBmb250LXdlaWdodDogNTAwO1xuICBvcGFjaXR5OiAwLjc1O1xufSIsIkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMyMHB4KSB7XG4gIHAge1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgfVxufVxuaW9uLWl0ZW0tc2xpZGluZyBpb24taXRlbSBkaXYgLml0ZW0tbmF0aXZlIHtcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XG59XG5cbi5zZW5kLXNsaWRlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGNjcxRTtcbn1cblxuaW9uLWNhcmQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZjJmMmYyKTtcbn1cblxuaW9uLWF2YXRhciB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xuICBtYXgtd2lkdGg6IDIwcHggIWltcG9ydGFudDtcbiAgbWF4LWhlaWdodDogMTUwcHggIWltcG9ydGFudDtcbn1cblxuaW1nIHtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1taW5pbWEtaWNvbnMpO1xuICBtYXgtd2lkdGg6IDE1MHB4O1xuICBtYXgtaGVpZ2h0OiA3NXB4O1xuICB3aWR0aDogMTIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuaW9uLWZvb3RlciBpb24tdG9vbGJhciBpb24tYnV0dG9ucyBpb24tYnV0dG9uIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jb25maXJtZWQtbGFiZWwge1xuICBtYXJnaW46IGF1dG87XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG59XG5cbi5jb25maXJtZWQtYW1vdW50IHtcbiAgY29sb3I6IHZhcigtLW1pbmltYS10ZXh0KTtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgaHlwaGVuczogYXV0bztcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLnVuY29uZmlybWVkLWFtb3VudCB7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcbiAgZm9udC1zdHlsZTogb2JsaXF1ZTtcbiAgb3BhY2l0eTogMC41O1xuICBjb2xvcjogdmFyKC0tbWluaW1hLXRleHQpO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLm1lbXBvb2wtYW1vdW50IHtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xuICBmb250LXN0eWxlOiBvYmxpcXVlO1xuICBvcGFjaXR5OiAwLjM7XG4gIGNvbG9yOiB2YXIoLS1taW5pbWEtdGV4dCk7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4uaWNvbi1oZWFkIHtcbiAgY29sb3I6ICMxRkI0Q0Q7XG59XG5cbi5hY3Rpb24tYnRuIHtcbiAgaGVpZ2h0OiA3MnB4O1xufVxuXG4uYWN0aW9uLWJ0bjpob3ZlciB7XG4gIGhlaWdodDogNzJweDtcbn1cbi5hY3Rpb24tYnRuOmhvdmVyIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiBsYXJnZTtcbn1cblxuLmJhbGFuY2UtdG9rZW4ge1xuICBtYXgtaGVpZ2h0OiA0MHB4O1xuICBmbG9hdDogbGVmdDtcbiAgbWF4LXdpZHRoOiAzNXB4O1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG59XG5cbi5iYWxhbmNlLXRva2VubmFtZSB7XG4gIGZsb2F0OiByaWdodDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLXRvcDogNXB4O1xuICBmb250LXNpemU6IDE3cHg7XG4gIGZvbnQtd2VpZ2h0OiAxMjAwO1xufVxuXG4uYWJici1uYW1lIHtcbiAgZm9udC1zdHlsZTogb2JsaXF1ZTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLyoqIFNLRUxFVE9OIENTUyAqL1xuLndyYXBwZXIge1xuICB3aWR0aDogMjUwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5za2VsZXRvbi1pY29uIHtcbiAgc2l6ZTogMC41cmVtO1xufVxuXG4uc2tlbGV0b24tbmFtZSB7XG4gIHdpZHRoOiAyMCU7XG59XG5cbi5za2VsZXRvbi1hbW91bnQge1xuICB3aWR0aDogNSU7XG59XG5cbi5pb3MgLnNrZWxldG9uLWFtb3VudCB7XG4gIG1hcmdpbi1sZWZ0OiAxMCU7XG59XG5cbi5pb3MgLnNrZWxldG9uLW5hbWUge1xuICB3aWR0aDogMjAlO1xufVxuXG5pb24tZ3JpZDpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZjJmMmYyKTtcbn1cblxuaW9uLXJvdyB7XG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgI0ZGNjcxRTtcbiAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgIzFGQjRDRDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTAwcHgpIHtcbiAgLnNrZWxldG9uLWljb24ge1xuICAgIHNpemU6IDAuNXJlbTtcbiAgfVxuXG4gIC5za2VsZXRvbi1uYW1lIHtcbiAgICB3aWR0aDogMjAlO1xuICB9XG5cbiAgLnNrZWxldG9uLWFtb3VudCB7XG4gICAgbWFyZ2luLWxlZnQ6IDkwJTtcbiAgICB3aWR0aDogNSU7XG4gIH1cbn1cbi5iYWxhbmNlIHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG5pb24tY29sIHtcbiAgLS1pb24tZ3JpZC1jb2x1bW5zOiAwO1xufVxuXG5pb24tZ3JpZCB7XG4gIC0taW9uLWdyaWQtd2lkdGgtc206IDI0MHB4O1xuICAtLWlvbi1ncmlkLXdpZHRoLWxnOiAyNDBweDtcbiAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMnB4O1xufVxuXG5pb24tY2FyZC1oZWFkZXIge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZjJmMmYyKTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsICNmZmYpIDAlLCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwgI2YyZjJmMikgMTAwJSkgIWltcG9ydGFudDtcbn1cblxuaW9uLWNhcmQtY29udGVudCB7XG4gIHBhZGRpbmc6IDVweDtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwgI2YyZjJmMik7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZmZmKSAwJSwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsICNmMmYyZjIpIDEwMCUpICFpbXBvcnRhbnQ7XG59XG5cbi50b2tlbkRlc2NyLW1vZGFsIC5tb2RhbC13cmFwcGVyIHtcbiAgd2lkdGg6IDE1MDBweDtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4uc21hbGwtdGV4dCB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG9wYWNpdHk6IDAuNzU7XG59Il19 */"

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