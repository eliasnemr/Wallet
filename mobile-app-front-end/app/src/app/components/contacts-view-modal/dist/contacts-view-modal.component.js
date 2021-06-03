"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ContactsViewModalComponent = void 0;
var core_1 = require("@angular/core");
var ContactsViewModalComponent = /** @class */ (function () {
    function ContactsViewModalComponent(_contactService, modalController, myTools) {
        this._contactService = _contactService;
        this.modalController = modalController;
        this.myTools = myTools;
    }
    ContactsViewModalComponent.prototype.ngOnInit = function () { };
    ContactsViewModalComponent.prototype.ionViewWillEnter = function () {
        var _this = this;
        this._contactService.data.subscribe(function (res) {
            // set the list
            _this.contacts = res;
        });
    };
    ContactsViewModalComponent.prototype.ionViewWillLeave = function () {
        if (this.$contactSubscription) {
            this.$contactSubscription.unsubscribe();
        }
    };
    ContactsViewModalComponent.prototype.queryContacts = function (qy) {
        var _this = this;
        qy = qy.toUpperCase();
        if (qy.length > 0) {
            this.contacts = this.contacts.filter(function (ele) {
                return ele.NAME.toUpperCase().includes(qy) ||
                    ele.ADDRESS.toUpperCase().includes(qy);
            });
        }
        else {
            this._contactService.data.subscribe(function (res) {
                _this.contacts = res;
            });
        }
    };
    ContactsViewModalComponent.prototype.copyAddress = function (addr) {
        this.myTools.copy(addr);
    };
    ContactsViewModalComponent.prototype.selectAddress = function (addr) {
        this._contactService.selectedAddress.next({ address: addr });
        this.modalController.dismiss();
    };
    ContactsViewModalComponent.prototype.dismiss = function () {
        this.modalController.dismiss();
    };
    __decorate([
        core_1.ViewChild('contactList', { static: false })
    ], ContactsViewModalComponent.prototype, "ContactList");
    ContactsViewModalComponent = __decorate([
        core_1.Component({
            selector: 'app-contacts-view-modal',
            templateUrl: './contacts-view-modal.component.html',
            styleUrls: ['./contacts-view-modal.component.scss']
        })
    ], ContactsViewModalComponent);
    return ContactsViewModalComponent;
}());
exports.ContactsViewModalComponent = ContactsViewModalComponent;
