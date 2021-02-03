(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-contacts-contacts-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/contacts/contacts.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/contacts/contacts.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-title>\n    <ion-item lines=\"none\" class=\"ion-no-padding\">\n      <ion-menu-button></ion-menu-button>\n      Contacts\n    </ion-item>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-item class=\"breadcrumb ion-no-padding\" lines=\"none\" *ngIf=\"contacts.length > 0\">\n  All your contacts\n</ion-item>\n\n<ion-content>\n  <ion-list class=\"tools\">\n    <ion-item lines=\"none\">\n    <ion-searchbar (ionChange)=\"queryContacts($event.target.value)\" placeholder=\"Search for your contact...\"></ion-searchbar>\n    <ion-icon (click)=\"presentAddContactForm()\" id=\"addButton\" slot=\"end\" name=\"add\"></ion-icon>\n    <ion-icon [ngStyle]=\"{'color': !editMode ? 'var(--ion-color-tertiary)' : '#EE5C5C'}\" (click)=\"toggleDeleteMode()\" id=\"deleteButton\" slot=\"end\" name=\"trash-outline\"></ion-icon>\n    </ion-item>\n  </ion-list>\n  \n  <ion-grid *ngIf=\"contacts && contacts.length === 0\">\n    <ion-row>\n      <ion-col style=\"display: flex; align-items:center; justify-content:center\" size=\"12\">\n        <ion-label>No contact(s) to display...</ion-label>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-list #contactList class=\"ion-no-padding contacts\" *ngFor=\"let contact of contacts\">\n    <ion-item-sliding>\n    <ion-item class=\"contactItem\" lines=\"full\">\n      <ion-avatar slot=\"start\">\n        <img src=\"{{contact.AVATAR}}\">\n      </ion-avatar>\n      <ion-label> \n        <h3>{{ contact.NAME }}</h3>\n        <p>{{ contact.ADDRESS }}</p>\n      </ion-label>\n      <ion-icon *ngIf=\"editMode\" class=\"trashIcon\" (click)=\"removeContact(contact.ADDRESS)\" name=\"trash-outline\" slot=\"end\"></ion-icon>\n    </ion-item>\n    <ion-item-options side=\"end\">\n      <ion-item-option (click)=\"copyAddress(contact.ADDRESS)\" color=\"primary\" expandable>\n        <div class=\"block\"> \n        <ion-icon name=\"copy\"></ion-icon>\n        <br>\n        Copy Address        \n      </div>  \n      </ion-item-option>\n    </ion-item-options>\n  </ion-item-sliding>\n  </ion-list>\n\n</ion-content>\n\n<ion-footer>\n  <ion-button (click)=\"giveMe50()\" class=\"gimme50 no-ripple\" fill=\"none\">\n    Gimme 50\n  </ion-button>\n</ion-footer>\n"

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

module.exports = "#deleteButton {\n  font-size: 1.8rem;\n  cursor: pointer;\n}\n\n#addButton {\n  font-size: 2rem;\n  cursor: pointer;\n}\n\nion-item.contactItem {\n  --border-color: #f0f0fa;\n}\n\nion-item.contactItem:hover {\n  --background: #F0F0F4;\n  --border-color: var(--ion-color-primary);\n}\n\nion-list.tools {\n  margin-left: 2px;\n  margin-right: 9px;\n}\n\nion-list.contacts {\n  margin-left: 10px;\n  margin-right: 28px;\n}\n\nion-list.contacts ion-item {\n  margin-left: 15px;\n  margin-right: 5px;\n}\n\nion-searchbar {\n  --box-shadow: 0;\n  --icon-color: #000;\n  --background: #fff;\n  --border: 1px solid #f0f0fa;\n}\n\nion-item-option div.block {\n  width: 100%;\n  text-transform: none;\n  display: inline-block;\n  vertical-align: middle;\n  text-align: center;\n  font-size: 0.85rem;\n}\n\nion-item-option div.block ion-icon {\n  font-size: 1.2rem;\n}\n\nion-icon.trashIcon {\n  cursor: pointer;\n}\n\nion-icon.trashIcon:hover {\n  color: var(--ion-color-secondary);\n}\n\n.center {\n  right: 2%;\n  -webkit-box-align: center !important;\n          align-items: center !important;\n  -webkit-box-pack: center !important;\n          justify-content: center !important;\n  display: -webkit-inline-box !important;\n  display: inline-flex !important;\n  text-align: center !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGlhc25lbXIvcHJvamVjdHMvV2FsbGV0L21vYmlsZS1hcHAtZnJvbnQtZW5kL2FwcC9zcmMvYXBwL3BhZ2VzL2NvbnRhY3RzL2NvbnRhY3RzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvY29udGFjdHMvY29udGFjdHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxlQUFBO0VBQ0EsZUFBQTtBQ0VGOztBREFBO0VBQ0UsdUJBQUE7QUNHRjs7QUREQTtFQUNFLHFCQUFBO0VBQ0Esd0NBQUE7QUNJRjs7QURGQTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7QUNLRjs7QURIQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7QUNNRjs7QURKQTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7QUNPRjs7QURKQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7QUNPRjs7QURMQTtFQUNFLFdBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDUUY7O0FETkE7RUFDRSxpQkFBQTtBQ1NGOztBRFBBO0VBQ0UsZUFBQTtBQ1VGOztBRFJBO0VBQ0UsaUNBQUE7QUNXRjs7QURUQTtFQUNFLFNBQUE7RUFDQSxvQ0FBQTtVQUFBLDhCQUFBO0VBQ0EsbUNBQUE7VUFBQSxrQ0FBQTtFQUNBLHNDQUFBO0VBQUEsK0JBQUE7RUFDQSw2QkFBQTtBQ1lGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY29udGFjdHMvY29udGFjdHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2RlbGV0ZUJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogMS44cmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4jYWRkQnV0dG9uIHsgXG4gIGZvbnQtc2l6ZTogMi4wcmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5pb24taXRlbS5jb250YWN0SXRlbSB7XG4gIC0tYm9yZGVyLWNvbG9yOiAjZjBmMGZhO1xufVxuaW9uLWl0ZW0uY29udGFjdEl0ZW06aG92ZXIge1xuICAtLWJhY2tncm91bmQ6ICNGMEYwRjQ7XG4gIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5pb24tbGlzdC50b29scyB7XG4gIG1hcmdpbi1sZWZ0OiAycHg7XG4gIG1hcmdpbi1yaWdodDogOXB4O1xufVxuaW9uLWxpc3QuY29udGFjdHMge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgbWFyZ2luLXJpZ2h0OiAyOHB4O1xufVxuaW9uLWxpc3QuY29udGFjdHMgaW9uLWl0ZW0ge1xuICBtYXJnaW4tbGVmdDogMTVweDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbmlvbi1zZWFyY2hiYXIge1xuICAtLWJveC1zaGFkb3c6IDA7XG4gIC0taWNvbi1jb2xvcjogIzAwMDtcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmO1xuICAtLWJvcmRlcjogMXB4IHNvbGlkICNmMGYwZmE7XG59XG5pb24taXRlbS1vcHRpb24gZGl2LmJsb2NrIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAwLjg1cmVtO1xufVxuaW9uLWl0ZW0tb3B0aW9uIGRpdi5ibG9jayBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xufVxuaW9uLWljb24udHJhc2hJY29uIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuaW9uLWljb24udHJhc2hJY29uOmhvdmVyIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xufVxuLmNlbnRlciB7XG4gIHJpZ2h0OiAyJTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleCAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbn1cbiIsIiNkZWxldGVCdXR0b24ge1xuICBmb250LXNpemU6IDEuOHJlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4jYWRkQnV0dG9uIHtcbiAgZm9udC1zaXplOiAycmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmlvbi1pdGVtLmNvbnRhY3RJdGVtIHtcbiAgLS1ib3JkZXItY29sb3I6ICNmMGYwZmE7XG59XG5cbmlvbi1pdGVtLmNvbnRhY3RJdGVtOmhvdmVyIHtcbiAgLS1iYWNrZ3JvdW5kOiAjRjBGMEY0O1xuICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG5pb24tbGlzdC50b29scyB7XG4gIG1hcmdpbi1sZWZ0OiAycHg7XG4gIG1hcmdpbi1yaWdodDogOXB4O1xufVxuXG5pb24tbGlzdC5jb250YWN0cyB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDI4cHg7XG59XG5cbmlvbi1saXN0LmNvbnRhY3RzIGlvbi1pdGVtIHtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG5pb24tc2VhcmNoYmFyIHtcbiAgLS1ib3gtc2hhZG93OiAwO1xuICAtLWljb24tY29sb3I6ICMwMDA7XG4gIC0tYmFja2dyb3VuZDogI2ZmZjtcbiAgLS1ib3JkZXI6IDFweCBzb2xpZCAjZjBmMGZhO1xufVxuXG5pb24taXRlbS1vcHRpb24gZGl2LmJsb2NrIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAwLjg1cmVtO1xufVxuXG5pb24taXRlbS1vcHRpb24gZGl2LmJsb2NrIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAxLjJyZW07XG59XG5cbmlvbi1pY29uLnRyYXNoSWNvbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuaW9uLWljb24udHJhc2hJY29uOmhvdmVyIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xufVxuXG4uY2VudGVyIHtcbiAgcmlnaHQ6IDIlO1xuICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4ICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xufSJdfQ== */"

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
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_service_contacts_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/service/contacts.service */ "./src/app/service/contacts.service.ts");







