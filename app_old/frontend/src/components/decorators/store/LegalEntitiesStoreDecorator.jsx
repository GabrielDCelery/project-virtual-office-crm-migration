import React from 'react';
import { connect } from 'react-redux';
import store from 'store';

const {
  actions: { actionGetLatestVersionsOfAllEntities }
} = store;

const mapStateToProps = state => {
  return {
    stateIsFetchingLegalEntities: state.legalEntities.entities.isFetching,
    stateLegalEntityRecommendations: store.selectors.legalEntities.getLegalEntityRecommendations(
      state
    )
  };
};

const mapActionsToProps = {
  actionGetLatestVersionsOfAllEntities
};

export const LegalEntitiesStoreDecorator = ToWrapComponent => {
  return connect(
    mapStateToProps,
    mapActionsToProps
  )(props => <ToWrapComponent {...props} />);
};
