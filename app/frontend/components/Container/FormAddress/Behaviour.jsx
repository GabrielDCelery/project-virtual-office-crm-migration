import { useCallback, useState } from 'react';

export default function FormAddressBehaviour(ToWrapComponent) {
  let WrapperComponent = props => {
    const { stateFormAddNewAddress } = props;
    const [activeTab, setActiveTab] = useState(0);

    const bEnableSubmit = useCallback(() => {
      return (
        stateFormAddNewAddress['postcode'] !== '' &&
        stateFormAddNewAddress['street'] !== '' &&
        stateFormAddNewAddress['city'] !== null &&
        stateFormAddNewAddress['country'] !== null
      );
    }, [stateFormAddNewAddress]);

    return (
      <ToWrapComponent
        {...props}
        {...{
          activeTab,
          setActiveTab,
          bEnableSubmit
        }}
      />
    );
  };

  return WrapperComponent;
}
