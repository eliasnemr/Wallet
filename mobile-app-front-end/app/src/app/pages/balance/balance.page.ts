import { Observable, Subscription, Subject, interval } from 'rxjs';
import { map, concatMap } from 'rxjs/operators';
import { timer } from 'rxjs/Observable/timer';
import { MinimaApiService } from '../../service/minima-api.service';
import { Component, ChangeDetectorRef, AfterContentChecked, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { AlertController, PopoverController, NavController, IonLabel, IonInput } from '@ionic/angular';
import { Tokens } from '../../models/tokens.model';
import { PopOverComponent } from '../../components/pop-over/pop-over.component';
import { BalanceService } from '../../service/balance.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.page.html',
  styleUrls: ['./balance.page.scss'],
  providers: [ BalanceService ],
})

export class BalancePage implements OnInit {

  @ViewChild('balance', {static: false}) balance: ElementRef;

  tokenArr: Tokens[] = [];
  tokenSpoof: Tokens[] = [];
  
  balanceSubscription: Subscription;

  // - vars
  private lastJSON = '';
  private host: any = '';
  private MINI_TOKENID = '0x00';

  constructor(
    private service: BalanceService,
    private api: MinimaApiService,
    public alertController: AlertController,
    public popoverController: PopoverController,
    private ref: ChangeDetectorRef,
    private route: Router) {}

  ionViewWillEnter() {
    this.pullInTokens(); // subscribes & polls balance
    
    window.addEventListener('MinimaEvent', (evt: any)=> {
      // Event connection success
      if(evt.detail.event === 'newbalance') {

        this.pullInTokens();

      } 
    });
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
    this.service.giveMe50().subscribe((res:{ status: boolean, minifunc: string, message: string, response: any})=> {  
      if(res.status === true) {

        this.pullInTokens();
  
        setTimeout(() => {
          this.presentAlert('A transfer of 50 is on the way...', 'Minima');
        }, 600);
      } else if(res.status === false) {
        this.presentAlert(res.message+'!', 'Unsuccessful' );
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

  async presentPopover(ev: any, id: string) {
    console.log("id taken: "+id);
    const popover = await this.popoverController.create({
      component: PopOverComponent,
      event: ev,
      cssClass: 'balance-popover',
      translucent: false,
      componentProps:{tokenid: id},
    });
    return await popover.present();

  }

  pullArrLength() {
    this.service.getBalance().subscribe(res => {
      res.forEach(element => {
        this.tokenSpoof.push(element);
      })
    });
  }

  pullInTokens() {
    this.balanceSubscription = this.service.getBalance().pipe(map(responseData => {
      const tokenArr: Tokens[] = [];
      for(const key in responseData){
        if(responseData.hasOwnProperty(key)){
          let element = responseData[key];
          // round up confirmed && unconfirmed
          
          let tempConfirmed = (Math.round(element.confirmed * 1000)/1000);
          let tempUnconfirmed = (Math.round(element.unconfirmed * 1000)/1000);

          tokenArr.push({
              tokenid: element.tokenid,
              token: element.token,
              total: element.total,
              confirmed: tempConfirmed,
              unconfirmed: tempUnconfirmed,
              mempool: element.mempool,
              sendable: element.sendable
          });

          // add Minima always to the top
          if(element.tokenid === this.MINI_TOKENID){
            tokenArr.pop(); // pop it
            this.service.update(
            tokenArr,
            {
              tokenid: element.tokenid,
              token: element.token,
              total: element.total,
              confirmed: tempConfirmed,
              unconfirmed: tempUnconfirmed,
              mempool: element.mempool,
              sendable: element.sendable
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
