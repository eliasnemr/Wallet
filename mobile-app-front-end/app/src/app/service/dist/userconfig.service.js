"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UserconfigService = void 0;
var rxjs_1 = require("rxjs");
var minima_1 = require("minima");
var core_1 = require("@angular/core");
var UserconfigService = /** @class */ (function () {
    function UserconfigService() {
        this.defaultConfig = { systemMode: 'light', terminalFontSize: '12', tokenDisplayMode: 1 };
        this.userConfig = new rxjs_1.BehaviorSubject(this.defaultConfig);
        this.createUserConfig(this.defaultConfig);
    }
    UserconfigService.prototype.createUserConfig = function (defaultConfig) {
        var _this = this;
        minima_1.Minima.file.load('UserConfig.txt', function (res) {
            //console.log(res);
            if (!res.success && !res.exists) {
                var data = defaultConfig;
                minima_1.Minima.file.save(JSON.stringify(data), 'UserConfig.txt', function (res) {
                    if (res.success) { }
                });
            }
            else {
                console.log(JSON.parse(res.data));
                _this.userConfig.next(JSON.parse(res.data));
            }
        });
    };
    UserconfigService.prototype.saveUserConfig = function (currentValue) {
        minima_1.Minima.file.load('UserConfig.txt', function (res) {
            if (res.success) {
                var data = res.data;
                if (data !== JSON.stringify(currentValue)) {
                    console.log(JSON.stringify(currentValue));
                    minima_1.Minima.file.save(JSON.stringify(currentValue), 'UserConfig.txt', function (res) {
                        if (res.success) {
                            //console.log('Updated UserConfig!');
                        }
                    });
                }
            }
        });
    };
    UserconfigService.prototype.loadUserConfig = function (userConfig) {
        minima_1.Minima.file.load('userConfig.txt', function (res) {
            if (res.success) {
                userConfig = JSON.parse(res.data);
            }
        });
        return;
    };
    UserconfigService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], UserconfigService);
    return UserconfigService;
}());
exports.UserconfigService = UserconfigService;
