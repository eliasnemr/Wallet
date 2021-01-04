(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-balance-balance-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/components/grid-view/grid-view.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/grid-view/grid-view.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-grid>\n  <ion-row>\n    <ion-col *ngFor=\"let token of tokenArr; let i = index;\" size=\"12\" size-md=\"6\">\n      <ion-card class=\"borders\" *ngIf=\"i <= tokenArr.length\" id=\"token-card\" [ngStyle] = \"{'border-right':  token.script && token.script !== 'RETURN TRUE' ? '3px solid var(--ion-color-primary)' : '1px solid #FAFAFF'}\">\n        <ion-card-header>\n          <ion-row>\n            <ion-col id=\"img-wrapper\" size-lg=\"2\" size-md=\"1\" size-sm=\"1\" size-xs=\"2\">\n              <span *ngIf=\"token.tokenid !== '0x00' && token.icon.length == 0\" style=\"margin-right: 1%\" class=\"e-avatar e-avatar-xsmall\"><img [src]=\"createIcon( token.tokenid )\" /></span>\n              <span *ngIf=\"token.tokenid !== '0x00' && token.icon.length > 0\" style=\"margin-right: 1%\"><img class=\"custom-icon\" [src]=\"token.icon\" /></span>\n              <img *ngIf=\"token.tokenid == '0x00'\" class=\"custom-icon\" alt=\"minima\" src=\"assets/logoreg-s.svg\">\n            </ion-col>\n            <ion-col id=\"token-wrapper\" size-lg=\"4\"  size-md=\"5\" size-sm=\"5\" size-xs=\"4\">\n              \n                <h6 class=\"medium-text\">\n                  {{ token.token }}\n                </h6>\n              \n            </ion-col>\n            <ion-col id=\"balance\" size=\"6\">\n              <span *ngIf=\"token.unconfirmed != '0';\" class=\"confirmed-amount medium-text minima-numeric\">{{ token.sendable + \"/\" + token.unconfirmed  }}</span>\n              <span *ngIf=\"token.unconfirmed == '0';\" class=\"confirmed-amount medium-text minima-numeric\">{{ token.sendable }} </span>\n            </ion-col>\n          </ion-row>\n          <ion-badge \n            *ngIf=\"token.script && token.script !=='RETURN TRUE'\"\n           (click)=\"presentToast('This is a non-fungible token.  It can only be spent whole.')\" \n           class=\"nft\" \n           color=\"primary\">NFT</ion-badge>             \n        </ion-card-header>\n        <ion-card-content>\n          <ion-row>\n            <ion-col size=\"9\">\n              <div class=\"description\" *ngIf=\"token.tokenid == '0x00'\">\n                <p>Minima's official token</p>\n              </div>\n              <div class=\"description\" *ngIf=\"token.tokenid !== '0x00'\">\n                <p>{{ token.description }}</p>\n              </div>\n            </ion-col>\n          </ion-row>\n        </ion-card-content>\n        <ion-icon id=\"details\" routerLink=\"/view-tokens/{{ token.tokenid }}\" alt=\"more\" src=\"assets/md-ellipsis-vertical-outline.svg\"></ion-icon>\n      </ion-card>\n    </ion-col>\n  </ion-row>\n</ion-grid>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/list-view/list-view.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/list-view/list-view.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-card class=\"borders\">\n  <ion-list>\n    <ion-list-header>All Tokens</ion-list-header>\n\n    <ion-item *ngFor=\"let token of tokenArr\" routerLink=\"/view-tokens/{{ token.tokenid }}\">\n      <span slot=\"start\">\n        <span *ngIf=\"token.tokenid !== '0x00' && token.icon.length == 0\" style=\"margin-right: 1%\" class=\"e-avatar e-avatar-xsmall\"><img [src]=\"createIcon( token.tokenid )\" /></span>\n        <span *ngIf=\"token.tokenid !== '0x00' && token.icon.length > 0\" style=\"margin-right: 1%\"><img class=\"custom-icon\" [src]=\"token.icon\" /></span>\n        <img *ngIf=\"token.tokenid == '0x00'\" class=\"custom-icon\" alt=\"minima\" src=\"assets/logoreg-s.svg\">\n      </span>\n      <span id=\"token-name\">{{ token.token }}</span>\n      \n      \n      <ion-label slot=\"end\">\n        <span *ngIf=\"token.unconfirmed != '0';\" class=\"confirmed-amount medium-text minima-numeric\">{{ token.sendable + \"/\" + token.unconfirmed  }}</span>\n        <span *ngIf=\"token.unconfirmed == '0';\" class=\"confirmed-amount medium-text minima-numeric\">{{ token.sendable }} </span>\n      </ion-label>\n    </ion-item>\n    \n    \n  </ion-list>\n</ion-card>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/balance/balance.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/balance/balance.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-app>\n<ion-header>\n  <ion-toolbar class=\"border-b\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Balance\n    </ion-title>\n    <ion-icon (click)=\"presentSettings($event)\" id=\"settings\" slot=\"end\" name=\"options\"></ion-icon>\n  </ion-toolbar>\n</ion-header>\n\n  <ion-content class=\"borders\">\n    <ion-grid *ngIf=\"!hideMe && tokenArr.length > 0\">\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-card *ngIf=\"tokenArr.length > 0\" class=\"borders\" id=\"tutorial-card\">\n            <span (click)=\"hide()\" id=\"dismiss\">&times;</span>\n            <ion-card-header class=\"text-center\">\n              \n              <ion-card-title>\n                <ion-avatar>\n                  <img src=\"assets/confetti.svg\" alt=\"confetti\" id=\"confetti\">\n                </ion-avatar>\n                Welcome to Minima's first official wallet! \n\n              </ion-card-title>\n            </ion-card-header>\n            <ion-card-content>\n              <p>Here you will find your <span style=\"font-family:manrope-bold\">Minima</span> token balance and any <span style=\"font-family: manrope-bold;\">custom</span> token's balance you create or receive.</p>\n            </ion-card-content>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-grid *ngIf=\"tokenArr.length == 0\">\n      <ion-row>\n        <ion-col style=\"display: flex; align-items:center; justify-content:center\" size=\"12\">\n          <ion-label>Fetching tokens...</ion-label>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <div *ngIf=\"displayMode === '1'\">\n      <app-grid-view *ngIf=\"tokenArr && tokenArr.length > 0\" [tokenArr] = \"tokenArr\"></app-grid-view>\n    </div>\n\n    <div *ngIf=\"displayMode === '2'\">\n      <app-list-view *ngIf=\"tokenArr && tokenArr.length > 0\" [tokenArr] = \"tokenArr\"></app-list-view>\n    </div>\n\n  </ion-content>\n\n  <ion-footer class=\"border-t\">\n    <ion-toolbar>\n      <ion-buttons>\n        <ion-button #gimme50Btn class=\"action-btn medium-text\" expand=\"block\" type=\"button\" (click)=\"giveMe50()\">\n          <ion-icon name=\"cash\" slot=\"start\"></ion-icon> Gimme 50\n        </ion-button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-footer>\n</ion-app>"

/***/ }),

