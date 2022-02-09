import { createStyles, makeStyles } from '@material-ui/core';

import Drawer from '@material-ui/core/Drawer';

import { PainelOption } from './painelOption';

interface SidebarProps {
  hiddenSidebarIsVisible: boolean;
  toggleHiddenSidebar: () => void;
  window?: () => Window;
}

export function Sidebar({ hiddenSidebarIsVisible, toggleHiddenSidebar, window }: SidebarProps) {
  const container = window !== undefined ? () => window().document.body : undefined;

  const css = makeStyles(() =>
    createStyles({
      drawer: {
        width: 320,
        flexShrink: 0,
        height: '100%',
      },
      drawerPaper: {
        width: 350,
        borderRadius: 30,
        border: 0,
        margin: 5,
        height: '100%',
        boxShadow: '0 8px 8px 8px rgba(0, 0, 0, 0.08)',
        paddingBottom: 50,
      },
    })
  )();

  return (
    <nav className={css.drawer}>
      <Drawer
        anchor='top'
        container={container}
        open={hiddenSidebarIsVisible}
        onClose={toggleHiddenSidebar}
        classes={{
          paper: css.drawerPaper,
        }}
      >
        <PainelOption />
      </Drawer>
    </nav>
  );
}
