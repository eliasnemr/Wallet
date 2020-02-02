(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["mini-term-mini-term-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/mini-term/mini-term.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/mini-term/mini-term.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title color=\"primary\">\n      Terminal\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content class=\"padding\" [scrollEvents]=\"true\">\n  \n    <ion-grid *ngFor=\"let theExecute of theExecuted\">\n      <ion-list lines=\"none\">\n        <ion-item class=\"terminal\">\n        <pre> {{ theExecute }}</pre>\n        </ion-item>\n      </ion-list>\n    </ion-grid>\n    <ion-list lines=\"none\">\n    <ion-item class=\"line\">\n      <span id=\"path\">m:/&nbsp;>&nbsp;</span>\n      <ion-input type=\"text\" id=\"input\" [(ngModel)]=\"toExecute\"\n      (keyup.enter) = \"request(toExecute)\"></ion-input>\n    </ion-item>\n    </ion-list>\n\n      \n\n</ion-content>\n\n\n<!-- <div class=\"terminal\">\n  <div id=\"history\">\n    \n  </div>\n  <div class=\"line\">\n    <span id=\"path\">c:/&nbsp;>&nbsp;</span>\n    <input type=\"text\" id=\"input\">\n  </div>\n</div> -->\n\n\n\n\n\n<!-- Old 'terminal' -->\n<!-- <ion-content #content>\n\n<ion-grid *ngFor=\"let theExecute of theExecuted\" >\n    <ion-row>\n      <ion-col>\n        <ion-item>\n            <ion-label\n            color=\"primary\"\n            style=\"background-color: cornsilk;\"\n            class=\"ion-text-wrap\">\n              <pre> {{theExecute}} </pre> \n            </ion-label>\n          </ion-item> \n      </ion-col> \n    </ion-row>\n</ion-grid>\n</ion-content>\n\n<ion-footer>\n<ion-toolbar>\n  <ion-row>\n      <ion-col>\n        <ion-input\n        style=\"background-color: #E0E0E0\"\n        type=\"text\"\n        autocapitalize=\"none\"\n        autocorrect=\"off\"\n        placeholder=\"$command line\"\n        [(ngModel)]=\"toExecute\"\n        (keyup.enter) = \"getCall()\">\n      </ion-input>\n    </ion-col>\n      <button ion-button small full item-end clear \n        (click)=\"getCall()\" \n        [disabled] = \"!toExecute\">Execute</button>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer> -->\n\n"

/***/ }),

