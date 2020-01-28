import { useEffect } from 'react';
import { Box } from '@material-ui/core';
import NavBar from '../../components/Nav/Bar';

const LogoutPageView = ({ actionLogoutUser }) => {
  useEffect(() => {
    actionLogoutUser();
  }, [actionLogoutUser]);

  return (
    <Box display="flex">
      <NavBar />
      <Box position="relative" flexGrow={1} />
    </Box>
  );
};

export default LogoutPageView;
