import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { AlertController, PopoverController, IonLabel, IonList } from '@ionic/angular';
import { MinimaApiService } from '../service/minima-api.service';
import { ActivatedRoute, Params } from '@angular/router';
import { interval, Subscription, Observable } from 'rxjs';
import { Tokens } from '../tokens';
import { PopOverComponent } from '../pop-over/pop-over.component';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.page.html',
  styleUrls: ['./balance.page.scss'],
})

export class BalancePage implements OnInit {

  public balance: number;
  public theBalanceExists:any;
  public theBalanceLength:any;
  public MINIMA_TOKEN_ID = '0x0000000000000000000000000000000000000000000000000000000000000000';

  public amitoken = false;

  public tokenArr = [];
  

  public hideProgress = false;
  public progressShow = true;
  public confirmed = 0;
  public unconfirmed : any;
  public strUnconfirmed: any;

  private firstObsubscription: Subscription;

  constructor(private api: MinimaApiService, 
    public alertController: AlertController,
    private route: ActivatedRoute,
    public popoverController: PopoverController) {}

  ngOnInit() {}

  ionViewWillEnter() {
    this.pullInTokens();
  }

  pullInTokens() {
    this.api.getBalance().then((res : any) => {
      console.log(res);

      this.strUnconfirmed = '';
      let theBalanceExists = res.response.balance;
      let theBalanceLength = res.response.balance.length;
      let countTokens = 0;
      
      res.response.balance.forEach(element => {
        countTokens++;

        if(element.tokenid === this.MINIMA_TOKEN_ID) {
          let tempConfirmed = (Math.round(element.confirmed * 100)/100);
          let tempUnConfirmed = ''; 
          
          if(element.unconfirmed > 0){
            this.strUnconfirmed = 'Unconfirmed';
            tempUnConfirmed = (Math.round(element.unconfirmed * 100)/100).toString();
          } else {
            tempUnConfirmed = '';
          }
        
          let temp = new Tokens(
             element.tokenid,
             element.token,
             tempConfirmed,
             tempUnConfirmed,
             element.total);

          
          this.tokenArr.push(temp);
          
          //this.tokenArr[0] = temp;
         
        }
        
        this.strUnconfirmed = '';
        
      });
      
      res.response.balance.forEach(element => {
        if(element.tokenid != this.MINIMA_TOKEN_ID) {
          let tempConfirmed = (Math.round(element.confirmed * 100)/100);
          let tempUnConfirmed = ''; 
          

          if(element.unconfirmed > 0){
            this.strUnconfirmed = 'Unconfirmed';
            tempUnConfirmed = (Math.round(element.unconfirmed * 100)/100).toString();
          } else {
            tempUnConfirmed = '';
          }
        
          let temp = new Tokens(
            element.tokenid,
             element.token,
             tempConfirmed,
             tempUnConfirmed,
             element.total);
             
             this.tokenArr.push(temp);
          
        }
        
        this.strUnconfirmed = '';
        
      });
    });

    this.tokenArr = new Array;
  }

  amiToken() {
    return this.amitoken;
  }

  shouldHide() {
    return true;
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
        this.presentAlert('A transfer of 50 is on the way...', 'Minima');
        this.doRefresh(self.event);
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
    }, 200);
  }



  async presentPopover(ev: any) {

    

    const popover = await this.popoverController.create({
      component: PopOverComponent,
      event: ev,
      translucent: true,
      componentProps:{tokenId: "0x0000000"},
    });
    return await popover.present();

  }
  

}
