import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MinimaApiService } from '../../service/minima-api.service';
import { IonTextarea, IonSlide, IonRange, IonInput, AlertController, ToastController } from '@ionic/angular';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-token',
  templateUrl: './create-token.page.html',
  styleUrls: ['./create-token.page.scss'],
})
export class CreateTokenPage implements OnInit {

  @ViewChild('f', {static:false}) tokenForm: NgForm;
  @ViewChild('nameTextArea', {static: false}) nameText: IonInput;
  @ViewChild('amountRef', {static:false}) amountRef: IonInput;
  @ViewChild('proofURL', {static:false}) proofURL: IonInput;
  @ViewChild('iconURL', {static:false}) iconURL: IonInput;

  @ViewChild('textarea', {static: false}) textArea: IonTextarea;

  public data: any = {
    name: String,
    amount: Number,
    description: String,
    script: String,
    icon: String,
    proof: String, 
  };

  minimaAmount = 0;
  tokenAmount = 0;
  tokenName = '';
  balance = 0;
  descriptionLength = 0;

  iconEntry: any = {
    isChecked: Boolean
  }
  proofEntry: any = {
    isChecked: Boolean
  }
  nft: any = {
    isNonFungible: Boolean
  }
  

  constructor(private api: MinimaApiService, public alertController: AlertController, public toastController: ToastController) {
    this.data.name = "";
    this.data.amount = "";
    this.data.description = "";
    this.data.script = "RETURN TRUE";
    this.data.icon = "";
    this.data.proof = "";

    this.iconEntry.isChecked = false;
    this.proofEntry.isChecked = false;
    this.nft.isNonFungible = false;
  }

  ionViewDidEnter(){}
  ngOnInit() {}

  createTokenAdvanced(f) {

    if(f.value.name&&f.value.name.length>0&&f.value.amount&&f.value.amount>0){

        this.data.name = f.value.name;
        this.data.amount = f.value.amount;
        this.data.description = f.value.description;
        // Check and set..
        if(f.value.checkboxproof === false){
          this.data.proof = "";
        } else {
          this.data.proof = f.value.proof;
        }
        if(f.checkboxicon === false || f.value.icon === "" || f.value.icon.length <= 0){
          this.data.icon = "";
        } else {
          this.data.icon = f.value.icon;
        }
        // if NFT return custom script if not.. RETURN TRUE
        if(f.value.NFT === false){
          this.data.script = "RETURN TRUE";
        } else if(f.value.NFT === true) {
          this.data.script = "ASSERT FLOOR ( @AMOUNT ) EQ @AMOUNT LET checkout = 0 WHILE ( checkout LT @TOTOUT ) DO IF GETOUTTOK ( checkout ) EQ @TOKENID THEN LET outamt = GETOUTAMT ( checkout ) ASSERT FLOOR ( outamt ) EQ outamt ENDIF LET checkout = INC ( checkout ) ENDWHILE RETURN TRUE";
        }

        this.api.createToken(this.data).then((res: any) => {
          if(res.status === true){
            this.presentToast('Success! '+this.data.name + ' has been created.', "success");
            this.resetForm();
          } else {
            this.presentToast("Your token creation failed, "+res.message, 'danger');
          }
        });

      } else {
        this.presentToast('There is an error with your inputs.', 'danger');
      }
  }

  //Alerts
  async presentToast(msg: string, type: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 4000,
      color: type,
      buttons: [{
        text: 'Close',
        role: 'cancel'
      }],
      keyboardClose: true,
      translucent: true,
      position:  'top'
    });
    toast.present();
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
    this.amountRef.value = '';
    this.proofURL.value = '';
    this.iconURL.value = '';
    this.textArea.value = '';
    this.iconEntry.isChecked = false;
    this.proofEntry.isChecked = false;
    this.nft.isNonFungible = false;
    this.tokenAmount = 0;
    this.tokenName = '';
  }
  
  onUpdateTokenName(event: any){
    this.tokenName = event.target.value;
  }

}
