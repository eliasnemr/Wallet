(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-balance-balance-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/balance/balance.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/balance/balance.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n      <ion-title color=\"primary\">\n        Balance\n      </ion-title>\n    </ion-toolbar>\n\n  </ion-header>\n\n  <ion-content>\n\n    <ion-card color=\"white\">\n      <ion-card-header color=\"white\">\n\n      </ion-card-header>\n  <ion-card-content>\n\n  <ion-icon style=\" font-size:2.0rem; padding-left:10px;\" name=\"card\" slot=\"start\" class=\"icon-head\"></ion-icon>\n  <ion-list *ngFor=\"let token of tokenArr;\">\n\n  <ion-item-sliding>\n  <ion-item-options side=\"start\">\n  <ion-item-option class=\"receive-slide\" routerLink=\"/my-address\">Receive</ion-item-option>\n  <ion-item-option class=\"send-slide\" (click)=\"sendTokenOver(token.id)\">Send</ion-item-option>\n  </ion-item-options>\n\n  <ion-item lines=\"full\" style=\"width: 90%; left: 5%;\">\n  <ion-label class=\"logo-names\">\n    <ion-icon class=\"balance-token\" src=\"./assets/icon/minima.svg\"></ion-icon>\n    <ion-note class=\"balance-tokenname\"> {{ token.token }} </ion-note>\n  </ion-label>\n  <ion-label class=\"confirmed-amount\">\n    {{ token.confirmed }}\n  </ion-label>\n  <ion-label *ngIf='token.unconfirmed != 0' class=\"unconfirmed-amount\" color=\"black\">\n    {{ token.unconfirmed }}\n  </ion-label>\n  </ion-item>\n\n  <ion-item-options side=\"end\">\n    <ion-item-option (click)=\"presentPopover($event, token.id)\">Token ID</ion-item-option>\n  </ion-item-options>\n  </ion-item-sliding>\n\n  </ion-list>\n\n  <!-- SKELETON UX FOR LOADING -->\n  <div *ngIf=\"tokenArr.length < 1\">\n  <ion-list *ngFor=\"let tkn of tokenSpoof\">\n    <ion-item lines=\"full\">\n\n    <ion-avatar slot=\"start\" class=\"skeleton-icon\">\n      <ion-skeleton-text animated></ion-skeleton-text>\n    </ion-avatar>\n\n\n    <p class=\"skeleton-name\"><ion-skeleton-text animated animated> </ion-skeleton-text></p>\n    \n    <ion-label slot=\"end\" class=\"skeleton-amount\"><ion-skeleton-text animated></ion-skeleton-text></ion-label>\n    </ion-item>\n    \n  </ion-list>\n  </div>\n\n  </ion-card-content>\n  </ion-card>\n  </ion-content>\n\n  <ion-footer>\n    <ion-toolbar>\n      <ion-buttons>\n        <ion-button class=\"action-btn\" shape=\"\" expand=\"block\" type=\"button\" (click)=\"giveMe50()\">\n          <ion-icon name=\"cash\" slot=\"start\"></ion-icon> Gimme 50\n        </ion-button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-footer>"

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

module.exports = "@media screen and (max-width: 320px) {\n  p {\n    font-size: 10px;\n  }\n}\n.send-slide {\n  background-color: #FF671E;\n}\nion-card {\n  border-radius: 30px;\n  background-color: #FFFFFF;\n}\nion-footer ion-toolbar ion-buttons ion-button {\n  width: 100%;\n}\n.confirmed-label {\n  margin: auto;\n  font-size: 1rem;\n  font-weight: 300;\n  white-space: normal;\n}\n.confirmed-amount {\n  color: #00AAC7;\n  font-size: 1rem;\n  font-family: \"Aeonik-bold\";\n  white-space: normal;\n  text-align: right;\n}\n.unconfirmed-amount {\n  font-size: 0.8rem;\n  font-family: \"Aeonik-bold\";\n  white-space: normal;\n  text-align: right;\n}\n.logo-names {\n  font-size: 1rem;\n  font-weight: 300;\n  text-align: left;\n}\n.icon-head {\n  color: #1FB4CD;\n}\n.action-btn {\n  height: 40px;\n}\n.action-btn:hover {\n  height: 50px;\n}\n.balance-token {\n  font-size: 1.5rem;\n}\n.balance-tokenname {\n  position: absolute;\n  font-family: \"Aeonik-bold\";\n  text-transform: uppercase;\n  padding-top: 6px;\n  padding-left: 2px;\n}\n/** SKELETON CSS */\n.wrapper {\n  width: 250px;\n  overflow: hidden;\n}\n.skeleton-icon {\n  size: 0.5rem;\n}\n.skeleton-name {\n  width: 20%;\n}\n.skeleton-amount {\n  width: 5%;\n}\n.ios .skeleton-amount {\n  margin-left: 10%;\n}\n.ios .skeleton-name {\n  width: 20%;\n}\n@media screen and (max-width: 900px) {\n  .skeleton-icon {\n    size: 0.5rem;\n  }\n\n  .skeleton-name {\n    width: 20%;\n  }\n\n  .skeleton-amount {\n    margin-left: 90%;\n    width: 5%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGlhcy9Qcm9qZWN0cy9taW5pbWFjb3JlL21vYmlsZS1hcHAtZnJvbnQtZW5kL2FwcC9zcmMvYXBwL3BhZ2VzL2JhbGFuY2UvYmFsYW5jZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2JhbGFuY2UvYmFsYW5jZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSTtJQUNJLGVBQUE7RUNDTjtBQUNGO0FERUE7RUFDRSx5QkFBQTtBQ0FGO0FER0E7RUFDSSxtQkFBQTtFQUNBLHlCQUFBO0FDQUo7QURJQTtFQUNJLFdBQUE7QUNESjtBRElDO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDREw7QURHQztFQUNHLGNBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FDQUo7QURFQztFQUNJLGlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FDQ0w7QURDQztFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDRUw7QURFQztFQUNHLGNBQUE7QUNDSjtBRENDO0VBQ0csWUFBQTtBQ0VKO0FEQUU7RUFDRSxZQUFBO0FDR0o7QURBRTtFQUNJLGlCQUFBO0FDR047QURERTtFQUNDLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNJSDtBRERFLGtCQUFBO0FBQ0E7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7QUNJSjtBREZFO0VBQ0UsWUFBQTtBQ0tKO0FESEU7RUFDRSxVQUFBO0FDTUo7QURKRTtFQUNFLFNBQUE7QUNPSjtBREhFO0VBQ0UsZ0JBQUE7QUNNSjtBREpFO0VBQ0UsVUFBQTtBQ09KO0FESkE7RUFDSTtJQUNFLFlBQUE7RUNPSjs7RURMRTtJQUNFLFVBQUE7RUNRSjs7RURORTtJQUNFLGdCQUFBO0lBQ0EsU0FBQTtFQ1NKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9iYWxhbmNlL2JhbGFuY2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzIwcHgpIHtcbiAgICBwIHtcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgIH1cbn1cblxuLnNlbmQtc2xpZGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY2NzFFO1xufVxuXG5pb24tY2FyZCB7XG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xuXG59XG5cbmlvbi1mb290ZXIgaW9uLXRvb2xiYXIgaW9uLWJ1dHRvbnMgaW9uLWJ1dHRvbntcbiAgICB3aWR0aDogMTAwJTtcbiB9XG5cbiAuY29uZmlybWVkLWxhYmVse1xuICAgICBtYXJnaW46IGF1dG87XG4gICAgIGZvbnQtc2l6ZTogMS4wcmVtO1xuICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuIH1cbiAuY29uZmlybWVkLWFtb3VudCB7XG4gICAgY29sb3I6ICMwMEFBQzc7XG4gICAgZm9udC1zaXplOiAxLjByZW07XG4gICAgZm9udC1mYW1pbHk6ICdBZW9uaWstYm9sZCc7XG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiB9XG4gLnVuY29uZmlybWVkLWFtb3VudCB7XG4gICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgICBmb250LWZhbWlseTogJ0Flb25pay1ib2xkJztcbiAgICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gfVxuIC5sb2dvLW5hbWVzIHtcbiAgICAgZm9udC1zaXplOiAxLjByZW07XG4gICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgIFxuIH1cblxuIC5pY29uLWhlYWR7XG4gICAgY29sb3I6ICMxRkI0Q0Q7XG4gfVxuIC5hY3Rpb24tYnRuIHtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gIH1cbiAgLmFjdGlvbi1idG46aG92ZXIge1xuICAgIGhlaWdodDogNTBweDtcbiAgfVxuXG4gIC5iYWxhbmNlLXRva2VuIHtcbiAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICB9XG4gIC5iYWxhbmNlLXRva2VubmFtZSB7XG4gICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICBmb250LWZhbWlseTogJ0Flb25pay1ib2xkJyA7XG4gICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgcGFkZGluZy10b3A6IDZweDtcbiAgIHBhZGRpbmctbGVmdDogMnB4O1xuICB9XG5cbiAgLyoqIFNLRUxFVE9OIENTUyAqL1xuICAud3JhcHBlciB7XG4gICAgd2lkdGg6IDI1MHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cbiAgLnNrZWxldG9uLWljb24ge1xuICAgIHNpemU6IDAuNXJlbTtcbiAgfVxuICAuc2tlbGV0b24tbmFtZSB7XG4gICAgd2lkdGg6IDIwJTtcbiAgfVxuICAuc2tlbGV0b24tYW1vdW50IHtcbiAgICB3aWR0aDogNSU7XG4gIH1cblxuICAvL2lPUyBcbiAgLmlvcyAuc2tlbGV0b24tYW1vdW50IHtcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xuICB9XG4gIC5pb3MgLnNrZWxldG9uLW5hbWUge1xuICAgIHdpZHRoOiAyMCU7XG4gIH1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTAwcHgpIHtcbiAgICAuc2tlbGV0b24taWNvbiB7XG4gICAgICBzaXplOiAwLjVyZW07XG4gICAgfVxuICAgIC5za2VsZXRvbi1uYW1lIHtcbiAgICAgIHdpZHRoOiAyMCU7XG4gICAgfVxuICAgIC5za2VsZXRvbi1hbW91bnQge1xuICAgICAgbWFyZ2luLWxlZnQ6IDkwJTtcbiAgICAgIHdpZHRoOiA1JTtcbiAgICB9XG59XG4gXG4gICIsIkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMyMHB4KSB7XG4gIHAge1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgfVxufVxuLnNlbmQtc2xpZGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY2NzFFO1xufVxuXG5pb24tY2FyZCB7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XG59XG5cbmlvbi1mb290ZXIgaW9uLXRvb2xiYXIgaW9uLWJ1dHRvbnMgaW9uLWJ1dHRvbiB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY29uZmlybWVkLWxhYmVsIHtcbiAgbWFyZ2luOiBhdXRvO1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG59XG5cbi5jb25maXJtZWQtYW1vdW50IHtcbiAgY29sb3I6ICMwMEFBQzc7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC1mYW1pbHk6IFwiQWVvbmlrLWJvbGRcIjtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi51bmNvbmZpcm1lZC1hbW91bnQge1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgZm9udC1mYW1pbHk6IFwiQWVvbmlrLWJvbGRcIjtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5sb2dvLW5hbWVzIHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogMzAwO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uaWNvbi1oZWFkIHtcbiAgY29sb3I6ICMxRkI0Q0Q7XG59XG5cbi5hY3Rpb24tYnRuIHtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuXG4uYWN0aW9uLWJ0bjpob3ZlciB7XG4gIGhlaWdodDogNTBweDtcbn1cblxuLmJhbGFuY2UtdG9rZW4ge1xuICBmb250LXNpemU6IDEuNXJlbTtcbn1cblxuLmJhbGFuY2UtdG9rZW5uYW1lIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBmb250LWZhbWlseTogXCJBZW9uaWstYm9sZFwiO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBwYWRkaW5nLXRvcDogNnB4O1xuICBwYWRkaW5nLWxlZnQ6IDJweDtcbn1cblxuLyoqIFNLRUxFVE9OIENTUyAqL1xuLndyYXBwZXIge1xuICB3aWR0aDogMjUwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5za2VsZXRvbi1pY29uIHtcbiAgc2l6ZTogMC41cmVtO1xufVxuXG4uc2tlbGV0b24tbmFtZSB7XG4gIHdpZHRoOiAyMCU7XG59XG5cbi5za2VsZXRvbi1hbW91bnQge1xuICB3aWR0aDogNSU7XG59XG5cbi5pb3MgLnNrZWxldG9uLWFtb3VudCB7XG4gIG1hcmdpbi1sZWZ0OiAxMCU7XG59XG5cbi5pb3MgLnNrZWxldG9uLW5hbWUge1xuICB3aWR0aDogMjAlO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCkge1xuICAuc2tlbGV0b24taWNvbiB7XG4gICAgc2l6ZTogMC41cmVtO1xuICB9XG5cbiAgLnNrZWxldG9uLW5hbWUge1xuICAgIHdpZHRoOiAyMCU7XG4gIH1cblxuICAuc2tlbGV0b24tYW1vdW50IHtcbiAgICBtYXJnaW4tbGVmdDogOTAlO1xuICAgIHdpZHRoOiA1JTtcbiAgfVxufSJdfQ== */"

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
    function BalancePage(service, api, alertController, popoverController, balanceService, ref, route) {
        this.service = service;
        this.api = api;
        this.alertController = alertController;
        this.popoverController = popoverController;
        this.balanceService = balanceService;
        this.ref = ref;
        this.route = route;
        this.tokenArr = [];
        this.tokenSpoof = [];
        // - vars
        this.lastJSON = '';
        this.host = '';
        this.MINI_TOKENID = '0x00';
    }
    BalancePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.pullArrLength();
        setTimeout(function () {
            _this.pullInTokens(); // subscribes & polls balance
        }, 1000);
    };
    BalancePage.prototype.ngOnInit = function () { };
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
            else {
                console.log("Result is false " + res);
            }
        });
    };
    // currently unavailable
    BalancePage.prototype.doRefresh = function (event) {
        // setTimeout( () => {
        //   event.target.complete();
        //   console.log('refreshing completed.');
        // }, 1000);
    };
    BalancePage.prototype.presentPopover = function (ev, data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var popover;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverController.create({
                            component: _components_pop_over_pop_over_component__WEBPACK_IMPORTED_MODULE_5__["PopOverComponent"],
                            event: ev,
                            cssClass: 'balance-popover',
                            translucent: false,
                            componentProps: { tokenid: data },
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
            for (var i in res.response.balance) {
                _this.tokenSpoof.push(res.response.balance[i].confirmed);
            }
        });
    };
    BalancePage.prototype.pullInTokens = function () {
        var _this = this;
        this.balanceSubscription = this.service.getBalance().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (responseData) {
            var tokenArr = [];
            for (var key in responseData.response.balance) {
                if (responseData.response.balance.hasOwnProperty(key)) {
                    var element = responseData.response.balance[key];
                    // round up confirmed && unconfirmed
                    var tempConfirmed = (Math.round(element.confirmed * 1000) / 1000);
                    var tempUnconfirmed = (Math.round(element.unconfirmed * 1000) / 1000);
                    tokenArr.push({
                        id: element.tokenid,
                        token: element.token,
                        total: element.total,
                        confirmed: tempConfirmed,
                        unconfirmed: tempUnconfirmed,
                        mempool: element.mempool,
                        sendable: element.sendable
                    });
                    // add Minima always to the top
                    if (element.tokenid === _this.MINI_TOKENID) {
                        tokenArr.pop(); // pop it
                        _this.service.update(tokenArr, {
                            id: element.tokenid,
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
        { type: _service_balance_service__WEBPACK_IMPORTED_MODULE_6__["BalanceService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }
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
            _service_balance_service__WEBPACK_IMPORTED_MODULE_6__["BalanceService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
    ], BalancePage);
    return BalancePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-balance-balance-module-es5.js.map