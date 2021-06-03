import {ToastController, AlertController, IonContent} from '@ionic/angular';
import {Injectable} from '@angular/core';

/**
 * Tools available to all Wallet
 */
@Injectable({
  providedIn: 'root',
})
/** */
export class ToolsService {
  toast: HTMLIonToastElement;
  /** */
  constructor(
    public toastController: ToastController,
    public alertController: AlertController,
  ) {}
  /** */
  copy(data: any) {
    document.addEventListener('copy', (e: ClipboardEvent) => {
      e.clipboardData.setData('text/plain', data);
      // this.presentToast('Copied To Clipboard', 'primary', 'bottom');
      e.preventDefault();
      document.removeEventListener('copy', null);
    });
    document.execCommand('copy');
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
      translucent: true,
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
