(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-community-community-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/community/community.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/community/community.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-menu-button class=\"menu-icon\" slot=\"start\"></ion-menu-button>\n    <ion-title class=\"large-text\">Join Community</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n\n<ion-grid>\n  <ion-row>\n      <ion-col size=\"12\" size-md=\"6\">\n          <ion-card href=\"https://minima.global/\" target=\"_\" class=\"social-card\">\n              <ion-card-header>\n                Official Website\n              </ion-card-header>\n              <ion-card-content>\n                <img src=\"./assets/community/global.svg\" alt=\"\" class=\"socials\">\n              </ion-card-content>\n          </ion-card>\n      </ion-col>\n      <ion-col size=\"12\" size-md=\"6\">\n        <ion-card href=\"https://github.com/Minima-Protocol\" target=\"_\" class=\"social-card\">\n          <ion-card-header>\n            Github\n          </ion-card-header>\n          <ion-card-content>\n            <img src=\"./assets/community/github.svg\" alt=\"\" class=\"socials\">\n          </ion-card-content>\n      </ion-card>\n    </ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col size=\"12\" size-md=\"6\">\n        <ion-card href=\"https://twitter.com/minima_global\" target=\"_\" class=\"social-card\">\n            <ion-card-header>\n              Twitter\n            </ion-card-header>\n            <ion-card-content>\n              <img src=\"./assets/community/twitter.svg\" alt=\"\" class=\"socials\">\n            </ion-card-content>\n        </ion-card>\n    </ion-col>\n    <ion-col size=\"12\" size-md=\"6\">\n      <ion-card href=\"https://t.me/Minima_Global\" target=\"_\" class=\"social-card\">\n        <ion-card-header>\n          Telegram\n        </ion-card-header>\n        <ion-card-content>\n          <img src=\"./assets/community/telegram.svg\" alt=\"\" class=\"socials\">\n        </ion-card-content>\n    </ion-card>\n  </ion-col>\n</ion-row>\n\n<ion-row>\n  <ion-col size=\"12\" size-md=\"6\">\n      <ion-card href=\"https://medium.com/minima-global\" target=\"_\" class=\"social-card\">\n          <ion-card-header>\n            Medium\n          </ion-card-header>\n          <ion-card-content>\n            <img src=\"./assets/community/medium.svg\" alt=\"\" class=\"socials\">\n          </ion-card-content>\n      </ion-card>\n  </ion-col>\n</ion-row>\n\n</ion-grid>\n\n</ion-content>\n"

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

module.exports = ".small-text {\n  opacity: 1.5;\n}\n\nion-toolbar {\n  --background: var(--card-header-color);\n}\n\n.social-card {\n  cursor: pointer;\n  background-color: rgba(242, 242, 242, 0.5);\n}\n\n.social-card ion-card-header {\n  text-transform: uppercase;\n  letter-spacing: -0.02em;\n  text-align: center;\n  background-color: transparent;\n}\n\n.social-card ion-card-content {\n  text-align: center;\n  -webkit-box-pack: center !important;\n          justify-content: center !important;\n  width: 100%;\n  align-content: center;\n  display: -webkit-box;\n  display: flex;\n}\n\n.socials {\n  width: 5vh;\n}\n\n.social-card:hover {\n  opacity: 0.8;\n  -webkit-transform: scale(0.9);\n          transform: scale(0.9);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGlhc25lbXIvcHJvamVjdHMvV0FMTEVUL21vYmlsZS1hcHAtZnJvbnQtZW5kL2FwcC9zcmMvYXBwL3BhZ2VzL2NvbW11bml0eS9jb21tdW5pdHkucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9jb21tdW5pdHkvY29tbXVuaXR5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7QUNDSjs7QURFRTtFQUNFLHNDQUFBO0FDQ0o7O0FERUU7RUFDRSxlQUFBO0VBQ0EsMENBQUE7QUNDSjs7QURFRTtFQUNFLHlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0FDQ0o7O0FEQ0U7RUFDRSxrQkFBQTtFQUNBLG1DQUFBO1VBQUEsa0NBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7QUNFSjs7QURBRTtFQUNFLFVBQUE7QUNHSjs7QURERTtFQUNFLFlBQUE7RUFDQSw2QkFBQTtVQUFBLHFCQUFBO0FDSUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jb21tdW5pdHkvY29tbXVuaXR5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zbWFsbC10ZXh0IHtcbiAgICBvcGFjaXR5OiAxLjU7XG4gIH1cblxuICBpb24tdG9vbGJhciB7XG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1jYXJkLWhlYWRlci1jb2xvcik7XG4gIH1cbiAgXG4gIC5zb2NpYWwtY2FyZCB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQyLCAyNDIsIDI0MiwgMC41KTtcbiAgfVxuICBcbiAgLnNvY2lhbC1jYXJkIGlvbi1jYXJkLWhlYWRlciB7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMDJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIH1cbiAgLnNvY2lhbC1jYXJkIGlvbi1jYXJkLWNvbnRlbnQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG4gIC5zb2NpYWxzIHtcbiAgICB3aWR0aDogNXZoO1xuICB9XG4gIC5zb2NpYWwtY2FyZDpob3ZlciB7XG4gICAgb3BhY2l0eTogMC44O1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45KTtcbiAgfVxuIiwiLnNtYWxsLXRleHQge1xuICBvcGFjaXR5OiAxLjU7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1jYXJkLWhlYWRlci1jb2xvcik7XG59XG5cbi5zb2NpYWwtY2FyZCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDIsIDI0MiwgMjQyLCAwLjUpO1xufVxuXG4uc29jaWFsLWNhcmQgaW9uLWNhcmQtaGVhZGVyIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjAyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5zb2NpYWwtY2FyZCBpb24tY2FyZC1jb250ZW50IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xuICB3aWR0aDogMTAwJTtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uc29jaWFscyB7XG4gIHdpZHRoOiA1dmg7XG59XG5cbi5zb2NpYWwtY2FyZDpob3ZlciB7XG4gIG9wYWNpdHk6IDAuODtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpO1xufSJdfQ== */"

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