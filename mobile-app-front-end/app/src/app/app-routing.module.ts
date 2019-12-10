import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'balance', pathMatch: 'full' },
  //{ path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'balance', loadChildren: () => import('./balance/balance.module').then( m => m.BalancePageModule) },
  { path: 'my-address', loadChildren: './my-address/my-address.module#MyAddressPageModule' },
  { path: 'send-funds', loadChildren: './send-funds/send-funds.module#SendFundsPageModule' },
  { path: 'settings', loadChildren: './settings/settings.module#SettingsPageModule' },
  { path: 'mini-term', loadChildren: './mini-term/mini-term.module#MiniTermPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
