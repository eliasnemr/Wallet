/**
 * Created By Elias Nemr
 * 01/11/19
 * Minima Global
 * WALLET
 */

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule} from '@angular/common/http';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Clipboard } from '@ionic-native/clipboard/ngx';
import { QRScanner } from '@ionic-native/qr-scanner/ngx';
import { LocationStrategy, HashLocationStrategy} from '@angular/common';
import { PopTermComponent } from './components/pop-term/pop-term.component';
import { PopSettingsComponent } from './components/pop-settings/pop-settings.component';
import { PopFilterComponent } from './components/pop-filter/pop-filter.component';
import { ContactsModalPage } from './components/contacts-modal/contacts-modal.page';


@NgModule({
  declarations: [
    AppComponent,
    PopTermComponent,
    PopSettingsComponent,
    PopFilterComponent,
    ContactsModalPage],
  entryComponents: [PopSettingsComponent, PopFilterComponent, PopTermComponent, ContactsModalPage],
  imports: [
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    IonicModule.forRoot()],
    providers: [
    Storage,
    Clipboard,
    QRScanner,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: LocationStrategy, useClass: HashLocationStrategy },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
