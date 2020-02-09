import { useState } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return state;
};

const mapActionsToProps = {};

export default function AddContractState(ToWrapComponent) {
  let WrapperComponent = props => {
    const [tabIndex, setTabIndex] = useState(0);

    const localStates = {
      tabIndex
    };

    const localStateSetters = {
      tabIndex: setTabIndex
    };

    const localStateCallbacks = {};

    const storeStates = {};

    const storeActions = {};

    const propMethods = {};

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
          storeAction,
          storeState
        }}
      />
    );
  };

  return connect(mapStateToProps, mapActionsToProps)(WrapperComponent);
}
