function _defineProperties(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function _createClass(n,t,e){return t&&_defineProperties(n.prototype,t),e&&_defineProperties(n,e),n}function _classCallCheck(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function asyncGeneratorStep(n,t,e,r,i,o,u){try{var a=n[o](u),c=a.value}catch(s){return void e(s)}a.done?t(c):Promise.resolve(c).then(r,i)}function _asyncToGenerator(n){return function(){var t=this,e=arguments;return new Promise((function(r,i){var o=n.apply(t,e);function u(n){asyncGeneratorStep(o,r,i,u,a,"next",n)}function a(n){asyncGeneratorStep(o,r,i,u,a,"throw",n)}u(void 0)}))}}function _defineProperty(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"6jz6":function(n,t,e){"use strict";var r=e("8Y7J"),i=e("MKJQ"),o=e("sZkV"),u=e("SVse");e("LmEr"),e("J9yG"),e("TOdT"),e.d(t,"a",(function(){return a})),e.d(t,"b",(function(){return s}));var a=r.nb({encapsulation:0,styles:[[""]],data:{}});function c(n){return r.Kb(0,[(n()(),r.pb(0,0,null,null,1,"ion-spinner",[["color","gray-one"],["name","dots"]],null,null,null,i.db,i.z)),r.ob(1,49152,null,0,o.ob,[r.h,r.k,r.x],{color:[0,"color"],name:[1,"name"]},null)],(function(n,t){n(t,1,0,"gray-one","dots")}),null)}function s(n){return r.Kb(0,[r.Gb(671088640,1,{gimme50Btn:0}),(n()(),r.pb(1,0,null,null,6,"ion-footer",[],null,null,null,i.K,i.g)),r.ob(2,49152,null,0,o.y,[r.h,r.k,r.x],null,null),(n()(),r.pb(3,0,null,0,4,"ion-button",[["class","gimme50 no-ripple"],["fill","none"]],null,[[null,"click"]],(function(n,t,e){var r=!0;return"click"===t&&(r=!1!==n.component.gimme50()&&r),r}),i.G,i.c)),r.ob(4,49152,[[1,4],["gimme50Btn",4]],0,o.j,[r.h,r.k,r.x],{fill:[0,"fill"]},null),(n()(),r.Ib(5,0,[" "," "])),(n()(),r.eb(16777216,null,0,1,null,c)),r.ob(7,16384,null,0,u.j,[r.M,r.J],{ngIf:[0,"ngIf"]},null)],(function(n,t){var e=t.component;n(t,4,0,"none"),n(t,7,0,""===e.status)}),(function(n,t){n(t,5,0,t.component.status)}))}},"74mu":function(n,t,e){"use strict";e.d(t,"a",(function(){return i})),e.d(t,"b",(function(){return o})),e.d(t,"c",(function(){return r})),e.d(t,"d",(function(){return a}));var r=function(n,t){return null!==t.closest(n)},i=function(n,t){return"string"==typeof n&&n.length>0?Object.assign(_defineProperty({"ion-color":!0},"ion-color-"+n,!0),t):t},o=function(n){var t={};return function(n){return void 0!==n?(Array.isArray(n)?n:n.split(" ")).filter((function(n){return null!=n})).map((function(n){return n.trim()})).filter((function(n){return""!==n})):[]}(n).forEach((function(n){return t[n]=!0})),t},u=/^[a-z][a-z0-9+\-.]*:/,a=function(){var n=_asyncToGenerator(regeneratorRuntime.mark((function n(t,e,r,i){var o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(null==t||"#"===t[0]||u.test(t)){n.next=4;break}if(!(o=document.querySelector("ion-router"))){n.next=4;break}return n.abrupt("return",(null!=e&&e.preventDefault(),o.push(t,r,i)));case 4:return n.abrupt("return",!1);case 5:case"end":return n.stop()}}),n)})));return function(t,e,r,i){return n.apply(this,arguments)}}()},IA6j:function(n,t,e){"use strict";e.d(t,"a",(function(){return r}));var r=function n(){_classCallCheck(this,n)}},JbSX:function(n,t,e){"use strict";e.d(t,"a",(function(){return u}));var r=e("wEJo"),i=e("qULd"),o=e("iWo5"),u=function(n,t){var e,u,a=function(n,r,i){if("undefined"!=typeof document){var o=document.elementFromPoint(n,r);o&&t(o)?o!==e&&(s(),c(o,i)):s()}},c=function(n,t){e=n,u||(u=e);var i=e;Object(r.f)((function(){return i.classList.add("ion-activated")})),t()},s=function(){var n=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(e){var t=e;Object(r.f)((function(){return t.classList.remove("ion-activated")})),n&&u!==e&&e.click(),e=void 0}};return Object(o.createGesture)({el:n,gestureName:"buttonActiveDrag",threshold:0,onStart:function(n){return a(n.currentX,n.currentY,i.a)},onMove:function(n){return a(n.currentX,n.currentY,i.b)},onEnd:function(){s(!0),Object(i.e)(),u=void 0}})}},LmEr:function(n,t,e){"use strict";e.d(t,"a",(function(){return r})),e("TOdT"),e("J9yG");var r=function(){function n(t,e){_classCallCheck(this,n),this.minimaApiService=t,this.tools=e,this.status="Gimme 50"}return _createClass(n,[{key:"ngOnInit",value:function(){}},{key:"gimme50",value:function(){var n=this;this.status="",this.gimme50Btn.disabled=!0,this.minimaApiService.giveMe50().then((function(t){t.status?(n.status="Gimme 50",n.gimme50Btn.disabled=!1):(n.tools.presentAlert("Gimme50",t.message,"Status"),n.status="Unavailable",setTimeout((function(){n.gimme50Btn.disabled=!1,n.status="Gimme 50"}),4e3))}))}}]),n}()},acej:function(n,t,e){"use strict";e.d(t,"a",(function(){return i})),e.d(t,"b",(function(){return o}));var r=e("1vRN"),i=function(){var n=_asyncToGenerator(regeneratorRuntime.mark((function n(t,e,i,o,u){var a;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!t){n.next=2;break}return n.abrupt("return",t.attachViewToDom(e,i,u,o));case 2:if("string"==typeof i||i instanceof HTMLElement){n.next=4;break}throw new Error("framework delegate is missing");case 4:return a="string"==typeof i?e.ownerDocument&&e.ownerDocument.createElement(i):i,o&&o.forEach((function(n){return a.classList.add(n)})),u&&Object.assign(a,u),e.appendChild(a),n.next=10,new Promise((function(n){return Object(r.c)(a,n)}));case 10:return n.abrupt("return",a);case 11:case"end":return n.stop()}}),n)})));return function(t,e,r,i,o){return n.apply(this,arguments)}}(),o=function(n,t){if(t){if(n)return n.removeViewFromDom(t.parentElement,t);t.remove()}return Promise.resolve()}},h3R7:function(n,t,e){"use strict";e.d(t,"a",(function(){return r}));var r={bubbles:{dur:1e3,circles:9,fn:function(n,t,e){var r=n*t/e-n+"ms",i=2*Math.PI*t/e;return{r:5,style:{top:9*Math.sin(i)+"px",left:9*Math.cos(i)+"px","animation-delay":r}}}},circles:{dur:1e3,circles:8,fn:function(n,t,e){var r=t/e,i=n*r-n+"ms",o=2*Math.PI*r;return{r:5,style:{top:9*Math.sin(o)+"px",left:9*Math.cos(o)+"px","animation-delay":i}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:function(){return{r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}}}},crescent:{dur:750,circles:1,fn:function(){return{r:26,style:{}}}},dots:{dur:750,circles:3,fn:function(n,t){return{r:6,style:{left:9-9*t+"px","animation-delay":-110*t+"ms"}}}},lines:{dur:1e3,lines:12,fn:function(n,t,e){return{y1:17,y2:29,style:{transform:"rotate(".concat(30*t+(t<6?180:-180),"deg)"),"animation-delay":n*t/e-n+"ms"}}}},"lines-small":{dur:1e3,lines:12,fn:function(n,t,e){return{y1:12,y2:20,style:{transform:"rotate(".concat(30*t+(t<6?180:-180),"deg)"),"animation-delay":n*t/e-n+"ms"}}}}}},qULd:function(n,t,e){"use strict";e.d(t,"a",(function(){return o})),e.d(t,"b",(function(){return u})),e.d(t,"c",(function(){return i})),e.d(t,"d",(function(){return c})),e.d(t,"e",(function(){return a}));var r={getEngine:function(){var n=window;return n.TapticEngine||n.Capacitor&&n.Capacitor.isPluginAvailable("Haptics")&&n.Capacitor.Plugins.Haptics},available:function(){return!!this.getEngine()},isCordova:function(){return!!window.TapticEngine},isCapacitor:function(){return!!window.Capacitor},impact:function(n){var t=this.getEngine();if(t){var e=this.isCapacitor()?n.style.toUpperCase():n.style;t.impact({style:e})}},notification:function(n){var t=this.getEngine();if(t){var e=this.isCapacitor()?n.style.toUpperCase():n.style;t.notification({style:e})}},selection:function(){this.impact({style:"light"})},selectionStart:function(){var n=this.getEngine();n&&(this.isCapacitor()?n.selectionStart():n.gestureSelectionStart())},selectionChanged:function(){var n=this.getEngine();n&&(this.isCapacitor()?n.selectionChanged():n.gestureSelectionChanged())},selectionEnd:function(){var n=this.getEngine();n&&(this.isCapacitor()?n.selectionEnd():n.gestureSelectionEnd())}},i=function(){r.selection()},o=function(){r.selectionStart()},u=function(){r.selectionChanged()},a=function(){r.selectionEnd()},c=function(n){r.impact(n)}}}]);