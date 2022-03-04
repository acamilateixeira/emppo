import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Grid,
  TextField,
  DialogContentText,
} from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import { format } from 'date-fns';
import { useEffect, useState } from 'react';
import NumberFormat from 'react-number-format';
import { useFinance } from '../../hooks/useFinance';

import FinanceServices from '../../mocks/finance';
import { Finance } from '../../models/finance';
import { Type } from '../../models/type';
import { AlertMessage } from '../alertMessage';
interface ModalAddProps {
  open: boolean;
  onClose: () => void;
}

export function ModalAdd({ open, onClose }: ModalAddProps) {
  const [alert, setAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('Loading...');
  const [alertType, setAlertType] = useState<'success' | 'error'>('success');

  const [type, setType] = useState<Type[]>([]);
  const [category, setCategory] = useState<Type[]>([]);

  const { setFinances, finances } = useFinance();
  const id = finances.length + 1;
  const [finance, setFinance] = useState<Finance>({
    id: id,
    name: '',
    type: {} as Type,
    category: {} as Type,
    amount: 0,
    date: '',
    updatedAt: format(new Date(), 'yyyy-MM-dd'),
    createdAt: format(new Date(), 'yyyy-MM-dd'),
    description: '',
    user: 'admin',
  });

  async function addFinance() {
    const response = await FinanceServices.storeFinance(finance);
    setFinances(finances.concat(finance));

    if (response) {
      setAlertType('success');
      setAlert(true);
      setAlertMessage('Finance added successfully!');
    } else {
      setAlertType('error');
      setAlert(true);
      setAlertMessage('Finance not added!');
    }

    setTimeout(() => {
      onClose();
      setFinance({
        id: id,
        name: '',
        type: {} as Type,
        category: {} as Type,
        amount: 0,
        date: '',
        updatedAt: format(new Date(), 'yyyy-MM-dd'),
        createdAt: format(new Date(), 'yyyy-MM-dd'),
        description: '',
        user: 'admin',
      });
    }, 1000);
  }

  useEffect(() => {
    async function getParams() {
      const type = await FinanceServices.getType();
      setType(type);

      const category = await FinanceServices.getCategory();
      setCategory(category);
    }
    getParams();
  }, []);

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
          <DialogContentText>Add Finance</DialogContentText>

          <Grid container spacing={2}>
            <Grid item xl={12} lg={12} md={12}>
              <TextField
                fullWidth
                variant='outlined'
                margin='dense'
                size='small'
                label='Name'
                value={finance.name}
                onChange={e => setFinance({ ...finance, name: e.target.value })}
              />
            </Grid>

            <Grid item xl={12} lg={12} md={12}>
              <TextField
                fullWidth
                variant='outlined'
                margin='dense'
                size='small'
                label='Description'
                multiline
                value={finance.description}
                onChange={e => setFinance({ ...finance, description: e.target.value })}
              />
            </Grid>

            <Grid item xl={12} lg={12} md={12}>
              <NumberFormat
                fullWidth
                variant='outlined'
                margin='dense'
                size='small'
                label='Amount'
                value={finance.amount}
                thousandSeparator
                prefix='$'
                customInput={TextField}
                onValueChange={e => setFinance({ ...finance, amount: Number(e.value) })}
              />
            </Grid>

            <Grid item xl={12} lg={12} md={12}>
              <Autocomplete
                options={type}
                getOptionLabel={option => option.description}
                value={finance.type}
                onChange={(e, value) =>
                  value
                    ? setFinance({ ...finance, type: value })
                    : setFinance({ ...finance, type: {} as Type })
                }
                renderInput={params => (
                  <TextField
                    {...params}
                    variant='outlined'
                    margin='dense'
                    size='small'
                    label='Type'
                    fullWidth
                  />
                )}
              />
            </Grid>

            <Grid item xl={12} lg={12} md={12}>
              <Autocomplete
                options={category}
                getOptionLabel={option => option.description}
                value={finance.category}
                onChange={(e, value) =>
                  value
                    ? setFinance({ ...finance, category: value })
                    : setFinance({ ...finance, category: {} as Type })
                }
                renderInput={params => (
                  <TextField
                    {...params}
                    variant='outlined'
                    margin='dense'
                    size='small'
                    label='Category'
                    fullWidth
                  />
                )}
              />
            </Grid>

            <Grid item xl={6} lg={6} md={6}>
              <TextField
                fullWidth
                variant='outlined'
                type='date'
                margin='dense'
                size='small'
                label='Date'
                InputLabelProps={{ shrink: true }}
                value={finance.date}
                onChange={e => setFinance({ ...finance, date: e.target.value })}
              />
            </Grid>
          </Grid>
        </DialogContent>

        <DialogActions>
          <Button onClick={onClose} size='small' color='secondary' variant='text'>
            CLOSE
          </Button>

          <Button onClick={addFinance} size='small' color='primary' variant='text'>
            ADD
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
