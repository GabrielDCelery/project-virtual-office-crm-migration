import { FormControl } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

import UIAjaxAutoCompleteField from '~/components/UI/AjaxAutoCompleteField';
import { UstartCase } from '~/common/utils';

const FormExistingAddressesView = ({
  //localState,
  //localStateCallback,
  //localStateSetter,
  propMethod,
  propState,
  storeAction,
  storeState
}) => {
  const { t } = useTranslation();

  return (
    <FormControl style={{ width: '100%' }}>
      <UIAjaxAutoCompleteField
        id="address"
        label={UstartCase(t('address'))}
        handleFilter={filterTerm => {
          storeAction('recommendationsGetFilteredAddresses')({
            filterTerm
          });
        }}
        handleSelect={value => {
          propMethod('handleSelectAddress')(value);
        }}
        options={storeState('recommendedAddresses')}
        defaultValue={propState('defaultAddress')}
      />
    </FormControl>
  );
};

export default FormExistingAddressesView;
