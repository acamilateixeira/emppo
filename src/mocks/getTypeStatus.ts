import { Type } from '../models/type';

export const getTypeStatus = (): Promise<Type[]> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          description: 'finished',
        },
        {
          id: 2,
          description: 'pending',
        },
        {
          id: 3,
          description: 'canceled',
        },
        {
          id: 4,
          description: 'requested',
        },
        {
          id: 5,
          description: 'in progress',
        },
        {
          id: 6,
          description: 'waiting',
        },
        {
          id: 7,
          description: 'delivered',
        },
        {
          id: 8,
          description: 'returned',
        },
        {
          id: 9,
          description: 'rejected',
        },
        {
          id: 10,
          description: 'storage',
        },
        {
          id: 11,
          description: 'shipped',
        },
        {
          id: 12,
          description: 'received',
        },
        {
          id: 13,
          description: 'in transit',
        },
        {
          id: 14,
          description: 'on hold',
        },
      ]);

      reject('Not found');
    }, 1000);
  });
};
