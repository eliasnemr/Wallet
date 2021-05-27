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
exports.CreateTokenPage = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var CreateTokenPage = /** @class */ (function () {
    function CreateTokenPage(menu, api, formBuilder, myTools) {
        this.menu = menu;
        this.api = api;
        this.formBuilder = formBuilder;
        this.myTools = myTools;
        this.status = '';
        this.isNft = false;
        this.loading = false;
        this.success = false;
        this.descrEntry = { isChecked: false };
        this.iconEntry = { isChecked: false };
        this.proofEntry = { isChecked: false };
        this.nft = { isNonFungible: false };
        this.creationStatus = 'Create Token';
        this.customToken = {
            name: '',
            amount: 0,
            icon: '',
            proof: '',
            script: '',
            description: ''
        };
        this.advancedFormInputsChecked = {
            description: false,
            icon: false,
            proof: false,
            nft: false
        };
    }
    CreateTokenPage.prototype.ionViewDidEnter = function () { };
    CreateTokenPage.prototype.ngOnInit = function () {
        this.formInit();
    };
    CreateTokenPage.prototype.openMenu = function () {
        this.menu.open();
    };
    CreateTokenPage.prototype.createTokenAdvanced = function () {
        this.creationStatus = '';
        this.loading = true;
        // console.log(this.tokenCreationForm.value);
        var newToken = this.tokenCreationForm.value;
        // console.log(newToken);
        try {
            this.create(newToken);
        }
        catch (err) {
            console.log(err);
        }
    };
    CreateTokenPage.prototype.create = function (newToken) {
        return __awaiter(this, void 0, void 0, function () {
            var res, res;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // console.log(newToken);
                        this.myTools.scrollToBottom(this.pageContent);
                        if (!newToken.nft) return [3 /*break*/, 2];
                        this.submitBtn.disabled = true;
                        return [4 /*yield*/, this.api.createToken(newToken)];
                    case 1:
                        res = _a.sent();
                        if (res.status) {
                            this.myTools.presentAlert('Success', 'Token ' +
                                this.customToken.name + ' has been created.', 'Token Creation Status');
                            this.creationStatus = 'Token created!';
                            this.resetForm();
                        }
                        else {
                            setTimeout(function () {
                                _this.creationStatus = 'Create Token';
                                _this.submitBtn.disabled = false;
                            }, 500);
                            this.creationStatus = 'Creation failed!';
                            this.myTools.presentAlert('Error', res.message, 'Token Creation Status');
                        }
                        return [3 /*break*/, 4];
                    case 2:
                        this.submitBtn.disabled = true;
                        return [4 /*yield*/, this.api.createToken(newToken)];
                    case 3:
                        res = _a.sent();
                        if (res.status) {
                            this.myTools.presentAlert('Success', 'Token ' +
                                this.customToken.name + ' has been created.', 'Token Creation Status');
                            this.creationStatus = 'Token created!';
                            this.resetForm();
                        }
                        else {
                            setTimeout(function () {
                                _this.creationStatus = 'Create Token';
                                _this.submitBtn.disabled = false;
                            }, 500);
                            this.myTools.presentAlert('Error', res.message, 'Token Creation Status');
                        }
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    CreateTokenPage.prototype.formInit = function () {
        this.tokenCreationForm = this.formBuilder.group({
            name: ['', [
                    forms_1.Validators.required,
                    forms_1.Validators.maxLength(255),
                ]],
            amount: ['', [
                    forms_1.Validators.required,
                    forms_1.Validators.maxLength(255),
                    forms_1.Validators.pattern('^[0-9]*$'),
                ]],
            description: '',
            script: '',
            icon: ['', [
                    forms_1.Validators.pattern('(http(s?):)([\\/|\\.|\\w|\\s|\\-])*\.(?:jpg|png|gif|svg)$'),
                    forms_1.Validators.maxLength(255),
                ]],
            proof: ['', [
                    forms_1.Validators.pattern('(http(s?):)([\\/|\\.|\\w|\\s|\\-])*\.(?:txt)$'),
                    forms_1.Validators.maxLength(255),
                ]],
            nft: false
        });
    };
    CreateTokenPage.prototype.resetForm = function () {
        var _this = this;
        setTimeout(function () {
            _this.creationStatus = 'Create Token';
        }, 2000);
        this.submitBtn.disabled = false;
        this.tokenCreationForm.reset();
        this.formInit();
    };
    Object.defineProperty(CreateTokenPage.prototype, "name", {
        get: function () {
            return this.tokenCreationForm.get('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CreateTokenPage.prototype, "descr", {
        get: function () {
            return this.tokenCreationForm.get('description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CreateTokenPage.prototype, "icon", {
        get: function () {
            return this.tokenCreationForm.get('icon');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CreateTokenPage.prototype, "proof", {
        get: function () {
            return this.tokenCreationForm.get('proof');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CreateTokenPage.prototype, "amount", {
        get: function () {
            return this.tokenCreationForm.get('amount');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CreateTokenPage.prototype, "myNft", {
        get: function () {
            return this.tokenCreationForm.get('nft');
        },
        enumerable: false,
        configurable: true
    });
    __decorate([
        core_1.ViewChild('submitBtn', { static: false })
    ], CreateTokenPage.prototype, "submitBtn");
    __decorate([
        core_1.ViewChild('pageContent', { static: false })
    ], CreateTokenPage.prototype, "pageContent");
    CreateTokenPage = __decorate([
        core_1.Component({
            selector: 'app-create-token',
            templateUrl: './create-token.page.html',
            styleUrls: ['./create-token.page.scss']
        })
    ], CreateTokenPage);
    return CreateTokenPage;
}());
exports.CreateTokenPage = CreateTokenPage;
