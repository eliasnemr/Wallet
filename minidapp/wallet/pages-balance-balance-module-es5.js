(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-balance-balance-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/components/grid-view/grid-view.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/grid-view/grid-view.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-grid>\n  <ion-row>\n    <ion-col *ngFor=\"let token of tokenArr; let i = index;\" size=\"12\" size-md=\"6\">\n      <ion-card routerLink=\"/view-tokens/{{ token.tokenid }}\" class=\"borders\" *ngIf=\"i <= tokenArr.length\" id=\"token-card\" [ngStyle] = \"{'border-right':  token.script && token.script === 'RETURN_TRUE' ? '3px solid var(--ion-color-secondary)' : '1px solid var(--ion-color-primary)'}\">\n        <ion-card-header>\n          <ion-item lines=\"none\">\n            <ion-avatar slot=\"start\">\n              <img *ngIf=\"token.tokenid !== '0x00' && token.icon.length == 0\" class=\"custom-icon\" [src]=\"createIcon( token.tokenid )\" />\n              <img *ngIf=\"token.tokenid !== '0x00' && token.icon.length > 0\" class=\"custom-icon\" [src]=\"token.icon\"/>\n              <img *ngIf=\"token.tokenid == '0x00'\" class=\"custom-icon\" alt=\"minima\" src=\"assets/minima-logo-box.svg\">\n            </ion-avatar>\n            <ion-label>\n              <h3> {{ token.token }} </h3>\n              <p *ngIf=\"token.tokenid === '0x00'\">Official Token</p>\n              <p *ngIf=\"token.tokenid !== '0x00'\"> {{ token.description }} </p>\n            </ion-label>\n            <ion-label>\n              <span *ngIf=\"token.unconfirmed != '0';\" class=\"confirmed-amount medium-text minima-numeric\">{{ token.sendable + \"/\" + token.unconfirmed  }}</span>\n              <span *ngIf=\"token.unconfirmed == '0';\" class=\"confirmed-amount medium-text minima-numeric\">{{ token.sendable }} </span>\n            </ion-label>\n          </ion-item>\n          <ion-icon class=\"nftIcon\" *ngIf=\"token.script && token.script === 'ASSERT FLOOR ( @AMOUNT ) EQ @AMOUNT LET checkout = 0 WHILE ( checkout LT @TOTOUT ) DO IF GETOUTTOK ( checkout ) EQ @TOKENID THEN LET outamt = GETOUTAMT ( checkout ) ASSERT FLOOR ( outamt ) EQ outamt ENDIF LET checkout = INC ( checkout ) ENDWHILE RETURN TRUE'\" src=\"assets/nft2.svg\"></ion-icon>\n        </ion-card-header>\n      </ion-card>\n    </ion-col>\n  </ion-row>\n</ion-grid>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/list-view/list-view.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/list-view/list-view.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <ion-list>\n\n    <ion-item lines=\"none\" *ngFor=\"let token of tokenArr\" routerLink=\"/view-tokens/{{ token.tokenid }}\">\n      <ion-avatar slot=\"start\">\n        <img *ngIf=\"token.tokenid !== '0x00' && token.icon.length == 0\" [src]=\"createIcon( token.tokenid )\" class=\"custom-icon\" />\n        <img *ngIf=\"token.tokenid !== '0x00' && token.icon.length > 0\" class=\"custom-icon\" [src]=\"token.icon\"/>\n        <img *ngIf=\"token.tokenid === '0x00'\" class=\"minima-icon\" alt=\"minima\" src=\"assets/minimaIcon.svg\">\n      </ion-avatar>\n\n      <ion-label id=\"token-name\">{{ token.token }}</ion-label>\n      \n      \n      <ion-label slot=\"end\">\n        <span *ngIf=\"token.unconfirmed != '0';\" class=\"confirmed-amount medium-text minima-numeric\">{{ token.sendable + \"/\" + token.unconfirmed  }}</span>\n        <span *ngIf=\"token.unconfirmed == '0';\" class=\"confirmed-amount medium-text minima-numeric\">{{ token.sendable }} </span>\n      </ion-label>\n    </ion-item>\n\n  </ion-list>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/balance/balance.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/balance/balance.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-app>\n<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-title>\n      <ion-item lines=\"none\" class=\"ion-no-padding\">\n        <ion-menu-button></ion-menu-button>\n        Balance\n      </ion-item>\n      <ion-item class=\"breadcrumb ion-no-padding\" lines=\"none\" *ngIf=\"tokenArr.length > 0\">\n        All tokens\n      </ion-item>\n    </ion-title>\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n  <ion-content>\n    <ion-grid *ngIf=\"tokenArr.length == 0\">\n      <ion-row>\n        <ion-col style=\"display: flex; align-items:center; justify-content:center\" size=\"12\">\n          <ion-label>Fetching tokens...</ion-label>\n        </ion-col>\n        <ion-col style=\"display: flex; align-items:center; justify-content:center\" size=\"12\">\n          <ion-spinner name=\"crescent\"></ion-spinner>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <div class=\"body\">\n      <app-list-view *ngIf=\"tokenArr && tokenArr.length > 0\" [tokenArr] = \"tokenArr\"></app-list-view>\n    </div>\n\n  </ion-content>\n\n  <ion-footer class=\"border-t\">\n    <ion-button (click)=\"giveMe50()\" class=\"gimme50 no-ripple\" fill=\"none\">\n      Gimme 50\n    </ion-button>\n  </ion-footer>\n</ion-app>"

/***/ }),

