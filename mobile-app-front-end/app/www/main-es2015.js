(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./components/historymodal/historymodal.module": [
		"./src/app/components/historymodal/historymodal.module.ts",
		"components-historymodal-historymodal-module"
	],
	"./components/historytokenmodal/historytokenmodal.module": [
		"./src/app/components/historytokenmodal/historytokenmodal.module.ts",
		"components-historytokenmodal-historytokenmodal-module"
	],
	"./pages/balance/balance.module": [
		"./src/app/pages/balance/balance.module.ts",
		"common",
		"pages-balance-balance-module"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ion-action-sheet-controller_8.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-action-sheet-controller_8.entry.js",
		"common",
		0
	],
	"./ion-action-sheet-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-action-sheet-ios.entry.js",
		"common",
		1
	],
	"./ion-action-sheet-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-action-sheet-md.entry.js",
		"common",
		2
	],
	"./ion-alert-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-alert-ios.entry.js",
		"common",
		3
	],
	"./ion-alert-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-alert-md.entry.js",
		"common",
		4
	],
	"./ion-app_8-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-app_8-ios.entry.js",
		"common",
		5
	],
	"./ion-app_8-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-app_8-md.entry.js",
		"common",
		6
	],
	"./ion-avatar_3-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-avatar_3-ios.entry.js",
		"common",
		7
	],
	"./ion-avatar_3-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-avatar_3-md.entry.js",
		"common",
		8
	],
	"./ion-back-button-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-back-button-ios.entry.js",
		"common",
		9
	],
	"./ion-back-button-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-back-button-md.entry.js",
		"common",
		10
	],
	"./ion-backdrop-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-backdrop-ios.entry.js",
		11
	],
	"./ion-backdrop-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-backdrop-md.entry.js",
		12
	],
	"./ion-button_2-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-button_2-ios.entry.js",
		"common",
		13
	],
	"./ion-button_2-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-button_2-md.entry.js",
		"common",
		14
	],
	"./ion-card_5-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-card_5-ios.entry.js",
		"common",
		15
	],
	"./ion-card_5-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-card_5-md.entry.js",
		"common",
		16
	],
	"./ion-checkbox-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-checkbox-ios.entry.js",
		"common",
		17
	],
	"./ion-checkbox-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-checkbox-md.entry.js",
		"common",
		18
	],
	"./ion-chip-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-chip-ios.entry.js",
		"common",
		19
	],
	"./ion-chip-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-chip-md.entry.js",
		"common",
		20
	],
	"./ion-col_3.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js",
		21
	],
	"./ion-datetime_3-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-datetime_3-ios.entry.js",
		"common",
		22
	],
	"./ion-datetime_3-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-datetime_3-md.entry.js",
		"common",
		23
	],
	"./ion-fab_3-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-fab_3-ios.entry.js",
		"common",
		24
	],
	"./ion-fab_3-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-fab_3-md.entry.js",
		"common",
		25
	],
	"./ion-img.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-img.entry.js",
		26
	],
	"./ion-infinite-scroll_2-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-ios.entry.js",
		"common",
		27
	],
	"./ion-infinite-scroll_2-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-md.entry.js",
		"common",
		28
	],
	"./ion-input-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-input-ios.entry.js",
		"common",
		29
	],
	"./ion-input-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-input-md.entry.js",
		"common",
		30
	],
	"./ion-item-option_3-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-item-option_3-ios.entry.js",
		"common",
		31
	],
	"./ion-item-option_3-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-item-option_3-md.entry.js",
		"common",
		32
	],
	"./ion-item_8-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-item_8-ios.entry.js",
		"common",
		33
	],
	"./ion-item_8-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-item_8-md.entry.js",
		"common",
		34
	],
	"./ion-loading-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-loading-ios.entry.js",
		"common",
		35
	],
	"./ion-loading-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-loading-md.entry.js",
		"common",
		36
	],
	"./ion-menu_4-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-menu_4-ios.entry.js",
		"common",
		37
	],
	"./ion-menu_4-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-menu_4-md.entry.js",
		"common",
		38
	],
	"./ion-modal-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-modal-ios.entry.js",
		"common",
		39
	],
	"./ion-modal-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-modal-md.entry.js",
		"common",
		40
	],
	"./ion-nav_5.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-nav_5.entry.js",
		"common",
		41
	],
	"./ion-popover-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-popover-ios.entry.js",
		"common",
		42
	],
	"./ion-popover-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-popover-md.entry.js",
		"common",
		43
	],
	"./ion-progress-bar-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-progress-bar-ios.entry.js",
		"common",
		44
	],
	"./ion-progress-bar-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-progress-bar-md.entry.js",
		"common",
		45
	],
	"./ion-radio_2-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-radio_2-ios.entry.js",
		"common",
		46
	],
	"./ion-radio_2-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-radio_2-md.entry.js",
		"common",
		47
	],
	"./ion-range-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-range-ios.entry.js",
		"common",
		48
	],
	"./ion-range-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-range-md.entry.js",
		"common",
		49
	],
	"./ion-refresher_2-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-refresher_2-ios.entry.js",
		"common",
		50
	],
	"./ion-refresher_2-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-refresher_2-md.entry.js",
		"common",
		51
	],
	"./ion-reorder_2-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-reorder_2-ios.entry.js",
		"common",
		52
	],
	"./ion-reorder_2-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-reorder_2-md.entry.js",
		"common",
		53
	],
	"./ion-ripple-effect.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js",
		54
	],
	"./ion-route_4.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js",
		"common",
		55
	],
	"./ion-searchbar-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-searchbar-ios.entry.js",
		"common",
		56
	],
	"./ion-searchbar-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-searchbar-md.entry.js",
		"common",
		57
	],
	"./ion-segment_2-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-segment_2-ios.entry.js",
		"common",
		58
	],
	"./ion-segment_2-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-segment_2-md.entry.js",
		"common",
		59
	],
	"./ion-select_3-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-select_3-ios.entry.js",
		"common",
		60
	],
	"./ion-select_3-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-select_3-md.entry.js",
		"common",
		61
	],
	"./ion-slide_2-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-slide_2-ios.entry.js",
		62
	],
	"./ion-slide_2-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-slide_2-md.entry.js",
		63
	],
	"./ion-spinner.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js",
		"common",
		64
	],
	"./ion-split-pane-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-split-pane-ios.entry.js",
		65
	],
	"./ion-split-pane-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-split-pane-md.entry.js",
		66
	],
	"./ion-tab-bar_2-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-ios.entry.js",
		"common",
		67
	],
	"./ion-tab-bar_2-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-md.entry.js",
		"common",
		68
	],
	"./ion-tab_2.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js",
		"common",
		69
	],
	"./ion-text.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-text.entry.js",
		"common",
		70
	],
	"./ion-textarea-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-textarea-ios.entry.js",
		"common",
		71
	],
	"./ion-textarea-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-textarea-md.entry.js",
		"common",
		72
	],
	"./ion-toast-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-toast-ios.entry.js",
		"common",
		73
	],
	"./ion-toast-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-toast-md.entry.js",
		"common",
		74
	],
	"./ion-toggle-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-toggle-ios.entry.js",
		"common",
		75
	],
	"./ion-toggle-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-toggle-md.entry.js",
		"common",
		76
	],
	"./ion-virtual-scroll.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js",
		77
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"my-overlay\" class=\"ion-padding\" [hidden]=\"overlayHidden\">   \n  <ion-card>\n  <ion-card-header>\n      <ion-note class=\"large-text\" style=\"padding-left: 20px;\">Wallet v0.91</ion-note>\n    <img [src]=\"getImg()\">\n  </ion-card-header>\n    <h2 class=\"large-text\"> Welcome! </h2>\n    <p class=\"medium-text\"> This is <b> Minima's Official Wallet </b>.  \n    It was built as a compact core wallet for Minima v1.0.\n    </p>\n\n    <ion-button\n      expand=\"full\"\n      fill=\"solid\"\n      shape=\"round\"\n      full \n      (click)=\"hideOverlay()\" \n      class=\"my-overlay-btn\">\n        Get Started\n    </ion-button>\n\n  </ion-card>\n</div>\n\n<ion-app>\n  <ion-split-pane when=\"lg\" contentId=\"mainMenu\" class=\"splitpane\" >\n  <ion-menu side=\"start\" contentId=\"mainMenu\">\n\n    <ion-header>\n      <ion-toolbar class=\"menu-toolbar\">\n      <ion-title> \n        <ion-img class=\"menu-logo\" [src]=\"getImg()\"></ion-img>\n      </ion-title>      \n      </ion-toolbar>\n    </ion-header>\n    \n    <ion-content>\n      <ion-list main>\n        \n        <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of basic; let i = index\">\n          \n            <ion-item \n            class=\"ripple-parent ion-activatable medium-text\"\n            detail=\"false\"\n            routerLinkActive=\"selected\"\n            routerDirection=\"root\"\n            [hidden] = \"p.hidden\" \n            [routerLink]=\"p.routerLink\"\n            lines=\"{{ p.line }}\">\n              <ion-ripple-effect type=\"unbounded\"></ion-ripple-effect>\n\n            <ion-icon name=\"{{ p.icon }}\" slot=\"start\"></ion-icon> {{ p.title }}\n\n            </ion-item>\n        </ion-menu-toggle>\n      </ion-list>\n\n      <ion-list main>\n        \n        <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of advanced; let i = index\">\n          \n            <ion-item \n            class=\"ripple-parent ion-activatable medium-text\"\n            detail=\"false\"\n            routerLinkActive=\"selected\"\n            routerDirection=\"root\"\n            [hidden] = \"p.hidden\" \n            routerLink=\"{{ p.routerLink }}\"\n            lines=\"{{ p.line }}\">\n              <ion-ripple-effect type=\"unbounded\"></ion-ripple-effect>\n\n\n            <ion-icon name=\"{{ p.icon }}\" slot=\"start\"></ion-icon> {{ p.title }}\n\n            </ion-item>\n        </ion-menu-toggle>\n      </ion-list>\n  </ion-content>\n\n  <ion-menu-toggle auto-hide=\"false\">\n      <ion-footer class=\"footer-content\">\n        <ion-item class=\"ripple-parent ion-activatable medium-text\" id=\"footer-item\" routerLink=\"/settings\" routerLinkActive=\"selected\" lines=\"none\">\n          <ion-icon name=\"build\" slot=\"start\"></ion-icon> Settings\n        </ion-item>\n              <ion-ripple-effect type=\"unbounded\"></ion-ripple-effect>\n      </ion-footer>\n  </ion-menu-toggle>\n  </ion-menu>\n\n  <ion-router-outlet main id=\"mainMenu\"></ion-router-outlet>\n  </ion-split-pane>\n\n</ion-app>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/historymodal/historymodal.page.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/historymodal/historymodal.page.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n\n  <div class=\"custom-toolbar medium-text txpow\">\n\n    TxPoW\n\n    <span class=\"small-text txpow_id\">\n\n     {{ TXPOW_ID.substring(0,20)+\"...\" }}\n\n    </span>\n\n    <ion-button slot=\"end\" fill=\"clear\" (click)=\"dismiss()\" size=\"small\" class=\"dismiss-btn\">\n      Dismiss\n    </ion-button>\n    \n  </div>\n\n  <!-- <ion-toolbar>\n    <ion-title slot=\"start\"><span style=\"color:#FF671E\">TxPoW</span> <span style=\"font-size:14px;\">{{ TXPOW_ID.substring(0,20)+\"...\" }}</span></ion-title>\n\n  <ion-button slot=\"end\" fill=\"clear\" (click)=\"dismiss()\" class=\"dismiss-btn\">\n  Dismiss\n  </ion-button>\n  </ion-toolbar> -->\n</ion-header>\n\n<ion-content>\n<ion-card>\n  <ion-card-header>\n  <ion-grid><ion-row>\n  <ion-col>\n    <!-- TXN Type -->\n    <ion-icon size=\"large\" [name]=\"getTXNType(Amount)\"></ion-icon>\n    <h2 class=\"large-text\" *ngIf=\"Amount.toString().substring(0, 1) !== '-' && !TokenName.name\">  {{\"+\"+Amount}} {{ TokenName }} </h2>\n    <h2 class=\"large-text\" *ngIf=\"Amount.toString().substring(0, 1) === '-' && !TokenName.name\">  {{Amount}} {{ TokenName }} </h2>\n\n    <h2 class=\"large-text\" *ngIf=\"Amount.toString().substring(0, 1) !== '-' && TokenName.name\">  {{\"+\"+Amount}} {{ TokenName.name }} </h2>\n    <h2 class=\"large-text\" *ngIf=\"Amount.toString().substring(0, 1) === '-' && TokenName.name\">  {{Amount}} {{ TokenName.name }} </h2>\n  </ion-col>\n  </ion-row>\n  <!-- TXN Message (if any)-->\n  <ion-row>\n  <ion-col id=\"msg\" class=\"medium-text\" *ngIf=\"Message.length > 0 && Message[0].data === '01000100'\">\n    {{'\"'+ Message[1].data +'\"' }}\n  </ion-col>\n  </ion-row>\n  </ion-grid>\n  </ion-card-header>\n<!-- TXN Details -->  \n<ion-grid>\n\n  <!-- <ion-row>\n    <ion-col class=\"medium-text\" class=\"info-lbl small-text\">\n      Recipient Address\n    </ion-col>\n\n    <ion-col *ngIf=\"TokenID === '0x00'\" class=\"information small-text\">\n      {{ Address.substring(0, 15)+\"...\" }}\n    </ion-col>\n\n  </ion-row> -->\n\n  <ion-row>\n    <ion-col class=\"medium-text\" class=\"info-lbl small-text\">\n      TokenID\n    </ion-col>\n\n    <ion-col *ngIf=\"TokenID === '0x00'\" class=\"information small-text\">\n      {{ TokenID }}\n    </ion-col>\n    <ion-col *ngIf=\"TokenID !== '0x00'\"class=\"information small-text\">\n      {{ TokenID.substring(0,15)+\"...\"}}\n    </ion-col>\n\n  </ion-row>\n\n  <ion-row> \n    <ion-col class=\"info-lbl medium-text\">\n      Is a Block\n    </ion-col>\n\n    <ion-col *ngIf=\"Block === true\" class=\"information small-text\">\n      True\n    </ion-col>\n    <ion-col *ngIf=\"Block !== true\" class=\"information small-text\">\n      False\n    </ion-col>\n\n  </ion-row>\n\n  <ion-row>\n    <ion-col class=\"info-lbl medium-text\">\n      Stored in a Block\n    </ion-col>\n\n    <ion-col *ngIf=\"isinblock\" class=\"information small-text\">\n      True\n    </ion-col>\n    <ion-col *ngIf=\"!isinblock\" class=\"information small-text\">\n      False\n    </ion-col>\n\n  </ion-row>\n\n  <ion-row *ngIf=\"isinblock\">\n    <ion-col class=\"info-lbl small-text\">\n      Block Number\n    </ion-col>\n\n    <ion-col class=\"information small-text\">\n      {{ Block }}\n    </ion-col>\n\n  </ion-row>\n\n  <ion-row>\n    <ion-col class=\"info-lbl small-text\">\n      Part of chain\n    </ion-col>\n\n    <ion-col *ngIf=\"ispartofchain\" class=\"information small-text\">\n      True\n    </ion-col>\n    <ion-col *ngIf=\"!ispartofchain\" class=\"information small-text\">\n      False\n    </ion-col>\n  </ion-row>\n\n</ion-grid>\n\n<ion-grid>\n  <ion-row>\n    <ion-col class=\"info-lbl\">\n      <ion-text class=\"small-text\" style=\"font-weight: 400 !important;\">{{ Date.substring(4, 10) }}</ion-text><br>\n      <ion-text class=\"medium-text\" style=\"font-size:18px;\">{{ Date.substring(10, 20) }}</ion-text>\n     </ion-col>\n\n    <ion-col class=\"completed medium-text\">\n      Completed\n    </ion-col>\n  \n  </ion-row>\n</ion-grid>\n\n</ion-card>\n\n\n</ion-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/historytokenmodal/historytokenmodal.page.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/historytokenmodal/historytokenmodal.page.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n\n  <div class=\"custom-toolbar large-text txpow\">\n\n    TxPoW\n\n    <span class=\"medium-text txpow_id\">\n\n     {{ TXPOW_ID.substring(0,20)+\"...\" }}\n\n    </span>\n\n    <ion-button slot=\"end\" fill=\"clear\" (click)=\"dismiss()\" size=\"small\" class=\"dismiss-btn\">\n      Dismiss\n    </ion-button>\n    \n  </div>\n\n  <!-- <ion-toolbar>\n    <ion-title slot=\"start\"><span style=\"color:#FF671E\">TxPoW</span> <span style=\"font-size:14px;\">{{ TXPOW_ID.substring(0,20)+\"...\" }}</span></ion-title>\n  \n  <ion-button slot=\"end\" fill=\"clear\" (click)=\"dismiss()\" class=\"dismiss-btn\">\n  Dismiss\n  </ion-button>\n  </ion-toolbar> -->\n</ion-header>\n\n<ion-content>\n<ion-card>\n  <ion-card-header>\n  <ion-grid><ion-row>\n  <ion-col>\n    <!-- TXN Type -->\n    <ion-icon size=\"large\" name=\"brush\"></ion-icon>\n    <h2 class=\"large-text\">  Created a Token </h2>\n  </ion-col>\n  </ion-row>\n  <!-- TXN Message (if any)-->\n  <ion-row>\n  <ion-col class=\"medium-text\" id=\"msg\" *ngIf=\"description.length > 0\">\n    {{'\"'+ description +'\"' }}\n  </ion-col>\n  </ion-row>\n  </ion-grid>\n  </ion-card-header>\n<!-- TXN Details -->  \n<ion-grid>\n\n  <ion-row>\n    <ion-col class=\"info-lbl small-text\">\n      Token Name\n    </ion-col>\n\n    <ion-col class=\"information small-text\">\n      {{ tokenNameGiven }}\n    </ion-col>\n\n  </ion-row>\n\n  <ion-row> \n    <ion-col class=\"info-lbl small-text\">\n      Token ID\n    </ion-col>\n\n    <ion-col *ngIf=\"TokenID === '0x00'\"class=\"information small-text\">\n      {{ TokenID }}\n    </ion-col>\n    <ion-col *ngIf=\"TokenID !== '0x00'\"class=\"information small-text\">\n      {{ TokenID.substring(0, 15)+\"...\" }}\n    </ion-col>\n\n  </ion-row>\n\n  <ion-row>\n    <ion-col class=\"info-lbl small-text\">\n      Amount Colored\n    </ion-col>\n\n    <ion-col class=\"information small-text\">\n      {{ amountCreated }}\n    </ion-col>\n\n  </ion-row>\n\n  <ion-row>\n    <ion-col class=\"info-lbl small-text\">\n      Stored in a Block\n    </ion-col>\n\n    <ion-col *ngIf=\"isinblock\" class=\"information small-text\">\n      True\n    </ion-col>\n    <ion-col *ngIf=\"!isinblock\" class=\"information small-text\">\n      False\n    </ion-col>\n\n  </ion-row>\n\n  <ion-row>\n    <ion-col class=\"info-lbl small-text\">\n      Block #\n    </ion-col>\n\n    <ion-col class=\"information small-text\">\n      {{ Block }}\n    </ion-col>\n\n  </ion-row>\n\n  <ion-row>\n    <ion-col class=\"info-lbl small-text\">\n      Part of chain\n    </ion-col>\n\n    <ion-col *ngIf=\"ispartofchain\" class=\"information small-text\">\n      True\n    </ion-col>\n    <ion-col *ngIf=\"!ispartofchain\" class=\"information small-text\">\n      False\n    </ion-col>\n  </ion-row>\n\n</ion-grid>\n\n<ion-grid>\n  <ion-row>\n    <ion-col class=\"info-lbl\">\n      <ion-text style=\"font-weight: 400 !important;\" class=\"small-text\">{{ Date.substring(4, 10) }}</ion-text><br>\n      <ion-text style=\"font-size:18px;\" class=\"medium-text\">{{ Date.substring(10, 20) }}</ion-text>\n     </ion-col>\n\n    <ion-col class=\"completed large-text\">\n      Completed\n    </ion-col>\n  \n  </ion-row>\n</ion-grid>\n</ion-card>\n\n\n</ion-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/pop-over/pop-over.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/pop-over/pop-over.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-app>\n\n    <ion-grid>\n        <ion-row>\n            <ion-col size=\"12\" style=\"text-align: center;\">\n                <p [hidden]=\"refTokenid == '0x00'\" class=\"small-text\" id=\"copythis\">{{refTokenid.substring(0, 45)+\"...\"}}</p>\n                <p [hidden]=\"refTokenid !== '0x00'\" class=\"small-text\" id=\"copythis\">{{ refTokenid }}</p>    \n            </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col size=\"12\">\n                <ion-button \n                (click)=\"copyToClipboard()\" \n                class=\"popover-btn small-text\" \n                fill=\"clear\" \n                size=\"small\" \n                expand=\"full\"\n                style=\"width:100%\">\n                \n                <ion-icon name=\"copy\"></ion-icon> \n                \n                </ion-button>\n            </ion-col>\n        </ion-row>\n\n    </ion-grid>\n\n</ion-app>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/pop-term/pop-term.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/pop-term/pop-term.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-grid>\n  <ion-row style=\"padding:0px;\">\n    <ion-col size=\"6\" class=\"pop-term-col\" style=\"border-bottom: 1px solid #929396\">\n      <ion-button position=\"floating\" class=\"activate-btn-minus\" expand=\"full\" fill=\"clear\" (click)=\"onActivateLess()\">a</ion-button>\n    </ion-col>\n    <ion-col size=\"6\" class=\"pop-term-col\" style=\"border-left: 1px solid #929396; border-bottom: 1px solid #929396;\">\n      <ion-button position=\"floating\" class=\"activate-btn-add\" expand=\"full\" fill=\"clear\" (click)=\"onActivate()\">A</ion-button>\n    </ion-col> \n  </ion-row>\n</ion-grid>\n\n\n\n\n  <!-- <ion-button expand=\"full\" (click)=\"onActivate()\">A</ion-button>\n  <ion-button expand=\"full\" (click)=\"onActivateLess()\">a</ion-button> -->\n<!-- <ion-list>\n  <ion-list-header> Font Color\n    <ion-item>\n      <ion-button shape=\"round\"></ion-button>\n      <ion-button shape=\"round\"></ion-button>\n      <ion-button shape=\"round\"></ion-button>\n      <ion-button shape=\"round\"></ion-button>\n    </ion-item>  \n  </ion-list-header>\n</ion-list>\n<ion-list>\n  <ion-list-header> Background Color\n    <ion-item>\n      <ion-button shape=\"round\">small</ion-button>\n      <ion-button shape=\"round\">medium</ion-button>\n      <ion-button shape=\"round\">large</ion-button>\n      <ion-button shape=\"round\">xlarge</ion-button>\n    </ion-item>  \n  </ion-list-header>\n</ion-list> -->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/token-descr/token-descr.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/token-descr/token-descr.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title slot=\"start\" class=\"large-text\">\n    \n    <span *ngIf=\"name && name.length <= 10\" class=\"large-text\">{{ name + \" \" }}</span>\n    <span *ngIf=\"name && name.length > 10\" class=\"large-text\">{{ name.substring(0, 10)+\"... \" }}</span>\n\n    <span class=\"medium-text\" [hidden]=\"tokenid == '0x00'\">{{ tokenid.substring(0,8) + \"...\"}}</span>\n    <span class=\"medium-text\" [hidden]=\"tokenid !== '0x00'\">{{ tokenid }}</span>\n    <ion-icon (click)=\"copyToClipboard()\" name=\"clipboard\"></ion-icon>\n    </ion-title>\n  \n  <ion-button \n  class=\"medium-text\"\n  slot=\"end\"\n  fill=\"clear\"\n  (click)=\"dismiss()\">\n  Dismiss\n  </ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<!-- Only if custom token -->\n<ion-content [hidden]=\"tokenid == '0x00'\">\n  <ion-card> \n    <ion-card-header>\n      <ion-grid>\n        <ion-row>\n          <ion-col >\n            <img style=\"max-width: 250px; min-height:75px;\"[hidden]=\"tokenid == '0x00'\" src=\"{{ icon }}\"/>\n            <img style=\"max-width: 250px; min-height:75px;\" [hidden]=\"tokenid !== '0x00'\" src=\"assets/icon/icon.png\"/>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col class=\"medium-text\" [hidden]=\"tokenid === '0x00'\">\n          {{ description }}\n          </ion-col>\n          <ion-col class=\"medium-text\" [hidden]=\"tokenid !== '0x00'\">\n            Minima's Official Token\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-grid>\n        <ion-row>\n         <ion-col class=\"small-text\" id=\"varname\">\n           Total Amount Available\n         </ion-col>\n         <ion-col *ngIf=\"total\" class=\"small-text\" id=\"variable\">\n            {{ total }}\n         </ion-col>\n        </ion-row>\n        <ion-row [hidden]=\"tokenid == '0x00'\">\n         <ion-col class=\"small-text\" id=\"varname\">\n           Total Amount Available (Minima)\n         </ion-col>\n         <ion-col *ngIf=\"totalamount\" class=\"small-text\" id=\"variable\">\n            {{ totalamount }}\n         </ion-col>\n        </ion-row>\n        <ion-row>\n         <ion-col class=\"small-text\" id=\"varname\">\n           Token Type\n         </ion-col>\n         <ion-col class=\"small-text\" [hidden]=\"script !== 'RETURN TRUE'\" id=\"variable\">   \n            Fungible\n         </ion-col>\n         <ion-col class=\"small-text\" [hidden]=\"script == 'RETURN TRUE'\" id=\"variable\">\n            Non-Fungible\n         </ion-col>\n        </ion-row>\n        <ion-row>\n         <ion-col class=\"small-text\" id=\"varname\">\n           Proof Availability\n         </ion-col>\n         <ion-col class=\"small-text\" *ngIf=\"proof\" [hidden]=\"proof.length > 0\" id=\"variable\">   \n            False\n         </ion-col>\n         <ion-col class=\"small-text\" *ngIf=\"proof\" [hidden]=\"proof.length == 0\" id=\"variable\">\n            True\n         </ion-col>\n        </ion-row>\n        <ion-row id=\"varname\" *ngIf=\"proof\" [hidden]=\"proof.length <= 0\">\n         <ion-col class=\"small-text\">\n           Proof URL\n         </ion-col>\n         <ion-col class=\"small-text\" id=\"variable\">   \n             {{ proof }}\n         </ion-col>\n        </ion-row>\n        <ion-row id=\"varname\" *ngIf=\"proof\" [hidden]=\"proof.length <= 0\">\n         <ion-col class=\"small-text\">\n           Validate Proof\n         </ion-col>\n         <ion-col id=\"variable\">   \n          <ion-button *ngIf=\"proof\" class=\"small-text\" size=\"small\" (click)=\"validateProof(tokenid)\">\n            Validate\n          </ion-button>\n         </ion-col>\n        </ion-row>\n        <ion-row>\n         <ion-col class=\"small-text\" id=\"varname\" >\n           Confirmed/Sendable Amount\n         </ion-col>\n         <ion-col *ngIf=\"confirmed || sendable\" class=\"small-text\" id=\"variable\">   \n             {{ confirmed + \"/\" + sendable }}\n         </ion-col>\n        </ion-row>\n        <ion-row>\n         <ion-col class=\"small-text\" id=\"varname\">\n           Unconfirmed Amount\n         </ion-col>\n         <ion-col *ngIf=\"unconfirmed\" class=\"small-text\" id=\"variable\">   \n             {{ unconfirmed }}\n         </ion-col>\n        </ion-row>\n        <ion-row>\n         <ion-col class=\"small-text\" id=\"varname\">\n           Mempool\n         </ion-col>\n         <ion-col *ngIf=\"mempool\" class=\"small-text\" id=\"variable\">   \n             {{ mempool }}\n         </ion-col>\n        </ion-row>\n        <ion-row>\n         <ion-col class=\"small-text\" size=\"3\" id=\"varname\">\n           Script\n         </ion-col>\n         <ion-col *ngIf=\"script\" class=\"small-text\" size=\"9\" id=\"variable\">   \n             {{ script }}\n         </ion-col>\n        </ion-row>\n        \n      </ion-grid>\n    </ion-card-content>\n  </ion-card>\n  <!-- fab placed to the bottom end -->\n  <ion-fab vertical=\"bottom\" horizontal=\"start\" slot=\"fixed\">\n    <ion-fab-button size=\"55px;\" color=\"minima-text\" (click)=\"sendTokenOver(tokenid)\">\n      <ion-icon size=\"45px;\" name=\"send\" color=\"tertiary\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n</ion-content>\n\n<!-- Only if Minima token -->\n<ion-content [hidden]=\"tokenid !== '0x00'\">\n  <ion-card> \n    <ion-card-header>\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <img style=\"max-width: 250px; min-height:75px;\" [hidden]=\"tokenid !== '0x00'\" src=\"assets/icon/icon.png\"/>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            Minima - The Mobile Cryptocurrency\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card-header>\n    \n  </ion-card>\n  <!-- fab placed to the bottom end -->\n  <ion-fab vertical=\"bottom\" horizontal=\"start\" slot=\"fixed\">\n    <ion-fab-button size=\"55px;\" color=\"minima-text\" (click)=\"sendTokenOver(tokenid)\">\n      <ion-icon size=\"45px;\" name=\"send\" color=\"tertiary\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n</ion-content>"

