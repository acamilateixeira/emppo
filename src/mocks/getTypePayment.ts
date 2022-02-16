import { Type } from '../models/type';

export const getTypePayment = (): Promise<Type[]> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          description: 'Cash',
        },
        {
          id: 2,
          description: 'Credit card',
        },
        {
          id: 3,
          description: 'Debit card',
        },
        {
          id: 4,
          description: 'Paypal',
        },
        {
          id: 5,
          description: 'Bank transfer',
        },
        {
          id: 6,
          description: 'Other',
        },
        {
          id: 7,
          description: 'Payment on delivery',
        },
        {
          id: 8,
          description: 'Payment on pickup',
        }
      ]);

      reject('Not found');
    }, 1000);
  });
};
