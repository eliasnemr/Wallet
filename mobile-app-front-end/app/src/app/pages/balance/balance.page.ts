import { Observable, Subscription, Subject, interval } from 'rxjs';
import { map, concatMap } from 'rxjs/operators';
import { timer } from 'rxjs/Observable/timer';
import { MinimaApiService } from '../../service/minima-api.service';
import { Component, ChangeDetectorRef, AfterContentChecked, OnInit, Input} from '@angular/core';
import { AlertController, PopoverController, NavController } from '@ionic/angular';
import { Tokens } from '../../models/tokens.model';
import { PopOverComponent } from '../../components/pop-over/pop-over.component';
import { BalanceService } from '../../service/balance.service';
import { JsonPipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.page.html',
  styleUrls: ['./balance.page.scss'],
  providers: [ BalanceService ],
})

export class BalancePage implements OnInit {

  //@Input('referringToken') referringToken: string;


  polledBalance$: Observable<any>;
  tokenArr: Tokens[] = [];
  
  balanceSubscription: Subscription;

  // - vars
  private lastJSON = '';
  private host: any = '';
  private MINI_TOKENID = '0x0000000000000000000000000000000000000000000000000000000000000000';

  constructor(
    private service: BalanceService,
    private api: MinimaApiService,
    public alertController: AlertController,
    public popoverController: PopoverController,
    public balanceService: BalanceService,
    private ref: ChangeDetectorRef,
    private route: Router) {}

  ionViewWillEnter() {
    setTimeout(() => {
      this.pullInTokens(); // subscribes & polls balance
    }, 1000);
  }
  ngOnInit(){}
  
  ionViewWillLeave(){
    this.balanceSubscription.unsubscribe(); // unsubs
  }
  
  async presentAlert(msg:string,header:string) {
    const alert = await this.alertController.create({
      header: header,
      message: msg,
      buttons: ['Cancel', 'Ok']
    });

    await alert.present();
  }

  public sendTokenOver(id: string) {
    this.route.navigate(['/send-funds/'+id]);
  }

  giveMe50() {
    this.service.giveMe50().subscribe((res:any)=> {  
      if(res.status === true) {

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

  // currently unavailable
  doRefresh(event) {
    // setTimeout( () => {
    //   event.target.complete();
    //   console.log('refreshing completed.');
    // }, 1000);
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
    this.balanceSubscription = this.service.getBalance().pipe(map(responseData => {
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
      
      //check if changed
      if(this.lastJSON !== JSON.stringify(responseData)){
        this.tokenArr = [...responseData];
        this.lastJSON = JSON.stringify(responseData);
      }

    });

    
  }
  

}