/***/ }),

/***/ "./node_modules/web-social-share/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/web-social-share/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./web-social-share.entry.js": [
		"./node_modules/web-social-share/dist/esm/web-social-share.entry.js",
		78
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./node_modules/web-social-share/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [
    { path: '', loadChildren: './pages/balance/balance.module#BalancePageModule' },
    { path: '', redirectTo: 'balance', pathMatch: 'full' },
    { path: 'balance', loadChildren: () => Promise.all(/*! import() | pages-balance-balance-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-balance-balance-module")]).then(__webpack_require__.bind(null, /*! ./pages/balance/balance.module */ "./src/app/pages/balance/balance.module.ts")).then(m => m.BalancePageModule) },
    { path: 'send-funds', loadChildren: () => Promise.all(/*! import() | pages-send-funds-send-funds-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-send-funds-send-funds-module")]).then(__webpack_require__.bind(null, /*! ./pages/send-funds/send-funds.module */ "./src/app/pages/send-funds/send-funds.module.ts")).then(m => m.SendFundsPageModule) },
    { path: 'send-funds/:id', loadChildren: () => Promise.all(/*! import() | pages-send-funds-send-funds-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-send-funds-send-funds-module")]).then(__webpack_require__.bind(null, /*! ./pages/send-funds/send-funds.module */ "./src/app/pages/send-funds/send-funds.module.ts")).then(m => m.SendFundsPageModule) },
    { path: 'create-token', loadChildren: () => __webpack_require__.e(/*! import() | pages-create-token-create-token-module */ "pages-create-token-create-token-module").then(__webpack_require__.bind(null, /*! ./pages/create-token/create-token.module */ "./src/app/pages/create-token/create-token.module.ts")).then(m => m.CreateTokenPageModule) },
    { path: 'status', loadChildren: () => Promise.all(/*! import() | pages-mini-status-mini-status-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-mini-status-mini-status-module")]).then(__webpack_require__.bind(null, /*! ./pages/mini-status/mini-status.module */ "./src/app/pages/mini-status/mini-status.module.ts")).then(m => m.MiniStatusPageModule) },
    { path: 'my-address', loadChildren: () => __webpack_require__.e(/*! import() | pages-my-address-my-address-module */ "pages-my-address-my-address-module").then(__webpack_require__.bind(null, /*! ./pages/my-address/my-address.module */ "./src/app/pages/my-address/my-address.module.ts")).then(m => m.MyAddressPageModule) },
    { path: 'code', loadChildren: () => Promise.all(/*! import() | pages-send-funds-send-funds-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-send-funds-send-funds-module")]).then(__webpack_require__.bind(null, /*! ./pages/send-funds/send-funds.module */ "./src/app/pages/send-funds/send-funds.module.ts")).then(m => m.SendFundsPageModule) },
    { path: 'settings', loadChildren: () => __webpack_require__.e(/*! import() | pages-settings-settings-module */ "pages-settings-settings-module").then(__webpack_require__.bind(null, /*! ./pages/settings/settings.module */ "./src/app/pages/settings/settings.module.ts")).then(m => m.SettingsPageModule) },
    { path: 'mini-term', loadChildren: () => __webpack_require__.e(/*! import() | pages-mini-term-mini-term-module */ "pages-mini-term-mini-term-module").then(__webpack_require__.bind(null, /*! ./pages/mini-term/mini-term.module */ "./src/app/pages/mini-term/mini-term.module.ts")).then(m => m.MiniTermPageModule) },
    { path: 'mini-status', loadChildren: () => Promise.all(/*! import() | pages-mini-status-mini-status-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-mini-status-mini-status-module")]).then(__webpack_require__.bind(null, /*! ./pages/mini-status/mini-status.module */ "./src/app/pages/mini-status/mini-status.module.ts")).then(m => m.MiniStatusPageModule) },
    { path: 'create-token', loadChildren: () => __webpack_require__.e(/*! import() | pages-create-token-create-token-module */ "pages-create-token-create-token-module").then(__webpack_require__.bind(null, /*! ./pages/create-token/create-token.module */ "./src/app/pages/create-token/create-token.module.ts")).then(m => m.CreateTokenPageModule) },
    { path: 'web-scanner', loadChildren: () => __webpack_require__.e(/*! import() | pages-web-scanner-web-scanner-module */ "pages-web-scanner-web-scanner-module").then(__webpack_require__.bind(null, /*! ./pages/web-scanner/web-scanner.module */ "./src/app/pages/web-scanner/web-scanner.module.ts")).then(m => m.WebScannerPageModule) },
    { path: 'community', loadChildren: () => __webpack_require__.e(/*! import() | pages-community-community-module */ "pages-community-community-module").then(__webpack_require__.bind(null, /*! ./pages/community/community.module */ "./src/app/pages/community/community.module.ts")).then(m => m.CommunityPageModule) },
    { path: 'history', loadChildren: () => Promise.all(/*! import() | pages-history-history-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-history-history-module")]).then(__webpack_require__.bind(null, /*! ./pages/history/history.module */ "./src/app/pages/history/history.module.ts")).then(m => m.HistoryPageModule) },
    { path: 'historymodal', loadChildren: './components/historymodal/historymodal.module#HistorymodalPageModule' },
    { path: 'historytokenmodal', loadChildren: './components/historytokenmodal/historytokenmodal.module#HistorytokenmodalPageModule' },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"] })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/** OVERLAY MENU */\n.my-overlay {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  background: var(--ion-background-color, #f2f2f2);\n  opacity: 100%;\n  z-index: 20;\n  top: 0;\n  left: auto;\n  right: auto;\n  padding: 10%;\n}\n.ripple-parent {\n  position: relative;\n  overflow: hidden;\n  --ripple-color: #f2f2f2;\n}\n.my-overlay ion-card ion-card-header ion-item {\n  padding-bottom: 5%;\n}\n.my-overlay img {\n  padding-bottom: 5%;\n}\n.my-overlay p {\n  padding-bottom: 5%;\n}\n.my-overlay-btn {\n  position: relative;\n  top: 25%;\n}\n.my-overlay ion-card {\n  opacity: 100%;\n  --background: var(--ion-background-color, #f2f2f2);\n  padding: 25px;\n  top: 20%;\n  padding: 20px;\n  text-align: center;\n}\n.hide-chckbox {\n  font-size: 12px;\n}\n/** */\n.medium-text {\n  opacity: 1.5;\n  font-weight: 700;\n}\n.footer-content {\n  padding-top: 10px;\n}\nion-menu {\n  --background: var(--ion-background-color, #f2f2f2);\n}\nion-menu ion-header {\n  --background: var(--ion-background-color, #f2f2f2);\n}\nion-menu ion-header ion-toolbar {\n  --background: var(--ion-background-color, #f2f2f2);\n}\nion-menu ion-content {\n  --padding-top: 12px;\n  --padding-bottom: 20px;\n  --background: var(--ion-item-background, var(--ion-background-color, #fff));\n}\nion-icon {\n  color: #FF671D;\n}\nion-menu ion-item.selected {\n  --background: var(--ion-background-color, #f2f2f2);\n  --background: linear-gradient(to right, var(--ion-background-color, #fff) 0%, var(--ion-background-color, #f2f2f2) 100%) !important;\n}\nion-menu ion-item {\n  --transition: none;\n}\n.social-web {\n  margin: auto;\n}\n.social-lbl {\n  color: white;\n}\n.menu-logo {\n  height: auto;\n  width: 190px;\n  margin: auto;\n  margin-bottom: 10px;\n  position: relative;\n  padding: 10px 70px 0px 0;\n}\n/** Desktop Version */\n@media only screen and (min-width: 992px) {\n  .splitpane {\n    margin-left: 180px;\n    margin-right: 180px;\n    margin-top: 100px;\n    margin-bottom: 100px;\n  }\n\n  ion-app {\n    background-image: url('miniTiles.png');\n  }\n\n  ion-menu-toggle {\n    height: 72px;\n  }\n\n  .menu-logo {\n    height: auto;\n    width: 150px;\n    margin: auto;\n    position: relative;\n    padding: 10px 20px 15px 0px;\n  }\n\n  .my-overlay ion-card {\n    top: 0%;\n    width: 650px;\n    height: auto;\n    margin-left: 28%;\n  }\n\n  .my-overlay img {\n    padding-bottom: 5%;\n    width: 250px;\n  }\n\n  .my-overlay h2 {\n    font-size: 1.5rem;\n    padding-bottom: 0px;\n  }\n\n  .my-overlay p {\n    font-size: 1.5rem;\n    padding-bottom: 0%;\n  }\n\n  .my-overlay ion-card-header {\n    display: inline-block;\n    height: auto;\n    width: 30%;\n    padding-bottom: 6%;\n    margin: 0 auto;\n  }\n}\n/*\n * Material Design Menu\n*/\nion-menu.md ion-list {\n  padding: 0px 0;\n}\nion-menu.md ion-item {\n  --padding-start: 18px;\n  margin-right: 10px;\n  border-radius: 0 50px 50px 0;\n  font-weight: 500;\n}\nion-menu.md ion-item.selected {\n  --background: var(--ion-background-color, #f2f2f2);\n  background: -webkit-gradient(linear, right top, left top, from(var(--ion-background-color, #fff)), to(var(--ion-background-color, #f2f2f2))) !important;\n  background: linear-gradient(to left, var(--ion-background-color, #fff) 0%, var(--ion-background-color, #f2f2f2) 100%) !important;\n}\nion-menu.md ion-list {\n  padding-bottom: 0px !important;\n}\n/*\n * iOS Design Menu\n*/\nion-menu.ios ion-list {\n  padding: 0px 0 0;\n  margin-bottom: 10px;\n}\nion-menu.ios ion-item {\n  --padding-start: 16px;\n  --min-height: 50px;\n}\n.ios .menu-logo-title {\n  font-family: \"Ridley-normal\";\n  font-weight: normal;\n  font-size: 12px;\n  padding-bottom: 2px;\n}\n.ios ion-note ion-badge {\n  margin: auto;\n  color: #FF671E;\n  font-size: 8px;\n}\n.ios .footer-content {\n  padding: 18px;\n}\nion-menu.ios ion-item.selected {\n  --background: linear-gradient(to left, var(--ion-background-color, #fff) 0%, var(--ion-background-color, #f2f2f2) 100%) !important;\n}\nion-menu.ios ion-list {\n  padding-bottom: 0px !important;\n}\n#footer-item {\n  --padding-bottom: 0px;\n  --padding-start: 15px;\n}\nion-toolbar {\n  --background: var(--card-header-color) !important;\n}\nion-menu-toggle ion-footer {\n  background: var(--card-header-color) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGlhcy9Qcm9qZWN0cy9taW5pbWFjb3JlL21vYmlsZS1hcHAtZnJvbnQtZW5kL2FwcC9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGtCQUFBO0FBQ0E7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnREFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0NGO0FEQ0E7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUNFRjtBREFBO0VBQ0Usa0JBQUE7QUNHRjtBRERBO0VBQ0Usa0JBQUE7QUNJRjtBREZBO0VBQ0Usa0JBQUE7QUNLRjtBREhBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0FDTUY7QURKQTtFQUNFLGFBQUE7RUFDQSxrREFBQTtFQUNBLGFBQUE7RUFDQSxRQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FDT0Y7QURMQTtFQUNFLGVBQUE7QUNRRjtBRE5BLEtBQUE7QUFDQTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtBQ1NGO0FEUEE7RUFDRSxpQkFBQTtBQ1VGO0FEUkE7RUFDRSxrREFBQTtBQ1dGO0FEVEE7RUFDRSxrREFBQTtBQ1lGO0FEVkE7RUFDRSxrREFBQTtBQ2FGO0FEWEE7RUFDSSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsMkVBQUE7QUNjSjtBRFhBO0VBQ0ksY0FBQTtBQ2NKO0FEWkE7RUFDRSxrREFBQTtFQUNBLG1JQUFBO0FDZUY7QURaQTtFQUNJLGtCQUFBO0FDZUo7QURiQTtFQUNJLFlBQUE7QUNnQko7QURkQTtFQUNJLFlBQUE7QUNpQko7QURkQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtBQ2lCSjtBRGRBLHFCQUFBO0FBQ0E7RUFFSTtJQUNJLGtCQUFBO0lBQ0EsbUJBQUE7SUFDQSxpQkFBQTtJQUNBLG9CQUFBO0VDZ0JOOztFRGJFO0lBQ0ksc0NBQUE7RUNnQk47O0VEZEU7SUFDRSxZQUFBO0VDaUJKOztFRGZFO0lBQ0ksWUFBQTtJQUNBLFlBQUE7SUFDQSxZQUFBO0lBQ0Esa0JBQUE7SUFDQSwyQkFBQTtFQ2tCTjs7RURoQkU7SUFDRSxPQUFBO0lBQ0EsWUFBQTtJQUNBLFlBQUE7SUFDQSxnQkFBQTtFQ21CSjs7RURqQkU7SUFDRSxrQkFBQTtJQUNBLFlBQUE7RUNvQko7O0VEbEJFO0lBQ0UsaUJBQUE7SUFDQSxtQkFBQTtFQ3FCSjs7RURuQkU7SUFDRSxpQkFBQTtJQUNBLGtCQUFBO0VDc0JKOztFRHBCRTtJQUNFLHFCQUFBO0lBQ0EsWUFBQTtJQUNBLFVBQUE7SUFDQSxrQkFBQTtJQUNBLGNBQUE7RUN1Qko7QUFDRjtBRHJCQTs7Q0FBQTtBQUdBO0VBQ0ksY0FBQTtBQ3VCSjtBRHBCRTtFQUNFLHFCQUFBO0VBRUEsa0JBQUE7RUFFQSw0QkFBQTtFQUVBLGdCQUFBO0FDb0JKO0FEbEJFO0VBQ0Usa0RBQUE7RUFDQSx1SkFBQTtFQUFBLGdJQUFBO0FDcUJKO0FEbkJBO0VBQ0ksOEJBQUE7QUNzQko7QURuQkE7O0NBQUE7QUFHRTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7QUNzQko7QURwQkU7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0FDdUJKO0FEckJFO0VBQ0UsNEJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQ3dCSjtBRHJCRTtFQUNFLFlBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQ3dCSjtBRHRCRTtFQUNFLGFBQUE7QUN5Qko7QUR0QkU7RUFDRSxrSUFBQTtBQ3lCSjtBRHRCRTtFQUNFLDhCQUFBO0FDeUJKO0FEbEJBO0VBQ0UscUJBQUE7RUFDQSxxQkFBQTtBQ3FCRjtBRGxCQTtFQUNFLGlEQUFBO0FDcUJGO0FEbkJBO0VBQ0UsK0NBQUE7QUNzQkYiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogT1ZFUkxBWSBNRU5VICovXG4ubXktb3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsICNmMmYyZjIpO1xuICBvcGFjaXR5OiAxMDAlO1xuICB6LWluZGV4OiAyMDtcbiAgdG9wOiAwO1xuICBsZWZ0OiBhdXRvO1xuICByaWdodDogYXV0bztcbiAgcGFkZGluZzogMTAlO1xufVxuLnJpcHBsZS1wYXJlbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7IFxuICBvdmVyZmxvdzogaGlkZGVuO1xuICAtLXJpcHBsZS1jb2xvcjogI2YyZjJmMjtcbn1cbi5teS1vdmVybGF5IGlvbi1jYXJkIGlvbi1jYXJkLWhlYWRlciBpb24taXRlbSB7XG4gIHBhZGRpbmctYm90dG9tOiA1JTtcbn1cbi5teS1vdmVybGF5IGltZyB7XG4gIHBhZGRpbmctYm90dG9tOiA1JTtcbn1cbi5teS1vdmVybGF5IHAge1xuICBwYWRkaW5nLWJvdHRvbTogNSU7XG59XG4ubXktb3ZlcmxheS1idG4ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMjUlO1xufVxuLm15LW92ZXJsYXkgaW9uLWNhcmQge1xuICBvcGFjaXR5OiAxMDAlO1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZjJmMmYyKTtcbiAgcGFkZGluZzogMjVweDtcbiAgdG9wOiAyMCU7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5oaWRlLWNoY2tib3gge1xuICBmb250LXNpemU6IDEycHg7XG59XG4vKiogKi9cbi5tZWRpdW0tdGV4dCB7XG4gIG9wYWNpdHk6IDEuNTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cbi5mb290ZXItY29udGVudCB7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuaW9uLW1lbnUge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZjJmMmYyKTtcbn1cbmlvbi1tZW51IGlvbi1oZWFkZXIge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZjJmMmYyKTtcbn1cbmlvbi1tZW51IGlvbi1oZWFkZXIgaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZjJmMmYyKTtcbn1cbmlvbi1tZW51IGlvbi1jb250ZW50IHtcbiAgICAtLXBhZGRpbmctdG9wOiAxMnB4O1xuICAgIC0tcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24taXRlbS1iYWNrZ3JvdW5kLCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwgI2ZmZikpO1xuICB9XG5cbmlvbi1pY29uIHtcbiAgICBjb2xvcjogI0ZGNjcxRDtcbn1cbmlvbi1tZW51IGlvbi1pdGVtLnNlbGVjdGVke1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZjJmMmYyKTtcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwgI2ZmZikgMCUsIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZjJmMmYyKSAxMDAlKSAhaW1wb3J0YW50O1xufVxuXG5pb24tbWVudSBpb24taXRlbSB7XG4gICAgLS10cmFuc2l0aW9uOiBub25lO1xuICB9XG4uc29jaWFsLXdlYiB7XG4gICAgbWFyZ2luOiBhdXRvO1xufVxuLnNvY2lhbC1sYmwge1xuICAgIGNvbG9yOndoaXRlO1xufVxuXG4ubWVudS1sb2dvIHtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgd2lkdGg6IDE5MHB4O1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwYWRkaW5nOiAxMHB4IDcwcHggMHB4IDA7XG59XG5cbi8qKiBEZXNrdG9wIFZlcnNpb24gKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIHtcblxuICAgIC5zcGxpdHBhbmUge1xuICAgICAgICBtYXJnaW4tbGVmdDogMTgwcHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTgwcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwMHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMDBweDtcbiAgICAgICAgLy8gYm94LXNoYWRvdzogMnB4IDJweCA1cHggZ3JleTtcbiAgICB9XG4gICAgaW9uLWFwcCB7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vYXNzZXRzL21pbmlUaWxlcy5wbmcnKTtcbiAgICB9XG4gICAgaW9uLW1lbnUtdG9nZ2xlIHtcbiAgICAgIGhlaWdodDogNzJweDtcbiAgICB9XG4gICAgLm1lbnUtbG9nbyB7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgcGFkZGluZzogMTBweCAyMHB4IDE1cHggMHB4O1xuICAgIH1cbiAgICAubXktb3ZlcmxheSBpb24tY2FyZCB7XG4gICAgICB0b3A6IDAlO1xuICAgICAgd2lkdGg6IDY1MHB4O1xuICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgbWFyZ2luLWxlZnQ6IDI4JTtcbiAgICB9XG4gICAgLm15LW92ZXJsYXkgaW1nIHtcbiAgICAgIHBhZGRpbmctYm90dG9tOiA1JTtcbiAgICAgIHdpZHRoOiAyNTBweDtcbiAgICB9XG4gICAgLm15LW92ZXJsYXkgaDIge1xuICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xuICAgIH1cbiAgICAubXktb3ZlcmxheSBwIHtcbiAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgcGFkZGluZy1ib3R0b206IDAlO1xuICAgIH1cbiAgICAubXktb3ZlcmxheSBpb24tY2FyZC1oZWFkZXIge1xuICAgICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XG4gICAgICBoZWlnaHQ6YXV0bztcbiAgICAgIHdpZHRoOjMwJTtcbiAgICAgIHBhZGRpbmctYm90dG9tOiA2JTtcbiAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIH1cbn1cbi8qXG4gKiBNYXRlcmlhbCBEZXNpZ24gTWVudVxuKi9cbmlvbi1tZW51Lm1kIGlvbi1saXN0IHtcbiAgICBwYWRkaW5nOiAwcHggMDtcbiAgfVxuICBcbiAgaW9uLW1lbnUubWQgaW9uLWl0ZW0ge1xuICAgIC0tcGFkZGluZy1zdGFydDogMThweDtcbiAgXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBcbiAgICBib3JkZXItcmFkaXVzOiAwIDUwcHggNTBweCAwO1xuICBcbiAgICBmb250LXdlaWdodDogNTAwO1xuICB9XG4gIGlvbi1tZW51Lm1kIGlvbi1pdGVtLnNlbGVjdGVkIHtcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZjJmMmYyKTtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZmZmKSAwJSwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsICNmMmYyZjIpIDEwMCUpICFpbXBvcnRhbnQ7XG4gIH1cbmlvbi1tZW51Lm1kIGlvbi1saXN0IHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi8qXG4gKiBpT1MgRGVzaWduIE1lbnVcbiovXG4gIGlvbi1tZW51LmlvcyBpb24tbGlzdCB7XG4gICAgcGFkZGluZzogMHB4IDAgMDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB9XG4gIGlvbi1tZW51LmlvcyBpb24taXRlbSB7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxNnB4O1xuICAgIC0tbWluLWhlaWdodDogNTBweDtcbiAgfVxuICAuaW9zIC5tZW51LWxvZ28tdGl0bGUge1xuICAgIGZvbnQtZmFtaWx5OiAnUmlkbGV5LW5vcm1hbCc7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgcGFkZGluZy1ib3R0b206IDJweDtcbiAgICAgICAgXG4gIH1cbiAgLmlvcyBpb24tbm90ZSBpb24tYmFkZ2Uge1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBjb2xvcjogI0ZGNjcxRTtcbiAgICBmb250LXNpemU6IDhweDtcbiAgfVxuICAuaW9zIC5mb290ZXItY29udGVudCB7XG4gICAgcGFkZGluZzogMThweDtcbiAgfVxuICAgIFxuICBpb24tbWVudS5pb3MgaW9uLWl0ZW0uc2VsZWN0ZWQge1xuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwgI2ZmZikgMCUsIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZjJmMmYyKSAxMDAlKSAhaW1wb3J0YW50O1xuICB9XG4gIFxuICBpb24tbWVudS5pb3MgaW9uLWxpc3Qge1xuICAgIHBhZGRpbmctYm90dG9tOiAwcHggIWltcG9ydGFudDtcbiAgfVxuXG5cblxuXG5cbiNmb290ZXItaXRlbSB7XG4gIC0tcGFkZGluZy1ib3R0b206IDBweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNXB4O1xufVxuXG5pb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tY2FyZC1oZWFkZXItY29sb3IpICFpbXBvcnRhbnQ7XG59XG5pb24tbWVudS10b2dnbGUgaW9uLWZvb3RlciAge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jYXJkLWhlYWRlci1jb2xvcikgIWltcG9ydGFudDtcbn0iLCIvKiogT1ZFUkxBWSBNRU5VICovXG4ubXktb3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsICNmMmYyZjIpO1xuICBvcGFjaXR5OiAxMDAlO1xuICB6LWluZGV4OiAyMDtcbiAgdG9wOiAwO1xuICBsZWZ0OiBhdXRvO1xuICByaWdodDogYXV0bztcbiAgcGFkZGluZzogMTAlO1xufVxuXG4ucmlwcGxlLXBhcmVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgLS1yaXBwbGUtY29sb3I6ICNmMmYyZjI7XG59XG5cbi5teS1vdmVybGF5IGlvbi1jYXJkIGlvbi1jYXJkLWhlYWRlciBpb24taXRlbSB7XG4gIHBhZGRpbmctYm90dG9tOiA1JTtcbn1cblxuLm15LW92ZXJsYXkgaW1nIHtcbiAgcGFkZGluZy1ib3R0b206IDUlO1xufVxuXG4ubXktb3ZlcmxheSBwIHtcbiAgcGFkZGluZy1ib3R0b206IDUlO1xufVxuXG4ubXktb3ZlcmxheS1idG4ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMjUlO1xufVxuXG4ubXktb3ZlcmxheSBpb24tY2FyZCB7XG4gIG9wYWNpdHk6IDEwMCU7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsICNmMmYyZjIpO1xuICBwYWRkaW5nOiAyNXB4O1xuICB0b3A6IDIwJTtcbiAgcGFkZGluZzogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaGlkZS1jaGNrYm94IHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4vKiogKi9cbi5tZWRpdW0tdGV4dCB7XG4gIG9wYWNpdHk6IDEuNTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLmZvb3Rlci1jb250ZW50IHtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG59XG5cbmlvbi1tZW51IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwgI2YyZjJmMik7XG59XG5cbmlvbi1tZW51IGlvbi1oZWFkZXIge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZjJmMmYyKTtcbn1cblxuaW9uLW1lbnUgaW9uLWhlYWRlciBpb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsICNmMmYyZjIpO1xufVxuXG5pb24tbWVudSBpb24tY29udGVudCB7XG4gIC0tcGFkZGluZy10b3A6IDEycHg7XG4gIC0tcGFkZGluZy1ib3R0b206IDIwcHg7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWl0ZW0tYmFja2dyb3VuZCwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsICNmZmYpKTtcbn1cblxuaW9uLWljb24ge1xuICBjb2xvcjogI0ZGNjcxRDtcbn1cblxuaW9uLW1lbnUgaW9uLWl0ZW0uc2VsZWN0ZWQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZjJmMmYyKTtcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZmZmKSAwJSwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsICNmMmYyZjIpIDEwMCUpICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1tZW51IGlvbi1pdGVtIHtcbiAgLS10cmFuc2l0aW9uOiBub25lO1xufVxuXG4uc29jaWFsLXdlYiB7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLnNvY2lhbC1sYmwge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5tZW51LWxvZ28ge1xuICBoZWlnaHQ6IGF1dG87XG4gIHdpZHRoOiAxOTBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDEwcHggNzBweCAwcHggMDtcbn1cblxuLyoqIERlc2t0b3AgVmVyc2lvbiAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkge1xuICAuc3BsaXRwYW5lIHtcbiAgICBtYXJnaW4tbGVmdDogMTgwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxODBweDtcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMDBweDtcbiAgfVxuXG4gIGlvbi1hcHAge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uL2Fzc2V0cy9taW5pVGlsZXMucG5nXCIpO1xuICB9XG5cbiAgaW9uLW1lbnUtdG9nZ2xlIHtcbiAgICBoZWlnaHQ6IDcycHg7XG4gIH1cblxuICAubWVudS1sb2dvIHtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcGFkZGluZzogMTBweCAyMHB4IDE1cHggMHB4O1xuICB9XG5cbiAgLm15LW92ZXJsYXkgaW9uLWNhcmQge1xuICAgIHRvcDogMCU7XG4gICAgd2lkdGg6IDY1MHB4O1xuICAgIGhlaWdodDogYXV0bztcbiAgICBtYXJnaW4tbGVmdDogMjglO1xuICB9XG5cbiAgLm15LW92ZXJsYXkgaW1nIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogNSU7XG4gICAgd2lkdGg6IDI1MHB4O1xuICB9XG5cbiAgLm15LW92ZXJsYXkgaDIge1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XG4gIH1cblxuICAubXktb3ZlcmxheSBwIHtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMCU7XG4gIH1cblxuICAubXktb3ZlcmxheSBpb24tY2FyZC1oZWFkZXIge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgd2lkdGg6IDMwJTtcbiAgICBwYWRkaW5nLWJvdHRvbTogNiU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gIH1cbn1cbi8qXG4gKiBNYXRlcmlhbCBEZXNpZ24gTWVudVxuKi9cbmlvbi1tZW51Lm1kIGlvbi1saXN0IHtcbiAgcGFkZGluZzogMHB4IDA7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxOHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDAgNTBweCA1MHB4IDA7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1pdGVtLnNlbGVjdGVkIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwgI2YyZjJmMik7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwgI2ZmZikgMCUsIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZjJmMmYyKSAxMDAlKSAhaW1wb3J0YW50O1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdCB7XG4gIHBhZGRpbmctYm90dG9tOiAwcHggIWltcG9ydGFudDtcbn1cblxuLypcbiAqIGlPUyBEZXNpZ24gTWVudVxuKi9cbmlvbi1tZW51LmlvcyBpb24tbGlzdCB7XG4gIHBhZGRpbmc6IDBweCAwIDA7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24taXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMTZweDtcbiAgLS1taW4taGVpZ2h0OiA1MHB4O1xufVxuXG4uaW9zIC5tZW51LWxvZ28tdGl0bGUge1xuICBmb250LWZhbWlseTogXCJSaWRsZXktbm9ybWFsXCI7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgcGFkZGluZy1ib3R0b206IDJweDtcbn1cblxuLmlvcyBpb24tbm90ZSBpb24tYmFkZ2Uge1xuICBtYXJnaW46IGF1dG87XG4gIGNvbG9yOiAjRkY2NzFFO1xuICBmb250LXNpemU6IDhweDtcbn1cblxuLmlvcyAuZm9vdGVyLWNvbnRlbnQge1xuICBwYWRkaW5nOiAxOHB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWl0ZW0uc2VsZWN0ZWQge1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwgI2ZmZikgMCUsIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZjJmMmYyKSAxMDAlKSAhaW1wb3J0YW50O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWxpc3Qge1xuICBwYWRkaW5nLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbiNmb290ZXItaXRlbSB7XG4gIC0tcGFkZGluZy1ib3R0b206IDBweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNXB4O1xufVxuXG5pb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tY2FyZC1oZWFkZXItY29sb3IpICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1tZW51LXRvZ2dsZSBpb24tZm9vdGVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tY2FyZC1oZWFkZXItY29sb3IpICFpbXBvcnRhbnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _service_minima_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./service/minima-api.service */ "./src/app/service/minima-api.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _service_darkMode_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./service/darkMode.service */ "./src/app/service/darkMode.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");








