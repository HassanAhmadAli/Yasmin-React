import { Rating } from "./Rating";
import { Category } from "./category";
export interface Product {
  rating: Rating;
  _id: string;
  title: string;
  price: number;
  description: string;
  category: Category;
  image: string;
  __v: number;
  createdAt: Date;
  updatedAt: Date;
}
