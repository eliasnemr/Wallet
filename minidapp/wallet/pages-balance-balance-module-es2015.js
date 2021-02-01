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

module.exports = "  <ion-list>\n\n    <ion-item lines=\"half\" *ngFor=\"let token of tokenArr\" routerLink=\"/view-tokens/{{ token.tokenid }}\">\n      <ion-avatar slot=\"start\">\n        <img *ngIf=\"token.tokenid !== '0x00' && token.icon.length == 0\" [src]=\"createIcon( token.tokenid )\" class=\"custom-icon\" />\n        <img *ngIf=\"token.tokenid !== '0x00' && token.icon.length > 0\" class=\"custom-icon\" [src]=\"token.icon\"/>\n        <img *ngIf=\"token.tokenid === '0x00'\" class=\"minima-icon\" alt=\"minima\" src=\"assets/minima-logo-box.svg\">\n      </ion-avatar>\n\n      <ion-label id=\"token-name\">{{ token.token }}</ion-label>\n      \n      \n      <ion-label slot=\"end\">\n        <span *ngIf=\"token.unconfirmed != '0';\" class=\"confirmed-amount medium-text minima-numeric\">{{ token.sendable + \"/\" + token.unconfirmed  }}</span>\n        <span *ngIf=\"token.unconfirmed == '0';\" class=\"confirmed-amount medium-text minima-numeric\">{{ token.sendable }} </span>\n      </ion-label>\n    </ion-item>\n\n  </ion-list>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/balance/balance.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/balance/balance.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-app>\n<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Balance\n    </ion-title>\n    <!-- <ion-icon (click)=\"presentSettings($event)\" id=\"settings\" slot=\"end\" name=\"options\"></ion-icon> -->\n    <div class=\"line\"></div>\n  </ion-toolbar>\n</ion-header>\n\n  <ion-content>\n    <ion-grid *ngIf=\"tokenArr.length == 0\">\n      <ion-row>\n        <ion-col style=\"display: flex; align-items:center; justify-content:center\" size=\"12\">\n          <ion-label>Fetching tokens...</ion-label>\n        </ion-col>\n        <ion-col style=\"display: flex; align-items:center; justify-content:center\" size=\"12\">\n          <ion-spinner name=\"crescent\"></ion-spinner>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <div class=\"breadcrumb\" *ngIf=\"tokenArr.length > 0\">\n      <h6>All Tokens</h6>\n      <div class=\"line-light\"></div>\n    </div>\n\n    <div>\n      <app-list-view *ngIf=\"tokenArr && tokenArr.length > 0\" [tokenArr] = \"tokenArr\"></app-list-view>\n    </div>\n\n    <div *ngIf=\"tokenArr.length > 0\" class=\"breadcrumb\">\n      <div class=\"line-light\"></div>\n    </div>\n    \n    <ion-grid *ngIf=\"tokenArr.length > 0\">\n      <ion-row>\n        <ion-col size=\"12\" class=\"ion-text-center\">\n          <ion-button class=\"gimme50\" fill=\"outline\" (click)=\"giveMe50()\">\n            Gimme 50\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n\n\n  </ion-content>\n\n  <ion-footer>\n   \n  </ion-footer>\n</ion-app>"

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
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var spark_md5__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! spark-md5 */ "./node_modules/spark-md5/spark-md5.js");
/* harmony import */ var spark_md5__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(spark_md5__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");




let GridViewComponent = class GridViewComponent {
    constructor(toastController) {
        this.toastController = toastController;
        this.tokenArr = [];
    }
    ngOnInit() { }
    createIcon(tokenid) {
        return this.avatar = 'https://www.gravatar.com/avatar/' + spark_md5__WEBPACK_IMPORTED_MODULE_2__["hash"](tokenid) + '?d=identicon';
    }
    presentToast(msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: msg,
                duration: 2000
            });
            toast.present();
        });
    }
};
GridViewComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ToastController"] }
];
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



/***/ }),

