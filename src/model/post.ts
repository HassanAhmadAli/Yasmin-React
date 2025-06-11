import { Customer } from "./user";

export interface Post {
  _id: string;
  customer: Customer;
  title: string;
  body: string;
}
