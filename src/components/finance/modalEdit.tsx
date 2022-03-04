import { Button, Dialog, DialogActions, DialogContent, Grid, TextField } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { useFinance } from '../../hooks/useFinance';
import { AlertMessage } from '../alertMessage';
import FinanceServices from '../../mocks/finance';
import { Type } from '../../models/type';
import { Autocomplete } from '@material-ui/lab';
import NumberFormat from 'react-number-format';
interface ModalEditProps {
  open: boolean;
  onClose: () => void;
}
export function ModalEdit({ open, onClose }: ModalEditProps) {
  const { finances, setFinances, finance, setFinance } = useFinance();
  const [type, setType] = useState<Type[]>([]);
  const [category, setCategory] = useState<Type[]>([]);

  const [alert, setAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('Loading...');
  const [alertType, setAlertType] = useState<'success' | 'error'>('success');

  async function editFinance() {
    const response = await FinanceServices.updateFinance(finance);
    setFinances(finances.map(f => (f.id === finance.id ? finance : f)));

    if (response) {
      setAlertType('success');
      setAlert(true);
      setAlertMessage('Finance edited successfully!');
    } else {
      setAlertType('error');
      setAlert(true);
      setAlertMessage('Finance not edited!');
    }

    setTimeout(() => {
      onClose();
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

      <Dialog open={open} onClose={onClose} maxWidth='sm' fullWidth>
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item xl={12} lg={12} md={12}>
              <TextField
                fullWidth
                variant='outlined'
                margin='dense'
                size='small'
                label='Description'
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

          <Button onClick={editFinance} size='small' color='primary' variant='contained'>
            SAVE
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
