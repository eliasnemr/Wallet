"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var contacts_modal_page_1 = require("./components/contacts-modal/contacts-modal.page");
/**
 * Created By Elias Nemr
 * 01/11/19
 * Minima Global
 * WALLET
 */
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var http_1 = require("@angular/common/http");
var angular_1 = require("@ionic/angular");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var app_routing_module_1 = require("./app-routing.module");
var ngx_1 = require("@ionic-native/clipboard/ngx");
var ngx_2 = require("@ionic-native/qr-scanner/ngx");
var common_1 = require("@angular/common");
var token_descr_component_1 = require("./components/token-descr/token-descr.component");
var pop_term_component_1 = require("./components/pop-term/pop-term.component");
var pop_settings_component_1 = require("./components/pop-settings/pop-settings.component");
var pop_filter_component_1 = require("./components/pop-filter/pop-filter.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                token_descr_component_1.TokenDescrComponent,
                pop_term_component_1.PopTermComponent,
                pop_settings_component_1.PopSettingsComponent,
                pop_filter_component_1.PopFilterComponent,
                contacts_modal_page_1.ContactsModalPage
            ],
            entryComponents: [pop_settings_component_1.PopSettingsComponent, pop_filter_component_1.PopFilterComponent, pop_term_component_1.PopTermComponent, contacts_modal_page_1.ContactsModalPage],
            imports: [
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                http_1.HttpClientModule,
                platform_browser_1.BrowserModule,
                angular_1.IonicModule.forRoot(),
                app_routing_module_1.AppRoutingModule
            ],
            providers: [
                Storage,
                ngx_1.Clipboard,
                ngx_2.QRScanner,
                { provide: router_1.RouteReuseStrategy, useClass: angular_1.IonicRouteStrategy },
                { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy },
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
