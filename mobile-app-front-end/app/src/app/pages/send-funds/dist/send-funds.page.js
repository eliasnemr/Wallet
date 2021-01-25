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
exports.SendFundsPage = void 0;
var forms_1 = require("@angular/forms");
var core_1 = require("@angular/core");
var qr_scanner_1 = require("qr-scanner");
var minima_1 = require("minima");
var SendFundsPage = /** @class */ (function () {
    function SendFundsPage(formBuilder, qrScanner, clipboard, alertController, zone, api, balanceService, platform, route, router) {
        this.formBuilder = formBuilder;
        this.qrScanner = qrScanner;
        this.clipboard = clipboard;
        this.alertController = alertController;
        this.zone = zone;
        this.api = api;
        this.balanceService = balanceService;
        this.platform = platform;
        this.route = route;
        this.router = router;
        this.nftScript = 'ASSERT FLOOR ( @AMOUNT ) EQ @AMOUNT LET checkout = 0 WHILE ( checkout LT @TOTOUT ) DO IF GETOUTTOK ( checkout ) EQ @TOKENID THEN LET outamt = GETOUTAMT ( checkout ) ASSERT FLOOR ( outamt ) EQ outamt ENDIF LET checkout = INC ( checkout ) ENDWHILE RETURN TRUE';
        this.isCameraOpen = false;
        this.isWebCameraOpen = false;
        this.data = { tokenid: '', amount: '', address: '', message: '' };
        this.messageToggle = false;
        this.tokenArr = [];
        this.scanSub = null;
        this.pullInTokens();
    }
    SendFundsPage.prototype.ionViewWillEnter = function () {
        this.isCameraOpen = false;
        this.getTokenSelected();
    };
    SendFundsPage.prototype.ionViewWillLeave = function () {
        this.stopCamera();
    };
    SendFundsPage.prototype.ngOnInit = function () {
        this.sendForm = this.formBuilder.group({
            tokenid: '',
            address: ['', [
                    forms_1.Validators.required,
                    forms_1.Validators.minLength(2),
                    forms_1.Validators.maxLength(60),
                    forms_1.Validators.pattern('[Mx|0x][a-zA-Z0-9]+')
                ]],
            amount: ['', [forms_1.Validators.required]],
            message: ''
        });
    };
    Object.defineProperty(SendFundsPage.prototype, "tokenFormItem", {
        get: function () {
            return this.sendForm.get('token');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SendFundsPage.prototype, "addressFormItem", {
        get: function () {
            return this.sendForm.get('address');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SendFundsPage.prototype, "amountFormItem", {
        get: function () {
            return this.sendForm.get('amount');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SendFundsPage.prototype, "messageFormItem", {
        get: function () {
            return this.sendForm.get('message');
        },
        enumerable: false,
        configurable: true
    });
    SendFundsPage.prototype.pullInTokens = function () {
        var _this = this;
        this.balanceService.data.subscribe(function (balance) {
            _this.tokenArr = balance;
        });
    };
    SendFundsPage.prototype.sendFunds = function () {
        var _this = this;
        this.sendForm.value.amnt = this.sendForm.value.amount.toString();
        var data = this.sendForm.value;
        if (data.message !== null && (data.message || data.message.length > 0)) {
            this.submitBtn.disabled = true;
            this.api.createTXN(data).then(function (res) {
                if (minima_1.Minima.util.checkAllResponses(res)) {
                    setTimeout(function () {
                        _this.submitBtn.disabled = false;
                    }, 500);
                    _this.presentAlert('Transaction Status', 'Transaction has been posted to the network!', 'Successful');
                    _this.sendForm.reset();
                }
                else {
                    setTimeout(function () {
                        _this.submitBtn.disabled = false;
                    }, 500);
                    _this.presentAlert('Transaction Status', res.message, 'Failed');
                }
            });
        }
        else {
            this.submitBtn.disabled = true;
            this.api.sendFunds(data).then(function (res) {
                if (res.status) {
                    setTimeout(function () {
                        _this.submitBtn.disabled = false;
                    }, 500);
                    _this.presentAlert('Transaction Status', 'Transaction has been posted to the network!', 'Successful');
                    _this.sendForm.reset();
                }
                else {
                    setTimeout(function () {
                        _this.submitBtn.disabled = false;
                    }, 500);
                    _this.presentAlert('Transaction Status', res.message, 'Failed');
                }
            });
        }
    };
    // get token selected or set Minima as default
    SendFundsPage.prototype.getTokenSelected = function () {
        var _this = this;
        this.route.queryParamMap.subscribe(function (res) {
            _this.itemSelected = res.params.id;
            if (!res.params.id) {
                _this.itemSelected = '0x00';
            }
        });
    };
    // listen to selection change
    SendFundsPage.prototype.onItemSelection = function (ev) {
        this.itemSelected = ev.detail.value;
    };
    SendFundsPage.prototype.fillAmount = function (type) {
        var _this = this;
        var param = this.sendForm.get('tokenid').value;
        this.tokenArr.forEach(function (element) {
            if (param === element.tokenid && element.script !== _this.nftScript) {
                _this.max = element.sendable;
                if (type === 'max') {
                    _this.amountInp.value = _this.max;
                }
                else if (type === 'half') {
                    _this.amountInp.value = (parseFloat(_this.max) / 2.0).toString();
                }
                else if (type === 'quarter') {
                    _this.amountInp.value = (parseFloat(_this.max) / 4.0).toString();
                }
            }
            else if (element.script === _this.nftScript) {
                _this.max = element.sendable;
                if (type === 'max') {
                    _this.amountInp.value = _this.max;
                }
                else if (type === 'half') {
                    _this.amountInp.value = Math.floor((parseFloat(_this.max) / 2.0)).toString();
                }
                else if (type === 'quarter') {
                    _this.amountInp.value = Math.floor((parseFloat(_this.max) / 4.0)).toString();
                }
            }
        });
    };
    /** ScanQR: Native */
    SendFundsPage.prototype.scanQR = function () {
        var _this = this;
        if (this.platform.is('ios') || this.platform.is('android')) {
            this.qrScanner.prepare()
                .then(function (status) {
                if (status.authorized) {
                    // Which class adding should I use?
                    _this.identifyPlatformToScan_Add();
                    _this.qrScanner.show();
                    _this.isCameraOpen = true;
                    _this.scanSub = _this.qrScanner.scan().subscribe(function (text) {
                        _this.zone.run(function () {
                            _this.data.address = text;
                            _this.stopCamera();
                            _this.identifyPlatformToScan_Remove();
                            _this.isCameraOpen = false;
                        });
                    }, function (err) {
                        //console.log('Scanned failed', err);
                    });
                }
                else if (status.denied) {
                    // camera permission was permanently denied
                    // you must use QRScanner.openSettings() method to guide the user to the settings page
                    // then they can grant the permission from there
                    _this.presentAlert('Error', 'Please check camera permission', 'Camera status');
                }
                else {
                    // permission was denied, but not permanently. You can ask for permission again at a later time.
                    _this.presentAlert('Error', 'Please check camera permission', 'Camera status');
                }
            })["catch"](function (e) { return console.log('Error is', e); });
        }
    };
    SendFundsPage.prototype.stopCamera = function () {
        if (this.scanSub !== null) {
            this.qrScanner.hide();
            this.scanSub.unsubscribe();
        }
        this.scanSub = null;
        this.identifyPlatformToScan_Remove();
        this.isCameraOpen = false;
        this.qrScanner.destroy();
    };
    SendFundsPage.prototype.presentAlert = function (hdr, msg, sub) {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            cssClass: 'alert',
                            header: hdr,
                            subHeader: sub,
                            message: msg,
                            buttons: ['OK']
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /** MISC FUNCS */
    SendFundsPage.prototype.identifyPlatformToScan_Add = function () {
        document.addEventListener('DOMContentLoaded', function (event) {
            // Do work
            if (this.platform.is('ios')) {
                setTimeout(function () {
                    window.document.querySelectorAll('ion-content')
                        .forEach(function (element) {
                        var element1 = element.shadowRoot.querySelector('style');
                        element1.innerHTML = element1.innerHTML
                            .replace('--background:var(--ion-background-color,#fff);', '--background: transparent');
                    });
                }, 300);
            }
            else if (this.platform.is('android')) {
                // window.document.querySelector('ion-content').classList.add('transparentBody');
                setTimeout(function () {
                    window.document.querySelectorAll('ion-content')
                        .forEach(function (element) {
                        var element1 = element.shadowRoot.querySelector('style');
                        element1.innerHTML = element1.innerHTML
                            .replace('--background:var(--ion-background-color,#fff);', '--background: transparent');
                    });
                }, 300);
            }
        });
    };
    SendFundsPage.prototype.identifyPlatformToScan_Remove = function () {
        document.addEventListener('DOMContentLoaded', function (event) {
            if (this.platform.is('ios')) {
                setTimeout(function () {
                    window.document.querySelectorAll('ion-content')
                        .forEach(function (element) {
                        var element1 = element.shadowRoot.querySelector('style');
                        element1.innerHTML = element1.innerHTML
                            .replace('--background: transparent', '--background:var(--ion-background-color,#fff);');
                    });
                }, 300);
            }
            else if (this.platform.is('android')) {
                // window.document.querySelector('ion-content').classList.remove('transparentBody');
                setTimeout(function () {
                    window.document.querySelectorAll('ion-content')
                        .forEach(function (element) {
                        var element1 = element.shadowRoot.querySelector('style');
                        element1.innerHTML = element1.innerHTML
                            .replace('--background: transparent', '--background:var(--ion-background-color,#fff);');
                    });
                }, 300);
            }
        });
    };
    SendFundsPage.prototype.useMessage = function () {
        if (this.messageToggle) {
            this.messageToggle = false;
        }
        else {
            this.messageToggle = true;
        }
    };
    SendFundsPage.prototype.checkPlatform = function () {
        if (this.platform.is('desktop')) {
            return false;
        }
        else {
            return true;
        }
    };
    SendFundsPage.prototype.webScanQR = function () {
        var _this = this;
        this.isWebCameraOpen = true;
        qr_scanner_1["default"].WORKER_PATH = 'assets/JS/qr-scanner-worker.min.js';
        setTimeout(function () {
            _this.webQrScanner = new qr_scanner_1["default"](_this.videoElem.nativeElement, function (result) {
                _this.data.address = result;
                _this.isWebCameraOpen = false;
            });
            _this.webQrScanner.start();
        }, 500);
    };
    SendFundsPage.prototype.stopWebScanQR = function () {
        this.webQrScanner.destroy();
        this.webQrScanner = null;
        this.isWebCameraOpen = false;
    };
    __decorate([
        core_1.ViewChild('submitBtn', { static: false })
    ], SendFundsPage.prototype, "submitBtn");
    __decorate([
        core_1.ViewChild('amount', { static: false })
    ], SendFundsPage.prototype, "amountInp");
    __decorate([
        core_1.ViewChild('videoElem', { static: false })
    ], SendFundsPage.prototype, "videoElem");
    SendFundsPage = __decorate([
        core_1.Component({
            selector: 'app-send-funds',
            templateUrl: './send-funds.page.html',
            styleUrls: ['./send-funds.page.scss']
        })
    ], SendFundsPage);
    return SendFundsPage;
}());
exports.SendFundsPage = SendFundsPage;
