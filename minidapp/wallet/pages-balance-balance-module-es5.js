(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-balance-balance-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/components/grid-view/grid-view.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/grid-view/grid-view.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-grid>\r\n  <ion-row>\r\n    <ion-col *ngFor=\"let token of tokenArr; let i = index;\" size=\"12\" size-md=\"6\">\r\n      <ion-card routerLink=\"/view-tokens/{{ token.tokenid }}\" class=\"borders\" *ngIf=\"i <= tokenArr.length\" id=\"token-card\" [ngStyle] = \"{'border-right':  token.script && token.script === 'RETURN_TRUE' ? '3px solid var(--ion-color-secondary)' : '1px solid var(--ion-color-primary)'}\">\r\n        <ion-card-header>\r\n          <ion-item lines=\"none\">\r\n            <ion-avatar slot=\"start\">\r\n              <img *ngIf=\"token.tokenid !== '0x00' && token.icon.length == 0\" class=\"custom-icon\" [src]=\"createIcon( token.tokenid )\" />\r\n              <img *ngIf=\"token.tokenid !== '0x00' && token.icon.length > 0\" class=\"custom-icon\" [src]=\"token.icon\"/>\r\n              <img *ngIf=\"token.tokenid == '0x00'\" class=\"custom-icon\" alt=\"minima\" src=\"assets/minima-logo-box.svg\">\r\n            </ion-avatar>\r\n            <ion-label>\r\n              <h3> {{ token.token }} </h3>\r\n              <p *ngIf=\"token.tokenid === '0x00'\">Official Token</p>\r\n              <p *ngIf=\"token.tokenid !== '0x00'\"> {{ token.description }} </p>\r\n            </ion-label>\r\n            <ion-label>\r\n              <span *ngIf=\"token.unconfirmed != '0';\" class=\"confirmed-amount medium-text minima-numeric\">{{ token.sendable + \"/\" + token.unconfirmed  }}</span>\r\n              <span *ngIf=\"token.unconfirmed == '0';\" class=\"confirmed-amount medium-text minima-numeric\">{{ token.sendable }} </span>\r\n            </ion-label>\r\n          </ion-item>\r\n          <ion-icon class=\"nftIcon\" *ngIf=\"token.script && token.script === 'ASSERT FLOOR ( @AMOUNT ) EQ @AMOUNT LET checkout = 0 WHILE ( checkout LT @TOTOUT ) DO IF GETOUTTOK ( checkout ) EQ @TOKENID THEN LET outamt = GETOUTAMT ( checkout ) ASSERT FLOOR ( outamt ) EQ outamt ENDIF LET checkout = INC ( checkout ) ENDWHILE RETURN TRUE'\" src=\"assets/nft2.svg\"></ion-icon>\r\n        </ion-card-header>\r\n      </ion-card>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-grid>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/list-view/list-view.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/list-view/list-view.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-card class=\"borders\">\r\n  <ion-list>\r\n    <ion-list-header>All Tokens</ion-list-header>\r\n\r\n    <ion-item lines=\"half\" *ngFor=\"let token of tokenArr\" routerLink=\"/view-tokens/{{ token.tokenid }}\" [ngStyle] = \"{'border-left':  token.script && token.script === 'RETURN_TRUE' ? '3px solid var(--ion-color-secondary)' : '1px solid var(--ion-color-primary)'}\">\r\n      <ion-avatar slot=\"start\">\r\n        <img *ngIf=\"token.tokenid !== '0x00' && token.icon.length == 0\" [src]=\"createIcon( token.tokenid )\" class=\"custom-icon\" />\r\n        <img *ngIf=\"token.tokenid !== '0x00' && token.icon.length > 0\" class=\"custom-icon\" [src]=\"token.icon\"/>\r\n        <img *ngIf=\"token.tokenid == '0x00'\" class=\"custom-icon\" alt=\"minima\" src=\"assets/minima-logo-box.svg\">\r\n      </ion-avatar>\r\n\r\n      <ion-label id=\"token-name\">{{ token.token }}</ion-label>\r\n      \r\n      \r\n      <ion-label slot=\"end\">\r\n        <span *ngIf=\"token.unconfirmed != '0';\" class=\"confirmed-amount medium-text minima-numeric\">{{ token.sendable + \"/\" + token.unconfirmed  }}</span>\r\n        <span *ngIf=\"token.unconfirmed == '0';\" class=\"confirmed-amount medium-text minima-numeric\">{{ token.sendable }} </span>\r\n      </ion-label>\r\n    </ion-item>\r\n    \r\n    \r\n  </ion-list>\r\n</ion-card>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/balance/balance.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/balance/balance.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-app>\r\n<ion-header class=\"ion-no-border\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      Balance\r\n    </ion-title>\r\n    <ion-icon (click)=\"presentSettings($event)\" id=\"settings\" slot=\"end\" name=\"options\"></ion-icon>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n  <ion-content>\r\n    <ion-toolbar *ngIf=\"user && user.tips && !user.tips.balance2 && tokenArr.length > 0\">\r\n      <ion-badge id=\"tip\">\r\n      <ion-row>\r\n        <ion-col class=\"center\" size=\"1\">\r\n          <ion-icon id=\"info\" name=\"information-circle-outline\"></ion-icon>\r\n        </ion-col>\r\n        <ion-col class=\"center\">\r\n          <ion-label>\r\n            You can change your token-display mode by clicking the settings button (<ion-icon name=\"options\"></ion-icon>) top-right.\r\n          </ion-label>\r\n        </ion-col>\r\n        <ion-col class=\"center\" size=\"1\">\r\n          <span (click)=\"hideTip()\" id=\"dismiss\">&times;</span>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-badge>\r\n    </ion-toolbar>\r\n    <ion-grid *ngIf=\"user && user.tips && !user.tips.balance && tokenArr.length > 0\">\r\n      <ion-row>\r\n        <ion-col size=\"12\">\r\n          <ion-card *ngIf=\"tokenArr.length > 0\" class=\"borders\" id=\"tutorial-card\">\r\n            <span (click)=\"hide()\" id=\"dismiss\">&times;</span>\r\n            <ion-card-header class=\"text-center\">\r\n              <ion-card-title>\r\n                <ion-avatar>\r\n                  <img src=\"assets/confetti.svg\" alt=\"confetti\" id=\"confetti\">\r\n                </ion-avatar>\r\n                Welcome to Minima's first official wallet! \r\n              </ion-card-title>\r\n            </ion-card-header>\r\n            <ion-card-content>\r\n              <p>Here you will find your <span style=\"font-family:manrope-bold\">Minima</span> token balance and any <span style=\"font-family: manrope-bold;\">custom</span> token's balance you create or receive.</p>\r\n            </ion-card-content>\r\n          </ion-card>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n\r\n    <ion-grid *ngIf=\"tokenArr.length == 0\">\r\n      <ion-row>\r\n        <ion-col style=\"display: flex; align-items:center; justify-content:center\" size=\"12\">\r\n          <ion-label>Fetching tokens...</ion-label>\r\n        </ion-col>\r\n        <ion-col style=\"display: flex; align-items:center; justify-content:center\" size=\"12\">\r\n          <ion-spinner name=\"crescent\"></ion-spinner>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n\r\n    <div *ngIf=\"user.tokenDisplayMode && user.tokenDisplayMode === 1\">\r\n      <app-grid-view *ngIf=\"tokenArr && tokenArr.length > 0\" [tokenArr] = \"tokenArr\"></app-grid-view>\r\n    </div>\r\n\r\n    <div *ngIf=\"user.tokenDisplayMode && user.tokenDisplayMode === 2\">\r\n      <app-list-view *ngIf=\"tokenArr && tokenArr.length > 0\" [tokenArr] = \"tokenArr\"></app-list-view>\r\n    </div>\r\n\r\n  </ion-content>\r\n\r\n  <ion-footer class=\"border-t\">\r\n    <ion-toolbar>\r\n      <ion-buttons>\r\n        <ion-button #gimme50Btn expand=\"block\" type=\"button\" (click)=\"giveMe50()\">\r\n          <ion-icon name=\"cash\" slot=\"start\"></ion-icon> Gimme 50\r\n        </ion-button>\r\n      </ion-buttons>\r\n    </ion-toolbar>\r\n  </ion-footer>\r\n</ion-app>"

/***/ }),

