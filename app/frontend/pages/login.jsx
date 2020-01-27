import React from 'react';
import { Box, Hidden } from '@material-ui/core';

export default () => {
  return (
    <Box display="flex">
      <Box position="relative" flexGrow={1}>
        <Hidden smUp>
          <Box height="5em" />
        </Hidden>
        <Box position="relative" width="100%">
          Login
        </Box>
      </Box>
    </Box>
  );
};
