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

export default function FormExistingNaturalPersonState(ToWrapComponent) {
  let WrapperComponent = props => {
    const {
      actionRecommendationsGetFilteredNaturalPeople,
      stateRecommendedNaturalPeople,
      defaultNaturalPerson,
      handleSelectNaturalPerson
    } = props;

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
          //localState,
          // localStateCallback,
          //localStateSetter,
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
