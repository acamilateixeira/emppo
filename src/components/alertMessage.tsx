import { Snackbar } from '@material-ui/core';
import { Alert as OriginalAlert, AlertProps } from '@material-ui/lab';

interface AlertMessageProps {
  message: string;
  severity: 'success' | 'info' | 'warning' | 'error';
  open: boolean;
  onClose: () => void;
}

function Alert(props: AlertProps) {
  return <OriginalAlert elevation={6} variant='standard' {...props} />;
}

export function AlertMessage({ message, severity, open, onClose }: AlertMessageProps) {
  return (
    <Snackbar open={open} autoHideDuration={3000} onClose={onClose}>
      <Alert onClose={onClose} severity={severity}>
        {message}
      </Alert>
    </Snackbar>
  );
}
