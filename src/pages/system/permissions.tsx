import { Grid, Typography } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { Header } from '../../components/header';
import { List } from '../../components/system/settings/user/permission/list';
import PermissionServices from '../../mocks/getPermission';
import { Type } from '../../models/type';

export function Permissions() {
  const [permissions, setPermissions] = useState([] as Type[]);

  // get permissions from promise mock
  useEffect(() => {
    async function getData() {
      const response = await PermissionServices.getPermission();
      setPermissions(response);
    }

    getData();
  }, []);

  async function edit(type: Type) {
    console.log('edit', type);

    const response = await PermissionServices.putPermission(type);
    setPermissions(permissions.map(p => (p.id === type.id ? response : p)));
  }

  async function deleteType(type: Type) {
    console.log('delete', type);

    await PermissionServices.deletePermission(type.id);
    setPermissions(permissions.filter(permission => permission.id !== type.id));
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
            <List type={permissions} edit={edit} delete={deleteType} />
          ) : (
            <Typography align='center' color='textSecondary'>
              No permission found
            </Typography>
          )}
        </Grid>
      </Grid>
    </>
  );
}
