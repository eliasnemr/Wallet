import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './pages/balance/balance.module#BalancePageModule' },
  { path: '', redirectTo: 'balance', pathMatch: 'full' },
  { path: 'balance', loadChildren: () => import('./pages/balance/balance.module').then( m => m.BalancePageModule) },
  { path: 'send-funds', loadChildren: './pages/send-funds/send-funds.module#SendFundsPageModule' },
  { path: 'create-token', loadChildren: './pages/create-token/create-token.module#CreateTokenPageModule' },
  { path: 'status', loadChildren: './pages/mini-status/mini-status.module#MiniStatusPageModule' },
  { path: 'my-address', loadChildren: './pages/my-address/my-address.module#MyAddressPageModule' },
  { path: 'code', loadChildren: './pages/send-funds/send-funds.module#SendFundsPageModule' },
  { path: 'settings', loadChildren: './pages/settings/settings.module#SettingsPageModule' },
  { path: 'mini-term', loadChildren: './pages/mini-term/mini-term.module#MiniTermPageModule' },
  { path: 'mini-status', loadChildren: './pages/mini-status/mini-status.module#MiniStatusPageModule' },
  { path: 'create-token', loadChildren: './pages/create-token/create-token.module#CreateTokenPageModule' },
  { path: 'web-scanner', loadChildren: './pages/web-scanner/web-scanner.module#WebScannerPageModule' },
  { path: 'community', loadChildren: './pages/community/community.module#CommunityPageModule' },
  { path: 'history', loadChildren: './pages/history/history.module#HistoryPageModule' },
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
