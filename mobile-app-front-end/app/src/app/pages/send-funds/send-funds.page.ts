import { Tokens } from '../../models/tokens.model';
import { BalanceService } from '../../service/balance.service';
import { Component, OnInit, NgZone, ViewChild, ElementRef } from '@angular/core';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';
import { Clipboard } from '@ionic-native/clipboard/ngx';
import { AlertController, Platform, NavParams, IonInput, IonTextarea, ToastController } from '@ionic/angular';
import { MinimaApiService } from '../../service/minima-api.service';
import { map } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import QrScanner from 'qr-scanner';

@Component({
  selector: 'app-send-funds',
  templateUrl: './send-funds.page.html',
  styleUrls: ['./send-funds.page.scss'],
  providers: [ BalanceService ],
})
export class SendFundsPage implements OnInit {

  @ViewChild('address', {static: false}) address: IonInput;
  @ViewChild('amount', {static: false}) amount: IonInput;
  @ViewChild('message', {static: false}) message: IonTextarea;

  @ViewChild('videoElem', {static: false}) videoElem: ElementRef;

  webQrScanner: any;
  compareWith: any;
  itemSelected: any;
  isCameraOpen: boolean = false;
  isWebCameraOpen: boolean = false;
  minimaToken: any;
  data: any = {};

  //checkboxValue
  messageEntry: any = {
    isChecked: false
  }
  
  balanceSubscription: Subscription;
 

  // Token Array Type
  tokenArr: Tokens[] = [];
  MINIMA_TOKEN_ID = '0x00'; 

  private lastJSON: string = '';
  private scanSub:any=null;
  
  constructor(private qrScanner: QRScanner, private clipboard: Clipboard, 
    public alertController: AlertController,
    public toastController: ToastController,
    private zone: NgZone, 
    private api: MinimaApiService,
    private balanceService: BalanceService,
    private platform: Platform,
    private route: ActivatedRoute,
    private router: Router) {}

  ngOnInit() {
    this.isCameraOpen = false;
  }

  ionViewWillEnter(){
    // check for updates
    window.addEventListener('load', (ev: Event) => {
      // Page loaded
      window.addEventListener('MinimaEvent', (evt: any)=> {
        // Event connection success
        if(evt.detail.event === 'newbalance') {

          this.pullInTokens();

        } 
      });
    });

    this.pullInTokens();
    this.isCameraOpen = false;
  }

