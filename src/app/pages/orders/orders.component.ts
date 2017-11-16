import { Component, OnInit } from '@angular/core';
import { Order } from '../../shared/order';
import { OrdersService } from '../../providers/orders.service';
import { Subject } from 'rxjs/Subject'

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
  providers: [OrdersService]
})
export class OrdersComponent implements OnInit {

  orders;
  startAt = new Subject();
  endAt = new Subject();

  constructor(private orderService: OrdersService) {
  }

  ngOnInit() {
    this.orderService.getOrders(this.startAt, this.endAt).subscribe(orders => this.orders = orders);
    this.startAt.next('-');
    this.endAt.next('z');
  }

  search($event) {
    var date = Date.now();
    console.log(date);
    console.log("ORDERS");
    console.log($event);
    console.log(this.orders);
    let q = $event.target.value;
    this.startAt.next(q);
    this.endAt.next(q+"\uf8ff");
  }

}
