"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ViewTokensPageModule = void 0;
var shared_components_module_1 = require("./../../../components/shared-components.module");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var angular_1 = require("@ionic/angular");
var view_tokens_page_1 = require("./view-tokens.page");
var routes = [
    {
        path: '',
        component: view_tokens_page_1.ViewTokensPage
    },
];
var ViewTokensPageModule = /** @class */ (function () {
    /** */
    function ViewTokensPageModule() {
    }
    ViewTokensPageModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                angular_1.IonicModule,
                router_1.RouterModule.forChild(routes),
                shared_components_module_1.SharedComponentsModule,
            ],
            declarations: [view_tokens_page_1.ViewTokensPage]
        })
        /** */
    ], ViewTokensPageModule);
    return ViewTokensPageModule;
}());
exports.ViewTokensPageModule = ViewTokensPageModule;
