import { connect } from 'react-redux';
import {
  actionSetFieldAddNewAddress,
  actionRecommendationsGetFilteredAddresses,
  actionRecommendationsGetFilteredCities,
  actionRecommendationsGetFilteredCountries,
  actionSubmitFormAddNewAddress,
  selectorGetAddressesRecommendations,
  selectorGetCitiesRecommendations,
  selectorGetCountriesRecommendations
} from '~/store';

const mapStateToProps = state => {
  return {
    stateFormAddNewAddress: state.forms.addNewAddress,
    stateRecommendedAddresses: selectorGetAddressesRecommendations(state),
    stateRecommendedCities: selectorGetCitiesRecommendations(state),
    stateRecommendedCountries: selectorGetCountriesRecommendations(state)
  };
};

const mapActionsToProps = {
  actionSubmitFormAddNewAddress,
  actionSetFieldAddNewAddress,
  actionRecommendationsGetFilteredCountries,
  actionRecommendationsGetFilteredAddresses,
  actionRecommendationsGetFilteredCities
};

export default function FormAddressStore(ToWrapComponent) {
  let WrapperComponent = props => {
    return <ToWrapComponent {...props} />;
  };

  return connect(mapStateToProps, mapActionsToProps)(WrapperComponent);
}
