import { ToolsService } from './../../service/tools.service';
import { MinimaApiService } from './../../service/minima-api.service';
import { AlertController, MenuController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { NetworkStatus } from 'minima';

@Component({
  selector: 'app-mini-status',
  templateUrl: './mini-status.page.html',
  styleUrls: ['./mini-status.page.scss']
})
export class MiniStatusPage implements OnInit {

  $status: NetworkStatus;
  statusSubscription: Subscription;

  public lastJSON: string;

  constructor(public menu: MenuController, 
    private myTools: ToolsService,
    private alertController: AlertController, 
    private _minimaApiService: MinimaApiService) { }

  ngOnInit() { }

  ionViewWillEnter() {
    
    this._minimaApiService.initStatus();
    this.updateStatus();
    
  }

  ionViewWillLeave() {
    if (this.statusSubscription) {
      this.statusSubscription.unsubscribe(); // unsubs
    }
  }

  async presentAlert(hdr: string, message: string, subtitle: string) {
    const alert = await this.alertController.create({
      cssClass: 'alertContainer',
      header: hdr,
      subHeader: subtitle,
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }

  openMenu() {
    this.menu.open();
  }

  giveMe50() {
    this._minimaApiService.giveMe50().then((res: any) => {
      if(res.status === true) {
        this.myTools.presentAlert('Gimme50', 'Successful', 'Status');
      } else {
        this.myTools.presentAlert('Gimme50', res.message, 'Status');
      }
    });
  }

  updateStatus() {
    this.statusSubscription = this._minimaApiService.$status.subscribe((status: NetworkStatus) => {
      this.$status = status;
      this.$status.uptime = status.uptime.replace(/\b0 Years\b|\b0 Months\b|\b0 Weeks\b|\b0 Days\b|\b0 Hours\b|\b0 Minutes\b|\b0 Seconds\b|\b0 Milliseconds\b/gi, " ");
    });
  }
}
