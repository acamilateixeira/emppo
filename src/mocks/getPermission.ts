import { Permission } from '../models/permission';

export const getPermission = (): Promise<Permission[]> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          description: 'Admin',
        },
        {
          id: 2,
          description: 'Financial',
        },
        {
          id: 3,
          description: 'Management',
        },
        {
          id: 4,
          description: 'User',
        },
        {
          id: 5,
          description: 'Guest',
        },
        {
          id: 6,
          description: 'Inactive',
        },
      ]);
    }, 1000);

    reject('Not found');
  });
};
