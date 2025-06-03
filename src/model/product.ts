import { Rating } from "./rating";
import { Category } from "./category";
export interface Product {
  title: string;
  description: string;
  rating: Rating;
  price: number;
  category: Category;
  image: string;
  createdAt: Date;
  updatedAt: Date;
  _id: string;
}
