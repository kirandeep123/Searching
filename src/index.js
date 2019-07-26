import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import App from './App';
import theme from './theme';

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    <CssBaseline />
    <App />
  </MuiThemeProvider>,
  document.querySelector('#root'),
);
