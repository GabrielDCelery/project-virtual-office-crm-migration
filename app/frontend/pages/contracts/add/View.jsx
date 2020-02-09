import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  Paper,
  Tab,
  Tabs,
  TextField,
  Toolbar,
  Typography
} from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import ContractsAddClientDetails from '~/components/Contracts/Add/ClientDetails';
import ContractsAddClientAddress from '~/components/Contracts/Add/ClientAddress';
import ConstractsAddClientSignatory from '~/components/Contracts/Add/ClientSignatory';
import ContractsAddClientSignatoryType from '~/components/Contracts/Add/ClientSignatoryType';
import ContractsAddContractDetails from '~/components/Contracts/Add/ContractDetails';
import ContractsAddServiceProvider from '~/components/Contracts/Add/ServiceProvider';
import ContractsAddServices from '~/components/Contracts/Add/Services';
import NavBar from '~/components/Nav/Bar';
import UIAppBar from '~/components/UI/AppBar';
import UIFormStepAppBar from '~/components/UI/FormStepAppBar';
import UILeftAlignedContainer from '~/components/UI/LeftAlignedContainer';
import { UstartCase } from '~/common/utils';

const TabPanelServiceProvider = ({
  actionSetFieldAddNewContract,
  stateFormAddNewContract,
  tabIndex,
  currentTabIndex,
  t
}) => {
  return (
    <React.Fragment>
      {tabIndex === currentTabIndex && (
        <React.Fragment>
          <UIFormStepAppBar label={t('service provider')} />

          <Box height="1em" />

          <Paper>
            <Box padding="2em">
              <FormControl style={{ width: '100%' }}>
                <TextField
                  fullWidth={true}
                  id="service-provider"
                  label={UstartCase(t('name'))}
                  onChange={() => {}}
                  value={''}
                  disabled={false}
                />
              </FormControl>
            </Box>
          </Paper>

          <Box height="2em" />

          <UIFormStepAppBar label={t('services')} />

          <Box height="1em" />

          <Paper>
            <Box padding="2em">
              <FormControl style={{ width: '100%' }}>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={false}
                        onChange={() => {}}
                        value="gilad"
                      />
                    }
                    label={UstartCase(
                      t('email notification of received mails')
                    )}
                  />
                </FormGroup>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={false}
                        onChange={() => {}}
                        value="gilad"
                      />
                    }
                    label={UstartCase(t('post mails monthly'))}
                  />
                </FormGroup>
              </FormControl>
            </Box>
          </Paper>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default function AddContractView({ localState, localStateSetter }) {
  const { t } = useTranslation();

  return (
    <Box display="flex">
      <NavBar />
      <Box position="relative" flexGrow={1}>
        <Box position="relative" width="100%">
          <Box height="2em" />
          <UILeftAlignedContainer maxWidth="lg">
            <UIAppBar position="static" background="primary">
              <Toolbar>
                <Typography component="h3">
                  {t('add new contract').toUpperCase()}
                </Typography>
              </Toolbar>
            </UIAppBar>

            <Box height="1em" />

            <Grid container spacing={2}>
              <Grid item xs={9}>
                {localState('tabIndex') === 0 && (
                  <React.Fragment>
                    <ContractsAddClientDetails />
                    <Box height="2em" />
                    <ContractsAddClientAddress />
                  </React.Fragment>
                )}

                {localState('tabIndex') === 1 && (
                  <React.Fragment>
                    <ConstractsAddClientSignatory />
                    <Box height="2em" />
                    <ContractsAddClientSignatoryType />
                  </React.Fragment>
                )}

                {localState('tabIndex') === 2 && (
                  <React.Fragment>
                    <ContractsAddServiceProvider />
                    <Box height="2em" />
                    <ContractsAddServices />
                  </React.Fragment>
                )}

                {localState('tabIndex') === 3 && (
                  <React.Fragment>
                    <ContractsAddContractDetails />
                  </React.Fragment>
                )}

                {localState('tabIndex') === 4 && (
                  <React.Fragment></React.Fragment>
                )}

                <Box height="1em" />
              </Grid>
              <Grid item xs={3}>
                <Tabs
                  orientation="vertical"
                  value={localState('tabIndex')}
                  onChange={(event, newValue) => {
                    localStateSetter('tabIndex')(newValue);
                  }}
                >
                  <Tab label={t('client')} />
                  <Tab label={t('client signatory')} />
                  <Tab label={t('service provider')} />
                  <Tab label={t('contract')} />
                  <Tab label={t('contacts')} />
                </Tabs>
              </Grid>
            </Grid>
          </UILeftAlignedContainer>
        </Box>
      </Box>
    </Box>
  );
}
