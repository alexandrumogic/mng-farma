import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database-deprecated';
import { AngularFireDatabaseModule } from 'angularfire2/database-deprecated';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';

import { DrugsSearchComponent } from './pages/drugs-search/drugs-search.component';

import { environment } from '../environments/environment';
import { OrderDialogComponent } from './components/order-dialog/order-dialog.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AccountComponent } from './pages/account/account.component';
import { BasketComponent } from './pages/basket/basket.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { RaportsComponent } from './pages/raports/raports.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

import { BasketService } from './providers/basket.service';
import { OrdersService } from './providers/orders.service';
import { OrderResponseDialogComponent } from './components/order-response-dialog/order-response-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    DrugsSearchComponent,
    OrderDialogComponent,
    NavbarComponent,
    AccountComponent,
    BasketComponent,
    OrdersComponent,
    RaportsComponent,
    PageNotFoundComponent,
    OrderResponseDialogComponent
  ],
  entryComponents: [
    OrderDialogComponent,
    OrderResponseDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    NgbModule.forRoot(),
    AppRoutingModule
  ],
  providers: [BasketService, OrdersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
