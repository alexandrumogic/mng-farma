import { Component, OnInit } from '@angular/core';
import { BasketService } from '../providers/basket.service';
import { AuthService } from '../providers/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  basketItems: number = 0;
  userIsAuthenticated: boolean;

  constructor(private basketService: BasketService, private authService: AuthService) {
    basketService.getNumberOfItems().subscribe((value) => {
      this.basketItems = value;
      console.log("Navbar: " + this.basketItems);
    })
  }

  isAuthenticated(): any {
    return this.authService.isAuthenticated;
  }

  ngOnInit() {
  }

}
