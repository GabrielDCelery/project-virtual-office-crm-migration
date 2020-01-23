import React, { useEffect, useCallback } from 'react';
import {
  ContractsAddNewFormStoreDecorator,
  LegalEntityTypesStoreDecorator
} from 'components';
import _ from 'lodash';

export default ToWrapComponent => {
  let ContractsAddNewBehaviour = props => {
    const {
      actionFindAllLegalEntityTypes,
      actionSetAddNewContractFormField,
      stateAddNewContractFormFieldGetter,
      stateIsFetchingLegalEntityTypesAjaxRequestInProgress,
      stateLegalEntityTypes
    } = props;

    const getters = {
      ajaxInProgress: {
        legalEntities: {
          fetchingTypes: stateIsFetchingLegalEntityTypesAjaxRequestInProgress
        }
      },
      legalEntities: {
        types: stateLegalEntityTypes
      },
      fields: {
        client: {
          name: stateAddNewContractFormFieldGetter('clientName'),
          type: stateAddNewContractFormFieldGetter('clientType')
        }
      }
    };

    const getter = (...paths) => {
      return _.get(getters, paths);
    };

    const handlers = {
      client: {
        actionSetClientName: useCallback(
          value => {
            actionSetAddNewContractFormField({
              what: 'clientName',
              value: value
            });
          },
          [actionSetAddNewContractFormField]
        ),
        actionSetClientType: useCallback(
          value => {
            actionSetAddNewContractFormField({
              what: 'clientType',
              value: value
            });
          },
          [actionSetAddNewContractFormField]
        )
      }
    };

    const handler = (...paths) => {
      return _.get(handlers, paths);
    };

    useEffect(() => {
      actionFindAllLegalEntityTypes();
    }, [actionFindAllLegalEntityTypes]);

    return <ToWrapComponent {...{ getter, handler }} />;
  };

  ContractsAddNewBehaviour = ContractsAddNewFormStoreDecorator(
    ContractsAddNewBehaviour
  );
  ContractsAddNewBehaviour = LegalEntityTypesStoreDecorator(
    ContractsAddNewBehaviour
  );

  return ContractsAddNewBehaviour;
};
