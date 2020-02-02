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

export default function AddContractStore(ToWrapComponent) {
  let WrapperComponent = props => {
    return <ToWrapComponent {...props} />;
  };

  return connect(mapStateToProps, mapActionsToProps)(WrapperComponent);
}
