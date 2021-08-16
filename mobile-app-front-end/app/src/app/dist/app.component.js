"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppComponent = void 0;
var environment_prod_1 = require("./../environments/environment.prod");
var core_1 = require("@angular/core");
var minima_1 = require("minima");
var rxjs_1 = require("rxjs");
var AppComponent = /** @class */ (function () {
    function AppComponent(tools, minimaApiService, alertController, animationCtrl) {
        this.tools = tools;
        this.minimaApiService = minimaApiService;
        this.alertController = alertController;
        this.animationCtrl = animationCtrl;
        this.toggleValue = false;
        this.currentMode = false;
        this.environment = environment_prod_1.environment;
        this.nodeStatus = false;
        this.getPages();
        this.initializeApp();
        this.setLocalStorage();
    }
    AppComponent.prototype.ionViewWillLeave = function () {
        this.$overlaySubscription.unsubscribe();
    };
    AppComponent.prototype.initializeApp = function () {
        this.initMinima();
    };
    /** initMinima Function */
    AppComponent.prototype.initMinima = function () {
        var _this = this;
        minima_1.Minima.init(function (msg) {
            if (msg.event === 'connected') {
                var msZero = 0;
                var msTimer = 3000;
                var source = rxjs_1.timer(msZero, msTimer);
                _this.$overlaySubscription = source.subscribe(function () {
                    if (minima_1.Minima.block === 0) {
                        _this.nodeStatus = false;
                    }
                    else if (!_this.nodeStatus && minima_1.Minima.block > 0) {
                        setTimeout(function () {
                            _this.nodeStatus = true;
                        }, 2000);
                    }
                });
                _this.minimaApiService.init(minima_1.Minima.balance);
            }
            else if (msg.event === 'newbalance') {
                _this.tools.presentToast('Balance updated!', 'primary', 'top');
                _this.minimaApiService.$balance.next(msg.info.balance);
            }
            else if (msg.event === 'miningstart') {
                var miningStatus = {
                    'started': true,
                    'finished': false
                };
                _this.minimaApiService.$miningStatus.next(miningStatus);
            }
            else if (msg.event === 'miningstop') {
                var miningStatus_1 = {
                    'started': false,
                    'finished': true
                };
                _this.minimaApiService.$miningStatus.next(miningStatus_1);
                miningStatus_1.finished = false;
                setTimeout(function () {
                    _this.minimaApiService.$miningStatus.next(miningStatus_1);
                }, 4000);
                // this.tools.presentMiningToast(
                //     'Finished mining your transaction.',
                //     'secondary',
                //     'bottom');
            }
        });
    };
    /** Fetch pages */
    AppComponent.prototype.getPages = function () {
        this.menu =
            [
                {
                    title: 'Balance',
                    routerLink: '/balance',
                    icon: 'assets/balanceIcon.svg',
                    line: 'none',
                    hidden: false
                },
                {
                    title: 'Send',
                    routerLink: '/send-funds',
                    icon: 'assets/sendIcon.svg',
                    line: 'none',
                    hidden: false
                },
                {
                    title: 'Receive',
                    routerLink: '/my-address',
                    icon: 'assets/receiveIcon.svg',
                    line: 'none',
                    hidden: false
                },
                {
                    title: 'Contacts',
                    routerLink: '/contacts',
                    icon: 'assets/contactsIcon.svg',
                    line: 'none',
                    hidden: false
                },
                {
                    title: 'History',
                    routerLink: '/history',
                    icon: 'assets/historyIcon.svg',
                    line: 'none',
                    hidden: false
                },
                {
                    title: 'Token',
                    routerLink: '/create-token',
                    icon: 'assets/createIcon.svg',
                    line: 'none',
                    hidden: false
                },
                {
                    title: 'Status',
                    routerLink: '/status',
                    icon: 'assets/statusIcon.svg',
                    line: 'none',
                    hidden: false
                },
                {
                    title: 'Terminal',
                    routerLink: '/mini-term',
                    icon: 'assets/terminalIcon.svg',
                    line: 'none',
                    hidden: false
                },
                {
                    title: 'Community',
                    routerLink: '/community',
                    icon: 'assets/communityIcon.svg',
                    line: 'none',
                    hidden: false
                }
            ];
    };
    AppComponent.prototype.setLocalStorage = function () {
        if (!localStorage.getItem('termFontSize')) {
            localStorage.setItem('termFontSize', '' + 14);
        }
    };
    __decorate([
        core_1.ViewChild('box', { read: core_1.ElementRef, static: false })
    ], AppComponent.prototype, "box");
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: 'app.component.html',
            styleUrls: ['app.component.scss']
        })
        /** Bootstrap appComponent */
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
