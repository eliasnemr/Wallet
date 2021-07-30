import { environment } from './../environments/environment.prod';
import { ContactDetailComponent } from './components/contact-detail/contact-detail.component';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {Clipboard} from '@ionic-native/clipboard/ngx';
import {QRScanner} from '@ionic-native/qr-scanner/ngx';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {PopTermComponent} from './components/pop-term/pop-term.component';
import {
  ContactsModalPage,
} from './components/contacts-modal/contacts-modal.page';
import {
  PopContactsComponent,
} from './components/pop-contacts/pop-contacts.component';
import {
  ContactsViewModalComponent,
} from './components/contacts-view-modal/contacts-view-modal.component';
import {
  UploadFileModalComponent,
} from './components/upload-file-modal/upload-file-modal.component';
import {OverlayComponent} from './components/overlay/overlay.component';
import { ServiceWorkerModule } from '@angular/service-worker';

/**
 * Created By Elias Nemr
 * 01/11/19
 * Minima Global
 * WALLET
 */

@NgModule({
  imports: [
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    ServiceWorkerModule
        .register('ngsw-worker.js', { enabled: environment.production }),
    IonicModule.forRoot({animated: false})],
  providers: [
    Clipboard,
    QRScanner,
    {provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
    {provide: LocationStrategy, useClass: HashLocationStrategy},
  ],
  declarations: [
    AppComponent,
    PopTermComponent,
    PopContactsComponent,
    ContactsModalPage,
    ContactsViewModalComponent,
    ContactDetailComponent,
    UploadFileModalComponent,
    OverlayComponent,
  ],
  entryComponents:
  [
    PopTermComponent,
    PopContactsComponent,
    ContactsViewModalComponent,
    ContactsModalPage,
    UploadFileModalComponent,
    ContactDetailComponent],
  bootstrap: [AppComponent],
})
/** MainModule */
export class AppModule {}

