(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-contacts-contacts-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/contacts/contacts.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/contacts/contacts.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"border-b\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Contacts</ion-title>\n    <ion-icon (click)=\"presentAddContactForm()\" id=\"addButton\" slot=\"end\" name=\"add\"></ion-icon>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-list>\n    \n    <ion-item>\n      <ion-avatar slot=\"start\">\n        <img src=\"https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y\">\n      </ion-avatar>\n      <ion-label> \n        <h3>Paddy</h3>\n        <p>MxTL6BQ34O7EVVJW6JTXFMNBDXRK6KS3O5</p>\n      </ion-label>\n      <ion-button *ngIf=\"editMode\" slot=\"end\">Delete</ion-button>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n"

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

module.exports = "ion-header ion-toolbar ion-title {\n  font-family: manrope-bold;\n  font-size: 1rem;\n}\n\n#addButton {\n  padding-right: 5%;\n  font-size: 1.2rem;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGlhc25lbXIvcHJvamVjdHMvV0FMTEVUL21vYmlsZS1hcHAtZnJvbnQtZW5kL2FwcC9zcmMvYXBwL3BhZ2VzL2NvbnRhY3RzL2NvbnRhY3RzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvY29udGFjdHMvY29udGFjdHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY29udGFjdHMvY29udGFjdHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciBpb24tdG9vbGJhciBpb24tdGl0bGUge1xuICBmb250LWZhbWlseTogbWFucm9wZS1ib2xkO1xuICBmb250LXNpemU6IDEuMHJlbTtcbn1cblxuI2FkZEJ1dHRvbiB7XG4gIHBhZGRpbmctcmlnaHQ6IDUlO1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufSIsImlvbi1oZWFkZXIgaW9uLXRvb2xiYXIgaW9uLXRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IG1hbnJvcGUtYm9sZDtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuXG4jYWRkQnV0dG9uIHtcbiAgcGFkZGluZy1yaWdodDogNSU7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59Il19 */"

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
/* harmony import */ var _components_contacts_modal_contacts_modal_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../components/contacts-modal/contacts-modal.page */ "./src/app/components/contacts-modal/contacts-modal.page.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var spark_md5__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! spark-md5 */ "./node_modules/spark-md5/spark-md5.js");
/* harmony import */ var spark_md5__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(spark_md5__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_app_service_contacts_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/contacts.service */ "./src/app/service/contacts.service.ts");






let ContactsPage = class ContactsPage {
    constructor(toastController, contactService, modalController) {
        this.toastController = toastController;
        this.contactService = contactService;
        this.modalController = modalController;
        this.editMode = false;
    }
    ngOnInit() {
        this.contactService.data.subscribe((res) => {
            // set the list
            this.contacts = res;
        });
    }
    createIcon(address) {
        return this.avatar = 'https://www.gravatar.com/avatar/' + spark_md5__WEBPACK_IMPORTED_MODULE_4__["hash"](address) + '?d=identicon';
    }
    presentAddContactForm() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _components_contacts_modal_contacts_modal_page__WEBPACK_IMPORTED_MODULE_1__["ContactsModalPage"],
                cssClass: 'contactsModal'
            });
            return yield modal.present();
        });
    }
};
ContactsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: src_app_service_contacts_service__WEBPACK_IMPORTED_MODULE_5__["ContactService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
];
ContactsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-contacts',
        template: __webpack_require__(/*! raw-loader!./contacts.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/contacts/contacts.page.html"),
        styles: [__webpack_require__(/*! ./contacts.page.scss */ "./src/app/pages/contacts/contacts.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
        src_app_service_contacts_service__WEBPACK_IMPORTED_MODULE_5__["ContactService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
], ContactsPage);



/***/ })

}]);
//# sourceMappingURL=pages-contacts-contacts-module-es2015.js.map