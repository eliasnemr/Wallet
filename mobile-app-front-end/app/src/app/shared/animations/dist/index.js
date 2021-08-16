"use strict";
exports.__esModule = true;
exports.fancyAnimation = exports.getIonPageElement = void 0;
var angular_1 = require("@ionic/angular");
var animationCtrl = new angular_1.AnimationController();
exports.getIonPageElement = function (element) {
    if (element.classList.contains('ion-page')) {
        return element;
    }
    var ionPage = element.querySelector(':scope > .ion-page, :scope > ion-nav, :scope > ion-tabs');
    if (ionPage) {
        return ionPage;
    }
    // idk, return the original element so at least something animates and we don't have a null pointer
    return element;
};
function fancyAnimation(_, opts) {
    var backDirection = opts.direction === 'back';
    var enteringEl = opts.enteringEl;
    var leavingEl = opts.leavingEl;
    var enteringPageEl = exports.getIonPageElement(enteringEl);
    var rootTransition = animationCtrl.create();
    var enterTransition = animationCtrl.create();
    var leavingTransition = animationCtrl.create();
    leavingTransition.addElement(exports.getIonPageElement(leavingEl)).duration(250);
    enterTransition
        .addElement(enteringPageEl)
        .duration(250)
        .fill('both')
        .beforeRemoveClass('ion-page-invisible');
    if (!backDirection) {
        enterTransition
            .beforeStyles({ border: 'thin solid #001C32' })
            .keyframes([
            { offset: 0, transform: 'scale(0)' },
            { offset: 1, transform: 'scale(1)' },
        ])
            .afterClearStyles(['border']);
        leavingTransition.keyframes([
            { offset: 0, opacity: 1 },
            { offset: 1, opacity: 0.1 }
        ]);
    }
    else {
        enterTransition.keyframes([
            { offset: 0, opacity: 0.1 },
            { offset: 1, opacity: 1 },
        ]);
        leavingTransition
            .beforeStyles({ border: 'thin solid black' })
            .keyframes([
            { offset: 0, transform: 'scale(1)' },
            { offset: 1, transform: 'scale(0)' }
        ])
            .afterClearStyles(['border']);
    }
    rootTransition.addAnimation([enterTransition, leavingTransition]);
    return rootTransition;
}
exports.fancyAnimation = fancyAnimation;
;
