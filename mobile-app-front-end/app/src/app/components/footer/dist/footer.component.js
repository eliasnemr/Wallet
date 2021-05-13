"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.FooterComponent = void 0;
var core_1 = require("@angular/core");
var FooterComponent = /** @class */ (function () {
    /** */
    function FooterComponent(minimaApiService, tools) {
        this.minimaApiService = minimaApiService;
        this.tools = tools;
        this.status = 'Gimme 50';
    }
    /** */
    FooterComponent.prototype.ngOnInit = function () { };
    /** Give user testnet money */
    FooterComponent.prototype.gimme50 = function () {
        var _this = this;
        this.status = 'Collecting your cash';
        this.minimaApiService.giveMe50().then(function (res) {
            if (res.status === true) {
                _this.tools.presentAlert('Gimme50', 'Successful', 'Status');
            }
            else {
                _this.tools.presentAlert('Gimme50', res.message, 'Status');
            }
        });
    };
    FooterComponent = __decorate([
        core_1.Component({
            selector: 'app-footer',
            templateUrl: './footer.component.html',
            styleUrls: ['./footer.component.scss']
        })
        /** */
    ], FooterComponent);
    return FooterComponent;
}());
exports.FooterComponent = FooterComponent;
