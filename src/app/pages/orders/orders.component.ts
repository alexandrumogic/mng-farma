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
  }

  search($event) {
    console.log(this.orders);
    console.log($event)
    let q = $event.target.value
    this.startAt.next(q)
    this.endAt.next(q+"\uf8ff")
  }

}
