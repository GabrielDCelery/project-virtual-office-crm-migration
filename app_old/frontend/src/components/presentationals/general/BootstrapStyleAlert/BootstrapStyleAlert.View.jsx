import React from 'react';
import {
  Paper,
  Typography
} from '@material-ui/core';

export default ({ alertType, message, classes }) => {
  return (
    <React.Fragment>
      <Paper className={`${classes.root} ${classes[alertType]}`}>
        <Typography component='p' className={classes.message}>
          {message}
        </Typography>
      </Paper>
    </React.Fragment>
  );
}