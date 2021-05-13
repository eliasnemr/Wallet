import { SharedComponentsModule } from './../../components/shared-components.module';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';
import {IonicModule} from '@ionic/angular';
import {CreateTokenPage} from './create-token.page';

const routes: Routes = [
  {
    path: '',
    component: CreateTokenPage,
  },
];

@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    SharedComponentsModule,
  ],
  declarations: [CreateTokenPage],
})
/** */
export class CreateTokenPageModule {}