/***/ "./src/app/components/grid-view/grid-view.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/grid-view/grid-view.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-row {\n  width: 100%;\n}\n\n#token-card:hover {\n  -webkit-transform: scale(1.01);\n          transform: scale(1.01);\n}\n\nion-card-content {\n  background: var(--ion-m-background);\n  padding-bottom: 0;\n}\n\nion-card-header {\n  font-family: manrope-bold;\n  color: var(--ion-color-tertiary);\n  background-color: var(--ion-gray-two);\n  background: var(--ion-m-background);\n}\n\nimg {\n  width: 100px;\n}\n\n#img-wrapper {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n#img-wrapper img {\n  height: 100%;\n  vertical-align: middle;\n  display: inline-block;\n}\n\n#token-wrapper {\n  white-space: pre;\n  max-height: 100px;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n#token-wrapper h6 {\n  margin: 0;\n  display: inline-block;\n  font-size: 1rem !important;\n  max-width: inherit;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n\n#token-wrapper p {\n  margin: 0;\n}\n\n#details {\n  padding: 0 1% 2.5% 0;\n  float: right;\n  font-size: 1.2rem;\n  cursor: pointer;\n  z-index: 99999;\n  font-family: manrope-light;\n  color: var(--ion-color-primary);\n}\n\n.description {\n  display: inline;\n}\n\n.description p {\n  display: inline-block;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  max-width: 200px;\n}\n\n.custom-icon {\n  height: 25.19px;\n  width: 25.19px;\n  max-height: 25.19px !important;\n  max-width: 25.19px !important;\n}\n\n.nft {\n  cursor: pointer;\n  font-size: 1rem;\n  position: absolute;\n  z-index: 1;\n  top: 0;\n  right: 1%;\n  z-index: 1;\n}\n\n.nft:hover {\n  -webkit-transform: scale(1.1);\n          transform: scale(1.1);\n}\n\n.tokenDescr-modal .modal-wrapper {\n  width: 1500px;\n  height: auto;\n}\n\n.small-text {\n  font-weight: 500;\n  opacity: 0.75;\n}\n\n.image-cropper {\n  width: 25px;\n  height: 25px;\n  max-width: 25px;\n  max-height: 25px;\n  position: relative;\n  overflow: hidden;\n  border-radius: 50%;\n  border: 2px solid #5B5B5D;\n}\n\n.image-cropper img {\n  display: inline;\n  margin: 0 auto;\n  height: 100%;\n  width: auto;\n}\n\n#balance {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n#balance span {\n  float: right;\n}\n\np {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGlhc25lbXIvcHJvamVjdHMvV0FMTEVUL21vYmlsZS1hcHAtZnJvbnQtZW5kL2FwcC9zcmMvYXBwL2NvbXBvbmVudHMvZ3JpZC12aWV3L2dyaWQtdmlldy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9ncmlkLXZpZXcvZ3JpZC12aWV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFFO0VBQ0UsV0FBQTtBQ0NKOztBRENFO0VBQ0UsOEJBQUE7VUFBQSxzQkFBQTtBQ0VKOztBREFFO0VBQ0UsbUNBQUE7RUFDQSxpQkFBQTtBQ0dKOztBRERFO0VBQ0UseUJBQUE7RUFDQSxnQ0FBQTtFQUNBLHFDQUFBO0VBQ0EsbUNBQUE7QUNJSjs7QURGRTtFQUNFLFlBQUE7QUNLSjs7QURIRTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0FDTUo7O0FESkU7RUFDRSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtBQ09KOztBRExFO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7QUNRSjs7QURORTtFQUNFLFNBQUE7RUFDQSxxQkFBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FDU0o7O0FEUEU7RUFDRSxTQUFBO0FDVUo7O0FEUkU7RUFDRSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsMEJBQUE7RUFDQSwrQkFBQTtBQ1dKOztBRFRFO0VBQ0UsZUFBQTtBQ1lKOztBRFZFO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ2FKOztBRFhFO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSw4QkFBQTtFQUNBLDZCQUFBO0FDY0o7O0FEWkU7RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ2VKOztBRGJFO0VBQ0UsNkJBQUE7VUFBQSxxQkFBQTtBQ2dCSjs7QURkRTtFQUNFLGFBQUE7RUFDQSxZQUFBO0FDaUJKOztBRGZFO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0FDa0JKOztBRGhCRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUNtQko7O0FEakJFO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ29CSjs7QURsQkU7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtBQ3FCSjs7QURuQkU7RUFDRSxZQUFBO0FDc0JKOztBRHBCRTtFQUNFLFNBQUE7QUN1QkoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2dyaWQtdmlldy9ncmlkLXZpZXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgIGlvbi1yb3cge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gICN0b2tlbi1jYXJkOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDEpO1xuICB9XG4gIGlvbi1jYXJkLWNvbnRlbnQge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1tLWJhY2tncm91bmQpO1xuICAgIHBhZGRpbmctYm90dG9tOiAwO1xuICB9XG4gIGlvbi1jYXJkLWhlYWRlciB7XG4gICAgZm9udC1mYW1pbHk6IG1hbnJvcGUtYm9sZDtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tZ3JheS10d28pO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1tLWJhY2tncm91bmQpO1xuICB9XG4gIGltZyB7XG4gICAgd2lkdGg6IDEwMHB4O1xuICB9XG4gICNpbWctd3JhcHBlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG4gICNpbWctd3JhcHBlciBpbWcge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgfVxuICAjdG9rZW4td3JhcHBlciB7XG4gICAgd2hpdGUtc3BhY2U6IHByZTtcbiAgICBtYXgtaGVpZ2h0OiAxMDBweDtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbiAgI3Rva2VuLXdyYXBwZXIgaDYge1xuICAgIG1hcmdpbjogMDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgZm9udC1zaXplOiAxLjByZW0haW1wb3J0YW50O1xuICAgIG1heC13aWR0aDogaW5oZXJpdDtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG4gICN0b2tlbi13cmFwcGVyIHAge1xuICAgIG1hcmdpbjowO1xuICB9XG4gICNkZXRhaWxzIHtcbiAgICBwYWRkaW5nOiAwIDElIDIuNSUgMDtcbiAgICBmbG9hdDpyaWdodDtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgei1pbmRleDogOTk5OTk7XG4gICAgZm9udC1mYW1pbHk6IG1hbnJvcGUtbGlnaHQ7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KVxuICB9XG4gIC5kZXNjcmlwdGlvbiB7XG4gICAgZGlzcGxheTogaW5saW5lO1xuICB9XG4gIC5kZXNjcmlwdGlvbiBwIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIG1heC13aWR0aDogMjAwcHg7XG4gIH1cbiAgLmN1c3RvbS1pY29uIHtcbiAgICBoZWlnaHQ6IDI1LjE5cHg7XG4gICAgd2lkdGg6IDI1LjE5cHg7XG4gICAgbWF4LWhlaWdodDogMjUuMTlweCFpbXBvcnRhbnQ7XG4gICAgbWF4LXdpZHRoOiAyNS4xOXB4IWltcG9ydGFudDtcbiAgfVxuICAubmZ0IHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZm9udC1zaXplOiAxLjByZW07XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXg6MTsgXG4gICAgdG9wOiAwO1xuICAgIHJpZ2h0OiAxJTtcbiAgICB6LWluZGV4OjE7XG4gIH1cbiAgLm5mdDpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICB9XG4gIC50b2tlbkRlc2NyLW1vZGFsIC5tb2RhbC13cmFwcGVye1xuICAgIHdpZHRoOiAxNTAwcHg7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICB9XG4gIC5zbWFsbC10ZXh0IHtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIG9wYWNpdHk6IDAuNzU7XG4gIH1cbiAgLmltYWdlLWNyb3BwZXIge1xuICAgIHdpZHRoOiAyNXB4O1xuICAgIGhlaWdodDogMjVweDtcbiAgICBtYXgtd2lkdGg6IDI1cHg7XG4gICAgbWF4LWhlaWdodDogMjVweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYm9yZGVyOiAycHggc29saWQgIzVCNUI1RDtcbiAgfVxuICAuaW1hZ2UtY3JvcHBlciBpbWcge1xuICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IGF1dG87XG4gIH1cbiAgI2JhbGFuY2Uge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuICAjYmFsYW5jZSBzcGFuIHtcbiAgICBmbG9hdDogcmlnaHQ7XG4gIH1cbiAgcCB7XG4gICAgbWFyZ2luOjA7XG4gIH0iLCJpb24tcm93IHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbiN0b2tlbi1jYXJkOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjAxKTtcbn1cblxuaW9uLWNhcmQtY29udGVudCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1tLWJhY2tncm91bmQpO1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbn1cblxuaW9uLWNhcmQtaGVhZGVyIHtcbiAgZm9udC1mYW1pbHk6IG1hbnJvcGUtYm9sZDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1ncmF5LXR3byk7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1tLWJhY2tncm91bmQpO1xufVxuXG5pbWcge1xuICB3aWR0aDogMTAwcHg7XG59XG5cbiNpbWctd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4jaW1nLXdyYXBwZXIgaW1nIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbiN0b2tlbi13cmFwcGVyIHtcbiAgd2hpdGUtc3BhY2U6IHByZTtcbiAgbWF4LWhlaWdodDogMTAwcHg7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuI3Rva2VuLXdyYXBwZXIgaDYge1xuICBtYXJnaW46IDA7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAxcmVtICFpbXBvcnRhbnQ7XG4gIG1heC13aWR0aDogaW5oZXJpdDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbiN0b2tlbi13cmFwcGVyIHAge1xuICBtYXJnaW46IDA7XG59XG5cbiNkZXRhaWxzIHtcbiAgcGFkZGluZzogMCAxJSAyLjUlIDA7XG4gIGZsb2F0OiByaWdodDtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgei1pbmRleDogOTk5OTk7XG4gIGZvbnQtZmFtaWx5OiBtYW5yb3BlLWxpZ2h0O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG4uZGVzY3JpcHRpb24ge1xuICBkaXNwbGF5OiBpbmxpbmU7XG59XG5cbi5kZXNjcmlwdGlvbiBwIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWF4LXdpZHRoOiAyMDBweDtcbn1cblxuLmN1c3RvbS1pY29uIHtcbiAgaGVpZ2h0OiAyNS4xOXB4O1xuICB3aWR0aDogMjUuMTlweDtcbiAgbWF4LWhlaWdodDogMjUuMTlweCAhaW1wb3J0YW50O1xuICBtYXgtd2lkdGg6IDI1LjE5cHggIWltcG9ydGFudDtcbn1cblxuLm5mdCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDE7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDElO1xuICB6LWluZGV4OiAxO1xufVxuXG4ubmZ0OmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xufVxuXG4udG9rZW5EZXNjci1tb2RhbCAubW9kYWwtd3JhcHBlciB7XG4gIHdpZHRoOiAxNTAwcHg7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLnNtYWxsLXRleHQge1xuICBmb250LXdlaWdodDogNTAwO1xuICBvcGFjaXR5OiAwLjc1O1xufVxuXG4uaW1hZ2UtY3JvcHBlciB7XG4gIHdpZHRoOiAyNXB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIG1heC13aWR0aDogMjVweDtcbiAgbWF4LWhlaWdodDogMjVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogMnB4IHNvbGlkICM1QjVCNUQ7XG59XG5cbi5pbWFnZS1jcm9wcGVyIGltZyB7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IGF1dG87XG59XG5cbiNiYWxhbmNlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbiNiYWxhbmNlIHNwYW4ge1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbnAge1xuICBtYXJnaW46IDA7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/grid-view/grid-view.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/grid-view/grid-view.component.ts ***!
  \*************************************************************/
