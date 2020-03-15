import { MinimaApiService } from './../service/minima-api.service';
import { Component, OnInit } from '@angular/core';
import { AlertController, PopoverController } from '@ionic/angular';
import { Tokens } from '../MinimaModels/tokens.model';
import { PopOverComponent } from '../pop-over/pop-over.component';
import { BalanceService } from '../service/balance.service';
import { Observable, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.page.html',
  styleUrls: ['./balance.page.scss'],
  providers: [ BalanceService ]
})

export class BalancePage implements OnInit {
  // + vars
  public balance: number;
  public theBalanceExists:any;
  public theBalanceLength:any;

  public tokenArr: Tokens[];
  

  public hideProgress = false;
  public progressShow = true;
  public confirmed = 0;
  public unconfirmed : any;
  
  public refTokenId;


  // - vars
  private host: any = '';

  constructor(
    private service: BalanceService,
    private api: MinimaApiService,
    public alertController: AlertController,
    public popoverController: PopoverController,
    public balanceService: BalanceService) {}

  ngOnInit() {}

  ionViewWillEnter() {
    this.pullInTokens();
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
    this.api.giveMe50().then((res:any)=> {  
      if(res.status === true) {
        console.log("Result is true" + res);
        setTimeout(() => {
          this.presentAlert('A transfer of 50 is on the way...', 'Minima');
        }, 600); 
        this.pullInTokens();
      } else {
        console.log("Result is false " + res)
        this.presentAlert(res.error,'Error');
      }
    });
  }

  doRefresh(event) {
    console.log('Refreshing page..');
    //window.location.reload();
    this.pullInTokens();
    setTimeout( () => {
      event.target.complete();
      console.log('refreshing completed.');
    }, 0);
  }

  async presentPopover(ev: any, data:any) {
    const popover = await this.popoverController.create({
      component: PopOverComponent,
      event: ev,
      cssClass: 'balance-popover',
      translucent: false,
      componentProps:{tokenid: data},
    });
    return await popover.present();

  }

  pullInTokens() {
    // get our balance
    this.service.getBalance().then((res : any) => {
      this.tokenArr = res;
      return this.tokenArr;
    });

  }
  

}
