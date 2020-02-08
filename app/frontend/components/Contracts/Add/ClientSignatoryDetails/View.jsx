import { useTranslation } from 'react-i18next';
import { Box } from '@material-ui/core';
import ContainerFormNaturalPerson from '~/components/Container/FormNaturalPerson';
import UIFormStepAppBar from '~/components/UI/FormStepAppBar';
import UIFormTabs from '~/components/UI/FormTabs';
import { UupperCase } from '~/common/utils';
import ContainerFormExistingNaturalPerson from '~/components/Container/FormExistingNaturalPerson';
import ContainerFormAddNewNaturalPerson from '~/components/Container/FormAddNewNaturalPerson';
import UIFormPaper from '~/components/UI/FormPaper';

export default function ContractsAddClientSignatoryDetailsView({
  localState,
  localStateSetter,
  storeAction,
  storeState
}) {
  const { t } = useTranslation();

  return (
    <React.Fragment>
      <UIFormStepAppBar label={t('client signatory')} />

      <Box height="1em" />

      <UIFormTabs
        tabIndex={localState('tabIndex')}
        tabLabels={[UupperCase(t('choose existing')), UupperCase(t('add new'))]}
        handleSetTabIndex={localStateSetter('tabIndex')}
      />

      {localState('tabIndex') === 0 && (
        <UIFormPaper>
          <ContainerFormExistingNaturalPerson
            defaultNaturalPerson={
              storeState('formAddNewContract')['clientSignatory']
            }
            handleSelectNaturalPerson={value => {
              storeAction('setFieldAddNewContract')({
                fieldName: 'clientSignatory',
                fieldValue: value
              });
            }}
          />
        </UIFormPaper>
      )}

      {localState('tabIndex') === 1 && (
        <UIFormPaper>
          <ContainerFormAddNewNaturalPerson
            handleSubmitSuccessCallback={value => {
              storeAction('setFieldAddNewContract')({
                fieldName: 'clientSignatory',
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
