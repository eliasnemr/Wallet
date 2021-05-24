import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'balance', pathMatch: 'full' },
  { path: 'balance', loadChildren: () => import('./pages/balance/balance.module').then( m => m.BalancePageModule) },
  { path: 'send-funds', loadChildren: () => import('./pages/send-funds/send-funds.module').then(m => m.SendFundsPageModule) },
  { path: 'send-funds/:id', loadChildren: () => import('./pages/send-funds/send-funds.module').then(m => m.SendFundsPageModule) },
  { path: 'status', loadChildren: () => import('./pages/mini-status/mini-status.module').then(m => m.MiniStatusPageModule) },
  { path: 'my-address', loadChildren: () => import('./pages/my-address/my-address.module').then(m => m.MyAddressPageModule)},
  { path: 'code', loadChildren: () => import('./pages/send-funds/send-funds.module').then(m => m.SendFundsPageModule) },
  { path: 'mini-term', loadChildren: () => import('./pages/mini-term/mini-term.module').then(m => m.MiniTermPageModule) },
  { path: 'mini-status', loadChildren: () => import('./pages/mini-status/mini-status.module').then(m => m.MiniStatusPageModule) },
  { path: 'create-token', loadChildren: () => import('./pages/create-token/create-token.module').then(m => m.CreateTokenPageModule) },
  { path: 'community', loadChildren: () => import('./pages/community/community.module').then(m => m.CommunityPageModule) },
  { path: 'history', loadChildren: () => import('./pages/history/history.module').then(m => m.HistoryPageModule) },
  { path: 'view-tokens', loadChildren: () => import('./pages/balance/view-tokens/view-tokens.module').then(m => m.ViewTokensPageModule) },
  { path: 'view-tokens/:id', loadChildren: () => import('./pages/balance/view-tokens/view-tokens.module')
    .then(m => m.ViewTokensPageModule) },
  { path: 'contacts-modal', loadChildren: () => import('./components/contacts-modal/contacts-modal.module')
    .then(m => m.ContactsModalPageModule) },
  { path: 'contacts', loadChildren: () => import('./pages/contacts/contacts.module').then(m => m.ContactsPageModule)},
  { path: '**', loadChildren: () =>  import('./pages/balance/balance.module').then( m => m.BalancePageModule ) },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }