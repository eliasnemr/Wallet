"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
    }
    MinimaApiService.prototype.init = function (balance) {
        this.$balance.next(balance);
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
        var postTransaction = "send " + data.amount + " " + data.address + " " + data.tokenid + " " + " 254:[01000100]#255:[\"" + data.message + "\"]";
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
            data.amount + ' ' + data.address + ' ' + data.tokenid);
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
    MinimaApiService.prototype.removeFile = function (filename) {
        return new Promise(function (resolve, reject) {
            minima_1.Minima.file["delete"](filename, function (res) {
                if (res.success) {
                    resolve(res);
                }
                else {
                    resolve(false);
                }
            });
        })["catch"](function (err) {
            throw new Error(exports.cryptocurrency + ': RPC command failed!');
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
