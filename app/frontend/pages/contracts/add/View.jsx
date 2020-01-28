import { Box } from '@material-ui/core';
import NavBar from '../../../components/Nav/Bar';
import UILeftAlignedContainer from '../../../components/UI/LeftAlignedContainer';
import UIExpandableFormStep from '../../../components/UI/ExpandableFormStep';

const AddContractView = () => {
  return (
    <Box display="flex">
      <NavBar />
      <Box position="relative" flexGrow={1}>
        <Box position="relative" width="100%">
          <Box height="2em" />
          <UILeftAlignedContainer maxWidth="xl">
            <UIExpandableFormStep>test</UIExpandableFormStep>
          </UILeftAlignedContainer>
        </Box>
      </Box>
    </Box>
  );
};

export default AddContractView;
