import { connect } from 'react-redux';
import {
  actionSetFieldAddNewAddress,
  actionRecommendationsGetFilteredCities,
  actionRecommendationsGetFilteredCountries,
  actionSubmitFormAddNewAddress,
  selectorGetCitiesRecommendations,
  selectorGetCountriesRecommendations
} from '~/store';

const mapStateToProps = state => {
  return {
    stateFormAddNewAddress: state.forms.addNewAddress,
    stateRecommendedCities: selectorGetCitiesRecommendations(state),
    stateRecommendedCountries: selectorGetCountriesRecommendations(state)
  };
};

const mapActionsToProps = {
  actionSubmitFormAddNewAddress,
  actionSetFieldAddNewAddress,
  actionRecommendationsGetFilteredCountries,
  actionRecommendationsGetFilteredCities
};

export default function FormAddNewAddressStore(ToWrapComponent) {
  let WrapperComponent = props => {
    return <ToWrapComponent {...props} />;
  };

  return connect(mapStateToProps, mapActionsToProps)(WrapperComponent);
}
