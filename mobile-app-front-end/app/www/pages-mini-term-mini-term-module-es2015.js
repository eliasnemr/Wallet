(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-mini-term-mini-term-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/mini-term/mini-term.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/mini-term/mini-term.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-app>\r\n<ion-header class=\"ion-no-border\">\r\n\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button class=\"menu-icon\"></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      Terminal\r\n    </ion-title>\r\n      <ion-label \r\n      (click)=\"presentPopover($event)\" \r\n      fill=\"clear\"\r\n      lines=\"none\" \r\n      slot=\"end\"\r\n      class=\"resize-tool-btn\">aA</ion-label>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content #ionContent>\r\n  <!-- Terminal -->\r\n  <textarea\r\n  #terminal\r\n  background=\"transparent\"\r\n  class=\"terminal\"\r\n  [ngStyle] = \"{'font-size': getFontSize()}\" \r\n  autocapitalize=\"false\"\r\n  spellcheck=\"false\"\r\n  autocorrect=\"off\"></textarea>\r\n</ion-content>\r\n</ion-app>\r\n<!-- <div class=\"terminal\">\r\n  <div id=\"history\">\r\n    \r\n  </div>\r\n  <div class=\"line\">\r\n    <span id=\"path\">c:/&nbsp;>&nbsp;</span>\r\n    <input type=\"text\" id=\"input\">\r\n  </div>\r\n</div> -->\r\n\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _mini_term_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mini-term.page */ "./src/app/pages/mini-term/mini-term.page.ts");







const routes = [
    {
        path: '',
        component: _mini_term_page__WEBPACK_IMPORTED_MODULE_6__["MiniTermPage"]
    }
];
let MiniTermPageModule = class MiniTermPageModule {
};
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



/***/ }),

