import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

declare var Minima: any;
@Component({
  selector: 'app-historytokenmodal',
  templateUrl: './historytokenmodal.page.html',
  styleUrls: ['./historytokenmodal.page.scss'],
})
export class HistorytokenmodalPage implements OnInit {
  
  public txpow: String;
  public ispartofchain: String;
  public isinblock: String;

  constructor(public modalCtrl: ModalController,
              private navParams: NavParams) { }

  ngOnInit() {
    // retrieve some needed vars for the modal
    this.txpow = this.navParams.get('TXPOW_ID');
    //console.log("TXPOW is.."+ this.txpow);
    Minima.cmd('txpowinfo '+this.txpow, (res: any)=>{

      this.ispartofchain = JSON.stringify(res.response.ischainblock);
      this.isinblock = JSON.stringify(res.response.isinblock);

      //console.log('ispartofchain: '+this.ispartofchain + ' isinblock: '+ this.isinblock);
    });
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

}
