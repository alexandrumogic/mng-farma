import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database-deprecated';
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
  private userRole: any;
  private userID: any;

  constructor(private _firebaseAuth: AngularFireAuth, private router: Router, private db: AngularFireDatabase) {

  }

  login(email: string, password: string) {
    this._firebaseAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      .then(value => {
        this.user = this._firebaseAuth.authState;
        this.userID = value.uid;
        return value.uid;
      })
      .then((uid) => {

        this.router.navigate(['/drugsearch']);
      })
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
        var uid = this.getUserID();
        this.db.list(`/users/${uid}`).set('role','user');
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
    return this.userID;
  }

  getUserRole(uid: string) {
    let role;
    this.db.object(`/users/${uid}/role`).subscribe(val => { role = val; }); 

    return role;  
  }

}
