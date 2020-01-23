import React from 'react';

import styled from 'styled-components';
import { Container } from '@material-ui/core';

export const StyledContainer = styled(Container)`
  &.MuiContainer-root {
    margin-left: 0;
  }
`;

export const CustomLeftAlignedContainer = props => {
  const { children } = props;
  return <StyledContainer>{children}</StyledContainer>;
};
