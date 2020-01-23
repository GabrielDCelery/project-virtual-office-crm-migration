import React from 'react';
import styled from 'styled-components';

const StyledFlexBoxCenterPositioner = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export default ToWrapComponent => {
  let WrapperComponent = props => {
    return (
      <ToWrapComponent {...props} {...{ StyledFlexBoxCenterPositioner }} />
    );
  };

  return WrapperComponent;
};