/***/ "./node_modules/xterm/css/xterm.css":
/*!******************************************!*\
  !*** ./node_modules/xterm/css/xterm.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Copyright (c) 2014 The xterm.js authors. All rights reserved.\n * Copyright (c) 2012-2013, Christopher Jeffrey (MIT License)\n * https://github.com/chjj/term.js\n * @license MIT\n *\n * Permission is hereby granted, free of charge, to any person obtaining a copy\n * of this software and associated documentation files (the \"Software\"), to deal\n * in the Software without restriction, including without limitation the rights\n * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n * copies of the Software, and to permit persons to whom the Software is\n * furnished to do so, subject to the following conditions:\n *\n * The above copyright notice and this permission notice shall be included in\n * all copies or substantial portions of the Software.\n *\n * THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n * THE SOFTWARE.\n *\n * Originally forked from (with the author's permission):\n *   Fabrice Bellard's javascript vt100 for jslinux:\n *   http://bellard.org/jslinux/\n *   Copyright (c) 2011 Fabrice Bellard\n *   The original design remains. The terminal itself\n *   has been extended to include xterm CSI codes, among\n *   other features.\n */\n\n/**\n *  Default styles for xterm.js\n */\n\n.xterm {\n    -webkit-font-feature-settings: \"liga\" 0;\n            font-feature-settings: \"liga\" 0;\n    position: relative;\n    -moz-user-select: none;\n         user-select: none;\n    -ms-user-select: none;\n    -webkit-user-select: none;\n}\n\n.xterm.focus,\n.xterm:focus {\n    outline: none;\n}\n\n.xterm .xterm-helpers {\n    position: absolute;\n    top: 0;\n    /**\n     * The z-index of the helpers must be higher than the canvases in order for\n     * IMEs to appear on top.\n     */\n    z-index: 5;\n}\n\n.xterm .xterm-helper-textarea {\n    /*\n     * HACK: to fix IE's blinking cursor\n     * Move textarea out of the screen to the far left, so that the cursor is not visible.\n     */\n    position: absolute;\n    opacity: 0;\n    left: -9999em;\n    top: 0;\n    width: 0;\n    height: 0;\n    z-index: -5;\n    /** Prevent wrapping so the IME appears against the textarea at the correct position */\n    white-space: nowrap;\n    overflow: hidden;\n    resize: none;\n}\n\n.xterm .composition-view {\n    /* TODO: Composition position got messed up somewhere */\n    background: #000;\n    color: #FFF;\n    display: none;\n    position: absolute;\n    white-space: nowrap;\n    z-index: 1;\n}\n\n.xterm .composition-view.active {\n    display: block;\n}\n\n.xterm .xterm-viewport {\n    /* On OS X this is required in order for the scroll bar to appear fully opaque */\n    background-color: #000;\n    overflow-y: scroll;\n    cursor: default;\n    position: absolute;\n    right: 0;\n    left: 0;\n    top: 0;\n    bottom: 0;\n}\n\n.xterm .xterm-screen {\n    position: relative;\n}\n\n.xterm .xterm-screen canvas {\n    position: absolute;\n    left: 0;\n    top: 0;\n}\n\n.xterm .xterm-scroll-area {\n    visibility: hidden;\n}\n\n.xterm-char-measure-element {\n    display: inline-block;\n    visibility: hidden;\n    position: absolute;\n    top: 0;\n    left: -9999em;\n    line-height: normal;\n}\n\n.xterm {\n    cursor: text;\n}\n\n.xterm.enable-mouse-events {\n    /* When mouse events are enabled (eg. tmux), revert to the standard pointer cursor */\n    cursor: default;\n}\n\n.xterm.xterm-cursor-pointer {\n    cursor: pointer;\n}\n\n.xterm.column-select.focus {\n    /* Column selection mode */\n    cursor: crosshair;\n}\n\n.xterm .xterm-accessibility,\n.xterm .xterm-message {\n    position: absolute;\n    left: 0;\n    top: 0;\n    bottom: 0;\n    right: 0;\n    z-index: 10;\n    color: transparent;\n}\n\n.xterm .live-region {\n    position: absolute;\n    left: -9999px;\n    width: 1px;\n    height: 1px;\n    overflow: hidden;\n}\n\n.xterm-dim {\n    opacity: 0.5;\n}\n\n.xterm-underline {\n    text-decoration: underline;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy94dGVybS9jc3MveHRlcm0uY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBK0JFOztBQUVGOztFQUVFOztBQUVGO0lBQ0ksdUNBQStCO1lBQS9CLCtCQUErQjtJQUMvQixrQkFBa0I7SUFDbEIsc0JBQWlCO1NBQWpCLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIseUJBQXlCO0FBQzdCOztBQUVBOztJQUVJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOOzs7TUFHRTtJQUNGLFVBQVU7QUFDZDs7QUFFQTtJQUNJOzs7TUFHRTtJQUNGLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsYUFBYTtJQUNiLE1BQU07SUFDTixRQUFRO0lBQ1IsU0FBUztJQUNULFdBQVc7SUFDWCxzRkFBc0Y7SUFDdEYsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksdURBQXVEO0lBQ3ZELGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGdGQUFnRjtJQUNoRixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLE9BQU87SUFDUCxNQUFNO0lBQ04sU0FBUztBQUNiOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLE9BQU87SUFDUCxNQUFNO0FBQ1Y7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxvRkFBb0Y7SUFDcEYsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSwwQkFBMEI7SUFDMUIsaUJBQWlCO0FBQ3JCOztBQUVBOztJQUVJLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsTUFBTTtJQUNOLFNBQVM7SUFDVCxRQUFRO0lBQ1IsV0FBVztJQUNYLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsVUFBVTtJQUNWLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCIiwiZmlsZSI6Im5vZGVfbW9kdWxlcy94dGVybS9jc3MveHRlcm0uY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQgVGhlIHh0ZXJtLmpzIGF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTItMjAxMywgQ2hyaXN0b3BoZXIgSmVmZnJleSAoTUlUIExpY2Vuc2UpXG4gKiBodHRwczovL2dpdGh1Yi5jb20vY2hqai90ZXJtLmpzXG4gKiBAbGljZW5zZSBNSVRcbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICpcbiAqIE9yaWdpbmFsbHkgZm9ya2VkIGZyb20gKHdpdGggdGhlIGF1dGhvcidzIHBlcm1pc3Npb24pOlxuICogICBGYWJyaWNlIEJlbGxhcmQncyBqYXZhc2NyaXB0IHZ0MTAwIGZvciBqc2xpbnV4OlxuICogICBodHRwOi8vYmVsbGFyZC5vcmcvanNsaW51eC9cbiAqICAgQ29weXJpZ2h0IChjKSAyMDExIEZhYnJpY2UgQmVsbGFyZFxuICogICBUaGUgb3JpZ2luYWwgZGVzaWduIHJlbWFpbnMuIFRoZSB0ZXJtaW5hbCBpdHNlbGZcbiAqICAgaGFzIGJlZW4gZXh0ZW5kZWQgdG8gaW5jbHVkZSB4dGVybSBDU0kgY29kZXMsIGFtb25nXG4gKiAgIG90aGVyIGZlYXR1cmVzLlxuICovXG5cbi8qKlxuICogIERlZmF1bHQgc3R5bGVzIGZvciB4dGVybS5qc1xuICovXG5cbi54dGVybSB7XG4gICAgZm9udC1mZWF0dXJlLXNldHRpbmdzOiBcImxpZ2FcIiAwO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuLnh0ZXJtLmZvY3VzLFxuLnh0ZXJtOmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xufVxuXG4ueHRlcm0gLnh0ZXJtLWhlbHBlcnMge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgLyoqXG4gICAgICogVGhlIHotaW5kZXggb2YgdGhlIGhlbHBlcnMgbXVzdCBiZSBoaWdoZXIgdGhhbiB0aGUgY2FudmFzZXMgaW4gb3JkZXIgZm9yXG4gICAgICogSU1FcyB0byBhcHBlYXIgb24gdG9wLlxuICAgICAqL1xuICAgIHotaW5kZXg6IDU7XG59XG5cbi54dGVybSAueHRlcm0taGVscGVyLXRleHRhcmVhIHtcbiAgICAvKlxuICAgICAqIEhBQ0s6IHRvIGZpeCBJRSdzIGJsaW5raW5nIGN1cnNvclxuICAgICAqIE1vdmUgdGV4dGFyZWEgb3V0IG9mIHRoZSBzY3JlZW4gdG8gdGhlIGZhciBsZWZ0LCBzbyB0aGF0IHRoZSBjdXJzb3IgaXMgbm90IHZpc2libGUuXG4gICAgICovXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgbGVmdDogLTk5OTllbTtcbiAgICB0b3A6IDA7XG4gICAgd2lkdGg6IDA7XG4gICAgaGVpZ2h0OiAwO1xuICAgIHotaW5kZXg6IC01O1xuICAgIC8qKiBQcmV2ZW50IHdyYXBwaW5nIHNvIHRoZSBJTUUgYXBwZWFycyBhZ2FpbnN0IHRoZSB0ZXh0YXJlYSBhdCB0aGUgY29ycmVjdCBwb3NpdGlvbiAqL1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICByZXNpemU6IG5vbmU7XG59XG5cbi54dGVybSAuY29tcG9zaXRpb24tdmlldyB7XG4gICAgLyogVE9ETzogQ29tcG9zaXRpb24gcG9zaXRpb24gZ290IG1lc3NlZCB1cCBzb21ld2hlcmUgKi9cbiAgICBiYWNrZ3JvdW5kOiAjMDAwO1xuICAgIGNvbG9yOiAjRkZGO1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgei1pbmRleDogMTtcbn1cblxuLnh0ZXJtIC5jb21wb3NpdGlvbi12aWV3LmFjdGl2ZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbi54dGVybSAueHRlcm0tdmlld3BvcnQge1xuICAgIC8qIE9uIE9TIFggdGhpcyBpcyByZXF1aXJlZCBpbiBvcmRlciBmb3IgdGhlIHNjcm9sbCBiYXIgdG8gYXBwZWFyIGZ1bGx5IG9wYXF1ZSAqL1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDA7XG4gICAgbGVmdDogMDtcbiAgICB0b3A6IDA7XG4gICAgYm90dG9tOiAwO1xufVxuXG4ueHRlcm0gLnh0ZXJtLXNjcmVlbiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ueHRlcm0gLnh0ZXJtLXNjcmVlbiBjYW52YXMge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogMDtcbn1cblxuLnh0ZXJtIC54dGVybS1zY3JvbGwtYXJlYSB7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuXG4ueHRlcm0tY2hhci1tZWFzdXJlLWVsZW1lbnQge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAtOTk5OWVtO1xuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG59XG5cbi54dGVybSB7XG4gICAgY3Vyc29yOiB0ZXh0O1xufVxuXG4ueHRlcm0uZW5hYmxlLW1vdXNlLWV2ZW50cyB7XG4gICAgLyogV2hlbiBtb3VzZSBldmVudHMgYXJlIGVuYWJsZWQgKGVnLiB0bXV4KSwgcmV2ZXJ0IHRvIHRoZSBzdGFuZGFyZCBwb2ludGVyIGN1cnNvciAqL1xuICAgIGN1cnNvcjogZGVmYXVsdDtcbn1cblxuLnh0ZXJtLnh0ZXJtLWN1cnNvci1wb2ludGVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi54dGVybS5jb2x1bW4tc2VsZWN0LmZvY3VzIHtcbiAgICAvKiBDb2x1bW4gc2VsZWN0aW9uIG1vZGUgKi9cbiAgICBjdXJzb3I6IGNyb3NzaGFpcjtcbn1cblxuLnh0ZXJtIC54dGVybS1hY2Nlc3NpYmlsaXR5LFxuLnh0ZXJtIC54dGVybS1tZXNzYWdlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICB0b3A6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHotaW5kZXg6IDEwO1xuICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLnh0ZXJtIC5saXZlLXJlZ2lvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IC05OTk5cHg7XG4gICAgd2lkdGg6IDFweDtcbiAgICBoZWlnaHQ6IDFweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ueHRlcm0tZGltIHtcbiAgICBvcGFjaXR5OiAwLjU7XG59XG5cbi54dGVybS11bmRlcmxpbmUge1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/mini-term/mini-term.module.ts":
/*!***********************************************!*\
  !*** ./src/app/mini-term/mini-term.module.ts ***!
  \***********************************************/
/*! exports provided: MiniTermPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiniTermPageModule", function() { return MiniTermPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _mini_term_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mini-term.page */ "./src/app/mini-term/mini-term.page.ts");







