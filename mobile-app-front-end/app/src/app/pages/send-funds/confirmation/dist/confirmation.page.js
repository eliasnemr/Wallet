"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ConfirmationPage = void 0;
var core_1 = require("@angular/core");
var SparkMD5 = require("spark-md5");
var ConfirmationPage = /** @class */ (function () {
    function ConfirmationPage(menu, minimaApiService) {
        this.menu = menu;
        this.minimaApiService = minimaApiService;
        this.tokenIcon = '';
        this.tokenName = '';
    }
    ConfirmationPage.prototype.ngOnInit = function () {
    };
    ConfirmationPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.$subscription =
            this.minimaApiService.$urlData.subscribe(function (data) {
                _this.data = data;
                _this.$subscription =
                    _this.minimaApiService.$balance.subscribe(function (balance) {
                        balance.forEach(function (token) {
                            if (token.tokenid === _this.data.tokenid) {
                                console.log(token);
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
        this.$subscription.unsubscribe();
    };
    ConfirmationPage.prototype.createIcon = function (tokenid) {
        return this.avatar = 'https://www.gravatar.com/avatar/' + SparkMD5.hash(tokenid) + '?d=identicon';
    };
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
