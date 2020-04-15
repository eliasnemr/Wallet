import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import {MinimaApiService } from '../../service/minima-api.service';
import { ToastController } from '@ionic/angular';
import { darkMode } from '../../service/darkMode.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  toggleValue: boolean = false;
  host = '';

  constructor(private api: MinimaApiService, public alertController: AlertController,
    public toastController: ToastController, private darkMode: darkMode) {
      
    if(localStorage.getItem('toggleVal') === 'true'){
      this.toggleValue = true;
    } else {
      this.toggleValue = false;
    }
     
    }
    
  /** LIFE CYCLES */
  ngOnInit() {}
  
  ionViewWillEnter() {
    this.host = this.api.getHost();
  }
  ionViewWillLeave(){
   this.saveUserPreferences();
  }

  /** MISCELLANEOUS */
  saveUserPreferences() {

    if(localStorage.getItem('toggleVal') === 'true'){
      this.toggleValue = true;
    } else {
      this.toggleValue = false;
    }
      
    // save host used.
    if (this.host!=='') {      
      this.api.setHost(this.host);
    }

    //this.presentToast();
  }
  /** MISCELLANEOUS */
  savePreferencesBtn() {

    if(localStorage.getItem('toggleVal') === 'true'){
      this.toggleValue = true;
    } else {
      this.toggleValue = false;
    }
      
    // save host used.
    if (this.host!=='') {      
      this.api.setHost(this.host);
    }

    this.presentToast();
  }

  checkToggle(e: Event) {
    if(this.toggleValue === false) {
      localStorage.setItem('toggleVal', 'false')
      document.body.classList.toggle('dark', false);
    } else {
      localStorage.setItem('toggleVal', 'true')
      document.body.classList.toggle('dark', true);
    }

  }
  
  /** API SERVICE CALLS */
  giveMe50() {
    this.api.giveMe50().then((res:any)=>{  
      if(res.status == true) {
        this.presentAlert('You get 50', 'Info');
      } else {
        console.log("Result is false " + res)
        this.presentAlert(res.error,'Error');
      }
    });
  }
  
  /** ALERTS & TOASTS */
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

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Your settings have been saved.',
      duration: 2000,
      color: 'danger',
      keyboardClose: true,
      translucent: true,
      position:  'bottom'
    });
    toast.present();
  }

}

  

  


