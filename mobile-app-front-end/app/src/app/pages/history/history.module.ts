import {SharedComponentsModule} from 
  './../../components/shared-components.module';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';
import {IonicModule} from '@ionic/angular';
import {HistoryPage} from './history.page';


const routes: Routes = [
  {
    path: '',
    component: HistoryPage,
    pathMatch: 'full',
  },
  {
    path: 'view-txn/:id',
    loadChildren: () =>
      import('./view-txn/view-txn.module').then((m) => m.ViewTXNPageModule),
  },
  {
    path: 'view-txn',
    component: HistoryPage,
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
  declarations: [HistoryPage],
})
/** */
export class HistoryPageModule {}