const { SplashScreen } = _capacitor_core__WEBPACK_IMPORTED_MODULE_7__["Plugins"];
let AppComponent = class AppComponent {
    constructor(platform, menu, router, api, darkMode, storage) {
        this.platform = platform;
        this.menu = menu;
        this.router = router;
        this.api = api;
        this.darkMode = darkMode;
        this.storage = storage;
        this.overlayHidden = false;
        this.currentRoute = '';
        this.currentMode = false;
        this.currentVersion = 0;
        this.getPages(); /** this returns pages if on mobile or desktop, (different layouts) */
        this.getPlatform(); /** Turn getPlatform() off if you want to use desktop version with desktop node */
        this.initializeApp();
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)'); /** check user preference */
        this.setLocalStorage(); /** set localStorages  */
    }
    /** @@@@@@@@@@@@@ Lifecycle @@@@@@@@@@@@@@@ */
    ionViewWillEnter() {
        this.initializeApp();
        localStorage.setItem('overlayVal', 'true');
    }
    initializeApp() {
        console.log('Minima initialized');
        this.platform.ready().then(() => {
            // set host.. taken from Minima.js
            Minima.init();
            this.api.setHost('http://' + Minima.host + '/');
        });
    }
    /** @@@@@@@@@@ Misc Functions @@@@@@@@@@@ */
    getPages() {
        if (this.platform.is('desktop') || this.platform.is('pwa')) {
            this.basic =
                [
                    { title: 'Balance', routerLink: '/balance', icon: 'card', line: 'none', hidden: false },
                    { title: 'Send', routerLink: '/send-funds', icon: 'send', line: 'none', hidden: false },
                    { title: 'Receive', routerLink: '/my-address', icon: 'arrow-down', line: 'none', hidden: false },
                    { title: 'History', routerLink: '/history', icon: 'book', line: 'full', hidden: false },
                ];
            this.advanced =
                [
                    { title: 'Token', routerLink: '/create-token', icon: 'brush', line: 'none', hidden: false },
                    { title: 'Status', routerLink: '/status', icon: 'analytics', line: 'none', hidden: false },
                    { title: 'Terminal', routerLink: '/mini-term', icon: 'code', line: 'full', hidden: false },
                    { title: 'Web', routerLink: '/web-scanner', icon: 'desktop', line: 'full', hidden: true },
                    { title: 'Community', routerLink: '/community', icon: 'share', line: 'none', hidden: false },
                ];
        }
        else {
            this.basic =
                [
                    { title: 'Balance', routerLink: '/balance', icon: 'card', line: 'none', hidden: false },
                    { title: 'Send', routerLink: '/send-funds', icon: 'send', line: 'none', hidden: false },
                    { title: 'Receive', routerLink: '/my-address', icon: 'arrow-down', line: 'none', hidden: false },
                    { title: 'History', routerLink: '/history', icon: 'book', line: 'full', hidden: false },
                ];
            this.advanced =
                [
                    { title: 'Token', routerLink: '/create-token', icon: 'brush', line: 'none', hidden: false },
                    { title: 'Status', routerLink: '/status', icon: 'analytics', line: 'none', hidden: false },
                    { title: 'Terminal', routerLink: '/mini-term', icon: 'code', line: 'none', hidden: false },
                    { title: 'Web', routerLink: '/web-scanner', icon: 'desktop', line: 'full', hidden: true },
                    { title: 'Community', routerLink: '/community', icon: 'share', line: 'none', hidden: false },
                ];
        }
    }
    // HIDE OVERLAY
    hideOverlay() {
        setTimeout(() => {
            this.overlayHidden = true;
        }, 400);
    }
    // localStorage
    setLocalStorage() {
        //check cookies for theme
        if (localStorage.getItem('toggleVal') === 'true') {
            document.body.classList.toggle('dark', true);
        }
        else {
            document.body.classList.toggle('dark', false);
        }
        //check cookies for overlay welcome screen
        if (localStorage.getItem('overlayVal') === 'true') {
            this.overlayHidden = true;
        }
        else {
            this.overlayHidden = false;
        }
        // localStoraghe - overlayVal
        localStorage.setItem('overlayVal', 'true');
        // localStorage - termFontSize
        if (!localStorage.getItem('termFontSize')) {
            localStorage.setItem('termFontSize', "" + 14);
        }
    }
    // get a key/value object
    getObject(key) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                const result = yield this.storage.get(key);
                if (result != null) {
                    return JSON.parse(result);
                }
                return null;
            }
            catch (reason) {
                console.log(reason);
                return null;
            }
        });
    }
    // returns logo that should be used with dark mode/light 
    getImg() {
        if (document.body.classList.contains('dark')) {
            return './assets/MINIMADARKMODE.svg';
        }
        else if (this.currentMode === false) {
            return './assets/MINIMALIGHTMODE.svg';
        }
    }
    // checking if desktop
    isThisDesktop() {
        if (this.platform.is('desktop')) {
            return true;
        }
        else {
            return false;
        }
    }
    // return platform to assert Minima Web or Minima Native
    getPlatform() {
        //Minima.logout();
        /*  If on desktop do this.. */
        if (this.platform.is('desktop')) {
            window.addEventListener('load', (ev) => {
                // Page loaded
                window.addEventListener('MinimaEvent', (evt) => {
                    // Event connection success
                    if (evt.detail.event === 'connected') {
                        // now connected with host minima.host
                        this.api.setHost('http://' + Minima.host + '/');
                    }
                    else if (evt.detail.event === 'newbalance') {
                        this.notifyMe();
                    }
                    else if (evt.detail.event === 'newblock') {
                    }
                });
                Minima.init();
            });
        }
        else if (this.platform.is('ios')) {
            console.log('Running Minima on iOS');
        }
        else if (this.platform.is('android')) {
            console.log('Running Minima on Android');
        }
    }
    getVersion() {
        this.api.getStatus().then((res) => {
            // Check node's version..
            this.currentVersion = res.response.version;
        });
    }
    betaTap() {
        alert("Minima Node Version 0.4");
    }
    notifyMe() {
        //let notificationIcon = '../assets/icon/icon.png';
        let notificationBody = 'You just received some tokens';
        // Let's check if the browser supports notifications
        if (!("Notification" in window)) {
            alert("This browser does not support desktop notification");
        }
        // Let's check whether notification permissions have already been granted
        else if (Notification.permission === "granted") {
            // If it's okay let's create a notification
            var notification = new Notification("Minima", {
                //icon: notificationIcon,
                body: notificationBody
            });
        }
        // Otherwise, we need to ask the user for permission
        else if (Notification.permission !== "denied") {
            Notification.requestPermission().then(function (permission) {
                // If the user accepts, let's create a notification
                if (permission === "granted") {
                    var notification = new Notification("Minima", {
                        //icon: notificationIcon,
                        body: notificationBody
                    });
                }
            });
        }
        // At last, if the user has denied notifications, and you 
        // want to be respectful there is no need to bother them any more.
    }
};
AppComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _service_minima_api_service__WEBPACK_IMPORTED_MODULE_1__["MinimaApiService"] },
    { type: _service_darkMode_service__WEBPACK_IMPORTED_MODULE_5__["darkMode"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _service_minima_api_service__WEBPACK_IMPORTED_MODULE_1__["MinimaApiService"],
        _service_darkMode_service__WEBPACK_IMPORTED_MODULE_5__["darkMode"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"]])
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/clipboard/ngx */ "./node_modules/@ionic-native/clipboard/ngx/index.js");
/* harmony import */ var _ionic_native_qr_scanner_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/qr-scanner/ngx */ "./node_modules/@ionic-native/qr-scanner/ngx/index.js");
/* harmony import */ var _components_pop_over_pop_over_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/pop-over/pop-over.component */ "./src/app/components/pop-over/pop-over.component.ts");
/* harmony import */ var _components_pop_term_pop_term_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/pop-term/pop-term.component */ "./src/app/components/pop-term/pop-term.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _components_historymodal_historymodal_page__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/historymodal/historymodal.page */ "./src/app/components/historymodal/historymodal.page.ts");
/* harmony import */ var _components_historytokenmodal_historytokenmodal_page__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/historytokenmodal/historytokenmodal.page */ "./src/app/components/historytokenmodal/historytokenmodal.page.ts");
/* harmony import */ var _components_token_descr_token_descr_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/token-descr/token-descr.component */ "./src/app/components/token-descr/token-descr.component.ts");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");
/*
  Created by Elias Nemr
  
  01/11/2019
  
  Minima, Global

  Wallet
*/




















