"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.HistoryPageModule = void 0;
var shared_components_module_1 = require("./../../components/shared-components.module");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var angular_1 = require("@ionic/angular");
var history_page_1 = require("./history.page");
var routes = [
    {
        path: '',
        component: history_page_1.HistoryPage,
        pathMatch: 'full'
    },
    {
        path: 'view-txn/:id',
        loadChildren: function () {
            return Promise.resolve().then(function () { return require('./view-txn/view-txn.module'); }).then(function (m) { return m.ViewTXNPageModule; });
        }
    },
    {
        path: 'view-txn',
        component: history_page_1.HistoryPage
    },
];
var HistoryPageModule = /** @class */ (function () {
    /** */
    function HistoryPageModule() {
    }
    HistoryPageModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                angular_1.IonicModule,
                router_1.RouterModule.forChild(routes),
                shared_components_module_1.SharedComponentsModule,
            ],
            declarations: [history_page_1.HistoryPage]
        })
        /** */
    ], HistoryPageModule);
    return HistoryPageModule;
}());
exports.HistoryPageModule = HistoryPageModule;
