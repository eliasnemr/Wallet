import { AllTokensSelectorComponent } from './../../components/all-tokens-selector/all-tokens-selector.component';
import { TokenModalComponent } from './../../components/token-modal/token-modal.component';
import {
  SharedComponentsModule,
} from './../../components/shared-components.module';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {SendFundsPage} from './send-funds.page';

const routes: Routes = [
  {
    path: '',
    component: SendFundsPage,
    pathMatch: 'full',
  },
  {
    path: 'confirmation',
    loadChildren: () => import('./confirmation/confirmation.module')
        .then((m) => m.ConfirmationPageModule),
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
  declarations: [SendFundsPage, TokenModalComponent,
    AllTokensSelectorComponent],
  entryComponents: [TokenModalComponent],
})
/** */
export class SendFundsPageModule {}
