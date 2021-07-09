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
        this.$footerStatus =
            this.tools.showFooterSubject.subscribe(function (fStatus) {
                _this.showFooter = fStatus.status;
            });
        this.$mining =
            this.minimaApiService.$miningStatus.subscribe(function (status) {
                if (status.started) {
                    _this.miningStarted = true;
                    _this.miningFinished = false;
                    _this.tools.getFooterSubjectOnce().subscribe(function (status) {
                        // If it's not open, open it, and wasOpened = false
                        if (!status.status) {
                            _this.tools.showFooterSubject.next({ status: true, wasOpened: false });
                        }
                    });
                }
                else if (status.finished) {
                    _this.miningStarted = false;
                    _this.miningFinished = true;
                    _this.tools.getFooterSubjectOnce().subscribe(function (status) {
                        // If it's open, (should be) and it wasn't open.. close it
                        if (status.status &&
                            status.wasOpened !== undefined &&
                            !status.wasOpened) {
                            setTimeout(function () {
                                _this.tools.showFooterSubject.next({ status: false });
                            }, 2000);
                        }
                    });
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
    FooterComponent.prototype.updateFooterStatus = function () {
        if (!this.showFooter) {
            this.tools.showFooterSubject.next({ status: true });
        }
        else {
            this.tools.showFooterSubject.next({ status: false });
        }
    };
    FooterComponent.prototype.showMiningText = function () {
        var _this = this;
        (this.showMining ? this.showMining = false : this.showMining = true);
        setTimeout(function () {
            (_this.showMining ? _this.showMining = false : null);
        }, 2000);
    };
    FooterComponent.prototype.showDoneText = function () {
        var _this = this;
        (this.showDone ? this.showDone = false : this.showDone = true);
        setTimeout(function () {
            (_this.showDone ? _this.showDone = false : null);
        }, 2000);
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
