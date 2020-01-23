import React, { useCallback, useEffect, useState } from 'react';
import _ from 'lodash';
import {
  CitiesStoreDecorator,
  CountriesStoreDecorator,
  LegalEntitiesStoreDecorator,
  MailsStoreDecorator,
  MailsAddNewFormStoreDecorator
} from 'components';
import services from 'services';

export default ToWrapComponent => {
  let MailsAddNewBehaviour = props => {
    const {
      actionCreateNewMailSenderNameAndReFetch,
      actionCreateNewMailSubjectAndReFetch,
      actionFindAllCities,
      actionFindAllCountries,
      actionFindAllMailSenderNames,
      actionFindAllMailSenders,
      actionFindAllMailSubjects,
      actionGetLatestVersionsOfAllEntities,
      actionSetAddNewMailFormField,
      actionSubmitAddNewMailForm,
      stateAddNewMailFormFieldGetter,
      stateCityRecommendations,
      stateCountryRecommendations,
      stateIsCitiesAjaxRequestInProgress,
      stateIsCountriesAjaxRequestInProgress,
      stateIsCreateNewMailAjaxRequestInProgress,
      stateIsFetchingLegalEntities,
      stateIsFetchingMailSubjects,
      stateIsMailSenderNamesAjaxRequestInProgress,
      stateIsMailSendersAjaxRequestInProgress,
      stateLegalEntityRecommendations,
      stateMailSenderNameRecommendations,
      stateMailSenderRecommendations,
      stateMailSubjectRecommendations
    } = props;

    const [stateMailSenderActivePanel, setMailSenderActivePanel] = useState(0);

    const generateFileName = useCallback(() => {
      if (!stateAddNewMailFormFieldGetter('documentFile')) {
        return null;
      }

      const fileName = services.documents.nameGenerator.create([
        {
          type: 'date',
          value: stateAddNewMailFormFieldGetter('documentReceivedDate')
        },
        {
          type: 'string',
          value:
            stateMailSenderActivePanel === 0
              ? _.get(stateAddNewMailFormFieldGetter('existingSender'), 'name')
              : _.get(stateAddNewMailFormFieldGetter('newSenderName'), 'label')
        },
        {
          type: 'string',
          value: _.get(
            stateAddNewMailFormFieldGetter('documentSubject'),
            'label'
          )
        },
        {
          type: 'integer',
          value: new Date().getTime()
        },
        {
          type: 'string',
          value: _.get(stateAddNewMailFormFieldGetter('receiver'), 'name')
        }
      ]);

      return `${fileName}`;
    }, [stateAddNewMailFormFieldGetter, stateMailSenderActivePanel]);

    const getters = {
      ajaxInProgress: {
        createNewMail: stateIsCreateNewMailAjaxRequestInProgress,
        cityRecommendations: stateIsCitiesAjaxRequestInProgress,
        countryRecommendations: stateIsCountriesAjaxRequestInProgress,
        legalEntityRecommendations: stateIsFetchingLegalEntities,
        mailSenderNameRecommendations: stateIsMailSenderNamesAjaxRequestInProgress,
        mailSenderRecommendations: stateIsMailSendersAjaxRequestInProgress,
        mailSubjects: stateIsFetchingMailSubjects
      },
      recommendations: {
        cities: stateCityRecommendations,
        countries: stateCountryRecommendations,
        legalEntities: stateLegalEntityRecommendations,
        mailSenderNames: stateMailSenderNameRecommendations,
        mailSenders: stateMailSenderRecommendations,
        mailSubjects: stateMailSubjectRecommendations
      },
      fields: {
        mailReceiver: stateAddNewMailFormFieldGetter('receiver'),
        existingMailSender: stateAddNewMailFormFieldGetter('existingSender'),
        newMailSender: {
          city: stateAddNewMailFormFieldGetter('newSenderCity'),
          country: stateAddNewMailFormFieldGetter('newSenderCountry'),
          name: stateAddNewMailFormFieldGetter('newSenderName'),
          postcode: stateAddNewMailFormFieldGetter('newSenderPostcode'),
          street: stateAddNewMailFormFieldGetter('newSenderStreet')
        },
        mailDetails: {
          receivedDate: stateAddNewMailFormFieldGetter('documentReceivedDate'),
          subject: stateAddNewMailFormFieldGetter('documentSubject')
        },
        document: {
          file: stateAddNewMailFormFieldGetter('documentFile')
        }
      },
      layout: {
        mailSenderActivePanel: stateMailSenderActivePanel
      },
      callbacks: {
        document: {
          fileName: generateFileName
        },
        form: {
          isReadyToSubmit: useCallback(() => {
            const bFileUploaded = !!stateAddNewMailFormFieldGetter(
              'documentFile'
            );
            const bMailReceiverSet = !!stateAddNewMailFormFieldGetter(
              'receiver'
            );
            const bMailSenderSet =
              stateMailSenderActivePanel === 0
                ? !!stateAddNewMailFormFieldGetter('existingSender')
                : stateAddNewMailFormFieldGetter('newSenderCity') &&
                  stateAddNewMailFormFieldGetter('newSenderCountry') &&
                  stateAddNewMailFormFieldGetter('newSenderName') &&
                  stateAddNewMailFormFieldGetter('newSenderPostcode') &&
                  stateAddNewMailFormFieldGetter('newSenderStreet');
            const bMailSubjectSet = !!stateAddNewMailFormFieldGetter(
              'documentSubject'
            );
            const bReceivedDateSet = !!stateAddNewMailFormFieldGetter(
              'documentReceivedDate'
            );

            return (
              bFileUploaded &&
              bMailReceiverSet &&
              bMailSenderSet &&
              bMailSubjectSet &&
              bReceivedDateSet
            );
          }, [stateAddNewMailFormFieldGetter, stateMailSenderActivePanel]),
          submit: useCallback(() => {
            const formData = new FormData();

            formData.append(
              'document',
              JSON.stringify({
                name: generateFileName(),
                received: stateAddNewMailFormFieldGetter('documentReceivedDate')
              })
            );
            formData.append(
              'file',
              stateAddNewMailFormFieldGetter('documentFile'),
              stateAddNewMailFormFieldGetter('documentFile').name
            );
            formData.append(
              'receiver',
              stateAddNewMailFormFieldGetter('receiver')['value']
            );
            formData.append(
              'sender',
              stateAddNewMailFormFieldGetter('existingSender')
                ? stateAddNewMailFormFieldGetter('existingSender')['value']
                : JSON.stringify({
                    city: stateAddNewMailFormFieldGetter('newSenderCity')[
                      'value'
                    ],
                    country: stateAddNewMailFormFieldGetter('newSenderCountry')[
                      'value'
                    ],
                    name: stateAddNewMailFormFieldGetter('newSenderName')[
                      'value'
                    ],
                    postcode: stateAddNewMailFormFieldGetter(
                      'newSenderPostcode'
                    ),
                    street: stateAddNewMailFormFieldGetter('newSenderStreet')
                  })
            );
            formData.append(
              'subject',
              stateAddNewMailFormFieldGetter('documentSubject')['value']
            );

            actionSubmitAddNewMailForm(formData);
          }, [
            actionSubmitAddNewMailForm,
            generateFileName,
            stateAddNewMailFormFieldGetter
          ])
        }
      }
    };

    const getter = (...paths) => {
      return _.get(getters, paths);
    };

    const handlers = {
      mailReceiver: {
        setMailReceiver: useCallback(
          value => {
            (async () => {
              await actionSetAddNewMailFormField({
                what: 'receiver',
                value: value
              });
            })();
          },
          [actionSetAddNewMailFormField]
        )
      },
      existingMailSender: {
        actionSetSelectedMailSender: useCallback(
          value => {
            (async () => {
              await actionSetAddNewMailFormField({
                what: 'existingSender',
                value: value
              });
            })();
          },
          [actionSetAddNewMailFormField]
        )
      },
      newMailSender: {
        actionCreateNewMailSenderNameAndReFetch,
        actionSetSelectedCity: useCallback(
          value => {
            (async () => {
              await actionSetAddNewMailFormField({
                what: 'newSenderCity',
                value: value
              });
            })();
          },
          [actionSetAddNewMailFormField]
        ),
        actionSetSelectedCountry: useCallback(
          value => {
            (async () => {
              await actionSetAddNewMailFormField({
                what: 'newSenderCountry',
                value: value
              });
            })();
          },
          [actionSetAddNewMailFormField]
        ),
        actionSetSelectedMailSenderName: useCallback(
          value => {
            (async () => {
              await actionSetAddNewMailFormField({
                what: 'newSenderName',
                value: value
              });
            })();
          },
          [actionSetAddNewMailFormField]
        ),
        setPostcode: useCallback(
          value => {
            (async () => {
              await actionSetAddNewMailFormField({
                what: 'newSenderPostcode',
                value: value
              });
            })();
          },
          [actionSetAddNewMailFormField]
        ),
        setStreet: useCallback(
          value => {
            (async () => {
              await actionSetAddNewMailFormField({
                what: 'newSenderStreet',
                value: value
              });
            })();
          },
          [actionSetAddNewMailFormField]
        )
      },
      mailDetails: {
        actionCreateNewMailSubjectAndReFetch,
        actionSetSelectedMailSubject: useCallback(
          value => {
            (async () => {
              await actionSetAddNewMailFormField({
                what: 'documentSubject',
                value: value
              });
            })();
          },
          [actionSetAddNewMailFormField]
        ),
        setReceivedDate: useCallback(
          value => {
            (async () => {
              await actionSetAddNewMailFormField({
                what: 'documentReceivedDate',
                value: value
              });
            })();
          },
          [actionSetAddNewMailFormField]
        )
      },
      document: {
        setFile: useCallback(
          value => {
            (async () => {
              await actionSetAddNewMailFormField({
                what: 'documentFile',
                value: value
              });
            })();
          },
          [actionSetAddNewMailFormField]
        )
      },
      layout: {
        setMailSenderActivePanel
      }
    };

    const handler = (...paths) => {
      return _.get(handlers, paths);
    };

    useEffect(() => {
      (async () => {
        await actionFindAllCities();
        await actionFindAllCountries();
        await actionFindAllMailSenderNames();
        await actionFindAllMailSenders();
        await actionFindAllMailSubjects();
        await actionGetLatestVersionsOfAllEntities();
      })();
    }, [
      actionFindAllMailSubjects,
      actionFindAllCities,
      actionFindAllCountries,
      actionFindAllMailSenderNames,
      actionFindAllMailSenders,
      actionGetLatestVersionsOfAllEntities
    ]);

    return (
      <ToWrapComponent
        {...{
          getter,
          handler
        }}
      />
    );
  };

  MailsAddNewBehaviour = CitiesStoreDecorator(MailsAddNewBehaviour);
  MailsAddNewBehaviour = CountriesStoreDecorator(MailsAddNewBehaviour);
  MailsAddNewBehaviour = LegalEntitiesStoreDecorator(MailsAddNewBehaviour);
  MailsAddNewBehaviour = MailsStoreDecorator(MailsAddNewBehaviour);
  MailsAddNewBehaviour = MailsAddNewFormStoreDecorator(MailsAddNewBehaviour);

  return MailsAddNewBehaviour;
};