/***/ "./src/app/components/list-view/list-view.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/list-view/list-view.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".custom-icon {\n  width: 38px;\n  height: 35px;\n}\n\n.minima-icon {\n  width: 38px;\n  height: 35px;\n}\n\n.item-avatar {\n  width: 100% !important;\n  height: 100% !important;\n  max-width: 75px !important;\n  max-height: 75px !important;\n}\n\nion-avatar {\n  height: 38px;\n  width: 38px;\n  border: 2px solid #D6D6DF;\n}\n\n#token-name {\n  margin: 0;\n  display: inline-block;\n  white-space: nowrap;\n  font-size: 1rem !important;\n  max-width: inherit;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  font-family: manrope-bold;\n}\n\nion-item {\n  --background: #FDFDFF;\n  background: #FDFDFF;\n}\n\nion-item {\n  border-radius: 10px;\n  --border-color: var(--ion-color-line);\n  margin-bottom: 2%;\n}\n\nion-item:hover {\n  --background: #FDFDFF;\n  opacity: 0.9888;\n}\n\nion-list {\n  margin-left: 4%;\n  margin-right: 3%;\n  max-height: 55vh;\n  overflow-y: scroll;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGlhc25lbXIvcHJvamVjdHMvV2FsbGV0L21vYmlsZS1hcHAtZnJvbnQtZW5kL2FwcC9zcmMvYXBwL2NvbXBvbmVudHMvbGlzdC12aWV3L2xpc3Qtdmlldy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9saXN0LXZpZXcvbGlzdC12aWV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNDSjs7QURDQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDRUo7O0FEQUE7RUFDSSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsMEJBQUE7RUFDQSwyQkFBQTtBQ0dKOztBRERBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtBQ0lKOztBREZBO0VBQ0ksU0FBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FDS0o7O0FESEE7RUFDSSxxQkFBQTtFQUNBLG1CQUFBO0FDTUo7O0FESkE7RUFDSSxtQkFBQTtFQUNBLHFDQUFBO0VBQ0EsaUJBQUE7QUNPSjs7QURMQTtFQUNJLHFCQUFBO0VBQ0EsZUFBQTtBQ1FKOztBRE5BO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ1NKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9saXN0LXZpZXcvbGlzdC12aWV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmN1c3RvbS1pY29uIHtcbiAgICB3aWR0aDogMzhweDtcbiAgICBoZWlnaHQ6IDM1cHg7XG59XG4ubWluaW1hLWljb24ge1xuICAgIHdpZHRoOiAzOHB4O1xuICAgIGhlaWdodDogMzVweDtcbn1cbi5pdGVtLWF2YXRhciB7XG4gICAgd2lkdGg6MTAwJSAhaW1wb3J0YW50OyAgXG4gICAgaGVpZ2h0IDogMTAwJSAhaW1wb3J0YW50OyAgXG4gICAgbWF4LXdpZHRoOiA3NXB4ICFpbXBvcnRhbnQ7ICAvL2FueSBzaXplXG4gICAgbWF4LWhlaWdodDogNzVweCAhaW1wb3J0YW50OyAvL2FueSBzaXplIFxufVxuaW9uLWF2YXRhciB7XG4gICAgaGVpZ2h0OiAzOHB4O1xuICAgIHdpZHRoOiAzOHB4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICNENkQ2REY7XG59XG4jdG9rZW4tbmFtZSB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIGZvbnQtc2l6ZTogMS4wcmVtIWltcG9ydGFudDtcbiAgICBtYXgtd2lkdGg6IGluaGVyaXQ7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBmb250LWZhbWlseTogbWFucm9wZS1ib2xkO1xufVxuaW9uLWl0ZW0ge1xuICAgIC0tYmFja2dyb3VuZDogI0ZERkRGRjtcbiAgICBiYWNrZ3JvdW5kOiAjRkRGREZGO1xufVxuaW9uLWl0ZW0ge1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgLS1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1saW5lKTtcbiAgICBtYXJnaW4tYm90dG9tOiAyJTtcbn1cbmlvbi1pdGVtOmhvdmVyIHtcbiAgICAtLWJhY2tncm91bmQ6ICNGREZERkY7XG4gICAgb3BhY2l0eTogMC45ODg4O1xufVxuaW9uLWxpc3Qge1xuICAgIG1hcmdpbi1sZWZ0OiA0JTtcbiAgICBtYXJnaW4tcmlnaHQ6IDMlO1xuICAgIG1heC1oZWlnaHQ6IDU1dmg7XG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xufVxuIiwiLmN1c3RvbS1pY29uIHtcbiAgd2lkdGg6IDM4cHg7XG4gIGhlaWdodDogMzVweDtcbn1cblxuLm1pbmltYS1pY29uIHtcbiAgd2lkdGg6IDM4cHg7XG4gIGhlaWdodDogMzVweDtcbn1cblxuLml0ZW0tYXZhdGFyIHtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG4gIG1heC13aWR0aDogNzVweCAhaW1wb3J0YW50O1xuICBtYXgtaGVpZ2h0OiA3NXB4ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1hdmF0YXIge1xuICBoZWlnaHQ6IDM4cHg7XG4gIHdpZHRoOiAzOHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCAjRDZENkRGO1xufVxuXG4jdG9rZW4tbmFtZSB7XG4gIG1hcmdpbjogMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBmb250LXNpemU6IDFyZW0gIWltcG9ydGFudDtcbiAgbWF4LXdpZHRoOiBpbmhlcml0O1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZm9udC1mYW1pbHk6IG1hbnJvcGUtYm9sZDtcbn1cblxuaW9uLWl0ZW0ge1xuICAtLWJhY2tncm91bmQ6ICNGREZERkY7XG4gIGJhY2tncm91bmQ6ICNGREZERkY7XG59XG5cbmlvbi1pdGVtIHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgLS1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1saW5lKTtcbiAgbWFyZ2luLWJvdHRvbTogMiU7XG59XG5cbmlvbi1pdGVtOmhvdmVyIHtcbiAgLS1iYWNrZ3JvdW5kOiAjRkRGREZGO1xuICBvcGFjaXR5OiAwLjk4ODg7XG59XG5cbmlvbi1saXN0IHtcbiAgbWFyZ2luLWxlZnQ6IDQlO1xuICBtYXJnaW4tcmlnaHQ6IDMlO1xuICBtYXgtaGVpZ2h0OiA1NXZoO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let ListViewComponent = class ListViewComponent {
    constructor() {
        this.tokenArr = [];
    }
    ngOnInit() { }
    createIcon(tokenid) {
        return this.avatar = 'https://www.gravatar.com/avatar/' + spark_md5__WEBPACK_IMPORTED_MODULE_1__["hash"](tokenid) + '?d=identicon';
    }
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
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _balance_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./balance.page */ "./src/app/pages/balance/balance.page.ts");
/* harmony import */ var _components_grid_view_grid_view_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/grid-view/grid-view.component */ "./src/app/components/grid-view/grid-view.component.ts");
/* harmony import */ var _components_list_view_list_view_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../components/list-view/list-view.component */ "./src/app/components/list-view/list-view.component.ts");









