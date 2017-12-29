import { NgModule } from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { AccountComponent } from '../pages/account/account.component';
import { DrugsSearchComponent } from '../pages/drugs-search/drugs-search.component';
import { BasketComponent } from '../pages/basket/basket.component';
import { RaportsComponent } from '../pages/raports/raports.component';
import { OrdersComponent } from '../pages/orders/orders.component';
import { PageNotFoundComponent } from '../pages/page-not-found/page-not-found.component';
import { LoginComponent } from '../pages/login/login.component';
import { AuthGuardService } from '../providers/auth-guard.service';

const appRoutes: Routes = [
  { path: 'account', component: AccountComponent, canActivate: [AuthGuardService] },
  { path: 'drugsearch', component: DrugsSearchComponent, canActivate: [AuthGuardService] },
  { path: 'orders', component: OrdersComponent, canActivate: [AuthGuardService] },
  { path: 'basket', component: BasketComponent, canActivate: [AuthGuardService] },
  { path: 'login', component: LoginComponent },
  { path: 'raports', component: RaportsComponent, canActivate: [AuthGuardService] },
  { path: '', redirectTo: '/login', pathMatch: 'full'},
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
