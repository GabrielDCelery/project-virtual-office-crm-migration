import { useTranslation } from 'react-i18next';
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField
} from '@material-ui/core';
import UIFormStepAppBar from '~/components/UI/FormStepAppBar';
import { UstartCase, UstartCaseEveryWord } from '~/common/utils';

export default function ContractsAddClientDetailsView({
  storeAction,
  storeState
}) {
  const { t } = useTranslation();

  return (
    <React.Fragment>
      <UIFormStepAppBar label={t('client details')} />

      <Box height="1em" />

      <Paper>
        <Box padding="2em">
          <FormControl style={{ width: '100%' }}>
            <TextField
              fullWidth={true}
              id="client-long-name"
              label={UstartCase(t('long name'))}
              onChange={event => {
                storeAction('setFieldAddNewContract')({
                  fieldName: 'clientLongName',
                  fieldValue: event.target.value
                });
              }}
              value={storeState('formAddNewContract')['clientLongName']}
              disabled={false}
            />
          </FormControl>

          <Box height="2em" />

          <FormControl style={{ width: '100%' }}>
            <TextField
              fullWidth={true}
              id="client-short-name"
              label={UstartCase(t('short name'))}
              onChange={event => {
                storeAction('setFieldAddNewContract')({
                  fieldName: 'clientShortName',
                  fieldValue: event.target.value
                });
              }}
              value={storeState('formAddNewContract')['clientShortName']}
              disabled={false}
            />
          </FormControl>

          <Box height="2em" />

          <FormControl style={{ width: '100%' }}>
            <InputLabel id="demo-simple-select-label">
              {UstartCase(t('type'))}
            </InputLabel>
            <Select
              labelId="client-type-label"
              id="client-type"
              value={storeState('formAddNewContract')['clientType']}
              onChange={event => {
                storeAction('setFieldAddNewContract')({
                  fieldName: 'clientType',
                  fieldValue: event.target.value
                });
              }}
            >
              <MenuItem value={'limited liability company'}>
                {UstartCaseEveryWord(t('limited liability company'))}
              </MenuItem>
            </Select>
          </FormControl>

          <Box height="2em" />

          <FormControl style={{ width: '100%' }}>
            <TextField
              fullWidth={true}
              id="client-registration-id"
              label={UstartCase(t('registration id'))}
              onChange={event => {
                storeAction('setFieldAddNewContract')({
                  fieldName: 'clientRegistrationId',
                  fieldValue: event.target.value
                });
              }}
              value={storeState('formAddNewContract')['clientRegistrationId']}
              disabled={false}
            />
          </FormControl>

          <Box height="2em" />

          <FormControl style={{ width: '100%' }}>
            <TextField
              fullWidth={true}
              id="client-tax-id"
              label={UstartCase(t('tax id'))}
              onChange={event => {
                storeAction('setFieldAddNewContract')({
                  fieldName: 'clientTaxId',
                  fieldValue: event.target.value
                });
              }}
              value={storeState('formAddNewContract')['clientTaxId']}
              disabled={false}
            />
          </FormControl>

          <Box height="2em" />
        </Box>
      </Paper>
    </React.Fragment>
  );
}
