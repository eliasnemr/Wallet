import { BalanceService } from '../../service/balance.service';
import { Component, OnInit, NgZone, ViewChild, ElementRef } from '@angular/core';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';
import { Clipboard } from '@ionic-native/clipboard/ngx';
import { AlertController, Platform, NavParams, IonInput, IonTextarea, ToastController } from '@ionic/angular';
import { MinimaApiService } from '../../service/minima-api.service';
import { map, subscribeOn } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import QrScanner from 'qr-scanner';

import { Token } from 'minima';
import { holdReady } from 'jquery';
@Component({
  selector: 'app-send-funds',
  templateUrl: './send-funds.page.html',
  styleUrls: ['./send-funds.page.scss'],
})
export class SendFundsPage implements OnInit {

  @ViewChild('address', {static: false}) address: IonInput;
  @ViewChild('amount', {static: false}) amount: IonInput;
  @ViewChild('message', {static: false}) message: IonTextarea;

  @ViewChild('videoElem', {static: false}) videoElem: ElementRef;

  max: string; // max sendable amount for quickAmount
  webQrScanner: any;
  compareWith: any;
  itemSelected: any;
  isCameraOpen = false;
  isWebCameraOpen = false;
  minimaToken: any;
  data: any = {};

  // checkboxValue
  messageEntry: any = { isChecked: false };
  balanceSubscription: Subscription;

  // Token Array Type
  tokenArr: Token[] = [];
  MINIMA_TOKEN_ID = '0x00'; 

  private lastJSON = '';
  private scanSub: any = null;
  constructor(
    private qrScanner: QRScanner,
    private clipboard: Clipboard,
    public alertController: AlertController,
    private zone: NgZone, 
    private api: MinimaApiService,
    private service: BalanceService,
    private platform: Platform,
    private route: ActivatedRoute,
    private router: Router) {
      this.data.message = '';
      this.pullInTokens();
    }

  ngOnInit() { }

  ionViewWillEnter() { this.isCameraOpen = false; }

  ionViewWillLeave() {
    this.balanceSubscription.unsubscribe(); // unsubscribe
    this.stopCamera();
  }

  // get token selected or set Minima as default
  getTokenSelected() {
    // check url snapshot
    const empty = undefined;
    const param = this.route.snapshot.params['id'];
    // check param
    if(param === empty || param === this.MINIMA_TOKEN_ID){
      this.itemSelected = this.tokenArr[0];
      this.updateTokenId('0x00');
    } else if (param !== empty && param !== this.MINIMA_TOKEN_ID ) {
    this.tokenArr.forEach(element => {
      if(param === element.tokenid) {
        this.itemSelected = element;
        this.updateTokenId(element.tokenid);
      }
    });
  }
  }

  // listen to selection change
  onItemSelection($event) {
    const param = this.route.snapshot.params['id'];
    this.tokenArr.forEach(element => {
      if (this.itemSelected === element && param !== element.tokenid) {
        this.itemSelected = element;
        this.router.navigate(['/send-funds', {id: element.tokenid}]);

        // update tokenid
        this.updateTokenId(element.tokenid);
      }
    });
  }
  // fn to update tokenid
  updateTokenId(id: string) {
    this.data.tokenid = id;
  }