/*
  NgModules configure the injector and the compiler and help organize related things together.

  An NgModule is a class marked by the @NgModule decorator. @NgModule takes a metadata object that
    describes how to compile a component's template and how to create an injector at runtime. It
    identifies the module's own components, directives, and pipes, making some of them public,
    through the exports property, so that external components can use them. @NgModule can also add
    service providers to the application dependency injectors.
*/
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _components_pop_over_pop_over_component__WEBPACK_IMPORTED_MODULE_11__["PopOverComponent"], _components_pop_term_pop_term_component__WEBPACK_IMPORTED_MODULE_12__["PopTermComponent"], _components_historymodal_historymodal_page__WEBPACK_IMPORTED_MODULE_15__["HistorymodalPage"], _components_historytokenmodal_historytokenmodal_page__WEBPACK_IMPORTED_MODULE_16__["HistorytokenmodalPage"], _components_token_descr_token_descr_component__WEBPACK_IMPORTED_MODULE_17__["TokenDescrComponent"]],
        entryComponents: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _components_pop_over_pop_over_component__WEBPACK_IMPORTED_MODULE_11__["PopOverComponent"], _components_pop_term_pop_term_component__WEBPACK_IMPORTED_MODULE_12__["PopTermComponent"], _components_historymodal_historymodal_page__WEBPACK_IMPORTED_MODULE_15__["HistorymodalPage"], _components_historytokenmodal_historytokenmodal_page__WEBPACK_IMPORTED_MODULE_16__["HistorytokenmodalPage"], _components_token_descr_token_descr_component__WEBPACK_IMPORTED_MODULE_17__["TokenDescrComponent"]],
        imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], _ionic_storage__WEBPACK_IMPORTED_MODULE_14__["IonicStorageModule"].forRoot()],
        providers: [
            _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_18__["SocialSharing"],
            Storage,
            _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_9__["Clipboard"],
            _ionic_native_qr_scanner_ngx__WEBPACK_IMPORTED_MODULE_10__["QRScanner"],
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"], useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicRouteStrategy"] },
            { provide: _angular_common__WEBPACK_IMPORTED_MODULE_13__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_13__["HashLocationStrategy"] },
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/historymodal/historymodal.page.scss":
/*!****************************************************************!*\
  !*** ./src/app/components/historymodal/historymodal.page.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dismiss-btn {\n  height: auto;\n  float: right;\n  color: #48D2D3;\n  --color-hover: #EE6E73;\n}\n\n.information {\n  text-align: right;\n  font-weight: 300;\n}\n\n.completed {\n  text-align: right;\n  padding-top: 15px;\n  font-weight: 600;\n  font-size: 20px;\n  color: #48D2D3;\n}\n\n.info-lbl {\n  text-align: left;\n  font-weight: 700;\n}\n\nion-card-header {\n  width: 100%;\n  background: var(--card-header-color);\n  margin-left: auto;\n  margin-right: auto;\n  white-space: nowrap;\n  font-size: 16px;\n}\n\nion-card-header ion-grid {\n  text-align: center;\n}\n\nion-card-header ion-icon {\n  --ionicon-stroke-width: 60px;\n}\n\nion-card-header h2 {\n  font-size: 22px;\n  white-space: normal;\n  word-wrap: break-word;\n  word-break: break-all;\n}\n\n#msg {\n  width: 100%;\n  font-size: 18px;\n  font-weight: bold;\n  white-space: normal;\n  word-wrap: break-word;\n  word-break: break-all;\n}\n\nion-card {\n  --overflow: hidden;\n  background: -webkit-gradient(linear, left top, left bottom, from(var(--ion-background-color, #fff)), to(var(--ion-background-color, #f2f2f2))) !important;\n  background: linear-gradient(to bottom, var(--ion-background-color, #fff) 0%, var(--ion-background-color, #f2f2f2) 100%) !important;\n}\n\nion-list {\n  background: -webkit-gradient(linear, left top, left bottom, from(var(--ion-background-color, #fff)), to(var(--ion-background-color, #f2f2f2))) !important;\n  background: linear-gradient(to bottom, var(--ion-background-color, #fff) 0%, var(--ion-background-color, #f2f2f2) 100%) !important;\n}\n\nion-content {\n  --background: transparent;\n}\n\nion-header ion-toolbar {\n  --background: #f2f2f2;\n}\n\n/** Modal Custom Header... avoiding Shadow DOM */\n\n.custom-toolbar {\n  background: -webkit-gradient(linear, left top, left bottom, from(var(--ion-background-color, #fff)), to(var(--ion-background-color, #f2f2f2))) !important;\n  background: linear-gradient(to bottom, var(--ion-background-color, #fff) 0%, var(--ion-background-color, #f2f2f2) 100%) !important;\n  width: 100%;\n  -webkit-padding-start: 5px;\n          padding-inline-start: 5px;\n  -webkit-padding-end: 5px;\n          padding-inline-end: 5px;\n  padding-bottom: 10px;\n  padding-top: 10px;\n}\n\n.txpow_id {\n  color: #666666;\n}\n\n.txpow {\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGlhcy9Qcm9qZWN0cy9taW5pbWFjb3JlL21vYmlsZS1hcHAtZnJvbnQtZW5kL2FwcC9zcmMvYXBwL2NvbXBvbmVudHMvaGlzdG9yeW1vZGFsL2hpc3Rvcnltb2RhbC5wYWdlLnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvaGlzdG9yeW1vZGFsL2hpc3Rvcnltb2RhbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFFQSxzQkFBQTtBQ0FKOztBREVBO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtBQ0NKOztBRENBO0VBQ0ksaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNFSjs7QURBQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7QUNHSjs7QUREQTtFQUNJLFdBQUE7RUFDQSxvQ0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUNJSjs7QURGQTtFQUNJLGtCQUFBO0FDS0o7O0FESEE7RUFDSSw0QkFBQTtBQ01KOztBREpBO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtBQ09KOztBRExBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtBQ1FKOztBRExBO0VBQ0ksa0JBQUE7RUFDQSx5SkFBQTtFQUFBLGtJQUFBO0FDUUo7O0FETkE7RUFDSSx5SkFBQTtFQUFBLGtJQUFBO0FDU0o7O0FETkE7RUFDSSx5QkFBQTtBQ1NKOztBRE5BO0VBQ0kscUJBQUE7QUNTSjs7QURMQSxnREFBQTs7QUFDQTtFQUNJLHlKQUFBO0VBQUEsa0lBQUE7RUFDQSxXQUFBO0VBQ0EsMEJBQUE7VUFBQSx5QkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0FDUUo7O0FETkE7RUFDSSxjQUFBO0FDU0o7O0FEUEE7RUFDSSxnQkFBQTtBQ1VKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9oaXN0b3J5bW9kYWwvaGlzdG9yeW1vZGFsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kaXNtaXNzLWJ0biB7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBjb2xvcjogIzQ4RDJEMztcblxuICAgIC0tY29sb3ItaG92ZXI6ICNFRTZFNzM7XG59XG4uaW5mb3JtYXRpb24ge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0OyBcbiAgICBmb250LXdlaWdodDogMzAwO1xufVxuLmNvbXBsZXRlZCB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgcGFkZGluZy10b3A6IDE1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgY29sb3I6ICM0OEQyRDM7XG59XG4uaW5mby1sYmwge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cbmlvbi1jYXJkLWhlYWRlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tY2FyZC1oZWFkZXItY29sb3IpO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbn1cbmlvbi1jYXJkLWhlYWRlciBpb24tZ3JpZCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuaW9uLWNhcmQtaGVhZGVyIGlvbi1pY29uIHtcbiAgICAtLWlvbmljb24tc3Ryb2tlLXdpZHRoOiA2MHB4O1xufVxuaW9uLWNhcmQtaGVhZGVyIGgyIHtcbiAgICBmb250LXNpemU6IDIycHg7XG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgd29yZC1icmVhazogYnJlYWstYWxsO1xufVxuI21zZ3tcbiAgICB3aWR0aDoxMDAlO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG59XG4vLyBoaWRlIHNjcm9sbGluZyBcbmlvbi1jYXJkIHtcbiAgICAtLW92ZXJmbG93OiBoaWRkZW47XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZmZmKSAwJSwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsICNmMmYyZjIpIDEwMCUpICFpbXBvcnRhbnQ7XG59XG5pb24tbGlzdCB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZmZmKSAwJSwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsICNmMmYyZjIpIDEwMCUpICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG5pb24taGVhZGVyIGlvbi10b29sYmFyIHtcbiAgICAtLWJhY2tncm91bmQ6ICNmMmYyZjI7XG59XG5cblxuLyoqIE1vZGFsIEN1c3RvbSBIZWFkZXIuLi4gYXZvaWRpbmcgU2hhZG93IERPTSAqL1xuLmN1c3RvbS10b29sYmFyIHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsICNmZmYpIDAlLCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwgI2YyZjJmMikgMTAwJSkgIWltcG9ydGFudDtcbiAgICB3aWR0aDoxMDAlO1xuICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiA1cHg7XG4gICAgcGFkZGluZy1pbmxpbmUtZW5kOiA1cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG59XG4udHhwb3dfaWQge1xuICAgIGNvbG9yOiAjNjY2NjY2O1xufVxuLnR4cG93IHtcbiAgICBmb250LXdlaWdodDogNjAwO1xufSIsIi5kaXNtaXNzLWJ0biB7XG4gIGhlaWdodDogYXV0bztcbiAgZmxvYXQ6IHJpZ2h0O1xuICBjb2xvcjogIzQ4RDJEMztcbiAgLS1jb2xvci1ob3ZlcjogI0VFNkU3Mztcbn1cblxuLmluZm9ybWF0aW9uIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5cbi5jb21wbGV0ZWQge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgcGFkZGluZy10b3A6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6ICM0OEQyRDM7XG59XG5cbi5pbmZvLWxibCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbmlvbi1jYXJkLWhlYWRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jYXJkLWhlYWRlci1jb2xvcik7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuaW9uLWNhcmQtaGVhZGVyIGlvbi1ncmlkIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5pb24tY2FyZC1oZWFkZXIgaW9uLWljb24ge1xuICAtLWlvbmljb24tc3Ryb2tlLXdpZHRoOiA2MHB4O1xufVxuXG5pb24tY2FyZC1oZWFkZXIgaDIge1xuICBmb250LXNpemU6IDIycHg7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xufVxuXG4jbXNnIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xufVxuXG5pb24tY2FyZCB7XG4gIC0tb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsICNmZmYpIDAlLCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwgI2YyZjJmMikgMTAwJSkgIWltcG9ydGFudDtcbn1cblxuaW9uLWxpc3Qge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwgI2ZmZikgMCUsIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZjJmMmYyKSAxMDAlKSAhaW1wb3J0YW50O1xufVxuXG5pb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbmlvbi1oZWFkZXIgaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6ICNmMmYyZjI7XG59XG5cbi8qKiBNb2RhbCBDdXN0b20gSGVhZGVyLi4uIGF2b2lkaW5nIFNoYWRvdyBET00gKi9cbi5jdXN0b20tdG9vbGJhciB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZmZmKSAwJSwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsICNmMmYyZjIpIDEwMCUpICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLWlubGluZS1zdGFydDogNXB4O1xuICBwYWRkaW5nLWlubGluZS1lbmQ6IDVweDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuXG4udHhwb3dfaWQge1xuICBjb2xvcjogIzY2NjY2Njtcbn1cblxuLnR4cG93IHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/historymodal/historymodal.page.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/historymodal/historymodal.page.ts ***!
  \**************************************************************/
/*! exports provided: HistorymodalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistorymodalPage", function() { return HistorymodalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



let HistorymodalPage = class HistorymodalPage {
    constructor(modalCtrl, navParams) {
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
    }
    ngOnInit() {
        // retrieve some needed vars for the modal
        this.txpow = this.navParams.get('TXPOW_ID');
        //console.log("TXPOW is.."+ this.txpow);
        Minima.cmd('txpowinfo ' + this.txpow, (res) => {
            this.ispartofchain = JSON.stringify(res.response.ischainblock);
            this.isinblock = JSON.stringify(res.response.isinblock);
            //console.log('ispartofchain: '+this.ispartofchain + ' isinblock: '+ this.isinblock);
        });
    }
    getTXNType(amount) {
        if (amount.substring(0, 1) === "-") {
            return "arrow-round-back";
        }
        else {
            return "arrow-round-forward";
        }
    }
    dismiss() {
        // using the injected ModalController this page
        // can "dismiss" itself and optionally pass back data
        this.modalCtrl.dismiss({
            'dismissed': true
        });
    }
};
HistorymodalPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"] }
];
HistorymodalPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-historymodal',
        template: __webpack_require__(/*! raw-loader!./historymodal.page.html */ "./node_modules/raw-loader/index.js!./src/app/components/historymodal/historymodal.page.html"),
        styles: [__webpack_require__(/*! ./historymodal.page.scss */ "./src/app/components/historymodal/historymodal.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"]])
], HistorymodalPage);



