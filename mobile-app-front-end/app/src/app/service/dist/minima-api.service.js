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
exports.MinimaApiService = exports.cryptocurrency = exports.app = void 0;
var rxjs_1 = require("rxjs");
var core_1 = require("@angular/core");
var minima_1 = require("minima");
exports.app = 'Wallet';
exports.cryptocurrency = 'Minima';
var MinimaApiService = /** @class */ (function () {
    function MinimaApiService(loadingController) {
        this.loadingController = loadingController;
        this.$balance = new rxjs_1.ReplaySubject(1);
        this.$history = new rxjs_1.ReplaySubject(1);
        this.$status = new rxjs_1.ReplaySubject(1);
        this.$urlData = new rxjs_1.ReplaySubject(1);
        this.$miningStatus = new rxjs_1.ReplaySubject(1);
        this.$incentiveTokenId = new rxjs_1.ReplaySubject(1);
        // Instantiate with Minima Token as a first
        this.currentTokenSelected = new rxjs_1.BehaviorSubject('0x00');
    }
    // Fetch balance first time
    MinimaApiService.prototype.init = function (balance) {
        var _this = this;
        this.$incentiveTokenId.subscribe(function (incentiveToken) {
            var result = balance.filter(function (b) { return b.tokenid !== incentiveToken.tokenId; });
            console.log("Filter incentiveCash out array", result);
            _this.$balance.next(result);
        });
    };
    MinimaApiService.prototype.initStatus = function () {
        var _this = this;
        this.getStatus().then(function (res) {
            _this.$status.next(res.response);
        });
    };
    MinimaApiService.prototype.initHistory = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.getHistory().then(function (res) {
                _this.$history.next(res.response);
                resolve(true);
            });
        });
    };
    MinimaApiService.prototype.createToken = function (data) {
        if (data.script !== '') {
            if (data.nft) {
                return this.req('tokencreate name:\"' +
                    data.name +
                    '\" amount:\"' + data.amount +
                    '.' + 0 +
                    '\" description:\"' + data.description +
                    '\" script:\"' + data.script +
                    '\" icon:\"' + data.icon +
                    '\" proof:\"' + data.proof +
                    '\"');
            }
            else {
                return this.req('tokencreate name:\"' +
                    data.name +
                    '\" amount:\"' + data.amount +
                    '\" description:\"' + data.description +
                    '\" script:\"' + data.script +
                    '\" icon:\"' + data.icon +
                    '\" proof:\"' + data.proof +
                    '\"');
            }
        }
        else {
            if (data.nft) {
                return this.req('tokencreate name:\"' +
                    data.name +
                    '\" amount:\"' +
                    data.amount + '.' + 0 +
                    '\" description:\"' + data.description +
                    '\" icon:\"' + data.icon +
                    '\" proof:\"' + data.proof +
                    '\"');
            }
            else {
                return this.req('tokencreate name:\"' + data.name +
                    '\" amount:\"' + data.amount +
                    '\" description:\"' + data.description +
                    '\" icon:\"' + data.icon + '\" proof:\"' + data.proof +
                    '\"');
            }
        }
    };
    MinimaApiService.prototype.validateTokenID = function (tokenid) {
        return this.req('tokenvalidate ' + tokenid);
    };
    MinimaApiService.prototype.sendMessageTransaction = function (data) {
        var postTransaction = 'send ' +
            data.amount +
            ' ' +
            data.address + ' ' +
            data.token.tokenid + ' ' + ' \"254:[01000100]#255:[' +
            data.message + ']\"';
        return this.req(postTransaction);
    };
    MinimaApiService.prototype.webLink = function (data) {
        return this.req('weblink+' + data.url);
    };
    MinimaApiService.prototype.setHost = function (newHost) {
        localStorage.setItem('minima_host', newHost);
    };
    MinimaApiService.prototype.newAddress = function () {
        return this.req('newaddress');
    };
    MinimaApiService.prototype.sendFunds = function (data) {
        return this.req('send ' +
            data.amount + ' ' + data.address + ' ' + data.token.tokenid);
    };
    MinimaApiService.prototype.giveMe50 = function () {
        return this.req('gimme50');
    };
    MinimaApiService.prototype.getBalance = function () {
        return this.req('balance');
    };
    MinimaApiService.prototype.getHistory = function () {
        return this.req('history');
    };
    MinimaApiService.prototype.getStatusFull = function () {
        return this.req('status full');
    };
    MinimaApiService.prototype.clearMyHistory = function () {
        return this.req('history clear');
    };
    MinimaApiService.prototype.getStatus = function () {
        return this.req('status');
    };
    MinimaApiService.prototype.req = function (fnc) {
        var promise = new Promise(function (resolve) {
            minima_1.Minima.cmd(fnc, function (resp) {
                // console.log(resp);
                resolve(resp);
            });
        });
        return promise;
    };
    // File System
    MinimaApiService.prototype.saveFile = function (data, filename) {
        return new Promise(function (resolve, reject) {
            minima_1.Minima.file.save(data, filename, function (res) {
                resolve(res);
            });
        });
    };
    MinimaApiService.prototype.loadFile = function (filename) {
        return new Promise(function (resolve, reject) {
            minima_1.Minima.file.load(filename, function (res) {
                resolve(res);
            });
        });
    };
    MinimaApiService.prototype.checkScriptAddress = function (mAddress) {
        return new Promise(function (resolve) {
            try {
                minima_1.Minima.cmd('scripts', function (res) {
                    if (!res.status) {
                        throw new Error('Failed to run scripts');
                    }
                    else {
                        var match_1 = false;
                        res.response.addresses.forEach(function (element) {
                            if (element.miniaddress === mAddress) {
                                // console.log('Found a matchinga address');
                                match_1 = true;
                                resolve(true);
                            }
                        });
                        if (!match_1) {
                            resolve(false);
                        }
                    }
                });
            }
            catch (err) {
                minima_1.Minima.log(err);
                resolve(false);
            }
        });
    };
    MinimaApiService.prototype.checkAddressRelevance = function (addr) {
        return new Promise(function (resolve) {
            try {
                minima_1.Minima.cmd('check ' + addr, function (res) {
                    if (res.status) {
                        if (res.response.relevant) {
                            resolve(true);
                        }
                        else {
                            resolve(false);
                        }
                    }
                    else {
                        resolve(false);
                        throw new Error('Minima address check for relevance failed.');
                    }
                });
            }
            catch (err) {
                minima_1.Minima.log(err);
            }
        });
    };
    MinimaApiService.prototype.removeFile = function (filename) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve) {
                        minima_1.Minima.file["delete"](filename, function (res) {
                            if (res.success) {
                                resolve(res);
                            }
                            else {
                                resolve(false);
                            }
                        });
                    })["catch"](function (err) {
                        minima_1.Minima.log(err);
                    })];
            });
        });
    };
    MinimaApiService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], MinimaApiService);
    return MinimaApiService;
}());
exports.MinimaApiService = MinimaApiService;
