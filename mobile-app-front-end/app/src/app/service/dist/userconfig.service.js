"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UserConfigService = void 0;
var rxjs_1 = require("rxjs");
var minima_1 = require("minima");
var core_1 = require("@angular/core");
var UserConfigService = /** @class */ (function () {
    function UserConfigService() {
        this.defaultConfig = {
            systemMode: 'light',
            terminalFontSize: '12',
            tokenDisplayMode: 1,
            historyOrderByMode: 1,
            historySaved: '',
            tips: { balance: false, contacts: false, address: false }
        };
        this.userConfig = new rxjs_1.BehaviorSubject(this.defaultConfig);
        this.createUserConfig(this.defaultConfig);
    }
    UserConfigService.prototype.createUserConfig = function (defaultConfig) {
        var _this = this;
        minima_1.Minima.file.load('UserConfig.txt', function (res) {
            if (!res.success && !res.exists) {
                minima_1.Minima.file.save(JSON.stringify(defaultConfig), 'UserConfig.txt', function (resp) {
                    if (resp.success) {
                        console.log('User Configuration File has been created with default values.');
                    }
                });
            }
            else { // if userConfig exists, update with latest values
                _this.userConfig.next(JSON.parse(res.data));
            }
        });
    };
    UserConfigService.prototype.saveUserConfig = function (currentValue) {
        minima_1.Minima.file.load('UserConfig.txt', function (res) {
            if (res.success) {
                if (res.data !== JSON.stringify(currentValue)) {
                    minima_1.Minima.file.save(JSON.stringify(currentValue), 'UserConfig.txt', function (res) {
                        if (res.success) {
                            //  console.log('Updated UserConfig!');
                        }
                    });
                }
            }
        });
    };
    UserConfigService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], UserConfigService);
    return UserConfigService;
}());
exports.UserConfigService = UserConfigService;
