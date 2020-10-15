(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-balance-balance-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/balance/balance.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/balance/balance.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button class=\"menu-icon\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title class=\"large-text\">\n      Balance\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n  <ion-content class=\"ion-padding\">\n  <ion-card>\n      <ion-card-header>\n        Your tokens\n      </ion-card-header>\n  <ion-card-content>\n\n  <ion-grid *ngFor=\"let token of tokenArr;\">\n      <ion-item-sliding #slidingItem>\n        <ion-item-options side=\"start\">\n        <ion-item-option id=\"receive\" class=\"small-text\" (click)=\"closeSliding(slidingItem)\" routerLink=\"/my-address\">Receive</ion-item-option>\n        <ion-item-option id=\"send\" class=\"small-text\" (click)=\"sendTokenOver(slidingItem, token.tokenid)\">Send</ion-item-option>\n        </ion-item-options>\n  <!-- TOKENS ONLY -->\n  <ion-item lines=\"full\" routerLink=\"/view-tokens/{{ token.tokenid }}\">\n\n    <ion-row>\n    <ion-col sizeLg=\"2\" sizeMd=\"2\" sizeSm=\"1\" sizeXl=\"2\" sizeXs=\"12\" align-self-center>\n      <ion-avatar>\n        <img *ngIf=\"token.icon\" alt=\"Avatar\" class=\"balance-token\" src=\"{{ token.icon }}\">\n        <img *ngIf=\"!token.icon || token.icon.length <= 0\" alt=\"Avatar\" class=\"balance-token\" src=\"assets/icon/icon.png\">\n      </ion-avatar>\n    </ion-col>\n\n    <ion-col sizeLg=\"7\" sizeMd=\"8\" sizeSm=\"8\" sizeXl=\"8\" sizeXs=\"12\" align-self-center> \n      <span class=\"medium-text\"> {{ token.token  }} &#8212; </span> \n      <span class=\"abbr-name small-text\"> {{ token.token.substring(0,3) }} </span>\n    </ion-col>\n\n    <ion-col id=\"balance\" sizeLg=\"3\" sizeMd=\"2\" sizeSm=\"3\" sizeXl=\"2\" sizeXs=\"12\" align-self-center> \n      \n        <span *ngIf=\"token.confirmed == token.sendable && token.mempool == 0 && token.unconfirmed == 0;\" class=\"confirmed-amount medium-text\">{{ token.confirmed }}</span>\n\n        <span *ngIf=\"token.confirmed == token.sendable && token.mempool == 0 && token.unconfirmed != 0\" class=\"confirmed-amount medium-text\">{{ token.confirmed+\"/\"+token.unconfirmed }}</span>\n\n        <span *ngIf=\"token.confirmed == token.sendable && token.mempool != 0 && token.unconfirmed == 0\" class=\"confirmed-amount medium-text\">{{ token.confirmed +\"/\"+ token.mempool}} </span>\n\n        <span *ngIf=\"token.confirmed != token.sendable && token.mempool == 0 && token.unconfirmed == 0\" class=\"confirmed-amount medium-text\">{{ token.confirmed +\"/\"+token.sendable}}</span>\n\n        <span *ngIf=\"token.confirmed != token.sendable && token.mempool == 0 && token.unconfirmed != 0\" class=\"confirmed-amount medium-text\">{{ token.confirmed +\"/\"+token.unconfirmed+\"/\"+token.sendable}}</span>\n        \n        <span *ngIf=\"token.confirmed != token.sendable && token.mempool != 0 && token.unconfirmed == 0\" class=\"confirmed-amount medium-text\">{{ token.confirmed +\"/\"+token.sendable + \"/\" + token.mempool}}</span>\n\n    </ion-col> \n  </ion-row>\n  \n  </ion-item>\n          <ion-item-options side=\"end\">\n          <ion-item-option class=\"small-text\" (click)=\"presentPopover(slidingItem, $event, token.tokenid)\">Token ID</ion-item-option>\n          </ion-item-options>\n        </ion-item-sliding>\n    </ion-grid> \n  </ion-card-content>\n  </ion-card>\n\n\n  </ion-content>\n\n  \n\n  <ion-footer>\n    <ion-toolbar>\n      <ion-buttons>\n        <ion-button class=\"action-btn medium-text\" shape=\"\" expand=\"block\" type=\"button\" (click)=\"giveMe50()\">\n          <ion-icon name=\"cash\" slot=\"start\"></ion-icon> Gimme 50\n        </ion-button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-footer>"

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
        children: [
            {
                path: 'view-txn',
                loadChildren: function () { return __webpack_require__.e(/*! import() | view-tokens-view-tokens-module */ "view-tokens-view-tokens-module").then(__webpack_require__.bind(null, /*! ./view-tokens/view-tokens.module */ "./src/app/pages/balance/view-tokens/view-tokens.module.ts")).then(function (m) { return m.ViewTokensPageModule; }); }
            }
        ]
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

module.exports = "ion-item {\n  border-left: 2px solid rgba(246, 102, 31, 0.3);\n  border-right: 2px solid rgba(56, 180, 205, 0.3);\n  width: 100%;\n}\n\nion-row {\n  width: 100%;\n}\n\nion-item:hover {\n  background: var(--ion-background-color, rgba(255, 255, 255, 0.8));\n  border-left: 2px solid rgba(246, 102, 31, 0.7);\n  border-right: 2px solid rgba(56, 180, 205, 0.7);\n}\n\nion-item:hover ion-row {\n  -webkit-transform: scale(1.01);\n          transform: scale(1.01);\n}\n\nion-card-content {\n  background: var(--ion-card-color);\n}\n\nion-card-header {\n  background: var(--ion-card-header);\n}\n\nion-item-option {\n  font-size: 1rem;\n  letter-spacing: -0.02em;\n}\n\n#send {\n  background-color: #FF671E;\n}\n\nion-avatar {\n  width: 100% !important;\n  height: 100% !important;\n  max-width: 20px !important;\n  max-height: 150px !important;\n}\n\nimg {\n  -webkit-transform: scale(0.8);\n          transform: scale(0.8);\n  padding: 6px !important;\n  border: 1.25px solid var(--minima-icons);\n  max-width: 165px;\n  max-height: 85px;\n  width: 120px;\n  border-radius: 50%;\n}\n\nion-footer ion-toolbar ion-buttons ion-button {\n  width: 100%;\n}\n\n.balance-token {\n  max-height: 40px;\n  max-width: 35px;\n  padding-right: 5px;\n}\n\n.balance-tokenname {\n  letter-spacing: -0.02em;\n  padding-top: 5px;\n  font-size: 17px;\n  font-weight: 1200;\n}\n\n.abbr-name {\n  font-style: oblique;\n  font-weight: 400;\n  text-transform: uppercase;\n}\n\n.tokenDescr-modal .modal-wrapper {\n  width: 1500px;\n  height: auto;\n}\n\n.small-text {\n  font-weight: 500;\n  opacity: 0.75;\n}\n\nion-toolbar {\n  --background: var(--card-header-color);\n}\n\nion-col {\n  padding: 0 !important;\n}\n\n#balance span {\n  margin-left: 7px;\n}\n\n#balance {\n  font-weight: 600;\n  opacity: 0.7;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGlhc25lbXIvcHJvamVjdHMvV0FMTEVUL21vYmlsZS1hcHAtZnJvbnQtZW5kL2FwcC9zcmMvYXBwL3BhZ2VzL2JhbGFuY2UvYmFsYW5jZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2JhbGFuY2UvYmFsYW5jZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw4Q0FBQTtFQUNBLCtDQUFBO0VBQ0EsV0FBQTtBQ0NGOztBRENBO0VBQ0UsV0FBQTtBQ0VGOztBREFBO0VBQ0UsaUVBQUE7RUFDQSw4Q0FBQTtFQUNBLCtDQUFBO0FDR0Y7O0FERkU7RUFDRSw4QkFBQTtVQUFBLHNCQUFBO0FDSUo7O0FEREE7RUFFRSxpQ0FBQTtBQ0dGOztBRERBO0VBQ0Usa0NBQUE7QUNJRjs7QURGQTtFQUNFLGVBQUE7RUFDQSx1QkFBQTtBQ0tGOztBREZBO0VBQ0UseUJBQUE7QUNLRjs7QURGQTtFQUNFLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSwwQkFBQTtFQUNBLDRCQUFBO0FDS0Y7O0FESEE7RUFDRSw2QkFBQTtVQUFBLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSx3Q0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNNRjs7QURKQTtFQUNJLFdBQUE7QUNPSjs7QURMQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDUUY7O0FETkE7RUFDRSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDU0Y7O0FEUEE7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QUNVRjs7QUROQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0FDU0Y7O0FEUEE7RUFDRSxnQkFBQTtFQUNBLGFBQUE7QUNVRjs7QURSQTtFQUNFLHNDQUFBO0FDV0Y7O0FEVEE7RUFDRSxxQkFBQTtBQ1lGOztBRFZBO0VBQ0UsZ0JBQUE7QUNhRjs7QURYQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtBQ2NGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYmFsYW5jZS9iYWxhbmNlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pdGVtIHtcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCByZ2JhKDI0NiwxMDIsMzEsIDAuMyk7XG4gIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIHJnYmEoNTYsMTgwLDIwNSwgMC4zKTtcbiAgd2lkdGg6IDEwMCU7XG59XG5pb24tcm93IHtcbiAgd2lkdGg6IDEwMCU7XG59XG5pb24taXRlbTpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCByZ2JhKDI1NSwyNTUsMjU1LCAwLjgpKTtcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCByZ2JhKDI0NiwxMDIsMzEsIDAuNyk7XG4gIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIHJnYmEoNTYsMTgwLDIwNSwgMC43KTtcbiAgaW9uLXJvdyB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAxKTtcbiAgfVxufVxuaW9uLWNhcmQtY29udGVudCB7XG5cbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNhcmQtY29sb3IpO1xufVxuaW9uLWNhcmQtaGVhZGVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNhcmQtaGVhZGVyKTtcbn1cbmlvbi1pdGVtLW9wdGlvbiB7XG4gIGZvbnQtc2l6ZTogMS4wcmVtO1xuICBsZXR0ZXItc3BhY2luZzogLTAuMDJlbTtcbn1cblxuI3NlbmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY2NzFFO1xufVxuXG5pb24tYXZhdGFyIHtcbiAgd2lkdGg6MTAwJSAhaW1wb3J0YW50OyAgXG4gIGhlaWdodCA6IDEwMCUgIWltcG9ydGFudDsgIFxuICBtYXgtd2lkdGg6IDIwcHggIWltcG9ydGFudDsgIC8vYW55IHNpemVcbiAgbWF4LWhlaWdodDogMTUwcHggIWltcG9ydGFudDsgLy9hbnkgc2l6ZSBcbn1cbmltZyB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC44KTtcbiAgcGFkZGluZzogNnB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMS4yNXB4IHNvbGlkIHZhcigtLW1pbmltYS1pY29ucyk7XG4gIG1heC13aWR0aDogMTY1cHg7XG4gIG1heC1oZWlnaHQ6IDg1cHg7XG4gIHdpZHRoOiAxMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuaW9uLWZvb3RlciBpb24tdG9vbGJhciBpb24tYnV0dG9ucyBpb24tYnV0dG9ue1xuICAgIHdpZHRoOiAxMDAlO1xuIH1cbi5iYWxhbmNlLXRva2VuIHtcbiAgbWF4LWhlaWdodDogNDBweDtcbiAgbWF4LXdpZHRoOiAzNXB4O1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG59XG4uYmFsYW5jZS10b2tlbm5hbWUge1xuICBsZXR0ZXItc3BhY2luZzogLTAuMDJlbTtcbiAgcGFkZGluZy10b3A6IDVweDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBmb250LXdlaWdodDogMTIwMDtcbn1cbi5hYmJyLW5hbWUge1xuICBmb250LXN0eWxlOiBvYmxpcXVlO1xuICBmb250LXdlaWdodDogNDAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB9XG5cblxuLnRva2VuRGVzY3ItbW9kYWwgLm1vZGFsLXdyYXBwZXJ7XG4gIHdpZHRoOiAxNTAwcHg7XG4gIGhlaWdodDogYXV0bztcbn1cbi5zbWFsbC10ZXh0IHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgb3BhY2l0eTogMC43NTtcbn1cbmlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1jYXJkLWhlYWRlci1jb2xvcik7XG59XG5pb24tY29sIHtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xufVxuI2JhbGFuY2Ugc3BhbiB7XG4gIG1hcmdpbi1sZWZ0OiA3cHg7XG59XG4jYmFsYW5jZSB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG9wYWNpdHk6IDAuNztcbn0iLCJpb24taXRlbSB7XG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgcmdiYSgyNDYsIDEwMiwgMzEsIDAuMyk7XG4gIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIHJnYmEoNTYsIDE4MCwgMjA1LCAwLjMpO1xuICB3aWR0aDogMTAwJTtcbn1cblxuaW9uLXJvdyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5pb24taXRlbTpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCkpO1xuICBib3JkZXItbGVmdDogMnB4IHNvbGlkIHJnYmEoMjQ2LCAxMDIsIDMxLCAwLjcpO1xuICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCByZ2JhKDU2LCAxODAsIDIwNSwgMC43KTtcbn1cbmlvbi1pdGVtOmhvdmVyIGlvbi1yb3cge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDEpO1xufVxuXG5pb24tY2FyZC1jb250ZW50IHtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNhcmQtY29sb3IpO1xufVxuXG5pb24tY2FyZC1oZWFkZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY2FyZC1oZWFkZXIpO1xufVxuXG5pb24taXRlbS1vcHRpb24ge1xuICBmb250LXNpemU6IDFyZW07XG4gIGxldHRlci1zcGFjaW5nOiAtMC4wMmVtO1xufVxuXG4jc2VuZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRjY3MUU7XG59XG5cbmlvbi1hdmF0YXIge1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbiAgbWF4LXdpZHRoOiAyMHB4ICFpbXBvcnRhbnQ7XG4gIG1heC1oZWlnaHQ6IDE1MHB4ICFpbXBvcnRhbnQ7XG59XG5cbmltZyB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC44KTtcbiAgcGFkZGluZzogNnB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMS4yNXB4IHNvbGlkIHZhcigtLW1pbmltYS1pY29ucyk7XG4gIG1heC13aWR0aDogMTY1cHg7XG4gIG1heC1oZWlnaHQ6IDg1cHg7XG4gIHdpZHRoOiAxMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG5pb24tZm9vdGVyIGlvbi10b29sYmFyIGlvbi1idXR0b25zIGlvbi1idXR0b24ge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmJhbGFuY2UtdG9rZW4ge1xuICBtYXgtaGVpZ2h0OiA0MHB4O1xuICBtYXgtd2lkdGg6IDM1cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbn1cblxuLmJhbGFuY2UtdG9rZW5uYW1lIHtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjAyZW07XG4gIHBhZGRpbmctdG9wOiA1cHg7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgZm9udC13ZWlnaHQ6IDEyMDA7XG59XG5cbi5hYmJyLW5hbWUge1xuICBmb250LXN0eWxlOiBvYmxpcXVlO1xuICBmb250LXdlaWdodDogNDAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4udG9rZW5EZXNjci1tb2RhbCAubW9kYWwtd3JhcHBlciB7XG4gIHdpZHRoOiAxNTAwcHg7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLnNtYWxsLXRleHQge1xuICBmb250LXdlaWdodDogNTAwO1xuICBvcGFjaXR5OiAwLjc1O1xufVxuXG5pb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tY2FyZC1oZWFkZXItY29sb3IpO1xufVxuXG5pb24tY29sIHtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xufVxuXG4jYmFsYW5jZSBzcGFuIHtcbiAgbWFyZ2luLWxlZnQ6IDdweDtcbn1cblxuI2JhbGFuY2Uge1xuICBmb250LXdlaWdodDogNjAwO1xuICBvcGFjaXR5OiAwLjc7XG59Il19 */"

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








var BalancePage = /** @class */ (function () {
    function BalancePage(service, api, alertController, popoverController, route) {
        this.service = service;
        this.api = api;
        this.alertController = alertController;
        this.popoverController = popoverController;
        this.route = route;
        this.tokenArr = [];
        this.tokenSpoof = [];
        // - vars
        this.lastJSON = '';
        this.MINIMA = '0x00';
        this.pullInTokens();
    }
    BalancePage.prototype.ionViewWillEnter = function () { };
    BalancePage.prototype.giveMe50 = function () {
        var _this = this;
        this.api.giveMe50().then(function (res) {
            if (res.status === true) {
                _this.presentAlert(res.message, 'Success.');
            }
            else {
                _this.presentAlert(res.message, 'Something went wrong.');
            }
        });
    };
    BalancePage.prototype.ngOnInit = function () { };
    BalancePage.prototype.ionViewWillLeave = function () {
        this.balanceSubscription.unsubscribe(); // unsubs
    };
    BalancePage.prototype.presentAlert = function (msg, hdr) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: hdr,
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
    BalancePage.prototype.closeSliding = function (slidingItem) {
        slidingItem.close();
    };
    BalancePage.prototype.sendTokenOver = function (slidingItem, id) {
        slidingItem.close();
        this.route.navigate(['/send-funds/' + id]);
    };
    BalancePage.prototype.presentPopover = function (slidingItem, ev, id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var popover;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverController.create({
                            component: _components_pop_over_pop_over_component__WEBPACK_IMPORTED_MODULE_5__["PopOverComponent"],
                            event: ev,
                            cssClass: 'balance-popover',
                            translucent: false,
                            componentProps: { tokenid: id },
                        })];
                    case 1:
                        popover = _a.sent();
                        slidingItem.close();
                        return [4 /*yield*/, popover.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    BalancePage.prototype.pullInTokens = function () {
        var _this = this;
        this.balanceSubscription = this.service.updatedBalance
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (responseData) {
            var tokenArr = [];
            for (var key in Minima.balance) {
                if (Minima.balance.hasOwnProperty(key)) {
                    var element = Minima.balance[key];
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
                        confirmed: element.confirmed,
                        unconfirmed: element.unconfirmed,
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
                            confirmed: element.confirmed,
                            unconfirmed: element.unconfirmed,
                            mempool: element.mempool,
                            sendable: element.sendable
                        });
                    }
                }
            }
            return tokenArr;
        }))
            .subscribe(function (responseData) {
            // check if changed
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
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }
    ]; };
    BalancePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-balance',
            template: __webpack_require__(/*! raw-loader!./balance.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/balance/balance.page.html"),
            styles: [__webpack_require__(/*! ./balance.page.scss */ "./src/app/pages/balance/balance.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_balance_service__WEBPACK_IMPORTED_MODULE_6__["BalanceService"],
            _service_minima_api_service__WEBPACK_IMPORTED_MODULE_2__["MinimaApiService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
    ], BalancePage);
    return BalancePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-balance-balance-module-es5.js.map