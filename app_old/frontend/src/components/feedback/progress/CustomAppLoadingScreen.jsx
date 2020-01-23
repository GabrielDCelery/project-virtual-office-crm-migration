import React from 'react';
import { Container, CircularProgress } from '@material-ui/core';
import styled from 'styled-components';

const StyledGlobalProgressContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80vh;
`;

const CustomAppLoadingScreen = () => {
  return (
    <Container maxWidth={false}>
      <StyledGlobalProgressContainer>
        <CircularProgress size={150} />
      </StyledGlobalProgressContainer>
    </Container>
  );
};

export { CustomAppLoadingScreen };