/***/ "./src/app/components/grid-view/grid-view.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/grid-view/grid-view.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-row {\n  width: 100%;\n}\n\n#token-card:hover {\n  -webkit-transform: scale(1.001);\n          transform: scale(1.001);\n  border-color: var(--ion-color-primary);\n}\n\n#token-card ion-label {\n  margin: 0;\n}\n\nion-card-header {\n  font-family: manrope-bold;\n  color: var(--ion-color-tertiary);\n  background: var(--ion-m-background);\n}\n\nimg {\n  width: 200px;\n}\n\n.custom-icon {\n  max-height: 40px !important;\n  max-width: 40px !important;\n}\n\nion-icon.nftIcon {\n  font-size: 2rem;\n  z-index: 1;\n  position: absolute;\n  right: 0;\n  bottom: 2%;\n}\n\nion-icon.nftIcon:hover {\n  -webkit-transform: scale(1.1);\n          transform: scale(1.1);\n}\n\np {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGlhc25lbXIvcHJvamVjdHMvV2FsbGV0L21vYmlsZS1hcHAtZnJvbnQtZW5kL2FwcC9zcmMvYXBwL2NvbXBvbmVudHMvZ3JpZC12aWV3L2dyaWQtdmlldy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9ncmlkLXZpZXcvZ3JpZC12aWV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFFO0VBQ0UsV0FBQTtBQ0NKOztBRENFO0VBQ0UsK0JBQUE7VUFBQSx1QkFBQTtFQUNBLHNDQUFBO0FDRUo7O0FEQUU7RUFDRSxTQUFBO0FDR0o7O0FEREU7RUFDRSx5QkFBQTtFQUNBLGdDQUFBO0VBQ0EsbUNBQUE7QUNJSjs7QURGRTtFQUNFLFlBQUE7QUNLSjs7QURIRTtFQUNFLDJCQUFBO0VBQ0EsMEJBQUE7QUNNSjs7QURKRTtFQUNFLGVBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtBQ09KOztBRExFO0VBQ0UsNkJBQUE7VUFBQSxxQkFBQTtBQ1FKOztBRE5FO0VBQ0UsU0FBQTtBQ1NKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ncmlkLXZpZXcvZ3JpZC12aWV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiICBpb24tcm93IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAjdG9rZW4tY2FyZDpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAwMSk7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIH1cbiAgI3Rva2VuLWNhcmQgaW9uLWxhYmVsIHtcbiAgICBtYXJnaW46MDtcbiAgfVxuICBpb24tY2FyZC1oZWFkZXIge1xuICAgIGZvbnQtZmFtaWx5OiBtYW5yb3BlLWJvbGQ7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeSk7XG4gICAgYmFja2dyb3VuZDogdmFyKC0taW9uLW0tYmFja2dyb3VuZCk7XG4gIH1cbiAgaW1nIHtcbiAgICB3aWR0aDogMjAwcHg7XG4gIH1cbiAgLmN1c3RvbS1pY29uIHtcbiAgICBtYXgtaGVpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7XG4gICAgbWF4LXdpZHRoOiA0MHB4ICFpbXBvcnRhbnQ7ICAgXG4gIH1cbiAgaW9uLWljb24ubmZ0SWNvbiB7XG4gICAgZm9udC1zaXplOiAyLjByZW07XG4gICAgei1pbmRleDoxOyBcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6MDtcbiAgICBib3R0b206IDIlO1xuICB9XG4gIGlvbi1pY29uLm5mdEljb246aG92ZXIge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgfVxuICBwIHtcbiAgICBtYXJnaW46MDtcbiAgfSIsImlvbi1yb3cge1xuICB3aWR0aDogMTAwJTtcbn1cblxuI3Rva2VuLWNhcmQ6aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDAxKTtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbiN0b2tlbi1jYXJkIGlvbi1sYWJlbCB7XG4gIG1hcmdpbjogMDtcbn1cblxuaW9uLWNhcmQtaGVhZGVyIHtcbiAgZm9udC1mYW1pbHk6IG1hbnJvcGUtYm9sZDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeSk7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1tLWJhY2tncm91bmQpO1xufVxuXG5pbWcge1xuICB3aWR0aDogMjAwcHg7XG59XG5cbi5jdXN0b20taWNvbiB7XG4gIG1heC1oZWlnaHQ6IDQwcHggIWltcG9ydGFudDtcbiAgbWF4LXdpZHRoOiA0MHB4ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1pY29uLm5mdEljb24ge1xuICBmb250LXNpemU6IDJyZW07XG4gIHotaW5kZXg6IDE7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMiU7XG59XG5cbmlvbi1pY29uLm5mdEljb246aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG59XG5cbnAge1xuICBtYXJnaW46IDA7XG59Il19 */"

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

