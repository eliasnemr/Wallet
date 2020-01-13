import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { BalancePage } from '../balance/balance.page';
import { IonicModule } from '@ionic/angular';
import { MiniTabsPage } from './mini-tabs.page';

const routes: Routes = [
  {
    path: 'balance',
    component: BalancePage,
  }
  //   children: [
  //     {
  //       path: 'status',
  //       children: [
  //         {
  //           path: '',
  //           loadChildren: () =>
  //             import('../mini-status/mini-status.module').then(m => m.MiniStatusPageModule)
  //         }
  //       ]
  //     },
  //     {
  //       path: 'code',
  //       children: [
  //         {
  //           path: '',
  //           loadChildren: () =>
  //             import('../mini-term/mini-term.module').then(m => m.MiniTermPageModule)
  //         }
  //       ]
  //     },
  //     {
  //       path: 'balance',
  //       children: [
  //         {
  //           path: '',
  //           loadChildren: () =>
  //             import('../balance/balance.module').then(m => m.BalancePageModule)
  //         }
  //       ]
  //     },
  //     {
  //       path: '',
  //       redirectTo: 'balance',
  //       pathMatch: 'full'
  //     }
  //   ]
  // },
  // {
  //   path: '',
  //   redirectTo: 'balance',
  //   pathMatch: 'full'
  // }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  declarations: [MiniTabsPage]
})
export class MiniTabsPageModule {}
