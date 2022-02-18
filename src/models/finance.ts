import { Type } from './type';

export interface Finance {
  id: number;
  name: string;
  description: string;
  amount: number;
  date: string;
  type: Type;
  category: Type;
  user: string;
  createdAt: string;
  updatedAt: string;
}
