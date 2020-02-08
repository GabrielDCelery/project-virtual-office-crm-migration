import { FormControl } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { UstartCase } from '~/common/utils';
import UIAjaxAutoCompleteField from '~/components/UI/AjaxAutoCompleteField';

export default function FormExistingNaturalPersonView({
  //localState,
  //localStateCallback,
  //localStateSetter,
  propMethod,
  propState,
  storeAction,
  storeState
}) {
  const { t } = useTranslation();

  return (
    <FormControl style={{ width: '100%' }}>
      <UIAjaxAutoCompleteField
        id="natural-person"
        label={UstartCase(t('natural person'))}
        handleFilter={filterTerm => {
          storeAction('recommendationsGetFilteredNaturalPeople')({
            filterTerm
          });
        }}
        handleSelect={value => {
          propMethod('handleSelectNaturalPerson')(value);
        }}
        options={storeState('recommendedNaturalPeople')}
        defaultValue={propState('defaultNaturalPerson')}
      />
    </FormControl>
  );
}
