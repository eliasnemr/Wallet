import { ToolsService } from './../../service/tools.service';
import { ContactService, SelectedAddress } from 'src/app/service/contacts.service';
import { ContactsViewModalComponent } from './../../components/contacts-view-modal/contacts-view-modal.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BalanceService } from '../../service/balance.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { IonInput, IonButton, MenuController, ModalController } from '@ionic/angular';
import { MinimaApiService } from '../../service/minima-api.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

import { Token } from 'minima';

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
  status = '';
  webQrScanner: any;
  compareWith: any;
  itemSelected: any;
  isWebCameraOpen = false;
  minimaToken: any;
  data: SendFormObj = {tokenid: '', amount: '', address:  '', message: ''};
  messageToggle = false;
  balanceSubscription: Subscription;
  tokenArr: Token[] = [];

  constructor(
    public menu: MenuController,
    public modalController: ModalController,
    private myTools: ToolsService,
    private formBuilder: FormBuilder,
    private api: MinimaApiService,
    private balanceService: BalanceService,
    private _contactService: ContactService,
    private route: ActivatedRoute
  ) {
      this.pullInTokens();
  }

  ionViewWillEnter() {
    this._contactService.$selected_address.subscribe((res: SelectedAddress) => {
      if (res.address.length === 0) {

      } else {
        this.addressFormItem.setValue(res.address);
        this._contactService.$selected_address.next({address: ''});
      }
    });
    this.getTokenSelected();
  }

  ionViewWillLeave() {

  }

  ngOnInit() {
    this.formInit();
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

  openMenu() {
    this.menu.open();
  }

  pullInTokens() {
    this.balanceService.data.subscribe((balance: Token[]) => {
      this.tokenArr = balance;
    });
  }

  async presentContactModal() {
    let contactModal = await this.modalController.create({
      component: ContactsViewModalComponent,
      cssClass: 'contacts-view'
    });
    contactModal.present();
  }
  
  sendFunds() {
    this.status = 'Creating your transaction...';
    this.sendForm.value.amnt = this.sendForm.value.amount.toString();
    const data: SendFormObj = this.sendForm.value;
    //console.log(data);
    try {
      this.post(data);
    } catch(err) {
      console.log(err);
    } finally {
      setTimeout( () => {
        this.status = '';
        this.submitBtn.disabled = false;
      }, 6000);
    }
    
  }
  async post(data: any) {
    this.submitBtn.disabled = true;
    this.status = 'Posting your transaction...';
    if (data.message !== null && ( data.message || data.message.length > 0) ) {
      const res: any = await this.api.sendMessageTransaction(data);
      console.log(res);
      if (res.status) {
        setTimeout(() => {
          this.submitBtn.disabled = false;
        }, 500);
        this.status = 'Transaction posted!';
        this.myTools.presentAlert('Transaction Status', 'Transaction has been posted to the network!', 'Successful');
        this.resetForm();
      } else {
        setTimeout(() => {
          this.submitBtn.disabled = false;
        }, 500);
        this.status = 'Transaction failed!';
        this.myTools.presentAlert('Transaction Status', res.message, 'Failed');
      }
    } else {
      const res: any = await this.api.sendFunds(data);
      console.log(res);

      if (res.status) {
        //console.log(res);
        setTimeout(() => {
          this.submitBtn.disabled = false;
        }, 500);
        this.status = 'Transaction posted!';
        this.myTools.presentAlert('Transaction Status', 'Transaction has been posted to the network!', 'Successful');
        this.resetForm();
      } else {
        setTimeout(() => {
          this.submitBtn.disabled = false;
        }, 500);
        this.status = 'Transaction failed!';
        this.myTools.presentAlert('Transaction Status', res.message, 'Failed');
      }
    }
  }

  resetForm() {
    this.sendForm.reset();
    this.formInit();
  }

  formInit() {
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
        this.myTools.presentAlert('Gimme50', 'Successful', 'Status');
      } else {
        this.myTools.presentAlert('Gimme50', res.message, 'Status');
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

  useMessage() {
    if (this.messageToggle) {
      this.messageToggle = false;
    } else {
      this.messageToggle = true;
    }
  }

}


