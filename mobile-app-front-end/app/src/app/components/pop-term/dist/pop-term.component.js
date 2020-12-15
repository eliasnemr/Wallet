"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PopTermComponent = void 0;
var core_1 = require("@angular/core");
var PopTermComponent = /** @class */ (function () {
    function PopTermComponent(userTerminal) {
        this.userTerminal = userTerminal;
    }
    PopTermComponent.prototype.ngOnInit = function () {
    };
    PopTermComponent.prototype.onActivate = function () {
        this.userTerminal.fontSizeEmitter.next(1);
    };
    PopTermComponent.prototype.onActivateLess = function () {
        this.userTerminal.fontSizeEmitter.next(-1);
    };
    PopTermComponent = __decorate([
        core_1.Component({
            selector: 'app-pop-term',
            templateUrl: './pop-term.component.html',
            styleUrls: ['./pop-term.component.scss']
        })
    ], PopTermComponent);
    return PopTermComponent;
}());
exports.PopTermComponent = PopTermComponent;
