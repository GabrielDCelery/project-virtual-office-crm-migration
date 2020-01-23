import React from 'react';

export default function LogoutStyles(ToWrapComponent) {
  let WrapperComponent = props => {
    return <ToWrapComponent {...props} />;
  };

  return WrapperComponent;
}
