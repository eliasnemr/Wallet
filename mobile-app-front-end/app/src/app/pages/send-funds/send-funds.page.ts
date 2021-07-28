import { take } from 'rxjs/operators';
import { TokenModalComponent } from
  './../../components/token-modal/token-modal.component';
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
import {
  Component,
  ViewChild} from '@angular/core';
import {
  IonInput,
  IonButton,
  MenuController,
  ModalController} from '@ionic/angular';
import {MinimaApiService} from '../../service/minima-api.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import {Token} from 'minima';
import {Decimal} from 'decimal.js';

export interface SendFormObj {
  token?: Token;
  amount?: string;
  address?: string;
  message?: string;
}

Decimal.set({precision: 64}); /** set precision for Decimal calculations */
export function checkAmount(amnt: any): ValidatorFn {
  return (control?: AbstractControl): ValidationErrors | null => {
    try {
      if (isNaN(parseInt(control.value)) !== true) {
        if (new Decimal(amnt)) {
          const amount = new Decimal(amnt);
          if (control.value && new Decimal(control.value).greaterThan(amount)) {
            return {invalidAmount: true};
          } else if (control.value && new Decimal(control.value).equals(0)) {
            return {invalidAmount: true};
          } else if (control.value.length === 0) {
            return {invalidAmount: true};
          }
        }
      } else {
        return {invalidAmount: true};
      }
    } catch (err) {
      console.log(err);
      return {invalidAmount: true};
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
export class SendFundsPage {
  @ViewChild('submitBtn', {static: false}) submitBtn: IonButton;
  @ViewChild('amount', {static: false}) amountInp: IonInput;

  data: SendFormObj;

  sendForm: FormGroup;
  myTokens: Token[];

  $contactSubscription: Subscription;
  $balanceSubscription: Subscription;

  status = '';

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

  ionViewWillEnter() {
    this.formInit();
    this.subscribeBalance();
    this.subscribeContacts();
  }

  ionViewWillLeave() {
    this.$contactSubscription.unsubscribe();
    this.$balanceSubscription.unsubscribe();
  }

  subscribeBalance(): void {
    this.$balanceSubscription =
    this.minimaApiService.$balance.subscribe((res: Token[]) => {
      const tokenSelected =
      this.minimaApiService.currentTokenSelected.getValue();
      this.myTokens = res;
      this.myTokens.forEach((t: Token) => {
        if (t.tokenid === tokenSelected) {
          this.tokenFormItem.setValue(t);
          this.totalBalance.setValue(t.sendable);
          this.amountFormItem.setValidators(checkAmount(t.sendable));
        }
      });
    });
  }

  subscribeContacts(): void {
    this.$contactSubscription =
    this.contactService.selectedAddress.subscribe((res: SelectedAddress) => {
      if (res.address.length === 0) {
        // Do nothing
      } else {
        this.addressFormItem.setValue(res.address);
        this.contactService.selectedAddress.next({address: ''});
      }
    });
  }

  resetForm(): void {
    setTimeout(() => {
      this.status = '';
    }, 6000);
    this.submitBtn.disabled = false;
    this.sendForm.reset();
    this.formInit();
  }
  formInit(): void {
    this.sendForm = this.formBuilder.group({
      token: [],
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
  get tokenFormItem() {
    return this.sendForm.get('token');
  }
  get totalBalance() {
    return this.sendForm.get('totalBalance');
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

  async presentContactModal(): Promise<void> {
    const contactModal = await this.modalController.create({
      component: ContactsViewModalComponent,
      cssClass: 'contacts-view',
    });
    contactModal.present();
  }

  onSend(data: any): void {
    this.minimaApiService.$urlData.next(data);
    this.router.navigate(['confirmation'], {relativeTo: this.activedRouter});
  }

  async presentTokensModal(_tokens: Token[]): Promise<void> {
    const modal = await this.modalController.create({
      component: TokenModalComponent,
      componentProps: {tokens: _tokens},
      cssClass: 'allTokenModal',
    });

    modal.onDidDismiss().then((data: any) => {
      if (data && data.data) {
        const token: Token = data.data;
        this.minimaApiService.currentTokenSelected.next(token.tokenid);
        this.tokenFormItem.setValue(token);
        this.totalBalance.setValue(token.sendable);
        this.amountFormItem.setValidators(checkAmount(token.sendable));
      }
    });

    return await modal.present();
  }
}


