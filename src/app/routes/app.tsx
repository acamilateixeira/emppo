import { CssBaseline, Typography, useMediaQuery, useTheme } from '@material-ui/core';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Dashboard } from '../../components/dashboard';
import { FinanceProvider } from '../../context/finance';
import { PermissionProvider } from '../../context/permission';
import { DashboardFinances } from '../../pages/finance/dashboard';
import { Home } from '../../pages/home';
import { Permissions } from '../../pages/system/permissions';

export function AppRoutes() {
  const theme = useTheme();
  const screenSizeIsNotSupported = useMediaQuery(theme.breakpoints.between('xs', 'sm'));

  if (screenSizeIsNotSupported) {
    return <Typography>Tamanho de tela não suportado</Typography>;
  }

  return (
    <BrowserRouter>
      <Dashboard>
        <PermissionProvider>
          <FinanceProvider>
            <CssBaseline />
            <Routes>
              <Route path='/' element={<Home />} />

              {/* System */}
              <Route path='/system/settings/user/permission' element={<Permissions />} />

              {/* Finance */}
              <Route path='/dashboard/finance' element={<DashboardFinances />} />
            </Routes>
          </FinanceProvider>
        </PermissionProvider>
      </Dashboard>
    </BrowserRouter>
  );
}
