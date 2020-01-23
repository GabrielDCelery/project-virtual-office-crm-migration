import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({});

export default ToWrapComponent => {
  return withStyles(styles)(props => <ToWrapComponent {...props} />);
}