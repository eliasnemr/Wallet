"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SendFundsPageModule = void 0;
var all_tokens_selector_component_1 = require("./../../components/all-tokens-selector/all-tokens-selector.component");
var token_modal_component_1 = require("./../../components/token-modal/token-modal.component");
var shared_components_module_1 = require("./../../components/shared-components.module");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var angular_1 = require("@ionic/angular");
var send_funds_page_1 = require("./send-funds.page");
var routes = [
    {
        path: '',
        component: send_funds_page_1.SendFundsPage,
        pathMatch: 'full'
    },
    {
        path: 'confirmation',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./confirmation/confirmation.module'); }).then(function (m) { return m.ConfirmationPageModule; }); }
    },
];
var SendFundsPageModule = /** @class */ (function () {
    /** */
    function SendFundsPageModule() {
    }
    SendFundsPageModule = __decorate([
        core_1.NgModule({
            imports: [
                forms_1.ReactiveFormsModule,
                common_1.CommonModule,
                forms_1.FormsModule,
                angular_1.IonicModule,
                router_1.RouterModule.forChild(routes),
                shared_components_module_1.SharedComponentsModule,
            ],
            declarations: [send_funds_page_1.SendFundsPage, token_modal_component_1.TokenModalComponent,
                all_tokens_selector_component_1.AllTokensSelectorComponent],
            entryComponents: [token_modal_component_1.TokenModalComponent]
        })
        /** */
    ], SendFundsPageModule);
    return SendFundsPageModule;
}());
exports.SendFundsPageModule = SendFundsPageModule;
