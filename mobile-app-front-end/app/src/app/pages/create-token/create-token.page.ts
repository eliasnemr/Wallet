import { CustomToken } from './../../models/customToken.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MinimaApiService } from '../../service/minima-api.service';
import { IonTextarea, IonInput, AlertController, ToastController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

interface AdvancedFormInputsCheck {
  description: boolean;
  icon: boolean;
  proof: boolean;
  nft: boolean;
}

@Component({
  selector: 'app-create-token',
  templateUrl: './create-token.page.html',
  styleUrls: ['./create-token.page.scss'],
})
export class CreateTokenPage implements OnInit {
  @ViewChild('nameTextArea', {static: false}) nameText: IonInput;
  @ViewChild('amountRef', {static:false}) amountRef: IonInput;
  @ViewChild('proofURL', {static:false}) proofURL: IonInput;
  @ViewChild('iconURL', {static:false}) iconURL: IonInput;
  @ViewChild('description', {static: false}) description: IonTextarea;

  tokenCreationForm: FormGroup;
  advancedFormInputsChecked: AdvancedFormInputsCheck = {description: false, icon: false, proof: false, nft: false};
  basic = false;
  advanced = false;
  loading = false;
  success = false;
  myNFT = 'ASSERT FLOOR ( @AMOUNT ) EQ @AMOUNT LET checkout = 0 WHILE ( checkout LT @TOTOUT ) DO IF GETOUTTOK ( checkout ) EQ @TOKENID THEN LET outamt = GETOUTAMT ( checkout ) ASSERT FLOOR ( outamt ) EQ outamt ENDIF LET checkout = INC ( checkout ) ENDWHILE RETURN TRUE';
  customToken: CustomToken =
  {
    name: '',
    amount: 0,
    icon: '',
    proof: '',
    script: '',
    description: ''
  };
  descrEntry = {
    isChecked: false
  };

  iconEntry = {
    isChecked: false
  };

  proofEntry = {
    isChecked: false
  };

  nft = {
    isNonFungible: false
  };

  constructor(
    private api: MinimaApiService,
    private formBuilder: FormBuilder,
    public alertController: AlertController,
    public toastController: ToastController) {}

  ionViewDidEnter() {}

  ngOnInit() {
    this.tokenCreationForm = this.formBuilder.group({
      name: '',
      amount: 0,
      description: '',
      script: '',
      icon: '',
      proof: ''
    });
  }

  toggleBasicAnimation() {
    this.advancedFormInputsChecked.description = false;
    this.advancedFormInputsChecked.icon = false;
    this.advancedFormInputsChecked.nft = false;
    this.advancedFormInputsChecked.proof = false;

    this.basic = true;
    document.getElementById('listCardOptions').style.display = 'none';
    document.getElementById('footer').style.display = 'block';
    document.getElementById('createTknBtn2').style.display = 'block';
    document.getElementById('cardText').innerHTML = 'Enter Your Token Details';
    document.getElementById('backBtn').style.display = 'block';
  }
  toggleAdvAnimation() {
    this.advanced = false;
    if(this.advancedFormInputsChecked.description === false && this.advancedFormInputsChecked.icon === false 
      && this.advancedFormInputsChecked.nft === false && this.advancedFormInputsChecked.proof === false) {
        this.advanced = false;
        this.presentAlert('Advanced Token Creator', 'You have to pick an advanced token feature before proceeding.', 'Error');
    } else {
      this.advanced = true;
      document.getElementById('listCardOptions').style.display = 'none';
      document.getElementById('footer').style.display = 'block';
      document.getElementById('createTknBtn2').style.display = 'block';
      document.getElementById('cardText').innerHTML = 'Enter Your Token Details';
      document.getElementById('backBtn').style.display = 'block';
    }
  }
  toggleBackAnimation() {
    document.getElementById('backBtn').style.display = 'none';
    this.advanced = false;
    this.basic = false;
    this.resetForm();
    document.getElementById('cardText').innerHTML = 'Choose A Token Type';
    document.getElementById('listCardOptions').style.display = 'block';
    document.getElementById('tokenCreationForm').style.display = 'none';
    document.getElementById('footer').style.display = 'none';
    document.getElementById('createTknBtn2').style.display = 'none';
  }


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
  
  async presentAlert(hdr: string, message: string, subtitle: string) {
    const alert = await this.alertController.create({
      cssClass: 'alertContainer',
      header: hdr,
      subHeader: subtitle,
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }
  
  createTokenAdvanced() {
    this.loading = true;

    const newToken: CustomToken = this.tokenCreationForm.value;
    console.log(newToken);

    if (this.advancedFormInputsChecked.nft) {
      newToken.script = this.myNFT; // script for non-fungible
      this.api.createToken(newToken).then((res: any) => {
        if (res.status) {
          this.presentAlert('Success', 'Token '+this.customToken.name+' has been created.', 'Token Creation Status');
          this.toggleBackAnimation();
        } else {
          this.presentAlert('Something\'s wrong!', res.message, 'Token Creation Status');
        }
      });
    } else {
      newToken.script = 'RETURN TRUE' // default script to spend token
      this.api.createToken(newToken).then((res: any) => {
        if (res.status) {
          this.presentAlert('Success', 'Token '+this.customToken.name+' has been created.', 'Token Creation Status');
          this.toggleBackAnimation();
        } else {
          this.presentAlert('Something\'s wrong!', res.message, 'Token Creation Status');
        }
      })
    }


    // if(f.value.name&&f.value.name.length>0&&f.value.amount&&f.value.amount>0){

    //     this.customToken.name = f.value.name;
    //     this.customToken.amount = f.value.amount;

    //     // Optional Values 
    //     if(f.value.description && f.value.description.length > 0) {
    //       this.customToken.description = f.value.description;
    //     }
    //     if(f.value.checkboxproof === false){
    //       this.customToken.proof = "";
    //     } else {
    //       this.customToken.proof = f.value.proof;
    //     }
    //     if(f.checkboxicon === false || f.value.icon === "" || f.value.icon.length <= 0){
    //       this.customToken.icon = "";
    //     } else {
    //       this.customToken.icon = f.value.icon;
    //     }
    //     if(f.value.NFT === false){
    //       this.customToken.script = "RETURN TRUE";
    //     } else if(f.value.NFT === true) {
    //       this.customToken.script = "ASSERT FLOOR ( @AMOUNT ) EQ @AMOUNT LET checkout = 0 WHILE ( checkout LT @TOTOUT ) DO IF GETOUTTOK ( checkout ) EQ @TOKENID THEN LET outamt = GETOUTAMT ( checkout ) ASSERT FLOOR ( outamt ) EQ outamt ENDIF LET checkout = INC ( checkout ) ENDWHILE RETURN TRUE";
    //     }
    //     this.api.createToken(this.customToken).then((res: any) => {
    //       if(res.status === true){
    //         this.presentAlert('Success', 'Token '+this.customToken.name+' has been created.', 'Token Creation Status');
    //       } else {
    //         this.presentAlert('Error', 'Something went wrong.', 'Token Creation Status');

    //       }
    //     });
    //   } else {
    //     this.presentToast('There is an error with your inputs.', 'danger');
    //   }
  }

  resetForm() {
    this.nameText.value = '';
    this.amountRef.value = '';
    this.proofURL.value = '';
    this.iconURL.value = '';
    this.description.value = '';
    this.iconEntry.isChecked = false;
    this.proofEntry.isChecked = false;
    this.nft.isNonFungible = false;
  }
  

}
