import React from 'react';
import UIAppBar from './AppBar';
import { Toolbar, Typography } from '@material-ui/core';

const UIFormStepAppBar = ({ background, label }) => {
  return (
    <UIAppBar
      height="narrow"
      position="static"
      background={background || 'secondary'}
    >
      <Toolbar>
        <Typography component="h4">{(label || '').toUpperCase()}</Typography>
      </Toolbar>
    </UIAppBar>
  );
};

export default UIFormStepAppBar;
