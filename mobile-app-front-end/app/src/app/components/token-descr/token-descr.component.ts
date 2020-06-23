import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { MinimaApiService } from '../../service/minima-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-token-descr',
  templateUrl: './token-descr.component.html',
  styleUrls: ['./token-descr.component.scss'],
})
export class TokenDescrComponent implements OnInit {

  constructor(public modalCtrl: ModalController, 
    public api: MinimaApiService,
    public toastController: ToastController,
    public route: Router) {}

  ngOnInit() {}

  dismiss(){
  // using the injected ModalController this page
  // can "dismiss" itself and optionally pass back data
  this.modalCtrl.dismiss({
    'dismissed': true
  });
  }
  public sendTokenOver(id: string) {
    this.route.navigate(['/send-funds/'+id]); 
    this.dismiss();
  }
  validateProof(tokenid: string) {
    this.api.validateTokenID(tokenid).then((res: any)=>{
       if(res.status == true){
         this.presentToast("This proof is valid.", "success");
       } else {
        this.presentToast("This proof is invalid.", "danger");
       }
    });
  }
  //Alerts
  async presentToast(msg: string, type: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 4000,
      color: type,
      keyboardClose: true,
      translucent: true,
      position:  'top'
    });
    toast.present();
  }


}
