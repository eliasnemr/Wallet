(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-create-token-create-token-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/create-token/create-token.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/create-token/create-token.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-app>\n<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title color = \"primary\" slot=\"start\" > Token </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card color=\"white\">\n    <ion-card-header>\n      <ion-card-title>\n      <ion-icon size=\"large\" name=\"clipboard\"></ion-icon>\n      <ion-text style=\"position:relative; padding:8px 0 0 8px;\" [hidden]=\"tokenName.length === 0\">Your transaction for the token, {{ tokenName }}</ion-text>\n      </ion-card-title>\n    </ion-card-header>\n\n    <ion-card-content>\n      <!-- Token FORM -->\n      <form (ngSubmit)=\"createTokenAdvanced(f)\" #f=\"ngForm\" id='my-form'>\n  \n        <ion-item>\n          <ion-label position=\"floating\" class=\"amount-font\">Name</ion-label>\n          <ion-input #nameTextArea name=\"name\" [(ngModel)]=\"data.name\" (ionChange)=\"onUpdateTokenName($event)\"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label class=\"amount-font\"  position=\"floating\">Amount</ion-label>\n          <ion-input #amountRef name=\"amount\" [(ngModel)]=\"data.amount\" (ionChange)=\"onAmountChanged($event)\"></ion-input>\n        </ion-item>\n\n        <!-- Description -->\n        <ion-item>\n          <ion-label class=\"amount-font\"  position=\"floating\">Description (Optional)</ion-label>\n          <ion-textarea #textarea \n                    name=\"description\"\n                    maxlength=\"255\" \n                    auto-grow=\"true\" \n                    [(ngModel)]=\"data.description\" \n                    placeholder=\"write your description here...\">\n          </ion-textarea>\n          <p style=\"position: relative; left:80%; font-family:'Optima'\">{{ data.description.length+\"/255\"}}</p>\n        </ion-item>\n        <!-- Icon Entry -->\n        <ion-item [hidden]=\"iconEntry.isChecked\">\n          <ion-label>Icon</ion-label>\n          <ion-checkbox class=\"checkbox\" name=\"checkboxicon\" [(ngModel)]=\"iconEntry.isChecked\"></ion-checkbox>\n        </ion-item>\n\n        <ion-item [hidden]=\"!iconEntry.isChecked\">\n          <ion-label>Icon (Optional)</ion-label>\n          <ion-input name=\"icon\" #iconURL [(ngModel)]=\"data.icon\" placeholder=\"icon URL\"></ion-input>\n          <ion-checkbox class=\"checkbox\" name=\"checkboxicon\" [(ngModel)]=\"iconEntry.isChecked\"></ion-checkbox>\n        </ion-item>\n        <ion-note [hidden]=\"!iconEntry.isChecked\">To set an icon for your token, add the URL of the hosted icon.</ion-note>\n        <!-- Proof Entry -->\n\n       <ion-item [hidden]=\"proofEntry.isChecked\">\n          <ion-label>Proof</ion-label>\n          <ion-checkbox class=\"checkbox\" name=\"checkboxproof\" [(ngModel)]=\"proofEntry.isChecked\"></ion-checkbox>\n        </ion-item>\n\n        <ion-item [hidden]=\"!proofEntry.isChecked\">\n          <ion-label>Proof (Optional)</ion-label>\n          <ion-input  name=\"proof\" #proofURL [(ngModel)]=\"data.proof\" placeholder=\"proof URL\"></ion-input>\n          <ion-checkbox class=\"checkbox\" name=\"checkboxproof\" [(ngModel)]=\"proofEntry.isChecked\"></ion-checkbox>\n        </ion-item>\n        <ion-note [hidden]=\"!proofEntry.isChecked\">To set proof for your token, add to your host website a text file with the token ID.</ion-note>\n        \n        <ion-item lines=\"none\">\n          <ion-label>Non Fungible Token</ion-label>\n          <ion-checkbox class=\"checkbox\" name=\"NFT\" [(ngModel)]=\"nft.isNonFungible\"></ion-checkbox>\n        </ion-item>\n         <ion-note [hidden]=\"!nft.isNonFungible\" style=\"padding: 20px; color: #855EFC; font-weight: 800;\">\n          <ion-icon  size=\"small\" name=\"images\"></ion-icon>\n          This token can be spent whole only\n          </ion-note>  \n      </form>\n    </ion-card-content>\n\n    \n      \n  </ion-card>\n\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <ion-buttons>\n      <button form=\"my-form\" style=\"width: 100%; background-color:transparent;\">\n      <ion-button \n        class=\"action-btn\" \n        shape=\"fill\"  \n        slot=\"primary\" \n        expand=\"fill\" \n        type=\"submit\" >\n      <ion-icon name=\"brush\" slot=\"start\"></ion-icon>\n        Create token\n      </ion-button>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer>\n\n</ion-app>"

/***/ }),

