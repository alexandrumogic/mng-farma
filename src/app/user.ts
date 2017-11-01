export interface Roles {
  client?: boolean;
  chemist?: boolean;
}

export interface Order {
  date: string;
  client: string;
  items: Object;
  totalCost: number;
  chemist: string;
}

export class User {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  role: Roles;

}
