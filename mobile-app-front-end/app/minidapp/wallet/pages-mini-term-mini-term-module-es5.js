(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-mini-term-mini-term-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/mini-term/mini-term.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/mini-term/mini-term.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-app>\n<ion-header class=\"page-header ion-no-border\">\n  <ion-toolbar>\n    <ion-title>\n      <ion-item id=\"title\" lines=\"none\" class=\"ion-no-padding\">\n        <ion-icon class=\"menu-btn\" (click)=\"openMenu()\" src=\"assets/menuIcon.svg\"></ion-icon>\n        Terminal\n        <ion-label \n        (click)=\"presentPopover($event)\" \n        fill=\"clear\"\n        lines=\"none\" \n        slot=\"end\"\n        class=\"resize-tool-btn\">aA</ion-label>\n      </ion-item>\n      <ion-item id=\"subtitle\" class=\"breadcrumb ion-no-padding\" lines=\"none\">\n        Minima terminal\n      </ion-item>\n    </ion-title>\n      \n  </ion-toolbar>\n</ion-header>\n\n\n\n<ion-content class=\"page-content\" #ionContent>\n    <!-- Terminal -->\n    <textarea\n    #terminal\n    background=\"transparent\"\n    class=\"terminal\"\n    [ngStyle] = \"{'font-size': getFontSize()}\" \n    autocapitalize=\"false\"\n    spellcheck=\"false\"\n    autocorrect=\"off\"></textarea>\n  \n</ion-content>\n<ion-footer class=\"border-t\">\n  <ion-button (click)=\"giveMe50()\" class=\"gimme50 no-ripple\" fill=\"none\">\n    Gimme 50\n  </ion-button>\n</ion-footer>\n</ion-app>\n\n\n"

/***/ }),

/***/ "./src/app/pages/mini-term/mini-term.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/mini-term/mini-term.module.ts ***!
  \*****************************************************/
/*! exports provided: MiniTermPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiniTermPageModule", function() { return MiniTermPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _mini_term_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mini-term.page */ "./src/app/pages/mini-term/mini-term.page.ts");







var routes = [
    {
        path: '',
        component: _mini_term_page__WEBPACK_IMPORTED_MODULE_6__["MiniTermPage"]
    }
];
var MiniTermPageModule = /** @class */ (function () {
    function MiniTermPageModule() {
    }
    MiniTermPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_mini_term_page__WEBPACK_IMPORTED_MODULE_6__["MiniTermPage"]]
        })
    ], MiniTermPageModule);
    return MiniTermPageModule;
}());



/***/ }),

