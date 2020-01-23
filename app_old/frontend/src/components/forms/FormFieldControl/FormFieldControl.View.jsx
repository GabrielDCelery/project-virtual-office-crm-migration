import React from 'react';

export default props => {
  const { children, StyledFormControl } = props;
  return <StyledFormControl>{children}</StyledFormControl>;
};