/*! exports provided: GridViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridViewComponent", function() { return GridViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var spark_md5__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! spark-md5 */ "./node_modules/spark-md5/spark-md5.js");
/* harmony import */ var spark_md5__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(spark_md5__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");




let GridViewComponent = class GridViewComponent {
    constructor(toastController) {
        this.toastController = toastController;
        this.tokenArr = [];
    }
    ngOnInit() { }
    createIcon(tokenid) {
        return this.avatar = 'https://www.gravatar.com/avatar/' + spark_md5__WEBPACK_IMPORTED_MODULE_2__["hash"](tokenid) + '?d=identicon';
    }
    presentToast(msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: msg,
                duration: 2000
            });
            toast.present();
        });
    }
};
GridViewComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ToastController"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], GridViewComponent.prototype, "tokenArr", void 0);
GridViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-grid-view',
        template: __webpack_require__(/*! raw-loader!./grid-view.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/grid-view/grid-view.component.html"),
        styles: [__webpack_require__(/*! ./grid-view.component.scss */ "./src/app/components/grid-view/grid-view.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ToastController"]])
], GridViewComponent);



/***/ }),

/***/ "./src/app/components/list-view/list-view.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/list-view/list-view.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".custom-icon {\n  width: 30px;\n  height: 30px;\n}\n\n.item-avatar {\n  width: 100% !important;\n  height: 100% !important;\n  max-width: 75px !important;\n  max-height: 75px !important;\n}\n\n#token-name {\n  margin: 0;\n  display: inline-block;\n  white-space: nowrap;\n  font-size: 1rem !important;\n  max-width: inherit;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  font-family: manrope-bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGlhc25lbXIvcHJvamVjdHMvV0FMTEVUL21vYmlsZS1hcHAtZnJvbnQtZW5kL2FwcC9zcmMvYXBwL2NvbXBvbmVudHMvbGlzdC12aWV3L2xpc3Qtdmlldy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9saXN0LXZpZXcvbGlzdC12aWV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNDSjs7QURDQTtFQUNJLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSwwQkFBQTtFQUNBLDJCQUFBO0FDRUo7O0FEQUE7RUFDSSxTQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QUNHSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGlzdC12aWV3L2xpc3Qtdmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jdXN0b20taWNvbiB7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xufVxuLml0ZW0tYXZhdGFyIHtcbiAgICB3aWR0aDoxMDAlICFpbXBvcnRhbnQ7ICBcbiAgICBoZWlnaHQgOiAxMDAlICFpbXBvcnRhbnQ7ICBcbiAgICBtYXgtd2lkdGg6IDc1cHggIWltcG9ydGFudDsgIC8vYW55IHNpemVcbiAgICBtYXgtaGVpZ2h0OiA3NXB4ICFpbXBvcnRhbnQ7IC8vYW55IHNpemUgXG59XG4jdG9rZW4tbmFtZSB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIGZvbnQtc2l6ZTogMS4wcmVtIWltcG9ydGFudDtcbiAgICBtYXgtd2lkdGg6IGluaGVyaXQ7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBmb250LWZhbWlseTogbWFucm9wZS1ib2xkO1xufSIsIi5jdXN0b20taWNvbiB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG59XG5cbi5pdGVtLWF2YXRhciB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xuICBtYXgtd2lkdGg6IDc1cHggIWltcG9ydGFudDtcbiAgbWF4LWhlaWdodDogNzVweCAhaW1wb3J0YW50O1xufVxuXG4jdG9rZW4tbmFtZSB7XG4gIG1hcmdpbjogMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBmb250LXNpemU6IDFyZW0gIWltcG9ydGFudDtcbiAgbWF4LXdpZHRoOiBpbmhlcml0O1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZm9udC1mYW1pbHk6IG1hbnJvcGUtYm9sZDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/list-view/list-view.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/list-view/list-view.component.ts ***!
  \*************************************************************/
