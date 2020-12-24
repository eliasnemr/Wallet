"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MiniStatusPage = void 0;
var operators_1 = require("rxjs/operators");
var core_1 = require("@angular/core");
var MiniStatusPage = /** @class */ (function () {
    function MiniStatusPage(service) {
        this.service = service;
    }
    MiniStatusPage.prototype.ngOnInit = function () { };
    MiniStatusPage.prototype.ionViewWillEnter = function () {
        this.updateStatus();
    };
    MiniStatusPage.prototype.ionViewWillLeave = function () {
        if (this.statusSubscription) {
            this.statusSubscription.unsubscribe(); // unsubs
        }
    };
    MiniStatusPage.prototype.updateStatus = function () {
        var _this = this;
        this.statusSubscription = this.service.updatedStatus
            .pipe(operators_1.map(function (responseData) {
            return responseData;
        }))
            .subscribe(function (res) {
            if (_this.lastJSON !== JSON.stringify(res)) {
                _this.status = res;
                _this.lastJSON = JSON.stringify(res);
            }
        });
    };
    MiniStatusPage = __decorate([
        core_1.Component({
            selector: 'app-mini-status',
            templateUrl: './mini-status.page.html',
            styleUrls: ['./mini-status.page.scss']
        })
    ], MiniStatusPage);
    return MiniStatusPage;
}());
exports.MiniStatusPage = MiniStatusPage;
