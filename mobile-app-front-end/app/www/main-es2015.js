(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./pages/balance/balance.module": [
		"./src/app/pages/balance/balance.module.ts",
		"default~pages-balance-balance-module~pages-balance-view-tokens-view-tokens-module",
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
	"./ion-action-sheet.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-action-sheet.entry.js",
		"common",
		0
	],
	"./ion-alert.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-alert.entry.js",
		"common",
		1
	],
	"./ion-app_8.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-app_8.entry.js",
		"common",
		2
	],
	"./ion-avatar_3.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-avatar_3.entry.js",
		"common",
		3
	],
	"./ion-back-button.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-back-button.entry.js",
		"common",
		4
	],
	"./ion-backdrop.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-backdrop.entry.js",
		5
	],
	"./ion-button_2.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-button_2.entry.js",
		"common",
		6
	],
	"./ion-card_5.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-card_5.entry.js",
		"common",
		7
	],
	"./ion-checkbox.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-checkbox.entry.js",
		"common",
		8
	],
	"./ion-chip.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-chip.entry.js",
		"common",
		9
	],
	"./ion-col_3.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js",
		10
	],
	"./ion-datetime_3.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-datetime_3.entry.js",
		"common",
		11
	],
	"./ion-fab_3.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-fab_3.entry.js",
		"common",
		12
	],
	"./ion-img.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-img.entry.js",
		13
	],
	"./ion-infinite-scroll_2.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2.entry.js",
		14
	],
	"./ion-input.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-input.entry.js",
		"common",
		15
	],
	"./ion-item-option_3.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-item-option_3.entry.js",
		"common",
		16
	],
	"./ion-item_8.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-item_8.entry.js",
		"common",
		17
	],
	"./ion-loading.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-loading.entry.js",
		"common",
		18
	],
	"./ion-menu_3.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-menu_3.entry.js",
		"common",
		19
	],
	"./ion-modal.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-modal.entry.js",
		"common",
		20
	],
	"./ion-nav_2.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-nav_2.entry.js",
		"common",
		21
	],
	"./ion-popover.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-popover.entry.js",
		"common",
		22
	],
	"./ion-progress-bar.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-progress-bar.entry.js",
		"common",
		23
	],
	"./ion-radio_2.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-radio_2.entry.js",
		"common",
		24
	],
	"./ion-range.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-range.entry.js",
		"common",
		25
	],
	"./ion-refresher_2.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-refresher_2.entry.js",
		"common",
		26
	],
	"./ion-reorder_2.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-reorder_2.entry.js",
		"common",
		27
	],
	"./ion-ripple-effect.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js",
		28
	],
	"./ion-route_4.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js",
		"common",
		29
	],
	"./ion-searchbar.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-searchbar.entry.js",
		"common",
		30
	],
	"./ion-segment_2.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-segment_2.entry.js",
		"common",
		31
	],
	"./ion-select_3.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-select_3.entry.js",
		"common",
		32
	],
	"./ion-slide_2.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-slide_2.entry.js",
		33
	],
	"./ion-spinner.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js",
		"common",
		34
	],
	"./ion-split-pane.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-split-pane.entry.js",
		35
	],
	"./ion-tab-bar_2.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-tab-bar_2.entry.js",
		"common",
		36
	],
	"./ion-tab_2.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js",
		"common",
		37
	],
	"./ion-text.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-text.entry.js",
		"common",
		38
	],
	"./ion-textarea.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-textarea.entry.js",
		"common",
		39
	],
	"./ion-toast.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-toast.entry.js",
		"common",
		40
	],
	"./ion-toggle.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-toggle.entry.js",
		"common",
		41
	],
	"./ion-virtual-scroll.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js",
		42
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

