"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.StatusService = void 0;
var minima_1 = require("minima");
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var StatusService = /** @class */ (function () {
    function StatusService() {
        var _this = this;
        minima_1.Minima.cmd('status full', function (res) {
            if (res.status) {
                var first = res.response;
                _this.updatedStatus = new rxjs_1.BehaviorSubject(first);
            }
        });
    }
    StatusService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], StatusService);
    return StatusService;
}());
exports.StatusService = StatusService;
