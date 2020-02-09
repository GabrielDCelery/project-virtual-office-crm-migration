import { connect } from 'react-redux';
import {
  actionRecommendationsGetFilteredLegalEntities,
  selectorGetLegalEntitiesRecommendations
} from '~/store';

const mapStateToProps = state => {
  return {
    stateRecommendedLegalEntities: selectorGetLegalEntitiesRecommendations(
      state
    )
  };
};

const mapActionsToProps = {
  actionRecommendationsGetFilteredLegalEntities
};

export default function FormExistingLegalEntityState(ToWrapComponent) {
  let WrapperComponent = props => {
    const {
      actionRecommendationsGetFilteredLegalEntities,
      stateRecommendedLegalEntities,
      defaultLegalEntity,
      handleSelectLegalEntity
    } = props;

    const localStates = {};

    const localStateSetters = {};

    const localStateCallbacks = {};

    const storeStates = {
      recommendedLegalEntities: stateRecommendedLegalEntities
    };

    const storeActions = {
      recommendationsGetFilteredLegalEntities: actionRecommendationsGetFilteredLegalEntities
    };

    const propStates = {
      defaultLegalEntity
    };

    const propMethods = {
      handleSelectLegalEntity
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