/***/ "./src/app/pages/mini-term/mini-term.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/mini-term/mini-term.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::-webkit-scrollbar,\n*::-webkit-scrollbar {\n  display: none;\n}\n\n.terminal {\n  padding: 0;\n  margin-top: 7px;\n  width: 100%;\n  background-color: var(--ion-background-color, #ffffff);\n  color: var(--ion-color-color);\n  font-family: monospace;\n  height: 100%;\n  height: 100vh;\n  border: none !important;\n}\n\n.resize-tool-btn {\n  position: absolute;\n  right: 0;\n  font-family: manrope-bold;\n  font-size: 1rem;\n  cursor: pointer;\n  color: var(--ion-color-color);\n  text-transform: none;\n}\n\n.no-scroll {\n  --overflow: hidden;\n}\n\nion-content {\n  --overflow: hidden;\n  height: 100% !important;\n  max-height: 100% !important;\n}\n\ntextarea:hover,\ninput:hover,\ntextarea:active,\ninput:active,\ntextarea:focus,\ninput:focus,\nbutton:focus,\nbutton:active,\nbutton:hover,\nlabel:focus,\n.btn:active,\n.btn.active {\n  outline: 0px !important;\n  -webkit-appearance: none;\n  box-shadow: none !important;\n}\n\n@media only screen and (min-width: 990px) {\n  .terminal {\n    font-size: 16px;\n    border: 0px;\n  }\n}\n\nion-toolbar {\n  --background: var(--ion-m-background);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGlhc25lbXIvcHJvamVjdHMvV2FsbGV0L21vYmlsZS1hcHAtZnJvbnQtZW5kL2FwcC9zcmMvYXBwL3BhZ2VzL21pbmktdGVybS9taW5pLXRlcm0ucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9taW5pLXRlcm0vbWluaS10ZXJtLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRSxhQUFBO0FDQ0Y7O0FEQ0E7RUFDSSxVQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxzREFBQTtFQUNBLDZCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FDRUo7O0FEQUE7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSxvQkFBQTtBQ0dKOztBREFBO0VBQ0ksa0JBQUE7QUNHSjs7QUREQTtFQUNJLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSwyQkFBQTtBQ0lKOztBRERBOzs7Ozs7Ozs7Ozs7RUFhSSx1QkFBQTtFQUNBLHdCQUFBO0VBQ0EsMkJBQUE7QUNHSjs7QURBQTtFQUNJO0lBQ0ksZUFBQTtJQUNBLFdBQUE7RUNHTjtBQUNGOztBREFBO0VBQ0kscUNBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21pbmktdGVybS9taW5pLXRlcm0ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjotd2Via2l0LXNjcm9sbGJhcixcbio6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi50ZXJtaW5hbCB7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW4tdG9wOiA3cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsICNmZmZmZmYpO1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItY29sb3IpO1xuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgYm9yZGVyOm5vbmUhaW1wb3J0YW50O1xufVxuLnJlc2l6ZS10b29sLWJ0biB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwO1xuICAgIGZvbnQtZmFtaWx5OiBtYW5yb3BlLWJvbGQ7XG4gICAgZm9udC1zaXplOiAxLjByZW07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItY29sb3IpO1xuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xufVxuXG4ubm8tc2Nyb2xsIHtcbiAgICAtLW92ZXJmbG93OiBoaWRkZW47XG59XG5pb24tY29udGVudCB7XG4gICAgLS1vdmVyZmxvdzogaGlkZGVuO1xuICAgIGhlaWdodDogMTAwJSFpbXBvcnRhbnQ7XG4gICAgbWF4LWhlaWdodDogMTAwJSFpbXBvcnRhbnQ7XG59XG5cbnRleHRhcmVhOmhvdmVyLCBcbmlucHV0OmhvdmVyLCBcbnRleHRhcmVhOmFjdGl2ZSwgXG5pbnB1dDphY3RpdmUsIFxudGV4dGFyZWE6Zm9jdXMsIFxuaW5wdXQ6Zm9jdXMsXG5idXR0b246Zm9jdXMsXG5idXR0b246YWN0aXZlLFxuYnV0dG9uOmhvdmVyLFxubGFiZWw6Zm9jdXMsXG4uYnRuOmFjdGl2ZSxcbi5idG4uYWN0aXZlXG57XG4gICAgb3V0bGluZTowcHggIWltcG9ydGFudDtcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6bm9uZTtcbiAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkwcHgpIHtcbiAgICAudGVybWluYWwge1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGJvcmRlcjogMHB4O1xuICAgIH1cbiAgICAgXG59XG5pb24tdG9vbGJhciB7XG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tbS1iYWNrZ3JvdW5kKTtcbn0iLCI6Oi13ZWJraXQtc2Nyb2xsYmFyLFxuKjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4udGVybWluYWwge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW4tdG9wOiA3cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwgI2ZmZmZmZik7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItY29sb3IpO1xuICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4ucmVzaXplLXRvb2wtYnRuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgZm9udC1mYW1pbHk6IG1hbnJvcGUtYm9sZDtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItY29sb3IpO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbn1cblxuLm5vLXNjcm9sbCB7XG4gIC0tb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLW92ZXJmbG93OiBoaWRkZW47XG4gIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xuICBtYXgtaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG59XG5cbnRleHRhcmVhOmhvdmVyLFxuaW5wdXQ6aG92ZXIsXG50ZXh0YXJlYTphY3RpdmUsXG5pbnB1dDphY3RpdmUsXG50ZXh0YXJlYTpmb2N1cyxcbmlucHV0OmZvY3VzLFxuYnV0dG9uOmZvY3VzLFxuYnV0dG9uOmFjdGl2ZSxcbmJ1dHRvbjpob3ZlcixcbmxhYmVsOmZvY3VzLFxuLmJ0bjphY3RpdmUsXG4uYnRuLmFjdGl2ZSB7XG4gIG91dGxpbmU6IDBweCAhaW1wb3J0YW50O1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTBweCkge1xuICAudGVybWluYWwge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBib3JkZXI6IDBweDtcbiAgfVxufVxuaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1tLWJhY2tncm91bmQpO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/mini-term/mini-term.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/mini-term/mini-term.page.ts ***!
  \***************************************************/
/*! exports provided: MiniTermPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiniTermPage", function() { return MiniTermPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _service_tools_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../service/tools.service */ "./src/app/service/tools.service.ts");
/* harmony import */ var _service_minima_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../service/minima-api.service */ "./src/app/service/minima-api.service.ts");
/* harmony import */ var _components_pop_term_pop_term_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/pop-term/pop-term.component */ "./src/app/components/pop-term/pop-term.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _service_userterminal_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../service/userterminal.service */ "./src/app/service/userterminal.service.ts");
/* harmony import */ var minima__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! minima */ "./node_modules/minima/dist/minima.js");
/* harmony import */ var minima__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(minima__WEBPACK_IMPORTED_MODULE_8__);









