import { createStyles, makeStyles, Typography } from '@material-ui/core';

export function Logo() {
  const css = makeStyles(() =>
    createStyles({
      titulo: {
        WebkitTextFillColor: 'transparent',
        fontWeight: 800,
        background: '#D72323',
        WebkitBackgroundClip: 'text',
        fontSize: 30,
        padding: '0px 10px',
        margin: 0,
        WebkitTextStroke: '1px #D72323',
        WebkitTextStrokeWidth: '1px',
      },
    })
  )();

  return (
    <Typography className={css.titulo} variant='h5'>
      EMPPO
    </Typography>
  );
}
