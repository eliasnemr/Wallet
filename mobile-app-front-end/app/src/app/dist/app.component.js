"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.AppComponent = void 0;
var environment_prod_1 = require("./../environments/environment.prod");
var core_1 = require("@angular/core");
var minima_1 = require("minima");
var rxjs_1 = require("rxjs");
var prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
var AppComponent = /** @class */ (function () {
    /** */
    function AppComponent(tools, minimaApiService, alertController) {
        this.tools = tools;
        this.minimaApiService = minimaApiService;
        this.alertController = alertController;
        this.toggleValue = false;
        this.currentMode = false;
        this.environment = environment_prod_1.environment;
        this.nodeStatus = false;
        this.getPages();
        this.initializeApp();
        this.setLocalStorage();
    }
    /** exit lifecycle */
    AppComponent.prototype.ionViewWillLeave = function () {
        this.$overlaySubscription.unsubscribe();
    };
    /** initializeApplication */
    AppComponent.prototype.initializeApp = function () {
        // this.addToHSListener();
        this.initMinima();
    };
    /** addToHomeScreenListener() */
    AppComponent.prototype.addToHSListener = function () {
        var _this = this;
        // Initialize deferredPrompt for use later to show browser install prompt.
        var deferredPrompt;
        window.addEventListener('beforeinstallprompt', function (e) {
            // Prevent the mini-infobar from appearing on mobile
            e.preventDefault();
            // Stash the event so it can be triggered later.
            deferredPrompt = e;
            // Update UI notify the user they can install the PWA
            _this.promoteAddToHS();
            // Optionally, send analytics event that PWA install promo was shown.
            console.log("'beforeinstallprompt' event was fired.");
        });
    };
    AppComponent.prototype.promoteAddToHS = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            cssClass: 'add-to-hs-alert',
                            header: 'Add to homescreen?',
                            message: 'You can add Wallet to your homescreen.',
                            buttons: [
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                        console.log('Confirm Cancel: blah');
                                    }
                                }, {
                                    text: 'Add',
                                    handler: function () {
                                        console.log('Confirm Okay');
                                    }
                                },
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        alert.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    /** initMinima Function */
    AppComponent.prototype.initMinima = function () {
        var _this = this;
        minima_1.Minima.init(function (msg) {
            if (msg.event === 'connected') {
                var msZero = 0;
                var msTimer = 3000;
                var source = rxjs_1.timer(msZero, msTimer);
                _this.$overlaySubscription = source.subscribe(function (val) {
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
                // this.tools.presentMiningToast(
                //     'Started to mine your transaction.',
                //     'primary',
                //     'bottom');
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
