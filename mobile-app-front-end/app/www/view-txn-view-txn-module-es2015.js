(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["view-txn-view-txn-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/history/view-txn/view-txn.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/history/view-txn/view-txn.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"border-b\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/history\"></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"large-text\">TxPoW Details</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"12\" size-md=\"12\">\n        <ion-datetime disabled displayFormat=\"D MMMM YYYY &mdash; HH:mm:ss\" value=\"{{ relaytime }}\" display-timezone=\"utc\" ></ion-datetime>\n      </ion-col>\n    </ion-row>\n    \n    <ion-list>\n      <ion-list-header>\n        Details\n      </ion-list-header>\n\n      <ion-item lines=\"none\">\n        <ion-col size-md=\"3\"  size-sm=\"6\" class=\"title\">\n          Status\n        </ion-col>\n        <ion-col class=\"value completed\">\n          Completed.\n        </ion-col>\n      </ion-item>\n\n      <ion-item lines=\"none\">\n        <ion-col size-md=\"3\"  size-sm=\"6\" class=\"title\">\n          Hash\n          <a class=\"copy\" (click)=\"copyToClipPWA(id)\">\n            Copy \n          </a>\n        </ion-col>\n        <ion-col class=\"value\">\n          {{ id }}\n        </ion-col>\n      </ion-item>\n\n      <ion-item lines=\"none\">\n        <ion-col size-md=\"3\"  size-sm=\"6\" class=\"title\">\n          Size\n        </ion-col>\n        <ion-col class=\"value\">\n          {{ size }}\n        </ion-col>\n      </ion-item>\n\n      <ion-item lines=\"none\">\n        <ion-col size-md=\"3\"  size-sm=\"6\" class=\"title\">\n          Is A Block\n        </ion-col>\n        <ion-col class=\"value\">\n          {{ isblock }}\n        </ion-col>\n      </ion-item>\n\n      <ion-item lines=\"none\">\n        <ion-col size-md=\"3\"  size-sm=\"6\" class=\"title\">\n          Is In A block\n        </ion-col>\n        <ion-col class=\"value\">\n          {{ isinblock }}\n        </ion-col>\n      </ion-item>\n\n      <ion-item lines=\"none\">\n        <ion-col size-md=\"3\"  size-sm=\"6\" *ngIf=\"isinblock === true\" class=\"title\">\n          In Block\n        </ion-col>\n        <ion-col size-md=\"3\"  size-sm=\"6\" *ngIf=\"isinblock === false\" class=\"title\">\n          Would of been Block\n        </ion-col>\n        <ion-col class=\"value\">\n          {{ blocknumber }}\n        </ion-col>\n      </ion-item>\n\n      <ion-item lines=\"none\">\n        <ion-col size-md=\"3\"  size-sm=\"6\" class=\"title\">\n          Nonce\n        </ion-col>\n        <ion-col class=\"value\">\n          {{ nonce }}\n        </ion-col>\n      </ion-item>\n\n      <ion-item lines=\"none\">\n        <ion-col size-md=\"3\"  size-sm=\"6\" class=\"title\">\n          Transaction Type\n        </ion-col>\n        <ion-col class=\"value\">\n          {{ type }}\n        </ion-col>\n      </ion-item>\n      \n      <ion-item lines=\"none\" *ngIf=\"type === 'Token Creation.'\">\n        <ion-col size-md=\"3\"  size-sm=\"6\" class=\"title\">\n          Token Name\n        </ion-col>\n        <ion-col class=\"value\">\n          {{ tokenname }}\n        </ion-col>\n      </ion-item>\n\n      <ion-item lines=\"none\" *ngIf=\"type === 'Token Creation.'\">\n        <ion-col size-md=\"3\"  size-sm=\"6\" class=\"title\">\n          Token Total\n        </ion-col>\n        <ion-col class=\"value\">\n          {{ tokentotal }}\n        </ion-col>\n      </ion-item>\n      \n\n    </ion-list>\n\n    <ion-grid>\n      <ion-list-header>\n        Overview\n      </ion-list-header>\n\n      <ion-list-header class=\"inputs\">\n        Inputs\n      </ion-list-header>\n      <ion-col class=\"ion-no-padding\" size=\"12\" *ngFor=\"let input of inputs; let i=index;\">\n\n        <ion-row>\n          <ion-col>\n            <ion-card class=\"borders\">\n              <ion-list>\n                <ion-item lines=\"none\">\n                  <ion-col size-md=\"3\"  size-sm=\"6\">\n                    Index <a>{{ \"#\"+ i }}</a>\n                  </ion-col>\n                </ion-item>\n\n                <ion-item lines=\"none\">\n                  <ion-col size-md=\"3\"  size-sm=\"6\" class=\"title\">\n                    Coinid\n                  </ion-col>\n                  <ion-col class=\"value\">\n                    {{ input.coinid }}\n                  </ion-col>\n                </ion-item>\n\n                <ion-item lines=\"none\">\n                  <ion-col size-md=\"3\"  size-sm=\"6\" class=\"title\">\n                    Address\n                    <a class=\"copy\" (click)=\"copyToClipPWA(input.address)\">\n                      Copy\n                    </a>\n                  </ion-col>  \n                  <ion-col class=\"value\">\n                    {{ input.address }}\n                  </ion-col>               \n                </ion-item>\n\n                <ion-item lines=\"none\">\n                  <ion-col size-md=\"3\"  size-sm=\"6\" class=\"title\">\n                    Amount\n                  </ion-col>\n                  <ion-col class=\"value\">\n                    {{ input.amount }}\n                  </ion-col>              \n                </ion-item>\n\n                <ion-item lines=\"none\">\n                  <ion-col size-md=\"3\"  size-sm=\"6\" class=\"title\">\n                    TokenID\n                  </ion-col>  \n                  <ion-col class=\"value\">\n                    {{ input.tokenid }}\n                  </ion-col>               \n                </ion-item>\n\n                \n\n              </ion-list>\n            </ion-card>\n          </ion-col>\n        </ion-row>\n\n      </ion-col>\n\n      <ion-list-header class=\"outputs\">\n        Outputs\n      </ion-list-header>\n      <ion-col class=\"ion-no-padding\" size=\"12\" *ngFor=\"let output of outputs; let i=index;\">\n\n        <ion-row>\n          <ion-col>\n            <ion-card class=\"borders\">\n              <ion-list>\n                <ion-item lines=\"none\">\n                  <ion-col size-md=\"3\"  size-sm=\"6\">\n                    Index <a>{{ \"#\"+ i }}</a>\n                  </ion-col>\n                </ion-item>\n\n                <ion-item lines=\"none\">\n                  <ion-col size-md=\"3\"  size-sm=\"6\" class=\"title\">\n                    Coinid\n                  </ion-col>\n                  <ion-col class=\"value\">\n                    {{ output.coinid }}\n                  </ion-col>\n                </ion-item>\n\n                <ion-item lines=\"none\">\n                  <ion-col size-md=\"3\"  size-sm=\"6\" class=\"title\">\n                    Address\n                      <a class=\"copy\" (click)=\"copyToClipPWA(output.address)\">\n                        Copy\n                      </a>\n                  </ion-col>\n                  <ion-col class=\"value\">\n                    {{ output.address }}\n                  </ion-col>              \n                </ion-item>\n\n                <ion-item lines=\"none\">\n                  <ion-col size-md=\"3\"  size-sm=\"6\" class=\"title\">\n                    Amount\n                  </ion-col>\n                  <ion-col class=\"value\">\n                    {{ output.amount }}\n                  </ion-col>              \n                </ion-item>\n\n                <ion-item lines=\"none\">\n                  <ion-col size-md=\"3\"  size-sm=\"6\" class=\"title\">\n                    TokenID\n                  </ion-col>  \n                  <ion-col class=\"value\">\n                    {{ output.tokenid }}\n                  </ion-col>               \n                </ion-item>\n\n              </ion-list>\n            </ion-card>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-grid>\n  </ion-grid>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/history/view-txn/view-txn.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/history/view-txn/view-txn.module.ts ***!
  \***********************************************************/
/*! exports provided: ViewTXNPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewTXNPageModule", function() { return ViewTXNPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _view_txn_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view-txn.page */ "./src/app/pages/history/view-txn/view-txn.page.ts");







const routes = [
    {
        path: '',
        component: _view_txn_page__WEBPACK_IMPORTED_MODULE_6__["ViewTXNPage"]
    }
];
let ViewTXNPageModule = class ViewTXNPageModule {
};
ViewTXNPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_view_txn_page__WEBPACK_IMPORTED_MODULE_6__["ViewTXNPage"]]
    })
], ViewTXNPageModule);