module.exports = "<ion-app>\n  <ion-split-pane when=\"lg\" contentId=\"mainMenu\" class=\"splitpane\" >\n  <ion-menu side=\"start\" contentId=\"mainMenu\">\n\n    <ion-header>\n      <ion-toolbar class=\"border-b\">\n      <ion-title> \n        <!-- Minima Icon -->\n        <svg version=\"1.1\" id=\"icon\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n\t           viewBox=\"0 0 385.51 76.54\" style=\"enable-background:new 0 0 100 100;\" xml:space=\"preserve\">\n          <g>\n            <path id=\"icon-M\" d=\"M109.13,31.51c0-1.21,1.04-2.25,2.25-2.25h0.52c0.98,0,1.67,0.52,2.13,1.21l14.4,21.66l14.4-21.66\n              c0.46-0.75,1.21-1.21,2.13-1.21h0.52c1.21,0,2.25,1.04,2.25,2.25v36.23c0,1.27-1.04,2.3-2.25,2.3c-1.27,0-2.3-1.09-2.3-2.3V37.67\n              l-12.9,18.95c-0.52,0.75-1.09,1.15-1.9,1.15c-0.81,0-1.44-0.4-1.96-1.15l-12.84-18.89V67.8c0,1.27-0.98,2.25-2.25,2.25\n              c-1.21,0-2.19-0.98-2.19-2.25V31.51z\"/>\n            <path id=\"icon-I\" d=\"M171.04,31.45c0-1.27,1.04-2.3,2.25-2.3c1.27,0,2.3,1.04,2.3,2.3v36.29c0,1.27-1.04,2.3-2.3,2.3\n              c-1.21,0-2.25-1.04-2.25-2.3V31.45z\"/>\n            <path id=\"icon-N\" d=\"M198.92,31.51c0-1.21,1.04-2.25,2.25-2.25h0.63c1.04,0,1.67,0.52,2.3,1.32l24.48,31.22V31.39c0-1.21,0.98-2.25,2.25-2.25\n              c1.21,0,2.19,1.04,2.19,2.25v36.4c0,1.21-0.86,2.13-2.07,2.13h-0.23c-0.98,0-1.67-0.58-2.36-1.38l-25-31.97V67.8\n              c0,1.21-0.98,2.25-2.25,2.25c-1.21,0-2.19-1.04-2.19-2.25V31.51z\"/>\n            <path id=\"icon-I\" d=\"M256.34,31.45c0-1.27,1.04-2.3,2.25-2.3c1.27,0,2.3,1.04,2.3,2.3v36.29c0,1.27-1.04,2.3-2.3,2.3\n              c-1.21,0-2.25-1.04-2.25-2.3V31.45z\"/>\n            <path id=\"icon-M\" d=\"M284.22,31.51c0-1.21,1.04-2.25,2.25-2.25h0.52c0.98,0,1.67,0.52,2.13,1.21l14.4,21.66l14.4-21.66\n              c0.46-0.75,1.21-1.21,2.13-1.21h0.52c1.21,0,2.25,1.04,2.25,2.25v36.23c0,1.27-1.04,2.3-2.25,2.3c-1.27,0-2.3-1.09-2.3-2.3V37.67\n              l-12.9,18.95c-0.52,0.75-1.09,1.15-1.9,1.15c-0.81,0-1.44-0.4-1.96-1.15l-12.84-18.89V67.8c0,1.27-0.98,2.25-2.25,2.25\n              c-1.21,0-2.19-0.98-2.19-2.25V31.51z\"/>\n            <path id=\"icon-A\" d=\"M343.26,66.76l16.36-35.77c0.58-1.27,1.44-2.02,2.88-2.02h0.23c1.38,0,2.3,0.75,2.82,2.02L381.9,66.7\n              c0.17,0.4,0.29,0.81,0.29,1.15c0,1.21-0.98,2.19-2.19,2.19c-1.09,0-1.84-0.75-2.25-1.67l-4.2-9.27h-22.12l-4.2,9.39\n              c-0.4,0.98-1.15,1.56-2.19,1.56c-1.15,0-2.07-0.92-2.07-2.07C342.97,67.62,343.02,67.22,343.26,66.76z M371.77,54.95l-9.27-20.62\n              l-9.27,20.62H371.77z\"/>\n          </g>\n          <g>\n            <polygon points=\"37.48,20.64 52.72,20.64 64.53,70.04 49.29,70.04 \t\"/>\n            <polygon points=\"31.66,12.14 41.55,70.04 26.31,70.04 16.42,12.14 \t\"/>\n            <polygon class=\"st0\" points=\"3.32,70.04 18.57,70.04 31.66,12.14 17.7,6.49 \t\"/>\n            <polygon class=\"st1\" points=\"26.31,70.04 41.55,70.04 52.72,20.64 38.76,15 \t\"/>\n            <polygon class=\"st2\" points=\"59.82,23.51 49.29,70.04 64.53,70.04 73.78,29.15 \t\"/>\n          </g>\n      </svg>\n      </ion-title>      \n      </ion-toolbar>\n    </ion-header>\n    \n    <ion-content>\n      <ion-list main>\n        \n        <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of basic; let i = index\">\n          \n            <ion-item \n            class=\"ripple-parent ion-activatable\"\n            detail=\"false\"\n            routerLinkActive=\"selected\"\n            routerDirection=\"root\"\n            [hidden] = \"p.hidden\" \n            [routerLink]=\"p.routerLink\"\n            lines=\"{{ p.line }}\">\n              <ion-ripple-effect type=\"unbounded\"></ion-ripple-effect>\n\n            <ion-icon name=\"{{ p.icon }}\" slot=\"start\"></ion-icon> {{ p.title }}\n\n            </ion-item>\n        </ion-menu-toggle>\n      </ion-list>\n\n      <ion-list main>\n        \n        <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of advanced; let i = index\">\n          \n            <ion-item \n            class=\"ripple-parent ion-activatable\"\n            detail=\"false\"\n            routerLinkActive=\"selected\"\n            routerDirection=\"root\"\n            [hidden] = \"p.hidden\" \n            routerLink=\"{{ p.routerLink }}\"\n            lines=\"{{ p.line }}\">\n            <ion-ripple-effect type=\"unbounded\"></ion-ripple-effect>\n\n            <ion-icon name=\"{{ p.icon }}\" slot=\"start\"></ion-icon> {{ p.title }}\n\n            </ion-item>\n        </ion-menu-toggle>\n      </ion-list>\n\n  </ion-content>\n\n  <ion-footer class=\"border-t\">\n    <ion-row>\n      <ion-col>\n        <ion-item lines=\"none\">\n          <ion-icon slot=\"start\" name=\"moon\"></ion-icon>\n          <span class=\"medium-text\">Night Mode</span>\n          <ion-toggle  slot=\"end\" #darkToggle [(ngModel)]=\"toggleValue\" (ionChange)=\"checkToggle()\"></ion-toggle>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n  </ion-footer>\n  </ion-menu>\n  <ion-router-outlet main id=\"mainMenu\"></ion-router-outlet>\n  </ion-split-pane>\n\n</ion-app>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/pop-filter/pop-filter.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/pop-filter/pop-filter.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-list>\n  <ion-list-header>\n    Filter Settings\n  </ion-list-header>\n\n  <ion-item>\n    <ion-label>Order by</ion-label>\n    <ion-select (ionChange)=\"change($event)\" [compareWith]=\"compareWithFn\" value=\"{{userConfig.historyOrderByMode}}\">\n    <ion-select-option value=\"1\">Latest transaction</ion-select-option>\n    <ion-select-option value=\"2\">Earliest transaction</ion-select-option>\n    </ion-select>\n  </ion-item>\n</ion-list>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/pop-settings/pop-settings.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/pop-settings/pop-settings.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <ion-list>\n    <ion-list-header>Balance Settings</ion-list-header>\n\n    <ion-item>\n      <ion-label>Display Mode</ion-label>\n      <ion-select (ionChange)=\"change($event)\" [compareWith]=\"compareWithFn\" value=\"{{userConfig.tokenDisplayMode}}\">\n      <ion-select-option value=\"1\">Grid View</ion-select-option>\n      <ion-select-option value=\"2\">List View</ion-select-option>\n      </ion-select>\n    </ion-item>      \n  </ion-list>"

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

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title slot=\"start\" class=\"large-text\">\n    \n    <span *ngIf=\"name && name.length <= 10\" class=\"large-text title\">{{ name + \" \" }}</span>\n    <span *ngIf=\"name && name.length > 10\" class=\"large-text title\">{{ name.substring(0, 20)+\"... \" }}</span>\n\n    <span class=\"small-text\" [hidden]=\"tokenid == '0x00'\">{{ tokenid.substring(0,8) + \"...\"}}</span>\n    <span class=\"small-text\" [hidden]=\"tokenid !== '0x00'\">{{ tokenid }}</span>\n    <ion-icon (click)=\"copyToClipboard()\" name=\"clipboard\"></ion-icon>\n    </ion-title>\n  \n  <ion-button \n  class=\"small-text dismiss-btn\"\n  slot=\"end\"\n  fill=\"clear\"\n  (click)=\"dismiss()\">\n  Dismiss\n  </ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<!-- Only if custom token -->\n<ion-content [hidden]=\"tokenid == '0x00'\">\n  <ion-card> \n    <ion-card-header>\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <img style=\"max-width: 250px; min-height:75px;\"[hidden]=\"!icon\" src=\"{{ icon }}\"/>\n            <img style=\"max-width: 250px; min-height:75px;\" [hidden]=\"icon\" src=\"assets/icon/icon.png\"/>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col class=\"medium-text\" [hidden]=\"tokenid === '0x00'\">\n          {{ description }}\n          </ion-col>\n          <ion-col class=\"medium-text\" [hidden]=\"tokenid !== '0x00'\">\n            Minima's Official Token\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-grid>\n        <ion-row>\n          <ion-col class=\"small-text\" id=\"varname\">\n            Name\n          </ion-col>\n          <ion-col *ngIf=\"total\" class=\"small-text\" id=\"variable\">\n             {{ name }}\n          </ion-col>\n         </ion-row>\n        <ion-row>\n         <ion-col class=\"small-text\" id=\"varname\">\n           Total Amount Available\n         </ion-col>\n         <ion-col *ngIf=\"total\" class=\"small-text\" id=\"variable\">\n            {{ total }}\n         </ion-col>\n        </ion-row>\n        <ion-row [hidden]=\"tokenid == '0x00'\">\n         <ion-col class=\"small-text\" id=\"varname\">\n           Total Amount Available (Minima)\n         </ion-col>\n         <ion-col *ngIf=\"totalamount\" class=\"small-text\" id=\"variable\">\n            {{ totalamount }}\n         </ion-col>\n        </ion-row>\n        <ion-row>\n         <ion-col class=\"small-text\" id=\"varname\">\n           Token Type\n         </ion-col>\n         <ion-col class=\"small-text\" [hidden]=\"script !== 'RETURN TRUE'\" id=\"variable\">   \n            Fungible\n         </ion-col>\n         <ion-col class=\"small-text\" [hidden]=\"script == 'RETURN TRUE'\" id=\"variable\">\n            Non-Fungible\n         </ion-col>\n        </ion-row>\n        <ion-row>\n         <ion-col class=\"small-text\" id=\"varname\">\n           Proof Availability\n         </ion-col>\n         <ion-col class=\"small-text\" *ngIf=\"proof\" [hidden]=\"proof.length > 0\" id=\"variable\">   \n            False\n         </ion-col>\n         <ion-col class=\"small-text\" *ngIf=\"proof\" [hidden]=\"proof.length == 0\" id=\"variable\">\n            True\n         </ion-col>\n        </ion-row>\n        <ion-row id=\"varname\" *ngIf=\"proof\" [hidden]=\"proof.length <= 0\">\n         <ion-col class=\"small-text\">\n           Proof URL\n         </ion-col>\n         <ion-col class=\"small-text\" id=\"variable\">   \n             {{ proof }}\n         </ion-col>\n        </ion-row>\n        <ion-row id=\"varname\" *ngIf=\"proof\" [hidden]=\"proof.length <= 0\">\n         <ion-col class=\"small-text\">\n           Validate Proof\n         </ion-col>\n         <ion-col id=\"variable\">   \n          <ion-button *ngIf=\"proof\" class=\"small-text\" size=\"small\" (click)=\"validateProof(tokenid)\">\n            Validate\n          </ion-button>\n         </ion-col>\n        </ion-row>\n        <ion-row>\n         <ion-col class=\"small-text\" id=\"varname\" >\n           Confirmed/Sendable Amount\n         </ion-col>\n         <ion-col *ngIf=\"confirmed || sendable\" class=\"small-text\" id=\"variable\">   \n             {{ confirmed + \"/\" + sendable }}\n         </ion-col>\n        </ion-row>\n        <ion-row>\n         <ion-col class=\"small-text\" id=\"varname\">\n           Unconfirmed Amount\n         </ion-col>\n         <ion-col *ngIf=\"unconfirmed\" class=\"small-text\" id=\"variable\">   \n             {{ unconfirmed }}\n         </ion-col>\n        </ion-row>\n        <ion-row>\n         <ion-col class=\"small-text\" id=\"varname\">\n           Mempool\n         </ion-col>\n         <ion-col *ngIf=\"mempool\" class=\"small-text\" id=\"variable\">   \n             {{ mempool }}\n         </ion-col>\n        </ion-row>\n        <ion-row>\n         <ion-col class=\"small-text\" size=\"3\" id=\"varname\">\n           Script\n         </ion-col>\n         <ion-col *ngIf=\"script\" class=\"small-text\" size=\"9\" id=\"variable\">   \n             {{ script }}\n         </ion-col>\n        </ion-row>\n        \n      </ion-grid>\n    </ion-card-content>\n  </ion-card>\n  <!-- fab placed to the bottom end -->\n  <ion-fab vertical=\"bottom\" horizontal=\"start\" slot=\"fixed\">\n    <ion-fab-button size=\"55px;\" color=\"minima-text\" (click)=\"sendTokenOver(tokenid)\">\n      <ion-icon size=\"45px;\" name=\"send\" color=\"tertiary\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n</ion-content>\n\n<!-- Only if Minima token -->\n<ion-content [hidden]=\"tokenid !== '0x00'\">\n  <ion-card> \n    <ion-card-header>\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <img style=\"max-width: 250px; min-height:75px;\" [hidden]=\"tokenid !== '0x00'\" src=\"assets/icon/icon.png\"/>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            Minima - The Mobile Cryptocurrency\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card-header>\n    \n  </ion-card>\n  <!-- fab placed to the bottom end -->\n  <ion-fab vertical=\"bottom\" horizontal=\"start\" slot=\"fixed\">\n    <ion-fab-button size=\"55px;\" color=\"minima-text\" (click)=\"sendTokenOver(tokenid)\">\n      <ion-icon size=\"45px;\" name=\"send\" color=\"tertiary\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n</ion-content>"

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
    { path: 'balance', loadChildren: () => Promise.all(/*! import() | pages-balance-balance-module */[__webpack_require__.e("default~pages-balance-balance-module~pages-balance-view-tokens-view-tokens-module"), __webpack_require__.e("pages-balance-balance-module")]).then(__webpack_require__.bind(null, /*! ./pages/balance/balance.module */ "./src/app/pages/balance/balance.module.ts")).then(m => m.BalancePageModule) },
    { path: 'send-funds', loadChildren: () => __webpack_require__.e(/*! import() | pages-send-funds-send-funds-module */ "pages-send-funds-send-funds-module").then(__webpack_require__.bind(null, /*! ./pages/send-funds/send-funds.module */ "./src/app/pages/send-funds/send-funds.module.ts")).then(m => m.SendFundsPageModule) },
    { path: 'send-funds/:id', loadChildren: () => __webpack_require__.e(/*! import() | pages-send-funds-send-funds-module */ "pages-send-funds-send-funds-module").then(__webpack_require__.bind(null, /*! ./pages/send-funds/send-funds.module */ "./src/app/pages/send-funds/send-funds.module.ts")).then(m => m.SendFundsPageModule) },
    { path: 'create-token', loadChildren: () => __webpack_require__.e(/*! import() | pages-create-token-create-token-module */ "pages-create-token-create-token-module").then(__webpack_require__.bind(null, /*! ./pages/create-token/create-token.module */ "./src/app/pages/create-token/create-token.module.ts")).then(m => m.CreateTokenPageModule) },
    { path: 'status', loadChildren: () => __webpack_require__.e(/*! import() | pages-mini-status-mini-status-module */ "pages-mini-status-mini-status-module").then(__webpack_require__.bind(null, /*! ./pages/mini-status/mini-status.module */ "./src/app/pages/mini-status/mini-status.module.ts")).then(m => m.MiniStatusPageModule) },
    { path: 'my-address', loadChildren: () => __webpack_require__.e(/*! import() | pages-my-address-my-address-module */ "pages-my-address-my-address-module").then(__webpack_require__.bind(null, /*! ./pages/my-address/my-address.module */ "./src/app/pages/my-address/my-address.module.ts")).then(m => m.MyAddressPageModule) },
    { path: 'code', loadChildren: () => __webpack_require__.e(/*! import() | pages-send-funds-send-funds-module */ "pages-send-funds-send-funds-module").then(__webpack_require__.bind(null, /*! ./pages/send-funds/send-funds.module */ "./src/app/pages/send-funds/send-funds.module.ts")).then(m => m.SendFundsPageModule) },
    { path: 'settings', loadChildren: () => __webpack_require__.e(/*! import() | pages-settings-settings-module */ "pages-settings-settings-module").then(__webpack_require__.bind(null, /*! ./pages/settings/settings.module */ "./src/app/pages/settings/settings.module.ts")).then(m => m.SettingsPageModule) },
    { path: 'mini-term', loadChildren: () => __webpack_require__.e(/*! import() | pages-mini-term-mini-term-module */ "pages-mini-term-mini-term-module").then(__webpack_require__.bind(null, /*! ./pages/mini-term/mini-term.module */ "./src/app/pages/mini-term/mini-term.module.ts")).then(m => m.MiniTermPageModule) },
    { path: 'mini-status', loadChildren: () => __webpack_require__.e(/*! import() | pages-mini-status-mini-status-module */ "pages-mini-status-mini-status-module").then(__webpack_require__.bind(null, /*! ./pages/mini-status/mini-status.module */ "./src/app/pages/mini-status/mini-status.module.ts")).then(m => m.MiniStatusPageModule) },
    { path: 'create-token', loadChildren: () => __webpack_require__.e(/*! import() | pages-create-token-create-token-module */ "pages-create-token-create-token-module").then(__webpack_require__.bind(null, /*! ./pages/create-token/create-token.module */ "./src/app/pages/create-token/create-token.module.ts")).then(m => m.CreateTokenPageModule) },
    { path: 'community', loadChildren: () => __webpack_require__.e(/*! import() | pages-community-community-module */ "pages-community-community-module").then(__webpack_require__.bind(null, /*! ./pages/community/community.module */ "./src/app/pages/community/community.module.ts")).then(m => m.CommunityPageModule) },
    { path: 'history', loadChildren: () => __webpack_require__.e(/*! import() | pages-history-history-module */ "pages-history-history-module").then(__webpack_require__.bind(null, /*! ./pages/history/history.module */ "./src/app/pages/history/history.module.ts")).then(m => m.HistoryPageModule) },
    { path: 'view-txn', loadChildren: () => __webpack_require__.e(/*! import() | pages-history-view-txn-view-txn-module */ "view-txn-view-txn-module").then(__webpack_require__.bind(null, /*! ./pages/history/view-txn/view-txn.module */ "./src/app/pages/history/view-txn/view-txn.module.ts")).then(m => m.ViewTXNPageModule) },
    { path: 'view-txn/:id', loadChildren: () => __webpack_require__.e(/*! import() | pages-history-view-txn-view-txn-module */ "view-txn-view-txn-module").then(__webpack_require__.bind(null, /*! ./pages/history/view-txn/view-txn.module */ "./src/app/pages/history/view-txn/view-txn.module.ts")).then(m => m.ViewTXNPageModule) },
    { path: 'view-tokens', loadChildren: () => Promise.all(/*! import() | pages-balance-view-tokens-view-tokens-module */[__webpack_require__.e("default~pages-balance-balance-module~pages-balance-view-tokens-view-tokens-module"), __webpack_require__.e("default~pages-balance-view-tokens-view-tokens-module~view-tokens-view-tokens-module")]).then(__webpack_require__.bind(null, /*! ./pages/balance/view-tokens/view-tokens.module */ "./src/app/pages/balance/view-tokens/view-tokens.module.ts")).then(m => m.ViewTokensPageModule) },
    { path: 'view-tokens/:id', loadChildren: () => Promise.all(/*! import() | pages-balance-view-tokens-view-tokens-module */[__webpack_require__.e("default~pages-balance-balance-module~pages-balance-view-tokens-view-tokens-module"), __webpack_require__.e("default~pages-balance-view-tokens-view-tokens-module~view-tokens-view-tokens-module")]).then(__webpack_require__.bind(null, /*! ./pages/balance/view-tokens/view-tokens.module */ "./src/app/pages/balance/view-tokens/view-tokens.module.ts")).then(m => m.ViewTokensPageModule) },
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

