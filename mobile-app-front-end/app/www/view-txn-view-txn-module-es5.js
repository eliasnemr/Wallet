(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["view-txn-view-txn-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/history/view-txn/view-txn.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/history/view-txn/view-txn.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"ion-no-border\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/history\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"large-text\">TxPoW Details</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col size=\"12\" size-md=\"12\">\r\n        <ion-datetime disabled displayFormat=\"D MMMM YYYY &mdash; HH:mm:ss\" value=\"{{ relaytime }}\" display-timezone=\"utc\" ></ion-datetime>\r\n      </ion-col>\r\n    </ion-row>\r\n    \r\n    <ion-list>\r\n      <ion-list-header>\r\n        Details\r\n      </ion-list-header>\r\n\r\n      <ion-item lines=\"none\">\r\n        <ion-col size-md=\"3\"  size-sm=\"6\" class=\"title\">\r\n          Status\r\n        </ion-col>\r\n        <ion-col class=\"value completed\">\r\n          Completed.\r\n        </ion-col>\r\n      </ion-item>\r\n\r\n      <ion-item lines=\"none\">\r\n        <ion-col size-md=\"3\"  size-sm=\"6\" class=\"title\">\r\n          Hash\r\n          <a class=\"copy\" (click)=\"copyToClipPWA(id)\">\r\n            Copy \r\n          </a>\r\n        </ion-col>\r\n        <ion-col class=\"value\">\r\n          {{ id }}\r\n        </ion-col>\r\n      </ion-item>\r\n\r\n      <ion-item lines=\"none\">\r\n        <ion-col size-md=\"3\"  size-sm=\"6\" class=\"title\">\r\n          Size\r\n        </ion-col>\r\n        <ion-col class=\"value\">\r\n          {{ size }}\r\n        </ion-col>\r\n      </ion-item>\r\n\r\n      <ion-item lines=\"none\">\r\n        <ion-col size-md=\"3\"  size-sm=\"6\" class=\"title\">\r\n          Is A Block\r\n        </ion-col>\r\n        <ion-col class=\"value\">\r\n          {{ isblock }}\r\n        </ion-col>\r\n      </ion-item>\r\n\r\n      <ion-item lines=\"none\">\r\n        <ion-col size-md=\"3\"  size-sm=\"6\" class=\"title\">\r\n          Is In A block\r\n        </ion-col>\r\n        <ion-col class=\"value\">\r\n          {{ isinblock }}\r\n        </ion-col>\r\n      </ion-item>\r\n\r\n      <ion-item lines=\"none\">\r\n        <ion-col size-md=\"3\"  size-sm=\"6\" *ngIf=\"isinblock === true\" class=\"title\">\r\n          In Block\r\n        </ion-col>\r\n        <ion-col size-md=\"3\"  size-sm=\"6\" *ngIf=\"isinblock === false\" class=\"title\">\r\n          Would of been Block\r\n        </ion-col>\r\n        <ion-col class=\"value\">\r\n          {{ blocknumber }}\r\n        </ion-col>\r\n      </ion-item>\r\n\r\n      <ion-item lines=\"none\">\r\n        <ion-col size-md=\"3\"  size-sm=\"6\" class=\"title\">\r\n          Nonce\r\n        </ion-col>\r\n        <ion-col class=\"value\">\r\n          {{ nonce }}\r\n        </ion-col>\r\n      </ion-item>\r\n\r\n      <ion-item lines=\"none\">\r\n        <ion-col size-md=\"3\"  size-sm=\"6\" class=\"title\">\r\n          Transaction Type\r\n        </ion-col>\r\n        <ion-col class=\"value\">\r\n          {{ type }}\r\n        </ion-col>\r\n      </ion-item>\r\n      \r\n      <ion-item lines=\"none\" *ngIf=\"type === 'Token Creation.'\">\r\n        <ion-col size-md=\"3\"  size-sm=\"6\" class=\"title\">\r\n          Token Name\r\n        </ion-col>\r\n        <ion-col class=\"value\">\r\n          {{ tokenname }}\r\n        </ion-col>\r\n      </ion-item>\r\n\r\n      <ion-item lines=\"none\" *ngIf=\"type === 'Token Creation.'\">\r\n        <ion-col size-md=\"3\"  size-sm=\"6\" class=\"title\">\r\n          Token Total\r\n        </ion-col>\r\n        <ion-col class=\"value\">\r\n          {{ tokentotal }}\r\n        </ion-col>\r\n      </ion-item>\r\n      \r\n\r\n    </ion-list>\r\n\r\n    <ion-grid>\r\n      <ion-list-header>\r\n        Overview\r\n      </ion-list-header>\r\n\r\n      <ion-list-header class=\"inputs\">\r\n        Inputs\r\n      </ion-list-header>\r\n      <ion-col class=\"ion-no-padding\" size=\"12\" *ngFor=\"let input of inputs; let i=index;\">\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-card class=\"borders\">\r\n              <ion-list>\r\n                <ion-item lines=\"none\">\r\n                  <ion-col size-md=\"3\"  size-sm=\"6\">\r\n                    Index <a>{{ \"#\"+ i }}</a>\r\n                  </ion-col>\r\n                </ion-item>\r\n\r\n                <ion-item lines=\"none\">\r\n                  <ion-col size-md=\"3\"  size-sm=\"6\" class=\"title\">\r\n                    Coinid\r\n                  </ion-col>\r\n                  <ion-col class=\"value\">\r\n                    {{ input.coinid }}\r\n                  </ion-col>\r\n                </ion-item>\r\n\r\n                <ion-item lines=\"none\">\r\n                  <ion-col size-md=\"3\"  size-sm=\"6\" class=\"title\">\r\n                    Address\r\n                    <a class=\"copy\" (click)=\"copyToClipPWA(input.address)\">\r\n                      Copy\r\n                    </a>\r\n                  </ion-col>  \r\n                  <ion-col class=\"value\">\r\n                    {{ input.address }}\r\n                  </ion-col>               \r\n                </ion-item>\r\n\r\n                <ion-item lines=\"none\">\r\n                  <ion-col size-md=\"3\"  size-sm=\"6\" class=\"title\">\r\n                    Amount\r\n                  </ion-col>\r\n                  <ion-col class=\"value\">\r\n                    {{ input.amount }}\r\n                  </ion-col>              \r\n                </ion-item>\r\n\r\n                <ion-item lines=\"none\">\r\n                  <ion-col size-md=\"3\"  size-sm=\"6\" class=\"title\">\r\n                    TokenID\r\n                  </ion-col>  \r\n                  <ion-col class=\"value\">\r\n                    {{ input.tokenid }}\r\n                  </ion-col>               \r\n                </ion-item>\r\n\r\n                \r\n\r\n              </ion-list>\r\n            </ion-card>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n      </ion-col>\r\n\r\n      <ion-list-header class=\"outputs\">\r\n        Outputs\r\n      </ion-list-header>\r\n      <ion-col class=\"ion-no-padding\" size=\"12\" *ngFor=\"let output of outputs; let i=index;\">\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-card class=\"borders\">\r\n              <ion-list>\r\n                <ion-item lines=\"none\">\r\n                  <ion-col size-md=\"3\"  size-sm=\"6\">\r\n                    Index <a>{{ \"#\"+ i }}</a>\r\n                  </ion-col>\r\n                </ion-item>\r\n\r\n                <ion-item lines=\"none\">\r\n                  <ion-col size-md=\"3\"  size-sm=\"6\" class=\"title\">\r\n                    Coinid\r\n                  </ion-col>\r\n                  <ion-col class=\"value\">\r\n                    {{ output.coinid }}\r\n                  </ion-col>\r\n                </ion-item>\r\n\r\n                <ion-item lines=\"none\">\r\n                  <ion-col size-md=\"3\"  size-sm=\"6\" class=\"title\">\r\n                    Address\r\n                      <a class=\"copy\" (click)=\"copyToClipPWA(output.address)\">\r\n                        Copy\r\n                      </a>\r\n                  </ion-col>\r\n                  <ion-col class=\"value\">\r\n                    {{ output.address }}\r\n                  </ion-col>              \r\n                </ion-item>\r\n\r\n                <ion-item lines=\"none\">\r\n                  <ion-col size-md=\"3\"  size-sm=\"6\" class=\"title\">\r\n                    Amount\r\n                  </ion-col>\r\n                  <ion-col class=\"value\">\r\n                    {{ output.amount }}\r\n                  </ion-col>              \r\n                </ion-item>\r\n\r\n                <ion-item lines=\"none\">\r\n                  <ion-col size-md=\"3\"  size-sm=\"6\" class=\"title\">\r\n                    TokenID\r\n                  </ion-col>  \r\n                  <ion-col class=\"value\">\r\n                    {{ output.tokenid }}\r\n                  </ion-col>               \r\n                </ion-item>\r\n\r\n              </ion-list>\r\n            </ion-card>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-col>\r\n    </ion-grid>\r\n  </ion-grid>\r\n</ion-content>\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _view_txn_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view-txn.page */ "./src/app/pages/history/view-txn/view-txn.page.ts");







var routes = [
    {
        path: '',
        component: _view_txn_page__WEBPACK_IMPORTED_MODULE_6__["ViewTXNPage"]
    }
];
var ViewTXNPageModule = /** @class */ (function () {
    function ViewTXNPageModule() {
    }
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
    return ViewTXNPageModule;
}());



/***/ }),

