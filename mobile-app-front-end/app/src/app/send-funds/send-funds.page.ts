import { Component, OnInit, NgZone, NgModule} from '@angular/core';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';
import { Clipboard } from '@ionic-native/clipboard/ngx';
import { AlertController } from '@ionic/angular';
import { MinimaApiService } from '../service/minima-api.service';
import { Tokens } from '../tokens';

@Component({
  selector: 'app-send-funds',
  templateUrl: './send-funds.page.html',
  styleUrls: ['./send-funds.page.scss'],
})
export class SendFundsPage implements OnInit {

  public data: any = {};
  isCameraOpen: boolean = false;
  private scanSub:any=null;
  ionApp = <HTMLElement>document.getElementsByTagName('ion-app')[0];

  // Pull in tokens vars
  public MINIMA_TOKEN_ID = '0x0000000000000000000000000000000000000000000000000000000000000000';
  public hideProgress = false;
  public progressShow = true;
  public strUnconfirmed: any;
  public tokenArr = [];

  constructor(private qrScanner: QRScanner, private clipboard: Clipboard, 
    public alertController: AlertController, private zone: NgZone, 
    private api: MinimaApiService) { }

  ngOnInit() {}

  ionViewWillEnter() {
    this.pullInTokens();
    this.isCameraOpen = false;
  }

  ionViewWillLeave() {
    this.stopCamera();
  }

  scanQR() {
    this.qrScanner.prepare()
      .then((status: QRScannerStatus) => {
        if (status.authorized) {
          // camera permission was granted
          console.log('scanQR', status);

          //add transparent BG to the ion app
          //window.document.querySelector('ion-content').classList.add('transparentBody');
          // this.ionApp.style.display = 'none';
          setTimeout(() => {
            window.document.querySelectorAll('ion-content')
                  .forEach(element => {
                      const element1 = element.shadowRoot.querySelector('style');
                      element1.innerHTML = element1.innerHTML
                                                   .replace('--background:var(--ion-background-color,#fff);', '--background: transparent');
                  });
        }, 300);
          // start scanning
          this.qrScanner.show();
          this.isCameraOpen = true;

          this.scanSub = this.qrScanner.scan().subscribe((text: string) => {
            console.log('Scanned something', text);
            this.zone.run(()=>{
              console.log('Scanned something', text);
              this.data.address = text;
              this.stopCamera();
              //window.document.querySelector('ion-content').classList.remove('.transparentBody');
                window.document.querySelectorAll('ion-content')
                      .forEach(element => {
                          const element1 = element.shadowRoot.querySelector('style');
                          element1.innerHTML = element1.innerHTML
                          .replace('--background: transparent', '--background:var(--ion-background-color,#fff);');
                      });
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
    //window.document.querySelector('ion-content').classList.remove('transparentBody');
    
    
    window.document.querySelectorAll('ion-content')
    .forEach(element => {
      const element1 = element.shadowRoot.querySelector('style');
      element1.innerHTML = element1.innerHTML
      .replace('--background: transparent', '--background:var(--ion-background-color,#fff);');
    });
    
    this.isCameraOpen = false;
    this.qrScanner.destroy();
  }

  pasteFromClipboard() {
    this.clipboard.paste().then(
      (resolve: string) => {
        this.data.address = resolve;
      },
      (reject: string) => {
        console.log('Error: ' + reject);
      }
    );
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
    this.api.getBalance().then((res : any) => {
      console.log(res);

      this.strUnconfirmed = '';
      let countTokens = 0;
      
      res.response.balance.forEach(element => {
        countTokens++;

        if(element.tokenid === this.MINIMA_TOKEN_ID) {
          const tempConfirmed = (Math.round(element.confirmed * 100)/100);
          let tempUnConfirmed = ''; 
          
          if(element.unconfirmed > 0){
            this.strUnconfirmed = 'Unconfirmed';
            tempUnConfirmed = (Math.round(element.unconfirmed * 100)/100).toString();
          } else {
            tempUnConfirmed = '';
          }
          
          const temp = new Tokens(
             element.tokenid,
             element.token,
             tempConfirmed,
             tempUnConfirmed,
             element.total);

          this.tokenArr.push(temp);
          
          //this.tokenArr[0] = temp;
        }
        this.strUnconfirmed = '';
      });
      
      res.response.balance.forEach(element => {
        if(element.tokenid != this.MINIMA_TOKEN_ID) {
          let tempConfirmed = (Math.round(element.confirmed * 100)/100);
          let tempUnConfirmed = ''; 
          

          if(element.unconfirmed > 0){
            this.strUnconfirmed = 'Unconfirmed';
            tempUnConfirmed = (Math.round(element.unconfirmed * 100)/100).toString();
          } else {
            tempUnConfirmed = '';
          }
        
          const temp = new Tokens(
             element.tokenid,
             element.token,
             tempConfirmed,
             tempUnConfirmed,
             element.total);
             
             this.tokenArr.push(temp);
        }
        
        this.strUnconfirmed = '';
        
      });
    });

    this.tokenArr = new Array;
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
