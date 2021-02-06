import { CustomToken } from './../../models/customToken.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MinimaApiService } from '../../service/minima-api.service';
import { AlertController, ToastController, IonButton, MenuController } from '@ionic/angular';
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
  @ViewChild('submitBtn', {static : false}) submitBtn: IonButton;

  tokenCreationForm: FormGroup;
  advancedFormInputsChecked: AdvancedFormInputsCheck = {description: false, icon: false, proof: false, nft: false};

  isNft = false;
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
    public menu: MenuController,
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
      icon: ['', [Validators.pattern('^https?://(?:[a-z0-9\-]+\.)+[a-z]{2,6}(?:/[^/#?]+)+\.(?:jpg|gif|png)$'), Validators.maxLength(255)]],
      proof: ['', [Validators.pattern('^https?://(?:[a-z0-9\-]+\.)+[a-z]{2,6}(?:/[^/#?]+)+\.(?:txt)$'), Validators.maxLength(255)]],
      nft: false
    });
  }

  openMenu() {
    this.menu.open();
  }

  async presentToast(msg: string, type: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 1000,
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

  giveMe50() {
    this.api.giveMe50().then((res: any) => {
      if(res.status === true) {
        this.presentAlert('Gimme50', 'Successful', 'Status');
      } else {
        this.presentAlert('Gimme50', res.message, 'Status');
      }
    });
  }
  
  createTokenAdvanced() {
    this.loading = true;
    //console.log(this.tokenCreationForm.value);
    const newToken: CustomToken = this.tokenCreationForm.value;

    if (newToken.nft) {
      this.submitBtn.disabled = true;
      newToken.script = this.myNFT; // script for non-fungible
      this.api.createToken(newToken).then((res: any) => {
        if (res.status) {
          this.presentAlert('Success', 'Token '+this.customToken.name+' has been created.', 'Token Creation Status');
          this.resetForm();
        } else {
          setTimeout(() => {
            this.submitBtn.disabled = false;
          }, 500)
          this.presentAlert('Something\'s wrong!', res.message, 'Token Creation Status');
        }
      });
    } else {
      this.submitBtn.disabled = true;
      newToken.script = 'RETURN TRUE'; // default script to spend token
      this.api.createToken(newToken).then((res: any) => {
        if (res.status) {
          this.presentAlert('Success', 'Token ' + this.customToken.name + ' has been created.', 'Token Creation Status');
          this.resetForm();
        } else {
          setTimeout(() => {
            this.submitBtn.disabled = false;
          }, 500)
          this.presentAlert('Something\'s wrong!', res.message, 'Token Creation Status');
        }
      })
    }
  }

  resetForm() { 
    this.tokenCreationForm.reset();
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
  get myNft() {
    return this.tokenCreationForm.get('nft');
  }

}
