(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["view-coins-view-coins-module"],{

/***/ "FhYr":
/*!**************************************************************!*\
  !*** ./src/app/tab2/view-coins/view-coins-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: ViewCoinsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewCoinsPageRoutingModule", function() { return ViewCoinsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _view_coins_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view-coins.page */ "eYyJ");




const routes = [
    {
        path: '',
        component: _view_coins_page__WEBPACK_IMPORTED_MODULE_3__["ViewCoinsPage"]
    }
];
let ViewCoinsPageRoutingModule = class ViewCoinsPageRoutingModule {
};
ViewCoinsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ViewCoinsPageRoutingModule);



/***/ }),

/***/ "Yk5X":
/*!******************************************************!*\
  !*** ./src/app/tab2/view-coins/view-coins.page.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWV3LWNvaW5zLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "ZWju":
/*!******************************************************!*\
  !*** ./src/app/tab2/view-coins/view-coins.module.ts ***!
  \******************************************************/
/*! exports provided: ViewCoinsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewCoinsPageModule", function() { return ViewCoinsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _view_coins_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view-coins-routing.module */ "FhYr");
/* harmony import */ var _view_coins_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view-coins.page */ "eYyJ");







let ViewCoinsPageModule = class ViewCoinsPageModule {
};
ViewCoinsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _view_coins_routing_module__WEBPACK_IMPORTED_MODULE_5__["ViewCoinsPageRoutingModule"]
        ],
        declarations: [_view_coins_page__WEBPACK_IMPORTED_MODULE_6__["ViewCoinsPage"]]
    })
], ViewCoinsPageModule);



/***/ }),

/***/ "eYyJ":
/*!****************************************************!*\
  !*** ./src/app/tab2/view-coins/view-coins.page.ts ***!
  \****************************************************/
/*! exports provided: ViewCoinsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewCoinsPage", function() { return ViewCoinsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_view_coins_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./view-coins.page.html */ "zqSs");
/* harmony import */ var _view_coins_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view-coins.page.scss */ "Yk5X");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let ViewCoinsPage = class ViewCoinsPage {
    constructor() {
        console.log('View-Coins-Page called!');
    }
    ngOnInit() {
    }
};
ViewCoinsPage.ctorParameters = () => [];
ViewCoinsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-view-coins',
        template: _raw_loader_view_coins_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_view_coins_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ViewCoinsPage);



/***/ }),

/***/ "zqSs":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/view-coins/view-coins.page.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>view-coins</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  Bla\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=view-coins-view-coins-module.js.map