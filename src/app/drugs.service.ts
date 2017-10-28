import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database-deprecated";

@Injectable()
export class DrugsService {

  constructor(private db: AngularFireDatabase) { }

  getDrugs(start, end): FirebaseListObservable<any> {
    return this.db.list('/drugs', {
      query: {
        orderByChild: 'Title',
        limitToFirst: 5,
        startAt: start,
        endAt: end
      }
    });
  }

}
