(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-contacts-contacts-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/contacts/contacts.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/contacts/contacts.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"page-header ion-no-border\">\n  <ion-toolbar>\n    <ion-title>\n    <ion-item id=\"title\" lines=\"none\" class=\"ion-no-padding\">\n      <ion-icon class=\"menu-btn\" (click)=\"openMenu()\" src=\"assets/menuIcon.svg\"></ion-icon>\n      Contacts\n    <ion-icon (click)=\"presentContactSettings()\" slot=\"end\" class=\"export\" name=\"ellipsis-horizontal-circle-outline\"></ion-icon>\n\n    </ion-item>\n    <ion-item id=\"subtitle\" class=\"breadcrumb ion-no-padding\" lines=\"none\">\n      All your contacts\n    </ion-item>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list class=\"ion-no-padding tools\">\n    <ion-item class=\"ion-no-padding\" lines=\"none\">\n      <ion-searchbar class=\"searchbarinput\" (ionChange)=\"queryContacts($event.target.value)\" placeholder=\"Search...\"></ion-searchbar>\n      <ion-icon (click)=\"presentAddContactForm()\" id=\"addButton\" slot=\"end\" name=\"add\"></ion-icon>\n      <ion-icon [ngStyle]=\"{'color': !editMode ? 'var(--ion-color-tertiary)' : '#EE5C5C'}\" (click)=\"toggleDeleteMode()\" id=\"deleteButton\" slot=\"end\" name=\"trash-outline\"></ion-icon>\n    </ion-item>\n  </ion-list>\n  \n  <ion-grid class=\"ion-no-padding\" *ngIf=\"contacts && contacts.length === 0\">\n    <ion-row>\n      <ion-col class=\"ion-no-padding\" size=\"12\">\n        <ion-label style=\"padding-left: 27px\">No contact to display...</ion-label>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-list #contactList class=\"ion-no-padding contacts\" *ngFor=\"let contact of contacts\">\n    <ion-item-sliding>\n    <ion-item class=\"contactItem ion-no-padding\" lines=\"none\">\n      <ion-avatar slot=\"start\">\n        <img src=\"{{contact.AVATAR}}\">\n      </ion-avatar>\n      <ion-label> \n        <h3>{{ contact.NAME }}</h3>\n        <p>{{ contact.ADDRESS }}</p>\n      </ion-label>\n      <ion-icon *ngIf=\"editMode\" class=\"trashIcon\" (click)=\"removeContact(contact.ADDRESS)\" name=\"trash-outline\" slot=\"end\"></ion-icon>\n    </ion-item>\n    <ion-item-options side=\"end\">\n      <ion-item-option (click)=\"copyAddress(contact.ADDRESS)\" color=\"primary\" expandable>\n        <div class=\"block\"> \n        <ion-icon name=\"copy\"></ion-icon>\n        <br>\n        Copy Address        \n      </div>  \n      </ion-item-option>\n    </ion-item-options>\n  </ion-item-sliding>\n  </ion-list>\n\n</ion-content>\n\n<ion-footer class=\"border-t\">\n  <ion-button (click)=\"giveMe50()\" class=\"gimme50 no-ripple\" fill=\"none\">\n    Gimme 50\n  </ion-button>\n</ion-footer>\n"

/***/ }),

/***/ "./src/app/pages/contacts/contacts.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/contacts/contacts.module.ts ***!
  \***************************************************/
/*! exports provided: ContactsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsPageModule", function() { return ContactsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _contacts_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contacts.page */ "./src/app/pages/contacts/contacts.page.ts");







const routes = [
    {
        path: '',
        component: _contacts_page__WEBPACK_IMPORTED_MODULE_6__["ContactsPage"]
    }
];
let ContactsPageModule = class ContactsPageModule {
};
ContactsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_contacts_page__WEBPACK_IMPORTED_MODULE_6__["ContactsPage"]]
    })
], ContactsPageModule);



/***/ }),

