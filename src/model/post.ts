import { User } from "./user";

export interface Post {
  _id: string;
  customer: User;
  title: string;
  body: string;
}
