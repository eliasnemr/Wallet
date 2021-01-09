import { CustomToken } from './../../models/customToken.model';
import { AfterViewInit, Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MinimaApiService } from '../../service/minima-api.service';
import { IonTextarea, IonInput, AlertController, ToastController, Animation, AnimationController, IonCard } from '@ionic/angular';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-token',
  templateUrl: './create-token.page.html',
  styleUrls: ['./create-token.page.scss'],
})
export class CreateTokenPage implements OnInit, AfterViewInit {

  @ViewChild('f', {static:false}) tokenForm: NgForm;
  @ViewChild('nameTextArea', {static: false}) nameText: IonInput;
  @ViewChild('amountRef', {static:false}) amountRef: IonInput;
  @ViewChild('proofURL', {static:false}) proofURL: IonInput;
  @ViewChild('iconURL', {static:false}) iconURL: IonInput;
  @ViewChild('description', {static: false}) description: IonTextarea;

  anim: Animation;
  basic = false;
  advanced = false;
  isPlaying = false;
  customToken: CustomToken = {name: '', amount: 0, description: '', script: '', icon: '', proof: ''};
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


  ngAfterViewInit() {
    this.anim = this.animationCtrl.create('cardAnimation');
    this.anim
      .addElement(document.getElementById('basicCard'))
      .duration(1000)
      .easing('ease-out')
      .iterations(1)
      .fromTo('transform', 'translateY(0px)', 'translateY(-25px)')
      .fromTo('opacity', 1, 0.2);
    }

  toggleAnimation() {
    console.log('toggled');
    if (this.isPlaying) {
      this.anim.stop();
    } else {
      this.anim.play();
      setTimeout(() => {
        document.getElementById('basicCard').style.display = 'none';
      }, 500);

    }
    this.isPlaying = !this.isPlaying;
  }

  constructor(
    private api: MinimaApiService,
    public animationCtrl: AnimationController,
    public alertController: AlertController,
    public toastController: ToastController) {}

  ionViewDidEnter(){}

  ngOnInit() {}

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
  
  createTokenAdvanced(f: any) {

    if(f.value.name&&f.value.name.length>0&&f.value.amount&&f.value.amount>0){

        this.customToken.name = f.value.name;
        this.customToken.amount = f.value.amount;

        // Optional Values 
        if(f.value.description && f.value.description.length > 0) {
          this.customToken.description = f.value.description;
        }
        if(f.value.checkboxproof === false){
          this.customToken.proof = "";
        } else {
          this.customToken.proof = f.value.proof;
        }
        if(f.checkboxicon === false || f.value.icon === "" || f.value.icon.length <= 0){
          this.customToken.icon = "";
        } else {
          this.customToken.icon = f.value.icon;
        }
        if(f.value.NFT === false){
          this.customToken.script = "RETURN TRUE";
        } else if(f.value.NFT === true) {
          this.customToken.script = "ASSERT FLOOR ( @AMOUNT ) EQ @AMOUNT LET checkout = 0 WHILE ( checkout LT @TOTOUT ) DO IF GETOUTTOK ( checkout ) EQ @TOKENID THEN LET outamt = GETOUTAMT ( checkout ) ASSERT FLOOR ( outamt ) EQ outamt ENDIF LET checkout = INC ( checkout ) ENDWHILE RETURN TRUE";
        }
        this.api.createToken(this.customToken).then((res: any) => {
          if(res.status === true){
            this.presentAlert('Success', 'Token '+this.customToken.name+' has been created.', 'Token Creation Status');
            this.resetForm();
          } else {
            this.presentAlert('Error', 'Something went wrong.', 'Token Creation Status');

          }
        });

      } else {
        this.presentToast('There is an error with your inputs.', 'danger');
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
  

}