module.exports = "ion-menu {\n  --background: var(--ion-m-background);\n}\n\nion-menu ion-header {\n  --background: var(--ion-m-background);\n}\n\nion-menu ion-header ion-toolbar {\n  --background: var(--ion-m-background);\n}\n\nion-menu ion-content {\n  --background: var(--ion-m-background);\n}\n\nion-item {\n  font-family: manrope-bold;\n  padding-left: 1%;\n  color: var(--minima-text);\n}\n\nion-icon {\n  color: var(--ion-color-tertiary);\n}\n\n/** Desktop Version */\n\n@media only screen and (min-width: 992px) {\n  .splitpane {\n    border: 1px solid #FAFAFF;\n    left: 12%;\n    right: 12%;\n    top: 6%;\n    bottom: 6%;\n  }\n\n  ion-app {\n    background-color: #031D32;\n  }\n}\n\n/*\n * Material Design Menu\n*/\n\nion-menu.md ion-list {\n  padding: 0px 0;\n}\n\nion-menu.md ion-item {\n  --padding-start: 18px;\n  margin-right: 10px;\n  border-radius: 0 50px 50px 0;\n}\n\nion-menu.md ion-item.selected {\n  color: var(--ion-color-primary);\n}\n\nion-menu.md ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\n/*\n  * iOS Design Menu\n*/\n\nion-menu.ios ion-list {\n  padding: 0px 0 0;\n  margin-bottom: 10px;\n}\n\nion-menu.ios ion-item {\n  --padding-start: 16px;\n  --min-height: 50px;\n}\n\nion-toolbar {\n  --background: var(--ion-m-background);\n}\n\nion-footer ion-item, ion-footer ion-col, ion-footer {\n  --background: #91919D !important;\n  background: #91919D;\n}\n\nion-footer ion-item span {\n  color: #FAFAFF;\n}\n\nion-toggle {\n  --handle-background-checked: var(--ion-m-background);\n  --background-checked: #F0F0F9;\n}\n\n/** Minima Icon */\n\n#icon .st0 {\n  fill: var(--st0);\n}\n\n#icon .st1 {\n  fill: var(--st1);\n}\n\n#icon .st2 {\n  fill: var(--st2);\n}\n\n#icon .st3 {\n  fill: var(--st3);\n}\n\n#icon .st4 {\n  fill: var(--st4);\n}\n\n#icon .st5 {\n  fill: var(--st5);\n}\n\n#icon .st6 {\n  fill: var(--st6);\n}\n\n#icon-M, #icon-I, #icon-N, #icon-I, #icon-M, #icon-A {\n  fill: var(--minima-icon-word);\n}\n\n@media only screen and (max-width: 650px) {\n  #icon {\n    width: 120px;\n  }\n}\n\n@media only screen and (min-width: 650px) {\n  #icon {\n    width: 145px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGlhc25lbXIvcHJvamVjdHMvV0FMTEVUL21vYmlsZS1hcHAtZnJvbnQtZW5kL2FwcC9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFFO0VBQ0UscUNBQUE7QUNDSjs7QURDRTtFQUNFLHFDQUFBO0FDRUo7O0FEQUU7RUFDRSxxQ0FBQTtBQ0dKOztBRERFO0VBQ0kscUNBQUE7QUNJTjs7QURGRTtFQUNFLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBQ0tKOztBREhFO0VBQ0ksZ0NBQUE7QUNNTjs7QURKQSxxQkFBQTs7QUFDQTtFQUNFO0lBQ0UseUJBQUE7SUFDQSxTQUFBO0lBQ0EsVUFBQTtJQUNBLE9BQUE7SUFDQSxVQUFBO0VDT0Y7O0VETEE7SUFDRSx5QkFBQTtFQ1FGO0FBQ0Y7O0FETkE7O0NBQUE7O0FBR0E7RUFDSSxjQUFBO0FDUUo7O0FETEE7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNEJBQUE7QUNRRjs7QUROQTtFQUNFLCtCQUFBO0FDU0Y7O0FEUkU7RUFDRSwrQkFBQTtBQ1VKOztBRExBOztDQUFBOztBQUdBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtBQ1FGOztBRE5BO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtBQ1NGOztBRE5BO0VBQ0UscUNBQUE7QUNTRjs7QURQQTtFQUNFLGdDQUFBO0VBQ0EsbUJBQUE7QUNVRjs7QURSQTtFQUNFLGNBQUE7QUNXRjs7QURUQTtFQUNFLG9EQUFBO0VBQ0EsNkJBQUE7QUNZRjs7QURUQSxpQkFBQTs7QUFDQTtFQUNFLGdCQUFBO0FDWUY7O0FEVkE7RUFDRSxnQkFBQTtBQ2FGOztBRFhBO0VBQ0UsZ0JBQUE7QUNjRjs7QURaQTtFQUNFLGdCQUFBO0FDZUY7O0FEYkE7RUFDRSxnQkFBQTtBQ2dCRjs7QURkQTtFQUNFLGdCQUFBO0FDaUJGOztBRGZBO0VBQ0UsZ0JBQUE7QUNrQkY7O0FEaEJBO0VBQ0UsNkJBQUE7QUNtQkY7O0FEaEJBO0VBQ0U7SUFDRSxZQUFBO0VDbUJGO0FBQ0Y7O0FEakJBO0VBQ0U7SUFDRSxZQUFBO0VDbUJGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgIGlvbi1tZW51IHtcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1tLWJhY2tncm91bmQpO1xuICB9XG4gIGlvbi1tZW51IGlvbi1oZWFkZXIge1xuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLW0tYmFja2dyb3VuZCk7XG4gIH1cbiAgaW9uLW1lbnUgaW9uLWhlYWRlciBpb24tdG9vbGJhciB7XG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tbS1iYWNrZ3JvdW5kKTtcbiAgfVxuICBpb24tbWVudSBpb24tY29udGVudCB7XG4gICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1tLWJhY2tncm91bmQpO1xuICB9XG4gIGlvbi1pdGVtIHtcbiAgICBmb250LWZhbWlseTogbWFucm9wZS1ib2xkO1xuICAgIHBhZGRpbmctbGVmdDogMSU7XG4gICAgY29sb3I6IHZhcigtLW1pbmltYS10ZXh0KTtcbiAgfVxuICBpb24taWNvbiB7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5KTtcbiAgfVxuLyoqIERlc2t0b3AgVmVyc2lvbiAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkge1xuICAuc3BsaXRwYW5lIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRkFGQUZGO1xuICAgIGxlZnQ6IDEyJTtcbiAgICByaWdodDogMTIlO1xuICAgIHRvcDogNiU7XG4gICAgYm90dG9tOiA2JTtcbiAgfVxuICBpb24tYXBwIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDMxRDMyO1xuICB9XG59XG4vKlxuICogTWF0ZXJpYWwgRGVzaWduIE1lbnVcbiovXG5pb24tbWVudS5tZCBpb24tbGlzdCB7XG4gICAgcGFkZGluZzogMHB4IDA7XG59XG4gIFxuaW9uLW1lbnUubWQgaW9uLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDE4cHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMCA1MHB4IDUwcHggMDtcbn1cbmlvbi1tZW51Lm1kIGlvbi1pdGVtLnNlbGVjdGVkIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgaW9uLWljb24ge1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIH1cbn1cblxuXG4vKlxuICAqIGlPUyBEZXNpZ24gTWVudVxuKi9cbmlvbi1tZW51LmlvcyBpb24tbGlzdCB7XG4gIHBhZGRpbmc6IDBweCAwIDA7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5pb24tbWVudS5pb3MgaW9uLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDE2cHg7XG4gIC0tbWluLWhlaWdodDogNTBweDtcbn1cbiBcbmlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tbS1iYWNrZ3JvdW5kKTtcbn1cbmlvbi1mb290ZXIgaW9uLWl0ZW0sIGlvbi1mb290ZXIgaW9uLWNvbCwgaW9uLWZvb3RlciB7XG4gIC0tYmFja2dyb3VuZDogIzkxOTE5RCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiAjOTE5MTlEO1xufVxuaW9uLWZvb3RlciBpb24taXRlbSBzcGFuIHtcbiAgY29sb3I6ICNGQUZBRkY7XG59XG5pb24tdG9nZ2xlIHtcbiAgLS1oYW5kbGUtYmFja2dyb3VuZC1jaGVja2VkOiB2YXIoLS1pb24tbS1iYWNrZ3JvdW5kKTtcbiAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6ICNGMEYwRjk7XG59XG5cbi8qKiBNaW5pbWEgSWNvbiAqL1xuI2ljb24gLnN0MCB7XG4gIGZpbGw6IHZhcigtLXN0MCk7XG59XG4jaWNvbiAuc3QxIHtcbiAgZmlsbDogdmFyKC0tc3QxKTtcbn1cbiNpY29uIC5zdDIge1xuICBmaWxsOiB2YXIoLS1zdDIpO1xufVxuI2ljb24gLnN0MyB7XG4gIGZpbGw6IHZhcigtLXN0Myk7XG59XG4jaWNvbiAuc3Q0IHtcbiAgZmlsbDogdmFyKC0tc3Q0KTtcbn1cbiNpY29uIC5zdDUge1xuICBmaWxsOiB2YXIoLS1zdDUpO1xufVxuI2ljb24gLnN0NiB7XG4gIGZpbGw6IHZhcigtLXN0Nik7XG59XG4jaWNvbi1NLCAjaWNvbi1JLCAjaWNvbi1OLCAjaWNvbi1JLCAjaWNvbi1NLCAjaWNvbi1BIHtcbiAgZmlsbDogdmFyKC0tbWluaW1hLWljb24td29yZCk7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjUwcHgpIHtcbiAgI2ljb24ge1xuICAgIHdpZHRoOiAxMjBweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2NTBweCkge1xuICAjaWNvbiB7XG4gICAgd2lkdGg6IDE0NXB4O1xuICB9XG59XG5cblxuIiwiaW9uLW1lbnUge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1tLWJhY2tncm91bmQpO1xufVxuXG5pb24tbWVudSBpb24taGVhZGVyIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tbS1iYWNrZ3JvdW5kKTtcbn1cblxuaW9uLW1lbnUgaW9uLWhlYWRlciBpb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLW0tYmFja2dyb3VuZCk7XG59XG5cbmlvbi1tZW51IGlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tbS1iYWNrZ3JvdW5kKTtcbn1cblxuaW9uLWl0ZW0ge1xuICBmb250LWZhbWlseTogbWFucm9wZS1ib2xkO1xuICBwYWRkaW5nLWxlZnQ6IDElO1xuICBjb2xvcjogdmFyKC0tbWluaW1hLXRleHQpO1xufVxuXG5pb24taWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnkpO1xufVxuXG4vKiogRGVza3RvcCBWZXJzaW9uICovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gIC5zcGxpdHBhbmUge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNGQUZBRkY7XG4gICAgbGVmdDogMTIlO1xuICAgIHJpZ2h0OiAxMiU7XG4gICAgdG9wOiA2JTtcbiAgICBib3R0b206IDYlO1xuICB9XG5cbiAgaW9uLWFwcCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAzMUQzMjtcbiAgfVxufVxuLypcbiAqIE1hdGVyaWFsIERlc2lnbiBNZW51XG4qL1xuaW9uLW1lbnUubWQgaW9uLWxpc3Qge1xuICBwYWRkaW5nOiAwcHggMDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDE4cHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMCA1MHB4IDUwcHggMDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0uc2VsZWN0ZWQge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuaW9uLW1lbnUubWQgaW9uLWl0ZW0uc2VsZWN0ZWQgaW9uLWljb24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG4vKlxuICAqIGlPUyBEZXNpZ24gTWVudVxuKi9cbmlvbi1tZW51LmlvcyBpb24tbGlzdCB7XG4gIHBhZGRpbmc6IDBweCAwIDA7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24taXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMTZweDtcbiAgLS1taW4taGVpZ2h0OiA1MHB4O1xufVxuXG5pb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLW0tYmFja2dyb3VuZCk7XG59XG5cbmlvbi1mb290ZXIgaW9uLWl0ZW0sIGlvbi1mb290ZXIgaW9uLWNvbCwgaW9uLWZvb3RlciB7XG4gIC0tYmFja2dyb3VuZDogIzkxOTE5RCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiAjOTE5MTlEO1xufVxuXG5pb24tZm9vdGVyIGlvbi1pdGVtIHNwYW4ge1xuICBjb2xvcjogI0ZBRkFGRjtcbn1cblxuaW9uLXRvZ2dsZSB7XG4gIC0taGFuZGxlLWJhY2tncm91bmQtY2hlY2tlZDogdmFyKC0taW9uLW0tYmFja2dyb3VuZCk7XG4gIC0tYmFja2dyb3VuZC1jaGVja2VkOiAjRjBGMEY5O1xufVxuXG4vKiogTWluaW1hIEljb24gKi9cbiNpY29uIC5zdDAge1xuICBmaWxsOiB2YXIoLS1zdDApO1xufVxuXG4jaWNvbiAuc3QxIHtcbiAgZmlsbDogdmFyKC0tc3QxKTtcbn1cblxuI2ljb24gLnN0MiB7XG4gIGZpbGw6IHZhcigtLXN0Mik7XG59XG5cbiNpY29uIC5zdDMge1xuICBmaWxsOiB2YXIoLS1zdDMpO1xufVxuXG4jaWNvbiAuc3Q0IHtcbiAgZmlsbDogdmFyKC0tc3Q0KTtcbn1cblxuI2ljb24gLnN0NSB7XG4gIGZpbGw6IHZhcigtLXN0NSk7XG59XG5cbiNpY29uIC5zdDYge1xuICBmaWxsOiB2YXIoLS1zdDYpO1xufVxuXG4jaWNvbi1NLCAjaWNvbi1JLCAjaWNvbi1OLCAjaWNvbi1JLCAjaWNvbi1NLCAjaWNvbi1BIHtcbiAgZmlsbDogdmFyKC0tbWluaW1hLWljb24td29yZCk7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjUwcHgpIHtcbiAgI2ljb24ge1xuICAgIHdpZHRoOiAxMjBweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2NTBweCkge1xuICAjaWNvbiB7XG4gICAgd2lkdGg6IDE0NXB4O1xuICB9XG59Il19 */"

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
/* harmony import */ var _service_history_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./service/history.service */ "./src/app/service/history.service.ts");
/* harmony import */ var _service_balance_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service/balance.service */ "./src/app/service/balance.service.ts");
/* harmony import */ var _service_status_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service/status.service */ "./src/app/service/status.service.ts");
/* harmony import */ var _service_userconfig_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./service/userconfig.service */ "./src/app/service/userconfig.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var minima__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! minima */ "./node_modules/minima/dist/minima.js");
/* harmony import */ var minima__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(minima__WEBPACK_IMPORTED_MODULE_7__);








