import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField
} from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { UstartCase, UstartCaseEveryWord, UupperCase } from '~/common/utils';
import ContainerFormAddNewAddress from '~/components/Container/FormAddNewAddress';
import ContainerFormExistingAddresses from '~/components/Container/FormExistingAddresses';
import UIFormPaper from '~/components/UI/FormPaper';
import UIFormTabs from '~/components/UI/FormTabs';

export default function FormNaturalPersonView({
  localState,
  localStateCallback,
  localStateSetter,
  propMethod,
  //propState,
  storeAction
  //storeState
}) {
  const { t } = useTranslation();

  return (
    <React.Fragment>
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
            localStateSetter('identifierDocumentNumber')(event.target.value);
          }}
          value={localState('identifierDocumentNumber')}
          disabled={false}
        />
      </FormControl>

      <Box height="2em" />

      <UIFormTabs
        tabIndex={localState('tabIndexAddress')}
        tabLabels={[
          UupperCase(t('choose existing address')),
          UupperCase(t('add new address'))
        ]}
        handleSetTabIndex={localStateSetter('tabIndexAddress')}
      />

      <Box height="1em" />

      {localState('tabIndexAddress') === 0 && (
        <ContainerFormExistingAddresses
          defaultAddress={localState('permanentAddress')}
          handleSelectAddress={value => {
            localStateSetter('permanentAddress')(value);
          }}
        />
      )}

      {localState('tabIndexAddress') === 1 && (
        <ContainerFormAddNewAddress
          handleSubmitSuccessCallback={value => {
            localStateSetter('permanentAddress')(value);
            localStateSetter('tabIndexAddress')(0);
          }}
        />
      )}

      <Box height="2em" />

      <Button
        disabled={!localStateCallback('bEnableSubmit')()}
        onClick={() => {
          storeAction('submitFormAddNewNaturalPerson')({
            firstName: localState('firstName'),
            lastName: localState('lastName'),
            motherName: localState('motherName'),
            birthDate: localState('birthDate'),
            identifierDocumentType: localState('identifierDocumentType'),
            identifierDocumentNumber: localState('identifierDocumentNumber'),
            permanentAddressId: localState('permanentAddress')['id'],
            successCallback: propMethod('handleSubmitSuccessCallback')
          });
        }}
        fullWidth
        color="primary"
        variant="contained"
      >
        Save Natural Person
      </Button>
    </React.Fragment>
  );
}
