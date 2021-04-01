import { ToolsService } from './../../service/tools.service';
import { CustomToken } from './../../models/customToken.model';
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

@Component({
  selector: 'app-create-token',
  templateUrl: './create-token.page.html',
  styleUrls: ['./create-token.page.scss'],
})
export class CreateTokenPage implements OnInit {
  @ViewChild('submitBtn', {static : false}) submitBtn: IonButton;
  @ViewChild('pageContent', {static : false}) pageContent: IonContent;


  tokenCreationForm: FormGroup;
  advancedFormInputsChecked: AdvancedFormInputsCheck = {description: false, icon: false, proof: false, nft: false};

  status = '';
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
    private myTools: ToolsService) {}

  ionViewDidEnter() {}

  ngOnInit() {
    this.formInit();
  }

  openMenu() {
    this.menu.open();
  }

  giveMe50() {
    this.api.giveMe50().then((res: any) => {
      if(res.status === true) {
        this.myTools.presentAlert('Gimme50', 'Successful', 'Status');
      } else {
        this.myTools.presentAlert('Gimme50', res.message, 'Status');
      }
    });
  }
  
  createTokenAdvanced() {
    this.loading = true;
    //console.log(this.tokenCreationForm.value);
    const newToken: CustomToken = this.tokenCreationForm.value;
    //console.log(newToken);
    try {
      this.status = 'Creating token...';
      this.create(newToken);
    } catch(err) {
      console.log(err);
    } finally {
      setTimeout(() => {
        this.status = '';
        this.submitBtn.disabled = false;
      }, 6000)
    }
    
  }

  async create(newToken: CustomToken) {
    console.log(newToken);
    this.myTools.scrollToBottom(this.pageContent);
    if (newToken.nft) {
      this.submitBtn.disabled = true;
      const res: any = await this.api.createToken(newToken);
      if (res.status) {
        this.status = 'Token created!';
        this.myTools.presentAlert('Success', 'Token '+this.customToken.name+' has been created.', 'Token Creation Status');
        this.resetForm();
      } else {
        setTimeout(() => {
          this.submitBtn.disabled = false;
        }, 500)
        this.status = 'Token creation failed!';
        this.myTools.presentAlert('Error', res.message, 'Token Creation Status');
      }
    } else {
      this.submitBtn.disabled = true;
      //newToken.script = 'RETURN TRUE'; // default script to spend token
      const res: any = await this.api.createToken(newToken);
      if (res.status) {
        this.status = newToken.name + ' has been created!';
        this.myTools.presentAlert('Success', 'Token ' + this.customToken.name + ' has been created.', 'Token Creation Status');
        this.resetForm();
      } else {
        setTimeout(() => {
          this.submitBtn.disabled = false;
        }, 500)
        this.status = newToken.name + ' failed to create!';
        this.myTools.presentAlert('Error', res.message, 'Token Creation Status');
      }
    }
  }

  formInit() {
    this.tokenCreationForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(255)]],
      amount: ['', [Validators.required, Validators.maxLength(255)]],
      description: '',
      script: '',
      icon: ['', [Validators.pattern('(http(s?):)([\\/|\\.|\\w|\\s|\\-])*\.(?:jpg|png|gif)$'), Validators.maxLength(255)]],
      proof: ['', [Validators.pattern('(http(s?):)([\\/|\\.|\\w|\\s|\\-])*\.(?:txt)$'), Validators.maxLength(255)]],
      nft: false
    });
  }

  resetForm() { 
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
