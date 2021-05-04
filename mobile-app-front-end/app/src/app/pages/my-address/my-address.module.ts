import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MyAddressPage } from './my-address.page';


const routes: Routes = [
  {
    path: '',
    component: MyAddressPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
  declarations: [MyAddressPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MyAddressPageModule {}
