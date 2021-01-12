import { CustomToken } from './../../models/customToken.model';
import { AfterViewInit, Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MinimaApiService } from '../../service/minima-api.service';
import { IonTextarea, IonInput, AlertController, ToastController, Animation, AnimationController, IonButton, IonFooter } from '@ionic/angular';
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
  @ViewChild('createTknBtn', {static: false}) createTknBtn: ElementRef;

  anim: Animation;
  animAdvanced: Animation;
  animSecond: Animation;
  animAdvancedSecond: Animation;
  formAnim: Animation;
  advancedFormInputsChecked = {description: false, icon: false, proof: false, nft: false};
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
    this.animAdvanced = this.animationCtrl.create('advancedCardAnimation');
    this.animSecond = this.animationCtrl.create('cardAnimationSec');
    this.animAdvancedSecond = this.animationCtrl.create('advancedCardAnimationTwo');
    this.formAnim = this.animationCtrl.create('formAnimation');
    this.anim
      .addElement(document.getElementById('basicCard'))
      .duration(1000)
      .easing('ease-out')
      .iterations(1)
      .fromTo('transform', 'translateY(0px)', 'translateY(-25px)')
      .fromTo('opacity', 1, 0.2);
    
    this.animAdvanced
      .addElement(document.getElementById('advancedCard'))
      .duration(1000)
      .easing('ease-out')
      .iterations(1)
      .fromTo('transform', 'translateX(0px)', 'translateX(50px)')
      .fromTo('opacity', 1, 0.2);
      
    this.animSecond
      .addElement(document.getElementById('basicCard'))
      .duration(1000)
      .easing('ease-out')
      .iterations(1)
      .fromTo('transform', 'translateX(0px)', 'translateX(50px)')
      .fromTo('opacity', 1, 0.2);
    
    this.animAdvancedSecond
      .addElement(document.getElementById('advancedCard'))
      .duration(1000)
      .easing('ease-out')
      .iterations(1)
      .fromTo('transform', 'translateY(0px)', 'translateY(50px)')
      .fromTo('opacity', 1, 0.2);


  }

  toggleAnimation() {
    if (this.isPlaying) {
      this.anim.stop();
      this.animAdvanced.stop();
    } else {
      this.anim.play();
      this.animAdvanced.play();
      setTimeout(() => {
        document.getElementById('basicCard').style.display = 'none';
        document.getElementById('advancedCard').style.display = 'none';
      }, 500);
      document.getElementById('footer').style.display = 'block';
      document.getElementById('my-form').hidden = false;
      document.getElementById('createTknBtn2').style.display = 'block';
    }
    this.isPlaying = !this.isPlaying;
  }

  toggleAdvAnimation() {
    if (this.isPlaying) {
      this.animSecond.stop();
      this.animAdvancedSecond.stop();
    } else {
      this.animSecond.play();
      this.animAdvancedSecond.play();
      setTimeout(() => {
        document.getElementById('basicCard').style.display = 'none';
        document.getElementById('advancedCard').style.display = 'none';
      }, 500);
      document.getElementById('footer').style.display = 'block';
      document.getElementById('my-form').hidden = false;
      document.getElementById('createTknBtn2').style.display = 'block';
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

  isChecked(ev: any) {
    if(ev.detail.checked) {
      if(ev.target.id == 'description') {
        this.advancedFormInputsChecked.description = true;
      } else if(ev.target.id == 'icon') {
        this.advancedFormInputsChecked.icon = true;
      } else if(ev.target.id == 'proof') {
        this.advancedFormInputsChecked.proof = true;
      } else if(ev.target.id == 'nft') {
        this.advancedFormInputsChecked.nft = true;
      }
    } else if(!ev.detail.checked) {
      if(ev.target.id == 'description') {
        this.advancedFormInputsChecked.description = false;
      } else if(ev.target.id == 'icon') {
        this.advancedFormInputsChecked.icon = false;
      } else if(ev.target.id == 'proof') {
        this.advancedFormInputsChecked.proof = false;
      } else if(ev.target.id == 'nft') {
        this.advancedFormInputsChecked.nft = false;
      }
    }
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
          console.log('NFT False')
          this.customToken.script = "RETURN TRUE";
        } else if(f.value.NFT === true) {
          console.log('NFT False')

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
