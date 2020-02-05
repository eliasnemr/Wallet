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
  public shouldEnable: boolean;
  toggle = document.querySelector('#darkToggle');

  constructor(private api: MinimaApiService, public alertController: AlertController) {}

  ngOnInit() {
    // const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
    // this.enableDarkTheme(prefersDark.matches);
    // prefersDark.addListener((mediaQuery) => this.enableDarkTheme(mediaQuery.matches));

  }
  
  ionViewWillEnter() {
    this.host = this.api.getHost();
  }

  enableDarkTheme(shouldEnable) {
    console.log("Dark Mode activated.");
    document.body.classList.toggle("dark", shouldEnable);
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

  async presentAlert(msg:string,header:string) {
    const alert = await this.alertController.create({
      header: header,
      message: msg,
      buttons: ['Cancel', 'Ok']
    });

    await alert.present();
  }

  async presentQuitAlert() {
    const alert = await this.alertController.create({
      header: "Quit Minima",
      message: "To turn off the Minima Node, you can currently do that by: <br>Android - Force stop in phone's settings.<br>iOS - Sliding up in task manager.",
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
