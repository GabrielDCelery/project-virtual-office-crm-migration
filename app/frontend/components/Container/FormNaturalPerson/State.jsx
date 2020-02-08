import { useState } from 'react';
import { connect } from 'react-redux';
import {
  actionRecommendationsGetFilteredNaturalPeople,
  selectorGetNaturalPeopleRecommendations
} from '~/store';

const mapStateToProps = state => {
  return {
    stateRecommendedNaturalPeople: selectorGetNaturalPeopleRecommendations(
      state
    )
  };
};

const mapActionsToProps = {
  actionRecommendationsGetFilteredNaturalPeople
};

export default function FormNaturalPersonViewState(ToWrapComponent) {
  let WrapperComponent = props => {
    const {
      actionRecommendationsGetFilteredNaturalPeople,
      stateRecommendedNaturalPeople,
      defaultNaturalPerson,
      handleSelectNaturalPerson
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
    const [tabIndexNaturalPerson, setTabIndexNaturalPerson] = useState(0);
    const [tabIndexAddress, setTabIndexAddress] = useState(0);

    const localStates = {
      firstName,
      lastName,
      motherName,
      birthDate,
      identifierDocumentType,
      identifierDocumentNumber,
      tabIndexAddress,
      tabIndexNaturalPerson,
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
      permanentAddress: setPermanentAddress,
      tabIndexNaturalPerson: setTabIndexNaturalPerson
    };

    const localStateCallbacks = {};

    const storeStates = {
      recommendedNaturalPeople: stateRecommendedNaturalPeople
    };

    const storeActions = {
      recommendationsGetFilteredNaturalPeople: actionRecommendationsGetFilteredNaturalPeople
    };

    const propStates = {
      defaultNaturalPerson
    };

    const propMethods = {
      handleSelectNaturalPerson
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
