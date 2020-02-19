import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './balance/balance.module#BalancePageModule' },
  { path: '', redirectTo: 'balance', pathMatch: 'full' },
  { path: 'balance', loadChildren: () => import('./balance/balance.module').then( m => m.BalancePageModule) },
  { path: 'send-funds', loadChildren: './send-funds/send-funds.module#SendFundsPageModule' },
  { path: 'create-token', loadChildren: './create-token/create-token.module#CreateTokenPageModule' },
  { path: 'status', loadChildren: './mini-status/mini-status.module#MiniStatusPageModule' },
  { path: 'my-address', loadChildren: './my-address/my-address.module#MyAddressPageModule' },
  { path: 'code', loadChildren: './send-funds/send-funds.module#SendFundsPageModule' },
  { path: 'settings', loadChildren: './settings/settings.module#SettingsPageModule' },
  { path: 'mini-term', loadChildren: './mini-term/mini-term.module#MiniTermPageModule' },
  { path: 'mini-status', loadChildren: './mini-status/mini-status.module#MiniStatusPageModule' },
  { path: 'create-token', loadChildren: './create-token/create-token.module#CreateTokenPageModule' },
  { path: 'web-scanner', loadChildren: './web-scanner/web-scanner.module#WebScannerPageModule' },
  { path: 'community', loadChildren: './community/community.module#CommunityPageModule' },
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
