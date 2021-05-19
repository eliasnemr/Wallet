import { CommonModule } from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {NgModule} from '@angular/core';
import {FooterComponent} from './footer/footer.component';

@NgModule({
  imports: [IonicModule, CommonModule],
  declarations: [FooterComponent],
  exports: [FooterComponent],
})
/** */
export class SharedComponentsModule { }
