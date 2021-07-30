import {
  SharedComponentsModule,
} from './../../components/shared-components.module';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';
import {IonicModule} from '@ionic/angular';
import {BalancePage} from './balance.page';
import {
  ListViewComponent,
} from './../../components/list-view/list-view.component';

const routes: Routes = [
  {
    path: '',
    component: BalancePage,
    pathMatch: 'full',
  },
  {
    path: 'view-tokens/:id',
    loadChildren: () => import('./view-tokens/view-tokens.module')
        .then((m) => m.ViewTokensPageModule),
  },
];

@NgModule({
  imports: [
    SharedComponentsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
  declarations: [BalancePage, ListViewComponent],
})
/** */
export class BalancePageModule {}
