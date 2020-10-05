(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-create-token-create-token-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/create-token/create-token.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/create-token/create-token.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-app>\n<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button class=\"menu-icon\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title class=\"large-text\">Token</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-card-header>\n      Create a custom token\n    </ion-card-header>\n\n    <ion-card-content>\n      <!-- Token FORM -->\n      <form (ngSubmit)=\"createTokenAdvanced(f)\" #f=\"ngForm\" id='my-form'>\n  \n        <ion-item>\n          <ion-label position=\"floating\" class=\"medium-text\">Name</ion-label>\n          <ion-input class=\"medium-text input\" #nameTextArea name=\"name\" [(ngModel)]=\"data.name\" (ionChange)=\"onUpdateTokenName($event)\"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label class=\"medium-text\" position=\"floating\">Amount</ion-label>\n          <ion-input class=\"medium-text input\" #amountRef name=\"amount\" [(ngModel)]=\"data.amount\" (ionChange)=\"onAmountChanged($event)\"></ion-input>\n        </ion-item>\n\n        <!-- Description -->\n        <ion-item>\n          <ion-label class=\"medium-text\" position=\"floating\">Description (Optional)</ion-label>\n          <ion-textarea #textarea \n                    class=\"small-text input\"\n                    name=\"description\"\n                    maxlength=\"255\" \n                    auto-grow=\"true\" \n                    [(ngModel)]=\"data.description\" \n                    placeholder=\"write your description here...\">\n          </ion-textarea>\n          <span class=\"length smaller-text\">{{ data.description.length+\"/255\"}}</span>\n        </ion-item>\n        <!-- Icon Entry -->\n        <ion-item [hidden]=\"iconEntry.isChecked\">\n          <ion-label class=\"medium-text\">Icon</ion-label>\n          <ion-checkbox class=\"checkbox\" name=\"checkboxicon\" [(ngModel)]=\"iconEntry.isChecked\"></ion-checkbox>\n        </ion-item>\n\n        <ion-item [hidden]=\"!iconEntry.isChecked\">\n          <ion-label class=\"medium-text\">Icon (Optional)</ion-label>\n          <ion-input class=\"medium-text input\" name=\"icon\" #iconURL [(ngModel)]=\"data.icon\" placeholder=\"icon URL\"></ion-input>\n          <ion-checkbox class=\"checkbox\" name=\"checkboxicon\" [(ngModel)]=\"iconEntry.isChecked\"></ion-checkbox>\n        </ion-item>\n        <ion-note class=\"medium-text\" style=\"opacity: 0.5 !important;\" [hidden]=\"!iconEntry.isChecked\">To set an icon for your token, add the URL of the hosted icon.</ion-note>\n        <!-- Proof Entry -->\n\n       <ion-item [hidden]=\"proofEntry.isChecked\">\n          <ion-label class=\"medium-text\">Proof</ion-label>\n          <ion-checkbox class=\"checkbox\" name=\"checkboxproof\" [(ngModel)]=\"proofEntry.isChecked\"></ion-checkbox>\n        </ion-item>\n\n        <ion-item [hidden]=\"!proofEntry.isChecked\">\n          <ion-label class=\"medium-text\">Proof (Optional)</ion-label>\n          <ion-input  name=\"proof\" class=\"medium-text input\" style=\"opacity: 0.75 !important;\" #proofURL [(ngModel)]=\"data.proof\" placeholder=\"proof URL\"></ion-input>\n          <ion-checkbox class=\"checkbox\" name=\"checkboxproof\" [(ngModel)]=\"proofEntry.isChecked\"></ion-checkbox>\n        </ion-item>\n        <ion-note class=\"medium-text\" style=\"opacity: 0.5 !important;\" [hidden]=\"!proofEntry.isChecked\">To set proof for your token, add to your host website a text file with the token ID.</ion-note>\n        \n        <ion-item lines=\"none\">\n          <ion-label class=\"medium-text\">Non Fungible Token</ion-label>\n          <ion-checkbox class=\"checkbox\" name=\"NFT\" [(ngModel)]=\"nft.isNonFungible\"></ion-checkbox>\n        </ion-item>\n         <ion-note class=\"medium-text\" [hidden]=\"!nft.isNonFungible\" style=\"padding: 20px; color: #855EFC; font-weight: 800; opacity:0.5 !important;\">\n          <ion-icon size=\"small\" name=\"images\"></ion-icon>\n          This token can be spent whole only\n          </ion-note>  \n      </form>\n    </ion-card-content>\n\n    \n      \n  </ion-card>\n\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <ion-buttons>\n      <button form=\"my-form\" style=\"width: 100%; background-color:transparent;\">\n      <ion-button \n        class=\"action-btn medium-text\" \n        shape=\"fill\"  \n        expand=\"fill\" \n        type=\"submit\" >\n      <ion-icon name=\"brush\" slot=\"start\"></ion-icon>\n        Create token\n      </ion-button>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer>\n\n</ion-app>"

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

module.exports = "ion-list ion-item ion-range ion-label {\n  font-size: 1rem;\n  font-weight: 300;\n  position: relative;\n}\n\n.checkbox {\n  padding-left: 5px;\n  padding-top: 5px;\n}\n\n.amount-font {\n  font-size: 1rem;\n}\n\nion-footer ion-toolbar ion-buttons ion-button {\n  width: 100%;\n}\n\n.tokenStyle {\n  color: #FF671D;\n  white-space: normal;\n  font-family: \"Aeonik-Light\";\n}\n\n.action-btn {\n  height: 72px;\n}\n\n.action-btn:hover {\n  height: 72px;\n}\n\n/** t-lite */\n\n.tlite {\n  background: #111;\n  color: white;\n  font-family: sans-serif;\n  font-size: 0.8rem;\n  font-weight: normal;\n  text-decoration: none;\n  text-align: left;\n  padding: 0.6em 0.75rem;\n  border-radius: 4px;\n  position: absolute;\n  opacity: 0;\n  visibility: hidden;\n  -webkit-transition: opacity 0.4s;\n  transition: opacity 0.4s;\n  white-space: nowrap;\n  box-shadow: 0 0.5rem 1rem -0.5rem black;\n  z-index: 1000;\n  -webkit-backface-visibility: hidden;\n}\n\n.tlite-table td,\n.tlite-table th {\n  position: relative;\n}\n\n.tlite-visible {\n  visibility: visible;\n  opacity: 0.9;\n}\n\n.tlite::before {\n  content: \" \";\n  display: block;\n  background: inherit;\n  width: 10px;\n  height: 10px;\n  position: absolute;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n}\n\n.tlite-n::before {\n  top: -3px;\n  left: 50%;\n  margin-left: -5px;\n}\n\n.tlite-nw::before {\n  top: -3px;\n  left: 10px;\n}\n\n.tlite-ne::before {\n  top: -3px;\n  right: 10px;\n}\n\n.tlite-s::before {\n  bottom: -3px;\n  left: 50%;\n  margin-left: -5px;\n}\n\n.tlite-se::before {\n  bottom: -3px;\n  right: 10px;\n}\n\nion-toolbar {\n  --background: var(--card-header-color);\n}\n\nion-card-content {\n  background: var(--ion-card-color);\n}\n\nion-card-header {\n  background: var(--ion-card-header);\n}\n\n.input {\n  opacity: 0.75 !important;\n}\n\n.length {\n  position: relative;\n  left: 90%;\n  bottom: 25%;\n  opacity: 0.5;\n}\n\nion-label {\n  font-weight: 600;\n  letter-spacing: -0.02em;\n  opacity: 0.6;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGlhcy9Qcm9qZWN0cy9taW5pbWFjb3JlL21vYmlsZS1hcHAtZnJvbnQtZW5kL2FwcC9zcmMvYXBwL3BhZ2VzL2NyZWF0ZS10b2tlbi9jcmVhdGUtdG9rZW4ucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9jcmVhdGUtdG9rZW4vY3JlYXRlLXRva2VuLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0FDRUo7O0FEQUE7RUFDSSxlQUFBO0FDR0o7O0FEQUE7RUFDRyxXQUFBO0FDR0g7O0FEREE7RUFDSSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtBQ0lKOztBRERBO0VBQ0ksWUFBQTtBQ0lKOztBREZBO0VBQ0ksWUFBQTtBQ0tKOztBRERBLFlBQUE7O0FBQ0E7RUFDSSxnQkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7RUFBQSx3QkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUNBQUE7RUFDQSxhQUFBO0VBQ0EsbUNBQUE7QUNJSjs7QURERTs7RUFFRSxrQkFBQTtBQ0lKOztBRERFO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0FDSUo7O0FEREU7RUFDRSxZQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdDQUFBO1VBQUEsd0JBQUE7QUNJSjs7QURERTtFQUNFLFNBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7QUNJSjs7QURERTtFQUNFLFNBQUE7RUFDQSxVQUFBO0FDSUo7O0FEREU7RUFDRSxTQUFBO0VBQ0EsV0FBQTtBQ0lKOztBRERFO0VBQ0UsWUFBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtBQ0lKOztBRERFO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUNJSjs7QURERTtFQUNFLHNDQUFBO0FDSUo7O0FERkU7RUFDRSxpQ0FBQTtBQ0tKOztBREhFO0VBQ0Usa0NBQUE7QUNNSjs7QURKRTtFQUNFLHdCQUFBO0FDT0o7O0FETEU7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ1FKOztBRE5FO0VBQ0UsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7QUNTSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NyZWF0ZS10b2tlbi9jcmVhdGUtdG9rZW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWxpc3QgaW9uLWl0ZW0gaW9uLXJhbmdlIGlvbi1sYWJlbCB7XG4gICAgZm9udC1zaXplOiAxLjByZW07XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbn1cbi5jaGVja2JveCB7XG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gICAgcGFkZGluZy10b3A6IDVweDtcbn1cbi5hbW91bnQtZm9udHtcbiAgICBmb250LXNpemU6IDFyZW07XG59XG5cbmlvbi1mb290ZXIgaW9uLXRvb2xiYXIgaW9uLWJ1dHRvbnMgaW9uLWJ1dHRvbntcbiAgIHdpZHRoOiAxMDAlO1xufVxuLnRva2VuU3R5bGUge1xuICAgIGNvbG9yOiAjRkY2NzFEO1xuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gICAgZm9udC1mYW1pbHk6ICdBZW9uaWstTGlnaHQnO1xufVxuXG4uYWN0aW9uLWJ0biB7XG4gICAgaGVpZ2h0OiA3MnB4O1xufVxuLmFjdGlvbi1idG46aG92ZXIge1xuICAgIGhlaWdodDogNzJweDtcbn1cblxuXG4vKiogdC1saXRlICovXG4udGxpdGUge1xuICAgIGJhY2tncm91bmQ6ICMxMTE7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgcGFkZGluZzogMC42ZW0gMC43NXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC40cztcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIGJveC1zaGFkb3c6IDAgMC41cmVtIDFyZW0gLTAuNXJlbSBibGFjaztcbiAgICB6LWluZGV4OiAxMDAwO1xuICAgIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICB9XG4gIFxuICAudGxpdGUtdGFibGUgdGQsXG4gIC50bGl0ZS10YWJsZSB0aCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG4gIFxuICAudGxpdGUtdmlzaWJsZSB7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICBvcGFjaXR5OiAwLjk7XG4gIH1cbiAgXG4gIC50bGl0ZTo6YmVmb3JlIHtcbiAgICBjb250ZW50OiAnICc7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgYmFja2dyb3VuZDogaW5oZXJpdDtcbiAgICB3aWR0aDogMTBweDtcbiAgICBoZWlnaHQ6IDEwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgfVxuICBcbiAgLnRsaXRlLW46OmJlZm9yZSB7XG4gICAgdG9wOiAtM3B4O1xuICAgIGxlZnQ6IDUwJTtcbiAgICBtYXJnaW4tbGVmdDogLTVweDtcbiAgfVxuICBcbiAgLnRsaXRlLW53OjpiZWZvcmUge1xuICAgIHRvcDogLTNweDtcbiAgICBsZWZ0OiAxMHB4O1xuICB9XG4gIFxuICAudGxpdGUtbmU6OmJlZm9yZSB7XG4gICAgdG9wOiAtM3B4O1xuICAgIHJpZ2h0OiAxMHB4O1xuICB9XG4gIFxuICAudGxpdGUtczo6YmVmb3JlIHtcbiAgICBib3R0b206IC0zcHg7XG4gICAgbGVmdDogNTAlO1xuICAgIG1hcmdpbi1sZWZ0OiAtNXB4O1xuICB9XG4gIFxuICAudGxpdGUtc2U6OmJlZm9yZSB7XG4gICAgYm90dG9tOiAtM3B4O1xuICAgIHJpZ2h0OiAxMHB4O1xuICB9XG5cbiAgaW9uLXRvb2xiYXIge1xuICAgIC0tYmFja2dyb3VuZDogdmFyKC0tY2FyZC1oZWFkZXItY29sb3IpO1xuICB9XG4gIGlvbi1jYXJkLWNvbnRlbnQge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jYXJkLWNvbG9yKTtcbiAgfVxuICBpb24tY2FyZC1oZWFkZXIge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jYXJkLWhlYWRlcik7XG4gIH1cbiAgLmlucHV0IHtcbiAgICBvcGFjaXR5OiAwLjc1ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmxlbmd0aCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGxlZnQ6OTAlO1xuICAgIGJvdHRvbTogMjUlO1xuICAgIG9wYWNpdHk6IDAuNTtcbiAgfVxuICBpb24tbGFiZWwge1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjAyZW07XG4gICAgb3BhY2l0eTogMC42O1xuICAgIFxuICB9IiwiaW9uLWxpc3QgaW9uLWl0ZW0gaW9uLXJhbmdlIGlvbi1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uY2hlY2tib3gge1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgcGFkZGluZy10b3A6IDVweDtcbn1cblxuLmFtb3VudC1mb250IHtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuXG5pb24tZm9vdGVyIGlvbi10b29sYmFyIGlvbi1idXR0b25zIGlvbi1idXR0b24ge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnRva2VuU3R5bGUge1xuICBjb2xvcjogI0ZGNjcxRDtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgZm9udC1mYW1pbHk6IFwiQWVvbmlrLUxpZ2h0XCI7XG59XG5cbi5hY3Rpb24tYnRuIHtcbiAgaGVpZ2h0OiA3MnB4O1xufVxuXG4uYWN0aW9uLWJ0bjpob3ZlciB7XG4gIGhlaWdodDogNzJweDtcbn1cblxuLyoqIHQtbGl0ZSAqL1xuLnRsaXRlIHtcbiAgYmFja2dyb3VuZDogIzExMTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZzogMC42ZW0gMC43NXJlbTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG9wYWNpdHk6IDA7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjRzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBib3gtc2hhZG93OiAwIDAuNXJlbSAxcmVtIC0wLjVyZW0gYmxhY2s7XG4gIHotaW5kZXg6IDEwMDA7XG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuXG4udGxpdGUtdGFibGUgdGQsXG4udGxpdGUtdGFibGUgdGgge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi50bGl0ZS12aXNpYmxlIHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgb3BhY2l0eTogMC45O1xufVxuXG4udGxpdGU6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZDogaW5oZXJpdDtcbiAgd2lkdGg6IDEwcHg7XG4gIGhlaWdodDogMTBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG59XG5cbi50bGl0ZS1uOjpiZWZvcmUge1xuICB0b3A6IC0zcHg7XG4gIGxlZnQ6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IC01cHg7XG59XG5cbi50bGl0ZS1udzo6YmVmb3JlIHtcbiAgdG9wOiAtM3B4O1xuICBsZWZ0OiAxMHB4O1xufVxuXG4udGxpdGUtbmU6OmJlZm9yZSB7XG4gIHRvcDogLTNweDtcbiAgcmlnaHQ6IDEwcHg7XG59XG5cbi50bGl0ZS1zOjpiZWZvcmUge1xuICBib3R0b206IC0zcHg7XG4gIGxlZnQ6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IC01cHg7XG59XG5cbi50bGl0ZS1zZTo6YmVmb3JlIHtcbiAgYm90dG9tOiAtM3B4O1xuICByaWdodDogMTBweDtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWNhcmQtaGVhZGVyLWNvbG9yKTtcbn1cblxuaW9uLWNhcmQtY29udGVudCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jYXJkLWNvbG9yKTtcbn1cblxuaW9uLWNhcmQtaGVhZGVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNhcmQtaGVhZGVyKTtcbn1cblxuLmlucHV0IHtcbiAgb3BhY2l0eTogMC43NSAhaW1wb3J0YW50O1xufVxuXG4ubGVuZ3RoIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiA5MCU7XG4gIGJvdHRvbTogMjUlO1xuICBvcGFjaXR5OiAwLjU7XG59XG5cbmlvbi1sYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4wMmVtO1xuICBvcGFjaXR5OiAwLjY7XG59Il19 */"

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
        if (f.value.name && f.value.name.length > 0 && f.value.amount && f.value.amount > 0) {
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
                buttons: [{
                        text: 'Close',
                        role: 'cancel'
                    }],
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