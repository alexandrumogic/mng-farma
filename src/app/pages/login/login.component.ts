import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../providers/auth.service';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email: string;
  password: string;
  createNewAccount: boolean;

  constructor(private authService: AuthService, private router: Router) {
    this.createNewAccount = false;
  }

  login() {
    this.authService.login(this.email, this.password);
    this.email = this.password = '';
  }

  logout() {
    this.authService.logout();
  }

  switchToNewAccountView() {
    this.createNewAccount = true;
  }

  createAccount() {
      this.authService.createAccount(this.email, this.password);
      this.createNewAccount = false;
  }

}
