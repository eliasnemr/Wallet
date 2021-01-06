"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PopFilterComponent = void 0;
var core_1 = require("@angular/core");
var PopFilterComponent = /** @class */ (function () {
    function PopFilterComponent(userConfigService) {
        this.userConfigService = userConfigService;
        this.userConfig = { historyOrderByMode: 1 };
        // set default value from observable
        this.userConfig.historyOrderByMode = this.userConfigService.userConfig.value.historyOrderByMode;
    }
    PopFilterComponent.prototype.ngOnInit = function () { };
    PopFilterComponent.prototype.compareWithFn = function (o1, o2) {
        return o1 == o2;
    };
    PopFilterComponent.prototype.change = function (ev) {
        var temp = this.userConfigService.userConfig.value;
        temp.historyOrderByMode = ev.detail.value;
        this.userConfigService.userConfig.next(temp);
        this.userConfigService.saveUserConfig(this.userConfigService.userConfig.value);
    };
    PopFilterComponent = __decorate([
        core_1.Component({
            selector: 'app-pop-filter',
            templateUrl: './pop-filter.component.html',
            styleUrls: ['./pop-filter.component.scss']
        })
    ], PopFilterComponent);
    return PopFilterComponent;
}());
exports.PopFilterComponent = PopFilterComponent;
