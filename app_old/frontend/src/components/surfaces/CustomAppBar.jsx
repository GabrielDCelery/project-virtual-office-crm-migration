import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

const CustomAppBar = ({ label }) => {
  return (
    <React.Fragment>
      <div style={{ height: '1em' }}></div>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography component="h3">
            <strong>{label}</strong>
          </Typography>
          <Typography component="div" style={{ flexGrow: 1 }}></Typography>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export { CustomAppBar };
