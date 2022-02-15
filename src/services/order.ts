import { Order } from '../models/oder';

class OrderServices {
  async getOrders(): Promise<Order[]> {
    return [
      {
        id: 1,
        value: 100,
        date: '2020-01-01',
        status: {
          id: 1,
          description: 'Active',
        },
        typeOrder: {
          id: 1,
          description: 'Delivery',
        },
        payment: {
          id: 1,
          typePayment: {
            id: 1,
            description: 'Payment 1',
          },
          value: 100,
          date: '2020-01-01',
          status: {
            id: 1,
            description: 'Active',
          },
        },
        userUpdate: {
          id: 1,
          name: 'User 1',
        },
      },
      {
        id: 2,
        value: 200,
        date: '2020-01-01',
        status: {
          id: 1,
          description: 'Active',
        },
        typeOrder: {
          id: 1,
          description: 'Delivery',
        },
        payment: {
          id: 1,
          typePayment: {
            id: 1,
            description: 'Payment 1',
          },
          value: 100,
          date: '2020-01-01',
          status: {
            id: 1,
            description: 'Active',
          },
        },
        userUpdate: {
          id: 1,
          name: 'User 1',
        },
      },
      {
        id: 3,
        value: 300,
        date: '2020-01-01',
        status: {
          id: 1,
          description: 'Active',
        },
        typeOrder: {
          id: 1,
          description: 'Delivery',
        },
        payment: {
          id: 1,
          typePayment: {
            id: 1,
            description: 'Payment 1',
          },
          value: 100,
          date: '2020-01-01',
          status: {
            id: 1,
            description: 'Active',
          },
        },
        userUpdate: {
          id: 1,
          name: 'User 1',
        },
      },
    ];
  }
}

export default new OrderServices();