/***/ "./src/app/pages/history/view-txn/view-txn.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/history/view-txn/view-txn.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-datetime {\n  font-family: manrope-bold;\n  padding: 0;\n  margin-left: 1%;\n}\n\nion-back-button .button-native .button-inner ion-icon {\n  font-size: 1.2rem !important;\n}\n\nion-back-button:hover {\n  --background-hover: none;\n  --color: var(--ion-color-secondary);\n}\n\nion-title {\n  font-family: manrope-bold;\n  font-size: 1.2rem;\n  padding-top: 5%;\n}\n\nh5 {\n  letter-spacing: -0.02em;\n  font-weight: 600;\n  font-size: 1.5rem;\n}\n\n.copy {\n  text-decoration: underline;\n  cursor: pointer;\n  font-size: 0.8rem;\n}\n\nion-list-header {\n  font-weight: 600;\n  font-size: 1.5rem;\n  letter-spacing: -0.02em;\n}\n\n.title {\n  font-family: manrope-bold;\n  font-size: 1rem;\n  float: left;\n  text-overflow: ellipsis;\n  max-width: inherit;\n  white-space: normal;\n  word-wrap: normal;\n}\n\n.value {\n  font-family: manrope-light;\n  text-align: left;\n  float: left;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  max-width: inherit;\n  overflow: hidden;\n}\n\n.relay {\n  display: inline-block;\n  width: 100%;\n}\n\n.chevron {\n  width: 15px;\n}\n\n.inputs, .outputs {\n  font-size: 1.2rem;\n  opacity: 0.5;\n}\n\n.completed {\n  font-size: 1.2rem;\n  font-weight: 400;\n  color: rgba(75, 222, 131, 0.7);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGlhc25lbXIvcHJvamVjdHMvV0FMTEVUL21vYmlsZS1hcHAtZnJvbnQtZW5kL2FwcC9zcmMvYXBwL3BhZ2VzL2hpc3Rvcnkvdmlldy10eG4vdmlldy10eG4ucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9oaXN0b3J5L3ZpZXctdHhuL3ZpZXctdHhuLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUNDSjs7QURDQTtFQUNJLDRCQUFBO0FDRUo7O0FEQUE7RUFDSSx3QkFBQTtFQUNBLG1DQUFBO0FDR0o7O0FEREE7RUFDSSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ0lKOztBREZBO0VBQ0ksdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDS0o7O0FESEE7RUFDSSwwQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ01KOztBREpBO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0FDT0o7O0FETEE7RUFDSSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUNRSjs7QUROQTtFQUNJLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNTSjs7QURQQTtFQUNJLHFCQUFBO0VBQ0EsV0FBQTtBQ1VKOztBRFJBO0VBQ0ksV0FBQTtBQ1dKOztBRFRBO0VBQ0ksaUJBQUE7RUFDQSxZQUFBO0FDWUo7O0FEVkE7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsOEJBQUE7QUNhSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hpc3Rvcnkvdmlldy10eG4vdmlldy10eG4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWRhdGV0aW1lIHtcclxuICAgIGZvbnQtZmFtaWx5OiBtYW5yb3BlLWJvbGQ7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDElO1xyXG59XHJcbmlvbi1iYWNrLWJ1dHRvbiAuYnV0dG9uLW5hdGl2ZSAuYnV0dG9uLWlubmVyIGlvbi1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtIWltcG9ydGFudDtcclxufVxyXG5pb24tYmFjay1idXR0b246aG92ZXIge1xyXG4gICAgLS1iYWNrZ3JvdW5kLWhvdmVyOiBub25lO1xyXG4gICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XHJcbn1cclxuaW9uLXRpdGxlIHtcclxuICAgIGZvbnQtZmFtaWx5OiBtYW5yb3BlLWJvbGQ7XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgIHBhZGRpbmctdG9wOiA1JTtcclxufVxyXG5oNSB7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMDJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxufVxyXG4uY29weSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG59XHJcbmlvbi1saXN0LWhlYWRlciB7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMDJlbTtcclxufVxyXG4udGl0bGUge1xyXG4gICAgZm9udC1mYW1pbHk6IG1hbnJvcGUtYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMS4wcmVtO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIG1heC13aWR0aDogaW5oZXJpdDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbiAgICB3b3JkLXdyYXA6IG5vcm1hbDtcclxufVxyXG4udmFsdWUge1xyXG4gICAgZm9udC1mYW1pbHk6IG1hbnJvcGUtbGlnaHQ7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgZmxvYXQ6bGVmdDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIG1heC13aWR0aDogaW5oZXJpdDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuLnJlbGF5IHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5jaGV2cm9uIHtcclxuICAgIHdpZHRoOiAxNXB4O1xyXG59XHJcbi5pbnB1dHMsIC5vdXRwdXRzIHtcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgb3BhY2l0eTogMC41O1xyXG59XHJcbi5jb21wbGV0ZWQge1xyXG4gICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgY29sb3I6IHJnYmEoNzUsMjIyLDEzMSwgMC43KTtcclxufSIsImlvbi1kYXRldGltZSB7XG4gIGZvbnQtZmFtaWx5OiBtYW5yb3BlLWJvbGQ7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbi1sZWZ0OiAxJTtcbn1cblxuaW9uLWJhY2stYnV0dG9uIC5idXR0b24tbmF0aXZlIC5idXR0b24taW5uZXIgaW9uLWljb24ge1xuICBmb250LXNpemU6IDEuMnJlbSAhaW1wb3J0YW50O1xufVxuXG5pb24tYmFjay1idXR0b246aG92ZXIge1xuICAtLWJhY2tncm91bmQtaG92ZXI6IG5vbmU7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xufVxuXG5pb24tdGl0bGUge1xuICBmb250LWZhbWlseTogbWFucm9wZS1ib2xkO1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgcGFkZGluZy10b3A6IDUlO1xufVxuXG5oNSB7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4wMmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDEuNXJlbTtcbn1cblxuLmNvcHkge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDAuOHJlbTtcbn1cblxuaW9uLWxpc3QtaGVhZGVyIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGxldHRlci1zcGFjaW5nOiAtMC4wMmVtO1xufVxuXG4udGl0bGUge1xuICBmb250LWZhbWlseTogbWFucm9wZS1ib2xkO1xuICBmb250LXNpemU6IDFyZW07XG4gIGZsb2F0OiBsZWZ0O1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgbWF4LXdpZHRoOiBpbmhlcml0O1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICB3b3JkLXdyYXA6IG5vcm1hbDtcbn1cblxuLnZhbHVlIHtcbiAgZm9udC1mYW1pbHk6IG1hbnJvcGUtbGlnaHQ7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgbWF4LXdpZHRoOiBpbmhlcml0O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ucmVsYXkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY2hldnJvbiB7XG4gIHdpZHRoOiAxNXB4O1xufVxuXG4uaW5wdXRzLCAub3V0cHV0cyB7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBvcGFjaXR5OiAwLjU7XG59XG5cbi5jb21wbGV0ZWQge1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6IHJnYmEoNzUsIDIyMiwgMTMxLCAwLjcpO1xufSJdfQ== */"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var minima__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! minima */ "./node_modules/minima/dist/minima.js");
/* harmony import */ var minima__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(minima__WEBPACK_IMPORTED_MODULE_4__);





