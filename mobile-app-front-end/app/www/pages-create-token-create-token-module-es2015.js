(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-create-token-create-token-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/create-token/create-token.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/create-token/create-token.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-app>\n<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button class=\"menu-icon\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title class=\"large-text\">Token</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-card-header>\n      Create a custom token\n    </ion-card-header>\n\n    <ion-card-content>\n      <!-- Token FORM -->\n      <form (ngSubmit)=\"createTokenAdvanced(f)\" #f=\"ngForm\" id='my-form'>\n  \n        <ion-item>\n          <ion-label position=\"floating\" class=\"medium-text\">Name</ion-label>\n          <ion-input class=\"medium-text input\" #nameTextArea name=\"name\" [(ngModel)]=\"data.name\" (ionChange)=\"onUpdateTokenName($event)\"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label class=\"medium-text\"  position=\"floating\">Amount</ion-label>\n          <ion-input class=\"medium-text input\" #amountRef name=\"amount\" [(ngModel)]=\"data.amount\" (ionChange)=\"onAmountChanged($event)\"></ion-input>\n        </ion-item>\n\n        <!-- Description -->\n        <ion-item>\n          <ion-label class=\"medium-text\"  position=\"floating\">Description (Optional)</ion-label>\n          <ion-textarea #textarea \n                    class=\"small-text input\"\n                    name=\"description\"\n                    maxlength=\"255\" \n                    auto-grow=\"true\" \n                    [(ngModel)]=\"data.description\" \n                    placeholder=\"write your description here...\">\n          </ion-textarea>\n          <span class=\"length smaller-text\">{{ data.description.length+\"/255\"}}</span>\n        </ion-item>\n        <!-- Icon Entry -->\n        <ion-item [hidden]=\"iconEntry.isChecked\">\n          <ion-label class=\"medium-text\">Icon</ion-label>\n          <ion-checkbox class=\"checkbox\" name=\"checkboxicon\" [(ngModel)]=\"iconEntry.isChecked\"></ion-checkbox>\n        </ion-item>\n\n        <ion-item [hidden]=\"!iconEntry.isChecked\">\n          <ion-label class=\"medium-text\">Icon (Optional)</ion-label>\n          <ion-input class=\"medium-text input\" name=\"icon\" #iconURL [(ngModel)]=\"data.icon\" placeholder=\"icon URL\"></ion-input>\n          <ion-checkbox class=\"checkbox\" name=\"checkboxicon\" [(ngModel)]=\"iconEntry.isChecked\"></ion-checkbox>\n        </ion-item>\n        <ion-note class=\"medium-text\" style=\"opacity: 0.5 !important;\" [hidden]=\"!iconEntry.isChecked\">To set an icon for your token, add the URL of the hosted icon.</ion-note>\n        <!-- Proof Entry -->\n\n       <ion-item [hidden]=\"proofEntry.isChecked\">\n          <ion-label class=\"medium-text\">Proof</ion-label>\n          <ion-checkbox class=\"checkbox\" name=\"checkboxproof\" [(ngModel)]=\"proofEntry.isChecked\"></ion-checkbox>\n        </ion-item>\n\n        <ion-item [hidden]=\"!proofEntry.isChecked\">\n          <ion-label class=\"medium-text\">Proof (Optional)</ion-label>\n          <ion-input  name=\"proof\" class=\"medium-text input\" style=\"opacity: 0.75 !important;\" #proofURL [(ngModel)]=\"data.proof\" placeholder=\"proof URL\"></ion-input>\n          <ion-checkbox class=\"checkbox\" name=\"checkboxproof\" [(ngModel)]=\"proofEntry.isChecked\"></ion-checkbox>\n        </ion-item>\n        <ion-note class=\"medium-text\" style=\"opacity: 0.5 !important;\" [hidden]=\"!proofEntry.isChecked\">To set proof for your token, add to your host website a text file with the token ID.</ion-note>\n        \n        <ion-item lines=\"none\">\n          <ion-label class=\"medium-text\">Non Fungible Token</ion-label>\n          <ion-checkbox class=\"checkbox\" name=\"NFT\" [(ngModel)]=\"nft.isNonFungible\"></ion-checkbox>\n        </ion-item>\n         <ion-note class=\"medium-text\" [hidden]=\"!nft.isNonFungible\" style=\"padding: 20px; color: #855EFC; font-weight: 800; opacity:0.5 !important;\">\n          <ion-icon size=\"small\" name=\"images\"></ion-icon>\n          This token can be spent whole only\n          </ion-note>  \n      </form>\n    </ion-card-content>\n\n    \n      \n  </ion-card>\n\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <ion-buttons>\n      <button form=\"my-form\" style=\"width: 100%; background-color:transparent;\">\n      <ion-button \n        class=\"action-btn medium-text\" \n        shape=\"fill\"  \n        expand=\"fill\" \n        type=\"submit\" >\n      <ion-icon name=\"brush\" slot=\"start\"></ion-icon>\n        Create token\n      </ion-button>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer>\n\n</ion-app>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _create_token_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./create-token.page */ "./src/app/pages/create-token/create-token.page.ts");







const routes = [
    {
        path: '',
        component: _create_token_page__WEBPACK_IMPORTED_MODULE_6__["CreateTokenPage"]
    }
];
let CreateTokenPageModule = class CreateTokenPageModule {
};
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



/***/ }),