/***/ "./src/app/pages/create-token/create-token.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/create-token/create-token.module.ts ***!
  \***********************************************************/
/*! exports provided: CreateTokenPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateTokenPageModule", function() { return CreateTokenPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _create_token_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./create-token.page */ "./src/app/pages/create-token/create-token.page.ts");







var routes = [
    {
        path: '',
        component: _create_token_page__WEBPACK_IMPORTED_MODULE_6__["CreateTokenPage"]
    }
];
var CreateTokenPageModule = /** @class */ (function () {
    function CreateTokenPageModule() {
    }
    CreateTokenPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_create_token_page__WEBPACK_IMPORTED_MODULE_6__["CreateTokenPage"]]
        })
    ], CreateTokenPageModule);
    return CreateTokenPageModule;
}());



/***/ }),

/***/ "./src/app/pages/create-token/create-token.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/create-token/create-token.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-list ion-item ion-range ion-label {\n  font-size: 1rem;\n  font-weight: 300;\n  position: relative;\n}\n\n.checkbox {\n  padding-left: 5px;\n  padding-top: 5px;\n}\n\n.amount-font {\n  font-size: 1rem;\n}\n\nion-footer ion-toolbar ion-buttons ion-button {\n  width: 100%;\n}\n\nion-card {\n  --background: var(--ion-background-color, #f2f2f2);\n}\n\n.tokenStyle {\n  color: #FF671D;\n  white-space: normal;\n  font-family: \"Aeonik-Light\";\n}\n\nion-toolbar ion-title {\n  font-weight: 300;\n  position: relative;\n}\n\n.action-btn {\n  height: 72px;\n}\n\n.action-btn:hover {\n  height: 72px;\n}\n\n.action-btn:hover ion-icon {\n  font-size: large;\n}\n\n/** t-lite */\n\n.tlite {\n  background: #111;\n  color: white;\n  font-family: sans-serif;\n  font-size: 0.8rem;\n  font-weight: normal;\n  text-decoration: none;\n  text-align: left;\n  padding: 0.6em 0.75rem;\n  border-radius: 4px;\n  position: absolute;\n  opacity: 0;\n  visibility: hidden;\n  -webkit-transition: opacity 0.4s;\n  transition: opacity 0.4s;\n  white-space: nowrap;\n  box-shadow: 0 0.5rem 1rem -0.5rem black;\n  z-index: 1000;\n  -webkit-backface-visibility: hidden;\n}\n\n.tlite-table td,\n.tlite-table th {\n  position: relative;\n}\n\n.tlite-visible {\n  visibility: visible;\n  opacity: 0.9;\n}\n\n.tlite::before {\n  content: \" \";\n  display: block;\n  background: inherit;\n  width: 10px;\n  height: 10px;\n  position: absolute;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n}\n\n.tlite-n::before {\n  top: -3px;\n  left: 50%;\n  margin-left: -5px;\n}\n\n.tlite-nw::before {\n  top: -3px;\n  left: 10px;\n}\n\n.tlite-ne::before {\n  top: -3px;\n  right: 10px;\n}\n\n.tlite-s::before {\n  bottom: -3px;\n  left: 50%;\n  margin-left: -5px;\n}\n\n.tlite-se::before {\n  bottom: -3px;\n  right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGlhcy9Qcm9qZWN0cy9taW5pbWFjb3JlL21vYmlsZS1hcHAtZnJvbnQtZW5kL2FwcC9zcmMvYXBwL3BhZ2VzL2NyZWF0ZS10b2tlbi9jcmVhdGUtdG9rZW4ucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9jcmVhdGUtdG9rZW4vY3JlYXRlLXRva2VuLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0FDRUo7O0FEQUE7RUFDSSxlQUFBO0FDR0o7O0FEQUE7RUFDRyxXQUFBO0FDR0g7O0FEQUE7RUFDSSxrREFBQTtBQ0dKOztBREFBO0VBQ0ksY0FBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7QUNHSjs7QURBQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7QUNHSjs7QUREQTtFQUNJLFlBQUE7QUNJSjs7QURGQTtFQUNJLFlBQUE7QUNLSjs7QURISTtFQUNJLGdCQUFBO0FDS1I7O0FERUEsWUFBQTs7QUFDQTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQ0FBQTtFQUFBLHdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1Q0FBQTtFQUNBLGFBQUE7RUFDQSxtQ0FBQTtBQ0NKOztBREVFOztFQUVFLGtCQUFBO0FDQ0o7O0FERUU7RUFDRSxtQkFBQTtFQUNBLFlBQUE7QUNDSjs7QURFRTtFQUNFLFlBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7VUFBQSx3QkFBQTtBQ0NKOztBREVFO0VBQ0UsU0FBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVFO0VBQ0UsU0FBQTtFQUNBLFVBQUE7QUNDSjs7QURFRTtFQUNFLFNBQUE7RUFDQSxXQUFBO0FDQ0o7O0FERUU7RUFDRSxZQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUU7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY3JlYXRlLXRva2VuL2NyZWF0ZS10b2tlbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tbGlzdCBpb24taXRlbSBpb24tcmFuZ2UgaW9uLWxhYmVsIHtcbiAgICBmb250LXNpemU6IDEuMHJlbTtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xufVxuLmNoZWNrYm94IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xufVxuLmFtb3VudC1mb250e1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbn1cblxuaW9uLWZvb3RlciBpb24tdG9vbGJhciBpb24tYnV0dG9ucyBpb24tYnV0dG9ue1xuICAgd2lkdGg6IDEwMCU7XG59XG5cbmlvbi1jYXJkIHtcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZjJmMmYyKTtcbn1cblxuLnRva2VuU3R5bGUge1xuICAgIGNvbG9yOiAjRkY2NzFEO1xuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gICAgZm9udC1mYW1pbHk6ICdBZW9uaWstTGlnaHQnO1xufVxuXG5pb24tdG9vbGJhciBpb24tdGl0bGUge1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgcG9zaXRpb246cmVsYXRpdmU7XG59XG4uYWN0aW9uLWJ0biB7XG4gICAgaGVpZ2h0OiA3MnB4O1xufVxuLmFjdGlvbi1idG46aG92ZXIge1xuICAgIGhlaWdodDogNzJweDtcblxuICAgIGlvbi1pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiBsYXJnZTtcbiAgICAgIH1cbn1cblxuXG5cblxuLyoqIHQtbGl0ZSAqL1xuLnRsaXRlIHtcbiAgICBiYWNrZ3JvdW5kOiAjMTExO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHBhZGRpbmc6IDAuNmVtIDAuNzVyZW07XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNHM7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBib3gtc2hhZG93OiAwIDAuNXJlbSAxcmVtIC0wLjVyZW0gYmxhY2s7XG4gICAgei1pbmRleDogMTAwMDtcbiAgICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgfVxuICBcbiAgLnRsaXRlLXRhYmxlIHRkLFxuICAudGxpdGUtdGFibGUgdGgge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuICBcbiAgLnRsaXRlLXZpc2libGUge1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgb3BhY2l0eTogMC45O1xuICB9XG4gIFxuICAudGxpdGU6OmJlZm9yZSB7XG4gICAgY29udGVudDogJyAnO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJhY2tncm91bmQ6IGluaGVyaXQ7XG4gICAgd2lkdGg6IDEwcHg7XG4gICAgaGVpZ2h0OiAxMHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIH1cbiAgXG4gIC50bGl0ZS1uOjpiZWZvcmUge1xuICAgIHRvcDogLTNweDtcbiAgICBsZWZ0OiA1MCU7XG4gICAgbWFyZ2luLWxlZnQ6IC01cHg7XG4gIH1cbiAgXG4gIC50bGl0ZS1udzo6YmVmb3JlIHtcbiAgICB0b3A6IC0zcHg7XG4gICAgbGVmdDogMTBweDtcbiAgfVxuICBcbiAgLnRsaXRlLW5lOjpiZWZvcmUge1xuICAgIHRvcDogLTNweDtcbiAgICByaWdodDogMTBweDtcbiAgfVxuICBcbiAgLnRsaXRlLXM6OmJlZm9yZSB7XG4gICAgYm90dG9tOiAtM3B4O1xuICAgIGxlZnQ6IDUwJTtcbiAgICBtYXJnaW4tbGVmdDogLTVweDtcbiAgfVxuICBcbiAgLnRsaXRlLXNlOjpiZWZvcmUge1xuICAgIGJvdHRvbTogLTNweDtcbiAgICByaWdodDogMTBweDtcbiAgfSIsImlvbi1saXN0IGlvbi1pdGVtIGlvbi1yYW5nZSBpb24tbGFiZWwge1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmNoZWNrYm94IHtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG59XG5cbi5hbW91bnQtZm9udCB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cblxuaW9uLWZvb3RlciBpb24tdG9vbGJhciBpb24tYnV0dG9ucyBpb24tYnV0dG9uIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmlvbi1jYXJkIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwgI2YyZjJmMik7XG59XG5cbi50b2tlblN0eWxlIHtcbiAgY29sb3I6ICNGRjY3MUQ7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gIGZvbnQtZmFtaWx5OiBcIkFlb25pay1MaWdodFwiO1xufVxuXG5pb24tdG9vbGJhciBpb24tdGl0bGUge1xuICBmb250LXdlaWdodDogMzAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5hY3Rpb24tYnRuIHtcbiAgaGVpZ2h0OiA3MnB4O1xufVxuXG4uYWN0aW9uLWJ0bjpob3ZlciB7XG4gIGhlaWdodDogNzJweDtcbn1cbi5hY3Rpb24tYnRuOmhvdmVyIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiBsYXJnZTtcbn1cblxuLyoqIHQtbGl0ZSAqL1xuLnRsaXRlIHtcbiAgYmFja2dyb3VuZDogIzExMTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZzogMC42ZW0gMC43NXJlbTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG9wYWNpdHk6IDA7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjRzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBib3gtc2hhZG93OiAwIDAuNXJlbSAxcmVtIC0wLjVyZW0gYmxhY2s7XG4gIHotaW5kZXg6IDEwMDA7XG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuXG4udGxpdGUtdGFibGUgdGQsXG4udGxpdGUtdGFibGUgdGgge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi50bGl0ZS12aXNpYmxlIHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgb3BhY2l0eTogMC45O1xufVxuXG4udGxpdGU6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZDogaW5oZXJpdDtcbiAgd2lkdGg6IDEwcHg7XG4gIGhlaWdodDogMTBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG59XG5cbi50bGl0ZS1uOjpiZWZvcmUge1xuICB0b3A6IC0zcHg7XG4gIGxlZnQ6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IC01cHg7XG59XG5cbi50bGl0ZS1udzo6YmVmb3JlIHtcbiAgdG9wOiAtM3B4O1xuICBsZWZ0OiAxMHB4O1xufVxuXG4udGxpdGUtbmU6OmJlZm9yZSB7XG4gIHRvcDogLTNweDtcbiAgcmlnaHQ6IDEwcHg7XG59XG5cbi50bGl0ZS1zOjpiZWZvcmUge1xuICBib3R0b206IC0zcHg7XG4gIGxlZnQ6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IC01cHg7XG59XG5cbi50bGl0ZS1zZTo6YmVmb3JlIHtcbiAgYm90dG9tOiAtM3B4O1xuICByaWdodDogMTBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/create-token/create-token.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/create-token/create-token.page.ts ***!
  \*********************************************************/
