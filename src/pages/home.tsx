import { Grid, Typography } from '@material-ui/core';
import { Logo } from '../components/logo';

export function Home() {
  return (
    <>
      <Grid container direction='row' justifyContent='center' alignItems='center'>
        <Grid item>
          <Typography
            variant='h4'
            align='center'
            style={{
              marginTop: '20px',
              marginBottom: '20px',
            }}
          >
            Welcome to the {<Logo />} project
            <span role='img' aria-label='welcome'>
              🎉
            </span>
            <span role='img' aria-label='brazil-flag'>
              🇧🇷
            </span>
          </Typography>
        </Grid>
      </Grid>

      <Typography variant='body1' align='center'>
        This is a simple project to apresent my knowledge in React and TypeScript.
      </Typography>

      <Typography variant='body1' align='center'>
        The project is still in development, so please, be patient.
      </Typography>

      <Grid container direction='column' justifyContent='center' alignItems='center'>
        <Grid item>
          {/* description libs */}
          <Typography variant='body1' align='center'>
            The project uses the following libraries:
          </Typography>

          <Typography variant='body1' align='center'>
            <strong>React</strong>
          </Typography>

          <Typography variant='body1' align='center'>
            <strong>TypeScript</strong>
          </Typography>

          <Typography variant='body1' align='center'>
            <strong>Material-UI</strong>
          </Typography>
        </Grid>

        <Grid item>
          {/* what the project can do */}
          <Typography variant='body1' align='center'>
            The project can do the following:
          </Typography>

          <Typography variant='body1' align='center'>
            <strong>Create</strong>
          </Typography>

          <Typography variant='body1' align='center'>
            <strong>Read</strong>
          </Typography>

          <Typography variant='body1' align='center'>
            <strong>Update</strong>
          </Typography>

          <Typography variant='body1' align='center'>
            <strong>Delete</strong>
          </Typography>

          <Typography variant='body1' align='center'>
            <strong>List</strong>
          </Typography>

          <Typography variant='body1' align='center'>
            <strong>Search</strong>
          </Typography>

          <Typography variant='body1' align='center'>
            <strong>Filter</strong>
          </Typography>

          <Typography variant='body1' align='center'>
            <strong>Pagination</strong>
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}
