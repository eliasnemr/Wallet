import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import {MinimaApiService } from '../../service/minima-api.service';
import { ToastController } from '@ionic/angular';
import { darkMode } from '../../service/darkMode.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  toggleValue: boolean;
  host = '';

  constructor(private api: MinimaApiService, public alertController: AlertController,
    public toastController: ToastController, private darkMode: darkMode, private storage: Storage) {
      this.storage.get('toggleVal').then(toggleVal => {
        this.toggleValue = toggleVal;
      });
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
    // get toggleVal
    this.storage.get('toggleVal').then(toggleVal => {
      this.toggleValue = toggleVal;
    });
    // save host used.
    if (this.host!=='') {      
      this.api.setHost(this.host);
    }

    this.presentToast();
  }

  checkToggle(e: Event) {
    if(this.toggleValue === false) {
      this.storage.set('toggleVal', this.toggleValue);
      document.body.classList.toggle('dark', this.toggleValue);
    } else {
      this.storage.set('toggleVal', this.toggleValue);
      document.body.classList.toggle('dark', this.toggleValue);
    }
    

    
    // if(this.isToggled === false){
    //   this.isToggled = true;
    //   document.body.classList.toggle("dark", true);
      
    // } else {
    //   this.isToggled = false;
    //   document.body.classList.toggle("dark", false);
    // }
    // console.log("Toggled: "+ this.isToggled); 

    
  }
  
  /** API SERVICE CALLS */
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

  

  


