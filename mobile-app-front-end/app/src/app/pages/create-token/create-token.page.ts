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
      name: ['', [Validators.required, Validators.maxLength(255)]],
      amount: ['', [Validators.required, Validators.maxLength(255)]],
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
      newToken.script = 'RETURN TRUE'; // default script to spend token
      this.api.createToken(newToken).then((res: any) => {
        if (res.status) {
          this.presentAlert('Success', 'Token ' + this.customToken.name + ' has been created.', 'Token Creation Status');
          this.toggleBackAnimation();
        } else {
          this.presentAlert('Something\'s wrong!', res.message, 'Token Creation Status');
        }
      })
    }
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

  get name() {
    return this.tokenCreationForm.get('name');
  }
  get descr() {
    return this.tokenCreationForm.get('description');
  }
  get icon() {
    return this.tokenCreationForm.get('icon');
  }
  get proof() {
    return this.tokenCreationForm.get('proof');
  }
  get amount() {
    return this.tokenCreationForm.get('amount');
  }

}