/*! exports provided: ListViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListViewComponent", function() { return ListViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var spark_md5__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! spark-md5 */ "./node_modules/spark-md5/spark-md5.js");
/* harmony import */ var spark_md5__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(spark_md5__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let ListViewComponent = class ListViewComponent {
    constructor() {
        this.tokenArr = [];
    }
    ngOnInit() { }
    createIcon(tokenid) {
        return this.avatar = 'https://www.gravatar.com/avatar/' + spark_md5__WEBPACK_IMPORTED_MODULE_1__["hash"](tokenid) + '?d=identicon';
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], ListViewComponent.prototype, "tokenArr", void 0);
ListViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-list-view',
        template: __webpack_require__(/*! raw-loader!./list-view.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/list-view/list-view.component.html"),
        styles: [__webpack_require__(/*! ./list-view.component.scss */ "./src/app/components/list-view/list-view.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ListViewComponent);



/***/ }),

/***/ "./src/app/pages/balance/balance.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/balance/balance.module.ts ***!
  \*************************************************/
/*! exports provided: BalancePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BalancePageModule", function() { return BalancePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _balance_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./balance.page */ "./src/app/pages/balance/balance.page.ts");
/* harmony import */ var _components_grid_view_grid_view_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/grid-view/grid-view.component */ "./src/app/components/grid-view/grid-view.component.ts");
/* harmony import */ var _components_list_view_list_view_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../components/list-view/list-view.component */ "./src/app/components/list-view/list-view.component.ts");









