import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BalanceService } from '../../service/balance.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Clipboard } from '@ionic-native/clipboard/ngx';
import { AlertController, IonInput, IonButton } from '@ionic/angular';
import { MinimaApiService } from '../../service/minima-api.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

import { Token, Minima } from 'minima';

export interface SendFormObj {
  tokenid?: string;
  amount?: string;
  address?: string;
  message?: string;
}

@Component({
  selector: 'app-send-funds',
  templateUrl: './send-funds.page.html',
  styleUrls: ['./send-funds.page.scss'],
})
export class SendFundsPage implements OnInit {

  @ViewChild('submitBtn', {static: false}) submitBtn: IonButton;
  @ViewChild('amount', {static: false}) amountInp: IonInput;
  @ViewChild('videoElem', {static: false}) videoElem: ElementRef;

  sendForm: FormGroup;

  nftScript: string = 'ASSERT FLOOR ( @AMOUNT ) EQ @AMOUNT LET checkout = 0 WHILE ( checkout LT @TOTOUT )' +
  'DO IF GETOUTTOK ( checkout ) EQ @TOKENID THEN LET outamt = GETOUTAMT ( checkout ) ASSERT FLOOR ( outamt )' +
  'EQ outamt ENDIF LET checkout = INC ( checkout ) ENDWHILE RETURN TRUE';
  max: string; // max sendable amount for quickAmount
  webQrScanner: any;
  compareWith: any;
  itemSelected: any;
  isWebCameraOpen = false;
  minimaToken: any;
  data: SendFormObj = {tokenid: '', amount: '', address:  '', message: ''};
  messageToggle = false;
  balanceSubscription: Subscription;
  tokenArr: Token[] = [];

  private scanSub: any = null;
  constructor(
    private formBuilder: FormBuilder,
    private clipboard: Clipboard,
    public alertController: AlertController,
    private api: MinimaApiService,
    private balanceService: BalanceService,
    private route: ActivatedRoute,
    private router: Router) {
      this.pullInTokens();
    }

  ionViewWillEnter() {
    this.getTokenSelected();
  }

  ionViewWillLeave() {

  }

  ngOnInit() {
    this.sendForm = this.formBuilder.group({
      tokenid: '',
      address: ['', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(60),
        Validators.pattern('[Mx|0x][a-zA-Z0-9]+')]],
      amount: ['', [Validators.required] ],
      message: ''
    });
  }

  get tokenFormItem() {
    return this.sendForm.get('tokenid');
  }
  get addressFormItem() {
    return this.sendForm.get('address');
  }
  get amountFormItem() {
    return this.sendForm.get('amount');
  }
  get messageFormItem() {
    return this.sendForm.get('message');
  }

  pullInTokens() {
    this.balanceService.data.subscribe((balance: Token[]) => {
      this.tokenArr = balance;
    });
  }
  
  sendFunds() {
    this.sendForm.value.amnt = this.sendForm.value.amount.toString();
    const data: SendFormObj = this.sendForm.value;
    console.log(data);
    if (data.message !== null && ( data.message || data.message.length > 0) ) {
      this.submitBtn.disabled = true;
      this.api.sendMessageTransaction(data).then((res: any) => {
        if (Minima.util.checkAllResponses(res)) {
          console.log(res);
          setTimeout(() => {
            this.submitBtn.disabled = false;
          }, 500);
          this.presentAlert('Transaction Status', 'Transaction has been posted to the network!', 'Successful');
          this.sendForm.reset();
        } else {
          setTimeout(() => {
            this.submitBtn.disabled = false;
          }, 500);
          this.presentAlert('Transaction Status', res.message, 'Failed');
        }
      });
    } else {
      this.data.message = '';
      this.submitBtn.disabled = true;
      this.api.sendFunds(data).then((res: any) => {
        if (res.status) {
          console.log(res);

          setTimeout(() => {
            this.submitBtn.disabled = false;
          }, 500);
          this.presentAlert('Transaction Status', 'Transaction has been posted to the network!', 'Successful');
          this.sendForm.reset();
        } else {
          setTimeout(() => {
            this.submitBtn.disabled = false;
          }, 500);
          this.presentAlert('Transaction Status', res.message, 'Failed');
        }
      });
    }
  }
  // get token selected or set Minima as default
  getTokenSelected() {
    this.route.queryParamMap.subscribe((res: any) => {
      this.itemSelected = res.params.id;
      if (!res.params.id) {
        this.itemSelected = '0x00';
      }
    });
  }

  giveMe50() {
    this.api.giveMe50().then((res: any) => {
      if(res.status === true) {
        this.presentAlert('Gimme50', 'Status', 'Successful');
      } else {
        this.presentAlert('Gimme50', 'Status', res.message);
      }
    });
  }

  // listen to selection change
  onItemSelection(ev: any) {
    this.itemSelected = this.sendForm.get('tokenid').value;
  }

  fillAmount(type: string) {
    const param = this.sendForm.get('tokenid').value;
    this.amountInp.value = '';
    this.tokenArr.forEach(element => {
    if (param === element.tokenid || (param === element.tokenid && element.script !== this.nftScript)) {
        const maxAmmo = element.sendable;
        if (type === 'max') {
        this.amountInp.value = maxAmmo;
        } else if (type === 'half') {
          this.amountInp.value = (parseFloat(maxAmmo) / 2.0).toString();
        } else if (type === 'quarter') {
          this.amountInp.value = (parseFloat(maxAmmo) / 4.0).toString();
        }
      } else if (element.script === this.nftScript) {
        const maxAmmo = element.sendable;
        if (type === 'max') {
          this.amountInp.value = maxAmmo;
        } else if (type === 'half') {
          this.amountInp.value = Math.floor((parseFloat(maxAmmo) / 2.0)).toString();
        } else if (type === 'quarter') {
          this.amountInp.value = Math.floor((parseFloat(maxAmmo) / 4.0)).toString();
        }
      }
    });
  }

  scanQR() {
    this.isWebCameraOpen = true;
    console.log("Camera is now on: " + this.isWebCameraOpen);
    const stream = navigator.mediaDevices.getUserMedia({
      video: { facingMode: 'environment' }
    });

    this.videoElem.nativeElement.src = stream;
    this.videoElem.nativeElement.setAttribute('playsinline', true); // iOS - do not open fullscreen
    this.videoElem.nativeElement.play();
  }

  stopScanning() {
    this.isWebCameraOpen = false;
  }

  async presentAlert(hdr: string, msg: string, sub: string) {
   const alert = await this.alertController.create({
     cssClass: 'alert',
     header: hdr,
     subHeader: sub,
     message: msg,
     buttons: ['OK']
   });
   await alert.present();
  }

  useMessage() {
    if (this.messageToggle) {
      this.messageToggle = false;
    } else {
      this.messageToggle = true;
    }
  }

}


