import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { BasketService } from '../../providers/basket.service';

@Component({
  selector: 'app-order-dialog',
  templateUrl: './order-dialog.component.html',
  styleUrls: ['./order-dialog.component.css']
})
export class OrderDialogComponent implements OnInit {
  @Input() title;
  @Input() price;

  pieces: number;
  result: number;

  constructor(public activeModal: NgbActiveModal, private basketService: BasketService) {
    this.pieces = 0;
    this.result = 0;
  }

  order() {
    this.basketService.addOrder();
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