/***/ "./src/app/pages/create-token/create-token.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/create-token/create-token.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-list ion-item ion-range ion-label {\n  font-size: 1rem;\n  font-weight: 300;\n  position: relative;\n}\n\n.checkbox {\n  padding-left: 5px;\n  padding-top: 5px;\n}\n\n.amount-font {\n  font-size: 1rem;\n}\n\nion-footer ion-toolbar ion-buttons ion-button {\n  width: 100%;\n}\n\n.tokenStyle {\n  color: #FF671D;\n  white-space: normal;\n  font-family: \"Aeonik-Light\";\n}\n\nion-toolbar ion-title {\n  font-weight: 300;\n}\n\n.action-btn {\n  height: 72px;\n}\n\n.action-btn:hover {\n  height: 72px;\n}\n\n/** t-lite */\n\n.tlite {\n  background: #111;\n  color: white;\n  font-family: sans-serif;\n  font-size: 0.8rem;\n  font-weight: normal;\n  text-decoration: none;\n  text-align: left;\n  padding: 0.6em 0.75rem;\n  border-radius: 4px;\n  position: absolute;\n  opacity: 0;\n  visibility: hidden;\n  -webkit-transition: opacity 0.4s;\n  transition: opacity 0.4s;\n  white-space: nowrap;\n  box-shadow: 0 0.5rem 1rem -0.5rem black;\n  z-index: 1000;\n  -webkit-backface-visibility: hidden;\n}\n\n.tlite-table td,\n.tlite-table th {\n  position: relative;\n}\n\n.tlite-visible {\n  visibility: visible;\n  opacity: 0.9;\n}\n\n.tlite::before {\n  content: \" \";\n  display: block;\n  background: inherit;\n  width: 10px;\n  height: 10px;\n  position: absolute;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n}\n\n.tlite-n::before {\n  top: -3px;\n  left: 50%;\n  margin-left: -5px;\n}\n\n.tlite-nw::before {\n  top: -3px;\n  left: 10px;\n}\n\n.tlite-ne::before {\n  top: -3px;\n  right: 10px;\n}\n\n.tlite-s::before {\n  bottom: -3px;\n  left: 50%;\n  margin-left: -5px;\n}\n\n.tlite-se::before {\n  bottom: -3px;\n  right: 10px;\n}\n\nion-toolbar {\n  --background: var(--card-header-color);\n}\n\nion-card-content {\n  background: var(--ion-card-color);\n}\n\nion-card-header {\n  background: var(--ion-card-header);\n}\n\n.input {\n  opacity: 0.75 !important;\n}\n\n.length {\n  position: relative;\n  left: 90%;\n  opacity: 0.5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGlhcy9Qcm9qZWN0cy9taW5pbWFjb3JlL21vYmlsZS1hcHAtZnJvbnQtZW5kL2FwcC9zcmMvYXBwL3BhZ2VzL2NyZWF0ZS10b2tlbi9jcmVhdGUtdG9rZW4ucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9jcmVhdGUtdG9rZW4vY3JlYXRlLXRva2VuLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0FDRUo7O0FEQUE7RUFDSSxlQUFBO0FDR0o7O0FEQUE7RUFDRyxXQUFBO0FDR0g7O0FEREE7RUFDSSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtBQ0lKOztBRERBO0VBQ0ksZ0JBQUE7QUNJSjs7QUREQTtFQUNJLFlBQUE7QUNJSjs7QURGQTtFQUNJLFlBQUE7QUNLSjs7QUREQSxZQUFBOztBQUNBO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGdDQUFBO0VBQUEsd0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVDQUFBO0VBQ0EsYUFBQTtFQUNBLG1DQUFBO0FDSUo7O0FEREU7O0VBRUUsa0JBQUE7QUNJSjs7QURERTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtBQ0lKOztBRERFO0VBQ0UsWUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQ0FBQTtVQUFBLHdCQUFBO0FDSUo7O0FEREU7RUFDRSxTQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0FDSUo7O0FEREU7RUFDRSxTQUFBO0VBQ0EsVUFBQTtBQ0lKOztBRERFO0VBQ0UsU0FBQTtFQUNBLFdBQUE7QUNJSjs7QURERTtFQUNFLFlBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7QUNJSjs7QURERTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FDSUo7O0FEREU7RUFDRSxzQ0FBQTtBQ0lKOztBREZFO0VBQ0UsaUNBQUE7QUNLSjs7QURIRTtFQUNFLGtDQUFBO0FDTUo7O0FESkU7RUFDRSx3QkFBQTtBQ09KOztBRExFO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtBQ1FKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY3JlYXRlLXRva2VuL2NyZWF0ZS10b2tlbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tbGlzdCBpb24taXRlbSBpb24tcmFuZ2UgaW9uLWxhYmVsIHtcbiAgICBmb250LXNpemU6IDEuMHJlbTtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xufVxuLmNoZWNrYm94IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xufVxuLmFtb3VudC1mb250e1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbn1cblxuaW9uLWZvb3RlciBpb24tdG9vbGJhciBpb24tYnV0dG9ucyBpb24tYnV0dG9ue1xuICAgd2lkdGg6IDEwMCU7XG59XG4udG9rZW5TdHlsZSB7XG4gICAgY29sb3I6ICNGRjY3MUQ7XG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgICBmb250LWZhbWlseTogJ0Flb25pay1MaWdodCc7XG59XG5cbmlvbi10b29sYmFyIGlvbi10aXRsZSB7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcblxufVxuLmFjdGlvbi1idG4ge1xuICAgIGhlaWdodDogNzJweDtcbn1cbi5hY3Rpb24tYnRuOmhvdmVyIHtcbiAgICBoZWlnaHQ6IDcycHg7XG59XG5cblxuLyoqIHQtbGl0ZSAqL1xuLnRsaXRlIHtcbiAgICBiYWNrZ3JvdW5kOiAjMTExO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHBhZGRpbmc6IDAuNmVtIDAuNzVyZW07XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNHM7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBib3gtc2hhZG93OiAwIDAuNXJlbSAxcmVtIC0wLjVyZW0gYmxhY2s7XG4gICAgei1pbmRleDogMTAwMDtcbiAgICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgfVxuICBcbiAgLnRsaXRlLXRhYmxlIHRkLFxuICAudGxpdGUtdGFibGUgdGgge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuICBcbiAgLnRsaXRlLXZpc2libGUge1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgb3BhY2l0eTogMC45O1xuICB9XG4gIFxuICAudGxpdGU6OmJlZm9yZSB7XG4gICAgY29udGVudDogJyAnO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJhY2tncm91bmQ6IGluaGVyaXQ7XG4gICAgd2lkdGg6IDEwcHg7XG4gICAgaGVpZ2h0OiAxMHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIH1cbiAgXG4gIC50bGl0ZS1uOjpiZWZvcmUge1xuICAgIHRvcDogLTNweDtcbiAgICBsZWZ0OiA1MCU7XG4gICAgbWFyZ2luLWxlZnQ6IC01cHg7XG4gIH1cbiAgXG4gIC50bGl0ZS1udzo6YmVmb3JlIHtcbiAgICB0b3A6IC0zcHg7XG4gICAgbGVmdDogMTBweDtcbiAgfVxuICBcbiAgLnRsaXRlLW5lOjpiZWZvcmUge1xuICAgIHRvcDogLTNweDtcbiAgICByaWdodDogMTBweDtcbiAgfVxuICBcbiAgLnRsaXRlLXM6OmJlZm9yZSB7XG4gICAgYm90dG9tOiAtM3B4O1xuICAgIGxlZnQ6IDUwJTtcbiAgICBtYXJnaW4tbGVmdDogLTVweDtcbiAgfVxuICBcbiAgLnRsaXRlLXNlOjpiZWZvcmUge1xuICAgIGJvdHRvbTogLTNweDtcbiAgICByaWdodDogMTBweDtcbiAgfVxuXG4gIGlvbi10b29sYmFyIHtcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWNhcmQtaGVhZGVyLWNvbG9yKTtcbiAgfVxuICBpb24tY2FyZC1jb250ZW50IHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY2FyZC1jb2xvcik7XG4gIH1cbiAgaW9uLWNhcmQtaGVhZGVyIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY2FyZC1oZWFkZXIpO1xuICB9XG4gIC5pbnB1dCB7XG4gICAgb3BhY2l0eTogMC43NSAhaW1wb3J0YW50O1xuICB9XG4gIC5sZW5ndGgge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBsZWZ0OjkwJTtcbiAgICBvcGFjaXR5OiAwLjU7XG4gIH0iLCJpb24tbGlzdCBpb24taXRlbSBpb24tcmFuZ2UgaW9uLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogMzAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5jaGVja2JveCB7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xuICBwYWRkaW5nLXRvcDogNXB4O1xufVxuXG4uYW1vdW50LWZvbnQge1xuICBmb250LXNpemU6IDFyZW07XG59XG5cbmlvbi1mb290ZXIgaW9uLXRvb2xiYXIgaW9uLWJ1dHRvbnMgaW9uLWJ1dHRvbiB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4udG9rZW5TdHlsZSB7XG4gIGNvbG9yOiAjRkY2NzFEO1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICBmb250LWZhbWlseTogXCJBZW9uaWstTGlnaHRcIjtcbn1cblxuaW9uLXRvb2xiYXIgaW9uLXRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cblxuLmFjdGlvbi1idG4ge1xuICBoZWlnaHQ6IDcycHg7XG59XG5cbi5hY3Rpb24tYnRuOmhvdmVyIHtcbiAgaGVpZ2h0OiA3MnB4O1xufVxuXG4vKiogdC1saXRlICovXG4udGxpdGUge1xuICBiYWNrZ3JvdW5kOiAjMTExO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nOiAwLjZlbSAwLjc1cmVtO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgb3BhY2l0eTogMDtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNHM7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGJveC1zaGFkb3c6IDAgMC41cmVtIDFyZW0gLTAuNXJlbSBibGFjaztcbiAgei1pbmRleDogMTAwMDtcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG59XG5cbi50bGl0ZS10YWJsZSB0ZCxcbi50bGl0ZS10YWJsZSB0aCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnRsaXRlLXZpc2libGUge1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICBvcGFjaXR5OiAwLjk7XG59XG5cbi50bGl0ZTo6YmVmb3JlIHtcbiAgY29udGVudDogXCIgXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xuICB3aWR0aDogMTBweDtcbiAgaGVpZ2h0OiAxMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbn1cblxuLnRsaXRlLW46OmJlZm9yZSB7XG4gIHRvcDogLTNweDtcbiAgbGVmdDogNTAlO1xuICBtYXJnaW4tbGVmdDogLTVweDtcbn1cblxuLnRsaXRlLW53OjpiZWZvcmUge1xuICB0b3A6IC0zcHg7XG4gIGxlZnQ6IDEwcHg7XG59XG5cbi50bGl0ZS1uZTo6YmVmb3JlIHtcbiAgdG9wOiAtM3B4O1xuICByaWdodDogMTBweDtcbn1cblxuLnRsaXRlLXM6OmJlZm9yZSB7XG4gIGJvdHRvbTogLTNweDtcbiAgbGVmdDogNTAlO1xuICBtYXJnaW4tbGVmdDogLTVweDtcbn1cblxuLnRsaXRlLXNlOjpiZWZvcmUge1xuICBib3R0b206IC0zcHg7XG4gIHJpZ2h0OiAxMHB4O1xufVxuXG5pb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tY2FyZC1oZWFkZXItY29sb3IpO1xufVxuXG5pb24tY2FyZC1jb250ZW50IHtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNhcmQtY29sb3IpO1xufVxuXG5pb24tY2FyZC1oZWFkZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY2FyZC1oZWFkZXIpO1xufVxuXG4uaW5wdXQge1xuICBvcGFjaXR5OiAwLjc1ICFpbXBvcnRhbnQ7XG59XG5cbi5sZW5ndGgge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDkwJTtcbiAgb3BhY2l0eTogMC41O1xufSJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_minima_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/minima-api.service */ "./src/app/service/minima-api.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");





