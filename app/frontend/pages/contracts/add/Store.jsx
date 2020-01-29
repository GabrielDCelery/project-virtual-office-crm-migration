import { connect } from 'react-redux';
import { actionSetFieldAddNewContract } from '../../../store';

const mapStateToProps = state => {
  return {
    stateFormAddNewContract: state.forms.addNewContract
  };
};

const mapActionsToProps = {
  actionSetFieldAddNewContract
};

export default function AddContractStore(ToWrapComponent) {
  let WrapperComponent = props => {
    const { stateFormAddNewContract, actionSetFieldAddNewContract } = props;

    return (
      <ToWrapComponent
        {...props}
        {...{ actionSetFieldAddNewContract, stateFormAddNewContract }}
      />
    );
  };

  return connect(mapStateToProps, mapActionsToProps)(WrapperComponent);
}
