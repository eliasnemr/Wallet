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
var minima_1 = require("minima");
var SendFundsPage = /** @class */ (function () {
    function SendFundsPage(formBuilder, clipboard, alertController, api, balanceService, route, router) {
        this.formBuilder = formBuilder;
        this.clipboard = clipboard;
        this.alertController = alertController;
        this.api = api;
        this.balanceService = balanceService;
        this.route = route;
        this.router = router;
        this.nftScript = 'ASSERT FLOOR ( @AMOUNT ) EQ @AMOUNT LET checkout = 0 WHILE ( checkout LT @TOTOUT )' +
            'DO IF GETOUTTOK ( checkout ) EQ @TOKENID THEN LET outamt = GETOUTAMT ( checkout ) ASSERT FLOOR ( outamt )' +
            'EQ outamt ENDIF LET checkout = INC ( checkout ) ENDWHILE RETURN TRUE';
        this.isWebCameraOpen = false;
        this.data = { tokenid: '', amount: '', address: '', message: '' };
        this.messageToggle = false;
        this.tokenArr = [];
        this.scanSub = null;
        this.pullInTokens();
    }
    SendFundsPage.prototype.ionViewWillEnter = function () {
        this.getTokenSelected();
    };
    SendFundsPage.prototype.ionViewWillLeave = function () {
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
            return this.sendForm.get('tokenid');
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
        console.log(data);
        if (data.message !== null && (data.message || data.message.length > 0)) {
            this.submitBtn.disabled = true;
            this.api.sendMessageTransaction(data).then(function (res) {
                if (minima_1.Minima.util.checkAllResponses(res)) {
                    console.log(res);
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
            this.data.message = '';
            this.submitBtn.disabled = true;
            this.api.sendFunds(data).then(function (res) {
                if (res.status) {
                    console.log(res);
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
    SendFundsPage.prototype.giveMe50 = function () {
        var _this = this;
        this.api.giveMe50().then(function (res) {
            if (res.status === true) {
                _this.presentAlert('Gimme50', 'Successful', 'Status');
            }
            else {
                _this.presentAlert('Gimme50', res.message, 'Status');
            }
        });
    };
    // listen to selection change
    SendFundsPage.prototype.onItemSelection = function (ev) {
        this.itemSelected = this.sendForm.get('tokenid').value;
    };
    SendFundsPage.prototype.fillAmount = function (type) {
        var _this = this;
        var param = this.sendForm.get('tokenid').value;
        this.amountInp.value = '';
        this.tokenArr.forEach(function (element) {
            if (param === element.tokenid || (param === element.tokenid && element.script !== _this.nftScript)) {
                var maxAmmo = element.sendable;
                if (type === 'max') {
                    _this.amountInp.value = maxAmmo;
                }
                else if (type === 'half') {
                    _this.amountInp.value = (parseFloat(maxAmmo) / 2.0).toString();
                }
                else if (type === 'quarter') {
                    _this.amountInp.value = (parseFloat(maxAmmo) / 4.0).toString();
                }
            }
            else if (element.script === _this.nftScript) {
                var maxAmmo = element.sendable;
                if (type === 'max') {
                    _this.amountInp.value = maxAmmo;
                }
                else if (type === 'half') {
                    _this.amountInp.value = Math.floor((parseFloat(maxAmmo) / 2.0)).toString();
                }
                else if (type === 'quarter') {
                    _this.amountInp.value = Math.floor((parseFloat(maxAmmo) / 4.0)).toString();
                }
            }
        });
    };
    SendFundsPage.prototype.scanQR = function () {
        this.isWebCameraOpen = true;
        console.log("Camera is now on: " + this.isWebCameraOpen);
        var stream = navigator.mediaDevices.getUserMedia({
            video: { facingMode: 'environment' }
        });
        this.videoElem.nativeElement.src = stream;
        this.videoElem.nativeElement.setAttribute('playsinline', true); // iOS - do not open fullscreen
        this.videoElem.nativeElement.play();
    };
    SendFundsPage.prototype.stopScanning = function () {
        this.isWebCameraOpen = false;
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
    SendFundsPage.prototype.useMessage = function () {
        if (this.messageToggle) {
            this.messageToggle = false;
        }
        else {
            this.messageToggle = true;
        }
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
