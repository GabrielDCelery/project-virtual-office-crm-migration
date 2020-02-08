import { Box, Button, FormControl, Paper, TextField } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

import UIAjaxAutoCompleteField from '~/components/UI/AjaxAutoCompleteField';
import { UstartCase } from '~/common/utils';

const FormAddNewAddressView = ({
  localState,
  localStateCallback,
  localStateSetter,
  propMethod,
  storeAction,
  storeState
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
            localStateSetter('postcode')(event.target.value);
          }}
          defaultValue={localState('postcode')}
          disabled={false}
        />
      </FormControl>

      <Box height="2em" />

      <FormControl style={{ width: '100%' }}>
        <UIAjaxAutoCompleteField
          id="address-country"
          handleFilter={filterTerm => {
            storeAction('recommendationsGetFilteredCountries')({
              filterTerm
            });
          }}
          handleSelect={value => {
            const country = value
              ? {
                  id: value.id,
                  name: value.name
                }
              : null;
            localStateSetter('country')(country);
          }}
          bDisabled={!!localState('city')}
          options={storeState('recommendedCountries')}
          defaultValue={localState('country')}
          label={UstartCase(t('country'))}
        />
      </FormControl>

      <Box height="2em" />

      <FormControl style={{ width: '100%' }}>
        <UIAjaxAutoCompleteField
          id="address-city"
          handleFilter={filterTerm => {
            storeAction('recommendationsGetFilteredCities')({
              filterTerm
            });
          }}
          handleSelect={value => {
            const city = value
              ? {
                  id: value.id,
                  name: value.name
                }
              : null;

            const country = value
              ? {
                  id: value.countryId,
                  name: value.countryName
                }
              : null;
            localStateSetter('city')(city);
            localStateSetter('country')(country);
          }}
          options={storeState('recommendedCities')}
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
            localStateSetter('street')(event.target.value);
          }}
          defaultValue={localState('street')}
          disabled={false}
        />
      </FormControl>

      <Box height="2em" />

      <Button
        disabled={!localStateCallback('bEnableSubmit')()}
        onClick={() => {
          storeAction('submitFormAddNewAddress')({
            postcode: localState('postcode'),
            city: localState('city')['id'],
            street: localState('street'),
            successCallback: propMethod('handleSubmitSuccessCallback')
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