/***/ "./src/app/pages/contacts/contacts.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/contacts/contacts.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#deleteButton {\n  font-size: 1.8rem;\n  cursor: pointer;\n}\n\n#addButton {\n  font-size: 2rem;\n  color: var(--ion-color-color);\n  cursor: pointer;\n}\n\nion-list.tools {\n  padding: 0;\n  padding-top: 7px;\n}\n\nion-list.tools ion-item {\n  --padding-start: 27px;\n  --inner-padding-end: 27px;\n}\n\nion-item.contactItem {\n  padding: 0;\n  --padding-start: 27px;\n  --inner-padding-end: 27px;\n  --border-color: var(--ion-color-item-border);\n}\n\nion-item.contactItem:hover {\n  --background: var(--ion-color-item-hover);\n}\n\nion-searchbar {\n  padding: 0;\n  --box-shadow: 0;\n  --icon-color: #001C32;\n  --background: var(--ion-color-inputs);\n  --border: 1px solid #f0f0fa;\n  color: #001C32;\n  font-size: 12px;\n}\n\nion-item-option div.block {\n  width: 100%;\n  text-transform: none;\n  display: inline-block;\n  vertical-align: middle;\n  text-align: center;\n  font-size: 0.85rem;\n}\n\nion-item-option div.block ion-icon {\n  font-size: 1.2rem;\n}\n\nion-icon.trashIcon {\n  cursor: pointer;\n}\n\nion-icon.export {\n  cursor: pointer;\n  color: var(--ion-color-color);\n  position: absolute;\n  right: 0;\n}\n\nion-icon.trashIcon:hover {\n  color: var(--ion-color-secondary);\n}\n\n.center {\n  right: 2%;\n  -webkit-box-align: center !important;\n          align-items: center !important;\n  -webkit-box-pack: center !important;\n          justify-content: center !important;\n  display: -webkit-inline-box !important;\n  display: inline-flex !important;\n  text-align: center !important;\n}\n\nion-label h3 {\n  font-family: manrope-bold;\n}\n\nion-label p {\n  color: var(--ion-color-color);\n  opacity: 0.7;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGlhc25lbXIvcHJvamVjdHMvV2FsbGV0L21vYmlsZS1hcHAtZnJvbnQtZW5kL2FwcC9zcmMvYXBwL3BhZ2VzL2NvbnRhY3RzL2NvbnRhY3RzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvY29udGFjdHMvY29udGFjdHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSxlQUFBO0FDRUY7O0FEQUE7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7QUNHRjs7QUREQTtFQUNFLHFCQUFBO0VBQ0EseUJBQUE7QUNJRjs7QURGQTtFQUNFLFVBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsNENBQUE7QUNLRjs7QURIQTtFQUNFLHlDQUFBO0FDTUY7O0FESEE7RUFDRSxVQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EscUNBQUE7RUFDQSwyQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FDTUY7O0FESEE7RUFDRSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ01GOztBREpBO0VBQ0UsaUJBQUE7QUNPRjs7QURMQTtFQUNFLGVBQUE7QUNRRjs7QUROQTtFQUNFLGVBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtBQ1NGOztBRFBBO0VBQ0UsaUNBQUE7QUNVRjs7QURSQTtFQUNFLFNBQUE7RUFDQSxvQ0FBQTtVQUFBLDhCQUFBO0VBQ0EsbUNBQUE7VUFBQSxrQ0FBQTtFQUNBLHNDQUFBO0VBQUEsK0JBQUE7RUFDQSw2QkFBQTtBQ1dGOztBRFRBO0VBQ0UseUJBQUE7QUNZRjs7QURWQTtFQUNFLDZCQUFBO0VBQ0EsWUFBQTtBQ2FGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY29udGFjdHMvY29udGFjdHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2RlbGV0ZUJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogMS44cmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4jYWRkQnV0dG9uIHsgXG4gIGZvbnQtc2l6ZTogMi4wcmVtO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWNvbG9yKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuaW9uLWxpc3QudG9vbHMge1xuICBwYWRkaW5nOjA7XG4gIHBhZGRpbmctdG9wOiA3cHg7XG59XG5pb24tbGlzdC50b29scyBpb24taXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMjdweDtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMjdweDtcbn1cbmlvbi1pdGVtLmNvbnRhY3RJdGVtIHtcbiAgcGFkZGluZzogMDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAyN3B4O1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAyN3B4O1xuICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWl0ZW0tYm9yZGVyKTtcbn1cbmlvbi1pdGVtLmNvbnRhY3RJdGVtOmhvdmVyIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItaXRlbS1ob3Zlcik7XG59XG5cbmlvbi1zZWFyY2hiYXIge1xuICBwYWRkaW5nOiAwO1xuICAtLWJveC1zaGFkb3c6IDA7XG4gIC0taWNvbi1jb2xvcjogIzAwMUMzMjtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItaW5wdXRzKTtcbiAgLS1ib3JkZXI6IDFweCBzb2xpZCAjZjBmMGZhO1xuICBjb2xvcjogIzAwMUMzMjtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG5pb24taXRlbS1vcHRpb24gZGl2LmJsb2NrIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAwLjg1cmVtO1xufVxuaW9uLWl0ZW0tb3B0aW9uIGRpdi5ibG9jayBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xufVxuaW9uLWljb24udHJhc2hJY29uIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuaW9uLWljb24uZXhwb3J0IHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWNvbG9yKTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbn1cbmlvbi1pY29uLnRyYXNoSWNvbjpob3ZlciB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbn1cbi5jZW50ZXIge1xuICByaWdodDogMiU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcbiAgZGlzcGxheTogaW5saW5lLWZsZXggIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG59XG5pb24tbGFiZWwgaDMge1xuICBmb250LWZhbWlseTogbWFucm9wZS1ib2xkO1xufVxuaW9uLWxhYmVsIHAge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWNvbG9yKTtcbiAgb3BhY2l0eTogMC43O1xufSIsIiNkZWxldGVCdXR0b24ge1xuICBmb250LXNpemU6IDEuOHJlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4jYWRkQnV0dG9uIHtcbiAgZm9udC1zaXplOiAycmVtO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWNvbG9yKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5pb24tbGlzdC50b29scyB7XG4gIHBhZGRpbmc6IDA7XG4gIHBhZGRpbmctdG9wOiA3cHg7XG59XG5cbmlvbi1saXN0LnRvb2xzIGlvbi1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAyN3B4O1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAyN3B4O1xufVxuXG5pb24taXRlbS5jb250YWN0SXRlbSB7XG4gIHBhZGRpbmc6IDA7XG4gIC0tcGFkZGluZy1zdGFydDogMjdweDtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMjdweDtcbiAgLS1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1pdGVtLWJvcmRlcik7XG59XG5cbmlvbi1pdGVtLmNvbnRhY3RJdGVtOmhvdmVyIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItaXRlbS1ob3Zlcik7XG59XG5cbmlvbi1zZWFyY2hiYXIge1xuICBwYWRkaW5nOiAwO1xuICAtLWJveC1zaGFkb3c6IDA7XG4gIC0taWNvbi1jb2xvcjogIzAwMUMzMjtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItaW5wdXRzKTtcbiAgLS1ib3JkZXI6IDFweCBzb2xpZCAjZjBmMGZhO1xuICBjb2xvcjogIzAwMUMzMjtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG5pb24taXRlbS1vcHRpb24gZGl2LmJsb2NrIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAwLjg1cmVtO1xufVxuXG5pb24taXRlbS1vcHRpb24gZGl2LmJsb2NrIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAxLjJyZW07XG59XG5cbmlvbi1pY29uLnRyYXNoSWNvbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuaW9uLWljb24uZXhwb3J0IHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWNvbG9yKTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbn1cblxuaW9uLWljb24udHJhc2hJY29uOmhvdmVyIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xufVxuXG4uY2VudGVyIHtcbiAgcmlnaHQ6IDIlO1xuICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4ICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xufVxuXG5pb24tbGFiZWwgaDMge1xuICBmb250LWZhbWlseTogbWFucm9wZS1ib2xkO1xufVxuXG5pb24tbGFiZWwgcCB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItY29sb3IpO1xuICBvcGFjaXR5OiAwLjc7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/contacts/contacts.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/contacts/contacts.page.ts ***!
  \*************************************************/
