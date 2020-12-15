"use strict";
/*
  Created by Elias Nemr
  
  01/11/2019
  
  Minima, Global

  Wallet
*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var core_2 = require("@angular/core");
var http_1 = require("@angular/common/http");
var angular_1 = require("@ionic/angular");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var app_routing_module_1 = require("./app-routing.module");
var ngx_1 = require("@ionic-native/clipboard/ngx");
var ngx_2 = require("@ionic-native/qr-scanner/ngx");
var common_1 = require("@angular/common");
var storage_1 = require("@ionic/storage");
var token_descr_component_1 = require("./components/token-descr/token-descr.component");
var ngx_3 = require("@ionic-native/social-sharing/ngx");
var pop_term_component_1 = require("./components/pop-term/pop-term.component");
var pop_settings_component_1 = require("./components/pop-settings/pop-settings.component");
/*
  NgModules configure the injector and the compiler and help organize related things together.

  An NgModule is a class marked by the @NgModule decorator. @NgModule takes a metadata object that
    describes how to compile a component's template and how to create an injector at runtime. It
    identifies the module's own components, directives, and pipes, making some of them public,
    through the exports property, so that external components can use them. @NgModule can also add
    service providers to the application dependency injectors.
*/
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [app_component_1.AppComponent, token_descr_component_1.TokenDescrComponent, pop_term_component_1.PopTermComponent, pop_settings_component_1.PopSettingsComponent],
            entryComponents: [app_component_1.AppComponent, token_descr_component_1.TokenDescrComponent, pop_term_component_1.PopTermComponent, pop_settings_component_1.PopSettingsComponent],
            imports: [forms_1.FormsModule, http_1.HttpClientModule, platform_browser_1.BrowserModule, angular_1.IonicModule.forRoot(), app_routing_module_1.AppRoutingModule, storage_1.IonicStorageModule.forRoot()],
            providers: [
                ngx_3.SocialSharing,
                Storage,
                ngx_1.Clipboard,
                ngx_2.QRScanner,
                { provide: router_1.RouteReuseStrategy, useClass: angular_1.IonicRouteStrategy },
                { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy },
            ],
            bootstrap: [app_component_1.AppComponent],
            schemas: [core_2.CUSTOM_ELEMENTS_SCHEMA]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
