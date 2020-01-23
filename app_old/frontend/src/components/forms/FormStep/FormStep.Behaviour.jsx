import React, { useState } from 'react';

export default ToWrapComponent => {
  let WrapperComponent = props => {
    const [isStepOpen, setStep] = useState(true);

    return (
      <ToWrapComponent
        {...props}
        {...{
          handleToggleStepOpen: () => setStep(!isStepOpen),
          isStepOpen
        }}
      />
    );
  };

  return WrapperComponent;
};
