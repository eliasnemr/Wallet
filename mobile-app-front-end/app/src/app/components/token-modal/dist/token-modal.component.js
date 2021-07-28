"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TokenModalComponent = void 0;
var core_1 = require("@angular/core");
var SparkMD5 = require("spark-md5");
var operators_1 = require("rxjs/operators");
var TokenModalComponent = /** @class */ (function () {
    function TokenModalComponent(modalController, minimaApiService) {
        this.modalController = modalController;
        this.minimaApiService = minimaApiService;
    }
    TokenModalComponent.prototype.ionViewWillEnter = function () {
        this.subscribeTokens();
    };
    TokenModalComponent.prototype.ionViewWillLeave = function () {
        this.unsubscribeTokens();
    };
    TokenModalComponent.prototype.selectToken = function (_t) {
        this.modalController.dismiss(_t);
    };
    TokenModalComponent.prototype.queryTokens = function (_qy) {
        var _this = this;
        _qy = _qy.toUpperCase();
        if (_qy.length > 0) {
            this.$query =
                this.minimaApiService.$balance.asObservable().pipe(operators_1.map(function (tokens) {
                    return tokens.filter(function (token) {
                        return token.token.toUpperCase().includes(_qy) ||
                            token.tokenid.toUpperCase().includes(_qy);
                    });
                })).subscribe(function (tokens) {
                    // console.log(tokens);
                    _this.allTokens = tokens;
                });
        }
        else {
            this.$query =
                this.minimaApiService.$balance.asObservable().pipe(operators_1.take(1)).subscribe(function (tokens) {
                    // console.log(tokens);
                    _this.allTokens = tokens;
                });
        }
    };
    TokenModalComponent.prototype.dismiss = function () {
        this.modalController.dismiss();
    };
    TokenModalComponent.prototype.subscribeTokens = function () {
        var _this = this;
        this.$t =
            this.minimaApiService.$balance.subscribe(function (tokens) {
                _this.allTokens = tokens;
            });
    };
    TokenModalComponent.prototype.unsubscribeTokens = function () {
        this.$t.unsubscribe();
        if (this.$query) {
            this.$query.unsubscribe();
        }
    };
    TokenModalComponent.prototype.createIcon = function (tokenid) {
        return 'https://www.gravatar.com/avatar/' + SparkMD5.hash(tokenid) + '?d=identicon';
    };
    TokenModalComponent = __decorate([
        core_1.Component({
            selector: 'app-token-modal',
            templateUrl: './token-modal.component.html',
            styleUrls: ['./token-modal.component.scss']
        })
    ], TokenModalComponent);
    return TokenModalComponent;
}());
exports.TokenModalComponent = TokenModalComponent;
