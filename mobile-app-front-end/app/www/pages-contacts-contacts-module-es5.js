(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-contacts-contacts-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/contacts/contacts.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/contacts/contacts.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"page-header ion-no-border\">\n  <ion-toolbar>\n    <ion-title>\n    <ion-item id=\"title\" lines=\"none\" class=\"ion-no-padding\">\n      <ion-icon class=\"menu-btn\" (click)=\"openMenu()\" src=\"assets/menuIcon.svg\"></ion-icon>\n      Contacts\n    </ion-item>\n    <ion-item id=\"subtitle\" class=\"breadcrumb ion-no-padding\" lines=\"none\">\n      All your contacts\n    </ion-item>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n\n<ion-content>\n  <ion-list class=\"ion-no-padding tools\">\n    <ion-item class=\"ion-no-padding\" lines=\"none\">\n      <ion-searchbar class=\"searchbarinput\" (ionChange)=\"queryContacts($event.target.value)\" placeholder=\"Search...\"></ion-searchbar>\n      <ion-icon (click)=\"presentAddContactForm()\" id=\"addButton\" slot=\"end\" name=\"add\"></ion-icon>\n      <ion-icon [ngStyle]=\"{'color': !editMode ? 'var(--ion-color-tertiary)' : '#EE5C5C'}\" (click)=\"toggleDeleteMode()\" id=\"deleteButton\" slot=\"end\" name=\"trash-outline\"></ion-icon>\n    </ion-item>\n  </ion-list>\n  \n  <ion-grid class=\"ion-no-padding\" *ngIf=\"contacts && contacts.length === 0\">\n    <ion-row>\n      <ion-col class=\"ion-no-padding\" size=\"12\">\n        <ion-label>No contact to display...</ion-label>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-list #contactList class=\"ion-no-padding contacts\" *ngFor=\"let contact of contacts\">\n    <ion-item-sliding>\n    <ion-item class=\"contactItem ion-no-padding\" lines=\"none\">\n      <ion-avatar slot=\"start\">\n        <img src=\"{{contact.AVATAR}}\">\n      </ion-avatar>\n      <ion-label> \n        <h3>{{ contact.NAME }}</h3>\n        <p>{{ contact.ADDRESS }}</p>\n      </ion-label>\n      <ion-icon *ngIf=\"editMode\" class=\"trashIcon\" (click)=\"removeContact(contact.ADDRESS)\" name=\"trash-outline\" slot=\"end\"></ion-icon>\n    </ion-item>\n    <ion-item-options side=\"end\">\n      <ion-item-option (click)=\"copyAddress(contact.ADDRESS)\" color=\"primary\" expandable>\n        <div class=\"block\"> \n        <ion-icon name=\"copy\"></ion-icon>\n        <br>\n        Copy Address        \n      </div>  \n      </ion-item-option>\n    </ion-item-options>\n  </ion-item-sliding>\n  </ion-list>\n\n</ion-content>\n\n<ion-footer class=\"border-t\">\n  <ion-button (click)=\"giveMe50()\" class=\"gimme50 no-ripple\" fill=\"none\">\n    Gimme 50\n  </ion-button>\n</ion-footer>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _contacts_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contacts.page */ "./src/app/pages/contacts/contacts.page.ts");







var routes = [
    {
        path: '',
        component: _contacts_page__WEBPACK_IMPORTED_MODULE_6__["ContactsPage"]
    }
];
var ContactsPageModule = /** @class */ (function () {
    function ContactsPageModule() {
    }
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
    return ContactsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/contacts/contacts.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/contacts/contacts.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#deleteButton {\n  font-size: 1.8rem;\n  cursor: pointer;\n}\n\n#addButton {\n  font-size: 2rem;\n  cursor: pointer;\n}\n\nion-list.tools {\n  padding: 0;\n  padding-top: 7px;\n}\n\nion-list.tools ion-item {\n  --padding-start: 27px;\n  --inner-padding-end: 27px;\n}\n\nion-item.contactItem {\n  padding: 0;\n  --padding-start: 27px;\n  --inner-padding-end: 27px;\n  --border-color: var(--ion-color-item-border);\n}\n\nion-item.contactItem:hover {\n  --background: var(--ion-color-item-hover);\n}\n\nion-searchbar {\n  padding: 0;\n  --box-shadow: 0;\n  --icon-color: #001C32;\n  --background: var(--ion-color-inputs);\n  --border: 1px solid #f0f0fa;\n  color: #001C32;\n  font-size: 12px;\n}\n\nion-item-option div.block {\n  width: 100%;\n  text-transform: none;\n  display: inline-block;\n  vertical-align: middle;\n  text-align: center;\n  font-size: 0.85rem;\n}\n\nion-item-option div.block ion-icon {\n  font-size: 1.2rem;\n}\n\nion-icon.trashIcon {\n  cursor: pointer;\n}\n\nion-icon.trashIcon:hover {\n  color: var(--ion-color-secondary);\n}\n\n.center {\n  right: 2%;\n  -webkit-box-align: center !important;\n          align-items: center !important;\n  -webkit-box-pack: center !important;\n          justify-content: center !important;\n  display: -webkit-inline-box !important;\n  display: inline-flex !important;\n  text-align: center !important;\n}\n\nion-label h3 {\n  font-family: manrope-bold;\n}\n\nion-label p {\n  color: var(--ion-color-color);\n  opacity: 0.7;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGlhc25lbXIvcHJvamVjdHMvV2FsbGV0L21vYmlsZS1hcHAtZnJvbnQtZW5kL2FwcC9zcmMvYXBwL3BhZ2VzL2NvbnRhY3RzL2NvbnRhY3RzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvY29udGFjdHMvY29udGFjdHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxlQUFBO0VBQ0EsZUFBQTtBQ0VGOztBREFBO0VBQ0UsVUFBQTtFQUNBLGdCQUFBO0FDR0Y7O0FEREE7RUFDRSxxQkFBQTtFQUNBLHlCQUFBO0FDSUY7O0FERkE7RUFDRSxVQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLDRDQUFBO0FDS0Y7O0FESEE7RUFDRSx5Q0FBQTtBQ01GOztBREhBO0VBQ0UsVUFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLHFDQUFBO0VBQ0EsMkJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ01GOztBREhBO0VBQ0UsV0FBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNNRjs7QURKQTtFQUNFLGlCQUFBO0FDT0Y7O0FETEE7RUFDRSxlQUFBO0FDUUY7O0FETkE7RUFDRSxpQ0FBQTtBQ1NGOztBRFBBO0VBQ0UsU0FBQTtFQUNBLG9DQUFBO1VBQUEsOEJBQUE7RUFDQSxtQ0FBQTtVQUFBLGtDQUFBO0VBQ0Esc0NBQUE7RUFBQSwrQkFBQTtFQUNBLDZCQUFBO0FDVUY7O0FEUkE7RUFDRSx5QkFBQTtBQ1dGOztBRFRBO0VBQ0UsNkJBQUE7RUFDQSxZQUFBO0FDWUYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jb250YWN0cy9jb250YWN0cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjZGVsZXRlQnV0dG9uIHtcbiAgZm9udC1zaXplOiAxLjhyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbiNhZGRCdXR0b24geyBcbiAgZm9udC1zaXplOiAyLjByZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbmlvbi1saXN0LnRvb2xzIHtcbiAgcGFkZGluZzowO1xuICBwYWRkaW5nLXRvcDogN3B4O1xufVxuaW9uLWxpc3QudG9vbHMgaW9uLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDI3cHg7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDI3cHg7XG59XG5pb24taXRlbS5jb250YWN0SXRlbSB7XG4gIHBhZGRpbmc6IDA7XG4gIC0tcGFkZGluZy1zdGFydDogMjdweDtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMjdweDtcbiAgLS1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1pdGVtLWJvcmRlcik7XG59XG5pb24taXRlbS5jb250YWN0SXRlbTpob3ZlciB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWl0ZW0taG92ZXIpO1xufVxuXG5pb24tc2VhcmNoYmFyIHtcbiAgcGFkZGluZzogMDtcbiAgLS1ib3gtc2hhZG93OiAwO1xuICAtLWljb24tY29sb3I6ICMwMDFDMzI7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWlucHV0cyk7XG4gIC0tYm9yZGVyOiAxcHggc29saWQgI2YwZjBmYTtcbiAgY29sb3I6ICMwMDFDMzI7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuaW9uLWl0ZW0tb3B0aW9uIGRpdi5ibG9jayB7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMC44NXJlbTtcbn1cbmlvbi1pdGVtLW9wdGlvbiBkaXYuYmxvY2sgaW9uLWljb24ge1xuICBmb250LXNpemU6IDEuMnJlbTtcbn1cbmlvbi1pY29uLnRyYXNoSWNvbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbmlvbi1pY29uLnRyYXNoSWNvbjpob3ZlciB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbn1cbi5jZW50ZXIge1xuICByaWdodDogMiU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcbiAgZGlzcGxheTogaW5saW5lLWZsZXggIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG59XG5pb24tbGFiZWwgaDMge1xuICBmb250LWZhbWlseTogbWFucm9wZS1ib2xkO1xufVxuaW9uLWxhYmVsIHAge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWNvbG9yKTtcbiAgb3BhY2l0eTogMC43O1xufSIsIiNkZWxldGVCdXR0b24ge1xuICBmb250LXNpemU6IDEuOHJlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4jYWRkQnV0dG9uIHtcbiAgZm9udC1zaXplOiAycmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmlvbi1saXN0LnRvb2xzIHtcbiAgcGFkZGluZzogMDtcbiAgcGFkZGluZy10b3A6IDdweDtcbn1cblxuaW9uLWxpc3QudG9vbHMgaW9uLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDI3cHg7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDI3cHg7XG59XG5cbmlvbi1pdGVtLmNvbnRhY3RJdGVtIHtcbiAgcGFkZGluZzogMDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAyN3B4O1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAyN3B4O1xuICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWl0ZW0tYm9yZGVyKTtcbn1cblxuaW9uLWl0ZW0uY29udGFjdEl0ZW06aG92ZXIge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1pdGVtLWhvdmVyKTtcbn1cblxuaW9uLXNlYXJjaGJhciB7XG4gIHBhZGRpbmc6IDA7XG4gIC0tYm94LXNoYWRvdzogMDtcbiAgLS1pY29uLWNvbG9yOiAjMDAxQzMyO1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1pbnB1dHMpO1xuICAtLWJvcmRlcjogMXB4IHNvbGlkICNmMGYwZmE7XG4gIGNvbG9yOiAjMDAxQzMyO1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbmlvbi1pdGVtLW9wdGlvbiBkaXYuYmxvY2sge1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDAuODVyZW07XG59XG5cbmlvbi1pdGVtLW9wdGlvbiBkaXYuYmxvY2sgaW9uLWljb24ge1xuICBmb250LXNpemU6IDEuMnJlbTtcbn1cblxuaW9uLWljb24udHJhc2hJY29uIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5pb24taWNvbi50cmFzaEljb246aG92ZXIge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG59XG5cbi5jZW50ZXIge1xuICByaWdodDogMiU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcbiAgZGlzcGxheTogaW5saW5lLWZsZXggIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1sYWJlbCBoMyB7XG4gIGZvbnQtZmFtaWx5OiBtYW5yb3BlLWJvbGQ7XG59XG5cbmlvbi1sYWJlbCBwIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1jb2xvcik7XG4gIG9wYWNpdHk6IDAuNztcbn0iXX0= */"

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
/* harmony import */ var _service_minima_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../service/minima-api.service */ "./src/app/service/minima-api.service.ts");
/* harmony import */ var _service_userconfig_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../service/userconfig.service */ "./src/app/service/userconfig.service.ts");
/* harmony import */ var _components_contacts_modal_contacts_modal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../components/contacts-modal/contacts-modal.page */ "./src/app/components/contacts-modal/contacts-modal.page.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_contacts_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/service/contacts.service */ "./src/app/service/contacts.service.ts");







var ContactsPage = /** @class */ (function () {
    function ContactsPage(toastController, menu, api, userConfigService, alertController, contactService, modalController) {
        this.toastController = toastController;
        this.menu = menu;
        this.api = api;
        this.userConfigService = userConfigService;
        this.alertController = alertController;
        this.contactService = contactService;
        this.modalController = modalController;
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
    ContactsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.contactService.data.subscribe(function (res) {
            // set the list
            _this.contacts = res;
        });
        this.userConfigService.userConfig.subscribe(function (res) {
            _this.user = res;
        });
    };
    ContactsPage.prototype.openMenu = function () {
        this.menu.open();
    };
    ContactsPage.prototype.queryContacts = function (qy) {
        var _this = this;
        qy = qy.toUpperCase();
        if (qy.length > 0) {
            this.contacts = this.contacts.filter(function (ele) {
                return ele.NAME.toUpperCase().includes(qy) || ele.ADDRESS.toUpperCase().includes(qy);
            });
        }
        else {
            this.contactService.data.subscribe(function (res) {
                _this.contacts = res;
            });
        }
    };
    ContactsPage.prototype.toggleDeleteMode = function () {
        if (this.editMode) {
            this.editMode = false;
        }
        else {
            this.editMode = true;
        }
    };
    ContactsPage.prototype.removeContact = function (addr) {
        this.presentAlert(addr);
    };
    ContactsPage.prototype.hideTip = function () {
        this.user.tips.contacts = true;
        this.userConfigService.userConfig.next(this.user);
        this.userConfigService.saveUserConfig(this.user);
    };
    ContactsPage.prototype.presentAlert = function (addr) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
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
                                    handler: function () {
                                        _this.contactService.removeContact(addr);
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ContactsPage.prototype.presentAlertDefault = function (hdr, msg, sub) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            cssClass: 'alert',
                            header: hdr,
                            subHeader: sub,
                            message: msg,
                            buttons: ['OK']
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ContactsPage.prototype.giveMe50 = function () {
        var _this = this;
        this.api.giveMe50().then(function (res) {
            if (res.status === true) {
                _this.presentAlertDefault('Gimme50', 'Successful', 'Status');
            }
            else {
                _this.presentAlertDefault('Gimme50', res.message, 'Status');
            }
        });
    };
    ContactsPage.prototype.presentToast = function (msg, clr, posn) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: msg,
                            duration: 1000,
                            color: clr,
                            position: posn,
                            buttons: ['cancel']
                        })];
                    case 1:
                        toast = _a.sent();
                        return [4 /*yield*/, toast.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ContactsPage.prototype.copyAddress = function (addr) {
        var _this = this;
        document.addEventListener('copy', function (e) {
            e.clipboardData.setData('text/plain', addr);
            _this.presentToast('Copied To Clipboard', 'primary', 'bottom');
            _this.ContactList.closeSlidingItems();
            e.preventDefault();
            document.removeEventListener('copy', null);
        });
        document.execCommand('copy');
    };
    ContactsPage.prototype.presentAddContactForm = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _components_contacts_modal_contacts_modal_page__WEBPACK_IMPORTED_MODULE_3__["ContactsModalPage"],
                            cssClass: 'contactsModal'
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ContactsPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"] },
        { type: _service_minima_api_service__WEBPACK_IMPORTED_MODULE_1__["MinimaApiService"] },
        { type: _service_userconfig_service__WEBPACK_IMPORTED_MODULE_2__["UserConfigService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
        { type: src_app_service_contacts_service__WEBPACK_IMPORTED_MODULE_6__["ContactService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"])('contactList', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonList"])
    ], ContactsPage.prototype, "ContactList", void 0);
    ContactsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
            selector: 'app-contacts',
            template: __webpack_require__(/*! raw-loader!./contacts.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/contacts/contacts.page.html"),
            styles: [__webpack_require__(/*! ./contacts.page.scss */ "./src/app/pages/contacts/contacts.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"],
            _service_minima_api_service__WEBPACK_IMPORTED_MODULE_1__["MinimaApiService"],
            _service_userconfig_service__WEBPACK_IMPORTED_MODULE_2__["UserConfigService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
            src_app_service_contacts_service__WEBPACK_IMPORTED_MODULE_6__["ContactService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]])
    ], ContactsPage);
    return ContactsPage;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var minima__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! minima */ "./node_modules/minima/dist/minima.js");
/* harmony import */ var minima__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(minima__WEBPACK_IMPORTED_MODULE_3__);




var MinimaApiService = /** @class */ (function () {
    function MinimaApiService(loadingController) {
        this.loadingController = loadingController;
        this.loader = null;
    }
    MinimaApiService.prototype.showLoader = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!(this.loader == null)) return [3 /*break*/, 2];
                        _a = this;
                        return [4 /*yield*/, this.loadingController.create({
                                message: 'Loading'
                            })];
                    case 1:
                        _a.loader = _b.sent();
                        this.loader.present();
                        _b.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    MinimaApiService.prototype.hideLoader = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.loader !== null)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.loader.dismiss()];
                    case 1:
                        _a.sent();
                        this.loader = null;
                        return [3 /*break*/, 2];
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    MinimaApiService.prototype.createToken = function (data) {
        return this.req("tokencreate name:\"" + data.name + "\" amount:" + data.amount + " description:\"" + data.description + "\" script:\"" + data.script + "\" icon:" + data.icon + " proof:" + data.proof);
    };
    MinimaApiService.prototype.validateTokenID = function (tokenid) {
        return this.req("tokenvalidate " + tokenid);
    };
    MinimaApiService.prototype.sendMessageTransaction = function (data) {
        var txnidentifier = Math.floor(Math.random() * 1000000000);
        var port254 = 254;
        var port255 = 255;
        var customTXN = 
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
    };
    MinimaApiService.prototype.webLink = function (data) {
        return this.req('weblink+' + data.url);
    };
    MinimaApiService.prototype.setHost = function (newHost) {
        localStorage.setItem('minima_host', newHost);
    };
    MinimaApiService.prototype.newAddress = function () {
        return this.req('newaddress');
    };
    MinimaApiService.prototype.sendFunds = function (data) {
        return this.req('send ' + data.amount + ' ' + data.address + ' ' + data.tokenid);
    };
    MinimaApiService.prototype.giveMe50 = function () {
        return this.req('gimme50');
    };
    MinimaApiService.prototype.getBalance = function () {
        return this.req('balance');
    };
    MinimaApiService.prototype.getHistory = function () {
        return this.req('history');
    };
    MinimaApiService.prototype.clearMyHistory = function () {
        return this.req('history clear');
    };
    MinimaApiService.prototype.getStatus = function () {
        return this.req('status');
    };
    // Use minima.js instead..
    MinimaApiService.prototype.req = function (fnc) {
        var promise = new Promise(function (resolve) {
            minima__WEBPACK_IMPORTED_MODULE_3__["Minima"].cmd(fnc, function (resp) {
                //console.log(resp);
                resolve(resp);
            });
        });
        return promise;
    };
    MinimaApiService.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] }
    ]; };
    MinimaApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]])
    ], MinimaApiService);
    return MinimaApiService;
}());



/***/ })

}]);
//# sourceMappingURL=pages-contacts-contacts-module-es5.js.map