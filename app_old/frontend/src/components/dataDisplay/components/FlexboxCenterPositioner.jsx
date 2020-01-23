import React from 'react';
import styled from 'styled-components';

const StyledCenterAligner = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

const FlexboxCenterPositioner = props => {
  const { children, ...other } = props;
  return <StyledCenterAligner {...other}>{children} </StyledCenterAligner>;
};

export { FlexboxCenterPositioner };
