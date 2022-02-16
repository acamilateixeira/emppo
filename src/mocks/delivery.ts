import { Delivery } from '../models/delivery';

const deliveryMock: Delivery[] = [
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
];

export default deliveryMock;
