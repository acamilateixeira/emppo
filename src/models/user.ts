import { Permission } from './permission';

export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  phone: string;
  dateBirth: string;
  photo: string;
  active: boolean;
  token: string;
  permissions: Permission;
  cpfCnpj: string;
}
