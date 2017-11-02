export class Item {
  id: number;
  title: string;
  pieces: number;
  price: number;

  constructor(id: number, title: string, pieces: number, price: number)
  {
    this.id = id;
    this.title = title;
    this.pieces = pieces;
    this.price = price;
  }
}
