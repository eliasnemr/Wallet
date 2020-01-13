(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["mini-term-mini-term-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/mini-term/mini-term.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/mini-term/mini-term.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title color=\"primary\">\n      Mini Terminal\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<ion-grid *ngFor=\"let theExecute of theExecuted\" >\n    <ion-row>\n      <ion-col>\n        <ion-item>\n            <ion-label\n            color=\"primary\"\n            style=\"background-color: cornsilk;\"\n            class=\"ion-text-wrap\">\n              <pre>{{theExecute}}</pre> \n            </ion-label>\n          </ion-item> \n      </ion-col> \n    </ion-row>\n</ion-grid>\n</ion-content>\n\n<ion-footer>\n<ion-toolbar>\n  <ion-row>\n      <ion-col>\n        <ion-input\n        style=\"background-color: #E0E0E0\"\n        type=\"text\"\n        autocapitalize=\"none\"\n        autocorrect=\"off\"\n        placeholder=\"$command line\"\n        [(ngModel)]=\"toExecute\"\n        (keyup.enter) = \"getCall()\">\n      </ion-input>\n    </ion-col>\n      <button ion-button small full item-end clear \n        (click)=\"getCall()\" \n        [disabled] = \"!toExecute\">Execute</button>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>\n"

/***/ }),

/***/ "./src/app/mini-term/mini-term.module.ts":
/*!***********************************************!*\
  !*** ./src/app/mini-term/mini-term.module.ts ***!
  \***********************************************/
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
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _mini_term_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mini-term.page */ "./src/app/mini-term/mini-term.page.ts");







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

/***/ "./src/app/mini-term/mini-term.page.scss":
/*!***********************************************!*\
  !*** ./src/app/mini-term/mini-term.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21pbmktdGVybS9taW5pLXRlcm0ucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/mini-term/mini-term.page.ts":
/*!*********************************************!*\
  !*** ./src/app/mini-term/mini-term.page.ts ***!
  \*********************************************/
/*! exports provided: MiniTermPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiniTermPage", function() { return MiniTermPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");





let MiniTermPage = class MiniTermPage {
    constructor(http, loadingController) {
        this.http = http;
        this.loadingController = loadingController;
        this.toExecute = '';
        this.theExecuted = [];
        this.host = '';
        this.loader = null;
        this.host = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].defaultNode;
        this.host = this.getHost();
    }
    buttonHandler() {
        if (this.toExecute == '') {
        }
        else {
            this.isEnabled = true;
        }
    }
    ngOnInit() { }
    getHost() {
        if (localStorage.getItem('minima_host') == null) {
            localStorage.setItem('minima_host', this.host);
            return this.host;
        }
        else {
            return localStorage.getItem('minima_host');
        }
    }
    getCall() {
        return this.request(this.toExecute);
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
    request(route) {
        const self = this;
        setTimeout(() => { self.showLoader(); }, 0);
        console.log(route);
        return new Promise((resolve, reject) => {
            self.http.get(self.host + route, { responseType: 'json' }).subscribe((d) => {
                setTimeout(() => { self.hideLoader(); }, 500);
                console.log(d);
                const objpretty = JSON.stringify(d, undefined, 1);
                this.theExecuted.push('$' + objpretty);
                resolve(d);
            }, (err) => {
                self.hideLoader();
                console.log('Error ' + err);
                reject(err);
            });
        });
    }
    syntaxHighlight(json) {
        if (typeof json !== 'string') {
            json = JSON.stringify(json, undefined, 2);
        }
        json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
        return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, (match) => {
            let cls = 'number';
            if (/^"/.test(match)) {
                if (/:$/.test(match)) {
                    cls = 'key';
                }
                else {
                    cls = 'string';
                }
            }
            else if (/true|false/.test(match)) {
                cls = 'boolean';
            }
            else if (/null/.test(match)) {
                cls = 'null';
            }
            return '<span class="' + cls + '">' + match + '</span>';
        });
    }
};
MiniTermPage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] }
];
MiniTermPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mini-term',
        template: __webpack_require__(/*! raw-loader!./mini-term.page.html */ "./node_modules/raw-loader/index.js!./src/app/mini-term/mini-term.page.html"),
        styles: [__webpack_require__(/*! ./mini-term.page.scss */ "./src/app/mini-term/mini-term.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]])
], MiniTermPage);



/***/ })

}]);
//# sourceMappingURL=mini-term-mini-term-module-es2015.js.map