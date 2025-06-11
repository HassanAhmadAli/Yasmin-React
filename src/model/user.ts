import { Address } from "./address";
import { Company } from "./company";
export interface Customer {
  _id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}
