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
            <List
              type={permissions}
              edit={id => {
                console.log(id);
              }}
              delete={id => {
                console.log(id);
              }}
            />
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
