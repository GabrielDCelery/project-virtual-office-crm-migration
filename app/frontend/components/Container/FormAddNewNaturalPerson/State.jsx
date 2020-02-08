import { useCallback, useState } from 'react';
import { connect } from 'react-redux';
import { actionSubmitFormAddNewNaturalPerson } from '~/store';

const mapStateToProps = state => {
  return state;
};

const mapActionsToProps = { actionSubmitFormAddNewNaturalPerson };

export default function FormNaturalPersonViewState(ToWrapComponent) {
  let WrapperComponent = props => {
    const {
      actionSubmitFormAddNewNaturalPerson,
      handleSubmitSuccessCallback
    } = props;
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [motherName, setMotherName] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [identifierDocumentType, setIdentifierDocumentType] = useState('');
    const [identifierDocumentNumber, setIdentifierDocumentNumber] = useState(
      ''
    );
    const [permanentAddress, setPermanentAddress] = useState(null);
    const [tabIndexAddress, setTabIndexAddress] = useState(0);

    const localStates = {
      firstName,
      lastName,
      motherName,
      birthDate,
      identifierDocumentType,
      identifierDocumentNumber,
      tabIndexAddress,
      permanentAddress
    };

    const localStateSetters = {
      firstName: setFirstName,
      lastName: setLastName,
      motherName: setMotherName,
      birthDate: setBirthDate,
      identifierDocumentType: setIdentifierDocumentType,
      identifierDocumentNumber: setIdentifierDocumentNumber,
      tabIndexAddress: setTabIndexAddress,
      permanentAddress: setPermanentAddress
    };

    const localStateCallbacks = {
      bEnableSubmit: useCallback(() => {
        return (
          firstName !== '' &&
          lastName !== '' &&
          motherName !== '' &&
          birthDate !== null &&
          identifierDocumentType !== '' &&
          identifierDocumentNumber !== '' &&
          permanentAddress !== null
        );
      }, [
        firstName,
        lastName,
        motherName,
        birthDate,
        identifierDocumentType,
        identifierDocumentNumber,
        permanentAddress
      ])
    };

    const storeStates = {};

    const storeActions = {
      submitFormAddNewNaturalPerson: actionSubmitFormAddNewNaturalPerson
    };

    const propStates = {};

    const propMethods = {
      handleSubmitSuccessCallback
    };

    const localState = key => {
      return localStates[key];
    };

    const localStateSetter = key => {
      return localStateSetters[key];
    };

    const localStateCallback = key => {
      return localStateCallbacks[key];
    };

    const storeState = key => {
      return storeStates[key];
    };

    const storeAction = key => {
      return storeActions[key];
    };

    const propState = key => {
      return propStates[key];
    };

    const propMethod = key => {
      return propMethods[key] ? propMethods[key] : () => {};
    };

    return (
      <ToWrapComponent
        {...{
          localState,
          localStateCallback,
          localStateSetter,
          propMethod,
          propState,
          storeAction,
          storeState
        }}
      />
    );
  };

  return connect(mapStateToProps, mapActionsToProps)(WrapperComponent);
}
