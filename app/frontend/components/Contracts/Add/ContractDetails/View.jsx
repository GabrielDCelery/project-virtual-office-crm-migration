import { useTranslation } from 'react-i18next';
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField
} from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import UIFormPaper from '~/components/UI/FormPaper';
import UIFormStepAppBar from '~/components/UI/FormStepAppBar';
import { UstartCase, UstartCaseEveryWord } from '~/common/utils';
import UIFlexboxCenterPositioner from '~/components/UI/FlexboxCenterPositioner';

export default function ContractsAddContractDetailsView({
  storeAction,
  storeState
}) {
  const { t } = useTranslation();

  return (
    <React.Fragment>
      <UIFormStepAppBar label={t('contract details')} />

      <Box height="1em" />

      <UIFormPaper>
        <FormControl style={{ width: '100%' }}>
          <InputLabel id="contract-renewal-period-label">
            {UstartCase(t('renewal period'))}
          </InputLabel>
          <Select
            labelId="contract-renewal-period-label"
            id="contract-renewal-period"
            value={storeState('formAddNewContract')['contractRenewalPeriod']}
            onChange={event => {
              storeAction('setFieldAddNewContract')({
                fieldName: 'contractRenewalPeriod',
                fieldValue: event.target.value
              });
            }}
          >
            <MenuItem value={'monthly'}>
              {UstartCaseEveryWord(t('monthly'))}
            </MenuItem>
            <MenuItem value={'quarterly'}>
              {UstartCaseEveryWord(t('quarterly'))}
            </MenuItem>
            <MenuItem value={'semi annually'}>
              {UstartCaseEveryWord(t('semi annually'))}
            </MenuItem>
            <MenuItem value={'annually'}>
              {UstartCaseEveryWord(t('annually'))}
            </MenuItem>
          </Select>
        </FormControl>

        <Box height="2em" />

        <FormControl style={{ width: '100%' }}>
          <TextField
            id="contract-renewal-fee-monthly"
            label={UstartCase(t('monthly renewal fee'))}
            type="number"
            value={
              storeState('formAddNewContract')['contractRenewalFeeMonthly']
            }
            onChange={event => {
              storeAction('setFieldAddNewContract')({
                fieldName: 'contractRenewalFeeMonthly',
                fieldValue: event.target.value
              });
            }}
          />
        </FormControl>

        <Box height="2em" />

        <FormControl style={{ width: '100%' }}>
          <TextField
            id="contract-start-date"
            label={UstartCase(t('start date'))}
            type="date"
            value={storeState('formAddNewContract')['contractStartDate']}
            onChange={event => {
              storeAction('setFieldAddNewContract')({
                fieldName: 'contractStartDate',
                fieldValue: event.target.value
              });
            }}
            InputLabelProps={{
              shrink: true
            }}
          />
        </FormControl>

        <Box height="2em" />

        <FormControl style={{ width: '100%' }}>
          <TextField
            id="contract-end-date"
            label={UstartCase(t('end date'))}
            type="date"
            value={storeState('formAddNewContract')['contractEndDate']}
            onChange={event => {
              storeAction('setFieldAddNewContract')({
                fieldName: 'contractEndDate',
                fieldValue: event.target.value
              });
            }}
            InputLabelProps={{
              shrink: true
            }}
          />
        </FormControl>

        <Box height="1em" />

        <Box display="flex">
          <Box flexGrow={5}>
            <Alert severity="info">
              {t('recommended end date')} {storeState('recommendedEndDate')}
            </Alert>
          </Box>
          <Box flexGrow={1}>
            <UIFlexboxCenterPositioner>
              <Button
                variant="outlined"
                color="secondary"
                size="small"
                onClick={() => {
                  storeAction('setFieldAddNewContract')({
                    fieldName: 'contractEndDate',
                    fieldValue: storeState('recommendedEndDate')
                  });
                }}
              >
                {t('use')}
              </Button>
            </UIFlexboxCenterPositioner>
          </Box>
        </Box>

        {storeState('isContractEndDateMatchingRecommendedEndDate') && (
          <React.Fragment>
            <Box height="1em" />
            <Alert severity="warning">
              {t('contract end date and recommended end dates do not match')}
            </Alert>
          </React.Fragment>
        )}

        <Box height="1em" />
      </UIFormPaper>
    </React.Fragment>
  );
}