let AppComponent = class AppComponent {
    constructor(status, api, userConfigService, platform, toastCtrl, historyService) {
        this.status = status;
        this.api = api;
        this.userConfigService = userConfigService;
        this.platform = platform;
        this.toastCtrl = toastCtrl;
        this.historyService = historyService;
        this.toggleValue = false;
        this.currentMode = false;
        this.currentVersion = 0;
        this.getPages();
        this.initializeApp();
        this.setLocalStorage();
    }
    ionViewWillEnter() {
        this.initializeApp();
    }
    initializeApp() {
        this.platform.ready().then(() => {
            minima__WEBPACK_IMPORTED_MODULE_7__["Minima"].init((msg) => {
                if (msg.event === 'connected') {
                    this.api.updatedBalance.next(minima__WEBPACK_IMPORTED_MODULE_7__["Minima"].balance);
                }
                else if (msg.event === 'newbalance') {
                    this.api.updatedBalance.next(msg.info.balance);
                }
                else if (msg.event === 'newblock') {
                    // update status observable
                    minima__WEBPACK_IMPORTED_MODULE_7__["Minima"].cmd('status full', (res) => {
                        this.status.updatedStatus.next(res.response);
                    });
                    // update history observable+historyPage
                    minima__WEBPACK_IMPORTED_MODULE_7__["Minima"].cmd('history', (res) => {
                        const temp = JSON.stringify(res);
                        if (res.response.history.length > 0 && temp !== this.lastHistory) {
                            this.lastHistory = JSON.stringify(res);
                            this.historyService.updatedHistory.next(res);
                        }
                    });
                }
                else if (msg.event === 'miningstart') {
                    this.presentToast('Mining transaction in progress...', 'primary');
                }
                else if (msg.event === 'miningstop') {
                    this.presentToast('Mining transaction completed.', 'secondary');
                }
            });
        });
    }
    getPages() {
        this.basic =
            [
                { title: 'Balance', routerLink: '/balance', icon: 'card', line: 'none', hidden: false },
                { title: 'Send', routerLink: '/send-funds', icon: 'send', line: 'none', hidden: false },
                { title: 'Receive', routerLink: '/my-address', icon: 'arrow-down', line: 'none', hidden: false },
                { title: 'History', routerLink: '/history', icon: 'book', line: 'half', hidden: false },
            ];
        this.advanced =
            [
                { title: 'Token', routerLink: '/create-token', icon: 'brush', line: 'none', hidden: false },
                { title: 'Status', routerLink: '/status', icon: 'analytics', line: 'none', hidden: false },
                { title: 'Terminal', routerLink: '/mini-term', icon: 'code', line: 'none', hidden: false },
                { title: 'Community', routerLink: '/community', icon: 'share', line: 'half', hidden: false },
                { title: 'Settings', routerLink: '/settings', icon: 'build', line: 'none', hidden: true }
            ];
    }
    // localStorage
    setLocalStorage() {
        // check cookies for theme
        if (localStorage.getItem('toggleVal') === 'true') {
            document.body.classList.toggle('dark', true);
        }
        else {
            document.body.classList.toggle('dark', false);
        }
        if (localStorage.getItem('toggleVal') === 'true') {
            this.toggleValue = true;
        }
        else {
            this.toggleValue = false;
        }
        // localStorage - termFontSize
        if (!localStorage.getItem('termFontSize')) {
            localStorage.setItem('termFontSize', '' + 14);
        }
    }
    checkToggle(e) {
        if (this.toggleValue === false) {
            localStorage.setItem('toggleVal', 'false');
            document.body.classList.toggle('dark', false);
        }
        else {
            localStorage.setItem('toggleVal', 'true');
            document.body.classList.toggle('dark', true);
        }
    }
    presentToast(txt, color) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // Create a Toast
            const toast = yield this.toastCtrl.create({
                header: txt,
                duration: 3000,
                color: color,
                buttons: [{
                        text: 'Close',
                        role: 'cancel'
                    }]
            });
            yield toast.present();
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _service_status_service__WEBPACK_IMPORTED_MODULE_3__["StatusService"] },
    { type: _service_balance_service__WEBPACK_IMPORTED_MODULE_2__["BalanceService"] },
    { type: _service_userconfig_service__WEBPACK_IMPORTED_MODULE_4__["UserConfigService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"] },
    { type: _service_history_service__WEBPACK_IMPORTED_MODULE_1__["HistoryService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_status_service__WEBPACK_IMPORTED_MODULE_3__["StatusService"],
        _service_balance_service__WEBPACK_IMPORTED_MODULE_2__["BalanceService"],
        _service_userconfig_service__WEBPACK_IMPORTED_MODULE_4__["UserConfigService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"],
        _service_history_service__WEBPACK_IMPORTED_MODULE_1__["HistoryService"]])
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
/* harmony import */ var _components_pop_filter_pop_filter_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/pop-filter/pop-filter.component */ "./src/app/components/pop-filter/pop-filter.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/clipboard/ngx */ "./node_modules/@ionic-native/clipboard/ngx/index.js");
/* harmony import */ var _ionic_native_qr_scanner_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/qr-scanner/ngx */ "./node_modules/@ionic-native/qr-scanner/ngx/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _components_token_descr_token_descr_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/token-descr/token-descr.component */ "./src/app/components/token-descr/token-descr.component.ts");
/* harmony import */ var _components_pop_term_pop_term_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/pop-term/pop-term.component */ "./src/app/components/pop-term/pop-term.component.ts");
/* harmony import */ var _components_pop_settings_pop_settings_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/pop-settings/pop-settings.component */ "./src/app/components/pop-settings/pop-settings.component.ts");