/*! exports provided: ContactsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsPage", function() { return ContactsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _components_pop_contacts_pop_contacts_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../components/pop-contacts/pop-contacts.component */ "./src/app/components/pop-contacts/pop-contacts.component.ts");
/* harmony import */ var _service_minima_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../service/minima-api.service */ "./src/app/service/minima-api.service.ts");
/* harmony import */ var _service_userconfig_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../service/userconfig.service */ "./src/app/service/userconfig.service.ts");
/* harmony import */ var _components_contacts_modal_contacts_modal_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../components/contacts-modal/contacts-modal.page */ "./src/app/components/contacts-modal/contacts-modal.page.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_service_contacts_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/service/contacts.service */ "./src/app/service/contacts.service.ts");








let ContactsPage = class ContactsPage {
    constructor(toastController, menu, api, userConfigService, alertController, contactService, modalController, popoverController) {
        this.toastController = toastController;
        this.menu = menu;
        this.api = api;
        this.userConfigService = userConfigService;
        this.alertController = alertController;
        this.contactService = contactService;
        this.modalController = modalController;
        this.popoverController = popoverController;
        this.editMode = false;
        this.contacts = [];
        this.user = {
            tokenDisplayMode: 1,
            tips: {
                balance: false,
                contacts: false,
                address: false
            }
        };
    }
    ngOnInit() {
        this.contactService.data.subscribe((res) => {
            // set the list
            this.contacts = res;
        });
        this.userConfigService.userConfig.subscribe((res) => {
            this.user = res;
        });
    }
    presentContactSettings(ev) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: _components_pop_contacts_pop_contacts_component__WEBPACK_IMPORTED_MODULE_1__["PopContactsComponent"],
                translucent: true,
                event: ev
            });
            yield popover.present();
        });
    }
    openMenu() {
        this.menu.open();
    }
    queryContacts(qy) {
        qy = qy.toUpperCase();
        if (qy.length > 0) {
            this.contacts = this.contacts.filter(ele => {
                return ele.NAME.toUpperCase().includes(qy) || ele.ADDRESS.toUpperCase().includes(qy);
            });
        }
        else {
            this.contactService.data.subscribe((res) => {
                this.contacts = res;
            });
        }
    }
    toggleDeleteMode() {
        if (this.editMode) {
            this.editMode = false;
        }
        else {
            this.editMode = true;
        }
    }
    removeContact(addr) {
        this.presentAlert(addr);
    }
    hideTip() {
        this.user.tips.contacts = true;
        this.userConfigService.userConfig.next(this.user);
        this.userConfigService.saveUserConfig(this.user);
    }
    giveMe50() {
        this.api.giveMe50().then((res) => {
            if (res.status === true) {
                this.presentAlertDefault('Gimme50', 'Successful', 'Status');
            }
            else {
                this.presentAlertDefault('Gimme50', res.message, 'Status');
            }
        });
    }
    copyAddress(addr) {
        document.addEventListener('copy', (e) => {
            e.clipboardData.setData('text/plain', addr);
            this.presentToast('Copied To Clipboard', 'primary', 'bottom');
            this.ContactList.closeSlidingItems();
            e.preventDefault();
            document.removeEventListener('copy', null);
        });
        document.execCommand('copy');
    }
    presentAlert(addr) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Delete Contact',
                subHeader: 'Once this contact is deleted, you can\'t revert!',
                message: 'Are you sure?',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel'
                    },
                    {
                        text: 'Ok',
                        handler: () => {
                            this.contactService.removeContact(addr);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    presentAlertDefault(hdr, msg, sub) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'alert',
                header: hdr,
                subHeader: sub,
                message: msg,
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    presentToast(msg, clr, posn) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: msg,
                duration: 1000,
                color: clr,
                position: posn,
                buttons: ['cancel']
            });
            yield toast.present();
        });
    }
    presentAddContactForm() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _components_contacts_modal_contacts_modal_page__WEBPACK_IMPORTED_MODULE_4__["ContactsModalPage"],
                cssClass: 'contactsModal'
            });
            return yield modal.present();
        });
    }
};
ContactsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"] },
    { type: _service_minima_api_service__WEBPACK_IMPORTED_MODULE_2__["MinimaApiService"] },
    { type: _service_userconfig_service__WEBPACK_IMPORTED_MODULE_3__["UserConfigService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: src_app_service_contacts_service__WEBPACK_IMPORTED_MODULE_7__["ContactService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["PopoverController"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewChild"])('contactList', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonList"])
], ContactsPage.prototype, "ContactList", void 0);
ContactsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
        selector: 'app-contacts',
        template: __webpack_require__(/*! raw-loader!./contacts.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/contacts/contacts.page.html"),
        styles: [__webpack_require__(/*! ./contacts.page.scss */ "./src/app/pages/contacts/contacts.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"],
        _service_minima_api_service__WEBPACK_IMPORTED_MODULE_2__["MinimaApiService"],
        _service_userconfig_service__WEBPACK_IMPORTED_MODULE_3__["UserConfigService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"],
        src_app_service_contacts_service__WEBPACK_IMPORTED_MODULE_7__["ContactService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["PopoverController"]])
], ContactsPage);



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
    sendMessageTransaction(data) {
        //const txnidentifier = Math.floor(Math.random()*1000000000);
        const postTransaction = "send " + data.amount + " " + data.address + " " + data.tokenid + " " + " 254:[01000100]#255:[\"" + data.message + "\"]";
        // const customTXN = 
        // // Custom TXN with an ID
        // "txncreate "+txnidentifier+";"+
        // // Add state variable 1
        // "txnstate "+txnidentifier+" 254 01000100"+";"+
        // // Add User state variable 2
        // "txnstate "+txnidentifier+" 255 \""+data.message+"\""+";"+
        // // Auto fill the transaction
        // "txnauto "+txnidentifier+" "+data.amount+" "+data.address+" "+data.tokenid+";"+
        // // Post it!
        // "txnpost "+txnidentifier+";"+
        // // Clear the txn
        // "txndelete "+txnidentifier+";";
        // // send 1 0xFF 0x00 '254:0x1000#255:[This is a message]'
        return this.req(postTransaction);
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
        const promise = new Promise((resolve) => {
            minima__WEBPACK_IMPORTED_MODULE_3__["Minima"].cmd(fnc, (resp) => {
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



/***/ })

}]);
//# sourceMappingURL=pages-contacts-contacts-module-es2015.js.map