import { useState } from 'react';

export default function AddContractBehaviour(ToWrapComponent) {
  let WrapperComponent = props => {
    const [activeTab, setActiveTab] = useState(0);

    return <ToWrapComponent {...props} {...{ activeTab, setActiveTab }} />;
  };

  return WrapperComponent;
}
