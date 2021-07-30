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
    ViewTXNPage.prototype.copy = function (text, type) {
        document.getElementById(type).innerHTML = 'Copied';
        document.getElementById(type).style.color = 'var(--ion-color-success';
        this.myTools.copy(text);
        setTimeout(function () {
            if (document.getElementById(type)) {
                document.getElementById(type).innerHTML = 'Copy';
                document.getElementById(type).style.color = 'var(--ion-color-primary';
            }
        }, 2000);
    };
    ViewTXNPage.prototype.checkOutputRelevance = function (addr) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(addr);
                        return [4 /*yield*/, this.minimaApiService.checkAddressRelevance(addr)];
                    case 1:
                        res = _a.sent();
                        if (res) {
                            console.log('This is their address');
                        }
                        else {
                            console.log('Not theirs');
                        }
                        return [2 /*return*/];
                }
            });
        });
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
