import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TokenDescrComponent } from './token-descr.component';

const routes: Routes = [
  {
    path: '',
    component: TokenDescrComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TokenDescrComponent]
})
export class TokenDescrComponentModule {}