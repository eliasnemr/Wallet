(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-send-funds-send-funds-module"],{

/***/ "./node_modules/qr-scanner/src/qr-scanner.js":
/*!***************************************************!*\
  !*** ./node_modules/qr-scanner/src/qr-scanner.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return QrScanner; });
class QrScanner {
    /* async */
    static hasCamera() {
        if (!navigator.mediaDevices) return Promise.resolve(false);
        // note that enumerateDevices can always be called and does not prompt the user for permission. However, device
        // labels are only readable if served via https and an active media stream exists or permanent permission is
        // given. That doesn't matter for us though as we don't require labels.
        return navigator.mediaDevices.enumerateDevices()
            .then(devices => devices.some(device => device.kind === 'videoinput'))
            .catch(() => false);
    }

    constructor(
        video,
        onDecode,
        canvasSizeOrOnDecodeError = this._onDecodeError.bind(this),
        canvasSize = QrScanner.DEFAULT_CANVAS_SIZE,
        preferredFacingMode = 'environment'
    ) {
        this.$video = video;
        this.$canvas = document.createElement('canvas');
        this._onDecode = onDecode;
        this._preferredFacingMode = preferredFacingMode;
        this._active = false;
        this._paused = false;
        this._flashOn = false;

        if (typeof canvasSizeOrOnDecodeError === 'number') {
            // legacy function signature where canvas size is the third argument
            canvasSize = canvasSizeOrOnDecodeError;
            console.warn('You\'re using a deprecated version of the QrScanner constructor which will be removed in '
                + 'the future');
        } else {
            this._onDecodeError = canvasSizeOrOnDecodeError;
        }

        this.$canvas.width = canvasSize;
        this.$canvas.height = canvasSize;
        this._sourceRect = {
            x: 0,
            y: 0,
            width: canvasSize,
            height: canvasSize
        };

        this._updateSourceRect = this._updateSourceRect.bind(this);
        this._onPlay = this._onPlay.bind(this);
        this._onVisibilityChange = this._onVisibilityChange.bind(this);

        // Allow inline playback on iPhone instead of requiring full screen playback,
        // see https://webkit.org/blog/6784/new-video-policies-for-ios/
        this.$video.playsInline = true;
        // Allow play() on iPhone without requiring a user gesture. Should not really be needed as camera stream
        // includes no audio, but just to be safe.
        this.$video.muted = true;
        this.$video.disablePictureInPicture = true;
        this.$video.addEventListener('loadedmetadata', this._updateSourceRect);
        this.$video.addEventListener('play', this._onPlay);
        document.addEventListener('visibilitychange', this._onVisibilityChange);

        this._qrEnginePromise = QrScanner.createQrEngine();
    }

    /* async */
    hasFlash() {
        if (!('ImageCapture' in window)) {
            return Promise.resolve(false);
        }

        const track = this.$video.srcObject ? this.$video.srcObject.getVideoTracks()[0] : null;
        if (!track) {
            return Promise.reject('Camera not started or not available');
        }

        const imageCapture = new ImageCapture(track);
        return imageCapture.getPhotoCapabilities()
            .then((result) => {
                return result.fillLightMode.includes('flash');
            })
            .catch((error) => {
                console.warn(error);
                return false;
            });
    }

    isFlashOn() {
      return this._flashOn;
    }

    /* async */
    toggleFlash() {
      return this._setFlash(!this._flashOn);
    }

    /* async */
    turnFlashOff() {
      return this._setFlash(false);
    }

    /* async */
    turnFlashOn() {
      return this._setFlash(true);
    }

    destroy() {
        this.$video.removeEventListener('loadedmetadata', this._updateSourceRect);
        this.$video.removeEventListener('play', this._onPlay);
        document.removeEventListener('visibilitychange', this._onVisibilityChange);

        this.stop();
        QrScanner._postWorkerMessage(this._qrEnginePromise, 'close');
    }

    /* async */
    start() {
        if (this._active && !this._paused) {
            return Promise.resolve();
        }
        if (window.location.protocol !== 'https:') {
            // warn but try starting the camera anyways
            console.warn('The camera stream is only accessible if the page is transferred via https.');
        }
        this._active = true;
        this._paused = false;
        if (document.hidden) {
            // camera will be started as soon as tab is in foreground
            return Promise.resolve();
        }
        clearTimeout(this._offTimeout);
        this._offTimeout = null;
        if (this.$video.srcObject) {
            // camera stream already/still set
            this.$video.play();
            return Promise.resolve();
        }

        let facingMode = this._preferredFacingMode;
        return this._getCameraStream(facingMode, true)
            .catch(() => {
                // We (probably) don't have a camera of the requested facing mode
                facingMode = facingMode === 'environment' ? 'user' : 'environment';
                return this._getCameraStream(); // throws if camera is not accessible (e.g. due to not https)
            })
            .then(stream => {
                // Try to determine the facing mode from the stream, otherwise use our guess. Note that the guess is not
                // always accurate as Safari returns cameras of different facing mode, even for exact constraints.
                facingMode = this._getFacingMode(stream) || facingMode;
                this.$video.srcObject = stream;
                this.$video.play();
                this._setVideoMirror(facingMode);
            })
            .catch(e => {
                this._active = false;
                throw e;
            });
    }

    stop() {
        this.pause();
        this._active = false;
    }

    pause() {
        this._paused = true;
        if (!this._active) {
            return;
        }
        this.$video.pause();
        if (this._offTimeout) {
            return;
        }
        this._offTimeout = setTimeout(() => {
            const tracks = this.$video.srcObject ? this.$video.srcObject.getTracks() : [];
            for (const track of tracks) {
                track.stop(); //  note that this will also automatically turn the flashlight off
            }
            this.$video.srcObject = null;
            this._offTimeout = null;
        }, 300);
    }

    /* async */
    static scanImage(imageOrFileOrUrl, sourceRect=null, qrEngine=null, canvas=null, fixedCanvasSize=false,
                     alsoTryWithoutSourceRect=false) {
        const gotExternalWorker = qrEngine instanceof Worker;

        let promise = Promise.all([
            qrEngine || QrScanner.createQrEngine(),
            QrScanner._loadImage(imageOrFileOrUrl),
        ]).then(([engine, image]) => {
            qrEngine = engine;
            let canvasContext;
            [canvas, canvasContext] = this._drawToCanvas(image, sourceRect, canvas, fixedCanvasSize);

            if (qrEngine instanceof Worker) {
                if (!gotExternalWorker) {
                    // Enable scanning of inverted color qr codes. Not using _postWorkerMessage as it's async
                    qrEngine.postMessage({ type: 'inversionMode', data: 'both' });
                }
                return new Promise((resolve, reject) => {
                    let timeout, onMessage, onError;
                    onMessage = event => {
                        if (event.data.type !== 'qrResult') {
                            return;
                        }
                        qrEngine.removeEventListener('message', onMessage);
                        qrEngine.removeEventListener('error', onError);
                        clearTimeout(timeout);
                        if (event.data.data !== null) {
                            resolve(event.data.data);
                        } else {
                            reject(QrScanner.NO_QR_CODE_FOUND);
                        }
                    };
                    onError = (e) => {
                        qrEngine.removeEventListener('message', onMessage);
                        qrEngine.removeEventListener('error', onError);
                        clearTimeout(timeout);
                        const errorMessage = !e ? 'Unknown Error' : (e.message || e);
                        reject('Scanner error: ' + errorMessage);
                    };
                    qrEngine.addEventListener('message', onMessage);
                    qrEngine.addEventListener('error', onError);
                    timeout = setTimeout(() => onError('timeout'), 10000);
                    const imageData = canvasContext.getImageData(0, 0, canvas.width, canvas.height);
                    qrEngine.postMessage({
                        type: 'decode',
                        data: imageData
                    }, [imageData.data.buffer]);
                });
            } else {
                return new Promise((resolve, reject) => {
                    const timeout = setTimeout(() => reject('Scanner error: timeout'), 10000);
                    qrEngine.detect(canvas).then(scanResults => {
                        if (!scanResults.length) {
                            reject(QrScanner.NO_QR_CODE_FOUND);
                        } else {
                            resolve(scanResults[0].rawValue);
                        }
                    }).catch((e) => reject('Scanner error: ' + (e.message || e))).finally(() => clearTimeout(timeout));
                });
            }
        });

        if (sourceRect && alsoTryWithoutSourceRect) {
            promise = promise.catch(() => QrScanner.scanImage(imageOrFileOrUrl, null, qrEngine, canvas, fixedCanvasSize));
        }

        promise = promise.finally(() => {
            if (gotExternalWorker) return;
            QrScanner._postWorkerMessage(qrEngine, 'close');
        });

        return promise;
    }

    setGrayscaleWeights(red, green, blue, useIntegerApproximation = true) {
        // Note that for the native BarcodeDecoder, this is a no-op. However, the native implementations work also
        // well with colored qr codes.
        QrScanner._postWorkerMessage(
            this._qrEnginePromise,
            'grayscaleWeights',
            { red, green, blue, useIntegerApproximation }
        );
    }

    setInversionMode(inversionMode) {
        // Note that for the native BarcodeDecoder, this is a no-op. However, the native implementations scan normal
        // and inverted qr codes by default
        QrScanner._postWorkerMessage(this._qrEnginePromise, 'inversionMode', inversionMode);
    }

    /* async */
    static createQrEngine(workerPath = QrScanner.WORKER_PATH) {
        return ('BarcodeDetector' in window ? BarcodeDetector.getSupportedFormats() : Promise.resolve([]))
            .then((supportedFormats) => supportedFormats.indexOf('qr_code') !== -1
                ? new BarcodeDetector({ formats: ['qr_code'] })
                : new Worker(workerPath)
            );
    }

    _onPlay() {
        this._updateSourceRect();
        this._scanFrame();
    }

    _onVisibilityChange() {
        if (document.hidden) {
            this.pause();
        } else if (this._active) {
            this.start();
        }
    }

    _updateSourceRect() {
        const smallestDimension = Math.min(this.$video.videoWidth, this.$video.videoHeight);
        const sourceRectSize = Math.round(2 / 3 * smallestDimension);
        this._sourceRect.width = this._sourceRect.height = sourceRectSize;
        this._sourceRect.x = (this.$video.videoWidth - sourceRectSize) / 2;
        this._sourceRect.y = (this.$video.videoHeight - sourceRectSize) / 2;
    }

    _scanFrame() {
        if (!this._active || this.$video.paused || this.$video.ended) return false;
        // using requestAnimationFrame to avoid scanning if tab is in background
        requestAnimationFrame(() => {
            if (this.$video.readyState <= 1) {
                // Skip scans until the video is ready as drawImage() only works correctly on a video with readyState
                // > 1, see https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/drawImage#Notes.
                // This also avoids false positives for videos paused after a successful scan which remains visible on
                // the canvas until the video is started again and ready.
                this._scanFrame();
                return;
            }
            this._qrEnginePromise
                .then((qrEngine) => QrScanner.scanImage(this.$video, this._sourceRect, qrEngine, this.$canvas, true))
                .then(this._onDecode, (error) => {
                    if (!this._active) return;
                    const errorMessage = error.message || error;
                    if (errorMessage.indexOf('service unavailable') !== -1) {
                        // When the native BarcodeDetector crashed, create a new one
                        this._qrEnginePromise = QrScanner.createQrEngine();
                    }
                    this._onDecodeError(error);
                })
                .then(() => this._scanFrame());
        });
    }

    _onDecodeError(error) {
        // default error handler; can be overwritten in the constructor
        if (error === QrScanner.NO_QR_CODE_FOUND) return;
        console.log(error);
    }

    _getCameraStream(facingMode, exact = false) {
        const constraintsToTry = [{
            width: { min: 1024 }
        }, {
            width: { min: 768 }
        }, {}];

        if (facingMode) {
            if (exact) {
                facingMode = { exact: facingMode };
            }
            constraintsToTry.forEach(constraint => constraint.facingMode = facingMode);
        }
        return this._getMatchingCameraStream(constraintsToTry);
    }

    _getMatchingCameraStream(constraintsToTry) {
        if (!navigator.mediaDevices || constraintsToTry.length === 0) {
            return Promise.reject('Camera not found.');
        }
        return navigator.mediaDevices.getUserMedia({
            video: constraintsToTry.shift()
        }).catch(() => this._getMatchingCameraStream(constraintsToTry));
    }

    /* async */
    _setFlash(on) {
        return this.hasFlash().then((hasFlash) => {
            if (!hasFlash) return Promise.reject('No flash available');
            // Note that the video track is guaranteed to exist at this point
            return this.$video.srcObject.getVideoTracks()[0].applyConstraints({
                advanced: [{ torch: on }],
            });
        }).then(() => this._flashOn = on);
    }

    _setVideoMirror(facingMode) {
        // in user facing mode mirror the video to make it easier for the user to position the QR code
        const scaleFactor = facingMode==='user'? -1 : 1;
        this.$video.style.transform = 'scaleX(' + scaleFactor + ')';
    }

    _getFacingMode(videoStream) {
        const videoTrack = videoStream.getVideoTracks()[0];
        if (!videoTrack) return null; // unknown
        // inspired by https://github.com/JodusNodus/react-qr-reader/blob/master/src/getDeviceId.js#L13
        return /rear|back|environment/i.test(videoTrack.label)
            ? 'environment'
            : /front|user|face/i.test(videoTrack.label)
                ? 'user'
                : null; // unknown
    }

    static _drawToCanvas(image, sourceRect=null, canvas=null, fixedCanvasSize=false) {
        canvas = canvas || document.createElement('canvas');
        const sourceRectX = sourceRect && sourceRect.x? sourceRect.x : 0;
        const sourceRectY = sourceRect && sourceRect.y? sourceRect.y : 0;
        const sourceRectWidth = sourceRect && sourceRect.width? sourceRect.width : image.width || image.videoWidth;
        const sourceRectHeight = sourceRect && sourceRect.height? sourceRect.height : image.height || image.videoHeight;
        if (!fixedCanvasSize && (canvas.width !== sourceRectWidth || canvas.height !== sourceRectHeight)) {
            canvas.width = sourceRectWidth;
            canvas.height = sourceRectHeight;
        }
        const context = canvas.getContext('2d', { alpha: false });
        context.imageSmoothingEnabled = false; // gives less blurry images
        context.drawImage(image, sourceRectX, sourceRectY, sourceRectWidth, sourceRectHeight, 0, 0, canvas.width, canvas.height);
        return [canvas, context];
    }

    /* async */
    static _loadImage(imageOrFileOrBlobOrUrl) {
        if (imageOrFileOrBlobOrUrl instanceof HTMLCanvasElement || imageOrFileOrBlobOrUrl instanceof HTMLVideoElement
            || window.ImageBitmap && imageOrFileOrBlobOrUrl instanceof window.ImageBitmap
            || window.OffscreenCanvas && imageOrFileOrBlobOrUrl instanceof window.OffscreenCanvas) {
            return Promise.resolve(imageOrFileOrBlobOrUrl);
        } else if (imageOrFileOrBlobOrUrl instanceof Image) {
            return QrScanner._awaitImageLoad(imageOrFileOrBlobOrUrl).then(() => imageOrFileOrBlobOrUrl);
        } else if (imageOrFileOrBlobOrUrl instanceof File || imageOrFileOrBlobOrUrl instanceof Blob
            || imageOrFileOrBlobOrUrl instanceof URL || typeof(imageOrFileOrBlobOrUrl)==='string') {
            const image = new Image();
            if (imageOrFileOrBlobOrUrl instanceof File || imageOrFileOrBlobOrUrl instanceof Blob) {
                image.src = URL.createObjectURL(imageOrFileOrBlobOrUrl);
            } else {
                image.src = imageOrFileOrBlobOrUrl;
            }
            return QrScanner._awaitImageLoad(image).then(() => {
                if (imageOrFileOrBlobOrUrl instanceof File || imageOrFileOrBlobOrUrl instanceof Blob) {
                    URL.revokeObjectURL(image.src);
                }
                return image;
            });
        } else {
            return Promise.reject('Unsupported image type.');
        }
    }

    /* async */
    static _awaitImageLoad(image) {
        return new Promise((resolve, reject) => {
            if (image.complete && image.naturalWidth!==0) {
                // already loaded
                resolve();
            } else {
                let onLoad, onError;
                onLoad = () => {
                    image.removeEventListener('load', onLoad);
                    image.removeEventListener('error', onError);
                    resolve();
                };
                onError = () => {
                    image.removeEventListener('load', onLoad);
                    image.removeEventListener('error', onError);
                    reject('Image load error');
                };
                image.addEventListener('load', onLoad);
                image.addEventListener('error', onError);
            }
        });
    }

    /* async */
    static _postWorkerMessage(qrEngineOrQrEnginePromise, type, data) {
        return Promise.resolve(qrEngineOrQrEnginePromise).then((qrEngine) => {
            if (!(qrEngine instanceof Worker)) return;
            qrEngine.postMessage({ type, data });
        });
    }
}
QrScanner.DEFAULT_CANVAS_SIZE = 400;
QrScanner.NO_QR_CODE_FOUND = 'No QR code found';
QrScanner.WORKER_PATH = 'qr-scanner-worker.min.js';


