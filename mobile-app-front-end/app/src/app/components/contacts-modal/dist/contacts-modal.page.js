"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ContactsModalPage = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var SparkMD5 = require("spark-md5");
var url_validator_1 = require("../../shared/url.validator");
var ContactsModalPage = /** @class */ (function () {
    function ContactsModalPage(modalCtrl, contactService, myTools, formBuilder) {
        this.modalCtrl = modalCtrl;
        this.contactService = contactService;
        this.myTools = myTools;
        this.formBuilder = formBuilder;
        this.av = '';
        // State Items
        this.loading = false;
        this.success = false;
    }
    ContactsModalPage.prototype.ngOnInit = function () {
        this.contactForm = this.formBuilder.group({
            NAME: ['', [
                    forms_1.Validators.maxLength(255),
                    forms_1.Validators.pattern('[a-zA-Z0-9 .\-\_\']*$'),
                ]],
            ADDRESS: ['', [
                    forms_1.Validators.required,
                    forms_1.Validators.minLength(2),
                    forms_1.Validators.maxLength(60),
                    forms_1.Validators.pattern('[Mx|0x][a-zA-Z0-9]+')
                ]],
            DESCRIPTION: ['', [forms_1.Validators.maxLength(255)]],
            AVATAR: ['', [
                    forms_1.Validators.maxLength(255),
                    forms_1.Validators.pattern('(http(s?):)([\\/|\\.|\\w|\\s|\\-])*\.(?:jpg|png|gif|svg)$'),
                    url_validator_1.checkImage(),
                ]]
        });
    };
    ContactsModalPage.prototype.ionViewWillLeave = function () {
        if (this.$contactSubscription) {
            this.$contactSubscription.unsubscribe();
        }
    };
    ContactsModalPage.prototype.dismiss = function () {
        this.modalCtrl.dismiss({
            dismissed: true
        });
    };
    ContactsModalPage.prototype.createIcon = function (address) {
        return this.av = 'https://www.gravatar.com/avatar/' + SparkMD5.hash(address) + '?d=identicon';
    };
    ContactsModalPage.prototype.changeIcon = function (ev) {
        if (ev.target.value === 0) {
            this.av = '';
        }
        else {
            this.createIcon(ev.target.value);
        }
    };
    ContactsModalPage.prototype.addContact = function () {
        var _this = this;
        this.loading = true;
        var newContact = this.contactForm.value;
        this.contactService.addContact(newContact);
        this.$contactSubscription =
            this.contactService.data.subscribe(function (val) {
                if (val.length > 0) {
                    _this.success = true;
                    _this.showToast();
                    _this.modalCtrl.dismiss();
                    _this.loading = false;
                }
            });
        this.loading = false;
    };
    ContactsModalPage.prototype.showToast = function () {
        if (this.contactForm.controls['NAME'].value === '') {
            this.contactForm.controls['NAME'].setValue('Anonymous');
        }
        this.myTools.presentToast(this.name.value + " was saved to your contacts!", 'primary', 'bottom');
    };
    Object.defineProperty(ContactsModalPage.prototype, "name", {
        get: function () {
            return this.contactForm.get('NAME');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ContactsModalPage.prototype, "address", {
        get: function () {
            return this.contactForm.get('ADDRESS');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ContactsModalPage.prototype, "description", {
        get: function () {
            return this.contactForm.get('DESCRIPTION');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ContactsModalPage.prototype, "avatar", {
        get: function () {
            return this.contactForm.get('AVATAR');
        },
        enumerable: false,
        configurable: true
    });
    ContactsModalPage = __decorate([
        core_1.Component({
            selector: 'app-contacts-modal',
            templateUrl: './contacts-modal.page.html',
            styleUrls: ['./contacts-modal.page.scss']
        })
    ], ContactsModalPage);
    return ContactsModalPage;
}());
exports.ContactsModalPage = ContactsModalPage;
