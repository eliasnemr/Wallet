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
exports.ContactsPage = void 0;
var pop_contacts_component_1 = require("./../../components/pop-contacts/pop-contacts.component");
var contacts_modal_page_1 = require("./../../components/contacts-modal/contacts-modal.page");
var core_1 = require("@angular/core");
var ContactsPage = /** @class */ (function () {
    function ContactsPage(menu, modalController, popoverController, alertController, contactService, api, myTools) {
        this.menu = menu;
        this.modalController = modalController;
        this.popoverController = popoverController;
        this.alertController = alertController;
        this.contactService = contactService;
        this.api = api;
        this.myTools = myTools;
        this.editMode = false;
        this.contacts = [];
        this.copyStatus = 'Copy';
    }
    ContactsPage.prototype.ngOnInit = function () { };
    ContactsPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.$contactSubscription =
            this.contactService.data.subscribe(function (res) {
                _this.contacts = res;
            });
    };
    ContactsPage.prototype.ionViewWillLeave = function () {
        if (this.$contactSubscription) {
            this.$contactSubscription.unsubscribe();
        }
    };
    ContactsPage.prototype.presentContactSettings = function (ev) {
        return __awaiter(this, void 0, void 0, function () {
            var popover;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverController.create({
                            component: pop_contacts_component_1.PopContactsComponent,
                            translucent: true,
                            event: ev
                        })];
                    case 1:
                        popover = _a.sent();
                        return [4 /*yield*/, popover.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
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
                return ele.NAME.toUpperCase().includes(qy) ||
                    ele.ADDRESS.toUpperCase().includes(qy);
            });
        }
        else {
            this.contactService.data.subscribe(function (res) {
                _this.contacts = res;
            });
        }
    };
    ContactsPage.prototype.presentAlert = function (addr) {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Delete Contact',
                            cssClass: 'alert',
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
    ContactsPage.prototype.presentAddContactForm = function () {
        return __awaiter(this, void 0, void 0, function () {
            var modal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: contacts_modal_page_1.ContactsModalPage,
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
    ContactsPage.prototype.copy = function (data) {
        var _this = this;
        this.copyStatus = 'Copied!';
        this.myTools.copy(data);
        this.myTools.presentToast('Copied to clipboard.', 'primary', 'bottom');
        setTimeout(function () {
            _this.copyStatus = 'Copy';
        }, 2000);
    };
    __decorate([
        core_1.ViewChild('contactList', { static: false })
    ], ContactsPage.prototype, "ContactList");
    ContactsPage = __decorate([
        core_1.Component({
            selector: 'app-contacts',
            templateUrl: './contacts.page.html',
            styleUrls: ['./contacts.page.scss']
        })
    ], ContactsPage);
    return ContactsPage;
}());
exports.ContactsPage = ContactsPage;
