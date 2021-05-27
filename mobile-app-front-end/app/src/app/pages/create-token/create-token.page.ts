import { ToolsService } from './../../service/tools.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MinimaApiService } from '../../service/minima-api.service';
import { IonButton, MenuController, IonContent } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

interface AdvancedFormInputsCheck {
  description: boolean;
  icon: boolean;
  proof: boolean;
  nft: boolean;
}

interface CustomToken {
  name: string;
  amount: number;
  icon: string;
  proof: string;
  script: string;
  description: string;
}

@Component({
  selector: 'app-create-token',
  templateUrl: './create-token.page.html',
  styleUrls: ['./create-token.page.scss'],
})
export class CreateTokenPage implements OnInit {
  @ViewChild('submitBtn', {static : false}) submitBtn: IonButton;
  @ViewChild('pageContent', {static : false}) pageContent: IonContent;


  tokenCreationForm: FormGroup;
  advancedFormInputsChecked: AdvancedFormInputsCheck;

  status = '';
  isNft = false;
  loading = false;
  success = false;
  customToken: CustomToken;
  descrEntry = { isChecked: false };
  iconEntry = { isChecked: false };
  proofEntry = { isChecked: false };
  nft = { isNonFungible: false };
  private creationStatus: string;

  constructor(
    public menu: MenuController,
    private api: MinimaApiService,
    private formBuilder: FormBuilder,
    private myTools: ToolsService) {
    this.creationStatus = 'Create Token';
    this.customToken = {
      name: '',
      amount: 0,
      icon: '',
      proof: '',
      script: '',
      description: '',
    };

    this.advancedFormInputsChecked = {
      description: false,
      icon: false,
      proof: false,
      nft: false,
    };
  }

  ionViewDidEnter() {}

  ngOnInit() {
    this.formInit();
  }

  openMenu() {
    this.menu.open();
  }

  createTokenAdvanced() {
    this.creationStatus = '';
    this.loading = true;
    // console.log(this.tokenCreationForm.value);
    const newToken: any = this.tokenCreationForm.value;
    // console.log(newToken);
    try {
      this.create(newToken);
    } catch (err) {
      console.log(err);
    } 
  }

  async create(newToken: any) {
    // console.log(newToken);
    this.myTools.scrollToBottom(this.pageContent);
    if (newToken.nft) {
      this.submitBtn.disabled = true;
      const res: any = await this.api.createToken(newToken);
      if (res.status) {
        this.myTools.presentAlert('Success', 'Token ' +
          this.customToken.name+' has been created.', 'Token Creation Status');
        this.creationStatus = 'Token created!';
        this.resetForm();
      } else {
        setTimeout(() => {
          this.creationStatus = 'Create Token';
          this.submitBtn.disabled = false;
        }, 500);
        this.creationStatus = 'Creation failed!';
        this.myTools.presentAlert('Error',
            res.message, 'Token Creation Status');
      }
    } else {
      this.submitBtn.disabled = true;
      // newToken.script = 'RETURN TRUE'; // default script to spend token
      const res: any = await this.api.createToken(newToken);
      if (res.status) {
        this.myTools.presentAlert('Success', 'Token ' +
        this.customToken.name + ' has been created.', 'Token Creation Status');
        this.creationStatus = 'Token created!';
        this.resetForm();
      } else {
        setTimeout(() => {
          this.creationStatus = 'Create Token';
          this.submitBtn.disabled = false;
        }, 500);
        this.myTools.presentAlert('Error',
            res.message, 'Token Creation Status');
      }
    }
  }

  formInit() {
    this.tokenCreationForm = this.formBuilder.group({
      name: ['', [
        Validators.required,
        Validators.maxLength(255),
        // Validators.pattern('[a-zA-Z0-9 .\-\_\']*$'),
      ]],
      amount: ['', [
        Validators.required,
        Validators.maxLength(255),
        Validators.pattern('^[0-9]*$'),
      ]],
      description: '',
      script: '',
      icon: ['', [
        Validators.pattern(
            '(http(s?):)([\\/|\\.|\\w|\\s|\\-])*\.(?:jpg|png|gif|svg)$'),
        Validators.maxLength(255),
      ]],
      proof: ['', [
        Validators.pattern('(http(s?):)([\\/|\\.|\\w|\\s|\\-])*\.(?:txt)$'),
        Validators.maxLength(255),
      ]],
      nft: false,
    });
  }

  resetForm() {
    setTimeout(() => {
      this.creationStatus = 'Create Token';
    }, 2000);
    this.submitBtn.disabled = false;
    this.tokenCreationForm.reset();
    this.formInit();
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
