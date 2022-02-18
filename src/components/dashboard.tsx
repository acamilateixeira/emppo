import { ReactNode, useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';

import { Navbar } from './navbar';
import { Sidebar } from './sidebar';
import { Footer } from './footer';

interface DashboardProps {
  children: ReactNode;
}

export function Dashboard({ children }: DashboardProps) {
  const css = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        display: 'flex',
      },
      content: {
        flexGrow: 1,
      },
      toolbar: theme.mixins.toolbar,
    })
  )();

  const [hiddenSidebarIsVisible, setHiddenSidebarIsVisible] = useState(false);

  function toggleHiddenSidebar() {
    setHiddenSidebarIsVisible(!hiddenSidebarIsVisible);
  }
  return (
    <>
      <div className={css.root}>
        <CssBaseline />

        <Navbar toggleHiddenSidebar={toggleHiddenSidebar} />

        <main className={css.content}>
          <div className={css.toolbar} />
          <Container
            maxWidth='xl'
            style={{
              padding: '2rem',
            }}
          >
            <Grid container>
              <Grid item xl={12} lg={12} md={12}>
                {children}
              </Grid>

              <Grid item xl={12} lg={12} md={12}>
                <Footer />
              </Grid>
            </Grid>
          </Container>
        </main>
      </div>

      <Sidebar
        hiddenSidebarIsVisible={hiddenSidebarIsVisible}
        toggleHiddenSidebar={toggleHiddenSidebar}
      />
    </>
  );
}
