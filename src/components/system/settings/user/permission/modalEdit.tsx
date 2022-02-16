import { Button, Dialog, DialogActions, DialogContent, Grid, TextField } from '@material-ui/core';
import { useState } from 'react';
import { usePermission } from '../../../../../hooks/usePermission';
import PermissionServices from '../../../../../mocks/getPermission';
import { AlertMessage } from '../../../../alertMessage';

interface ModalEditProps {
  open: boolean;
  onClose: () => void;
}

export function ModalEdit({ open, onClose }: ModalEditProps) {
  const { permissions, setPermissions, permission, setPermission } = usePermission();

  const [alert, setAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('Loading...');
  const [alertType, setAlertType] = useState<'success' | 'error'>('success');

  async function editType() {
    console.log('edit', permission);

    const response = await PermissionServices.putPermission(permission);
    setPermissions(permissions.map(p => (p.id === permission.id ? permission : p)));

    if (response) {
      setAlertType('success');
      setAlert(true);
      setAlertMessage('Permission edited successfully!');
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
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                variant='outlined'
                margin='dense'
                size='small'
                label='Description'
                value={permission.description}
                onChange={e => setPermission({ ...permission, description: e.target.value })}
              />
            </Grid>
          </Grid>
        </DialogContent>

        <DialogActions>
          <Button onClick={onClose} size='small' color='secondary' variant='text'>
            CLOSE
          </Button>

          <Button onClick={editType} color='primary' size='small' variant='text'>
            EDIT
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
