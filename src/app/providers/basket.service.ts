import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Item } from '../shared/item';

@Injectable()
export class BasketService {

  private _items: Item[] = [];
  private _numberOfItems: number = 0;

  private _numberOfItemsBS = new BehaviorSubject(this._numberOfItems);
  private _itemsBS = new BehaviorSubject(this._items);

  public readonly numberOfItems$: Observable<number> = this._numberOfItemsBS.asObservable();
  public readonly items$: Observable<Item[]> = this._itemsBS.asObservable();

  constructor() { }

  getItems() {
    return this.items$;
  }

  addItem(item: Item, pieces: number) {
    // Check if item already in basket
    let checkItem = this._items.find(itemFound => itemFound.id == item.id);

    if (checkItem) {
      // If it is, update pieces value
      checkItem.pieces += pieces;
    } else {
      this._items.push(item);
    }
    // Anounce that number of items increased
    this._numberOfItemsBS.next(this._numberOfItems += pieces);
  }

  removeItem(item: Item, pieces: number) {
    // Check if item already in basket
    let checkItem = this._items.find(itemFound => itemFound.id == item.id);

    if (checkItem) {
      // If it is, update pieces value
      checkItem.pieces += pieces;

      if (checkItem.pieces <= 0)
      {
        console.log("Delete");
      }
    } else {
      // this.items.push(item);
    }
    // Anounce that number of items increased
    this._numberOfItemsBS.next(this._numberOfItems += pieces);
  }

  updateItem() {

  }

  getNumberOfItems() {
    //return this.numberOfItemsObservable$.next(this.numberOfItems++);
    return this.numberOfItems$;
  }

}