const routes = [
    {
        path: '',
        component: _balance_page__WEBPACK_IMPORTED_MODULE_6__["BalancePage"],
        children: [
            {
                path: 'view-txn',
                loadChildren: () => __webpack_require__.e(/*! import() | view-tokens-view-tokens-module */ "default~pages-balance-view-tokens-view-tokens-module~view-tokens-view-tokens-module").then(__webpack_require__.bind(null, /*! ./view-tokens/view-tokens.module */ "./src/app/pages/balance/view-tokens/view-tokens.module.ts")).then(m => m.ViewTokensPageModule)
            }
        ]
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
        declarations: [_balance_page__WEBPACK_IMPORTED_MODULE_6__["BalancePage"], _components_list_view_list_view_component__WEBPACK_IMPORTED_MODULE_8__["ListViewComponent"], _components_grid_view_grid_view_component__WEBPACK_IMPORTED_MODULE_7__["GridViewComponent"]]
    })
], BalancePageModule);



/***/ }),

/***/ "./src/app/pages/balance/balance.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/balance/balance.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-toolbar {\n  font-family: manrope-bold;\n  color: var(--ion-color-tertiary);\n}\nion-toolbar ion-title {\n  font-size: 18px;\n  padding-bottom: 1%;\n}\ndiv.breadcrumb {\n  margin-left: 4%;\n  margin-right: 3%;\n}\ndiv.breadcrumb h6 {\n  font-family: manrope-medium;\n  margin: 0;\n}\nion-card-content {\n  background: var(--ion-m-background);\n}\nion-card-content p {\n  color: var(--ion-color-tertiary);\n}\nion-card-header {\n  font-family: manrope-bold;\n  color: var(--ion-color-tertiary);\n  background-color: var(--ion-gray-two);\n  background: var(--ion-m-background);\n}\nion-footer {\n  width: 100%;\n  height: 90px;\n  background-color: #001C32;\n}\n#dismiss {\n  cursor: pointer;\n  right: 2.5%;\n  z-index: 1;\n  font-family: manrope-bold;\n  font-size: 1.5rem;\n  position: absolute;\n  color: #a63f44;\n}\n#settings {\n  margin-right: 5%;\n  cursor: pointer;\n}\nion-card-title {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: left;\n          justify-content: left;\n  color: var(--ion-color-primary);\n}\nion-avatar {\n  display: inline !important;\n  margin-right: 2.5%;\n}\nion-avatar img {\n  display: inline;\n  width: 75px;\n  height: inherit;\n}\n.center {\n  right: 2%;\n  -webkit-box-align: center !important;\n          align-items: center !important;\n  -webkit-box-pack: center !important;\n          justify-content: center !important;\n  display: -webkit-inline-box !important;\n  display: inline-flex !important;\n  text-align: center !important;\n}\n.line {\n  border-bottom: 2px solid #7D8B99;\n  margin-left: 3.5%;\n  margin-right: 3.5%;\n}\n.line-light {\n  padding-top: 2%;\n  border-bottom: 2px solid #C5C5CE;\n}\nion-button.gimme50 {\n  --background: var(--ion-color-primary);\n  text-transform: none;\n  font-family: manrope-bold;\n  color: #fff;\n  border-radius: 0;\n  margin-top: 2.5%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGlhc25lbXIvcHJvamVjdHMvV2FsbGV0L21vYmlsZS1hcHAtZnJvbnQtZW5kL2FwcC9zcmMvYXBwL3BhZ2VzL2JhbGFuY2UvYmFsYW5jZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2JhbGFuY2UvYmFsYW5jZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtFQUNBLGdDQUFBO0FDQ0Y7QURBRTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtBQ0VKO0FEQ0E7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUNFRjtBREFBO0VBQ0UsMkJBQUE7RUFDQSxTQUFBO0FDR0Y7QUREQTtFQUNFLG1DQUFBO0FDSUY7QURGQTtFQUNFLGdDQUFBO0FDS0Y7QURIQTtFQUNFLHlCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxxQ0FBQTtFQUNBLG1DQUFBO0FDTUY7QURKQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUNPSjtBRExBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ1FGO0FETkE7RUFDRSxnQkFBQTtFQUNBLGVBQUE7QUNTRjtBRFBBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHNCQUFBO1VBQUEscUJBQUE7RUFDQSwrQkFBQTtBQ1VGO0FEUkE7RUFDRSwwQkFBQTtFQUNBLGtCQUFBO0FDV0Y7QURUQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ1lGO0FEVkE7RUFDRSxTQUFBO0VBQ0Esb0NBQUE7VUFBQSw4QkFBQTtFQUNBLG1DQUFBO1VBQUEsa0NBQUE7RUFDQSxzQ0FBQTtFQUFBLCtCQUFBO0VBQ0EsNkJBQUE7QUNhRjtBRFhBO0VBQ0UsZ0NBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDY0Y7QURYQTtFQUNFLGVBQUE7RUFDQSxnQ0FBQTtBQ2NGO0FEVkE7RUFDRSxzQ0FBQTtFQUNBLG9CQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ2FGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYmFsYW5jZS9iYWxhbmNlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIHtcbiAgZm9udC1mYW1pbHk6IG1hbnJvcGUtYm9sZDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeSk7XG4gIGlvbi10aXRsZSB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxJTtcbiAgfVxufVxuZGl2LmJyZWFkY3J1bWIge1xuICBtYXJnaW4tbGVmdDogNCU7XG4gIG1hcmdpbi1yaWdodDogMyU7XG59XG5kaXYuYnJlYWRjcnVtYiBoNiB7XG4gIGZvbnQtZmFtaWx5OiBtYW5yb3BlLW1lZGl1bTtcbiAgbWFyZ2luOjA7XG59XG5pb24tY2FyZC1jb250ZW50IHtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLW0tYmFja2dyb3VuZCk7XG59XG5pb24tY2FyZC1jb250ZW50IHAge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5KTtcbn1cbmlvbi1jYXJkLWhlYWRlciB7XG4gIGZvbnQtZmFtaWx5OiBtYW5yb3BlLWJvbGQ7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnkpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tZ3JheS10d28pO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tbS1iYWNrZ3JvdW5kKTtcbn1cbmlvbi1mb290ZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogOTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAxQzMyO1xuIH1cbiNkaXNtaXNzIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICByaWdodDogMi41JTtcbiAgei1pbmRleDogMTtcbiAgZm9udC1mYW1pbHk6IG1hbnJvcGUtYm9sZDtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29sb3I6ICNhNjNmNDQ7XG59XG4jc2V0dGluZ3Mge1xuICBtYXJnaW4tcmlnaHQ6IDUlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5pb24tY2FyZC10aXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogbGVmdDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cbmlvbi1hdmF0YXIge1xuICBkaXNwbGF5OiBpbmxpbmUgIWltcG9ydGFudDtcbiAgbWFyZ2luLXJpZ2h0OiAyLjUlO1xufVxuaW9uLWF2YXRhciBpbWcge1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIHdpZHRoOiA3NXB4O1xuICBoZWlnaHQ6IGluaGVyaXQ7XG59XG4uY2VudGVyIHtcbiAgcmlnaHQ6IDIlO1xuICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4ICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xufVxuLmxpbmUge1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzdEOEI5OTtcbiAgbWFyZ2luLWxlZnQ6IDMuNSU7XG4gIG1hcmdpbi1yaWdodDogMy41JTtcblxufVxuLmxpbmUtbGlnaHQge1xuICBwYWRkaW5nLXRvcDogMiU7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjQzVDNUNFO1xufVxuXG5cbmlvbi1idXR0b24uZ2ltbWU1MCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgZm9udC1mYW1pbHk6IG1hbnJvcGUtYm9sZDtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIG1hcmdpbi10b3A6IDIuNSU7XG59IiwiaW9uLXRvb2xiYXIge1xuICBmb250LWZhbWlseTogbWFucm9wZS1ib2xkO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5KTtcbn1cbmlvbi10b29sYmFyIGlvbi10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgcGFkZGluZy1ib3R0b206IDElO1xufVxuXG5kaXYuYnJlYWRjcnVtYiB7XG4gIG1hcmdpbi1sZWZ0OiA0JTtcbiAgbWFyZ2luLXJpZ2h0OiAzJTtcbn1cblxuZGl2LmJyZWFkY3J1bWIgaDYge1xuICBmb250LWZhbWlseTogbWFucm9wZS1tZWRpdW07XG4gIG1hcmdpbjogMDtcbn1cblxuaW9uLWNhcmQtY29udGVudCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1tLWJhY2tncm91bmQpO1xufVxuXG5pb24tY2FyZC1jb250ZW50IHAge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5KTtcbn1cblxuaW9uLWNhcmQtaGVhZGVyIHtcbiAgZm9udC1mYW1pbHk6IG1hbnJvcGUtYm9sZDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1ncmF5LXR3byk7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1tLWJhY2tncm91bmQpO1xufVxuXG5pb24tZm9vdGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogOTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMUMzMjtcbn1cblxuI2Rpc21pc3Mge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHJpZ2h0OiAyLjUlO1xuICB6LWluZGV4OiAxO1xuICBmb250LWZhbWlseTogbWFucm9wZS1ib2xkO1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb2xvcjogI2E2M2Y0NDtcbn1cblxuI3NldHRpbmdzIHtcbiAgbWFyZ2luLXJpZ2h0OiA1JTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5pb24tY2FyZC10aXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogbGVmdDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuaW9uLWF2YXRhciB7XG4gIGRpc3BsYXk6IGlubGluZSAhaW1wb3J0YW50O1xuICBtYXJnaW4tcmlnaHQ6IDIuNSU7XG59XG5cbmlvbi1hdmF0YXIgaW1nIHtcbiAgZGlzcGxheTogaW5saW5lO1xuICB3aWR0aDogNzVweDtcbiAgaGVpZ2h0OiBpbmhlcml0O1xufVxuXG4uY2VudGVyIHtcbiAgcmlnaHQ6IDIlO1xuICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4ICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xufVxuXG4ubGluZSB7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjN0Q4Qjk5O1xuICBtYXJnaW4tbGVmdDogMy41JTtcbiAgbWFyZ2luLXJpZ2h0OiAzLjUlO1xufVxuXG4ubGluZS1saWdodCB7XG4gIHBhZGRpbmctdG9wOiAyJTtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNDNUM1Q0U7XG59XG5cbmlvbi1idXR0b24uZ2ltbWU1MCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgZm9udC1mYW1pbHk6IG1hbnJvcGUtYm9sZDtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIG1hcmdpbi10b3A6IDIuNSU7XG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _service_balance_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../service/balance.service */ "./src/app/service/balance.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var spark_md5__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! spark-md5 */ "./node_modules/spark-md5/spark-md5.js");
/* harmony import */ var spark_md5__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(spark_md5__WEBPACK_IMPORTED_MODULE_8__);









