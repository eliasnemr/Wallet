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
exports.MyAddressPage = void 0;
var core_1 = require("@angular/core");
var minima_1 = require("minima");
var MyAddressPage = /** @class */ (function () {
    function MyAddressPage(clipboard, api, platform, ngZone, userConfigService, alertController, toastController) {
        this.clipboard = clipboard;
        this.api = api;
        this.platform = platform;
        this.ngZone = ngZone;
        this.userConfigService = userConfigService;
        this.alertController = alertController;
        this.toastController = toastController;
        this.qrCode = '';
        this.lastCode = '';
        this.user = {
            tokenDisplayMode: 1,
            tips: {
                address: false
            }
        };
    }
    MyAddressPage.prototype.ngOnInit = function () { };
    MyAddressPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        minima_1.Minima.file.load('lastAddress.txt', function (res) {
            if (res.success) {
                var data = JSON.parse(res.data);
                if (data.address.length === 0) {
                    _this.newAddress();
                }
                else {
                    _this.qrCode = data.address;
                    _this.isEmpty = true;
                }
            }
            else {
                console.log('Already have this file');
                _this.newAddress();
            }
        });
        this.userConfigService.userConfig.subscribe(function (res) {
            // ngZone re-renders onChange
            _this.ngZone.run(function () {
                _this.user = res;
            });
        });
    };
    MyAddressPage.prototype.generateAddress = function (code) {
        var _this = this;
        this.newAddress();
        this.generateAddressBtn.disabled = true;
        this.presentToast('Generated a new address', 'primary', "bottom");
        setTimeout(function () {
            _this.generateAddressBtn.disabled = false;
        }, 2000);
    };
    MyAddressPage.prototype.newAddress = function () {
        var _this = this;
        setTimeout(function () {
            _this.api.newAddress().then(function (res) {
                if (res.status) {
                    _this.qrCode = res.response.address.miniaddress;
                    _this.isEmpty = true;
                    var data = { address: _this.qrCode };
                    var send = JSON.stringify(data);
                    minima_1.Minima.file.save(send, 'lastAddress.txt', function (res) {
                        if (res.success) { }
                    });
                }
            });
        }, 0);
    };
    MyAddressPage.prototype.hideTip = function () {
        this.user.tips.address = true;
        this.userConfigService.userConfig.next(this.user);
        this.userConfigService.saveUserConfig(this.user);
    };
    MyAddressPage.prototype.presentAlert = function (msg, hdr) {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: hdr,
                            message: msg,
                            buttons: ['Cancel', 'Ok']
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
    MyAddressPage.prototype.presentToast = function (msg, type, posn) {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: msg,
                            duration: 4000,
                            color: type,
                            keyboardClose: true,
                            translucent: true,
                            position: posn,
                            cssClass: 'toast',
                            buttons: [{
                                    text: 'Dismiss',
                                    role: 'cancel',
                                    handler: function () {
                                    }
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
    MyAddressPage.prototype.copyToClipboard = function () {
        if (this.platform.is('desktop') || this.platform.is('pwa')) {
            this.copyToClipPWA();
        }
        else {
            this.clipboard.copy(this.qrCode);
            this.presentToast('Copied to Clipboard', 'primary', 'bottom');
        }
    };
    MyAddressPage.prototype.copyToClipPWA = function () {
        var _this = this;
        document.addEventListener('copy', function (e) {
            e.clipboardData.setData('text/plain', _this.qrCode);
            _this.presentToast('Copied To Clipboard', 'primary', 'bottom');
            e.preventDefault();
            document.removeEventListener('copy', null);
        });
        document.execCommand('copy');
    };
    MyAddressPage.prototype.checkPlatform = function () {
        if (this.platform.is('desktop')) {
            return true;
        }
        else {
            return false;
        }
    };
    __decorate([
        core_1.ViewChild('generateAddressBtn', { static: false })
    ], MyAddressPage.prototype, "generateAddressBtn");
    MyAddressPage = __decorate([
        core_1.Component({
            selector: 'app-my-address',
            templateUrl: './my-address.page.html',
            styleUrls: ['./my-address.page.scss']
        })
    ], MyAddressPage);
    return MyAddressPage;
}());
exports.MyAddressPage = MyAddressPage;
