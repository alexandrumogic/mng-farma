import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database-deprecated';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from "@angular/router";
import * as firebase from 'firebase/app';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/switchMap';

import { User } from '../user';

export class EmailPasswordCredentials {
  email: string;
  password: string;
}

@Injectable()
export class AuthService {
  private user: Observable<firebase.User>;
  private userDetails: firebase.User = null;

  constructor(private _firebaseAuth: AngularFireAuth, private router: Router) {

  }

  login(email: string, password: string) {
    this._firebaseAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      .then(value => {
        console.log("Loged in .");
        this.user = this._firebaseAuth.authState;
      })
      .then((res) => this.router.navigate(['/drugsearch']))
      .catch(err => {
        console.log("Error", err.message);
        return err;
      });
  }

  logout() {
    this._firebaseAuth.auth.signOut()
      .then((res) => this.router.navigate(['/']));
  }

  createAccount(email: string, password: string) {
    this._firebaseAuth
      .auth
      .createUserWithEmailAndPassword(email, password).then((user) => {
        this.login(email, password);
      }).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage);
    });
  }

  get isAuthenticated(): any {
    if (this.user)
      return true;
    else
      return false;
  }

  getUserID() {
    var user =this._firebaseAuth.auth.currentUser;

    return user.uid;
  }

}
