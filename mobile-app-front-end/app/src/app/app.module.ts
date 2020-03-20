import { BalanceService } from './service/balance.service';
import { BalancePage } from './pages/balance/balance.page';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule} from '@angular/common/http';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Clipboard } from '@ionic-native/clipboard/ngx';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';
import { PopOverComponent } from './components/pop-over/pop-over.component';
import { PopTermComponent } from './components/pop-term/pop-term.component';
import { PopHistoryComponent } from './components/pop-history/pop-history.component';
import { UserTerminal } from './service/userterminal.service';
import * as MifiJS from '../assets/JS/minimajs.js';


@NgModule({
  declarations: [AppComponent, PopOverComponent, PopTermComponent, PopHistoryComponent],
  entryComponents: [PopOverComponent, PopTermComponent, PopHistoryComponent],
  imports: [FormsModule, HttpClientModule, BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    Clipboard,
    QRScanner,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    PopTermComponent,
    PopOverComponent,
    PopHistoryComponent,
    UserTerminal,
    LocalNotifications,
    BalanceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
