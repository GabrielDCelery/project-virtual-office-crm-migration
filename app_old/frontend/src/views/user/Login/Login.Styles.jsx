import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
  root: {
    backgroundColor: `${'#021A32'}`,
    background: `linear-gradient(135deg, ${'#1C344C'} 30%, ${'#021A32'} 90%)`
  },
  container: {
    height: '100vh'
  },
  card: {
    verticalAlign: 'middle',
    position: 'relative',
    top: '50%',
    transform: 'translateY(-50%)',
    padding: '2em'
  }
});

export default ToWrapComponent => {
  return withStyles(styles)(props => <ToWrapComponent {...props} />);
}