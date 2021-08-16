"use strict";
exports.__esModule = true;
exports.togglingTokenAvatar = exports.ionListLeavingAnimation = exports.enterAnimation = exports.showList = void 0;
var rxjs_1 = require("rxjs");
var angular_1 = require("@ionic/angular");
exports.showList = new rxjs_1.BehaviorSubject(false);
exports.enterAnimation = function (baseEl, opts) {
    var DURATION = 300;
    console.log(baseEl);
    console.log(opts);
    var animationCtrl = new angular_1.AnimationController();
    if (opts.direction === 'forward') {
        return animationCtrl.create()
            .addElement(opts.enteringEl)
            .duration(DURATION)
            .easing('ease-out')
            .fromTo('opacity', 1, 0)
            .onFinish(function () {
            exports.showList.next(true);
        });
    }
    else {
        var rootAnimation = animationCtrl.create()
            .addElement(opts.enteringEl)
            .duration(DURATION)
            .easing('ease-out')
            .fromTo('opacity', 1, 0);
        var leavingAnimation = animationCtrl.create()
            .addElement(opts.enteringEl)
            .duration(DURATION)
            .easing('ease-out')
            .fromTo('opacity', 0, 1);
        return animationCtrl.create()
            .addAnimation([rootAnimation, leavingAnimation]);
    }
};
exports.ionListLeavingAnimation = function (baseEl, opts) {
    var mDURATION = 300;
    return null;
    console.log(mDURATION);
};
exports.togglingTokenAvatar = function (baseEl, opts) {
    var mDURATION = 300;
    return null;
    console.log(mDURATION);
};
