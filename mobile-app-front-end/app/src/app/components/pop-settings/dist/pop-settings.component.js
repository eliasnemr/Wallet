"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PopSettingsComponent = void 0;
var core_1 = require("@angular/core");
var PopSettingsComponent = /** @class */ (function () {
    function PopSettingsComponent(userConfigService) {
        this.userConfigService = userConfigService;
        this.userConfig = { tokenDisplayMode: 1 };
        // set default value from observable
        this.userConfig.tokenDisplayMode = this.userConfigService.userConfig.value.tokenDisplayMode;
    }
    PopSettingsComponent.prototype.ngOnInit = function () { };
    PopSettingsComponent.prototype.compareWithFn = function (o1, o2) {
        return o1 === o2;
    };
    ;
    PopSettingsComponent.prototype.change = function (ev) {
        this.userConfigService.userConfig.value.tokenDisplayMode = ev.detail.value;
        this.userConfigService.saveUserConfig(this.userConfigService.userConfig.value);
    };
    PopSettingsComponent = __decorate([
        core_1.Component({
            selector: 'app-pop-settings',
            templateUrl: './pop-settings.component.html',
            styleUrls: ['./pop-settings.component.scss']
        })
    ], PopSettingsComponent);
    return PopSettingsComponent;
}());
exports.PopSettingsComponent = PopSettingsComponent;
