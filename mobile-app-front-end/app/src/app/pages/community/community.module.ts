import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';
import {IonicModule} from '@ionic/angular';
import {CommunityPage} from './community.page';
import {SharedComponentsModule} from 'src/app/components/shared-components.module';
const routes: Routes = [
  {
    path: '',
    component: CommunityPage,
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
  declarations: [CommunityPage],
})
/** */
export class CommunityPageModule {}
