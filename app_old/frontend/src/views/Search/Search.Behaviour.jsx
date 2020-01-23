import React from 'react';

export default ToWrapComponent => {
  let WrapperComponent = props => {
    return (
      <ToWrapComponent
        {...props}
      />
    )
  }

  return WrapperComponent;
}