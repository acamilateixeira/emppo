import { Grid, Typography } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { AlertMessage } from '../../components/alertMessage';
import { Header } from '../../components/header';
import { List } from '../../components/system/settings/user/permission/list';
import { ModalDelete } from '../../components/system/settings/user/permission/modalDelete';
import { usePermission } from '../../hooks/usePermission';
import PermissionServices from '../../mocks/getPermission';
import { Type } from '../../models/type';

export function Permissions() {
  const { permissions, setPermissions, setPermission } = usePermission();

  const [alert, setAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('Loading...');
  const [alertType, setAlertType] = useState<'success' | 'error'>('success');

  const [modalDelete, setModalDelete] = useState(false);
  // const [modalEdit, setModalEdit] = useState(false);

  // get permissions from promise mock
  useEffect(() => {
    async function getData() {
      const response = await PermissionServices.getPermission();
      setPermissions(response);
    }

    getData();
  }, [setPermissions]);

  async function edit(type: Type) {
    console.log('edit', type);

    const response = await PermissionServices.putPermission(type);
    setPermissions(permissions.map(p => (p.id === type.id ? response : p)));

    if (response) {
      setAlertType('success');
      setAlert(true);
      setAlertMessage('Permission updated successfully');
    }
  }

  function openModalDelete(type: Type) {
    setPermission(type);
    setModalDelete(true);
  }

  function closeModalDelete() {
    setModalDelete(false);
  }

  return (
    <>
      <AlertMessage
        open={alert}
        severity={alertType}
        message={alertMessage}
        onClose={() => setAlert(false)}
      />
      <Header
        bradcrumb={{
          current: 'Permission',
          previous: [
            {
              name: 'System',
              url: '/system',
            },
          ],
        }}
      />

      <Grid
        container
        direction='column'
        justifyContent='center'
        alignItems='center'
        style={{ marginTop: '2rem' }}
      >
        <Grid item>
          <Typography variant='h4' align='center' color='textSecondary'>
            PERMISSION
          </Typography>
        </Grid>

        <Grid item>
          {permissions.length > 0 ? (
            <List type={permissions} edit={edit} delete={openModalDelete} />
          ) : (
            <Typography align='center' color='textSecondary'>
              No permission found
            </Typography>
          )}
        </Grid>
      </Grid>

      <ModalDelete open={modalDelete} onClose={closeModalDelete} />
    </>
  );
}
