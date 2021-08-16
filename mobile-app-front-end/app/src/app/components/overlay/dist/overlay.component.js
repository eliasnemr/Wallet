"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.OverlayComponent = void 0;
var environment_prod_1 = require("./../../../environments/environment.prod");
var core_1 = require("@angular/core");
var OverlayComponent = /** @class */ (function () {
    function OverlayComponent(api) {
        var _this = this;
        this.api = api;
        this.TIMERZERO = 0;
        this.TIMER = 1000000;
        this.stillHere = false;
        setTimeout(function () {
            _this.stillHere = true;
        }, 4000);
        this.environment = environment_prod_1.environment;
    }
    OverlayComponent.prototype.ngOnInit = function () { };
    OverlayComponent.prototype.pageReload = function () {
        location.reload();
    };
    OverlayComponent = __decorate([
        core_1.Component({
            selector: 'app-overlay',
            templateUrl: './overlay.component.html',
            styleUrls: ['./overlay.component.scss']
        })
    ], OverlayComponent);
    return OverlayComponent;
}());
exports.OverlayComponent = OverlayComponent;