/***/ }),

/***/ "./src/app/components/historytokenmodal/historytokenmodal.page.scss":
/*!**************************************************************************!*\
  !*** ./src/app/components/historytokenmodal/historytokenmodal.page.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dismiss-btn {\n  height: auto;\n  float: right;\n  color: #48D2D3;\n  --color-hover: #EE6E73;\n}\n\n.information {\n  text-align: right;\n  font-weight: 400;\n}\n\n.completed {\n  text-align: right;\n  padding-top: 15px;\n  font-weight: bold;\n  font-size: 20px;\n  color: #48D2D3;\n}\n\n.info-lbl {\n  text-align: left;\n  font-weight: 700;\n}\n\nion-card-header {\n  width: 100%;\n  background: var(--card-header-color);\n  margin-left: auto;\n  margin-right: auto;\n  white-space: nowrap;\n  font-size: 16px;\n}\n\nion-card-header ion-grid {\n  text-align: center;\n}\n\nion-card-header ion-icon {\n  --ionicon-stroke-width: 60px;\n}\n\nion-card-header h2 {\n  font-size: 22px;\n  white-space: normal;\n  word-wrap: break-word;\n  word-break: break-all;\n}\n\n#msg {\n  width: 100%;\n  font-size: 14px;\n  font-weight: bold;\n  white-space: normal;\n  word-wrap: break-word;\n  word-break: break-all;\n}\n\nion-card {\n  --overflow: hidden;\n  background: -webkit-gradient(linear, left top, left bottom, from(var(--ion-background-color, #fff)), to(var(--ion-background-color, #f2f2f2))) !important;\n  background: linear-gradient(to bottom, var(--ion-background-color, #fff) 0%, var(--ion-background-color, #f2f2f2) 100%) !important;\n}\n\nion-list {\n  background: -webkit-gradient(linear, left top, left bottom, from(var(--ion-background-color, #fff)), to(var(--ion-background-color, #f2f2f2))) !important;\n  background: linear-gradient(to bottom, var(--ion-background-color, #fff) 0%, var(--ion-background-color, #f2f2f2) 100%) !important;\n}\n\nh3 {\n  font-weight: 700;\n}\n\nion-content {\n  --background: transparent;\n}\n\n/** Modal Custom Header... avoiding Shadow DOM */\n\n.custom-toolbar {\n  background: -webkit-gradient(linear, left top, left bottom, from(var(--ion-background-color, #fff)), to(var(--ion-background-color, #f2f2f2))) !important;\n  background: linear-gradient(to bottom, var(--ion-background-color, #fff) 0%, var(--ion-background-color, #f2f2f2) 100%) !important;\n  width: 100%;\n  -webkit-padding-start: 5px;\n          padding-inline-start: 5px;\n  -webkit-padding-end: 5px;\n          padding-inline-end: 5px;\n  padding-bottom: 10px;\n  padding-top: 10px;\n}\n\n.txpow_id {\n  color: #666666;\n}\n\n.txpow {\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGlhcy9Qcm9qZWN0cy9taW5pbWFjb3JlL21vYmlsZS1hcHAtZnJvbnQtZW5kL2FwcC9zcmMvYXBwL2NvbXBvbmVudHMvaGlzdG9yeXRva2VubW9kYWwvaGlzdG9yeXRva2VubW9kYWwucGFnZS5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2hpc3Rvcnl0b2tlbm1vZGFsL2hpc3Rvcnl0b2tlbm1vZGFsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUVBLHNCQUFBO0FDQUo7O0FERUE7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ0VKOztBREFBO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtBQ0dKOztBRERBO0VBQ0ksV0FBQTtFQUNBLG9DQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQ0lKOztBREZBO0VBQ0ksa0JBQUE7QUNLSjs7QURIQTtFQUNJLDRCQUFBO0FDTUo7O0FESkE7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0FDT0o7O0FETEE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0FDUUo7O0FETkE7RUFDSSxrQkFBQTtFQUNBLHlKQUFBO0VBQUEsa0lBQUE7QUNTSjs7QUROQTtFQUNJLHlKQUFBO0VBQUEsa0lBQUE7QUNTSjs7QUROQTtFQUNJLGdCQUFBO0FDU0o7O0FETkE7RUFDSSx5QkFBQTtBQ1NKOztBREpBLGdEQUFBOztBQUNBO0VBQ0kseUpBQUE7RUFBQSxrSUFBQTtFQUNBLFdBQUE7RUFDQSwwQkFBQTtVQUFBLHlCQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7QUNPSjs7QURMQTtFQUNJLGNBQUE7QUNRSjs7QUROQTtFQUNJLGdCQUFBO0FDU0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hpc3Rvcnl0b2tlbm1vZGFsL2hpc3Rvcnl0b2tlbm1vZGFsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kaXNtaXNzLWJ0biB7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBjb2xvcjogIzQ4RDJEMztcblxuICAgIC0tY29sb3ItaG92ZXI6ICNFRTZFNzM7XG59XG4uaW5mb3JtYXRpb24ge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0OyBcbiAgICBmb250LXdlaWdodDogNDAwO1xufVxuLmNvbXBsZXRlZCB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgcGFkZGluZy10b3A6IDE1cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGNvbG9yOiAjNDhEMkQzO1xufVxuLmluZm8tbGJsIHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5pb24tY2FyZC1oZWFkZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWNhcmQtaGVhZGVyLWNvbG9yKTtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBmb250LXNpemU6IDE2cHg7XG59XG5pb24tY2FyZC1oZWFkZXIgaW9uLWdyaWQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbmlvbi1jYXJkLWhlYWRlciBpb24taWNvbiB7XG4gICAgLS1pb25pY29uLXN0cm9rZS13aWR0aDogNjBweDtcbn1cbmlvbi1jYXJkLWhlYWRlciBoMiB7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcbn1cbiNtc2d7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcbn1cbmlvbi1jYXJkIHtcbiAgICAtLW92ZXJmbG93OiBoaWRkZW47XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZmZmKSAwJSwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsICNmMmYyZjIpIDEwMCUpICFpbXBvcnRhbnQ7XG4gICAgXG59XG5pb24tbGlzdCB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZmZmKSAwJSwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsICNmMmYyZjIpIDEwMCUpICFpbXBvcnRhbnQ7XG59XG5cbmgzIHtcbiAgICBmb250LXdlaWdodDogNzAwO1xufVxuXG5pb24tY29udGVudCB7XG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuXG5cbi8qKiBNb2RhbCBDdXN0b20gSGVhZGVyLi4uIGF2b2lkaW5nIFNoYWRvdyBET00gKi9cbi5jdXN0b20tdG9vbGJhciB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZmZmKSAwJSwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsICNmMmYyZjIpIDEwMCUpICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6MTAwJTtcbiAgICBwYWRkaW5nLWlubGluZS1zdGFydDogNXB4O1xuICAgIHBhZGRpbmctaW5saW5lLWVuZDogNXB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuLnR4cG93X2lkIHtcbiAgICBjb2xvcjogIzY2NjY2Njtcbn1cbi50eHBvdyB7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbn0iLCIuZGlzbWlzcy1idG4ge1xuICBoZWlnaHQ6IGF1dG87XG4gIGZsb2F0OiByaWdodDtcbiAgY29sb3I6ICM0OEQyRDM7XG4gIC0tY29sb3ItaG92ZXI6ICNFRTZFNzM7XG59XG5cbi5pbmZvcm1hdGlvbiB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG4uY29tcGxldGVkIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHBhZGRpbmctdG9wOiAxNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogIzQ4RDJEMztcbn1cblxuLmluZm8tbGJsIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuaW9uLWNhcmQtaGVhZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHZhcigtLWNhcmQtaGVhZGVyLWNvbG9yKTtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG5pb24tY2FyZC1oZWFkZXIgaW9uLWdyaWQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlvbi1jYXJkLWhlYWRlciBpb24taWNvbiB7XG4gIC0taW9uaWNvbi1zdHJva2Utd2lkdGg6IDYwcHg7XG59XG5cbmlvbi1jYXJkLWhlYWRlciBoMiB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG59XG5cbiNtc2cge1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG59XG5cbmlvbi1jYXJkIHtcbiAgLS1vdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwgI2ZmZikgMCUsIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZjJmMmYyKSAxMDAlKSAhaW1wb3J0YW50O1xufVxuXG5pb24tbGlzdCB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZmZmKSAwJSwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsICNmMmYyZjIpIDEwMCUpICFpbXBvcnRhbnQ7XG59XG5cbmgzIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG4vKiogTW9kYWwgQ3VzdG9tIEhlYWRlci4uLiBhdm9pZGluZyBTaGFkb3cgRE9NICovXG4uY3VzdG9tLXRvb2xiYXIge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwgI2ZmZikgMCUsIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZjJmMmYyKSAxMDAlKSAhaW1wb3J0YW50O1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDVweDtcbiAgcGFkZGluZy1pbmxpbmUtZW5kOiA1cHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICBwYWRkaW5nLXRvcDogMTBweDtcbn1cblxuLnR4cG93X2lkIHtcbiAgY29sb3I6ICM2NjY2NjY7XG59XG5cbi50eHBvdyB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/historytokenmodal/historytokenmodal.page.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/historytokenmodal/historytokenmodal.page.ts ***!
  \************************************************************************/
/*! exports provided: HistorytokenmodalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistorytokenmodalPage", function() { return HistorytokenmodalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



let HistorytokenmodalPage = class HistorytokenmodalPage {
    constructor(modalCtrl, navParams) {
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
    }
    ngOnInit() {
        // retrieve some needed vars for the modal
        this.txpow = this.navParams.get('TXPOW_ID');
        //console.log("TXPOW is.."+ this.txpow);
        Minima.cmd('txpowinfo ' + this.txpow, (res) => {
            this.ispartofchain = JSON.stringify(res.response.ischainblock);
            this.isinblock = JSON.stringify(res.response.isinblock);
            //console.log('ispartofchain: '+this.ispartofchain + ' isinblock: '+ this.isinblock);
        });
    }
    dismiss() {
        // using the injected ModalController this page
        // can "dismiss" itself and optionally pass back data
        this.modalCtrl.dismiss({
            'dismissed': true
        });
    }
};
HistorytokenmodalPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"] }
];
HistorytokenmodalPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-historytokenmodal',
        template: __webpack_require__(/*! raw-loader!./historytokenmodal.page.html */ "./node_modules/raw-loader/index.js!./src/app/components/historytokenmodal/historytokenmodal.page.html"),
        styles: [__webpack_require__(/*! ./historytokenmodal.page.scss */ "./src/app/components/historytokenmodal/historytokenmodal.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"]])
], HistorytokenmodalPage);



