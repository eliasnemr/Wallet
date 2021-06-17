"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
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
    }
    ContactsModalPage.prototype.ngOnInit = function () {
        this.status = 'Create Contact';
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
                    forms_1.Validators.pattern('(http(s?):)([\\/|\\.|\\w|\\s|\\-])*\.(?:jpg|jpeg|png|gif|svg)$'),
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
        return __awaiter(this, void 0, void 0, function () {
            var newContact, res;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.createBtn.disabled = true;
                        this.status = 'Creating...';
                        newContact = this.contactForm.value;
                        return [4 /*yield*/, this.contactService.addContact(newContact)];
                    case 1:
                        res = _a.sent();
                        // console.log(res);
                        if (res === true) {
                            this.createBtn.disabled = false;
                            this.showToast();
                            this.modalCtrl.dismiss();
                        }
                        else if (res === 'Duplicate') {
                            this.status = 'Creation Failed!';
                            this.showToastFail("Duplicate entry in your contact list.");
                            setTimeout(function () {
                                _this.createBtn.disabled = false;
                                _this.status = 'Create Contact';
                            }, 2000);
                        }
                        else if (res !== 'Duplicate' && !res) {
                            this.status = 'Creation Failed!';
                            this.showToastFail('Something went wrong' +
                                ' while adding your contact, please try again.');
                            setTimeout(function () {
                                _this.createBtn.disabled = false;
                                _this.status = 'Create Contact';
                            }, 2000);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    ContactsModalPage.prototype.showToast = function () {
        if (this.contactForm.controls['NAME'].value === '') {
            this.contactForm.controls['NAME'].setValue('Anonymous');
        }
        this.myTools.presentToast(this.name.value + " was saved to your contacts!", 'success', 'bottom');
    };
    ContactsModalPage.prototype.showToastFail = function (msg) {
        if (this.contactForm.controls['NAME'].value === '') {
            this.contactForm.controls['NAME'].setValue('Anonymous');
        }
        this.myTools.presentToast(msg, 'danger', 'bottom');
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
    __decorate([
        core_1.ViewChild('createBtn', { static: false })
    ], ContactsModalPage.prototype, "createBtn");
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
