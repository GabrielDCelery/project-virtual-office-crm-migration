import { useTranslation } from 'react-i18next';
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select
} from '@material-ui/core';
import UIFormPaper from '~/components/UI/FormPaper';
import UIFormStepAppBar from '~/components/UI/FormStepAppBar';
import { UstartCase, UstartCaseEveryWord } from '~/common/utils';

export default function ContractsAddClientSignatoryTypeDetailsView({
  storeAction,
  storeState
}) {
  const { t } = useTranslation();
  return (
    <React.Fragment>
      <UIFormStepAppBar label={t('client signatory type')} />

      <Box height="1em" />

      <UIFormPaper>
        <FormControl style={{ width: '100%' }}>
          <InputLabel id="signatory-type-label">
            {UstartCase(t('signatory type'))}
          </InputLabel>
          <Select
            labelId="signatory-type-label"
            id="signatory-type"
            value={storeState('formAddNewContract')['clientSignatoryType']}
            onChange={event => {
              storeAction('setFieldAddNewContract')({
                fieldName: 'clientSignatoryType',
                fieldValue: event.target.value
              });
            }}
          >
            <MenuItem value={'manager'}>
              {UstartCaseEveryWord(t('manager'))}
            </MenuItem>
          </Select>
        </FormControl>
      </UIFormPaper>
    </React.Fragment>
  );
}
