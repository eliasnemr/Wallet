"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.HistoryPage = void 0;
var operators_1 = require("rxjs/operators");
var core_1 = require("@angular/core");
var moment = require("moment");
var HistoryPage = /** @class */ (function () {
    /** */
    function HistoryPage(menu, router, modalController, popoverController, config, myTools, minimaApiService) {
        this.menu = menu;
        this.router = router;
        this.modalController = modalController;
        this.popoverController = popoverController;
        this.config = config;
        this.myTools = myTools;
        this.minimaApiService = minimaApiService;
        this.$history = [];
    }
    /** */
    HistoryPage.prototype.ngOnInit = function () { };
    /** */
    HistoryPage.prototype.ionViewWillEnter = function () {
        this.minimaApiService.initHistory();
        this.$subscribe();
    };
    /** */
    HistoryPage.prototype.ionViewWillLeave = function () {
        if (this.$historySubscription) {
            this.$historySubscription.unsubscribe();
        }
    };
    /** Subscribe to history */
    HistoryPage.prototype.$subscribe = function () {
        var _this = this;
        this.prompt = 'Fetching your history...';
        this.$historySubscription =
            this.minimaApiService.$history.pipe(operators_1.take(1)).subscribe(function (history) {
                // console.log('Subscribing to $history');
                history.history.sort(_this.byDescDate);
                (history.history.length === 0 ? _this.prompt =
                    'No recent transactions found.' : _this.prompt = '');
                (history.history ? _this.$history = history.history : _this.$history = []);
                // console.log(history.history);
                _this.$history.forEach(function (txn) {
                    if (txn.values[0] && txn.values.length > 0) {
                        if (txn.values[0].name.substring(0, 1) === '{') {
                            var TOKENDESCRIPTION = JSON.parse(txn.values[0].name);
                            txn.values[0].name = TOKENDESCRIPTION.name;
                        }
                    }
                    txn.time = moment(parseInt(txn.txpow.header.timemilli, 10))
                        .format('hh:mm a');
                    txn.day = moment(parseInt(txn.txpow.header.timemilli, 10))
                        .format('DD');
                    txn.month = moment(parseInt(txn.txpow.header.timemilli, 10))
                        .format('MMM');
                    txn.year = moment(parseInt(txn.txpow.header.timemilli, 10))
                        .format('YYYY');
                });
            });
    };
    /** Open menu for custom button */
    HistoryPage.prototype.openMenu = function () {
        this.menu.open();
    };
    /** */
    HistoryPage.prototype.byDescDate = function (a, b) {
        var aDATE = a.txpow.header.timemilli;
        var bDATE = b.txpow.header.timemilli;
        return bDATE.localeCompare(aDATE);
    };
    __decorate([
        core_1.ViewChild('historyList', { static: true })
    ], HistoryPage.prototype, "historyList");
    HistoryPage = __decorate([
        core_1.Component({
            selector: 'app-history',
            templateUrl: './history.page.html',
            styleUrls: ['./history.page.scss']
        })
        /** */
    ], HistoryPage);
    return HistoryPage;
}());
exports.HistoryPage = HistoryPage;