/**
 * Created By Elias Nemr
 * 01/11/19
 * Minima Global
 * WALLET
 */
















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
            _components_token_descr_token_descr_component__WEBPACK_IMPORTED_MODULE_14__["TokenDescrComponent"],
            _components_pop_term_pop_term_component__WEBPACK_IMPORTED_MODULE_15__["PopTermComponent"],
            _components_pop_settings_pop_settings_component__WEBPACK_IMPORTED_MODULE_16__["PopSettingsComponent"],
            _components_pop_filter_pop_filter_component__WEBPACK_IMPORTED_MODULE_1__["PopFilterComponent"]
        ],
        entryComponents: [
            _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
            _components_token_descr_token_descr_component__WEBPACK_IMPORTED_MODULE_14__["TokenDescrComponent"],
            _components_pop_term_pop_term_component__WEBPACK_IMPORTED_MODULE_15__["PopTermComponent"],
            _components_pop_settings_pop_settings_component__WEBPACK_IMPORTED_MODULE_16__["PopSettingsComponent"],
            _components_pop_filter_pop_filter_component__WEBPACK_IMPORTED_MODULE_1__["PopFilterComponent"]
        ],
        imports: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"].forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_13__["IonicStorageModule"].forRoot()
        ],
        providers: [
            Storage,
            _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_10__["Clipboard"],
            _ionic_native_qr_scanner_ngx__WEBPACK_IMPORTED_MODULE_11__["QRScanner"],
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouteReuseStrategy"], useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicRouteStrategy"] },
            { provide: _angular_common__WEBPACK_IMPORTED_MODULE_12__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_12__["HashLocationStrategy"] },
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/pop-filter/pop-filter.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/pop-filter/pop-filter.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcG9wLWZpbHRlci9wb3AtZmlsdGVyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/pop-filter/pop-filter.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/pop-filter/pop-filter.component.ts ***!
  \***************************************************************/
