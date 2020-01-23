import React from 'react';
import { connect } from 'react-redux';
import store from 'store';

const {
  actions: { actionFindAllLegalEntityTypes },
  selectors: { selectorGetLegalEntityTypes }
} = store;

const mapStateToProps = state => {
  return {
    stateIsFetchingLegalEntityTypesAjaxRequestInProgress:
      state.legalEntities.types.isAjaxRequestInProgress,
    stateLegalEntityTypes: selectorGetLegalEntityTypes(state)
  };
};

const mapActionsToProps = { actionFindAllLegalEntityTypes };

export const LegalEntityTypesStoreDecorator = ToWrapComponent => {
  return connect(
    mapStateToProps,
    mapActionsToProps
  )(props => <ToWrapComponent {...props} />);
};