module.exports = ".custom-icon {\n  width: 38px;\n  height: 35px;\n}\n\n.minima-icon {\n  width: 38px;\n  height: 35px;\n}\n\n.item-avatar {\n  width: 100% !important;\n  height: 100% !important;\n  max-width: 75px !important;\n  max-height: 75px !important;\n}\n\nspan.confirmed-amount {\n  font-family: manrope-medium;\n  color: var(--ion-color-color);\n}\n\nion-avatar {\n  margin-top: 2%;\n  height: 38px;\n  width: 38px;\n}\n\n#token-name {\n  margin: 0;\n  display: inline-block;\n  white-space: nowrap;\n  font-size: 1rem !important;\n  max-width: inherit;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  font-family: manrope-bold;\n  color: var(--ion-color-color);\n}\n\nion-item:first-child {\n  margin-top: 1%;\n}\n\nion-item {\n  opacity: 1;\n  --background: var(--ion-color-token);\n  --background-activated: var(--ion-color-token)!important;\n  --background-activated-opacity: 0.2 !important;\n  --background-hover: var(--ion-color-item-hover);\n  --background-hover-opacity: 1;\n  background: var(--ion-color-token);\n  box-shadow: 0px 3px 6px #C8C8D41A;\n  border-radius: 10px;\n  margin-bottom: 2%;\n}\n\nion-list {\n  margin-left: 4%;\n  margin-right: 3%;\n  max-height: 55vh;\n  overflow-y: scroll;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGlhc25lbXIvcHJvamVjdHMvV2FsbGV0L21vYmlsZS1hcHAtZnJvbnQtZW5kL2FwcC9zcmMvYXBwL2NvbXBvbmVudHMvbGlzdC12aWV3L2xpc3Qtdmlldy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9saXN0LXZpZXcvbGlzdC12aWV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNBSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDQ0o7O0FEQ0E7RUFDSSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsMEJBQUE7RUFDQSwyQkFBQTtBQ0VKOztBREFBO0VBQ0ksMkJBQUE7RUFDQSw2QkFBQTtBQ0dKOztBRERBO0VBQ0ksY0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDSUo7O0FEREE7RUFDSSxTQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSw2QkFBQTtBQ0lKOztBREZBO0VBQ0ksY0FBQTtBQ0tKOztBREhBO0VBQ0ksVUFBQTtFQUNBLG9DQUFBO0VBQ0Esd0RBQUE7RUFDQSw4Q0FBQTtFQUNBLCtDQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQ0FBQTtFQUNBLGlDQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQ01KOztBREhBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ01KIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9saXN0LXZpZXcvbGlzdC12aWV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uY3VzdG9tLWljb24ge1xuICAgIHdpZHRoOiAzOHB4O1xuICAgIGhlaWdodDogMzVweDtcbn1cbi5taW5pbWEtaWNvbiB7XG4gICAgd2lkdGg6IDM4cHg7XG4gICAgaGVpZ2h0OiAzNXB4O1xufVxuLml0ZW0tYXZhdGFyIHtcbiAgICB3aWR0aDoxMDAlICFpbXBvcnRhbnQ7ICBcbiAgICBoZWlnaHQgOiAxMDAlICFpbXBvcnRhbnQ7ICBcbiAgICBtYXgtd2lkdGg6IDc1cHggIWltcG9ydGFudDsgIC8vYW55IHNpemVcbiAgICBtYXgtaGVpZ2h0OiA3NXB4ICFpbXBvcnRhbnQ7IC8vYW55IHNpemUgXG59XG5zcGFuLmNvbmZpcm1lZC1hbW91bnQge1xuICAgIGZvbnQtZmFtaWx5OiBtYW5yb3BlLW1lZGl1bTtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWNvbG9yKTtcbn1cbmlvbi1hdmF0YXIge1xuICAgIG1hcmdpbi10b3A6IDIlO1xuICAgIGhlaWdodDogMzhweDtcbiAgICB3aWR0aDogMzhweDtcblxufVxuI3Rva2VuLW5hbWUge1xuICAgIG1hcmdpbjogMDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBmb250LXNpemU6IDEuMHJlbSFpbXBvcnRhbnQ7XG4gICAgbWF4LXdpZHRoOiBpbmhlcml0O1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgZm9udC1mYW1pbHk6IG1hbnJvcGUtYm9sZDtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWNvbG9yKTtcbn1cbmlvbi1pdGVtOmZpcnN0LWNoaWxkIHtcbiAgICBtYXJnaW4tdG9wOiAxJTtcbn1cbmlvbi1pdGVtIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXRva2VuKTtcbiAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiB2YXIoLS1pb24tY29sb3ItdG9rZW4pIWltcG9ydGFudDtcbiAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkLW9wYWNpdHk6IDAuMiAhaW1wb3J0YW50O1xuICAgIC0tYmFja2dyb3VuZC1ob3ZlcjogdmFyKC0taW9uLWNvbG9yLWl0ZW0taG92ZXIpO1xuICAgIC0tYmFja2dyb3VuZC1ob3Zlci1vcGFjaXR5OiAxO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci10b2tlbik7XG4gICAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggI0M4QzhENDFBO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMiU7XG59XG5cbmlvbi1saXN0IHtcbiAgICBtYXJnaW4tbGVmdDogNCU7XG4gICAgbWFyZ2luLXJpZ2h0OiAzJTtcbiAgICBtYXgtaGVpZ2h0OiA1NXZoO1xuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cbiIsIi5jdXN0b20taWNvbiB7XG4gIHdpZHRoOiAzOHB4O1xuICBoZWlnaHQ6IDM1cHg7XG59XG5cbi5taW5pbWEtaWNvbiB7XG4gIHdpZHRoOiAzOHB4O1xuICBoZWlnaHQ6IDM1cHg7XG59XG5cbi5pdGVtLWF2YXRhciB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xuICBtYXgtd2lkdGg6IDc1cHggIWltcG9ydGFudDtcbiAgbWF4LWhlaWdodDogNzVweCAhaW1wb3J0YW50O1xufVxuXG5zcGFuLmNvbmZpcm1lZC1hbW91bnQge1xuICBmb250LWZhbWlseTogbWFucm9wZS1tZWRpdW07XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItY29sb3IpO1xufVxuXG5pb24tYXZhdGFyIHtcbiAgbWFyZ2luLXRvcDogMiU7XG4gIGhlaWdodDogMzhweDtcbiAgd2lkdGg6IDM4cHg7XG59XG5cbiN0b2tlbi1uYW1lIHtcbiAgbWFyZ2luOiAwO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGZvbnQtc2l6ZTogMXJlbSAhaW1wb3J0YW50O1xuICBtYXgtd2lkdGg6IGluaGVyaXQ7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBmb250LWZhbWlseTogbWFucm9wZS1ib2xkO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWNvbG9yKTtcbn1cblxuaW9uLWl0ZW06Zmlyc3QtY2hpbGQge1xuICBtYXJnaW4tdG9wOiAxJTtcbn1cblxuaW9uLWl0ZW0ge1xuICBvcGFjaXR5OiAxO1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci10b2tlbik7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHZhcigtLWlvbi1jb2xvci10b2tlbikhaW1wb3J0YW50O1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkLW9wYWNpdHk6IDAuMiAhaW1wb3J0YW50O1xuICAtLWJhY2tncm91bmQtaG92ZXI6IHZhcigtLWlvbi1jb2xvci1pdGVtLWhvdmVyKTtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyLW9wYWNpdHk6IDE7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci10b2tlbik7XG4gIGJveC1zaGFkb3c6IDBweCAzcHggNnB4ICNDOEM4RDQxQTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMiU7XG59XG5cbmlvbi1saXN0IHtcbiAgbWFyZ2luLWxlZnQ6IDQlO1xuICBtYXJnaW4tcmlnaHQ6IDMlO1xuICBtYXgtaGVpZ2h0OiA1NXZoO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG59Il19 */"

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

