import { IconType } from 'react-icons';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import MuiExpandLess from '@material-ui/icons/ExpandLess';
import MuiExpandMore from '@material-ui/icons/ExpandMore';

interface Option {
  to: string;
  title: string;
  icon: IconType;
}

interface MenuOptionTwoLevelsProps {
  icon: IconType;
  isOpen: boolean;
  options: Option[];
  title: string;
  toggle: () => void;
}

export function MenuOptionTwoLevels(props: MenuOptionTwoLevelsProps) {
  const css = makeStyles({
    listItem: {
      paddingTop: 2,
      paddingBottom: 2,
      borderRadius: 16,
      transform: 'translateY(1px)',
      transition: 'transform 0.3s ease-in-out',
      '&:hover': {
        color: '#D72323',
        transform: 'translateY(-5px)',
      },
    },
    listItemText: {
      marginLeft: 10,
      fontSize: 14,
    },
    subList: {
      marginLeft: 10,
    },
    listSubItemText: {
      marginLeft: 10,
      fontSize: 14,
    },
  })();

  const Icon = props.icon;

  return (
    <>
      <ListItem button classes={{ root: css.listItem }} onClick={props.toggle}>
        <IconButton>
          <Icon size={14} />
        </IconButton>

        <ListItemText primary={props.title} classes={{ primary: css.listItemText }} />

        {props.isOpen ? <MuiExpandLess /> : <MuiExpandMore />}
      </ListItem>

      <Collapse in={props.isOpen} timeout='auto' unmountOnExit>
        <List component='div' disablePadding className={css.subList}>
          {props.options.map((option, index) => {
            const Icon = option.icon;

            return (
              <ListItem
                button
                key={index}
                to={option.to}
                component={Link}
                classes={{ root: css.listItem }}
              >
                <IconButton>
                  <Icon size={16} />
                </IconButton>

                <ListItemText primary={option.title} classes={{ primary: css.listSubItemText }} />
              </ListItem>
            );
          })}
        </List>
      </Collapse>
    </>
  );
}
