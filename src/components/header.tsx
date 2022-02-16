import { Breadcrumbs, Grid, Chip } from '@material-ui/core';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';

interface HeaderProps {
  bradcrumb: {
    current: string;
    previous: {
      name: string;
      url: string;
    }[];
  };
}

export function Header({ bradcrumb }: HeaderProps) {
  return (
    <Grid container>
      <Grid item>
        <Breadcrumbs separator={<AiOutlineArrowRight size={14} />}>
          {bradcrumb.previous.map(({ name, url }) => (
            <Chip key={url} label={name} component={Link} to={url} size='small' />
          ))}
          <Chip label={bradcrumb.current} size='small' />
        </Breadcrumbs>
      </Grid>
    </Grid>
  );
}
