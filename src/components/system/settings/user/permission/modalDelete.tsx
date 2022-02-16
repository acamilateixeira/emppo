import { Button, Dialog, DialogActions, DialogContent, DialogContentText } from '@material-ui/core';
import { useState } from 'react';
import { usePermission } from '../../../../../hooks/usePermission';
import PermissionServices from '../../../../../mocks/getPermission';
import { AlertMessage } from '../../../../alertMessage';

interface ModalDeleteProps {
  open: boolean;
  onClose: () => void;
}

export function ModalDelete({ open, onClose }: ModalDeleteProps) {
  const { permissions, setPermissions, permission } = usePermission();

  const [alert, setAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('Loading...');
  const [alertType, setAlertType] = useState<'success' | 'error'>('success');

  async function deleteType() {
    console.log('delete', permission);

    const response = await PermissionServices.deletePermission(permission.id);
    setPermissions(permissions.filter(p => p.id !== permission.id));

    if (response) {
      setAlertType('success');
      setAlert(true);
      setAlertMessage('Permission deleted successfully!');
    }

    setTimeout(() => {
      onClose();
    }, 1000);
  }

  return (
    <>
      <AlertMessage
        open={alert}
        severity={alertType}
        message={alertMessage}
        onClose={() => setAlert(false)}
      />

      <Dialog open={open} onClose={onClose} maxWidth='sm' fullWidth>
        <DialogContent>
          {permission.description}
          <DialogContentText>You are about to delete this item. Are you sure?</DialogContentText>
        </DialogContent>

        <DialogActions>
          <Button onClick={onClose} size='small' color='secondary' variant='text'>
            CLOSE
          </Button>

          <Button onClick={deleteType} color='primary' size='small' variant='text'>
            DELETE
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
