import { IconType } from "react-icons";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";
interface MenuOptionProps {
  to: string;
  title: string;
  icon: IconType;
}

export function MenuOption(props: MenuOptionProps) {
  const css = makeStyles({
    listItem: {
      paddingTop: 2,
      paddingBottom: 2,
      borderRadius: 16,
      transform: "translateY(1px)",
      transition: "transform 0.3s ease-in-out",
      "&:hover": {
        color: "#D72323",
        transform: "translateY(-5px)",
      },
    },
    listItemText: {
      marginLeft: 10,
      fontSize: 16,
    },
  })();

  const Icon = props.icon;

  return (
    <>
      <ListItem
        button
        classes={{ root: css.listItem }}
        component={Link}
        to={props.to}
      >
        <Icon size={16} />

        <ListItemText
          primary={props.title}
          classes={{ primary: css.listItemText }}
        />
      </ListItem>
    </>
  );
}
