import { Payment } from './payment';
import { Product } from './product';
import { User } from './user';
import { Type } from './type';

export interface Delivery {
  id: number;
  typeDelivery: Type;
  value: number;
  date: string;
  status: Type;
  payment: Payment;
  userUpdate: Pick<User, 'id' | 'name'>;
  product: Product;
}
