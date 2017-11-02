import { Component, OnInit } from '@angular/core';
import { BasketService } from '../providers/basket.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  basketItems: number = 0;

  constructor(private basketService: BasketService) {
    basketService.getNumberOfItems().subscribe((value) => {
      this.basketItems = value;
      console.log("Navbar: " + this.basketItems);
    })
  }

  ngOnInit() {
  }

}
