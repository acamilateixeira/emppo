import { Button, Grid, TextField, Typography } from '@material-ui/core';
import { useCallback, useEffect, useState } from 'react';

import { useFinance } from '../../hooks/useFinance';
import FinanceServices from '../../mocks/finance';

import { Finance } from '../../models/finance';
import { List } from '../../components/finance/list';

import { ModalDelete } from '../../components/finance/modalDelete';
import { ModalEdit } from '../../components/finance/modalEdit';
import { Header } from '../../components/header';

export function DashboardFinances() {
  const { finances, setFinances, setFinance } = useFinance();

  const [modalDelete, setModalDelete] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);

  const [name, setName] = useState('');

  useEffect(() => {
    async function loadFinances() {
      const response = await FinanceServices.getFinance();
      setFinances(response);
    }

    loadFinances();
  }, [setFinances]);

  function openModalDelete(finance: Finance) {
    setFinance(finance);
    setModalDelete(true);
  }

  function closeModalDelete() {
    setModalDelete(false);
  }

  function openModalEdit(finance: Finance) {
    setFinance(finance);
    setModalEdit(true);
  }

  function closeModalEdit() {
    setModalEdit(false);
  }

  const handleSearch = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setName(e.target.value);
    },
    [setName]
  );

  const result = !name
    ? finances
    : finances.filter(finance => finance.name.toLowerCase().includes(name.toLowerCase()));

  return (
    <>
      <Header
        bradcrumb={{
          current: 'Finances - Dashboard',
          previous: [
            {
              name: 'Home',
              url: '/',
            },
          ],
        }}
      />

      <Grid
        container
        alignItems='center'
        justifyContent='space-between'
        style={{ marginTop: '2rem' }}
      >
        <Grid item>
          <Button
            fullWidth
            variant='contained'
            color='primary'
            onClick={() => openModalEdit({} as Finance)}
            size='small'
          >
            New Finance
          </Button>
        </Grid>

        <Grid item xl={4} lg={4} md={4}>
          <TextField
            fullWidth
            label='Search by name ...'
            variant='outlined'
            size='small'
            value={name}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleSearch(event)}
          />
        </Grid>
      </Grid>

      <Grid container direction='column' justifyContent='center' alignItems='center'>
        <Grid item>
          <Typography variant='h4' align='center' color='textSecondary'>
            Dashboard - Finance
          </Typography>
        </Grid>

        <Grid item>
          {finances.length > 0 ? (
            <List edit={openModalEdit} delete={openModalDelete} finances={result} />
          ) : (
            <Typography align='center' color='textSecondary'>
              Any finance found
            </Typography>
          )}
        </Grid>
      </Grid>

      <ModalDelete open={modalDelete} onClose={closeModalDelete} />
      <ModalEdit open={modalEdit} onClose={closeModalEdit} />
    </>
  );
}
