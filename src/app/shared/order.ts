import { Item } from './item';

export class Order {
  orders: Item[];
  dateOrdered: number;
  datePicked: number;

  constructor(orders:  Item[], dateOrdered: number, datePicked: number)
  {
    this.orders = orders;
    this.dateOrdered = dateOrdered;
    this.datePicked = datePicked;
  }
}
