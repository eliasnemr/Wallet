(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-community-community-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/community/community.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/community/community.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"page-header ion-no-border\">\n  <ion-toolbar>\n    <!-- <ion-menu-button class=\"menu-icon\" slot=\"start\"></ion-menu-button> -->\n    <ion-title>\n      <ion-item id=\"title\" lines=\"none\" class=\"ion-no-padding\">\n        <ion-icon class=\"menu-btn\" (click)=\"openMenu()\" src=\"assets/menuIcon.svg\"></ion-icon>\n        Community\n      </ion-item>\n      <ion-item id=\"subtitle\" class=\"breadcrumb ion-no-padding\" lines=\"none\">\n        Join our community and get involved \n      </ion-item>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <ion-list class=\"ion-no-padding\">\n    <ion-item href=\"https://minima.global/\" target=\"_\" class=\"ion-no-padding\" lines=\"none\">\n      <ion-avatar>\n        <ion-icon class=\"social-icon\" src=\"assets/community/websiteIcon.svg\"></ion-icon>\n      </ion-avatar>\n      <ion-label>\n        <h6 class=\"title\">Website</h6>\n        <p class=\"value\">Stay Connected</p>\n      </ion-label>\n    </ion-item>\n\n    <ion-item href=\"https://github.com/Minima-Protocol\" target=\"_\" class=\"ion-no-padding\" lines=\"none\">\n      <ion-avatar>\n        <ion-icon class=\"social-icon\" src=\"assets/community/githubLogo.svg\"></ion-icon>\n      </ion-avatar>\n      <ion-label>\n        <h6 class=\"title\">Github </h6>\n        <p class=\"value\">Contribute to the codebase</p>\n      </ion-label>\n    </ion-item>\n\n    <ion-item href=\"https://twitter.com/minima_global\" target=\"_\" class=\"ion-no-padding\" lines=\"none\">\n      <ion-avatar>\n        <ion-icon class=\"social-icon\" src=\"assets/community/twitterLogo.svg\"></ion-icon>\n      </ion-avatar>\n      <ion-label>\n        <h6 class=\"title\">Twitter</h6>\n        <p class=\"value\">Follow @Minima_Global</p>\n      </ion-label>\n    </ion-item>\n\n    <ion-item href=\"https://t.me/Minima_Global\" target=\"_\" class=\"ion-no-padding\" lines=\"none\">\n      <ion-avatar>\n        <ion-icon class=\"social-icon\" src=\"assets/community/telegramLogo.svg\"></ion-icon>\n      </ion-avatar>\n      <ion-label>\n        <h6 class=\"title\">Telegram</h6>\n        <p class=\"value\">Stay up to date</p>\n      </ion-label>\n    </ion-item>\n    \n    <ion-item href=\"https://www.youtube.com/channel/UCDe2j57uQrUVtVizFbDpsoQ\" target=\"_\" class=\"ion-no-padding\" lines=\"none\">\n      <ion-avatar>\n        <ion-icon class=\"social-icon\" src=\"assets/community/youTubeLogo.svg\"></ion-icon>\n      </ion-avatar>\n      <ion-label>\n        <h6 class=\"title\">Youtube</h6>\n        <p class=\"value\">Watch us in action</p>\n      </ion-label>\n    </ion-item>\n\n    <ion-item href=\"https://medium.com/minima-global\" target=\"_\" class=\"ion-no-padding\" lines=\"none\">\n      <ion-avatar>\n        <ion-icon class=\"social-icon\" src=\"assets/community/mediumLogo.svg\"></ion-icon>\n      </ion-avatar>\n      <ion-label>\n        <h6 class=\"title\">Medium</h6>\n        <p class=\"value\">Read our latest posts</p>\n      </ion-label>\n    </ion-item>\n\n    <ion-item href=\"https://discord.com/invite/SgvQ6mc\" target=\"_\" class=\"ion-no-padding\" lines=\"none\">\n      <ion-avatar>\n        <ion-icon class=\"social-icon\" src=\"assets/community/discordLogo.svg\"></ion-icon>\n      </ion-avatar>\n      <ion-label>\n        <h6 class=\"title\">Discord</h6>\n        <p class=\"value\">Join the community</p>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>\n\n<ion-footer class=\"border-t\">\n  <ion-button (click)=\"giveMe50()\" class=\"gimme50 no-ripple\" fill=\"none\">\n    Gimme 50\n  </ion-button>\n</ion-footer>\n"

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
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
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

module.exports = "ion-icon.social-icon {\n  width: 40px;\n  height: 40px;\n}\n\nion-avatar {\n  margin-right: 27px;\n}\n\n.title {\n  font-family: manrope-bold;\n  font-size: 14px;\n  color: var(--ion-color-color);\n}\n\n.value {\n  font-family: manrope-regular;\n  opacity: 0.7;\n  color: var(--ion-color-color);\n}\n\nion-list ion-item ion-avatar {\n  margin-right: 27px;\n}\n\nion-list ion-item {\n  --padding-start: 27px;\n  opacity: 1;\n  --background-activated: var(--ion-color-token)!important;\n  --background-activated-opacity: 0.2 !important;\n  --background-hover: var(--ion-color-item-hover);\n  --background-hover-opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGlhc25lbXIvcHJvamVjdHMvV2FsbGV0L21vYmlsZS1hcHAtZnJvbnQtZW5kL2FwcC9zcmMvYXBwL3BhZ2VzL2NvbW11bml0eS9jb21tdW5pdHkucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9jb21tdW5pdHkvY29tbXVuaXR5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDQUY7O0FERUE7RUFDRSxrQkFBQTtBQ0NGOztBRENBO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0VBQ0EsNkJBQUE7QUNFRjs7QURBQTtFQUNFLDRCQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0FDR0Y7O0FEREE7RUFDRSxrQkFBQTtBQ0lGOztBREZBO0VBQ0UscUJBQUE7RUFDQSxVQUFBO0VBQ0Esd0RBQUE7RUFDQSw4Q0FBQTtFQUNBLCtDQUFBO0VBQ0EsNkJBQUE7QUNLRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbW11bml0eS9jb21tdW5pdHkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pb24taWNvbi5zb2NpYWwtaWNvbiB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG59XG5pb24tYXZhdGFyIHtcbiAgbWFyZ2luLXJpZ2h0OiAyN3B4O1xufVxuLnRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IG1hbnJvcGUtYm9sZDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWNvbG9yKTtcbn1cbi52YWx1ZSB7XG4gIGZvbnQtZmFtaWx5OiBtYW5yb3BlLXJlZ3VsYXI7XG4gIG9wYWNpdHk6IDAuNztcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1jb2xvcik7XG59XG5pb24tbGlzdCBpb24taXRlbSBpb24tYXZhdGFyIHtcbiAgbWFyZ2luLXJpZ2h0OiAyN3B4O1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDI3cHg7XG4gIG9wYWNpdHk6IDE7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHZhcigtLWlvbi1jb2xvci10b2tlbikhaW1wb3J0YW50O1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkLW9wYWNpdHk6IDAuMiAhaW1wb3J0YW50O1xuICAtLWJhY2tncm91bmQtaG92ZXI6IHZhcigtLWlvbi1jb2xvci1pdGVtLWhvdmVyKTtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyLW9wYWNpdHk6IDE7XG59XG5cbiIsImlvbi1pY29uLnNvY2lhbC1pY29uIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbn1cblxuaW9uLWF2YXRhciB7XG4gIG1hcmdpbi1yaWdodDogMjdweDtcbn1cblxuLnRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IG1hbnJvcGUtYm9sZDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWNvbG9yKTtcbn1cblxuLnZhbHVlIHtcbiAgZm9udC1mYW1pbHk6IG1hbnJvcGUtcmVndWxhcjtcbiAgb3BhY2l0eTogMC43O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWNvbG9yKTtcbn1cblxuaW9uLWxpc3QgaW9uLWl0ZW0gaW9uLWF2YXRhciB7XG4gIG1hcmdpbi1yaWdodDogMjdweDtcbn1cblxuaW9uLWxpc3QgaW9uLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDI3cHg7XG4gIG9wYWNpdHk6IDE7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHZhcigtLWlvbi1jb2xvci10b2tlbikhaW1wb3J0YW50O1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkLW9wYWNpdHk6IDAuMiAhaW1wb3J0YW50O1xuICAtLWJhY2tncm91bmQtaG92ZXI6IHZhcigtLWlvbi1jb2xvci1pdGVtLWhvdmVyKTtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyLW9wYWNpdHk6IDE7XG59Il19 */"

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
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _service_minima_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../service/minima-api.service */ "./src/app/service/minima-api.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");




let CommunityPage = class CommunityPage {
    constructor(menu, api, alertController) {
        this.menu = menu;
        this.api = api;
        this.alertController = alertController;
    }
    ngOnInit() {
    }
    openMenu() {
        this.menu.open();
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
};
CommunityPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["MenuController"] },
    { type: _service_minima_api_service__WEBPACK_IMPORTED_MODULE_2__["MinimaApiService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"] }
];
CommunityPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-community',
        template: __webpack_require__(/*! raw-loader!./community.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/community/community.page.html"),
        styles: [__webpack_require__(/*! ./community.page.scss */ "./src/app/pages/community/community.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["MenuController"], _service_minima_api_service__WEBPACK_IMPORTED_MODULE_2__["MinimaApiService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"]])
], CommunityPage);



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



/***/ })

}]);
//# sourceMappingURL=pages-community-community-module-es2015.js.map