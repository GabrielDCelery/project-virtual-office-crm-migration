import { Box } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import ContainerFormAddNewAddress from '~/components/Container/FormAddNewAddress';
import ContainerFormExistingAddresses from '~/components/Container/FormExistingAddresses';
import UIFormTabs from '~/components/UI/FormTabs';
import UIFormStepAppBar from '~/components/UI/FormStepAppBar';
import UIFormPaper from '~/components/UI/FormPaper';
import { UupperCase } from '~/common/utils';

export default function ContractsAddClientAddressView({
  localState,
  localStateSetter,
  storeState,
  storeAction
}) {
  const { t } = useTranslation();

  return (
    <React.Fragment>
      <UIFormStepAppBar label={t('client address')} />

      <Box height="1em" />

      <UIFormTabs
        tabIndex={localState('tabIndex')}
        tabLabels={[UupperCase(t('choose existing')), UupperCase(t('add new'))]}
        handleSetTabIndex={localStateSetter('tabIndex')}
      />

      {localState('tabIndex') === 0 && (
        <UIFormPaper>
          <ContainerFormExistingAddresses
            defaultAddress={storeState('formAddNewContract')['clientAddress']}
            handleSelectAddress={value => {
              storeAction('setFieldAddNewContract')({
                fieldName: 'clientAddress',
                fieldValue: value
              });
            }}
          />
        </UIFormPaper>
      )}

      {localState('tabIndex') === 1 && (
        <UIFormPaper>
          <ContainerFormAddNewAddress
            handleSubmitSuccessCallback={value => {
              storeAction('setFieldAddNewContract')({
                fieldName: 'clientAddress',
                fieldValue: value
              });
              localStateSetter('tabIndex')(0);
            }}
          />
        </UIFormPaper>
      )}
    </React.Fragment>
  );
}
