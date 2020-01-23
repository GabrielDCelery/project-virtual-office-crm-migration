import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#2b617a'
    },
    secondary: {
      main: '#082431'
    }
  }
});

export const ThemeDecorator = ToWrapComponent => {
  return props => (
    <ThemeProvider theme={theme}>
      <ToWrapComponent {...props} />
    </ThemeProvider>
  );
};
