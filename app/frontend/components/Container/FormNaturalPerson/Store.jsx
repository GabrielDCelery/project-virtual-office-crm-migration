import { connect } from 'react-redux';
import {
  actionSetFieldAddNewNaturalPerson,
  actionSubmitFormAddNewNaturalPerson,
  selectorGetNaturalPeopleRecommendations
} from '~/store';

const mapStateToProps = state => {
  return {
    stateFormAddNewAddress: state.forms.addNewNaturalPerson,
    stateRecommendedNaturalPeople: selectorGetNaturalPeopleRecommendations(
      state
    )
  };
};

const mapActionsToProps = {
  actionSetFieldAddNewNaturalPerson,
  actionSubmitFormAddNewNaturalPerson
};

export default function FormNaturalPersonStore(ToWrapComponent) {
  let WrapperComponent = props => {
    return <ToWrapComponent {...props} />;
  };

  return connect(mapStateToProps, mapActionsToProps)(WrapperComponent);
}
