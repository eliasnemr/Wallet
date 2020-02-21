import { MiniTermPage } from './mini-term/mini-term.page';
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
import { PopOverComponent } from './pop-over/pop-over.component';
import { PopTermComponent } from './pop-term/pop-term.component';
import { UserTerminal } from './userterminal.service';


@NgModule({
  declarations: [AppComponent, PopOverComponent, PopTermComponent],
  entryComponents: [PopOverComponent, PopTermComponent],
  imports: [FormsModule, HttpClientModule, BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    Clipboard,
    QRScanner,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    PopTermComponent,
    UserTerminal
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
