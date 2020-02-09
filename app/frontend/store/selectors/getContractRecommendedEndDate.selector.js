import { createSelector } from 'reselect';
import config from '~/config';
import services from '~/services';

const getContractStartDate = state => {
  return state.forms.addNewContract.contractStartDate;
};

const getContractRenewalPeriod = state => {
  return state.forms.addNewContract.contractRenewalPeriod;
};

export const selectorGetContractRecommendedEndDate = createSelector(
  [getContractStartDate, getContractRenewalPeriod],
  (contractStartDate, contractRenewalPeriod) => {
    const numOfMonths = config.values.stringsAsMonths[contractRenewalPeriod];
    const startDate = services.transformations.date.convertFieldValueToDateObj(
      contractStartDate
    );
    const endDate = services.calculations.date.addMonthsToDate(
      startDate,
      numOfMonths
    );

    return services.transformations.date.convertDateObjToFieldCompatible(
      endDate
    );
  }
);
