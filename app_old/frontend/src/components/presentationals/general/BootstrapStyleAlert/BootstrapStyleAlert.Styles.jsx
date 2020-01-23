import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    padding: theme.spacing(1.5)
  },
  danger: {
    backgroundColor: '#f8d7da',
    color: '#7d2a34'
  }
});

export default ToWrapComponent => {
  return withStyles(styles)(props => <ToWrapComponent {...props} />);
}