import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { BasketService } from '../../providers/basket.service';
import { Item } from '../../shared/item';

@Component({
  selector: 'app-order-dialog',
  templateUrl: './order-dialog.component.html',
  styleUrls: ['./order-dialog.component.css']
})
export class OrderDialogComponent implements OnInit {
  @Input() title;
  @Input() price;
  @Input() key;

  pieces: number;
  result: number;

  constructor(public activeModal: NgbActiveModal, private basketService: BasketService) {
    this.pieces = 0;
    this.result = 0;
  }

  order() {
    let item = new Item(this.key, this.title, this.pieces, this.price);
    this.basketService.addItem(item, this.pieces);
  }

  calculate() {
    this.result = this.pieces * this.price;
  }

  increment() {
    this.pieces++;
    this.calculate();
  }

  decrement() {
    if (this.pieces > 0)
    {
      this.pieces--;
      this.calculate();
    } else {
      this.result = 0;
    }
  }

  ngOnInit() {
  }

}
