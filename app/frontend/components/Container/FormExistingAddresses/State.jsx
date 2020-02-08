import { connect } from 'react-redux';
import {
  actionRecommendationsGetFilteredAddresses,
  selectorGetAddressesRecommendations
} from '~/store';

const mapStateToProps = state => {
  return {
    stateRecommendedAddresses: selectorGetAddressesRecommendations(state)
  };
};

const mapActionsToProps = {
  actionRecommendationsGetFilteredAddresses
};

export default function FormExistingAddressesState(ToWrapComponent) {
  let WrapperComponent = props => {
    const {
      actionRecommendationsGetFilteredAddresses,
      stateRecommendedAddresses,
      defaultAddress,
      handleSelectAddress
    } = props;

    const localStates = {};

    const localStateSetters = {};

    const localStateCallbacks = {};

    const storeStates = {
      recommendedAddresses: stateRecommendedAddresses
    };

    const storeActions = {
      recommendationsGetFilteredAddresses: actionRecommendationsGetFilteredAddresses
    };

    const propStates = {
      defaultAddress
    };

    const propMethods = {
      handleSelectAddress
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