/***/ }),

/***/ "./src/app/pages/history/view-txn/view-txn.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/history/view-txn/view-txn.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-datetime {\n  font-family: manrope-bold;\n  padding: 0;\n  margin-left: 1%;\n}\n\nion-back-button .button-native .button-inner ion-icon {\n  font-size: 1.2rem !important;\n}\n\nion-back-button:hover {\n  --background-hover: none;\n  --color: var(--ion-color-secondary);\n}\n\nion-title {\n  font-family: manrope-bold;\n  font-size: 1rem;\n}\n\nh5 {\n  letter-spacing: -0.02em;\n  font-weight: 600;\n  font-size: 1.5rem;\n}\n\n.copy {\n  text-decoration: underline;\n  cursor: pointer;\n  font-size: 0.8rem;\n}\n\nion-list-header {\n  font-weight: 600;\n  font-size: 1.5rem;\n  letter-spacing: -0.02em;\n}\n\n.title {\n  font-family: manrope-bold;\n  font-size: 1rem;\n  float: left;\n  text-overflow: ellipsis;\n  max-width: inherit;\n  white-space: normal;\n  word-wrap: normal;\n}\n\n.value {\n  font-family: manrope-light;\n  text-align: left;\n  float: left;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  max-width: inherit;\n  overflow: hidden;\n}\n\n.relay {\n  display: inline-block;\n  width: 100%;\n}\n\n.chevron {\n  width: 15px;\n}\n\n.inputs, .outputs {\n  font-size: 1.2rem;\n  opacity: 0.5;\n}\n\n.completed {\n  font-size: 1.2rem;\n  font-weight: 400;\n  color: rgba(75, 222, 131, 0.7);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGlhc25lbXIvcHJvamVjdHMvV0FMTEVUL21vYmlsZS1hcHAtZnJvbnQtZW5kL2FwcC9zcmMvYXBwL3BhZ2VzL2hpc3Rvcnkvdmlldy10eG4vdmlldy10eG4ucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9oaXN0b3J5L3ZpZXctdHhuL3ZpZXctdHhuLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUNDSjs7QURDQTtFQUNJLDRCQUFBO0FDRUo7O0FEQUE7RUFDSSx3QkFBQTtFQUNBLG1DQUFBO0FDR0o7O0FEREE7RUFDSSx5QkFBQTtFQUNBLGVBQUE7QUNJSjs7QURGQTtFQUNJLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ0tKOztBREhBO0VBQ0ksMEJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNNSjs7QURKQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtBQ09KOztBRExBO0VBQ0kseUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FDUUo7O0FETkE7RUFDSSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDU0o7O0FEUEE7RUFDSSxxQkFBQTtFQUNBLFdBQUE7QUNVSjs7QURSQTtFQUNJLFdBQUE7QUNXSjs7QURUQTtFQUNJLGlCQUFBO0VBQ0EsWUFBQTtBQ1lKOztBRFZBO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtFQUNBLDhCQUFBO0FDYUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9oaXN0b3J5L3ZpZXctdHhuL3ZpZXctdHhuLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1kYXRldGltZSB7XG4gICAgZm9udC1mYW1pbHk6IG1hbnJvcGUtYm9sZDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbi1sZWZ0OiAxJTtcbn1cbmlvbi1iYWNrLWJ1dHRvbiAuYnV0dG9uLW5hdGl2ZSAuYnV0dG9uLWlubmVyIGlvbi1pY29uIHtcbiAgICBmb250LXNpemU6IDEuMnJlbSFpbXBvcnRhbnQ7XG59XG5pb24tYmFjay1idXR0b246aG92ZXIge1xuICAgIC0tYmFja2dyb3VuZC1ob3Zlcjogbm9uZTtcbiAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbn1cbmlvbi10aXRsZSB7XG4gICAgZm9udC1mYW1pbHk6IG1hbnJvcGUtYm9sZDtcbiAgICBmb250LXNpemU6IDEuMHJlbTtcbn1cbmg1IHtcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMDJlbTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuLmNvcHkge1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmb250LXNpemU6IDAuOHJlbTtcbn1cbmlvbi1saXN0LWhlYWRlciB7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMDJlbTtcbn1cbi50aXRsZSB7XG4gICAgZm9udC1mYW1pbHk6IG1hbnJvcGUtYm9sZDtcbiAgICBmb250LXNpemU6IDEuMHJlbTtcbiAgICBmbG9hdDogbGVmdDtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICBtYXgtd2lkdGg6IGluaGVyaXQ7XG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgICB3b3JkLXdyYXA6IG5vcm1hbDtcbn1cbi52YWx1ZSB7XG4gICAgZm9udC1mYW1pbHk6IG1hbnJvcGUtbGlnaHQ7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBmbG9hdDpsZWZ0O1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgbWF4LXdpZHRoOiBpbmhlcml0O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG4ucmVsYXkge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbn1cbi5jaGV2cm9uIHtcbiAgICB3aWR0aDogMTVweDtcbn1cbi5pbnB1dHMsIC5vdXRwdXRzIHtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICBvcGFjaXR5OiAwLjU7XG59XG4uY29tcGxldGVkIHtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGNvbG9yOiByZ2JhKDc1LDIyMiwxMzEsIDAuNyk7XG59IiwiaW9uLWRhdGV0aW1lIHtcbiAgZm9udC1mYW1pbHk6IG1hbnJvcGUtYm9sZDtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luLWxlZnQ6IDElO1xufVxuXG5pb24tYmFjay1idXR0b24gLmJ1dHRvbi1uYXRpdmUgLmJ1dHRvbi1pbm5lciBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMS4ycmVtICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1iYWNrLWJ1dHRvbjpob3ZlciB7XG4gIC0tYmFja2dyb3VuZC1ob3Zlcjogbm9uZTtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG59XG5cbmlvbi10aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBtYW5yb3BlLWJvbGQ7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cblxuaDUge1xuICBsZXR0ZXItc3BhY2luZzogLTAuMDJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxLjVyZW07XG59XG5cbi5jb3B5IHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAwLjhyZW07XG59XG5cbmlvbi1saXN0LWhlYWRlciB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBsZXR0ZXItc3BhY2luZzogLTAuMDJlbTtcbn1cblxuLnRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IG1hbnJvcGUtYm9sZDtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmbG9hdDogbGVmdDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIG1heC13aWR0aDogaW5oZXJpdDtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgd29yZC13cmFwOiBub3JtYWw7XG59XG5cbi52YWx1ZSB7XG4gIGZvbnQtZmFtaWx5OiBtYW5yb3BlLWxpZ2h0O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmbG9hdDogbGVmdDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIG1heC13aWR0aDogaW5oZXJpdDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnJlbGF5IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNoZXZyb24ge1xuICB3aWR0aDogMTVweDtcbn1cblxuLmlucHV0cywgLm91dHB1dHMge1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgb3BhY2l0eTogMC41O1xufVxuXG4uY29tcGxldGVkIHtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiByZ2JhKDc1LCAyMjIsIDEzMSwgMC43KTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/history/view-txn/view-txn.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/history/view-txn/view-txn.page.ts ***!
  \*********************************************************/
