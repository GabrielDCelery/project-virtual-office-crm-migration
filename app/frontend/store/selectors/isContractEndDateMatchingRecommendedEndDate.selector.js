import { createSelector } from 'reselect';
import { selectorGetContractRecommendedEndDate } from './getContractRecommendedEndDate.selector';

const getContractEndDate = state => {
  return state.forms.addNewContract.contractEndDate;
};

export const selectorIsContractEndDateMatchingRecommendedEndDate = createSelector(
  [getContractEndDate, selectorGetContractRecommendedEndDate],
  (contractEndDate, recommendedEndDate) => {
    return contractEndDate !== recommendedEndDate;
  }
);
