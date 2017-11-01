import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database-deprecated';
import { AngularFireAuth } from 'angularfire2/auth';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/switchMap';

import { User } from '../user';


@Injectable()
export class AuthService {

  user: BehaviorSubject<User> = new BehaviorSubject(null)

  constructor(private afAuth: AngularFireAuth,
              private db: AngularFireDatabase) {
      this.afAuth.authState
        .switchMap(auth => {
          if (auth) {
            /// signed in
            return this.db.object('users/' + auth.uid)
          } else {
            /// not signed in
            return Observable.of(null)
          }
        })
        .subscribe(user => {
          this.user.next(user)
        })
    }
}