/*! exports provided: PopFilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopFilterComponent", function() { return PopFilterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _service_userconfig_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../service/userconfig.service */ "./src/app/service/userconfig.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let PopFilterComponent = class PopFilterComponent {
    constructor(userConfigService) {
        this.userConfigService = userConfigService;
        this.userConfig = { historyOrderByMode: 1 };
        // set default value from observable
        this.userConfig.historyOrderByMode = this.userConfigService.userConfig.value.historyOrderByMode;
    }
    ngOnInit() { }
    compareWithFn(o1, o2) {
        return o1 == o2;
    }
    change(ev) {
        let temp = this.userConfigService.userConfig.value;
        temp.historyOrderByMode = ev.detail.value;
        this.userConfigService.userConfig.next(temp);
        this.userConfigService.saveUserConfig(this.userConfigService.userConfig.value);
    }
};
PopFilterComponent.ctorParameters = () => [
    { type: _service_userconfig_service__WEBPACK_IMPORTED_MODULE_1__["UserConfigService"] }
];
PopFilterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-pop-filter',
        template: __webpack_require__(/*! raw-loader!./pop-filter.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/pop-filter/pop-filter.component.html"),
        styles: [__webpack_require__(/*! ./pop-filter.component.scss */ "./src/app/components/pop-filter/pop-filter.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_userconfig_service__WEBPACK_IMPORTED_MODULE_1__["UserConfigService"]])
], PopFilterComponent);



/***/ }),

