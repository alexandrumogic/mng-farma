import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot }    from '@angular/router';
import { AuthService }    from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private authService: AuthService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (!this.authService.isAuthenticated){
      // this.authService.showLogin(state.url);
      console.log("User not auth");
      return false;
    }
    return true;
  }

}
