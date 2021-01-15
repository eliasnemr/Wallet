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
var ContactsModalPage = /** @class */ (function () {
    function ContactsModalPage(modalCtrl, contactService, formBuilder, toastCtrl) {
        this.modalCtrl = modalCtrl;
        this.contactService = contactService;
        this.formBuilder = formBuilder;
        this.toastCtrl = toastCtrl;
        // State Items
        this.loading = false;
        this.success = false;
    }
    ContactsModalPage.prototype.ngOnInit = function () {
        this.contactForm = this.formBuilder.group({
            NAME: ['', [
                    forms_1.Validators.maxLength(255),
                    forms_1.Validators.pattern('[a-zA-Z0-9.\-\_]*$'),
                ]
            ],
            ADDRESS: ['', [
                    forms_1.Validators.required,
                    forms_1.Validators.minLength(2),
                    forms_1.Validators.maxLength(60),
                    forms_1.Validators.pattern('[Mx|0x][a-zA-Z0-9]+')
                ]
            ],
            DESCRIPTION: ['', [forms_1.Validators.maxLength(255)]],
            AVATAR: ['', [
                    forms_1.Validators.maxLength(255),
                    forms_1.Validators.pattern('(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})')
                ]
            ]
        });
    };
    ContactsModalPage.prototype.dismiss = function () {
        this.modalCtrl.dismiss({
            dismissed: true
        });
    };
    ContactsModalPage.prototype.addContact = function () {
        var _this = this;
        this.loading = true;
        var newContact = this.contactForm.value;
        this.contactService.addContact(newContact);
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
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.contactForm.controls['NAME'].value === '') {
                            this.contactForm.controls['NAME'].setValue('Anonymous');
                        }
                        return [4 /*yield*/, this.toastCtrl.create({
                                header: "Added A New Contact!",
                                message: this.name.value + " was saved to your contacts!",
                                position: "middle",
                                duration: 1000,
                                buttons: [{
                                        text: "Dismiss",
                                        role: "Cancel"
                                    }]
                            })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
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
