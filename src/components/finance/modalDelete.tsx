import { Button, Dialog, DialogActions, DialogContent, DialogContentText } from '@material-ui/core';
import { useState } from 'react';
import { AlertMessage } from '../alertMessage';
import FinanceServices from '../../mocks/finance';
import { useFinance } from '../../hooks/useFinance';

interface ModalDeleteProps {
  open: boolean;
  onClose: () => void;
}
export function ModalDelete({ open, onClose }: ModalDeleteProps) {
  const { finance, setFinances, finances } = useFinance();

  const [alert, setAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('Loading...');
  const [alertType, setAlertType] = useState<'success' | 'error'>('success');

  async function deleteType() {
    const response = await FinanceServices.deleteFinance(finance.id);
    setFinances(finances.filter(f => f.id !== finance.id));

    if (response) {
      setAlertType('success');
      setAlert(true);
      setAlertMessage('Permission deleted successfully!');
    } else {
      setAlertType('error');
      setAlert(true);
      setAlertMessage('Permission not deleted!');
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

      <Dialog open={open} onClose={onClose}>
        <DialogContent>
          <DialogContentText>
            You are about to delete this item '{finance.name}'. Are you sure?
          </DialogContentText>
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
