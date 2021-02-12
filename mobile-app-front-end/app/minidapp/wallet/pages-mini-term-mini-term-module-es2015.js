(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-mini-term-mini-term-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/mini-term/mini-term.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/mini-term/mini-term.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-app>\n<ion-header class=\"page-header ion-no-border\">\n  <ion-toolbar>\n    <ion-title>\n      <ion-item id=\"title\" lines=\"none\" class=\"ion-no-padding\">\n        <ion-icon class=\"menu-btn\" (click)=\"openMenu()\" src=\"assets/menuIcon.svg\"></ion-icon>\n        Terminal\n      </ion-item>\n      <ion-item id=\"subtitle\" class=\"breadcrumb ion-no-padding\" lines=\"none\">\n        Minima terminal\n      </ion-item>\n    </ion-title>\n      <ion-label \n      (click)=\"presentPopover($event)\" \n      fill=\"clear\"\n      lines=\"none\" \n      slot=\"end\"\n      class=\"resize-tool-btn\">aA</ion-label>\n  </ion-toolbar>\n</ion-header>\n\n\n\n<ion-content class=\"page-content\" #ionContent>\n    <!-- Terminal -->\n    <textarea\n    #terminal\n    background=\"transparent\"\n    class=\"terminal\"\n    [ngStyle] = \"{'font-size': getFontSize()}\" \n    autocapitalize=\"false\"\n    spellcheck=\"false\"\n    autocorrect=\"off\"></textarea>\n  \n</ion-content>\n<ion-footer class=\"border-t\">\n  <ion-button (click)=\"giveMe50()\" class=\"gimme50 no-ripple\" fill=\"none\">\n    Gimme 50\n  </ion-button>\n</ion-footer>\n</ion-app>\n\n\n"

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

module.exports = "::-webkit-scrollbar,\n*::-webkit-scrollbar {\n  display: none;\n}\n\n.terminal {\n  padding: 0;\n  margin-top: 7px;\n  width: 100%;\n  background-color: var(--ion-background-color, #ffffff);\n  color: var(--ion-color-color);\n  font-family: monospace;\n  height: 100%;\n  height: 100vh;\n  border: none !important;\n}\n\n.resize-tool-btn {\n  position: absolute;\n  top: 22%;\n  right: 5%;\n  font-family: manrope-bold;\n  font-size: 1rem;\n  cursor: pointer;\n  color: var(--ion-color-color);\n  text-transform: none;\n}\n\n.no-scroll {\n  --overflow: hidden;\n}\n\nion-content {\n  --overflow: hidden;\n  height: 100% !important;\n  max-height: 100% !important;\n}\n\ntextarea:hover,\ninput:hover,\ntextarea:active,\ninput:active,\ntextarea:focus,\ninput:focus,\nbutton:focus,\nbutton:active,\nbutton:hover,\nlabel:focus,\n.btn:active,\n.btn.active {\n  outline: 0px !important;\n  -webkit-appearance: none;\n  box-shadow: none !important;\n}\n\n@media only screen and (min-width: 990px) {\n  .terminal {\n    font-size: 16px;\n    border: 0px;\n  }\n}\n\nion-toolbar {\n  --background: var(--ion-m-background);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGlhc25lbXIvcHJvamVjdHMvV2FsbGV0L21vYmlsZS1hcHAtZnJvbnQtZW5kL2FwcC9zcmMvYXBwL3BhZ2VzL21pbmktdGVybS9taW5pLXRlcm0ucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9taW5pLXRlcm0vbWluaS10ZXJtLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRSxhQUFBO0FDQ0Y7O0FEQ0E7RUFDSSxVQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxzREFBQTtFQUNBLDZCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FDRUo7O0FEQUE7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLDZCQUFBO0VBQ0Esb0JBQUE7QUNHSjs7QURBQTtFQUNJLGtCQUFBO0FDR0o7O0FEREE7RUFDSSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsMkJBQUE7QUNJSjs7QUREQTs7Ozs7Ozs7Ozs7O0VBYUksdUJBQUE7RUFDQSx3QkFBQTtFQUNBLDJCQUFBO0FDR0o7O0FEQUE7RUFDSTtJQUNJLGVBQUE7SUFDQSxXQUFBO0VDR047QUFDRjs7QURBQTtFQUNJLHFDQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9taW5pLXRlcm0vbWluaS10ZXJtLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6LXdlYmtpdC1zY3JvbGxiYXIsXG4qOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4udGVybWluYWwge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luLXRvcDogN3B4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZmZmZmZmKTtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWNvbG9yKTtcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGJvcmRlcjpub25lIWltcG9ydGFudDtcbn1cbi5yZXNpemUtdG9vbC1idG4ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDIyJTtcbiAgICByaWdodDogNSU7XG4gICAgZm9udC1mYW1pbHk6IG1hbnJvcGUtYm9sZDtcbiAgICBmb250LXNpemU6IDEuMHJlbTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1jb2xvcik7XG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG59XG5cbi5uby1zY3JvbGwge1xuICAgIC0tb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbmlvbi1jb250ZW50IHtcbiAgICAtLW92ZXJmbG93OiBoaWRkZW47XG4gICAgaGVpZ2h0OiAxMDAlIWltcG9ydGFudDtcbiAgICBtYXgtaGVpZ2h0OiAxMDAlIWltcG9ydGFudDtcbn1cblxudGV4dGFyZWE6aG92ZXIsIFxuaW5wdXQ6aG92ZXIsIFxudGV4dGFyZWE6YWN0aXZlLCBcbmlucHV0OmFjdGl2ZSwgXG50ZXh0YXJlYTpmb2N1cywgXG5pbnB1dDpmb2N1cyxcbmJ1dHRvbjpmb2N1cyxcbmJ1dHRvbjphY3RpdmUsXG5idXR0b246aG92ZXIsXG5sYWJlbDpmb2N1cyxcbi5idG46YWN0aXZlLFxuLmJ0bi5hY3RpdmVcbntcbiAgICBvdXRsaW5lOjBweCAhaW1wb3J0YW50O1xuICAgIC13ZWJraXQtYXBwZWFyYW5jZTpub25lO1xuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTBweCkge1xuICAgIC50ZXJtaW5hbCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgYm9yZGVyOiAwcHg7XG4gICAgfVxuICAgICBcbn1cbmlvbi10b29sYmFyIHtcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1tLWJhY2tncm91bmQpO1xufSIsIjo6LXdlYmtpdC1zY3JvbGxiYXIsXG4qOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi50ZXJtaW5hbCB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbi10b3A6IDdweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZmZmZmZmKTtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1jb2xvcik7XG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XG4gIGhlaWdodDogMTAwJTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5yZXNpemUtdG9vbC1idG4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMjIlO1xuICByaWdodDogNSU7XG4gIGZvbnQtZmFtaWx5OiBtYW5yb3BlLWJvbGQ7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWNvbG9yKTtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG59XG5cbi5uby1zY3JvbGwge1xuICAtLW92ZXJmbG93OiBoaWRkZW47XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1vdmVyZmxvdzogaGlkZGVuO1xuICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbiAgbWF4LWhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xufVxuXG50ZXh0YXJlYTpob3ZlcixcbmlucHV0OmhvdmVyLFxudGV4dGFyZWE6YWN0aXZlLFxuaW5wdXQ6YWN0aXZlLFxudGV4dGFyZWE6Zm9jdXMsXG5pbnB1dDpmb2N1cyxcbmJ1dHRvbjpmb2N1cyxcbmJ1dHRvbjphY3RpdmUsXG5idXR0b246aG92ZXIsXG5sYWJlbDpmb2N1cyxcbi5idG46YWN0aXZlLFxuLmJ0bi5hY3RpdmUge1xuICBvdXRsaW5lOiAwcHggIWltcG9ydGFudDtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkwcHgpIHtcbiAgLnRlcm1pbmFsIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgYm9yZGVyOiAwcHg7XG4gIH1cbn1cbmlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tbS1iYWNrZ3JvdW5kKTtcbn0iXX0= */"

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
/* harmony import */ var _service_minima_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../service/minima-api.service */ "./src/app/service/minima-api.service.ts");
/* harmony import */ var _components_pop_term_pop_term_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/pop-term/pop-term.component */ "./src/app/components/pop-term/pop-term.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _service_userterminal_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../service/userterminal.service */ "./src/app/service/userterminal.service.ts");
/* harmony import */ var minima__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! minima */ "./node_modules/minima/dist/minima.js");
/* harmony import */ var minima__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(minima__WEBPACK_IMPORTED_MODULE_7__);








