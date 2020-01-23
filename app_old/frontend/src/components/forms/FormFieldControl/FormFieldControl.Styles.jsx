import React from 'react';
import styled from 'styled-components';
import { FormControl } from '@material-ui/core';

const StyledFormControl = styled(FormControl)`
  width: 100%;
  margin-top: 1em !important;
  margin-bottom: 1em !important;
`;

export default ToWrapComponent => {
  let WrapperComponent = props => {
    return <ToWrapComponent {...props} {...{ StyledFormControl }} />;
  };

  return WrapperComponent;
};
