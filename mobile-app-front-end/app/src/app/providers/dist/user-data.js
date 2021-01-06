"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UserHistorySavedData = void 0;
var core_1 = require("@angular/core");
var UserHistorySavedData = /** @class */ (function () {
    function UserHistorySavedData() {
        this.saved = [];
    }
    // has the user saved this?
    UserHistorySavedData.prototype.hasSaved = function (txn_txpow_txpowid) {
        return (this.saved.indexOf(txn_txpow_txpowid) > -1);
    };
    // add txn as saved
    UserHistorySavedData.prototype.addToSaved = function (txn_txpow_txpowid) {
        this.saved.push(txn_txpow_txpowid);
    };
    // remove txn from saved
    UserHistorySavedData.prototype.removeFromSaved = function (txn_txpow_txpowid) {
        var index = this.saved.indexOf(txn_txpow_txpowid);
        if (index > -1) {
            this.saved.splice(index, 1);
        }
    };
    UserHistorySavedData = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], UserHistorySavedData);
    return UserHistorySavedData;
}());
exports.UserHistorySavedData = UserHistorySavedData;
