import { Type } from '../models/type';

class PermissionServices {
  getPermission(): Promise<Type[]> {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve([
          {
            id: 1,
            description: 'Admin',
          },
          {
            id: 2,
            description: 'User',
          },
          {
            id: 3,
            description: 'Financial',
          },
          {
            id: 4,
            description: 'Customer',
          },
          {
            id: 5,
            description: 'Supplier',
          },
          {
            id: 6,
            description: 'Employee',
          },
          {
            id: 7,
            description: 'Customer Service',
          },
          {
            id: 8,
            description: 'Warehouse',
          },
          {
            id: 9,
            description: 'Sales',
          },
          {
            id: 10,
            description: 'Marketing',
          },
          {
            id: 11,
            description: 'Production',
          },
          {
            id: 12,
            description: 'Quality Control',
          },
          {
            id: 13,
            description: 'Finance',
          },
          {
            id: 14,
            description: 'Logistics',
          },
        ]);

        // reject('Not found');
      }, 1000);
    });
  }

  storePermission(permission: Type): Promise<Type> {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(permission);
      }, 1000);
    });
  }

  postPermission(permission: Type): Promise<Type> {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(permission);
      }, 1000);
    });
  }

  putPermission(permission: Type): Promise<Type> {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(permission);
      }, 1000);
    });
  }

  deletePermission: (id: number) => Promise<Type> = id => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({
          id: id,
          description: '',
        });
      }, 1000);
    });
  };
}

export default new PermissionServices();
