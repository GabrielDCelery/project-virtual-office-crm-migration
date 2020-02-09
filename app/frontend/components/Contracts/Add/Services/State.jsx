import { useCallback } from 'react';
import { connect } from 'react-redux';
import { actionSetFieldAddNewContract } from '~/store';

const mapStateToProps = state => {
  return {
    stateFormAddNewContract: state.forms.addNewContract
  };
};

const mapActionsToProps = {
  actionSetFieldAddNewContract
};

export default function ServiceProviderState(ToWrapComponent) {
  let WrapperComponent = props => {
    const { actionSetFieldAddNewContract, stateFormAddNewContract } = props;

    const localStates = {};

    const localStateSetters = {};

    const localStateCallbacks = {
      isEmailNotificationChecked: useCallback(() => {
        return stateFormAddNewContract.services.includes(
          'email notification of received mails'
        );
      }, [stateFormAddNewContract]),
      isPostMailsMonthlyChecked: useCallback(() => {
        return stateFormAddNewContract.services.includes('post mails monthly');
      }, [stateFormAddNewContract])
    };

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

    const localStateCallback = key => {
      return localStateCallbacks[key];
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
          localStateCallback,
          storeAction,
          storeState
        }}
      />
    );
  };

  return connect(mapStateToProps, mapActionsToProps)(WrapperComponent);
}
