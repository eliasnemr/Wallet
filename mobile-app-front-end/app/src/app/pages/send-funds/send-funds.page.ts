import {ContactService,
  SelectedAddress} from 'src/app/service/contacts.service';
import {
  ContactsViewModalComponent,
} from './../../components/contacts-view-modal/contacts-view-modal.component';
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';
import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import {
  IonInput,
  IonButton,
  MenuController,
  ModalController,
  IonContent} from '@ionic/angular';
import {MinimaApiService} from '../../service/minima-api.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import {Token} from 'minima';
import {Decimal} from 'decimal.js';

export interface SendFormObj {
  tokenid?: string;
  amount?: string;
  address?: string;
  message?: string;
}

Decimal.set({precision: 64}); /** set precision for Decimal calculations */
export function checkAmount(amnt: any): ValidatorFn {
  return (control?: AbstractControl): ValidationErrors | null => {
    const amount = new Decimal(amnt);
    try {
      if (control.value && new Decimal(control.value).greaterThan(amount)) {
        return {invalidAmount: true};
      } else if (control.value && new Decimal(control.value).equals(0)) {
        return {invalidAmount: true};
      } else if (control.value.length === 0) {
        return {invalidAmount: true};
      }
    } catch (err) {
      console.log(err);
    }
    return null;
  };
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
  $tokenSelectSubscription: Subscription;

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
  insufficientFunds: boolean;

  /** */
  constructor(
    public menu: MenuController,
    public modalController: ModalController,
    private formBuilder: FormBuilder,
    private minimaApiService: MinimaApiService,
    private contactService: ContactService,
    private activedRouter: ActivatedRoute,
    private router: Router,
  ) {
    this.myTokens = [];
  }
  /** */
  ionViewWillEnter() {
    this.formInit('0x00');
    this.$balanceSubscription =
    this.minimaApiService.$balance.subscribe((res: Token[]) => {
      if (res.length === 1) {
        this.myTokens = res.filter((token) =>
          new Decimal(token.sendable).greaterThan(new Decimal(0)));
        this.totalBalance.setValue(this.myTokens[0] &&
          this.myTokens[0].sendable ?
           this.myTokens[0].sendable : 0);

        (this.myTokens[0] &&
           this.myTokens[0].sendable ?
            this.amountFormItem.setValidators(
                checkAmount(this.myTokens[0].sendable)) :
            this.amountFormItem.setValidators(checkAmount('0')) );
      } else {
        this.insufficientFunds = false;
        this.myTokens = res.filter((token) =>
          new Decimal(token.sendable).greaterThan(new Decimal(0)));
        this.totalBalance.setValue(this.myTokens[0] &&
          this.myTokens[0].sendable ?
           this.myTokens[0].sendable : 0);

        (this.myTokens[0] &&
        this.myTokens[0].sendable ?
          this.amountFormItem.setValidators(
              checkAmount(this.myTokens[0].sendable)) :
          this.amountFormItem.setValidators(checkAmount('0')) );
      }
    });

    this.$contactSubscription =
    this.contactService.selectedAddress.subscribe((res: SelectedAddress) => {
      if (res.address.length === 0) {
        // Do nothing
      } else {
        this.addressFormItem.setValue(res.address);
        this.contactService.selectedAddress.next({address: ''});
      }
    });
    this.onSelectionChange();
    this.getTokenSelected();
  }
  /** */
  ionViewWillLeave() {
    this.$contactSubscription.unsubscribe();
    this.$balanceSubscription.unsubscribe();
  }
  /** */
  ngOnInit() { }
  /** */
  resetForm() {
    setTimeout(() => {
      this.status = '';
    }, 6000);
    this.submitBtn.disabled = false;
    this.sendForm.reset();
    this.formInit('0x00');
  }
  /** */
  formInit(id) {
    this.sendForm = this.formBuilder.group({
      tokenid: id,
      totalBalance: '',
      address: ['', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(60),
        Validators.pattern('[Mx|0x][a-zA-Z0-9]+')]],
      amount: ['0', [
        Validators.required,
        Validators.minLength(1),
      ]],
      message: ['', Validators.maxLength(255)],
    });
  }
  /** */
  get tokenFormItem() {
    return this.sendForm.get('tokenid');
  }
  /** */
  get totalBalance() {
    return this.sendForm.get('totalBalance');
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
  async presentContactModal() {
    const contactModal = await this.modalController.create({
      component: ContactsViewModalComponent,
      cssClass: 'contacts-view',
    });
    contactModal.present();
  }
  /** get token selected, or set Minima as default */
  getTokenSelected() {
    this.activedRouter.queryParamMap.subscribe((res: any) => {
      this.itemSelected = res.params.id;
      if (!res.params.id) {
        this.itemSelected = '0x00';
      }
    });
  }

  onSelectionChange() {
    this.$tokenSelectSubscription =
    this.tokenFormItem.valueChanges.subscribe((tokenid: any) => {
      this.$balanceSubscription =
      this.minimaApiService.$balance.subscribe((balance: Token[]) => {
        // console.log(balance);
        balance.forEach((token: Token) => {
          if (token.tokenid === tokenid) {
            this.totalBalance.setValue(token.sendable);
            this.amountFormItem.setValidators(checkAmount(token.sendable));
          }
        });
      });
    });
  }

  onSend(data: any) {
    this.minimaApiService.$urlData.next(data);
    this.router.navigate(['confirmation'], {relativeTo: this.activedRouter});
  }
}


