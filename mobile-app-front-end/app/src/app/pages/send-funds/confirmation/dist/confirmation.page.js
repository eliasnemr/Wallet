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
exports.ConfirmationPage = void 0;
var core_1 = require("@angular/core");
var SparkMD5 = require("spark-md5");
var ConfirmationPage = /** @class */ (function () {
    function ConfirmationPage(menu, minimaApiService, contactService, router, myTools) {
        this.menu = menu;
        this.minimaApiService = minimaApiService;
        this.contactService = contactService;
        this.router = router;
        this.myTools = myTools;
        this.tokenIcon = '';
        this.tokenName = '';
        this.recipientName = '';
        this.status = 'Confirm';
    }
    ConfirmationPage.prototype.ngOnInit = function () {
    };
    ConfirmationPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.$subscription =
            this.minimaApiService.$urlData.subscribe(function (data) {
                _this.data = data;
                _this.$contacts =
                    _this.contactService.data.subscribe(function (contacts) {
                        // console.log(contacts);
                        contacts.forEach(function (contact) {
                            if (contact.ADDRESS === _this.data.address) {
                                _this.recipientName = contact.NAME;
                            }
                        });
                    });
                // console.log(this.data);
                _this.$balance =
                    _this.minimaApiService.$balance.subscribe(function (balance) {
                        balance.forEach(function (token) {
                            if (token.tokenid === _this.data.tokenid) {
                                // console.log(token);
                                _this.tokenName = token.token;
                                if (token.tokenid !== '0x00' && token.icon.length > 0) {
                                    _this.tokenIcon = token.icon;
                                }
                            }
                        });
                    });
            });
    };
    ConfirmationPage.prototype.ionViewWillLeave = function () {
        if (this.$subscription && this.$contacts && this.$balance) {
            this.$subscription.unsubscribe();
            this.$contacts.unsubscribe();
            this.$balance.unsubscribe();
        }
    };
    ConfirmationPage.prototype.createIcon = function (tokenid) {
        return this.avatar = 'https://www.gravatar.com/avatar/' + SparkMD5.hash(tokenid) + '?d=identicon';
    };
    ConfirmationPage.prototype.sendFunds = function (data) {
        this.status = '';
        var dt = data;
        // console.log(data);
        try {
            this.post(dt);
        }
        catch (err) {
            console.log(err);
        }
    };
    /**  */
    ConfirmationPage.prototype.post = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var res, res;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.confirmBtn.disabled = true;
                        this.cancelBtn.disabled = true;
                        if (!(data.message !== null && (data.message || data.message.length > 0))) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.minimaApiService.sendMessageTransaction(data)];
                    case 1:
                        res = _a.sent();
                        // console.log(res);
                        if (res.status) {
                            this.myTools.presentAlert('Transaction Status', 'Transaction has been posted to the network!', 'Successful');
                            this.router.navigate(['/send-funds']);
                            this.status = 'Posted!';
                        }
                        else {
                            setTimeout(function () {
                                _this.confirmBtn.disabled = false;
                                _this.cancelBtn.disabled = false;
                                _this.status = 'Confirm';
                            }, 500);
                            this.myTools.presentAlert('Transaction Status', res.message, 'Failed');
                        }
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.minimaApiService.sendFunds(data)];
                    case 3:
                        res = _a.sent();
                        if (res.status) {
                            this.myTools.presentAlert('Transaction Status', 'Transaction has been posted to the network!', 'Successful');
                            this.router.navigate(['/send-funds']);
                            this.status = 'Posted!';
                        }
                        else {
                            setTimeout(function () {
                                _this.confirmBtn.disabled = false;
                                _this.cancelBtn.disabled = false;
                                _this.status = 'Confirm';
                            }, 500);
                            this.myTools.presentAlert('Transaction Status', res.message, 'Failed');
                        }
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        core_1.ViewChild('confirmBtn', { static: false })
    ], ConfirmationPage.prototype, "confirmBtn");
    __decorate([
        core_1.ViewChild('cancelBtn', { static: false })
    ], ConfirmationPage.prototype, "cancelBtn");
    ConfirmationPage = __decorate([
        core_1.Component({
            selector: 'app-confirmation',
            templateUrl: './confirmation.page.html',
            styleUrls: ['./confirmation.page.scss']
        })
    ], ConfirmationPage);
    return ConfirmationPage;
}());
exports.ConfirmationPage = ConfirmationPage;