/***/ "./src/app/components/grid-view/grid-view.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/grid-view/grid-view.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-row {\n  width: 100%;\n}\n\n#token-card:hover {\n  -webkit-transform: scale(1.001);\n          transform: scale(1.001);\n  border-color: var(--ion-color-primary);\n}\n\n#token-card ion-label {\n  margin: 0;\n}\n\nion-card-header {\n  font-family: manrope-bold;\n  color: var(--ion-color-tertiary);\n  background: var(--ion-m-background);\n}\n\nimg {\n  width: 200px;\n}\n\n.custom-icon {\n  max-height: 40px !important;\n  max-width: 40px !important;\n}\n\nion-icon.nftIcon {\n  font-size: 2rem;\n  z-index: 1;\n  position: absolute;\n  right: 0;\n  bottom: 2%;\n}\n\nion-icon.nftIcon:hover {\n  -webkit-transform: scale(1.1);\n          transform: scale(1.1);\n}\n\np {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGlhc25lbXIvcHJvamVjdHMvV0FMTEVUL21vYmlsZS1hcHAtZnJvbnQtZW5kL2FwcC9zcmMvYXBwL2NvbXBvbmVudHMvZ3JpZC12aWV3L2dyaWQtdmlldy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9ncmlkLXZpZXcvZ3JpZC12aWV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFFO0VBQ0UsV0FBQTtBQ0NKOztBRENFO0VBQ0UsK0JBQUE7VUFBQSx1QkFBQTtFQUNBLHNDQUFBO0FDRUo7O0FEQUU7RUFDRSxTQUFBO0FDR0o7O0FEREU7RUFDRSx5QkFBQTtFQUNBLGdDQUFBO0VBQ0EsbUNBQUE7QUNJSjs7QURGRTtFQUNFLFlBQUE7QUNLSjs7QURIRTtFQUNFLDJCQUFBO0VBQ0EsMEJBQUE7QUNNSjs7QURKRTtFQUNFLGVBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtBQ09KOztBRExFO0VBQ0UsNkJBQUE7VUFBQSxxQkFBQTtBQ1FKOztBRE5FO0VBQ0UsU0FBQTtBQ1NKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ncmlkLXZpZXcvZ3JpZC12aWV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiICBpb24tcm93IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAjdG9rZW4tY2FyZDpob3ZlciB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDAxKTtcclxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gIH1cclxuICAjdG9rZW4tY2FyZCBpb24tbGFiZWwge1xyXG4gICAgbWFyZ2luOjA7XHJcbiAgfVxyXG4gIGlvbi1jYXJkLWhlYWRlciB7XHJcbiAgICBmb250LWZhbWlseTogbWFucm9wZS1ib2xkO1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeSk7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tbS1iYWNrZ3JvdW5kKTtcclxuICB9XHJcbiAgaW1nIHtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICB9XHJcbiAgLmN1c3RvbS1pY29uIHtcclxuICAgIG1heC1oZWlnaHQ6IDQwcHggIWltcG9ydGFudDtcclxuICAgIG1heC13aWR0aDogNDBweCAhaW1wb3J0YW50OyAgIFxyXG4gIH1cclxuICBpb24taWNvbi5uZnRJY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMi4wcmVtO1xyXG4gICAgei1pbmRleDoxOyBcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OjA7XHJcbiAgICBib3R0b206IDIlO1xyXG4gIH1cclxuICBpb24taWNvbi5uZnRJY29uOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxuICB9XHJcbiAgcCB7XHJcbiAgICBtYXJnaW46MDtcclxuICB9IiwiaW9uLXJvdyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4jdG9rZW4tY2FyZDpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wMDEpO1xuICBib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuI3Rva2VuLWNhcmQgaW9uLWxhYmVsIHtcbiAgbWFyZ2luOiAwO1xufVxuXG5pb24tY2FyZC1oZWFkZXIge1xuICBmb250LWZhbWlseTogbWFucm9wZS1ib2xkO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5KTtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLW0tYmFja2dyb3VuZCk7XG59XG5cbmltZyB7XG4gIHdpZHRoOiAyMDBweDtcbn1cblxuLmN1c3RvbS1pY29uIHtcbiAgbWF4LWhlaWdodDogNDBweCAhaW1wb3J0YW50O1xuICBtYXgtd2lkdGg6IDQwcHggIWltcG9ydGFudDtcbn1cblxuaW9uLWljb24ubmZ0SWNvbiB7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgei1pbmRleDogMTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAyJTtcbn1cblxuaW9uLWljb24ubmZ0SWNvbjpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbn1cblxucCB7XG4gIG1hcmdpbjogMDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/grid-view/grid-view.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/grid-view/grid-view.component.ts ***!
  \*************************************************************/
