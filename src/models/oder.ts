import { Payment } from './payment';
import { Type } from './type';
import { User } from './user';

export interface Order {
  id: number;
  typeOrder: Type;
  value: number;
  date: string;
  status: Type;
  payment: Payment;
  userUpdate: Pick<User, 'id' | 'name'>;
}
