"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MyAddressPage = void 0;
var core_1 = require("@angular/core");
var minima_1 = require("minima");
var MyAddressPage = /** @class */ (function () {
    function MyAddressPage(menu, myTools, api) {
        this.menu = menu;
        this.myTools = myTools;
        this.api = api;
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
