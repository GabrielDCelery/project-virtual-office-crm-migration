import { Box } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import UIFormStepAppBar from '~/components/UI/FormStepAppBar';
import UIFormPaper from '~/components/UI/FormPaper';
import ContainerFormExistingLegalEntity from '~/components/Container/FormExistingLegalEntity';

export default function ServiceProviderView({ storeState, storeAction }) {
  const { t } = useTranslation();

  return (
    <React.Fragment>
      <UIFormStepAppBar label={t('service provider')} />

      <Box height="1em" />

      <UIFormPaper>
        <ContainerFormExistingLegalEntity
          defaultLegalEntity={
            storeState('formAddNewContract')['serviceProvider']
          }
          handleSelectLegalEntity={value => {
            storeAction('setFieldAddNewContract')({
              fieldName: 'serviceProvider',
              fieldValue: value
            });
          }}
        />
      </UIFormPaper>
    </React.Fragment>
  );
}
