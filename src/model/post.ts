import { Customer } from "./customer";

export interface Post {
  _id: string;
  customer: Customer;
  title: string;
  body: string;
}
