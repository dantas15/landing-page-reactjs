import React from 'react';
import { ThemeProvider } from 'styled-components';
import ReactDOM from 'react-dom';

import { GlobalStyles } from './styles/global-styles';
import { theme } from './styles/theme';
import { Home } from './templates/App';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Home />
      <GlobalStyles />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
