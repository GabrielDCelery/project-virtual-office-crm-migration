import { connect } from 'react-redux';
import {
  actionSetFieldAddNewContract,
  actionRecommendationsGetFilteredCountries,
  selectorGetAddressesRecommendations,
  selectorGetCountriesRecommendations,
  actionRecommendationsGetFilteredAddresses
} from '../../../store';

const mapStateToProps = state => {
  return {
    stateFormAddNewContract: state.forms.addNewContract,
    stateRecommendedAddresses: selectorGetAddressesRecommendations(state),
    stateRecommendedCountries: selectorGetCountriesRecommendations(state)
  };
};

const mapActionsToProps = {
  actionSetFieldAddNewContract,
  actionRecommendationsGetFilteredCountries,
  actionRecommendationsGetFilteredAddresses
};

export default function AddContractStore(ToWrapComponent) {
  let WrapperComponent = props => {
    return <ToWrapComponent {...props} />;
  };

  return connect(mapStateToProps, mapActionsToProps)(WrapperComponent);
}
