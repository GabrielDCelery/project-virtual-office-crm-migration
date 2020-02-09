import { connect } from 'react-redux';
import {
  actionSetFieldAddNewContract,
  selectorGetContractRecommendedEndDate,
  selectorIsContractEndDateMatchingRecommendedEndDate
} from '~/store';

const mapStateToProps = state => {
  return {
    stateFormAddNewContract: state.forms.addNewContract,
    stateRecommendedEndDate: selectorGetContractRecommendedEndDate(state),
    stateIsContractEndDateMatchingRecommendedEndDate: selectorIsContractEndDateMatchingRecommendedEndDate(
      state
    )
  };
};

const mapActionsToProps = { actionSetFieldAddNewContract };

export default function ContractsAddContractDetailsState(ToWrapComponent) {
  let WrapperComponent = props => {
    const {
      actionSetFieldAddNewContract,
      stateFormAddNewContract,
      stateRecommendedEndDate,
      stateIsContractEndDateMatchingRecommendedEndDate
    } = props;

    const localStates = {};

    const localStateSetters = {};

    const localStateCallbacks = {};

    const storeStates = {
      formAddNewContract: stateFormAddNewContract,
      recommendedEndDate: stateRecommendedEndDate,
      isContractEndDateMatchingRecommendedEndDate: stateIsContractEndDateMatchingRecommendedEndDate
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
          storeAction,
          storeState
        }}
      />
    );
  };

  return connect(mapStateToProps, mapActionsToProps)(WrapperComponent);
}
