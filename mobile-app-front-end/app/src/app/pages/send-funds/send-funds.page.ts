import { Tokens } from '../../models/tokens.model';
import { BalanceService } from '../../service/balance.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';
import { Clipboard } from '@ionic-native/clipboard/ngx';
import { AlertController, Platform } from '@ionic/angular';
import { MinimaApiService } from '../../service/minima-api.service';
import { map } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-send-funds',
  templateUrl: './send-funds.page.html',
  styleUrls: ['./send-funds.page.scss'],
  providers: [ BalanceService ],
})
export class SendFundsPage implements OnInit {

  selected_minima: any;
  private lastJSON: string = '';
  public data: any = {};
  isCameraOpen: boolean = false;
  private scanSub:any=null;
  balanceSubscription: Subscription;
  ionApp = <HTMLElement>document.getElementsByTagName('ion-app')[0];

  // Pull in tokens vars
  public MINIMA_TOKEN_ID = '0x0000000000000000000000000000000000000000000000000000000000000000';
  public hideProgress = false;
  public progressShow = true;
  public strUnconfirmed: any;
  public tokenArr = [];

  constructor(private qrScanner: QRScanner, private clipboard: Clipboard, 
    public alertController: AlertController, private zone: NgZone, 
    private api: MinimaApiService,
    private balanceService: BalanceService,
    private platform: Platform) {}

  ngOnInit() {}

  ionViewWillEnter() {
    this.selected_minima = this.MINIMA_TOKEN_ID;
    this.pullInTokens();
    this.isCameraOpen = false;
  }

  ionViewWillLeave() {
    this.stopCamera();
    this.balanceSubscription.unsubscribe();
  }

  identifyPlatformToScan_Add(){
    if(this.platform.is('ios')){
      console.log('iOS Qr Code.')
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
  }
  identifyPlatformToScan_Remove(){
    if(this.platform.is('ios')){
      console.log('iOS Qr Code.')
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
  }


  scanQR() {
    this.qrScanner.prepare()
      .then((status: QRScannerStatus) => {
        if (status.authorized) {
          // camera permission was granted
          console.log('scanQR', status);

          // Which class adding should I use?
          this.identifyPlatformToScan_Add();

          this.qrScanner.show();
          this.isCameraOpen = true;

          this.scanSub = this.qrScanner.scan().subscribe((text: string) => {
            console.log('Scanned something', text);
            this.zone.run(()=>{
              console.log('Scanned something', text);
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
          console.log('error permission needed');
          this.presentAlert('Please check camera permission','Error');
        } else {
          // permission was denied, but not permanently. You can ask for permission again at a later time.
          console.log('error permission needed');
          this.presentAlert('Please check camera permission','Error');
        }
      })
      .catch((e: any) => console.log('Error is', e));
  }

  stopCamera() {
    console.log('stop camera',this.scanSub);
    if(this.scanSub!==null){
      console.log("stopCamera - is not null..")
      this.qrScanner.hide();
      this.scanSub.unsubscribe();
    }
    this.scanSub = null;
    this.identifyPlatformToScan_Remove();
    //this.ionApp.style.display = 'block';
    this.isCameraOpen = false;
    this.qrScanner.destroy();
  }

  pasteFromClipboard() {

    if(this.platform.is('desktop') || this.platform.is('pwa')) {
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
      console.log('Paste is here');
      this.data.address = e.clipboardData.getData('text');
      
      
      e.preventDefault();
      document.removeEventListener('paste', null);
    });
    document.execCommand('paste');
    console.log('executed paste command');

  }

  async presentAlert(msg:string,header:string) {
    const alert = await this.alertController.create({
      header: header,
      message: msg,
      buttons: ['OK']
    });

    await alert.present();
  }

  pullInTokens() {
    this.balanceSubscription =this.balanceService.getBalance().pipe(map(responseData => {
      const tokenArr: Tokens[] = [];
      for(const key in responseData.response.balance){
        if(responseData.response.balance.hasOwnProperty(key)){
          let element = responseData.response.balance[key];
          // round up confirmed && unconfirmed
          
          let tempConfirmed = (Math.round(element.confirmed * 100)/100);
          let tempUnconfirmed = (Math.round(element.unconfirmed * 100)/100);

          tokenArr.push({
              id: element.tokenid,
              token: element.token,
              confirmed: tempConfirmed,
              unconfirmed: tempUnconfirmed,
              total: element.total
          });

          // add Minima always to the top
          if(element.tokenid === this.MINIMA_TOKEN_ID){
            tokenArr.pop(); // pop it
            this.balanceService.update(
            tokenArr,
            {
                id: element.tokenid,
                token: element.token,
                confirmed: tempConfirmed,
                unconfirmed: tempUnconfirmed,
                total: element.total
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
      }

    });
  }

  sendFunds(){
    if(this.data.address&&this.data.address!==''&&this.data.amount&&this.data.amount>0&&
    this.data.tokenid&&this.data.tokenid!==''){
      console.log('sendFunds',this.data);
      this.api.sendFunds(this.data).then((res:any)=>{
        console.log("Send " + JSON.stringify(res));
        if(res.status == true) {
          this.presentAlert('Sent successfully!', 'Info');
        } else {
          this.presentAlert(res.error, 'Error');
        }
      })
    } else {
      this.presentAlert('Please check the input fields', 'Error');
    }
  }

}
