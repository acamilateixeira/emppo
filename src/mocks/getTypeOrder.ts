import { Type } from '../models/type';

export const getTypeOrder = (): Promise<Type[]> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          description: 'Delivery',
        },
        {
          id: 2,
          description: 'Pickup',
        },
        {
          id: 3,
          description: 'Courier',
        },
        {
          id: 4,
          description: 'Self-service',
        },
      ]);

      reject('Not found');
    }, 1000);
  });
};
