import { useCallback, useState } from 'react';
import { connect } from 'react-redux';
import {
  actionRecommendationsGetFilteredCities,
  actionRecommendationsGetFilteredCountries,
  actionSubmitFormAddNewAddress,
  selectorGetCitiesRecommendations,
  selectorGetCountriesRecommendations
} from '~/store';

const mapStateToProps = state => {
  return {
    stateRecommendedCities: selectorGetCitiesRecommendations(state),
    stateRecommendedCountries: selectorGetCountriesRecommendations(state)
  };
};

const mapActionsToProps = {
  actionSubmitFormAddNewAddress,
  actionRecommendationsGetFilteredCountries,
  actionRecommendationsGetFilteredCities
};

export default function FormAddNewAddressState(ToWrapComponent) {
  let WrapperComponent = props => {
    const {
      actionSubmitFormAddNewAddress,
      actionRecommendationsGetFilteredCountries,
      actionRecommendationsGetFilteredCities,
      stateRecommendedCities,
      stateRecommendedCountries,
      handleSubmitSuccessCallback
    } = props;

    const [postcode, setPostcode] = useState('');
    const [city, setCity] = useState(null);
    const [country, setCountry] = useState(null);
    const [street, setStreet] = useState('');

    const localStates = {
      postcode,
      city,
      country,
      street
    };

    const localStateSetters = {
      postcode: setPostcode,
      city: setCity,
      country: setCountry,
      street: setStreet
    };

    const localStateCallbacks = {
      bEnableSubmit: useCallback(() => {
        return (
          postcode !== '' && street !== '' && city !== null && country !== null
        );
      }, [postcode, street, city, country])
    };

    const storeStates = {
      recommendedCities: stateRecommendedCities,
      recommendedCountries: stateRecommendedCountries
    };

    const storeActions = {
      submitFormAddNewAddress: actionSubmitFormAddNewAddress,
      recommendationsGetFilteredCountries: actionRecommendationsGetFilteredCountries,
      recommendationsGetFilteredCities: actionRecommendationsGetFilteredCities
    };

    const propMethods = {
      handleSubmitSuccessCallback
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

    const propMethod = key => {
      return propMethods[key] ? propMethods[key] : () => {};
    };

    return (
      <ToWrapComponent
        {...{
          localState,
          localStateCallback,
          localStateSetter,
          propMethod,
          storeAction,
          storeState
        }}
      />
    );
  };

  return connect(mapStateToProps, mapActionsToProps)(WrapperComponent);
}
