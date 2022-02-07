import ReactDOM from 'react-dom';

import { App } from './app';
import { ThemeProvider } from './context/theme';

ReactDOM.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);
