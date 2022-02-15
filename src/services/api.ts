// fake api service for testing

export const api = {
  get: (url: string) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        switch (url) {
          case 'products':
            resolve([
              {
                id: 1,
                name: 'Product 1',
                description: 'Description 1',
                price: 10.0,
                image: 'http://placehold.it/100x100',
                category: 'Category 1',
                quantity: 10,
                status: {
                  id: 1,
                  description: 'Active',
                },
              },
              {
                id: 2,
                name: 'Product 2',
                description: 'Description 2',
                price: 20.0,
                image: 'http://placehold.it/100x100',
                category: 'Category 2',
                quantity: 20,
                status: {
                  id: 1,
                  description: 'Active',
                },
              },
              {
                id: 3,
                name: 'Product 3',
                description: 'Description 3',
                price: 30.0,
                image: 'http://placehold.it/100x100',
                category: 'Category 3',
                quantity: 30,
                status: {
                  id: 1,
                  description: 'Active',
                },
              },
            ]);
            break;
          case 'payments':
            resolve([
              {
                id: 1,
                typePayment: {
                  id: 1,
                  description: 'Cash',
                },
                value: 10.0,
                date: '2018-01-01',
                status: {
                  id: 1,
                  description: 'Active',
                },
              },
              {
                id: 2,
                typePayment: {
                  id: 2,
                  description: 'Credit Card',
                },
                value: 20.0,
                date: '2018-01-01',
                status: {
                  id: 1,
                  description: 'Active',
                },
              },
              {
                id: 3,
                typePayment: {
                  id: 3,
                  description: 'Debit Card',
                },
                value: 30.0,
                date: '2018-01-01',
                status: {
                  id: 1,
                  description: 'Active',
                },
              },
            ]);
            break;
          case 'deliveries':
            resolve([
              {
                id: 1,
                typeDelivery: {
                  id: 1,
                  description: 'Delivery',
                },
                value: 100.0,
                date: '2018-01-01',
                status: {
                  id: 1,
                  description: 'Active',
                },
                payment: {
                  id: 1,
                  typePayment: {
                    id: 1,
                    description: 'Cash',
                  },
                  value: 100.0,
                  date: '2018-01-01',
                  status: {
                    id: 1,
                    description: 'Active',
                  },
                },
                userUpdate: {
                  id: 1,
                  name: 'User 1',
                },
                product: {
                  id: 1,
                  name: 'Product 1',
                  description: 'Description 1',
                  price: 100.0,
                  image: 'http://placehold.it/100x100',
                  category: 'Category 1',
                  quantity: 10,
                  status: {
                    id: 1,
                    description: 'Active',
                  },
                },
              },
              {
                id: 2,
                typeDelivery: {
                  id: 1,
                  description: 'Delivery',
                },
                value: 200.0,
                date: '2018-01-01',
                status: {
                  id: 1,
                  description: 'Active',
                },
                payment: {
                  id: 1,
                  typePayment: {
                    id: 1,
                    description: 'Cash',
                  },
                  value: 100.0,
                  date: '2018-01-01',
                  status: {
                    id: 1,
                    description: 'Active',
                  },
                },
                userUpdate: {
                  id: 1,
                  name: 'User 1',
                },
                product: {
                  id: 1,
                  name: 'Product 1',
                  description: 'Description 1',
                  price: 100.0,
                  image: 'http://placehold.it/100x100',
                  category: 'Category 1',
                  quantity: 10,
                  status: {
                    id: 1,
                    description: 'Active',
                  },
                },
              },
              {
                id: 3,
                typeDelivery: {
                  id: 1,
                  description: 'Delivery',
                },
                value: 300.0,
                date: '2018-01-01',
                status: {
                  id: 1,
                  description: 'Active',
                },
                payment: {
                  id: 1,
                  typePayment: {
                    id: 1,
                    description: 'Cash',
                  },
                  value: 100.0,
                  date: '2018-01-01',
                  status: {
                    id: 1,
                    description: 'Active',
                  },
                },
                userUpdate: {
                  id: 1,
                  name: 'User 1',
                },
                product: {
                  id: 1,
                  name: 'Product 1',
                  description: 'Description 1',
                  price: 100.0,
                  image: 'http://placehold.it/100x100',
                  category: 'Category 1',
                  quantity: 10,
                  status: {
                    id: 1,
                    description: 'Active',
                  },
                },
              },
            ]);
            break;
          default:
            reject('Not found');
            break;
        }
      }, 1000);
    });
  },

  post: (url: string, id: number) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        switch (url) {
          case 'products':
            resolve(id);
            break;
          case 'payments':
            resolve(id);
            break;
          case 'deliveries':
            resolve(id);
            break;
          default:
            reject('Not found');
            break;
        }
      }, 1000);
    });
  },

  put: (url: string, id: number) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        switch (url) {
          case 'products':
            resolve(id);
            break;
          case 'payments':
            resolve(id);
            break;
          case 'deliveries':
            resolve(id);
            break;
          default:
            reject('Not found');
            break;
        }
      }, 1000);
    });
  },

  delete: (url: string, id: number) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        switch (url) {
          case 'products':
            resolve(id);
            break;
          case 'payments':
            resolve(id);
            break;
          case 'deliveries':
            resolve(id);
            break;
          default:
            reject('Not found');
            break;
        }
      }, 1000);
    });
  },
};
