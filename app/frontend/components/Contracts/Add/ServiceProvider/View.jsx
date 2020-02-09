import { Box } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import ContainerFormAddNewAddress from '~/components/Container/FormAddNewAddress';
import ContainerFormExistingAddresses from '~/components/Container/FormExistingAddresses';
import UIFormTabs from '~/components/UI/FormTabs';
import UIFormStepAppBar from '~/components/UI/FormStepAppBar';
import UIFormPaper from '~/components/UI/FormPaper';
import { UupperCase } from '~/common/utils';
import UIAjaxAutoCompleteField from '~/components/UI/AjaxAutoCompleteField';

export default function ServiceProviderView({
  localState,
  localStateSetter,
  storeState,
  storeAction
}) {
  const { t } = useTranslation();

  return (
    <React.Fragment>
      <UIFormStepAppBar label={t('service provider')} />

      <Box height="1em" />

      <Paper>
        <Box padding="2em">
          <FormControl style={{ width: '100%' }}>
            <UIAjaxAutoCompleteField
              id="service-provider"
              label={UstartCase(t('service provider'))}
              handleFilter={filterTerm => {
                storeAction('recommendationsGetFilteredAddresses')({
                  filterTerm
                });
              }}
              handleSelect={value => {
                propMethod('handleSelectAddress')(value);
              }}
              options={storeState('recommendedAddresses')}
              defaultValue={storeState('formAddNewContract')['serviceProvider']}
            />
          </FormControl>
        </Box>
      </Paper>
    </React.Fragment>
  );
}
