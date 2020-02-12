import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MinimaApiService } from '../service/minima-api.service';
import { IonTextarea, IonSlide, IonRange, IonInput, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-create-token',
  templateUrl: './create-token.page.html',
  styleUrls: ['./create-token.page.scss'],
})
export class CreateTokenPage implements OnInit {

  @ViewChild('nameTextArea', {static: false}) nameText: IonInput;
  @ViewChild('tokenSlider', {static: false}) tokenSlider: IonRange;
  @ViewChild('amountRef', {static:false}) amountRef: IonInput;

  private data: any = {};
  minimaAmount = 0;
  forNewToken = 0;
  tokenAmount = 0;
  tokenName = '?';
  balance = 0;
  

  constructor(private api: MinimaApiService, public alertController: AlertController) {}

  ionViewDidEnter(){}
  ngOnInit() {}

  createToken() {
    this.data.token = this.tokenName;
    this.data.amount = this.tokenAmount;
    if(this.data.token&&this.data.token!==''&&this.data.amount&&this.data.amount>0){
    this.api.createToken(this.data).then((res : any) => {
      console.log("Send " + JSON.stringify(res));
        if(res.status == true){
          this.presentAlert('Success! '+this.tokenName+' has been created.', this.tokenName);
          this.resetForm();
        } else {
          this.presentAlert(res.error, 'Error');
        }
      });
    } else {
      this.presentAlert('Please check the input fields', 'Error');
    }
  }

  async presentAlert(msg:string,header:string) {
    const alert = await this.alertController.create({
      header: header,
      message: msg,
      buttons: ['OK']
    });

    await alert.present();
  }

  onAmountChanged(event: any) {
    this.tokenAmount = event.target.value;
    this.minimaAmount = this.tokenAmount/1000000000000;

    let regExp = new RegExp('^[a-zA-Z]+$');
    let regExpSpecial = new RegExp('[^\w\d]');

    if (regExp.test(this.tokenAmount.toString())) {
      event.target.value = this.tokenAmount.toString().slice(0, -1);
    }
  }

  resetForm() {
    this.nameText.value = '';
    //this.tokenSlider.value = 0;
    this.amountRef.value = '';
    this.forNewToken = 0;
    this.tokenAmount = 0;
    this.tokenName = '';

  }
  
  onUpdateTokenName(event: any){
    this.tokenName = event.target.value;
  }

}
