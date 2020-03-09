import { Component, OnInit, ViewChild, NgZone, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { AlertController, PopoverController, IonLabel } from '@ionic/angular';
import { MinimaApiService } from '../service/minima-api.service';
import { ActivatedRoute } from '@angular/router';
import { Tokens } from '../MiniObjects/tokens';
import { PopOverComponent } from '../pop-over/pop-over.component';
import { BalanceService } from '../service/balance.service';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.page.html',
  styleUrls: ['./balance.page.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})

export class BalancePage implements OnInit {

  @ViewChild('referenceToken', {static:false}) referenceToken: IonLabel;

// + vars
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
  
  public refTokenId;

// - vars
  private host: any = '';

  constructor(
    private api: MinimaApiService,
    public alertController: AlertController,
    public popoverController: PopoverController,
    public balanceService: BalanceService,
    public changeDetection: ChangeDetectorRef) {}

  ngOnInit() {}

  ionViewWillEnter() {
    this.pullInTokens();
  }

  pullInTokens() {
    // get our balance
    this.api.getBalance().then((res : any) => {
      
      console.log(res);

      let countTokens = 0;
      let tempConfirmed = 0;
      let tempUnConfirmed = '';
      
      // check through every token we own..
      res.response.balance.forEach(element => {
        countTokens++;

        // if token === Minima then return that on top of our list.
        if(element.tokenid === this.MINIMA_TOKEN_ID) {
          
          // round up our confirmed amount and add it into tempConfirmed
          tempConfirmed = (Math.round(element.confirmed * 100)/100);
          tempUnConfirmed = ''; 
          
          if(element.unconfirmed > 0){
            tempUnConfirmed = (Math.round(element.unconfirmed * 100)/100).toString();
          } else {
            tempUnConfirmed = '';
          }
          // create a temporary array.. push it into our global array
          let temp = new Tokens(
             element.tokenid,
             element.token,
             tempConfirmed,
             tempUnConfirmed,
             element.total);

          
          this.tokenArr.push(temp);

          
        }
      });
      
      // check through every token we have..
      res.response.balance.forEach(element => {
        
        // if it's not Minima once again add the rest of the tokens..
        if(element.tokenid != this.MINIMA_TOKEN_ID) {
          
          tempConfirmed = (Math.round(element.confirmed * 100)/100);
          tempUnConfirmed = ''; 
          
          if(element.unconfirmed > 0){
            tempUnConfirmed = (Math.round(element.unconfirmed * 100)/100).toString();
          } else {
            tempUnConfirmed = '';
          }
        
          // Create another temporary array
          let temp = new Tokens(
             element.tokenid,
             element.token,
             tempConfirmed,
             tempUnConfirmed,
             element.total);
             
             // push it into..
             this.tokenArr.push(temp);
             
        }
        
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
  

}