/*! exports provided: GridViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridViewComponent", function() { return GridViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var spark_md5__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! spark-md5 */ "./node_modules/spark-md5/spark-md5.js");
/* harmony import */ var spark_md5__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(spark_md5__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");




var GridViewComponent = /** @class */ (function () {
    function GridViewComponent(toastController) {
        this.toastController = toastController;
        this.tokenArr = [];
    }
    GridViewComponent.prototype.ngOnInit = function () { };
    GridViewComponent.prototype.createIcon = function (tokenid) {
        return this.avatar = 'https://www.gravatar.com/avatar/' + spark_md5__WEBPACK_IMPORTED_MODULE_2__["hash"](tokenid) + '?d=identicon';
    };
    GridViewComponent.prototype.presentToast = function (msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: msg,
                            duration: 2000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    GridViewComponent.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ToastController"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], GridViewComponent.prototype, "tokenArr", void 0);
    GridViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-grid-view',
            template: __webpack_require__(/*! raw-loader!./grid-view.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/grid-view/grid-view.component.html"),
            styles: [__webpack_require__(/*! ./grid-view.component.scss */ "./src/app/components/grid-view/grid-view.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ToastController"]])
    ], GridViewComponent);
    return GridViewComponent;
}());



/***/ }),

/***/ "./src/app/components/list-view/list-view.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/list-view/list-view.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".custom-icon {\n  width: 40px;\n  height: 40px;\n}\n\n.item-avatar {\n  width: 100% !important;\n  height: 100% !important;\n  max-width: 75px !important;\n  max-height: 75px !important;\n}\n\n#token-name {\n  margin: 0;\n  display: inline-block;\n  white-space: nowrap;\n  font-size: 1rem !important;\n  max-width: inherit;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  font-family: manrope-bold;\n}\n\nion-item {\n  --border-color: var(--ion-color-line);\n}\n\nion-item:hover {\n  -webkit-transform: scale(1.001);\n          transform: scale(1.001);\n  --border-color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGlhc25lbXIvcHJvamVjdHMvV0FMTEVUL21vYmlsZS1hcHAtZnJvbnQtZW5kL2FwcC9zcmMvYXBwL2NvbXBvbmVudHMvbGlzdC12aWV3L2xpc3Qtdmlldy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9saXN0LXZpZXcvbGlzdC12aWV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNDSjs7QURDQTtFQUNJLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSwwQkFBQTtFQUNBLDJCQUFBO0FDRUo7O0FEQUE7RUFDSSxTQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QUNHSjs7QUREQTtFQUNJLHFDQUFBO0FDSUo7O0FERkE7RUFDSSwrQkFBQTtVQUFBLHVCQUFBO0VBQ0Esd0NBQUE7QUNLSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGlzdC12aWV3L2xpc3Qtdmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jdXN0b20taWNvbiB7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxufVxyXG4uaXRlbS1hdmF0YXIge1xyXG4gICAgd2lkdGg6MTAwJSAhaW1wb3J0YW50OyAgXHJcbiAgICBoZWlnaHQgOiAxMDAlICFpbXBvcnRhbnQ7ICBcclxuICAgIG1heC13aWR0aDogNzVweCAhaW1wb3J0YW50OyAgLy9hbnkgc2l6ZVxyXG4gICAgbWF4LWhlaWdodDogNzVweCAhaW1wb3J0YW50OyAvL2FueSBzaXplIFxyXG59XHJcbiN0b2tlbi1uYW1lIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBmb250LXNpemU6IDEuMHJlbSFpbXBvcnRhbnQ7XHJcbiAgICBtYXgtd2lkdGg6IGluaGVyaXQ7XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBmb250LWZhbWlseTogbWFucm9wZS1ib2xkO1xyXG59XHJcbmlvbi1pdGVtIHtcclxuICAgIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGluZSk7XHJcbn1cclxuaW9uLWl0ZW06aG92ZXIge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAwMSk7XHJcbiAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG59IiwiLmN1c3RvbS1pY29uIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbn1cblxuLml0ZW0tYXZhdGFyIHtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG4gIG1heC13aWR0aDogNzVweCAhaW1wb3J0YW50O1xuICBtYXgtaGVpZ2h0OiA3NXB4ICFpbXBvcnRhbnQ7XG59XG5cbiN0b2tlbi1uYW1lIHtcbiAgbWFyZ2luOiAwO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGZvbnQtc2l6ZTogMXJlbSAhaW1wb3J0YW50O1xuICBtYXgtd2lkdGg6IGluaGVyaXQ7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBmb250LWZhbWlseTogbWFucm9wZS1ib2xkO1xufVxuXG5pb24taXRlbSB7XG4gIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGluZSk7XG59XG5cbmlvbi1pdGVtOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjAwMSk7XG4gIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/list-view/list-view.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/list-view/list-view.component.ts ***!
  \*************************************************************/
