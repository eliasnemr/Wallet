import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { MinimaApiService } from '../service/minima-api.service';
@Component({
  selector: 'app-balance',
  templateUrl: './balance.page.html',
  styleUrls: ['./balance.page.scss'],
})
export class BalancePage implements OnInit {
  public balance: number;

  public confirmed = 0;
  public unconfirmed : any;
  public strUnconfirmed: any;

  constructor(private api: MinimaApiService, public alertController: AlertController) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.api.getBalance().then((res : any) => {
      console.log(res);

      this.confirmed = 0;
      this.unconfirmed = "";
      this.strUnconfirmed = "";
      let conf = res.response.confirmed;
      let unconf = res.response.unconfirmed;

      for(let i=0; i < conf.length; i++) {
        this.confirmed += Math.round(conf[i].amount * 100) / 100;
        console.log("Confirmed has been logged" + this.confirmed);
      }

      if(unconf.length > 0){
        for(let j=0; j < unconf.length; j++){
          this.strUnconfirmed = "Unconfirmed";
          this.unconfirmed += Math.round(unconf[j].amount * 100) / 100;
          console.log("Unconfirmed has been balanced");
        }
      }
      
      //this.balance = Math.round(res.response.confirmed.amount * 100) / 100;
      console.log('Balance set');
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

  giveMe50() {
    this.api.giveMe50().then((res:any)=>{  
      console.log("Testing giveMe50() " + res)
      if(res.status == true) {
        console.log("Result is true" + res);
        this.presentAlert('A transfer of 50 is on the way...', 'Minima');
      } else {
        console.log("Result is false " + res)
        this.presentAlert(res.error,'Error');
      }
    });
  }

  doRefresh(event) {
    console.log('Refreshing page..');
    this.api.getBalance().then((res: any) => {

      this.confirmed = 0;
      this.unconfirmed = "";
      this.strUnconfirmed = "";
      let conf = res.response.confirmed;
      let unconf = res.response.unconfirmed;

      for(let i=0; i < conf.length; i++) {
        this.confirmed += Math.round(conf[i].amount * 100) / 100;
        console.log("Confirmed has been logged" + this.confirmed);
      }

      if(unconf.length > 0){
        for(let j=0; j < unconf.length; j++){
          this.strUnconfirmed = "Unconfirmed";
          this.unconfirmed += Math.round(unconf[j].amount * 100) / 100;
          console.log("Unconfirmed has been balanced");
        }
      }
    //   for (let i = 0; i < Object.keys(res.response.confirmed).length; i++){
    //     this.balance = (Math.round( res.response.confirmed[i].amount * 100) / 100);
    // } 
      //this.balance = Math.round(res.response.confirmed.amount * 100) / 100;
    });
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 1500);
  }

}
