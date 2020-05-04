import { BalanceService } from './service/balance.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule} from '@angular/common/http';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Clipboard } from '@ionic-native/clipboard/ngx';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';
import { PopOverComponent } from './components/pop-over/pop-over.component';
import { PopTermComponent } from './components/pop-term/pop-term.component';
import { PopHistoryComponent } from './components/pop-history/pop-history.component';
import { PopHistoryTokenComponent } from './components/pop-history-token/pop-history-token.component';
import { UserTerminal } from './service/userterminal.service';
import { LocationStrategy, HashLocationStrategy} from '@angular/common';
import { IonicStorageModule } from '@ionic/storage';
import { darkMode } from './service/darkMode.service';
import * as MifiJS from 'src/assets/JS/minima.js';
import * as HTML5QR from 'node_modules/html5-qrcode/minified/html5-qrcode.min.js';

@NgModule({
  declarations: [AppComponent, PopOverComponent, PopTermComponent, PopHistoryComponent, PopHistoryTokenComponent],
  entryComponents: [PopOverComponent, PopTermComponent, PopHistoryComponent, PopHistoryTokenComponent],
  imports: [FormsModule, HttpClientModule, BrowserModule, IonicModule.forRoot(), AppRoutingModule, IonicStorageModule.forRoot()],
  providers: [
    Storage,
    Clipboard,
    QRScanner,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    PopTermComponent,
    PopOverComponent,
    PopHistoryComponent,
    PopHistoryTokenComponent,
    UserTerminal,
    BalanceService,
    darkMode,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
