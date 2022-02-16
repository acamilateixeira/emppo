import { createContext, useState } from 'react';
import { Type } from '../models/type';

interface PermissionContextData {
  permissions: Type[];
  setPermissions: (permissions: Type[]) => void;
  permission: Type;
  setPermission: (permission: Type) => void;
}

interface PermissionContextProps {
  children: React.ReactNode;
}

export const PermissionContext = createContext({} as PermissionContextData);

export function PermissionProvider(props: PermissionContextProps) {
  const [permissions, setPermissions] = useState<Type[]>([]);
  const [permission, setPermission] = useState<Type>({} as Type);

  return (
    <PermissionContext.Provider value={{ permissions, setPermissions, permission, setPermission }}>
      {props.children}
    </PermissionContext.Provider>
  );
}
