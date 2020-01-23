import { selectorGetCityRecommendations } from './cities';
import { selectorAddNewContractFormFieldFactory } from './contracts';
import { selectorGetCountryRecommendations } from './countries';
import {
  selectorGetLegalEntityRecommendations,
  selectorGetLegalEntityTypes
} from './legalEntities';
import {
  selectorGetMailSenderNameRecommendations,
  selectorGetMailSenderRecommendations,
  selectorGetMailSubjectRecommendations,
  selectorAddNewMailFormFieldFactory
} from './mails';
import {
  selectorIsUserAuthenticated,
  selectorIsUserAuthorized,
  selectorUserLoginFormFieldFactory
} from './user';

export default {
  selectorAddNewMailFormFieldFactory,
  selectorGetCityRecommendations,
  selectorGetCountryRecommendations,
  selectorGetMailSenderNameRecommendations,
  selectorGetMailSenderRecommendations,
  selectorGetMailSubjectRecommendations,
  selectorIsUserAuthenticated,
  selectorIsUserAuthorized,
  selectorUserLoginFormFieldFactory,
  selectorGetLegalEntityTypes,
  selectorAddNewContractFormFieldFactory,
  legalEntities: {
    getLegalEntityRecommendations: selectorGetLegalEntityRecommendations
  }
};
