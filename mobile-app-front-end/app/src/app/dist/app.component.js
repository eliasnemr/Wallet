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
    function AppComponent(_tools, _minimaApiService) {
        this._tools = _tools;
        this._minimaApiService = _minimaApiService;
        this.nodeStatus = false;
        this.toggleValue = false;
        this.currentMode = false;
        this.environment = environment_prod_1.environment;
        this.getPages();
        this.initializeApp();
        this.setLocalStorage();
    }
    AppComponent.prototype.initializeApp = function () {
        this.initMinima();
    };
    AppComponent.prototype.initMinima = function () {
        var _this = this;
        minima_1.Minima.init(function (msg) {
            if (msg.event === 'connected') {
                //console.log('appComponent: Minima connected');
                console.log(msg);
                var msZero = 0;
                var msTimer = 3000;
                var source = rxjs_1.timer(msZero, msTimer);
                var subscribe = source.subscribe(function (val) {
                    if (minima_1.Minima.block == 0) {
                        _this.nodeStatus = false;
                    }
                    else if (!_this.nodeStatus && minima_1.Minima.block > 0) {
                        setTimeout(function () {
                            _this.nodeStatus = true;
                        }, 2000);
                    }
                });
                _this._minimaApiService.init(minima_1.Minima.balance);
            }
            else if (msg.event === 'newbalance') {
                _this._tools.presentToast('Balance updated!', 'primary', 'top');
                _this._minimaApiService.$balance.next(msg.info.balance);
            }
            else if (msg.event === 'newblock') {
            }
            else if (msg.event === 'miningstart') {
                _this._tools.presentMiningToast('Started to mine your transaction.', 'bottom');
            }
            else if (msg.event === 'miningstop') {
                _this._tools.presentMiningToast('Finished mining your transaction.', 'bottom');
            }
        });
    };
    AppComponent.prototype.getPages = function () {
        this.menu =
            [
                { title: 'Balance', routerLink: '/balance', icon: 'assets/balanceIcon.svg', line: 'none', hidden: false },
                { title: 'Send', routerLink: '/send-funds', icon: 'assets/sendIcon.svg', line: 'none', hidden: false },
                { title: 'Receive', routerLink: '/my-address', icon: 'assets/receiveIcon.svg', line: 'none', hidden: false },
                { title: 'Contacts', routerLink: '/contacts', icon: 'assets/contactsIcon.svg', line: 'none', hidden: false },
                { title: 'History', routerLink: '/history', icon: 'assets/historyIcon.svg', line: 'none', hidden: false },
                { title: 'Token', routerLink: '/create-token', icon: 'assets/createIcon.svg', line: 'none', hidden: false },
                { title: 'Status', routerLink: '/status', icon: 'assets/statusIcon.svg', line: 'none', hidden: false },
                { title: 'Terminal', routerLink: '/mini-term', icon: 'assets/terminalIcon.svg', line: 'none', hidden: false },
                { title: 'Community', routerLink: '/community', icon: 'assets/communityIcon.svg', line: 'none', hidden: false }
            ];
    };
    AppComponent.prototype.setLocalStorage = function () {
        if (localStorage.getItem('toggleVal') === 'true') {
            document.body.classList.toggle('dark', true);
        }
        else {
            document.body.classList.toggle('dark', false);
        }
        if (localStorage.getItem('toggleVal') === 'true') {
            this.toggleValue = true;
        }
        else {
            this.toggleValue = false;
        }
        if (!localStorage.getItem('termFontSize')) {
            localStorage.setItem('termFontSize', '' + 14);
        }
    };
    AppComponent.prototype.checkToggle = function (e) {
        if (this.toggleValue === false) {
            localStorage.setItem('toggleVal', 'false');
            document.body.classList.toggle('dark', false);
        }
        else {
            localStorage.setItem('toggleVal', 'true');
            document.body.classList.toggle('dark', true);
        }
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: 'app.component.html',
            styleUrls: ['app.component.scss']
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
