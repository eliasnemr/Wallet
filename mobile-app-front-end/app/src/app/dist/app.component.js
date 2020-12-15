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
var core_1 = require("@angular/core");
var minima_1 = require("minima");
var AppComponent = /** @class */ (function () {
    function AppComponent(status, api, platform, storage, UserconfigService, toastCtrl) {
        this.status = status;
        this.api = api;
        this.platform = platform;
        this.storage = storage;
        this.UserconfigService = UserconfigService;
        this.toastCtrl = toastCtrl;
        this.toggleValue = false;
        this.currentMode = false;
        this.currentVersion = 0;
        this.getPages(); /** this returns pages if on mobile or desktop, (different layouts) */
        this.initializeApp();
        this.setLocalStorage(); /** set localStorages  */
    }
    /** @@@@@@@@@@@@@ Lifecycle @@@@@@@@@@@@@@@ */
    AppComponent.prototype.ionViewWillEnter = function () {
        this.initializeApp();
    };
    AppComponent.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            minima_1.Minima.init(function (msg) {
                if (msg.event === 'connected') {
                    _this.api.updatedBalance.next(minima_1.Minima.balance);
                }
                else if (msg.event === 'newbalance') {
                    _this.api.updatedBalance.next(msg.info.balance);
                }
                else if (msg.event === 'newblock') {
                    minima_1.Minima.cmd('status full', function (res) {
                        _this.status.updatedStatus.next(res.response);
                    });
                }
                else if (msg.event === 'miningstart') {
                    _this.presentToast("Mining Transaction in progress...", "success");
                }
                else if (msg.event === 'miningstop') {
                    _this.presentToast("Mining Transaction stopped...", "danger");
                }
            });
        });
    };
    /** @@@@@@@@@@ Misc Functions @@@@@@@@@@@ */
    AppComponent.prototype.getPages = function () {
        this.basic =
            [
                { title: 'Balance', routerLink: '/balance', icon: 'card', line: 'none', hidden: false },
                { title: 'Send', routerLink: '/send-funds', icon: 'send', line: 'none', hidden: false },
                { title: 'Receive', routerLink: '/my-address', icon: 'arrow-down', line: 'none', hidden: false },
                { title: 'History', routerLink: '/history', icon: 'book', line: 'half', hidden: false },
            ];
        this.advanced =
            [
                { title: 'Token', routerLink: '/create-token', icon: 'brush', line: 'none', hidden: false },
                { title: 'Status', routerLink: '/status', icon: 'analytics', line: 'none', hidden: false },
                { title: 'Terminal', routerLink: '/mini-term', icon: 'code', line: 'none', hidden: false },
                { title: 'Community', routerLink: '/community', icon: 'share', line: 'half', hidden: false },
                { title: 'Settings', routerLink: '/settings', icon: 'build', line: 'none', hidden: true },
            ];
    };
    // localStorage
    AppComponent.prototype.setLocalStorage = function () {
        // check cookies for theme
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
        // localStorage - termFontSize
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
    // get a key/value object
    AppComponent.prototype.getObject = function (key) {
        return __awaiter(this, void 0, Promise, function () {
            var result, reason_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.storage.get(key)];
                    case 1:
                        result = _a.sent();
                        if (result != null) {
                            return [2 /*return*/, JSON.parse(result)];
                        }
                        return [2 /*return*/, null];
                    case 2:
                        reason_1 = _a.sent();
                        console.log(reason_1);
                        return [2 /*return*/, null];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    AppComponent.prototype.notifyMe = function () {
        //let notificationIcon = '../assets/icon/icon.png';
        var notificationBody = 'You just received some tokens';
        // Let's check if the browser supports notifications
        if (!("Notification" in window)) {
            alert("This browser does not support desktop notification");
        }
        // Let's check whether notification permissions have already been granted
        else if (Notification.permission === "granted") {
            // If it's okay let's create a notification
            var notification = new Notification("Minima", {
                //icon: notificationIcon,
                body: notificationBody
            });
        }
        // Otherwise, we need to ask the user for permission
        else if (Notification.permission !== "denied") {
            Notification.requestPermission().then(function (permission) {
                // If the user accepts, let's create a notification
                if (permission === "granted") {
                    var notification = new Notification("Minima", {
                        //icon: notificationIcon,
                        body: notificationBody
                    });
                }
            });
        }
        // At last, if the user has denied notifications, and you 
        // want to be respectful there is no need to bother them any more.
    };
    AppComponent.prototype.presentToast = function (txt, color) {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            header: txt,
                            duration: 3000,
                            color: color,
                            buttons: [{
                                    text: 'Close',
                                    role: 'cancel'
                                }]
                        })];
                    case 1:
                        toast = _a.sent();
                        return [4 /*yield*/, toast.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
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