/*! exports provided: CreateTokenPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateTokenPage", function() { return CreateTokenPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_minima_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/minima-api.service */ "./src/app/service/minima-api.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var CreateTokenPage = /** @class */ (function () {
    function CreateTokenPage(api, alertController, toastController) {
        this.api = api;
        this.alertController = alertController;
        this.toastController = toastController;
        this.data = {
            name: String,
            amount: Number,
            description: String,
            script: String,
            icon: String,
            proof: String,
        };
        this.minimaAmount = 0;
        this.tokenAmount = 0;
        this.tokenName = '';
        this.balance = 0;
        this.descriptionLength = 0;
        this.iconEntry = {
            isChecked: Boolean
        };
        this.proofEntry = {
            isChecked: Boolean
        };
        this.nft = {
            isNonFungible: Boolean
        };
        this.data.name = "";
        this.data.amount = "";
        this.data.description = "";
        this.data.script = "RETURN TRUE";
        this.data.icon = "";
        this.data.proof = "";
        this.iconEntry.isChecked = false;
        this.proofEntry.isChecked = false;
        this.nft.isNonFungible = false;
    }
    CreateTokenPage.prototype.ionViewDidEnter = function () { };
    CreateTokenPage.prototype.ngOnInit = function () { };
    CreateTokenPage.prototype.createTokenAdvanced = function (f) {
        var _this = this;
        console.log(f);
        if (f.value.name && f.value.name.length > 0 && f.value.amount && f.value.amount > 0) {
            console.log("passed check 1");
            this.data.name = f.value.name;
            this.data.amount = f.value.amount;
            this.data.description = f.value.description;
            // Check and set..
            if (f.value.checkboxproof === false) {
                this.data.proof = "";
            }
            else {
                this.data.proof = f.value.proof;
            }
            if (f.checkboxicon === false || f.value.icon === "" || f.value.icon.length <= 0) {
                this.data.icon = "";
            }
            else {
                this.data.icon = f.value.icon;
            }
            // if NFT return custom script if not.. RETURN TRUE
            if (f.value.NFT === false) {
                this.data.script = "RETURN TRUE";
            }
            else if (f.value.NFT === true) {
                this.data.script = "ASSERT FLOOR ( @AMOUNT ) EQ @AMOUNT LET checkout = 0 WHILE ( checkout LT @TOTOUT ) DO IF GETOUTTOK ( checkout ) EQ @TOKENID THEN LET outamt = GETOUTAMT ( checkout ) ASSERT FLOOR ( outamt ) EQ outamt ENDIF LET checkout = INC ( checkout ) ENDWHILE RETURN TRUE";
            }
            this.api.createToken(this.data).then(function (res) {
                if (res.status === true) {
                    _this.presentToast('Success! ' + _this.data.name + ' has been created.', "success");
                    _this.resetForm();
                }
                else {
                    _this.presentToast("Your token creation failed, " + res.message, 'danger');
                }
            });
        }
        else {
            this.presentToast('There is an error with your inputs.', 'danger');
        }
    };
    //Alerts
    CreateTokenPage.prototype.presentToast = function (msg, type) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: msg,
                            duration: 4000,
                            color: type,
                            keyboardClose: true,
                            translucent: true,
                            position: 'top'
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    CreateTokenPage.prototype.onAmountChanged = function (event) {
        this.tokenAmount = event.target.value;
        this.minimaAmount = this.tokenAmount / 1000000000000;
        var regExp = new RegExp('^[a-zA-Z]+$');
        var regExpSpecial = new RegExp('[^\w\d]');
        if (regExp.test(this.tokenAmount.toString())) {
            event.target.value = this.tokenAmount.toString().slice(0, -1);
        }
    };
    CreateTokenPage.prototype.resetForm = function () {
        this.nameText.value = '';
        this.amountRef.value = '';
        this.proofURL.value = '';
        this.iconURL.value = '';
        this.textArea.value = '';
        this.iconEntry.isChecked = false;
        this.proofEntry.isChecked = false;
        this.nft.isNonFungible = false;
        this.tokenAmount = 0;
        this.tokenName = '';
    };
    CreateTokenPage.prototype.onUpdateTokenName = function (event) {
        this.tokenName = event.target.value;
    };
    CreateTokenPage.ctorParameters = function () { return [
        { type: _service_minima_api_service__WEBPACK_IMPORTED_MODULE_2__["MinimaApiService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"])
    ], CreateTokenPage.prototype, "tokenForm", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('nameTextArea', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonInput"])
    ], CreateTokenPage.prototype, "nameText", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('amountRef', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonInput"])
    ], CreateTokenPage.prototype, "amountRef", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('proofURL', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonInput"])
    ], CreateTokenPage.prototype, "proofURL", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('iconURL', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonInput"])
    ], CreateTokenPage.prototype, "iconURL", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('textarea', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonTextarea"])
    ], CreateTokenPage.prototype, "textArea", void 0);
    CreateTokenPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-token',
            template: __webpack_require__(/*! raw-loader!./create-token.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/create-token/create-token.page.html"),
            styles: [__webpack_require__(/*! ./create-token.page.scss */ "./src/app/pages/create-token/create-token.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_minima_api_service__WEBPACK_IMPORTED_MODULE_2__["MinimaApiService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]])
    ], CreateTokenPage);
    return CreateTokenPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-create-token-create-token-module-es5.js.map