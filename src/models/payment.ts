import { Type } from './type';

export interface Payment {
  id: number;
  typePayment: Type;
  value: number;
  date: string;
  status: Type;
}