/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/send-funds/send-funds.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/send-funds/send-funds.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-app>\n<ion-header>\n  <ion-toolbar class=\"border-b\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button class=\"menu-icon\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title class=\"large-text\">\n      Send\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content *ngIf=\"isCameraOpen==false\">\n\n  <ion-grid *ngIf=\"tokenArr.length == 0\">\n    <ion-row>\n      <ion-col style=\"display: flex; align-items:center; justify-content:center\" size=\"12\">\n        <ion-label>Fetching tokens...</ion-label>\n      </ion-col>\n      <ion-col style=\"display: flex; align-items:center; justify-content:center\" size=\"12\">\n        <ion-spinner name=\"crescent\"></ion-spinner>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-card class=\"webscan-canvas\" *ngIf=\"!checkPlatform() && isWebCameraOpen\">\n    <ion-card-header class=\"medium-text\">\n    Scan Your Minima QR address now...\n    <ion-progress-bar type=\"indeterminate\" reversed=\"true\"></ion-progress-bar>\n    </ion-card-header>\n    <video height=\"240\" #videoElem></video>\n    <hr>\n    <ion-button block=\"full\" (click)=\"stopWebScanQR()\">Stop Scanning</ion-button>\n    <hr>\n  </ion-card>\n\n  <ion-card class=\"borders\" *ngIf=\"!isWebCameraOpen && tokenArr.length > 0\">\n    <ion-card-header>\n      Post A Transaction\n      <ion-card-title>\n          <ion-icon style=\" font-size:1.2rem;\" slot=\"start\" name=\"send\" class=\"icon-head medium-text\" ></ion-icon>\n      </ion-card-title>\n    </ion-card-header>\n\n    <ion-card-content>\n      <form [formGroup]=\"sendForm\" id=\"sendForm\" (ngSubmit)=\"sendFunds()\">\n        <ion-list lines=\"none\">\n          <ion-item>\n            <ion-label position=\"fixed\" class=\"medium-text\">Token</ion-label>\n            <ion-select\n                formControlName=\"token\"\n                interface = 'alert'\n                [(ngModel)]=\"itemSelected\"\n                class=\"medium-text input\"\n                (ionChange)=\"onItemSelection($event)\"> \n            <ion-select-option *ngFor=\"let token of tokenArr;\" [value]=\"token\" class=\"token-option\">\n              {{ token.token + \"&mdash;\"+ token.tokenid }}\n            </ion-select-option>\n          </ion-select>\n          </ion-item>\n          <ion-item lines=\"none\">\n            <ion-label class=\"medium-text\" position=\"fixed\">Address</ion-label>\n            <span (click)=\"webScanQR()\" id=\"qrIcon\"> <ion-icon alt=\"qrCode\" src=\"assets/scan-outline.svg\"></ion-icon></span>\n            <ion-input #address class=\"medium-text input\" formControlName=\"address\" clearInput=\"true\" placeholder=\"address\"></ion-input>\n          </ion-item>\n          <ion-item class=\"error\" lines=\"none\" *ngIf=\"addressFormItem.invalid && addressFormItem.touched\">\n            <ion-label position=\"fixed\"></ion-label>\n            <ion-note class=\"error-message\">\n              <ion-icon name=\"alert-circle\"></ion-icon> <span> Invalid address format!</span> <br>\n              <span>&mdash; An address must begin with 0x or Mx.</span> \n            </ion-note>\n          </ion-item>\n          <ion-item lines=\"none\">\n            <ion-label class=\"medium-text\" position=\"fixed\">Amount</ion-label>\n            <ion-input #amount type=\"number\" formControlName=\"amount\" class=\"input medium-text\" placeholder=\"amount\"></ion-input>\n          </ion-item>\n          <ion-item class=\"error\" lines=\"none\" *ngIf=\"amountFormItem.invalid && amountFormItem.touched\">\n            <ion-label position=\"fixed\"></ion-label>\n            <ion-note class=\"error-message\">\n              <ion-icon name=\"alert-circle\"></ion-icon> <span> Amount required!</span> <br>\n              <span>&mdash; Amount has to be numeric and greater than 0.</span> \n            </ion-note>\n          </ion-item>\n          <ion-row id=\"quickAmount\">\n            <ion-col size=\"3\">\n\n            </ion-col>\n            <ion-col size=\"9\" style=\"padding-right:2.5%\">\n              <ion-button class=\"medium-text\" (click)=\"fillAmount('max')\" size=\"small\" fill=\"outline\">Send Max</ion-button>\n              <ion-button class=\"medium-text\" (click)=\"fillAmount('half')\" size=\"small\" fill=\"outline\">Send 1/2</ion-button>\n              <ion-button class=\"medium-text\" (click)=\"fillAmount('quarter')\" size=\"small\" fill=\"outline\">Send 1/4</ion-button>\n            </ion-col>\n          </ion-row>\n          <ion-item lines=\"none\">\n            <!-- Disabled Checkbox -->\n            <ion-checkbox (click)=\"useMessage()\"></ion-checkbox>\n            <ion-label class=\"medium-text\" [hidden]=\"messageToggle\" style=\"padding-left: 10px;\">Message</ion-label>\n            <ion-label class=\"medium-text\" [hidden]=\"!messageToggle\" style=\"padding-left: 10px;\">This message is public</ion-label>\n            </ion-item>\n            <ion-item [hidden]=\"!messageToggle\" lines=\"none\">\n                <ion-textarea \n                [(ngModel)]=\"data.message\"\n                formControlName=\"message\"\n                class=\"medium-text input\"\n                auto-grow=\"false\"\n                #message \n                placeholder=\"type your message...\"\n                maxlength=\"255\">\n                </ion-textarea>\n            </ion-item>\n            <ion-note *ngIf=\"data.message\" class=\"length\">{{ data.message.length +\"/255\" }}</ion-note>\n        </ion-list>\n      </form>\n        \n        \n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n<ion-footer>\n  <ion-toolbar class=\"border-t\">\n    <ion-buttons> \n      <ion-button type=\"button\" class=\"action-btn medium-text\" expand=\"block\" (click)=\"stopCamera()\"  *ngIf=\"isCameraOpen==true\">\n        Stop scanning\n       </ion-button>\n      <ion-button [disabled]=\"sendForm.invalid\" expand=\"block\" *ngIf=\"isCameraOpen==false\">\n        <button type=\"submit\" form=\"sendForm\" class=\"footer\">\n          <ion-icon slot=\"start\" name=\"send\"></ion-icon> Send Funds\n        </button> \n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer>\n</ion-app>\n\n"

