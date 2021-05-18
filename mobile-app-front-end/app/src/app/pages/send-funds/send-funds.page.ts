import {ToolsService} from './../../service/tools.service';
import {ContactService,
  SelectedAddress} from 'src/app/service/contacts.service';
import {
  ContactsViewModalComponent,
} from './../../components/contacts-view-modal/contacts-view-modal.component';
import {
  FormGroup,
  FormBuilder,
  Validators} from '@angular/forms';
import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import {
  IonInput,
  IonButton,
  MenuController,
  ModalController,
  IonContent} from '@ionic/angular';
import {MinimaApiService} from '../../service/minima-api.service';
import {Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {Token} from 'minima';

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
/**  */
export class SendFundsPage implements OnInit {
  @ViewChild('submitBtn', {static: false}) submitBtn: IonButton;
  @ViewChild('amount', {static: false}) amountInp: IonInput;
  @ViewChild('videoElem', {static: false}) videoElem: ElementRef;
  @ViewChild('pageContent', {static: false}) pageContent: IonContent;

  sendForm: FormGroup;
  myTokens: Token[];
  $contactSubscription: Subscription;
  $balanceSubscription: Subscription;

  status = '';
  webQrScanner: any;
  compareWith: any;
  itemSelected: any;
  isWebCameraOpen = false;
  minimaToken: any;
  data: SendFormObj = {tokenid: '', amount: '', address: '', message: ''};
  messageToggle = false;
  balanceSubscription: Subscription;
  tokenArr: Token[] = [];
  /** */
  constructor(
    public menu: MenuController,
    public modalController: ModalController,
    private myTools: ToolsService,
    private formBuilder: FormBuilder,
    private minimaApiService: MinimaApiService,
    private contactService: ContactService,
    private route: ActivatedRoute,
  ) {
    this.myTokens = [];
  }
  /** */
  ionViewWillEnter() {
    this.$balanceSubscription =
    this.minimaApiService.$balance.subscribe((res: Token[]) => {
      this.myTokens = res.filter((token) => parseInt(token.sendable, 10) > 0);
    });

    this.$contactSubscription =
    this.contactService.$selected_address.subscribe((res: SelectedAddress) => {
      if (res.address.length === 0) {
        // Do nothing
      } else {
        this.addressFormItem.setValue(res.address);
        this.contactService.$selected_address.next({address: ''});
      }
    });
    this.getTokenSelected();
  }
  /** */
  ionViewWillLeave() {
    this.$contactSubscription.unsubscribe();
    this.$balanceSubscription.unsubscribe();
  }
  /** */
  ngOnInit() {
    this.formInit();
  }
  /** */
  get tokenFormItem() {
    return this.sendForm.get('tokenid');
  }
  /** */
  get addressFormItem() {
    return this.sendForm.get('address');
  }
  /** */
  get amountFormItem() {
    return this.sendForm.get('amount');
  }
  /** */
  get messageFormItem() {
    return this.sendForm.get('message');
  }
  /** */
  openMenu() {
    this.menu.open();
  }

  /** */
  async presentContactModal() {
    const contactModal = await this.modalController.create({
      component: ContactsViewModalComponent,
      cssClass: 'contacts-view',
    });
    contactModal.present();
  }
  /** */
  sendFunds() {
    this.status = 'Creating your transaction...';
    this.myTools.scrollToBottom(this.pageContent);
    this.sendForm.value.amnt = this.sendForm.value.amount.toString();
    const data: SendFormObj = this.sendForm.value;
    // console.log(data);
    try {
      this.post(data);
    } catch (err) {
      console.log(err);
    }
  }
  /**  */
  async post(data: any) {
    this.submitBtn.disabled = true;
    this.status = 'Posting your transaction...';
    if (data.message !== null && ( data.message || data.message.length > 0) ) {
      const res: any =
      await this.minimaApiService.sendMessageTransaction(data);
      // console.log(res);
      if (res.status) {
        this.status = 'Transaction posted!';
        this.myTools.presentAlert(
            'Transaction Status',
            'Transaction has been posted to the network!',
            'Successful');
        this.resetForm();
      } else {
        console.log(res.status);
        setTimeout(() => {
          this.submitBtn.disabled = false;
        }, 500);
        this.status = 'Transaction failed!';
        this.myTools.presentAlert('Transaction Status', res.message, 'Failed');
      }
    } else {
      const res: any = await this.minimaApiService.sendFunds(data);
      // console.log(res);

      if (res.status) {
        this.status = 'Transaction posted!';
        this.myTools.presentAlert(
            'Transaction Status',
            'Transaction has been posted to the network!',
            'Successful');
        this.resetForm();
      } else {
        console.log(res.status);
        setTimeout(() => {
          this.submitBtn.disabled = false;
        }, 500);
        this.status = 'Transaction failed!';
        this.myTools.presentAlert('Transaction Status', res.message, 'Failed');
      }
    }
  }
  /** */
  resetForm() {
    setTimeout(() => {
      this.status = '';
    }, 6000);
    this.submitBtn.disabled = false;
    this.sendForm.reset();
    this.formInit();
  }
  /** */
  formInit() {
    this.sendForm = this.formBuilder.group({
      tokenid: '',
      address: ['', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(60),
        Validators.pattern('[Mx|0x][a-zA-Z0-9]+')]],
      amount: ['', [Validators.required]],
      message: '',
    });
  }

  /** get token selected, or set Minima as default */
  getTokenSelected() {
    this.route.queryParamMap.subscribe((res: any) => {
      this.itemSelected = res.params.id;
      if (!res.params.id) {
        this.itemSelected = '0x00';
      }
    });
  }

  /** listen to selection change */
  onItemSelection(ev: any) {
    this.itemSelected = this.sendForm.get('tokenid').value;
  }
  /** Scan QR */
  scanQR() {
    this.isWebCameraOpen = true;
    // console.log('Camera turned on, ' + this.isWebCameraOpen);
    const stream = navigator.mediaDevices.getUserMedia({
      video: {facingMode: 'environment'},
    });

    this.videoElem.nativeElement.src = stream;
    this.videoElem.nativeElement
        .setAttribute('playsinline', true); // iOS - do not open fullscreen
    this.videoElem.nativeElement.play();
  }
  /** */
  stopScanning() {
    this.isWebCameraOpen = false;
  }
}


