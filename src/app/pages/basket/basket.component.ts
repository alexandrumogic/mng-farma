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

  constructor(private basketService: BasketService) { }

  ngOnInit() {
    this.basketService.getItems().subscribe((items) => this.items = items);
  }

}
