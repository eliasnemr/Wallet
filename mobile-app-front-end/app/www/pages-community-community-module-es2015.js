(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-community-community-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/community/community.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/community/community.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-menu-button class=\"menu-icon\" slot=\"start\"></ion-menu-button>\n    <ion-title class=\"large-text\">Join Community</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n<ion-list lines=\"half\">\n<ion-item lines=\"half\" href=\"https://minima.global/\" target=\"_blank\" detail>\n    <ion-icon slot=\"start\" name=\"globe\" style=\"padding: 10px;\" size=\"small\" color=\"white\"></ion-icon>\n    <span class=\"small-text\">Official Minima Website</span> \n  </ion-item>\n  <ion-item lines=\"half\" href=\"https://t.me/Minima_Global\" target=\"_blank\" detail>\n    <ion-icon slot=\"start\" [src]=\"teleImgMode()\" style=\"padding: 10px;\" size=\"small\"></ion-icon>\n    <span class=\"small-text\">Join our Telegram chat</span>\n  </ion-item>\n  <ion-item lines=\"half\" href=\"https://twitter.com/Minima_Global\" target=\"_blank\" detail>\n    <ion-icon slot=\"start\" src=\"./assets/Twitter.svg\" style=\"padding: 10px;\" size=\"small\"></ion-icon>\n    <span class=\"small-text\">Follow us on Twitter</span>\n  </ion-item>\n  <ion-item lines=\"half\" href=\"https://github.com/spartacusrex99/Minima\" target=\"_blank\" detail>\n    <ion-icon slot=\"start\" [src]=\"gitImgMode()\" style=\"padding: 10px;\" size=\"small\"></ion-icon>\n    <span class=\"small-text\">Join our dev community</span>\n  </ion-item>\n  <ion-item lines=\"half\" href=\"https://medium.com/minima-global\" target=\"_blank\" detail>\n    <ion-icon slot=\"start\" src=\"./assets/Medium.svg\" style=\"padding: 10px;\" size=\"small\"></ion-icon>\n    <span class=\"small-text\">Subscribe to our Medium blog</span>\n  </ion-item>\n  \n  \n</ion-list>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/community/community.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/community/community.module.ts ***!
  \*****************************************************/
/*! exports provided: CommunityPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommunityPageModule", function() { return CommunityPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _community_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./community.page */ "./src/app/pages/community/community.page.ts");







const routes = [
    {
        path: '',
        component: _community_page__WEBPACK_IMPORTED_MODULE_6__["CommunityPage"]
    }
];
let CommunityPageModule = class CommunityPageModule {
};
CommunityPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_community_page__WEBPACK_IMPORTED_MODULE_6__["CommunityPage"]]
    })
], CommunityPageModule);



/***/ }),

/***/ "./src/app/pages/community/community.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/community/community.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbW11bml0eS9jb21tdW5pdHkucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/community/community.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/community/community.page.ts ***!
  \***************************************************/
/*! exports provided: CommunityPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommunityPage", function() { return CommunityPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CommunityPage = class CommunityPage {
    constructor() { }
    ngOnInit() {
    }
    gitImgMode() {
        if (document.body.classList.value === 'dark') {
            return './assets/githubdark.svg';
        }
        else {
            return './assets/Github.svg';
        }
    }
    teleImgMode() {
        if (document.body.classList.value === 'dark') {
            return './assets/telegramdark.svg';
        }
        else {
            return './assets/telegram.svg';
        }
    }
};
CommunityPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-community',
        template: __webpack_require__(/*! raw-loader!./community.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/community/community.page.html"),
        styles: [__webpack_require__(/*! ./community.page.scss */ "./src/app/pages/community/community.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], CommunityPage);



/***/ })

}]);
//# sourceMappingURL=pages-community-community-module-es2015.js.map