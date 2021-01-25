import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BalanceService } from '../../service/balance.service';
import { Component, OnInit, NgZone, ViewChild, ElementRef } from '@angular/core';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';
import { Clipboard } from '@ionic-native/clipboard/ngx';
import { AlertController, Platform, IonInput, IonTextarea, IonButton } from '@ionic/angular';
import { MinimaApiService } from '../../service/minima-api.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import QrScanner from 'qr-scanner';

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

  nftScript: string = 'ASSERT FLOOR ( @AMOUNT ) EQ @AMOUNT LET checkout = 0 WHILE ( checkout LT @TOTOUT ) DO IF GETOUTTOK ( checkout ) EQ @TOKENID THEN LET outamt = GETOUTAMT ( checkout ) ASSERT FLOOR ( outamt ) EQ outamt ENDIF LET checkout = INC ( checkout ) ENDWHILE RETURN TRUE';
  max: string; // max sendable amount for quickAmount
  webQrScanner: any;
  compareWith: any;
  itemSelected: any;
  isCameraOpen = false;
  isWebCameraOpen = false;
  minimaToken: any;
  data: SendFormObj = {tokenid: '', amount: '', address:  '', message: ''};
  messageToggle = false;
  balanceSubscription: Subscription;
  tokenArr: Token[] = [];

  private scanSub: any = null;
  constructor(
    private formBuilder: FormBuilder,
    private qrScanner: QRScanner,
    private clipboard: Clipboard,
    public alertController: AlertController,
    private zone: NgZone,
    private api: MinimaApiService,
    private balanceService: BalanceService,
    private platform: Platform,
    private route: ActivatedRoute,
    private router: Router) {
      this.pullInTokens();
    }

  ionViewWillEnter() {
    this.isCameraOpen = false;
    this.getTokenSelected();
  }

  ionViewWillLeave() {
    this.stopCamera();
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
    return this.sendForm.get('token');
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
    if (data.message !== null && ( data.message || data.message.length > 0) ) {
      this.submitBtn.disabled = true;
      this.api.createTXN(data).then((res: any) => {
        if (Minima.util.checkAllResponses(res)) {
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
      this.submitBtn.disabled = true;
      this.api.sendFunds(data).then((res: any) => {
        if (res.status) {
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

  // listen to selection change
  onItemSelection(ev: any) {
    this.itemSelected = ev.detail.value;
  }

  fillAmount(type: string) {
    const param = this.sendForm.get('tokenid').value;
    this.tokenArr.forEach(element => {
      if (param === element.tokenid && element.script !== this.nftScript) {
        this.max = element.sendable;
        if (type === 'max') {
          this.amountInp.value = this.max;
        } else if(type === 'half') {
          this.amountInp.value = (parseFloat(this.max) / 2.0).toString();
        } else if(type === 'quarter') {
          this.amountInp.value = (parseFloat(this.max) / 4.0).toString();
        }
      } else if (element.script === this.nftScript) {
        this.max = element.sendable;
        if (type === 'max') {
          this.amountInp.value = this.max;
        } else if (type === 'half') {
          this.amountInp.value = Math.floor((parseFloat(this.max) / 2.0)).toString();
        } else if (type === 'quarter') {
          this.amountInp.value = Math.floor((parseFloat(this.max) / 4.0)).toString();
        }
      }
    });
  }

  /** ScanQR: Native */
  scanQR() {
    if(this.platform.is('ios') || this.platform.is('android')){
      this.qrScanner.prepare()
      .then((status: QRScannerStatus) => {
        if (status.authorized) {
          // Which class adding should I use?
          this.identifyPlatformToScan_Add();

          this.qrScanner.show();
          this.isCameraOpen = true;

          this.scanSub = this.qrScanner.scan().subscribe((text: string) => {
            this.zone.run(() => {
              this.data.address = text;
              this.stopCamera();

              this.identifyPlatformToScan_Remove();

              this.isCameraOpen = false;
              });

          }, (err) => {
            //console.log('Scanned failed', err);
          });

        } else if (status.denied) {
          // camera permission was permanently denied
          // you must use QRScanner.openSettings() method to guide the user to the settings page
          // then they can grant the permission from there
          this.presentAlert('Error', 'Please check camera permission', 'Camera status');
        } else {
          // permission was denied, but not permanently. You can ask for permission again at a later time.
          this.presentAlert('Error',  'Please check camera permission', 'Camera status');

        }
      })
      .catch((e: any) => console.log('Error is', e));
    }
  }

  stopCamera() {
    if (this.scanSub !== null) {
      this.qrScanner.hide();
      this.scanSub.unsubscribe();
    }
    this.scanSub = null;
    this.identifyPlatformToScan_Remove();
    this.isCameraOpen = false;
    this.qrScanner.destroy();
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

  /** MISC FUNCS */
  identifyPlatformToScan_Add() {
    document.addEventListener('DOMContentLoaded', function(event) {
      // Do work
      if (this.platform.is('ios')) {
        setTimeout( () => {
          window.document.querySelectorAll('ion-content')
            .forEach(element => {
              const element1 = element.shadowRoot.querySelector('style');
              element1.innerHTML = element1.innerHTML
            .replace('--background:var(--ion-background-color,#fff);', '--background: transparent');
          });
        }, 300);
      } else if (this.platform.is('android')) {
        // window.document.querySelector('ion-content').classList.add('transparentBody');
        setTimeout( () => {
        window.document.querySelectorAll('ion-content')
            .forEach(element => {
              const element1 = element.shadowRoot.querySelector('style');
              element1.innerHTML = element1.innerHTML
            .replace('--background:var(--ion-background-color,#fff);', '--background: transparent');
          });
        }, 300);
      }
    });
  }
  identifyPlatformToScan_Remove() {
    document.addEventListener('DOMContentLoaded', function(event) {
    if (this.platform.is('ios')) {
      setTimeout( () => {
        window.document.querySelectorAll('ion-content')
          .forEach(element => {
            const element1 = element.shadowRoot.querySelector('style');
            element1.innerHTML = element1.innerHTML
          .replace('--background: transparent', '--background:var(--ion-background-color,#fff);');
        });
      }, 300);
    } else if (this.platform.is('android')) {
      // window.document.querySelector('ion-content').classList.remove('transparentBody');
      setTimeout( () => {
        window.document.querySelectorAll('ion-content')
          .forEach(element => {
            const element1 = element.shadowRoot.querySelector('style');
            element1.innerHTML = element1.innerHTML
          .replace('--background: transparent', '--background:var(--ion-background-color,#fff);');
        });
      }, 300);
    }

    });
  }

  useMessage() {
    if (this.messageToggle) {
      this.messageToggle = false;
    } else {
      this.messageToggle = true;
    }
  }

  checkPlatform() {
    if (this.platform.is('desktop')) {
      return false;
    } else {
      return true;
    }
  }

  webScanQR() {
    this.isWebCameraOpen = true;
    QrScanner.WORKER_PATH = 'assets/JS/qr-scanner-worker.min.js';

    setTimeout(() => {
      this.webQrScanner = new QrScanner(this.videoElem.nativeElement, result => {
        this.data.address = result;

        this.isWebCameraOpen = false;
      });
      this.webQrScanner.start();
    }, 500);
  }

  stopWebScanQR() {
    this.webQrScanner.destroy();
    this.webQrScanner = null;
    this.isWebCameraOpen = false;
  }
}


