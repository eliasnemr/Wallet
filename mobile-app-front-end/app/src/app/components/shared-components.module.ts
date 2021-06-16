import { ImageFilterPipe } from './../pipes/image-filter.pipe';
import { CommonModule } from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {NgModule} from '@angular/core';
import {FooterComponent} from './footer/footer.component';

@NgModule({
  imports: [IonicModule, CommonModule],
  declarations: [FooterComponent, ImageFilterPipe],
  exports: [FooterComponent, ImageFilterPipe],
})
/** */
export class SharedComponentsModule { }
