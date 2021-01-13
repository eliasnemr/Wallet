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
exports.MiniTermPage = void 0;
var pop_term_component_1 = require("../../components/pop-term/pop-term.component");
var core_1 = require("@angular/core");
var angular_1 = require("@ionic/angular");
var environment_1 = require("../../../environments/environment");
var minima_1 = require("minima");
var MiniTermPage = /** @class */ (function () {
    function MiniTermPage(loadingController, navCtrl, renderer, popoverController, userTerminal) {
        this.loadingController = loadingController;
        this.navCtrl = navCtrl;
        this.renderer = renderer;
        this.popoverController = popoverController;
        this.userTerminal = userTerminal;
        this.host = '';
        this.lastLine = '';
        this.loader = null;
        // Disable up and down keys.
        window.addEventListener('keydown', function (e) {
            if ([37, 38, 39, 40].indexOf(e.keyCode) > -1) {
                e.preventDefault();
            }
        }, false);
    }
    MiniTermPage.prototype.ngOnInit = function () {
        var _this = this;
        var mStr = parseInt(localStorage.getItem('termFontSize'), 10);
        this.size = mStr;
        // Stored subscription that watches if we activated button on PopTerm
        this.fontSubscription =
            this.userTerminal.fontSizeEmitter.subscribe(function (didActivate) {
                if (_this.size !== didActivate) {
                    if (_this.size > 0 && _this.size <= 50) {
                        _this.size += didActivate;
                        localStorage.setItem('termFontSize', '' + _this.size);
                    }
                    else {
                        _this.size = 14;
                        localStorage.setItem('termFontSize', '' + _this.size);
                    }
                }
            });
    };
    MiniTermPage.prototype.ionViewWillEnter = function () { };
    MiniTermPage.prototype.ionViewWillLeave = function () {
        localStorage.setItem('termFontSize', '' + this.size);
        this.fontSubscription.unsubscribe();
    };
    MiniTermPage.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.terminal.nativeElement.value += '**********************************************\n';
        this.terminal.nativeElement.value += '*  __  __  ____  _  _  ____  __  __    __    *\n';
        this.terminal.nativeElement.value += '* (  \\/  )(_  _)( \\( )(_  _)(  \\/  )  /__\\   *\n';
        this.terminal.nativeElement.value += '*  )    (  _)(_  )  (  _)(_  )    (  /(__)\\  *\n';
        this.terminal.nativeElement.value += '* (_/\\/\\_)(____)(_)\\_)(____)(_/\\/\\_)(__)(__) *\n';
        this.terminal.nativeElement.value += '*                                            *\n';
        this.terminal.nativeElement.value += '**********************************************\n';
        this.terminal.nativeElement.value += 'Welcome to Minima. For assistance type help. Then press enter.\n';
        this.globalInstance = this.renderer.listen(this.terminal.nativeElement, 'keydown', function (e) {
            if ([13].indexOf(e.keyCode) > -1) {
                // get the whole textarea text..
                var msg = _this.terminal.nativeElement.value;
                // get the last line...
                _this.lastLine = msg.substr(msg.lastIndexOf('\n') + 1);
                if (_this.lastLine.length > 1) {
                    // get the json call
                    _this.request(_this.lastLine);
                }
            }
        });
    };
    // PopTerm Editing methods
    MiniTermPage.prototype.getFontSize = function () {
        return this.size + 'px';
    };
    // end of PopTerm Editing methods
    MiniTermPage.prototype.scrollToBottomOnInit = function () {
        var _this = this;
        // scroll
        setTimeout(function () {
            _this.ionContent.scrollToBottom(300);
        }, 200);
    };
    // Minima Api Service
    MiniTermPage.prototype.getHost = function () {
        if (localStorage.getItem('minima_host') == null) {
            localStorage.setItem('minima_host', this.host);
            return this.host;
        }
        else {
            return localStorage.getItem('minima_host');
        }
    };
    // api calls
    MiniTermPage.prototype.request = function (route) {
        var _this = this;
        if (route === 'printchain') {
            return new Promise(function (resolve) {
                minima_1.Minima.cmd('printchain', function (res) {
                    var regex = res.replace(environment_1.environment.newLine, '\\n'); // replace \n with <br/> has all 3 \n|\r|\r\n
                    _this.terminal.nativeElement.value += regex;
                    _this.terminal.nativeElement.scrollTop = _this.terminal.nativeElement.scrollHeight;
                    resolve(res);
                });
            });
        }
        else if (route === 'tutorial' || route === 'Tutorial') {
            return new Promise(function (resolve, reject) {
                minima_1.Minima.cmd('tutorial', function (res) {
                    var regex = JSON.stringify(res, undefined, 2).replace('\\\\n', '\n');
                    _this.terminal.nativeElement.value += regex;
                    _this.terminal.nativeElement.scrollTop = _this.terminal.nativeElement.scrollHeight;
                    resolve(res);
                });
            });
        }
        else {
            return new Promise(function (resolve, reject) {
                minima_1.Minima.cmd(route, function (res) {
                    _this.terminal.nativeElement.value += JSON.stringify(res, undefined, 2) + '\n';
                    _this.terminal.nativeElement.scrollTop = _this.terminal.nativeElement.scrollHeight;
                    resolve(res);
                });
            });
        }
    };
    MiniTermPage.prototype.showLoader = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!(this.loader == null)) return [3 /*break*/, 2];
                        _a = this;
                        return [4 /*yield*/, this.loadingController.create({
                                message: 'Loading'
                            })];
                    case 1:
                        _a.loader = _b.sent();
                        this.loader.present();
                        _b.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    MiniTermPage.prototype.hideLoader = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.loader !== null)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.loader.dismiss()];
                    case 1:
                        _a.sent();
                        this.loader = null;
                        return [3 /*break*/, 2];
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    MiniTermPage.prototype.presentPopover = function (ev) {
        return __awaiter(this, void 0, void 0, function () {
            var popover;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverController.create({
                            component: pop_term_component_1.PopTermComponent,
                            cssClass: 'terminal-pop',
                            event: ev,
                            translucent: false
                        })];
                    case 1:
                        popover = _a.sent();
                        return [4 /*yield*/, popover.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    __decorate([
        core_1.ViewChild(angular_1.IonContent, { static: false })
    ], MiniTermPage.prototype, "ionContent");
    __decorate([
        core_1.ViewChild('terminal', { static: false })
    ], MiniTermPage.prototype, "terminal");
    MiniTermPage = __decorate([
        core_1.Component({
            selector: 'app-mini-term',
            templateUrl: './mini-term.page.html',
            styleUrls: ['./mini-term.page.scss']
        })
    ], MiniTermPage);
    return MiniTermPage;
}());
exports.MiniTermPage = MiniTermPage;
