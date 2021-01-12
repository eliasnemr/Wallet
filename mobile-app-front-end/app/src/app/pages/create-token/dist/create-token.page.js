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
var CreateTokenPage = /** @class */ (function () {
    function CreateTokenPage(api, animationCtrl, alertController, toastController) {
        this.api = api;
        this.animationCtrl = animationCtrl;
        this.alertController = alertController;
        this.toastController = toastController;
        this.advancedFormInputsChecked = { description: false, icon: false, proof: false, nft: false };
        this.basic = false;
        this.advanced = false;
        this.isPlaying = false;
        this.customToken = { name: '', amount: 0, description: '', script: '', icon: '', proof: '' };
        this.descrEntry = {
            isChecked: false
        };
        this.iconEntry = {
            isChecked: false
        };
        this.proofEntry = {
            isChecked: false
        };
        this.nft = {
            isNonFungible: false
        };
    }
    CreateTokenPage.prototype.ngAfterViewInit = function () {
        this.anim = this.animationCtrl.create('cardAnimation');
        this.animAdvanced = this.animationCtrl.create('advancedCardAnimation');
        this.animSecond = this.animationCtrl.create('cardAnimationSec');
        this.animAdvancedSecond = this.animationCtrl.create('advancedCardAnimationTwo');
        this.formAnim = this.animationCtrl.create('formAnimation');
        this.anim
            .addElement(document.getElementById('basicCard'))
            .duration(1000)
            .easing('ease-out')
            .iterations(1)
            .fromTo('transform', 'translateY(0px)', 'translateY(-25px)')
            .fromTo('opacity', 1, 0.2);
        this.animAdvanced
            .addElement(document.getElementById('advancedCard'))
            .duration(1000)
            .easing('ease-out')
            .iterations(1)
            .fromTo('transform', 'translateX(0px)', 'translateX(50px)')
            .fromTo('opacity', 1, 0.2);
        this.animSecond
            .addElement(document.getElementById('basicCard'))
            .duration(1000)
            .easing('ease-out')
            .iterations(1)
            .fromTo('transform', 'translateX(0px)', 'translateX(50px)')
            .fromTo('opacity', 1, 0.2);
        this.animAdvancedSecond
            .addElement(document.getElementById('advancedCard'))
            .duration(1000)
            .easing('ease-out')
            .iterations(1)
            .fromTo('transform', 'translateY(0px)', 'translateY(50px)')
            .fromTo('opacity', 1, 0.2);
    };
    CreateTokenPage.prototype.toggleAnimation = function () {
        if (this.isPlaying) {
            this.anim.stop();
            this.animAdvanced.stop();
        }
        else {
            this.anim.play();
            this.animAdvanced.play();
            setTimeout(function () {
                document.getElementById('basicCard').style.display = 'none';
                document.getElementById('advancedCard').style.display = 'none';
            }, 500);
            document.getElementById('cardHeader').innerHTML = 'Fill Out Your Token Details';
            document.getElementById('footer').style.display = 'block';
            document.getElementById('my-form').hidden = false;
            document.getElementById('createTknBtn2').style.display = 'block';
        }
        this.isPlaying = !this.isPlaying;
    };
    CreateTokenPage.prototype.toggleAdvAnimation = function () {
        if (this.isPlaying) {
            this.animSecond.stop();
            this.animAdvancedSecond.stop();
        }
        else {
            this.animSecond.play();
            this.animAdvancedSecond.play();
            setTimeout(function () {
                document.getElementById('basicCard').style.display = 'none';
                document.getElementById('advancedCard').style.display = 'none';
            }, 500);
            document.getElementById('cardHeader').innerHTML = 'Fill Out Your Token Details';
            document.getElementById('footer').style.display = 'block';
            document.getElementById('my-form').hidden = false;
            document.getElementById('createTknBtn2').style.display = 'block';
        }
        this.isPlaying = !this.isPlaying;
    };
    CreateTokenPage.prototype.ionViewDidEnter = function () { };
    CreateTokenPage.prototype.ngOnInit = function () { };
    CreateTokenPage.prototype.isChecked = function (ev) {
        if (ev.detail.checked) {
            if (ev.target.id === 'description') {
                this.advancedFormInputsChecked.description = true;
            }
            else if (ev.target.id === 'icon') {
                this.advancedFormInputsChecked.icon = true;
            }
            else if (ev.target.id === 'proof') {
                this.advancedFormInputsChecked.proof = true;
            }
            else if (ev.target.id === 'nft') {
                this.advancedFormInputsChecked.nft = true;
            }
        }
        else if (!ev.detail.checked) {
            if (ev.target.id === 'description') {
                this.advancedFormInputsChecked.description = false;
            }
            else if (ev.target.id === 'icon') {
                this.advancedFormInputsChecked.icon = false;
            }
            else if (ev.target.id === 'proof') {
                this.advancedFormInputsChecked.proof = false;
            }
            else if (ev.target.id === 'nft') {
                this.advancedFormInputsChecked.nft = false;
            }
        }
    };
    CreateTokenPage.prototype.presentToast = function (msg, type) {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: msg,
                            duration: 4000,
                            color: type,
                            buttons: [{
                                    text: 'Close',
                                    role: 'cancel'
                                }],
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
    CreateTokenPage.prototype.presentAlert = function (hdr, message, subtitle) {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            cssClass: 'alertContainer',
                            header: hdr,
                            subHeader: subtitle,
                            message: message,
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
    CreateTokenPage.prototype.createTokenAdvanced = function (f) {
        var _this = this;
        if (f.value.name && f.value.name.length > 0 && f.value.amount && f.value.amount > 0) {
            this.customToken.name = f.value.name;
            this.customToken.amount = f.value.amount;
            // Optional Values 
            if (f.value.description && f.value.description.length > 0) {
                this.customToken.description = f.value.description;
            }
            if (f.value.checkboxproof === false) {
                this.customToken.proof = "";
            }
            else {
                this.customToken.proof = f.value.proof;
            }
            if (f.checkboxicon === false || f.value.icon === "" || f.value.icon.length <= 0) {
                this.customToken.icon = "";
            }
            else {
                this.customToken.icon = f.value.icon;
            }
            if (f.value.NFT === false) {
                console.log('NFT False');
                this.customToken.script = "RETURN TRUE";
            }
            else if (f.value.NFT === true) {
                console.log('NFT False');
                this.customToken.script = "ASSERT FLOOR ( @AMOUNT ) EQ @AMOUNT LET checkout = 0 WHILE ( checkout LT @TOTOUT ) DO IF GETOUTTOK ( checkout ) EQ @TOKENID THEN LET outamt = GETOUTAMT ( checkout ) ASSERT FLOOR ( outamt ) EQ outamt ENDIF LET checkout = INC ( checkout ) ENDWHILE RETURN TRUE";
            }
            this.api.createToken(this.customToken).then(function (res) {
                if (res.status === true) {
                    _this.presentAlert('Success', 'Token ' + _this.customToken.name + ' has been created.', 'Token Creation Status');
                    _this.resetForm();
                }
                else {
                    _this.presentAlert('Error', 'Something went wrong.', 'Token Creation Status');
                }
            });
        }
        else {
            this.presentToast('There is an error with your inputs.', 'danger');
        }
    };
    CreateTokenPage.prototype.resetForm = function () {
        this.nameText.value = '';
        this.amountRef.value = '';
        this.proofURL.value = '';
        this.iconURL.value = '';
        this.description.value = '';
        this.iconEntry.isChecked = false;
        this.proofEntry.isChecked = false;
        this.nft.isNonFungible = false;
    };
    __decorate([
        core_1.ViewChild('f', { static: false })
    ], CreateTokenPage.prototype, "tokenForm");
    __decorate([
        core_1.ViewChild('nameTextArea', { static: false })
    ], CreateTokenPage.prototype, "nameText");
    __decorate([
        core_1.ViewChild('amountRef', { static: false })
    ], CreateTokenPage.prototype, "amountRef");
    __decorate([
        core_1.ViewChild('proofURL', { static: false })
    ], CreateTokenPage.prototype, "proofURL");
    __decorate([
        core_1.ViewChild('iconURL', { static: false })
    ], CreateTokenPage.prototype, "iconURL");
    __decorate([
        core_1.ViewChild('description', { static: false })
    ], CreateTokenPage.prototype, "description");
    __decorate([
        core_1.ViewChild('createTknBtn', { static: false })
    ], CreateTokenPage.prototype, "createTknBtn");
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
