import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-historymodal',
  templateUrl: './historymodal.page.html',
  styleUrls: ['./historymodal.page.scss'],
})
export class HistorymodalPage implements OnInit {

  constructor(public modalCtrl: ModalController) { }

  ngOnInit() {
  }

  getTXNType(amount: string) {
    if(amount.substring(0,1) === "-"){
      return "return-down-back";
    } else {
      return "arrow-redo-circle";
    }
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

}
