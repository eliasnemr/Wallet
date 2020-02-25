import { MinimaApiService } from './../service/minima-api.service';
import { AlertController, Platform } from '@ionic/angular';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';
import { Component, OnInit, NgZone } from '@angular/core';

@Component({
  selector: 'app-web-scanner',
  templateUrl: './web-scanner.page.html',
  styleUrls: ['./web-scanner.page.scss'],
})
export class WebScannerPage implements OnInit {

  isCameraOpen: boolean = false;
  private scanSub: any = null;
  public data: any = {};
  public getUUID: any;
  ionApp = <HTMLElement>document.getElementsByTagName('ion-app')[0]; 

  constructor(private qrScanner: QRScanner,
     private zone: NgZone,
     public alertController: AlertController,
     private api: MinimaApiService,
     private platform: Platform) {}

  ngOnInit() {
  }
  
  ionViewWillEnter(){
   this.isCameraOpen = false;
  }

  ionViewWillLeave(){
   this.stopCamera();
  }

  // figure out which web pic to use depending if light or dark mode
  identifyImg() {
    if(document.body.classList.value === 'dark') {
      return '../assets/darkweb.svg';
    } else {
      return '../assets/lightweb.svg';
    }
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
        
        this.identifyPlatformToScan_Add();

        this.qrScanner.show();
        this.isCameraOpen = true;

        this.scanSub = this.qrScanner.scan().subscribe((text: string) => {
          console.log('Scanned something', text);
          this.zone.run(()=>{
            //alert("Scanned this ->>>" + text);
          
            this.stopCamera();
            this.qrWebLink(text);
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

  qrWebLink(text : any) {
    this.data.url = text;
    if(this.data.url!==''){
    this.api.webLink(this.data).then((res : any) => {
      console.log("weblink " + JSON.stringify(res));
        if(res.status === true){
          this.presentAlert('Success!', 'You are now connected.');
        } else {
          alert("Hasn't connected");
          this.presentAlert(res.error, 'Error');
        }
      });
    } else {
      this.presentAlert('Please rescan qr image.', 'Unsucessful!');
    }
  }

  stopCamera() {
    console.log('stop camera', this.scanSub);
    if(this.scanSub!==null){
      console.log("stopCamera - is not null..")
      this.qrScanner.hide();
      this.scanSub.unsubscribe();
    }
    this.scanSub = null;
    this.identifyPlatformToScan_Remove();
    this.isCameraOpen = false;
    this.qrScanner.destroy();
  }

  async presentAlert(msg:string,header:string) {
    const alert = await this.alertController.create({
      header: header,
      message: msg,
      buttons: ['OK']
    });

    await alert.present();
  }

}
