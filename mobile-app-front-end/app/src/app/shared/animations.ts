import { BehaviorSubject, Subject } from 'rxjs';
import { AnimationController, Animation } from '@ionic/angular';

export const showList: Subject<boolean> = new BehaviorSubject<boolean>(false);

export const enterAnimation = (baseEl: HTMLElement, opts?: any): Animation => {
  const DURATION = 300;

  console.log(baseEl);
  console.log(opts);

  const animationCtrl = new AnimationController();

  if (opts.direction === 'forward') {
    return animationCtrl.create()
        .addElement(opts.enteringEl)
        .duration(DURATION)
        .easing('ease-out')
        .fromTo('opacity', 1, 0)
        .onFinish(() => {
          showList.next(true);
        });
  } else {
    const rootAnimation = animationCtrl.create()
        .addElement(opts.enteringEl)
        .duration(DURATION)
        .easing('ease-out')
        .fromTo('opacity', 1, 0);
    const leavingAnimation = animationCtrl.create()
        .addElement(opts.enteringEl)
        .duration(DURATION)
        .easing('ease-out')
        .fromTo('opacity', 0, 1);
    return animationCtrl.create()
        .addAnimation([rootAnimation, leavingAnimation]);
  }
};

export const ionListLeavingAnimation =
(baseEl: HTMLElement, opts?: any): Animation => {
  const mDURATION = 300;

  return null;
  console.log(mDURATION);
};

export const togglingTokenAvatar =
(baseEl: HTMLElement, opts?: any): Animation => {
  const mDURATION = 300;

  return null;
  console.log(mDURATION);
};

