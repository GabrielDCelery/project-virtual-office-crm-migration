import { useCallback, useState } from 'react';

export default function FormNaturalPersonBehaviour(ToWrapComponent) {
  let WrapperComponent = props => {
    return <ToWrapComponent {...props} />;
  };

  return WrapperComponent;
}