module.exports = ".body {\n  margin-right: 12px;\n}\n\n.line-light {\n  padding-top: 2%;\n  border-bottom: 1px solid;\n}\n\nion-card-content {\n  background: var(--ion-m-background);\n}\n\nion-card-content p {\n  color: var(--ion-color-tertiary);\n}\n\nion-card-header {\n  font-family: manrope-bold;\n  color: var(--ion-color-tertiary);\n  background-color: var(--ion-gray-two);\n  background: var(--ion-m-background);\n}\n\n#dismiss {\n  cursor: pointer;\n  right: 2.5%;\n  z-index: 1;\n  font-family: manrope-bold;\n  font-size: 1.5rem;\n  position: absolute;\n  color: #a63f44;\n}\n\n#settings {\n  margin-right: 5%;\n  cursor: pointer;\n}\n\nion-card-title {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: left;\n          justify-content: left;\n  color: var(--ion-color-primary);\n}\n\nion-avatar {\n  display: inline !important;\n  margin-right: 2.5%;\n}\n\nion-avatar img {\n  display: inline;\n  width: 75px;\n  height: inherit;\n}\n\n.center {\n  right: 2%;\n  -webkit-box-align: center !important;\n          align-items: center !important;\n  -webkit-box-pack: center !important;\n          justify-content: center !important;\n  display: -webkit-inline-box !important;\n  display: inline-flex !important;\n  text-align: center !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGlhc25lbXIvcHJvamVjdHMvV2FsbGV0L21vYmlsZS1hcHAtZnJvbnQtZW5kL2FwcC9zcmMvYXBwL3BhZ2VzL2JhbGFuY2UvYmFsYW5jZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2JhbGFuY2UvYmFsYW5jZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLHdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQ0FBQTtBQ0NGOztBRENBO0VBQ0UsZ0NBQUE7QUNFRjs7QURBQTtFQUNFLHlCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxxQ0FBQTtFQUNBLG1DQUFBO0FDR0Y7O0FEQUE7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDR0Y7O0FEREE7RUFDRSxnQkFBQTtFQUNBLGVBQUE7QUNJRjs7QURGQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxzQkFBQTtVQUFBLHFCQUFBO0VBQ0EsK0JBQUE7QUNLRjs7QURIQTtFQUNFLDBCQUFBO0VBQ0Esa0JBQUE7QUNNRjs7QURKQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ09GOztBRExBO0VBQ0UsU0FBQTtFQUNBLG9DQUFBO1VBQUEsOEJBQUE7RUFDQSxtQ0FBQTtVQUFBLGtDQUFBO0VBQ0Esc0NBQUE7RUFBQSwrQkFBQTtFQUNBLDZCQUFBO0FDUUYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9iYWxhbmNlL2JhbGFuY2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvZHkge1xuICBtYXJnaW4tcmlnaHQ6IDEycHg7XG59XG5cbi5saW5lLWxpZ2h0IHtcbiAgcGFkZGluZy10b3A6IDIlO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQ7XG5cbn1cbmlvbi1jYXJkLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tbS1iYWNrZ3JvdW5kKTtcbn1cbmlvbi1jYXJkLWNvbnRlbnQgcCB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnkpO1xufVxuaW9uLWNhcmQtaGVhZGVyIHtcbiAgZm9udC1mYW1pbHk6IG1hbnJvcGUtYm9sZDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1ncmF5LXR3byk7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1tLWJhY2tncm91bmQpO1xufVxuXG4jZGlzbWlzcyB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcmlnaHQ6IDIuNSU7XG4gIHotaW5kZXg6IDE7XG4gIGZvbnQtZmFtaWx5OiBtYW5yb3BlLWJvbGQ7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbG9yOiAjYTYzZjQ0O1xufVxuI3NldHRpbmdzIHtcbiAgbWFyZ2luLXJpZ2h0OiA1JTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuaW9uLWNhcmQtdGl0bGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5pb24tYXZhdGFyIHtcbiAgZGlzcGxheTogaW5saW5lICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1yaWdodDogMi41JTtcbn1cbmlvbi1hdmF0YXIgaW1nIHtcbiAgZGlzcGxheTogaW5saW5lO1xuICB3aWR0aDogNzVweDtcbiAgaGVpZ2h0OiBpbmhlcml0O1xufVxuLmNlbnRlciB7XG4gIHJpZ2h0OiAyJTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleCAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbn0iLCIuYm9keSB7XG4gIG1hcmdpbi1yaWdodDogMTJweDtcbn1cblxuLmxpbmUtbGlnaHQge1xuICBwYWRkaW5nLXRvcDogMiU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZDtcbn1cblxuaW9uLWNhcmQtY29udGVudCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1tLWJhY2tncm91bmQpO1xufVxuXG5pb24tY2FyZC1jb250ZW50IHAge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5KTtcbn1cblxuaW9uLWNhcmQtaGVhZGVyIHtcbiAgZm9udC1mYW1pbHk6IG1hbnJvcGUtYm9sZDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1ncmF5LXR3byk7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1tLWJhY2tncm91bmQpO1xufVxuXG4jZGlzbWlzcyB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcmlnaHQ6IDIuNSU7XG4gIHotaW5kZXg6IDE7XG4gIGZvbnQtZmFtaWx5OiBtYW5yb3BlLWJvbGQ7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbG9yOiAjYTYzZjQ0O1xufVxuXG4jc2V0dGluZ3Mge1xuICBtYXJnaW4tcmlnaHQ6IDUlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmlvbi1jYXJkLXRpdGxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG5pb24tYXZhdGFyIHtcbiAgZGlzcGxheTogaW5saW5lICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1yaWdodDogMi41JTtcbn1cblxuaW9uLWF2YXRhciBpbWcge1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIHdpZHRoOiA3NXB4O1xuICBoZWlnaHQ6IGluaGVyaXQ7XG59XG5cbi5jZW50ZXIge1xuICByaWdodDogMiU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcbiAgZGlzcGxheTogaW5saW5lLWZsZXggIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG59Il19 */"

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
            tokenDisplayMode: 2,
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
                _this.presentAlert('Gimme50', 'Successful', 'Status');
            }
            else {
                _this.presentAlert('Gimme50', res.message, 'Status');
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
    BalancePage.prototype.presentAlert = function (hdr, msg, sub) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            cssClass: 'alert',
                            header: hdr,
                            subHeader: sub,
                            message: msg,
                            buttons: ['OK']
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



/***/ }),