const routes = [
    {
        path: '',
        component: _balance_page__WEBPACK_IMPORTED_MODULE_6__["BalancePage"],
        children: [
            {
                path: 'view-txn',
                loadChildren: () => __webpack_require__.e(/*! import() | view-tokens-view-tokens-module */ "default~pages-balance-view-tokens-view-tokens-module~view-tokens-view-tokens-module").then(__webpack_require__.bind(null, /*! ./view-tokens/view-tokens.module */ "./src/app/pages/balance/view-tokens/view-tokens.module.ts")).then(m => m.ViewTokensPageModule)
            }
        ]
    }
];
let BalancePageModule = class BalancePageModule {
};
BalancePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_balance_page__WEBPACK_IMPORTED_MODULE_6__["BalancePage"], _components_list_view_list_view_component__WEBPACK_IMPORTED_MODULE_8__["ListViewComponent"], _components_grid_view_grid_view_component__WEBPACK_IMPORTED_MODULE_7__["GridViewComponent"]]
    })
], BalancePageModule);



/***/ }),

/***/ "./src/app/pages/balance/balance.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/balance/balance.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-toolbar {\n  --background: var(--ion-m-background);\n  font-family: manrope-bold;\n  color: var(--ion-color-tertiary);\n}\nion-toolbar ion-title {\n  font-size: 1rem;\n}\nion-toolbar ion-buttons ion-menu-button {\n  font-size: 1rem;\n  color: var(--ion-color-tertiary);\n}\nion-row {\n  width: 100%;\n}\n#tutorial-card:hover {\n  -webkit-transform: scale(1.01);\n          transform: scale(1.01);\n}\nion-card-content {\n  background: var(--ion-m-background);\n}\nion-card-header {\n  font-family: manrope-bold;\n  color: var(--ion-color-tertiary);\n  background-color: var(--ion-gray-two);\n  background: var(--ion-m-background);\n}\nion-footer ion-toolbar ion-buttons ion-button {\n  width: 100%;\n  height: 58px;\n  text-transform: none;\n  font-family: manrope-bold;\n}\n#dismiss {\n  cursor: pointer;\n  position: absolute;\n  right: 2.5%;\n  z-index: 99999;\n  font-size: 2rem;\n}\n#settings {\n  margin-right: 5%;\n  cursor: pointer;\n}\nion-card-title {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: left;\n          justify-content: left;\n}\nion-avatar {\n  display: inline !important;\n  margin-right: 2.5%;\n}\nion-avatar img {\n  display: inline;\n  width: 75px;\n  height: inherit;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGlhc25lbXIvcHJvamVjdHMvV0FMTEVUL21vYmlsZS1hcHAtZnJvbnQtZW5kL2FwcC9zcmMvYXBwL3BhZ2VzL2JhbGFuY2UvYmFsYW5jZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2JhbGFuY2UvYmFsYW5jZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0NBQUE7QUNDRjtBREFFO0VBQ0UsZUFBQTtBQ0VKO0FEQUU7RUFDRSxlQUFBO0VBQ0EsZ0NBQUE7QUNFSjtBRENBO0VBQ0UsV0FBQTtBQ0VGO0FEQUE7RUFDRSw4QkFBQTtVQUFBLHNCQUFBO0FDR0Y7QUREQTtFQUNFLG1DQUFBO0FDSUY7QURGQTtFQUNFLHlCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxxQ0FBQTtFQUNBLG1DQUFBO0FDS0Y7QURIQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSx5QkFBQTtBQ01KO0FESkE7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUNPRjtBRExBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FDUUY7QUROQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxzQkFBQTtVQUFBLHFCQUFBO0FDU0Y7QUROQTtFQUNFLDBCQUFBO0VBQ0Esa0JBQUE7QUNTRjtBRFBBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDVUYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9iYWxhbmNlL2JhbGFuY2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1tLWJhY2tncm91bmQpO1xuICBmb250LWZhbWlseTogbWFucm9wZS1ib2xkO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5KTtcbiAgaW9uLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDEuMHJlbTtcbiAgfVxuICBpb24tYnV0dG9ucyBpb24tbWVudS1idXR0b24ge1xuICAgIGZvbnQtc2l6ZTogMS4wcmVtO1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnkpO1xuICB9XG59XG5pb24tcm93IHtcbiAgd2lkdGg6IDEwMCU7XG59XG4jdHV0b3JpYWwtY2FyZDpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wMSk7XG59XG5pb24tY2FyZC1jb250ZW50IHtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLW0tYmFja2dyb3VuZCk7XG59XG5pb24tY2FyZC1oZWFkZXIge1xuICBmb250LWZhbWlseTogbWFucm9wZS1ib2xkO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWdyYXktdHdvKTtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLW0tYmFja2dyb3VuZCk7XG59XG5pb24tZm9vdGVyIGlvbi10b29sYmFyIGlvbi1idXR0b25zIGlvbi1idXR0b24ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNThweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICBmb250LWZhbWlseTogbWFucm9wZS1ib2xkO1xuIH1cbiNkaXNtaXNzIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAyLjUlO1xuICB6LWluZGV4OiA5OTk5OTtcbiAgZm9udC1zaXplOiAyLjByZW07XG59XG4jc2V0dGluZ3Mge1xuICBtYXJnaW4tcmlnaHQ6IDUlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5pb24tY2FyZC10aXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogbGVmdDtcbiAgXG59XG5pb24tYXZhdGFyIHtcbiAgZGlzcGxheTogaW5saW5lICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1yaWdodDogMi41JTtcbn1cbmlvbi1hdmF0YXIgaW1nIHtcbiAgZGlzcGxheTogaW5saW5lO1xuICB3aWR0aDogNzVweDtcbiAgaGVpZ2h0OiBpbmhlcml0O1xufSIsImlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tbS1iYWNrZ3JvdW5kKTtcbiAgZm9udC1mYW1pbHk6IG1hbnJvcGUtYm9sZDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeSk7XG59XG5pb24tdG9vbGJhciBpb24tdGl0bGUge1xuICBmb250LXNpemU6IDFyZW07XG59XG5pb24tdG9vbGJhciBpb24tYnV0dG9ucyBpb24tbWVudS1idXR0b24ge1xuICBmb250LXNpemU6IDFyZW07XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnkpO1xufVxuXG5pb24tcm93IHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbiN0dXRvcmlhbC1jYXJkOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjAxKTtcbn1cblxuaW9uLWNhcmQtY29udGVudCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1tLWJhY2tncm91bmQpO1xufVxuXG5pb24tY2FyZC1oZWFkZXIge1xuICBmb250LWZhbWlseTogbWFucm9wZS1ib2xkO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWdyYXktdHdvKTtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLW0tYmFja2dyb3VuZCk7XG59XG5cbmlvbi1mb290ZXIgaW9uLXRvb2xiYXIgaW9uLWJ1dHRvbnMgaW9uLWJ1dHRvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDU4cHg7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBmb250LWZhbWlseTogbWFucm9wZS1ib2xkO1xufVxuXG4jZGlzbWlzcyB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMi41JTtcbiAgei1pbmRleDogOTk5OTk7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbn1cblxuI3NldHRpbmdzIHtcbiAgbWFyZ2luLXJpZ2h0OiA1JTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5pb24tY2FyZC10aXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogbGVmdDtcbn1cblxuaW9uLWF2YXRhciB7XG4gIGRpc3BsYXk6IGlubGluZSAhaW1wb3J0YW50O1xuICBtYXJnaW4tcmlnaHQ6IDIuNSU7XG59XG5cbmlvbi1hdmF0YXIgaW1nIHtcbiAgZGlzcGxheTogaW5saW5lO1xuICB3aWR0aDogNzVweDtcbiAgaGVpZ2h0OiBpbmhlcml0O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/balance/balance.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/balance/balance.page.ts ***!
  \***********************************************/
