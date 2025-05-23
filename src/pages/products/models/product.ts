import { Rating } from "./Rating";
import { Category } from "./category";
export interface Product {
  title: string;
  description: string;
  rating: Rating;
  price: number;
  category: Category;
  image: string;
  __v: number;
  createdAt: Date;
  updatedAt: Date;
  _id: string;
}
