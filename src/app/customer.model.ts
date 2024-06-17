import { Transaction } from "./transaction.model";

export interface Customer {
  name: string;
  country: string;
  city: string;
  branch: string;
  membershipType: string;
  transactions: Transaction[];
}
