(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["view-txn-view-txn-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/history/view-txn/view-txn.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/history/view-txn/view-txn.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/history\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  \n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"12\" size-md=\"12\">\n\n        <h5>\n          TxPoW   \n          \n          <ion-note class=\"medium-text\" [hidden]=\"hide\" (click)=\"shout()\"> {{ \"&mdash; \"+id?.substring(0, 5) + \"...\" + id?.substring(5, 15) }} </ion-note>\n          <ion-note class=\"medium-text\" [hidden]=\"!hide\" (click)=\"shout()\"> {{ id }}</ion-note>\n\n          \n        </h5>\n      \n        \n        <ion-datetime disabled displayFormat=\"HH:mm:ss A - MMMM YYYY\" value=\"{{ relaytime }}\" display-timezone=\"utc\" ></ion-datetime>\n      </ion-col>\n    </ion-row>\n    \n    <ion-list>\n      <ion-list-header>\n        Details\n      </ion-list-header>\n\n      <ion-item>\n        <ion-col class=\"title\">\n          Status\n        </ion-col>\n        <ion-col class=\"value completed\">\n          Completed.\n        </ion-col>\n      </ion-item>\n\n      <ion-item>\n        <ion-col class=\"title\">\n          Hash\n          <a class=\"copy\" (click)=\"copyToClipPWA(id)\">\n            Copy \n          </a>\n        </ion-col>\n        <ion-col class=\"value\">\n          {{ id?.substring(0,5)+\"...\"+id?.substring(id?.length-50,id?.length) }}\n        </ion-col>\n      </ion-item>\n\n      <ion-item>\n        <ion-col class=\"title\">\n          Size\n        </ion-col>\n        <ion-col class=\"value\">\n          {{ size }}\n        </ion-col>\n      </ion-item>\n\n      <ion-item>\n        <ion-col class=\"title\">\n          Is A Block\n        </ion-col>\n        <ion-col class=\"value\">\n          {{ isblock }}\n        </ion-col>\n      </ion-item>\n\n      <ion-item>\n        <ion-col class=\"title\">\n          Is In A block\n        </ion-col>\n        <ion-col class=\"value\">\n          {{ isinblock }}\n        </ion-col>\n      </ion-item>\n\n      <ion-item>\n        <ion-col *ngIf=\"isinblock === true\" class=\"title\">\n          In Block\n        </ion-col>\n        <ion-col *ngIf=\"isinblock === false\" class=\"title\">\n          Would of been Block\n        </ion-col>\n        <ion-col class=\"value\">\n          {{ blocknumber }}\n        </ion-col>\n      </ion-item>\n\n      <ion-item>\n        <ion-col class=\"title\">\n          Nonce\n        </ion-col>\n        <ion-col class=\"value\">\n          {{ nonce }}\n        </ion-col>\n      </ion-item>\n\n      <ion-item>\n        <ion-col class=\"title\">\n          Transaction Type\n        </ion-col>\n        <ion-col class=\"value\">\n          {{ type }}\n        </ion-col>\n      </ion-item>\n      \n      <ion-item *ngIf=\"type === 'Token Creation.'\">\n        <ion-col class=\"title\">\n          Token Name\n        </ion-col>\n        <ion-col class=\"value\">\n          {{ tokenname }}\n        </ion-col>\n      </ion-item>\n\n      <ion-item *ngIf=\"type === 'Token Creation.'\">\n        <ion-col class=\"title\">\n          Token Total\n        </ion-col>\n        <ion-col class=\"value\">\n          {{ tokentotal }}\n        </ion-col>\n      </ion-item>\n      \n\n    </ion-list>\n\n    <ion-grid>\n      <ion-list-header>\n        Overview\n      </ion-list-header>\n\n      <ion-list-header class=\"inputs\">\n        Inputs\n      </ion-list-header>\n      <ion-col size=\"12\" *ngFor=\"let input of inputs; let i=index;\">\n\n        <ion-row>\n          <ion-col>\n            <ion-card>\n              <ion-list>\n                <ion-item lines=\"half\">\n                  <ion-col>\n                    Index <a>{{ \"#\"+ i }}</a>\n                  </ion-col>\n                </ion-item>\n\n                <ion-item>\n                  <ion-col class=\"title\">\n                    Coinid <span class=\"value\">{{ input.coinid }}</span>\n                  </ion-col>\n                </ion-item>\n\n                <ion-item>\n                  <ion-col class=\"title\">\n                    Address <span class=\"value\">{{ input.address }}</span>\n                    <a class=\"copy\" (click)=\"copyToClipPWA(input.address)\">\n                      Copy\n                    </a>\n                  </ion-col>                 \n                </ion-item>\n\n                <ion-item>\n                  <ion-col class=\"title\">\n                    Amount <span class=\"value\">{{ input.amount }}</span>\n                  </ion-col>                 \n                </ion-item>\n\n                <ion-item lines=\"none\">\n                  <ion-col class=\"title\">\n                    TokenID <span class=\"value\">{{ input.tokenid }}</span>\n                  </ion-col>                 \n                </ion-item>\n\n                \n\n              </ion-list>\n            </ion-card>\n          </ion-col>\n        </ion-row>\n\n      </ion-col>\n\n      <ion-list-header class=\"outputs\">\n        Outputs\n      </ion-list-header>\n      <ion-col size=\"12\" *ngFor=\"let output of outputs; let i=index;\">\n\n        <ion-row>\n          <ion-col>\n            <ion-card>\n              <ion-list>\n                <ion-item lines=\"half\">\n                  <ion-col>\n                    Index <a>{{ \"#\"+ i }}</a>\n                  </ion-col>\n                </ion-item>\n\n                <ion-item>\n                  <ion-col class=\"title\">\n                    Coinid <span class=\"value\">{{ output.coinid }}</span>\n                  </ion-col>\n                </ion-item>\n\n                <ion-item>\n                  <ion-col class=\"title\">\n                    Address <span class=\"value\">{{ output.address }}</span>\n                      <a class=\"copy\" (click)=\"copyToClipPWA(output.address)\">\n                        Copy\n                      </a>\n                  </ion-col>                 \n                </ion-item>\n\n                <ion-item>\n                  <ion-col class=\"title\">\n                    Amount <span class=\"value\">{{ output.amount }}</span>\n                  </ion-col>                 \n                </ion-item>\n\n                <ion-item lines=\"none\">\n                  <ion-col class=\"title\">\n                    TokenID <span class=\"value\">{{ output.tokenid }}</span>\n                  </ion-col>                 \n                </ion-item>\n\n              </ion-list>\n            </ion-card>\n          </ion-col>\n        </ion-row>\n\n      </ion-col>\n\n      \n      \n    </ion-grid>\n\n\n  </ion-grid>\n  \n</ion-content>\n"

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
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
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

module.exports = "ion-note {\n  white-space: normal;\n  word-break: break-all;\n  cursor: pointer;\n  background-color: #f2f2f2;\n}\n\nion-note:hover {\n  -webkit-transform: scale(0.9);\n          transform: scale(0.9);\n}\n\nh5 {\n  letter-spacing: -0.02em;\n  font-weight: 600;\n  font-size: 1.5rem;\n}\n\nion-datetime {\n  padding-bottom: 5px;\n  padding-left: 5px;\n}\n\n.copy {\n  text-decoration: underline;\n  cursor: pointer;\n  font-size: 0.8rem;\n}\n\nion-list-header {\n  font-weight: 600;\n  font-size: 1.5rem;\n  letter-spacing: -0.02em;\n}\n\n.title {\n  letter-spacing: -0.02em;\n  float: left;\n  font-weight: 500;\n}\n\n.value {\n  font-size: 0.8rem;\n  opacity: 0.8;\n  text-align: right;\n  float: right;\n  white-space: pre-wrap;\n  word-wrap: none;\n  word-break: break-all;\n}\n\n.relay {\n  display: inline-block;\n  width: 100%;\n}\n\n.chevron {\n  width: 15px;\n}\n\n.inputs, .outputs {\n  font-size: 1.2rem;\n  opacity: 0.5;\n}\n\n.completed {\n  font-size: 1.2rem;\n  font-weight: 400;\n  color: rgba(75, 222, 131, 0.7);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGlhc25lbXIvcHJvamVjdHMvV0FMTEVUL21vYmlsZS1hcHAtZnJvbnQtZW5kL2FwcC9zcmMvYXBwL3BhZ2VzL2hpc3Rvcnkvdmlldy10eG4vdmlldy10eG4ucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9oaXN0b3J5L3ZpZXctdHhuL3ZpZXctdHhuLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QUNDSjs7QURDQTtFQUNJLDZCQUFBO1VBQUEscUJBQUE7QUNFSjs7QURBQTtFQUNJLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ0dKOztBRERBO0VBQ0ksbUJBQUE7RUFDQSxpQkFBQTtBQ0lKOztBREZBO0VBQ0ksMEJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNLSjs7QURIQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtBQ01KOztBREpBO0VBQ0ksdUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNPSjs7QURMQTtFQUNJLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0FDUUo7O0FETkE7RUFDSSxxQkFBQTtFQUNBLFdBQUE7QUNTSjs7QURQQTtFQUNJLFdBQUE7QUNVSjs7QURSQTtFQUNJLGlCQUFBO0VBQ0EsWUFBQTtBQ1dKOztBRFRBO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtFQUNBLDhCQUFBO0FDWUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9oaXN0b3J5L3ZpZXctdHhuL3ZpZXctdHhuLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1ub3RlIHtcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcbn1cbmlvbi1ub3RlOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOSk7XG59XG5oNSB7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjAyZW07XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbn1cbmlvbi1kYXRldGltZSB7XG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbn1cbi5jb3B5IHtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZm9udC1zaXplOiAwLjhyZW07XG59XG5pb24tbGlzdC1oZWFkZXIge1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjAyZW07XG59XG4udGl0bGUge1xuICAgIGxldHRlci1zcGFjaW5nOiAtMC4wMmVtO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4udmFsdWUge1xuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgIG9wYWNpdHk6IDAuODtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xuICAgIHdvcmQtd3JhcDogbm9uZTtcbiAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG59XG4ucmVsYXkge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbn1cbi5jaGV2cm9uIHtcbiAgICB3aWR0aDogMTVweDtcbn1cbi5pbnB1dHMsIC5vdXRwdXRzIHtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICBvcGFjaXR5OiAwLjU7XG59XG4uY29tcGxldGVkIHtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGNvbG9yOiByZ2JhKDc1LDIyMiwxMzEsIDAuNyk7XG59IiwiaW9uLW5vdGUge1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcbn1cblxuaW9uLW5vdGU6aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDAuOSk7XG59XG5cbmg1IHtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjAyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuXG5pb24tZGF0ZXRpbWUge1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbn1cblxuLmNvcHkge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDAuOHJlbTtcbn1cblxuaW9uLWxpc3QtaGVhZGVyIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGxldHRlci1zcGFjaW5nOiAtMC4wMmVtO1xufVxuXG4udGl0bGUge1xuICBsZXR0ZXItc3BhY2luZzogLTAuMDJlbTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi52YWx1ZSB7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBvcGFjaXR5OiAwLjg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBmbG9hdDogcmlnaHQ7XG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbiAgd29yZC13cmFwOiBub25lO1xuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG59XG5cbi5yZWxheSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jaGV2cm9uIHtcbiAgd2lkdGg6IDE1cHg7XG59XG5cbi5pbnB1dHMsIC5vdXRwdXRzIHtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIG9wYWNpdHk6IDAuNTtcbn1cblxuLmNvbXBsZXRlZCB7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogcmdiYSg3NSwgMjIyLCAxMzEsIDAuNyk7XG59Il19 */"

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
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");




var ViewTXNPage = /** @class */ (function () {
    function ViewTXNPage(route, toastController) {
        this.route = route;
        this.toastController = toastController;
        this.hide = false;
        this.txn = this.route.snapshot.paramMap.get("id");
    }
    ViewTXNPage.prototype.ngOnInit = function () {
        var _this = this;
        Minima.cmd('txpowinfo ' + this.txn, function (res) {
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
                // is token created
                if (res.response.txpow.body.txn.tokengen) {
                    _this.type = "Token Creation.";
                    _this.tokenname = res.response.txpow.body.txn.tokengen.token;
                    _this.tokentotal = res.response.txpow.body.txn.tokengen.total;
                }
                else {
                    _this.type = "Value Transfer.";
                }
            }
            else {
                console.log(res.message);
            }
        });
    };
    ViewTXNPage.prototype.shout = function () {
        if (this.hide == true) {
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
            _this.presentToast("Copied to Clipboard", "success");
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