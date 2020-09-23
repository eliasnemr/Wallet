import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
// Note: loader import location set using "esmLoaderPath" within the output target config
import { defineCustomElements, applyPolyfills } from 'web-social-share/dist/loader';


enableProdMode();

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
defineCustomElements();

applyPolyfills().then(() => {
  defineCustomElements();
});