/***/ }),

/***/ "./src/app/pages/send-funds/send-funds.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/send-funds/send-funds.module.ts ***!
  \*******************************************************/
/*! exports provided: SendFundsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendFundsPageModule", function() { return SendFundsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _send_funds_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./send-funds.page */ "./src/app/pages/send-funds/send-funds.page.ts");







const routes = [
    {
        path: '',
        component: _send_funds_page__WEBPACK_IMPORTED_MODULE_6__["SendFundsPage"]
    }
];
let SendFundsPageModule = class SendFundsPageModule {
};
SendFundsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_send_funds_page__WEBPACK_IMPORTED_MODULE_6__["SendFundsPage"]]
    })
], SendFundsPageModule);



/***/ }),

/***/ "./src/app/pages/send-funds/send-funds.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/send-funds/send-funds.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-card-content {\n  background: var(--ion-card-color);\n}\n\nion-card-header {\n  --color: var(--ion-text-color,#000);\n}\n\nion-toolbar {\n  --background: var(--ion-m-background);\n  font-family: manrope-bold;\n  color: var(--ion-color-tertiary);\n}\n\nion-toolbar ion-title {\n  font-size: 1rem;\n}\n\nion-toolbar ion-buttons ion-menu-button {\n  font-size: 1rem;\n  color: var(--ion-color-tertiary);\n}\n\nion-item ion-label {\n  white-space: normal;\n}\n\nion-item.wordCountWrapper {\n  padding: 0;\n  margin: 0;\n}\n\nion-select {\n  display: inherit;\n  font-family: manrope-bold;\n  background-color: #ffffff;\n  outline: 1px solid #91919D;\n  font-size: 1rem;\n  color: var(--ion-color-primary);\n}\n\nion-select-option {\n  font-family: manrope-bold;\n}\n\nion-input {\n  color: #000;\n  line-height: 16px;\n  background-color: #ffffff;\n}\n\n#quickAmount ion-col ion-button {\n  float: right;\n  color: var(--ion-color-tertiary);\n  text-transform: none;\n  text-decoration: underline;\n  font-family: manrope-bold;\n}\n\n#qrIcon {\n  z-index: 99999;\n  cursor: pointer;\n  right: 6%;\n  position: absolute;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  color: var(--ion-color-primary) !important;\n}\n\n.icon-head {\n  color: #1FB4CD;\n}\n\n.util-btns {\n  padding: 3px;\n  text-align: center;\n  margin: 2px;\n}\n\n.action-btn {\n  height: 72px;\n}\n\n.transparentBody {\n  background: none transparent !important;\n  --background: none transparent !important;\n}\n\n.webscan-canvas {\n  text-align: center;\n  --background: none transparent !important;\n}\n\nion-footer ion-toolbar ion-buttons ion-button {\n  width: 100%;\n  height: 58px;\n  text-transform: none;\n  font-family: manrope-bold;\n}\n\nion-toolbar {\n  --background: var(--ion-m-background);\n}\n\n.input {\n  font-family: manrope-light;\n}\n\n.length {\n  position: relative;\n  float: right;\n  z-index: 2000;\n  font-family: manrope-light;\n  color: var(--ion-color-tertiary) !important;\n  margin-right: 5%;\n}\n\nion-textarea {\n  color: black !important;\n  background: #ffffff;\n  padding-left: 1%;\n  margin-bottom: 1%;\n}\n\nion-item.error {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\nion-item.error span {\n  color: var(--ion-color-tertiary);\n  display: inline-block;\n  vertical-align: middle;\n}\n\nion-note.error-message ion-icon {\n  color: var(--ion-color-secondary);\n  font-size: 1rem;\n  display: inline-block;\n  vertical-align: middle;\n}\n\nion-note.error-message {\n  display: block;\n}\n\nbutton.footer {\n  width: 100%;\n  height: 58px;\n  font-size: 1rem;\n  text-align: center;\n  text-transform: none;\n  font-family: manrope-bold;\n  background: transparent;\n  color: var(--ion-color-tertiary);\n}\n\nbutton.footer:hover {\n  cursor: pointer;\n  opacity: 0.6;\n}\n\nbutton.footer ion-icon {\n  font-size: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGlhc25lbXIvcHJvamVjdHMvV0FMTEVUL21vYmlsZS1hcHAtZnJvbnQtZW5kL2FwcC9zcmMvYXBwL3BhZ2VzL3NlbmQtZnVuZHMvc2VuZC1mdW5kcy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3NlbmQtZnVuZHMvc2VuZC1mdW5kcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQ0FBQTtBQ0NGOztBRENBO0VBQ0UsbUNBQUE7QUNFRjs7QURBQTtFQUNFLHFDQUFBO0VBQ0EseUJBQUE7RUFDQSxnQ0FBQTtBQ0dGOztBREZFO0VBQ0UsZUFBQTtBQ0lKOztBREZFO0VBQ0UsZUFBQTtFQUNBLGdDQUFBO0FDSUo7O0FEREE7RUFDRSxtQkFBQTtBQ0lGOztBREZBO0VBQ0UsVUFBQTtFQUNBLFNBQUE7QUNLRjs7QURIQTtFQUNFLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtFQUNBLCtCQUFBO0FDTUY7O0FESkE7RUFDRSx5QkFBQTtBQ09GOztBRExBO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7QUNRRjs7QUROQztFQUNDLFlBQUE7RUFDQSxnQ0FBQTtFQUNBLG9CQUFBO0VBQ0EsMEJBQUE7RUFDQSx5QkFBQTtBQ1NGOztBRFBBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLDBDQUFBO0FDVUY7O0FEUEE7RUFDRSxjQUFBO0FDVUY7O0FEUkE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFFQSxXQUFBO0FDVUY7O0FEUkE7RUFDRSxZQUFBO0FDV0Y7O0FEUkE7RUFDQyx1Q0FBQTtFQUNBLHlDQUFBO0FDV0Q7O0FEVEE7RUFDQyxrQkFBQTtFQUNDLHlDQUFBO0FDWUY7O0FEVkE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EseUJBQUE7QUNhRjs7QURWQTtFQUNFLHFDQUFBO0FDYUY7O0FEWEE7RUFDRSwwQkFBQTtBQ2NGOztBRFpBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDBCQUFBO0VBQ0EsMkNBQUE7RUFDQSxnQkFBQTtBQ2VGOztBRGJBO0VBQ0UsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNnQkY7O0FEYkE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtBQ2dCRjs7QURkQTtFQUNFLGdDQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtBQ2lCRjs7QURmQTtFQUNFLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7QUNrQkY7O0FEaEJBO0VBQ0UsY0FBQTtBQ21CRjs7QURkQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSx5QkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0NBQUE7QUNpQkY7O0FEZkE7RUFDRSxlQUFBO0VBQ0EsWUFBQTtBQ2tCRjs7QURoQkE7RUFDRSxlQUFBO0FDbUJGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2VuZC1mdW5kcy9zZW5kLWZ1bmRzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJkLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY2FyZC1jb2xvcik7XG59XG5pb24tY2FyZC1oZWFkZXIge1xuICAtLWNvbG9yOiB2YXIoLS1pb24tdGV4dC1jb2xvciwjMDAwKTtcbn1cbmlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tbS1iYWNrZ3JvdW5kKTtcbiAgZm9udC1mYW1pbHk6IG1hbnJvcGUtYm9sZDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeSk7XG4gIGlvbi10aXRsZSB7XG4gICAgZm9udC1zaXplOiAxLjByZW07XG4gIH1cbiAgaW9uLWJ1dHRvbnMgaW9uLW1lbnUtYnV0dG9uIHtcbiAgICBmb250LXNpemU6IDEuMHJlbTtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5KTtcbiAgfVxufVxuaW9uLWl0ZW0gaW9uLWxhYmVsIHtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbn1cbmlvbi1pdGVtLndvcmRDb3VudFdyYXBwZXIge1xuICBwYWRkaW5nOjA7XG4gIG1hcmdpbjowO1xufVxuaW9uLXNlbGVjdCB7XG4gIGRpc3BsYXk6IGluaGVyaXQ7XG4gIGZvbnQtZmFtaWx5OiBtYW5yb3BlLWJvbGQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIG91dGxpbmU6IDFweCBzb2xpZCAjOTE5MTlEO1xuICBmb250LXNpemU6IDEuMHJlbTtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cbmlvbi1zZWxlY3Qtb3B0aW9uIHtcbiAgZm9udC1mYW1pbHk6IG1hbnJvcGUtYm9sZDtcbn1cbmlvbi1pbnB1dCB7XG4gIGNvbG9yOiAjMDAwO1xuICBsaW5lLWhlaWdodDogMTZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbn1cbiAjcXVpY2tBbW91bnQgaW9uLWNvbCBpb24tYnV0dG9uIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5KTtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICBmb250LWZhbWlseTogbWFucm9wZS1ib2xkO1xufVxuI3FySWNvbiB7XG4gIHotaW5kZXg6IDk5OTk5O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHJpZ2h0OiA2JTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KSFpbXBvcnRhbnQ7XG59XG5cbi5pY29uLWhlYWR7XG4gIGNvbG9yOiAjMUZCNENEO1xufVxuLnV0aWwtYnRucyB7XG4gIHBhZGRpbmc6IDNweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAvLyBwYWRkaW5nOiAxcHg7XG4gIG1hcmdpbjogMnB4O1xufVxuLmFjdGlvbi1idG4ge1xuICBoZWlnaHQ6IDcycHg7XG59XG5cbi50cmFuc3BhcmVudEJvZHkge1xuXHRiYWNrZ3JvdW5kOiBub25lIHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG5cdC0tYmFja2dyb3VuZDogbm9uZSB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuLndlYnNjYW4tY2FudmFzIHtcbiB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gXHQtLWJhY2tncm91bmQ6IG5vbmUgdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cbmlvbi1mb290ZXIgaW9uLXRvb2xiYXIgaW9uLWJ1dHRvbnMgaW9uLWJ1dHRvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDU4cHg7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBmb250LWZhbWlseTogbWFucm9wZS1ib2xkO1xufVxuXG5pb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLW0tYmFja2dyb3VuZCk7XG59XG4uaW5wdXQge1xuICBmb250LWZhbWlseTogbWFucm9wZS1saWdodDtcbn1cbi5sZW5ndGgge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZsb2F0OiByaWdodDtcbiAgei1pbmRleDogMjAwMDtcbiAgZm9udC1mYW1pbHk6IG1hbnJvcGUtbGlnaHQ7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnkpIWltcG9ydGFudDtcbiAgbWFyZ2luLXJpZ2h0OiA1JTtcbn1cbmlvbi10ZXh0YXJlYSB7XG4gIGNvbG9yOiBibGFjayFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIHBhZGRpbmctbGVmdDogMSU7XG4gIG1hcmdpbi1ib3R0b206IDElO1xufVxuXG5pb24taXRlbS5lcnJvciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuaW9uLWl0ZW0uZXJyb3Igc3BhbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnkpO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5pb24tbm90ZS5lcnJvci1tZXNzYWdlIGlvbi1pY29uIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICBmb250LXNpemU6IDEuMHJlbTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuaW9uLW5vdGUuZXJyb3ItbWVzc2FnZSB7IFxuICBkaXNwbGF5OiBibG9jaztcbn1cbmlvbi1idXR0b24ge1xuICBcbn1cbmJ1dHRvbi5mb290ZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1OHB4O1xuICBmb250LXNpemU6IDEuMHJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgZm9udC1mYW1pbHk6IG1hbnJvcGUtYm9sZDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnkpO1xufVxuYnV0dG9uLmZvb3Rlcjpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3BhY2l0eTogMC42O1xufVxuYnV0dG9uLmZvb3RlciBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMS4wcmVtO1xufSIsImlvbi1jYXJkLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY2FyZC1jb2xvcik7XG59XG5cbmlvbi1jYXJkLWhlYWRlciB7XG4gIC0tY29sb3I6IHZhcigtLWlvbi10ZXh0LWNvbG9yLCMwMDApO1xufVxuXG5pb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLW0tYmFja2dyb3VuZCk7XG4gIGZvbnQtZmFtaWx5OiBtYW5yb3BlLWJvbGQ7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnkpO1xufVxuaW9uLXRvb2xiYXIgaW9uLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuaW9uLXRvb2xiYXIgaW9uLWJ1dHRvbnMgaW9uLW1lbnUtYnV0dG9uIHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5KTtcbn1cblxuaW9uLWl0ZW0gaW9uLWxhYmVsIHtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbn1cblxuaW9uLWl0ZW0ud29yZENvdW50V3JhcHBlciB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbn1cblxuaW9uLXNlbGVjdCB7XG4gIGRpc3BsYXk6IGluaGVyaXQ7XG4gIGZvbnQtZmFtaWx5OiBtYW5yb3BlLWJvbGQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIG91dGxpbmU6IDFweCBzb2xpZCAjOTE5MTlEO1xuICBmb250LXNpemU6IDFyZW07XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbmlvbi1zZWxlY3Qtb3B0aW9uIHtcbiAgZm9udC1mYW1pbHk6IG1hbnJvcGUtYm9sZDtcbn1cblxuaW9uLWlucHV0IHtcbiAgY29sb3I6ICMwMDA7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xufVxuXG4jcXVpY2tBbW91bnQgaW9uLWNvbCBpb24tYnV0dG9uIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5KTtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICBmb250LWZhbWlseTogbWFucm9wZS1ib2xkO1xufVxuXG4jcXJJY29uIHtcbiAgei1pbmRleDogOTk5OTk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcmlnaHQ6IDYlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpICFpbXBvcnRhbnQ7XG59XG5cbi5pY29uLWhlYWQge1xuICBjb2xvcjogIzFGQjRDRDtcbn1cblxuLnV0aWwtYnRucyB7XG4gIHBhZGRpbmc6IDNweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDJweDtcbn1cblxuLmFjdGlvbi1idG4ge1xuICBoZWlnaHQ6IDcycHg7XG59XG5cbi50cmFuc3BhcmVudEJvZHkge1xuICBiYWNrZ3JvdW5kOiBub25lIHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIC0tYmFja2dyb3VuZDogbm9uZSB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuXG4ud2Vic2Nhbi1jYW52YXMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIC0tYmFja2dyb3VuZDogbm9uZSB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuXG5pb24tZm9vdGVyIGlvbi10b29sYmFyIGlvbi1idXR0b25zIGlvbi1idXR0b24ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1OHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgZm9udC1mYW1pbHk6IG1hbnJvcGUtYm9sZDtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1tLWJhY2tncm91bmQpO1xufVxuXG4uaW5wdXQge1xuICBmb250LWZhbWlseTogbWFucm9wZS1saWdodDtcbn1cblxuLmxlbmd0aCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZmxvYXQ6IHJpZ2h0O1xuICB6LWluZGV4OiAyMDAwO1xuICBmb250LWZhbWlseTogbWFucm9wZS1saWdodDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeSkgIWltcG9ydGFudDtcbiAgbWFyZ2luLXJpZ2h0OiA1JTtcbn1cblxuaW9uLXRleHRhcmVhIHtcbiAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIHBhZGRpbmctbGVmdDogMSU7XG4gIG1hcmdpbi1ib3R0b206IDElO1xufVxuXG5pb24taXRlbS5lcnJvciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG5pb24taXRlbS5lcnJvciBzcGFuIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeSk7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuaW9uLW5vdGUuZXJyb3ItbWVzc2FnZSBpb24taWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbmlvbi1ub3RlLmVycm9yLW1lc3NhZ2Uge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuYnV0dG9uLmZvb3RlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDU4cHg7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgZm9udC1mYW1pbHk6IG1hbnJvcGUtYm9sZDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnkpO1xufVxuXG5idXR0b24uZm9vdGVyOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBvcGFjaXR5OiAwLjY7XG59XG5cbmJ1dHRvbi5mb290ZXIgaW9uLWljb24ge1xuICBmb250LXNpemU6IDFyZW07XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/send-funds/send-funds.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/send-funds/send-funds.page.ts ***!
  \*****************************************************/
