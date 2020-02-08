import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Tab,
  Tabs,
  TextField,
  Toolbar,
  Typography
} from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { UstartCase, UstartCaseEveryWord, UupperCase } from '~/common/utils';
import ContainerFormAddNewAddress from '~/components/Container/FormAddNewAddress';
import ContainerFormExistingAddresses from '~/components/Container/FormExistingAddresses';
import UIAjaxAutoCompleteField from '~/components/UI/AjaxAutoCompleteField';
import UIFormPaper from '~/components/UI/FormPaper';
import UIFormTabs from '~/components/UI/FormTabs';

export default function FormNaturalPersonView({
  localState,
  localStateCallback,
  localStateSetter,
  propMethod,
  propState,
  storeAction,
  storeState
}) {
  const { t } = useTranslation();

  return (
    <React.Fragment>
      {localState('tabIndexNaturalPerson') === 0 && (
        <UIFormPaper>
          <FormControl style={{ width: '100%' }}>
            <UIAjaxAutoCompleteField
              id="natural-person"
              label={UstartCase(t('natural person'))}
              handleFilter={filterTerm => {
                storeAction('recommendationsGetFilteredNaturalPeople')({
                  filterTerm
                });
              }}
              handleSelect={value => {
                propMethod('handleSelectNaturalPerson')(value);
              }}
              options={storeState('recommendedNaturalPeople')}
              defaultValue={propState('defaultNaturalPerson')}
            />
          </FormControl>
        </UIFormPaper>
      )}

      <Paper>
        <Box padding="2em">
          <FormControl style={{ width: '100%' }}>
            <TextField
              fullWidth={true}
              id="first-name"
              label={UstartCase(t('first name'))}
              onChange={event => {
                localStateSetter('firstName')(event.target.value);
              }}
              value={localState('firstName')}
              disabled={false}
            />
          </FormControl>

          <Box height="2em" />

          <FormControl style={{ width: '100%' }}>
            <TextField
              fullWidth={true}
              id="last-name"
              label={UstartCase(t('last name'))}
              onChange={event => {
                localStateSetter('lastName')(event.target.value);
              }}
              value={localState('lastName')}
              disabled={false}
            />
          </FormControl>

          <Box height="2em" />

          <FormControl style={{ width: '100%' }}>
            <TextField
              fullWidth={true}
              id="mother-name"
              label={UstartCase(t('mother name'))}
              onChange={event => {
                localStateSetter('motherName')(event.target.value);
              }}
              value={localState('motherName')}
              disabled={false}
            />
          </FormControl>

          <Box height="2em" />

          <FormControl style={{ width: '100%' }}>
            <TextField
              id="birth-date"
              label={UstartCase(t('birth date'))}
              type="date"
              value={localState('birthDate')}
              onChange={event => {
                localStateSetter('birthDate')(event.target.value);
              }}
              InputLabelProps={{
                shrink: true
              }}
            />
          </FormControl>

          <Box height="2em" />

          <FormControl style={{ width: '100%' }}>
            <InputLabel id="identifier-document-type-label">
              {UstartCase(t('identifier document type'))}
            </InputLabel>
            <Select
              labelId="identifier-document-type-label"
              id="identifier-document-type"
              value={localState('identifierDocumentType')}
              onChange={event => {
                localStateSetter('identifierDocumentType')(event.target.value);
              }}
            >
              <MenuItem value={'passport'}>
                {UstartCaseEveryWord(t('passport'))}
              </MenuItem>
            </Select>
          </FormControl>

          <Box height="2em" />

          <FormControl style={{ width: '100%' }}>
            <TextField
              fullWidth={true}
              id="identifier-document-number"
              label={UstartCase(t('identifier document number'))}
              onChange={event => {
                localStateSetter('identifierDocumentNumber')(
                  event.target.value
                );
              }}
              value={localState('identifierDocumentNumber')}
              disabled={false}
            />
          </FormControl>
        </Box>

        <UIFormTabs
          tabIndex={localState('tabIndexAddress')}
          tabLabels={[
            UupperCase(t('choose existing address')),
            UupperCase(t('add new address'))
          ]}
          handleSetTabIndex={localStateSetter('tabIndexAddress')}
        />

        {localState('tabIndexAddress') === 0 && (
          <UIFormPaper>
            <ContainerFormExistingAddresses
              defaultAddress={localState('permanentAddress')}
              handleSelectAddress={value => {
                localStateSetter('permanentAddress')(value);
              }}
            />
          </UIFormPaper>
        )}

        {localState('tabIndexAddress') === 1 && (
          <UIFormPaper>
            <ContainerFormAddNewAddress
              handleSubmitSuccessCallback={value => {
                localStateSetter('permanentAddress')(value);
                localStateSetter('tabIndexAddress')(0);
              }}
            />
          </UIFormPaper>
        )}
      </Paper>
    </React.Fragment>
  );
}
