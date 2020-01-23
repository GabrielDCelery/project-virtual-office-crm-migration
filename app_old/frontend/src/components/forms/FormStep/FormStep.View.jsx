import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography /*, Badge, Tooltip*/
} from '@material-ui/core';
import {
  ExpandLess as ExpandLessIcon,
  ExpandMore as ExpandMoreIcon
} from '@material-ui/icons';
import AnimateHeight from 'react-animate-height';

export default props => {
  const {
    StyledFlexBoxCenterPositioner,
    children,
    handleToggleStepOpen,
    isStepOpen,
    label,
    rest
  } = props;

  return (
    <div {...rest}>
      <div style={{ height: '1em' }}></div>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography component="h3">
            <strong>{label}</strong>
          </Typography>
          <Typography component="div" style={{ flexGrow: 1 }}></Typography>
          <StyledFlexBoxCenterPositioner
            onClick={handleToggleStepOpen}
            style={{ cursor: 'pointer' }}
          >
            {isStepOpen ? (
              <ExpandLessIcon fontSize="large" />
            ) : (
              <ExpandMoreIcon fontSize="large" />
            )}
          </StyledFlexBoxCenterPositioner>
        </Toolbar>
      </AppBar>
      <AnimateHeight duration={500} height={isStepOpen ? 'auto' : 0}>
        <div style={{ height: '1em' }}></div>
        {children}
      </AnimateHeight>
    </div>
  );
};