/*! exports provided: ListViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListViewComponent", function() { return ListViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var spark_md5__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! spark-md5 */ "./node_modules/spark-md5/spark-md5.js");
/* harmony import */ var spark_md5__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(spark_md5__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var ListViewComponent = /** @class */ (function () {
    function ListViewComponent() {
        this.tokenArr = [];
    }
    ListViewComponent.prototype.ngOnInit = function () { };
    ListViewComponent.prototype.createIcon = function (tokenid) {
        return this.avatar = 'https://www.gravatar.com/avatar/' + spark_md5__WEBPACK_IMPORTED_MODULE_1__["hash"](tokenid) + '?d=identicon';
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], ListViewComponent.prototype, "tokenArr", void 0);
    ListViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-list-view',
            template: __webpack_require__(/*! raw-loader!./list-view.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/list-view/list-view.component.html"),
            styles: [__webpack_require__(/*! ./list-view.component.scss */ "./src/app/components/list-view/list-view.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ListViewComponent);
    return ListViewComponent;
}());



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
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _balance_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./balance.page */ "./src/app/pages/balance/balance.page.ts");
/* harmony import */ var _components_grid_view_grid_view_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/grid-view/grid-view.component */ "./src/app/components/grid-view/grid-view.component.ts");
/* harmony import */ var _components_list_view_list_view_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../components/list-view/list-view.component */ "./src/app/components/list-view/list-view.component.ts");









