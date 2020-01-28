import { Box } from '@material-ui/core';
import NavBar from '../../../components/Nav/Bar';

const SearchContractView = () => {
  return (
    <Box display="flex">
      <NavBar />
      <Box position="relative" flexGrow={1}>
        <Box position="relative" width="100%">
          search
        </Box>
      </Box>
    </Box>
  );
};

export default SearchContractView;
