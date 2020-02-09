import { FormControl } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import UIAjaxAutoCompleteField from '~/components/UI/AjaxAutoCompleteField';
import { UstartCaseEveryWord } from '~/common/utils';

const FormExistingLegalEntityView = ({
  propMethod,
  propState,
  storeAction,
  storeState
}) => {
  const { t } = useTranslation();

  return (
    <FormControl style={{ width: '100%' }}>
      <UIAjaxAutoCompleteField
        id="legal-entity"
        label={UstartCaseEveryWord(t('legal entity'))}
        handleFilter={filterTerm => {
          storeAction('recommendationsGetFilteredLegalEntities')({
            filterTerm
          });
        }}
        handleSelect={value => {
          propMethod('handleSelectLegalEntity')(value);
        }}
        options={storeState('recommendedLegalEntities')}
        defaultValue={propState('defaultLegalEntity')}
      />
    </FormControl>
  );
};

export default FormExistingLegalEntityView;
