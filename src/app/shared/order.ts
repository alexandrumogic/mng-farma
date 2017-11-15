import { Item } from './item';

export class Order {
  orders: Item[];
  dateOrdered: string;
  datePicked: string;

  constructor(orders:  Item[], dateOrdered: string, datePicked: string)
  {
    this.orders = orders;
    this.dateOrdered = dateOrdered;
    this.datePicked = datePicked;
  }
}
