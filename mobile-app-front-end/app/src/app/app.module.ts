/* 
  Created by Elias Nemr
  
  01/11/2019
  
  Minima, Global

  Wallet
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
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';
import { PopOverComponent } from './components/pop-over/pop-over.component';
import { PopTermComponent } from './components/pop-term/pop-term.component';
import { UserTerminal } from './service/userterminal.service';
import { LocationStrategy, HashLocationStrategy} from '@angular/common';
import { IonicStorageModule } from '@ionic/storage';
import * as MiniDAPP from 'src/assets/JS/minima.js';
import { TokenDescrComponent } from './components/token-descr/token-descr.component'; 
import { SocialSharing } from '@ionic-native/social-sharing/ngx';


/*
  NgModules configure the injector and the compiler and help organize related things together.

  An NgModule is a class marked by the @NgModule decorator. @NgModule takes a metadata object that
    describes how to compile a component's template and how to create an injector at runtime. It 
    identifies the module's own components, directives, and pipes, making some of them public, 
    through the exports property, so that external components can use them. @NgModule can also add
    service providers to the application dependency injectors.
*/

@NgModule({
  declarations: [AppComponent, PopOverComponent, PopTermComponent, TokenDescrComponent],
  entryComponents: [AppComponent, PopOverComponent, PopTermComponent, TokenDescrComponent], // entryComponents declare components that are not previously defined in the template, so it'll create offline factories for them to be created runtime.
  imports: [FormsModule, HttpClientModule, BrowserModule, IonicModule.forRoot(), AppRoutingModule, IonicStorageModule.forRoot()],
  providers: [
    SocialSharing,
    Storage,
    Clipboard,
    QRScanner,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: LocationStrategy, useClass: HashLocationStrategy },
  ],
  bootstrap: [AppComponent], // bootstrap from AppComponent when app launches
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
