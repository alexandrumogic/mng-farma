import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database-deprecated";
import { Order } from '../shared/order';
import { AuthService } from './auth.service';

@Injectable()
export class OrdersService {

  orders: FirebaseListObservable<any>;
  userOrders: FirebaseListObservable<any>;
  keyData: any;

  constructor(private db: AngularFireDatabase, private authService: AuthService) {
    this.orders = this.getOrders('A', 'Z');
  }

  getOrders(start, end): FirebaseListObservable<any> {
    return this.db.list('/orders', {
      query: {
        orderByKey: true,
        limitToFirst: 10,
        startAt: start,
        endAt: end
      }
    });
  }

  pushOrderAndgetKey(order: Order) {
    return this.orders.push(order).then(function(response) {
          return response.key;
    });
  }


  pushOrderToUser(key: any) {
      var uid = this.authService.getUserID();
      this.db.list(`/users/${uid}/orders`).push(key);

      return key;
  }

  processOrder(order: Order) {

        return this.pushOrderAndgetKey(order).then((key) => { return this.pushOrderToUser(key); } )
  }

}
