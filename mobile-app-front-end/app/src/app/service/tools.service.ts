import { take } from 'rxjs/operators';
import { Subject, ReplaySubject } from 'rxjs';
import {
  ToastController,
  AlertController,
  IonContent,
  Platform } from '@ionic/angular';
import {Injectable} from '@angular/core';
import { Clipboard } from '@ionic-native/clipboard/ngx';

const copy = require('clipboard-copy');

export interface FooterStatus {
  status: boolean;
  wasOpened?: boolean;
}

/**
 * Tools available to all Wallet
 */
@Injectable({
  providedIn: 'root',
})
/** */
export class ToolsService {
  toast: HTMLIonToastElement;
  public showFooterSubject: Subject<FooterStatus>;
  /** */
  constructor(
    public toastController: ToastController,
    public alertController: AlertController,
    private clipboard: Clipboard,
    private platform: Platform,
  ) {
    this.showFooterSubject = new ReplaySubject<FooterStatus>(1);
    this.showFooterSubject.next({status: true});
  }

  getFooterSubjectOnce() {
    return this.showFooterSubject.pipe(take(1));
  }
  /** */
  copy(data: any) {
    if (this.platform.is('desktop')) {
      copy(data);
    }

    if (this.platform.is('ios')) {
      this.clipboard.copy(data);
    } else {
      document.addEventListener('copy', (e: ClipboardEvent) => {
        if (this.platform.is('desktop')) {
          this.clipboard.copy(data);
          this.presentToast('Copied To Clipboard', 'primary', 'bottom');
        }
        e.clipboardData.setData('text/plain', data);
        // this.presentToast('Copied To Clipboard', 'primary', 'bottom');
        e.preventDefault();
        document.removeEventListener('copy', null);
      });
      document.execCommand('copy');
    }
  }
  /** */
  async presentToast(
      msg: string,
      clr: string,
      posn: 'top' | 'bottom' | 'middle') {
    try {
      this.toast.dismiss();
    } catch (e) {}
    const toast = await this.toastController.create({
      message: msg,
      position: 'bottom',
      color: clr,
      keyboardClose: true,
      duration: 2000,
      cssClass: 'customToastClass',
      buttons: [
        {
          icon: 'close-outline',
          role: 'cancel',
        }],
    });
    return await toast.present();
  }
  /** */
  async presentMiningToast(
      msg: string,
      clr: string,
      posn: 'top' | 'bottom' | 'middle') {
    try {
      this.toast.dismiss();
    } catch (e) {}
    const toast = await this.toastController.create({
      message: msg,
      position: posn,
      color: clr,
      keyboardClose: true,
      translucent: true,
      duration: 3500,
      cssClass: 'customToastClass',
      buttons: [{
        text: 'Dismiss',
        role: 'cancel',
      }],
    });
    return await toast.present();
  }
  /** */
  async presentAlert(hdr: string, msg: string, sub: string) {
    const alert = await this.alertController.create({
      cssClass: 'alert',
      header: hdr,
      subHeader: sub,
      message: msg,
      buttons: ['OK'],
    });
    await alert.present();
  }
  /** Scroll to bottom of ionContent */
  scrollToBottom(pageContent: IonContent) {
    try {
      pageContent.scrollToBottom(300);
    } catch (err) {
      console.log(err);
    }
  }
}