/***/ "./src/app/components/pop-settings/pop-settings.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/pop-settings/pop-settings.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-list ion-item ion-label {\n  white-space: normal;\n  font-size: 0.7rem !important;\n  font-family: manrope-bold;\n}\n\nion-list ion-item ion-select {\n  font-size: 0.7rem !important;\n  line-height: 23px;\n}\n\nion-list-header {\n  text-transform: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGlhc25lbXIvcHJvamVjdHMvV0FMTEVUL21vYmlsZS1hcHAtZnJvbnQtZW5kL2FwcC9zcmMvYXBwL2NvbXBvbmVudHMvcG9wLXNldHRpbmdzL3BvcC1zZXR0aW5ncy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9wb3Atc2V0dGluZ3MvcG9wLXNldHRpbmdzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSw0QkFBQTtFQUNBLHlCQUFBO0FDQ0o7O0FEQ0E7RUFDSSw0QkFBQTtFQUNBLGlCQUFBO0FDRUo7O0FEQUE7RUFDSSxvQkFBQTtBQ0dKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wb3Atc2V0dGluZ3MvcG9wLXNldHRpbmdzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWxpc3QgaW9uLWl0ZW0gaW9uLWxhYmVsIHtcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICAgIGZvbnQtc2l6ZTogMC43cmVtICFpbXBvcnRhbnQ7XG4gICAgZm9udC1mYW1pbHk6IG1hbnJvcGUtYm9sZDtcbn1cbmlvbi1saXN0IGlvbi1pdGVtIGlvbi1zZWxlY3Qge1xuICAgIGZvbnQtc2l6ZTogMC43cmVtICFpbXBvcnRhbnQ7XG4gICAgbGluZS1oZWlnaHQ6IDIzcHg7XG59XG5pb24tbGlzdC1oZWFkZXIge1xuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xufVxuIiwiaW9uLWxpc3QgaW9uLWl0ZW0gaW9uLWxhYmVsIHtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAwLjdyZW0gIWltcG9ydGFudDtcbiAgZm9udC1mYW1pbHk6IG1hbnJvcGUtYm9sZDtcbn1cblxuaW9uLWxpc3QgaW9uLWl0ZW0gaW9uLXNlbGVjdCB7XG4gIGZvbnQtc2l6ZTogMC43cmVtICFpbXBvcnRhbnQ7XG4gIGxpbmUtaGVpZ2h0OiAyM3B4O1xufVxuXG5pb24tbGlzdC1oZWFkZXIge1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/pop-settings/pop-settings.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/pop-settings/pop-settings.component.ts ***!
  \*******************************************************************/
/*! exports provided: PopSettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopSettingsComponent", function() { return PopSettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _service_userconfig_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../service/userconfig.service */ "./src/app/service/userconfig.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let PopSettingsComponent = class PopSettingsComponent {
    constructor(userConfigService) {
        this.userConfigService = userConfigService;
        this.userConfig = { tokenDisplayMode: 1 };
        // set default value from observable
        this.userConfig.tokenDisplayMode = this.userConfigService.userConfig.value.tokenDisplayMode;
    }
    ngOnInit() { }
    compareWithFn(o1, o2) {
        return o1 === o2;
    }
    change(ev) {
        let temp = this.userConfigService.userConfig.value;
        temp.tokenDisplayMode = parseInt(ev.detail.value);
        this.userConfigService.userConfig.next(temp);
        this.userConfigService.saveUserConfig(this.userConfigService.userConfig.value);
    }
};
PopSettingsComponent.ctorParameters = () => [
    { type: _service_userconfig_service__WEBPACK_IMPORTED_MODULE_1__["UserConfigService"] }
];
PopSettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-pop-settings',
        template: __webpack_require__(/*! raw-loader!./pop-settings.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/pop-settings/pop-settings.component.html"),
        styles: [__webpack_require__(/*! ./pop-settings.component.scss */ "./src/app/components/pop-settings/pop-settings.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_userconfig_service__WEBPACK_IMPORTED_MODULE_1__["UserConfigService"]])
], PopSettingsComponent);



/***/ }),

/***/ "./src/app/components/pop-term/pop-term.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/pop-term/pop-term.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".activate-btn-minus {\n  color: #929396;\n  text-align: centre;\n  font-size: 12px;\n}\n\n.activate-btn-add {\n  color: #929396;\n  text-align: center;\n  font-size: 20px;\n}\n\n.ios ion-button {\n  margin: auto;\n}\n\n.ios .pop-term-col {\n  width: 100%;\n  height: auto;\n}\n\n.ios .activate-btn-minus {\n  color: #929396;\n  padding-top: 18px;\n  font-size: 14px;\n  text-align: center;\n}\n\n.ios .activate-btn-add {\n  color: #929396;\n  font-size: 20px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGlhc25lbXIvcHJvamVjdHMvV0FMTEVUL21vYmlsZS1hcHAtZnJvbnQtZW5kL2FwcC9zcmMvYXBwL2NvbXBvbmVudHMvcG9wLXRlcm0vcG9wLXRlcm0uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvcG9wLXRlcm0vcG9wLXRlcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDQ0o7O0FEQ0E7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDRUo7O0FERUE7RUFDSSxZQUFBO0FDQ0o7O0FEQ0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ0VKOztBREFBO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDR0o7O0FEREE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDSUoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3BvcC10ZXJtL3BvcC10ZXJtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFjdGl2YXRlLWJ0bi1taW51cyB7XG4gICAgY29sb3I6ICM5MjkzOTY7XG4gICAgdGV4dC1hbGlnbjogY2VudHJlO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5hY3RpdmF0ZS1idG4tYWRkIHtcbiAgICBjb2xvcjogIzkyOTM5NjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4vLyBpT1MgZWRpdC5cbi5pb3MgaW9uLWJ1dHRvbiB7XG4gICAgbWFyZ2luOiBhdXRvO1xufVxuLmlvcyAucG9wLXRlcm0tY29sIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87ICBcbn1cbi5pb3MgLmFjdGl2YXRlLWJ0bi1taW51cyB7XG4gICAgY29sb3I6ICM5MjkzOTY7XG4gICAgcGFkZGluZy10b3A6IDE4cHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5pb3MgLmFjdGl2YXRlLWJ0bi1hZGQge1xuICAgIGNvbG9yOiAjOTI5Mzk2O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4iLCIuYWN0aXZhdGUtYnRuLW1pbnVzIHtcbiAgY29sb3I6ICM5MjkzOTY7XG4gIHRleHQtYWxpZ246IGNlbnRyZTtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uYWN0aXZhdGUtYnRuLWFkZCB7XG4gIGNvbG9yOiAjOTI5Mzk2O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLmlvcyBpb24tYnV0dG9uIHtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4uaW9zIC5wb3AtdGVybS1jb2wge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4uaW9zIC5hY3RpdmF0ZS1idG4tbWludXMge1xuICBjb2xvcjogIzkyOTM5NjtcbiAgcGFkZGluZy10b3A6IDE4cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaW9zIC5hY3RpdmF0ZS1idG4tYWRkIHtcbiAgY29sb3I6ICM5MjkzOTY7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */"

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

module.exports = "/** Title */\nion-title {\n  color: var(--ion-text-color, #F6661D);\n}\nion-title ion-icon {\n  width: 16px;\n  position: absolute;\n  padding-top: 3px;\n  cursor: pointer;\n  font-weight: 300;\n}\nion-card-header {\n  width: 100%;\n  margin-left: auto;\n  margin-right: auto;\n  white-space: nowrap;\n  font-size: 16px;\n}\nion-card-header ion-grid {\n  text-align: center;\n}\nion-card-header ion-icon {\n  --ionicon-stroke-width: 45px;\n}\nion-card-header img {\n  width: 100px;\n  margin-left: auto;\n  margin-right: auto;\n}\nion-card-header ion-col {\n  white-space: normal;\n}\n#variable {\n  text-align: right;\n  font-weight: 400;\n}\n#varname {\n  font-weight: 700;\n}\nion-card {\n  --overflow: hidden;\n  background: -webkit-gradient(linear, left top, left bottom, from(var(--ion-background-color, #fff)), to(var(--ion-background-color, #f2f2f2))) !important;\n  background: linear-gradient(to bottom, var(--ion-background-color, #fff) 0%, var(--ion-background-color, #f2f2f2) 100%) !important;\n}\nion-content {\n  --background: transparent;\n}\n.dismiss-btn {\n  height: auto;\n  float: right;\n  color: #48D2D3;\n  --color-hover: #EE6E73;\n}\n.title {\n  white-space: normal;\n  word-break: break-all;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGlhc25lbXIvcHJvamVjdHMvV0FMTEVUL21vYmlsZS1hcHAtZnJvbnQtZW5kL2FwcC9zcmMvYXBwL2NvbXBvbmVudHMvdG9rZW4tZGVzY3IvdG9rZW4tZGVzY3IuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvdG9rZW4tZGVzY3IvdG9rZW4tZGVzY3IuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsV0FBQTtBQUVBO0VBQ0sscUNBQUE7QUNBTDtBREVBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBRElBO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUNESjtBRElBO0VBQ0ksa0JBQUE7QUNESjtBREdBO0VBQ0ksNEJBQUE7QUNBSjtBREdBO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNBSjtBREVBO0VBQ0ksbUJBQUE7QUNDSjtBRENBO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtBQ0VKO0FEQUE7RUFDSSxnQkFBQTtBQ0dKO0FEQUE7RUFDSSxrQkFBQTtFQUNBLHlKQUFBO0VBQUEsa0lBQUE7QUNHSjtBREFBO0VBQ0kseUJBQUE7QUNHSjtBREFBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBRUEsc0JBQUE7QUNFSjtBRENBO0VBQ0ksbUJBQUE7RUFDQSxxQkFBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy90b2tlbi1kZXNjci90b2tlbi1kZXNjci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBUaXRsZSAqL1xuXG5pb24tdGl0bGUge1xuICAgICBjb2xvcjogIHZhcigtLWlvbi10ZXh0LWNvbG9yLCAjRjY2NjFEKTtcbn1cbmlvbi10aXRsZSBpb24taWNvbiB7XG4gICAgd2lkdGg6IDE2cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHBhZGRpbmctdG9wOiAzcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5pb24tdGl0bGUgc3BhbiB7XG4gICAgLy8gY29sb3I6ICB2YXIoLS1pb24tdGV4dC1jb2xvciwgIzAwMCk7XG59XG5pb24tY2FyZC1oZWFkZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBcbn1cbmlvbi1jYXJkLWhlYWRlciBpb24tZ3JpZCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuaW9uLWNhcmQtaGVhZGVyIGlvbi1pY29uIHtcbiAgICAtLWlvbmljb24tc3Ryb2tlLXdpZHRoOiA0NXB4O1xuXG59XG5pb24tY2FyZC1oZWFkZXIgaW1nIHtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuaW9uLWNhcmQtaGVhZGVyIGlvbi1jb2wge1xuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG59XG4jdmFyaWFibGUge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG4jdmFybmFtZSB7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuaW9uLWNhcmQge1xuICAgIC0tb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsICNmZmYpIDAlLCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwgI2YyZjJmMikgMTAwJSkgIWltcG9ydGFudDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbi5kaXNtaXNzLWJ0biB7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBjb2xvcjogIzQ4RDJEMztcblxuICAgIC0tY29sb3ItaG92ZXI6ICNFRTZFNzM7XG59XG5cbi50aXRsZSB7XG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG4gICAgXG59XG4iLCIvKiogVGl0bGUgKi9cbmlvbi10aXRsZSB7XG4gIGNvbG9yOiB2YXIoLS1pb24tdGV4dC1jb2xvciwgI0Y2NjYxRCk7XG59XG5cbmlvbi10aXRsZSBpb24taWNvbiB7XG4gIHdpZHRoOiAxNnB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHBhZGRpbmctdG9wOiAzcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cblxuaW9uLWNhcmQtaGVhZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuaW9uLWNhcmQtaGVhZGVyIGlvbi1ncmlkIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5pb24tY2FyZC1oZWFkZXIgaW9uLWljb24ge1xuICAtLWlvbmljb24tc3Ryb2tlLXdpZHRoOiA0NXB4O1xufVxuXG5pb24tY2FyZC1oZWFkZXIgaW1nIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuXG5pb24tY2FyZC1oZWFkZXIgaW9uLWNvbCB7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG59XG5cbiN2YXJpYWJsZSB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG4jdmFybmFtZSB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbmlvbi1jYXJkIHtcbiAgLS1vdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwgI2ZmZikgMCUsIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZjJmMmYyKSAxMDAlKSAhaW1wb3J0YW50O1xufVxuXG5pb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbi5kaXNtaXNzLWJ0biB7XG4gIGhlaWdodDogYXV0bztcbiAgZmxvYXQ6IHJpZ2h0O1xuICBjb2xvcjogIzQ4RDJEMztcbiAgLS1jb2xvci1ob3ZlcjogI0VFNkU3Mztcbn1cblxuLnRpdGxlIHtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xufSJdfQ== */"

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
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
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
                buttons: [{
                        text: 'Close',
                        role: 'cancel'
                    }],
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

/***/ "./src/app/service/balance.service.ts":
/*!********************************************!*\
  !*** ./src/app/service/balance.service.ts ***!
  \********************************************/
/*! exports provided: BalanceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BalanceService", function() { return BalanceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let BalanceService = class BalanceService {
    constructor() {
        this.updatedBalance = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        // take in tokenArr and the element you'd like to add to front of array
        this.update = (a, e) => {
            var i = a.findIndex(o => o.tokenid === e);
            i > 0 ? a.splice(0, 0, a.splice(i, 1)[0]) : i && a.splice(0, 0, e);
            (a.length > 5) && a.length--;
            return a;
        };
    }
};
BalanceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], BalanceService);



/***/ }),

