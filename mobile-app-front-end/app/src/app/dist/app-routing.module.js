"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var routes = [
    { path: '', redirectTo: 'balance', pathMatch: 'full' },
    { path: 'balance', loadChildren: function () {
            return Promise.resolve().then(function () { return require('./pages/balance/balance.module'); }).then(function (m) { return m.BalancePageModule; });
        } },
    { path: 'send-funds', loadChildren: function () {
            return Promise.resolve().then(function () { return require('./pages/send-funds/send-funds.module'); }).then(function (m) { return m.SendFundsPageModule; });
        } },
    { path: 'send-funds/:id', loadChildren: function () {
            return Promise.resolve().then(function () { return require('./pages/send-funds/send-funds.module'); }).then(function (m) { return m.SendFundsPageModule; });
        } },
    { path: 'status', loadChildren: function () {
            return Promise.resolve().then(function () { return require('./pages/mini-status/mini-status.module'); }).then(function (m) { return m.MiniStatusPageModule; });
        } },
    { path: 'my-address', loadChildren: function () {
            return Promise.resolve().then(function () { return require('./pages/my-address/my-address.module'); }).then(function (m) { return m.MyAddressPageModule; });
        } },
    { path: 'code', loadChildren: function () {
            return Promise.resolve().then(function () { return require('./pages/send-funds/send-funds.module'); }).then(function (m) { return m.SendFundsPageModule; });
        } },
    { path: 'mini-term', loadChildren: function () {
            return Promise.resolve().then(function () { return require('./pages/mini-term/mini-term.module'); }).then(function (m) { return m.MiniTermPageModule; });
        } },
    { path: 'mini-status', loadChildren: function () {
            return Promise.resolve().then(function () { return require('./pages/mini-status/mini-status.module'); }).then(function (m) { return m.MiniStatusPageModule; });
        } },
    { path: 'create-token', loadChildren: function () {
            return Promise.resolve().then(function () { return require('./pages/create-token/create-token.module'); }).then(function (m) { return m.CreateTokenPageModule; });
        } },
    { path: 'community', loadChildren: function () {
            return Promise.resolve().then(function () { return require('./pages/community/community.module'); }).then(function (m) { return m.CommunityPageModule; });
        } },
    { path: 'history', loadChildren: function () {
            return Promise.resolve().then(function () { return require('./pages/history/history.module'); }).then(function (m) { return m.HistoryPageModule; });
        } },
    { path: 'contacts-modal', loadChildren: function () {
            return Promise.resolve().then(function () { return require('./components/contacts-modal/contacts-modal.module'); }).then(function (m) { return m.ContactsModalPageModule; });
        } },
    { path: 'contacts', loadChildren: function () {
            return Promise.resolve().then(function () { return require('./pages/contacts/contacts.module'); }).then(function (m) { return m.ContactsPageModule; });
        } },
    { path: '**', loadChildren: function () {
            return Promise.resolve().then(function () { return require('./pages/balance/balance.module'); }).then(function (m) { return m.BalancePageModule; });
        } },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forRoot(routes, { preloadingStrategy: router_1.PreloadAllModules })
            ],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
