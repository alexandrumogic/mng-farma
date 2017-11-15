import { Component, OnInit } from '@angular/core';
import { BasketService } from '../../providers/basket.service';
import { OrdersService } from '../../providers/orders.service';
import { Item } from '../../shared/item';
import { Order } from '../../shared/order';
import { DateGenerator } from '../../shared/date';
import { OrderResponseDialogComponent } from '../../components/order-response-dialog/order-response-dialog.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

  items: Item[] = [];
  totalPrice: Number = 0;

  constructor(private basketService: BasketService, private ordersService: OrdersService, private modalService: NgbModal) { }

  ngOnInit() {
    this.basketService.getItems().subscribe((items) => this.items = items);
    this.calculateTotal();
  }

  removeItem(item: Item) {
    this.basketService.removeItem(item, 1);
    this.calculateTotal();
  }

  addItem(item: Item) {
    this.basketService.addItem(item, 1);
    this.calculateTotal();
  }

  calculateTotal() {
    var _totalPrice = 0;
    this.items.forEach(function(item) {
      _totalPrice += item.price * item.pieces;
    })

    this.totalPrice = _totalPrice;
  }

  processOrder() {
    var date = DateGenerator.generate();
    let order: Order = new Order(this.items, date, null);
    this.ordersService.processOrder(order).then((key) => this.openModal(key));
    this.basketService.removeAllItems();
    this.items = [];
  }

  openModal(key: any) {
    const modalRef = this.modalService.open(OrderResponseDialogComponent);
    modalRef.componentInstance.key = key;
  }

}
