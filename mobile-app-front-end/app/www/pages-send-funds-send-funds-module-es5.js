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

module.exports = "<ion-app>\r\n<ion-header class=\"ion-no-border\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button class=\"menu-icon\"></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      Send\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content *ngIf=\"isCameraOpen==false\">\r\n\r\n  <ion-grid *ngIf=\"tokenArr.length == 0\">\r\n    <ion-row>\r\n      <ion-col style=\"display: flex; align-items:center; justify-content:center\" size=\"12\">\r\n        <ion-label>Fetching tokens...</ion-label>\r\n      </ion-col>\r\n      <ion-col style=\"display: flex; align-items:center; justify-content:center\" size=\"12\">\r\n        <ion-spinner name=\"crescent\"></ion-spinner>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <ion-card class=\"webscan-canvas\" *ngIf=\"!checkPlatform() && isWebCameraOpen\">\r\n    <ion-card-header class=\"medium-text\">\r\n    Scan Your Minima QR address now...\r\n    <ion-progress-bar type=\"indeterminate\" reversed=\"true\"></ion-progress-bar>\r\n    </ion-card-header>\r\n    <video height=\"240\" #videoElem></video>\r\n    <hr>\r\n    <ion-button block=\"full\" (click)=\"stopWebScanQR()\">Stop Scanning</ion-button>\r\n    <hr>\r\n  </ion-card>\r\n\r\n  <ion-card class=\"borders\" *ngIf=\"!isWebCameraOpen && tokenArr.length > 0\">\r\n    <ion-card-header>\r\n      Post A Transaction\r\n      <ion-card-title>\r\n          <ion-icon style=\" font-size:1.2rem;\" slot=\"start\" name=\"send\" class=\"icon-head medium-text\" ></ion-icon>\r\n      </ion-card-title>\r\n    </ion-card-header>\r\n\r\n    <ion-card-content>\r\n      <form [formGroup]=\"sendForm\" id=\"sendForm\" (ngSubmit)=\"sendFunds()\">\r\n        <ion-list lines=\"none\">\r\n          <ion-item>\r\n            <ion-label position=\"fixed\" class=\"medium-text\">Token</ion-label>\r\n            <ion-select\r\n              placeholder=\"Select A Token\"\r\n              formControlName=\"tokenid\"    \r\n              interface = 'alert'\r\n              [(ngModel)]='itemSelected'\r\n              class=\"medium-text input\"\r\n              (ionChange)=\"onItemSelection($event)\"> \r\n            <ion-select-option *ngFor=\"let token of tokenArr;\"  [value]=\"token.tokenid\" class=\"token-option\">\r\n              {{ token.token + \"&mdash;\"+ token.tokenid }}\r\n            </ion-select-option>\r\n          </ion-select>\r\n          </ion-item>\r\n          <ion-item lines=\"none\">\r\n            <ion-label class=\"medium-text\" position=\"fixed\">Address</ion-label>\r\n            <span (click)=\"webScanQR()\" id=\"qrIcon\"> <ion-icon alt=\"qrCode\" src=\"assets/scan-outline.svg\"></ion-icon></span>\r\n            <ion-input #address class=\"medium-text input\" formControlName=\"address\" clearInput=\"true\" placeholder=\"address\"></ion-input>\r\n          </ion-item>\r\n          <ion-item class=\"error\" lines=\"none\" *ngIf=\"addressFormItem.invalid && addressFormItem.touched\">\r\n            <ion-label position=\"fixed\"></ion-label>\r\n            <ion-note class=\"error-message\">\r\n              <ion-icon name=\"alert-circle\"></ion-icon> <span> Invalid address format!</span> <br>\r\n              <span>&mdash; An address must begin with 0x or Mx.</span> \r\n            </ion-note>\r\n          </ion-item>\r\n          <ion-item lines=\"none\">\r\n            <ion-label class=\"medium-text\" position=\"fixed\">Amount</ion-label>\r\n            <ion-input #amount type=\"number\" formControlName=\"amount\" class=\"input medium-text\" placeholder=\"amount\"></ion-input>\r\n          </ion-item>\r\n          <ion-item class=\"error\" lines=\"none\" *ngIf=\"amountFormItem.invalid && amountFormItem.touched\">\r\n            <ion-label position=\"fixed\"></ion-label>\r\n            <ion-note class=\"error-message\">\r\n              <ion-icon name=\"alert-circle\"></ion-icon> <span> Amount required!</span> <br>\r\n              <span>&mdash; Amount has to be numeric and greater than 0.</span> \r\n            </ion-note>\r\n          </ion-item>\r\n          <ion-row id=\"quickAmount\">\r\n            <ion-col size=\"3\">\r\n\r\n            </ion-col>\r\n            <ion-col size=\"9\" style=\"padding-right:2.5%\">\r\n              <ion-button class=\"medium-text\" (click)=\"fillAmount('max')\" size=\"small\" fill=\"outline\">Send Max</ion-button>\r\n              <ion-button class=\"medium-text\" (click)=\"fillAmount('half')\" size=\"small\" fill=\"outline\">Send 1/2</ion-button>\r\n              <ion-button class=\"medium-text\" (click)=\"fillAmount('quarter')\" size=\"small\" fill=\"outline\">Send 1/4</ion-button>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-item lines=\"none\">\r\n            <!-- Disabled Checkbox -->\r\n            <ion-checkbox (click)=\"useMessage()\"></ion-checkbox>\r\n            <ion-label class=\"medium-text\" [hidden]=\"messageToggle\" style=\"padding-left: 10px;\">Message</ion-label>\r\n            <ion-label class=\"medium-text\" [hidden]=\"!messageToggle\" style=\"padding-left: 10px;\">This message is public</ion-label>\r\n            </ion-item>\r\n            <ion-item [hidden]=\"!messageToggle\" lines=\"none\">\r\n                <ion-textarea \r\n                [(ngModel)]=\"data.message\"\r\n                formControlName=\"message\"\r\n                class=\"medium-text input\"\r\n                auto-grow=\"false\"\r\n                #message \r\n                placeholder=\"type your message...\"\r\n                maxlength=\"255\">\r\n                </ion-textarea>\r\n            </ion-item>\r\n            <ion-note *ngIf=\"data.message\" class=\"length\">{{ data.message.length +\"/255\" }}</ion-note>\r\n        </ion-list>\r\n      </form>\r\n        \r\n        \r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n</ion-content>\r\n<ion-footer>\r\n  <ion-toolbar class=\"border-t\">\r\n    <ion-buttons> \r\n      <ion-button type=\"button\" class=\"action-btn medium-text\" expand=\"block\" (click)=\"stopCamera()\"  *ngIf=\"isCameraOpen==true\">\r\n        Stop scanning\r\n       </ion-button>\r\n      <ion-button #submitBtn [disabled]=\"sendForm.invalid\" expand=\"block\" *ngIf=\"isCameraOpen==false\">\r\n        <button type=\"submit\" form=\"sendForm\" class=\"footer\">\r\n          <ion-icon slot=\"start\" name=\"send\"></ion-icon> Send Funds\r\n        </button> \r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n</ion-app>\r\n\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _send_funds_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./send-funds.page */ "./src/app/pages/send-funds/send-funds.page.ts");







