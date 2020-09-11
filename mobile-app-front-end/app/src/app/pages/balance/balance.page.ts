import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { MinimaApiService } from '../../service/minima-api.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertController, PopoverController, ModalController } from '@ionic/angular';
import { Tokens } from '../../models/tokens.model';
import { PopOverComponent } from '../../components/pop-over/pop-over.component';
import { BalanceService } from '../../service/balance.service';
import { Router } from '@angular/router';
import { TokenDescrComponent } from '../../components/token-descr/token-descr.component';

declare var Minima: any;
@Component({
  selector: 'app-balance',
  templateUrl: './balance.page.html',
  styleUrls: ['./balance.page.scss'],
})

export class BalancePage implements OnInit {

  tokenArr: Tokens[] = [];
  tokenSpoof: Tokens[] = [];
  
  balanceSubscription: Subscription;

  // - vars
  private lastJSON = '';
  private MINIMA = '0x00';

  constructor(
    private service: BalanceService,
    private api: MinimaApiService,
    public alertController: AlertController,
    public popoverController: PopoverController,
    private route: Router,
    private modalController: ModalController) {
      this.pullInTokens();
    }

  ionViewWillEnter() { }

  giveMe50() {
    this.api.giveMe50().then((res:any)=> {
      if(res.status === true) {
        this.presentAlert(res.message, "Success.");
      } else {
        this.presentAlert(res.message, "Something went wrong.");
      }
    });
  }
  
  ngOnInit()
  { }
  
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

  closeSliding(slidingItem: HTMLIonItemSlidingElement) {
    slidingItem.close();
  }

  public sendTokenOver(slidingItem: HTMLIonItemSlidingElement, id: string) {
    
    slidingItem.close();

    this.route.navigate(['/send-funds/'+id]); 

  }

  async presentTokenDescr(
    id: string, token: string, descr: string, icon:string, proof: string, total: string,
     script: string, coinid: string, totalamnt: string, scale:string, conf: number, unconf:any, memp: string, sendable: string) {
  const modal = await this.modalController.create({
     component: TokenDescrComponent,
     cssClass: 'tokenDescr-modal',
     componentProps: {
       'tokenid': id,
       'name': token,
       'description': descr,
       'icon': icon,
       'proof': proof,
       'total': total,
       'script': script,
       'coinid': coinid,
       'totalamount': totalamnt,
       'scale': scale,
       'confirmed': conf,
       'unconfirmed': unconf,
       'mempool': memp,
       'sendable': sendable,
     }
   });
   return await modal.present();
 }
 
  async presentPopover(slidingItem: HTMLIonItemSlidingElement, ev: any, id: string) {
    const popover = await this.popoverController.create({
      component: PopOverComponent,
      event: ev,
      cssClass: 'balance-popover',
      translucent: false,
      componentProps:{'tokenid': id},
    });

    slidingItem.close();

    return await popover.present();


  }

  pullInTokens() {

    this.balanceSubscription = this.service.updatedBalance
      .pipe(
        map((responseData:any) => {

      const tokenArr: Tokens[] = [];
      for(const key in Minima.balance){

        if(Minima.balance.hasOwnProperty(key)){

          let element = Minima.balance[key];

          // round up confirmed && unconfirmed
          let tempConfirmed = (Math.round(element.confirmed * 1000)/1000);
          let tempUnconfirmed = (Math.round(element.unconfirmed * 1000)/1000);

          tokenArr.push({
              tokenid: element.tokenid,
              token: element.token,
              description: element.description,
              icon: element.icon,
              proof: element.proof,
              total: element.total,
              script: element.script,
              coinid: element.coinid,
              totalamount: element.totalamount,
              scale: element.scale,
              confirmed: tempConfirmed,
              unconfirmed: tempUnconfirmed,
              mempool: element.mempool,
              sendable: element.sendable
          });

          // add Minima always to the top
          if(element.tokenid === this.MINIMA){
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
