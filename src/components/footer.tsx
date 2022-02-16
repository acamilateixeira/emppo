import { Box, Link, Typography } from '@material-ui/core';

export function Footer() {
  return (
    <Box
      pt={4}
      style={{
        justifyContent: 'center',
        position: 'relative',
        bottom: 20,
      }}
    >
      <Typography variant='body2' color='textSecondary' align='center'>
        {'Copyright © '}

        <Link color='inherit' href='https://www.instagram.com/acamilateixeiraa'>
          acamilateixeiraa
        </Link>

        {` ${new Date().getFullYear()}.`}
      </Typography>
    </Box>
  );
}
