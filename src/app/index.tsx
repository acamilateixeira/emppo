import { CssBaseline } from '@material-ui/core';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';

import '@fontsource/asap';

import { useTheme } from '../hooks/useTheme';

import { AppRoutes } from './routes/app';

export function App() {
  const { type } = useTheme();

  const theme = createTheme({
    palette: {
      type: type,
      primary: {
        main: '#00A19D',
      },
      secondary: {
        main: '#D72323',
      },
    },
    typography: {
      fontSize: 14,
      fontFamily: 'Asap',
    },
    shape: {
      borderRadius: 16,
    },

    overrides: {
      MuiPaper: {
        elevation1: {
          boxShadow: '0 1px 8px 5px rgba(0, 0, 0, 0.08)',
        },
      },
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppRoutes />
      </ThemeProvider>
    </>
  );
}
