import { connect } from 'react-redux';
import { actionSetFieldAddNewContract } from '~/store';

const mapStateToProps = state => {
  return {
    stateFormAddNewContract: state.forms.addNewContract
  };
};

const mapActionsToProps = { actionSetFieldAddNewContract };

export default function ContractsAddClientDetailsState(ToWrapComponent) {
  let WrapperComponent = props => {
    const { actionSetFieldAddNewContract, stateFormAddNewContract } = props;

    const storeStates = {
      formAddNewContract: stateFormAddNewContract
    };

    const storeActions = {
      setFieldAddNewContract: actionSetFieldAddNewContract
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
          storeAction,
          storeState
        }}
      />
    );
  };

  return connect(mapStateToProps, mapActionsToProps)(WrapperComponent);
}
