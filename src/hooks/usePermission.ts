import { useContext } from 'react';
import { PermissionContext } from '../context/permission';

export function usePermission() {
  const context = useContext(PermissionContext);

  if (!context) {
    throw new Error('useArquivosEmpresa must be used within an PermissionProvider.');
  }

  return context;
}
