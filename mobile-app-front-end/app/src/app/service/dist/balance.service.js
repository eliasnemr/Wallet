"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.BalanceService = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var BalanceService = /** @class */ (function () {
    function BalanceService() {
        this.updatedBalance = new rxjs_1.BehaviorSubject([]);
        // take in tokenArr and the element you'd like to add to front of array
        this.update = function (a, e) {
            var i = a.findIndex(function (o) { return o.tokenid === e; });
            i > 0 ? a.splice(0, 0, a.splice(i, 1)[0]) : i && a.splice(0, 0, e);
            (a.length > 5) && a.length--;
            return a;
        };
    }
    BalanceService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], BalanceService);
    return BalanceService;
}());
exports.BalanceService = BalanceService;
