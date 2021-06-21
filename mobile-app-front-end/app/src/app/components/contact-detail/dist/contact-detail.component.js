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
exports.ContactDetailComponent = void 0;
var forms_1 = require("@angular/forms");
var core_1 = require("@angular/core");
var SparkMD5 = require("spark-md5");
var url_validator_1 = require("src/app/shared/url.validator");
var ContactDetailComponent = /** @class */ (function () {
    function ContactDetailComponent(formBuilder, modalController, navParams, contactService, myTools) {
        this.formBuilder = formBuilder;
        this.modalController = modalController;
        this.navParams = navParams;
        this.contactService = contactService;
        this.myTools = myTools;
        this.edit = false;
        this.editAvatar = false;
        this.newDescription = '';
        this.status = 'Update';
        this.statusAvatar = 'Update';
    }
    ContactDetailComponent.prototype.ngOnInit = function () {
        this.contactName = this.navParams.get('name');
        this.contactAddress = this.navParams.get('address');
        this.contactDescription = this.navParams.get('description');
        this.contactAvatar = this.navParams.get('avatar');
        this.initForm();
    };
    ContactDetailComponent.prototype.initForm = function () {
        this.editAvatarForm = this.formBuilder.group({
            url: [
                '', [
                    forms_1.Validators.maxLength(255),
                    forms_1.Validators.pattern('(http(s?):)([\\/|\\.|\\w|\\s|\\-])*\.(?:jpg|jpeg|png|gif|svg)$'),
                    url_validator_1.checkImage(),
                ]
            ]
        });
    };
    Object.defineProperty(ContactDetailComponent.prototype, "url", {
        get: function () {
            return this.editAvatarForm.get('url');
        },
        enumerable: false,
        configurable: true
    });
    ContactDetailComponent.prototype.updateDetails = function (address) {
        return __awaiter(this, void 0, void 0, function () {
            var description, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.updateBtn.disabled = true;
                        this.cancelBtn.disabled = true;
                        this.status = 'Updating...';
                        description = this.contactDescription.replace(/'/g, '');
                        return [4 /*yield*/, this.contactService.updateDescription(description, address)];
                    case 1:
                        res = _a.sent();
                        // console.log(res);
                        if (res) {
                            this.updateBtn.disabled = false;
                            this.cancelBtn.disabled = false;
                            this.status = 'Update';
                            this.presentToast('Update successful!', 'success');
                            this.edit = false;
                        }
                        else {
                            this.updateBtn.disabled = false;
                            this.cancelBtn.disabled = false;
                            this.status = 'Update';
                            this.presentToast('Failed to update description.  Please try again.', 'danger');
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    ContactDetailComponent.prototype.updateAvatar = function (address, modal) {
        return __awaiter(this, void 0, void 0, function () {
            var url, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.updateBtn.disabled = true;
                        this.cancelBtn.disabled = true;
                        this.statusAvatar = 'Updating...';
                        url = this.editAvatarForm.get('url').value;
                        return [4 /*yield*/, this.contactService.updateAvatar(url, address, modal)];
                    case 1:
                        res = _a.sent();
                        // console.log(res);
                        if (res) {
                            this.updateBtn.disabled = false;
                            this.cancelBtn.disabled = false;
                            this.statusAvatar = 'Update';
                            this.presentToast('Update successful!', 'success');
                            this.editAvatar = false;
                        }
                        else {
                            this.updateBtn.disabled = false;
                            this.cancelBtn.disabled = false;
                            this.statusAvatar = 'Update';
                            this.presentToast('Failed to update avatar.  Please try again.', 'danger');
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    ContactDetailComponent.prototype.presentToast = function (msg, clr) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.myTools
                            .presentToast(msg, clr, 'bottom')];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ContactDetailComponent.prototype.createIcon = function (tokenid) {
        return this.contactAvatar = 'https://www.gravatar.com/avatar/' + SparkMD5.hash(tokenid) + '?d=identicon';
    };
    __decorate([
        core_1.ViewChild('cancelBtn', { static: false })
    ], ContactDetailComponent.prototype, "cancelBtn");
    __decorate([
        core_1.ViewChild('updateBtn', { static: false })
    ], ContactDetailComponent.prototype, "updateBtn");
    ContactDetailComponent = __decorate([
        core_1.Component({
            selector: 'app-contact-detail',
            templateUrl: './contact-detail.component.html',
            styleUrls: ['./contact-detail.component.scss']
        })
    ], ContactDetailComponent);
    return ContactDetailComponent;
}());
exports.ContactDetailComponent = ContactDetailComponent;
