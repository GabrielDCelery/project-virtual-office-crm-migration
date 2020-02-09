import { useState } from 'react';
import { connect } from 'react-redux';
import { actionSetFieldAddNewContract } from '~/store';

const mapStateToProps = state => {
  return {
    stateFormAddNewContract: state.forms.addNewContract
  };
};

const mapActionsToProps = { actionSetFieldAddNewContract };

export default function ContractsAddClientSignatoryState(ToWrapComponent) {
  let WrapperComponent = props => {
    const { actionSetFieldAddNewContract, stateFormAddNewContract } = props;
    const [tabIndex, setTabIndex] = useState(0);

    const localStates = { tabIndex };

    const localStateSetters = { tabIndex: setTabIndex };

    const storeStates = {
      formAddNewContract: stateFormAddNewContract
    };

    const storeActions = {
      setFieldAddNewContract: actionSetFieldAddNewContract
    };

    const localState = key => {
      return localStates[key];
    };

    const localStateSetter = key => {
      return localStateSetters[key];
    };

    const storeState = key => {
      return storeStates[key];
    };

    const storeAction = key => {
      return storeActions[key];
    };

    return (
      <ToWrapComponent
        {...{
          localState,
          localStateSetter,
          storeAction,
          storeState
        }}
      />
    );
  };

  return connect(mapStateToProps, mapActionsToProps)(WrapperComponent);
}
