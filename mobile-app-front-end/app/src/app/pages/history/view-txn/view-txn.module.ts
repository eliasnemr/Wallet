import {
  SharedComponentsModule,
} from './../../../components/shared-components.module';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import {IonicModule} from '@ionic/angular';
import {ViewTXNPage} from './view-txn.page';
import { OutgoingPipe } from 'src/app/pipes/outgoing.pipe';


const routes: Routes = [
  {
    path: '',
    component: ViewTXNPage,
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    SharedComponentsModule,
  ],
  declarations: [ViewTXNPage, OutgoingPipe],
  exports: [OutgoingPipe],
})
/** */
export class ViewTXNPageModule {}
