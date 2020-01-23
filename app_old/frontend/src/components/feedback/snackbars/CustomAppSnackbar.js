import React from 'react';
import { Snackbar, IconButton, SnackbarContent } from '@material-ui/core';
import { Close as CloseIcon } from '@material-ui/icons';
import styled from 'styled-components';
import config from 'config';

const DEFAULT_SNACKABAR_OPEN_TIME = 3000;

const StyledSnackbarContent = styled(SnackbarContent)`
  background-color: ${({ type }) => {
    return `${config.styles.colors.snackbar[type]} !important`;
  }};
`;

const CustomAppSnackbar = ({
  handleClose,
  isOpen,
  message,
  openTimeInMs,
  type
}) => {
  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left'
      }}
      open={isOpen}
      autoHideDuration={openTimeInMs || DEFAULT_SNACKABAR_OPEN_TIME}
      onClose={handleClose}
    >
      <StyledSnackbarContent
        type={type}
        aria-describedby="client-snackbar"
        message={message}
        action={[
          <IconButton
            key="close"
            aria-label="close"
            color="inherit"
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>
        ]}
      />
    </Snackbar>
  );
};

export { CustomAppSnackbar };