/***/ }),

/***/ "./src/app/components/pop-over/pop-over.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/pop-over/pop-over.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\n  word-break: break-all;\n  word-wrap: break-word;\n  white-space: normal;\n  -webkit-hyphens: auto;\n      -ms-hyphens: auto;\n          hyphens: auto;\n}\n\n/** no scrolling on pop-over */\n\nion-app.disable-scroll ion-content > .scroll-content {\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGlhcy9Qcm9qZWN0cy9taW5pbWFjb3JlL21vYmlsZS1hcHAtZnJvbnQtZW5kL2FwcC9zcmMvYXBwL2NvbXBvbmVudHMvcG9wLW92ZXIvcG9wLW92ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvcG9wLW92ZXIvcG9wLW92ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT0E7RUFDSSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtNQUFBLGlCQUFBO1VBQUEsYUFBQTtBQ05KOztBRFNBLDhCQUFBOztBQUVJO0VBQ0ksZ0JBQUE7QUNQUiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcG9wLW92ZXIvcG9wLW92ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSB7XG4vLyAgICAgaW9uLWxpc3Qge1xuLy8gICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9taW5pbWF0aWxlLnBuZycpO1xuICAgICAgICBcbi8vICAgICB9XG4vLyB9XG5cbnAge1xuICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgICBoeXBoZW5zOiBhdXRvO1xufVxuXG4vKiogbm8gc2Nyb2xsaW5nIG9uIHBvcC1vdmVyICovXG5pb24tYXBwLmRpc2FibGUtc2Nyb2xsIHtcbiAgICBpb24tY29udGVudD4uc2Nyb2xsLWNvbnRlbnQge1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIH1cbn1cblxuXG4iLCJwIHtcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gIGh5cGhlbnM6IGF1dG87XG59XG5cbi8qKiBubyBzY3JvbGxpbmcgb24gcG9wLW92ZXIgKi9cbmlvbi1hcHAuZGlzYWJsZS1zY3JvbGwgaW9uLWNvbnRlbnQgPiAuc2Nyb2xsLWNvbnRlbnQge1xuICBvdmVyZmxvdzogaGlkZGVuO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/pop-over/pop-over.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/pop-over/pop-over.component.ts ***!
  \***********************************************************/
