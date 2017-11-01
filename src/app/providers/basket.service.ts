import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class BasketService {

  private _numberOfItems: number = 0;
  private _numberOfItemsBS = new BehaviorSubject(this._numberOfItems);
  public readonly numberOfItems: Observable<number> = this._numberOfItemsBS.asObservable();

  constructor() { }

  addOrder() {
    //this.numberOfItems++;
    console.log("BasketService: addOrder()");
    this._numberOfItemsBS.next(++this._numberOfItems);
    console.log(this._numberOfItems);
  }

  removeOrder() {
    //this.numberOfItems--;
    //this.numberOfItemsObservable.next(this.numberOfItems--);
  }

  getNumberOfOrders() {
    //return this.numberOfItemsObservable$.next(this.numberOfItems++);
    return this.numberOfItems;
  }

}
