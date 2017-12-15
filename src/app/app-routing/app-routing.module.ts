import { NgModule } from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { AccountComponent } from '../pages/account/account.component';
import { DrugsSearchComponent } from '../pages/drugs-search/drugs-search.component';
import { BasketComponent } from '../pages/basket/basket.component';
import { RaportsComponent } from '../pages/raports/raports.component';
import { OrdersComponent } from '../pages/orders/orders.component';
import { PageNotFoundComponent } from '../pages/page-not-found/page-not-found.component';
import { LoginComponent } from '../pages/login/login.component';

const appRoutes: Routes = [
  { path: 'account', component: AccountComponent },
  { path: 'drugsearch', component: DrugsSearchComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'basket', component: BasketComponent },
  { path: 'login', component: LoginComponent },
  { path: 'raports', component: RaportsComponent },
  { path: '', redirectTo: '/drugsearch', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { enableTracing: true })
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
