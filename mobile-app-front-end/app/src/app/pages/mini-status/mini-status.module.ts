import {SharedComponentsModule} from './../../components/shared-components.module';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {MiniStatusPage} from './mini-status.page';

const routes: Routes = [
  {
    path: '',
    component: MiniStatusPage,
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
  declarations: [MiniStatusPage],
})
/** */
export class MiniStatusPageModule {}
