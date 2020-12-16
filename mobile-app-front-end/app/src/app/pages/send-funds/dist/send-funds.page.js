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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.SendFundsPage = void 0;
var core_1 = require("@angular/core");
var operators_1 = require("rxjs/operators");
var qr_scanner_1 = require("qr-scanner");
var SendFundsPage = /** @class */ (function () {
    function SendFundsPage(qrScanner, clipboard, alertController, toastController, zone, api, service, platform, route, router) {
        this.qrScanner = qrScanner;
        this.clipboard = clipboard;
        this.alertController = alertController;
        this.toastController = toastController;
        this.zone = zone;
        this.api = api;
        this.service = service;
        this.platform = platform;
        this.route = route;
        this.router = router;
        this.isCameraOpen = false;
        this.isWebCameraOpen = false;
        this.data = {};
        // checkboxValue
        this.messageEntry = { isChecked: false };
        // Token Array Type
        this.tokenArr = [];
        this.MINIMA_TOKEN_ID = '0x00';
        this.lastJSON = '';
        this.scanSub = null;
        this.data.message = '';
        this.pullInTokens();
    }
    SendFundsPage.prototype.ngOnInit = function () { };
    SendFundsPage.prototype.ionViewWillEnter = function () { this.isCameraOpen = false; };
    SendFundsPage.prototype.ionViewWillLeave = function () {
        this.balanceSubscription.unsubscribe(); // unsubscribe
        this.stopCamera();
    };
    // get token selected or set Minima as default
    SendFundsPage.prototype.getTokenSelected = function () {
        var _this = this;
        // check url snapshot
        var empty = undefined;
        var param = this.route.snapshot.params['id'];
        // check param
        if (param === empty || param === this.MINIMA_TOKEN_ID) {
            this.itemSelected = this.tokenArr[0];
            this.updateTokenId('0x00');
        }
        else if (param !== empty && param !== this.MINIMA_TOKEN_ID) {
            this.tokenArr.forEach(function (element) {
                if (param === element.tokenid) {
                    _this.itemSelected = element;
                    _this.updateTokenId(element.tokenid);
                }
            });
        }
    };
    // listen to selection change
    SendFundsPage.prototype.onItemSelection = function ($event) {
        var _this = this;
        var param = this.route.snapshot.params['id'];
        this.tokenArr.forEach(function (element) {
            if (_this.itemSelected === element && param !== element.tokenid) {
                _this.itemSelected = element;
                _this.router.navigate(['/send-funds', { id: element.tokenid }]);
                // update tokenid
                _this.updateTokenId(element.tokenid);
            }
        });
    };
    // fn to update tokenid
    SendFundsPage.prototype.updateTokenId = function (id) {
        this.data.tokenid = id;
    };
    SendFundsPage.prototype.fillAmount = function (type) {
        var _this = this;
        var empty = undefined;
        var param = this.route.snapshot.params['id'];
        if (param === empty) {
            param = '0x00';
        }
        this.tokenArr.forEach(function (element) {
            if (param === element.tokenid) {
                _this.max = element.sendable;
                if (type === 'max') {
                    _this.amount.value = _this.max;
                }
                else if (type === 'half') {
                    _this.amount.value = (parseFloat(_this.max) / 2.0).toString();
                }
                else if (type === 'quarter') {
                    _this.amount.value = (parseFloat(_this.max) / 4.0).toString();
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
                        console.log('Scanned failed', err);
                    });
                }
                else if (status.denied) {
                    // camera permission was permanently denied
                    // you must use QRScanner.openSettings() method to guide the user to the settings page
                    // then they can grant the permission from there
                    _this.presentAlert('Please check camera permission', 'Error');
                }
                else {
                    // permission was denied, but not permanently. You can ask for permission again at a later time.
                    _this.presentAlert('Please check camera permission', 'Error');
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
        if (this.platform.is['mobile']
            || this.platform.is['capacitor']
            || this.platform.is['cordova']
            || this.platform.is['mobileweb']
            || this.platform.is['iphone']
            || this.platform.is['ipad']
            || this.platform.is['hybrid']
            || this.platform.is['android']
            || this.platform.is['tablet']) {
            this.qrScanner.destroy();
        }
    };
    /** ALERTS */
    SendFundsPage.prototype.presentAlert = function (msg, hdr) {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: hdr,
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
    SendFundsPage.prototype.presentToast = function (msg, type) {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: msg,
                            duration: 4000,
                            buttons: [{
                                    text: 'Close',
                                    role: 'cancel'
                                }],
                            color: type,
                            keyboardClose: true,
                            translucent: true,
                            position: 'top'
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    // check if it's a token, or a Mini
    SendFundsPage.prototype.instanceOfToken = function (data) {
        return 'script' in data;
    };
    SendFundsPage.prototype.pullInTokens = function () {
        var _this = this;
        this.balanceSubscription = this.service.updatedBalance
            .pipe(operators_1.map(function (balance) {
            var tokenArr = [];
            for (var key in balance) {
                if (balance.hasOwnProperty(key)) {
                    if (_this.instanceOfToken(balance[key])) {
                        var element = balance[key];
                        tokenArr.push({
                            tokenid: element.tokenid,
                            token: element.token,
                            description: element.description,
                            icon: element.icon,
                            proof: element.proof,
                            total: element.total,
                            script: element.script,
                            coinid: element.coinid,
                            totalamount: element.totalamount,
                            scale: element.scale,
                            confirmed: element.confirmed,
                            unconfirmed: element.unconfirmed,
                            mempool: element.mempool,
                            sendable: element.sendable
                        });
                    }
                    else {
                        var element = balance[key];
                        // add Minima always to the top
                        tokenArr.pop(); // pop it
                        _this.service.update(tokenArr, {
                            tokenid: element.tokenid,
                            token: element.token,
                            total: element.total,
                            confirmed: element.confirmed,
                            unconfirmed: element.unconfirmed,
                            mempool: element.mempool,
                            sendable: element.sendable
                        });
                    }
                }
            }
            return tokenArr;
        }))
            .subscribe(function (responseData) {
            // check if changed
            if (_this.lastJSON !== JSON.stringify(responseData)) {
                _this.tokenArr = __spreadArrays(responseData);
                _this.lastJSON = JSON.stringify(responseData);
                // add tokens
                _this.getTokenSelected();
            }
        });
    };
    SendFundsPage.prototype.sendFunds = function () {
        var _this = this;
        if (this.data.address && this.data.address !== '' && this.data.amount && this.data.amount > 0 &&
            this.data.tokenid && this.data.tokenid !== '' && !this.data.message) {
            this.api.sendFunds(this.data).then(function (res) {
                if (res.status === true) {
                    // clear inputs
                    _this.address.value = '';
                    _this.amount.value = '';
                    // success
                    _this.presentToast('Success! Your transaction has been posted!', 'success');
                }
                else {
                    _this.presentToast('Insufficient funds.  Please check your balance.', 'danger');
                }
            });
        }
        else if (this.data.address && this.data.address !== '' && this.data.amount && this.data.amount > 0 &&
            this.data.tokenid && this.data.tokenid !== '' && this.data.message !== undefined && this.data.message.length >= 0) {
            this.api.createTXN(this.data).then(function (res) {
                if (res[5].status === true) {
                    // clear inputs
                    _this.address.value = '';
                    _this.amount.value = '';
                    _this.message.value = '';
                    // success
                    _this.presentToast('Success! Your transaction has been posted!', 'success');
                }
                else if (res[4].status === false) {
                    _this.presentToast('Insufficient funds.  Please check your balance.', 'danger');
                }
            });
        }
        else {
            this.presentAlert('Please check the input fields', 'Error');
        }
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
    // work around for weird ion-textarea height: 0 + auto-grow='true'
    SendFundsPage.prototype.checkTextarea = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, this.message.getInputElement().then(function (element) {
                        if (element.style.height == '0px') {
                            return element.style.height = 'auto';
                        }
                        else {
                            setTimeout(function () { return _this.checkTextarea(); }, 100);
                        }
                    })];
            });
        });
    };
    SendFundsPage.prototype.checkboxValue = function (ev, messageEntry) {
        this.checkTextarea();
        if (messageEntry === false) {
            this.data.message = undefined;
        }
    };
    // Display/hide mobile buttons with this..
    SendFundsPage.prototype.checkPlatform = function () {
        if (this.platform.is('desktop')) {
            return false;
        }
        else {
            return true;
        }
    };
    SendFundsPage.prototype.pasteFromClipboard = function () {
        var _this = this;
        if (this.platform.is('desktop')) {
            this.pasteFromPWA();
        }
        else {
            this.clipboard.paste().then(function (resolve) {
                _this.data.address = resolve;
            }, function (reject) {
                console.log('Error: ' + reject);
            });
        }
    };
    SendFundsPage.prototype.pasteFromPWA = function () {
        var _this = this;
        document.addEventListener('paste', function (e) {
            _this.data.address = e.clipboardData.getData('text');
            e.preventDefault();
            document.removeEventListener('paste', null);
        });
        document.execCommand('paste');
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
        core_1.ViewChild('address', { static: false })
    ], SendFundsPage.prototype, "address");
    __decorate([
        core_1.ViewChild('amount', { static: false })
    ], SendFundsPage.prototype, "amount");
    __decorate([
        core_1.ViewChild('message', { static: false })
    ], SendFundsPage.prototype, "message");
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