/*! exports provided: BalancePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BalancePage", function() { return BalancePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _service_userconfig_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../service/userconfig.service */ "./src/app/service/userconfig.service.ts");
/* harmony import */ var _components_pop_settings_pop_settings_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../components/pop-settings/pop-settings.component */ "./src/app/components/pop-settings/pop-settings.component.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _service_minima_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/minima-api.service */ "./src/app/service/minima-api.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _service_balance_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../service/balance.service */ "./src/app/service/balance.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var spark_md5__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! spark-md5 */ "./node_modules/spark-md5/spark-md5.js");
/* harmony import */ var spark_md5__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(spark_md5__WEBPACK_IMPORTED_MODULE_9__);










// declare var Minima: any;
let BalancePage = class BalancePage {
    constructor(service, api, alertController, route, toastController, popoverController, userConfigService, ngZone) {
        this.service = service;
        this.api = api;
        this.alertController = alertController;
        this.route = route;
        this.toastController = toastController;
        this.popoverController = popoverController;
        this.userConfigService = userConfigService;
        this.ngZone = ngZone;
        this.displayMode = '1';
        this.hideMe = false;
        this.tokenArr = [];
        this.tokenSpoof = [];
        // - vars
        this.lastJSON = '';
        this.MINIMA = '0x00';
    }
    ionViewWillEnter() {
        setTimeout(() => {
            this.pullInTokens();
        }, 1000);
        this.userConfigService.userConfig.subscribe((res) => {
            // ngZone re-renders onChange
            this.ngZone.run(() => {
                this.displayMode = res.tokenDisplayMode;
            });
        });
    }
    ngOnInit() { }
    presentSettings(ev) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: _components_pop_settings_pop_settings_component__WEBPACK_IMPORTED_MODULE_2__["PopSettingsComponent"],
                cssClass: 'my-custom-class',
                event: ev,
                translucent: true
            });
            return yield popover.present();
        });
    }
    giveMe50() {
        this.api.giveMe50().then((res) => {
            if (res.status === true) {
                this.presentAlert(res.message, 'Success.');
                this.gimme50Btn.disabled = true;
                setTimeout(() => {
                    this.gimme50Btn.disabled = false;
                }, (10 * 60));
            }
            else {
                this.presentAlert(res.message, 'Something went wrong.');
            }
        });
    }
    ionViewWillLeave() {
        this.balanceSubscription.unsubscribe(); // unsubs
    }
    // hide welcomeCard
    hide() {
        this.hideMe = true;
    }
    loadData(event) {
        setTimeout(() => {
            console.log('Done');
            event.target.complete();
            // App logic to determine if all data is loaded
            // and disable the infinite scroll
            if (this.tokenArr.length == 5) {
                event.target.disabled = true;
            }
        }, 500);
    }
    toggleInfiniteScroll() {
        this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
    }
    presentToast(msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: msg,
                duration: 2000
            });
            toast.present();
        });
    }
    presentAlert(msg, hdr) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: hdr,
                message: msg,
                buttons: ['Cancel', 'Ok']
            });
            yield alert.present();
        });
    }
    closeSliding(slidingItem) {
        slidingItem.close();
    }
    createIdenticon(tokenid) {
        return this.avatar = 'https://www.gravatar.com/avatar/' + spark_md5__WEBPACK_IMPORTED_MODULE_9__["hash"](tokenid) + '?d=identicon';
    }
    sendTokenOver(slidingItem, id) {
        slidingItem.close();
        this.route.navigate(['/send-funds/' + id]);
    }
    // check if it's a token, or a Mini
    instanceOfToken(data) {
        return 'script' in data;
    }
    pullInTokens() {
        this.balanceSubscription = this.service.updatedBalance
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((balance) => {
            const tokenArr = [];
            for (const key in balance) {
                if (balance.hasOwnProperty(key)) {
                    if (this.instanceOfToken(balance[key])) {
                        const element = balance[key];
                        tokenArr.push({
                            tokenid: element.tokenid,
                            token: element.token,
                            description: element.description,
                            icon: element.icon,
                            proof: element.proof,
                            total: element.total,
                            script: element.script,
                            coinid: element.coinid,
                            totalamount: element.totalamount,
                            scale: element.scale,
                            confirmed: element.confirmed,
                            unconfirmed: element.unconfirmed,
                            mempool: element.mempool,
                            sendable: element.sendable
                        });
                    }
                    else {
                        const element = balance[key];
                        // add Minima always to the top
                        tokenArr.pop(); // pop it
                        this.service.update(tokenArr, {
                            tokenid: element.tokenid,
                            token: element.token,
                            total: element.total,
                            confirmed: element.confirmed,
                            unconfirmed: element.unconfirmed,
                            mempool: element.mempool,
                            sendable: element.sendable
                        });
                    }
                }
            }
            return tokenArr;
        }))
            .subscribe(responseData => {
            // check if changed
            if (this.lastJSON !== JSON.stringify(responseData)) {
                this.tokenArr = [...responseData];
                this.lastJSON = JSON.stringify(responseData);
            }
        });
    }
};
BalancePage.ctorParameters = () => [
    { type: _service_balance_service__WEBPACK_IMPORTED_MODULE_7__["BalanceService"] },
    { type: _service_minima_api_service__WEBPACK_IMPORTED_MODULE_4__["MinimaApiService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["PopoverController"] },
    { type: _service_userconfig_service__WEBPACK_IMPORTED_MODULE_1__["UserconfigService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["NgZone"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonInfiniteScroll"], { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonInfiniteScroll"])
], BalancePage.prototype, "infiniteScroll", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"])('gimme50Btn', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonButton"])
], BalancePage.prototype, "gimme50Btn", void 0);
BalancePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-balance',
        template: __webpack_require__(/*! raw-loader!./balance.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/balance/balance.page.html"),
        styles: [__webpack_require__(/*! ./balance.page.scss */ "./src/app/pages/balance/balance.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_balance_service__WEBPACK_IMPORTED_MODULE_7__["BalanceService"],
        _service_minima_api_service__WEBPACK_IMPORTED_MODULE_4__["MinimaApiService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["PopoverController"],
        _service_userconfig_service__WEBPACK_IMPORTED_MODULE_1__["UserconfigService"],
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["NgZone"]])
], BalancePage);



/***/ })

}]);
//# sourceMappingURL=pages-balance-balance-module-es2015.js.map