let CreateTokenPage = class CreateTokenPage {
    constructor(api, alertController, toastController) {
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
    ionViewDidEnter() { }
    ngOnInit() { }
    createTokenAdvanced(f) {
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
            this.api.createToken(this.data).then((res) => {
                if (res.status === true) {
                    this.presentToast('Success! ' + this.data.name + ' has been created.', "success");
                    this.resetForm();
                }
                else {
                    this.presentToast("Your token creation failed, " + res.message, 'danger');
                }
            });
        }
        else {
            this.presentToast('There is an error with your inputs.', 'danger');
        }
    }
    //Alerts
    presentToast(msg, type) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: msg,
                duration: 4000,
                color: type,
                keyboardClose: true,
                translucent: true,
                position: 'top'
            });
            toast.present();
        });
    }
    onAmountChanged(event) {
        this.tokenAmount = event.target.value;
        this.minimaAmount = this.tokenAmount / 1000000000000;
        let regExp = new RegExp('^[a-zA-Z]+$');
        let regExpSpecial = new RegExp('[^\w\d]');
        if (regExp.test(this.tokenAmount.toString())) {
            event.target.value = this.tokenAmount.toString().slice(0, -1);
        }
    }
    resetForm() {
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
    }
    onUpdateTokenName(event) {
        this.tokenName = event.target.value;
    }
};
CreateTokenPage.ctorParameters = () => [
    { type: _service_minima_api_service__WEBPACK_IMPORTED_MODULE_2__["MinimaApiService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] }
];
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



/***/ })

}]);
//# sourceMappingURL=pages-create-token-create-token-module-es2015.js.map