"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ViewTokensPage = void 0;
var SparkMD5 = require("spark-md5");
var core_1 = require("@angular/core");
var ViewTokensPage = /** @class */ (function () {
    function ViewTokensPage(route, _minimaApiService, myTools) {
        this.route = route;
        this._minimaApiService = _minimaApiService;
        this.myTools = myTools;
        this.expand = false;
        (this.route.snapshot.paramMap.get('id') ?
            this.urlTokenid = this.route.snapshot.paramMap.get('id') :
            this.urlTokenid = '');
        this.prompt = '';
    }
    ViewTokensPage.prototype.ngOnInit = function () { };
    ViewTokensPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        if (this.urlTokenid && this.urlTokenid.length > 0) {
            this.$subscription = this._minimaApiService.$balance
                .subscribe(function (tokens) {
                (tokens ?
                    _this.$token =
                        tokens.filter(function (token) {
                            return token.tokenid === _this.urlTokenid;
                        }) :
                    console.log('Your tokens have not been found.'));
                if (_this.$token.length > 0 && _this.$token[0].tokenid) {
                    // Some formatting...
                    (_this.$token[0].tokenid === '0x00' ?
                        _this.$token[0].description = 'Minima\'s Official Token.' :
                        null);
                }
            });
        }
        else {
            this.prompt = 'Token ID not found, please try again later';
        }
        if (this.$subscription.closed) {
            // subscribed and works..
            this.prompt = 'Token subscription failed.';
        }
        else {
            // didnt subscribe to anything or didnt find anything..
            this.prompt = '';
            if (this.$token.length === 0) {
                this.prompt = 'Token not found.';
            }
        }
    };
    ViewTokensPage.prototype.ionViewWillLeave = function () {
        if (this.$subscription) {
            this.$subscription.unsubscribe();
        }
    };
    ViewTokensPage.prototype.validateProof = function (tokenid) {
        var _this = this;
        this._minimaApiService.validateTokenID(tokenid).then(function (res) {
            if (res.response.valid === true) {
                _this.myTools.presentToast('This proof is valid.', 'success', 'bottom');
            }
            else {
                _this.myTools
                    .presentToast('Proof mismatch - not a valid proof', 'danger', 'bottom');
            }
        });
    };
    ViewTokensPage.prototype.createIcon = function (tokenid) {
        return this.avatar = 'https://www.gravatar.com/avatar/' + SparkMD5.hash(tokenid) + '?d=identicon';
    };
    ViewTokensPage.prototype.copyToClipPWA = function (text) {
        this.myTools.copy(text);
    };
    ViewTokensPage.prototype.expandImage = function () {
        (this.expand ?
            this.expand = false :
            this.expand = true);
    };
    ViewTokensPage = __decorate([
        core_1.Component({
            selector: 'app-view-tokens',
            templateUrl: './view-tokens.page.html',
            styleUrls: ['./view-tokens.page.scss']
        })
    ], ViewTokensPage);
    return ViewTokensPage;
}());
exports.ViewTokensPage = ViewTokensPage;
