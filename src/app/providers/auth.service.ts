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
        this.user = _firebaseAuth.authState;

        this.user.subscribe(
          (user) => {
            if (user) {
              this.userDetails = user;
              console.log(this.userDetails);
            }
            else {
              this.userDetails = null;
            }
          }
        );
  }

  signIn(credentials: EmailPasswordCredentials) {
    this._firebaseAuth.auth.signInWithEmailAndPassword(credentials)
    .then(function(res) {
      console.log(res);
    })
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...

      console.log(errorCode);
    });
  }

  logout() {
    this._firebaseAuth.auth.signOut()
      .then((res) => this.router.navigate(['/']));
  }

}