  ionViewWillLeave() {
    // unsubscribe
    this.balanceSubscription.unsubscribe();
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
      this.updateTokenId("0x00");
    
    } else if(param !== empty && param !== this.MINIMA_TOKEN_ID ){
    this.tokenArr.forEach(element => {
      if(param === element.tokenid){
        this.itemSelected = element;
        this.updateTokenId(element.tokenid);
      }
    })
  }
  }

  // listen to selection change
  onItemSelection($event) {
    const param = this.route.snapshot.params['id'];
    this.tokenArr.forEach(element => {
      if(this.itemSelected === element && param !== element.tokenid){
        this.itemSelected = element;
        
        this.router.navigate(["/send-funds", {id: element.tokenid}]);

        console.log(this.itemSelected)
        // update tokenid
        this.updateTokenId(element.tokenid);
      }
    })
  }
  // fn to update tokenid
  updateTokenId(id) {
    this.data.tokenid = id;
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
            this.zone.run(()=>{
              this.data.address = text;
              this.stopCamera();

              this.identifyPlatformToScan_Remove();

              this.isCameraOpen = false;
              })

          }, (err) => {
            console.log('Scanned failed', err);
          })

        } else if (status.denied) {
          // camera permission was permanently denied
          // you must use QRScanner.openSettings() method to guide the user to the settings page
          // then they can grant the permission from there
          this.presentAlert('Please check camera permission','Error');
        } else {
          // permission was denied, but not permanently. You can ask for permission again at a later time.
          this.presentAlert('Please check camera permission','Error');
        }
      })
      .catch((e: any) => console.log('Error is', e));
    }
  }

  stopCamera() {
    if(this.scanSub!==null){
      this.qrScanner.hide();
      this.scanSub.unsubscribe();
    }
    this.scanSub = null;
    this.identifyPlatformToScan_Remove();
    this.isCameraOpen = false;
    this.qrScanner.destroy();
  }

  
  /** ALERTS */
  async presentAlert(msg:string,header:string) {
    const alert = await this.alertController.create({
      header: header,
      message: msg,
      buttons: ['OK']
    });

    await alert.present();
  }
  async presentToast(msg: string, type: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 4000,
      color: type,
      keyboardClose: true,
      translucent: true,
      position:  'top'
    });
    toast.present();
  }

  // API CALLS
  pullInTokens() {
    this.balanceSubscription =this.balanceService.getBalance().pipe(map(responseData => {
      const tokenArr: Tokens[] = [];
      for(const key in responseData){
        if(responseData.hasOwnProperty(key)){
          let element = responseData[key];
          // round up confirmed && unconfirmed
          
          let tempConfirmed = (Math.round(element.confirmed * 100)/100);
          let tempUnconfirmed = (Math.round(element.unconfirmed * 100)/100);

          if(this.MINIMA_TOKEN_ID === element.tokenid){
            this.minimaToken = element.tokenid;
          }
          tokenArr.push({
              tokenid: element.tokenid,
              token: element.token,
              total: element.total,
              confirmed: tempConfirmed,
              unconfirmed: tempUnconfirmed,
              mempool: element.mempool,
              sendable: element.sendable
          });

          // add Minima always to the top
          if(element.tokenid === this.MINIMA_TOKEN_ID){
            tokenArr.pop(); // pop it
            this.balanceService.update(
            tokenArr,
            {
              tokenid: element.tokenid,
              token: element.token,
              total: element.total,
              confirmed: tempConfirmed,
              unconfirmed: tempUnconfirmed,
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
      
      //check if changed
      if(this.lastJSON !== JSON.stringify(responseData)){
        this.tokenArr = [...responseData];
        this.lastJSON = JSON.stringify(responseData);

        // add tokens
        this.getTokenSelected();
      } 

    });
  }

  sendFunds(){
    if(this.data.address&&this.data.address!==''&&this.data.amount&&this.data.amount>0&&
    this.data.tokenid&&this.data.tokenid!==''&&this.data.message===undefined){
      this.api.sendFunds(this.data).then((res:any)=>{
        if(res.status === true) {
          //clear inputs
          this.address.value = "";
          this.amount.value = "";
          //success
          this.presentToast("Success!  Your transaction has been posted!", "success");
        } else {
          this.presentToast("Insufficient funds.  Check your funds.", "danger");
          
        }
      })
    } else if(this.data.address&&this.data.address!==''&&this.data.amount&&this.data.amount>0&&
    this.data.tokenid&&this.data.tokenid!==''&&this.data.message!==undefined&&this.data.message.length >= 0) {
      this.api.createTXN(this.data).then((res:any)=> {
        if(res[4].status === true) {
          //clear inputs
          this.address.value = "";
          this.amount.value = "";
          this.message.value = "";
          //success
          this.presentToast("Success!  Your transaction has been posted!", "success");
        } else if(res[4].status === false) {
          this.presentToast("Insufficient funds.  Check your funds.", "danger");
        }
        else {
          
        }
      })
    } else {
      this.presentAlert('Please check the input fields', 'Error');
    }
  }

  
  /** MISC FUNCS */
  identifyPlatformToScan_Add(){
    document.addEventListener("DOMContentLoaded", function(event) { 
      //Do work
      if(this.platform.is('ios')){
        setTimeout( () => {
          window.document.querySelectorAll('ion-content')
            .forEach(element => {
              const element1 = element.shadowRoot.querySelector('style');
              element1.innerHTML = element1.innerHTML
            .replace('--background:var(--ion-background-color,#fff);', '--background: transparent');
          });
        }, 300);
      } else if(this.platform.is('android')) {
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
  identifyPlatformToScan_Remove(){
    document.addEventListener("DOMContentLoaded", function(event) {
    if(this.platform.is('ios')){
      
      setTimeout( () => {
        window.document.querySelectorAll('ion-content')
          .forEach(element => {
            const element1 = element.shadowRoot.querySelector('style');
            element1.innerHTML = element1.innerHTML
          .replace('--background: transparent', '--background:var(--ion-background-color,#fff);');
        });
      }, 300);
    } else if(this.platform.is('android')) {
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

  checkboxValue(ev: any, messageEntry: any){
    if(messageEntry === false){
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


