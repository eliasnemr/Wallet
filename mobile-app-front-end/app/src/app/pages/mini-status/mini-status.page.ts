import { MinimaApiService } from './../../service/minima-api.service';
import { AlertController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { map, retry, catchError, tap } from 'rxjs/operators';
import { StatusService } from './../../service/status.service';
import { Component, OnInit } from '@angular/core';
import { NetworkStatus } from 'minima';

@Component({
  selector: 'app-mini-status',
  templateUrl: './mini-status.page.html',
  styleUrls: ['./mini-status.page.scss']
})
export class MiniStatusPage implements OnInit {

  status: NetworkStatus;
  statusSubscription: Subscription;

  public lastJSON: string;

  constructor(private service: StatusService, private alertController: AlertController, private api: MinimaApiService) {}

  ngOnInit() { }

  ionViewWillEnter() {
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

  giveMe50() {
    this.api.giveMe50().then((res: any) => {
      if(res.status === true) {
        this.presentAlert('Gimme50', 'Successful', 'Status');
      } else {
        this.presentAlert('Gimme50', res.message, 'Status');
      }
    });
  }

  updateStatus() {
    this.service.updatedStatus
    .pipe(map((responseData: NetworkStatus) => {
      //console.log(responseData);
      responseData.uptime = responseData.uptime.replace(/\b0 Years\b|\b0 Months\b|\b0 Weeks\b|\b0 Days\b|\b0 Hours\b|\b0 Minutes\b|\b0 Seconds\b|\b0 Milliseconds\b/gi, " ");

      // responseData.uptime = responseData.uptime.replace(/1 Minutes/gi, "1 Minute");
      // responseData.uptime = responseData.uptime.replace(/1 Seconds/gi, "1 Second");
      // responseData.uptime = responseData.uptime.replace(/1 Years/gi, "1 Year");
      // responseData.uptime = responseData.uptime.replace(/1 Milliseconds/gi, "1 Millisecond");
      // responseData.uptime = responseData.uptime.replace(/1 Hours/gi, "1 Hour");

      return responseData;
    })).subscribe(( res: any) => {
      //console.log(res);
      if ( this.lastJSON !== JSON.stringify(res) ) {
        this.status = res;
        this.lastJSON = JSON.stringify(res);
      }
    });
  }
}
