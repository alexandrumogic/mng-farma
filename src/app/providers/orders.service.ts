import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database-deprecated";
import { Order } from '../shared/order';

@Injectable()
export class OrdersService {

  orders: FirebaseListObservable<any>;

  constructor(private db: AngularFireDatabase) {
    this.orders = this.db.list('/orders');
  }

  getOrders(start, end): FirebaseListObservable<any> {
    return this.db.list('/orders', {
      query: {
        limitToFirst: 10,
        startAt: start,
        endAt: end
      }
    });
  }

  processOrder(order: Order) {
    return this.orders.push(order).then(function(response) {
      return response.key;
    });
  }

}
