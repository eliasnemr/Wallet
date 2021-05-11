import { BehaviorSubject } from 'rxjs';
import { ToastController, AlertController, IonContent } from '@ionic/angular';
import { Injectable } from '@angular/core';

/** 
 * Tools available to all Wallet
 */
@Injectable({
  providedIn: 'root'
})
export class ToolsService {

  private state = new BehaviorSubject({
    milliseconds: 60000 
  });
  public $obj = this.state.asObservable();

  constructor(public toastController: ToastController,
     public alertController: AlertController) { }

  copy(data: any) {
    document.addEventListener('copy', (e: ClipboardEvent) => {
      e.clipboardData.setData('text/plain', data);
      this.presentToast('Copied To Clipboard', 'primary', 'bottom');
      e.preventDefault();
      document.removeEventListener('copy', null);
    });
    document.execCommand('copy');
  }

  async presentToast(msg: string, color: string, position: 'top' | 'bottom' | 'middle') {
    const toast = await this.toastController.create({
      message: msg,
      position: position,
      color: color,
      keyboardClose: true,
      translucent: true,
      duration: 2000,
      buttons: [{
        text: 'Dismiss', 
        role: 'cancel',
      }]
    });
    return await toast.present();
  }

  async presentMiningToast(msg: string, position: 'top' | 'bottom' | 'middle') {
    const toast = await this.toastController.create({
      message: msg,
      position: position,
      cssClass: 'toast2',
      keyboardClose: true,
      translucent: true,
      duration: 4000,
      buttons: [{
        text: 'Dismiss', 
        role: 'cancel',
      }]
    });
    return await toast.present();
  }

  async presentAlert(hdr: string, msg: string, sub: string) {
    const alert = await this.alertController.create({
      cssClass: 'alert',
      header: hdr,
      subHeader: sub,
      message: msg,
      buttons: ['OK']
    });
    await alert.present();
  }

  scrollToBottom(pageContent: IonContent) {
    try {
     pageContent.scrollToBottom(300);
    } catch (err) {
      console.log(err);
    }
  }


}