/***/ "./src/app/pages/mini-term/mini-term.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/mini-term/mini-term.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".terminal {\n  width: 100%;\n  background-color: var(--ion-background-color, #ffffff);\n  color: var(--ion-color-tertiary);\n  padding-left: 1%;\n  font-family: monospace;\n  height: 100%;\n  height: 100vh;\n  border: none !important;\n}\n\nion-header ion-toolbar ion-title {\n  font-family: manrope-bold;\n  font-size: 1.2rem;\n  padding-top: 5%;\n}\n\n.resize-tool-btn {\n  font-family: manrope-bold;\n  font-size: 1rem;\n  padding-right: 5%;\n  cursor: pointer;\n  color: var(--ion-color-tertiary);\n  text-transform: none;\n}\n\n.no-scroll {\n  --overflow: hidden;\n}\n\nion-content {\n  --overflow: hidden;\n  height: 100% !important;\n  max-height: 100% !important;\n}\n\ntextarea:hover,\ninput:hover,\ntextarea:active,\ninput:active,\ntextarea:focus,\ninput:focus,\nbutton:focus,\nbutton:active,\nbutton:hover,\nlabel:focus,\n.btn:active,\n.btn.active {\n  outline: 0px !important;\n  -webkit-appearance: none;\n  box-shadow: none !important;\n}\n\n@media only screen and (min-width: 990px) {\n  .terminal {\n    font-size: 16px;\n    border: 0px;\n  }\n}\n\nion-toolbar {\n  --background: var(--ion-m-background);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGlhc25lbXIvcHJvamVjdHMvV0FMTEVUL21vYmlsZS1hcHAtZnJvbnQtZW5kL2FwcC9zcmMvYXBwL3BhZ2VzL21pbmktdGVybS9taW5pLXRlcm0ucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9taW5pLXRlcm0vbWluaS10ZXJtLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxzREFBQTtFQUNBLGdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QUNDSjs7QURDQTtFQUNJLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDRUo7O0FEQ0E7RUFDSSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQ0FBQTtFQUNBLG9CQUFBO0FDRUo7O0FEQ0E7RUFDSSxrQkFBQTtBQ0VKOztBREFBO0VBQ0ksa0JBQUE7RUFDQSx1QkFBQTtFQUNBLDJCQUFBO0FDR0o7O0FEQUE7Ozs7Ozs7Ozs7OztFQWFJLHVCQUFBO0VBQ0Esd0JBQUE7RUFDQSwyQkFBQTtBQ0VKOztBRENBO0VBQ0k7SUFDSSxlQUFBO0lBQ0EsV0FBQTtFQ0VOO0FBQ0Y7O0FEQ0E7RUFDSSxxQ0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbWluaS10ZXJtL21pbmktdGVybS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGVybWluYWwge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwgI2ZmZmZmZik7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5KTtcclxuICAgIHBhZGRpbmctbGVmdDogMSU7XHJcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGJvcmRlcjpub25lIWltcG9ydGFudDtcclxufVxyXG5pb24taGVhZGVyIGlvbi10b29sYmFyIGlvbi10aXRsZSB7XHJcbiAgICBmb250LWZhbWlseTogbWFucm9wZS1ib2xkO1xyXG4gICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICBwYWRkaW5nLXRvcDogNSU7XHJcbn1cclxuXHJcbi5yZXNpemUtdG9vbC1idG4ge1xyXG4gICAgZm9udC1mYW1pbHk6IG1hbnJvcGUtYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMS4wcmVtO1xyXG4gICAgcGFkZGluZy1yaWdodDogNSU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5KTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG59XHJcblxyXG4ubm8tc2Nyb2xsIHtcclxuICAgIC0tb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5pb24tY29udGVudCB7XHJcbiAgICAtLW92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBoZWlnaHQ6IDEwMCUhaW1wb3J0YW50O1xyXG4gICAgbWF4LWhlaWdodDogMTAwJSFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbnRleHRhcmVhOmhvdmVyLCBcclxuaW5wdXQ6aG92ZXIsIFxyXG50ZXh0YXJlYTphY3RpdmUsIFxyXG5pbnB1dDphY3RpdmUsIFxyXG50ZXh0YXJlYTpmb2N1cywgXHJcbmlucHV0OmZvY3VzLFxyXG5idXR0b246Zm9jdXMsXHJcbmJ1dHRvbjphY3RpdmUsXHJcbmJ1dHRvbjpob3ZlcixcclxubGFiZWw6Zm9jdXMsXHJcbi5idG46YWN0aXZlLFxyXG4uYnRuLmFjdGl2ZVxyXG57XHJcbiAgICBvdXRsaW5lOjBweCAhaW1wb3J0YW50O1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOm5vbmU7XHJcbiAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkwcHgpIHtcclxuICAgIC50ZXJtaW5hbCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGJvcmRlcjogMHB4O1xyXG4gICAgfVxyXG4gICAgIFxyXG59XHJcbmlvbi10b29sYmFyIHtcclxuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLW0tYmFja2dyb3VuZCk7XHJcbn0iLCIudGVybWluYWwge1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsICNmZmZmZmYpO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5KTtcbiAgcGFkZGluZy1sZWZ0OiAxJTtcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuaW9uLWhlYWRlciBpb24tdG9vbGJhciBpb24tdGl0bGUge1xuICBmb250LWZhbWlseTogbWFucm9wZS1ib2xkO1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgcGFkZGluZy10b3A6IDUlO1xufVxuXG4ucmVzaXplLXRvb2wtYnRuIHtcbiAgZm9udC1mYW1pbHk6IG1hbnJvcGUtYm9sZDtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBwYWRkaW5nLXJpZ2h0OiA1JTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5KTtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG59XG5cbi5uby1zY3JvbGwge1xuICAtLW92ZXJmbG93OiBoaWRkZW47XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1vdmVyZmxvdzogaGlkZGVuO1xuICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbiAgbWF4LWhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xufVxuXG50ZXh0YXJlYTpob3ZlcixcbmlucHV0OmhvdmVyLFxudGV4dGFyZWE6YWN0aXZlLFxuaW5wdXQ6YWN0aXZlLFxudGV4dGFyZWE6Zm9jdXMsXG5pbnB1dDpmb2N1cyxcbmJ1dHRvbjpmb2N1cyxcbmJ1dHRvbjphY3RpdmUsXG5idXR0b246aG92ZXIsXG5sYWJlbDpmb2N1cyxcbi5idG46YWN0aXZlLFxuLmJ0bi5hY3RpdmUge1xuICBvdXRsaW5lOiAwcHggIWltcG9ydGFudDtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkwcHgpIHtcbiAgLnRlcm1pbmFsIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgYm9yZGVyOiAwcHg7XG4gIH1cbn1cbmlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tbS1iYWNrZ3JvdW5kKTtcbn0iXX0= */"

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
/* harmony import */ var _components_pop_term_pop_term_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/pop-term/pop-term.component */ "./src/app/components/pop-term/pop-term.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _service_userterminal_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/userterminal.service */ "./src/app/service/userterminal.service.ts");
/* harmony import */ var minima__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! minima */ "./node_modules/minima/dist/minima.js");
/* harmony import */ var minima__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(minima__WEBPACK_IMPORTED_MODULE_6__);







let MiniTermPage = class MiniTermPage {
    constructor(loadingController, navCtrl, renderer, popoverController, userTerminal) {
        this.loadingController = loadingController;
        this.navCtrl = navCtrl;
        this.renderer = renderer;
        this.popoverController = popoverController;
        this.userTerminal = userTerminal;
        this.host = '';
        this.lastLine = '';
        this.loader = null;
        // Disable up and down keys.
        window.addEventListener('keydown', function (e) {
            if ([37, 38, 39, 40].indexOf(e.keyCode) > -1) {
                e.preventDefault();
            }
        }, false);
    }
    ngOnInit() {
        const mStr = parseInt(localStorage.getItem('termFontSize'), 10);
        this.size = mStr;
        // Stored subscription that watches if we activated button on PopTerm
        this.fontSubscription =
            this.userTerminal.fontSizeEmitter.subscribe(didActivate => {
                if (this.size !== didActivate) {
                    if (this.size > 0 && this.size <= 50) {
                        this.size += didActivate;
                        localStorage.setItem('termFontSize', '' + this.size);
                    }
                    else {
                        this.size = 14;
                        localStorage.setItem('termFontSize', '' + this.size);
                    }
                }
            });
    }
    ionViewWillEnter() { }
    ionViewWillLeave() {
        localStorage.setItem('termFontSize', '' + this.size);
        this.fontSubscription.unsubscribe();
    }
    ngAfterViewInit() {
        this.terminal.nativeElement.value += '**********************************************\n';
        this.terminal.nativeElement.value += '*  __  __  ____  _  _  ____  __  __    __    *\n';
        this.terminal.nativeElement.value += '* (  \\/  )(_  _)( \\( )(_  _)(  \\/  )  /__\\   *\n';
        this.terminal.nativeElement.value += '*  )    (  _)(_  )  (  _)(_  )    (  /(__)\\  *\n';
        this.terminal.nativeElement.value += '* (_/\\/\\_)(____)(_)\\_)(____)(_/\\/\\_)(__)(__) *\n';
        this.terminal.nativeElement.value += '*                                            *\n';
        this.terminal.nativeElement.value += '**********************************************\n';
        this.terminal.nativeElement.value += 'Welcome to Minima. For assistance type help. Then press enter.\n';
        this.globalInstance = this.renderer.listen(this.terminal.nativeElement, 'keydown', (e) => {
            if ([13].indexOf(e.keyCode) > -1) {
                // get the whole textarea text..
                const msg = this.terminal.nativeElement.value;
                // get the last line...
                this.lastLine = msg.substr(msg.lastIndexOf('\n') + 1);
                if (this.lastLine.length > 1) {
                    // get the json call
                    this.request(this.lastLine);
                }
            }
        });
    }
    // PopTerm Editing methods
    getFontSize() {
        return this.size + 'px';
    }
    // end of PopTerm Editing methods
    scrollToBottomOnInit() {
        // scroll
        setTimeout(() => {
            this.ionContent.scrollToBottom(300);
        }, 200);
    }
    // Minima Api Service
    getHost() {
        if (localStorage.getItem('minima_host') == null) {
            localStorage.setItem('minima_host', this.host);
            return this.host;
        }
        else {
            return localStorage.getItem('minima_host');
        }
    }
    // api calls
    request(route) {
        if (route === 'printchain') {
            return new Promise((resolve) => {
                minima__WEBPACK_IMPORTED_MODULE_6__["Minima"].cmd('printchain', (res) => {
                    const regex = res.replace(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].newLine, '\\n'); // replace \n with <br/> has all 3 \n|\r|\r\n
                    this.terminal.nativeElement.value += regex;
                    this.terminal.nativeElement.scrollTop = this.terminal.nativeElement.scrollHeight;
                    resolve(res);
                });
            });
        }
        else if (route === 'tutorial' || route === 'Tutorial') {
            return new Promise((resolve, reject) => {
                minima__WEBPACK_IMPORTED_MODULE_6__["Minima"].cmd('tutorial', (res) => {
                    const regex = JSON.stringify(res, undefined, 2).replace('\\\\n', '\n');
                    this.terminal.nativeElement.value += regex;
                    this.terminal.nativeElement.scrollTop = this.terminal.nativeElement.scrollHeight;
                    resolve(res);
                });
            });
        }
        else {
            return new Promise((resolve, reject) => {
                minima__WEBPACK_IMPORTED_MODULE_6__["Minima"].cmd(route, (res) => {
                    this.terminal.nativeElement.value += JSON.stringify(res, undefined, 2) + '\n';
                    this.terminal.nativeElement.scrollTop = this.terminal.nativeElement.scrollHeight;
                    resolve(res);
                });
            });
        }
    }
    showLoader() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.loader == null) {
                this.loader = yield this.loadingController.create({
                    message: 'Loading'
                });
                this.loader.present();
            }
        });
    }
    hideLoader() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.loader !== null) {
                yield this.loader.dismiss();
                this.loader = null;
            }
            else { }
        });
    }
    presentPopover(ev) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: _components_pop_term_pop_term_component__WEBPACK_IMPORTED_MODULE_1__["PopTermComponent"],
                cssClass: 'terminal-pop',
                event: ev,
                translucent: false
            });
            return yield popover.present();
        });
    }
};
MiniTermPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"] },
    { type: _service_userterminal_service__WEBPACK_IMPORTED_MODULE_5__["UserTerminal"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"], { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"])
], MiniTermPage.prototype, "ionContent", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('terminal', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"])
], MiniTermPage.prototype, "terminal", void 0);
MiniTermPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-mini-term',
        template: __webpack_require__(/*! raw-loader!./mini-term.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/mini-term/mini-term.page.html"),
        styles: [__webpack_require__(/*! ./mini-term.page.scss */ "./src/app/pages/mini-term/mini-term.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"],
        _service_userterminal_service__WEBPACK_IMPORTED_MODULE_5__["UserTerminal"]])
], MiniTermPage);



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
const environment = {
    production: false,
    //defaultNode: "127.0.0.1:9002/",
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
//# sourceMappingURL=pages-mini-term-mini-term-module-es2015.js.map