// declare var Minima: any;
let BalancePage = class BalancePage {
    constructor(balanceService, api, alertController, route, toastController, popoverController, userConfigService, ngZone) {
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
    ionViewWillEnter() {
        setTimeout(() => {
            this.pullInTokens();
        }, 1000);
        this.userConfigService.userConfig.subscribe((res) => {
            // ngZone re-renders onChange
            this.ngZone.run(() => {
                this.user = res;
            });
        });
    }
    ngOnInit() { }
    presentSettings(ev) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: _components_pop_settings_pop_settings_component__WEBPACK_IMPORTED_MODULE_2__["PopSettingsComponent"],
                cssClass: 'my-custom-class',
                event: ev,
                animated: true,
                translucent: true
            });
            return yield popover.present();
        });
    }
    giveMe50() {
        this.api.giveMe50().then((res) => {
            if (res.status === true) {
                this.presentAlert(res.message, 'Success.');
            }
            else {
                this.presentAlert(res.message, 'Transaction failed.');
            }
        });
    }
    hideTip() {
        this.user.tips.balance2 = true;
        this.userConfigService.userConfig.next(this.user);
        this.userConfigService.saveUserConfig(this.user);
    }
    // hide welcomeCard
    hide() {
        this.user.tips.balance = true;
        this.userConfigService.userConfig.next(this.user);
        this.userConfigService.saveUserConfig(this.user);
    }
    loadData(event) {
        setTimeout(() => {
            console.log('Done');
            event.target.complete();
            // App logic to determine if all data is loaded
            // and disable the infinite scroll
            if (this.tokenArr.length == 5) {
                event.target.disabled = true;
            }
        }, 500);
    }
    toggleInfiniteScroll() {
        this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
    }
    presentToast(msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: msg,
                duration: 2000
            });
            toast.present();
        });
    }
    presentAlert(msg, hdr) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: hdr,
                message: msg,
                buttons: ['Cancel', 'Ok']
            });
            yield alert.present();
        });
    }
    closeSliding(slidingItem) {
        slidingItem.close();
    }
    createIdenticon(tokenid) {
        return this.avatar = 'https://www.gravatar.com/avatar/' + spark_md5__WEBPACK_IMPORTED_MODULE_8__["hash"](tokenid) + '?d=identicon';
    }
    sendTokenOver(slidingItem, id) {
        slidingItem.close();
        this.route.navigate(['/send-funds/' + id]);
    }
    // check if it's a token, or a Mini
    instanceOfToken(data) {
        return 'script' in data;
    }
    pullInTokens() {
        this.balanceService.data.subscribe((balance) => {
            this.tokenArr = balance;
        });
    }
};
BalancePage.ctorParameters = () => [
    { type: _service_balance_service__WEBPACK_IMPORTED_MODULE_6__["BalanceService"] },
    { type: _service_minima_api_service__WEBPACK_IMPORTED_MODULE_3__["MinimaApiService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["PopoverController"] },
    { type: _service_userconfig_service__WEBPACK_IMPORTED_MODULE_1__["UserConfigService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"] }
];
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



/***/ })

}]);
//# sourceMappingURL=pages-balance-balance-module-es2015.js.map