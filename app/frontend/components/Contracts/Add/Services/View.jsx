import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup
} from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import UIFormStepAppBar from '~/components/UI/FormStepAppBar';
import UIFormPaper from '~/components/UI/FormPaper';
import {
  UstartCase,
  UstartCaseEveryWord,
  UtoggleElemInArray
} from '~/common/utils';

export default function ServiceProviderView({
  localStateCallback,
  storeState,
  storeAction
}) {
  const { t } = useTranslation();

  return (
    <React.Fragment>
      <UIFormStepAppBar label={t('services')} />

      <Box height="1em" />

      <UIFormPaper>
        <FormControl style={{ width: '100%' }}>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={localStateCallback('isEmailNotificationChecked')()}
                  onChange={() => {
                    const services = UtoggleElemInArray(
                      storeState('formAddNewContract')['services'],
                      'email notification of received mails'
                    );

                    storeAction('setFieldAddNewContract')({
                      fieldName: 'services',
                      fieldValue: services
                    });
                  }}
                  value="email notification of received mails"
                />
              }
              label={UstartCase(t('email notification of received mails'))}
            />
          </FormGroup>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={localStateCallback('isPostMailsMonthlyChecked')()}
                  onChange={() => {
                    const services = UtoggleElemInArray(
                      storeState('formAddNewContract')['services'],
                      'post mails monthly'
                    );
                    storeAction('setFieldAddNewContract')({
                      fieldName: 'services',
                      fieldValue: services
                    });
                  }}
                  value="post mails monthly"
                />
              }
              label={UstartCase(t('post mails monthly'))}
            />
          </FormGroup>
        </FormControl>
      </UIFormPaper>
    </React.Fragment>
  );
}