/***/ "./src/app/service/history.service.ts":
/*!********************************************!*\
  !*** ./src/app/service/history.service.ts ***!
  \********************************************/
/*! exports provided: HistoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryService", function() { return HistoryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let HistoryService = class HistoryService {
    constructor() {
        this.updatedHistory = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({ status: false, minifunc: '', message: '', response: {} });
    }
};
HistoryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], HistoryService);



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
    createTXN(data) {
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
        let promise = new Promise((resolve, reject) => {
            minima__WEBPACK_IMPORTED_MODULE_3__["Minima"].cmd(fnc, function (resp) {
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

/***/ "./src/app/service/status.service.ts":
/*!*******************************************!*\
  !*** ./src/app/service/status.service.ts ***!
  \*******************************************/
/*! exports provided: StatusService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusService", function() { return StatusService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var minima__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! minima */ "./node_modules/minima/dist/minima.js");
/* harmony import */ var minima__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(minima__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");




let StatusService = class StatusService {
    constructor() {
        minima__WEBPACK_IMPORTED_MODULE_1__["Minima"].cmd('status full', (res) => {
            if (res.status) {
                const first = res.response;
                this.updatedStatus = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](first);
            }
        });
    }
};
StatusService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], StatusService);



/***/ }),

/***/ "./src/app/service/userconfig.service.ts":
/*!***********************************************!*\
  !*** ./src/app/service/userconfig.service.ts ***!
  \***********************************************/
/*! exports provided: UserConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserConfigService", function() { return UserConfigService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var minima__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! minima */ "./node_modules/minima/dist/minima.js");
/* harmony import */ var minima__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(minima__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");




let UserConfigService = class UserConfigService {
    constructor() {
        this.defaultConfig = { systemMode: 'light', terminalFontSize: '12', tokenDisplayMode: 1, historyOrderByMode: 1, historySaved: '' };
        this.userConfig = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.defaultConfig);
        this.createUserConfig(this.defaultConfig);
    }
    createUserConfig(defaultConfig) {
        minima__WEBPACK_IMPORTED_MODULE_2__["Minima"].file.load('UserConfig.txt', (res) => {
            //console.log(res);
            if (!res.success && !res.exists) {
                const data = defaultConfig;
                minima__WEBPACK_IMPORTED_MODULE_2__["Minima"].file.save(JSON.stringify(data), 'UserConfig.txt', (res) => {
                    if (res.success) {
                        console.log('User Configuration File has been created.');
                    }
                });
            }
            else {
                //console.log(JSON.parse(res.data))
                this.userConfig.next(JSON.parse(res.data));
            }
        });
    }
    saveUserConfig(currentValue) {
        minima__WEBPACK_IMPORTED_MODULE_2__["Minima"].file.load('UserConfig.txt', (res) => {
            if (res.success) {
                let data = res.data;
                if (data !== JSON.stringify(currentValue)) {
                    //console.log(JSON.stringify(currentValue));
                    minima__WEBPACK_IMPORTED_MODULE_2__["Minima"].file.save(JSON.stringify(currentValue), 'UserConfig.txt', (res) => {
                        if (res.success) {
                            //console.log('Updated UserConfig!');
                        }
                    });
                }
            }
        });
    }
    loadUserConfig(userConfig) {
        minima__WEBPACK_IMPORTED_MODULE_2__["Minima"].file.load('userConfig.txt', (res) => {
            if (res.success) {
                userConfig = JSON.parse(res.data);
            }
        });
        return;
    }
};
UserConfigService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], UserConfigService);



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



Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/eliasnemr/projects/WALLET/mobile-app-front-end/app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map