import { useCallback } from 'react';

export default function FormAddNewAddressBehaviour(ToWrapComponent) {
  let WrapperComponent = props => {
    const { stateFormAddNewAddress } = props;

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
          bEnableSubmit
        }}
      />
    );
  };

  return WrapperComponent;
}
