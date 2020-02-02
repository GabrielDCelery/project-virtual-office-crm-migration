import React from 'react';
import { Snackbar, IconButton, SnackbarContent } from '@material-ui/core';
import { Close as CloseIcon } from '@material-ui/icons';
import styled from 'styled-components';
import config from '~/config';

const DEFAULT_SNACKABAR_OPEN_TIME = 2000;

const StyledSnackbarContent = styled(SnackbarContent)`
  background-color: ${({ type }) => {
    return `${config.styles.colors.snackbar[type]} !important`;
  }};
`;

export const SnackBarView = ({
  actionCloseSnackBar,
  stateSnackBarMessage,
  stateSnackBarOpen,
  stateSnackBarVariant
}) => {
  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left'
      }}
      open={stateSnackBarOpen}
      autoHideDuration={DEFAULT_SNACKABAR_OPEN_TIME}
      onClose={actionCloseSnackBar}
    >
      <StyledSnackbarContent
        type={stateSnackBarVariant}
        aria-describedby="client-snackbar"
        message={stateSnackBarMessage}
        action={[
          <IconButton
            key="close"
            aria-label="close"
            color="inherit"
            onClick={actionCloseSnackBar}
          >
            <CloseIcon />
          </IconButton>
        ]}
      />
    </Snackbar>
  );
};

export default SnackBarView;
