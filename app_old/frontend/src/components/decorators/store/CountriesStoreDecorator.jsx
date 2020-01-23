import React from 'react';
import { connect } from 'react-redux';
import store from 'store';

const {
  selectors: { selectorGetCountryRecommendations },
  actions: { actionFindAllCountries }
} = store;

const mapStateToProps = state => {
  return {
    stateIsCountriesAjaxRequestInProgress:
      state.countries.isAjaxRequestInProgress,
    stateCountryRecommendations: selectorGetCountryRecommendations(state)
  };
};

const mapActionsToProps = {
  actionFindAllCountries
};

export const CountriesStoreDecorator = ToWrapComponent => {
  return connect(
    mapStateToProps,
    mapActionsToProps
  )(props => <ToWrapComponent {...props} />);
};
