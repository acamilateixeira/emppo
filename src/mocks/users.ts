import { User } from '../models/user';

const usersMocks: User[] = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@hotmail.com',
    password: '123456',
    phone: '+5511999999999',
    dateBirth: '01/01/1990',
    photo: 'https://via.placeholder.com/150',
    active: true,
    token: '',
    permissions: {
      id: 1,
      description: 'Admin',
    },
    cpfCnpj: '12345678901',
  },
  {
    id: 2,
    name: 'Maria Silva',
    email: 'maria@hotmail.com',
    password: '123456',
    phone: '+5511999999999',
    dateBirth: '01/01/1990',
    photo: 'https://via.placeholder.com/150',
    active: true,
    token: '',
    permissions: {
      id: 2,
      description: 'User',
    },
    cpfCnpj: '12345678901',
  },
  {
    id: 3,
    name: 'João da Silva',
    email: 'joao@gmail.com',
    password: '123456',
    phone: '+5511999999999',
    dateBirth: '01/01/1990',
    photo: 'https://via.placeholder.com/150',
    active: true,
    token: '',
    permissions: {
      id: 3,
      description: 'User',
    },
    cpfCnpj: '12345678901',
  },
  {
    id: 4,
    name: 'Pedro Pereira',
    email: 'pedro@outlook.com',
    password: '123456',
    phone: '+5511999999999',
    dateBirth: '01/01/1990',
    photo: 'https://via.placeholder.com/150',
    active: true,
    token: '',
    permissions: {
      id: 4,
      description: 'User',
    },
    cpfCnpj: '12345678901',
  },
];

export default usersMocks;