var MiniTermPage = /** @class */ (function () {
    function MiniTermPage(menu, loadingController, navCtrl, popoverController, userTerminal, myTools, api, renderer) {
        this.menu = menu;
        this.loadingController = loadingController;
        this.navCtrl = navCtrl;
        this.popoverController = popoverController;
        this.userTerminal = userTerminal;
        this.myTools = myTools;
        this.api = api;
        this.renderer = renderer;
        this.host = '';
        this.lastLine = '';
        this.loader = null;
    }
    MiniTermPage.prototype.keyEvent = function (event) {
        if (event.key == 'ArrowDown' || event.key == 'ArrowLeft' || event.key == 'ArrowRight' || event.key == 'ArrowUp') {
            // Your row selection code
            event.preventDefault();
        }
    };
    MiniTermPage.prototype.ngOnInit = function () {
        var _this = this;
        var mStr = parseInt(localStorage.getItem('termFontSize'), 10);
        this.size = mStr;
        // Stored subscription that watches if we activated button on PopTerm
        this.fontSubscription =
            this.userTerminal.fontSizeEmitter.subscribe(function (didActivate) {
                if (_this.size !== didActivate) {
                    if (_this.size > 0 && _this.size <= 50) {
                        _this.size += didActivate;
                        localStorage.setItem('termFontSize', '' + _this.size);
                    }
                    else {
                        _this.size = 14;
                        localStorage.setItem('termFontSize', '' + _this.size);
                    }
                }
            });
    };
    MiniTermPage.prototype.openMenu = function () {
        this.menu.open();
    };
    MiniTermPage.prototype.ionViewWillEnter = function () { };
    MiniTermPage.prototype.ionViewWillLeave = function () {
        localStorage.setItem('termFontSize', '' + this.size);
        this.fontSubscription.unsubscribe();
        window.removeEventListener("keydown", function (e) {
            if ([37, 38, 39, 40].indexOf(e.keyCode) > -1) {
                e.preventDefault();
            }
        }, true);
    };
    MiniTermPage.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.terminal.nativeElement.value += '**********************************************\n';
        this.terminal.nativeElement.value += '*  __  __  ____  _  _  ____  __  __    __    *\n';
        this.terminal.nativeElement.value += '* (  \\/  )(_  _)( \\( )(_  _)(  \\/  )  /__\\   *\n';
        this.terminal.nativeElement.value += '*  )    (  _)(_  )  (  _)(_  )    (  /(__)\\  *\n';
        this.terminal.nativeElement.value += '* (_/\\/\\_)(____)(_)\\_)(____)(_/\\/\\_)(__)(__) *\n';
        this.terminal.nativeElement.value += '*                                            *\n';
        this.terminal.nativeElement.value += '**********************************************\n';
        this.terminal.nativeElement.value += 'Welcome to Minima. For assistance type help. Then press enter.\n';
        this.globalInstance = this.renderer.listen(this.terminal.nativeElement, 'keydown', function (e) {
            if ([13].indexOf(e.keyCode) > -1) {
                // get the whole textarea text..
                var msg = _this.terminal.nativeElement.value;
                // get the last line...
                _this.lastLine = msg.substr(msg.lastIndexOf('\n') + 1);
                if (_this.lastLine.length > 1) {
                    // get the json call
                    _this.request(_this.lastLine);
                }
            }
        });
    };
    // PopTerm Editing methods
    MiniTermPage.prototype.getFontSize = function () {
        return this.size + 'px';
    };
    // end of PopTerm Editing methods
    MiniTermPage.prototype.scrollToBottomOnInit = function () {
        var _this = this;
        // scroll
        setTimeout(function () {
            _this.ionContent.scrollToBottom(300);
        }, 200);
    };
    // Minima Api Service
    MiniTermPage.prototype.getHost = function () {
        if (localStorage.getItem('minima_host') == null) {
            localStorage.setItem('minima_host', this.host);
            return this.host;
        }
        else {
            return localStorage.getItem('minima_host');
        }
    };
    // api calls
    MiniTermPage.prototype.request = function (route) {
        var _this = this;
        if (route === 'printchain') {
            return new Promise(function (resolve) {
                minima__WEBPACK_IMPORTED_MODULE_8__["Minima"].cmd('printchain', function (res) {
                    var regex = res.replace(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].newLine, '\\n'); // replace \n with <br/> has all 3 \n|\r|\r\n
                    _this.terminal.nativeElement.value += regex;
                    _this.terminal.nativeElement.scrollTop = _this.terminal.nativeElement.scrollHeight;
                    resolve(res);
                });
            });
        }
        else if (route === 'tutorial' || route === 'Tutorial') {
            return new Promise(function (resolve, reject) {
                minima__WEBPACK_IMPORTED_MODULE_8__["Minima"].cmd('tutorial', function (res) {
                    var regex = JSON.stringify(res, undefined, 2).replace('\\\\n', '\n');
                    _this.terminal.nativeElement.value += regex;
                    _this.terminal.nativeElement.scrollTop = _this.terminal.nativeElement.scrollHeight;
                    resolve(res);
                });
            });
        }
        else {
            return new Promise(function (resolve, reject) {
                minima__WEBPACK_IMPORTED_MODULE_8__["Minima"].cmd(route, function (res) {
                    _this.terminal.nativeElement.value += JSON.stringify(res, undefined, 2) + '\n';
                    _this.terminal.nativeElement.scrollTop = _this.terminal.nativeElement.scrollHeight;
                    resolve(res);
                });
            });
        }
    };
    MiniTermPage.prototype.presentPopover = function (ev) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var popover;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverController.create({
                            component: _components_pop_term_pop_term_component__WEBPACK_IMPORTED_MODULE_3__["PopTermComponent"],
                            cssClass: 'terminal-pop',
                            event: ev,
                            translucent: false
                        })];
                    case 1:
                        popover = _a.sent();
                        return [4 /*yield*/, popover.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    MiniTermPage.prototype.giveMe50 = function () {
        var _this = this;
        this.api.giveMe50().then(function (res) {
            if (res.status === true) {
                _this.myTools.presentAlert('Gimme50', 'Successful', 'Status');
            }
            else {
                _this.myTools.presentAlert('Gimme50', res.message, 'Status');
            }
        });
    };
    MiniTermPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["PopoverController"] },
        { type: _service_userterminal_service__WEBPACK_IMPORTED_MODULE_7__["UserTerminal"] },
        { type: _service_tools_service__WEBPACK_IMPORTED_MODULE_1__["ToolsService"] },
        { type: _service_minima_api_service__WEBPACK_IMPORTED_MODULE_2__["MinimaApiService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Renderer2"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["HostListener"])('window:keydown', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [KeyboardEvent]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], MiniTermPage.prototype, "keyEvent", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonContent"], { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonContent"])
    ], MiniTermPage.prototype, "ionContent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"])('terminal', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"])
    ], MiniTermPage.prototype, "terminal", void 0);
    MiniTermPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: 'app-mini-term',
            template: __webpack_require__(/*! raw-loader!./mini-term.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/mini-term/mini-term.page.html"),
            styles: [__webpack_require__(/*! ./mini-term.page.scss */ "./src/app/pages/mini-term/mini-term.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["PopoverController"],
            _service_userterminal_service__WEBPACK_IMPORTED_MODULE_7__["UserTerminal"],
            _service_tools_service__WEBPACK_IMPORTED_MODULE_1__["ToolsService"],
            _service_minima_api_service__WEBPACK_IMPORTED_MODULE_2__["MinimaApiService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["Renderer2"]])
    ], MiniTermPage);
    return MiniTermPage;
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
    }
    MinimaApiService.prototype.createToken = function (data) {
        if (data.script !== "") {
            if (data.nft === true) {
                return this.req("tokencreate name:\"" + data.name + "\" amount:\"" + data.amount + '.' + 0 + "\" description:\"" + data.description + "\" script:\"" + data.script + "\" icon:\"" + data.icon + "\" proof:\"" + data.proof + "\"");
            }
            else {
                return this.req("tokencreate name:\"" + data.name + "\" amount:\"" + data.amount + "\" description:\"" + data.description + "\" script:\"" + data.script + "\" icon:\"" + data.icon + "\" proof:\"" + data.proof + "\"");
            }
        }
        else {
            if (data.nft === true) {
                return this.req("tokencreate name:\"" + data.name + "\" amount:\"" + data.amount + '.' + 0 + "\" description:\"" + data.description + "\" icon:\"" + data.icon + "\" proof:\"" + data.proof + "\"");
            }
            else {
                return this.req("tokencreate name:\"" + data.name + "\" amount:\"" + data.amount + "\" description:\"" + data.description + "\" icon:\"" + data.icon + "\" proof:\"" + data.proof + "\"");
            }
        }
    };
    MinimaApiService.prototype.validateTokenID = function (tokenid) {
        return this.req("tokenvalidate " + tokenid);
    };
    MinimaApiService.prototype.sendMessageTransaction = function (data) {
        var postTransaction = "send " + data.amount + " " + data.address + " " + data.tokenid + " " + " 254:[01000100]#255:[\"" + data.message + "\"]";
        return this.req(postTransaction);
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



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    wallet_version: "v1.0.6",
    production: false,
    newLine: '/(\r\n|\n|\r)/gm'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ })

}]);
//# sourceMappingURL=pages-mini-term-mini-term-module-es5.js.map