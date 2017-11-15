import { Component, OnInit } from '@angular/core';
import { BasketService } from '../../providers/basket.service';
import { Item } from '../../shared/item';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

  items: Item[] = [];
  totalPrice: Number = 0;

  constructor(private basketService: BasketService) { }

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

}