var routes = [
    {
        path: '',
        component: _balance_page__WEBPACK_IMPORTED_MODULE_6__["BalancePage"],
        children: [
            {
                path: 'view-txn',
                loadChildren: function () { return __webpack_require__.e(/*! import() | view-tokens-view-tokens-module */ "default~pages-balance-view-tokens-view-tokens-module~view-tokens-view-tokens-module").then(__webpack_require__.bind(null, /*! ./view-tokens/view-tokens.module */ "./src/app/pages/balance/view-tokens/view-tokens.module.ts")).then(function (m) { return m.ViewTokensPageModule; }); }
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
            declarations: [_balance_page__WEBPACK_IMPORTED_MODULE_6__["BalancePage"], _components_list_view_list_view_component__WEBPACK_IMPORTED_MODULE_8__["ListViewComponent"], _components_grid_view_grid_view_component__WEBPACK_IMPORTED_MODULE_7__["GridViewComponent"]]
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

module.exports = "ion-toolbar {\n  --background: var(--ion-m-background);\n  font-family: manrope-bold;\n  color: var(--ion-color-tertiary);\n}\nion-toolbar ion-title {\n  padding-top: 5%;\n  font-size: 1.2rem;\n}\nion-toolbar ion-buttons ion-menu-button {\n  font-size: 1rem;\n  color: var(--ion-color-tertiary);\n}\n#tutorial-card:hover {\n  -webkit-transform: scale(1.001);\n          transform: scale(1.001);\n}\nion-card-content {\n  background: var(--ion-m-background);\n}\nion-card-content p {\n  color: var(--ion-color-tertiary);\n}\nion-card-header {\n  font-family: manrope-bold;\n  color: var(--ion-color-tertiary);\n  background-color: var(--ion-gray-two);\n  background: var(--ion-m-background);\n}\nion-footer ion-toolbar ion-buttons ion-button {\n  width: 100%;\n  height: 47px;\n  text-transform: none;\n  font-family: manrope-bold;\n  color: var(--ion-color-tertiary);\n}\n#dismiss {\n  cursor: pointer;\n  right: 2.5%;\n  z-index: 1;\n  font-family: manrope-bold;\n  font-size: 1.5rem;\n  position: absolute;\n  color: #a63f44;\n}\n#settings {\n  margin-right: 5%;\n  cursor: pointer;\n}\nion-card-title {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: left;\n          justify-content: left;\n  color: var(--ion-color-primary);\n}\nion-avatar {\n  display: inline !important;\n  margin-right: 2.5%;\n}\nion-avatar img {\n  display: inline;\n  width: 75px;\n  height: inherit;\n}\nion-badge#tip {\n  white-space: normal;\n  align-self: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  width: 100%;\n  font-size: 0.8rem;\n  width: 90%;\n  margin-left: 5%;\n  margin-right: 2%;\n}\nion-badge#tip ion-icon#info {\n  font-size: 1.5rem;\n  margin-left: 3%;\n}\nion-badge#tip ion-col span#dismiss {\n  font-size: 1.5rem;\n  cursor: pointer;\n  color: #a63f44;\n}\n.center {\n  right: 2%;\n  -webkit-box-align: center !important;\n          align-items: center !important;\n  -webkit-box-pack: center !important;\n          justify-content: center !important;\n  display: -webkit-inline-box !important;\n  display: inline-flex !important;\n  text-align: center !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGlhc25lbXIvcHJvamVjdHMvV0FMTEVUL21vYmlsZS1hcHAtZnJvbnQtZW5kL2FwcC9zcmMvYXBwL3BhZ2VzL2JhbGFuY2UvYmFsYW5jZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2JhbGFuY2UvYmFsYW5jZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0NBQUE7QUNDRjtBREFFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FDRUo7QURBRTtFQUNFLGVBQUE7RUFDQSxnQ0FBQTtBQ0VKO0FEQ0E7RUFDRSwrQkFBQTtVQUFBLHVCQUFBO0FDRUY7QURBQTtFQUNFLG1DQUFBO0FDR0Y7QUREQTtFQUNFLGdDQUFBO0FDSUY7QURGQTtFQUNFLHlCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxxQ0FBQTtFQUNBLG1DQUFBO0FDS0Y7QURIQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSx5QkFBQTtFQUNBLGdDQUFBO0FDTUo7QURKQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUNPRjtBRExBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FDUUY7QUROQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxzQkFBQTtVQUFBLHFCQUFBO0VBQ0EsK0JBQUE7QUNTRjtBRFBBO0VBQ0UsMEJBQUE7RUFDQSxrQkFBQTtBQ1VGO0FEUkE7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUNXRjtBRFRBO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDWUY7QURWQTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtBQ2FGO0FEWEE7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDY0Y7QURaQTtFQUNFLFNBQUE7RUFDQSxvQ0FBQTtVQUFBLDhCQUFBO0VBQ0EsbUNBQUE7VUFBQSxrQ0FBQTtFQUNBLHNDQUFBO0VBQUEsK0JBQUE7RUFDQSw2QkFBQTtBQ2VGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYmFsYW5jZS9iYWxhbmNlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIHtcclxuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1tLWJhY2tncm91bmQpO1xyXG4gIGZvbnQtZmFtaWx5OiBtYW5yb3BlLWJvbGQ7XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeSk7XHJcbiAgaW9uLXRpdGxlIHtcclxuICAgIHBhZGRpbmctdG9wOiA1JTtcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIH1cclxuICBpb24tYnV0dG9ucyBpb24tbWVudS1idXR0b24ge1xyXG4gICAgZm9udC1zaXplOiAxLjByZW07XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5KTtcclxuICB9XHJcbn1cclxuI3R1dG9yaWFsLWNhcmQ6aG92ZXIge1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wMDEpO1xyXG59XHJcbmlvbi1jYXJkLWNvbnRlbnQge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1tLWJhY2tncm91bmQpO1xyXG59XHJcbmlvbi1jYXJkLWNvbnRlbnQgcCB7XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeSk7XHJcbn1cclxuaW9uLWNhcmQtaGVhZGVyIHtcclxuICBmb250LWZhbWlseTogbWFucm9wZS1ib2xkO1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnkpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1ncmF5LXR3byk7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLW0tYmFja2dyb3VuZCk7XHJcbn1cclxuaW9uLWZvb3RlciBpb24tdG9vbGJhciBpb24tYnV0dG9ucyBpb24tYnV0dG9uIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA0N3B4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICBmb250LWZhbWlseTogbWFucm9wZS1ib2xkO1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeSk7XHJcbiB9XHJcbiNkaXNtaXNzIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgcmlnaHQ6IDIuNSU7XHJcbiAgei1pbmRleDogMTtcclxuICBmb250LWZhbWlseTogbWFucm9wZS1ib2xkO1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBjb2xvcjogI2E2M2Y0NDtcclxufVxyXG4jc2V0dGluZ3Mge1xyXG4gIG1hcmdpbi1yaWdodDogNSU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbmlvbi1jYXJkLXRpdGxlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbn1cclxuaW9uLWF2YXRhciB7XHJcbiAgZGlzcGxheTogaW5saW5lICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyLjUlO1xyXG59XHJcbmlvbi1hdmF0YXIgaW1nIHtcclxuICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgd2lkdGg6IDc1cHg7XHJcbiAgaGVpZ2h0OiBpbmhlcml0O1xyXG59XHJcbmlvbi1iYWRnZSN0aXAge1xyXG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgbWFyZ2luLWxlZnQ6IDUlO1xyXG4gIG1hcmdpbi1yaWdodDogMiU7XHJcbn1cclxuaW9uLWJhZGdlI3RpcCBpb24taWNvbiNpbmZvIHtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxuICBtYXJnaW4tbGVmdDogMyU7XHJcbn1cclxuaW9uLWJhZGdlI3RpcCBpb24tY29sIHNwYW4jZGlzbWlzcyB7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGNvbG9yOiAjYTYzZjQ0O1xyXG59XHJcbi5jZW50ZXIge1xyXG4gIHJpZ2h0OiAyJTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleCAhaW1wb3J0YW50O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xyXG59XHJcbiIsImlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tbS1iYWNrZ3JvdW5kKTtcbiAgZm9udC1mYW1pbHk6IG1hbnJvcGUtYm9sZDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeSk7XG59XG5pb24tdG9vbGJhciBpb24tdGl0bGUge1xuICBwYWRkaW5nLXRvcDogNSU7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xufVxuaW9uLXRvb2xiYXIgaW9uLWJ1dHRvbnMgaW9uLW1lbnUtYnV0dG9uIHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5KTtcbn1cblxuI3R1dG9yaWFsLWNhcmQ6aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDAxKTtcbn1cblxuaW9uLWNhcmQtY29udGVudCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1tLWJhY2tncm91bmQpO1xufVxuXG5pb24tY2FyZC1jb250ZW50IHAge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5KTtcbn1cblxuaW9uLWNhcmQtaGVhZGVyIHtcbiAgZm9udC1mYW1pbHk6IG1hbnJvcGUtYm9sZDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1ncmF5LXR3byk7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1tLWJhY2tncm91bmQpO1xufVxuXG5pb24tZm9vdGVyIGlvbi10b29sYmFyIGlvbi1idXR0b25zIGlvbi1idXR0b24ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0N3B4O1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgZm9udC1mYW1pbHk6IG1hbnJvcGUtYm9sZDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeSk7XG59XG5cbiNkaXNtaXNzIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICByaWdodDogMi41JTtcbiAgei1pbmRleDogMTtcbiAgZm9udC1mYW1pbHk6IG1hbnJvcGUtYm9sZDtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29sb3I6ICNhNjNmNDQ7XG59XG5cbiNzZXR0aW5ncyB7XG4gIG1hcmdpbi1yaWdodDogNSU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuaW9uLWNhcmQtdGl0bGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbmlvbi1hdmF0YXIge1xuICBkaXNwbGF5OiBpbmxpbmUgIWltcG9ydGFudDtcbiAgbWFyZ2luLXJpZ2h0OiAyLjUlO1xufVxuXG5pb24tYXZhdGFyIGltZyB7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgd2lkdGg6IDc1cHg7XG4gIGhlaWdodDogaW5oZXJpdDtcbn1cblxuaW9uLWJhZGdlI3RpcCB7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luLWxlZnQ6IDUlO1xuICBtYXJnaW4tcmlnaHQ6IDIlO1xufVxuXG5pb24tYmFkZ2UjdGlwIGlvbi1pY29uI2luZm8ge1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgbWFyZ2luLWxlZnQ6IDMlO1xufVxuXG5pb24tYmFkZ2UjdGlwIGlvbi1jb2wgc3BhbiNkaXNtaXNzIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6ICNhNjNmNDQ7XG59XG5cbi5jZW50ZXIge1xuICByaWdodDogMiU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcbiAgZGlzcGxheTogaW5saW5lLWZsZXggIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG59Il19 */"

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
/* harmony import */ var _service_userconfig_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../service/userconfig.service */ "./src/app/service/userconfig.service.ts");
/* harmony import */ var _components_pop_settings_pop_settings_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../components/pop-settings/pop-settings.component */ "./src/app/components/pop-settings/pop-settings.component.ts");
/* harmony import */ var _service_minima_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/minima-api.service */ "./src/app/service/minima-api.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _service_balance_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../service/balance.service */ "./src/app/service/balance.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var spark_md5__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! spark-md5 */ "./node_modules/spark-md5/spark-md5.js");
/* harmony import */ var spark_md5__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(spark_md5__WEBPACK_IMPORTED_MODULE_8__);









// declare var Minima: any;
var BalancePage = /** @class */ (function () {
    function BalancePage(balanceService, api, alertController, route, toastController, popoverController, userConfigService, ngZone) {
        this.balanceService = balanceService;
        this.api = api;
        this.alertController = alertController;
        this.route = route;
        this.toastController = toastController;
        this.popoverController = popoverController;
        this.userConfigService = userConfigService;
        this.ngZone = ngZone;
        this.user = {
            tokenDisplayMode: 1,
            tips: {
                balance: false,
                balance2: false,
                contacts: false,
                address: false
            }
        };
        this.tokenArr = [];
        this.tokenSpoof = [];
    }
    BalancePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        setTimeout(function () {
            _this.pullInTokens();
        }, 1000);
        this.userConfigService.userConfig.subscribe(function (res) {
            // ngZone re-renders onChange
            _this.ngZone.run(function () {
                _this.user = res;
            });
        });
    };
    BalancePage.prototype.ngOnInit = function () { };
    BalancePage.prototype.presentSettings = function (ev) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var popover;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverController.create({
                            component: _components_pop_settings_pop_settings_component__WEBPACK_IMPORTED_MODULE_2__["PopSettingsComponent"],
                            cssClass: 'my-custom-class',
                            event: ev,
                            animated: true,
                            translucent: true
                        })];
                    case 1:
                        popover = _a.sent();
                        return [4 /*yield*/, popover.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    BalancePage.prototype.giveMe50 = function () {
        var _this = this;
        this.api.giveMe50().then(function (res) {
            if (res.status === true) {
                _this.presentAlert(res.message, 'Success.');
            }
            else {
                _this.presentAlert(res.message, 'Transaction failed.');
            }
        });
    };
    BalancePage.prototype.hideTip = function () {
        this.user.tips.balance2 = true;
        this.userConfigService.userConfig.next(this.user);
        this.userConfigService.saveUserConfig(this.user);
    };
    // hide welcomeCard
    BalancePage.prototype.hide = function () {
        this.user.tips.balance = true;
        this.userConfigService.userConfig.next(this.user);
        this.userConfigService.saveUserConfig(this.user);
    };
    BalancePage.prototype.loadData = function (event) {
        var _this = this;
        setTimeout(function () {
            console.log('Done');
            event.target.complete();
            // App logic to determine if all data is loaded
            // and disable the infinite scroll
            if (_this.tokenArr.length == 5) {
                event.target.disabled = true;
            }
        }, 500);
    };
    BalancePage.prototype.toggleInfiniteScroll = function () {
        this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
    };
    BalancePage.prototype.presentToast = function (msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: msg,
                            duration: 2000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
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
    BalancePage.prototype.createIdenticon = function (tokenid) {
        return this.avatar = 'https://www.gravatar.com/avatar/' + spark_md5__WEBPACK_IMPORTED_MODULE_8__["hash"](tokenid) + '?d=identicon';
    };
    BalancePage.prototype.sendTokenOver = function (slidingItem, id) {
        slidingItem.close();
        this.route.navigate(['/send-funds/' + id]);
    };
    // check if it's a token, or a Mini
    BalancePage.prototype.instanceOfToken = function (data) {
        return 'script' in data;
    };
    BalancePage.prototype.pullInTokens = function () {
        var _this = this;
        this.balanceService.data.subscribe(function (balance) {
            _this.tokenArr = balance;
        });
    };
    BalancePage.ctorParameters = function () { return [
        { type: _service_balance_service__WEBPACK_IMPORTED_MODULE_6__["BalanceService"] },
        { type: _service_minima_api_service__WEBPACK_IMPORTED_MODULE_3__["MinimaApiService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["PopoverController"] },
        { type: _service_userconfig_service__WEBPACK_IMPORTED_MODULE_1__["UserConfigService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonInfiniteScroll"], { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonInfiniteScroll"])
    ], BalancePage.prototype, "infiniteScroll", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"])('gimme50Btn', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonButton"])
    ], BalancePage.prototype, "gimme50Btn", void 0);
    BalancePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: 'app-balance',
            template: __webpack_require__(/*! raw-loader!./balance.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/balance/balance.page.html"),
            styles: [__webpack_require__(/*! ./balance.page.scss */ "./src/app/pages/balance/balance.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_balance_service__WEBPACK_IMPORTED_MODULE_6__["BalanceService"],
            _service_minima_api_service__WEBPACK_IMPORTED_MODULE_3__["MinimaApiService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["PopoverController"],
            _service_userconfig_service__WEBPACK_IMPORTED_MODULE_1__["UserConfigService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]])
    ], BalancePage);
    return BalancePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-balance-balance-module-es5.js.map