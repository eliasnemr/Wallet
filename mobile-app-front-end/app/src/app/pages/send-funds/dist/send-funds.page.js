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
exports.SendFundsPage = exports.checkAmount = void 0;
var token_modal_component_1 = require("./../../components/token-modal/token-modal.component");
var contacts_view_modal_component_1 = require("./../../components/contacts-view-modal/contacts-view-modal.component");
var forms_1 = require("@angular/forms");
var core_1 = require("@angular/core");
var decimal_js_1 = require("decimal.js");
decimal_js_1.Decimal.set({ precision: 64 }); /** set precision for Decimal calculations */
function checkAmount(amnt) {
    return function (control) {
        try {
            if (isNaN(parseInt(control.value)) !== true) {
                if (new decimal_js_1.Decimal(amnt)) {
                    var amount = new decimal_js_1.Decimal(amnt);
                    if (control.value && new decimal_js_1.Decimal(control.value).greaterThan(amount)) {
                        return { invalidAmount: true };
                    }
                    else if (control.value && new decimal_js_1.Decimal(control.value).equals(0)) {
                        return { invalidAmount: true };
                    }
                    else if (control.value.length === 0) {
                        return { invalidAmount: true };
                    }
                }
            }
            else {
                return { invalidAmount: true };
            }
        }
        catch (err) {
            console.log(err);
            return { invalidAmount: true };
        }
        return null;
    };
}
exports.checkAmount = checkAmount;
var SendFundsPage = /** @class */ (function () {
    function SendFundsPage(menu, modalController, formBuilder, minimaApiService, contactService, activedRouter, router) {
        this.menu = menu;
        this.modalController = modalController;
        this.formBuilder = formBuilder;
        this.minimaApiService = minimaApiService;
        this.contactService = contactService;
        this.activedRouter = activedRouter;
        this.router = router;
        this.status = '';
        this.myTokens = [];
    }
    SendFundsPage.prototype.ionViewWillEnter = function () {
        this.formInit();
        this.subscribeBalance();
        this.subscribeContacts();
    };
    SendFundsPage.prototype.ionViewWillLeave = function () {
        this.$contactSubscription.unsubscribe();
        this.$balanceSubscription.unsubscribe();
    };
    SendFundsPage.prototype.subscribeBalance = function () {
        var _this = this;
        this.$balanceSubscription =
            this.minimaApiService.$balance.subscribe(function (res) {
                var tokenSelected = _this.minimaApiService.currentTokenSelected.getValue();
                _this.myTokens = res;
                _this.myTokens.forEach(function (t) {
                    if (t.tokenid === tokenSelected) {
                        _this.tokenFormItem.setValue(t);
                        _this.totalBalance.setValue(t.sendable);
                        _this.amountFormItem.setValidators(checkAmount(t.sendable));
                    }
                });
            });
    };
    SendFundsPage.prototype.subscribeContacts = function () {
        var _this = this;
        this.$contactSubscription =
            this.contactService.selectedAddress.subscribe(function (res) {
                if (res.address.length === 0) {
                    // Do nothing
                }
                else {
                    _this.addressFormItem.setValue(res.address);
                    _this.contactService.selectedAddress.next({ address: '' });
                }
            });
    };
    SendFundsPage.prototype.resetForm = function () {
        var _this = this;
        setTimeout(function () {
            _this.status = '';
        }, 6000);
        this.submitBtn.disabled = false;
        this.sendForm.reset();
        this.formInit();
    };
    SendFundsPage.prototype.formInit = function () {
        this.sendForm = this.formBuilder.group({
            token: [],
            totalBalance: '',
            address: ['', [
                    forms_1.Validators.required,
                    forms_1.Validators.minLength(2),
                    forms_1.Validators.maxLength(60),
                    forms_1.Validators.pattern('[Mx|0x][a-zA-Z0-9]+')
                ]],
            amount: ['0', [
                    forms_1.Validators.required,
                    forms_1.Validators.minLength(1),
                ]],
            message: ['', forms_1.Validators.maxLength(255)]
        });
    };
    Object.defineProperty(SendFundsPage.prototype, "tokenFormItem", {
        get: function () {
            return this.sendForm.get('token');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SendFundsPage.prototype, "totalBalance", {
        get: function () {
            return this.sendForm.get('totalBalance');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SendFundsPage.prototype, "addressFormItem", {
        get: function () {
            return this.sendForm.get('address');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SendFundsPage.prototype, "amountFormItem", {
        get: function () {
            return this.sendForm.get('amount');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SendFundsPage.prototype, "messageFormItem", {
        get: function () {
            return this.sendForm.get('message');
        },
        enumerable: false,
        configurable: true
    });
    SendFundsPage.prototype.presentContactModal = function () {
        return __awaiter(this, void 0, Promise, function () {
            var contactModal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: contacts_view_modal_component_1.ContactsViewModalComponent,
                            cssClass: 'contacts-view'
                        })];
                    case 1:
                        contactModal = _a.sent();
                        contactModal.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    SendFundsPage.prototype.onSend = function (data) {
        this.minimaApiService.$urlData.next(data);
        this.router.navigate(['confirmation'], { relativeTo: this.activedRouter });
    };
    SendFundsPage.prototype.presentTokensModal = function (_tokens) {
        return __awaiter(this, void 0, Promise, function () {
            var modal;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: token_modal_component_1.TokenModalComponent,
                            componentProps: { tokens: _tokens },
                            cssClass: 'allTokenModal'
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (data) {
                            if (data && data.data) {
                                var token = data.data;
                                _this.minimaApiService.currentTokenSelected.next(token.tokenid);
                                _this.tokenFormItem.setValue(token);
                                _this.totalBalance.setValue(token.sendable);
                                _this.amountFormItem.setValidators(checkAmount(token.sendable));
                            }
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    __decorate([
        core_1.ViewChild('submitBtn', { static: false })
    ], SendFundsPage.prototype, "submitBtn");
    __decorate([
        core_1.ViewChild('amount', { static: false })
    ], SendFundsPage.prototype, "amountInp");
    SendFundsPage = __decorate([
        core_1.Component({
            selector: 'app-send-funds',
            templateUrl: './send-funds.page.html',
            styleUrls: ['./send-funds.page.scss']
        })
        /**  */
    ], SendFundsPage);
    return SendFundsPage;
}());
exports.SendFundsPage = SendFundsPage;