/*! exports provided: PopOverComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopOverComponent", function() { return PopOverComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/clipboard/ngx */ "./node_modules/@ionic-native/clipboard/ngx/index.js");




let PopOverComponent = class PopOverComponent {
    constructor(navParams, clipboard, alertController, platform, toastCtrl) {
        this.navParams = navParams;
        this.clipboard = clipboard;
        this.alertController = alertController;
        this.platform = platform;
        this.toastCtrl = toastCtrl;
        this.refTokenid = '';
    }
    ngOnInit() {
        this.refTokenid = this.navParams.get('tokenid');
    }
    ionViewWillEnter() {
        document.getElementsByTagName("ion-app").item(0).classList.add("disable-scroll"); //ATTACH .disable-scroll css
    }
    ionViewWillLeave() {
        if (document.getElementsByTagName("ion-app").item(0).classList.contains("disable-scroll"))
            document.getElementsByTagName("ion-app").item(0).classList.remove("disable-scroll"); //DETACH .disable-scroll css
    }
    copyToClipboard() {
        if (this.platform.is('desktop') || this.platform.is('pwa')) {
            this.copyToClipPWA();
            this.presentAlert("Copied to clipboard.", "Success");
        }
        else {
            this.clipboard.copy(this.refTokenid);
            this.presentAlert("Copied to clipboard", "Success");
        }
    }
    copyToClipPWA() {
        document.addEventListener('copy', (e) => {
            e.clipboardData.setData('text/plain', this.refTokenid);
            e.preventDefault();
            document.removeEventListener('copy', null);
        });
        document.execCommand('copy');
    }
    presentAlert(msg, header) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: header,
                message: msg,
                cssClass: "no-scroll",
                buttons: ['Cancel', 'Ok']
            });
            yield alert.present();
        });
    }
};
PopOverComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"] },
    { type: _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_3__["Clipboard"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("tokenName"),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], PopOverComponent.prototype, "tokenName", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("tokenId"),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], PopOverComponent.prototype, "tokenId", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('textToCopy'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], PopOverComponent.prototype, "textToCopy", void 0);
PopOverComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-pop-over',
        template: __webpack_require__(/*! raw-loader!./pop-over.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/pop-over/pop-over.component.html"),
        styles: [__webpack_require__(/*! ./pop-over.component.scss */ "./src/app/components/pop-over/pop-over.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"],
        _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_3__["Clipboard"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]])
], PopOverComponent);



/***/ }),

