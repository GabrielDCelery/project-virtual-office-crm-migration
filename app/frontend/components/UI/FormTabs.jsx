import { Tab, Tabs } from '@material-ui/core';

export default function UIFormTabs({ tabIndex, tabLabels, handleSetTabIndex }) {
  return (
    <Tabs
      indicatorColor="secondary"
      onChange={(event, newValue) => {
        handleSetTabIndex(newValue);
      }}
      textColor="primary"
      value={tabIndex}
      style={{ background: '#eee' }}
      variant="fullWidth"
    >
      {tabLabels.map((tabLabel, index) => {
        return <Tab key={`tab-${index}`} label={tabLabel} />;
      })}
    </Tabs>
  );
}
