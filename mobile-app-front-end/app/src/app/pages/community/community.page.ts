import { AlertController, MenuController } from '@ionic/angular';
import { MinimaApiService } from './../../service/minima-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-community',
  templateUrl: './community.page.html',
  styleUrls: ['./community.page.scss'],
})
export class CommunityPage implements OnInit {

  constructor(public menu: MenuController, private api: MinimaApiService, private alertController: AlertController) { }

  ngOnInit() {
  }

  openMenu() {
    this.menu.open();
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

   giveMe50() {
    this.api.giveMe50().then((res: any) => {
      if(res.status === true) {
        this.presentAlert('Gimme50', 'Successful', 'Status');
      } else {
        this.presentAlert('Gimme50', res.message, 'Status');
      }
    });
  }

}