let ContactsPage = class ContactsPage {
    constructor(toastController, api, userConfigService, alertController, contactService, modalController) {
        this.toastController = toastController;
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
    ngOnInit() {
        this.contactService.data.subscribe((res) => {
            // set the list
            this.contacts = res;
        });
        this.userConfigService.userConfig.subscribe((res) => {
            this.user = res;
        });
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
    presentToast(msg, clr, posn) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: msg,
                color: clr,
                position: posn,
                buttons: ['cancel']
            });
            yield toast.present();
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
    presentAddContactForm() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _components_contacts_modal_contacts_modal_page__WEBPACK_IMPORTED_MODULE_3__["ContactsModalPage"],
                cssClass: 'contactsModal'
            });
            return yield modal.present();
        });
    }
};
ContactsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: _service_minima_api_service__WEBPACK_IMPORTED_MODULE_1__["MinimaApiService"] },
    { type: _service_userconfig_service__WEBPACK_IMPORTED_MODULE_2__["UserConfigService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: src_app_service_contacts_service__WEBPACK_IMPORTED_MODULE_6__["ContactService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
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
        _service_minima_api_service__WEBPACK_IMPORTED_MODULE_1__["MinimaApiService"],
        _service_userconfig_service__WEBPACK_IMPORTED_MODULE_2__["UserConfigService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
        src_app_service_contacts_service__WEBPACK_IMPORTED_MODULE_6__["ContactService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]])
], ContactsPage);



/***/ })

}]);
//# sourceMappingURL=pages-contacts-contacts-module-es2015.js.map