/*! exports provided: SendFundsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendFundsPage", function() { return SendFundsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _service_balance_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/balance.service */ "./src/app/service/balance.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_qr_scanner_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/qr-scanner/ngx */ "./node_modules/@ionic-native/qr-scanner/ngx/index.js");
/* harmony import */ var _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/clipboard/ngx */ "./node_modules/@ionic-native/clipboard/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _service_minima_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../service/minima-api.service */ "./src/app/service/minima-api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var qr_scanner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! qr-scanner */ "./node_modules/qr-scanner/src/qr-scanner.js");
/* harmony import */ var minima__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! minima */ "./node_modules/minima/dist/minima.js");
/* harmony import */ var minima__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(minima__WEBPACK_IMPORTED_MODULE_10__);











let SendFundsPage = class SendFundsPage {
    constructor(formBuilder, qrScanner, clipboard, alertController, zone, api, balanceService, platform, route, router) {
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
        this.isCameraOpen = false;
        this.isWebCameraOpen = false;
        this.data = {};
        // checkboxValue
        this.messageToggle = false;
        this.tokenArr = [];
        this.lastJSON = '';
        this.scanSub = null;
        this.data.message = '';
        this.pullInTokens();
    }
    ngOnInit() {
        this.sendForm = this.formBuilder.group({
            token: '',
            address: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(60),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[Mx|0x][a-zA-Z0-9]+')
                ]],
            amount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            message: ''
        });
    }
    ionViewWillEnter() {
        this.isCameraOpen = false;
        this.getTokenSelected();
    }
    ionViewWillLeave() {
        this.stopCamera();
    }
    // get token selected or set Minima as default
    getTokenSelected() {
        // check url snapshot
        const empty = undefined;
        const param = this.route.snapshot.params['id'];
        // check param
        const mMinimaToken = '0x00';
        if (param === empty || param === mMinimaToken) {
            this.itemSelected = this.tokenArr[0];
            this.updateTokenId('0x00');
        }
        else if (param !== empty && param !== mMinimaToken) {
            this.tokenArr.forEach(element => {
                if (param === element.tokenid) {
                    this.itemSelected = element;
                    this.updateTokenId(element.tokenid);
                }
            });
        }
    }
    // listen to selection change
    onItemSelection($event) {
        const param = this.route.snapshot.params['id'];
        this.tokenArr.forEach(element => {
            if (this.itemSelected === element && param !== element.tokenid) {
                this.itemSelected = element;
                this.router.navigate(['/send-funds', { id: element.tokenid }]);
                // update tokenid
                this.updateTokenId(element.tokenid);
            }
        });
    }
    // fn to update tokenid
    updateTokenId(id) {
        this.data.tokenid = id;
    }
    fillAmount(type) {
        const empty = undefined;
        let param = this.route.snapshot.params['id'];
        if (param === empty) {
            param = '0x00';
        }
        this.tokenArr.forEach(element => {
            if (param === element.tokenid) {
                this.max = element.sendable;
                if (type === 'max') {
                    this.amount.value = this.max;
                }
                else if (type === 'half') {
                    this.amount.value = (parseFloat(this.max) / 2.0).toString();
                }
                else if (type === 'quarter') {
                    this.amount.value = (parseFloat(this.max) / 4.0).toString();
                }
            }
        });
    }
    /** ScanQR: Native */
    scanQR() {
        if (this.platform.is('ios') || this.platform.is('android')) {
            this.qrScanner.prepare()
                .then((status) => {
                if (status.authorized) {
                    // Which class adding should I use?
                    this.identifyPlatformToScan_Add();
                    this.qrScanner.show();
                    this.isCameraOpen = true;
                    this.scanSub = this.qrScanner.scan().subscribe((text) => {
                        this.zone.run(() => {
                            this.data.address = text;
                            this.stopCamera();
                            this.identifyPlatformToScan_Remove();
                            this.isCameraOpen = false;
                        });
                    }, (err) => {
                        console.log('Scanned failed', err);
                    });
                }
                else if (status.denied) {
                    // camera permission was permanently denied
                    // you must use QRScanner.openSettings() method to guide the user to the settings page
                    // then they can grant the permission from there
                    this.presentAlert('Error', 'Please check camera permission', 'Camera status');
                }
                else {
                    // permission was denied, but not permanently. You can ask for permission again at a later time.
                    this.presentAlert('Error', 'Please check camera permission', 'Camera status');
                }
            })
                .catch((e) => console.log('Error is', e));
        }
    }
    stopCamera() {
        if (this.scanSub !== null) {
            this.qrScanner.hide();
            this.scanSub.unsubscribe();
        }
        this.scanSub = null;
        this.identifyPlatformToScan_Remove();
        this.isCameraOpen = false;
        this.qrScanner.destroy();
    }
    presentAlert(hdr, msg, sub) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'alert',
                header: hdr,
                subHeader: sub,
                message: msg,
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    pullInTokens() {
        this.balanceService.data.subscribe((balance) => {
            this.tokenArr = balance;
        });
    }
    sendFunds() {
        const data = this.sendForm.value;
        data.tokenid = data.token.tokenid;
        if (data.message.length > 0) {
            this.api.createTXN(data).then((res) => {
                if (minima__WEBPACK_IMPORTED_MODULE_10__["Minima"].util.checkAllResponses(res)) {
                    this.presentAlert('Transaction Status', 'Transaction has been posted to the network!', 'Successful');
                    this.resetForm();
                }
                else {
                    this.presentAlert('Transaction Status', res.message, 'Failed');
                }
            });
        }
        else {
            this.api.sendFunds(data).then((res) => {
                if (res.status) {
                    this.presentAlert('Transaction Status', 'Transaction has been posted to the network!', 'Successful');
                    this.resetForm();
                }
                else {
                    this.presentAlert('Transaction Status', res.message, 'Failed');
                }
            });
        }
    }
    resetForm() {
        this.address.value = '';
        this.amount.value = '';
        this.message.value = '';
    }
    /** MISC FUNCS */
    identifyPlatformToScan_Add() {
        document.addEventListener('DOMContentLoaded', function (event) {
            // Do work
            if (this.platform.is('ios')) {
                setTimeout(() => {
                    window.document.querySelectorAll('ion-content')
                        .forEach(element => {
                        const element1 = element.shadowRoot.querySelector('style');
                        element1.innerHTML = element1.innerHTML
                            .replace('--background:var(--ion-background-color,#fff);', '--background: transparent');
                    });
                }, 300);
            }
            else if (this.platform.is('android')) {
                // window.document.querySelector('ion-content').classList.add('transparentBody');
                setTimeout(() => {
                    window.document.querySelectorAll('ion-content')
                        .forEach(element => {
                        const element1 = element.shadowRoot.querySelector('style');
                        element1.innerHTML = element1.innerHTML
                            .replace('--background:var(--ion-background-color,#fff);', '--background: transparent');
                    });
                }, 300);
            }
        });
    }
    identifyPlatformToScan_Remove() {
        document.addEventListener('DOMContentLoaded', function (event) {
            if (this.platform.is('ios')) {
                setTimeout(() => {
                    window.document.querySelectorAll('ion-content')
                        .forEach(element => {
                        const element1 = element.shadowRoot.querySelector('style');
                        element1.innerHTML = element1.innerHTML
                            .replace('--background: transparent', '--background:var(--ion-background-color,#fff);');
                    });
                }, 300);
            }
            else if (this.platform.is('android')) {
                // window.document.querySelector('ion-content').classList.remove('transparentBody');
                setTimeout(() => {
                    window.document.querySelectorAll('ion-content')
                        .forEach(element => {
                        const element1 = element.shadowRoot.querySelector('style');
                        element1.innerHTML = element1.innerHTML
                            .replace('--background: transparent', '--background:var(--ion-background-color,#fff);');
                    });
                }, 300);
            }
        });
    }
    useMessage() {
        if (this.messageToggle) {
            this.messageToggle = false;
        }
        else {
            this.messageToggle = true;
        }
    }
    checkPlatform() {
        if (this.platform.is('desktop')) {
            return false;
        }
        else {
            return true;
        }
    }
    webScanQR() {
        this.isWebCameraOpen = true;
        qr_scanner__WEBPACK_IMPORTED_MODULE_9__["default"].WORKER_PATH = 'assets/JS/qr-scanner-worker.min.js';
        setTimeout(() => {
            this.webQrScanner = new qr_scanner__WEBPACK_IMPORTED_MODULE_9__["default"](this.videoElem.nativeElement, result => {
                this.data.address = result;
                this.isWebCameraOpen = false;
            });
            this.webQrScanner.start();
        }, 500);
    }
    stopWebScanQR() {
        this.webQrScanner.destroy();
        this.webQrScanner = null;
        this.isWebCameraOpen = false;
    }
    get tokenFormItem() {
        return this.sendForm.get('token');
    }
    get addressFormItem() {
        return this.sendForm.get('address');
    }
    get amountFormItem() {
        return this.sendForm.get('amount');
    }
    get messageFormItem() {
        return this.sendForm.get('message');
    }
};
SendFundsPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] },
    { type: _ionic_native_qr_scanner_ngx__WEBPACK_IMPORTED_MODULE_4__["QRScanner"] },
    { type: _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_5__["Clipboard"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] },
    { type: _service_minima_api_service__WEBPACK_IMPORTED_MODULE_7__["MinimaApiService"] },
    { type: _service_balance_service__WEBPACK_IMPORTED_MODULE_2__["BalanceService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('address', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonInput"])
], SendFundsPage.prototype, "address", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('amount', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonInput"])
], SendFundsPage.prototype, "amount", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('message', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonTextarea"])
], SendFundsPage.prototype, "message", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('videoElem', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"])
], SendFundsPage.prototype, "videoElem", void 0);
SendFundsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-send-funds',
        template: __webpack_require__(/*! raw-loader!./send-funds.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/send-funds/send-funds.page.html"),
        styles: [__webpack_require__(/*! ./send-funds.page.scss */ "./src/app/pages/send-funds/send-funds.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
        _ionic_native_qr_scanner_ngx__WEBPACK_IMPORTED_MODULE_4__["QRScanner"],
        _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_5__["Clipboard"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"],
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"],
        _service_minima_api_service__WEBPACK_IMPORTED_MODULE_7__["MinimaApiService"],
        _service_balance_service__WEBPACK_IMPORTED_MODULE_2__["BalanceService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"],
        _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]])
], SendFundsPage);



/***/ })

}]);
//# sourceMappingURL=pages-send-funds-send-funds-module-es2015.js.map