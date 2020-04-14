(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-splash-screen-splash-screen-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/splash-screen/splash-screen.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/splash-screen/splash-screen.page.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n<body>\n  <div>\n    <meta charset=\"utf-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n    <link rel=\"stylesheet\" href=\"./style.css\">\n    <title>Splash</title>\n    \n    <?xml version=\"1.0\" encoding=\"utf-8\"?>\n    <!-- Generator: Adobe Illustrator 23.1.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\n    <svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n      viewBox=\"0 0 205.9 185.7\" style=\"enable-background:new 0 0 205.9 185.7;\" xml:space=\"preserve\">\n    <style type=\"text/css\">\n      .st0{fill:#231F20;}\n      .st1{fill:#FF671D;}\n      .st2{fill:#00ABC7;}\n      .st3{fill:#929396;}\n    </style>\n    <g>\n      <polygon class=\"st0\" points=\"99.8,41.3 144.3,41.3 178.8,185.7 134.3,185.7\"/>\n      <polygon class=\"st0\" points=\"82.8,16.5 111.7,185.7 67.2,185.7 38.3,16.5\"/>\n      <polygon class=\"st1\" points=\"0,185.7 44.5,185.7 82.8,16.5 42,0 \t\"/>\n      <polygon class=\"st2\" points=\"67.2,185.7 111.7,185.7 144.3,41.3 103.5,24.9\"/>\n      <polygon class=\"st3\" points=\"165.1,49.7 134.3,185.7 178.8,185.7 205.9,66.2\"/>\n    </g>\n    </svg>\n  </div>\n</body>\n</html>\n"

/***/ }),

/***/ "./src/app/pages/splash-screen/splash-screen.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/splash-screen/splash-screen.module.ts ***!
  \*************************************************************/
/*! exports provided: SplashScreenPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplashScreenPageModule", function() { return SplashScreenPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _splash_screen_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./splash-screen.page */ "./src/app/pages/splash-screen/splash-screen.page.ts");







var routes = [
    {
        path: '',
        component: _splash_screen_page__WEBPACK_IMPORTED_MODULE_6__["SplashScreenPage"]
    }
];
var SplashScreenPageModule = /** @class */ (function () {
    function SplashScreenPageModule() {
    }
    SplashScreenPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_splash_screen_page__WEBPACK_IMPORTED_MODULE_6__["SplashScreenPage"]]
        })
    ], SplashScreenPageModule);
    return SplashScreenPageModule;
}());



/***/ }),

/***/ "./src/app/pages/splash-screen/splash-screen.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/splash-screen/splash-screen.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  text-align: center;\n}\n\n.st0 {\n  -webkit-animation: rect 1s ease;\n          animation: rect 1s ease;\n}\n\n@-webkit-keyframes rect {\n  from {\n    -webkit-transform: rotateZ(0deg);\n            transform: rotateZ(0deg);\n  }\n  to {\n    -webkit-transform: rotateZ(360deg);\n            transform: rotateZ(360deg);\n  }\n}\n\n@keyframes rect {\n  from {\n    -webkit-transform: rotateZ(0deg);\n            transform: rotateZ(0deg);\n  }\n  to {\n    -webkit-transform: rotateZ(360deg);\n            transform: rotateZ(360deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGlhcy9Qcm9qZWN0cy9taW5pbWFjb3JlL21vYmlsZS1hcHAtZnJvbnQtZW5kL2FwcC9zcmMvYXBwL3BhZ2VzL3NwbGFzaC1zY3JlZW4vc3BsYXNoLXNjcmVlbi5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3NwbGFzaC1zY3JlZW4vc3BsYXNoLXNjcmVlbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFBO0VBQ0EsU0FBQTtFQUNBLHNCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxrQkFBQTtBQ0VKOztBRENBO0VBQ0ksK0JBQUE7VUFBQSx1QkFBQTtBQ0VKOztBRENBO0VBQ0k7SUFDSSxnQ0FBQTtZQUFBLHdCQUFBO0VDRU47RURBRTtJQUNJLGtDQUFBO1lBQUEsMEJBQUE7RUNFTjtBQUNGOztBRFJBO0VBQ0k7SUFDSSxnQ0FBQTtZQUFBLHdCQUFBO0VDRU47RURBRTtJQUNJLGtDQUFBO1lBQUEsMEJBQUE7RUNFTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc3BsYXNoLXNjcmVlbi9zcGxhc2gtc2NyZWVuLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5ib2R5IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5zdDAge1xuICAgIGFuaW1hdGlvbjogcmVjdCAxcyBlYXNlO1xufVxuXG5Aa2V5ZnJhbWVzIHJlY3Qge1xuICAgIGZyb20ge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVooMGRlZyk7XG4gICAgfVxuICAgIHRvIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVaKDM2MGRlZyk7XG4gICAgfVxufSIsIioge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmJvZHkge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5zdDAge1xuICBhbmltYXRpb246IHJlY3QgMXMgZWFzZTtcbn1cblxuQGtleWZyYW1lcyByZWN0IHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVaKDBkZWcpO1xuICB9XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVooMzYwZGVnKTtcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/splash-screen/splash-screen.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/splash-screen/splash-screen.page.ts ***!
  \***********************************************************/
/*! exports provided: SplashScreenPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplashScreenPage", function() { return SplashScreenPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SplashScreenPage = /** @class */ (function () {
    function SplashScreenPage() {
    }
    SplashScreenPage.prototype.ngOnInit = function () {
    };
    SplashScreenPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-splash-screen',
            template: __webpack_require__(/*! raw-loader!./splash-screen.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/splash-screen/splash-screen.page.html"),
            styles: [__webpack_require__(/*! ./splash-screen.page.scss */ "./src/app/pages/splash-screen/splash-screen.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SplashScreenPage);
    return SplashScreenPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-splash-screen-splash-screen-module-es5.js.map