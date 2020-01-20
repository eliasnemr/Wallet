import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import {MinimaApiService } from '../service/minima-api.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  host = '';

  constructor(private api: MinimaApiService, public alertController: AlertController) { }

  ngOnInit() {
  }
  
  ionViewWillEnter() {
    this.host = this.api.getHost();
  }


  giveMe50() {
    this.api.giveMe50().then((res:any)=>{  
      console.log("Testing giveMe50() " + res)
      if(res.status == true) {
        console.log("Result is true" + res);
        this.presentAlert('You get 50', 'Info');
      } else {
        console.log("Result is false " + res)
        this.presentAlert(res.error,'Error');
      }
    });
  }

  async quitMinima(msg:string,header:string) {
    const alert = await this.alertController.create({
      header: header,     
      message: msg,
      buttons: ['Cancel', 'I am sure.']
    });

    await alert.present();
  }

  async presentAlert(msg:string,header:string) {
    const alert = await this.alertController.create({
      header: header,     
      message: msg,
      buttons: ['Cancel', 'Ok']
    });

    await alert.present();
  }

  saveHost() {
    if (this.host!=='') {      
      this.api.setHost(this.host);
      this.api.getBalance().then((res: any) => {      
        if (res.balance) {
          console.log("Save Accepted");
          //this.balance = Math.round(res.res.response*100)/100;
          this.presentAlert('Saved', 'Success');
        }
      }).catch((err)=>{
        console.log('save error', err);
        this.presentAlert('Check the host', 'Error');       
      }); 
    } else {
      this.presentAlert('Check the host','Error');
    }
  }

}
