import { useState } from 'react';

export default function AddContractBehaviour(ToWrapComponent) {
  let WrapperComponent = props => {
    const [currentTabIndex, setCurrentTabIndex] = useState(0);

    return (
      <ToWrapComponent
        {...props}
        {...{ currentTabIndex, setCurrentTabIndex }}
      />
    );
  };

  return WrapperComponent;
}
