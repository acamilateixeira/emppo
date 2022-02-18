import {
  Grid,
  Table,
  TableBody,
  TableHead,
  TableRow,
  Typography,
  TableCell,
  Paper,
  TableContainer,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Logo } from '../components/logo';

export function Home() {
  const css = makeStyles({
    movement: {
      transform: 'translateY(5px)',
      transition: 'transform 0.3s ease-in-out',
      '&:hover': {
        transform: 'translateY(-5px)',
      },
    },
  })();

  return (
    <>
      <Grid container justifyContent='center' alignItems='center' spacing={1}>
        <Grid item xl={12} lg={12} md={12} classes={{ item: css.movement }}>
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

        <Grid item xl={12} lg={12} md={12}>
          <Typography variant='body1' align='center'>
            This is a simple project to apresent my knowledge in React and TypeScript.
          </Typography>
        </Grid>

        <Grid item xl={4} lg={4} md={4}>
          <Typography
            variant='body1'
            align='center'
            style={{
              color: '#D72323',
              borderBottom: '1px solid #D72323',
              paddingBottom: '10px',
              marginBottom: '20px',
              fontWeight: 'bold',
            }}
          >
            Emppo is a web application that helps you to manage your business. It is a simple and
            easy to use
          </Typography>

          <Typography variant='body1' align='center' color='textSecondary'>
            The project is still in development, so please, be patient.
          </Typography>

          <Typography variant='body1' align='center' color='textSecondary'>
            Active routes: <br />
            {/* click go to route */}
            <a
              href='/system/settings/user/permission'
              style={{
                color: '#D72323',
                textDecoration: 'none',
              }}
            >
              Permission Settings
            </a>
            <br />
            <a
              href='/dashboard/finance'
              style={{
                color: '#D72323',
                textDecoration: 'none',
              }}
            >
              Finance Dashboard (In Development)
            </a>
          </Typography>
        </Grid>
      </Grid>

      <Grid container justifyContent='center' style={{ marginTop: '20px' }} spacing={1}>
        <Grid item xl={2} lg={2} md={2} classes={{ item: css.movement }}>
          <TableContainer component={Paper}>
            <Table size='small'>
              <TableHead>
                <TableRow>
                  <TableCell align='center'>
                    <Typography
                      style={{
                        fontWeight: 'bold',
                      }}
                    >
                      Here I will practice:
                    </Typography>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell align='center'>GitHub Pages</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell align='center'>Unit Testing with Jest and Enzyme</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell align='center'>Styled Components with Material-UI</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell align='center'>React Hooks, Router, Context and Link </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell align='center'>SOLID</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>

        <Grid item xl={2} lg={2} md={2} classes={{ item: css.movement }}>
          <TableContainer
            component={Paper}
            style={{
              padding: '10px',
            }}
          >
            <Table size='small'>
              <TableHead>
                <TableRow>
                  <TableCell align='center'>
                    <Typography
                      style={{
                        fontWeight: 'bold',
                      }}
                    >
                      Emppo uses the libraries:
                    </Typography>
                  </TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                <TableRow>
                  <TableCell align='center'>
                    <a
                      href='https://reactjs.org/'
                      style={{
                        color: '#D72323',
                        textDecoration: 'none',
                      }}
                    >
                      React
                    </a>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell align='center'>
                    <a
                      href='https://www.typescriptlang.org/'
                      style={{
                        color: '#D72323',
                        textDecoration: 'none',
                      }}
                    >
                      TypeScript
                    </a>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell align='center'>
                    <a
                      href='https://material-ui.com/'
                      style={{
                        color: '#D72323',
                        textDecoration: 'none',
                      }}
                    >
                      Material-UI
                    </a>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell align='center'>React-Router</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell align='center'>File-Saver</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell align='center'>
                    <a
                      href='https://date-fns.org/'
                      style={{
                        color: '#D72323',
                        textDecoration: 'none',
                      }}
                    >
                      Date-FNS
                    </a>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell align='center'>React-Icon</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>

        <Grid item xl={2} lg={2} md={2} classes={{ item: css.movement }}>
          <TableContainer component={Paper}>
            <Table size='small'>
              <TableHead>
                <TableRow>
                  <TableCell align='center'>
                    <Typography
                      style={{
                        fontWeight: 'bold',
                      }}
                    >
                      What the project can do:
                    </Typography>
                  </TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                <TableRow>
                  <TableCell align='center'>CRUD</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align='center'>List</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align='center'>Pagination</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align='center'>Search</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </>
  );
}
