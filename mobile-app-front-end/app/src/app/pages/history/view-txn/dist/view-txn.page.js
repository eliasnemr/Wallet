"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ViewTXNPage = void 0;
var operators_1 = require("rxjs/operators");
var core_1 = require("@angular/core");
var moment = require('moment');
var ViewTXNPage = /** @class */ (function () {
    /** */
    function ViewTXNPage(route, minimaApiService, myTools, ngZone) {
        this.route = route;
        this.minimaApiService = minimaApiService;
        this.myTools = myTools;
        this.ngZone = ngZone;
        this.transactionID = '';
        this.hide = false;
        this.message = '';
        this.prompt = 'Fetching your transaction details...';
    }
    /** */
    ViewTXNPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.fetchHistory().then(function (res) {
            if (res) {
                _this.transactionID = _this.route.snapshot.paramMap.get('id');
                if (_this.transactionID && _this.transactionID.length > 0) {
                    _this.$subscription =
                        _this.minimaApiService.$history.pipe(operators_1.take(1))
                            .subscribe(function (history) {
                            (history.history ?
                                _this.myTxn =
                                    history.history.filter(function (txn) {
                                        return txn.txpow.txpowid === _this.transactionID;
                                    }) :
                                console.log('Transaction with id:' +
                                    _this.transactionID + 'not found..'));
                            if (_this.myTxn.length > 0) {
                                var MSG = '';
                                (_this.myTxn[0].txpow.body.txn.state[1] &&
                                    _this.myTxn[0].txpow.body.txn.state[1].data ?
                                    MSG = _this.myTxn[0].txpow.body.txn.state[1].data :
                                    null);
                                if (_this.myTxn.length > 0) {
                                    _this.relaytime =
                                        new Date(parseInt(_this.myTxn[0].txpow.header.timemilli, 10))
                                            .toISOString();
                                    _this.relaytime =
                                        moment(_this.relaytime)
                                            .format('DD/MM/YYYY - hh:mm:ss a', true);
                                    (_this.myTxn[0].txpow.body.txn.state &&
                                        _this.myTxn[0].txpow.body.txn.state[0] &&
                                        _this.myTxn[0].txpow.body.txn
                                            .state[0].data === '[01000100]' ?
                                        _this.message = MSG.substring(1, MSG.length - 1) :
                                        null);
                                    (_this.myTxn[0].txpow.body.txn.tokengen ?
                                        _this.type = 'Token Creation.' :
                                        _this.type = 'Value Transfer.');
                                }
                                else {
                                    console.log('Your transaction has not been found.');
                                    _this.prompt = 'Your transaction does not exist.';
                                }
                            }
                            else {
                                console.log('No transaction found.');
                            }
                        });
                    // console.log(this.message);
                    // check & see if subscription worked
                    if (_this.$subscription.closed && _this.myTxn.length > 0) {
                        _this.prompt = '';
                    }
                    else {
                        _this.prompt = 'No transaction details found.';
                    }
                }
            }
            else {
                _this.prompt = 'History failed to load.  Please try again.';
            }
        });
    };
    /** */
    ViewTXNPage.prototype.ionViewWillLeave = function () {
        if (this.$subscription) {
            this.$subscription.unsubscribe();
        }
    };
    /** */
    ViewTXNPage.prototype.fetchHistory = function () {
        return this.minimaApiService.initHistory();
    };
    /** */
    ViewTXNPage.prototype.ngOnInit = function () { };
    /** */
    ViewTXNPage.prototype.copy = function (text) {
        this.myTools.copy(text);
    };
    ViewTXNPage = __decorate([
        core_1.Component({
            selector: 'app-view-txn',
            templateUrl: './view-txn.page.html',
            styleUrls: ['./view-txn.page.scss']
        })
        /** */
    ], ViewTXNPage);
    return ViewTXNPage;
}());
exports.ViewTXNPage = ViewTXNPage;
