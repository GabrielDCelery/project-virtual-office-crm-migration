import { useState } from 'react';
import { Tab, Tabs } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

export const UIUseExistingAddNewTab = ({
  ExistingTabContent,
  NewTabContent
}) => {
  const { t } = useTranslation();
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  return (
    <React.Fragment>
      <Tabs
        indicatorColor="secondary"
        onChange={(event, newValue) => {}}
        textColor="primary"
        value={currentTabIndex}
        style={{ background: '#eee' }}
        variant="fullWidth"
      >
        <Tab label={t('choose existing').toUpperCase()} />
        <Tab label={t('add new').toUpperCase()} />
      </Tabs>
      {currentTabIndex === 0 && ExistingTabContent}
      {currentTabIndex === 1 && NewTabContent}
    </React.Fragment>
  );
};

export default UIUseExistingAddNewTab;
