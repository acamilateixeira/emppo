import {
  AppBar,
  Grid,
  IconButton,
  Toolbar,
  useMediaQuery,
  Switch,
  useTheme as useThemeMaterialUI,
  Box,
} from '@material-ui/core';
import { FaMoon, FaSun } from 'react-icons/fa';
import { MdExitToApp, MdMenuOpen } from 'react-icons/md';
import { useTheme } from '../hooks/useTheme';
import { Logo } from './logo';

interface NavbarProps {
  toggleHiddenSidebar: () => void;
}

export function Navbar({ toggleHiddenSidebar }: NavbarProps) {
  const theme = useThemeMaterialUI();
  const { type, changeTheme } = useTheme();

  const breakpoint = useMediaQuery(theme.breakpoints.between('sm', 'xl'));

  return (
    <AppBar
      color='inherit'
      position='fixed'
      style={{
        boxShadow: '1 0px 8px 5px rgba(0, 0, 0, 0.1)',
        borderRadius: '0px 0px 10px 10px',
      }}
    >
      <Toolbar variant='dense'>
        <Grid container justifyContent={!breakpoint ? 'flex-end' : 'space-between'} direction='row'>
          <Grid item lg={5}>
            <IconButton onClick={toggleHiddenSidebar}>
              <MdMenuOpen />
            </IconButton>
          </Grid>

          <Grid item lg={5}>
            <Logo />
          </Grid>

          <Grid item>
            <Box mt={2}>
              <FaSun />
              <Switch
                size='small'
                color='primary'
                onChange={changeTheme}
                checked={type === 'dark'}
              />
              <FaMoon />
            </Box>
          </Grid>

          <Grid item>
            <IconButton>
              <MdExitToApp />
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
