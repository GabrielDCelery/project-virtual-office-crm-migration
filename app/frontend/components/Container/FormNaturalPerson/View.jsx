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
import UIFormStepAppBar from '~/components/UI/FormStepAppBar';
import { UstartCase } from '~/common/utils';

const FormNaturalPersonView = ({
  actionRecommendationsGetFilteredAddresses,
  actionRecommendationsGetFilteredCities,
  actionRecommendationsGetFilteredCountries,
  actionSetFieldAddNewAddress,
  actionSubmitFormAddNewAddress,
  activeTab,
  bEnableSubmit,
  defaultAddress,
  handleSelectAddress,
  label,
  setActiveTab,
  stateFormAddNewAddress,
  stateRecommendedAddresses,
  stateRecommendedCities,
  stateRecommendedCountries
}) => {
  const { t } = useTranslation();

  return (
    <React.Fragment>
      <UIFormStepAppBar label={label} />

      <Box height="1em" />

      <Tabs
        indicatorColor="secondary"
        onChange={(event, newValue) => {
          setActiveTab(newValue);
        }}
        textColor="primary"
        value={activeTab}
        style={{ background: '#eee' }}
        variant="fullWidth"
      >
        <Tab label={t('choose existing').toUpperCase()} />
        <Tab label={t('add new').toUpperCase()} />
      </Tabs>

      <Paper>
        <Box padding="2em">
          {activeTab === 0 ? (
            <React.Fragment>
              <FormControl style={{ width: '100%' }}>
                <UIAjaxAutoCompleteField
                  label={UstartCase(t('address'))}
                  handleFilter={filterTerm => {
                    actionRecommendationsGetFilteredAddresses({
                      filterTerm
                    });
                  }}
                  handleSelect={value => {
                    handleSelectAddress ? handleSelectAddress(value) : null;
                  }}
                  options={stateRecommendedAddresses}
                  defaultValue={defaultAddress}
                />
              </FormControl>
            </React.Fragment>
          ) : null}
          {activeTab === 1 ? (
            <React.Fragment>
              <FormControl style={{ width: '100%' }}>
                <TextField
                  fullWidth={true}
                  id="client-address-postcode"
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
                  id="field-country"
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
                  id="field-city"
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
                  id="client-address-street"
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
                      setActiveTab(0);
                      handleSelectAddress ? handleSelectAddress(value) : null;
                    }
                  });
                }}
                fullWidth
                color="primary"
                variant="contained"
              >
                Save
              </Button>
            </React.Fragment>
          ) : null}
        </Box>
      </Paper>
    </React.Fragment>
  );
};

export default FormAddressView;
