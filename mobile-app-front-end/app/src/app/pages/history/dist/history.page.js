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
exports.HistoryPage = void 0;
var pop_filter_component_1 = require("./../../components/pop-filter/pop-filter.component");
var moment = require("moment");
var core_1 = require("@angular/core");
var minima_1 = require("minima");
var operators_1 = require("rxjs/operators");
var HistoryPage = /** @class */ (function () {
    function HistoryPage(historyService, modalController, user, alertCtrl, toastCtrl, popoverController, config, router) {
        this.historyService = historyService;
        this.modalController = modalController;
        this.user = user;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.popoverController = popoverController;
        this.config = config;
        this.router = router;
        this.categories = 0;
        this.segment = 'all';
        this.prompt = 'Fetching your history...';
        this.transactions = [];
        this.saved = [];
    }
    HistoryPage.prototype.ngOnInit = function () {
        this.pullInHistorySummary();
        this.ios = this.config.get('mode') === 'ios';
    };
    HistoryPage.prototype.ionViewDidLeave = function () {
        this.user.storage.set('saved_transactions', this.user.saved).then(function (val) {
        });
    };
    HistoryPage.prototype.saveItem = function (slidingItem, txn) {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.user.hasSaved(txn.txpow.txpowid)) return [3 /*break*/, 1];
                        // Prompt to remove as saved
                        this.removeItem(slidingItem, txn.txpow.txpowid, 'This has already been saved');
                        // saved = 'false' now
                        txn.saved = 'false';
                        return [3 /*break*/, 4];
                    case 1:
                        // Add to Saved
                        this.user.addToSaved(txn.txpow.txpowid);
                        // Add true attribute to this txn
                        txn.saved = 'true';
                        // close the open item
                        slidingItem.close();
                        return [4 /*yield*/, this.toastCtrl.create({
                                header: "Transaction with ID:" + (txn.txpow.txpowid.substring(0, 15) + '...') + " was successfully saved.",
                                duration: 3000,
                                buttons: [{
                                        text: 'Close',
                                        role: 'cancel'
                                    }]
                            })];
                    case 2:
                        toast = _a.sent();
                        return [4 /*yield*/, toast.present()];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    HistoryPage.prototype.removeItem = function (slidingItem, txn, title) {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: title,
                            message: 'Would you like to remove this transaction from your saved transactions?',
                            buttons: [
                                {
                                    text: 'Cancel',
                                    handler: function () {
                                        // Cancel button clicked, do not remove the transaction
                                        // Close the sliding item and hide the option buttons
                                        slidingItem.close();
                                    }
                                },
                                {
                                    text: 'Remove',
                                    handler: function () {
                                        // they want to remove this transaction from their saved transactions
                                        _this.user.removeFromSaved(txn.txpow.txpowid);
                                        // close the sliding item and hide the option buttons
                                        slidingItem.close();
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        // now present the alert on top of all other content
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        // now present the alert on top of all other content
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HistoryPage.prototype.presentFilterSettings = function (ev) {
        return __awaiter(this, void 0, void 0, function () {
            var popover;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverController.create({
                            component: pop_filter_component_1.PopFilterComponent,
                            event: ev,
                            translucent: true,
                            animated: true
                        })];
                    case 1:
                        popover = _a.sent();
                        return [4 /*yield*/, popover.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    HistoryPage.prototype.updateHistory = function () {
        if (this.historyList) {
            this.historyList.closeSlidingItems();
        }
        if (this.segment === 'saved') {
            this.filterHistory();
        }
        else if (this.segment === 'all') {
            this.pullInHistorySummary();
        }
    };
    HistoryPage.prototype.filterHistory = function () {
        this.transactions = this.transactions.filter(function (txn) {
            return txn.saved === 'true';
        });
    };
    HistoryPage.prototype.pullInHistorySummary = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    // await response of history function
                    return [4 /*yield*/, new Promise(function (resolve, reject) {
                            minima_1.Minima.cmd('history', function (res) {
                                // update observable
                                _this.historyService.updatedHistory.next(res);
                                resolve(_this.historyService.updatedHistory);
                            });
                        }).then(function (res) {
                            // rxjs operator PIPE the input observable value
                            res.pipe(operators_1.map(function (resp) {
                                _this.transactions = [];
                                resp.response.history.forEach(function (element) {
                                    var name = element.values[0].name;
                                    element.values[0].time = moment(element.txpow.header.timesecs * 1000).format("H:mm");
                                    element.values[0].day = moment(element.txpow.header.timesecs * 1000).format("DD");
                                    element.values[0].month = moment(element.txpow.header.timesecs * 1000).format("MMMM");
                                    if (name.substring(0, 1) === '{') {
                                        element.values[0].name = JSON.parse(name);
                                    }
                                    _this.transactions.push(element);
                                });
                                return _this.transactions.reverse();
                            })).subscribe(function (result) {
                                if (result.length === 0) {
                                    _this.prompt = 'No transactions found in your history.';
                                }
                            });
                        })];
                    case 1:
                        // await response of history function
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
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
    ], HistoryPage);
    return HistoryPage;
}());
exports.HistoryPage = HistoryPage;
