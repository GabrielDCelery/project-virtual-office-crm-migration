import {
  Box,
  Button,
  FormControl,
  Paper,
  Tabs,
  Tab,
  TextField
} from '@material-ui/core';
import { useTranslation } from 'react-i18next';

import UIAjaxAutoCompleteField from '~/components/UI/AjaxAutoCompleteField';
import { UstartCase } from '~/common/utils';

const FormAddNewAddressView = ({
  actionRecommendationsGetFilteredCities,
  actionRecommendationsGetFilteredCountries,
  actionSetFieldAddNewAddress,
  actionSubmitFormAddNewAddress,
  bEnableSubmit,
  handleSubmitSuccessCallback,
  stateFormAddNewAddress,
  stateRecommendedCities,
  stateRecommendedCountries
}) => {
  const { t } = useTranslation();

  return (
    <React.Fragment>
      <FormControl style={{ width: '100%' }}>
        <TextField
          fullWidth={true}
          id="address-postcode"
          label={UstartCase(t('postcode'))}
          onChange={event => {
            actionSetFieldAddNewAddress({
              fieldName: 'postcode',
              fieldValue: event.target.value
            });
          }}
          defaultValue={stateFormAddNewAddress['postcode']}
          disabled={false}
        />
      </FormControl>

      <Box height="2em" />

      <FormControl style={{ width: '100%' }}>
        <UIAjaxAutoCompleteField
          id="address-country"
          handleFilter={filterTerm => {
            actionRecommendationsGetFilteredCountries({
              filterTerm
            });
          }}
          handleSelect={value => {
            actionSetFieldAddNewAddress({
              fieldName: 'country',
              fieldValue: value
                ? {
                    id: value.id,
                    name: value.name
                  }
                : null
            });
          }}
          bDisabled={!!stateFormAddNewAddress['city']}
          options={stateRecommendedCountries}
          defaultValue={stateFormAddNewAddress['country']}
          label={UstartCase(t('country'))}
        />
      </FormControl>

      <Box height="2em" />

      <FormControl style={{ width: '100%' }}>
        <UIAjaxAutoCompleteField
          id="address-city"
          handleFilter={filterTerm => {
            actionRecommendationsGetFilteredCities({
              filterTerm
            });
          }}
          handleSelect={value => {
            actionSetFieldAddNewAddress({
              fieldName: 'city',
              fieldValue: value
                ? {
                    id: value.id,
                    name: value.name
                  }
                : null
            });
            actionSetFieldAddNewAddress({
              fieldName: 'country',
              fieldValue: value
                ? {
                    id: value.countryId,
                    name: value.countryName
                  }
                : null
            });
          }}
          options={stateRecommendedCities}
          label={UstartCase(t('city'))}
        />
      </FormControl>

      <Box height="2em" />

      <FormControl style={{ width: '100%' }}>
        <TextField
          fullWidth={true}
          id="address-street"
          label={UstartCase(t('street'))}
          onChange={event => {
            actionSetFieldAddNewAddress({
              fieldName: 'street',
              fieldValue: event.target.value
            });
          }}
          defaultValue={stateFormAddNewAddress['street']}
          disabled={false}
        />
      </FormControl>

      <Box height="2em" />
      <Button
        disabled={!bEnableSubmit()}
        onClick={() => {
          actionSubmitFormAddNewAddress({
            postcode: stateFormAddNewAddress['postcode'],
            city: stateFormAddNewAddress['city']['id'],
            street: stateFormAddNewAddress['street'],
            successCallback: value => {
              handleSubmitSuccessCallback
                ? handleSubmitSuccessCallback(value)
                : null;
            }
          });
        }}
        fullWidth
        color="primary"
        variant="contained"
      >
        Save Address
      </Button>
    </React.Fragment>
  );
};

export default FormAddNewAddressView;
