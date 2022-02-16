import { Grid, Typography } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { Header } from '../../components/header';
import { List } from '../../components/system/settings/user/permission/list';
import { ModalDelete } from '../../components/system/settings/user/permission/modalDelete';
import { ModalEdit } from '../../components/system/settings/user/permission/modalEdit';
import { usePermission } from '../../hooks/usePermission';
import PermissionServices from '../../mocks/getPermission';
import { Type } from '../../models/type';

export function Permissions() {
  const { permissions, setPermissions, setPermission } = usePermission();

  const [modalDelete, setModalDelete] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);

  // get permissions from promise mock
  useEffect(() => {
    async function getData() {
      const response = await PermissionServices.getPermission();
      setPermissions(response);
    }

    getData();
  }, [setPermissions]);

  function openModalDelete(type: Type) {
    setPermission(type);
    setModalDelete(true);
  }

  function closeModalDelete() {
    setModalDelete(false);
  }

  function openModalEdit(type: Type) {
    setPermission(type);
    setModalEdit(true);
  }

  function closeModalEdit() {
    setModalEdit(false);
  }

  return (
    <>
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
            <List type={permissions} edit={openModalEdit} delete={openModalDelete} />
          ) : (
            <Typography align='center' color='textSecondary'>
              No permission found
            </Typography>
          )}
        </Grid>
      </Grid>

      <ModalEdit open={modalEdit} onClose={closeModalEdit} />
      <ModalDelete open={modalDelete} onClose={closeModalDelete} />
    </>
  );
}
