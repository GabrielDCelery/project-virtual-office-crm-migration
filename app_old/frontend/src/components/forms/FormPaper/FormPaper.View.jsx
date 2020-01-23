import React from 'react';
import { Box, Paper } from '@material-ui/core';

export default props => {
  const { children, rest } = props;
  return (
    <Paper {...rest}>
      <Box component="div" p={4}>
        {children}
      </Box>
    </Paper>
  );
};
