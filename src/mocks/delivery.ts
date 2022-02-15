import { Delivery } from "../models/delivery";

const deliveryMock: Delivery[] = [
  {
    id: 1,
    typeDelivery: {
      id: 1,
      description: "Delivery",
    },
    value: 100,
    date: "2020-01-01",
    status: {
      id: 1,
      description: "Active",
    },
    payment: {
      id: 1,
      typePayment: {
        id: 1,
        description: "Payment 1",
      },
      value: 100,
      date: "2020-01-01",
      status: {
        id: 1,
        description: "Active",
      },
    },
    userUpdate: {
      id: 1,
      name: "User 1",
    },
    product: {
      id: 1,
      name: "Product 1",
      description: "Description 1",
      price: 100,
      image: "https://via.placeholder.com/150",
      category: "Category 1",
      quantity: 10,
      status: {
        id: 1,
        description: "Active",
      },
    },
  },
];

export default deliveryMock;