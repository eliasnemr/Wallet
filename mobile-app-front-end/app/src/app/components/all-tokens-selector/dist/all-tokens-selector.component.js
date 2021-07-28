"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AllTokensSelectorComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var SparkMD5 = require("spark-md5");
var AllTokensSelectorComponent = /** @class */ (function () {
    function AllTokensSelectorComponent(modalController) {
        this.modalController = modalController;
        this.onChange = function (token) { };
        this.onTouch = function () { };
        this.disabled = false;
    }
    AllTokensSelectorComponent_1 = AllTokensSelectorComponent;
    AllTokensSelectorComponent.prototype.ngOnInit = function () { };
    AllTokensSelectorComponent.prototype.writeValue = function (value) {
        this.onChange(value);
        this.token = value;
    };
    AllTokensSelectorComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    AllTokensSelectorComponent.prototype.registerOnTouched = function (fn) {
        this.onTouch = fn;
    };
    AllTokensSelectorComponent.prototype.setDisabledState = function (disabled) {
        this.disabled = disabled;
    };
    AllTokensSelectorComponent.prototype.createIcon = function (_t) {
        return 'https://www.gravatar.com/avatar/' + SparkMD5.hash(_t) + '?d=identicon';
    };
    var AllTokensSelectorComponent_1;
    AllTokensSelectorComponent = AllTokensSelectorComponent_1 = __decorate([
        core_1.Component({
            selector: 'all-tokens-selector',
            templateUrl: './all-tokens-selector.component.html',
            styleUrls: ['./all-tokens-selector.component.scss'],
            providers: [
                {
                    provide: forms_1.NG_VALUE_ACCESSOR,
                    useExisting: AllTokensSelectorComponent_1,
                    multi: true
                },
            ]
        })
    ], AllTokensSelectorComponent);
    return AllTokensSelectorComponent;
}());
exports.AllTokensSelectorComponent = AllTokensSelectorComponent;
