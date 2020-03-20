import { Observable, Subscription, Subject, interval } from 'rxjs';
import { map, concatMap } from 'rxjs/operators';
import { timer } from 'rxjs/Observable/timer';
import { MinimaApiService } from './../service/minima-api.service';
import { Component, ChangeDetectorRef, AfterContentChecked, OnInit } from '@angular/core';
import { AlertController, PopoverController } from '@ionic/angular';
import { Tokens } from '../MinimaModels/tokens.model';
import { PopOverComponent } from '../pop-over/pop-over.component';
import { BalanceService } from '../service/balance.service';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.page.html',
  styleUrls: ['./balance.page.scss'],
  providers: [ BalanceService ],
})

export class BalancePage implements OnInit {

  // + vars
  public polledBalance$: Observable<any>;
  public balance: number;
  public theBalanceExists:any;
  public theBalanceLength:any;
  public tokenArr: Tokens[];

  public hideProgress = false;
  public progressShow = true;
  public confirmed = 0;
  public unconfirmed : any;
  
  public refTokenId;

  public balanceSubscription: Subscription;

  // - vars
  private host: any = '';
  private MINI_TOKENID = '0x0000000000000000000000000000000000000000000000000000000000000000';

  constructor(
    private service: BalanceService,
    private api: MinimaApiService,
    public alertController: AlertController,
    public popoverController: PopoverController,
    public balanceService: BalanceService,
    private ref: ChangeDetectorRef) {}

  ionViewWillEnter() {
    this.pullInTokens(); // subscribes & polls balance
  }
  ngOnInit(){}
  
  ionViewWillLeave(){
    this.balanceSubscription.unsubscribe();
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
    this.service.giveMe50().subscribe((res:any)=> {  
      if(res.status === true) {
        console.log("Result is true" + res);
        this.pullInTokens();
        
        setTimeout(() => {
          this.presentAlert('A transfer of 50 is on the way...', 'Minima');
        }, 600);
      } else {
        console.log("Result is false " + res)
        this.presentAlert(res.error,'Error');
      }
    });
  }

  doRefresh(event) {
    console.log('Refreshing page..');
    
    setTimeout( () => {
      event.target.complete();
      console.log('refreshing completed.');
    }, 1000);
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
   
    this.balanceSubscription =this.service.getBalance().pipe(map(responseData => {
      const tokenArr: Tokens[] = [];
      for(const key in responseData.response.balance){
        if(responseData.response.balance.hasOwnProperty(key)){
          let element = responseData.response.balance[key];
          // round up confirmed && unconfirmed
          
          let tempConfirmed = (Math.round(element.confirmed * 100)/100);
          let tempUnconfirmed = (Math.round(element.unconfirmed * 100)/100);

          tokenArr.push({
              id: element.tokenid,
              token: element.token,
              confirmed: tempConfirmed,
              unconfirmed: tempUnconfirmed,
              total: element.total
          });

          // add Minima always to the top
          if(element.tokenid === this.MINI_TOKENID){
            tokenArr.pop(); // pop it
            this.service.update(
            tokenArr,
            {
                id: element.tokenid,
                token: element.token,
                confirmed: tempConfirmed,
                unconfirmed: tempUnconfirmed,
                total: element.total
            });
          }

          }
        }
        return tokenArr;
        
      })
    )
    .subscribe(responseData => {
    
      this.tokenArr = [...responseData];


    });

    
  }
  

}
