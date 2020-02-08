import { Box, Paper } from '@material-ui/core';

const UIFormPaper = ({ children }) => {
  return (
    <Paper>
      <Box padding="2em">{children}</Box>
    </Paper>
  );
};

export default UIFormPaper;
