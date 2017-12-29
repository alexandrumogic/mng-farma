import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database-deprecated";
import { Order } from '../shared/order';
import { AuthService } from './auth.service';

@Injectable()
export class OrdersService {

  orders: FirebaseListObservable<any>;
  keyData: any;
  userOrders: any[] = [];

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

  getUserOrders(key: any) {
    return this.db.list(`/users/${uid}/orders`, { preserveSnapshot: true})
      .subscribe(snapshots=> {
          snapshots.forEach(snapshot => {
            this.userOrders.push(snapshot.val());
          });

          this.userOrders.push(key);

          return key;
        })
  }

  pushOrderToUser(key: any) {
      var uid = this.authService.getUserID();

      this.db.list(`/users`).set(uid, {orders: [key, key]}).then(function() {
        console.log("WORKED");
      });

      return key;
  }

  processOrder(order: Order) {
    return this.pushOrderAndgetKey(order)
        .then(function(key) { return key; })
        .then((key) => { return this.getUserOrders(key); })
        .then((key) => { return this.pushOrderToUser(key); } )
        .then((key) => { return key; } );
  }

}
