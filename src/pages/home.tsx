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
import { Logo } from '../components/logo';

export function Home() {
  return (
    <>
      <Grid container justifyContent='center' alignItems='center' spacing={1}>
        <Grid item xl={12} lg={12} md={12}>
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
          </Typography>
        </Grid>
      </Grid>

      <Grid container justifyContent='center' style={{ marginTop: '20px' }} spacing={1}>
        <Grid item xl={2} lg={2} md={2}>
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
                  <TableCell align='center'>React</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align='center'>TypeScript</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align='center'>Material-UI</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align='center'>React-Router</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align='center'>File-Saver</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align='center'>Date-FNS</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align='center'>React-Icon</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>

        <Grid item xl={2} lg={2} md={2}>
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