/***/ "./src/app/service/minima-api.service.ts":
/*!***********************************************!*\
  !*** ./src/app/service/minima-api.service.ts ***!
  \***********************************************/
/*! exports provided: MinimaApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MinimaApiService", function() { return MinimaApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var minima__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! minima */ "./node_modules/minima/dist/minima.js");
/* harmony import */ var minima__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(minima__WEBPACK_IMPORTED_MODULE_3__);




var MinimaApiService = /** @class */ (function () {
    function MinimaApiService(loadingController) {
        this.loadingController = loadingController;
        this.loader = null;
    }
    MinimaApiService.prototype.showLoader = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!(this.loader == null)) return [3 /*break*/, 2];
                        _a = this;
                        return [4 /*yield*/, this.loadingController.create({
                                message: 'Loading'
                            })];
                    case 1:
                        _a.loader = _b.sent();
                        this.loader.present();
                        _b.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    MinimaApiService.prototype.hideLoader = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.loader !== null)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.loader.dismiss()];
                    case 1:
                        _a.sent();
                        this.loader = null;
                        return [3 /*break*/, 2];
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    MinimaApiService.prototype.createToken = function (data) {
        return this.req("tokencreate name:\"" + data.name + "\" amount:" + data.amount + " description:\"" + data.description + "\" script:\"" + data.script + "\" icon:" + data.icon + " proof:" + data.proof);
    };
    MinimaApiService.prototype.validateTokenID = function (tokenid) {
        return this.req("tokenvalidate " + tokenid);
    };
    MinimaApiService.prototype.sendMessageTransaction = function (data) {
        var txnidentifier = Math.floor(Math.random() * 1000000000);
        var port254 = 254;
        var port255 = 255;
        var customTXN = 
        // Custom TXN with an ID
        "txncreate " + txnidentifier + ";" +
            // Add state variable 1
            "txnstate " + txnidentifier + " 254 01000100" + ";" +
            // Add User state variable 2
            "txnstate " + txnidentifier + " 255 \"" + data.message + "\"" + ";" +
            // Auto fill the transaction
            "txnauto " + txnidentifier + " " + data.amount + " " + data.address + " " + data.tokenid + ";" +
            // Post it!
            "txnpost " + txnidentifier + ";" +
            // Clear the txn
            "txndelete " + txnidentifier + ";";
        return this.req(customTXN);
    };
    MinimaApiService.prototype.webLink = function (data) {
        return this.req('weblink+' + data.url);
    };
    MinimaApiService.prototype.setHost = function (newHost) {
        localStorage.setItem('minima_host', newHost);
    };
    MinimaApiService.prototype.newAddress = function () {
        return this.req('newaddress');
    };
    MinimaApiService.prototype.sendFunds = function (data) {
        return this.req('send ' + data.amount + ' ' + data.address + ' ' + data.tokenid);
    };
    MinimaApiService.prototype.giveMe50 = function () {
        return this.req('gimme50');
    };
    MinimaApiService.prototype.getBalance = function () {
        return this.req('balance');
    };
    MinimaApiService.prototype.getHistory = function () {
        return this.req('history');
    };
    MinimaApiService.prototype.clearMyHistory = function () {
        return this.req('history clear');
    };
    MinimaApiService.prototype.getStatus = function () {
        return this.req('status');
    };
    // Use minima.js instead..
    MinimaApiService.prototype.req = function (fnc) {
        var promise = new Promise(function (resolve) {
            minima__WEBPACK_IMPORTED_MODULE_3__["Minima"].cmd(fnc, function (resp) {
                //console.log(resp);
                resolve(resp);
            });
        });
        return promise;
    };
    MinimaApiService.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] }
    ]; };
    MinimaApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]])
    ], MinimaApiService);
    return MinimaApiService;
}());



/***/ })

}]);
//# sourceMappingURL=pages-balance-balance-module-es5.js.map