/***/ "./src/app/components/pop-term/pop-term.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/pop-term/pop-term.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".activate-btn-minus {\n  color: #929396;\n  text-align: centre;\n  font-size: 12px;\n}\n\n.activate-btn-add {\n  color: #929396;\n  text-align: center;\n  font-size: 20px;\n}\n\n.ios ion-button {\n  margin: auto;\n}\n\n.ios .pop-term-col {\n  width: 100%;\n  height: auto;\n}\n\n.ios .activate-btn-minus {\n  color: #929396;\n  padding-top: 18px;\n  font-size: 14px;\n  text-align: center;\n}\n\n.ios .activate-btn-add {\n  color: #929396;\n  font-size: 20px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGlhcy9Qcm9qZWN0cy9taW5pbWFjb3JlL21vYmlsZS1hcHAtZnJvbnQtZW5kL2FwcC9zcmMvYXBwL2NvbXBvbmVudHMvcG9wLXRlcm0vcG9wLXRlcm0uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvcG9wLXRlcm0vcG9wLXRlcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDQ0o7O0FEQ0E7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDRUo7O0FERUE7RUFDSSxZQUFBO0FDQ0o7O0FEQ0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ0VKOztBREFBO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDR0o7O0FEREE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDSUoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3BvcC10ZXJtL3BvcC10ZXJtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFjdGl2YXRlLWJ0bi1taW51cyB7XG4gICAgY29sb3I6ICM5MjkzOTY7XG4gICAgdGV4dC1hbGlnbjogY2VudHJlO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5hY3RpdmF0ZS1idG4tYWRkIHtcbiAgICBjb2xvcjogIzkyOTM5NjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4vLyBpT1MgZWRpdC5cbi5pb3MgaW9uLWJ1dHRvbiB7XG4gICAgbWFyZ2luOiBhdXRvO1xufVxuLmlvcyAucG9wLXRlcm0tY29sIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87ICBcbn1cbi5pb3MgLmFjdGl2YXRlLWJ0bi1taW51cyB7XG4gICAgY29sb3I6ICM5MjkzOTY7XG4gICAgcGFkZGluZy10b3A6IDE4cHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5pb3MgLmFjdGl2YXRlLWJ0bi1hZGQge1xuICAgIGNvbG9yOiAjOTI5Mzk2O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4iLCIuYWN0aXZhdGUtYnRuLW1pbnVzIHtcbiAgY29sb3I6ICM5MjkzOTY7XG4gIHRleHQtYWxpZ246IGNlbnRyZTtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uYWN0aXZhdGUtYnRuLWFkZCB7XG4gIGNvbG9yOiAjOTI5Mzk2O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLmlvcyBpb24tYnV0dG9uIHtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4uaW9zIC5wb3AtdGVybS1jb2wge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4uaW9zIC5hY3RpdmF0ZS1idG4tbWludXMge1xuICBjb2xvcjogIzkyOTM5NjtcbiAgcGFkZGluZy10b3A6IDE4cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaW9zIC5hY3RpdmF0ZS1idG4tYWRkIHtcbiAgY29sb3I6ICM5MjkzOTY7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/pop-term/pop-term.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/pop-term/pop-term.component.ts ***!
  \***********************************************************/
/*! exports provided: PopTermComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopTermComponent", function() { return PopTermComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _service_userterminal_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/userterminal.service */ "./src/app/service/userterminal.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let PopTermComponent = class PopTermComponent {
    constructor(userTerminal) {
        this.userTerminal = userTerminal;
    }
    ngOnInit() {
    }
    onActivate() {
        this.userTerminal.fontSizeEmitter.next(1);
    }
    onActivateLess() {
        this.userTerminal.fontSizeEmitter.next(-1);
    }
};
PopTermComponent.ctorParameters = () => [
    { type: _service_userterminal_service__WEBPACK_IMPORTED_MODULE_1__["UserTerminal"] }
];
PopTermComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-pop-term',
        template: __webpack_require__(/*! raw-loader!./pop-term.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/pop-term/pop-term.component.html"),
        styles: [__webpack_require__(/*! ./pop-term.component.scss */ "./src/app/components/pop-term/pop-term.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_userterminal_service__WEBPACK_IMPORTED_MODULE_1__["UserTerminal"]])
], PopTermComponent);



/***/ }),

/***/ "./src/app/components/token-descr/token-descr.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/token-descr/token-descr.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/** Title */\nion-title {\n  color: var(--ion-text-color, #F6661D);\n}\nion-title ion-icon {\n  width: 16px;\n  position: absolute;\n  padding-top: 3px;\n  cursor: pointer;\n  font-weight: 300;\n}\nion-card-header {\n  width: 100%;\n  margin-left: auto;\n  margin-right: auto;\n  white-space: nowrap;\n  font-size: 16px;\n}\nion-card-header ion-grid {\n  text-align: center;\n}\nion-card-header ion-icon {\n  --ionicon-stroke-width: 45px;\n}\nion-card-header img {\n  width: 100px;\n  margin-left: auto;\n  margin-right: auto;\n}\nion-card-header ion-col {\n  white-space: normal;\n}\n#variable {\n  text-align: right;\n  font-weight: 400;\n}\n#varname {\n  font-weight: 700;\n}\nion-card {\n  --background: var(--ion-background-color, #f2f2f2);\n  background: -webkit-gradient(linear, left top, left bottom, from(var(--ion-background-color, #fff)), to(var(--ion-background-color, #f2f2f2))) !important;\n  background: linear-gradient(to bottom, var(--ion-background-color, #fff) 0%, var(--ion-background-color, #f2f2f2) 100%) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGlhcy9Qcm9qZWN0cy9taW5pbWFjb3JlL21vYmlsZS1hcHAtZnJvbnQtZW5kL2FwcC9zcmMvYXBwL2NvbXBvbmVudHMvdG9rZW4tZGVzY3IvdG9rZW4tZGVzY3IuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvdG9rZW4tZGVzY3IvdG9rZW4tZGVzY3IuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsV0FBQTtBQUVBO0VBQ0sscUNBQUE7QUNBTDtBREVBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBRElBO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUNESjtBRElBO0VBQ0ksa0JBQUE7QUNESjtBREdBO0VBQ0ksNEJBQUE7QUNBSjtBREdBO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNBSjtBREVBO0VBQ0ksbUJBQUE7QUNDSjtBRENBO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtBQ0VKO0FEQUE7RUFDSSxnQkFBQTtBQ0dKO0FEQUE7RUFDSSxrREFBQTtFQUNBLHlKQUFBO0VBQUEsa0lBQUE7QUNHSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdG9rZW4tZGVzY3IvdG9rZW4tZGVzY3IuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogVGl0bGUgKi9cblxuaW9uLXRpdGxlIHtcbiAgICAgY29sb3I6ICB2YXIoLS1pb24tdGV4dC1jb2xvciwgI0Y2NjYxRCk7XG59XG5pb24tdGl0bGUgaW9uLWljb24ge1xuICAgIHdpZHRoOiAxNnB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBwYWRkaW5nLXRvcDogM3B4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmb250LXdlaWdodDogMzAwO1xufVxuaW9uLXRpdGxlIHNwYW4ge1xuICAgIC8vIGNvbG9yOiAgdmFyKC0taW9uLXRleHQtY29sb3IsICMwMDApO1xufVxuaW9uLWNhcmQtaGVhZGVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgXG59XG5pb24tY2FyZC1oZWFkZXIgaW9uLWdyaWQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbmlvbi1jYXJkLWhlYWRlciBpb24taWNvbiB7XG4gICAgLS1pb25pY29uLXN0cm9rZS13aWR0aDogNDVweDtcblxufVxuaW9uLWNhcmQtaGVhZGVyIGltZyB7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbn1cbmlvbi1jYXJkLWhlYWRlciBpb24tY29sIHtcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xufVxuI3ZhcmlhYmxlIHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBmb250LXdlaWdodDogNDAwO1xufVxuI3Zhcm5hbWUge1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbmlvbi1jYXJkIHtcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZjJmMmYyKTtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsICNmZmYpIDAlLCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwgI2YyZjJmMikgMTAwJSkgIWltcG9ydGFudDtcbn1cbiIsIi8qKiBUaXRsZSAqL1xuaW9uLXRpdGxlIHtcbiAgY29sb3I6IHZhcigtLWlvbi10ZXh0LWNvbG9yLCAjRjY2NjFEKTtcbn1cblxuaW9uLXRpdGxlIGlvbi1pY29uIHtcbiAgd2lkdGg6IDE2cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcGFkZGluZy10b3A6IDNweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXdlaWdodDogMzAwO1xufVxuXG5pb24tY2FyZC1oZWFkZXIge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG5pb24tY2FyZC1oZWFkZXIgaW9uLWdyaWQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlvbi1jYXJkLWhlYWRlciBpb24taWNvbiB7XG4gIC0taW9uaWNvbi1zdHJva2Utd2lkdGg6IDQ1cHg7XG59XG5cbmlvbi1jYXJkLWhlYWRlciBpbWcge1xuICB3aWR0aDogMTAwcHg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbmlvbi1jYXJkLWhlYWRlciBpb24tY29sIHtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbn1cblxuI3ZhcmlhYmxlIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbiN2YXJuYW1lIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuaW9uLWNhcmQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZjJmMmYyKTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsICNmZmYpIDAlLCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwgI2YyZjJmMikgMTAwJSkgIWltcG9ydGFudDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/token-descr/token-descr.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/token-descr/token-descr.component.ts ***!
  \*****************************************************************/
/*! exports provided: TokenDescrComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenDescrComponent", function() { return TokenDescrComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _service_minima_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/minima-api.service */ "./src/app/service/minima-api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/clipboard/ngx */ "./node_modules/@ionic-native/clipboard/ngx/index.js");






let TokenDescrComponent = class TokenDescrComponent {
    constructor(modalCtrl, api, toastController, route, platform, clipboard, navParams) {
        this.modalCtrl = modalCtrl;
        this.api = api;
        this.toastController = toastController;
        this.route = route;
        this.platform = platform;
        this.clipboard = clipboard;
        this.navParams = navParams;
    }
    ngOnInit() {
        this.refTokenid = this.navParams.get("tokenid");
    }
    dismiss() {
        // using the injected ModalController this page
        // can "dismiss" itself and optionally pass back data
        this.modalCtrl.dismiss({
            'dismissed': true
        });
    }
    sendTokenOver(id) {
        this.route.navigate(['/send-funds/' + id]);
        this.dismiss();
    }
    validateProof(tokenid) {
        this.api.validateTokenID(tokenid).then((res) => {
            if (res.response.valid === true) {
                this.presentToast("This proof is valid.", "success");
            }
            else {
                this.presentToast("Proof Mismatch - Proof is invalid.", "danger");
            }
        });
    }
    //Alerts
    presentToast(msg, type) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: msg,
                duration: 4000,
                color: type,
                keyboardClose: true,
                translucent: true,
                position: 'top'
            });
            toast.present();
        });
    }
    copyToClipboard() {
        if (this.platform.is('desktop') || this.platform.is('pwa')) {
            this.copyToClipPWA();
            this.presentToast("Copied TokenID", "success");
        }
        else {
            this.clipboard.copy(this.refTokenid);
            this.presentToast("Can't copy to clipboard", "danger");
        }
    }
    copyToClipPWA() {
        document.addEventListener('copy', (e) => {
            e.clipboardData.setData('text/plain', this.refTokenid);
            e.preventDefault();
            document.removeEventListener('copy', null);
        });
        document.execCommand('copy');
    }
};
TokenDescrComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _service_minima_api_service__WEBPACK_IMPORTED_MODULE_3__["MinimaApiService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_5__["Clipboard"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"] }
];
TokenDescrComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-token-descr',
        template: __webpack_require__(/*! raw-loader!./token-descr.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/token-descr/token-descr.component.html"),
        styles: [__webpack_require__(/*! ./token-descr.component.scss */ "./src/app/components/token-descr/token-descr.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _service_minima_api_service__WEBPACK_IMPORTED_MODULE_3__["MinimaApiService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
        _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_5__["Clipboard"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"]])
], TokenDescrComponent);



/***/ }),

/***/ "./src/app/service/darkMode.service.ts":
/*!*********************************************!*\
  !*** ./src/app/service/darkMode.service.ts ***!
  \*********************************************/
/*! exports provided: darkMode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "darkMode", function() { return darkMode; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let darkMode = class darkMode {
    constructor() { }
    toggleDarkTheme(shouldAdd) {
        document.body.classList.toggle('dark', shouldAdd);
    }
};
darkMode = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], darkMode);



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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");





let MinimaApiService = class MinimaApiService {
    constructor(http, loadingController) {
        this.http = http;
        this.loadingController = loadingController;
        this.host = '';
        this.loader = null;
        this.host = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].defaultNode;
        this.host = this.getHost();
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
    createTXN(data) {
        console.log("createTXN" + data.message);
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
    getHost() {
        if (localStorage.getItem('minima_host') == null) {
            localStorage.setItem('minima_host', this.host);
            return this.host;
        }
        else {
            return localStorage.getItem('minima_host');
        }
    }
    setHost(newHost) {
        localStorage.setItem('minima_host', newHost);
        _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].defaultNode = newHost;
        this.host = newHost;
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
    // old api
    request(route) {
        let apiUrl = this.host + route; // this.host = "127.0.0.1:8999/" ** route = "balance" (for example)
        let promise = new Promise((resolve, reject) => {
            this.http.get(apiUrl, { responseType: 'json' })
                .subscribe(data => {
                resolve(data);
            });
        });
        return promise;
    }
    // Use minima.js instead..
    req(fnc) {
        let promise = new Promise((resolve, reject) => {
            Minima.cmd(fnc, function (resp) {
                //console.log(resp);
                resolve(resp);
            });
        });
        return promise;
    }
};
MinimaApiService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] }
];
MinimaApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]])
], MinimaApiService);



/***/ }),

/***/ "./src/app/service/userterminal.service.ts":
/*!*************************************************!*\
  !*** ./src/app/service/userterminal.service.ts ***!
  \*************************************************/
/*! exports provided: UserTerminal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserTerminal", function() { return UserTerminal; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let UserTerminal = class UserTerminal {
    constructor() {
        this.fontSizeEmitter = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
};
UserTerminal = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], UserTerminal);



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
    defaultNode: 'http://127.0.0.1:8999/',
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var web_social_share_dist_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! web-social-share/dist/loader */ "./node_modules/web-social-share/dist/loader/index.es2017.mjs");




// Note: loader import location set using "esmLoaderPath" within the output target config

if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));
Object(web_social_share_dist_loader__WEBPACK_IMPORTED_MODULE_4__["defineCustomElements"])();
Object(web_social_share_dist_loader__WEBPACK_IMPORTED_MODULE_4__["applyPolyfills"])().then(() => {
    Object(web_social_share_dist_loader__WEBPACK_IMPORTED_MODULE_4__["defineCustomElements"])();
});


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/elias/Projects/minimacore/mobile-app-front-end/app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map