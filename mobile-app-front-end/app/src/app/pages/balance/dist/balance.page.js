"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.BalancePage = void 0;
var core_1 = require("@angular/core");
var SparkMD5 = require("spark-md5");
// declare var Minima: any;
var BalancePage = /** @class */ (function () {
    function BalancePage(menu, _minimaApiService, myTools, route, popoverController) {
        this.menu = menu;
        this._minimaApiService = _minimaApiService;
        this.myTools = myTools;
        this.route = route;
        this.popoverController = popoverController;
        this.tokenArr = [];
        this.tokenSpoof = [];
    }
    BalancePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.$balanceSubscription = this._minimaApiService.$balance.subscribe(function (res) {
            _this.$balance = _this._minimaApiService.$balance;
        });
    };
    BalancePage.prototype.ionViewWillLeave = function () {
        this.$balanceSubscription.unsubscribe();
    };
    BalancePage.prototype.ngOnInit = function () { };
    BalancePage.prototype.openMenu = function () {
        this.menu.open();
    };
    BalancePage.prototype.giveMe50 = function () {
        var _this = this;
        this._minimaApiService.giveMe50().then(function (res) {
            if (res.status === true) {
                _this.myTools.presentAlert('Gimme50', 'Successful', 'Status');
            }
            else {
                _this.myTools.presentAlert('Gimme50', res.message, 'Status');
            }
        });
    };
    BalancePage.prototype.loadData = function (event) {
        var _this = this;
        setTimeout(function () {
            console.log('Done');
            event.target.complete();
            // App logic to determine if all data is loaded
            // and disable the infinite scroll
            if (_this.tokenArr.length == 5) {
                event.target.disabled = true;
            }
        }, 500);
    };
    BalancePage.prototype.closeSliding = function (slidingItem) {
        slidingItem.close();
    };
    BalancePage.prototype.createIdenticon = function (tokenid) {
        return this.avatar = 'https://www.gravatar.com/avatar/' + SparkMD5.hash(tokenid) + '?d=identicon';
    };
    BalancePage.prototype.sendTokenOver = function (slidingItem, id) {
        slidingItem.close();
        this.route.navigate(['/send-funds/' + id]);
    };
    // check if it's a token, or a Mini
    BalancePage.prototype.instanceOfToken = function (data) {
        return 'script' in data;
    };
    __decorate([
        core_1.ViewChild('gimme50Btn', { static: false })
    ], BalancePage.prototype, "gimme50Btn");
    BalancePage = __decorate([
        core_1.Component({
            selector: 'app-balance',
            templateUrl: './balance.page.html',
            styleUrls: ['./balance.page.scss']
        })
    ], BalancePage);
    return BalancePage;
}());
exports.BalancePage = BalancePage;
