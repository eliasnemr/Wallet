/**
 * Created By Elias Nemr
 * 01/11/19
 * Minima Global
 * WALLET
 */

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Clipboard } from '@ionic-native/clipboard/ngx';
import { QRScanner } from '@ionic-native/qr-scanner/ngx';
import { LocationStrategy, HashLocationStrategy} from '@angular/common';
import { TokenDescrComponent } from './components/token-descr/token-descr.component';
import { PopTermComponent } from './components/pop-term/pop-term.component';
import { PopSettingsComponent } from './components/pop-settings/pop-settings.component';
import { PopFilterComponent } from './components/pop-filter/pop-filter.component';


@NgModule({
  declarations: [
    AppComponent,
    TokenDescrComponent,
    PopTermComponent,
    PopSettingsComponent,
    PopFilterComponent],
  entryComponents: [PopSettingsComponent, PopFilterComponent, PopTermComponent],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule],
    providers: [
    Storage,
    Clipboard,
    QRScanner,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: LocationStrategy, useClass: HashLocationStrategy },
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
