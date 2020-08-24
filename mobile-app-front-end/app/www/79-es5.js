(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[79],{

/***/ "./node_modules/web-social-share/dist/esm-es5/web-social-share.entry.js":
/*!******************************************************************************!*\
  !*** ./node_modules/web-social-share/dist/esm-es5/web-social-share.entry.js ***!
  \******************************************************************************/
/*! exports provided: web_social_share */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "web_social_share", function() { return WebSocialShare; });
/* harmony import */ var _index_bef2383e_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-bef2383e.js */ "./node_modules/web-social-share/dist/esm-es5/index-bef2383e.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
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

/**
 * Source: https://github.com/720kb/angular-socialshare/blob/master/dist/angular-socialshare.js
 */
var WebSocialShareFacebook = /** @class */ (function () {
    function WebSocialShareFacebook() {
    }
    WebSocialShareFacebook.share = function (attrs) {
        return __awaiter(this, void 0, void 0, function () {
            var urlString;
            return __generator(this, function (_a) {
                if (attrs.socialShareType && attrs.socialShareType === 'feed') {
                    // if user specifies that they want to use the Facebook feed dialog
                    //(https://developers.facebook.com/docs/sharing/reference/feed-dialog/v2.4)
                    urlString = 'https://www.facebook.com/dialog/feed?';
                    if (attrs.socialShareVia) {
                        urlString += '&app_id=' + encodeURIComponent(attrs.socialShareVia);
                    }
                    if (attrs.socialShareRedirectUri) {
                        urlString += '&redirect_uri=' + encodeURIComponent(attrs.socialShareRedirectUri);
                    }
                    if (attrs.socialShareUrl) {
                        urlString += '&link=' + encodeURIComponent(attrs.socialShareUrl);
                    }
                    if (attrs.socialShareTo) {
                        urlString += '&to=' + encodeURIComponent(attrs.socialShareTo);
                    }
                    if (attrs.socialShareDisplay) {
                        urlString += '&display=' + encodeURIComponent(attrs.socialShareDisplay);
                    }
                    if (attrs.socialShareRef) {
                        urlString += '&ref=' + encodeURIComponent(attrs.socialShareRef);
                    }
                    if (attrs.socialShareFrom) {
                        urlString += '&from=' + encodeURIComponent(attrs.socialShareFrom);
                    }
                    if (attrs.socialShareSource) {
                        urlString += '&source=' + encodeURIComponent(attrs.socialShareSource);
                    }
                    window.open(urlString, 'Facebook', 'toolbar=0,status=0,resizable=yes,width=' + attrs.socialSharePopupWidth + ',height=' + attrs.socialSharePopupHeight
                        + ',top=' + (window.innerHeight - attrs.socialSharePopupHeight) / 2 + ',left=' + (window.innerWidth - attrs.socialSharePopupWidth) / 2);
                }
                else if (attrs.socialShareType && attrs.socialShareType === 'share') {
                    // if user specifies that they want to use the Facebook share dialog
                    //(https://developers.facebook.com/docs/sharing/reference/share-dialog)
                    urlString = 'https://www.facebook.com/dialog/share?';
                    if (attrs.socialShareVia) {
                        urlString += '&app_id=' + encodeURIComponent(attrs.socialShareVia);
                    }
                    if (attrs.socialShareRedirectUri) {
                        urlString += '&redirect_uri=' + encodeURIComponent(attrs.socialShareRedirectUri);
                    }
                    if (attrs.socialShareUrl) {
                        urlString += '&href=' + encodeURIComponent(attrs.socialShareUrl);
                    }
                    if (attrs.socialShareQuote) {
                        urlString += '&quote=' + encodeURIComponent(attrs.socialShareQuote);
                    }
                    if (attrs.socialShareDisplay) {
                        urlString += '&display=' + encodeURIComponent(attrs.socialShareDisplay);
                    }
                    if (attrs.socialShareMobileiframe) {
                        urlString += '&mobile_iframe=' + encodeURIComponent(attrs.socialShareMobileiframe);
                    }
                    if (attrs.socialShareHashtags) {
                        urlString += '&hashtag=' + encodeURIComponent(attrs.socialShareHashtags);
                    }
                    window.open(urlString, 'Facebook', 'toolbar=0,status=0,resizable=yes,width=' + attrs.socialSharePopupWidth + ',height=' + attrs.socialSharePopupHeight
                        + ',top=' + (window.innerHeight - attrs.socialSharePopupHeight) / 2 + ',left=' + (window.innerWidth - attrs.socialSharePopupWidth) / 2);
                }
                else if (attrs.socialShareType && attrs.socialShareType === 'send') {
                    // if user specifies that they want to use the Facebook send dialog
                    //(https://developers.facebook.com/docs/sharing/reference/send-dialog)
                    urlString = 'https://www.facebook.com/dialog/send?';
                    if (attrs.socialShareVia) {
                        urlString += '&app_id=' + encodeURIComponent(attrs.socialShareVia);
                    }
                    if (attrs.socialShareRedirectUri) {
                        urlString += '&redirect_uri=' + encodeURIComponent(attrs.socialShareRedirectUri);
                    }
                    if (attrs.socialShareUrl) {
                        urlString += '&link=' + encodeURIComponent(attrs.socialShareUrl);
                    }
                    if (attrs.socialShareTo) {
                        urlString += '&to=' + encodeURIComponent(attrs.socialShareTo);
                    }
                    if (attrs.socialShareDisplay) {
                        urlString += '&display=' + encodeURIComponent(attrs.socialShareDisplay);
                    }
                    window.open(urlString, 'Facebook', 'toolbar=0,status=0,resizable=yes,width=' + attrs.socialSharePopupWidth + ',height=' + attrs.socialSharePopupHeight
                        + ',top=' + (window.innerHeight - attrs.socialSharePopupHeight) / 2 + ',left=' + (window.innerWidth - attrs.socialSharePopupWidth) / 2);
                }
                else {
                    //otherwise default to using sharer.php
                    window.open('https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(attrs.socialShareUrl || window.location.href), 'Facebook', 'toolbar=0,status=0,resizable=yes,width=' + attrs.socialSharePopupWidth + ',height=' + attrs.socialSharePopupHeight
                        + ',top=' + (window.innerHeight - attrs.socialSharePopupHeight) / 2 + ',left=' + (window.innerWidth - attrs.socialSharePopupWidth) / 2);
                }
                return [2 /*return*/];
            });
        });
    };
    return WebSocialShareFacebook;
}());
var WebSocialShareUtils = /** @class */ (function () {
    function WebSocialShareUtils() {
    }
    // Source: http://detectmobilebrowsers.com
    // Same implementation as in class DeckdeckgoUtils
    WebSocialShareUtils.isMobile = function () {
        if (!window) {
            return false;
        }
        var a = navigator.userAgent || navigator.vendor || window.opera;
        return (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4)));
    };
    WebSocialShareUtils.staticOpenNewWindow = function (urlString) {
        if (window.self !== window.top) {
            window.open(urlString, '_blank');
        }
        else {
            window.open(urlString, '_self');
        }
    };
    return WebSocialShareUtils;
}());
var WebSocialShareTwitter = /** @class */ (function () {
    function WebSocialShareTwitter() {
    }
    WebSocialShareTwitter.share = function (attrs) {
        return __awaiter(this, void 0, void 0, function () {
            var urlString;
            return __generator(this, function (_a) {
                urlString = 'https://www.twitter.com/intent/tweet?';
                if (attrs.socialShareText) {
                    urlString += 'text=' + encodeURIComponent(attrs.socialShareText);
                }
                if (attrs.socialShareVia) {
                    urlString += '&via=' + encodeURIComponent(attrs.socialShareVia);
                }
                if (attrs.socialShareHashtags) {
                    urlString += '&hashtags=' + encodeURIComponent(attrs.socialShareHashtags);
                }
                //default to the current page if a URL isn't specified
                urlString += '&url=' + encodeURIComponent(attrs.socialShareUrl || window.location.href);
                if (WebSocialShareUtils.isMobile()) {
                    WebSocialShareUtils.staticOpenNewWindow(urlString);
                }
                else {
                    window.open(urlString, 'Twitter', 'toolbar=0,status=0,resizable=yes,width=' + attrs.socialSharePopupWidth + ',height=' + attrs.socialSharePopupHeight
                        + ',top=' + (window.innerHeight - attrs.socialSharePopupHeight) / 2 + ',left=' + (window.innerWidth - attrs.socialSharePopupWidth) / 2);
                }
                return [2 /*return*/];
            });
        });
    };
    return WebSocialShareTwitter;
}());
var WebSocialShareEmail = /** @class */ (function () {
    function WebSocialShareEmail() {
    }
    WebSocialShareEmail.share = function (attrs) {
        return __awaiter(this, void 0, void 0, function () {
            var urlString;
            return __generator(this, function (_a) {
                urlString = 'mailto:';
                if (attrs.socialShareTo) {
                    urlString += encodeURIComponent(attrs.socialShareTo);
                }
                urlString += '?';
                if (attrs.socialShareBody) {
                    urlString += 'body=' + encodeURIComponent(attrs.socialShareBody);
                }
                if (attrs.socialShareSubject) {
                    urlString += '&subject=' + encodeURIComponent(attrs.socialShareSubject);
                }
                if (attrs.socialShareCc) {
                    urlString += '&cc=' + encodeURIComponent(attrs.socialShareCc);
                }
                if (attrs.socialShareBcc) {
                    urlString += '&bcc=' + encodeURIComponent(attrs.socialShareBcc);
                }
                WebSocialShareUtils.staticOpenNewWindow(urlString);
                return [2 /*return*/];
            });
        });
    };
    return WebSocialShareEmail;
}());
var WebSocialShareLinkedin = /** @class */ (function () {
    function WebSocialShareLinkedin() {
    }
    WebSocialShareLinkedin.share = function (attrs) {
        return __awaiter(this, void 0, void 0, function () {
            var urlString;
            return __generator(this, function (_a) {
                urlString = 'https://www.linkedin.com/shareArticle?mini=true';
                urlString += '&url=' + encodeURIComponent(attrs.socialShareUrl || window.location.href);
                if (attrs.socialShareText) {
                    urlString += '&title=' + encodeURIComponent(attrs.socialShareText);
                }
                if (attrs.socialShareDescription) {
                    urlString += '&summary=' + encodeURIComponent(attrs.socialShareDescription);
                }
                if (attrs.socialShareSource) {
                    urlString += '&source=' + encodeURIComponent(attrs.socialShareSource);
                }
                window.open(urlString, 'Linkedin', 'toolbar=0,status=0,resizable=yes,width=' + attrs.socialSharePopupWidth + ',height=' + attrs.socialSharePopupHeight
                    + ',top=' + (window.innerHeight - attrs.socialSharePopupHeight) / 2 + ',left=' + (window.innerWidth - attrs.socialSharePopupWidth) / 2);
                return [2 /*return*/];
            });
        });
    };
    return WebSocialShareLinkedin;
}());
var WebSocialSharePinterest = /** @class */ (function () {
    function WebSocialSharePinterest() {
    }
    WebSocialSharePinterest.share = function (attrs) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                window.open('https://www.pinterest.com/pin/create/button/?url=' + encodeURIComponent(attrs.socialShareUrl || window.location.href) + '&media=' + encodeURIComponent(attrs.socialShareMedia) + '&description=' + encodeURIComponent(attrs.socialShareText), 'Pinterest', 'toolbar=0,status=0,resizable=yes,width=' + attrs.socialSharePopupWidth + ',height=' + attrs.socialSharePopupHeight
                    + ',top=' + (window.innerHeight - attrs.socialSharePopupHeight) / 2 + ',left=' + (window.innerWidth - attrs.socialSharePopupWidth) / 2);
                return [2 /*return*/];
            });
        });
    };
    return WebSocialSharePinterest;
}());
var WebSocialShareReddit = /** @class */ (function () {
    function WebSocialShareReddit() {
    }
    WebSocialShareReddit.share = function (attrs) {
        return __awaiter(this, void 0, void 0, function () {
            var urlString;
            return __generator(this, function (_a) {
                urlString = 'https://www.reddit.com/';
                if (attrs.socialShareSubreddit) {
                    urlString += 'r/' + attrs.socialShareSubreddit + '/submit?url=';
                }
                else {
                    urlString += 'submit?url=';
                }
                /*-
                * Reddit isn't responsive and at default width for our popups (500 x 500), everything is messed up.
                * So, overriding the width if it is less than 900 (played around to settle on this) and height if
                * it is less than 650px.
                */
                if (attrs.socialSharePopupWidth < 900) {
                    attrs.socialSharePopupWidth = 900;
                }
                if (attrs.socialSharePopupHeight < 650) {
                    attrs.socialSharePopupHeight = 650;
                }
                window.open(urlString + encodeURIComponent(attrs.socialShareUrl || window.location.href) + '&title=' + encodeURIComponent(attrs.socialShareText), 'Reddit', 'toolbar=0,status=0,resizable=yes,width=' + attrs.socialSharePopupWidth + ',height=' + attrs.socialSharePopupHeight
                    + ',top=' + (window.innerHeight - attrs.socialSharePopupHeight) / 2 + ',left=' + (window.innerWidth - attrs.socialSharePopupWidth) / 2);
                return [2 /*return*/];
            });
        });
    };
    return WebSocialShareReddit;
}());
var WebSocialShareWhatsapp = /** @class */ (function () {
    function WebSocialShareWhatsapp() {
    }
    WebSocialShareWhatsapp.share = function (attrs) {
        return __awaiter(this, void 0, void 0, function () {
            var isMobile, urlString;
            return __generator(this, function (_a) {
                isMobile = WebSocialShareUtils.isMobile();
                urlString = isMobile ? 'https://api.whatsapp.com/send?text=' : 'https://web.whatsapp.com/send?text=';
                if (attrs.socialShareText) {
                    urlString += encodeURIComponent(attrs.socialShareText) + '%0A';
                }
                //default to the current page if a URL isn't specified
                urlString += encodeURIComponent(attrs.socialShareUrl || window.location.href);
                if (isMobile) {
                    WebSocialShareUtils.staticOpenNewWindow(urlString);
                }
                else {
                    window.open(urlString, 'WhatsApp', 'toolbar=0,status=0,resizable=yes,width=' + attrs.socialSharePopupWidth + ',height=' + attrs.socialSharePopupHeight
                        + ',top=' + (window.innerHeight - attrs.socialSharePopupHeight) / 2 + ',left=' + (window.innerWidth - attrs.socialSharePopupWidth) / 2);
                }
                return [2 /*return*/];
            });
        });
    };
    return WebSocialShareWhatsapp;
}());
var WebSocialShareCopy = /** @class */ (function () {
    function WebSocialShareCopy() {
    }
    WebSocialShareCopy.share = function (attrs) {
        return __awaiter(this, void 0, void 0, function () {
            var err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, navigator.clipboard.writeText(attrs.socialShareUrl || window.location.href)];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        err_1 = _a.sent();
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return WebSocialShareCopy;
}());
var WebSocialShareHackerNews = /** @class */ (function () {
    function WebSocialShareHackerNews() {
    }
    WebSocialShareHackerNews.share = function (attrs) {
        return __awaiter(this, void 0, void 0, function () {
            var urlString;
            return __generator(this, function (_a) {
                urlString = 'https://news.ycombinator.com/submitlink?u=';
                //default to the current page if a URL isn't specified
                urlString += encodeURIComponent(attrs.socialShareUrl || window.location.href);
                if (attrs.socialShareText) {
                    urlString += '&t=' + encodeURIComponent(attrs.socialShareText);
                }
                WebSocialShareUtils.staticOpenNewWindow(urlString);
                return [2 /*return*/];
            });
        });
    };
    return WebSocialShareHackerNews;
}());
var webSocialShareCss = "div.web-social-share{visibility:hidden;opacity:0;cursor:pointer;-ms-touch-action:manipulation;touch-action:manipulation}div.web-social-share.web-social-share-open{visibility:visible;opacity:1}div.web-social-share.web-social-share-open div.web-social-share-backdrop{opacity:var(--web-social-share-backdrop-opacity, 0.25)}div.web-social-share.web-social-share-open div.web-social-share-action-sheet{opacity:1}div.web-social-share.web-social-share-open div.web-social-share-action-sheet div.web-social-share-action-sheet-container div.web-social-share-action-sheet-group{height:var(--web-social-share-height, 80px)}@media (max-width: 540px){div.web-social-share.web-social-share-open div.web-social-share-action-sheet div.web-social-share-action-sheet-container div.web-social-share-action-sheet-group{height:var(--web-social-share-height-small-device, 140px)}}div.web-social-share.web-social-share-open.web-social-share-transition-close div.web-social-share-backdrop{opacity:0}div.web-social-share.web-social-share-open.web-social-share-transition-close div.web-social-share-action-sheet div.web-social-share-action-sheet-container div.web-social-share-action-sheet-group{height:0}div.web-social-share div.web-social-share-backdrop{opacity:0;-webkit-transition:opacity 0.1s linear;transition:opacity 0.1s linear;background-color:var(--web-social-share-backdrop-background, black);z-index:var(--web-social-share-zindex, 1000);-webkit-transform:translate3d(0, 0, 2px);transform:translate3d(0, 0, 2px);left:0;top:0;position:fixed;height:100%;width:100%}div.web-social-share div.web-social-share-action-sheet{left:0;right:0;top:0;bottom:0;margin:auto;position:fixed;z-index:calc(var(--web-social-share-zindex, 1000) + 1);-webkit-transform:translate3d(0, 0, 3px);transform:translate3d(0, 0, 3px);width:100%;max-width:540px}@media (min-width: 540px){div.web-social-share div.web-social-share-action-sheet div.web-social-share-action-sheet-container div.web-social-share-action-sheet-group{border-radius:var(--web-social-share-action-sheet-group-border-radius, 8px 8px 0 0)}}div.web-social-share div.web-social-share-action-sheet div.web-social-share-action-sheet-container{display:-ms-flexbox;display:flex;-ms-flex-flow:column;flex-flow:column;-ms-flex-pack:end;justify-content:flex-end;height:100%;max-height:100%}div.web-social-share div.web-social-share-action-sheet div.web-social-share-action-sheet-container div.web-social-share-action-sheet-group{-webkit-box-shadow:var(--web-social-share-action-sheet-group-box-shadow, 0 0 8px 4px rgba(0, 0, 0, 0.1));box-shadow:var(--web-social-share-action-sheet-group-box-shadow, 0 0 8px 4px rgba(0, 0, 0, 0.1));z-index:calc(var(--web-social-share-zindex, 1000) + 10);-webkit-transform:translate3d(0, 0, 10px);transform:translate3d(0, 0, 10px);background:var(--web-social-share-action-sheet-group-background, #fafafa);display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-wrap:wrap;flex-wrap:wrap;height:0;-webkit-transition-timing-function:cubic-bezier(0.36, 0.66, 0.04, 1);transition-timing-function:cubic-bezier(0.36, 0.66, 0.04, 1);-webkit-transition:height 0.2s ease-in;transition:height 0.2s ease-in}@media (max-width: 540px){div.web-social-share div.web-social-share-action-sheet div.web-social-share-action-sheet-container div.web-social-share-action-sheet-group{-ms-flex-pack:start;justify-content:flex-start}}div.web-social-share div.web-social-share-target{margin:auto;width:var(--web-social-share-target-width, 4rem);height:var(--web-social-share-target-height, 3rem);display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}div.web-social-share div.web-social-share-target button{position:relative;cursor:pointer;border:0;background:transparent;width:var(--web-social-share-button-width, 100%);height:var(--web-social-share-button-height, 100%);font-size:var(--web-social-share-button-font-size)}div.web-social-share div.web-social-share-target p{margin:var(--web-social-share-brand-margin, 2px 0);color:var(--web-social-share-brand-color, inherit);font-size:var(--web-social-share-brand-font-size, 0.6rem)}div.web-social-share div.web-social-share-target div.web-social-share-button-icon{margin:0;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}::slotted([slot=facebook]),::slotted([slot=twitter]),::slotted([slot=email]),::slotted([slot=linkedin]),::slotted([slot=pinterest]),::slotted([slot=reddit]),::slotted([slot=whatsapp]),::slotted([slot=copy]),::slotted([slot=hackernews]){display:none}";
var WebSocialShare = /** @class */ (function () {
    function class_1(hostRef) {
        var _this = this;
        Object(_index_bef2383e_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.closed = Object(_index_bef2383e_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "closed", 7);
        this.handleFacebookShare = function (attributes) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, WebSocialShareFacebook.share(attributes)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        this.handleTwitterShare = function (attributes) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, WebSocialShareTwitter.share(attributes)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        this.handleEmailShare = function (attributes) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, WebSocialShareEmail.share(attributes)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        this.handleLinkedinShare = function (attributes) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, WebSocialShareLinkedin.share(attributes)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        this.handlePinterestShare = function (attributes) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, WebSocialSharePinterest.share(attributes)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        this.handleRedditShare = function (attributes) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, WebSocialShareReddit.share(attributes)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        this.handleWhatsappShare = function (attributes) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, WebSocialShareWhatsapp.share(attributes)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        this.handleCopyShare = function (attributes) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, WebSocialShareCopy.share(attributes)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        this.handleHackerNewsShare = function (attributes) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, WebSocialShareHackerNews.share(attributes)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); };
    }
    class_1.prototype.hide = function () {
        var _this = this;
        var element = this.el.shadowRoot.querySelector('div.web-social-share');
        if (element) {
            element.classList.add('web-social-share-transition-close');
            setTimeout(function () {
                // Reflect css animation speed 400ms, see css
                _this.show = false;
                element.classList.remove('web-social-share-transition-close');
                _this.closed.emit(true);
            }, 200);
        }
        else {
            // Well we don't find the action sheet, we could mark it as not displayed
            this.show = false;
            this.closed.emit(true);
        }
    };
    class_1.prototype.render = function () {
        var _this = this;
        return (Object(_index_bef2383e_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: this.show ? 'web-social-share web-social-share-open' : 'web-social-share web-social-share-close' }, Object(_index_bef2383e_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: 'web-social-share-backdrop', onClick: function () { return _this.hide(); } }), Object(_index_bef2383e_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: 'web-social-share-action-sheet', onClick: function () { return _this.hide(); } }, Object(_index_bef2383e_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: 'web-social-share-action-sheet-container' }, Object(_index_bef2383e_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: 'web-social-share-action-sheet-group' }, this.renderTargets())))));
    };
    class_1.prototype.renderTargets = function () {
        var _this = this;
        if (!this.share || !this.share.config) {
            return (Object(_index_bef2383e_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", null));
        }
        else {
            return (this.share.config.map(function (config) { return Object(_index_bef2383e_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "web-social-share-target" }, _this.renderButtons(config)); }));
        }
    };
    class_1.prototype.renderButtons = function (share) {
        if (share.facebook) {
            return this.renderButton(share.facebook, 'facebook', this.handleFacebookShare, 'Facebook');
        }
        else if (share.twitter) {
            return this.renderButton(share.twitter, 'twitter', this.handleTwitterShare, 'Twitter');
        }
        else if (share.email) {
            return this.renderButton(share.email, 'email', this.handleEmailShare, 'Email');
        }
        else if (share.linkedin) {
            return this.renderButton(share.linkedin, 'linkedin', this.handleLinkedinShare, 'Linkedin');
        }
        else if (share.pinterest) {
            return this.renderButton(share.pinterest, 'pinterest', this.handlePinterestShare, 'Pinterest');
        }
        else if (share.reddit) {
            return this.renderButton(share.reddit, 'reddit', this.handleRedditShare, 'Reddit');
        }
        else if (share.whatsapp) {
            return this.renderButton(share.whatsapp, 'whatsapp', this.handleWhatsappShare, 'WhatsApp');
        }
        else if (share.copy) {
            return this.renderButton(share.copy, 'copy', this.handleCopyShare, 'Copy');
        }
        else if (share.hackernews) {
            return this.renderButton(share.hackernews, 'hackernews', this.handleHackerNewsShare, 'Hacker News');
        }
        else {
            return undefined;
        }
    };
    class_1.prototype.renderButton = function (attributes, slotName, action, defaultBrandName) {
        var _this = this;
        return (Object(_index_bef2383e_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", { onClick: function ($event) { return _this.handleShare($event, attributes, action); }, class: 'web-social-share-button' }, Object(_index_bef2383e_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "web-social-share-button-icon" }, Object(_index_bef2383e_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: slotName })), this.renderName(attributes, defaultBrandName)));
    };
    class_1.prototype.handleShare = function ($event, attributes, action) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        $event.stopPropagation();
                        return [4 /*yield*/, action(attributes)];
                    case 1:
                        _a.sent();
                        this.hide();
                        return [2 /*return*/];
                }
            });
        });
    };
    class_1.prototype.renderName = function (displayAttributes, defaultBrandName) {
        if (this.share.displayNames) {
            return (Object(_index_bef2383e_js__WEBPACK_IMPORTED_MODULE_0__["h"])("p", null, displayAttributes && displayAttributes.brandName && displayAttributes.brandName !== '' ? displayAttributes.brandName : defaultBrandName));
        }
        else {
            return (Object(_index_bef2383e_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", null));
        }
    };
    Object.defineProperty(class_1.prototype, "el", {
        get: function () { return Object(_index_bef2383e_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); },
        enumerable: false,
        configurable: true
    });
    return class_1;
}());
WebSocialShare.style = webSocialShareCss;



/***/ })

}]);
//# sourceMappingURL=79-es5.js.map