  fillAmount(type: string) {
    const empty = undefined;
    let param = this.route.snapshot.params['id'];
    if(param === empty) {
        param = '0x00';
    }
    this.tokenArr.forEach(element => {

      if (param === element.tokenid) {
        
        this.max = element.sendable;

        if(type === 'max') {

          this.amount.value = this.max;
        
        
        } else if(type === 'half') {
          
          this.amount.value = (parseFloat(this.max)/2.0).toString();

        } else if(type === 'quarter') {
          this.amount.value = (parseFloat(this.max)/4.0).toString();
          
        
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
            console.log('Scanned failed', err);
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
    if(this.scanSub !== null) {
      this.qrScanner.hide();
      this.scanSub.unsubscribe();
    }
    this.scanSub = null;
    this.identifyPlatformToScan_Remove();
    this.isCameraOpen = false;
    if( this.platform.is['mobile']
     || this.platform.is['capacitor']
     || this.platform.is['cordova']
     || this.platform.is['mobileweb']
     || this.platform.is['iphone']
     || this.platform.is['ipad']
     || this.platform.is['hybrid']
     || this.platform.is['android']
     || this.platform.is['tablet'] ) {
      this.qrScanner.destroy();
    }
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

  // check if it's a token, or a Mini
  instanceOfToken(data: any) {
    return 'script' in data;
  }
  pullInTokens() {

    this.balanceSubscription = this.service.updatedBalance
      .pipe(
        map((balance: any) => {
          
      const tokenArr: Token[] = [];
      
      for (const key in balance) {

        if (balance.hasOwnProperty(key)) {

          if (this.instanceOfToken(balance[key])) {

              const element = balance[key];
              tokenArr.push({
                tokenid: element.tokenid,
                token: element.token,
                description: element.description,
                icon: element.icon,
                proof: element.proof,
                total: element.total,
                script: element.script,
                coinid: element.coinid,
                totalamount: element.totalamount,
                scale: element.scale,
                confirmed: element.confirmed,
                unconfirmed: element.unconfirmed,
                mempool: element.mempool,
                sendable: element.sendable
            });

            } else {

              const element = balance[key];
              // add Minima always to the top
              tokenArr.pop(); // pop it
              this.service.update(
              tokenArr,
              {
                tokenid: element.tokenid,
                token: element.token,
                total: element.total,
                confirmed: element.confirmed,
                unconfirmed: element.unconfirmed,
                mempool: element.mempool,
                sendable: element.sendable
              });
              

            }

            }
            
        }

      return tokenArr;

      })
    )
    .subscribe(responseData => {

      // check if changed
      if(this.lastJSON !== JSON.stringify(responseData)) {
        this.tokenArr = [...responseData];
        this.lastJSON = JSON.stringify(responseData);

        // add tokens
        this.getTokenSelected();
      }

    });
  }

  sendFunds(){
    if(this.data.address && this.data.address !== '' && this.data.amount && this.data.amount > 0 &&
    this.data.tokenid && this.data.tokenid !== '' && !this.data.message) {
      this.api.sendFunds(this.data).then((res: any) => {
        if (res.status === true) {
          // clear inputs
          this.address.value = '';
          this.amount.value = '';
          // success
          this.presentAlert('Success', 'Your transaction has been successfully posted!', 'Transaction Status');
        } else {
          this.presentAlert('Error', res.message, 'Transaction Status');
        }
      });
    } else if(this.data.address && this.data.address !== '' && this.data.amount && this.data.amount > 0 &&
    this.data.tokenid && this.data.tokenid !== '' && this.data.message !== undefined && this.data.message.length >= 0) {
      this.api.createTXN(this.data).then((res: any)=> {
        if (res[5].status === true) {
          // clear inputs
          this.address.value = '';
          this.amount.value = '';
          this.message.value = '';
          // success
          this.presentAlert('Success', 'Your transaction has been successfully posted!', 'Transaction Status');
      
        } else if(res[4].status === false) {
          this.presentAlert('Error', res.message, 'Transaction Status');
          
        }
      })
    } else {
      this.presentAlert('Error', 'Please check your input fields.', 'Transaction Status');
      
    }
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

  // work around for weird ion-textarea height: 0 + auto-grow='true'
  async checkTextarea() {
    return this.message.getInputElement().then((element) => {
      if(element.style.height == '0px'){
       return  element.style.height = 'auto';
      } else {
        setTimeout(() => this.checkTextarea(), 100)}
      });
  }
  checkboxValue(ev: any, messageEntry: any) {
    this.checkTextarea();
    if (messageEntry === false) {
      this.data.message = undefined;
    }
  }

  // Display/hide mobile buttons with this..
  checkPlatform() {
    if(this.platform.is('desktop')) {
      return false;
    } else {
      return true;
    }
  }

  pasteFromClipboard() {
    if(this.platform.is('desktop')) {

      this.pasteFromPWA();

    } else {
      this.clipboard.paste().then(
        (resolve: string) => {
          this.data.address = resolve;
        },
        (reject: string) => {
          console.log('Error: ' + reject);
        }
      );
    }
  }

  pasteFromPWA() {
    document.addEventListener('paste', (e: ClipboardEvent) => {

      this.data.address = e.clipboardData.getData('text');
      
      e.preventDefault();
      document.removeEventListener('paste', null);
    });
    document.execCommand('paste');
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


