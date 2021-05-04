import { ToNumberPipe } from './../../pipes/to-number.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BalancePage } from './balance.page';

import { GridViewComponent } from '../../components/grid-view/grid-view.component';
import { ListViewComponent } from './../../components/list-view/list-view.component';

const routes: Routes = [
  {
    path: '',
    component: BalancePage,
    children: [
      {
        path: 'view-txn',
        loadChildren: () => import('./view-tokens/view-tokens.module').then(m => m.ViewTokensPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BalancePage, ListViewComponent, GridViewComponent, ToNumberPipe]
})
export class BalancePageModule {}