var ViewTXNPage = /** @class */ (function () {
    function ViewTXNPage(route, toastController) {
        this.route = route;
        this.toastController = toastController;
        this.hide = false;
        this.txn = this.route.snapshot.paramMap.get('id');
    }
    ViewTXNPage.prototype.ngOnInit = function () {
        var _this = this;
        minima__WEBPACK_IMPORTED_MODULE_4__["Minima"].cmd('txpowinfo ' + this.txn, function (res) {
            if (res.status) {
                _this.id = res.response.txpow.txpowid;
                _this.relaytime = new Date(res.response.txpow.header.timesecs * 1000).toISOString();
                _this.size = res.response.txpow.size;
                _this.isblock = res.response.txpow.isblock;
                _this.isinblock = res.response.isinblock;
                _this.blocknumber = res.response.inblock;
                _this.nonce = res.response.txpow.header.nonce;
                _this.inputs = res.response.txpow.body.txn.inputs;
                _this.outputs = res.response.txpow.body.txn.outputs;
                if (res.response.txpow.body.txn.tokengen) {
                    _this.type = 'Token Creation.';
                    _this.tokenname = res.response.txpow.body.txn.tokengen.token;
                    _this.tokentotal = res.response.txpow.body.txn.tokengen.total;
                }
                else {
                    _this.type = 'Value Transfer.';
                }
            }
            else {
                console.log(res.message);
            }
        });
    };
    ViewTXNPage.prototype.shout = function () {
        if (this.hide === true) {
            this.hide = false;
        }
        else {
            this.hide = true;
        }
    };
    ViewTXNPage.prototype.copyToClipPWA = function (text) {
        var _this = this;
        document.addEventListener('copy', function (e) {
            e.clipboardData.setData('text/plain', text);
            _this.presentToast('Copied to Clipboard', 'success');
            e.preventDefault();
            document.removeEventListener('copy', null);
        });
        document.execCommand('copy');
    };
    ViewTXNPage.prototype.presentToast = function (msg, type) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
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
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    ViewTXNPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] }
    ]; };
    ViewTXNPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-view-txn',
            template: __webpack_require__(/*! raw-loader!./view-txn.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/history/view-txn/view-txn.page.html"),
            styles: [__webpack_require__(/*! ./view-txn.page.scss */ "./src/app/pages/history/view-txn/view-txn.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]])
    ], ViewTXNPage);
    return ViewTXNPage;
}());



/***/ })

}]);
//# sourceMappingURL=view-txn-view-txn-module-es5.js.map