/*! exports provided: ViewTXNPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewTXNPage", function() { return ViewTXNPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var minima__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! minima */ "./node_modules/minima/dist/minima.js");
/* harmony import */ var minima__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(minima__WEBPACK_IMPORTED_MODULE_4__);





let ViewTXNPage = class ViewTXNPage {
    constructor(route, toastController) {
        this.route = route;
        this.toastController = toastController;
        this.hide = false;
        this.txn = this.route.snapshot.paramMap.get('id');
    }
    ngOnInit() {
        minima__WEBPACK_IMPORTED_MODULE_4__["Minima"].cmd('txpowinfo ' + this.txn, (res) => {
            if (res.status) {
                this.id = res.response.txpow.txpowid;
                this.relaytime = new Date(res.response.txpow.header.timesecs * 1000).toISOString();
                this.size = res.response.txpow.size;
                this.isblock = res.response.txpow.isblock;
                this.isinblock = res.response.isinblock;
                this.blocknumber = res.response.inblock;
                this.nonce = res.response.txpow.header.nonce;
                this.inputs = res.response.txpow.body.txn.inputs;
                this.outputs = res.response.txpow.body.txn.outputs;
                if (res.response.txpow.body.txn.tokengen) {
                    this.type = 'Token Creation.';
                    this.tokenname = res.response.txpow.body.txn.tokengen.token;
                    this.tokentotal = res.response.txpow.body.txn.tokengen.total;
                }
                else {
                    this.type = 'Value Transfer.';
                }
            }
            else {
                console.log(res.message);
            }
        });
    }
    shout() {
        if (this.hide === true) {
            this.hide = false;
        }
        else {
            this.hide = true;
        }
    }
    copyToClipPWA(text) {
        document.addEventListener('copy', (e) => {
            e.clipboardData.setData('text/plain', text);
            this.presentToast('Copied to Clipboard', 'success');
            e.preventDefault();
            document.removeEventListener('copy', null);
        });
        document.execCommand('copy');
    }
    presentToast(msg, type) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: msg,
                duration: 4000,
                buttons: [{
                        text: 'Close',
                        role: 'cancel'
                    }],
                color: type,
                keyboardClose: true,
                translucent: true,
                position: 'bottom'
            });
            toast.present();
        });
    }
};
ViewTXNPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] }
];
ViewTXNPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-view-txn',
        template: __webpack_require__(/*! raw-loader!./view-txn.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/history/view-txn/view-txn.page.html"),
        styles: [__webpack_require__(/*! ./view-txn.page.scss */ "./src/app/pages/history/view-txn/view-txn.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]])
], ViewTXNPage);



/***/ })

}]);
//# sourceMappingURL=view-txn-view-txn-module-es2015.js.map