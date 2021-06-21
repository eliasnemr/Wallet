"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var contact_detail_component_1 = require("./components/contact-detail/contact-detail.component");
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
var pop_term_component_1 = require("./components/pop-term/pop-term.component");
var contacts_modal_page_1 = require("./components/contacts-modal/contacts-modal.page");
var pop_contacts_component_1 = require("./components/pop-contacts/pop-contacts.component");
var contacts_view_modal_component_1 = require("./components/contacts-view-modal/contacts-view-modal.component");
var upload_file_modal_component_1 = require("./components/upload-file-modal/upload-file-modal.component");
var overlay_component_1 = require("./components/overlay/overlay.component");
/**
 * Created By Elias Nemr
 * 01/11/19
 * Minima Global
 * WALLET
 */
var AppModule = /** @class */ (function () {
    /** MainModule */
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                app_routing_module_1.AppRoutingModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                http_1.HttpClientModule,
                platform_browser_1.BrowserModule,
                angular_1.IonicModule.forRoot({ animated: false })
            ],
            providers: [
                ngx_1.Clipboard,
                ngx_2.QRScanner,
                { provide: router_1.RouteReuseStrategy, useClass: angular_1.IonicRouteStrategy },
                { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy },
            ],
            declarations: [
                app_component_1.AppComponent,
                pop_term_component_1.PopTermComponent,
                pop_contacts_component_1.PopContactsComponent,
                contacts_modal_page_1.ContactsModalPage,
                contacts_view_modal_component_1.ContactsViewModalComponent,
                contact_detail_component_1.ContactDetailComponent,
                upload_file_modal_component_1.UploadFileModalComponent,
                overlay_component_1.OverlayComponent,
            ],
            entryComponents: [
                pop_term_component_1.PopTermComponent,
                pop_contacts_component_1.PopContactsComponent,
                contacts_view_modal_component_1.ContactsViewModalComponent,
                contacts_modal_page_1.ContactsModalPage,
                upload_file_modal_component_1.UploadFileModalComponent,
                contact_detail_component_1.ContactDetailComponent
            ],
            bootstrap: [app_component_1.AppComponent]
        })
        /** MainModule */
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