var routes = [
    {
        path: '',
        component: _send_funds_page__WEBPACK_IMPORTED_MODULE_6__["SendFundsPage"]
    }
];
var SendFundsPageModule = /** @class */ (function () {
    function SendFundsPageModule() {
    }
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
    return SendFundsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/send-funds/send-funds.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/send-funds/send-funds.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-card-content {\n  background: var(--ion-card-color);\n}\n\nion-card-header {\n  --color: var(--ion-text-color,#000);\n}\n\nion-toolbar {\n  --background: var(--ion-m-background);\n  font-family: manrope-bold;\n  color: var(--ion-color-tertiary);\n}\n\nion-toolbar ion-title {\n  padding-top: 5%;\n  font-size: 1.2rem;\n  color: var(--ion-color-tertiary);\n}\n\nion-toolbar ion-buttons ion-menu-button {\n  font-size: 1rem;\n  color: var(--ion-color-tertiary);\n}\n\nion-item ion-label {\n  white-space: normal;\n}\n\nion-item.wordCountWrapper {\n  padding: 0;\n  margin: 0;\n}\n\nion-select {\n  display: inherit;\n  font-family: manrope-bold;\n  background-color: #ffffff;\n  outline: 1px solid #91919D;\n  font-size: 1rem;\n  color: var(--ion-color-primary);\n}\n\nion-select-option {\n  font-family: manrope-bold;\n}\n\nion-input {\n  color: #000;\n  line-height: 16px;\n  background-color: #ffffff;\n}\n\n#quickAmount ion-col ion-button {\n  float: right;\n  color: var(--ion-color-gray-two);\n  background-color: var(--ion-color-primary);\n  text-transform: none;\n  font-family: manrope-bold;\n}\n\n#qrIcon {\n  z-index: 99999;\n  cursor: pointer;\n  right: 6%;\n  position: absolute;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  color: var(--ion-color-primary) !important;\n}\n\n.icon-head {\n  color: #1FB4CD;\n}\n\n.util-btns {\n  padding: 3px;\n  text-align: center;\n  margin: 2px;\n}\n\n.action-btn {\n  height: 72px;\n}\n\n.transparentBody {\n  background: none transparent !important;\n  --background: none transparent !important;\n}\n\n.webscan-canvas {\n  text-align: center;\n  --background: none transparent !important;\n}\n\nion-footer ion-toolbar ion-buttons ion-button {\n  width: 100%;\n  height: 58px;\n  text-transform: none;\n  font-family: manrope-bold;\n}\n\nion-toolbar {\n  --background: var(--ion-m-background);\n}\n\n.input {\n  font-family: manrope-light;\n}\n\n.length {\n  position: relative;\n  float: right;\n  z-index: 2000;\n  font-family: manrope-light;\n  color: var(--ion-color-tertiary) !important;\n  margin-right: 5%;\n}\n\nion-textarea {\n  color: black !important;\n  background: #ffffff;\n  padding-left: 1%;\n  margin-bottom: 1%;\n}\n\nion-item.error {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\nion-item.error span {\n  color: var(--ion-color-tertiary);\n  display: inline-block;\n  vertical-align: middle;\n}\n\nion-note.error-message ion-icon {\n  color: var(--ion-color-secondary);\n  font-size: 1rem;\n  display: inline-block;\n  vertical-align: middle;\n}\n\nion-note.error-message {\n  display: block;\n}\n\nbutton.footer {\n  width: 100%;\n  height: 58px;\n  font-size: 1rem;\n  text-align: center;\n  text-transform: none;\n  font-family: manrope-bold;\n  background: transparent;\n  color: var(--ion-color-tertiary);\n}\n\nbutton.footer:hover {\n  cursor: pointer;\n  opacity: 0.6;\n}\n\nbutton.footer ion-icon {\n  font-size: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGlhc25lbXIvcHJvamVjdHMvV0FMTEVUL21vYmlsZS1hcHAtZnJvbnQtZW5kL2FwcC9zcmMvYXBwL3BhZ2VzL3NlbmQtZnVuZHMvc2VuZC1mdW5kcy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3NlbmQtZnVuZHMvc2VuZC1mdW5kcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQ0FBQTtBQ0NGOztBRENBO0VBQ0UsbUNBQUE7QUNFRjs7QURBQTtFQUNFLHFDQUFBO0VBQ0EseUJBQUE7RUFDQSxnQ0FBQTtBQ0dGOztBREZFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0NBQUE7QUNJSjs7QURGRTtFQUNFLGVBQUE7RUFDQSxnQ0FBQTtBQ0lKOztBRERBO0VBQ0UsbUJBQUE7QUNJRjs7QURGQTtFQUNFLFVBQUE7RUFDQSxTQUFBO0FDS0Y7O0FESEE7RUFDRSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSwwQkFBQTtFQUNBLGVBQUE7RUFDQSwrQkFBQTtBQ01GOztBREpBO0VBQ0UseUJBQUE7QUNPRjs7QURMQTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0FDUUY7O0FETkM7RUFDQyxZQUFBO0VBQ0EsZ0NBQUE7RUFDQSwwQ0FBQTtFQUNBLG9CQUFBO0VBQ0EseUJBQUE7QUNTRjs7QURQQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSwwQ0FBQTtBQ1VGOztBRFBBO0VBQ0UsY0FBQTtBQ1VGOztBRFJBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBRUEsV0FBQTtBQ1VGOztBRFJBO0VBQ0UsWUFBQTtBQ1dGOztBRFJBO0VBQ0MsdUNBQUE7RUFDQSx5Q0FBQTtBQ1dEOztBRFRBO0VBQ0Msa0JBQUE7RUFDQyx5Q0FBQTtBQ1lGOztBRFZBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLHlCQUFBO0FDYUY7O0FEVkE7RUFDRSxxQ0FBQTtBQ2FGOztBRFhBO0VBQ0UsMEJBQUE7QUNjRjs7QURaQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSwwQkFBQTtFQUNBLDJDQUFBO0VBQ0EsZ0JBQUE7QUNlRjs7QURiQTtFQUNFLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDZ0JGOztBRGJBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7QUNnQkY7O0FEZEE7RUFDRSxnQ0FBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7QUNpQkY7O0FEZkE7RUFDRSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0FDa0JGOztBRGhCQTtFQUNFLGNBQUE7QUNtQkY7O0FEakJBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLHlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQ0FBQTtBQ29CRjs7QURsQkE7RUFDRSxlQUFBO0VBQ0EsWUFBQTtBQ3FCRjs7QURuQkE7RUFDRSxlQUFBO0FDc0JGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2VuZC1mdW5kcy9zZW5kLWZ1bmRzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJkLWNvbnRlbnQge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jYXJkLWNvbG9yKTtcclxufVxyXG5pb24tY2FyZC1oZWFkZXIge1xyXG4gIC0tY29sb3I6IHZhcigtLWlvbi10ZXh0LWNvbG9yLCMwMDApO1xyXG59XHJcbmlvbi10b29sYmFyIHtcclxuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1tLWJhY2tncm91bmQpO1xyXG4gIGZvbnQtZmFtaWx5OiBtYW5yb3BlLWJvbGQ7XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeSk7XHJcbiAgaW9uLXRpdGxlIHtcclxuICAgIHBhZGRpbmctdG9wOiA1JTtcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeSk7XHJcbiAgfVxyXG4gIGlvbi1idXR0b25zIGlvbi1tZW51LWJ1dHRvbiB7XHJcbiAgICBmb250LXNpemU6IDEuMHJlbTtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnkpO1xyXG4gIH1cclxufVxyXG5pb24taXRlbSBpb24tbGFiZWwge1xyXG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbn1cclxuaW9uLWl0ZW0ud29yZENvdW50V3JhcHBlciB7XHJcbiAgcGFkZGluZzowO1xyXG4gIG1hcmdpbjowO1xyXG59XHJcbmlvbi1zZWxlY3Qge1xyXG4gIGRpc3BsYXk6IGluaGVyaXQ7XHJcbiAgZm9udC1mYW1pbHk6IG1hbnJvcGUtYm9sZDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gIG91dGxpbmU6IDFweCBzb2xpZCAjOTE5MTlEO1xyXG4gIGZvbnQtc2l6ZTogMS4wcmVtO1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbn1cclxuaW9uLXNlbGVjdC1vcHRpb24ge1xyXG4gIGZvbnQtZmFtaWx5OiBtYW5yb3BlLWJvbGQ7XHJcbn1cclxuaW9uLWlucHV0IHtcclxuICBjb2xvcjogIzAwMDtcclxuICBsaW5lLWhlaWdodDogMTZweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG59XHJcbiAjcXVpY2tBbW91bnQgaW9uLWNvbCBpb24tYnV0dG9uIHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1ncmF5LXR3byk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gIGZvbnQtZmFtaWx5OiBtYW5yb3BlLWJvbGQ7XHJcbn1cclxuI3FySWNvbiB7XHJcbiAgei1pbmRleDogOTk5OTk7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHJpZ2h0OiA2JTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSkhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaWNvbi1oZWFke1xyXG4gIGNvbG9yOiAjMUZCNENEO1xyXG59XHJcbi51dGlsLWJ0bnMge1xyXG4gIHBhZGRpbmc6IDNweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgLy8gcGFkZGluZzogMXB4O1xyXG4gIG1hcmdpbjogMnB4O1xyXG59XHJcbi5hY3Rpb24tYnRuIHtcclxuICBoZWlnaHQ6IDcycHg7XHJcbn1cclxuXHJcbi50cmFuc3BhcmVudEJvZHkge1xyXG5cdGJhY2tncm91bmQ6IG5vbmUgdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuXHQtLWJhY2tncm91bmQ6IG5vbmUgdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG4ud2Vic2Nhbi1jYW52YXMge1xyXG4gdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gXHQtLWJhY2tncm91bmQ6IG5vbmUgdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5pb24tZm9vdGVyIGlvbi10b29sYmFyIGlvbi1idXR0b25zIGlvbi1idXR0b24ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNThweDtcclxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxuICBmb250LWZhbWlseTogbWFucm9wZS1ib2xkO1xyXG59XHJcblxyXG5pb24tdG9vbGJhciB7XHJcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tbS1iYWNrZ3JvdW5kKTtcclxufVxyXG4uaW5wdXQge1xyXG4gIGZvbnQtZmFtaWx5OiBtYW5yb3BlLWxpZ2h0O1xyXG59XHJcbi5sZW5ndGgge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgei1pbmRleDogMjAwMDtcclxuICBmb250LWZhbWlseTogbWFucm9wZS1saWdodDtcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5KSFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1JTtcclxufVxyXG5pb24tdGV4dGFyZWEge1xyXG4gIGNvbG9yOiBibGFjayFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICBwYWRkaW5nLWxlZnQ6IDElO1xyXG4gIG1hcmdpbi1ib3R0b206IDElO1xyXG59XHJcblxyXG5pb24taXRlbS5lcnJvciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbmlvbi1pdGVtLmVycm9yIHNwYW4ge1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnkpO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcbmlvbi1ub3RlLmVycm9yLW1lc3NhZ2UgaW9uLWljb24ge1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcclxuICBmb250LXNpemU6IDEuMHJlbTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG5pb24tbm90ZS5lcnJvci1tZXNzYWdlIHsgXHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuYnV0dG9uLmZvb3RlciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA1OHB4O1xyXG4gIGZvbnQtc2l6ZTogMS4wcmVtO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxuICBmb250LWZhbWlseTogbWFucm9wZS1ib2xkO1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnkpO1xyXG59XHJcbmJ1dHRvbi5mb290ZXI6aG92ZXIge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBvcGFjaXR5OiAwLjY7XHJcbn1cclxuYnV0dG9uLmZvb3RlciBpb24taWNvbiB7XHJcbiAgZm9udC1zaXplOiAxLjByZW07XHJcbn0iLCJpb24tY2FyZC1jb250ZW50IHtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNhcmQtY29sb3IpO1xufVxuXG5pb24tY2FyZC1oZWFkZXIge1xuICAtLWNvbG9yOiB2YXIoLS1pb24tdGV4dC1jb2xvciwjMDAwKTtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1tLWJhY2tncm91bmQpO1xuICBmb250LWZhbWlseTogbWFucm9wZS1ib2xkO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5KTtcbn1cbmlvbi10b29sYmFyIGlvbi10aXRsZSB7XG4gIHBhZGRpbmctdG9wOiA1JTtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnkpO1xufVxuaW9uLXRvb2xiYXIgaW9uLWJ1dHRvbnMgaW9uLW1lbnUtYnV0dG9uIHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5KTtcbn1cblxuaW9uLWl0ZW0gaW9uLWxhYmVsIHtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbn1cblxuaW9uLWl0ZW0ud29yZENvdW50V3JhcHBlciB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbn1cblxuaW9uLXNlbGVjdCB7XG4gIGRpc3BsYXk6IGluaGVyaXQ7XG4gIGZvbnQtZmFtaWx5OiBtYW5yb3BlLWJvbGQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIG91dGxpbmU6IDFweCBzb2xpZCAjOTE5MTlEO1xuICBmb250LXNpemU6IDFyZW07XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbmlvbi1zZWxlY3Qtb3B0aW9uIHtcbiAgZm9udC1mYW1pbHk6IG1hbnJvcGUtYm9sZDtcbn1cblxuaW9uLWlucHV0IHtcbiAgY29sb3I6ICMwMDA7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xufVxuXG4jcXVpY2tBbW91bnQgaW9uLWNvbCBpb24tYnV0dG9uIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWdyYXktdHdvKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgZm9udC1mYW1pbHk6IG1hbnJvcGUtYm9sZDtcbn1cblxuI3FySWNvbiB7XG4gIHotaW5kZXg6IDk5OTk5O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHJpZ2h0OiA2JTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KSAhaW1wb3J0YW50O1xufVxuXG4uaWNvbi1oZWFkIHtcbiAgY29sb3I6ICMxRkI0Q0Q7XG59XG5cbi51dGlsLWJ0bnMge1xuICBwYWRkaW5nOiAzcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAycHg7XG59XG5cbi5hY3Rpb24tYnRuIHtcbiAgaGVpZ2h0OiA3MnB4O1xufVxuXG4udHJhbnNwYXJlbnRCb2R5IHtcbiAgYmFja2dyb3VuZDogbm9uZSB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAtLWJhY2tncm91bmQ6IG5vbmUgdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cblxuLndlYnNjYW4tY2FudmFzIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAtLWJhY2tncm91bmQ6IG5vbmUgdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cblxuaW9uLWZvb3RlciBpb24tdG9vbGJhciBpb24tYnV0dG9ucyBpb24tYnV0dG9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNThweDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGZvbnQtZmFtaWx5OiBtYW5yb3BlLWJvbGQ7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tbS1iYWNrZ3JvdW5kKTtcbn1cblxuLmlucHV0IHtcbiAgZm9udC1mYW1pbHk6IG1hbnJvcGUtbGlnaHQ7XG59XG5cbi5sZW5ndGgge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZsb2F0OiByaWdodDtcbiAgei1pbmRleDogMjAwMDtcbiAgZm9udC1mYW1pbHk6IG1hbnJvcGUtbGlnaHQ7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnkpICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1yaWdodDogNSU7XG59XG5cbmlvbi10ZXh0YXJlYSB7XG4gIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBwYWRkaW5nLWxlZnQ6IDElO1xuICBtYXJnaW4tYm90dG9tOiAxJTtcbn1cblxuaW9uLWl0ZW0uZXJyb3Ige1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuaW9uLWl0ZW0uZXJyb3Igc3BhbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnkpO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbmlvbi1ub3RlLmVycm9yLW1lc3NhZ2UgaW9uLWljb24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG5pb24tbm90ZS5lcnJvci1tZXNzYWdlIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbmJ1dHRvbi5mb290ZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1OHB4O1xuICBmb250LXNpemU6IDFyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGZvbnQtZmFtaWx5OiBtYW5yb3BlLWJvbGQ7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5KTtcbn1cblxuYnV0dG9uLmZvb3Rlcjpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3BhY2l0eTogMC42O1xufVxuXG5idXR0b24uZm9vdGVyIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAxcmVtO1xufSJdfQ== */"

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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _service_balance_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/balance.service */ "./src/app/service/balance.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_qr_scanner_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/qr-scanner/ngx */ "./node_modules/@ionic-native/qr-scanner/ngx/index.js");
/* harmony import */ var _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/clipboard/ngx */ "./node_modules/@ionic-native/clipboard/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _service_minima_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../service/minima-api.service */ "./src/app/service/minima-api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var qr_scanner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! qr-scanner */ "./node_modules/qr-scanner/src/qr-scanner.js");
/* harmony import */ var minima__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! minima */ "./node_modules/minima/dist/minima.js");
/* harmony import */ var minima__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(minima__WEBPACK_IMPORTED_MODULE_10__);











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
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(60),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[Mx|0x][a-zA-Z0-9]+')
                ]],
            amount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            message: ''
        });
    };
    Object.defineProperty(SendFundsPage.prototype, "tokenFormItem", {
        get: function () {
            return this.sendForm.get('token');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SendFundsPage.prototype, "addressFormItem", {
        get: function () {
            return this.sendForm.get('address');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SendFundsPage.prototype, "amountFormItem", {
        get: function () {
            return this.sendForm.get('amount');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SendFundsPage.prototype, "messageFormItem", {
        get: function () {
            return this.sendForm.get('message');
        },
        enumerable: true,
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
                if (minima__WEBPACK_IMPORTED_MODULE_10__["Minima"].util.checkAllResponses(res)) {
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
        var empty = undefined;
        var param = this.route.snapshot.params['id'];
        if (param === empty) {
            param = '0x00';
        }
        this.tokenArr.forEach(function (element) {
            if (param === element.tokenid) {
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
            })
                .catch(function (e) { return console.log('Error is', e); });
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
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
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
        qr_scanner__WEBPACK_IMPORTED_MODULE_9__["default"].WORKER_PATH = 'assets/JS/qr-scanner-worker.min.js';
        setTimeout(function () {
            _this.webQrScanner = new qr_scanner__WEBPACK_IMPORTED_MODULE_9__["default"](_this.videoElem.nativeElement, function (result) {
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
    SendFundsPage.ctorParameters = function () { return [
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
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('submitBtn', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonButton"])
    ], SendFundsPage.prototype, "submitBtn", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('amount', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonInput"])
    ], SendFundsPage.prototype, "amountInp", void 0);
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
    return SendFundsPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-send-funds-send-funds-module-es5.js.map