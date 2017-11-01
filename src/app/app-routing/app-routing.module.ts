import { NgModule } from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { CommonModule } from '@angular/common';

import { AccountComponent } from '../pages/account/account.component';
import { DrugsSearchComponent } from '../pages/drugs-search/drugs-search.component';
import { BasketComponent } from '../pages/basket/basket.component';
import { RaportsComponent } from '../pages/raports/raports.component';
import { OrdersComponent } from '../pages/orders/orders.component';
import { PageNotFoundComponent } from '../pages/page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/drugsearch', pathMatch: 'full'},
  { path: 'account', component: AccountComponent },
  { path: 'drugsearch', component: DrugsSearchComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'basket', component: BasketComponent },
  { path: 'raports', component: RaportsComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true })
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