let MiniTermPage = class MiniTermPage {
    constructor(menu, api, alertController, loadingController, navCtrl, renderer, popoverController, userTerminal) {
        this.menu = menu;
        this.api = api;
        this.alertController = alertController;
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
    openMenu() {
        this.menu.open();
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
                minima__WEBPACK_IMPORTED_MODULE_7__["Minima"].cmd('printchain', (res) => {
                    const regex = res.replace(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].newLine, '\\n'); // replace \n with <br/> has all 3 \n|\r|\r\n
                    this.terminal.nativeElement.value += regex;
                    this.terminal.nativeElement.scrollTop = this.terminal.nativeElement.scrollHeight;
                    resolve(res);
                });
            });
        }
        else if (route === 'tutorial' || route === 'Tutorial') {
            return new Promise((resolve, reject) => {
                minima__WEBPACK_IMPORTED_MODULE_7__["Minima"].cmd('tutorial', (res) => {
                    const regex = JSON.stringify(res, undefined, 2).replace('\\\\n', '\n');
                    this.terminal.nativeElement.value += regex;
                    this.terminal.nativeElement.scrollTop = this.terminal.nativeElement.scrollHeight;
                    resolve(res);
                });
            });
        }
        else {
            return new Promise((resolve, reject) => {
                minima__WEBPACK_IMPORTED_MODULE_7__["Minima"].cmd(route, (res) => {
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
                component: _components_pop_term_pop_term_component__WEBPACK_IMPORTED_MODULE_2__["PopTermComponent"],
                cssClass: 'terminal-pop',
                event: ev,
                translucent: false
            });
            return yield popover.present();
        });
    }
    giveMe50() {
        this.api.giveMe50().then((res) => {
            if (res.status === true) {
                this.presentAlert('Gimme50', 'Successful', 'Status');
            }
            else {
                this.presentAlert('Gimme50', res.message, 'Status');
            }
        });
    }
    presentAlert(hdr, msg, sub) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'alert',
                header: hdr,
                subHeader: sub,
                message: msg,
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
};
MiniTermPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"] },
    { type: _service_minima_api_service__WEBPACK_IMPORTED_MODULE_1__["MinimaApiService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"] },
    { type: _service_userterminal_service__WEBPACK_IMPORTED_MODULE_6__["UserTerminal"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"], { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"])
], MiniTermPage.prototype, "ionContent", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('terminal', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"])
], MiniTermPage.prototype, "terminal", void 0);
MiniTermPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-mini-term',
        template: __webpack_require__(/*! raw-loader!./mini-term.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/mini-term/mini-term.page.html"),
        styles: [__webpack_require__(/*! ./mini-term.page.scss */ "./src/app/pages/mini-term/mini-term.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"],
        _service_minima_api_service__WEBPACK_IMPORTED_MODULE_1__["MinimaApiService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"],
        _service_userterminal_service__WEBPACK_IMPORTED_MODULE_6__["UserTerminal"]])
], MiniTermPage);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var minima__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! minima */ "./node_modules/minima/dist/minima.js");
/* harmony import */ var minima__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(minima__WEBPACK_IMPORTED_MODULE_3__);




let MinimaApiService = class MinimaApiService {
    constructor(loadingController) {
        this.loadingController = loadingController;
        this.loader = null;
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
    createToken(data) {
        return this.req("tokencreate name:\"" + data.name + "\" amount:" + data.amount + " description:\"" + data.description + "\" script:\"" + data.script + "\" icon:" + data.icon + " proof:" + data.proof);
    }
    validateTokenID(tokenid) {
        return this.req("tokenvalidate " + tokenid);
    }
    sendMessageTransaction(data) {
        const txnidentifier = Math.floor(Math.random() * 1000000000);
        const port254 = 254;
        const port255 = 255;
        const customTXN = 
        // Custom TXN with an ID
        "txncreate " + txnidentifier + ";" +
            // Add state variable 1
            "txnstate " + txnidentifier + " 254 01000100" + ";" +
            // Add User state variable 2
            "txnstate " + txnidentifier + " 255 \"" + data.message + "\"" + ";" +
            // Auto fill the transaction
            "txnauto " + txnidentifier + " " + data.amount + " " + data.address + " " + data.tokenid + ";" +
            // Post it!
            "txnpost " + txnidentifier + ";" +
            // Clear the txn
            "txndelete " + txnidentifier + ";";
        // send 1 0xFF 0x00 '254:0x1000#255:[This is a message]'
        return this.req(customTXN);
    }
    webLink(data) {
        return this.req('weblink+' + data.url);
    }
    setHost(newHost) {
        localStorage.setItem('minima_host', newHost);
    }
    newAddress() {
        return this.req('newaddress');
    }
    sendFunds(data) {
        return this.req('send ' + data.amount + ' ' + data.address + ' ' + data.tokenid);
    }
    giveMe50() {
        return this.req('gimme50');
    }
    getBalance() {
        return this.req('balance');
    }
    getHistory() {
        return this.req('history');
    }
    clearMyHistory() {
        return this.req('history clear');
    }
    getStatus() {
        return this.req('status');
    }
    // Use minima.js instead..
    req(fnc) {
        const promise = new Promise((resolve) => {
            minima__WEBPACK_IMPORTED_MODULE_3__["Minima"].cmd(fnc, (resp) => {
                //console.log(resp);
                resolve(resp);
            });
        });
        return promise;
    }
};
MinimaApiService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] }
];
MinimaApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]])
], MinimaApiService);



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