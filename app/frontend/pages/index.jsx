import React from 'react';
import { Box, Hidden } from '@material-ui/core';
import NavBar from '~/components/Nav/Bar';

const IndexPage = () => {
  return (
    <Box display="flex">
      <NavBar />
      <Box position="relative" flexGrow={1}>
        <Hidden smUp>
          <Box height="5em" />
        </Hidden>
        <Box position="relative" width="100%">
          a
        </Box>
      </Box>
    </Box>
  );
};

export default IndexPage;
