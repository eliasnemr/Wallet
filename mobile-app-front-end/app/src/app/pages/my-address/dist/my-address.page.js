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
    function MyAddressPage(menu, myTools, api, platform) {
        this.menu = menu;
        this.myTools = myTools;
        this.api = api;
        this.platform = platform;
        this.qrCode = '';
        this.copyStatus = 'Copy Address';
        this.genStatus = 'Generate Address';
        this.isEmpty = false;
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
                    // console.log(this.qrCode);
                    if (_this.qrCode.length > 0) {
                        // console.log('Checking address');
                        // console.log(this.qrCode);
                        _this.checkAddress(_this.qrCode);
                    }
                    _this.isEmpty = true;
                }
            }
            else {
                _this.newAddress();
            }
        });
    };
    MyAddressPage.prototype.openMenu = function () {
        this.menu.open();
    };
    MyAddressPage.prototype.generateAddress = function () {
        var _this = this;
        this.genStatus = '';
        this.newAddress();
        this.generateAddressBtn.disabled = true;
        setTimeout(function () {
            _this.generateAddressBtn.disabled = false;
            _this.genStatus = 'Generate Address';
        }, 2000);
    };
    MyAddressPage.prototype.checkAddress = function (mAddress) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.api.checkScriptAddress(mAddress)];
                    case 1:
                        res = _a.sent();
                        if (res) {
                        }
                        else {
                            this.newAddress();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    MyAddressPage.prototype.newAddress = function () {
        var _this = this;
        setTimeout(function () {
            _this.api.newAddress()
                .then(function (res) {
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
    MyAddressPage.prototype.copy = function (data) {
        var _this = this;
        this.copyStatus = 'Copied!';
        this.copyAddressBtn.disabled = true;
        this.myTools.copy(data);
        setTimeout(function () {
            _this.copyStatus = 'Copy Address';
            _this.copyAddressBtn.disabled = false;
        }, 2000);
    };
    __decorate([
        core_1.ViewChild('generateAddressBtn', { static: false })
    ], MyAddressPage.prototype, "generateAddressBtn");
    __decorate([
        core_1.ViewChild('copyAddressBtn', { static: false })
    ], MyAddressPage.prototype, "copyAddressBtn");
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
