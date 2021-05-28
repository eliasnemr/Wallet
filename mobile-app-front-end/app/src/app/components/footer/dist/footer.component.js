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
        this.miningStarted = false;
        this.miningFinished = false;
        this.showDone = false;
        this.showMining = false;
    }
    /** */
    FooterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.$mining =
            this.minimaApiService.$miningStatus.subscribe(function (status) {
                if (status.started) {
                    _this.miningStarted = true;
                    _this.miningFinished = false;
                }
                else if (status.finished) {
                    _this.miningStarted = false;
                    _this.miningFinished = true;
                }
                else {
                    _this.miningStarted = false;
                    _this.miningFinished = false;
                }
            });
    };
    FooterComponent.prototype.ngOnDestroy = function () {
        this.$mining.unsubscribe();
    };
    FooterComponent.prototype.ionViewWillEnter = function () {
        var _this = this;
        // console.log('Footer page');
        this.$mining =
            this.minimaApiService.$miningStatus.subscribe(function (status) {
                console.log('Mining Status changed!');
                if (status.started) {
                    _this.miningStarted = true;
                    _this.miningFinished = false;
                }
                else if (status.finished) {
                    _this.miningFinished = true;
                    _this.miningStarted = false;
                }
            });
    };
    FooterComponent.prototype.ionViewWillLeave = function () {
        if (this.$mining) {
            this.$mining.unsubscribe();
        }
    };
    /** Give user testnet money */
    FooterComponent.prototype.gimme50 = function () {
        var _this = this;
        this.status = '';
        this.gimme50Btn.disabled = true;
        this.minimaApiService.giveMe50().then(function (res) {
            if (res.status) {
                // this.tools.presentAlert('Gimme50', 'Successful', 'Status');
                _this.status = 'Gimme 50';
                _this.gimme50Btn.disabled = false;
            }
            else {
                _this.tools.presentAlert('Gimme50', res.message, 'Status');
                _this.status = 'Unavailable';
                setTimeout(function () {
                    _this.gimme50Btn.disabled = false;
                    _this.status = 'Gimme 50';
                }, 4000);
            }
        });
    };
    __decorate([
        core_1.ViewChild('gimme50Btn', { static: false })
    ], FooterComponent.prototype, "gimme50Btn");
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