const routes = [
    {
        path: '',
        component: _mini_term_page__WEBPACK_IMPORTED_MODULE_6__["MiniTermPage"]
    }
];
let MiniTermPageModule = class MiniTermPageModule {
};
MiniTermPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_mini_term_page__WEBPACK_IMPORTED_MODULE_6__["MiniTermPage"]]
    })
], MiniTermPageModule);



/***/ }),

/***/ "./src/app/mini-term/mini-term.page.ts":
/*!*********************************************!*\
  !*** ./src/app/mini-term/mini-term.page.ts ***!
  \*********************************************/
/*! exports provided: MiniTermPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiniTermPage", function() { return MiniTermPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");





//node_modules/xterm/css/xterm.css
let MiniTermPage = class MiniTermPage {
    constructor(http, loadingController, navCtrl) {
        this.http = http;
        this.loadingController = loadingController;
        this.navCtrl = navCtrl;
        this.toExecute = '';
        this.theExecuted = [];
        this.host = '';
        this.loader = null;
        this.host = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].defaultNode;
        this.host = this.getHost();
    }
    buttonHandler() {
        if (this.toExecute == '') {
        }
        else {
            this.isEnabled = true;
        }
    }
    ngOnInit() { }
    ionViewDidEnter() {
    }
    scrollToBottomOnInit() {
        this.content.scrollToBottom(1500);
    }
    getHost() {
        if (localStorage.getItem('minima_host') == null) {
            localStorage.setItem('minima_host', this.host);
            return this.host;
        }
        else {
            return localStorage.getItem('minima_host');
        }
    }
    getCall() {
        return this.request(this.toExecute);
    }
    showLoader() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.loader == null) {
                this.loader = yield this.loadingController.create({
                    message: 'Loading'
                });
                this.loader.present();
            }
        });
    }
    hideLoader() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.loader !== null) {
                yield this.loader.dismiss();
                this.loader = null;
            }
            else { }
        });
    }
    request(route) {
        const self = this;
        //setTimeout( () => {self.showLoader() }, 0);
        console.log(route);
        return new Promise((resolve, reject) => {
            self.http.get(self.host + route, { responseType: 'json' }).subscribe((d) => {
                //setTimeout( () => { self.hideLoader(); }, 500);
                console.log(d);
                if (this.toExecute === '') {
                    this.theExecuted.push('m:/ > ' + this.toExecute);
                    this.scrollToBottomOnInit();
                }
                else if (d.status === true) {
                    const objpretty = JSON.stringify(d, undefined, 1);
                    this.theExecuted.push('m:/ > ' + this.toExecute);
                    this.theExecuted.push(objpretty);
                    this.toExecute = '';
                    this.scrollToBottomOnInit();
                }
                else {
                    this.theExecuted.push('m:/ > ' + this.toExecute + '\n'
                        + 'zsh: command not found: ' + this.toExecute);
                    this.toExecute = '';
                    this.scrollToBottomOnInit();
                }
                resolve(d);
            }, (err) => {
                self.hideLoader();
                console.log('Error ' + err);
                reject(err);
            });
        });
    }
    syntaxHighlight(json) {
        if (typeof json !== 'string') {
            json = JSON.stringify(json, undefined, 2);
        }
        json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
        return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, (match) => {
            let cls = 'number';
            if (/^"/.test(match)) {
                if (/:$/.test(match)) {
                    cls = 'key';
                }
                else {
                    cls = 'string';
                }
            }
            else if (/true|false/.test(match)) {
                cls = 'boolean';
            }
            else if (/null/.test(match)) {
                cls = 'null';
            }
            return '<span class="' + cls + '">' + match + '</span>';
        });
    }
    // $(function() {
    //   $('.terminal').on('click', function(){
    //      $('#input').focus();
    //   });
    //   $('#input').on('keydown',function search(e) {
    //     if(e.keyCode == 13) {
    //       // append your output to the history,
    //       // here I just append the input
    //       $('#history').append($(this).val()+'<br/>');
    //       // you can change the path if you want
    //       // crappy implementation here, but you get the idea
    //       if($(this).val().substring(0, 3) === 'cd '){
    //         $('#path').html($(this).val().substring(3)+'&nbsp;>&nbsp;');
    //       }
    //       // clear the input
    //       $('#input').val('');
    //     }
    //   });
    // });
    execute() {
    }
};
MiniTermPage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('content', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"])
], MiniTermPage.prototype, "content", void 0);
MiniTermPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mini-term',
        template: __webpack_require__(/*! raw-loader!./mini-term.page.html */ "./node_modules/raw-loader/index.js!./src/app/mini-term/mini-term.page.html"),
        styles: [__webpack_require__(/*! ../../../node_modules/xterm/css/xterm.css */ "./node_modules/xterm/css/xterm.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]])
], MiniTermPage);



/***/ })

}]);
//# sourceMappingURL=mini-term-mini-term-module-es2015.js.map