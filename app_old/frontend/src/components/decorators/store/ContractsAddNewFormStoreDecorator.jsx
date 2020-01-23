import React from 'react';
import { connect } from 'react-redux';
import store from 'store';

const {
  actions: { actionSetAddNewContractFormField, actionSubmitAddNewContractForm },
  selectors: { selectorAddNewContractFormFieldFactory }
} = store;

const mapStateToProps = state => {
  return {
    stateIsCreateNewContractAjaxRequestInProgress:
      state.contracts.addNewForm.isAjaxRequestInProgress,
    stateAddNewContractFormFieldGetter: selectorAddNewContractFormFieldFactory(
      state
    )
  };
};

const mapActionsToProps = {
  actionSetAddNewContractFormField,
  actionSubmitAddNewContractForm
};

export const ContractsAddNewFormStoreDecorator = ToWrapComponent => {
  return connect(
    mapStateToProps,
    mapActionsToProps
  )(props => <ToWrapComponent {...props} />);
};
