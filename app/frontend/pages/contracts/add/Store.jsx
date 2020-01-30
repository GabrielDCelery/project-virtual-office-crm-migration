import { connect } from 'react-redux';
import {
  actionSetFieldAddNewContract,
  actionRecommendationsGetAllAddresses,
  actionRecommendationsGetAllCountries,
  selectorGetAddressesRecommendations,
  selectorGetCountriesRecommendations
} from '../../../store';

const mapStateToProps = state => {
  return {
    stateFormAddNewContract: state.forms.addNewContract,
    stateRecommendedAddresses: selectorGetAddressesRecommendations(state),
    stateRecommendedCountries: selectorGetCountriesRecommendations(state)
  };
};

const mapActionsToProps = {
  actionRecommendationsGetAllAddresses,
  actionSetFieldAddNewContract,
  actionRecommendationsGetAllCountries
};

export default function AddContractStore(ToWrapComponent) {
  let WrapperComponent = props => {
    return <ToWrapComponent {...props} />;
  };

  return connect(mapStateToProps, mapActionsToProps)(WrapperComponent);
}
